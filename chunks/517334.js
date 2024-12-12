r.d(n, {
    ZP: function () {
        return p;
    }
});
var i = r(724458);
var a = r(653041);
var s = r(47120);
var o = r(442837),
    l = r(592125),
    u = r(496675),
    c = r(823379),
    d = r(709054),
    f = r(146085),
    _ = r(427679);
function h(e) {
    let n = (0, o.Wu)([l.Z], () => e.map((e) => l.Z.getChannel(e)).filter(c.lm), [e]);
    return (0, o.Wu)([u.Z], () => n.filter((e) => u.Z.can(f.gl, e)), [n]);
}
function p(e) {
    return h((0, o.Wu)([_.Z], () => d.default.keys(_.Z.getStageInstancesByGuild(e)), [e]));
}
