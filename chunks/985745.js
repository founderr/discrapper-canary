var r = n("390493");
n("860677"), n("854508"), ! function(e, t) {
  "use strict";
  if (!e.setImmediate) {
    var n, i = 1,
      l = {},
      a = !1,
      o = e.document,
      s = Object.getPrototypeOf && Object.getPrototypeOf(e);
    s = s && s.setTimeout ? s : e, "[object process]" === ({}).toString.call(e.process) ? function() {
      n = function(e) {
        r.nextTick(function() {
          c(e)
        })
      }
    }() : function() {
      if (e.postMessage && !e.importScripts) {
        var t = !0,
          n = e.onmessage;
        return e.onmessage = function() {
          t = !1
        }, e.postMessage("", "*"), e.onmessage = n, t
      }
    }() ? function() {
      var t = "setImmediate$" + Math.random() + "$",
        r = function(n) {
          n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && c(+n.data.slice(t.length))
        };
      e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), n = function(n) {
        e.postMessage(t + n, "*")
      }
    }() : e.MessageChannel ? function() {
      var e = new MessageChannel;
      e.port1.onmessage = function(e) {
        c(e.data)
      }, n = function(t) {
        e.port2.postMessage(t)
      }
    }() : o && "onreadystatechange" in o.createElement("script") ? function() {
      var e = o.documentElement;
      n = function(t) {
        var n = o.createElement("script");
        n.onreadystatechange = function() {
          c(t), n.onreadystatechange = null, e.removeChild(n), n = null
        }, e.appendChild(n)
      }
    }() : function() {
      n = function(e) {
        setTimeout(c, 0, e)
      }
    }(), s.setImmediate = function(e) {
      "function" != typeof e && (e = Function("" + e));
      for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
      var a = {
        callback: e,
        args: t
      };
      return l[i] = a, n(i), i++
    }, s.clearImmediate = u
  }

  function u(e) {
    delete l[e]
  }

  function c(e) {
    if (a) setTimeout(c, 0, e);
    else {
      var t = l[e];
      if (t) {
        a = !0;
        try {
          ! function(e) {
            var t = e.callback,
              n = e.args;
            switch (n.length) {
              case 0:
                t();
                break;
              case 1:
                t(n[0]);
                break;
              case 2:
                t(n[0], n[1]);
                break;
              case 3:
                t(n[0], n[1], n[2]);
                break;
              default:
                t.apply(void 0, n)
            }
          }(t)
        } finally {
          u(e), a = !1
        }
      }
    }
  }
}("undefined" == typeof self ? void 0 === n.g ? this : n.g : self)