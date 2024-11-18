let r;
n.d(t, {
    i6: function () {
        return N;
    }
}),
    n(47120),
    n(653041),
    n(51350);
var i,
    a = n(442837),
    s = n(570140),
    o = n(911969),
    l = n(895924),
    u = n(522474),
    c = n(314897),
    d = n(592125),
    f = n(944486),
    _ = n(594174),
    p = n(585483),
    h = n(358085),
    m = n(155268),
    g = n(413458),
    E = n(316253),
    v = n(761122),
    b = n(917107),
    I = n(701488),
    S = n(918559),
    T = n(981631);
function y(e, t, n) {
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
let A = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    N = [],
    C = [],
    R = new Map(),
    O = new Map(),
    D = new Map(),
    L = new Map(),
    x = new Map(),
    w = new Map(),
    M = new Map(),
    P = new Map(),
    k = new Map(),
    U = new Map(),
    G = new Map();
let B = S.Ez.DISCONNECTED,
    Z = S.MI.RESIZABLE,
    F = I.GM.NORMAL;
function V(e) {
    return null != e ? e : '0';
}
function j(e) {
    var t, n, i, a;
    let { guildId: o, channelId: l, location: h, applicationId: v, launchId: I, compositeInstanceId: y, participants: A } = e,
        C = (0, m.Z)(v);
    if (null == C) return;
    let L = null !== (n = D.get(l)) && void 0 !== n ? n : N,
        x = 0 === L.length,
        w = L.find((e) => e.applicationId === v),
        M = A.map((e) => e.userId),
        P = c.default.getId(),
        k = M.some((e) => e === P),
        U = null === (t = A.find((e) => e.userId === P)) || void 0 === t ? void 0 : t.sessionId,
        Z = A.some((e) => (0, g.J)(e)),
        F = R.get(v),
        j = {
            applicationId: v,
            channelId: l,
            guildId: o,
            location: h,
            launchId: I,
            compositeInstanceId: y,
            url: C,
            userIds: new Set(M),
            participants: A
        };
    k &&
        null != F &&
        R.set(F.applicationId, {
            ...F,
            ...j
        });
    null != F && l === F.channelId && v === (null == F ? void 0 : F.applicationId) && ((!k && Array.from(F.userIds).some((e) => e === P)) || !Z)
        ? (R.delete(v), p.S.dispatch(T.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : k &&
          (null == F || F.applicationId !== v || F.channelId !== l) &&
          U === c.default.getSessionId() &&
          (function (e) {
              var t, n;
              let { channelId: i, applicationId: a, launchId: o, compositeInstanceId: l, location: h, participants: g, isFirstActivityInChannel: v, isStart: I } = e,
                  y = (0, m.Z)(a),
                  A = c.default.getSessionId();
              if (null == y || null == A || (null === (t = R.get(a)) || void 0 === t ? void 0 : t.channelId) === i) return !1;
              let N = d.Z.getChannel(i),
                  C = null == N ? void 0 : N.getGuildId(),
                  O = _.default.getCurrentUser();
              if ((null == C && !(null !== (n = null == N ? void 0 : N.isPrivate()) && void 0 !== n && n)) || null == O) return !1;
              r = i;
              let D = {
                  guildId: C,
                  channelId: i,
                  applicationId: a,
                  url: y,
                  userIds: new Set(g.map((e) => e.userId)),
                  participants: g,
                  connectedSince: Date.now(),
                  launchId: o,
                  compositeInstanceId: l,
                  location: h
              };
              R.set(a, D),
                  p.S.dispatch(T.CkL.OPEN_EMBEDDED_ACTIVITY, {
                      channelId: i,
                      applicationId: a,
                      isFirstActivityInChannel: v,
                      isStart: I,
                      participants: g,
                      embeddedActivity: D
                  }),
                  (0, E.Z)()
                      ? (u.Z.getWindowOpen(T.KJ3.ACTIVITY_POPOUT) &&
                            s.Z.wait(() => {
                                s.Z.dispatch({
                                    type: 'POPOUT_WINDOW_CLOSE',
                                    key: T.KJ3.ACTIVITY_POPOUT
                                });
                            }),
                        (B = S.Ez.ACTIVITY_POPOUT_WINDOW),
                        s.Z.wait(() => {
                            s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
                        }))
                      : (B = r !== f.Z.getChannelId() || (0, b.Z)(i) ? S.Ez.PIP : S.Ez.PANEL),
                  G.set(K(i, a), Date.now());
          })({
              channelId: l,
              applicationId: v,
              launchId: I,
              compositeInstanceId: y,
              location: h,
              participants: A,
              isFirstActivityInChannel: x,
              isStart: null == w
          });
    let H = (null !== (i = D.get(l)) && void 0 !== i ? i : []).filter((e) => e.applicationId !== v),
        Y = V(o),
        W = (null !== (a = O.get(Y)) && void 0 !== a ? a : []).filter((e) => !(e.applicationId === v && e.channelId === l));
    M.length > 0 && (H.push(j), W.push(j)), D.set(l, H), O.set(Y, W);
}
function H(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((t) => {
            let { location: n, application_id: r, launch_id: i, composite_instance_id: a, participants: s } = t;
            null != n.channel_id &&
                j({
                    guildId: e.id,
                    channelId: n.channel_id,
                    location: n,
                    applicationId: r,
                    launchId: i,
                    compositeInstanceId: a,
                    participants: s.map((e) => ({
                        userId: e.user_id,
                        sessionId: e.session_id,
                        nonce: e.nonce
                    }))
                });
        });
}
function Y(e, t) {
    return ''.concat(e, ':').concat(t);
}
function W(e) {
    let { applicationId: t, channelId: n } = e;
    L.delete(Y(n, t));
}
function K(e, t) {
    return ''.concat(e, ':').concat(t);
}
class z extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
        null != e &&
            (A = {
                ...e,
                everLaunchedActivities: n
            });
    }
    getState() {
        return A;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e
            ? null
            : null !==
                    (t = Array.from(R.values()).find((t) => {
                        let { channelId: n } = t;
                        return e === n;
                    })) && void 0 !== t
              ? t
              : null;
    }
    getSelfEmbeddedActivities() {
        return R;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = O.get(e)) && void 0 !== t ? t : N;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = D.get(e)) && void 0 !== t ? t : N;
    }
    getEmbeddedActivitiesByChannel() {
        return D;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = G.get(K(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return L.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = V(e);
        return null !== (t = x.get(n)) && void 0 !== t ? t : C;
    }
    getShelfFetchStatus(e) {
        let t = V(e);
        return w.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = V(e),
            i = null !== (t = w.get(r)) && void 0 !== t ? t : { isFetching: !1 },
            a = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 21600000;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return M.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null !== (t = P.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null !== (n = null !== (t = k.get(e)) && void 0 !== t ? t : P.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return U.get(e);
    }
    getConnectedActivityChannelId() {
        return r;
    }
    getActivityPanelMode() {
        return B;
    }
    getFocusedLayout() {
        return Z;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityChannelId();
        if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            s: for (let [r, i] of D)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break s;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return A.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e && null != t) return L.get(Y(t, e));
    }
    getLaunchStates() {
        return L;
    }
    getActivityPopoutWindowLayout() {
        return F;
    }
}
y(z, 'displayName', 'EmbeddedActivitiesStore'),
    y(z, 'persistKey', 'EmbeddedActivities'),
    y(z, 'migrations', [
        (e) => ({
            ...e,
            seenFeaturedActivities: [],
            shouldShowNewActivityIndicator: !1
        }),
        (e) => (delete e.seenFeaturedActivities, { ...e }),
        (e) => (delete e.seenActivities, { ...e }),
        (e) => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, { ...e }),
        (e) => ({
            ...e,
            seenNewActivities: {},
            seenUpdatedActivities: {}
        }),
        (e) => {
            var t;
            let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
            return {
                ...e,
                everLaunchedActivities: n
            };
        },
        (e) => (delete e.usersHavePlayedByApp, { ...e })
    ]);
let q = new z(s.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
        let { applicationId: t, layoutMode: n } = e;
        U.set(t, n);
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t } = e;
        D.clear(), O.clear(), t.forEach((e) => H(e));
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        H(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        D.set(t.id, []);
        let n = t.guild_id;
        if (null != n) {
            var r;
            let e = V(n),
                i = (null !== (r = O.get(e)) && void 0 !== r ? r : []).filter((e) => e.channelId !== t.id);
            O.set(e, i);
        }
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        let { applicationId: t, channelId: n, componentId: r, commandOrigin: i } = e;
        L.set(Y(n, t), {
            isLaunching: !0,
            componentId: r
        }),
            (Z = i === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? S.MI.NO_CHAT : S.MI.RESIZABLE);
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
        let { applicationId: t, channelId: n } = e;
        A.everLaunchedActivities.add(t),
            W({
                applicationId: t,
                channelId: n
            });
    },
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, channelId: n } = e;
        W({
            applicationId: t,
            channelId: n
        });
    },
    EMBEDDED_ACTIVITY_CLOSE: function (e) {
        let { applicationId: t } = e,
            n = R.get(t);
        R.delete(t), (null == n ? void 0 : n.channelId) === r && (r = void 0);
    },
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function (e) {
        let { layout: t } = e;
        F = t;
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e;
        null != d.Z.getChannel(i.channel_id) &&
            null != i.channel_id &&
            j({
                guildId: i.guild_id,
                channelId: i.channel_id,
                location: i,
                applicationId: t,
                launchId: n,
                compositeInstanceId: r,
                participants: a.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id,
                    nonce: e.nonce
                }))
            });
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        var t;
        let { activity: n } = e;
        if (null == n) return !1;
        let r = R.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
        if (null == r) return !1;
        R.set(r.applicationId, { ...r });
    },
    EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
        let { applicationId: t, config: n } = e,
            r = R.get(t);
        null != r &&
            R.set(r.applicationId, {
                ...r,
                config: n
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
        let { guildId: t } = e,
            n = V(t),
            r = w.get(n);
        w.set(n, {
            isFetching: !0,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
        let { guildId: t, activities: n } = e,
            r = V(t);
        x.set(r, n);
        let i = Date.now();
        !(function (e) {
            let { activities: t, now: n } = e;
            t.forEach((e) => {
                let t = e.application_id,
                    r = e.client_platform_config[(0, v.Z)((0, h.getOS)())];
                if (null == r.label_until) return;
                let i = new Date(r.label_until).getTime();
                if (i < n) return;
                let a = A.seenNewActivities[t],
                    s = Object.hasOwn(A.seenNewActivities, t),
                    l = new Date(a).getTime() < i;
                r.label_type === o.ww.NEW && (!s || l) && ((A.shouldShowNewActivityIndicator = !0), (A.seenNewActivities[t] = r.label_until));
                let u = A.seenUpdatedActivities[t],
                    c = Object.hasOwn(A.seenUpdatedActivities, t),
                    d = new Date(u).getTime() < i;
                r.label_type === o.ww.UPDATED && (!c || d) && ((A.shouldShowNewActivityIndicator = !0), (A.seenUpdatedActivities[t] = r.label_until));
            });
        })({
            activities: n,
            now: i
        }),
            w.set(r, {
                isFetching: !1,
                lastFetchTimestampMs: i
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
        let { guildId: t } = e,
            n = V(t),
            r = w.get(n);
        w.set(n, {
            isFetching: !1,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
        A.shouldShowNewActivityIndicator = !1;
    },
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
        null == n ? M.delete(t) : M.set(t, n), null === r ? P.delete(t) : void 0 !== r && P.set(t, r), null === i ? k.delete(t) : void 0 !== i && k.set(t, i);
    },
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: function (e) {
        let { activityPanelMode: t } = e;
        B = t;
    },
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function (e) {
        let { focusedActivityLayout: t } = e;
        Z = t;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        r !== t && B === S.Ez.PANEL && (B = S.Ez.PIP);
    },
    POPOUT_WINDOW_CLOSE: function (e) {
        let { key: t } = e;
        t === T.KJ3.ACTIVITY_POPOUT && (B = S.Ez.PIP);
    }
});
t.ZP = q;
