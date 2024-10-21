t.d(s, {
    Z: function () {
        return T;
    }
});
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(630388),
    c = t(88658),
    d = t(695346),
    _ = t(981631),
    u = t(689938),
    E = t(113207);
function T() {
    let e = d.xq.useSetting(),
        s = a.useMemo(() => (0, c.bL)(e), [e]);
    return (0, n.jsx)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: u.Z.Messages.FRIEND_REQUESTS,
        children: (0, n.jsxs)(o.FormSection, {
            title: u.Z.Messages.FRIEND_PERMITTED_SOURCE,
            className: E.marginBottom40,
            children: [
                (0, n.jsx)(o.FormSwitch, {
                    className: r()(E.marginTop8, E.marginBottom20),
                    value: s.all,
                    onChange: (e) => d.xq.updateSetting(e ? _.HGf : _.HGf & ~_.SOq.NO_RELATION),
                    children: u.Z.Messages.FRIEND_PERMITTED_SOURCE_ALL
                }),
                (0, n.jsx)(o.FormSwitch, {
                    value: s.all || s.mutualFriends,
                    onChange: (s) => d.xq.updateSetting(s ? l.pj(e, _.SOq.MUTUAL_FRIENDS) : l.M1(e, _.SOq.MUTUAL_FRIENDS, _.SOq.NO_RELATION)),
                    children: u.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_FRIENDS
                }),
                (0, n.jsx)(o.FormSwitch, {
                    value: s.all || s.mutualGuilds,
                    onChange: (s) => d.xq.updateSetting(s ? l.pj(e, _.SOq.MUTUAL_GUILDS) : l.M1(e, _.SOq.MUTUAL_GUILDS, _.SOq.NO_RELATION)),
                    children: u.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_GUILDS
                })
            ]
        })
    });
}
