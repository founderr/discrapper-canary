var t =
    t ||
    (function (e) {
        if (!('undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document,
                n = function () {
                    return e.URL || e.webkitURL || e;
                },
                r = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                o = 'download' in r,
                i = function (e) {
                    var t = new MouseEvent('click');
                    e.dispatchEvent(t);
                },
                a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                s = e.webkitRequestFileSystem,
                l = e.requestFileSystem || s || e.mozRequestFileSystem,
                d = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                c = 'application/octet-stream',
                u = 0,
                E = function (e) {
                    setTimeout(function () {
                        'string' == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, 40000);
                },
                h = function (e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                        var o = e['on' + t[r]];
                        if ('function' == typeof o)
                            try {
                                o.call(e, n || e);
                            } catch (e) {
                                d(e);
                            }
                    }
                },
                p = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(['ï\xBB\xBF', e], { type: e.type }) : e;
                },
                f = function (t, d, f) {
                    !f && (t = p(t));
                    var _,
                        R,
                        I = this,
                        m = t.type,
                        N = !1,
                        b = function () {
                            h(I, 'writestart progress write writeend'.split(' '));
                        },
                        g = function () {
                            if (R && a && 'undefined' != typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (R.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (I.readyState = I.DONE), b();
                                }),
                                    r.readAsDataURL(t),
                                    (I.readyState = I.INIT);
                                return;
                            }
                            (N || !_) && (_ = n().createObjectURL(t)), R ? (R.location.href = _) : void 0 === e.open(_, '_blank') && a && (e.location.href = _), (I.readyState = I.DONE), b(), E(_);
                        },
                        C = function (e) {
                            return function () {
                                if (I.readyState !== I.DONE) return e.apply(this, arguments);
                            };
                        },
                        y = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((I.readyState = I.INIT), !d && (d = 'download'), o)) {
                        (_ = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = _), (r.download = d), i(r), b(), E(_), (I.readyState = I.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && m && m !== c && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, c)), (N = !0)), s && 'download' !== d && (d += '.download'), (m === c || s) && (R = e), !l)) {
                        g();
                        return;
                    }
                    (u += t.size),
                        l(
                            e.TEMPORARY,
                            u,
                            C(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    y,
                                    C(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                d,
                                                y,
                                                C(function (e) {
                                                    e.createWriter(
                                                        C(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (R.location.href = e.toURL()), (I.readyState = I.DONE), h(I, 'writeend', t), E(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && g();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (e) {
                                                                    n['on' + e] = I['on' + e];
                                                                }),
                                                                n.write(t),
                                                                (I.abort = function () {
                                                                    n.abort(), (I.readyState = I.DONE);
                                                                }),
                                                                (I.readyState = I.WRITING);
                                                        }),
                                                        g
                                                    );
                                                }),
                                                g
                                            );
                                        };
                                        e.getFile(
                                            d,
                                            { create: !1 },
                                            C(function (e) {
                                                e.remove(), n();
                                            }),
                                            C(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : g();
                                            })
                                        );
                                    }),
                                    g
                                );
                            }),
                            g
                        );
                },
                _ = f.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return !n && (e = p(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((_.abort = function () {
                      (this.readyState = this.DONE), h(this, 'abort');
                  }),
                  (_.readyState = _.INIT = 0),
                  (_.WRITING = 1),
                  (_.DONE = 2),
                  (_.error = _.onwritestart = _.onprogress = _.onwrite = _.onabort = _.onerror = _.onwriteend = null),
                  function (e, t, n) {
                      return new f(e, t, n);
                  });
        }
    })(('undefined' != typeof self && self) || ('undefined' != typeof window && window) || this.content);
e.exports
    ? (e.exports.saveAs = t)
    : 'undefined' != typeof define &&
      null !== define &&
      null !== define.amd &&
      define([], function () {
          return t;
      });
