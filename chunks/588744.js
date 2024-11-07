r.d(e, {
    Z: function () {
        return l;
    }
});
var n = r(192379),
    i = r(454000);
let { createElement: o, createContext: a, useContext: u, useMemo: s, useRef: c } = n;
function l() {
    console.warn("[DEPRECATED] `context` will be removed in a future version. Instead use `import { createStore, useStore } from 'zustand'`. See: https://github.com/pmndrs/zustand/discussions/1180.");
    let t = a(void 0);
    return {
        Provider: ({ createStore: e, children: r }) => {
            let n = c();
            return !n.current && (n.current = e()), o(t.Provider, { value: n.current }, r);
        },
        useStore: (e, r) => {
            let n = u(t);
            if (!n) throw Error('Seems like you have not used zustand provider as an ancestor.');
            return (0, i.s)(n, e, r);
        },
        useStoreApi: () => {
            let e = u(t);
            if (!e) throw Error('Seems like you have not used zustand provider as an ancestor.');
            return s(() => ({ ...e }), [e]);
        }
    };
}
