"use strict";
let n, s;
a.r(t), a("47120"), a("610138"), a("216116"), a("78328"), a("815648"), a("653041"), a("411104");
var l = a("836560"),
  i = a("392711"),
  r = a.n(i),
  o = a("729594"),
  u = a("570140"),
  d = a("710845"),
  c = a("857192"),
  f = a("998502"),
  E = a("996106"),
  h = a("901077"),
  _ = a("76238"),
  C = a("852926"),
  m = a("186901"),
  S = a("981631"),
  p = a("413135").Buffer;

function I(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
try {
  n = f.default.requireModule("discord_erlpack")
} catch (e) {
  try {
    n = f.default.requireModule("erlpack")
  } catch (e) {}
}
let T = f.default.requireModule("discord_rpc").RPCWebSocket,
  g = window.GLOBAL_ENV.MARKETING_ENDPOINT,
  A = new d.default("RPCServer:WSS"),
  N = [];

function v(e) {
  return "function" == typeof e ? e() : e
}

function L() {
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

function R(e, t, a) {
  let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
    l = null != v(e.headers).origin ? {
      "Access-Control-Allow-Origin": v(e.headers).origin,
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    } : {};
  a = a ? JSON.stringify(a) : "", n = 200 === n && 0 === a.length ? 204 : n, t.setHeader("Content-Length", p.byteLength(a).toString()), t.setHeader("Content-Type", "application/json"), t.writeHead(n, {
    ...s,
    ...l
  }), t.end(a)
}

function O(e, t, a, n) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
  R(e, t, {
    code: s,
    message: n
  }, a)
}
class M extends _.default {
  send(e) {
    (c.default.isLoggingOverlayEvents || e.cmd !== S.RPCCommands.OVERLAY && e.evt !== S.RPCEvents.OVERLAY) && A.info("Socket Emit: ".concat(this.id), (0, h.default)(e)), null != n && "etf" === this.encoding ? this._socket.send(n.pack(e), {
      binary: !0
    }) : this._socket.send(JSON.stringify(e))
  }
  close(e, t) {
    this._socket.close(e, t)
  }
  constructor(e, t, a) {
    if (super("ws", t, a), I(this, "_socket", void 0), -1 === ["etf", "json"].indexOf(a)) throw new E.default({
      closeCode: S.RPCCloseCodes.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(a));
    if ("etf" === a && null == n) throw new E.default({
      closeCode: S.RPCCloseCodes.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this._socket = e
  }
}
class P extends _.default {
  send(e) {
    (c.default.isLoggingOverlayEvents || e.cmd !== S.RPCCommands.OVERLAY) && A.info("Socket Emit: ".concat(this.id), e), this._sendCallback(e)
  }
  close(e, t) {
    this._closeCallback(t, e)
  }
  constructor(e, t, a, n) {
    if (super("http", a, n), I(this, "_sendCallback", void 0), I(this, "_closeCallback", void 0), "json" !== n) throw new E.default({
      closeCode: S.RPCCloseCodes.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(n));
    this._sendCallback = e, this._closeCallback = t
  }
}
class y extends l.EventEmitter {
  handleRequest(e, t) {
    let [a, n] = v(e.url).split("?"), s = v(e.method);
    if ("/rpc" === a && "OPTIONS" === s) {
      R(e, t, {
        body: ""
      });
      return
    }
    let l = "POST" === s;
    if ("/rpc" === a && ("GET" === s || l)) {
      let a = new URLSearchParams(n),
        s = l ? v(e.headers)["content-type"].split("/")[1] : "json",
        r = function() {
          var e;
          let {
            protocol: n,
            host: s
          } = o.parse(null !== (e = a.get("callback")) && void 0 !== e ? e : "");
          n === location.protocol && s === location.host ? t.setHeader("Location", a.get("callback")) : t.setHeader("Location", g), t.writeHead(301), t.end()
        },
        u = new P(l ? R.bind(null, e, t) : r, l ? O.bind(null, e, t, 400) : r, Number(a.get("v")), s);
      if (l)(0, C.validateSocketClient)(u, v(e.headers).origin, a.get("client_id")).then(() => {
        let a = "";
        e.on("data", e => a += e), e.on("error", () => O(e, t, 500, "Internal Server Error")), e.on("end", () => this.handleMessage(u, a))
      }).catch(e => {
        let {
          code: t,
          message: a
        } = e;
        return u.close(t, a)
      });
      else {
        var i;
        u.authorization.scopes = [m.RPC_PRIVATE_LIMITED_SCOPE], this.handleMessage(u, decodeURIComponent(null !== (i = a.get("payload")) && void 0 !== i ? i : ""))
      }
      return
    }
    O(e, t, 404, "Not Found")
  }
  handleConnection(e) {
    var t, a;
    let n;
    let s = new URLSearchParams(v(e.upgradeReq).url.split("?")[1]),
      l = null !== (t = v(e.upgradeReq).headers.origin) && void 0 !== t ? t : "";
    try {
      n = new M(e, Number(s.get("v")), null !== (a = s.get("encoding")) && void 0 !== a ? a : "json")
    } catch (t) {
      e.close(t.code, t.message);
      return
    }
    A.info("Socket Opened: ".concat(n.id)), e.on("error", e => A.error("WS Error: ".concat(e.message))), e.on("close", (e, t) => {
      A.info("Socket Closed: ".concat(n.id, ", code ").concat(e, ", message ").concat(t)), r().remove(N, e => e === n), this.emit("disconnect", n)
    }), (0, C.validateSocketClient)(n, l, s.get("client_id")).then(() => {
      N.push(n), e.on("message", e => this.handleMessage(n, e)), this.emit("connect", n)
    }).catch(e => {
      let {
        code: t,
        message: a
      } = e;
      return n.close(t, a)
    })
  }
  handleMessage(e, t) {
    let a;
    try {
      if (null != n && "etf" === e.encoding) a = n.unpack(t);
      else if ("string" == typeof t) a = JSON.parse(t);
      else throw Error()
    } catch (t) {
      e.close(S.RPCCloseCodes.CLOSE_UNSUPPORTED, "Payload not ".concat(e.encoding));
      return
    }(c.default.isLoggingOverlayEvents || a.cmd !== S.RPCCommands.OVERLAY) && A.info("Socket Message: ".concat(e.id), (0, h.default)(a)), this.emit("request", e, a)
  }
  constructor() {
    var e;
    super();
    let t = 0;
    (s = T.http.createServer()).on("error", e => {
      A.error("Error: ".concat(e.message)), ("EADDRINUSE" === e.code || e.message.includes("EADDRINUSE")) && setTimeout(() => L(++t), 1e3)
    }), s.on("request", this.handleRequest.bind(this)), L(t);
    let a = {
      instanceId: null !== (e = s.instanceId) && void 0 !== e ? e : 0,
      server: s
    };
    new T.ws.Server(a).on("connection", e => this.handleConnection(e))
  }
}
t.default = new y