n.d(t, {
    C: function () {
        return l;
    },
    R: function () {
        return o;
    }
});
var r = n(570140),
    i = n(788983),
    a = n(214629),
    s = n(981631);
function o() {
    var e;
    let t = a.ZP.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled;
    return (null === (e = platform) || void 0 === e ? void 0 : e.name) !== 'Firefox' && t;
}
async function l(e) {
    let t;
    let n = o();
    n &&
        r.Z.wait(() => {
            r.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
        });
    try {
        t = await e();
    } catch {
        t = !1;
    }
    return !t && n && i.xv(s.KJ3.ACTIVITY_POPOUT), t;
}
