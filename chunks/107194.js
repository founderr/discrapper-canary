t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(653041),
    t(627341);
var i = t(278074),
    s = t(184242),
    o = t(932699),
    l = t(726059),
    r = t(162267),
    a = t(929498),
    c = t(228168),
    d = t(981631),
    u = t(689938);
function I(e) {
    var n, t;
    let { user: I, currentUser: _ } = e,
        { live: f, recent: E, stream: m } = (0, a.Z)(I.id),
        p = null === (n = (0, l.Z)(I.id, I.id !== (null == _ ? void 0 : _.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        x = null === (t = (0, r.Z)(I.id, I.id !== (null == _ ? void 0 : _.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        v = (0, o.G)(I),
        Z = !((0, s.Ac)({ location: d.Sbl.PROFILE_MODAL_TABS }) && v && (null != p ? p : 0) === 0 && (null != x ? x : 0) === 0),
        h = [
            {
                section: c.oh.USER_INFO,
                text: u.Z.Messages.USER_PROFILE_ABOUT_ME
            }
        ];
    return (
        (f.length > 0 || E.length > 0 || null != m) &&
            h.push({
                section: c.oh.ACTIVITY,
                text: u.Z.Messages.USER_PROFILE_ACTIVITY
            }),
        I.id !== (null == _ ? void 0 : _.id) &&
            Z &&
            (h.push({
                section: c.oh.MUTUAL_FRIENDS,
                text: (0, i.EQ)(p)
                    .with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER)
                    .with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS)
                    .otherwise((e) => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }))
            }),
            h.push({
                section: c.oh.MUTUAL_GUILDS,
                text: (0, i.EQ)(x)
                    .with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER)
                    .with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                    .otherwise((e) => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
            })),
        h
    );
}
