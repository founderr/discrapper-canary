let r;
n.d(t, {
    U: function () {
        return W;
    },
    Z: function () {
        return K;
    }
}),
    n(47120);
var i = n(772848),
    a = n(544891),
    s = n(570140),
    o = n(475179),
    l = n(317770),
    u = n(728345),
    c = n(358221),
    d = n(42352),
    _ = n(233764),
    E = n(375824),
    f = n(188597),
    h = n(695346),
    p = n(131704),
    I = n(314897),
    m = n(592125),
    T = n(19780),
    S = n(944486),
    g = n(594174),
    A = n(626135),
    N = n(585483),
    O = n(358085),
    R = n(624138),
    v = n(24933),
    C = n(115130),
    y = n(566620),
    L = n(317381),
    D = n(969345),
    b = n(148720),
    M = n(122613),
    P = n(782769),
    U = n(761122),
    w = n(983695),
    x = n(917107),
    G = n(981631),
    k = n(689938);
function B(e, t, n) {
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
let F = {},
    V = {};
function H(e) {
    var t;
    return { releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, U.Z)((0, O.getOS)())].release_phase };
}
function Z(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    (null != r || null != i) &&
        (V[t] = {
            nonce: n,
            locations: r,
            source: i
        });
}
async function Y(e) {
    var t, n;
    let { channelId: r, applicationId: i, locationId: s, instanceId: o } = e,
        l = L.ZP.getEmbeddedActivityDurationMs(r, i),
        u = I.default.getSessionId();
    null != s &&
        null != o &&
        null != u &&
        (await a.tn.post({
            url: G.ANM.ACTIVITY_LEAVE(i, s, o),
            body: { session_id: u },
            retries: 2
        }));
    let c = F[i],
        _ = m.Z.getChannel(r),
        E = g.default.getCurrentUser();
    if (null == c || null == _ || null == E) return;
    let f = _.getGuildId(),
        h = L.ZP.getShelfActivities(f),
        p = (0, D.Z)({
            applicationId: i,
            activityConfigs: h
        }),
        { releasePhase: T } = H(p),
        S = await (0, d.Z)();
    A.default.track(G.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: _.id,
        guild_id: f,
        media_session_id: c.mediaSessionIds[0],
        activity_session_id: c.activitySessionId,
        application_id: i,
        duration_ms: l,
        user_premium_tier: E.premiumType,
        raw_thermal_state: S,
        release_phase: T,
        activity_premium_tier_requirement: null == p ? void 0 : null === (t = p.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
        shelf_rank: null == p ? void 0 : null === (n = p.activity) || void 0 === n ? void 0 : n.shelf_rank,
        activity_user_session_id: c.activityUserSessionId,
        channel_type: _.type,
        media_session_ids: c.mediaSessionIds
    }),
        A.default.track(G.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: _.id,
            guild_id: f,
            application_id: i,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: S,
            duration_ms: l
        }),
        delete F[i];
}
async function j(e) {
    var t, n, r, a;
    let { channelId: s, applicationId: l, isFirstActivityInChannel: u, isStart: _, participants: E, embeddedActivity: f } = e,
        h = I.default.getId(),
        p = E.find((e) => e.userId === h),
        S = m.Z.getChannel(s);
    if ((_ && null !== (a = null == S ? void 0 : S.isPrivate()) && void 0 !== a && a && u && null == p && o.Z.selectParticipant(s, null), null == p)) return;
    let N = T.Z.getMediaSessionId(),
        O = f.compositeInstanceId,
        C = null == N && (null == S ? void 0 : S.isVocal()) === !0 && (null == S ? void 0 : S.isPrivate()) === !1;
    if (null == O || C) return;
    let y = (0, i.Z)(),
        b = 'location' in f ? 2 : 1,
        M = null == S ? void 0 : S.getGuildId(),
        P = g.default.getCurrentUser();
    if (null == S || null == P) return;
    let U = L.ZP.getShelfActivities(M),
        w = v.Z.getState().shelfOrder,
        x = (0, D.Z)({
            applicationId: l,
            activityConfigs: U
        }),
        k = 1 + w.findIndex((e) => e === l),
        { releasePhase: B } = H(x),
        Z = await (0, d.Z)(),
        Y = null != N ? [N] : [],
        j = {
            activitySessionId: O,
            activityUserSessionId: y,
            launchId: f.launchId,
            mediaSessionIds: Y,
            activitiesInfraVersion: b
        };
    F[l] = j;
    let W = V[l];
    !(0, R.Ew)(p.nonce) && p.nonce !== (null == W ? void 0 : W.nonce) && (W = void 0),
        A.default.track(G.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: S.id,
            guild_id: S.getGuildId(),
            media_session_id: Y[0],
            activity_session_id: O,
            application_id: l,
            location_stack: null == W ? void 0 : W.locations,
            user_premium_tier: P.premiumType,
            raw_thermal_state: Z,
            n_participants: c.Z.getUserParticipantCount(S.id),
            is_activity_start: _,
            release_phase: B,
            activity_premium_tier_requirement: null == x ? void 0 : null === (t = x.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == x ? void 0 : null === (n = x.activity) || void 0 === n ? void 0 : n.shelf_rank,
            shelf_sorted_rank: k > 0 ? k : null,
            activity_user_session_id: y,
            channel_type: S.type,
            source: null == W ? void 0 : W.source
        }),
        A.default.track(G.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == W ? void 0 : W.locations,
            channel_id: S.id,
            channel_type: S.type,
            guild_id: S.getGuildId(),
            application_id: l,
            instance_id: f.launchId,
            initial_media_session_id: Y[0],
            activity_user_session_id: y,
            raw_thermal_state: Z,
            is_activity_start: _,
            shelf_rank: null == x ? void 0 : null === (r = x.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: k > 0 ? k : null,
            activities_infra_version: b
        });
}
function W(e) {
    return F[e];
}
class K extends l.Z {
    _initialize() {
        S.Z.addChangeListener(this.handleSelectedChannelUpdate), N.S.subscribe(G.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.subscribe(G.CkL.OPEN_EMBEDDED_ACTIVITY, j), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', Z), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', Y), s.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.subscribe('CALL_DELETE', this.handleCallDelete), s.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    _terminate() {
        S.Z.removeChangeListener(this.handleSelectedChannelUpdate), N.S.unsubscribe(G.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.unsubscribe(G.CkL.OPEN_EMBEDDED_ACTIVITY, j), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', Z), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', Y), s.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    constructor(...e) {
        super(...e),
            B(this, 'handleSelectedChannelUpdate', () => {
                let e = S.Z.getVoiceChannelId();
                for (let { channelId: t, applicationId: n } of L.ZP.getSelfEmbeddedActivities().values())
                    (0, x.Z)(t) &&
                        t !== e &&
                        this.leaveActivity({
                            channelId: t,
                            applicationId: n
                        });
                if (null != e) {
                    let t = L.ZP.getEmbeddedActivitiesForChannel(e),
                        n = I.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = L.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
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
            B(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            B(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: t, applicationId: n } = e;
                setTimeout(() => {
                    let e = V[n];
                    null != e && e.nonce === t && delete V[n];
                }, 2000);
            }),
            B(this, 'handleActivityLaunchFail', async (e) => {
                let { error: t, nonce: n, applicationId: r } = e,
                    i = V[r];
                null != i && i.nonce === n && delete V[r];
                let a = k.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                if (t instanceof _.Z) {
                    let e = C.Z.getFetchState();
                    if ((h.Sb.getSetting() && 'loaded' !== e && (await (0, y.$h)()), t.reason === _.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND)) C.Z.inDevModeForApplication(r) && (a = k.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_MISSING_PRIMARY_APP_COMMAND);
                } else if (t instanceof E.Z) {
                    var s;
                    a = null !== (s = (0, f.A0)(t.reason, r)) && void 0 !== s ? s : a;
                } else
                    switch (t.code) {
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            a = k.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            a = k.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            a = k.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                            break;
                        case G.evJ.INVALID_PERMISSIONS:
                            a = k.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            a = k.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            a = k.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            a = k.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE;
                            break;
                        case G.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            a = k.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
                    }
                this.showLaunchErrorModal(a);
            }),
            B(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null != r && null != t) {
                    for (let { applicationId: e, channelId: t } of L.ZP.getSelfEmbeddedActivities().values())
                        e === r &&
                            this.leaveActivity({
                                channelId: t,
                                applicationId: r
                            });
                    t.code !== G.$VG.CLOSE_NORMAL && this.showErrorModal(t, r);
                }
            }),
            B(this, 'handleCallDelete', (e) => {
                let { channelId: t } = e,
                    n = S.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            B(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== G.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            B(this, 'handleCallEnded', (e) => {
                let t = L.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        channelId: e,
                        applicationId: t.applicationId
                    });
            }),
            B(this, 'handleDeferredOpen', async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: s, commandOrigin: o } = e,
                    l = m.Z.getChannel(i);
                if (void 0 === l || (p.tx.has(null == l ? void 0 : l.type) && S.Z.getVoiceChannelId() !== i)) return;
                let c = L.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == c ? void 0 : c.applicationId) === a) return;
                let d = await u.Z.fetchApplication(a);
                if (!(0, P.a)(l)) {
                    this.showLaunchErrorModal(k.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                    return;
                }
                if (!(0, w.Z)(null == d ? void 0 : null === (t = d.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(k.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                    return;
                }
                let _ = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
                    { activityConfigs: E, applications: f } = await (0, y.w1)({ guildId: _ }),
                    h = (0, D.Z)({
                        applicationId: a,
                        activityConfigs: E,
                        applications: f
                    });
                if (null == h) {
                    let e = await (0, y.w1)({
                        guildId: _,
                        force: !0
                    });
                    h = (0, D.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let I = L.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a),
                    T = null !== (r = null == I ? void 0 : I.userIds.size) && void 0 !== r ? r : 0;
                T > 0
                    ? await (0, b.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == I ? void 0 : I.launchId,
                          inputApplication: null,
                          analyticsLocations: s,
                          commandOrigin: o
                      })
                    : await (0, M.Z)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: s,
                          commandOrigin: o
                      });
            }),
            B(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                L.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { channelId: n, applicationId: r, guildId: i } = e;
                    t.id === i &&
                        this.leaveActivity({
                            channelId: n,
                            applicationId: r
                        });
                });
            }),
            B(this, 'handleChannelDelete', (e) => {
                let { channel: t } = e,
                    n = L.ZP.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        channelId: t.id,
                        applicationId: n.applicationId
                    });
            });
    }
}
