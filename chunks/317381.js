let r;
n.d(t, {
    i6: function () {
        return O;
    }
});
var i,
    a = n(47120);
var o = n(653041);
var s = n(51350);
var l = n(442837),
    u = n(570140),
    c = n(911969),
    d = n(314897),
    _ = n(592125),
    E = n(944486),
    f = n(594174),
    h = n(585483),
    p = n(358085),
    m = n(155268),
    I = n(613611),
    T = n(761122),
    g = n(917107),
    S = n(918559),
    A = n(981631);
function v(e, t, n) {
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
let N = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    O = [],
    R = [],
    C = '0',
    y = new Map(),
    L = new Map(),
    b = new Map(),
    D = new Map(),
    M = new Map(),
    P = new Map(),
    U = new Map(),
    w = new Map(),
    x = new Map(),
    G = new Map(),
    k = 21600000,
    B = new Map();
let F = S.Ez.DISCONNECTED,
    Z = S.MI.RESIZABLE;
function V(e) {
    return null != e ? e : C;
}
function H(e) {
    var t, n, r, i;
    let { guildId: a, channelId: o, location: s, applicationId: l, launchId: u, compositeInstanceId: c, participants: _ } = e,
        E = (0, m.Z)(l);
    if (null == E) return;
    let f = null !== (n = b.get(o)) && void 0 !== n ? n : O,
        p = 0 === f.length,
        T = f.find((e) => e.applicationId === l),
        g = _.map((e) => e.userId),
        S = d.default.getId(),
        v = g.some((e) => e === S),
        N = null === (t = _.find((e) => e.userId === S)) || void 0 === t ? void 0 : t.sessionId,
        R = _.some((e) => (0, I.J)(e)),
        C = y.get(l),
        D = {
            applicationId: l,
            channelId: o,
            guildId: a,
            location: s,
            launchId: u,
            compositeInstanceId: c,
            url: E,
            userIds: new Set(g),
            participants: _
        };
    v &&
        null != C &&
        y.set(C.applicationId, {
            ...C,
            ...D
        });
    let M = !R;
    null != C && o === C.channelId && l === (null == C ? void 0 : C.applicationId) && ((!v && Array.from(C.userIds).some((e) => e === S)) || M)
        ? (y.delete(l), h.S.dispatch(A.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : v &&
          (null == C || C.applicationId !== l || C.channelId !== o) &&
          N === d.default.getSessionId() &&
          q({
              channelId: o,
              applicationId: l,
              launchId: u,
              compositeInstanceId: c,
              location: s,
              participants: _,
              isFirstActivityInChannel: p,
              isStart: null == T
          });
    let P = (null !== (r = b.get(o)) && void 0 !== r ? r : []).filter((e) => e.applicationId !== l),
        U = V(a),
        w = (null !== (i = L.get(U)) && void 0 !== i ? i : []).filter((e) => !(e.applicationId === l && e.channelId === o));
    g.length > 0 && (P.push(D), w.push(D)), b.set(o, P), L.set(U, w);
}
function Y(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((t) => {
            let { location: n, application_id: r, launch_id: i, composite_instance_id: a, participants: o } = t;
            H({
                guildId: e.id,
                channelId: n.channel_id,
                location: n,
                applicationId: r,
                launchId: i,
                compositeInstanceId: a,
                participants: o.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id,
                    nonce: e.nonce
                }))
            });
        });
}
function j(e) {
    let { guilds: t } = e;
    b.clear(), L.clear(), t.forEach((e) => Y(e));
}
function W(e) {
    let { guild: t } = e;
    Y(t);
}
function K(e) {
    let { channel: t } = e;
    b.set(t.id, []);
    let n = t.guild_id;
    if (null != n) {
        var r;
        let e = V(n),
            i = (null !== (r = L.get(e)) && void 0 !== r ? r : []).filter((e) => e.channelId !== t.id);
        L.set(e, i);
    }
}
function z(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e;
    null != _.Z.getChannel(i.channel_id) &&
        H({
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
}
function q(e) {
    var t, n;
    let { channelId: i, applicationId: a, launchId: o, compositeInstanceId: s, location: l, participants: u, isFirstActivityInChannel: c, isStart: p } = e,
        I = (0, m.Z)(a),
        T = d.default.getSessionId();
    if (null == I || null == T || (null === (t = y.get(a)) || void 0 === t ? void 0 : t.channelId) === i) return !1;
    let v = _.Z.getChannel(i),
        N = null == v ? void 0 : v.getGuildId(),
        O = f.default.getCurrentUser();
    if ((null == N && !(null !== (n = null == v ? void 0 : v.isPrivate()) && void 0 !== n && n)) || null == O) return !1;
    r = i;
    let R = {
        guildId: N,
        channelId: i,
        applicationId: a,
        url: I,
        userIds: new Set(u.map((e) => e.userId)),
        participants: u,
        connectedSince: Date.now(),
        launchId: o,
        compositeInstanceId: s,
        location: l
    };
    y.set(a, R),
        h.S.dispatch(A.CkL.OPEN_EMBEDDED_ACTIVITY, {
            channelId: i,
            applicationId: a,
            isFirstActivityInChannel: c,
            isStart: p,
            participants: u,
            embeddedActivity: R
        }),
        (F = r !== E.Z.getChannelId() || (0, g.Z)(i) ? S.Ez.PIP : S.Ez.PANEL),
        B.set(eh(i, a), Date.now());
}
function Q(e) {
    let { applicationId: t } = e,
        n = y.get(t);
    y.delete(t), (null == n ? void 0 : n.channelId) === r && (r = void 0);
}
function X(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let r = y.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
    if (null == r) return !1;
    y.set(r.applicationId, { ...r });
}
function $(e) {
    let { applicationId: t, config: n } = e,
        r = y.get(t);
    null != r &&
        y.set(r.applicationId, {
            ...r,
            config: n
        });
}
function J(e) {
    let { guildId: t } = e,
        n = V(t),
        r = P.get(n);
    P.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function ee(e) {
    let { guildId: t } = e,
        n = V(t),
        r = P.get(n);
    P.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
    });
}
function et(e) {
    let { activities: t, now: n } = e;
    t.forEach((e) => {
        let t = e.application_id,
            r = e.client_platform_config[(0, T.Z)((0, p.getOS)())];
        if (null == r.label_until) return;
        let i = new Date(r.label_until).getTime();
        if (i < n) return;
        let a = N.seenNewActivities[t],
            o = Object.hasOwn(N.seenNewActivities, t),
            s = new Date(a).getTime() < i;
        r.label_type === c.ww.NEW && (!o || s) && ((N.shouldShowNewActivityIndicator = !0), (N.seenNewActivities[t] = r.label_until));
        let l = N.seenUpdatedActivities[t],
            u = Object.hasOwn(N.seenUpdatedActivities, t),
            d = new Date(l).getTime() < i;
        r.label_type === c.ww.UPDATED && (!u || d) && ((N.shouldShowNewActivityIndicator = !0), (N.seenUpdatedActivities[t] = r.label_until));
    });
}
function en(e) {
    let { guildId: t, activities: n } = e,
        r = V(t);
    M.set(r, n);
    let i = Date.now();
    et({
        activities: n,
        now: i
    }),
        P.set(r, {
            isFetching: !1,
            lastFetchTimestampMs: i
        });
}
let er = () => {
    N.shouldShowNewActivityIndicator = !1;
};
function ei(e, t) {
    return ''.concat(e, ':').concat(t);
}
function ea(e) {
    let { applicationId: t, channelId: n, componentId: r } = e;
    D.set(ei(n, t), {
        isLaunching: !0,
        componentId: r
    });
}
function eo(e) {
    let { applicationId: t, channelId: n } = e;
    N.everLaunchedActivities.add(t),
        el({
            applicationId: t,
            channelId: n
        });
}
function es(e) {
    let { applicationId: t, channelId: n } = e;
    el({
        applicationId: t,
        channelId: n
    });
}
function el(e) {
    let { applicationId: t, channelId: n } = e;
    D.delete(ei(n, t));
}
function eu(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? U.delete(t) : U.set(t, n), null === r ? w.delete(t) : void 0 !== r && w.set(t, r), null === i ? x.delete(t) : void 0 !== i && x.set(t, i);
}
function ec(e) {
    let { activityPanelMode: t } = e;
    F = t;
}
function ed(e) {
    let { focusedActivityLayout: t } = e;
    Z = t;
}
function e_(e) {
    let { applicationId: t, layoutMode: n } = e;
    G.set(t, n);
}
function eE(e) {
    let { channelId: t } = e;
    r !== t && F === S.Ez.PANEL && (F = S.Ez.PIP);
}
function ef(e) {
    let { channel: t } = e;
    if (
        void 0 ===
        Array.from(y.values()).find((e) => {
            let { channelId: n } = e;
            return t.id === n;
        })
    )
        return;
}
function eh(e, t) {
    return ''.concat(e, ':').concat(t);
}
class ep extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
        null != e &&
            (N = {
                ...e,
                everLaunchedActivities: n
            });
    }
    getState() {
        return N;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null !==
            (t = Array.from(y.values()).find((t) => {
                let { channelId: n } = t;
                return e === n;
            })) && void 0 !== t
            ? t
            : null;
    }
    getSelfEmbeddedActivities() {
        return y;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = L.get(e)) && void 0 !== t ? t : O;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = b.get(e)) && void 0 !== t ? t : O;
    }
    getEmbeddedActivitiesByChannel() {
        return b;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = B.get(eh(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return D.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = V(e);
        return null !== (t = M.get(n)) && void 0 !== t ? t : R;
    }
    getShelfFetchStatus(e) {
        let t = V(e);
        return P.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = V(e),
            i = null !== (t = P.get(r)) && void 0 !== t ? t : { isFetching: !1 },
            a = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > k;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        var t;
        return null !== (t = U.get(e)) && void 0 !== t ? t : null;
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null !== (t = w.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null !== (n = null !== (t = x.get(e)) && void 0 !== t ? t : w.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return G.get(e);
    }
    getConnectedActivityChannelId() {
        return r;
    }
    getActivityPanelMode() {
        return F;
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
            s: for (let [r, i] of b)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break s;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return N.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e && null != t) return D.get(ei(t, e));
    }
    getLaunchStates() {
        return D;
    }
}
v(ep, 'displayName', 'EmbeddedActivitiesStore'),
    v(ep, 'persistKey', 'EmbeddedActivities'),
    v(ep, 'migrations', [
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
let em = new ep(u.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: e_,
    CONNECTION_OPEN_SUPPLEMENTAL: j,
    GUILD_CREATE: W,
    CHANNEL_DELETE: K,
    EMBEDDED_ACTIVITY_LAUNCH_START: ea,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eo,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: es,
    EMBEDDED_ACTIVITY_CLOSE: Q,
    EMBEDDED_ACTIVITY_UPDATE_V2: z,
    LOCAL_ACTIVITY_UPDATE: X,
    EMBEDDED_ACTIVITY_SET_CONFIG: $,
    EMBEDDED_ACTIVITY_FETCH_SHELF: J,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: en,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: ee,
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: er,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eu,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: ec,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: ed,
    CHANNEL_SELECT: eE,
    CHANNEL_CALL_POPOUT_WINDOW_OPEN: ef
});
t.ZP = em;
