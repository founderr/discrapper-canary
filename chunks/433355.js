n.d(t, {
    D5: function () {
        return R;
    },
    uZ: function () {
        return I;
    }
});
var r,
    i = n(873546),
    a = n(442837),
    s = n(570140),
    o = n(897473),
    l = n(585483),
    u = n(709054),
    c = n(592125),
    d = n(496675),
    f = n(768119),
    _ = n(944486),
    p = n(914010),
    h = n(594174),
    m = n(981631),
    g = n(176505),
    E = n(231338);
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
let I = 'message_requests',
    b = !1,
    T = !1,
    S = !0,
    y = !1,
    A = {},
    N = {};
function C(e) {
    if (null == e) return null;
    if ((0, g.AB)(e)) {
        let t = p.Z.getGuildId();
        return null == t ? null : (0, g.Qk)(e, t);
    }
    return e;
}
function R(e) {
    return [o.tI.VIEW_CHANNEL, o.tI.VIEW_THREAD, o.tI.VIEW_MESSAGE_REQUEST].includes(e.type);
}
function O(e) {
    let t = !1;
    y && ((y = !1), (t = !0));
    let n = C(_.Z.getChannelId());
    return null != n && n in A && (delete A[n], (t = !0)), t && e ? e : !e;
}
function D() {
    let e = !1;
    for (let t in A) {
        let n = A[t];
        if (n.type === o.tI.VIEW_THREAD || n.type === o.tI.VIEW_CHANNEL) {
            let r = c.Z.getChannel(n.channelId);
            (null == r || !d.Z.can(E.Pl.VIEW_CHANNEL, r)) && (delete A[t], (e = !0));
        }
    }
    return e;
}
function L() {
    if (y === f.Z.isActive()) return !1;
    y = f.Z.isActive();
}
class x extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, a;
            (b = null !== (t = e.isMembersOpen) && void 0 !== t && t), (T = null !== (n = e.isSummariesOpen) && void 0 !== n && n), (S = null === (r = e.isProfileOpen) || void 0 === r || r), (A = null !== (i = e.sidebars) && void 0 !== i ? i : {}), (N = null !== (a = e.guildSidebars) && void 0 !== a ? a : {});
        }
        this.syncWith([f.Z], L), this.syncWith([d.Z], D);
    }
    getState() {
        return {
            isMembersOpen: b,
            isSummariesOpen: T,
            isProfileOpen: S,
            sidebars: A,
            guildSidebars: N
        };
    }
    getSection(e, t) {
        if (y) return m.ULH.SEARCH;
        let n = C(e);
        return null != n && null != A[n] ? m.ULH.SIDEBAR_CHAT : t && S ? m.ULH.PROFILE : T ? m.ULH.SUMMARIES : b ? m.ULH.MEMBERS : m.ULH.NONE;
    }
    getSidebarState(e) {
        let t = C(e);
        return null == t ? void 0 : A[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : N[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = C(e);
        if (null == t || y) return null;
        let n = A[t];
        return null == n ? null : n.type === o.tI.VIEW_THREAD || n.type === o.tI.VIEW_CHANNEL ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = C(e);
        if (null == n || y) return null;
        let r = A[n];
        return null == r ? null : r.type === o.tI.VIEW_THREAD || r.type === o.tI.VIEW_CHANNEL ? (null === (t = r.details) || void 0 === t ? void 0 : t.initialMessageId) : null;
    }
}
v(x, 'displayName', 'ChannelSectionStore'),
    v(x, 'persistKey', 'ChannelSectionStore2'),
    (t.ZP = new x(s.Z, {
        CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
            T && (T = O(T)), (b = O(b));
        },
        PROFILE_PANEL_TOGGLE_SECTION: function () {
            !S && l.S.dispatch(m.CkL.SEARCH_RESULTS_CLOSE), (S = O(S));
        },
        CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
            b && (b = O(b)), (T = O(T));
        },
        SIDEBAR_VIEW_CHANNEL: function (e) {
            let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
            y = !1;
            let a = C(n);
            return (
                null != a &&
                ((A[a] = {
                    type: t,
                    channelId: r,
                    details: i
                }),
                !0)
            );
        },
        SIDEBAR_VIEW_GUILD: function (e) {
            let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
            y = !1;
            let a = C(r);
            return (
                null != a &&
                ((N[n] = {
                    type: t,
                    baseChannelId: a,
                    guildId: n,
                    details: i
                }),
                !0)
            );
        },
        SIDEBAR_CREATE_THREAD: function (e) {
            let { parentChannelId: t, parentMessageId: n, location: r } = e;
            y = !1;
            let i = C(t);
            null != i &&
                (A[i] = {
                    type: o.tI.CREATE_THREAD,
                    parentChannelId: t,
                    parentMessageId: n,
                    location: r
                });
        },
        SIDEBAR_CLOSE: function (e) {
            let { baseChannelId: t } = e,
                n = C(t);
            null != n && delete A[n];
        },
        SIDEBAR_CLOSE_GUILD: function (e) {
            let { guildId: t } = e;
            return null != N[t] && (delete N[t], !0);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            if (t.id in A) return delete A[t.id], !0;
            let n = !1;
            for (let e in A) {
                let r = A[e];
                null != r && r.type === o.tI.VIEW_CHANNEL && r.channelId === t.id && (delete A[e], (n = !0));
            }
            return n;
        },
        CHANNEL_SELECT: function () {
            i.tq && b && ((b = !1), (T = !1));
        },
        THREAD_CREATE: function (e) {
            var t;
            let { channel: n } = e;
            if (n.ownerId === (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            let r = A[n.parent_id];
            null != r &&
                r.type === o.tI.CREATE_THREAD &&
                r.parentMessageId === u.default.castChannelIdAsMessageId(n.id) &&
                (A[n.parent_id] = {
                    type: o.tI.VIEW_THREAD,
                    channelId: n.id
                });
        },
        THREAD_DELETE: function (e) {
            let { channel: t } = e,
                n = A[t.parent_id];
            if (null == n || n.type !== o.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
            delete A[t.parent_id];
        }
    }));
