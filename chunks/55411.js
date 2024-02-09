"use strict";
i.r(t), i.d(t, {
  default: function() {
    return U
  }
}), i("222007");
var n = i("917351"),
  s = i.n(n),
  l = i("866227"),
  r = i.n(l),
  a = i("446674"),
  u = i("862337"),
  d = i("913144"),
  o = i("569272"),
  c = i("560208"),
  E = i("671484"),
  f = i("659632"),
  _ = i("49111");
let S = {},
  m = {},
  h = [],
  C = [],
  p = [],
  I = new Set,
  g = {},
  R = {},
  A = new Set;

function T(e) {
  let t = E.default.createFromServer(e),
    i = t.code;
  if (null != m[i]) m[i] = m[i].merge(t);
  else if (m[i] = t, null != t.expiresAt) {
    let e = new u.Timeout;
    S[i] = e,
      function e(t) {
        let i = m[t];
        if (null == i || null == i.expiresAt) return;
        let n = i.expiresAt.valueOf() - r().valueOf();
        if (n <= 0) delete m[t], delete S[t], b.emitChange();
        else {
          let i = S[t];
          if (null == i) return;
          i.start(Math.min(2147483647, n), () => e(t))
        }
      }(i)
  }
}

function O(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !A.has(e.channel_id)) return !1;
  let i = (0, f.isGiftCodeEmbed)(e) ? (0, f.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, f.findGiftCodes)(e.content);
  return 0 !== i.length && (i.forEach(e => {
    !h.includes(e) && !p.includes(e) && (v({
      code: e
    }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(_.NOOP_NULL)))
  }), !1)
}

function v(e) {
  let {
    code: t
  } = e;
  !h.includes(t) && (h = [...h, t])
}

function N(e) {
  let {
    message: t
  } = e;
  return O(t, !0)
}

function D(e) {
  let {
    channelId: t,
    messages: i
  } = e;
  A.add(t), i.forEach(e => O(e, !0))
}

function L(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) return !1;
  null == t || t.forEach(e => O(e))
}
class x extends a.default.Store {
  get(e) {
    let t = m[e];
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? R[e] : null
  }
  getForGifterSKUAndPlan(e, t, i) {
    return s.values(m).filter(n => n.userId === e && n.skuId === t && (null == i || n.subscriptionPlanId === i) && !n.isExpired())
  }
  getIsResolving(e) {
    return h.includes(e)
  }
  getIsResolved(e) {
    return p.includes(e)
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
    return p
  }
  getAcceptingCodes() {
    return C
  }
}
x.displayName = "GiftCodeStore";
let b = new x(d.default, {
  CONNECTION_OPEN: function() {
    return A.clear(), !1
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && A.add(t), !1
  },
  GIFT_CODE_RESOLVE: v,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    return h = h.filter(e => e !== t.code), !p.includes(t.code) && (p = [...p, t.code]), T(t)
  },
  GIFT_CODE_RESOLVE_FAILURE: function(e) {
    let {
      code: t
    } = e;
    h = h.filter(e => e !== t), !p.includes(t) && (p = [...p, t])
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
    let i = m[t];
    null != i && (m[t] = i.merge({
      redeemed: !0,
      uses: i.uses + 1
    }))
  },
  GIFT_CODE_REDEEM_FAILURE: function(e) {
    let {
      code: t,
      error: i
    } = e;
    C = C.filter(e => e !== t);
    let n = m[t];
    if (R[t] = i, null != n) switch (i.code) {
      case _.AbortCodes.UNKNOWN_GIFT_CODE:
        m[t] = n.set("revoked", !0);
        break;
      case _.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
        m[t] = n.set("uses", n.maxUses)
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    delete m[t];
    let i = S[t];
    null != i && (i.stop(), delete S[t]), !p.includes(t) && (p = [...p, t])
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
      subscriptionPlanId: i
    } = e;
    I.add((0, f.makeComboId)(t, i))
  },
  GIFT_CODES_FETCH_SUCCESS: function(e) {
    let {
      giftCodes: t,
      skuId: i,
      subscriptionPlanId: n
    } = e;
    t.forEach(T);
    let s = (0, f.makeComboId)(i, n);
    g[s] = Date.now(), I.delete(s)
  },
  GIFT_CODES_FETCH_FAILURE: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: i
    } = e;
    I.delete((0, f.makeComboId)(t, i))
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
    t.forEach(e => O(e))
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => O(e))
  },
  SEARCH_FINISH: function(e) {
    e.messages.forEach(e => {
      e.forEach(e => O(e))
    })
  },
  GIFT_CODE_UPDATE: function(e) {
    let {
      uses: t,
      code: i
    } = e, n = m[i];
    null != n && (m[i] = n.set("uses", Math.max(n.uses, t)))
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e;
    (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => O(e))
  },
  LOAD_THREADS_SUCCESS: L,
  LOAD_ARCHIVED_THREADS_SUCCESS: L,
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    Object.values(t).map(e => {
      let {
        first_message: t
      } = e;
      return null != t && O(t)
    })
  }
});
var U = b