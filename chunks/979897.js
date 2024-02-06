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
      s = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      l = e.webkitRequestFileSystem,
      a = e.requestFileSystem || l || e.mozRequestFileSystem,
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
      I = function(t, u, I) {
        !I && (t = _(t));
        var h, S, p = this,
          T = t.type,
          N = !1,
          C = function() {
            E(p, "writestart progress write writeend".split(" "))
          },
          R = function() {
            if (S && s && "undefined" != typeof FileReader) {
              var i = new FileReader;
              i.onloadend = function() {
                var e = i.result;
                S.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), p.readyState = p.DONE, C()
              }, i.readAsDataURL(t), p.readyState = p.INIT;
              return
            }(N || !h) && (h = n().createObjectURL(t)), S ? S.location.href = h : void 0 === e.open(h, "_blank") && s && (e.location.href = h), p.readyState = p.DONE, C(), f(h)
          },
          v = function(e) {
            return function() {
              if (p.readyState !== p.DONE) return e.apply(this, arguments)
            }
          },
          A = {
            create: !0,
            exclusive: !1
          };
        if (p.readyState = p.INIT, !u && (u = "download"), r) {
          h = n().createObjectURL(t), setTimeout(function() {
            i.href = h, i.download = u, o(i), C(), f(h), p.readyState = p.DONE
          });
          return
        }
        if (e.chrome && T && T !== c && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, c), N = !0), l && "download" !== u && (u += ".download"), (T === c || l) && (S = e), !a) {
          R();
          return
        }
        d += t.size, a(e.TEMPORARY, d, v(function(e) {
          e.root.getDirectory("saved", A, v(function(e) {
            var n = function() {
              e.getFile(u, A, v(function(e) {
                e.createWriter(v(function(n) {
                  n.onwriteend = function(t) {
                    S.location.href = e.toURL(), p.readyState = p.DONE, E(p, "writeend", t), f(e)
                  }, n.onerror = function() {
                    var e = n.error;
                    e.code !== e.ABORT_ERR && R()
                  }, "writestart progress write abort".split(" ").forEach(function(e) {
                    n["on" + e] = p["on" + e]
                  }), n.write(t), p.abort = function() {
                    n.abort(), p.readyState = p.DONE
                  }, p.readyState = p.WRITING
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
      h = I.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
      return !n && (e = _(e)), navigator.msSaveOrOpenBlob(e, t || "download")
    } : (h.abort = function() {
      this.readyState = this.DONE, E(this, "abort")
    }, h.readyState = h.INIT = 0, h.WRITING = 1, h.DONE = 2, h.error = h.onwritestart = h.onprogress = h.onwrite = h.onabort = h.onerror = h.onwriteend = null, function(e, t, n) {
      return new I(e, t, n)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
void 0 !== e && e.exports ? e.exports.saveAs = i : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
  return i
})