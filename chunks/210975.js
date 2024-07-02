n.d(t, {
    m$: function () {
        return _;
    },
    wV: function () {
        return f;
    }
});
var r = n(470079), o = n(442837), i = n(470956), l = n(314897), u = n(592125), a = n(979651), c = n(441894);
function s(e) {
    let t = (0, o.e7)([a.Z], () => a.Z.getVoiceStatesForChannel(e)), n = r.useMemo(() => Object.keys(t), [t]);
    return (0, i.Yp)(e, n);
}
function d(e) {
    let {
            channelId: t,
            location: n
        } = e, r = (0, c.J)({
            channelId: t,
            location: n
        }), i = (0, o.e7)([u.Z], () => {
            var e;
            return (null === (e = u.Z.getChannel(t)) || void 0 === e ? void 0 : e.isGuildStageVoice()) === !0;
        });
    return r && !i;
}
function E(e, t) {
    return !1;
}
function f(e) {
    var t, n;
    let {
            userId: r,
            channelId: i,
            location: u
        } = e, a = s(i), c = d({
            channelId: i,
            location: u
        }), E = (0, o.e7)([l.default], () => l.default.getId());
    return c && a.has(E) && null != r && a.has(r) && (t = 0, n = 0, !1);
}
function _(e) {
    let {
            channelId: t,
            location: n
        } = e, i = s(t), u = d({
            channelId: t,
            location: n
        }), a = (0, o.e7)([l.default], () => l.default.getId());
    return r.useMemo(() => !!(u && i.has(a)) && Array.from(i).every(e => {
        var t, n;
        return t = 0, n = 0, e === a;
    }), [
        t,
        a,
        u,
        i
    ]);
}
