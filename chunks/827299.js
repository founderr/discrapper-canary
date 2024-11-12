n.d(t, {
    K: function () {
        return _;
    }
}),
    n(47120),
    n(653041),
    n(411104);
var r = n(192379),
    i = n(399606);
function a(e, t) {
    var n,
        r,
        i = (function (e, t, n) {
            if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
            return t.get(e);
        })(e, t, 'get');
    return (n = e), (r = i).get ? r.get.call(n) : r.value;
}
function s(e, t, n) {
    !(function (e, t) {
        if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
    })(e, t),
        t.set(e, n);
}
function o(e, t, n) {
    return (
        t in e
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
var l = new WeakMap(),
    u = new WeakMap();
class c {
    doesDataNeedValidation(e) {
        return !0 === a(this.search(e), u).isStale;
    }
    getOrCreate(e) {
        return null == a(this, l)[e] && (a(this, l)[e] = new c()), a(this, l)[e];
    }
    getState(e) {
        var t;
        return a(this.search(e), u);
    }
    loadingDone(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.search(e);
        (a(n, u).isLoading = !1), t ? ((a(n, u).fetchFailCounter = 0), (a(n, u).isStale = !1)) : (a(n, u).fetchFailCounter += 1);
    }
    loadingStart(e) {
        let t = this.search(e);
        (a(t, u).isLoading = !0), (a(t, u).error = void 0);
    }
    search(e) {
        if (null == e) return new c();
        let t = this;
        for (let n of e) t = t.getOrCreate(n);
        return t;
    }
    setError(e, t) {
        let n = this.search(e);
        (a(n, u).error = t), (a(n, u).isStale = !1);
    }
    subscribe(e, t) {
        a(this.search(e), u).validateData = t;
    }
    validate(e) {
        let t = this.search(e),
            n = [];
        'function' == typeof a(t, u).validateData && n.push(a(t, u).validateData);
        let r = Object.values(a(t, l));
        for (; r.length > 0; ) {
            let e = r.pop();
            null != e && ((a(e, u).isStale = !0), c.resetErrorState(e), r.push(...Object.values(a(e, l))), 'function' == typeof a(e, u).validateData && n.push(a(e, u).validateData));
        }
        (a(t, u).isStale = !0), c.resetErrorState(t), n.forEach((e) => e());
    }
    static resetErrorState(e) {
        (a(e, u).error = void 0), (a(e, u).fetchFailCounter = 0);
    }
    constructor() {
        s(this, l, {
            writable: !0,
            value: {}
        }),
            s(this, u, {
                writable: !0,
                value: { fetchFailCounter: 0 }
            });
    }
}
let d = new c();
class f extends Error {
    setStatus(e) {
        this.status = e;
    }
    constructor(...e) {
        super(...e), o(this, 'name', 'HTTPResponseError'), o(this, 'status', 0);
    }
}
function _(e, t) {
    let { dangerousAbortOnCleanup: n = !1, get: a, load: s, maxNumFetchErrors: o = 5, queryId: l, useStateHook: u } = t;
    return function () {
        for (var t = arguments.length, c = Array(t), _ = 0; _ < t; _++) c[_] = arguments[_];
        let p = (0, r.useMemo)(() => l(...c), c),
            h = u(Array.isArray(e) ? e : [e], () => a(...c), c),
            m = d.getState(p),
            g = m.error,
            E = !0 === m.isLoading,
            v = (0, r.useRef)(c),
            I = (0, r.useCallback)(() => {
                if (null == p || !0 === E) return;
                let e = !1;
                u === i.Wu ? h.length > 0 && (e = !0) : null != h && (e = !0);
                let t = d.doesDataNeedValidation(p),
                    r = null != g;
                if ((e || r) && !t) return;
                d.loadingStart(p);
                let a = new AbortController();
                return (
                    s(a.signal, ...v.current)
                        .then((e) => (d.loadingDone(p, !0), e))
                        .catch((e) => {
                            if ((d.loadingDone(p), a.signal.aborted)) return;
                            let t = (function (e) {
                                if (e instanceof Error) return e;
                                if ('object' == typeof e) {
                                    if ('body' in e && null != e.body && 'message' in e.body) {
                                        let t = new f(String(e.body.message));
                                        return t.setStatus(e.status), t;
                                    }
                                    let t = new f(
                                        Object.entries(e)
                                            .map((e, t) => ''.concat(e, ': [').concat(String(t), ']'))
                                            .join(',')
                                    );
                                    return t.setStatus(e.status), t;
                                }
                                return Error(String(e));
                            })(e);
                            if (!!(m.fetchFailCounter >= o) || !(t instanceof f) || (!(t.status >= 500) && 429 !== t.status)) d.setError(p, t);
                        }),
                    () => {
                        n && a.abort();
                    }
                );
            }, [h, m.fetchFailCounter, g, p, E]);
        return (
            (0, r.useEffect)(
                () => (
                    I(),
                    d.subscribe(p, I),
                    () => {
                        d.subscribe(p, void 0);
                    }
                ),
                [p, I]
            ),
            {
                data: h,
                error: g,
                isLoading: E
            }
        );
    };
}
