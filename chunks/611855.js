var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    o = n(481060),
    r = n(689938),
    l = n(967979);
t.Z = function (e) {
    let { className: t, color: n = 'header-primary', textOpacity: a = 0.9, bgOpacity: u = 0.4 } = e;
    return (0, s.jsxs)(o.Text, {
        variant: 'text-xxs/medium',
        color: n,
        className: i()(l.promotedTag, t),
        children: [
            (0, s.jsx)('span', {
                className: l.promotedTagBackground,
                style: { opacity: u }
            }),
            (0, s.jsx)('span', {
                style: { opacity: a },
                children: r.Z.Messages.QUESTS_PROMOTED
            })
        ]
    });
};
