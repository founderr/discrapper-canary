n.d(e, {
    B: function () {
        return l;
    }
});
var a = n(200651),
    r = n(192379),
    o = n(481060),
    s = n(69580),
    c = n(787025),
    i = n(944844);
function l(t) {
    let { data: e, onDenied: n, onError: l, onSuccess: u } = t,
        d = (0, i.t)(n, l, u),
        f = r.useCallback((t) => d(e, t), [e, d]);
    return (0, a.jsx)(c.G, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(s.OAuth2AuthorizeModal, {
            transitionState: o.ModalTransitionState.ENTERED,
            clientId: e.clientId,
            scopes: e.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: f
        })
    });
}
