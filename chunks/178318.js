let s, i;
n(47120), n(610138), n(216116), n(78328), n(815648), n(653041), n(411104);
var l = n(836560),
  a = n(392711),
  r = n.n(a),
  o = n(729594),
  c = n(570140),
  u = n(710845),
  d = n(857192),
  E = n(998502),
  h = n(996106),
  _ = n(901077),
  I = n(76238),
  m = n(852926),
  T = n(186901),
  g = n(981631),
  p = n(413135).Buffer;

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
try {
  s = E.ZP.requireModule("discord_erlpack")
} catch (e) {
  try {
    s = E.ZP.requireModule("erlpack")
  } catch (e) {}
}
let S = E.ZP.requireModule("discord_rpc").RPCWebSocket,
  C = window.GLOBAL_ENV.MARKETING_ENDPOINT,
  A = new u.Z("RPCServer:WSS"),
  f = [];

function Z(e) {
  return "function" == typeof e ? e() : e
}

function L() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = e > 0 ? void 0 : () => {
      if (!Z(i.listening)) return;
      let e = i.address().port;
      A.info("Starting on ".concat(e)), c.Z.dispatch({
        type: "RPC_SERVER_READY",
        port: e
      })
    };
  i.listen(g.V6Z + e % g.frH, "127.0.0.1", t)
}

function O(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
    l = null != Z(e.headers).origin ? {
      "Access-Control-Allow-Origin": Z(e.headers).origin,
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    } : {};
  n = n ? JSON.stringify(n) : "", s = 200 === s && 0 === n.length ? 204 : s, t.setHeader("Content-Length", p.byteLength(n).toString()), t.setHeader("Content-Type", "application/json"), t.writeHead(s, {
    ...i,
    ...l
  }), t.end(n)
}

function v(e, t, n, s) {
  let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
  O(e, t, {
    code: i,
    message: s
  }, n)
}
class R extends I.Z {
  send(e) {
    (d.default.isLoggingOverlayEvents || e.cmd !== g.Etm.OVERLAY && e.evt !== g.zMe.OVERLAY) && A.info("Socket Emit: ".concat(this.id), (0, _.Z)(e)), null != s && "etf" === this.encoding ? this._socket.send(s.pack(e), {
      binary: !0
    }) : this._socket.send(JSON.stringify(e))
  }
  close(e, t) {
    this._socket.close(e, t)
  }
  constructor(e, t, n) {
    if (super("ws", t, n), N(this, "_socket", void 0), -1 === ["etf", "json"].indexOf(n)) throw new h.Z({
      closeCode: g.$VG.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(n));
    if ("etf" === n && null == s) throw new h.Z({
      closeCode: g.$VG.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this._socket = e
  }
}
class P extends I.Z {
  send(e) {
    (d.default.isLoggingOverlayEvents || e.cmd !== g.Etm.OVERLAY) && A.info("Socket Emit: ".concat(this.id), e), this._sendCallback(e)
  }
  close(e, t) {
    this._closeCallback(t, e)
  }
  constructor(e, t, n, s) {
    if (super("http", n, s), N(this, "_sendCallback", void 0), N(this, "_closeCallback", void 0), "json" !== s) throw new h.Z({
      closeCode: g.$VG.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(s));
    this._sendCallback = e, this._closeCallback = t
  }
}
class x extends l.EventEmitter {
  handleRequest(e, t) {
    let [n, s] = Z(e.url).split("?"), i = Z(e.method);
    if ("/rpc" === n && "OPTIONS" === i) {
      O(e, t, {
        body: ""
      });
      return
    }
    let l = "POST" === i;
    if ("/rpc" === n && ("GET" === i || l)) {
      let n = new URLSearchParams(s),
        i = l ? Z(e.headers)["content-type"].split("/")[1] : "json",
        r = function() {
          var e;
          let {
            protocol: s,
            host: i
          } = o.parse(null !== (e = n.get("callback")) && void 0 !== e ? e : "");
          s === location.protocol && i === location.host ? t.setHeader("Location", n.get("callback")) : t.setHeader("Location", C), t.writeHead(301), t.end()
        },
        c = new P(l ? O.bind(null, e, t) : r, l ? v.bind(null, e, t, 400) : r, Number(n.get("v")), i);
      if (l)(0, m.em)(c, Z(e.headers).origin, n.get("client_id")).then(() => {
        let n = "";
        e.on("data", e => n += e), e.on("error", () => v(e, t, 500, "Internal Server Error")), e.on("end", () => this.handleMessage(c, n))
      }).catch(e => {
        let {
          code: t,
          message: n
        } = e;
        return c.close(t, n)
      });
      else {
        var a;
        c.authorization.scopes = [T.CN], this.handleMessage(c, decodeURIComponent(null !== (a = n.get("payload")) && void 0 !== a ? a : ""))
      }
      return
    }
    v(e, t, 404, "Not Found")
  }
  handleConnection(e) {
    var t, n;
    let s;
    let i = new URLSearchParams(Z(e.upgradeReq).url.split("?")[1]),
      l = null !== (t = Z(e.upgradeReq).headers.origin) && void 0 !== t ? t : "";
    try {
      s = new R(e, Number(i.get("v")), null !== (n = i.get("encoding")) && void 0 !== n ? n : "json")
    } catch (t) {
      e.close(t.code, t.message);
      return
    }
    A.info("Socket Opened: ".concat(s.id)), e.on("error", e => A.error("WS Error: ".concat(e.message))), e.on("close", (e, t) => {
      A.info("Socket Closed: ".concat(s.id, ", code ").concat(e, ", message ").concat(t)), r().remove(f, e => e === s), this.emit("disconnect", s)
    }), (0, m.em)(s, l, i.get("client_id")).then(() => {
      f.push(s), e.on("message", e => this.handleMessage(s, e)), this.emit("connect", s)
    }).catch(e => {
      let {
        code: t,
        message: n
      } = e;
      return s.close(t, n)
    })
  }
  handleMessage(e, t) {
    let n;
    try {
      if (null != s && "etf" === e.encoding) n = s.unpack(t);
      else if ("string" == typeof t) n = JSON.parse(t);
      else throw Error()
    } catch (t) {
      e.close(g.$VG.CLOSE_UNSUPPORTED, "Payload not ".concat(e.encoding));
      return
    }(d.default.isLoggingOverlayEvents || n.cmd !== g.Etm.OVERLAY) && A.info("Socket Message: ".concat(e.id), (0, _.Z)(n)), this.emit("request", e, n)
  }
  constructor() {
    var e;
    super();
    let t = 0;
    (i = S.http.createServer()).on("error", e => {
      A.error("Error: ".concat(e.message)), ("EADDRINUSE" === e.code || e.message.includes("EADDRINUSE")) && setTimeout(() => L(++t), 1e3)
    }), i.on("request", this.handleRequest.bind(this)), L(t);
    let n = {
      instanceId: null !== (e = i.instanceId) && void 0 !== e ? e : 0,
      server: i
    };
    new S.ws.Server(n).on("connection", e => this.handleConnection(e))
  }
}
t.Z = new x