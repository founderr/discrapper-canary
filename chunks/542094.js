n.d(t, {
    JS: function () {
        return i;
    },
    Qv: function () {
        return C;
    },
    ZP: function () {
        return E;
    },
    fD: function () {
        return A;
    },
    w1: function () {
        return w;
    }
}),
    n(757143);
var i,
    l,
    r = n(442837),
    o = n(911969),
    u = n(906732),
    a = n(835473),
    c = n(592125),
    d = n(358085),
    s = n(317381),
    f = n(638880),
    p = n(122613),
    v = n(619915),
    Z = n(761122),
    h = n(361213),
    I = n(716600),
    g = n(952561),
    m = n(778569),
    _ = n(701488);
((l = i || (i = {}))[(l.START = 0)] = 'START'), (l[(l.JOIN = 1)] = 'JOIN'), (l[(l.LEAVE = 2)] = 'LEAVE');
function E(e) {
    let { activityItem: t, channel: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: r, assetNames: u = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: c, commandOrigin: s, source: f } = e,
        { application: p, activity: I } = t,
        g = I.client_platform_config[(0, Z.Z)((0, d.getOS)())],
        _ = null != g.label_until && Date.now() < Date.parse(g.label_until),
        E = (0, m.Z)({
            applicationId: p.id,
            size: a,
            names: u
        }),
        y = null != I.activity_preview_video_asset_id ? (0, h.Z)(p.id, I.activity_preview_video_asset_id) : null,
        b = (0, v.ZP)(n).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
        }),
        S = C({
            channelId: null == n ? void 0 : n.id,
            applicationId: p.id
        }),
        T = w({
            applicationId: t.application.id,
            channelId: null == n ? void 0 : n.id,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: s,
            source: f
        }),
        M = A(t.activity);
    return {
        imageBackground: E,
        videoUrl: y,
        joinableEmbeddedApp: b,
        activityAction: S,
        onActivityItemSelected: T,
        labelType: _ ? g.label_type : o.ww.NONE,
        staffReleasePhase: M
    };
}
function A(e) {
    let t = e.client_platform_config[(0, Z.Z)((0, d.getOS)())].release_phase;
    return _.eB.includes(t) ? t.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function C(e) {
    let { channelId: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        o = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
        u = (0, I.Z)(),
        d = (0, g.Z)({ fetchesApplication: i }),
        s = (0, a.q)(n, i),
        f = (0, v.ZP)(o).find((e) => {
            let { embeddedActivity: t } = e;
            return null != s && s.id === t.applicationId;
        });
    return null == s ? l : (null != o && (null == u ? void 0 : u.channelId) === o.id && (null == d ? void 0 : d.id) === s.id ? (l = 2) : null != f && (l = 1), l);
}
function w(e) {
    let { applicationId: t, channelId: n, locationObject: i, embeddedActivitiesManager: l, onActivityItemSelectedProp: r, launchingComponentId: o, commandOrigin: a, sectionName: c, source: d, fetchesApplication: v = !0 } = e,
        Z = C({
            channelId: n,
            applicationId: t,
            fetchesApplication: v
        }),
        { analyticsLocations: h } = (0, u.ZP)();
    switch (Z) {
        case 0:
            return async () => {
                await (0, p.Z)({
                    targetApplicationId: t,
                    locationObject: i,
                    channelId: n,
                    analyticsLocations: h,
                    componentId: o,
                    commandOrigin: a,
                    sectionName: c,
                    source: d
                }).then((e) => e && (null == r ? void 0 : r({ applicationId: t })));
            };
        case 1:
            return async () => {
                !s.ZP.isLaunchingActivity() &&
                    (await (0, f.Z)({
                        applicationId: t,
                        activityChannelId: n,
                        locationObject: i,
                        analyticsLocations: h,
                        componentId: o,
                        sectionName: c,
                        source: d
                    }).then((e) => e && (null == r ? void 0 : r({ applicationId: t }))));
            };
        case 2:
            return () => {
                !s.ZP.isLaunchingActivity() &&
                    (null != n &&
                        l.leaveActivity({
                            channelId: n,
                            applicationId: t
                        }),
                    null == r || r({ applicationId: t }));
            };
    }
}
