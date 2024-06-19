n.d(e, {
  p: function() {
    return o
  }
});
var r = n(442853),
  i = n(432038),
  a = n(643487);
let s = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
class o {
  static __initStatic() {
    this.id = "TryCatch"
  }
  __init() {
    this.name = o.id
  }
  constructor(t) {
    o.prototype.__init.call(this), this._options = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...t
    }
  }
  setupOnce() {
    this._options.setTimeout && (0, r.hl)(a.m9, "setTimeout", l), this._options.setInterval && (0, r.hl)(a.m9, "setInterval", l), this._options.requestAnimationFrame && (0, r.hl)(a.m9, "requestAnimationFrame", u), this._options.XMLHttpRequest && "XMLHttpRequest" in a.m9 && (0, r.hl)(XMLHttpRequest.prototype, "send", c);
    let t = this._options.eventTarget;
    t && (Array.isArray(t) ? t : s).forEach(d)
  }
}

function l(t) {
  return function(...e) {
    let n = e[0];
    return e[0] = (0, a.re)(n, {
      mechanism: {
        data: {
          function: (0, i.$P)(t)
        },
        handled: !0,
        type: "instrument"
      }
    }), t.apply(this, e)
  }
}

function u(t) {
  return function(e) {
    return t.apply(this, [(0, a.re)(e, {
      mechanism: {
        data: {
          function: "requestAnimationFrame",
          handler: (0, i.$P)(t)
        },
        handled: !0,
        type: "instrument"
      }
    })])
  }
}

function c(t) {
  return function(...e) {
    let n = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(t => {
      t in n && "function" == typeof n[t] && (0, r.hl)(n, t, function(e) {
        let n = {
            mechanism: {
              data: {
                function: t,
                handler: (0, i.$P)(e)
              },
              handled: !0,
              type: "instrument"
            }
          },
          s = (0, r.HK)(e);
        return s && (n.mechanism.data.handler = (0, i.$P)(s)), (0, a.re)(e, n)
      })
    }), t.apply(this, e)
  }
}

function d(t) {
  let e = a.m9,
    n = e[t] && e[t].prototype;
  if (!!n && !!n.hasOwnProperty && !!n.hasOwnProperty("addEventListener"))(0, r.hl)(n, "addEventListener", function(e) {
    return function(n, r, s) {
      try {
        "function" == typeof r.handleEvent && (r.handleEvent = (0, a.re)(r.handleEvent, {
          mechanism: {
            data: {
              function: "handleEvent",
              handler: (0, i.$P)(r),
              target: t
            },
            handled: !0,
            type: "instrument"
          }
        }))
      } catch (t) {}
      return e.apply(this, [n, (0, a.re)(r, {
        mechanism: {
          data: {
            function: "addEventListener",
            handler: (0, i.$P)(r),
            target: t
          },
          handled: !0,
          type: "instrument"
        }
      }), s])
    }
  }), (0, r.hl)(n, "removeEventListener", function(t) {
    return function(e, n, r) {
      try {
        let i = n && n.__sentry_wrapped__;
        i && t.call(this, e, i, r)
      } catch (t) {}
      return t.call(this, e, n, r)
    }
  })
}
o.__initStatic()