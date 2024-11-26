t.d(n, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var o = t(200651);
t(192379);
var l = t(442837),
    i = t(481060),
    r = t(607070),
    a = t(600164),
    s = t(122890),
    u = t(110818),
    c = t(346007);
function d(e) {
    let { purchaseState: n, currentStep: t, onClose: d } = e,
        [p, f] = (0, s.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: u.fe.Scenes.ENTRY,
            purchaseScene: u.fe.Scenes.STARS,
            errorScene: u.fe.Scenes.ERROR,
            successScene: u.fe.Scenes.SUCCESS
        }),
        m = (0, l.e7)([r.Z], () => r.Z.useReducedMotion);
    return (0, o.jsxs)(i.ModalHeader, {
        align: a.Z.Align.START,
        className: c.header,
        separator: !1,
        children: [
            (0, o.jsx)(u.fe, {
                className: c.animation,
                nextScene: p,
                onScenePlay: (e) => f(u.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: m
            }),
            (0, o.jsx)('div', { className: c.headerTitle }),
            (0, o.jsx)(i.ModalCloseButton, {
                onClick: d,
                className: c.closeButton
            })
        ]
    });
}
