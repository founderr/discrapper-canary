n.d(e, {
    Nb: function () {
        return E;
    },
    oA: function () {
        return c;
    },
    pr: function () {
        return s;
    },
    ze: function () {
        return o;
    }
});
var r = n(442837),
    i = n(430824),
    l = n(496675),
    u = n(981631);
let a = function (t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
        r = e.getGuild(t);
    return null != r && n.can(u.Plq.MANAGE_GUILD, r);
};
function o(t) {
    return null != t && a(t);
}
function E(t) {
    return a(t);
}
function s(t) {
    return (0, r.e7)([i.Z, l.Z], () => a(t, i.Z, l.Z), [t]);
}
function c(t) {
    return (0, r.e7)(
        [i.Z],
        () => {
            let e = i.Z.getGuild(t);
            return (null == e ? void 0 : e.hasFeature(u.oNc.COMMUNITY)) || !1;
        },
        [t]
    );
}
