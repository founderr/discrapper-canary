t.d(n, {
    Z: function () {
        return r;
    }
});
var i = t(200651),
    l = t(657707),
    a = t(481060),
    o = t(388032);
function r(e) {
    let { className: n, onClick: t } = e;
    return (0, i.jsx)(a.Tooltip, {
        text: o.intl.string(o.t.rTQZY2),
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                className: n,
                focusProps: { offset: 2 },
                onClick: t,
                'aria-label': o.intl.string(o.t.rTQZY2),
                children: (0, i.jsx)(l.bJT, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                })
            })
    });
}
