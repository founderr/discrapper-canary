t.d(n, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var o = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    i = t(607070),
    c = t(600164),
    l = t(122890),
    s = t(110818),
    u = t(179695);
function d(e) {
    let { purchaseState: n, currentStep: t, onClose: d } = e,
        [p, _] = (0, l.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: s.fe.Scenes.ENTRY,
            purchaseScene: s.fe.Scenes.STARS,
            errorScene: s.fe.Scenes.ERROR,
            successScene: s.fe.Scenes.SUCCESS
        }),
        f = (0, r.e7)([i.Z], () => i.Z.useReducedMotion);
    return (0, o.jsxs)(a.ModalHeader, {
        align: c.Z.Align.START,
        className: u.header,
        separator: !1,
        children: [
            (0, o.jsx)(s.fe, {
                className: u.animation,
                nextScene: p,
                onScenePlay: (e) => _(s.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: f
            }),
            (0, o.jsx)('div', { className: u.headerTitle }),
            (0, o.jsx)(a.ModalCloseButton, {
                onClick: d,
                className: u.closeButton
            })
        ]
    });
}
