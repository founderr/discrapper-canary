var r = n(735250);
n(470079);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(585500),
    o = n(644646),
    u = n(489066);
t.Z = function (e) {
    let { className: t, autoplay: n, quest: i, questContent: c, taskDetails: d, location: h } = e,
        _ = (0, a.D)({
            quest: i,
            taskDetails: d,
            location: h,
            questContent: c
        });
    return (0, r.jsxs)('div', {
        className: l()(u.wrapper, t),
        style: { color: i.config.colors.primary },
        children: [
            (0, r.jsx)(o.Z, {
                autoplay: n,
                className: u.rewardTile,
                quest: i,
                questContent: c,
                location: h
            }),
            (0, r.jsx)(s.Text, {
                className: u.instructions,
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: _
            })
        ]
    });
};
