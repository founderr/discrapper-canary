t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(653041);
var i = t(697927),
    l = t(200634),
    o = t(369566),
    r = t(326094),
    s = t(708108),
    c = t(146078),
    a = t(228168),
    d = t(981631),
    u = t(388032);
function f(e) {
    var n, t;
    let { user: f, currentUser: m } = e,
        { live: I, recent: x, stream: p } = (0, o.Z)(f.id),
        h = null === (n = (0, i.Z)(f.id, f.id !== (null == m ? void 0 : m.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        v = null === (t = (0, l.Z)(f.id, f.id !== (null == m ? void 0 : m.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        Z = f.id === (null == m ? void 0 : m.id),
        g = (0, r.Z)({
            user: f,
            currentUser: m,
            location: d.Sbl.PROFILE_MODAL_TABS
        }),
        j = [
            {
                section: a.oh.USER_INFO,
                text: u.intl.string(u.t.jGoPJS)
            }
        ];
    return (
        (I.length > 0 || x.length > 0 || null != p) &&
            j.push({
                section: a.oh.ACTIVITY,
                text: u.intl.string(u.t.chq59f)
            }),
        !Z &&
            g &&
            (j.push({
                section: a.oh.MUTUAL_FRIENDS,
                text: (0, s.Z)(h)
            }),
            j.push({
                section: a.oh.MUTUAL_GUILDS,
                text: (0, c.Z)(v)
            })),
        j
    );
}
