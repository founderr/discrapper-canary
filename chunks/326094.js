r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(184242),
    a = r(349902),
    s = r(697927),
    o = r(200634);
function l(e) {
    var n, r;
    let { user: l, currentUser: u, location: c } = e,
        d = null === (n = (0, s.Z)(l.id, l.id !== (null == u ? void 0 : u.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        f = null === (r = (0, o.Z)(l.id, l.id !== (null == u ? void 0 : u.id)).mutualGuilds) || void 0 === r ? void 0 : r.length,
        _ = (0, a.Z)(l);
    return !((0, i.Ac)({ location: c }) && _ && (null != d ? d : 0) === 0 && (null != f ? f : 0) === 0);
}
