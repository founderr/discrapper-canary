n.d(t, {
    k: function () {
        return g;
    }
});
var r = n(668781),
    i = n(728345),
    a = n(835873),
    s = n(973616),
    o = n(592125),
    l = n(430824),
    u = n(496675),
    c = n(594174),
    d = n(979651),
    f = n(317381),
    _ = n(638880),
    h = n(782769),
    p = n(527805),
    m = n(388032);
async function g(e) {
    let { channelId: t, applicationId: n, launchId: g, inputApplication: E, analyticsLocations: v, launchingComponentId: I, sectionName: S } = e,
        b = f.ZP.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n && (null == g || e.launchId === g)),
        T = E;
    if (null == T) {
        let e = await i.ZP.fetchApplication(n);
        T = s.Z.createFromServer(e);
    }
    if (null == b || null == T) return;
    let y = c.default.getCurrentUser(),
        A = o.Z.getChannel(t);
    async function N() {
        if (null != b)
            await (0, _.Z)({
                applicationId: b.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: v,
                componentId: I,
                sectionName: S
            });
    }
    !(function (e) {
        let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
        switch (t) {
            case p.Fw.CAN_JOIN:
                null == n || n();
                break;
            case p.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, a.w)();
                break;
            case p.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                r.Z.show({
                    title: m.intl.string(m.t.PtobXV),
                    body: m.intl.string(m.t.UXoQTk),
                    hideActionSheet: !1
                });
                break;
            case p.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
                r.Z.show({
                    title: m.intl.string(m.t.PtobXV),
                    body: m.intl.string(m.t.uGDCc3),
                    hideActionSheet: !1
                });
                break;
            case p.Fw.ACTIVITY_AGE_GATED:
                r.Z.show({
                    title: m.intl.string(m.t.PtobXV),
                    body: m.intl.string(m.t['4WuFRE']),
                    hideActionSheet: !1
                });
                break;
            case p.Fw.NO_CHANNEL_CONNECT_PERMISSION:
            case p.Fw.CHANNEL_FULL:
            case p.Fw.NO_CHANNEL:
            case p.Fw.NO_USER:
                r.Z.show({
                    title: m.intl.string(m.t.PtobXV),
                    body: m.intl.string(m.t.FUCQcn),
                    hideActionSheet: !1
                });
        }
    })({
        embeddedActivityJoinability: (0, p.ZP)({
            userId: null == y ? void 0 : y.id,
            application: T,
            channelId: t,
            currentUser: y,
            isActivitiesEnabledForCurrentPlatform: (0, h.a)(A),
            ChannelStore: o.Z,
            VoiceStateStore: d.Z,
            PermissionStore: u.Z,
            GuildStore: l.Z
        }),
        handleCanJoin: N
    });
}
