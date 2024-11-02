n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(913527),
    l = n.n(o),
    u = n(442837),
    c = n(759174),
    d = n(570140),
    f = n(430824),
    _ = n(594174),
    h = n(70956),
    p = n(881952),
    m = n(246364),
    g = n(937111),
    E = n(981631);
let v = new Map(),
    I = {};
function S(e) {
    return I[e];
}
function T(e, t) {
    (I[e] = t), v.set(e, l()());
}
function b(e, t, n) {
    if (t !== n && null != t) {
        if (t === m.wB.SUBMITTED) {
            let t = I[e];
            T(e, t + 1);
        }
        if (n === m.wB.SUBMITTED) {
            let t = I[e];
            T(e, Math.max(0, t - 1));
        }
    }
}
let y = !1,
    A = (e) => 'guild-join-request='.concat(e),
    N = (e, t) => 'guild-'.concat(e, '-').concat(t);
function C(e) {
    let t = [];
    return t.push(A(e.joinRequestId)), t.push(N(e.guildId, e.applicationStatus)), t;
}
let R = new c.h(C, (e) => ''.concat(e.joinRequestId)),
    O = new c.h(C, (e) => ''.concat(e.joinRequestId)),
    D = new c.h(C, (e) => ''.concat(e.actionedAt));
function L(e) {
    return R.get(e);
}
function x(e) {
    (U[e.joinRequestId] = e), R.set(e.joinRequestId, e), (0, p.Nd)(e.applicationStatus) && (D.delete(e.joinRequestId), O.set(e.joinRequestId, e)), (0, p.bk)(e.applicationStatus) && (O.delete(e.joinRequestId), D.set(e.joinRequestId, e));
}
function w(e) {
    var t, n;
    let { guildId: r, request: i } = e,
        a = (0, g.j)(i),
        s = _.default.getCurrentUser();
    if (null == s || a.userId === s.id) return !1;
    let o = null === ((n = a.joinRequestId), (t = R.get(n))) || void 0 === t ? void 0 : t.applicationStatus;
    return b(r, a.applicationStatus, o), x(a), !0;
}
let M = {},
    P = {},
    k = {},
    U = {},
    G = 10 * h.Z.Seconds.MINUTE;
class B extends (r = u.ZP.Store) {
    getRequest(e) {
        return U[e];
    }
    getRequests(e, t) {
        let n = N(e, t);
        return (0, p.bk)(t) ? D.values(n) : (0, p.Nd)(t) ? O.values(n) : R.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return I[e];
    }
    isFetching() {
        return y;
    }
    hasFetched(e) {
        if (!v.has(e)) return !1;
        let t = v.get(e);
        return null != t && l()().diff(t, 'seconds') < G;
    }
    getSelectedApplicationTab(e) {
        var t;
        let n = f.Z.getGuild(e),
            r = this.getRequests(e, m.wB.SUBMITTED).length > 0,
            i = (null == n ? void 0 : n.hasFeature(E.oNc.CLAN)) && !r ? 'REVIEW_APPLICATION' : m.wB.SUBMITTED;
        return null !== (t = M[e]) && void 0 !== t ? t : i;
    }
    getSelectedSortOrder(e) {
        var t;
        return null !== (t = P[e]) && void 0 !== t ? t : m.Nw.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        var t;
        let n = k[e];
        return null != n ? ((t = n.joinRequestId), R.get(t)) : null;
    }
}
(s = 'GuildJoinRequestStoreV2'),
    (a = 'displayName') in (i = B)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new B(d.Z, {
        GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function (e) {
            let { joinRequest: t } = e;
            x(t);
        },
        GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function (e) {
            let { status: t, requests: n, total: r, guildId: i } = e;
            (y = !1),
                t === m.wB.SUBMITTED && T(i, r),
                n.forEach((e) => {
                    x(e);
                });
        },
        GUILD_JOIN_REQUESTS_FETCH_START: function () {
            y = !0;
        },
        GUILD_JOIN_REQUESTS_FETCH_FAILURE: function () {
            y = !1;
        },
        GUILD_JOIN_REQUESTS_BULK_ACTION: function (e) {
            let { guildId: t, action: n } = e;
            R.values(N(t, m.wB.SUBMITTED)).forEach((e) => {
                x({
                    ...e,
                    applicationStatus: n
                });
            }),
                T(t, 0);
        },
        GUILD_JOIN_REQUEST_CREATE: w,
        GUILD_JOIN_REQUEST_UPDATE: w,
        GUILD_JOIN_REQUEST_DELETE: function (e) {
            var t, n;
            let { id: r, guildId: i } = e;
            let a = ((t = r), R.get(t));
            if (null != a) {
                b(i, null, a.applicationStatus), (n = r), delete U[n], R.delete(n), O.delete(n), D.delete(n);
            }
        },
        GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function (e) {
            let { guildId: t, applicationTab: n } = e;
            n !== M[t] && (M[t] = n);
        },
        GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function (e) {
            var t;
            let { guildId: n, sortOrder: r } = e;
            if (r === P[n]) return;
            P[n] = r;
            let i = null !== (t = M[n]) && void 0 !== t ? t : m.wB.SUBMITTED;
            'REVIEW_APPLICATION' !== i && ((0, p.bk)(i) && D.clear(), (0, p.Nd)(i) && O.clear());
        },
        GUILD_JOIN_REQUESTS_SET_SELECTED: function (e) {
            let { guildId: t, request: n } = e;
            k[t] = n;
        }
    }));
