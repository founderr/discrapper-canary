let i;
r.d(n, {
    i6: function () {
        return O;
    }
});
var a,
    s = r(47120);
var o = r(653041);
var l = r(51350);
var u = r(442837),
    c = r(570140),
    d = r(911969),
    f = r(895924),
    _ = r(314897),
    h = r(592125),
    p = r(944486),
    m = r(594174),
    g = r(585483),
    E = r(358085),
    v = r(636449),
    I = r(155268),
    T = r(413458),
    b = r(761122),
    y = r(917107),
    S = r(701488),
    A = r(918559),
    N = r(981631);
function C(e, n, r) {
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
let R = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    O = [],
    D = [],
    L = '0',
    x = new Map(),
    w = new Map(),
    P = new Map(),
    M = new Map(),
    k = new Map(),
    U = new Map(),
    B = new Map(),
    G = new Map(),
    Z = new Map(),
    F = new Map(),
    V = 21600000,
    j = new Map();
let H = A.Ez.DISCONNECTED,
    Y = A.MI.RESIZABLE,
    W = S.GM.NORMAL;
function K(e) {
    return null != e ? e : L;
}
function z(e) {
    var n, r, i, a, s, o, l;
    let { guildId: u, channelId: c, location: d, applicationId: f, launchId: h, compositeInstanceId: p, participants: m } = e,
        E = (0, I.Z)(f);
    if (null == E) return;
    let v = null !== (i = P.get(c)) && void 0 !== i ? i : O,
        b = 0 === v.length,
        y = v.find((e) => e.applicationId === f),
        S = m.map((e) => e.userId),
        A = _.default.getId(),
        C = S.some((e) => e === A),
        R = null === (n = m.find((e) => e.userId === A)) || void 0 === n ? void 0 : n.sessionId,
        D = m.some((e) => (0, T.J)(e)),
        L = x.get(f),
        k = null === (r = M.get(ec(c, f))) || void 0 === r ? void 0 : r.launchParams,
        U = {
            applicationId: f,
            channelId: c,
            guildId: u,
            location: d,
            launchId: h,
            compositeInstanceId: p,
            url: E,
            userIds: new Set(S),
            participants: m,
            referrerId: null !== (a = null == L ? void 0 : L.referrerId) && void 0 !== a ? a : null == k ? void 0 : k.referrerId,
            customId: null !== (s = null == L ? void 0 : L.customId) && void 0 !== s ? s : null == k ? void 0 : k.customId
        };
    C &&
        null != L &&
        x.set(L.applicationId, {
            ...L,
            ...U
        });
    let B = !D;
    null != L && c === L.channelId && f === (null == L ? void 0 : L.applicationId) && ((!C && Array.from(L.userIds).some((e) => e === A)) || B)
        ? (x.delete(f), g.S.dispatch(N.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : C &&
          (null == L || L.applicationId !== f || L.channelId !== c) &&
          R === _.default.getSessionId() &&
          ee({
              channelId: c,
              applicationId: f,
              launchId: h,
              compositeInstanceId: p,
              location: d,
              participants: m,
              isFirstActivityInChannel: b,
              isStart: null == y,
              referrerId: U.referrerId,
              customId: U.customId
          });
    let G = (null !== (o = P.get(c)) && void 0 !== o ? o : []).filter((e) => e.applicationId !== f),
        Z = K(u),
        F = (null !== (l = w.get(Z)) && void 0 !== l ? l : []).filter((e) => !(e.applicationId === f && e.channelId === c));
    S.length > 0 && (G.push(U), F.push(U)), P.set(c, G), w.set(Z, F);
}
function q(e) {
    let n = e.activity_instances;
    null == n ||
        n.forEach((n) => {
            let { location: r, application_id: i, launch_id: a, composite_instance_id: s, participants: o } = n;
            null != r.channel_id &&
                z({
                    guildId: e.id,
                    channelId: r.channel_id,
                    location: r,
                    applicationId: i,
                    launchId: a,
                    compositeInstanceId: s,
                    participants: o.map((e) => ({
                        userId: e.user_id,
                        sessionId: e.session_id,
                        nonce: e.nonce
                    }))
                });
        });
}
function Q(e) {
    let { guilds: n } = e;
    P.clear(), w.clear(), n.forEach((e) => q(e));
}
function X(e) {
    let { guild: n } = e;
    q(n);
}
function J(e) {
    let { channel: n } = e;
    P.set(n.id, []);
    let r = n.guild_id;
    if (null != r) {
        var i;
        let e = K(r),
            a = (null !== (i = w.get(e)) && void 0 !== i ? i : []).filter((e) => e.channelId !== n.id);
        w.set(e, a);
    }
}
function $(e) {
    let { applicationId: n, launchId: r, compositeInstanceId: i, location: a, participants: s } = e;
    null != h.Z.getChannel(a.channel_id) &&
        null != a.channel_id &&
        z({
            guildId: a.guild_id,
            channelId: a.channel_id,
            location: a,
            applicationId: n,
            launchId: r,
            compositeInstanceId: i,
            participants: s.map((e) => ({
                userId: e.user_id,
                sessionId: e.session_id,
                nonce: e.nonce
            }))
        });
}
function ee(e) {
    var n, r;
    let { channelId: a, applicationId: s, launchId: o, compositeInstanceId: l, location: u, participants: d, isFirstActivityInChannel: f, isStart: E, referrerId: T, customId: b } = e,
        S = (0, I.Z)(s),
        C = _.default.getSessionId();
    if (null == S || null == C || (null === (n = x.get(s)) || void 0 === n ? void 0 : n.channelId) === a) return !1;
    let R = h.Z.getChannel(a),
        O = null == R ? void 0 : R.getGuildId(),
        D = m.default.getCurrentUser();
    if ((null == O && !(null !== (r = null == R ? void 0 : R.isPrivate()) && void 0 !== r && r)) || null == D) return !1;
    i = a;
    let L = {
        guildId: O,
        channelId: a,
        applicationId: s,
        url: S,
        userIds: new Set(d.map((e) => e.userId)),
        participants: d,
        connectedSince: Date.now(),
        launchId: o,
        compositeInstanceId: l,
        location: u,
        referrerId: T,
        customId: b
    };
    x.set(s, L),
        g.S.dispatch(N.CkL.OPEN_EMBEDDED_ACTIVITY, {
            channelId: a,
            applicationId: s,
            isFirstActivityInChannel: f,
            isStart: E,
            participants: d,
            embeddedActivity: L
        }),
        (0, v.R)()
            ? ((H = A.Ez.ACTIVITY_POPOUT_WINDOW),
              c.Z.wait(() => {
                  c.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
              }))
            : (H = i !== p.Z.getChannelId() || (0, y.Z)(a) ? A.Ez.PIP : A.Ez.PANEL),
        j.set(eI(a, s), Date.now());
}
function et(e) {
    let { applicationId: n } = e,
        r = x.get(n);
    x.delete(n), (null == r ? void 0 : r.channelId) === i && (i = void 0);
}
function en(e) {
    let { layout: n } = e;
    W = n;
}
function er(e) {
    var n;
    let { activity: r } = e;
    if (null == r) return !1;
    let i = x.get(null !== (n = r.application_id) && void 0 !== n ? n : '');
    if (null == i) return !1;
    x.set(i.applicationId, { ...i });
}
function ei(e) {
    let { applicationId: n, config: r } = e,
        i = x.get(n);
    null != i &&
        x.set(i.applicationId, {
            ...i,
            config: r
        });
}
function ea(e) {
    let { guildId: n } = e,
        r = K(n),
        i = U.get(r);
    U.set(r, {
        isFetching: !0,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function es(e) {
    let { guildId: n } = e,
        r = K(n),
        i = U.get(r);
    U.set(r, {
        isFetching: !1,
        lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    });
}
function eo(e) {
    let { activities: n, now: r } = e;
    n.forEach((e) => {
        let n = e.application_id,
            i = e.client_platform_config[(0, b.Z)((0, E.getOS)())];
        if (null == i.label_until) return;
        let a = new Date(i.label_until).getTime();
        if (a < r) return;
        let s = R.seenNewActivities[n],
            o = Object.hasOwn(R.seenNewActivities, n),
            l = new Date(s).getTime() < a;
        i.label_type === d.ww.NEW && (!o || l) && ((R.shouldShowNewActivityIndicator = !0), (R.seenNewActivities[n] = i.label_until));
        let u = R.seenUpdatedActivities[n],
            c = Object.hasOwn(R.seenUpdatedActivities, n),
            f = new Date(u).getTime() < a;
        i.label_type === d.ww.UPDATED && (!c || f) && ((R.shouldShowNewActivityIndicator = !0), (R.seenUpdatedActivities[n] = i.label_until));
    });
}
function el(e) {
    let { guildId: n, activities: r } = e,
        i = K(n);
    k.set(i, r);
    let a = Date.now();
    eo({
        activities: r,
        now: a
    }),
        U.set(i, {
            isFetching: !1,
            lastFetchTimestampMs: a
        });
}
let eu = () => {
    R.shouldShowNewActivityIndicator = !1;
};
function ec(e, n) {
    return ''.concat(e, ':').concat(n);
}
function ed(e) {
    let { applicationId: n, channelId: r, componentId: i, commandOrigin: a, launchParams: s } = e;
    M.set(ec(r, n), {
        isLaunching: !0,
        componentId: i,
        launchParams: s
    }),
        (Y = a === f.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? A.MI.NO_CHAT : A.MI.RESIZABLE);
}
function ef(e) {
    let { applicationId: n, channelId: r } = e;
    R.everLaunchedActivities.add(n),
        eh({
            applicationId: n,
            channelId: r
        });
}
function e_(e) {
    let { applicationId: n, channelId: r } = e;
    eh({
        applicationId: n,
        channelId: r
    });
}
function eh(e) {
    let { applicationId: n, channelId: r } = e;
    M.delete(ec(r, n));
}
function ep(e) {
    let { applicationId: n, lockState: r, pictureInPictureLockState: i, gridLockState: a } = e;
    null == r ? B.delete(n) : B.set(n, r), null === i ? G.delete(n) : void 0 !== i && G.set(n, i), null === a ? Z.delete(n) : void 0 !== a && Z.set(n, a);
}
function em(e) {
    let { activityPanelMode: n } = e;
    H = n;
}
function eg(e) {
    let { focusedActivityLayout: n } = e;
    Y = n;
}
function eE(e) {
    let { applicationId: n, layoutMode: r } = e;
    F.set(n, r);
}
function ev(e) {
    let { channelId: n } = e;
    i !== n && H === A.Ez.PANEL && (H = A.Ez.PIP);
}
function eI(e, n) {
    return ''.concat(e, ':').concat(n);
}
function eT(e) {
    let { key: n } = e;
    n === N.KJ3.ACTIVITY_POPOUT && (H = A.Ez.PIP);
}
class eb extends (a = u.ZP.PersistedStore) {
    initialize(e) {
        var n;
        let r = new Set(null !== (n = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== n ? n : []);
        null != e &&
            (R = {
                ...e,
                everLaunchedActivities: r
            });
    }
    getState() {
        return R;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var n;
        return null == e
            ? null
            : null !==
                    (n = Array.from(x.values()).find((n) => {
                        let { channelId: r } = n;
                        return e === r;
                    })) && void 0 !== n
              ? n
              : null;
    }
    getSelfEmbeddedActivities() {
        return x;
    }
    getEmbeddedActivitiesForGuild(e) {
        var n;
        return null !== (n = w.get(e)) && void 0 !== n ? n : O;
    }
    getEmbeddedActivitiesForChannel(e) {
        var n;
        return null !== (n = P.get(e)) && void 0 !== n ? n : O;
    }
    getEmbeddedActivitiesByChannel() {
        return P;
    }
    getEmbeddedActivityDurationMs(e, n) {
        let r = j.get(eI(e, n));
        return null == r ? null : Date.now() - r;
    }
    isLaunchingActivity() {
        return M.size > 0;
    }
    getShelfActivities(e) {
        var n;
        let r = K(e);
        return null !== (n = k.get(r)) && void 0 !== n ? n : D;
    }
    getShelfFetchStatus(e) {
        let n = K(e);
        return U.get(n);
    }
    shouldFetchShelf(e) {
        var n, r;
        let i = K(e),
            a = null !== (n = U.get(i)) && void 0 !== n ? n : { isFetching: !1 },
            s = Date.now() - (null !== (r = null == a ? void 0 : a.lastFetchTimestampMs) && void 0 !== r ? r : 0) > V;
        return !(null == a ? void 0 : a.isFetching) && s;
    }
    getOrientationLockStateForApp(e) {
        return B.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var n;
        return null !== (n = G.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var n, r;
        return null !== (r = null !== (n = Z.get(e)) && void 0 !== n ? n : G.get(e)) && void 0 !== r ? r : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return F.get(e);
    }
    getConnectedActivityChannelId() {
        return i;
    }
    getActivityPanelMode() {
        return H;
    }
    getFocusedLayout() {
        return Y;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let n = this.getConnectedActivityChannelId();
        if (null != n) return null !== (e = this.getSelfEmbeddedActivityForChannel(n)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, n) {
        let r;
        if (void 0 !== n) {
            s: for (let [i, a] of P)
                for (let i of a)
                    if (i.applicationId === n && i.userIds.has(e)) {
                        r = i;
                        break s;
                    }
            return r;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return R.everLaunchedActivities.has(e);
    }
    getLaunchState(e, n) {
        if (null != e && null != n) return M.get(ec(n, e));
    }
    getLaunchStates() {
        return M;
    }
    getActivityPopoutWindowLayout() {
        return W;
    }
}
C(eb, 'displayName', 'EmbeddedActivitiesStore'),
    C(eb, 'persistKey', 'EmbeddedActivities'),
    C(eb, 'migrations', [
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
            var n;
            let r = new Set(null !== (n = e.everLaunchedActivities) && void 0 !== n ? n : []);
            return {
                ...e,
                everLaunchedActivities: r
            };
        },
        (e) => (delete e.usersHavePlayedByApp, { ...e })
    ]);
let ey = new eb(c.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: eE,
    CONNECTION_OPEN_SUPPLEMENTAL: Q,
    GUILD_CREATE: X,
    CHANNEL_DELETE: J,
    EMBEDDED_ACTIVITY_LAUNCH_START: ed,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ef,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: e_,
    EMBEDDED_ACTIVITY_CLOSE: et,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: en,
    EMBEDDED_ACTIVITY_UPDATE_V2: $,
    LOCAL_ACTIVITY_UPDATE: er,
    EMBEDDED_ACTIVITY_SET_CONFIG: ei,
    EMBEDDED_ACTIVITY_FETCH_SHELF: ea,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: el,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: es,
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: eu,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: ep,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: em,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eg,
    CHANNEL_SELECT: ev,
    POPOUT_WINDOW_CLOSE: eT
});
n.ZP = ey;
