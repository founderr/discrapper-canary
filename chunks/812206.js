var r,
    i = n(47120);
var a = n(653041);
var o = n(442837),
    s = n(570140),
    l = n(973616);
function u(e, t, n) {
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
let c = [],
    d = {},
    _ = {},
    E = {},
    f = {},
    h = {},
    p = { botUserIdToAppUsage: {} },
    m = 10;
function I(e) {
    for (let t of ((d[e.id] = e), (f[e.id] = Date.now()), (E[e.name.toLowerCase()] = e), e.aliases)) E[t.toLowerCase()] = e;
    delete h[e.id];
}
function T() {
    (d = {}), (_ = {}), (E = {}), (f = {}), (h = {});
}
function g(e) {
    let { applications: t } = e;
    for (let e of t) I(new l.Z(e));
}
function S(e) {
    let { applicationId: t } = e,
        n = h[t];
    return (h[t] = !0), !0 !== n;
}
function A(e) {
    let { application: t } = e;
    N(t);
}
function v(e) {
    let { application: t } = e;
    N(t);
}
function N(e) {
    I(l.Z.createFromServer(e));
}
function O(e) {
    let { userId: t, applicationId: n } = e,
        r = p.botUserIdToAppUsage[t];
    null == r
        ? (p.botUserIdToAppUsage[t] = {
              applicationId: n,
              lastUsedMs: Date.now()
          })
        : (p.botUserIdToAppUsage[t] = {
              applicationId: n,
              lastUsedMs: r.lastUsedMs
          });
    let i = new Map();
    for (let [e, t] of Object.entries(p.botUserIdToAppUsage)) i.set(e, t);
    let a = Array.from(i.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
    for (let e = 0; e < a.length; e++)
        if (e >= m) {
            let t = a[e][0];
            delete p.botUserIdToAppUsage[t];
        }
}
function R(e) {
    let { applicationId: t } = e,
        n = h[t];
    return (h[t] = !1), !1 !== n;
}
function C(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = h[e];
        (h[e] = !0), (n = !0 !== t);
    }
    return n;
}
function y(e) {
    let { libraryApplications: t } = e;
    for (let e of t) I(l.Z.createFromServer(e.application));
}
function L(e) {
    let { applications: t } = e;
    for (let e of t) I(l.Z.createFromServer(e));
}
function b(e) {
    let { recommendations: t } = e;
    t.forEach((e) => {
        e.items.forEach((e) => {
            I(l.Z.createFromServer(e.application));
        });
    });
}
function D(e) {
    let { user: t, application: n } = e;
    t.bot &&
        null != n &&
        O({
            userId: t.id,
            applicationId: n.id
        });
}
function M(e) {
    let { botUserId: t } = e,
        n = p.botUserIdToAppUsage[t];
    null != n &&
        (p.botUserIdToAppUsage[t] = {
            ...n,
            lastUsedMs: Date.now()
        });
}
function P(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = h[e];
        (h[e] = !1), (n = !1 !== t);
    }
    return n;
}
function U(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t) (null == e ? void 0 : e.application) != null && (I(l.Z.createFromServer(e.application)), (n = !0));
    return n;
}
function w(e) {
    let { integrations: t, guildId: n } = e,
        r = !1,
        i = [];
    for (let { application: e } of t) null != e && (I(e), i.push(e.id), (r = !0));
    return r && (_[n] = i), r;
}
function x(e) {
    let { guildId: t, applications: n } = e,
        r = [];
    for (let e of n) r.push(e.id), I(l.Z.createFromServer(e));
    _[t] = r;
}
function G(e) {
    let { payments: t } = e,
        n = new Set();
    for (let e of t) {
        var r;
        let t = null === (r = e.sku) || void 0 === r ? void 0 : r.application;
        !(null == t || n.has(t.id)) && I(l.Z.createFromServer(t));
    }
    return n.size > 0;
}
function k(e) {
    var t;
    let { payment: n } = e;
    if ((null === (t = n.sku) || void 0 === t ? void 0 : t.application) == null) return !1;
    I(l.Z.createFromServer(n.sku.application));
}
function B(e) {
    var t;
    let { giftCode: n } = e;
    if ((null === (t = n.store_listing) || void 0 === t ? void 0 : t.sku.application) == null) return !1;
    I(l.Z.createFromServer(n.store_listing.sku.application));
}
function F(e) {
    let { invite: t } = e;
    if (null == t.target_application) return !1;
    I(l.Z.createFromServer(t.target_application));
}
function Z(e) {
    let { storeListing: t } = e;
    if (null == t.sku.application) return !1;
    I(l.Z.createFromServer(t.sku.application));
}
function V(e) {
    let { messages: t } = e;
    t.forEach((e) => H(e));
}
function H(e) {
    var t;
    null === (t = e.attachments) ||
        void 0 === t ||
        t.forEach((e) => {
            null != e.application && I(l.Z.createFromServer(e.application));
        });
}
class Y extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        if (null != e && 'object' == typeof e.botUserIdToAppUsage)
            for (let t in e.botUserIdToAppUsage) {
                let n = e.botUserIdToAppUsage[t],
                    r = n.applicationId,
                    i = n.lastUsedMs;
                'string' == typeof r &&
                    r.length > 0 &&
                    'number' == typeof i &&
                    i > 0 &&
                    (p.botUserIdToAppUsage[t] = {
                        applicationId: r,
                        lastUsedMs: i
                    });
            }
    }
    getState() {
        return p;
    }
    _getAllApplications() {
        return Object.values(d);
    }
    getGuildApplication(e, t) {
        if (null != e) {
            for (let n of Object.values(d)) if (n.guildId === e && n.type === t) return n;
        }
    }
    getGuildApplicationIds(e) {
        var t;
        return null == e ? c : null !== (t = _[e]) && void 0 !== t ? t : c;
    }
    getApplication(e) {
        return d[e];
    }
    getApplicationByName(e) {
        if (null == e) return;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(E, t) ? E[t] : void 0;
    }
    getApplicationLastUpdated(e) {
        return f[e];
    }
    isFetchingApplication(e) {
        return !0 === h[e];
    }
    didFetchingApplicationFail(e) {
        return !1 === h[e];
    }
    getFetchingOrFailedFetchingIds() {
        return Object.keys(h);
    }
    getAppIdForBotUserId(e) {
        var t;
        if (null != e) return null === (t = p.botUserIdToAppUsage[e]) || void 0 === t ? void 0 : t.applicationId;
    }
}
u(Y, 'displayName', 'ApplicationStore'),
    u(Y, 'persistKey', 'ApplicationStore'),
    (t.Z = new Y(s.Z, {
        LOGOUT: T,
        OVERLAY_INITIALIZE: g,
        APPLICATION_FETCH: S,
        APPLICATION_FETCH_SUCCESS: v,
        APPLICATION_FETCH_FAIL: R,
        APPLICATIONS_FETCH: C,
        APPLICATIONS_FETCH_SUCCESS: L,
        APPLICATIONS_FETCH_FAIL: P,
        APPLICATION_UPDATE: A,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: U,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: U,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: U,
        GUILD_SETTINGS_LOADED_INTEGRATIONS: w,
        GUILD_APPLICATIONS_FETCH_SUCCESS: x,
        BILLING_PAYMENTS_FETCH_SUCCESS: G,
        PAYMENT_UPDATE: k,
        INVITE_RESOLVE_SUCCESS: F,
        GIFT_CODE_RESOLVE_SUCCESS: B,
        LIBRARY_FETCH_SUCCESS: y,
        STORE_LISTING_FETCH_SUCCESS: Z,
        LOAD_MESSAGES_SUCCESS: V,
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: b,
        USER_PROFILE_FETCH_SUCCESS: D,
        APP_DM_OPEN: M
    }));
