r.d(n, {
    Hr: function () {
        return o;
    }
}),
    r(592125);
var i = r(650774),
    a = r(981631);
let s = 10000;
function o(e) {
    var n;
    let r = null !== (n = i.Z.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== n ? n : 0;
    return null != e && e.type !== a.d4z.DM && e.type !== a.d4z.GROUP_DM && r >= s;
}
