n.d(t, {
    M: function () {
        return i;
    },
    Z: function () {
        return a;
    }
});
let r = (e) => {
        let t;
        let n = new Set(),
            r = (e, r) => {
                let i = 'function' == typeof e ? e(t) : e;
                if (!Object.is(i, t)) {
                    let e = t;
                    (t = (null != r ? r : 'object' != typeof i || null === i) ? i : Object.assign({}, t, i)), n.forEach((n) => n(t, e));
                }
            },
            i = () => t,
            a = {
                setState: r,
                getState: i,
                getInitialState: () => s,
                subscribe: (e) => (n.add(e), () => n.delete(e)),
                destroy: () => {
                    console.warn('[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.'), n.clear();
                }
            },
            s = (t = e(r, i, a));
        return a;
    },
    i = (e) => (e ? r(e) : r);
var a = (e) => (console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."), i(e));
