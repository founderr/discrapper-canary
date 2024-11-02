n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(421535);
function r(e, t) {
    var n, r, l;
    if (t.owner_user_id === e) return !0;
    return (null === ((r = t), (l = e), (n = r.members.find((e) => e.user.id === l))) || void 0 === n ? void 0 : n.role) === i.T.ADMIN;
}
