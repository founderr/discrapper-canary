n(47120);
var i,
    s,
    r,
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
    I = [],
    g = [],
    C = new Set(),
    A = {},
    v = {},
    R = new Set();
function O(e) {
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
                if (i <= 0) f.delete(t), delete m[t], F.emitChange();
                else {
                    let n = m[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, i), () => e(t));
                }
            })(n);
    }
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !R.has(e.channel_id)) return !1;
    let n = (0, p.Fp)(e) ? (0, p.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, p.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            !S.includes(e) && !g.includes(e) && (N({ code: e }), c.Z.wait(() => _.Z.resolveGiftCode(e, !1, !0).catch(h.VqG)));
        }),
        !1)
    );
}
function N(e) {
    let { code: t } = e;
    !S.includes(t) && (S = [...S, t]);
}
function y(e) {
    let { message: t } = e;
    return T(t, !0);
}
function b(e) {
    let { channelId: t, messages: n } = e;
    R.add(t), n.forEach((e) => T(e, !0));
}
function D(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => T(e));
}
class L extends (i = d.ZP.Store) {
    get(e) {
        let t = f.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? v[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(f.values()).filter((i) => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired());
    }
    getIsResolving(e) {
        return S.includes(e);
    }
    getIsResolved(e) {
        return g.includes(e);
    }
    getIsAccepting(e) {
        return I.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return C.has((0, p.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return A[(0, p.Bg)(e, t)];
    }
    getResolvingCodes() {
        return S;
    }
    getResolvedCodes() {
        return g;
    }
    getAcceptingCodes() {
        return I;
    }
}
(l = 'GiftCodeStore'),
    (r = 'displayName') in (s = L)
        ? Object.defineProperty(s, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = l);
let F = new L(c.Z, {
    CONNECTION_OPEN: function () {
        return R.clear(), !1;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && R.add(t), !1;
    },
    GIFT_CODE_RESOLVE: N,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        return (S = S.filter((e) => e !== t.code)), !g.includes(t.code) && (g = [...g, t.code]), O(t);
    },
    GIFT_CODE_RESOLVE_FAILURE: function (e) {
        let { code: t } = e;
        (S = S.filter((e) => e !== t)), !g.includes(t) && (g = [...g, t]);
    },
    GIFT_CODE_REDEEM: function (e) {
        let { code: t } = e;
        !I.includes(t) && (I = [...I, t]);
    },
    GIFT_CODE_REDEEM_SUCCESS: function (e) {
        let { code: t } = e;
        I = I.filter((e) => e !== t);
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
        I = I.filter((e) => e !== t);
        let i = f.get(t);
        if (((v[t] = n), null != i))
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
        null != n && (n.stop(), delete m[t]), !g.includes(t) && (g = [...g, t]);
    },
    GIFT_CODE_CREATE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        O(t);
    },
    GIFT_CODES_FETCH: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        C.add((0, p.Bg)(t, n));
    },
    GIFT_CODES_FETCH_SUCCESS: function (e) {
        let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
        t.forEach(O);
        let s = (0, p.Bg)(n, i);
        (A[s] = Date.now()), C.delete(s);
    },
    GIFT_CODES_FETCH_FAILURE: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        C.delete((0, p.Bg)(t, n));
    },
    MESSAGE_CREATE: y,
    MESSAGE_UPDATE: y,
    LOCAL_MESSAGES_LOADED: b,
    LOAD_MESSAGES_SUCCESS: b,
    LOAD_MESSAGES_AROUND_SUCCESS: b,
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
            i = f.get(n);
        null != i && f.set(n, i.set('uses', Math.max(i.uses, t)));
    },
    LOAD_THREADS_SUCCESS: D,
    LOAD_ARCHIVED_THREADS_SUCCESS: D,
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && T(t);
        });
    }
});
t.Z = F;
