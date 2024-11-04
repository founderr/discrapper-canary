var i,
    r,
    a = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    o = n(873546),
    c = n(481060),
    d = n(886733);
function u(e) {
    let { icon: t, tooltip: n, onClick: i, actionType: r = 2, shouldHighlight: l } = e;
    return (0, a.jsx)(c.Tooltip, {
        text: n,
        children: (e) =>
            (0, a.jsx)(c.Clickable, {
                ...e,
                'aria-label': n,
                onClick: i,
                className: s()(d.actionButton, {
                    [d.actionAccept]: 0 === r,
                    [d.actionDeny]: 1 === r,
                    [d.highlight]: l,
                    [d.actionButtonMobile]: o.tq
                }),
                children: (0, a.jsx)(t, {
                    className: d.icon,
                    color: 'currentColor'
                })
            })
    });
}
((i = r || (r = {}))[(i.ACCEPT = 0)] = 'ACCEPT'), (i[(i.DENY = 1)] = 'DENY'), (i[(i.DEFAULT = 2)] = 'DEFAULT'), (u.ActionTypes = r), (t.Z = u);
