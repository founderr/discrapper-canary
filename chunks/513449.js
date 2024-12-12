r.d(n, {
    Ku: function () {
        return _;
    },
    MV: function () {
        return h;
    }
});
var i = r(192379),
    a = r(15729),
    s = r(731965),
    o = r(442837),
    l = r(496675),
    u = r(944486),
    c = r(146085),
    d = r(643632);
let f = (0, a.U)((e) => ({ isOnStartStageScreen: !0 }));
function _(e) {
    (0, s.j)(() => f.setState({ isOnStartStageScreen: e }));
}
function h(e) {
    let n = (0, o.e7)([u.Z], () => u.Z.getVoiceChannelId() === e.id),
        r = (0, o.e7)([l.Z], () => l.Z.can(c.yP, e), [e]),
        a = (0, d.Z)(e.id),
        s = r && !a;
    i.useEffect(() => {
        n ? !s && _(!1) : _(s);
    }, [n, s]);
}
n.ZP = f;
