let r;
n.d(t, {
    U: function () {
        return q;
    },
    Z: function () {
        return Q;
    }
});
var i,
    a = n(47120);
var o = n(772848),
    s = n(544891),
    l = n(570140),
    u = n(475179),
    c = n(317770),
    d = n(728345),
    _ = n(358221),
    E = n(42352),
    f = n(233764),
    h = n(375824),
    p = n(188597),
    m = n(695346),
    I = n(131704),
    T = n(314897),
    g = n(592125),
    S = n(19780),
    A = n(944486),
    v = n(594174),
    N = n(626135),
    O = n(585483),
    R = n(358085),
    C = n(624138),
    y = n(24933),
    L = n(115130),
    b = n(566620),
    D = n(317381),
    M = n(969345),
    P = n(148720),
    U = n(122613),
    w = n(782769),
    x = n(761122),
    G = n(983695),
    k = n(917107),
    B = n(981631),
    F = n(689938);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let V = 2000;
!(function (e) {
    (e[(e.ClientError = 0)] = 'ClientError'), (e[(e.CallbackError = 1)] = 'CallbackError'), (e[(e.ApiError = 2)] = 'ApiError');
})(i || (i = {}));
let H = {},
    Y = {};
function j(e) {
    var t;
    return { releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, x.Z)((0, R.getOS)())].release_phase };
}
function W(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    (null != r || null != i) &&
        (Y[t] = {
            nonce: n,
            locations: r,
            source: i
        });
}
async function K(e) {
    var t, n;
    let { channelId: r, applicationId: i, locationId: a, instanceId: o } = e,
        l = D.ZP.getEmbeddedActivityDurationMs(r, i),
        u = T.default.getSessionId();
    null != a &&
        null != o &&
        null != u &&
        (await s.tn.post({
            url: B.ANM.ACTIVITY_LEAVE(i, a, o),
            body: { session_id: u },
            retries: 2
        }));
    let c = H[i],
        d = g.Z.getChannel(r),
        _ = v.default.getCurrentUser();
    if (null == c || null == d || null == _) return;
    let f = d.getGuildId(),
        h = D.ZP.getShelfActivities(f),
        p = (0, M.Z)({
            applicationId: i,
            activityConfigs: h
        }),
        { releasePhase: m } = j(p),
        I = await (0, E.Z)();
    N.default.track(B.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: d.id,
        guild_id: f,
        media_session_id: c.mediaSessionIds[0],
        activity_session_id: c.activitySessionId,
        application_id: i,
        duration_ms: l,
        user_premium_tier: _.premiumType,
        raw_thermal_state: I,
        release_phase: m,
        activity_premium_tier_requirement: null == p ? void 0 : null === (t = p.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
        shelf_rank: null == p ? void 0 : null === (n = p.activity) || void 0 === n ? void 0 : n.shelf_rank,
        activity_user_session_id: c.activityUserSessionId,
        channel_type: d.type,
        media_session_ids: c.mediaSessionIds
    }),
        N.default.track(B.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: d.id,
            guild_id: f,
            application_id: i,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: I,
            duration_ms: l
        }),
        delete H[i];
}
async function z(e) {
    var t, n, r, i;
    let { channelId: a, applicationId: s, isFirstActivityInChannel: l, isStart: c, participants: d, embeddedActivity: f } = e,
        h = T.default.getId(),
        p = d.find((e) => e.userId === h),
        m = g.Z.getChannel(a);
    if ((c && null !== (i = null == m ? void 0 : m.isPrivate()) && void 0 !== i && i && l && null == p && u.Z.selectParticipant(a, null), null == p)) return;
    let I = S.Z.getMediaSessionId(),
        A = f.compositeInstanceId,
        O = null == I && (null == m ? void 0 : m.isVocal()) === !0 && (null == m ? void 0 : m.isPrivate()) === !1;
    if (null == A || O) return;
    let R = (0, o.Z)(),
        L = 'location' in f ? 2 : 1,
        b = null == m ? void 0 : m.getGuildId(),
        P = v.default.getCurrentUser();
    if (null == m || null == P) return;
    let U = D.ZP.getShelfActivities(b),
        w = y.Z.getState().shelfOrder,
        x = (0, M.Z)({
            applicationId: s,
            activityConfigs: U
        }),
        G = 1 + w.findIndex((e) => e === s),
        { releasePhase: k } = j(x),
        F = await (0, E.Z)(),
        Z = null != I ? [I] : [],
        V = {
            activitySessionId: A,
            activityUserSessionId: R,
            launchId: f.launchId,
            mediaSessionIds: Z,
            activitiesInfraVersion: L
        };
    H[s] = V;
    let W = Y[s];
    !(0, C.Ew)(p.nonce) && p.nonce !== (null == W ? void 0 : W.nonce) && (W = void 0),
        N.default.track(B.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: m.id,
            guild_id: m.getGuildId(),
            media_session_id: Z[0],
            activity_session_id: A,
            application_id: s,
            location_stack: null == W ? void 0 : W.locations,
            user_premium_tier: P.premiumType,
            raw_thermal_state: F,
            n_participants: _.Z.getUserParticipantCount(m.id),
            is_activity_start: c,
            release_phase: k,
            activity_premium_tier_requirement: null == x ? void 0 : null === (t = x.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == x ? void 0 : null === (n = x.activity) || void 0 === n ? void 0 : n.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activity_user_session_id: R,
            channel_type: m.type,
            source: null == W ? void 0 : W.source
        }),
        N.default.track(B.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == W ? void 0 : W.locations,
            channel_id: m.id,
            channel_type: m.type,
            guild_id: m.getGuildId(),
            application_id: s,
            instance_id: f.launchId,
            initial_media_session_id: Z[0],
            activity_user_session_id: R,
            raw_thermal_state: F,
            is_activity_start: c,
            shelf_rank: null == x ? void 0 : null === (r = x.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activities_infra_version: L
        });
}
function q(e) {
    return H[e];
}
class Q extends c.Z {
    _initialize() {
        A.Z.addChangeListener(this.handleSelectedChannelUpdate), O.S.subscribe(B.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), O.S.subscribe(B.CkL.OPEN_EMBEDDED_ACTIVITY, z), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', W), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', K), l.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.subscribe('CALL_DELETE', this.handleCallDelete), l.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), l.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), l.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    _terminate() {
        A.Z.removeChangeListener(this.handleSelectedChannelUpdate), O.S.unsubscribe(B.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), O.S.unsubscribe(B.CkL.OPEN_EMBEDDED_ACTIVITY, z), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', W), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', K), l.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), l.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), l.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), l.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    constructor(...e) {
        super(...e),
            Z(this, 'handleSelectedChannelUpdate', () => {
                let e = A.Z.getVoiceChannelId();
                for (let { channelId: t, applicationId: n } of D.ZP.getSelfEmbeddedActivities().values())
                    (0, k.Z)(t) &&
                        t !== e &&
                        this.leaveActivity({
                            channelId: t,
                            applicationId: n
                        });
                if (null != e) {
                    let t = D.ZP.getEmbeddedActivitiesForChannel(e),
                        n = T.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = D.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
                            null == t
                                ? this.leaveActivity({
                                      channelId: e.channelId,
                                      applicationId: e.applicationId
                                  })
                                : null == r &&
                                  this.hidePIPEmbed({
                                      channelId: t.channelId,
                                      applicationId: t.applicationId
                                  });
                        }
                    });
                }
                r = null != e ? e : void 0;
            }),
            Z(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            Z(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: t, applicationId: n } = e;
                setTimeout(() => {
                    let e = Y[n];
                    null != e && e.nonce === t && delete Y[n];
                }, V);
            }),
            Z(this, 'handleActivityLaunchFail', async (e) => {
                let t,
                    n,
                    r,
                    { error: i, nonce: a, channelId: o, guildId: s, applicationId: l, isStart: u } = e,
                    c = Y[l];
                null != c && c.nonce === a ? delete Y[l] : (c = void 0);
                let d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                if (i instanceof f.Z) {
                    (t = 0), (r = i.reason);
                    let e = L.Z.getFetchState();
                    switch ((m.Sb.getSetting() && e !== L.O.LOADED && (await (0, b.$h)()), i.reason)) {
                        case f.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            L.Z.inDevModeForApplication(l) && (d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_MISSING_PRIMARY_APP_COMMAND);
                            break;
                        case f.Z.Reasons.INVALID_CHANNEL:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                    }
                } else if (i instanceof h.Z) {
                    var _;
                    (t = 1), (r = i.reason), (d = null !== (_ = (0, p.A0)(i.reason, l)) && void 0 !== _ ? _ : d);
                } else
                    switch (((t = 2), (n = i.status), (r = i.code), i.code)) {
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                            break;
                        case B.evJ.INVALID_PERMISSIONS:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_USER_INSTALL_IN_LARGE_GUILD;
                            break;
                        case B.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
                    }
                this.showLaunchErrorModal(d);
                let I = g.Z.getChannel(o),
                    T = await (0, E.Z)();
                N.default.track(B.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: o,
                    guild_id: s,
                    application_id: l,
                    raw_thermal_state: T,
                    is_activity_start: u,
                    channel_type: null == I ? void 0 : I.type,
                    location_stack: null == c ? void 0 : c.locations,
                    error_type: t,
                    error_status: n,
                    error_code: r,
                    source: null == c ? void 0 : c.source
                });
            }),
            Z(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null != r && null != t) {
                    for (let { applicationId: e, channelId: t } of D.ZP.getSelfEmbeddedActivities().values())
                        e === r &&
                            this.leaveActivity({
                                channelId: t,
                                applicationId: r
                            });
                    t.code !== B.$VG.CLOSE_NORMAL && this.showErrorModal(t, r);
                }
            }),
            Z(this, 'handleCallDelete', (e) => {
                let { channelId: t } = e,
                    n = A.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            Z(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== B.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            Z(this, 'handleCallEnded', (e) => {
                let t = D.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        channelId: e,
                        applicationId: t.applicationId
                    });
            }),
            Z(this, 'handleDeferredOpen', async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: o, commandOrigin: s } = e,
                    l = g.Z.getChannel(i);
                if (void 0 === l || (I.tx.has(null == l ? void 0 : l.type) && A.Z.getVoiceChannelId() !== i)) return;
                let u = D.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let c = await d.ZP.fetchApplication(a);
                if (!(0, w.a)(l)) {
                    this.showLaunchErrorModal(F.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                    return;
                }
                if (!(0, G.Z)(null == c ? void 0 : null === (t = c.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(F.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                    return;
                }
                let _ = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
                    { activityConfigs: E, applications: f } = await (0, b.w1)({ guildId: _ }),
                    h = (0, M.Z)({
                        applicationId: a,
                        activityConfigs: E,
                        applications: f
                    });
                if (null == h) {
                    let e = await (0, b.w1)({
                        guildId: _,
                        force: !0
                    });
                    h = (0, M.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let p = D.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a);
                (null !== (r = null == p ? void 0 : p.userIds.size) && void 0 !== r ? r : 0) > 0
                    ? await (0, P.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == p ? void 0 : p.launchId,
                          inputApplication: null,
                          analyticsLocations: o
                      })
                    : await (0, U.Z)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: o,
                          commandOrigin: s
                      });
            }),
            Z(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                D.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { channelId: n, applicationId: r, guildId: i } = e;
                    t.id === i &&
                        this.leaveActivity({
                            channelId: n,
                            applicationId: r
                        });
                });
            }),
            Z(this, 'handleChannelDelete', (e) => {
                let { channel: t } = e,
                    n = D.ZP.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        channelId: t.id,
                        applicationId: n.applicationId
                    });
            });
    }
}
