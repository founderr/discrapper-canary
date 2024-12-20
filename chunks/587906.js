t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    l = t(657707),
    o = t(481060),
    s = t(626135),
    a = t(981631),
    r = t(388032);
function u(e) {
    let { className: n, onClick: t } = e,
        u = (e) => {
            s.default.track(a.rMx.MEDIA_VIEWER_AFFORDANCE_CLICKED), t(e);
        };
    return (0, i.jsx)(o.Tooltip, {
        text: r.intl.string(r.t.rTQZY2),
        children: (e) =>
            (0, i.jsx)(o.Clickable, {
                ...e,
                className: n,
                focusProps: { offset: 2 },
                onClick: u,
                'aria-label': r.intl.string(r.t.rTQZY2),
                children: (0, i.jsx)(l.bJT, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                })
            })
    });
}
