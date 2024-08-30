t.d(s, {
    Z: function () {
        return T;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(630388),
    c = t(88658),
    d = t(695346),
    u = t(981631),
    _ = t(689938),
    E = t(224499);
function T() {
    let e = d.xq.useSetting(),
        s = a.useMemo(() => (0, c.bL)(e), [e]);
    return (0, n.jsx)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: _.Z.Messages.FRIEND_REQUESTS,
        children: (0, n.jsxs)(o.FormSection, {
            title: _.Z.Messages.FRIEND_PERMITTED_SOURCE,
            className: E.marginBottom40,
            children: [
                (0, n.jsx)(o.FormSwitch, {
                    className: r()(E.marginTop8, E.marginBottom20),
                    value: s.all,
                    onChange: (e) => d.xq.updateSetting(e ? u.HGf : u.HGf & ~u.SOq.NO_RELATION),
                    children: _.Z.Messages.FRIEND_PERMITTED_SOURCE_ALL
                }),
                (0, n.jsx)(o.FormSwitch, {
                    value: s.all || s.mutualFriends,
                    onChange: (s) => d.xq.updateSetting(s ? l.pj(e, u.SOq.MUTUAL_FRIENDS) : l.M1(e, u.SOq.MUTUAL_FRIENDS, u.SOq.NO_RELATION)),
                    children: _.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_FRIENDS
                }),
                (0, n.jsx)(o.FormSwitch, {
                    value: s.all || s.mutualGuilds,
                    onChange: (s) => d.xq.updateSetting(s ? l.pj(e, u.SOq.MUTUAL_GUILDS) : l.M1(e, u.SOq.MUTUAL_GUILDS, u.SOq.NO_RELATION)),
                    children: _.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_GUILDS
                })
            ]
        })
    });
}
