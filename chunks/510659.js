n.d(t, {
    $m: function () {
        return d;
    },
    NJ: function () {
        return c;
    },
    Xo: function () {
        return _;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(512722),
    s = n.n(a),
    o = n(846519),
    l = n(810097);
let u = i.createContext(void 0);
function c(e) {
    let { value: t, children: n } = e;
    return (0, r.jsx)(u.Provider, {
        value: t,
        children: n
    });
}
function d() {
    let [e, t] = i.useState(null),
        [n, r] = i.useState(null),
        a = i.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource);
        }, []),
        s = i.useCallback(() => {
            a({
                interactionType: null,
                interactionSource: null
            });
        }, [a]),
        [u, c] = i.useState(!1),
        [d, _] = i.useState(null),
        [E] = i.useState(new o.V7()),
        f = i.useCallback(
            (e) => {
                _(e), c(!0), null === e ? E.stop() : E.start(l._1, () => c(!1));
            },
            [E]
        );
    return (
        i.useEffect(() => {
            E.stop();
        }, [E]),
        i.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                onInteraction: a,
                setInteractionToast: f,
                resetInteraction: s,
                showInteractionToast: u,
                interactionTypeSent: d
            }),
            [a, f, n, u, e, d, s]
        )
    );
}
function _() {
    let e = i.useContext(u);
    return s()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
