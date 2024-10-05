n.d(t, {
    D5: function () {
        return L;
    },
    uZ: function () {
        return S;
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
    _ = n(768119),
    E = n(944486),
    f = n(914010),
    h = n(594174),
    p = n(981631),
    I = n(176505),
    m = n(231338);
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
let S = 'message_requests',
    g = !1,
    A = !1,
    N = !0,
    O = !1,
    R = {},
    v = {};
function C(e) {
    if (null == e) return null;
    if ((0, I.AB)(e)) {
        let t = f.Z.getGuildId();
        return null == t ? null : (0, I.Qk)(e, t);
    }
    return e;
}
function L(e) {
    return [o.tI.VIEW_CHANNEL, o.tI.VIEW_THREAD, o.tI.VIEW_MESSAGE_REQUEST].includes(e.type);
}
function D(e) {
    let t = !1;
    O && ((O = !1), (t = !0));
    let n = C(E.Z.getChannelId());
    return null != n && n in R && (delete R[n], (t = !0)), t && e ? e : !e;
}
function y() {
    let e = !1;
    for (let t in R) {
        let n = R[t];
        if (n.type === o.tI.VIEW_THREAD || n.type === o.tI.VIEW_CHANNEL) {
            let r = c.Z.getChannel(n.channelId);
            (null == r || !d.Z.can(m.Pl.VIEW_CHANNEL, r)) && (delete R[t], (e = !0));
        }
    }
    return e;
}
function b() {
    if (O === _.Z.isActive()) return !1;
    O = _.Z.isActive();
}
class M extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, a;
            (g = null !== (t = e.isMembersOpen) && void 0 !== t && t), (A = null !== (n = e.isSummariesOpen) && void 0 !== n && n), (N = null === (r = e.isProfileOpen) || void 0 === r || r), (R = null !== (i = e.sidebars) && void 0 !== i ? i : {}), (v = null !== (a = e.guildSidebars) && void 0 !== a ? a : {});
        }
        this.syncWith([_.Z], b), this.syncWith([d.Z], y);
    }
    getState() {
        return {
            isMembersOpen: g,
            isSummariesOpen: A,
            isProfileOpen: N,
            sidebars: R,
            guildSidebars: v
        };
    }
    getSection(e, t) {
        if (O) return p.ULH.SEARCH;
        let n = C(e);
        return null != n && null != R[n] ? p.ULH.SIDEBAR_CHAT : t && N ? p.ULH.PROFILE : A ? p.ULH.SUMMARIES : g ? p.ULH.MEMBERS : p.ULH.NONE;
    }
    getSidebarState(e) {
        let t = C(e);
        return null == t ? void 0 : R[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : v[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = C(e);
        if (null == t || O) return null;
        let n = R[t];
        return null == n ? null : n.type === o.tI.VIEW_THREAD || n.type === o.tI.VIEW_CHANNEL ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = C(e);
        if (null == n || O) return null;
        let r = R[n];
        return null == r ? null : r.type === o.tI.VIEW_THREAD || r.type === o.tI.VIEW_CHANNEL ? (null === (t = r.details) || void 0 === t ? void 0 : t.initialMessageId) : null;
    }
}
T(M, 'displayName', 'ChannelSectionStore'),
    T(M, 'persistKey', 'ChannelSectionStore2'),
    (t.ZP = new M(s.Z, {
        CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
            A && (A = D(A)), (g = D(g));
        },
        PROFILE_PANEL_TOGGLE_SECTION: function () {
            !N && l.S.dispatch(p.CkL.SEARCH_RESULTS_CLOSE), (N = D(N));
        },
        CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
            g && (g = D(g)), (A = D(A));
        },
        SIDEBAR_VIEW_CHANNEL: function (e) {
            let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
            O = !1;
            let a = C(n);
            return (
                null != a &&
                ((R[a] = {
                    type: t,
                    channelId: r,
                    details: i
                }),
                !0)
            );
        },
        SIDEBAR_VIEW_GUILD: function (e) {
            let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
            O = !1;
            let a = C(r);
            return (
                null != a &&
                ((v[n] = {
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
            O = !1;
            let i = C(t);
            null != i &&
                (R[i] = {
                    type: o.tI.CREATE_THREAD,
                    parentChannelId: t,
                    parentMessageId: n,
                    location: r
                });
        },
        SIDEBAR_CLOSE: function (e) {
            let { baseChannelId: t } = e,
                n = C(t);
            null != n && delete R[n];
        },
        SIDEBAR_CLOSE_GUILD: function (e) {
            let { guildId: t } = e;
            return null != v[t] && (delete v[t], !0);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            if (t.id in R) return delete R[t.id], !0;
            let n = !1;
            for (let e in R) {
                let r = R[e];
                null != r && r.type === o.tI.VIEW_CHANNEL && r.channelId === t.id && (delete R[e], (n = !0));
            }
            return n;
        },
        CHANNEL_SELECT: function () {
            i.tq && g && ((g = !1), (A = !1));
        },
        THREAD_CREATE: function (e) {
            var t;
            let { channel: n } = e;
            if (n.ownerId === (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            let r = R[n.parent_id];
            null != r &&
                r.type === o.tI.CREATE_THREAD &&
                r.parentMessageId === u.default.castChannelIdAsMessageId(n.id) &&
                (R[n.parent_id] = {
                    type: o.tI.VIEW_THREAD,
                    channelId: n.id
                });
        },
        THREAD_DELETE: function (e) {
            let { channel: t } = e,
                n = R[t.parent_id];
            if (null == n || n.type !== o.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
            delete R[t.parent_id];
        }
    }));
