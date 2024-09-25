n.d(t, {
    Of: function () {
        return d;
    },
    ZP: function () {
        return u;
    }
});
var r = n(47120);
n(470079);
var i = n(442837),
    a = n(594174),
    o = n(251625),
    s = n(255564),
    l = n(621853);
function u(e, t) {
    return (0, i.e7)([a.default, l.Z], () => d(e, t, [a.default, l.Z]));
}
n(484459);
let c = (0, o.oH)((e, t) => new s.Z(e, t));
function d(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default, l.Z],
        i = n.getUser(e),
        o = r.getUserProfile(e),
        s = r.getGuildMemberProfile(e, t);
    return null == i || null == o ? null : c(o, s);
}
