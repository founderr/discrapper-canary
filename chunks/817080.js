var r =
    r ||
    (function (e) {
        if (!('undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var r = e.document,
                t = function () {
                    return e.URL || e.webkitURL || e;
                },
                n = r.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                a = 'download' in n,
                i = function (e) {
                    var r = new MouseEvent('click');
                    e.dispatchEvent(r);
                },
                o = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                f = e.webkitRequestFileSystem,
                s = e.requestFileSystem || f || e.mozRequestFileSystem,
                l = function (r) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw r;
                    }, 0);
                },
                c = 'application/octet-stream',
                u = 0,
                d = function (e) {
                    setTimeout(function () {
                        'string' == typeof e ? t().revokeObjectURL(e) : e.remove();
                    }, 40000);
                },
                v = function (e, r, t) {
                    for (var n = (r = [].concat(r)).length; n--; ) {
                        var a = e['on' + r[n]];
                        if ('function' == typeof a)
                            try {
                                a.call(e, t || e);
                            } catch (e) {
                                l(e);
                            }
                    }
                },
                h = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(['ï\xBB\xBF', e], { type: e.type }) : e;
                },
                p = function (r, l, p) {
                    !p && (r = h(r));
                    var g,
                        b,
                        y = this,
                        w = r.type,
                        m = !1,
                        A = function () {
                            v(y, 'writestart progress write writeend'.split(' '));
                        },
                        U = function () {
                            if (b && o && 'undefined' != typeof FileReader) {
                                var n = new FileReader();
                                (n.onloadend = function () {
                                    var e = n.result;
                                    (b.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (y.readyState = y.DONE), A();
                                }),
                                    n.readAsDataURL(r),
                                    (y.readyState = y.INIT);
                                return;
                            }
                            (m || !g) && (g = t().createObjectURL(r)), b ? (b.location.href = g) : void 0 === e.open(g, '_blank') && o && (e.location.href = g), (y.readyState = y.DONE), A(), d(g);
                        },
                        I = function (e) {
                            return function () {
                                if (y.readyState !== y.DONE) return e.apply(this, arguments);
                            };
                        },
                        R = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((y.readyState = y.INIT), !l && (l = 'download'), a)) {
                        (g = t().createObjectURL(r)),
                            setTimeout(function () {
                                (n.href = g), (n.download = l), i(n), A(), d(g), (y.readyState = y.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && w && w !== c && ((r = (r.slice || r.webkitSlice).call(r, 0, r.size, c)), (m = !0)), f && 'download' !== l && (l += '.download'), (w === c || f) && (b = e), !s)) {
                        U();
                        return;
                    }
                    (u += r.size),
                        s(
                            e.TEMPORARY,
                            u,
                            I(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    R,
                                    I(function (e) {
                                        var t = function () {
                                            e.getFile(
                                                l,
                                                R,
                                                I(function (e) {
                                                    e.createWriter(
                                                        I(function (t) {
                                                            (t.onwriteend = function (r) {
                                                                (b.location.href = e.toURL()), (y.readyState = y.DONE), v(y, 'writeend', r), d(e);
                                                            }),
                                                                (t.onerror = function () {
                                                                    var e = t.error;
                                                                    e.code !== e.ABORT_ERR && U();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (e) {
                                                                    t['on' + e] = y['on' + e];
                                                                }),
                                                                t.write(r),
                                                                (y.abort = function () {
                                                                    t.abort(), (y.readyState = y.DONE);
                                                                }),
                                                                (y.readyState = y.WRITING);
                                                        }),
                                                        U
                                                    );
                                                }),
                                                U
                                            );
                                        };
                                        e.getFile(
                                            l,
                                            { create: !1 },
                                            I(function (e) {
                                                e.remove(), t();
                                            }),
                                            I(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? t() : U();
                                            })
                                        );
                                    }),
                                    U
                                );
                            }),
                            U
                        );
                },
                g = p.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, r, t) {
                      return !t && (e = h(e)), navigator.msSaveOrOpenBlob(e, r || 'download');
                  }
                : ((g.abort = function () {
                      (this.readyState = this.DONE), v(this, 'abort');
                  }),
                  (g.readyState = g.INIT = 0),
                  (g.WRITING = 1),
                  (g.DONE = 2),
                  (g.error = g.onwritestart = g.onprogress = g.onwrite = g.onabort = g.onerror = g.onwriteend = null),
                  function (e, r, t) {
                      return new p(e, r, t);
                  });
        }
    })(('undefined' != typeof self && self) || ('undefined' != typeof window && window) || this.content);
e.exports
    ? (e.exports.saveAs = r)
    : 'undefined' != typeof define &&
      null !== define &&
      null !== define.amd &&
      define([], function () {
          return r;
      });
