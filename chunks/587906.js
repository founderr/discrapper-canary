t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(200651),
    l = t(657707),
    o = t(481060),
    s = t(388032);
function a(e) {
    let { className: n, onClick: t } = e;
    return (0, i.jsx)(o.Tooltip, {
        text: s.intl.string(s.t.rTQZY2),
        children: (e) =>
            (0, i.jsx)(o.Clickable, {
                ...e,
                className: n,
                focusProps: { offset: 2 },
                onClick: t,
                'aria-label': s.intl.string(s.t.rTQZY2),
                children: (0, i.jsx)(l.bJT, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                })
            })
    });
}
