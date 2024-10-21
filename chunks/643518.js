t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(653041);
var i = t(697927),
    s = t(200634),
    o = t(369566),
    l = t(326094),
    r = t(708108),
    c = t(146078),
    a = t(228168),
    d = t(981631),
    u = t(689938);
function _(e) {
    var n, t;
    let { user: _, currentUser: I } = e,
        { live: E, recent: f, stream: m } = (0, o.Z)(_.id),
        p = null === (n = (0, i.Z)(_.id, _.id !== (null == I ? void 0 : I.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        x = null === (t = (0, s.Z)(_.id, _.id !== (null == I ? void 0 : I.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        Z = _.id === (null == I ? void 0 : I.id),
        h = (0, l.Z)({
            user: _,
            currentUser: I,
            location: d.Sbl.PROFILE_MODAL_TABS
        }),
        v = [
            {
                section: a.oh.USER_INFO,
                text: u.Z.Messages.USER_PROFILE_ABOUT_ME
            }
        ];
    return (
        (E.length > 0 || (Z && f.length > 0) || null != m) &&
            v.push({
                section: a.oh.ACTIVITY,
                text: u.Z.Messages.USER_PROFILE_ACTIVITY
            }),
        !Z &&
            h &&
            (v.push({
                section: a.oh.MUTUAL_FRIENDS,
                text: (0, r.Z)(p)
            }),
            v.push({
                section: a.oh.MUTUAL_GUILDS,
                text: (0, c.Z)(x)
            })),
        v
    );
}
