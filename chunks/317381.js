let r;
n.d(t, {
    i6: function () {
        return A;
    }
}),
    n(47120),
    n(653041),
    n(51350);
var i,
    a = n(442837),
    s = n(570140),
    o = n(911969),
    l = n(314897),
    u = n(592125),
    c = n(944486),
    d = n(594174),
    _ = n(585483),
    E = n(358085),
    f = n(155268),
    h = n(613611),
    p = n(761122),
    I = n(917107),
    m = n(918559),
    T = n(981631);
function g(e, t, n) {
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
let S = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    A = [],
    N = [],
    O = new Map(),
    R = new Map(),
    v = new Map(),
    C = new Map(),
    y = new Map(),
    D = new Map(),
    L = new Map(),
    b = new Map(),
    M = new Map(),
    P = new Map(),
    U = new Map(),
    w = new Map();
let x = m.Ez.DISCONNECTED,
    G = m.MI.RESIZABLE;
function k(e) {
    return null != e ? e : '0';
}
function B(e) {
    var t, n, i, a;
    let { guildId: s, channelId: o, location: E, applicationId: p, launchId: g, compositeInstanceId: S, participants: N } = e,
        y = (0, f.Z)(p);
    if (null == y) return;
    let D = null !== (n = v.get(o)) && void 0 !== n ? n : A,
        L = 0 === D.length,
        b = D.find((e) => e.applicationId === p),
        M = N.map((e) => e.userId),
        P = l.default.getId(),
        U = M.some((e) => e === P),
        G = null === (t = N.find((e) => e.userId === P)) || void 0 === t ? void 0 : t.sessionId,
        B = N.some((e) => (0, h.J)(e)),
        F = O.get(p),
        V = {
            applicationId: p,
            channelId: o,
            guildId: s,
            location: E,
            launchId: g,
            compositeInstanceId: S,
            url: y,
            userIds: new Set(M),
            participants: N
        };
    U &&
        null != F &&
        O.set(F.applicationId, {
            ...F,
            ...V
        });
    null != F && o === F.channelId && p === (null == F ? void 0 : F.applicationId) && ((!U && Array.from(F.userIds).some((e) => e === P)) || !B)
        ? C.get(o) === p
            ? C.delete(o)
            : (O.delete(p), _.S.dispatch(T.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : U &&
          (null == F || F.applicationId !== p || F.channelId !== o) &&
          G === l.default.getSessionId() &&
          (function (e) {
              var t, n;
              let { channelId: i, applicationId: a, launchId: s, compositeInstanceId: o, location: E, participants: h, isFirstActivityInChannel: p, isStart: g } = e,
                  S = (0, f.Z)(a),
                  A = l.default.getSessionId();
              if (null == S || null == A || (null === (t = O.get(a)) || void 0 === t ? void 0 : t.channelId) === i) return !1;
              let N = u.Z.getChannel(i),
                  R = null == N ? void 0 : N.getGuildId(),
                  v = d.default.getCurrentUser();
              if ((null == R && !(null !== (n = null == N ? void 0 : N.isPrivate()) && void 0 !== n && n)) || null == v) return !1;
              r = i;
              let C = {
                  guildId: R,
                  channelId: i,
                  applicationId: a,
                  url: S,
                  userIds: new Set(h.map((e) => e.userId)),
                  participants: h,
                  connectedSince: Date.now(),
                  launchId: s,
                  compositeInstanceId: o,
                  location: E
              };
              O.set(a, C),
                  _.S.dispatch(T.CkL.OPEN_EMBEDDED_ACTIVITY, {
                      channelId: i,
                      applicationId: a,
                      isFirstActivityInChannel: p,
                      isStart: g,
                      participants: h,
                      embeddedActivity: C
                  }),
                  (x = r !== c.Z.getChannelId() || (0, I.Z)(i) ? m.Ez.PIP : m.Ez.PANEL),
                  w.set(Z(i, a), Date.now());
          })({
              channelId: o,
              applicationId: p,
              launchId: g,
              compositeInstanceId: S,
              location: E,
              participants: N,
              isFirstActivityInChannel: L,
              isStart: null == b
          });
    let H = (null !== (i = v.get(o)) && void 0 !== i ? i : []).filter((e) => e.applicationId !== p),
        Y = k(s),
        j = (null !== (a = R.get(Y)) && void 0 !== a ? a : []).filter((e) => !(e.applicationId === p && e.channelId === o));
    M.length > 0 && (H.push(V), j.push(V)), v.set(o, H), R.set(Y, j);
}
function F(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((t) => {
            let { location: n, application_id: r, launch_id: i, composite_instance_id: a, participants: s } = t;
            B({
                guildId: e.id,
                channelId: n.channel_id,
                location: n,
                applicationId: r,
                launchId: i,
                compositeInstanceId: a,
                participants: s.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id
                }))
            });
        });
}
function V(e, t) {
    return ''.concat(e, ':').concat(t);
}
function H(e) {
    let { applicationId: t, channelId: n } = e;
    y.delete(V(n, t));
}
function Z(e, t) {
    return ''.concat(e, ':').concat(t);
}
class Y extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
        null != e &&
            (S = {
                ...e,
                everLaunchedActivities: n
            });
    }
    getState() {
        return S;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null !==
            (t = Array.from(O.values()).find((t) => {
                let { channelId: n } = t;
                return e === n;
            })) && void 0 !== t
            ? t
            : null;
    }
    getSelfEmbeddedActivities() {
        return O;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = R.get(e)) && void 0 !== t ? t : A;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = v.get(e)) && void 0 !== t ? t : A;
    }
    getEmbeddedActivitiesByChannel() {
        return v;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = w.get(Z(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return y.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = k(e);
        return null !== (t = D.get(n)) && void 0 !== t ? t : N;
    }
    getShelfFetchStatus(e) {
        let t = k(e);
        return L.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = k(e),
            i = null !== (t = L.get(r)) && void 0 !== t ? t : { isFetching: !1 },
            a = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 21600000;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        var t;
        return null !== (t = b.get(e)) && void 0 !== t ? t : null;
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null !== (t = M.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null !== (n = null !== (t = P.get(e)) && void 0 !== t ? t : M.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return U.get(e);
    }
    getConnectedActivityChannelId() {
        return r;
    }
    getActivityPanelMode() {
        return x;
    }
    getFocusedLayout() {
        return G;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityChannelId();
        if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            s: for (let [r, i] of v)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break s;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return S.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e && null != t) return y.get(V(t, e));
    }
    getLaunchStates() {
        return y;
    }
}
g(Y, 'displayName', 'EmbeddedActivitiesStore'),
    g(Y, 'persistKey', 'EmbeddedActivities'),
    g(Y, 'migrations', [
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
let j = new Y(s.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
        let { applicationId: t, layoutMode: n } = e;
        U.set(t, n);
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t } = e;
        v.clear(), R.clear(), t.forEach((e) => F(e));
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        F(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        v.set(t.id, []);
        let n = t.guild_id;
        if (null != n) {
            var r;
            let e = k(n),
                i = (null !== (r = R.get(e)) && void 0 !== r ? r : []).filter((e) => e.channelId !== t.id);
            R.set(e, i);
        }
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        let { applicationId: t, channelId: n, componentId: r } = e;
        y.set(V(n, t), {
            isLaunching: !0,
            componentId: r
        });
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
        let { applicationId: t, channelId: n } = e;
        S.everLaunchedActivities.add(t),
            H({
                applicationId: t,
                channelId: n
            });
    },
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, channelId: n } = e;
        H({
            applicationId: t,
            channelId: n
        });
    },
    EMBEDDED_ACTIVITY_CLOSE: function (e) {
        let { applicationId: t } = e,
            n = O.get(t);
        O.delete(t), (null == n ? void 0 : n.channelId) === r && (r = void 0);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e;
        null != u.Z.getChannel(i.channel_id) &&
            B({
                guildId: i.guild_id,
                channelId: i.channel_id,
                location: i,
                applicationId: t,
                launchId: n,
                compositeInstanceId: r,
                participants: a.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id
                }))
            });
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        var t;
        let { activity: n } = e;
        if (null == n) return !1;
        let r = O.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
        if (null == r) return !1;
        O.set(r.applicationId, { ...r });
    },
    EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
        let { applicationId: t, config: n } = e,
            r = O.get(t);
        null != r &&
            O.set(r.applicationId, {
                ...r,
                config: n
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
        let { guildId: t } = e,
            n = k(t),
            r = L.get(n);
        L.set(n, {
            isFetching: !0,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
        let { guildId: t, activities: n } = e,
            r = k(t);
        D.set(r, n);
        let i = Date.now();
        !(function (e) {
            let { activities: t, now: n } = e;
            t.forEach((e) => {
                let t = e.application_id,
                    r = e.client_platform_config[(0, p.Z)((0, E.getOS)())];
                if (null == r.label_until) return;
                let i = new Date(r.label_until).getTime();
                if (i < n) return;
                let a = S.seenNewActivities[t],
                    s = Object.hasOwn(S.seenNewActivities, t),
                    l = new Date(a).getTime() < i;
                r.label_type === o.ww.NEW && (!s || l) && ((S.shouldShowNewActivityIndicator = !0), (S.seenNewActivities[t] = r.label_until));
                let u = S.seenUpdatedActivities[t],
                    c = Object.hasOwn(S.seenUpdatedActivities, t),
                    d = new Date(u).getTime() < i;
                r.label_type === o.ww.UPDATED && (!c || d) && ((S.shouldShowNewActivityIndicator = !0), (S.seenUpdatedActivities[t] = r.label_until));
            });
        })({
            activities: n,
            now: i
        }),
            L.set(r, {
                isFetching: !1,
                lastFetchTimestampMs: i
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
        let { guildId: t } = e,
            n = k(t),
            r = L.get(n);
        L.set(n, {
            isFetching: !1,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
        S.shouldShowNewActivityIndicator = !1;
    },
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
        null == n ? b.delete(t) : b.set(t, n), null === r ? M.delete(t) : void 0 !== r && M.set(t, r), null === i ? P.delete(t) : void 0 !== i && P.set(t, i);
    },
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: function (e) {
        let { activityPanelMode: t } = e;
        x = t;
    },
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function (e) {
        let { focusedActivityLayout: t } = e;
        G = t;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        r !== t && x === m.Ez.PANEL && (x = m.Ez.PIP);
    },
    EMBEDDED_ACTIVITY_DISCONNECT: function (e) {
        let { channelId: t, applicationId: n, isRejoiningFromCurrentSession: r } = e;
        r && C.set(t, n);
    },
    CHANNEL_CALL_POPOUT_WINDOW_OPEN: function (e) {
        let { channel: t } = e,
            n = Array.from(O.values()).find((e) => {
                let { channelId: n } = e;
                return t.id === n;
            });
        void 0 !== n && C.set(t.id, n.applicationId);
    }
});
t.ZP = j;
