n.d(t, {
    JS: function () {
        return i;
    },
    Qv: function () {
        return w;
    },
    ZP: function () {
        return C;
    },
    fD: function () {
        return y;
    },
    w1: function () {
        return b;
    }
}),
    n(789020),
    n(757143);
var i,
    l,
    r = n(442837),
    o = n(911969),
    u = n(906732),
    a = n(835473),
    c = n(592125),
    d = n(630388),
    s = n(358085),
    f = n(317381),
    p = n(638880),
    v = n(122613),
    Z = n(619915),
    h = n(761122),
    E = n(361213),
    I = n(716600),
    g = n(952561),
    _ = n(778569),
    m = n(701488),
    A = n(981631);
((l = i || (i = {}))[(l.START = 0)] = 'START'), (l[(l.JOIN = 1)] = 'JOIN'), (l[(l.LEAVE = 2)] = 'LEAVE');
function C(e) {
    let { activityItem: t, channel: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: r, assetNames: u = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: c, commandOrigin: d, source: f } = e,
        { application: p, activity: v } = t,
        I = v.client_platform_config[(0, h.Z)((0, s.getOS)())],
        g = null != I.label_until && Date.now() < Date.parse(I.label_until),
        m = (0, _.Z)({
            applicationId: p.id,
            size: a,
            names: u
        }),
        A = null != v.activity_preview_video_asset_id ? (0, E.Z)(p.id, v.activity_preview_video_asset_id) : null,
        C = (0, Z.ZP)(n).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
        }),
        S = w({
            channelId: null == n ? void 0 : n.id,
            applicationId: p.id
        }),
        T = b({
            applicationId: t.application.id,
            channelId: null == n ? void 0 : n.id,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: d,
            source: f
        }),
        M = y(p, t.activity);
    return {
        imageBackground: m,
        videoUrl: A,
        joinableEmbeddedApp: C,
        activityAction: S,
        onActivityItemSelected: T,
        labelType: g ? I.label_type : o.ww.NONE,
        staffReleasePhase: M
    };
}
function y(e, t) {
    var n;
    let i = null !== (n = e.flags) && void 0 !== n ? n : 0;
    if (!((0, d.yE)(i, A.udG.EMBEDDED_RELEASED) || (0, d.yE)(i, A.udG.EMBEDDED_FIRST_PARTY))) return;
    let l = t.client_platform_config[(0, h.Z)((0, s.getOS)())].release_phase;
    return m.eB.includes(l) ? l.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function w(e) {
    let { channelId: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        o = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
        u = (0, I.Z)(),
        d = (0, g.Z)({ fetchesApplication: i }),
        s = (0, a.q)(n, i),
        f = (0, Z.ZP)(o).find((e) => {
            let { embeddedActivity: t } = e;
            return null != s && s.id === t.applicationId;
        });
    return null == s ? l : (null != o && (null == u ? void 0 : u.channelId) === o.id && (null == d ? void 0 : d.id) === s.id ? (l = 2) : null != f && (l = 1), l);
}
function b(e) {
    let { applicationId: t, channelId: n, locationObject: i, embeddedActivitiesManager: l, onActivityItemSelectedProp: r, launchingComponentId: o, commandOrigin: a, sectionName: c, source: d, fetchesApplication: s = !0 } = e,
        Z = w({
            channelId: n,
            applicationId: t,
            fetchesApplication: s
        }),
        { analyticsLocations: h } = (0, u.ZP)();
    switch (Z) {
        case 0:
            return async () => {
                await (0, v.Z)({
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
                !f.ZP.isLaunchingActivity() &&
                    (await (0, p.Z)({
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
                !f.ZP.isLaunchingActivity() &&
                    (null != n &&
                        l.leaveActivity({
                            channelId: n,
                            applicationId: t
                        }),
                    null == r || r({ applicationId: t }));
            };
    }
}
