r.d(n, {
    DQ: function () {
        return u;
    },
    He: function () {
        return l;
    },
    P1: function () {
        return o;
    }
});
var i = r(825829),
    a = r(594174),
    s = r(981631);
function o(e) {
    return void 0 !== e && e.type !== s.d4z.DM;
}
function l(e) {
    var n, r;
    return null !== (r = null === (n = a.default.getUser(e)) || void 0 === n ? void 0 : n.hasFlag(s.xW$.SPAMMER)) && void 0 !== r && r;
}
function u(e) {
    return l(e.author.id) && !(0, i.nY)(e);
}
