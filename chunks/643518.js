t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(653041),
    t(627341);
var s = t(278074),
    i = t(726059),
    o = t(162267),
    l = t(428785),
    r = t(929498),
    a = t(228168),
    c = t(981631),
    d = t(689938);
function u(e) {
    var n, t;
    let { user: u, currentUser: I } = e,
        { live: _, recent: E, stream: f } = (0, r.Z)(u.id),
        m = null === (n = (0, i.Z)(u.id, u.id !== (null == I ? void 0 : I.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        p = null === (t = (0, o.Z)(u.id, u.id !== (null == I ? void 0 : I.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        x = (0, l.Z)({
            user: u,
            currentUser: I,
            location: c.Sbl.PROFILE_MODAL_TABS
        }),
        Z = [
            {
                section: a.oh.USER_INFO,
                text: d.Z.Messages.USER_PROFILE_ABOUT_ME
            }
        ];
    return (
        (_.length > 0 || E.length > 0 || null != f) &&
            Z.push({
                section: a.oh.ACTIVITY,
                text: d.Z.Messages.USER_PROFILE_ACTIVITY
            }),
        u.id !== (null == I ? void 0 : I.id) &&
            x &&
            (Z.push({
                section: a.oh.MUTUAL_FRIENDS,
                text: (0, s.EQ)(m)
                    .with(void 0, () => d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER)
                    .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS)
                    .otherwise((e) => d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }))
            }),
            Z.push({
                section: a.oh.MUTUAL_GUILDS,
                text: (0, s.EQ)(p)
                    .with(void 0, () => d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER)
                    .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                    .otherwise((e) => d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
            })),
        Z
    );
}
