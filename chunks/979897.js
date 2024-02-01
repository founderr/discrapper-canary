e = n.nmd(e), n("854508");
var o = o || function(e) {
  "use strict";
  if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var t = e.document,
      n = function() {
        return e.URL || e.webkitURL || e
      },
      o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      r = "download" in o,
      a = function(e) {
        var t = new MouseEvent("click");
        e.dispatchEvent(t)
      },
      i = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      u = e.webkitRequestFileSystem,
      s = e.requestFileSystem || u || e.mozRequestFileSystem,
      d = function(t) {
        (e.setImmediate || e.setTimeout)(function() {
          throw t
        }, 0)
      },
      l = "application/octet-stream",
      c = 0,
      f = function(e) {
        setTimeout(function() {
          "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
        }, 4e4)
      },
      p = function(e, t, n) {
        for (var o = (t = [].concat(t)).length; o--;) {
          var r = e["on" + t[o]];
          if ("function" == typeof r) try {
            r.call(e, n || e)
          } catch (e) {
            d(e)
          }
        }
      },
      O = function(e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
          type: e.type
        }) : e
      },
      h = function(t, d, h) {
        !h && (t = O(t));
        var D, S, v = this,
          _ = t.type,
          g = !1,
          y = function() {
            p(v, "writestart progress write writeend".split(" "))
          },
          b = function() {
            if (S && i && "undefined" != typeof FileReader) {
              var o = new FileReader;
              o.onloadend = function() {
                var e = o.result;
                S.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), v.readyState = v.DONE, y()
              }, o.readAsDataURL(t), v.readyState = v.INIT;
              return
            }(g || !D) && (D = n().createObjectURL(t)), S ? S.location.href = D : void 0 === e.open(D, "_blank") && i && (e.location.href = D), v.readyState = v.DONE, y(), f(D)
          },
          N = function(e) {
            return function() {
              if (v.readyState !== v.DONE) return e.apply(this, arguments)
            }
          },
          m = {
            create: !0,
            exclusive: !1
          };
        if (v.readyState = v.INIT, !d && (d = "download"), r) {
          D = n().createObjectURL(t), setTimeout(function() {
            o.href = D, o.download = d, a(o), y(), f(D), v.readyState = v.DONE
          });
          return
        }
        if (e.chrome && _ && _ !== l && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, l), g = !0), u && "download" !== d && (d += ".download"), (_ === l || u) && (S = e), !s) {
          b();
          return
        }
        c += t.size, s(e.TEMPORARY, c, N(function(e) {
          e.root.getDirectory("saved", m, N(function(e) {
            var n = function() {
              e.getFile(d, m, N(function(e) {
                e.createWriter(N(function(n) {
                  n.onwriteend = function(t) {
                    S.location.href = e.toURL(), v.readyState = v.DONE, p(v, "writeend", t), f(e)
                  }, n.onerror = function() {
                    var e = n.error;
                    e.code !== e.ABORT_ERR && b()
                  }, "writestart progress write abort".split(" ").forEach(function(e) {
                    n["on" + e] = v["on" + e]
                  }), n.write(t), v.abort = function() {
                    n.abort(), v.readyState = v.DONE
                  }, v.readyState = v.WRITING
                }), b)
              }), b)
            };
            e.getFile(d, {
              create: !1
            }, N(function(e) {
              e.remove(), n()
            }), N(function(e) {
              e.code === e.NOT_FOUND_ERR ? n() : b()
            }))
          }), b)
        }), b)
      },
      D = h.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
      return !n && (e = O(e)), navigator.msSaveOrOpenBlob(e, t || "download")
    } : (D.abort = function() {
      this.readyState = this.DONE, p(this, "abort")
    }, D.readyState = D.INIT = 0, D.WRITING = 1, D.DONE = 2, D.error = D.onwritestart = D.onprogress = D.onwrite = D.onabort = D.onerror = D.onwriteend = null, function(e, t, n) {
      return new h(e, t, n)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
void 0 !== e && e.exports ? e.exports.saveAs = o : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
  return o
})