t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(442837),
    a = t(595519),
    l = t(374065),
    o = t(761122),
    r = t(542094),
    s = t(973616),
    c = t(592125),
    d = t(496675),
    u = t(358085),
    m = t(231338),
    p = t(689938);
function _(e) {
    let { channelId: n, application: t, activityAction: _ } = e,
        C = (0, i.e7)([c.Z], () => c.Z.getChannel(n)),
        h = (0, i.e7)([d.Z], () => d.Z.can(m.Pl.USE_EMBEDDED_ACTIVITIES, C)),
        f = (0, l.KF)(null == C ? void 0 : C.id),
        A = !1,
        E = p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START;
    switch (_) {
        case r.JS.LEAVE:
            A = !1;
            break;
        case r.JS.START:
            (null == C ? void 0 : C.isGuildVoice()) ? f !== l.jy.CAN_LAUNCH && (A = !0) : !(0, a.WS)(C) && (A = !0);
            break;
        case r.JS.JOIN:
            (null == C ? void 0 : C.isGuildVoice()) ? (A = !h) : !(0, a.WS)(C) && (A = !0);
    }
    if (_ !== r.JS.LEAVE) {
        let e = t instanceof s.Z ? t.embeddedActivityConfig : t.embedded_activity_config,
            n = (0, o.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(n) ? (null == C ? void 0 : C.isThread()) && ((A = !0), (E = p.Z.Messages.APP_LAUNCHER_ACTIVITY_NOT_AVAILABLE_IN_THREAD)) : ((A = !0), (E = p.Z.Messages.APP_LAUNCHER_ACTIVITY_NOT_AVAILABLE_ON_DEVICE));
    }
    return {
        disabled: A,
        reason: E
    };
}
