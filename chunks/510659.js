n.d(t, {
    N: function () {
        return s;
    },
    X: function () {
        return o;
    }
}),
    n(47120),
    n(411104);
var r = n(735250),
    i = n(470079);
let a = i.createContext(void 0);
function s(e) {
    let { children: t } = e,
        [n, s] = i.useState(null),
        [o, l] = i.useState(null),
        u = i.useCallback((e) => {
            s(e.interactionType), l(e.interactionSourceType);
        }, []),
        c = i.useCallback(() => {
            u({
                interactionType: null,
                interactionSourceType: null
            });
        }, [u]),
        [d, _] = i.useState(!1),
        [E, f] = i.useState(null);
    return (0, r.jsx)(a.Provider, {
        value: {
            interactionType: n,
            interactionSourceType: o,
            handleInteraction: u,
            resetInteraction: c,
            interactionToastShown: d,
            setInteractionToastShown: _,
            interactionTypeSent: E,
            setInteractionTypeSent: f
        },
        children: t
    });
}
function o() {
    let e = i.useContext(a);
    if (null == e) throw Error('useUserProfileInteractionContext must be used within a InteractionContextProvider');
    return e;
}
