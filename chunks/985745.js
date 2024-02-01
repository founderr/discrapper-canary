var i = n("390493");
n("860677"), n("854508"), ! function(e, t) {
  "use strict";
  if (!e.setImmediate) {
    var n, r = 1,
      l = {},
      a = !1,
      s = e.document,
      o = Object.getPrototypeOf && Object.getPrototypeOf(e);
    o = o && o.setTimeout ? o : e, "[object process]" === ({}).toString.call(e.process) ? function() {
      n = function(e) {
        i.nextTick(function() {
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
        i = function(n) {
          n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && c(+n.data.slice(t.length))
        };
      e.addEventListener ? e.addEventListener("message", i, !1) : e.attachEvent("onmessage", i), n = function(n) {
        e.postMessage(t + n, "*")
      }
    }() : e.MessageChannel ? function() {
      var e = new MessageChannel;
      e.port1.onmessage = function(e) {
        c(e.data)
      }, n = function(t) {
        e.port2.postMessage(t)
      }
    }() : s && "onreadystatechange" in s.createElement("script") ? function() {
      var e = s.documentElement;
      n = function(t) {
        var n = s.createElement("script");
        n.onreadystatechange = function() {
          c(t), n.onreadystatechange = null, e.removeChild(n), n = null
        }, e.appendChild(n)
      }
    }() : function() {
      n = function(e) {
        setTimeout(c, 0, e)
      }
    }(), o.setImmediate = function(e) {
      "function" != typeof e && (e = Function("" + e));
      for (var t = Array(arguments.length - 1), i = 0; i < t.length; i++) t[i] = arguments[i + 1];
      var a = {
        callback: e,
        args: t
      };
      return l[r] = a, n(r), r++
    }, o.clearImmediate = u
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