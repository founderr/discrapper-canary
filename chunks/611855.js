var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(689938),
    l = n(967979);
function u(e) {
    let { className: t, color: n = 'header-primary', textOpacity: i = 0.9, bgOpacity: u = 0.4 } = e;
    return (0, r.jsxs)(o.Text, {
        variant: 'text-xxs/medium',
        color: n,
        className: a()(l.promotedTag, t),
        children: [
            (0, r.jsx)('span', {
                className: l.promotedTagBackground,
                style: { opacity: u }
            }),
            (0, r.jsx)('span', {
                style: { opacity: i },
                children: s.Z.Messages.QUESTS_PROMOTED
            })
        ]
    });
}
t.Z = u;
