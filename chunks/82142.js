n(47120);
var i,
    r,
    s,
    l,
    o = n(913527),
    a = n.n(o),
    d = n(442837),
    u = n(846519),
    c = n(570140),
    _ = n(533307),
    E = n(590783),
    p = n(669079),
    h = n(981631);
let m = {},
    f = new Map(),
    S = [],
    g = [],
    I = [],
    C = new Set(),
    v = {},
    A = {},
    y = new Set();
function b(e) {
    let t = E.Z.createFromServer(e),
        n = t.code;
    if (f.has(n)) f.set(n, f.get(n).merge(t));
    else if ((f.set(n, t), null != t.expiresAt)) {
        let e = new u.V7();
        (m[n] = e),
            (function e(t) {
                let n = f.get(t);
                if (null == n || null == n.expiresAt) return;
                let i = n.expiresAt.valueOf() - a()().valueOf();
                if (i <= 0) f.delete(t), delete m[t], x.emitChange();
                else {
                    let n = m[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, i), () => e(t));
                }
            })(n);
    }
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !y.has(e.channel_id)) return !1;
    let n = (0, p.Fp)(e) ? (0, p.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, p.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            !S.includes(e) && !I.includes(e) && (O({ code: e }), c.Z.wait(() => _.Z.resolveGiftCode(e, !1, !0).catch(h.VqG)));
        }),
        !1)
    );
}
function O(e) {
    let { code: t } = e;
    !S.includes(t) && (S = [...S, t]);
}
function T(e) {
    let { message: t } = e;
    return R(t, !0);
}
function N(e) {
    let { channelId: t, messages: n } = e;
    y.add(t), n.forEach((e) => R(e, !0));
}
function D(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => R(e));
}
class F extends (i = d.ZP.Store) {
    get(e) {
        let t = f.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? A[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(f.values()).filter((i) => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired());
    }
    getIsResolving(e) {
        return S.includes(e);
    }
    getIsResolved(e) {
        return I.includes(e);
    }
    getIsAccepting(e) {
        return g.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return C.has((0, p.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return v[(0, p.Bg)(e, t)];
    }
    getResolvingCodes() {
        return S;
    }
    getResolvedCodes() {
        return I;
    }
    getAcceptingCodes() {
        return g;
    }
}
(l = 'GiftCodeStore'),
    (s = 'displayName') in (r = F)
        ? Object.defineProperty(r, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = l);
let x = new F(c.Z, {
    CONNECTION_OPEN: function () {
        return y.clear(), !1;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && y.add(t), !1;
    },
    GIFT_CODE_RESOLVE: O,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        return (S = S.filter((e) => e !== t.code)), !I.includes(t.code) && (I = [...I, t.code]), b(t);
    },
    GIFT_CODE_RESOLVE_FAILURE: function (e) {
        let { code: t } = e;
        (S = S.filter((e) => e !== t)), !I.includes(t) && (I = [...I, t]);
    },
    GIFT_CODE_REDEEM: function (e) {
        let { code: t } = e;
        !g.includes(t) && (g = [...g, t]);
    },
    GIFT_CODE_REDEEM_SUCCESS: function (e) {
        let { code: t } = e;
        g = g.filter((e) => e !== t);
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
        g = g.filter((e) => e !== t);
        let i = f.get(t);
        if (((A[t] = n), null != i))
            switch (n.code) {
                case h.evJ.UNKNOWN_GIFT_CODE:
                    f.set(t, i.set('revoked', !0));
                    break;
                case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    f.set(t, i.set('uses', i.maxUses));
            }
    },
    GIFT_CODE_REVOKE_SUCCESS: function (e) {
        let { code: t } = e;
        f.delete(t);
        let n = m[t];
        null != n && (n.stop(), delete m[t]), !I.includes(t) && (I = [...I, t]);
    },
    GIFT_CODE_CREATE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        b(t);
    },
    GIFT_CODES_FETCH: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        C.add((0, p.Bg)(t, n));
    },
    GIFT_CODES_FETCH_SUCCESS: function (e) {
        let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
        t.forEach(b);
        let r = (0, p.Bg)(n, i);
        (v[r] = Date.now()), C.delete(r);
    },
    GIFT_CODES_FETCH_FAILURE: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        C.delete((0, p.Bg)(t, n));
    },
    MESSAGE_CREATE: T,
    MESSAGE_UPDATE: T,
    LOCAL_MESSAGES_LOADED: N,
    LOAD_MESSAGES_SUCCESS: N,
    LOAD_MESSAGES_AROUND_SUCCESS: N,
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => R(e));
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => R(e));
    },
    SEARCH_FINISH: function (e) {
        e.messages.forEach((e) => {
            e.forEach((e) => R(e));
        });
    },
    GIFT_CODE_UPDATE: function (e) {
        let { uses: t, code: n } = e,
            i = f.get(n);
        null != i && f.set(n, i.set('uses', Math.max(i.uses, t)));
    },
    LOAD_THREADS_SUCCESS: D,
    LOAD_ARCHIVED_THREADS_SUCCESS: D,
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && R(t);
        });
    }
});
t.Z = x;
