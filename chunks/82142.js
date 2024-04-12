"use strict";
i.r(t), i("47120");
var s, n, l, a, r = i("392711"),
  d = i.n(r),
  o = i("913527"),
  u = i.n(o),
  c = i("442837"),
  E = i("846519"),
  _ = i("570140"),
  f = i("533307"),
  h = i("900489"),
  m = i("590783"),
  p = i("669079"),
  C = i("981631");
let S = {},
  I = {},
  g = [],
  T = [],
  R = [],
  v = new Set,
  A = {},
  O = {},
  N = new Set;

function L(e) {
  let t = m.default.createFromServer(e),
    i = t.code;
  if (null != I[i]) I[i] = I[i].merge(t);
  else if (I[i] = t, null != t.expiresAt) {
    let e = new E.Timeout;
    S[i] = e,
      function e(t) {
        let i = I[t];
        if (null == i || null == i.expiresAt) return;
        let s = i.expiresAt.valueOf() - u()().valueOf();
        if (s <= 0) delete I[t], delete S[t], y.emitChange();
        else {
          let i = S[t];
          if (null == i) return;
          i.start(Math.min(2147483647, s), () => e(t))
        }
      }(i)
  }
}

function b(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !N.has(e.channel_id)) return !1;
  let i = (0, p.isGiftCodeEmbed)(e) ? (0, p.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, p.findGiftCodes)(e.content);
  return 0 !== i.length && (i.forEach(e => {
    !g.includes(e) && !R.includes(e) && (D({
      code: e
    }), _.default.wait(() => f.default.resolveGiftCode(e, !1, !0).catch(C.NOOP_NULL)))
  }), !1)
}

function D(e) {
  let {
    code: t
  } = e;
  !g.includes(t) && (g = [...g, t])
}

function x(e) {
  let {
    message: t
  } = e;
  return b(t, !0)
}

function U(e) {
  let {
    channelId: t,
    messages: i
  } = e;
  N.add(t), i.forEach(e => b(e, !0))
}

function F(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) return !1;
  null == t || t.forEach(e => b(e))
}
class G extends(s = c.default.Store) {
  get(e) {
    let t = I[e];
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? O[e] : null
  }
  getForGifterSKUAndPlan(e, t, i) {
    return d().values(I).filter(s => s.userId === e && s.skuId === t && (null == i || s.subscriptionPlanId === i) && !s.isExpired())
  }
  getIsResolving(e) {
    return g.includes(e)
  }
  getIsResolved(e) {
    return R.includes(e)
  }
  getIsAccepting(e) {
    return T.includes(e)
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
    return v.has((0, p.makeComboId)(e, t))
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
    return A[(0, p.makeComboId)(e, t)]
  }
  getResolvingCodes() {
    return g
  }
  getResolvedCodes() {
    return R
  }
  getAcceptingCodes() {
    return T
  }
}
a = "GiftCodeStore", (l = "displayName") in(n = G) ? Object.defineProperty(n, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = a;
let y = new G(_.default, {
  CONNECTION_OPEN: function() {
    return N.clear(), !1
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && N.add(t), !1
  },
  GIFT_CODE_RESOLVE: D,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    return g = g.filter(e => e !== t.code), !R.includes(t.code) && (R = [...R, t.code]), L(t)
  },
  GIFT_CODE_RESOLVE_FAILURE: function(e) {
    let {
      code: t
    } = e;
    g = g.filter(e => e !== t), !R.includes(t) && (R = [...R, t])
  },
  GIFT_CODE_REDEEM: function(e) {
    let {
      code: t
    } = e;
    !T.includes(t) && (T = [...T, t])
  },
  GIFT_CODE_REDEEM_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    T = T.filter(e => e !== t);
    let i = I[t];
    null != i && (I[t] = i.merge({
      redeemed: !0,
      uses: i.uses + 1
    }))
  },
  GIFT_CODE_REDEEM_FAILURE: function(e) {
    let {
      code: t,
      error: i
    } = e;
    T = T.filter(e => e !== t);
    let s = I[t];
    if (O[t] = i, null != s) switch (i.code) {
      case C.AbortCodes.UNKNOWN_GIFT_CODE:
        I[t] = s.set("revoked", !0);
        break;
      case C.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
        I[t] = s.set("uses", s.maxUses)
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    delete I[t];
    let i = S[t];
    null != i && (i.stop(), delete S[t]), !R.includes(t) && (R = [...R, t])
  },
  GIFT_CODE_CREATE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    L(t)
  },
  GIFT_CODES_FETCH: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: i
    } = e;
    v.add((0, p.makeComboId)(t, i))
  },
  GIFT_CODES_FETCH_SUCCESS: function(e) {
    let {
      giftCodes: t,
      skuId: i,
      subscriptionPlanId: s
    } = e;
    t.forEach(L);
    let n = (0, p.makeComboId)(i, s);
    A[n] = Date.now(), v.delete(n)
  },
  GIFT_CODES_FETCH_FAILURE: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: i
    } = e;
    v.delete((0, p.makeComboId)(t, i))
  },
  MESSAGE_CREATE: x,
  MESSAGE_UPDATE: x,
  LOCAL_MESSAGES_LOADED: U,
  LOAD_MESSAGES_SUCCESS: U,
  LOAD_MESSAGES_AROUND_SUCCESS: U,
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => b(e))
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => b(e))
  },
  SEARCH_FINISH: function(e) {
    e.messages.forEach(e => {
      e.forEach(e => b(e))
    })
  },
  GIFT_CODE_UPDATE: function(e) {
    let {
      uses: t,
      code: i
    } = e, s = I[i];
    null != s && (I[i] = s.set("uses", Math.max(s.uses, t)))
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e;
    (0, h.getMessagesFromGuildFeedFetch)(t).forEach(e => b(e))
  },
  LOAD_THREADS_SUCCESS: F,
  LOAD_ARCHIVED_THREADS_SUCCESS: F,
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    Object.values(t).map(e => {
      let {
        first_message: t
      } = e;
      return null != t && b(t)
    })
  }
});
t.default = y