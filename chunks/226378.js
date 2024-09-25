n.d(t, {
    NL: function () {
        return l;
    }
});
var r,
    i = n(470079),
    a = n(595519),
    o = n(527805),
    s = n(689938);
function l(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: r, channel: a } = e;
    return i.useMemo(
        () =>
            u({
                embeddedActivity: t,
                joinability: n,
                currentEmbeddedActivity: r,
                channel: a
            }),
        [t, n, r, a]
    );
}
function u(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: r, channel: i } = e,
        l = null == t,
        u = {
            disabled: !1,
            isJoinAction: !l,
            text: l ? s.Z.Messages.START : s.Z.Messages.EMBEDDED_ACTIVITIES_JOIN,
            tooltip: void 0
        },
        c = (0, a.WS)(i);
    if (null != t && null != r && t.launchId === r.launchId)
        return {
            ...u,
            disabled: !0,
            text: s.Z.Messages.EMBEDDED_ACTIVITIES_JOINED,
            tooltip: s.Z.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY
        };
    if (l)
        return {
            ...u,
            disabled: !c,
            tooltip: c ? void 0 : s.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START
        };
    if (null != n && n !== o.Fw.CAN_JOIN) {
        let e;
        switch (n) {
            case o.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                e = s.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                break;
            case o.Fw.ACTIVITY_AGE_GATED:
                e = s.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                break;
            case o.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                e = s.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
                break;
            case o.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
                e = s.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS;
                break;
            case o.Fw.CHANNEL_FULL:
                e = s.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL;
                break;
            case o.Fw.NO_CHANNEL_CONNECT_PERMISSION:
                e = s.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_VOICE_PERMISSION;
                break;
            case o.Fw.NO_CHANNEL:
            case o.Fw.NO_GUILD:
            case o.Fw.NO_USER:
            case o.Fw.IS_AFK_CHANNEL:
                e = s.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_INVALID_CHANNEL;
        }
        return {
            ...u,
            disabled: !0,
            tooltip: e
        };
    }
    return u;
}
!(function (e) {
    (e[(e.ACTIVE = 0)] = 'ACTIVE'), (e[(e.ENDED = 1)] = 'ENDED');
})(r || (r = {}));
