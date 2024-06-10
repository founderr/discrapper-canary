"use strict";
l.r(t), l("47120");
var n, a, i, s, r = l("392711"),
  d = l.n(r),
  o = l("913527"),
  u = l.n(o),
  c = l("442837"),
  _ = l("846519"),
  E = l("570140"),
  f = l("533307"),
  C = l("590783"),
  S = l("669079"),
  m = l("981631");
let h = {},
  p = {},
  I = [],
  R = [],
  T = [],
  A = new Set,
  g = {},
  v = {},
  O = new Set;

function N(e) {
  let t = C.default.createFromServer(e),
    l = t.code;
  if (null != p[l]) p[l] = p[l].merge(t);
  else if (p[l] = t, null != t.expiresAt) {
    let e = new _.Timeout;
    h[l] = e,
      function e(t) {
        let l = p[t];
        if (null == l || null == l.expiresAt) return;
        let n = l.expiresAt.valueOf() - u()().valueOf();
        if (n <= 0) delete p[t], delete h[t], F.emitChange();
        else {
          let l = h[t];
          if (null == l) return;
          l.start(Math.min(2147483647, n), () => e(t))
        }
      }(l)
  }
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !O.has(e.channel_id)) return !1;
  let l = (0, S.isGiftCodeEmbed)(e) ? (0, S.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, S.findGiftCodes)(e.content);
  return 0 !== l.length && (l.forEach(e => {
    !I.includes(e) && !T.includes(e) && (L({
      code: e
    }), E.default.wait(() => f.default.resolveGiftCode(e, !1, !0).catch(m.NOOP_NULL)))
  }), !1)
}

function L(e) {
  let {
    code: t
  } = e;
  !I.includes(t) && (I = [...I, t])
}

function D(e) {
  let {
    message: t
  } = e;
  return y(t, !0)
}

function b(e) {
  let {
    channelId: t,
    messages: l
  } = e;
  O.add(t), l.forEach(e => y(e, !0))
}

function w(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) return !1;
  null == t || t.forEach(e => y(e))
}
class U extends(n = c.default.Store) {
  get(e) {
    let t = p[e];
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? v[e] : null
  }
  getForGifterSKUAndPlan(e, t, l) {
    return d().values(p).filter(n => n.userId === e && n.skuId === t && (null == l || n.subscriptionPlanId === l) && !n.isExpired())
  }
  getIsResolving(e) {
    return I.includes(e)
  }
  getIsResolved(e) {
    return T.includes(e)
  }
  getIsAccepting(e) {
    return R.includes(e)
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
    return A.has((0, S.makeComboId)(e, t))
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
    return g[(0, S.makeComboId)(e, t)]
  }
  getResolvingCodes() {
    return I
  }
  getResolvedCodes() {
    return T
  }
  getAcceptingCodes() {
    return R
  }
}
s = "GiftCodeStore", (i = "displayName") in(a = U) ? Object.defineProperty(a, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = s;
let F = new U(E.default, {
  CONNECTION_OPEN: function() {
    return O.clear(), !1
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && O.add(t), !1
  },
  GIFT_CODE_RESOLVE: L,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    return I = I.filter(e => e !== t.code), !T.includes(t.code) && (T = [...T, t.code]), N(t)
  },
  GIFT_CODE_RESOLVE_FAILURE: function(e) {
    let {
      code: t
    } = e;
    I = I.filter(e => e !== t), !T.includes(t) && (T = [...T, t])
  },
  GIFT_CODE_REDEEM: function(e) {
    let {
      code: t
    } = e;
    !R.includes(t) && (R = [...R, t])
  },
  GIFT_CODE_REDEEM_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    R = R.filter(e => e !== t);
    let l = p[t];
    null != l && (p[t] = l.merge({
      redeemed: !0,
      uses: l.uses + 1
    }))
  },
  GIFT_CODE_REDEEM_FAILURE: function(e) {
    let {
      code: t,
      error: l
    } = e;
    R = R.filter(e => e !== t);
    let n = p[t];
    if (v[t] = l, null != n) switch (l.code) {
      case m.AbortCodes.UNKNOWN_GIFT_CODE:
        p[t] = n.set("revoked", !0);
        break;
      case m.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
        p[t] = n.set("uses", n.maxUses)
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    delete p[t];
    let l = h[t];
    null != l && (l.stop(), delete h[t]), !T.includes(t) && (T = [...T, t])
  },
  GIFT_CODE_CREATE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    N(t)
  },
  GIFT_CODES_FETCH: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: l
    } = e;
    A.add((0, S.makeComboId)(t, l))
  },
  GIFT_CODES_FETCH_SUCCESS: function(e) {
    let {
      giftCodes: t,
      skuId: l,
      subscriptionPlanId: n
    } = e;
    t.forEach(N);
    let a = (0, S.makeComboId)(l, n);
    g[a] = Date.now(), A.delete(a)
  },
  GIFT_CODES_FETCH_FAILURE: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: l
    } = e;
    A.delete((0, S.makeComboId)(t, l))
  },
  MESSAGE_CREATE: D,
  MESSAGE_UPDATE: D,
  LOCAL_MESSAGES_LOADED: b,
  LOAD_MESSAGES_SUCCESS: b,
  LOAD_MESSAGES_AROUND_SUCCESS: b,
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => y(e))
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => y(e))
  },
  SEARCH_FINISH: function(e) {
    e.messages.forEach(e => {
      e.forEach(e => y(e))
    })
  },
  GIFT_CODE_UPDATE: function(e) {
    let {
      uses: t,
      code: l
    } = e, n = p[l];
    null != n && (p[l] = n.set("uses", Math.max(n.uses, t)))
  },
  LOAD_THREADS_SUCCESS: w,
  LOAD_ARCHIVED_THREADS_SUCCESS: w,
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    Object.values(t).map(e => {
      let {
        first_message: t
      } = e;
      return null != t && y(t)
    })
  }
});
t.default = F