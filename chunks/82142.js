var r,
    i = n(47120);
var a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(846519),
    u = n(570140),
    c = n(533307),
    d = n(590783),
    _ = n(669079),
    E = n(981631);
function f(e, t, n) {
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
let h = 2147483647,
    p = {},
    m = new Map(),
    I = [],
    T = [],
    g = [],
    S = new Set(),
    A = {},
    v = {},
    N = new Set();
function O(e) {
    let t = d.Z.createFromServer(e),
        n = t.code;
    if (m.has(n)) m.set(n, m.get(n).merge(t));
    else if ((m.set(n, t), null != t.expiresAt)) {
        let e = new l.V7();
        (p[n] = e), R(n);
    }
}
function R(e) {
    let t = m.get(e);
    if (null == t || null == t.expiresAt) return;
    let n = t.expiresAt.valueOf() - o()().valueOf();
    if (n <= 0) m.delete(e), delete p[e], Q.emitChange();
    else {
        let t = p[e];
        if (null == t) return;
        t.start(Math.min(h, n), () => R(e));
    }
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !N.has(e.channel_id)) return !1;
    let n = (0, _.Fp)(e) ? (0, _.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, _.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            !I.includes(e) && !g.includes(e) && (b({ code: e }), u.Z.wait(() => c.Z.resolveGiftCode(e, !1, !0).catch(E.VqG)));
        }),
        !1)
    );
}
function y() {
    return N.clear(), !1;
}
function L(e) {
    let { channelId: t } = e;
    return null != t && N.add(t), !1;
}
function b(e) {
    let { code: t } = e;
    !I.includes(t) && (I = [...I, t]);
}
function D(e) {
    let { giftCode: t } = e;
    return (I = I.filter((e) => e !== t.code)), !g.includes(t.code) && (g = [...g, t.code]), O(t);
}
function M(e) {
    let { code: t } = e;
    (I = I.filter((e) => e !== t)), !g.includes(t) && (g = [...g, t]);
}
function P(e) {
    let { code: t } = e;
    m.delete(t);
    let n = p[t];
    null != n && (n.stop(), delete p[t]), !g.includes(t) && (g = [...g, t]);
}
function U(e) {
    let { code: t } = e;
    !T.includes(t) && (T = [...T, t]);
}
function w(e) {
    let { giftCode: t } = e;
    O(t);
}
function x(e) {
    let { uses: t, code: n } = e,
        r = m.get(n);
    null != r && m.set(n, r.set('uses', Math.max(r.uses, t)));
}
function G(e) {
    let { skuId: t, subscriptionPlanId: n } = e;
    S.add((0, _.Bg)(t, n));
}
function k(e) {
    let { skuId: t, subscriptionPlanId: n } = e;
    S.delete((0, _.Bg)(t, n));
}
function B(e) {
    let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
    t.forEach(O);
    let i = (0, _.Bg)(n, r);
    (A[i] = Date.now()), S.delete(i);
}
function F(e) {
    let { code: t } = e;
    T = T.filter((e) => e !== t);
    let n = m.get(t);
    null != n &&
        m.set(
            t,
            n.merge({
                redeemed: !0,
                uses: n.uses + 1
            })
        );
}
function Z(e) {
    let { code: t, error: n } = e;
    T = T.filter((e) => e !== t);
    let r = m.get(t);
    if (((v[t] = n), null != r))
        switch (n.code) {
            case E.evJ.UNKNOWN_GIFT_CODE:
                m.set(t, r.set('revoked', !0));
                break;
            case E.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                m.set(t, r.set('uses', r.maxUses));
        }
}
function V(e) {
    let { message: t } = e;
    return C(t, !0);
}
function H(e) {
    let { channelId: t, messages: n } = e;
    N.add(t), n.forEach((e) => C(e, !0));
}
function Y(e) {
    let { messages: t } = e;
    t.forEach((e) => C(e));
}
function j(e) {
    let { messages: t } = e;
    t.forEach((e) => C(e));
}
function W(e) {
    e.messages.forEach((e) => {
        e.forEach((e) => C(e));
    });
}
function K(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => C(e));
}
function z(e) {
    let { threads: t } = e;
    Object.values(t).map((e) => {
        let { first_message: t } = e;
        return null != t && C(t);
    });
}
class q extends (r = s.ZP.Store) {
    get(e) {
        let t = m.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? v[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(m.values()).filter((r) => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired());
    }
    getIsResolving(e) {
        return I.includes(e);
    }
    getIsResolved(e) {
        return g.includes(e);
    }
    getIsAccepting(e) {
        return T.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return S.has((0, _.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return A[(0, _.Bg)(e, t)];
    }
    getResolvingCodes() {
        return I;
    }
    getResolvedCodes() {
        return g;
    }
    getAcceptingCodes() {
        return T;
    }
}
f(q, 'displayName', 'GiftCodeStore');
let Q = new q(u.Z, {
    CONNECTION_OPEN: y,
    CHANNEL_SELECT: L,
    GIFT_CODE_RESOLVE: b,
    GIFT_CODE_RESOLVE_SUCCESS: D,
    GIFT_CODE_RESOLVE_FAILURE: M,
    GIFT_CODE_REDEEM: U,
    GIFT_CODE_REDEEM_SUCCESS: F,
    GIFT_CODE_REDEEM_FAILURE: Z,
    GIFT_CODE_REVOKE_SUCCESS: P,
    GIFT_CODE_CREATE_SUCCESS: w,
    GIFT_CODES_FETCH: G,
    GIFT_CODES_FETCH_SUCCESS: B,
    GIFT_CODES_FETCH_FAILURE: k,
    MESSAGE_CREATE: V,
    MESSAGE_UPDATE: V,
    LOCAL_MESSAGES_LOADED: H,
    LOAD_MESSAGES_SUCCESS: H,
    LOAD_MESSAGES_AROUND_SUCCESS: H,
    LOAD_RECENT_MENTIONS_SUCCESS: Y,
    LOAD_PINNED_MESSAGES_SUCCESS: j,
    SEARCH_FINISH: W,
    GIFT_CODE_UPDATE: x,
    LOAD_THREADS_SUCCESS: K,
    LOAD_ARCHIVED_THREADS_SUCCESS: K,
    LOAD_FORUM_POSTS: z
});
t.Z = Q;
