e(724458), e(47120), e(653041);
var i = e(133080),
    r = e(412788),
    l = e(594174),
    o = e(709054),
    E = e(260722),
    a = e(735079),
    u = e(546791),
    s = e(292352);
function _(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = e),
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
        var t, n, e, i;
        return (null === (n = window) || void 0 === n ? void 0 : null === (t = n.location) || void 0 === t ? void 0 : t.pathname) === s.ix.FAMILY_CENTER_MY_FAMILY ? s.dG.REQUESTS : (null === (i = window) || void 0 === i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.pathname) === s.ix.FAMILY_CENTER_SETTINGS ? s.dG.SETTINGS : s.dG.ACTIVITY;
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
        n = arguments.length > 1 ? arguments[1] : void 0;
    return (T =
        t.length > 0
            ? t.reduce(
                  (t, n) => ({
                      ...t,
                      [n.user_id]: n
                  }),
                  {}
              )
            : {});
}
function y(t) {
    void 0 !== t && (I = t);
}
function U(t, n) {
    let e = n ? S : D();
    return (S = t.reduce((t, n) => {
        let i = n.display_type;
        return void 0 !== e[i] && void 0 === e[i][n.event_id] && (t[i][n.event_id] = n), t;
    }, e));
}
function Y(t) {
    g = t.reduce(
        (t, n) => ({
            ...t,
            [n.id]: new a.J(n)
        }),
        g
    );
}
function v() {
    f = !0;
}
function F(t) {
    let { linkedUsers: n, familyCenterTeenActivity: e } = t,
        { actions: i, guilds: r, totals: l, teenId: E, rangeStartId: a } = e;
    (d = E), (c = a), U(i), y(l), Y(r), p(n), (f = !1), (L = o.default.fromTimestamp(Date.now())), (A = !0);
}
function h(t) {
    let { linkedUsers: n } = t;
    p(n);
}
function m(t) {
    let { linkedUsers: n } = t;
    p(n);
}
function O(t) {
    let { familyCenterTeenActivity: n } = t;
    if (void 0 === n) return;
    let { actions: e, totals: i, guilds: r, teenId: l, rangeStartId: E } = n;
    (d = l), (c = E), U(e), y(i), Y(r), (f = !1), (L = o.default.fromTimestamp(Date.now()));
}
function G(t) {
    let { familyCenterTeenActivity: n } = t,
        { actions: e, guilds: i } = n;
    U(e, !0), Y(i);
}
function H(t) {
    let { linkedUsers: n } = t;
    p(n);
}
function w(t) {
    let { linkedUsers: n } = t;
    p(n, !0);
}
function b(t) {
    let { linkCode: n } = t;
    C = n;
}
function k(t) {
    let { tab: n } = t;
    N = n;
}
function V(t) {
    let { user: n } = t;
    if (void 0 === n.linked_users) return;
    let e = l.default.getUsers();
    n.linked_users.some((t) => {
        let { user_id: n } = t;
        return void 0 === e[n];
    }) && n.linked_users.length > Object.keys(T).length
        ? E.ZP.fetchLinkedUsers()
        : p(n.linked_users);
}
function P(t) {
    var n;
    let { countryCode: e } = t;
    if (null != e) R = null !== (n = (0, i.Zz)(e)) && void 0 !== n ? n : null;
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
                (I = t.teenActivityTotals.reduce((t, n) => {
                    let [e, i] = n.split(':'),
                        r = (0, u.jV)(e);
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
                    let [n, e] = t;
                    return ''.concat(n, ':').concat(e);
                }),
                teenActivity: (function () {
                    let t = [];
                    return (
                        Object.entries(S).forEach((n) => {
                            let [e, i] = n;
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
        var n;
        let e = T[t];
        return null == e ? null : null !== (n = e.updated_at) && void 0 !== n ? n : e.created_at;
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
            FAMILY_CENTER_INITIAL_LOAD: F,
            FAMILY_CENTER_FETCH_START: v,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: h,
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
_(Z, 'displayName', 'FamilyCenterStore'), _(Z, 'LATEST_SNAPSHOT_VERSION', 3), (n.Z = new Z());
