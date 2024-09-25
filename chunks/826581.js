var r,
    i = n(47120);
var a = n(653041);
var o = n(913527),
    s = n.n(o),
    l = n(442837),
    u = n(759174),
    c = n(570140),
    d = n(430824),
    _ = n(594174),
    E = n(70956),
    f = n(881952),
    h = n(246364),
    p = n(937111),
    m = n(981631);
function I(e, t, n) {
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
let T = new Map(),
    g = {};
function S(e) {
    return g[e];
}
function A(e, t) {
    (g[e] = t), T.set(e, s()());
}
function v(e, t, n) {
    if (t !== n && null != t) {
        if (t === h.wB.SUBMITTED) {
            let t = S(e);
            A(e, t + 1);
        }
        if (n === h.wB.SUBMITTED) {
            let t = S(e);
            A(e, Math.max(0, t - 1));
        }
    }
}
function N(e) {
    let { joinRequest: t } = e;
    G(t);
}
let O = !1;
function R() {
    O = !0;
}
function C(e) {
    let { status: t, requests: n, total: r, guildId: i } = e;
    (O = !1),
        t === h.wB.SUBMITTED && A(i, r),
        n.forEach((e) => {
            G(e);
        });
}
function y() {
    O = !1;
}
let b = (e) => 'guild-join-request='.concat(e),
    L = (e, t) => 'guild-'.concat(e, '-').concat(t);
function D(e) {
    let t = [];
    return t.push(b(e.joinRequestId)), t.push(L(e.guildId, e.applicationStatus)), t;
}
let M = new u.h(D, (e) => ''.concat(e.joinRequestId)),
    P = new u.h(D, (e) => ''.concat(e.joinRequestId)),
    U = new u.h(D, (e) => ''.concat(e.actionedAt));
function w(e) {
    return M.get(e);
}
function x(e) {
    delete K[e], M.delete(e), P.delete(e), U.delete(e);
}
function G(e) {
    (K[e.joinRequestId] = e), M.set(e.joinRequestId, e), (0, f.Nd)(e.applicationStatus) && (U.delete(e.joinRequestId), P.set(e.joinRequestId, e)), (0, f.bk)(e.applicationStatus) && (P.delete(e.joinRequestId), U.set(e.joinRequestId, e));
}
function k(e) {
    var t;
    let { guildId: n, request: r } = e,
        i = (0, p.j)(r),
        a = _.default.getCurrentUser();
    if (null == a || i.userId === a.id) return !1;
    let o = null === (t = w(i.joinRequestId)) || void 0 === t ? void 0 : t.applicationStatus;
    return v(n, i.applicationStatus, o), G(i), !0;
}
function B(e) {
    let { id: t, guildId: n } = e,
        r = w(t);
    null != r && (v(n, null, r.applicationStatus), x(t));
}
function F(e) {
    let { guildId: t, action: n } = e;
    M.values(L(t, h.wB.SUBMITTED)).forEach((e) => {
        G({
            ...e,
            applicationStatus: n
        });
    }),
        A(t, 0);
}
let Z = {};
function V(e) {
    let { guildId: t, applicationTab: n } = e;
    n !== Z[t] && (Z[t] = n);
}
let H = {};
function Y(e) {
    var t;
    let { guildId: n, sortOrder: r } = e;
    if (r === H[n]) return;
    H[n] = r;
    let i = null !== (t = Z[n]) && void 0 !== t ? t : h.wB.SUBMITTED;
    'REVIEW_APPLICATION' !== i && ((0, f.bk)(i) && U.clear(), (0, f.Nd)(i) && P.clear());
}
let j = {};
function W(e) {
    let { guildId: t, request: n } = e;
    j[t] = n;
}
let K = {},
    z = 10 * E.Z.Seconds.MINUTE;
class q extends (r = l.ZP.Store) {
    getRequest(e) {
        return K[e];
    }
    getRequests(e, t) {
        let n = L(e, t);
        return (0, f.bk)(t) ? U.values(n) : (0, f.Nd)(t) ? P.values(n) : M.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return g[e];
    }
    isFetching() {
        return O;
    }
    hasFetched(e) {
        if (!T.has(e)) return !1;
        let t = T.get(e);
        return null != t && s()().diff(t, 'seconds') < z;
    }
    getSelectedApplicationTab(e) {
        var t;
        let n = d.Z.getGuild(e),
            r = this.getRequests(e, h.wB.SUBMITTED).length > 0,
            i = (null == n ? void 0 : n.hasFeature(m.oNc.CLAN)) && !r ? 'REVIEW_APPLICATION' : h.wB.SUBMITTED;
        return null !== (t = Z[e]) && void 0 !== t ? t : i;
    }
    getSelectedSortOrder(e) {
        var t;
        return null !== (t = H[e]) && void 0 !== t ? t : h.Nw.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let t = j[e];
        return null != t ? w(t.joinRequestId) : null;
    }
}
I(q, 'displayName', 'GuildJoinRequestStoreV2'),
    (t.Z = new q(c.Z, {
        GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: N,
        GUILD_JOIN_REQUESTS_FETCH_SUCCESS: C,
        GUILD_JOIN_REQUESTS_FETCH_START: R,
        GUILD_JOIN_REQUESTS_FETCH_FAILURE: y,
        GUILD_JOIN_REQUESTS_BULK_ACTION: F,
        GUILD_JOIN_REQUEST_CREATE: k,
        GUILD_JOIN_REQUEST_UPDATE: k,
        GUILD_JOIN_REQUEST_DELETE: B,
        GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: V,
        GUILD_JOIN_REQUESTS_SET_SORT_ORDER: Y,
        GUILD_JOIN_REQUESTS_SET_SELECTED: W
    }));
