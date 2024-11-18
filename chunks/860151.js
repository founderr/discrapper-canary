var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    o = n(585500),
    a = n(644646),
    u = n(89246);
t.Z = function (e) {
    let { className: t, autoplay: n, quest: s, questContent: d, taskDetails: c, location: m } = e,
        x = (0, o.D)({
            quest: s,
            taskDetails: c,
            location: m,
            questContent: d
        });
    return (0, i.jsxs)('div', {
        className: l()(u.wrapper, t),
        style: { color: s.config.colors.primary },
        children: [
            (0, i.jsx)(a.Z, {
                autoplay: n,
                className: u.rewardTile,
                quest: s,
                questContent: d,
                location: m
            }),
            (0, i.jsx)(r.Text, {
                className: u.instructions,
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: x
            })
        ]
    });
};
