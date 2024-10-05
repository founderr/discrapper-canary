n(47120);
var s,
    i,
    l,
    r,
    a = n(913527),
    c = n.n(a),
    o = n(442837),
    E = n(846519),
    u = n(570140),
    d = n(533307),
    _ = n(590783),
    S = n(669079),
    h = n(981631);
let C = {},
    f = new Map(),
    I = [],
    m = [],
    A = [],
    p = new Set(),
    R = {},
    g = {},
    O = new Set();
function T(e) {
    let t = _.Z.createFromServer(e),
        n = t.code;
    if (f.has(n)) f.set(n, f.get(n).merge(t));
    else if ((f.set(n, t), null != t.expiresAt)) {
        let e = new E.V7();
        (C[n] = e),
            (function e(t) {
                let n = f.get(t);
                if (null == n || null == n.expiresAt) return;
                let s = n.expiresAt.valueOf() - c()().valueOf();
                if (s <= 0) f.delete(t), delete C[t], G.emitChange();
                else {
                    let n = C[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, s), () => e(t));
                }
            })(n);
    }
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !O.has(e.channel_id)) return !1;
    let n = (0, S.Fp)(e) ? (0, S.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, S.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            !I.includes(e) && !A.includes(e) && (v({ code: e }), u.Z.wait(() => d.Z.resolveGiftCode(e, !1, !0).catch(h.VqG)));
        }),
        !1)
    );
}
function v(e) {
    let { code: t } = e;
    !I.includes(t) && (I = [...I, t]);
}
function D(e) {
    let { message: t } = e;
    return N(t, !0);
}
function L(e) {
    let { channelId: t, messages: n } = e;
    O.add(t), n.forEach((e) => N(e, !0));
}
function Z(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => N(e));
}
class F extends (s = o.ZP.Store) {
    get(e) {
        let t = f.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? g[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(f.values()).filter((s) => s.userId === e && s.skuId === t && (null == n || s.subscriptionPlanId === n) && !s.isExpired());
    }
    getIsResolving(e) {
        return I.includes(e);
    }
    getIsResolved(e) {
        return A.includes(e);
    }
    getIsAccepting(e) {
        return m.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return p.has((0, S.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return R[(0, S.Bg)(e, t)];
    }
    getResolvingCodes() {
        return I;
    }
    getResolvedCodes() {
        return A;
    }
    getAcceptingCodes() {
        return m;
    }
}
(r = 'GiftCodeStore'),
    (l = 'displayName') in (i = F)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r);
let G = new F(u.Z, {
    CONNECTION_OPEN: function () {
        return O.clear(), !1;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && O.add(t), !1;
    },
    GIFT_CODE_RESOLVE: v,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        return (I = I.filter((e) => e !== t.code)), !A.includes(t.code) && (A = [...A, t.code]), T(t);
    },
    GIFT_CODE_RESOLVE_FAILURE: function (e) {
        let { code: t } = e;
        (I = I.filter((e) => e !== t)), !A.includes(t) && (A = [...A, t]);
    },
    GIFT_CODE_REDEEM: function (e) {
        let { code: t } = e;
        !m.includes(t) && (m = [...m, t]);
    },
    GIFT_CODE_REDEEM_SUCCESS: function (e) {
        let { code: t } = e;
        m = m.filter((e) => e !== t);
        let n = f.get(t);
        null != n &&
            f.set(
                t,
                n.merge({
                    redeemed: !0,
                    uses: n.uses + 1
                })
            );
    },
    GIFT_CODE_REDEEM_FAILURE: function (e) {
        let { code: t, error: n } = e;
        m = m.filter((e) => e !== t);
        let s = f.get(t);
        if (((g[t] = n), null != s))
            switch (n.code) {
                case h.evJ.UNKNOWN_GIFT_CODE:
                    f.set(t, s.set('revoked', !0));
                    break;
                case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    f.set(t, s.set('uses', s.maxUses));
            }
    },
    GIFT_CODE_REVOKE_SUCCESS: function (e) {
        let { code: t } = e;
        f.delete(t);
        let n = C[t];
        null != n && (n.stop(), delete C[t]), !A.includes(t) && (A = [...A, t]);
    },
    GIFT_CODE_CREATE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        T(t);
    },
    GIFT_CODES_FETCH: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        p.add((0, S.Bg)(t, n));
    },
    GIFT_CODES_FETCH_SUCCESS: function (e) {
        let { giftCodes: t, skuId: n, subscriptionPlanId: s } = e;
        t.forEach(T);
        let i = (0, S.Bg)(n, s);
        (R[i] = Date.now()), p.delete(i);
    },
    GIFT_CODES_FETCH_FAILURE: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        p.delete((0, S.Bg)(t, n));
    },
    MESSAGE_CREATE: D,
    MESSAGE_UPDATE: D,
    LOCAL_MESSAGES_LOADED: L,
    LOAD_MESSAGES_SUCCESS: L,
    LOAD_MESSAGES_AROUND_SUCCESS: L,
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => N(e));
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => N(e));
    },
    SEARCH_FINISH: function (e) {
        e.messages.forEach((e) => {
            e.forEach((e) => N(e));
        });
    },
    GIFT_CODE_UPDATE: function (e) {
        let { uses: t, code: n } = e,
            s = f.get(n);
        null != s && f.set(n, s.set('uses', Math.max(s.uses, t)));
    },
    LOAD_THREADS_SUCCESS: Z,
    LOAD_ARCHIVED_THREADS_SUCCESS: Z,
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && N(t);
        });
    }
});
t.Z = G;
