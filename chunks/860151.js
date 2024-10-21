var s = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    r = n(585500),
    o = n(644646),
    u = n(489066);
t.Z = function (e) {
    let { className: t, autoplay: n, quest: a, questContent: d, taskDetails: c, location: E } = e,
        m = (0, r.D)({
            quest: a,
            taskDetails: c,
            location: E,
            questContent: d
        });
    return (0, s.jsxs)('div', {
        className: i()(u.wrapper, t),
        style: { color: a.config.colors.primary },
        children: [
            (0, s.jsx)(o.Z, {
                autoplay: n,
                className: u.rewardTile,
                quest: a,
                questContent: d,
                location: E
            }),
            (0, s.jsx)(l.Text, {
                className: u.instructions,
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: m
            })
        ]
    });
};
