r.d(n, {
    $m: function () {
        return _;
    },
    NJ: function () {
        return f;
    },
    Xo: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(512722),
    l = r.n(o),
    u = r(846519),
    c = r(810097);
let d = s.createContext(void 0);
function f(e) {
    let { value: n, children: r } = e;
    return (0, a.jsx)(d.Provider, {
        value: n,
        children: r
    });
}
function _() {
    let [e, n] = s.useState(null),
        [r, i] = s.useState(null),
        [a, o] = s.useState(null),
        l = s.useCallback((e) => {
            n(e.interactionType), i(e.interactionSource), o(e.interactionSourceId);
        }, []),
        d = s.useCallback(() => {
            l({
                interactionType: null,
                interactionSource: null,
                interactionSourceId: null
            });
        }, [l]),
        [f, _] = s.useState(!1),
        [h, p] = s.useState(null),
        [m] = s.useState(new u.V7()),
        g = s.useCallback(
            (e) => {
                p(e), _(!0), null === e ? m.stop() : m.start(c._1, () => _(!1));
            },
            [m]
        );
    return (
        s.useEffect(() => {
            m.stop();
        }, [m]),
        s.useMemo(
            () => ({
                interactionType: e,
                interactionSource: r,
                interactionSourceId: a,
                onInteraction: l,
                setInteractionToast: g,
                resetInteraction: d,
                showInteractionToast: f,
                interactionTypeSent: h
            }),
            [l, g, r, a, f, e, h, d]
        )
    );
}
function h() {
    let e = s.useContext(d);
    return l()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
