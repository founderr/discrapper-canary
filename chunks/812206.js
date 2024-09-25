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
    h = {};
function p(e) {
    for (let t of ((d[e.id] = e), (f[e.id] = Date.now()), (E[e.name.toLowerCase()] = e), e.aliases)) E[t.toLowerCase()] = e;
    delete h[e.id];
}
function m() {
    (d = {}), (_ = {}), (E = {}), (f = {}), (h = {});
}
function I(e) {
    let { applications: t } = e;
    for (let e of t) p(new l.Z(e));
}
function T(e) {
    let { applicationId: t } = e,
        n = h[t];
    return (h[t] = !0), !0 !== n;
}
function g(e) {
    let { application: t } = e;
    A(t);
}
function S(e) {
    let { application: t } = e;
    A(t);
}
function A(e) {
    p(l.Z.createFromServer(e));
}
function v(e) {
    let { applicationId: t } = e,
        n = h[t];
    return (h[t] = !1), !1 !== n;
}
function N(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = h[e];
        (h[e] = !0), (n = !0 !== t);
    }
    return n;
}
function O(e) {
    let { libraryApplications: t } = e;
    for (let e of t) p(l.Z.createFromServer(e.application));
}
function R(e) {
    let { applications: t } = e;
    for (let e of t) p(l.Z.createFromServer(e));
}
function C(e) {
    let { recommendations: t } = e;
    t.forEach((e) => {
        e.items.forEach((e) => {
            p(l.Z.createFromServer(e.application));
        });
    });
}
function y(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = h[e];
        (h[e] = !1), (n = !1 !== t);
    }
    return n;
}
function b(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t) (null == e ? void 0 : e.application) != null && (p(l.Z.createFromServer(e.application)), (n = !0));
    return n;
}
function L(e) {
    let { integrations: t, guildId: n } = e,
        r = !1,
        i = [];
    for (let { application: e } of t) null != e && (p(e), i.push(e.id), (r = !0));
    return r && (_[n] = i), r;
}
function D(e) {
    let { guildId: t, applications: n } = e,
        r = [];
    for (let e of n) r.push(e.id), p(l.Z.createFromServer(e));
    _[t] = r;
}
function M(e) {
    let { payments: t } = e,
        n = new Set();
    for (let e of t) {
        var r;
        let t = null === (r = e.sku) || void 0 === r ? void 0 : r.application;
        !(null == t || n.has(t.id)) && p(l.Z.createFromServer(t));
    }
    return n.size > 0;
}
function P(e) {
    var t;
    let { payment: n } = e;
    if ((null === (t = n.sku) || void 0 === t ? void 0 : t.application) == null) return !1;
    p(l.Z.createFromServer(n.sku.application));
}
function U(e) {
    var t;
    let { giftCode: n } = e;
    if ((null === (t = n.store_listing) || void 0 === t ? void 0 : t.sku.application) == null) return !1;
    p(l.Z.createFromServer(n.store_listing.sku.application));
}
function w(e) {
    let { invite: t } = e;
    if (null == t.target_application) return !1;
    p(l.Z.createFromServer(t.target_application));
}
function x(e) {
    let { storeListing: t } = e;
    if (null == t.sku.application) return !1;
    p(l.Z.createFromServer(t.sku.application));
}
function G(e) {
    let { messages: t } = e;
    t.forEach((e) => k(e));
}
function k(e) {
    var t;
    null === (t = e.attachments) ||
        void 0 === t ||
        t.forEach((e) => {
            null != e.application && p(l.Z.createFromServer(e.application));
        });
}
class B extends (r = o.ZP.Store) {
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
}
u(B, 'displayName', 'ApplicationStore'),
    (t.Z = new B(s.Z, {
        LOGOUT: m,
        OVERLAY_INITIALIZE: I,
        APPLICATION_FETCH: T,
        APPLICATION_FETCH_SUCCESS: S,
        APPLICATION_FETCH_FAIL: v,
        APPLICATIONS_FETCH: N,
        APPLICATIONS_FETCH_SUCCESS: R,
        APPLICATIONS_FETCH_FAIL: y,
        APPLICATION_UPDATE: g,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: b,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: b,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: b,
        GUILD_SETTINGS_LOADED_INTEGRATIONS: L,
        GUILD_APPLICATIONS_FETCH_SUCCESS: D,
        BILLING_PAYMENTS_FETCH_SUCCESS: M,
        PAYMENT_UPDATE: P,
        INVITE_RESOLVE_SUCCESS: w,
        GIFT_CODE_RESOLVE_SUCCESS: U,
        LIBRARY_FETCH_SUCCESS: O,
        STORE_LISTING_FETCH_SUCCESS: x,
        LOAD_MESSAGES_SUCCESS: G,
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: C
    }));
