var r,
    i = n(444675);
function a(e, t, n) {
    return (
        (t = (function (e) {
            var t = (function (e, t) {
                if ('object' != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || 'default');
                    if ('object' != typeof r) return r;
                    throw TypeError('@@toPrimitive must return a primitive value.');
                }
                return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' == typeof t ? t : String(t);
        })(t)) in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var s = n(133495),
    o = Symbol('lastResolve'),
    l = Symbol('lastReject'),
    u = Symbol('error'),
    c = Symbol('ended'),
    d = Symbol('lastPromise'),
    f = Symbol('handlePromise'),
    _ = Symbol('stream');
function p(e, t) {
    return {
        value: e,
        done: t
    };
}
function h(e) {
    var t = e[o];
    if (null !== t) {
        var n = e[_].read();
        null !== n && ((e[d] = null), (e[o] = null), (e[l] = null), t(p(n, !1)));
    }
}
function m(e) {
    i.nextTick(h, e);
}
var g = Object.getPrototypeOf(function () {}),
    E = Object.setPrototypeOf(
        (a(
            (r = {
                get stream() {
                    return this[_];
                },
                next: function () {
                    var e,
                        t,
                        n,
                        r = this,
                        a = this[u];
                    if (null !== a) return Promise.reject(a);
                    if (this[c]) return Promise.resolve(p(void 0, !0));
                    if (this[_].destroyed)
                        return new Promise(function (e, t) {
                            i.nextTick(function () {
                                r[u] ? t(r[u]) : e(p(void 0, !0));
                            });
                        });
                    var s = this[d];
                    if (s) {
                        n = new Promise(
                            ((e = s),
                            (t = this),
                            function (n, r) {
                                e.then(function () {
                                    if (t[c]) {
                                        n(p(void 0, !0));
                                        return;
                                    }
                                    t[f](n, r);
                                }, r);
                            })
                        );
                    } else {
                        var o = this[_].read();
                        if (null !== o) return Promise.resolve(p(o, !1));
                        n = new Promise(this[f]);
                    }
                    return (this[d] = n), n;
                }
            }),
            Symbol.asyncIterator,
            function () {
                return this;
            }
        ),
        a(r, 'return', function () {
            var e = this;
            return new Promise(function (t, n) {
                e[_].destroy(null, function (e) {
                    if (e) {
                        n(e);
                        return;
                    }
                    t(p(void 0, !0));
                });
            });
        }),
        r),
        g
    );
e.exports = function (e) {
    var t,
        n = Object.create(
            E,
            (a((t = {}), _, {
                value: e,
                writable: !0
            }),
            a(t, o, {
                value: null,
                writable: !0
            }),
            a(t, l, {
                value: null,
                writable: !0
            }),
            a(t, u, {
                value: null,
                writable: !0
            }),
            a(t, c, {
                value: e._readableState.endEmitted,
                writable: !0
            }),
            a(t, f, {
                value: function (e, t) {
                    var r = n[_].read();
                    r ? ((n[d] = null), (n[o] = null), (n[l] = null), e(p(r, !1))) : ((n[o] = e), (n[l] = t));
                },
                writable: !0
            }),
            t)
        );
    return (
        (n[d] = null),
        s(e, function (e) {
            if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
                var t = n[l];
                null !== t && ((n[d] = null), (n[o] = null), (n[l] = null), t(e)), (n[u] = e);
                return;
            }
            var r = n[o];
            null !== r && ((n[d] = null), (n[o] = null), (n[l] = null), r(p(void 0, !0))), (n[c] = !0);
        }),
        e.on('readable', m.bind(null, n)),
        n
    );
};
