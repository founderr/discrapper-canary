var e =
    e ||
    (function (t) {
        if (!('undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var e = t.document,
                r = function () {
                    return t.URL || t.webkitURL || t;
                },
                n = e.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                i = 'download' in n,
                o = function (t) {
                    var e = new MouseEvent('click');
                    t.dispatchEvent(e);
                },
                a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                s = t.webkitRequestFileSystem,
                u = t.requestFileSystem || s || t.mozRequestFileSystem,
                c = function (e) {
                    (t.setImmediate || t.setTimeout)(function () {
                        throw e;
                    }, 0);
                },
                l = 'application/octet-stream',
                h = 0,
                f = function (t) {
                    setTimeout(function () {
                        'string' == typeof t ? r().revokeObjectURL(t) : t.remove();
                    }, 40000);
                },
                p = function (t, e, r) {
                    for (var n = (e = [].concat(e)).length; n--; ) {
                        var i = t['on' + e[n]];
                        if ('function' == typeof i)
                            try {
                                i.call(t, r || t);
                            } catch (t) {
                                c(t);
                            }
                    }
                },
                d = function (t) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(['ï\xBB\xBF', t], { type: t.type }) : t;
                },
                m = function (e, c, m) {
                    !m && (e = d(e));
                    var v,
                        g,
                        y = this,
                        b = e.type,
                        E = !1,
                        T = function () {
                            p(y, 'writestart progress write writeend'.split(' '));
                        },
                        _ = function () {
                            if (g && a && 'undefined' != typeof FileReader) {
                                var n = new FileReader();
                                (n.onloadend = function () {
                                    var t = n.result;
                                    (g.location.href = 'data:attachment/file' + t.slice(t.search(/[,;]/))), (y.readyState = y.DONE), T();
                                }),
                                    n.readAsDataURL(e),
                                    (y.readyState = y.INIT);
                                return;
                            }
                            (E || !v) && (v = r().createObjectURL(e)), g ? (g.location.href = v) : void 0 === t.open(v, '_blank') && a && (t.location.href = v), (y.readyState = y.DONE), T(), f(v);
                        },
                        A = function (t) {
                            return function () {
                                if (y.readyState !== y.DONE) return t.apply(this, arguments);
                            };
                        },
                        L = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((y.readyState = y.INIT), !c && (c = 'download'), i)) {
                        (v = r().createObjectURL(e)),
                            setTimeout(function () {
                                (n.href = v), (n.download = c), o(n), T(), f(v), (y.readyState = y.DONE);
                            });
                        return;
                    }
                    if ((t.chrome && b && b !== l && ((e = (e.slice || e.webkitSlice).call(e, 0, e.size, l)), (E = !0)), s && 'download' !== c && (c += '.download'), (b === l || s) && (g = t), !u)) {
                        _();
                        return;
                    }
                    (h += e.size),
                        u(
                            t.TEMPORARY,
                            h,
                            A(function (t) {
                                t.root.getDirectory(
                                    'saved',
                                    L,
                                    A(function (t) {
                                        var r = function () {
                                            t.getFile(
                                                c,
                                                L,
                                                A(function (t) {
                                                    t.createWriter(
                                                        A(function (r) {
                                                            (r.onwriteend = function (e) {
                                                                (g.location.href = t.toURL()), (y.readyState = y.DONE), p(y, 'writeend', e), f(t);
                                                            }),
                                                                (r.onerror = function () {
                                                                    var t = r.error;
                                                                    t.code !== t.ABORT_ERR && _();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (t) {
                                                                    r['on' + t] = y['on' + t];
                                                                }),
                                                                r.write(e),
                                                                (y.abort = function () {
                                                                    r.abort(), (y.readyState = y.DONE);
                                                                }),
                                                                (y.readyState = y.WRITING);
                                                        }),
                                                        _
                                                    );
                                                }),
                                                _
                                            );
                                        };
                                        t.getFile(
                                            c,
                                            { create: !1 },
                                            A(function (t) {
                                                t.remove(), r();
                                            }),
                                            A(function (t) {
                                                t.code === t.NOT_FOUND_ERR ? r() : _();
                                            })
                                        );
                                    }),
                                    _
                                );
                            }),
                            _
                        );
                },
                v = m.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (t, e, r) {
                      return !r && (t = d(t)), navigator.msSaveOrOpenBlob(t, e || 'download');
                  }
                : ((v.abort = function () {
                      (this.readyState = this.DONE), p(this, 'abort');
                  }),
                  (v.readyState = v.INIT = 0),
                  (v.WRITING = 1),
                  (v.DONE = 2),
                  (v.error = v.onwritestart = v.onprogress = v.onwrite = v.onabort = v.onerror = v.onwriteend = null),
                  function (t, e, r) {
                      return new m(t, e, r);
                  });
        }
    })(('undefined' != typeof self && self) || ('undefined' != typeof window && window) || this.content);
t.exports
    ? (t.exports.saveAs = e)
    : 'undefined' != typeof define &&
      null !== define &&
      null !== define.amd &&
      define([], function () {
          return e;
      });
