n.d(t, {
    Ku: function () {
        return f;
    },
    MV: function () {
        return _;
    }
});
var r = n(192379),
    i = n(903797),
    a = n(731965),
    s = n(442837),
    o = n(496675),
    l = n(944486),
    u = n(146085),
    c = n(643632);
let d = (0, i.Z)((e) => ({ isOnStartStageScreen: !0 }));
function f(e) {
    (0, a.j)(() => d.setState({ isOnStartStageScreen: e }));
}
function _(e) {
    let t = (0, s.e7)([l.Z], () => l.Z.getVoiceChannelId() === e.id),
        n = (0, s.e7)([o.Z], () => o.Z.can(u.yP, e), [e]),
        i = (0, c.Z)(e.id),
        a = n && !i;
    r.useEffect(() => {
        t ? !a && f(!1) : f(a);
    }, [t, a]);
}
t.ZP = d;
