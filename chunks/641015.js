r.d(n, {
    D: function () {
        return l;
    },
    Z: function () {
        return u;
    }
});
var i = r(592125),
    a = r(496675),
    s = r(944486),
    o = r(981631);
function l() {
    let e = s.Z.getVoiceChannelId();
    return u(i.Z.getChannel(e));
}
function u(e) {
    if (null == e) return !1;
    if (o.TPd.CALLABLE.has(e.type)) return !0;
    let n = a.Z.can(o.Plq.USE_SOUNDBOARD, e),
        r = a.Z.can(o.Plq.SPEAK, e);
    return e.type === o.d4z.GUILD_VOICE && n && r;
}
