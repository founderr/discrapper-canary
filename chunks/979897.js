e = n.nmd(e), n("854508");
var r = r || function(e) {
  "use strict";
  if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var t = e.document,
      n = function() {
        return e.URL || e.webkitURL || e
      },
      r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      i = "download" in r,
      s = function(e) {
        var t = new MouseEvent("click");
        e.dispatchEvent(t)
      },
      o = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      a = e.webkitRequestFileSystem,
      l = e.requestFileSystem || a || e.mozRequestFileSystem,
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
        for (var r = (t = [].concat(t)).length; r--;) {
          var i = e["on" + t[r]];
          if ("function" == typeof i) try {
            i.call(e, n || e)
          } catch (e) {
            u(e)
          }
        }
      },
      h = function(e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
          type: e.type
        }) : e
      },
      _ = function(t, u, _) {
        !_ && (t = h(t));
        var p, S, C = this,
          R = t.type,
          I = !1,
          A = function() {
            E(C, "writestart progress write writeend".split(" "))
          },
          v = function() {
            if (S && o && "undefined" != typeof FileReader) {
              var r = new FileReader;
              r.onloadend = function() {
                var e = r.result;
                S.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), C.readyState = C.DONE, A()
              }, r.readAsDataURL(t), C.readyState = C.INIT;
              return
            }(I || !p) && (p = n().createObjectURL(t)), S ? S.location.href = p : void 0 === e.open(p, "_blank") && o && (e.location.href = p), C.readyState = C.DONE, A(), f(p)
          },
          N = function(e) {
            return function() {
              if (C.readyState !== C.DONE) return e.apply(this, arguments)
            }
          },
          m = {
            create: !0,
            exclusive: !1
          };
        if (C.readyState = C.INIT, !u && (u = "download"), i) {
          p = n().createObjectURL(t), setTimeout(function() {
            r.href = p, r.download = u, s(r), A(), f(p), C.readyState = C.DONE
          });
          return
        }
        if (e.chrome && R && R !== c && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, c), I = !0), a && "download" !== u && (u += ".download"), (R === c || a) && (S = e), !l) {
          v();
          return
        }
        d += t.size, l(e.TEMPORARY, d, N(function(e) {
          e.root.getDirectory("saved", m, N(function(e) {
            var n = function() {
              e.getFile(u, m, N(function(e) {
                e.createWriter(N(function(n) {
                  n.onwriteend = function(t) {
                    S.location.href = e.toURL(), C.readyState = C.DONE, E(C, "writeend", t), f(e)
                  }, n.onerror = function() {
                    var e = n.error;
                    e.code !== e.ABORT_ERR && v()
                  }, "writestart progress write abort".split(" ").forEach(function(e) {
                    n["on" + e] = C["on" + e]
                  }), n.write(t), C.abort = function() {
                    n.abort(), C.readyState = C.DONE
                  }, C.readyState = C.WRITING
                }), v)
              }), v)
            };
            e.getFile(u, {
              create: !1
            }, N(function(e) {
              e.remove(), n()
            }), N(function(e) {
              e.code === e.NOT_FOUND_ERR ? n() : v()
            }))
          }), v)
        }), v)
      },
      p = _.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
      return !n && (e = h(e)), navigator.msSaveOrOpenBlob(e, t || "download")
    } : (p.abort = function() {
      this.readyState = this.DONE, E(this, "abort")
    }, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, function(e, t, n) {
      return new _(e, t, n)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
void 0 !== e && e.exports ? e.exports.saveAs = r : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
  return r
})