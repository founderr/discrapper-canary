n.d(t, {
    JS: function () {
        return i;
    },
    Qv: function () {
        return b;
    },
    ZP: function () {
        return C;
    },
    fD: function () {
        return y;
    },
    w1: function () {
        return w;
    }
}),
    n(789020),
    n(757143);
var i,
    l,
    r = n(442837),
    o = n(911969),
    a = n(906732),
    u = n(835473),
    c = n(592125),
    d = n(630388),
    s = n(358085),
    f = n(317381),
    p = n(638880),
    v = n(122613),
    h = n(619915),
    Z = n(761122),
    g = n(361213),
    _ = n(716600),
    m = n(952561),
    E = n(778569),
    I = n(701488),
    A = n(981631);
((l = i || (i = {}))[(l.START = 0)] = 'START'), (l[(l.JOIN = 1)] = 'JOIN'), (l[(l.LEAVE = 2)] = 'LEAVE');
function C(e) {
    let { activityItem: t, channel: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: r, assetNames: a = ['embedded_cover'], backgroundResolution: u = 250, launchingComponentId: c, commandOrigin: d, source: f } = e,
        { application: p, activity: v } = t,
        _ = v.client_platform_config[(0, Z.Z)((0, s.getOS)())],
        m = null != _.label_until && Date.now() < Date.parse(_.label_until),
        I = (0, E.Z)({
            applicationId: p.id,
            size: u,
            names: a
        }),
        A = null != v.activity_preview_video_asset_id ? (0, g.Z)(p.id, v.activity_preview_video_asset_id) : null,
        C = (0, h.ZP)(n).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
        }),
        S = b({
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
            commandOrigin: d,
            source: f
        }),
        M = y(p, t.activity);
    return {
        imageBackground: I,
        videoUrl: A,
        joinableEmbeddedApp: C,
        activityAction: S,
        onActivityItemSelected: T,
        labelType: m ? _.label_type : o.ww.NONE,
        staffReleasePhase: M
    };
}
function y(e, t) {
    var n;
    let i = null !== (n = e.flags) && void 0 !== n ? n : 0;
    if (!((0, d.yE)(i, A.udG.EMBEDDED_RELEASED) || (0, d.yE)(i, A.udG.EMBEDDED_FIRST_PARTY))) return;
    let l = t.client_platform_config[(0, Z.Z)((0, s.getOS)())].release_phase;
    return I.eB.includes(l) ? l.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function b(e) {
    let { channelId: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        o = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
        a = (0, _.Z)(),
        d = (0, m.Z)({ fetchesApplication: i }),
        s = (0, u.q)(n, i),
        f = (0, h.ZP)(o).find((e) => {
            let { embeddedActivity: t } = e;
            return null != s && s.id === t.applicationId;
        });
    return null == s ? l : (null != o && (null == a ? void 0 : a.channelId) === o.id && (null == d ? void 0 : d.id) === s.id ? (l = 2) : null != f && (l = 1), l);
}
function w(e) {
    let { applicationId: t, channelId: n, locationObject: i, embeddedActivitiesManager: l, onActivityItemSelectedProp: r, launchingComponentId: o, commandOrigin: u, sectionName: c, source: d, fetchesApplication: s = !0 } = e,
        h = b({
            channelId: n,
            applicationId: t,
            fetchesApplication: s
        }),
        { analyticsLocations: Z } = (0, a.ZP)();
    switch (h) {
        case 0:
            return async () => {
                await (0, v.Z)({
                    targetApplicationId: t,
                    locationObject: i,
                    channelId: n,
                    analyticsLocations: Z,
                    componentId: o,
                    commandOrigin: u,
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
                        analyticsLocations: Z,
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
