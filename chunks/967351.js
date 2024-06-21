n(47120), n(411104);
var i = n(413135),
  s = n(836560),
  l = n(392711),
  a = n.n(l),
  r = n(710845),
  o = n(998502),
  c = n(901077),
  u = n(76238),
  d = n(852926),
  E = n(981631);
let h = o.ZP.requireModule("discord_rpc").RPCIPC,
  _ = new r.Z("RPCServer:IPC"),
  I = {
    HANDSHAKE: 0,
    FRAME: 1,
    CLOSE: 2,
    PING: 3,
    PONG: 4
  };

function m(e, t) {
  null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : e._didHandshake = t
}

function g(e) {
  return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake
}

function p(e) {
  return new Promise((t, n) => {
    "string" == typeof e && (e = h.net.createConnection(e)), e.pause(), e.on("readable", () => {
      try {
        T(e)
      } catch (t) {
        e.end(N(I.CLOSE, {
          code: 1003,
          message: t.message
        })), e.destroy()
      }
    });
    let i = () => {
        try {
          e.end(), e.destroy()
        } catch (e) {}
      },
      s = Promise.race([new Promise(t => e.on("error", () => t())), new Promise((t, n) => {
        e.on("pong", () => n(Error("socket responded with pong")))
      }), new Promise((e, t) => {
        setTimeout(() => t(Error("socket alive timeout")), 1e3)
      })]).then(() => {
        i()
      }, e => {
        throw i(), e
      });
    return e.write(N(I.PING, a().uniqueId())), s.then(t, n)
  })
}

function N(e, t) {
  var n;
  t = JSON.stringify(t);
  let s = i.Buffer.byteLength(t),
    l = i.Buffer.alloc(8 + s);
  return l.writeInt32LE(e, 0), l.writeInt32LE(s, 4), l.write(t, 8, s), (n = l).buffer.slice(n.byteOffset, n.byteOffset + n.byteLength)
}

function T(e) {
  let t = e.read(8);
  if (null == t) return;
  let n = i.Buffer.from(t),
    s = n.readInt32LE(0),
    l = n.readInt32LE(4);
  if (!Object.values(I).includes(s) || l < 0) throw Error("protocol error");
  if (null == (t = e.read(l))) throw Error("data size does not match what was received");
  let a = JSON.parse((n = i.Buffer.from(t)).toString());
  switch (s) {
    case I.PING:
      e.emit("ping", a), e.write(N(I.PONG, a));
      break;
    case I.PONG:
      e.emit("pong", a);
      break;
    case I.HANDSHAKE:
      if (g(e)) throw Error("already did handshake");
      m(e, !0), e.emit("handshake", a);
      break;
    case I.FRAME:
      if (!g(e)) throw Error("did not handshake");
      e.emit("request", a);
      break;
    case I.CLOSE:
      e.end(), e.destroy()
  }
  T(e)
}
class C extends u.Z {
  send(e) {
    _.info("Socket Emit: ".concat(this.id), (0, c.Z)(e)), this.socket.write(N(I.FRAME, e))
  }
  close(e, t) {
    this.socket.end(N(I.CLOSE, {
      code: e,
      message: t
    })), this.socket.destroy()
  }
  constructor(e, t, n) {
    var i, s, l;
    super("ipc", t, n), i = this, l = void 0, (s = "socket") in i ? Object.defineProperty(i, s, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : i[s] = l, this.socket = e
  }
}
class S extends s.EventEmitter {
  handleConnection(e) {
    m(e, !1), e.pause(), e.on("readable", () => {
      try {
        T(e)
      } catch (t) {
        e.end(N(I.CLOSE, {
          code: E.$VG.CLOSE_UNSUPPORTED,
          message: t.message
        })), e.destroy()
      }
    }), e.once("handshake", t => {
      let n;
      let i = t.client_id,
        s = +t.v;
      try {
        n = new C(e, s, "json")
      } catch (t) {
        e.end(N(I.CLOSE, {
          code: t.code,
          message: t.message
        })), e.destroy();
        return
      }
      _.info("Socket Opened: ".concat(n.id)), e.on("error", e => _.error("Socket Error: ".concat(e.message))), e.on("close", () => {
        _.info("Socket Close: ".concat(n.id)), this.emit("disconnect", n)
      }), (0, d.em)(n, null, i).then(() => {
        e.on("request", e => {
          _.info("Socket Message: ".concat(n.id), (0, c.Z)(e)), this.emit("request", n, e)
        }), this.emit("connect", n)
      }).catch(e => {
        let {
          code: t,
          message: i
        } = e;
        return n.close(t, i)
      })
    })
  }
  constructor() {
    super();
    let e = h.net.createServer(e => this.handleConnection(e));
    e.on("error", e => _.error("Error: ".concat(e.message))), h.getAvailableSocket(p).then(t => {
      e.listen(t, () => {
        ("function" == typeof e.listening ? e.listening() : e.listening) && _.info("Starting on ".concat(e.address()))
      })
    })
  }
}
t.Z = new S