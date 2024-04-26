"use strict";
a.r(t), a("47120"), a("411104");
var n = a("413135"),
  s = a("836560"),
  l = a("392711"),
  i = a.n(l),
  r = a("710845"),
  o = a("998502"),
  u = a("901077"),
  d = a("76238"),
  c = a("852926"),
  f = a("981631");
let E = o.default.requireModule("discord_rpc").RPCIPC,
  h = new r.default("RPCServer:IPC"),
  _ = {
    HANDSHAKE: 0,
    FRAME: 1,
    CLOSE: 2,
    PING: 3,
    PONG: 4
  };

function C(e, t) {
  null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : e._didHandshake = t
}

function m(e) {
  return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake
}

function S(e) {
  return new Promise((t, a) => {
    "string" == typeof e && (e = E.net.createConnection(e)), e.pause(), e.on("readable", () => {
      try {
        I(e)
      } catch (t) {
        e.end(p(_.CLOSE, {
          code: 1003,
          message: t.message
        })), e.destroy()
      }
    });
    let n = () => {
        try {
          e.end(), e.destroy()
        } catch (e) {}
      },
      s = Promise.race([new Promise(t => e.on("error", () => t())), new Promise((t, a) => {
        e.on("pong", () => a(Error("socket responded with pong")))
      }), new Promise((e, t) => {
        setTimeout(() => t(Error("socket alive timeout")), 1e3)
      })]).then(() => {
        n()
      }, e => {
        throw n(), e
      });
    return e.write(p(_.PING, i().uniqueId())), s.then(t, a)
  })
}

function p(e, t) {
  var a;
  t = JSON.stringify(t);
  let s = n.Buffer.byteLength(t),
    l = n.Buffer.alloc(8 + s);
  return l.writeInt32LE(e, 0), l.writeInt32LE(s, 4), l.write(t, 8, s), (a = l).buffer.slice(a.byteOffset, a.byteOffset + a.byteLength)
}

function I(e) {
  let t = e.read(8);
  if (null == t) return;
  let a = n.Buffer.from(t),
    s = a.readInt32LE(0),
    l = a.readInt32LE(4);
  if (!Object.values(_).includes(s) || l < 0) throw Error("protocol error");
  if (null == (t = e.read(l))) throw Error("data size does not match what was received");
  let i = JSON.parse((a = n.Buffer.from(t)).toString());
  switch (s) {
    case _.PING:
      e.emit("ping", i), e.write(p(_.PONG, i));
      break;
    case _.PONG:
      e.emit("pong", i);
      break;
    case _.HANDSHAKE:
      if (m(e)) throw Error("already did handshake");
      C(e, !0), e.emit("handshake", i);
      break;
    case _.FRAME:
      if (!m(e)) throw Error("did not handshake");
      e.emit("request", i);
      break;
    case _.CLOSE:
      e.end(), e.destroy()
  }
  I(e)
}
class T extends d.default {
  send(e) {
    h.info("Socket Emit: ".concat(this.id), (0, u.default)(e)), this.socket.write(p(_.FRAME, e))
  }
  close(e, t) {
    this.socket.end(p(_.CLOSE, {
      code: e,
      message: t
    })), this.socket.destroy()
  }
  constructor(e, t, a) {
    var n, s, l;
    super("ipc", t, a), n = this, l = void 0, (s = "socket") in n ? Object.defineProperty(n, s, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : n[s] = l, this.socket = e
  }
}
class g extends s.EventEmitter {
  handleConnection(e) {
    C(e, !1), e.pause(), e.on("readable", () => {
      try {
        I(e)
      } catch (t) {
        e.end(p(_.CLOSE, {
          code: f.RPCCloseCodes.CLOSE_UNSUPPORTED,
          message: t.message
        })), e.destroy()
      }
    }), e.once("handshake", t => {
      let a;
      let n = t.client_id,
        s = +t.v;
      try {
        a = new T(e, s, "json")
      } catch (t) {
        e.end(p(_.CLOSE, {
          code: t.code,
          message: t.message
        })), e.destroy();
        return
      }
      h.info("Socket Opened: ".concat(a.id)), e.on("error", e => h.error("Socket Error: ".concat(e.message))), e.on("close", () => {
        h.info("Socket Close: ".concat(a.id)), this.emit("disconnect", a)
      }), (0, c.validateSocketClient)(a, null, n).then(() => {
        e.on("request", e => {
          h.info("Socket Message: ".concat(a.id), (0, u.default)(e)), this.emit("request", a, e)
        }), this.emit("connect", a)
      }).catch(e => {
        let {
          code: t,
          message: n
        } = e;
        return a.close(t, n)
      })
    })
  }
  constructor() {
    super();
    let e = E.net.createServer(e => this.handleConnection(e));
    e.on("error", e => h.error("Error: ".concat(e.message))), E.getAvailableSocket(S).then(t => {
      e.listen(t, () => {
        ("function" == typeof e.listening ? e.listening() : e.listening) && h.info("Starting on ".concat(e.address()))
      })
    })
  }
}
t.default = new g