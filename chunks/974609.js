n.d(t, {
    H: function () {
        return s;
    }
});
var r = n(47120);
n(442837);
var i = n(271383),
    a = n(430824),
    o = n(700785);
let s = function (e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, i.ZP];
    if (null == e || null == t) return null;
    let s = n.getGuild(e);
    if (null == s) return null;
    let l = r.getMember(s.id, t);
    return null == l ? null : o.Hu(s, l);
};
