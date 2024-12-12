r.d(n, {
    Of: function () {
        return f;
    },
    ZP: function () {
        return c;
    }
});
var i = r(47120);
r(192379);
var a = r(442837),
    s = r(594174),
    o = r(251625),
    l = r(255564),
    u = r(621853);
function c(e, n) {
    return (0, a.e7)([s.default, u.Z], () => f(e, n, [s.default, u.Z]));
}
r(484459);
let d = (0, o.oH)((e, n) => new l.Z(e, n));
function f(e, n) {
    let [r, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, u.Z],
        a = r.getUser(e),
        o = i.getUserProfile(e),
        l = i.getGuildMemberProfile(e, n);
    return null == a || null == o ? null : d(o, l);
}
