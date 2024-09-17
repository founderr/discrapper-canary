n.d(t, {
    K: function () {
        return E;
    }
}),
    n(47120);
var r = n(470079),
    i = n(399606);
function a(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function s(e, t) {
    var n,
        r,
        i = a(e, t, 'get');
    return (n = e), (r = i).get ? r.get.call(n) : r.value;
}
function o(e, t, n) {
    !(function (e, t) {
        if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
    })(e, t),
        t.set(e, n);
}
function l(e, t, n) {
    var r = a(e, t, 'set');
    return (
        !(function (e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
                if (!t.writable) throw TypeError('attempted to set read only private field');
                t.value = n;
            }
        })(e, r, n),
        n
    );
}
var u = new WeakMap(),
    c = new WeakMap();
class d {
    getOrCreate(e) {
        return null == s(this, u)[e] && (s(this, u)[e] = new d()), s(this, u)[e];
    }
    getState(e) {
        var t;
        return s(this.search(e), c);
    }
    loadingDone(e) {
        s(this.search(e), c).isLoading = !1;
    }
    loadingStart(e) {
        s(this.search(e), c).isLoading = !0;
    }
    markBranchStale(e) {
        let t = this;
        for (let n of e) t = t.getOrCreate(n);
        s(t, c).stale = !0;
    }
    pruneStaleBranches(e) {
        let t = this;
        for (let n of e) if (!0 === s((t = t.getOrCreate(n)), c).stale) return l(t, u, {}), l(t, c, {}), !0;
        return !s(t, c).hasOwnProperty('isLoading');
    }
    search(e) {
        if (null == e) return new d();
        let t = this;
        for (let n of e) t = t.getOrCreate(n);
        return t;
    }
    constructor() {
        o(this, u, {
            writable: !0,
            value: {}
        }),
            o(this, c, {
                writable: !0,
                value: {}
            });
    }
}
let _ = new d();
function E(e, t) {
    let { get: n, load: a, useStateHook: s, queryId: o, dangerousAbortOnCleanup: l = !1 } = t;
    return function () {
        for (var t = arguments.length, u = Array(t), c = 0; c < t; c++) u[c] = arguments[c];
        let d = o(...u),
            E = s([e], () => n(...u), u),
            f = !0 === _.getState(d).isLoading,
            [h, p] = (0, r.useState)();
        return (
            (0, r.useEffect)(() => {
                let e = !0 === _.getState(d).isLoading;
                if (null == d || !0 === e) return;
                let t = !1,
                    r = n(...u);
                s === i.Wu ? r.length > 0 && (t = !0) : null != r && (t = !0);
                let o = _.pruneStaleBranches(d);
                if (t && !o) return;
                _.loadingStart(d);
                let c = new AbortController();
                return (
                    a(c.signal, ...u)
                        .then((e) => (_.loadingDone(d), e))
                        .catch((e) => {
                            _.loadingDone(d), !c.signal.aborted && p(e);
                        }),
                    () => {
                        l && c.abort();
                    }
                );
            }, u),
            {
                data: E,
                error: h,
                isLoading: f
            }
        );
    };
}
