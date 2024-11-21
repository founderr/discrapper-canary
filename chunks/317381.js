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
    l = n(895924),
    u = n(314897),
    c = n(592125),
    d = n(944486),
    f = n(594174),
    _ = n(585483),
    p = n(358085),
    h = n(155268),
    m = n(413458),
    g = n(316253),
    E = n(761122),
    v = n(917107),
    I = n(701488),
    b = n(918559),
    T = n(981631);
function S(e, t, n) {
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
let y = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    A = [],
    N = [],
    C = new Map(),
    R = new Map(),
    O = new Map(),
    D = new Map(),
    L = new Map(),
    x = new Map(),
    w = new Map(),
    M = new Map(),
    P = new Map(),
    k = new Map(),
    U = new Map();
let G = b.Ez.DISCONNECTED,
    B = b.MI.RESIZABLE,
    Z = I.GM.NORMAL;
function F(e) {
    return null != e ? e : '0';
}
function V(e) {
    var t, n, i, a;
    let { guildId: o, channelId: l, location: p, applicationId: E, launchId: I, compositeInstanceId: S, participants: y } = e,
        N = (0, h.Z)(E);
    if (null == N) return;
    let D = null !== (n = O.get(l)) && void 0 !== n ? n : A,
        L = 0 === D.length,
        x = D.find((e) => e.applicationId === E),
        w = y.map((e) => e.userId),
        M = u.default.getId(),
        P = w.some((e) => e === M),
        k = null === (t = y.find((e) => e.userId === M)) || void 0 === t ? void 0 : t.sessionId,
        B = y.some((e) => (0, m.J)(e)),
        Z = C.get(E),
        V = {
            applicationId: E,
            channelId: l,
            guildId: o,
            location: p,
            launchId: I,
            compositeInstanceId: S,
            url: N,
            userIds: new Set(w),
            participants: y
        };
    P &&
        null != Z &&
        C.set(Z.applicationId, {
            ...Z,
            ...V
        });
    null != Z && l === Z.channelId && E === (null == Z ? void 0 : Z.applicationId) && ((!P && Array.from(Z.userIds).some((e) => e === M)) || !B)
        ? (C.delete(E), _.S.dispatch(T.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : P &&
          (null == Z || Z.applicationId !== E || Z.channelId !== l) &&
          k === u.default.getSessionId() &&
          (function (e) {
              var t, n;
              let { channelId: i, applicationId: a, launchId: o, compositeInstanceId: l, location: p, participants: m, isFirstActivityInChannel: E, isStart: I } = e,
                  S = (0, h.Z)(a),
                  y = u.default.getSessionId();
              if (null == S || null == y || (null === (t = C.get(a)) || void 0 === t ? void 0 : t.channelId) === i) return !1;
              let A = c.Z.getChannel(i),
                  N = null == A ? void 0 : A.getGuildId(),
                  R = f.default.getCurrentUser();
              if ((null == N && !(null !== (n = null == A ? void 0 : A.isPrivate()) && void 0 !== n && n)) || null == R) return !1;
              r = i;
              let O = {
                  guildId: N,
                  channelId: i,
                  applicationId: a,
                  url: S,
                  userIds: new Set(m.map((e) => e.userId)),
                  participants: m,
                  connectedSince: Date.now(),
                  launchId: o,
                  compositeInstanceId: l,
                  location: p
              };
              C.set(a, O),
                  _.S.dispatch(T.CkL.OPEN_EMBEDDED_ACTIVITY, {
                      channelId: i,
                      applicationId: a,
                      isFirstActivityInChannel: E,
                      isStart: I,
                      participants: m,
                      embeddedActivity: O
                  }),
                  (0, g.Z)()
                      ? ((G = b.Ez.ACTIVITY_POPOUT_WINDOW),
                        s.Z.wait(() => {
                            s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
                        }))
                      : (G = r !== d.Z.getChannelId() || (0, v.Z)(i) ? b.Ez.PIP : b.Ez.PANEL),
                  U.set(W(i, a), Date.now());
          })({
              channelId: l,
              applicationId: E,
              launchId: I,
              compositeInstanceId: S,
              location: p,
              participants: y,
              isFirstActivityInChannel: L,
              isStart: null == x
          });
    let j = (null !== (i = O.get(l)) && void 0 !== i ? i : []).filter((e) => e.applicationId !== E),
        H = F(o),
        Y = (null !== (a = R.get(H)) && void 0 !== a ? a : []).filter((e) => !(e.applicationId === E && e.channelId === l));
    w.length > 0 && (j.push(V), Y.push(V)), O.set(l, j), R.set(H, Y);
}
function j(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((t) => {
            let { location: n, application_id: r, launch_id: i, composite_instance_id: a, participants: s } = t;
            null != n.channel_id &&
                V({
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
function H(e, t) {
    return ''.concat(e, ':').concat(t);
}
function Y(e) {
    let { applicationId: t, channelId: n } = e;
    D.delete(H(n, t));
}
function W(e, t) {
    return ''.concat(e, ':').concat(t);
}
class K extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
        null != e &&
            (y = {
                ...e,
                everLaunchedActivities: n
            });
    }
    getState() {
        return y;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e
            ? null
            : null !==
                    (t = Array.from(C.values()).find((t) => {
                        let { channelId: n } = t;
                        return e === n;
                    })) && void 0 !== t
              ? t
              : null;
    }
    getSelfEmbeddedActivities() {
        return C;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = R.get(e)) && void 0 !== t ? t : A;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = O.get(e)) && void 0 !== t ? t : A;
    }
    getEmbeddedActivitiesByChannel() {
        return O;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = U.get(W(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return D.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = F(e);
        return null !== (t = L.get(n)) && void 0 !== t ? t : N;
    }
    getShelfFetchStatus(e) {
        let t = F(e);
        return x.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = F(e),
            i = null !== (t = x.get(r)) && void 0 !== t ? t : { isFetching: !1 },
            a = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 21600000;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return w.get(e);
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
        return k.get(e);
    }
    getConnectedActivityChannelId() {
        return r;
    }
    getActivityPanelMode() {
        return G;
    }
    getFocusedLayout() {
        return B;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityChannelId();
        if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            s: for (let [r, i] of O)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break s;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return y.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e && null != t) return D.get(H(t, e));
    }
    getLaunchStates() {
        return D;
    }
    getActivityPopoutWindowLayout() {
        return Z;
    }
}
S(K, 'displayName', 'EmbeddedActivitiesStore'),
    S(K, 'persistKey', 'EmbeddedActivities'),
    S(K, 'migrations', [
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
let z = new K(s.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
        let { applicationId: t, layoutMode: n } = e;
        k.set(t, n);
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t } = e;
        O.clear(), R.clear(), t.forEach((e) => j(e));
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        j(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        O.set(t.id, []);
        let n = t.guild_id;
        if (null != n) {
            var r;
            let e = F(n),
                i = (null !== (r = R.get(e)) && void 0 !== r ? r : []).filter((e) => e.channelId !== t.id);
            R.set(e, i);
        }
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        let { applicationId: t, channelId: n, componentId: r, commandOrigin: i } = e;
        D.set(H(n, t), {
            isLaunching: !0,
            componentId: r
        }),
            (B = i === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? b.MI.NO_CHAT : b.MI.RESIZABLE);
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
        let { applicationId: t, channelId: n } = e;
        y.everLaunchedActivities.add(t),
            Y({
                applicationId: t,
                channelId: n
            });
    },
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, channelId: n } = e;
        Y({
            applicationId: t,
            channelId: n
        });
    },
    EMBEDDED_ACTIVITY_CLOSE: function (e) {
        let { applicationId: t } = e,
            n = C.get(t);
        C.delete(t), (null == n ? void 0 : n.channelId) === r && (r = void 0);
    },
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function (e) {
        let { layout: t } = e;
        Z = t;
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e;
        null != c.Z.getChannel(i.channel_id) &&
            null != i.channel_id &&
            V({
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
        let r = C.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
        if (null == r) return !1;
        C.set(r.applicationId, { ...r });
    },
    EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
        let { applicationId: t, config: n } = e,
            r = C.get(t);
        null != r &&
            C.set(r.applicationId, {
                ...r,
                config: n
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
        let { guildId: t } = e,
            n = F(t),
            r = x.get(n);
        x.set(n, {
            isFetching: !0,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
        let { guildId: t, activities: n } = e,
            r = F(t);
        L.set(r, n);
        let i = Date.now();
        !(function (e) {
            let { activities: t, now: n } = e;
            t.forEach((e) => {
                let t = e.application_id,
                    r = e.client_platform_config[(0, E.Z)((0, p.getOS)())];
                if (null == r.label_until) return;
                let i = new Date(r.label_until).getTime();
                if (i < n) return;
                let a = y.seenNewActivities[t],
                    s = Object.hasOwn(y.seenNewActivities, t),
                    l = new Date(a).getTime() < i;
                r.label_type === o.ww.NEW && (!s || l) && ((y.shouldShowNewActivityIndicator = !0), (y.seenNewActivities[t] = r.label_until));
                let u = y.seenUpdatedActivities[t],
                    c = Object.hasOwn(y.seenUpdatedActivities, t),
                    d = new Date(u).getTime() < i;
                r.label_type === o.ww.UPDATED && (!c || d) && ((y.shouldShowNewActivityIndicator = !0), (y.seenUpdatedActivities[t] = r.label_until));
            });
        })({
            activities: n,
            now: i
        }),
            x.set(r, {
                isFetching: !1,
                lastFetchTimestampMs: i
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
        let { guildId: t } = e,
            n = F(t),
            r = x.get(n);
        x.set(n, {
            isFetching: !1,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
        y.shouldShowNewActivityIndicator = !1;
    },
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
        null == n ? w.delete(t) : w.set(t, n), null === r ? M.delete(t) : void 0 !== r && M.set(t, r), null === i ? P.delete(t) : void 0 !== i && P.set(t, i);
    },
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: function (e) {
        let { activityPanelMode: t } = e;
        G = t;
    },
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function (e) {
        let { focusedActivityLayout: t } = e;
        B = t;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        r !== t && G === b.Ez.PANEL && (G = b.Ez.PIP);
    },
    POPOUT_WINDOW_CLOSE: function (e) {
        let { key: t } = e;
        t === T.KJ3.ACTIVITY_POPOUT && (G = b.Ez.PIP);
    }
});
t.ZP = z;
