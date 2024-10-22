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
    u = n(314897),
    c = n(592125),
    d = n(944486),
    _ = n(594174),
    E = n(585483),
    f = n(358085),
    h = n(155268),
    p = n(613611),
    I = n(761122),
    m = n(917107),
    T = n(918559),
    S = n(981631);
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
let A = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    N = [],
    R = [],
    O = new Map(),
    v = new Map(),
    C = new Map(),
    L = new Map(),
    D = new Map(),
    y = new Map(),
    b = new Map(),
    M = new Map(),
    P = new Map(),
    U = new Map(),
    w = new Map();
let x = T.Ez.DISCONNECTED,
    G = T.MI.RESIZABLE;
function k(e) {
    return null != e ? e : '0';
}
function B(e) {
    var t, n, i, a;
    let { guildId: s, channelId: o, location: l, applicationId: f, launchId: I, compositeInstanceId: g, participants: A } = e,
        R = (0, h.Z)(f);
    if (null == R) return;
    let L = null !== (n = C.get(o)) && void 0 !== n ? n : N,
        D = 0 === L.length,
        y = L.find((e) => e.applicationId === f),
        b = A.map((e) => e.userId),
        M = u.default.getId(),
        P = b.some((e) => e === M),
        U = null === (t = A.find((e) => e.userId === M)) || void 0 === t ? void 0 : t.sessionId,
        G = A.some((e) => (0, p.J)(e)),
        B = O.get(f),
        F = {
            applicationId: f,
            channelId: o,
            guildId: s,
            location: l,
            launchId: I,
            compositeInstanceId: g,
            url: R,
            userIds: new Set(b),
            participants: A
        };
    P &&
        null != B &&
        O.set(B.applicationId, {
            ...B,
            ...F
        });
    null != B && o === B.channelId && f === (null == B ? void 0 : B.applicationId) && ((!P && Array.from(B.userIds).some((e) => e === M)) || !G)
        ? (O.delete(f), E.S.dispatch(S.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : P &&
          (null == B || B.applicationId !== f || B.channelId !== o) &&
          U === u.default.getSessionId() &&
          (function (e) {
              var t, n;
              let { channelId: i, applicationId: a, launchId: s, compositeInstanceId: o, location: l, participants: f, isFirstActivityInChannel: p, isStart: I } = e,
                  g = (0, h.Z)(a),
                  A = u.default.getSessionId();
              if (null == g || null == A || (null === (t = O.get(a)) || void 0 === t ? void 0 : t.channelId) === i) return !1;
              let N = c.Z.getChannel(i),
                  R = null == N ? void 0 : N.getGuildId(),
                  v = _.default.getCurrentUser();
              if ((null == R && !(null !== (n = null == N ? void 0 : N.isPrivate()) && void 0 !== n && n)) || null == v) return !1;
              r = i;
              let C = {
                  guildId: R,
                  channelId: i,
                  applicationId: a,
                  url: g,
                  userIds: new Set(f.map((e) => e.userId)),
                  participants: f,
                  connectedSince: Date.now(),
                  launchId: s,
                  compositeInstanceId: o,
                  location: l
              };
              O.set(a, C),
                  E.S.dispatch(S.CkL.OPEN_EMBEDDED_ACTIVITY, {
                      channelId: i,
                      applicationId: a,
                      isFirstActivityInChannel: p,
                      isStart: I,
                      participants: f,
                      embeddedActivity: C
                  }),
                  (x = r !== d.Z.getChannelId() || (0, m.Z)(i) ? T.Ez.PIP : T.Ez.PANEL),
                  w.set(Z(i, a), Date.now());
          })({
              channelId: o,
              applicationId: f,
              launchId: I,
              compositeInstanceId: g,
              location: l,
              participants: A,
              isFirstActivityInChannel: D,
              isStart: null == y
          });
    let V = (null !== (i = C.get(o)) && void 0 !== i ? i : []).filter((e) => e.applicationId !== f),
        H = k(s),
        Y = (null !== (a = v.get(H)) && void 0 !== a ? a : []).filter((e) => !(e.applicationId === f && e.channelId === o));
    b.length > 0 && (V.push(F), Y.push(F)), C.set(o, V), v.set(H, Y);
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
                    sessionId: e.session_id,
                    nonce: e.nonce
                }))
            });
        });
}
function V(e, t) {
    return ''.concat(e, ':').concat(t);
}
function H(e) {
    let { applicationId: t, channelId: n } = e;
    L.delete(V(n, t));
}
function Z(e, t) {
    return ''.concat(e, ':').concat(t);
}
class Y extends (i = a.ZP.PersistedStore) {
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
        return null !== (t = v.get(e)) && void 0 !== t ? t : N;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = C.get(e)) && void 0 !== t ? t : N;
    }
    getEmbeddedActivitiesByChannel() {
        return C;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = w.get(Z(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return L.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = k(e);
        return null !== (t = D.get(n)) && void 0 !== t ? t : R;
    }
    getShelfFetchStatus(e) {
        let t = k(e);
        return y.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = k(e),
            i = null !== (t = y.get(r)) && void 0 !== t ? t : { isFetching: !1 },
            a = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 21600000;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return b.get(e);
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
            s: for (let [r, i] of C)
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
        if (null != e && null != t) return L.get(V(t, e));
    }
    getLaunchStates() {
        return L;
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
        C.clear(), v.clear(), t.forEach((e) => F(e));
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        F(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        C.set(t.id, []);
        let n = t.guild_id;
        if (null != n) {
            var r;
            let e = k(n),
                i = (null !== (r = v.get(e)) && void 0 !== r ? r : []).filter((e) => e.channelId !== t.id);
            v.set(e, i);
        }
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        let { applicationId: t, channelId: n, componentId: r, commandOrigin: i } = e;
        L.set(V(n, t), {
            isLaunching: !0,
            componentId: r
        }),
            (G = i === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? T.MI.NO_CHAT : T.MI.RESIZABLE);
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
        let { applicationId: t, channelId: n } = e;
        A.everLaunchedActivities.add(t),
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
        null != c.Z.getChannel(i.channel_id) &&
            B({
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
            r = y.get(n);
        y.set(n, {
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
                    r = e.client_platform_config[(0, I.Z)((0, f.getOS)())];
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
            y.set(r, {
                isFetching: !1,
                lastFetchTimestampMs: i
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
        let { guildId: t } = e,
            n = k(t),
            r = y.get(n);
        y.set(n, {
            isFetching: !1,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
        A.shouldShowNewActivityIndicator = !1;
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
        r !== t && x === T.Ez.PANEL && (x = T.Ez.PIP);
    },
    CHANNEL_CALL_POPOUT_WINDOW_OPEN: function (e) {
        let { channel: t } = e;
        if (
            void 0 ===
            Array.from(O.values()).find((e) => {
                let { channelId: n } = e;
                return t.id === n;
            })
        )
            return;
    }
});
t.ZP = j;
