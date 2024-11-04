n.d(t, {
    V: function () {
        return c;
    }
});
var i = n(317381),
    r = n(573979),
    a = n(42352);
n(817938);
var l = n(238679),
    s = n(981631),
    o = n(701488);
async function c(e, t, n) {
    var c, d;
    switch (t) {
        case s.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null === (c = e.application) || void 0 === c ? void 0 : c.id,
                n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== o.cE.FOCUSED } : null;
        }
        case s.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null === (d = e.application) || void 0 === d ? void 0 : d.id,
                n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
        case s.zMe.THERMAL_STATE_UPDATE: {
            let e = await (0, a.Z)();
            if (null == e) return null;
            return { thermal_state: (0, r.Z)(e) };
        }
        case s.zMe.ORIENTATION_UPDATE:
            return null;
        case s.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
            return (0, l.dO)();
        default:
            return null;
    }
}
