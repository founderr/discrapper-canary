let i, s;
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
  g = n(186901),
  p = n(981631),
  T = n(413135).Buffer;

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
try {
  i = E.ZP.requireModule("discord_erlpack")
} catch (e) {
  try {
    i = E.ZP.requireModule("erlpack")
  } catch (e) {}
}
let S = E.ZP.requireModule("discord_rpc").RPCWebSocket,
  C = window.GLOBAL_ENV.MARKETING_ENDPOINT,
  A = new u.Z("RPCServer:WSS"),
  f = [];

function Z(e) {
  return "function" == typeof e ? e() : e
}

function v() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = e > 0 ? void 0 : () => {
      if (!Z(s.listening)) return;
      let e = s.address().port;
      A.info("Starting on ".concat(e)), c.Z.dispatch({
        type: "RPC_SERVER_READY",
        port: e
      })
    };
  s.listen(p.V6Z + e % p.frH, "127.0.0.1", t)
}

function L(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
    l = null != Z(e.headers).origin ? {
      "Access-Control-Allow-Origin": Z(e.headers).origin,
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    } : {};
  n = n ? JSON.stringify(n) : "", i = 200 === i && 0 === n.length ? 204 : i, t.setHeader("Content-Length", T.byteLength(n).toString()), t.setHeader("Content-Type", "application/json"), t.writeHead(i, {
    ...s,
    ...l
  }), t.end(n)
}

function O(e, t, n, i) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
  L(e, t, {
    code: s,
    message: i
  }, n)
}
class R extends I.Z {
  send(e) {
    (d.default.isLoggingOverlayEvents || e.cmd !== p.Etm.OVERLAY && e.evt !== p.zMe.OVERLAY) && A.info("Socket Emit: ".concat(this.id), (0, _.Z)(e)), null != i && "etf" === this.encoding ? this._socket.send(i.pack(e), {
      binary: !0
    }) : this._socket.send(JSON.stringify(e))
  }
  close(e, t) {
    this._socket.close(e, t)
  }
  constructor(e, t, n) {
    if (super("ws", t, n), N(this, "_socket", void 0), -1 === ["etf", "json"].indexOf(n)) throw new h.Z({
      closeCode: p.$VG.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(n));
    if ("etf" === n && null == i) throw new h.Z({
      closeCode: p.$VG.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this._socket = e
  }
}
class x extends I.Z {
  send(e) {
    (d.default.isLoggingOverlayEvents || e.cmd !== p.Etm.OVERLAY) && A.info("Socket Emit: ".concat(this.id), e), this._sendCallback(e)
  }
  close(e, t) {
    this._closeCallback(t, e)
  }
  constructor(e, t, n, i) {
    if (super("http", n, i), N(this, "_sendCallback", void 0), N(this, "_closeCallback", void 0), "json" !== i) throw new h.Z({
      closeCode: p.$VG.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(i));
    this._sendCallback = e, this._closeCallback = t
  }
}
class M extends l.EventEmitter {
  handleRequest(e, t) {
    let [n, i] = Z(e.url).split("?"), s = Z(e.method);
    if ("/rpc" === n && "OPTIONS" === s) {
      L(e, t, {
        body: ""
      });
      return
    }
    let l = "POST" === s;
    if ("/rpc" === n && ("GET" === s || l)) {
      let n = new URLSearchParams(i),
        s = l ? Z(e.headers)["content-type"].split("/")[1] : "json",
        r = function() {
          var e;
          let {
            protocol: i,
            host: s
          } = o.parse(null !== (e = n.get("callback")) && void 0 !== e ? e : "");
          i === location.protocol && s === location.host ? t.setHeader("Location", n.get("callback")) : t.setHeader("Location", C), t.writeHead(301), t.end()
        },
        c = new x(l ? L.bind(null, e, t) : r, l ? O.bind(null, e, t, 400) : r, Number(n.get("v")), s);
      if (l)(0, m.em)(c, Z(e.headers).origin, n.get("client_id")).then(() => {
        let n = "";
        e.on("data", e => n += e), e.on("error", () => O(e, t, 500, "Internal Server Error")), e.on("end", () => this.handleMessage(c, n))
      }).catch(e => {
        let {
          code: t,
          message: n
        } = e;
        return c.close(t, n)
      });
      else {
        var a;
        c.authorization.scopes = [g.CN], this.handleMessage(c, decodeURIComponent(null !== (a = n.get("payload")) && void 0 !== a ? a : ""))
      }
      return
    }
    O(e, t, 404, "Not Found")
  }
  handleConnection(e) {
    var t, n;
    let i;
    let s = new URLSearchParams(Z(e.upgradeReq).url.split("?")[1]),
      l = null !== (t = Z(e.upgradeReq).headers.origin) && void 0 !== t ? t : "";
    try {
      i = new R(e, Number(s.get("v")), null !== (n = s.get("encoding")) && void 0 !== n ? n : "json")
    } catch (t) {
      e.close(t.code, t.message);
      return
    }
    A.info("Socket Opened: ".concat(i.id)), e.on("error", e => A.error("WS Error: ".concat(e.message))), e.on("close", (e, t) => {
      A.info("Socket Closed: ".concat(i.id, ", code ").concat(e, ", message ").concat(t)), r().remove(f, e => e === i), this.emit("disconnect", i)
    }), (0, m.em)(i, l, s.get("client_id")).then(() => {
      f.push(i), e.on("message", e => this.handleMessage(i, e)), this.emit("connect", i)
    }).catch(e => {
      let {
        code: t,
        message: n
      } = e;
      return i.close(t, n)
    })
  }
  handleMessage(e, t) {
    let n;
    try {
      if (null != i && "etf" === e.encoding) n = i.unpack(t);
      else if ("string" == typeof t) n = JSON.parse(t);
      else throw Error()
    } catch (t) {
      e.close(p.$VG.CLOSE_UNSUPPORTED, "Payload not ".concat(e.encoding));
      return
    }(d.default.isLoggingOverlayEvents || n.cmd !== p.Etm.OVERLAY) && A.info("Socket Message: ".concat(e.id), (0, _.Z)(n)), this.emit("request", e, n)
  }
  constructor() {
    var e;
    super();
    let t = 0;
    (s = S.http.createServer()).on("error", e => {
      A.error("Error: ".concat(e.message)), ("EADDRINUSE" === e.code || e.message.includes("EADDRINUSE")) && setTimeout(() => v(++t), 1e3)
    }), s.on("request", this.handleRequest.bind(this)), v(t);
    let n = {
      instanceId: null !== (e = s.instanceId) && void 0 !== e ? e : 0,
      server: s
    };
    new S.ws.Server(n).on("connection", e => this.handleConnection(e))
  }
}
t.Z = new M