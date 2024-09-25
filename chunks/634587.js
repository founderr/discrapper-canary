var r,
    i = n(444675);
function a(e, t, n) {
    return (
        (t = o(t)) in e
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
function o(e) {
    var t = s(e, 'string');
    return 'symbol' == typeof t ? t : String(t);
}
function s(e, t) {
    if ('object' != typeof e || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' != typeof r) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
var l = n(133495),
    u = Symbol('lastResolve'),
    c = Symbol('lastReject'),
    d = Symbol('error'),
    _ = Symbol('ended'),
    E = Symbol('lastPromise'),
    f = Symbol('handlePromise'),
    h = Symbol('stream');
function p(e, t) {
    return {
        value: e,
        done: t
    };
}
function m(e) {
    var t = e[u];
    if (null !== t) {
        var n = e[h].read();
        null !== n && ((e[E] = null), (e[u] = null), (e[c] = null), t(p(n, !1)));
    }
}
function I(e) {
    i.nextTick(m, e);
}
function T(e, t) {
    return function (n, r) {
        e.then(function () {
            if (t[_]) {
                n(p(void 0, !0));
                return;
            }
            t[f](n, r);
        }, r);
    };
}
var g = Object.getPrototypeOf(function () {}),
    S = Object.setPrototypeOf(
        (a(
            (r = {
                get stream() {
                    return this[h];
                },
                next: function () {
                    var e,
                        t = this,
                        n = this[d];
                    if (null !== n) return Promise.reject(n);
                    if (this[_]) return Promise.resolve(p(void 0, !0));
                    if (this[h].destroyed)
                        return new Promise(function (e, n) {
                            i.nextTick(function () {
                                t[d] ? n(t[d]) : e(p(void 0, !0));
                            });
                        });
                    var r = this[E];
                    if (r) e = new Promise(T(r, this));
                    else {
                        var a = this[h].read();
                        if (null !== a) return Promise.resolve(p(a, !1));
                        e = new Promise(this[f]);
                    }
                    return (this[E] = e), e;
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
                e[h].destroy(null, function (e) {
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
    ),
    A = function (e) {
        var t,
            n = Object.create(
                S,
                (a((t = {}), h, {
                    value: e,
                    writable: !0
                }),
                a(t, u, {
                    value: null,
                    writable: !0
                }),
                a(t, c, {
                    value: null,
                    writable: !0
                }),
                a(t, d, {
                    value: null,
                    writable: !0
                }),
                a(t, _, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }),
                a(t, f, {
                    value: function (e, t) {
                        var r = n[h].read();
                        r ? ((n[E] = null), (n[u] = null), (n[c] = null), e(p(r, !1))) : ((n[u] = e), (n[c] = t));
                    },
                    writable: !0
                }),
                t)
            );
        return (
            (n[E] = null),
            l(e, function (e) {
                if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
                    var t = n[c];
                    null !== t && ((n[E] = null), (n[u] = null), (n[c] = null), t(e)), (n[d] = e);
                    return;
                }
                var r = n[u];
                null !== r && ((n[E] = null), (n[u] = null), (n[c] = null), r(p(void 0, !0))), (n[_] = !0);
            }),
            e.on('readable', I.bind(null, n)),
            n
        );
    };
e.exports = A;
