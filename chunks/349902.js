n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(789020);
var i = n(442837),
    a = n(621853);
function o(e) {
    var t;
    let n = (0, i.e7)([a.Z], () => a.Z.getUserProfile(e.id));
    return (null == n ? void 0 : n.bio) === '' && (null == n ? void 0 : n.pronouns) === '' && (null == n ? void 0 : n.banner) === void 0 && (null == n ? void 0 : n.accentColor) === void 0 && (null == n ? void 0 : n.banner) === void 0 && e.flags === e.publicFlags && ((null == n ? void 0 : n.badges) == null || (null == n ? void 0 : null === (t = n.badges) || void 0 === t ? void 0 : t.length) === 0);
}
