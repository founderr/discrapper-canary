"use strict";
let a, s;
n.r(t), n("47120"), n("610138"), n("216116"), n("78328"), n("815648"), n("653041"), n("411104");
var i = n("836560"),
  l = n("392711"),
  r = n.n(l),
  o = n("729594"),
  u = n("570140"),
  d = n("710845"),
  c = n("857192"),
  f = n("998502"),
  E = n("996106"),
  h = n("901077"),
  _ = n("76238"),
  C = n("852926"),
  m = n("186901"),
  S = n("981631"),
  p = n("413135").Buffer;

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
try {
  a = f.default.requireModule("discord_erlpack")
} catch (e) {
  try {
    a = f.default.requireModule("erlpack")
  } catch (e) {}
}
let I = f.default.requireModule("discord_rpc").RPCWebSocket,
  T = window.GLOBAL_ENV.MARKETING_ENDPOINT,
  A = new d.default("RPCServer:WSS"),
  N = [];

function v(e) {
  return "function" == typeof e ? e() : e
}

function R() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = e > 0 ? void 0 : () => {
      if (!v(s.listening)) return;
      let e = s.address().port;
      A.info("Starting on ".concat(e)), u.default.dispatch({
        type: "RPC_SERVER_READY",
        port: e
      })
    };
  s.listen(S.RPC_STARTING_PORT + e % S.RPC_PORT_RANGE, "127.0.0.1", t)
}

function L(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
    i = null != v(e.headers).origin ? {
      "Access-Control-Allow-Origin": v(e.headers).origin,
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    } : {};
  n = n ? JSON.stringify(n) : "", a = 200 === a && 0 === n.length ? 204 : a, t.setHeader("Content-Length", p.byteLength(n).toString()), t.setHeader("Content-Type", "application/json"), t.writeHead(a, {
    ...s,
    ...i
  }), t.end(n)
}

function O(e, t, n, a) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
  L(e, t, {
    code: s,
    message: a
  }, n)
}
class M extends _.default {
  send(e) {
    (c.default.isLoggingOverlayEvents || e.cmd !== S.RPCCommands.OVERLAY && e.evt !== S.RPCEvents.OVERLAY) && A.info("Socket Emit: ".concat(this.id), (0, h.default)(e)), null != a && "etf" === this.encoding ? this._socket.send(a.pack(e), {
      binary: !0
    }) : this._socket.send(JSON.stringify(e))
  }
  close(e, t) {
    this._socket.close(e, t)
  }
  constructor(e, t, n) {
    if (super("ws", t, n), g(this, "_socket", void 0), -1 === ["etf", "json"].indexOf(n)) throw new E.default({
      closeCode: S.RPCCloseCodes.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(n));
    if ("etf" === n && null == a) throw new E.default({
      closeCode: S.RPCCloseCodes.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this._socket = e
  }
}
class y extends _.default {
  send(e) {
    (c.default.isLoggingOverlayEvents || e.cmd !== S.RPCCommands.OVERLAY) && A.info("Socket Emit: ".concat(this.id), e), this._sendCallback(e)
  }
  close(e, t) {
    this._closeCallback(t, e)
  }
  constructor(e, t, n, a) {
    if (super("http", n, a), g(this, "_sendCallback", void 0), g(this, "_closeCallback", void 0), "json" !== a) throw new E.default({
      closeCode: S.RPCCloseCodes.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(a));
    this._sendCallback = e, this._closeCallback = t
  }
}
class P extends i.EventEmitter {
  handleRequest(e, t) {
    let [n, a] = v(e.url).split("?"), s = v(e.method);
    if ("/rpc" === n && "OPTIONS" === s) {
      L(e, t, {
        body: ""
      });
      return
    }
    let i = "POST" === s;
    if ("/rpc" === n && ("GET" === s || i)) {
      let n = new URLSearchParams(a),
        s = i ? v(e.headers)["content-type"].split("/")[1] : "json",
        r = function() {
          var e;
          let {
            protocol: a,
            host: s
          } = o.parse(null !== (e = n.get("callback")) && void 0 !== e ? e : "");
          a === location.protocol && s === location.host ? t.setHeader("Location", n.get("callback")) : t.setHeader("Location", T), t.writeHead(301), t.end()
        },
        u = new y(i ? L.bind(null, e, t) : r, i ? O.bind(null, e, t, 400) : r, Number(n.get("v")), s);
      if (i)(0, C.validateSocketClient)(u, v(e.headers).origin, n.get("client_id")).then(() => {
        let n = "";
        e.on("data", e => n += e), e.on("error", () => O(e, t, 500, "Internal Server Error")), e.on("end", () => this.handleMessage(u, n))
      }).catch(e => {
        let {
          code: t,
          message: n
        } = e;
        return u.close(t, n)
      });
      else {
        var l;
        u.authorization.scopes = [m.RPC_PRIVATE_LIMITED_SCOPE], this.handleMessage(u, decodeURIComponent(null !== (l = n.get("payload")) && void 0 !== l ? l : ""))
      }
      return
    }
    O(e, t, 404, "Not Found")
  }
  handleConnection(e) {
    var t, n;
    let a;
    let s = new URLSearchParams(v(e.upgradeReq).url.split("?")[1]),
      i = null !== (t = v(e.upgradeReq).headers.origin) && void 0 !== t ? t : "";
    try {
      a = new M(e, Number(s.get("v")), null !== (n = s.get("encoding")) && void 0 !== n ? n : "json")
    } catch (t) {
      e.close(t.code, t.message);
      return
    }
    A.info("Socket Opened: ".concat(a.id)), e.on("error", e => A.error("WS Error: ".concat(e.message))), e.on("close", (e, t) => {
      A.info("Socket Closed: ".concat(a.id, ", code ").concat(e, ", message ").concat(t)), r().remove(N, e => e === a), this.emit("disconnect", a)
    }), (0, C.validateSocketClient)(a, i, s.get("client_id")).then(() => {
      N.push(a), e.on("message", e => this.handleMessage(a, e)), this.emit("connect", a)
    }).catch(e => {
      let {
        code: t,
        message: n
      } = e;
      return a.close(t, n)
    })
  }
  handleMessage(e, t) {
    let n;
    try {
      if (null != a && "etf" === e.encoding) n = a.unpack(t);
      else if ("string" == typeof t) n = JSON.parse(t);
      else throw Error()
    } catch (t) {
      e.close(S.RPCCloseCodes.CLOSE_UNSUPPORTED, "Payload not ".concat(e.encoding));
      return
    }(c.default.isLoggingOverlayEvents || n.cmd !== S.RPCCommands.OVERLAY) && A.info("Socket Message: ".concat(e.id), (0, h.default)(n)), this.emit("request", e, n)
  }
  constructor() {
    var e;
    super();
    let t = 0;
    (s = I.http.createServer()).on("error", e => {
      A.error("Error: ".concat(e.message)), ("EADDRINUSE" === e.code || e.message.includes("EADDRINUSE")) && setTimeout(() => R(++t), 1e3)
    }), s.on("request", this.handleRequest.bind(this)), R(t);
    let n = {
      instanceId: null !== (e = s.instanceId) && void 0 !== e ? e : 0,
      server: s
    };
    new I.ws.Server(n).on("connection", e => this.handleConnection(e))
  }
}
t.default = new P