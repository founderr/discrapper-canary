var s = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    r = n(689938),
    o = n(967979);
t.Z = function (e) {
    let { className: t, color: n = 'header-primary', textOpacity: a = 0.9, bgOpacity: u = 0.4 } = e;
    return (0, s.jsxs)(l.Text, {
        variant: 'text-xxs/medium',
        color: n,
        className: i()(o.promotedTag, t),
        children: [
            (0, s.jsx)('span', {
                className: o.promotedTagBackground,
                style: { opacity: u }
            }),
            (0, s.jsx)('span', {
                style: { opacity: a },
                children: r.Z.Messages.QUESTS_PROMOTED
            })
        ]
    });
};
