n(47120);
var r,
    s,
    i,
    l,
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    d = n(846519),
    u = n(570140),
    _ = n(533307),
    E = n(590783),
    p = n(669079),
    h = n(981631);
let f = {},
    S = new Map(),
    m = [],
    I = [],
    C = [],
    g = new Set(),
    A = {},
    R = {},
    O = new Set();
function N(e) {
    let t = E.Z.createFromServer(e),
        n = t.code;
    if (S.has(n)) S.set(n, S.get(n).merge(t));
    else if ((S.set(n, t), null != t.expiresAt)) {
        let e = new d.V7();
        (f[n] = e),
            (function e(t) {
                let n = S.get(t);
                if (null == n || null == n.expiresAt) return;
                let r = n.expiresAt.valueOf() - o()().valueOf();
                if (r <= 0) S.delete(t), delete f[t], L.emitChange();
                else {
                    let n = f[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, r), () => e(t));
                }
            })(n);
    }
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !O.has(e.channel_id)) return !1;
    let n = (0, p.Fp)(e) ? (0, p.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, p.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            !m.includes(e) && !C.includes(e) && (y({ code: e }), u.Z.wait(() => _.Z.resolveGiftCode(e, !1, !0).catch(h.VqG)));
        }),
        !1)
    );
}
function y(e) {
    let { code: t } = e;
    !m.includes(t) && (m = [...m, t]);
}
function v(e) {
    let { message: t } = e;
    return T(t, !0);
}
function D(e) {
    let { channelId: t, messages: n } = e;
    O.add(t), n.forEach((e) => T(e, !0));
}
function F(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => T(e));
}
class Z extends (r = c.ZP.Store) {
    get(e) {
        let t = S.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? R[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(S.values()).filter((r) => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired());
    }
    getIsResolving(e) {
        return m.includes(e);
    }
    getIsResolved(e) {
        return C.includes(e);
    }
    getIsAccepting(e) {
        return I.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return g.has((0, p.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return A[(0, p.Bg)(e, t)];
    }
    getResolvingCodes() {
        return m;
    }
    getResolvedCodes() {
        return C;
    }
    getAcceptingCodes() {
        return I;
    }
}
(l = 'GiftCodeStore'),
    (i = 'displayName') in (s = Z)
        ? Object.defineProperty(s, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[i] = l);
let L = new Z(u.Z, {
    CONNECTION_OPEN: function () {
        return O.clear(), !1;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && O.add(t), !1;
    },
    GIFT_CODE_RESOLVE: y,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        return (m = m.filter((e) => e !== t.code)), !C.includes(t.code) && (C = [...C, t.code]), N(t);
    },
    GIFT_CODE_RESOLVE_FAILURE: function (e) {
        let { code: t } = e;
        (m = m.filter((e) => e !== t)), !C.includes(t) && (C = [...C, t]);
    },
    GIFT_CODE_REDEEM: function (e) {
        let { code: t } = e;
        !I.includes(t) && (I = [...I, t]);
    },
    GIFT_CODE_REDEEM_SUCCESS: function (e) {
        let { code: t } = e;
        I = I.filter((e) => e !== t);
        let n = S.get(t);
        null != n &&
            S.set(
                t,
                n.merge({
                    redeemed: !0,
                    uses: n.uses + 1
                })
            );
    },
    GIFT_CODE_REDEEM_FAILURE: function (e) {
        let { code: t, error: n } = e;
        I = I.filter((e) => e !== t);
        let r = S.get(t);
        if (((R[t] = n), null != r))
            switch (n.code) {
                case h.evJ.UNKNOWN_GIFT_CODE:
                    S.set(t, r.set('revoked', !0));
                    break;
                case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    S.set(t, r.set('uses', r.maxUses));
            }
    },
    GIFT_CODE_REVOKE_SUCCESS: function (e) {
        let { code: t } = e;
        S.delete(t);
        let n = f[t];
        null != n && (n.stop(), delete f[t]), !C.includes(t) && (C = [...C, t]);
    },
    GIFT_CODE_CREATE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        N(t);
    },
    GIFT_CODES_FETCH: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        g.add((0, p.Bg)(t, n));
    },
    GIFT_CODES_FETCH_SUCCESS: function (e) {
        let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
        t.forEach(N);
        let s = (0, p.Bg)(n, r);
        (A[s] = Date.now()), g.delete(s);
    },
    GIFT_CODES_FETCH_FAILURE: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        g.delete((0, p.Bg)(t, n));
    },
    MESSAGE_CREATE: v,
    MESSAGE_UPDATE: v,
    LOCAL_MESSAGES_LOADED: D,
    LOAD_MESSAGES_SUCCESS: D,
    LOAD_MESSAGES_AROUND_SUCCESS: D,
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => T(e));
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => T(e));
    },
    SEARCH_FINISH: function (e) {
        e.messages.forEach((e) => {
            e.forEach((e) => T(e));
        });
    },
    GIFT_CODE_UPDATE: function (e) {
        let { uses: t, code: n } = e,
            r = S.get(n);
        null != r && S.set(n, r.set('uses', Math.max(r.uses, t)));
    },
    LOAD_THREADS_SUCCESS: F,
    LOAD_ARCHIVED_THREADS_SUCCESS: F,
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && T(t);
        });
    }
});
t.Z = L;
