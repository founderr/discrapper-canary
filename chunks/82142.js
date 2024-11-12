n(47120);
var r,
    i,
    s,
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
    C = [],
    g = [],
    I = new Set(),
    A = {},
    y = {},
    R = new Set();
function O(e) {
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
                if (r <= 0) S.delete(t), delete f[t], Z.emitChange();
                else {
                    let n = f[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, r), () => e(t));
                }
            })(n);
    }
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !R.has(e.channel_id)) return !1;
    let n = (0, p.Fp)(e) ? (0, p.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, p.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            !m.includes(e) && !g.includes(e) && (N({ code: e }), u.Z.wait(() => _.Z.resolveGiftCode(e, !1, !0).catch(h.VqG)));
        }),
        !1)
    );
}
function N(e) {
    let { code: t } = e;
    !m.includes(t) && (m = [...m, t]);
}
function T(e) {
    let { message: t } = e;
    return v(t, !0);
}
function D(e) {
    let { channelId: t, messages: n } = e;
    R.add(t), n.forEach((e) => v(e, !0));
}
function F(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => v(e));
}
class b extends (r = c.ZP.Store) {
    get(e) {
        let t = S.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? y[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(S.values()).filter((r) => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired());
    }
    getIsResolving(e) {
        return m.includes(e);
    }
    getIsResolved(e) {
        return g.includes(e);
    }
    getIsAccepting(e) {
        return C.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return I.has((0, p.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return A[(0, p.Bg)(e, t)];
    }
    getResolvingCodes() {
        return m;
    }
    getResolvedCodes() {
        return g;
    }
    getAcceptingCodes() {
        return C;
    }
}
(l = 'GiftCodeStore'),
    (s = 'displayName') in (i = b)
        ? Object.defineProperty(i, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = l);
let Z = new b(u.Z, {
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
        return (m = m.filter((e) => e !== t.code)), !g.includes(t.code) && (g = [...g, t.code]), O(t);
    },
    GIFT_CODE_RESOLVE_FAILURE: function (e) {
        let { code: t } = e;
        (m = m.filter((e) => e !== t)), !g.includes(t) && (g = [...g, t]);
    },
    GIFT_CODE_REDEEM: function (e) {
        let { code: t } = e;
        !C.includes(t) && (C = [...C, t]);
    },
    GIFT_CODE_REDEEM_SUCCESS: function (e) {
        let { code: t } = e;
        C = C.filter((e) => e !== t);
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
        C = C.filter((e) => e !== t);
        let r = S.get(t);
        if (((y[t] = n), null != r))
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
        null != n && (n.stop(), delete f[t]), !g.includes(t) && (g = [...g, t]);
    },
    GIFT_CODE_CREATE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        O(t);
    },
    GIFT_CODES_FETCH: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        I.add((0, p.Bg)(t, n));
    },
    GIFT_CODES_FETCH_SUCCESS: function (e) {
        let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
        t.forEach(O);
        let i = (0, p.Bg)(n, r);
        (A[i] = Date.now()), I.delete(i);
    },
    GIFT_CODES_FETCH_FAILURE: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        I.delete((0, p.Bg)(t, n));
    },
    MESSAGE_CREATE: T,
    MESSAGE_UPDATE: T,
    LOCAL_MESSAGES_LOADED: D,
    LOAD_MESSAGES_SUCCESS: D,
    LOAD_MESSAGES_AROUND_SUCCESS: D,
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => v(e));
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => v(e));
    },
    SEARCH_FINISH: function (e) {
        e.messages.forEach((e) => {
            e.forEach((e) => v(e));
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
            return null != t && v(t);
        });
    }
});
t.Z = Z;
