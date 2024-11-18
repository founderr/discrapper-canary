n(724458), n(47120), n(653041);
var i = n(133080),
    r = n(412788),
    l = n(594174),
    o = n(709054),
    E = n(260722),
    a = n(735079),
    u = n(546791),
    s = n(292352);
function _(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let d = null,
    c = null,
    T = {},
    S = D(),
    I = M(),
    C = null,
    N = (function () {
        var t, e, n, i;
        return (null === (e = window) || void 0 === e ? void 0 : null === (t = e.location) || void 0 === t ? void 0 : t.pathname) === s.ix.FAMILY_CENTER_MY_FAMILY ? s.dG.REQUESTS : (null === (i = window) || void 0 === i ? void 0 : null === (n = i.location) || void 0 === n ? void 0 : n.pathname) === s.ix.FAMILY_CENTER_SETTINGS ? s.dG.SETTINGS : s.dG.ACTIVITY;
    })(),
    A = !1,
    f = !1,
    L = null,
    R = null,
    g = {};
function D() {
    return {
        [s.MY.USER_ADD]: {},
        [s.MY.GUILD_ADD]: {},
        [s.MY.USER_INTERACTION]: {},
        [s.MY.GUILD_INTERACTION]: {},
        [s.MY.USER_CALLED]: {}
    };
}
function M() {
    return {
        [s.MY.USER_ADD]: 0,
        [s.MY.GUILD_ADD]: 0,
        [s.MY.USER_INTERACTION]: 0,
        [s.MY.GUILD_INTERACTION]: 0,
        [s.MY.USER_CALLED]: 0
    };
}
function p() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        e = arguments.length > 1 ? arguments[1] : void 0;
    return (T =
        t.length > 0
            ? t.reduce(
                  (t, e) => ({
                      ...t,
                      [e.user_id]: e
                  }),
                  {}
              )
            : {});
}
function y(t) {
    void 0 !== t && (I = t);
}
function U(t, e) {
    let n = e ? S : D();
    return (S = t.reduce((t, e) => {
        let i = e.display_type;
        return void 0 !== n[i] && void 0 === n[i][e.event_id] && (t[i][e.event_id] = e), t;
    }, n));
}
function Y(t) {
    g = t.reduce(
        (t, e) => ({
            ...t,
            [e.id]: new a.J(e)
        }),
        g
    );
}
function h() {
    f = !0;
}
function v(t) {
    let { linkedUsers: e, familyCenterTeenActivity: n } = t,
        { actions: i, guilds: r, totals: l, teenId: E, rangeStartId: a } = n;
    (d = E), (c = a), U(i), y(l), Y(r), p(e), (f = !1), (L = o.default.fromTimestamp(Date.now())), (A = !0);
}
function F(t) {
    let { linkedUsers: e } = t;
    p(e);
}
function m(t) {
    let { linkedUsers: e } = t;
    p(e);
}
function O(t) {
    let { familyCenterTeenActivity: e } = t;
    if (void 0 === e) return;
    let { actions: n, totals: i, guilds: r, teenId: l, rangeStartId: E } = e;
    (d = l), (c = E), U(n), y(i), Y(r), (f = !1), (L = o.default.fromTimestamp(Date.now()));
}
function G(t) {
    let { familyCenterTeenActivity: e } = t,
        { actions: n, guilds: i } = e;
    U(n, !0), Y(i);
}
function H(t) {
    let { linkedUsers: e } = t;
    p(e);
}
function w(t) {
    let { linkedUsers: e } = t;
    p(e, !0);
}
function b(t) {
    let { linkCode: e } = t;
    C = e;
}
function k(t) {
    let { tab: e } = t;
    N = e;
}
function V(t) {
    let { user: e } = t;
    if (void 0 === e.linked_users) return;
    let n = l.default.getUsers();
    e.linked_users.some((t) => {
        let { user_id: e } = t;
        return void 0 === n[e];
    }) && e.linked_users.length > Object.keys(T).length
        ? E.ZP.fetchLinkedUsers()
        : p(e.linked_users);
}
function P(t) {
    var e;
    let { countryCode: n } = t;
    if (null != n) R = null !== (e = (0, i.Zz)(n)) && void 0 !== e ? e : null;
}
function Q() {
    (d = null), (c = null), (T = {}), (S = D()), (I = M()), (g = {}), (f = !1), (L = null);
}
class Z extends r.Z {
    initialize() {
        this.waitFor(l.default);
    }
    loadCache() {
        let t = this.readSnapshot(Z.LATEST_SNAPSHOT_VERSION);
        if (null != t)
            p(t.linkedUsers),
                Y(t.guilds),
                U(t.teenActivity),
                (I = t.teenActivityTotals.reduce((t, e) => {
                    let [n, i] = e.split(':'),
                        r = (0, u.jV)(n);
                    return void 0 === r
                        ? t
                        : {
                              ...t,
                              [r]: parseInt(i, 10)
                          };
                }, M()));
    }
    takeSnapshot() {
        return {
            version: Z.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(T),
                teenActivityTotals: Object.entries(I).map((t) => {
                    let [e, n] = t;
                    return ''.concat(e, ':').concat(n);
                }),
                teenActivity: (function () {
                    let t = [];
                    return (
                        Object.entries(S).forEach((e) => {
                            let [n, i] = e;
                            t.push(...Object.values(i));
                        }),
                        t
                    );
                })(),
                guilds: Object.values(g)
            }
        };
    }
    getSelectedTeenId() {
        return d;
    }
    getLinkedUsers() {
        return T;
    }
    getLinkTimestamp(t) {
        var e;
        let n = T[t];
        return null == n ? null : null !== (e = n.updated_at) && void 0 !== e ? e : n.created_at;
    }
    getRangeStartTimestamp() {
        return null == c ? null : o.default.extractTimestamp(c);
    }
    getActionsForDisplayType(t) {
        return Object.values(S[t]);
    }
    getTotalForDisplayType(t) {
        return I[t];
    }
    getLinkCode() {
        return C;
    }
    getGuild(t) {
        return g[t];
    }
    getSelectedTab() {
        return N;
    }
    getStartId() {
        return c;
    }
    getIsInitialized() {
        return A;
    }
    getUserCountry() {
        return R;
    }
    isLoading() {
        return f;
    }
    canRefetch() {
        return null === L || o.default.age(L) > s.Of;
    }
    constructor() {
        super({
            CURRENT_USER_UPDATE: V,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: v,
            FAMILY_CENTER_FETCH_START: h,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: F,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: O,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: G,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: m,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: H,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: w,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: b,
            FAMILY_CENTER_HANDLE_TAB_SELECT: k,
            SET_LOCATION_METADATA: P,
            LOGOUT: Q
        });
    }
}
_(Z, 'displayName', 'FamilyCenterStore'), _(Z, 'LATEST_SNAPSHOT_VERSION', 3), (e.Z = new Z());
