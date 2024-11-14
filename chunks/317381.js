let r;
n.d(t, {
    i6: function () {
        return T;
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
    g = n(761122),
    E = n(917107),
    v = n(918559),
    I = n(981631);
function b(e, t, n) {
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
    T = [],
    y = [],
    A = new Map(),
    N = new Map(),
    C = new Map(),
    R = new Map(),
    O = new Map(),
    D = new Map(),
    L = new Map(),
    x = new Map(),
    w = new Map(),
    M = new Map(),
    P = new Map();
let k = v.Ez.DISCONNECTED,
    U = v.MI.RESIZABLE;
function G(e) {
    return null != e ? e : '0';
}
function B(e) {
    var t, n, i, a;
    let { guildId: s, channelId: o, location: l, applicationId: p, launchId: g, compositeInstanceId: b, participants: S } = e,
        y = (0, h.Z)(p);
    if (null == y) return;
    let R = null !== (n = C.get(o)) && void 0 !== n ? n : T,
        O = 0 === R.length,
        D = R.find((e) => e.applicationId === p),
        L = S.map((e) => e.userId),
        x = u.default.getId(),
        w = L.some((e) => e === x),
        M = null === (t = S.find((e) => e.userId === x)) || void 0 === t ? void 0 : t.sessionId,
        U = S.some((e) => (0, m.J)(e)),
        B = A.get(p),
        Z = {
            applicationId: p,
            channelId: o,
            guildId: s,
            location: l,
            launchId: g,
            compositeInstanceId: b,
            url: y,
            userIds: new Set(L),
            participants: S
        };
    w &&
        null != B &&
        A.set(B.applicationId, {
            ...B,
            ...Z
        });
    null != B && o === B.channelId && p === (null == B ? void 0 : B.applicationId) && ((!w && Array.from(B.userIds).some((e) => e === x)) || !U)
        ? (A.delete(p), _.S.dispatch(I.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : w &&
          (null == B || B.applicationId !== p || B.channelId !== o) &&
          M === u.default.getSessionId() &&
          (function (e) {
              var t, n;
              let { channelId: i, applicationId: a, launchId: s, compositeInstanceId: o, location: l, participants: p, isFirstActivityInChannel: m, isStart: g } = e,
                  b = (0, h.Z)(a),
                  S = u.default.getSessionId();
              if (null == b || null == S || (null === (t = A.get(a)) || void 0 === t ? void 0 : t.channelId) === i) return !1;
              let T = c.Z.getChannel(i),
                  y = null == T ? void 0 : T.getGuildId(),
                  N = f.default.getCurrentUser();
              if ((null == y && !(null !== (n = null == T ? void 0 : T.isPrivate()) && void 0 !== n && n)) || null == N) return !1;
              r = i;
              let C = {
                  guildId: y,
                  channelId: i,
                  applicationId: a,
                  url: b,
                  userIds: new Set(p.map((e) => e.userId)),
                  participants: p,
                  connectedSince: Date.now(),
                  launchId: s,
                  compositeInstanceId: o,
                  location: l
              };
              A.set(a, C),
                  _.S.dispatch(I.CkL.OPEN_EMBEDDED_ACTIVITY, {
                      channelId: i,
                      applicationId: a,
                      isFirstActivityInChannel: m,
                      isStart: g,
                      participants: p,
                      embeddedActivity: C
                  }),
                  (k = r !== d.Z.getChannelId() || (0, E.Z)(i) ? v.Ez.PIP : v.Ez.PANEL),
                  P.set(j(i, a), Date.now());
          })({
              channelId: o,
              applicationId: p,
              launchId: g,
              compositeInstanceId: b,
              location: l,
              participants: S,
              isFirstActivityInChannel: O,
              isStart: null == D
          });
    let F = (null !== (i = C.get(o)) && void 0 !== i ? i : []).filter((e) => e.applicationId !== p),
        V = G(s),
        H = (null !== (a = N.get(V)) && void 0 !== a ? a : []).filter((e) => !(e.applicationId === p && e.channelId === o));
    L.length > 0 && (F.push(Z), H.push(Z)), C.set(o, F), N.set(V, H);
}
function Z(e) {
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
function F(e, t) {
    return ''.concat(e, ':').concat(t);
}
function V(e) {
    let { applicationId: t, channelId: n } = e;
    R.delete(F(n, t));
}
function j(e, t) {
    return ''.concat(e, ':').concat(t);
}
class H extends (i = a.ZP.PersistedStore) {
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
            (t = Array.from(A.values()).find((t) => {
                let { channelId: n } = t;
                return e === n;
            })) && void 0 !== t
            ? t
            : null;
    }
    getSelfEmbeddedActivities() {
        return A;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = N.get(e)) && void 0 !== t ? t : T;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = C.get(e)) && void 0 !== t ? t : T;
    }
    getEmbeddedActivitiesByChannel() {
        return C;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = P.get(j(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return R.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = G(e);
        return null !== (t = O.get(n)) && void 0 !== t ? t : y;
    }
    getShelfFetchStatus(e) {
        let t = G(e);
        return D.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = G(e),
            i = null !== (t = D.get(r)) && void 0 !== t ? t : { isFetching: !1 },
            a = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 21600000;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return L.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null !== (t = x.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null !== (n = null !== (t = w.get(e)) && void 0 !== t ? t : x.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return M.get(e);
    }
    getConnectedActivityChannelId() {
        return r;
    }
    getActivityPanelMode() {
        return k;
    }
    getFocusedLayout() {
        return U;
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
        return S.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e && null != t) return R.get(F(t, e));
    }
    getLaunchStates() {
        return R;
    }
}
b(H, 'displayName', 'EmbeddedActivitiesStore'),
    b(H, 'persistKey', 'EmbeddedActivities'),
    b(H, 'migrations', [
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
let Y = new H(s.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
        let { applicationId: t, layoutMode: n } = e;
        M.set(t, n);
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t } = e;
        C.clear(), N.clear(), t.forEach((e) => Z(e));
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        Z(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        C.set(t.id, []);
        let n = t.guild_id;
        if (null != n) {
            var r;
            let e = G(n),
                i = (null !== (r = N.get(e)) && void 0 !== r ? r : []).filter((e) => e.channelId !== t.id);
            N.set(e, i);
        }
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        let { applicationId: t, channelId: n, componentId: r, commandOrigin: i } = e;
        R.set(F(n, t), {
            isLaunching: !0,
            componentId: r
        }),
            (U = i === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? v.MI.NO_CHAT : v.MI.RESIZABLE);
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
        let { applicationId: t, channelId: n } = e;
        S.everLaunchedActivities.add(t),
            V({
                applicationId: t,
                channelId: n
            });
    },
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, channelId: n } = e;
        V({
            applicationId: t,
            channelId: n
        });
    },
    EMBEDDED_ACTIVITY_CLOSE: function (e) {
        let { applicationId: t } = e,
            n = A.get(t);
        A.delete(t), (null == n ? void 0 : n.channelId) === r && (r = void 0);
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
        let r = A.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
        if (null == r) return !1;
        A.set(r.applicationId, { ...r });
    },
    EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
        let { applicationId: t, config: n } = e,
            r = A.get(t);
        null != r &&
            A.set(r.applicationId, {
                ...r,
                config: n
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
        let { guildId: t } = e,
            n = G(t),
            r = D.get(n);
        D.set(n, {
            isFetching: !0,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
        let { guildId: t, activities: n } = e,
            r = G(t);
        O.set(r, n);
        let i = Date.now();
        !(function (e) {
            let { activities: t, now: n } = e;
            t.forEach((e) => {
                let t = e.application_id,
                    r = e.client_platform_config[(0, g.Z)((0, p.getOS)())];
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
            D.set(r, {
                isFetching: !1,
                lastFetchTimestampMs: i
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
        let { guildId: t } = e,
            n = G(t),
            r = D.get(n);
        D.set(n, {
            isFetching: !1,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
        S.shouldShowNewActivityIndicator = !1;
    },
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
        null == n ? L.delete(t) : L.set(t, n), null === r ? x.delete(t) : void 0 !== r && x.set(t, r), null === i ? w.delete(t) : void 0 !== i && w.set(t, i);
    },
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: function (e) {
        let { activityPanelMode: t } = e;
        k = t;
    },
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function (e) {
        let { focusedActivityLayout: t } = e;
        U = t;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        r !== t && k === v.Ez.PANEL && (k = v.Ez.PIP);
    },
    CHANNEL_CALL_POPOUT_WINDOW_OPEN: function (e) {
        let { channel: t } = e;
        if (
            void 0 ===
            Array.from(A.values()).find((e) => {
                let { channelId: n } = e;
                return t.id === n;
            })
        )
            return;
    }
});
t.ZP = Y;
