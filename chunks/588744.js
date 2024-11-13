l.d(t, {
    Z: function () {
        return u;
    }
});
var n = l(192379),
    i = l(454000);
let { createElement: a, createContext: o, useContext: r, useMemo: s, useRef: d } = n;
function u() {
    console.warn("[DEPRECATED] `context` will be removed in a future version. Instead use `import { createStore, useStore } from 'zustand'`. See: https://github.com/pmndrs/zustand/discussions/1180.");
    let e = o(void 0);
    return {
        Provider: ({ createStore: t, children: l }) => {
            let n = d();
            return !n.current && (n.current = t()), a(e.Provider, { value: n.current }, l);
        },
        useStore: (t, l) => {
            let n = r(e);
            if (!n) throw Error('Seems like you have not used zustand provider as an ancestor.');
            return (0, i.s)(n, t, l);
        },
        useStoreApi: () => {
            let t = r(e);
            if (!t) throw Error('Seems like you have not used zustand provider as an ancestor.');
            return s(() => ({ ...t }), [t]);
        }
    };
}
