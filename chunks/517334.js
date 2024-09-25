n.d(t, {
    ZP: function () {
        return f;
    }
});
var r = n(724458);
var i = n(653041);
var a = n(47120);
var o = n(442837),
    s = n(592125),
    l = n(496675),
    u = n(823379),
    c = n(709054),
    d = n(146085),
    _ = n(427679);
function E(e) {
    let t = (0, o.Wu)([s.Z], () => e.map((e) => s.Z.getChannel(e)).filter(u.lm), [e]);
    return (0, o.Wu)([l.Z], () => t.filter((e) => l.Z.can(d.gl, e)), [t]);
}
function f(e) {
    return E((0, o.Wu)([_.Z], () => c.default.keys(_.Z.getStageInstancesByGuild(e)), [e]));
}
