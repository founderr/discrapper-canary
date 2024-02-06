"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007");
var i = n("917351"),
  l = n.n(i),
  s = n("866227"),
  r = n.n(s),
  a = n("446674"),
  u = n("862337"),
  d = n("913144"),
  o = n("569272"),
  c = n("560208"),
  E = n("671484"),
  f = n("659632"),
  _ = n("49111");
let S = {},
  p = {},
  h = [],
  m = [],
  C = [],
  I = new Set,
  g = {},
  R = {},
  v = new Set;

function T(e) {
  let t = E.default.createFromServer(e),
    n = t.code;
  if (null != p[n]) p[n] = p[n].merge(t);
  else if (p[n] = t, null != t.expiresAt) {
    let e = new u.Timeout;
    S[n] = e,
      function e(t) {
        let n = p[t];
        if (null == n || null == n.expiresAt) return;
        let i = n.expiresAt.valueOf() - r().valueOf();
        if (i <= 0) delete p[t], delete S[t], x.emitChange();
        else {
          let n = S[t];
          if (null == n) return;
          n.start(Math.min(2147483647, i), () => e(t))
        }
      }(n)
  }
}

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !v.has(e.channel_id)) return !1;
  let n = (0, f.isGiftCodeEmbed)(e) ? (0, f.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, f.findGiftCodes)(e.content);
  return 0 !== n.length && (n.forEach(e => {
    !h.includes(e) && !C.includes(e) && (O({
      code: e
    }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(_.NOOP_NULL)))
  }), !1)
}

function O(e) {
  let {
    code: t
  } = e;
  !h.includes(t) && (h = [...h, t])
}

function N(e) {
  let {
    message: t
  } = e;
  return A(t, !0)
}

function D(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  v.add(t), n.forEach(e => A(e, !0))
}

function b(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) return !1;
  null == t || t.forEach(e => A(e))
}
class L extends a.default.Store {
  get(e) {
    let t = p[e];
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? R[e] : null
  }
  getForGifterSKUAndPlan(e, t, n) {
    return l.values(p).filter(i => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired())
  }
  getIsResolving(e) {
    return h.includes(e)
  }
  getIsResolved(e) {
    return C.includes(e)
  }
  getIsAccepting(e) {
    return m.includes(e)
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
    return C
  }
  getAcceptingCodes() {
    return m
  }
}
L.displayName = "GiftCodeStore";
let x = new L(d.default, {
  CONNECTION_OPEN: function() {
    return v.clear(), !1
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && v.add(t), !1
  },
  GIFT_CODE_RESOLVE: O,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    return h = h.filter(e => e !== t.code), !C.includes(t.code) && (C = [...C, t.code]), T(t)
  },
  GIFT_CODE_RESOLVE_FAILURE: function(e) {
    let {
      code: t
    } = e;
    h = h.filter(e => e !== t), !C.includes(t) && (C = [...C, t])
  },
  GIFT_CODE_REDEEM: function(e) {
    let {
      code: t
    } = e;
    !m.includes(t) && (m = [...m, t])
  },
  GIFT_CODE_REDEEM_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    m = m.filter(e => e !== t);
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
    m = m.filter(e => e !== t);
    let i = p[t];
    if (R[t] = n, null != i) switch (n.code) {
      case _.AbortCodes.UNKNOWN_GIFT_CODE:
        p[t] = i.set("revoked", !0);
        break;
      case _.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
        p[t] = i.set("uses", i.maxUses)
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    delete p[t];
    let n = S[t];
    null != n && (n.stop(), delete S[t]), !C.includes(t) && (C = [...C, t])
  },
  GIFT_CODE_CREATE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    T(t)
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
      subscriptionPlanId: i
    } = e;
    t.forEach(T);
    let l = (0, f.makeComboId)(n, i);
    g[l] = Date.now(), I.delete(l)
  },
  GIFT_CODES_FETCH_FAILURE: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: n
    } = e;
    I.delete((0, f.makeComboId)(t, n))
  },
  MESSAGE_CREATE: N,
  MESSAGE_UPDATE: N,
  LOCAL_MESSAGES_LOADED: D,
  LOAD_MESSAGES_SUCCESS: D,
  LOAD_MESSAGES_AROUND_SUCCESS: D,
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => A(e))
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => A(e))
  },
  SEARCH_FINISH: function(e) {
    e.messages.forEach(e => {
      e.forEach(e => A(e))
    })
  },
  GIFT_CODE_UPDATE: function(e) {
    let {
      uses: t,
      code: n
    } = e, i = p[n];
    null != i && (p[n] = i.set("uses", Math.max(i.uses, t)))
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e;
    (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e))
  },
  LOAD_THREADS_SUCCESS: b,
  LOAD_ARCHIVED_THREADS_SUCCESS: b,
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    Object.values(t).map(e => {
      let {
        first_message: t
      } = e;
      return null != t && A(t)
    })
  }
});
var U = x