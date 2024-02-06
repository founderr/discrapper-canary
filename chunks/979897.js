e = n.nmd(e), n("854508");
var i = i || function(e) {
  "use strict";
  if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var t = e.document,
      n = function() {
        return e.URL || e.webkitURL || e
      },
      i = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      r = "download" in i,
      o = function(e) {
        var t = new MouseEvent("click");
        e.dispatchEvent(t)
      },
      l = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      s = e.webkitRequestFileSystem,
      a = e.requestFileSystem || s || e.mozRequestFileSystem,
      u = function(t) {
        (e.setImmediate || e.setTimeout)(function() {
          throw t
        }, 0)
      },
      c = "application/octet-stream",
      d = 0,
      f = function(e) {
        setTimeout(function() {
          "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
        }, 4e4)
      },
      E = function(e, t, n) {
        for (var i = (t = [].concat(t)).length; i--;) {
          var r = e["on" + t[i]];
          if ("function" == typeof r) try {
            r.call(e, n || e)
          } catch (e) {
            u(e)
          }
        }
      },
      _ = function(e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
          type: e.type
        }) : e
      },
      h = function(t, u, h) {
        !h && (t = _(t));
        var I, p, S = this,
          T = t.type,
          N = !1,
          C = function() {
            E(S, "writestart progress write writeend".split(" "))
          },
          R = function() {
            if (p && l && "undefined" != typeof FileReader) {
              var i = new FileReader;
              i.onloadend = function() {
                var e = i.result;
                p.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), S.readyState = S.DONE, C()
              }, i.readAsDataURL(t), S.readyState = S.INIT;
              return
            }(N || !I) && (I = n().createObjectURL(t)), p ? p.location.href = I : void 0 === e.open(I, "_blank") && l && (e.location.href = I), S.readyState = S.DONE, C(), f(I)
          },
          v = function(e) {
            return function() {
              if (S.readyState !== S.DONE) return e.apply(this, arguments)
            }
          },
          g = {
            create: !0,
            exclusive: !1
          };
        if (S.readyState = S.INIT, !u && (u = "download"), r) {
          I = n().createObjectURL(t), setTimeout(function() {
            i.href = I, i.download = u, o(i), C(), f(I), S.readyState = S.DONE
          });
          return
        }
        if (e.chrome && T && T !== c && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, c), N = !0), s && "download" !== u && (u += ".download"), (T === c || s) && (p = e), !a) {
          R();
          return
        }
        d += t.size, a(e.TEMPORARY, d, v(function(e) {
          e.root.getDirectory("saved", g, v(function(e) {
            var n = function() {
              e.getFile(u, g, v(function(e) {
                e.createWriter(v(function(n) {
                  n.onwriteend = function(t) {
                    p.location.href = e.toURL(), S.readyState = S.DONE, E(S, "writeend", t), f(e)
                  }, n.onerror = function() {
                    var e = n.error;
                    e.code !== e.ABORT_ERR && R()
                  }, "writestart progress write abort".split(" ").forEach(function(e) {
                    n["on" + e] = S["on" + e]
                  }), n.write(t), S.abort = function() {
                    n.abort(), S.readyState = S.DONE
                  }, S.readyState = S.WRITING
                }), R)
              }), R)
            };
            e.getFile(u, {
              create: !1
            }, v(function(e) {
              e.remove(), n()
            }), v(function(e) {
              e.code === e.NOT_FOUND_ERR ? n() : R()
            }))
          }), R)
        }), R)
      },
      I = h.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
      return !n && (e = _(e)), navigator.msSaveOrOpenBlob(e, t || "download")
    } : (I.abort = function() {
      this.readyState = this.DONE, E(this, "abort")
    }, I.readyState = I.INIT = 0, I.WRITING = 1, I.DONE = 2, I.error = I.onwritestart = I.onprogress = I.onwrite = I.onabort = I.onerror = I.onwriteend = null, function(e, t, n) {
      return new h(e, t, n)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
void 0 !== e && e.exports ? e.exports.saveAs = i : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
  return i
})