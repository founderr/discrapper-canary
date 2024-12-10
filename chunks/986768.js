n.d(t, {
    V: function () {
        return c;
    }
});
var i = n(317381),
    r = n(573979),
    l = n(42352);
n(817938);
var a = n(238679),
    o = n(981631),
    s = n(701488);
async function c(e, t, n) {
    var c, d;
    switch (t) {
        case o.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null === (c = e.application) || void 0 === c ? void 0 : c.id,
                n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== s.cE.FOCUSED } : null;
        }
        case o.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null === (d = e.application) || void 0 === d ? void 0 : d.id,
                n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
        case o.zMe.THERMAL_STATE_UPDATE: {
            let e = await (0, l.Z)();
            if (null == e) return null;
            return { thermal_state: (0, r.Z)(e) };
        }
        case o.zMe.ORIENTATION_UPDATE:
            return null;
        case o.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
            return (0, a.dO)();
        default:
            return null;
    }
}
