s.d(n, {
    Z: function () {
        return I;
    }
}),
    s(653041);
var t = s(697927),
    i = s(200634),
    l = s(369566),
    o = s(326094),
    r = s(708108),
    c = s(146078),
    a = s(228168),
    d = s(981631),
    u = s(689938);
function I(e) {
    var n, s;
    let { user: I, currentUser: _ } = e,
        { live: E, recent: f, stream: m } = (0, l.Z)(I.id),
        x = null === (n = (0, t.Z)(I.id, I.id !== (null == _ ? void 0 : _.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        Z = null === (s = (0, i.Z)(I.id, I.id !== (null == _ ? void 0 : _.id)).mutualGuilds) || void 0 === s ? void 0 : s.length,
        p = (0, o.Z)({
            user: I,
            currentUser: _,
            location: d.Sbl.PROFILE_MODAL_TABS
        }),
        h = [
            {
                section: a.oh.USER_INFO,
                text: u.Z.Messages.USER_PROFILE_ABOUT_ME
            }
        ];
    return (
        (E.length > 0 || f.length > 0 || null != m) &&
            h.push({
                section: a.oh.ACTIVITY,
                text: u.Z.Messages.USER_PROFILE_ACTIVITY
            }),
        I.id !== (null == _ ? void 0 : _.id) &&
            p &&
            (h.push({
                section: a.oh.MUTUAL_FRIENDS,
                text: (0, r.Z)(x)
            }),
            h.push({
                section: a.oh.MUTUAL_GUILDS,
                text: (0, c.Z)(Z)
            })),
        h
    );
}
