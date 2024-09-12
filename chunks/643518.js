t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(653041),
    t(627341);
var s = t(278074),
    i = t(697927),
    o = t(200634),
    l = t(369566),
    r = t(326094),
    a = t(228168),
    c = t(981631),
    d = t(689938);
function u(e) {
    var n, t;
    let { user: u, currentUser: _ } = e,
        { live: I, recent: E, stream: f } = (0, l.Z)(u.id),
        m = null === (n = (0, i.Z)(u.id, u.id !== (null == _ ? void 0 : _.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        x = null === (t = (0, o.Z)(u.id, u.id !== (null == _ ? void 0 : _.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        Z = (0, r.Z)({
            user: u,
            currentUser: _,
            location: c.Sbl.PROFILE_MODAL_TABS
        }),
        p = [
            {
                section: a.oh.USER_INFO,
                text: d.Z.Messages.USER_PROFILE_ABOUT_ME
            }
        ];
    return (
        (I.length > 0 || E.length > 0 || null != f) &&
            p.push({
                section: a.oh.ACTIVITY,
                text: d.Z.Messages.USER_PROFILE_ACTIVITY
            }),
        u.id !== (null == _ ? void 0 : _.id) &&
            Z &&
            (p.push({
                section: a.oh.MUTUAL_FRIENDS,
                text: (0, s.EQ)(m)
                    .with(void 0, () => d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER)
                    .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS)
                    .otherwise((e) => d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }))
            }),
            p.push({
                section: a.oh.MUTUAL_GUILDS,
                text: (0, s.EQ)(x)
                    .with(void 0, () => d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER)
                    .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                    .otherwise((e) => d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
            })),
        p
    );
}
