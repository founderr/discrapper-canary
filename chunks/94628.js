n.d(e, {
    B: function () {
        return i;
    }
});
var a = n(200651);
n(192379);
var r = n(481060),
    o = n(69580),
    s = n(787025),
    c = n(944844);
function i(t) {
    let { data: e, onDenied: n, onError: i, onSuccess: l } = t,
        u = (0, c.t)(e, n, i, l);
    return (0, a.jsx)(s.G, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(o.OAuth2AuthorizeModal, {
            transitionState: r.ModalTransitionState.ENTERED,
            clientId: e.clientId,
            scopes: e.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: u
        })
    });
}
