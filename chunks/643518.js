t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(653041);
var o = t(697927),
    i = t(200634),
    s = t(369566),
    l = t(326094),
    c = t(708108),
    r = t(146078),
    a = t(228168),
    d = t(981631),
    u = t(689938);
function _(e) {
    var n, t;
    let { user: _, currentUser: I } = e,
        { live: E, recent: f, stream: p } = (0, s.Z)(_.id),
        Z = null === (n = (0, o.Z)(_.id, _.id !== (null == I ? void 0 : I.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        h = null === (t = (0, i.Z)(_.id, _.id !== (null == I ? void 0 : I.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        x = (0, l.Z)({
            user: _,
            currentUser: I,
            location: d.Sbl.PROFILE_MODAL_TABS
        }),
        m = [
            {
                section: a.oh.USER_INFO,
                text: u.Z.Messages.USER_PROFILE_ABOUT_ME
            }
        ];
    return (
        (E.length > 0 || f.length > 0 || null != p) &&
            m.push({
                section: a.oh.ACTIVITY,
                text: u.Z.Messages.USER_PROFILE_ACTIVITY
            }),
        _.id !== (null == I ? void 0 : I.id) &&
            x &&
            (m.push({
                section: a.oh.MUTUAL_FRIENDS,
                text: (0, c.Z)(Z)
            }),
            m.push({
                section: a.oh.MUTUAL_GUILDS,
                text: (0, r.Z)(h)
            })),
        m
    );
}
