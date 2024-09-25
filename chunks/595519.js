n.d(t, {
    NX: function () {
        return _;
    },
    WS: function () {
        return d;
    },
    l5: function () {
        return c;
    },
    qB: function () {
        return f;
    }
});
var r = n(106351),
    i = n(442837),
    a = n(424602),
    o = n(592125),
    s = n(496675),
    l = n(231338);
function u(e) {
    return [r.d.GUILD_TEXT, r.d.GUILD_VOICE, r.d.GROUP_DM, r.d.DM].includes(e);
}
function c(e) {
    if (null == e) return !1;
    let t = o.Z.getChannel(e.parent_id);
    return (null == t || (null == t ? void 0 : t.type) === r.d.GUILD_CATEGORY) && u(e.type);
}
function d(e) {
    return E(e, s.Z);
}
function _(e) {
    return (0, i.e7)([o.Z, s.Z], () => E(o.Z.getChannel(e), s.Z));
}
function E(e, t) {
    return !!(null != e && void 0 !== e && c(e) && (null == e.guild_id || t.can(l.Pl.USE_EMBEDDED_ACTIVITIES, e))) || !1;
}
function f(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getChannel(e)),
        r = (0, i.e7)([s.Z], () => s.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, n)),
        u = c(n),
        d = null == n ? void 0 : n.guild_id,
        _ = null != d;
    return !a.T.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && (_ ? r && u : u);
}
