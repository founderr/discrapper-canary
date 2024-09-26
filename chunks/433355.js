n.d(t, {
    D5: function () {
        return y;
    },
    uZ: function () {
        return g;
    }
});
var r,
    i = n(873546),
    a = n(442837),
    o = n(570140),
    s = n(897473),
    l = n(585483),
    u = n(709054),
    c = n(592125),
    d = n(496675),
    _ = n(768119),
    E = n(944486),
    f = n(914010),
    h = n(594174),
    p = n(981631),
    m = n(176505),
    I = n(231338);
function T(e, t, n) {
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
let g = 'message_requests',
    S = !1,
    A = !1,
    v = !0,
    N = !1,
    O = {},
    R = {};
function C(e) {
    if (null == e) return null;
    if ((0, m.AB)(e)) {
        let t = f.Z.getGuildId();
        return null == t ? null : (0, m.Qk)(e, t);
    }
    return e;
}
function y(e) {
    return [s.tI.VIEW_CHANNEL, s.tI.VIEW_THREAD, s.tI.VIEW_MESSAGE_REQUEST].includes(e.type);
}
function L(e) {
    let t = !1;
    N && ((N = !1), (t = !0));
    let n = C(E.Z.getChannelId());
    return null != n && n in O && (delete O[n], (t = !0)), t && e ? e : !e;
}
function b() {
    A && (A = L(A)), (S = L(S));
}
function D() {
    S && (S = L(S)), (A = L(A));
}
function M() {
    !v && l.S.dispatch(p.CkL.SEARCH_RESULTS_CLOSE), (v = L(v));
}
function P(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    N = !1;
    let a = C(r);
    return (
        null != a &&
        ((R[n] = {
            type: t,
            baseChannelId: a,
            guildId: n,
            details: i
        }),
        !0)
    );
}
function U(e) {
    let { guildId: t } = e;
    return null != R[t] && (delete R[t], !0);
}
function w(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    N = !1;
    let a = C(n);
    return (
        null != a &&
        ((O[a] = {
            type: t,
            channelId: r,
            details: i
        }),
        !0)
    );
}
function x(e) {
    let { parentChannelId: t, parentMessageId: n, location: r } = e;
    N = !1;
    let i = C(t);
    null != i &&
        (O[i] = {
            type: s.tI.CREATE_THREAD,
            parentChannelId: t,
            parentMessageId: n,
            location: r
        });
}
function G(e) {
    let { channel: t } = e;
    if (t.id in O) return delete O[t.id], !0;
    let n = !1;
    for (let e in O) {
        let r = O[e];
        null != r && r.type === s.tI.VIEW_CHANNEL && r.channelId === t.id && (delete O[e], (n = !0));
    }
    return n;
}
function k(e) {
    let { channel: t } = e,
        n = O[t.parent_id];
    if (null == n || n.type !== s.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete O[t.parent_id];
}
function B(e) {
    var t;
    let { channel: n } = e;
    if (n.ownerId === (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    let r = O[n.parent_id];
    null != r &&
        r.type === s.tI.CREATE_THREAD &&
        r.parentMessageId === u.default.castChannelIdAsMessageId(n.id) &&
        (O[n.parent_id] = {
            type: s.tI.VIEW_THREAD,
            channelId: n.id
        });
}
function F() {
    let e = !1;
    for (let t in O) {
        let n = O[t];
        if (n.type === s.tI.VIEW_THREAD || n.type === s.tI.VIEW_CHANNEL) {
            let r = c.Z.getChannel(n.channelId);
            (null == r || !d.Z.can(I.Pl.VIEW_CHANNEL, r)) && (delete O[t], (e = !0));
        }
    }
    return e;
}
function Z(e) {
    let { baseChannelId: t } = e,
        n = C(t);
    null != n && delete O[n];
}
function V() {
    if (N === _.Z.isActive()) return !1;
    N = _.Z.isActive();
}
function H() {
    i.tq && S && ((S = !1), (A = !1));
}
class Y extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, a;
            (S = null !== (t = e.isMembersOpen) && void 0 !== t && t), (A = null !== (n = e.isSummariesOpen) && void 0 !== n && n), (v = null === (r = e.isProfileOpen) || void 0 === r || r), (O = null !== (i = e.sidebars) && void 0 !== i ? i : {}), (R = null !== (a = e.guildSidebars) && void 0 !== a ? a : {});
        }
        this.syncWith([_.Z], V), this.syncWith([d.Z], F);
    }
    getState() {
        return {
            isMembersOpen: S,
            isSummariesOpen: A,
            isProfileOpen: v,
            sidebars: O,
            guildSidebars: R
        };
    }
    getSection(e, t) {
        if (N) return p.ULH.SEARCH;
        let n = C(e);
        return null != n && null != O[n] ? p.ULH.SIDEBAR_CHAT : t && v ? p.ULH.PROFILE : A ? p.ULH.SUMMARIES : S ? p.ULH.MEMBERS : p.ULH.NONE;
    }
    getSidebarState(e) {
        let t = C(e);
        return null == t ? void 0 : O[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : R[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = C(e);
        if (null == t || N) return null;
        let n = O[t];
        return null == n ? null : n.type === s.tI.VIEW_THREAD || n.type === s.tI.VIEW_CHANNEL ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = C(e);
        if (null == n || N) return null;
        let r = O[n];
        return null == r ? null : r.type === s.tI.VIEW_THREAD || r.type === s.tI.VIEW_CHANNEL ? (null === (t = r.details) || void 0 === t ? void 0 : t.initialMessageId) : null;
    }
}
T(Y, 'displayName', 'ChannelSectionStore'),
    T(Y, 'persistKey', 'ChannelSectionStore2'),
    (t.ZP = new Y(o.Z, {
        CHANNEL_TOGGLE_MEMBERS_SECTION: b,
        PROFILE_PANEL_TOGGLE_SECTION: M,
        CHANNEL_TOGGLE_SUMMARIES_SECTION: D,
        SIDEBAR_VIEW_CHANNEL: w,
        SIDEBAR_VIEW_GUILD: P,
        SIDEBAR_CREATE_THREAD: x,
        SIDEBAR_CLOSE: Z,
        SIDEBAR_CLOSE_GUILD: U,
        CHANNEL_DELETE: G,
        CHANNEL_SELECT: H,
        THREAD_CREATE: B,
        THREAD_DELETE: k
    }));
