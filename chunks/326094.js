n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(184242),
    i = n(349902),
    a = n(697927),
    o = n(200634);
function s(e) {
    var t, n;
    let { user: s, currentUser: l, location: u } = e,
        c = null === (t = (0, a.Z)(s.id, s.id !== (null == l ? void 0 : l.id)).mutualFriends) || void 0 === t ? void 0 : t.length,
        d = null === (n = (0, o.Z)(s.id, s.id !== (null == l ? void 0 : l.id)).mutualGuilds) || void 0 === n ? void 0 : n.length,
        _ = (0, i.Z)(s);
    return !((0, r.Ac)({ location: u }) && _ && (null != c ? c : 0) === 0 && (null != d ? d : 0) === 0);
}
