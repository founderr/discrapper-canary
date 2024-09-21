s.d(n, {
    Z: function () {
        return u;
    }
}),
    s(653041),
    s(627341);
var t = s(278074),
    i = s(697927),
    o = s(200634),
    l = s(369566),
    r = s(326094),
    c = s(228168),
    a = s(981631),
    d = s(689938);
function u(e) {
    var n, s;
    let { user: u, currentUser: _ } = e,
        { live: I, recent: E, stream: f } = (0, l.Z)(u.id),
        m = null === (n = (0, i.Z)(u.id, u.id !== (null == _ ? void 0 : _.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        x = null === (s = (0, o.Z)(u.id, u.id !== (null == _ ? void 0 : _.id)).mutualGuilds) || void 0 === s ? void 0 : s.length,
        Z = (0, r.Z)({
            user: u,
            currentUser: _,
            location: a.Sbl.PROFILE_MODAL_TABS
        }),
        h = [
            {
                section: c.oh.USER_INFO,
                text: d.Z.Messages.USER_PROFILE_ABOUT_ME
            }
        ];
    return (
        (I.length > 0 || E.length > 0 || null != f) &&
            h.push({
                section: c.oh.ACTIVITY,
                text: d.Z.Messages.USER_PROFILE_ACTIVITY
            }),
        u.id !== (null == _ ? void 0 : _.id) &&
            Z &&
            (h.push({
                section: c.oh.MUTUAL_FRIENDS,
                text: (0, t.EQ)(m)
                    .with(void 0, () => d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER)
                    .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS)
                    .otherwise((e) => d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }))
            }),
            h.push({
                section: c.oh.MUTUAL_GUILDS,
                text: (0, t.EQ)(x)
                    .with(void 0, () => d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER)
                    .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                    .otherwise((e) => d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
            })),
        h
    );
}
