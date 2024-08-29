n.d(t, {
    JS: function () {
        return i;
    },
    Qv: function () {
        return A;
    },
    ZP: function () {
        return E;
    },
    w1: function () {
        return y;
    }
}),
    n(757143);
var i,
    l,
    r = n(442837),
    o = n(911969),
    a = n(906732),
    u = n(835473),
    c = n(592125),
    d = n(358085),
    s = n(317381),
    p = n(638880),
    f = n(122613),
    v = n(619915),
    Z = n(761122),
    h = n(361213),
    _ = n(716600),
    g = n(952561),
    m = n(778569),
    I = n(701488);
((l = i || (i = {}))[(l.START = 0)] = 'START'), (l[(l.JOIN = 1)] = 'JOIN'), (l[(l.LEAVE = 2)] = 'LEAVE');
function E(e) {
    let { activityItem: t, channel: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: r, assetNames: a = ['embedded_cover'], backgroundResolution: u = 250, launchingComponentId: c, commandOrigin: s, source: p } = e,
        { application: f, activity: _ } = t,
        g = _.client_platform_config[(0, Z.Z)((0, d.getOS)())],
        E = null != g.label_until && Date.now() < Date.parse(g.label_until),
        w = (0, m.Z)({
            applicationId: f.id,
            size: u,
            names: a
        }),
        b = null != _.activity_preview_video_asset_id ? (0, h.Z)(f.id, _.activity_preview_video_asset_id) : null,
        C = (0, v.ZP)(n).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
        }),
        S = A({
            channelId: null == n ? void 0 : n.id,
            applicationId: f.id
        }),
        T = y({
            applicationId: t.application.id,
            channelId: null == n ? void 0 : n.id,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: s,
            source: p
        }),
        M = t.activity.client_platform_config[(0, Z.Z)((0, d.getOS)())].release_phase,
        O = I.eB.includes(M) ? M.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
    return {
        imageBackground: w,
        videoUrl: b,
        joinableEmbeddedApp: C,
        activityAction: S,
        onActivityItemSelected: T,
        labelType: E ? g.label_type : o.ww.NONE,
        staffReleasePhase: O
    };
}
function A(e) {
    let { channelId: t, applicationId: n } = e,
        i = 0,
        l = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
        o = (0, _.Z)(),
        a = (0, g.Z)(),
        d = (0, u.q)(n),
        s = (0, v.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != d && d.id === t.applicationId;
        });
    return null == d ? i : (null != l && (null == o ? void 0 : o.channelId) === l.id && (null == a ? void 0 : a.id) === d.id ? (i = 2) : null != s && (i = 1), i);
}
function y(e) {
    let { applicationId: t, channelId: n, locationObject: i, embeddedActivitiesManager: l, onActivityItemSelectedProp: r, launchingComponentId: o, commandOrigin: u, sectionName: c, source: d } = e,
        v = A({
            channelId: n,
            applicationId: t
        }),
        { analyticsLocations: Z } = (0, a.ZP)();
    switch (v) {
        case 0:
            return async () => {
                await (0, f.Z)({
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
                !s.ZP.isLaunchingActivity() &&
                    (await (0, p.Z)({
                        applicationId: t,
                        activityChannelId: n,
                        locationObject: i,
                        analyticsLocations: Z,
                        componentId: o,
                        commandOrigin: u,
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
