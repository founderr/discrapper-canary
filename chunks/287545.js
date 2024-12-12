let i;
r.d(n, {
    U: function () {
        return Q;
    },
    Z: function () {
        return X;
    }
});
var a,
    s = r(47120);
var o = r(772848),
    l = r(544891),
    u = r(570140),
    c = r(475179),
    d = r(317770),
    f = r(728345),
    _ = r(358221),
    h = r(75060),
    p = r(233764),
    m = r(375824),
    g = r(188597),
    E = r(695346),
    v = r(131704),
    I = r(314897),
    T = r(592125),
    b = r(19780),
    y = r(944486),
    S = r(594174),
    A = r(626135),
    N = r(585483),
    C = r(358085),
    R = r(624138),
    O = r(24933),
    D = r(115130),
    L = r(566620),
    x = r(317381),
    w = r(969345),
    P = r(148720),
    M = r(122613),
    k = r(782769),
    U = r(761122),
    B = r(983695),
    G = r(917107),
    Z = r(981631),
    F = r(388032);
function V(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let j = 2000;
!(function (e) {
    (e[(e.ClientError = 0)] = 'ClientError'), (e[(e.CallbackError = 1)] = 'CallbackError'), (e[(e.ApiError = 2)] = 'ApiError');
})(a || (a = {}));
let H = {},
    Y = {};
function W(e) {
    var n;
    return { releasePhase: null == e ? void 0 : null === (n = e.activity) || void 0 === n ? void 0 : n.client_platform_config[(0, U.Z)((0, C.getOS)())].release_phase };
}
function K(e) {
    let { applicationId: n, nonce: r, analyticsLocations: i, source: a } = e;
    (null != i || null != a) &&
        (Y[n] = {
            nonce: r,
            locations: i,
            source: a
        });
}
async function z(e) {
    var n, r;
    let { channelId: i, applicationId: a, locationId: s, instanceId: o } = e,
        u = x.ZP.getEmbeddedActivityDurationMs(i, a),
        c = I.default.getSessionId();
    null != s &&
        null != o &&
        null != c &&
        (await l.tn.post({
            url: Z.ANM.ACTIVITY_LEAVE(a, s, o),
            body: { session_id: c },
            retries: 2,
            rejectWithError: !1
        }));
    let d = H[a],
        f = T.Z.getChannel(i),
        _ = S.default.getCurrentUser();
    if (null == d || null == f || null == _) return;
    let p = f.getGuildId(),
        m = x.ZP.getShelfActivities(p),
        g = (0, w.Z)({
            applicationId: a,
            activityConfigs: m
        }),
        { releasePhase: E } = W(g),
        v = await h.Z.getRawThermalState();
    A.default.track(Z.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: f.id,
        guild_id: p,
        media_session_id: d.mediaSessionIds[0],
        activity_session_id: d.activitySessionId,
        application_id: a,
        duration_ms: u,
        user_premium_tier: _.premiumType,
        raw_thermal_state: v,
        release_phase: E,
        activity_premium_tier_requirement: null == g ? void 0 : null === (n = g.activity) || void 0 === n ? void 0 : n.premium_tier_requirement,
        shelf_rank: null == g ? void 0 : null === (r = g.activity) || void 0 === r ? void 0 : r.shelf_rank,
        activity_user_session_id: d.activityUserSessionId,
        channel_type: f.type,
        media_session_ids: d.mediaSessionIds
    }),
        A.default.track(Z.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: f.id,
            guild_id: p,
            application_id: a,
            instance_ids: null != d.launchId ? [d.launchId] : void 0,
            media_session_ids: d.mediaSessionIds,
            activity_user_session_id: d.activityUserSessionId,
            raw_thermal_state: v,
            duration_ms: u
        }),
        delete H[a];
}
async function q(e) {
    var n, r, i, a;
    let { channelId: s, applicationId: l, isFirstActivityInChannel: u, isStart: d, participants: f, embeddedActivity: p } = e,
        m = I.default.getId(),
        g = f.find((e) => e.userId === m),
        E = T.Z.getChannel(s);
    if ((d && null !== (a = null == E ? void 0 : E.isPrivate()) && void 0 !== a && a && u && null == g && c.Z.selectParticipant(s, null), null == g)) return;
    let v = b.Z.getMediaSessionId(),
        y = p.compositeInstanceId,
        N = null == v && (null == E ? void 0 : E.isVocal()) === !0 && (null == E ? void 0 : E.isPrivate()) === !1;
    if (null == y || N) return;
    let C = (0, o.Z)(),
        D = 'location' in p ? 2 : 1,
        L = null == E ? void 0 : E.getGuildId(),
        P = S.default.getCurrentUser();
    if (null == E || null == P) return;
    let M = x.ZP.getShelfActivities(L),
        k = O.Z.getState().shelfOrder,
        U = (0, w.Z)({
            applicationId: l,
            activityConfigs: M
        }),
        B = 1 + k.findIndex((e) => e === l),
        { releasePhase: G } = W(U),
        F = await h.Z.getRawThermalState(),
        V = null != v ? [v] : [],
        j = {
            activitySessionId: y,
            activityUserSessionId: C,
            launchId: p.launchId,
            mediaSessionIds: V,
            activitiesInfraVersion: D
        };
    H[l] = j;
    let K = Y[l];
    !(0, R.Ew)(g.nonce) && g.nonce !== (null == K ? void 0 : K.nonce) && (K = void 0),
        A.default.track(Z.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: E.id,
            guild_id: E.getGuildId(),
            media_session_id: V[0],
            activity_session_id: y,
            application_id: l,
            location_stack: null == K ? void 0 : K.locations,
            user_premium_tier: P.premiumType,
            raw_thermal_state: F,
            n_participants: _.Z.getUserParticipantCount(E.id),
            is_activity_start: d,
            release_phase: G,
            activity_premium_tier_requirement: null == U ? void 0 : null === (n = U.activity) || void 0 === n ? void 0 : n.premium_tier_requirement,
            shelf_rank: null == U ? void 0 : null === (r = U.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: B > 0 ? B : null,
            activity_user_session_id: C,
            channel_type: E.type,
            source: null == K ? void 0 : K.source
        }),
        A.default.track(Z.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == K ? void 0 : K.locations,
            channel_id: E.id,
            channel_type: E.type,
            guild_id: E.getGuildId(),
            application_id: l,
            instance_id: p.launchId,
            initial_media_session_id: V[0],
            activity_user_session_id: C,
            raw_thermal_state: F,
            is_activity_start: d,
            shelf_rank: null == U ? void 0 : null === (i = U.activity) || void 0 === i ? void 0 : i.shelf_rank,
            shelf_sorted_rank: B > 0 ? B : null,
            activities_infra_version: D
        });
}
function Q(e) {
    return H[e];
}
class X extends d.Z {
    _initialize() {
        y.Z.addChangeListener(this.handleSelectedChannelUpdate), N.S.subscribe(Z.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.subscribe(Z.CkL.OPEN_EMBEDDED_ACTIVITY, q), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', K), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), u.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', z), u.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), u.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), u.Z.subscribe('CALL_DELETE', this.handleCallDelete), u.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), u.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), u.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    _terminate() {
        y.Z.removeChangeListener(this.handleSelectedChannelUpdate), N.S.unsubscribe(Z.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.unsubscribe(Z.CkL.OPEN_EMBEDDED_ACTIVITY, q), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', K), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), u.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', z), u.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), u.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), u.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), u.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), u.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), u.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    constructor(...e) {
        super(...e),
            V(this, 'handleSelectedChannelUpdate', () => {
                let e = y.Z.getVoiceChannelId();
                for (let { channelId: n, applicationId: r } of x.ZP.getSelfEmbeddedActivities().values())
                    (0, G.Z)(n) &&
                        n !== e &&
                        this.leaveActivity({
                            channelId: n,
                            applicationId: r
                        });
                if (null != e) {
                    let n = x.ZP.getEmbeddedActivitiesForChannel(e),
                        r = I.default.getId();
                    n.forEach((e) => {
                        if (e.userIds.has(r)) {
                            let n = x.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
                            null == n
                                ? this.leaveActivity({
                                      channelId: e.channelId,
                                      applicationId: e.applicationId
                                  })
                                : null == i &&
                                  this.hidePIPEmbed({
                                      channelId: n.channelId,
                                      applicationId: n.applicationId
                                  });
                        }
                    });
                }
                i = null != e ? e : void 0;
            }),
            V(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            V(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: n, applicationId: r } = e;
                setTimeout(() => {
                    let e = Y[r];
                    null != e && e.nonce === n && delete Y[r];
                }, j);
            }),
            V(this, 'handleActivityLaunchFail', async (e) => {
                let n,
                    r,
                    i,
                    { error: a, nonce: s, channelId: o, guildId: l, applicationId: u, isStart: c } = e,
                    d = Y[u];
                null != d && d.nonce === s ? delete Y[u] : (d = void 0);
                let f = F.intl.string(F.t['IOy+Iy']);
                if (a instanceof p.Z) {
                    (n = 0), (i = a.reason);
                    let e = D.Z.getFetchState();
                    switch ((E.Sb.getSetting() && e !== D.O.LOADED && (await (0, L.$h)()), a.reason)) {
                        case p.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            D.Z.inDevModeForApplication(u) && (f = F.intl.string(F.t.hXRXf3));
                            break;
                        case p.Z.Reasons.INVALID_CHANNEL:
                            f = F.intl.string(F.t.j29zCg);
                    }
                } else if (a instanceof m.Z) {
                    var _;
                    (n = 1), (i = a.reason), (f = null !== (_ = (0, g.A0)(a.reason, u)) && void 0 !== _ ? _ : f);
                } else
                    switch (((n = 2), (r = a.status), (i = a.code), a.code)) {
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            f = F.intl.string(F.t.Gyzcra);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            f = F.intl.string(F.t.zxv7EB);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            f = F.intl.string(F.t['H+KK6e']);
                            break;
                        case Z.evJ.INVALID_PERMISSIONS:
                            f = F.intl.string(F.t.hHGrW1);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            f = F.intl.string(F.t.j29zCg);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            f = F.intl.string(F.t['4WuFRE']);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            f = F.intl.string(F.t.RvkXdX);
                            break;
                        case Z.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            f = F.intl.string(F.t.uGDCc3);
                    }
                this.showLaunchErrorModal(f);
                let v = T.Z.getChannel(o),
                    I = await h.Z.getRawThermalState();
                A.default.track(Z.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: o,
                    guild_id: l,
                    application_id: u,
                    raw_thermal_state: I,
                    is_activity_start: c,
                    channel_type: null == v ? void 0 : v.type,
                    location_stack: null == d ? void 0 : d.locations,
                    error_type: n,
                    error_status: r,
                    error_code: i,
                    source: null == d ? void 0 : d.source
                });
            }),
            V(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: n, application: r } = e,
                    i = r.id;
                if (null != i && null != n) {
                    for (let { applicationId: e, channelId: n } of x.ZP.getSelfEmbeddedActivities().values())
                        e === i &&
                            this.leaveActivity({
                                channelId: n,
                                applicationId: i
                            });
                    n.code !== Z.$VG.CLOSE_NORMAL && this.showErrorModal(n, i);
                }
            }),
            V(this, 'handleCallDelete', (e) => {
                let { channelId: n } = e,
                    r = y.Z.getVoiceChannelId();
                null != r && r === n && this.handleCallEnded(n);
            }),
            V(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== Z.hes.DISCONNECTED) return;
                let n = e.channelId;
                this.handleCallEnded(n);
            }),
            V(this, 'handleCallEnded', (e) => {
                let n = x.ZP.getSelfEmbeddedActivityForChannel(e);
                null != n &&
                    this.leaveActivity({
                        channelId: e,
                        applicationId: n.applicationId
                    });
            }),
            V(this, 'handleDeferredOpen', async (e) => {
                var n, r, i;
                let { channelId: a, applicationId: s, analyticsLocations: o, commandOrigin: l } = e,
                    u = T.Z.getChannel(a);
                if (void 0 === u || (v.tx.has(null == u ? void 0 : u.type) && y.Z.getVoiceChannelId() !== a)) return;
                let c = x.ZP.getSelfEmbeddedActivityForChannel(a);
                if ((null == c ? void 0 : c.applicationId) === s) return;
                let d = await f.ZP.fetchApplication(s);
                if (!(0, k.a)(u)) {
                    this.showLaunchErrorModal(F.intl.string(F.t.UXoQTk));
                    return;
                }
                if (!(0, B.Z)(null == d ? void 0 : null === (n = d.embedded_activity_config) || void 0 === n ? void 0 : n.supported_platforms)) {
                    this.showLaunchErrorModal(F.intl.string(F.t.uGDCc3));
                    return;
                }
                let _ = null !== (r = null == u ? void 0 : u.getGuildId()) && void 0 !== r ? r : void 0,
                    { activityConfigs: h, applications: p } = await (0, L.w1)({ guildId: _ }),
                    m = (0, w.Z)({
                        applicationId: s,
                        activityConfigs: h,
                        applications: p
                    });
                if (null == m) {
                    let e = await (0, L.w1)({
                        guildId: _,
                        force: !0
                    });
                    m = (0, w.Z)({
                        applicationId: s,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let g = x.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === s);
                (null !== (i = null == g ? void 0 : g.userIds.size) && void 0 !== i ? i : 0) > 0
                    ? await (0, P.k)({
                          channelId: a,
                          applicationId: s,
                          launchId: null == g ? void 0 : g.launchId,
                          inputApplication: null,
                          analyticsLocations: o
                      })
                    : await (0, M.Z)({
                          targetApplicationId: s,
                          channelId: a,
                          analyticsLocations: o,
                          commandOrigin: l
                      });
            }),
            V(this, 'handleGuildDelete', (e) => {
                let { guild: n } = e;
                x.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { channelId: r, applicationId: i, guildId: a } = e;
                    n.id === a &&
                        this.leaveActivity({
                            channelId: r,
                            applicationId: i
                        });
                });
            }),
            V(this, 'handleChannelDelete', (e) => {
                let { channel: n } = e,
                    r = x.ZP.getSelfEmbeddedActivityForChannel(n.id);
                null != r &&
                    this.leaveActivity({
                        channelId: n.id,
                        applicationId: r.applicationId
                    });
            });
    }
}
