var s = l(735250);
l(470079);
var n = l(120356),
    i = l.n(n),
    a = l(481060),
    u = l(585500),
    r = l(644646),
    o = l(489066);
t.Z = function (e) {
    let { className: t, autoplay: l, quest: n, questContent: c, taskDetails: d, location: E } = e,
        S = (0, u.D)({
            quest: n,
            taskDetails: d,
            location: E,
            questContent: c
        });
    return (0, s.jsxs)('div', {
        className: i()(o.wrapper, t),
        style: { color: n.config.colors.primary },
        children: [
            (0, s.jsx)(r.Z, {
                autoplay: l,
                className: o.rewardTile,
                quest: n,
                questContent: c,
                location: E
            }),
            (0, s.jsx)(a.Text, {
                className: o.instructions,
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: S
            })
        ]
    });
};
