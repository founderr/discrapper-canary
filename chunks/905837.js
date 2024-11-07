n.d(t, {
    ZP: function () {
        return f;
    }
});
var r = n(451498),
    i = n(192379),
    a = n(584171);
let { useDebugValue: s } = i,
    { useSyncExternalStoreWithSelector: o } = a,
    l = !1,
    u = (e) => e,
    c = (e) => {
        'function' != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
        let t = 'function' == typeof e ? (0, r.M)(e) : e,
            n = (e, n) =>
                (function (e, t = u, n) {
                    n && !l && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), (l = !0));
                    let r = o(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
                    return s(r), r;
                })(t, e, n);
        return Object.assign(n, t), n;
    },
    d = (e) => (e ? c(e) : c);
var f = (e) => (console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."), d(e));
