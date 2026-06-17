#!/usr/bin/env python3
"""
serve.py — local dev server for the Brand Studio.

Serves studio/ as a static site AND proxies AI calls to OpenAI using the key from
your environment / .env — so the key stays server-side and never reaches the browser.

Usage (from the repo root):
    python3 tools/serve.py            # http://localhost:8000
    PORT=9000 python3 tools/serve.py

Put your key in a .env file at the repo root (git-ignored):
    OPENAI_API_KEY=sk-...

Stdlib only — no dependencies.
"""
import http.server, json, os, socketserver, sys, urllib.error, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STUDIO = os.path.join(ROOT, 'studio')
PORT = int(os.environ.get('PORT', '8000'))

def load_env():
    path = os.path.join(ROOT, '.env')
    if os.path.exists(path):
        for line in open(path, encoding='utf-8'):
            line = line.strip()
            if not line or line.startswith('#') or '=' not in line:
                continue
            k, v = line.split('=', 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

load_env()

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=STUDIO, **kw)

    def _json(self, code, obj):
        body = json.dumps(obj).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path.rstrip('/') != '/api/openai':
            self._json(404, {'error': 'not found'}); return
        key = os.environ.get('OPENAI_API_KEY')
        if not key:
            self._json(500, {'error': 'OPENAI_API_KEY is not set. Add it to a .env file at the repo root.'}); return
        try:
            n = int(self.headers.get('Content-Length', 0))
            payload = self.rfile.read(n)            # forward the studio's request body verbatim
            req = urllib.request.Request(
                'https://api.openai.com/v1/chat/completions', data=payload,
                headers={'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key}, method='POST')
            with urllib.request.urlopen(req, timeout=90) as r:
                data = r.read()
            self.send_response(200); self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(data))); self.end_headers(); self.wfile.write(data)
        except urllib.error.HTTPError as e:
            body = e.read()
            self.send_response(e.code); self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(body))); self.end_headers(); self.wfile.write(body)
        except Exception as e:
            self._json(502, {'error': str(e)})

    def log_message(self, *a):  # quieter
        pass

class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True

if __name__ == '__main__':
    has_key = bool(os.environ.get('OPENAI_API_KEY'))
    print(f"Newtuple Brand Studio → http://localhost:{PORT}")
    print("  AI proxy:  /api/openai  (key from .env: {})".format('found' if has_key else 'NOT set — add OPENAI_API_KEY to .env'))
    try:
        Server(('127.0.0.1', PORT), Handler).serve_forever()
    except KeyboardInterrupt:
        print("\nstopped")
