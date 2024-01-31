"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007");
var l = n("917351"),
  i = n.n(l),
  s = n("866227"),
  r = n.n(s),
  u = n("446674"),
  a = n("862337"),
  d = n("913144"),
  o = n("569272"),
  c = n("560208"),
  E = n("671484"),
  f = n("659632"),
  _ = n("49111");
let S = {},
  p = {},
  h = [],
  C = [],
  m = [],
  I = new Set,
  g = {},
  v = {},
  T = new Set;

function O(e) {
  let t = E.default.createFromServer(e),
    n = t.code;
  if (null != p[n]) p[n] = p[n].merge(t);
  else if (p[n] = t, null != t.expiresAt) {
    let e = new a.Timeout;
    S[n] = e,
      function e(t) {
        let n = p[t];
        if (null == n || null == n.expiresAt) return;
        let l = n.expiresAt.valueOf() - r().valueOf();
        if (l <= 0) delete p[t], delete S[t], N.emitChange();
        else {
          let n = S[t];
          if (null == n) return;
          n.start(Math.min(2147483647, l), () => e(t))
        }
      }(n)
  }
}

function b(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !T.has(e.channel_id)) return !1;
  let n = (0, f.isGiftCodeEmbed)(e) ? (0, f.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, f.findGiftCodes)(e.content);
  return 0 !== n.length && (n.forEach(e => {
    !h.includes(e) && !m.includes(e) && (x({
      code: e
    }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(_.NOOP_NULL)))
  }), !1)
}

function x(e) {
  let {
    code: t
  } = e;
  !h.includes(t) && (h = [...h, t])
}

function A(e) {
  let {
    message: t
  } = e;
  return b(t, !0)
}

function D(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  T.add(t), n.forEach(e => b(e, !0))
}

function R(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) return !1;
  null == t || t.forEach(e => b(e))
}
class F extends u.default.Store {
  get(e) {
    let t = p[e];
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? v[e] : null
  }
  getForGifterSKUAndPlan(e, t, n) {
    return i.values(p).filter(l => l.userId === e && l.skuId === t && (null == n || l.subscriptionPlanId === n) && !l.isExpired())
  }
  getIsResolving(e) {
    return h.includes(e)
  }
  getIsResolved(e) {
    return m.includes(e)
  }
  getIsAccepting(e) {
    return C.includes(e)
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
    return I.has((0, f.makeComboId)(e, t))
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
    return g[(0, f.makeComboId)(e, t)]
  }
  getResolvingCodes() {
    return h
  }
  getResolvedCodes() {
    return m
  }
  getAcceptingCodes() {
    return C
  }
}
F.displayName = "GiftCodeStore";
let N = new F(d.default, {
  CONNECTION_OPEN: function() {
    return T.clear(), !1
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && T.add(t), !1
  },
  GIFT_CODE_RESOLVE: x,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    return h = h.filter(e => e !== t.code), !m.includes(t.code) && (m = [...m, t.code]), O(t)
  },
  GIFT_CODE_RESOLVE_FAILURE: function(e) {
    let {
      code: t
    } = e;
    h = h.filter(e => e !== t), !m.includes(t) && (m = [...m, t])
  },
  GIFT_CODE_REDEEM: function(e) {
    let {
      code: t
    } = e;
    !C.includes(t) && (C = [...C, t])
  },
  GIFT_CODE_REDEEM_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    C = C.filter(e => e !== t);
    let n = p[t];
    null != n && (p[t] = n.merge({
      redeemed: !0,
      uses: n.uses + 1
    }))
  },
  GIFT_CODE_REDEEM_FAILURE: function(e) {
    let {
      code: t,
      error: n
    } = e;
    C = C.filter(e => e !== t);
    let l = p[t];
    if (v[t] = n, null != l) switch (n.code) {
      case _.AbortCodes.UNKNOWN_GIFT_CODE:
        p[t] = l.set("revoked", !0);
        break;
      case _.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
        p[t] = l.set("uses", l.maxUses)
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    delete p[t];
    let n = S[t];
    null != n && (n.stop(), delete S[t]), !m.includes(t) && (m = [...m, t])
  },
  GIFT_CODE_CREATE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    O(t)
  },
  GIFT_CODES_FETCH: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: n
    } = e;
    I.add((0, f.makeComboId)(t, n))
  },
  GIFT_CODES_FETCH_SUCCESS: function(e) {
    let {
      giftCodes: t,
      skuId: n,
      subscriptionPlanId: l
    } = e;
    t.forEach(O);
    let i = (0, f.makeComboId)(n, l);
    g[i] = Date.now(), I.delete(i)
  },
  GIFT_CODES_FETCH_FAILURE: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: n
    } = e;
    I.delete((0, f.makeComboId)(t, n))
  },
  MESSAGE_CREATE: A,
  MESSAGE_UPDATE: A,
  LOCAL_MESSAGES_LOADED: D,
  LOAD_MESSAGES_SUCCESS: D,
  LOAD_MESSAGES_AROUND_SUCCESS: D,
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
      code: n
    } = e, l = p[n];
    null != l && (p[n] = l.set("uses", Math.max(l.uses, t)))
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e;
    (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => b(e))
  },
  LOAD_THREADS_SUCCESS: R,
  LOAD_ARCHIVED_THREADS_SUCCESS: R,
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
var U = N