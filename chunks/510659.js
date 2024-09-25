n.d(t, {
    $m: function () {
        return c;
    },
    NJ: function () {
        return u;
    },
    Xo: function () {
        return d;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(512722),
    s = n.n(o);
let l = a.createContext(void 0);
function u(e) {
    let { value: t, children: n } = e;
    return (0, i.jsx)(l.Provider, {
        value: t,
        children: n
    });
}
function c() {
    let [e, t] = a.useState(null),
        [n, r] = a.useState(null),
        i = a.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource);
        }, []),
        o = a.useCallback(() => {
            i({
                interactionType: null,
                interactionSource: null
            });
        }, [i]),
        [s, l] = a.useState(!1),
        [u, c] = a.useState(null);
    return a.useMemo(
        () => ({
            interactionType: e,
            interactionSource: n,
            onInteraction: i,
            resetInteraction: o,
            interactionToastShown: s,
            setInteractionToastShown: l,
            interactionTypeSent: u,
            setInteractionTypeSent: c
        }),
        [i, n, s, e, u, o]
    );
}
function d() {
    let e = a.useContext(l);
    return s()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
