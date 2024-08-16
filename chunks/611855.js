var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    r = n(481060),
    l = n(689938),
    o = n(608561);
t.Z = function (e) {
    let { className: t, color: n = 'header-primary', textOpacity: s = 0.9, bgOpacity: c = 0.4 } = e;
    return (0, i.jsxs)(r.Text, {
        variant: 'text-xxs/medium',
        color: n,
        className: a()(o.promotedTag, t),
        children: [
            (0, i.jsx)('span', {
                className: o.promotedTagBackground,
                style: { opacity: c }
            }),
            (0, i.jsx)('span', {
                style: { opacity: s },
                children: l.Z.Messages.QUESTS_PROMOTED
            })
        ]
    });
};
