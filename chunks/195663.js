r.d(n, {
    s: function () {
        return a;
    }
});
var i = r(314897);
function a(e) {
    var n, r;
    let a = i.default.getId();
    return null != a && (!!((null === (n = e.removedMemberIds) || void 0 === n ? void 0 : n.includes(a)) || (null === (r = e.addedMembers) || void 0 === r ? void 0 : r.some((e) => e.userId === a))) || !1);
}
