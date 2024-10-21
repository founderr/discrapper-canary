t.d(s, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var n = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    r = t(607070),
    o = t(600164),
    l = t(122890),
    c = t(110818),
    d = t(179695);
function _(e) {
    let { purchaseState: s, currentStep: t, onClose: _ } = e,
        [u, E] = (0, l.z)({
            purchaseState: s,
            currentStep: t,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS
        }),
        T = (0, a.e7)([r.Z], () => r.Z.useReducedMotion);
    return (0, n.jsxs)(i.ModalHeader, {
        align: o.Z.Align.START,
        className: d.header,
        separator: !1,
        children: [
            (0, n.jsx)(c.fe, {
                className: d.animation,
                nextScene: u,
                onScenePlay: (e) => E(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: T
            }),
            (0, n.jsx)('div', { className: d.headerTitle }),
            (0, n.jsx)(i.ModalCloseButton, {
                onClick: _,
                className: d.closeButton
            })
        ]
    });
}
