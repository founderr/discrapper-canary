var o = n(735250),
    s = n(481060),
    r = n(689938),
    a = n(597916);
function l(e) {
    let { onClick: t, children: n } = e;
    return (0, o.jsx)(s.Button, {
        onClick: t,
        className: a.button,
        innerClassName: a.buttonInner,
        look: 'blank',
        children: n
    });
}
t.Z = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, o.jsxs)('div', {
        className: a.buttons,
        children: [
            (0, o.jsxs)(l, {
                onClick: t,
                children: [r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP, (0, o.jsx)(s.ScreenIcon, { size: 'sm' })]
            }),
            (0, o.jsxs)(l, {
                onClick: n,
                children: [r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE, (0, o.jsx)(s.GameControllerIcon, { size: 'sm' })]
            })
        ]
    });
};
