n.d(t, {
    Jc: function () {
        return c;
    },
    Lp: function () {
        return u;
    },
    tW: function () {
        return l;
    },
    ts: function () {
        return d;
    }
}),
    n(399606);
var r = n(430824),
    i = n(981631),
    a = n(176505);
function o(e) {
    var t;
    if (null == e) return !1;
    let n = r.Z.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ''),
        a = null != n && n.rulesChannelId === e.id;
    return i.TPd.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !a;
}
function s(e) {
    return null != e && (e === i.ME || e === i.I_8);
}
function l(e) {
    return u(e, !0, !1);
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return !(null == e || !o(e) || (!1 === t && e.hasFlag(a.zZ.SUMMARIES_DISABLED))) && c(r.Z.getGuild(e.guild_id), n);
}
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return !(null == e || s(e.id)) && !!e.hasFeature(i.oNc.SUMMARIES_ENABLED_GA) && (!t || e.hasFeature(i.oNc.SUMMARIES_ENABLED_BY_USER));
}
function d(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return u(e, t);
}
