let r;
n.d(t, {
    U: function () {
        return z;
    },
    Z: function () {
        return q;
    }
}),
    n(47120);
var i,
    a,
    s = n(772848),
    o = n(544891),
    l = n(570140),
    u = n(475179),
    c = n(317770),
    d = n(728345),
    f = n(358221),
    _ = n(42352),
    p = n(233764),
    h = n(375824),
    m = n(188597),
    g = n(695346),
    E = n(131704),
    v = n(314897),
    b = n(592125),
    I = n(19780),
    S = n(944486),
    T = n(594174),
    y = n(626135),
    A = n(585483),
    N = n(358085),
    C = n(624138),
    R = n(24933),
    O = n(115130),
    D = n(566620),
    L = n(317381),
    x = n(969345),
    w = n(148720),
    M = n(122613),
    P = n(782769),
    k = n(761122),
    U = n(983695),
    B = n(917107),
    G = n(981631),
    Z = n(388032);
function F(e, t, n) {
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
((a = i || (i = {}))[(a.ClientError = 0)] = 'ClientError'), (a[(a.CallbackError = 1)] = 'CallbackError'), (a[(a.ApiError = 2)] = 'ApiError');
let V = {},
    j = {};
function H(e) {
    var t;
    return { releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, k.Z)((0, N.getOS)())].release_phase };
}
function Y(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    (null != r || null != i) &&
        (j[t] = {
            nonce: n,
            locations: r,
            source: i
        });
}
async function W(e) {
    var t, n;
    let { channelId: r, applicationId: i, locationId: a, instanceId: s } = e,
        l = L.ZP.getEmbeddedActivityDurationMs(r, i),
        u = v.default.getSessionId();
    null != a &&
        null != s &&
        null != u &&
        (await o.tn.post({
            url: G.ANM.ACTIVITY_LEAVE(i, a, s),
            body: { session_id: u },
            retries: 2,
            rejectWithError: !1
        }));
    let c = V[i],
        d = b.Z.getChannel(r),
        f = T.default.getCurrentUser();
    if (null == c || null == d || null == f) return;
    let p = d.getGuildId(),
        h = L.ZP.getShelfActivities(p),
        m = (0, x.Z)({
            applicationId: i,
            activityConfigs: h
        }),
        { releasePhase: g } = H(m),
        E = await (0, _.Z)();
    y.default.track(G.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: d.id,
        guild_id: p,
        media_session_id: c.mediaSessionIds[0],
        activity_session_id: c.activitySessionId,
        application_id: i,
        duration_ms: l,
        user_premium_tier: f.premiumType,
        raw_thermal_state: E,
        release_phase: g,
        activity_premium_tier_requirement: null == m ? void 0 : null === (t = m.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
        shelf_rank: null == m ? void 0 : null === (n = m.activity) || void 0 === n ? void 0 : n.shelf_rank,
        activity_user_session_id: c.activityUserSessionId,
        channel_type: d.type,
        media_session_ids: c.mediaSessionIds
    }),
        y.default.track(G.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: d.id,
            guild_id: p,
            application_id: i,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: E,
            duration_ms: l
        }),
        delete V[i];
}
async function K(e) {
    var t, n, r, i;
    let { channelId: a, applicationId: o, isFirstActivityInChannel: l, isStart: c, participants: d, embeddedActivity: p } = e,
        h = v.default.getId(),
        m = d.find((e) => e.userId === h),
        g = b.Z.getChannel(a);
    if ((c && null !== (i = null == g ? void 0 : g.isPrivate()) && void 0 !== i && i && l && null == m && u.Z.selectParticipant(a, null), null == m)) return;
    let E = I.Z.getMediaSessionId(),
        S = p.compositeInstanceId,
        A = null == E && (null == g ? void 0 : g.isVocal()) === !0 && (null == g ? void 0 : g.isPrivate()) === !1;
    if (null == S || A) return;
    let N = (0, s.Z)(),
        O = 'location' in p ? 2 : 1,
        D = null == g ? void 0 : g.getGuildId(),
        w = T.default.getCurrentUser();
    if (null == g || null == w) return;
    let M = L.ZP.getShelfActivities(D),
        P = R.Z.getState().shelfOrder,
        k = (0, x.Z)({
            applicationId: o,
            activityConfigs: M
        }),
        U = 1 + P.findIndex((e) => e === o),
        { releasePhase: B } = H(k),
        Z = await (0, _.Z)(),
        F = null != E ? [E] : [],
        Y = {
            activitySessionId: S,
            activityUserSessionId: N,
            launchId: p.launchId,
            mediaSessionIds: F,
            activitiesInfraVersion: O
        };
    V[o] = Y;
    let W = j[o];
    !(0, C.Ew)(m.nonce) && m.nonce !== (null == W ? void 0 : W.nonce) && (W = void 0),
        y.default.track(G.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: g.id,
            guild_id: g.getGuildId(),
            media_session_id: F[0],
            activity_session_id: S,
            application_id: o,
            location_stack: null == W ? void 0 : W.locations,
            user_premium_tier: w.premiumType,
            raw_thermal_state: Z,
            n_participants: f.Z.getUserParticipantCount(g.id),
            is_activity_start: c,
            release_phase: B,
            activity_premium_tier_requirement: null == k ? void 0 : null === (t = k.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == k ? void 0 : null === (n = k.activity) || void 0 === n ? void 0 : n.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activity_user_session_id: N,
            channel_type: g.type,
            source: null == W ? void 0 : W.source
        }),
        y.default.track(G.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == W ? void 0 : W.locations,
            channel_id: g.id,
            channel_type: g.type,
            guild_id: g.getGuildId(),
            application_id: o,
            instance_id: p.launchId,
            initial_media_session_id: F[0],
            activity_user_session_id: N,
            raw_thermal_state: Z,
            is_activity_start: c,
            shelf_rank: null == k ? void 0 : null === (r = k.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activities_infra_version: O
        });
}
function z(e) {
    return V[e];
}
class q extends c.Z {
    _initialize() {
        S.Z.addChangeListener(this.handleSelectedChannelUpdate), A.S.subscribe(G.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), A.S.subscribe(G.CkL.OPEN_EMBEDDED_ACTIVITY, K), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', Y), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', W), l.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.subscribe('CALL_DELETE', this.handleCallDelete), l.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), l.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), l.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    _terminate() {
        S.Z.removeChangeListener(this.handleSelectedChannelUpdate), A.S.unsubscribe(G.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), A.S.unsubscribe(G.CkL.OPEN_EMBEDDED_ACTIVITY, K), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', Y), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', W), l.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), l.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), l.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), l.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    constructor(...e) {
        super(...e),
            F(this, 'handleSelectedChannelUpdate', () => {
                let e = S.Z.getVoiceChannelId();
                for (let { channelId: t, applicationId: n } of L.ZP.getSelfEmbeddedActivities().values())
                    (0, B.Z)(t) &&
                        t !== e &&
                        this.leaveActivity({
                            channelId: t,
                            applicationId: n
                        });
                if (null != e) {
                    let t = L.ZP.getEmbeddedActivitiesForChannel(e),
                        n = v.default.getId();
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
            F(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            F(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: t, applicationId: n } = e;
                setTimeout(() => {
                    let e = j[n];
                    null != e && e.nonce === t && delete j[n];
                }, 2000);
            }),
            F(this, 'handleActivityLaunchFail', async (e) => {
                let t,
                    n,
                    r,
                    { error: i, nonce: a, channelId: s, guildId: o, applicationId: l, isStart: u } = e,
                    c = j[l];
                null != c && c.nonce === a ? delete j[l] : (c = void 0);
                let d = Z.intl.string(Z.t['IOy+Iy']);
                if (i instanceof p.Z) {
                    (t = 0), (r = i.reason);
                    let e = O.Z.getFetchState();
                    switch ((g.Sb.getSetting() && e !== O.O.LOADED && (await (0, D.$h)()), i.reason)) {
                        case p.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            O.Z.inDevModeForApplication(l) && (d = Z.intl.string(Z.t.hXRXf3));
                            break;
                        case p.Z.Reasons.INVALID_CHANNEL:
                            d = Z.intl.string(Z.t.j29zCg);
                    }
                } else if (i instanceof h.Z) {
                    var f;
                    (t = 1), (r = i.reason), (d = null !== (f = (0, m.A0)(i.reason, l)) && void 0 !== f ? f : d);
                } else
                    switch (((t = 2), (n = i.status), (r = i.code), i.code)) {
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            d = Z.intl.string(Z.t.Gyzcra);
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            d = Z.intl.string(Z.t.zxv7EB);
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            d = Z.intl.string(Z.t['H+KK6e']);
                            break;
                        case G.evJ.INVALID_PERMISSIONS:
                            d = Z.intl.string(Z.t.hHGrW1);
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            d = Z.intl.string(Z.t.j29zCg);
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            d = Z.intl.string(Z.t['4WuFRE']);
                            break;
                        case G.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            d = Z.intl.string(Z.t.RvkXdX);
                            break;
                        case G.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            d = Z.intl.string(Z.t.uGDCc3);
                    }
                this.showLaunchErrorModal(d);
                let E = b.Z.getChannel(s),
                    v = await (0, _.Z)();
                y.default.track(G.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: s,
                    guild_id: o,
                    application_id: l,
                    raw_thermal_state: v,
                    is_activity_start: u,
                    channel_type: null == E ? void 0 : E.type,
                    location_stack: null == c ? void 0 : c.locations,
                    error_type: t,
                    error_status: n,
                    error_code: r,
                    source: null == c ? void 0 : c.source
                });
            }),
            F(this, 'superHandleRPCDisconnect', (e) => {
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
            F(this, 'handleCallDelete', (e) => {
                let { channelId: t } = e,
                    n = S.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            F(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== G.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            F(this, 'handleCallEnded', (e) => {
                let t = L.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        channelId: e,
                        applicationId: t.applicationId
                    });
            }),
            F(this, 'handleDeferredOpen', async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: s, commandOrigin: o } = e,
                    l = b.Z.getChannel(i);
                if (void 0 === l || (E.tx.has(null == l ? void 0 : l.type) && S.Z.getVoiceChannelId() !== i)) return;
                let u = L.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let c = await d.ZP.fetchApplication(a);
                if (!(0, P.a)(l)) {
                    this.showLaunchErrorModal(Z.intl.string(Z.t.UXoQTk));
                    return;
                }
                if (!(0, U.Z)(null == c ? void 0 : null === (t = c.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(Z.intl.string(Z.t.uGDCc3));
                    return;
                }
                let f = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
                    { activityConfigs: _, applications: p } = await (0, D.w1)({ guildId: f }),
                    h = (0, x.Z)({
                        applicationId: a,
                        activityConfigs: _,
                        applications: p
                    });
                if (null == h) {
                    let e = await (0, D.w1)({
                        guildId: f,
                        force: !0
                    });
                    h = (0, x.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let m = L.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a),
                    g = null !== (r = null == m ? void 0 : m.userIds.size) && void 0 !== r ? r : 0;
                g > 0
                    ? await (0, w.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == m ? void 0 : m.launchId,
                          inputApplication: null,
                          analyticsLocations: s
                      })
                    : await (0, M.Z)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: s,
                          commandOrigin: o
                      });
            }),
            F(this, 'handleGuildDelete', (e) => {
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
            F(this, 'handleChannelDelete', (e) => {
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
