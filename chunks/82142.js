n(47120);
var s, i, l, r, a = n(392711),
  o = n.n(a),
  c = n(913527),
  d = n.n(c),
  u = n(442837),
  _ = n(846519),
  E = n(570140),
  S = n(533307),
  f = n(590783),
  h = n(669079),
  p = n(981631);
let m = {},
  I = {},
  C = [],
  A = [],
  g = [],
  R = new Set,
  T = {},
  O = {},
  v = new Set;

function N(e) {
  let t = f.Z.createFromServer(e),
    n = t.code;
  if (null != I[n]) I[n] = I[n].merge(t);
  else if (I[n] = t, null != t.expiresAt) {
    let e = new _.V7;
    m[n] = e,
      function e(t) {
        let n = I[t];
        if (null == n || null == n.expiresAt) return;
        let s = n.expiresAt.valueOf() - d()().valueOf();
        if (s <= 0) delete I[t], delete m[t], F.emitChange();
        else {
          let n = m[t];
          if (null == n) return;
          n.start(Math.min(2147483647, s), () => e(t))
        }
      }(n)
  }
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !v.has(e.channel_id)) return !1;
  let n = (0, h.Fp)(e) ? (0, h.Q_)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, h.Q_)(e.content);
  return 0 !== n.length && (n.forEach(e => {
    !C.includes(e) && !g.includes(e) && (Z({
      code: e
    }), E.Z.wait(() => S.Z.resolveGiftCode(e, !1, !0).catch(p.VqG)))
  }), !1)
}

function Z(e) {
  let {
    code: t
  } = e;
  !C.includes(t) && (C = [...C, t])
}

function D(e) {
  let {
    message: t
  } = e;
  return y(t, !0)
}

function L(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  v.add(t), n.forEach(e => y(e, !0))
}

function b(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) return !1;
  null == t || t.forEach(e => y(e))
}
class w extends(s = u.ZP.Store) {
  get(e) {
    let t = I[e];
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? O[e] : null
  }
  getForGifterSKUAndPlan(e, t, n) {
    return o().values(I).filter(s => s.userId === e && s.skuId === t && (null == n || s.subscriptionPlanId === n) && !s.isExpired())
  }
  getIsResolving(e) {
    return C.includes(e)
  }
  getIsResolved(e) {
    return g.includes(e)
  }
  getIsAccepting(e) {
    return A.includes(e)
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
    return R.has((0, h.Bg)(e, t))
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
    return T[(0, h.Bg)(e, t)]
  }
  getResolvingCodes() {
    return C
  }
  getResolvedCodes() {
    return g
  }
  getAcceptingCodes() {
    return A
  }
}
r = "GiftCodeStore", (l = "displayName") in(i = w) ? Object.defineProperty(i, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = r;
let F = new w(E.Z, {
  CONNECTION_OPEN: function() {
    return v.clear(), !1
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && v.add(t), !1
  },
  GIFT_CODE_RESOLVE: Z,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    return C = C.filter(e => e !== t.code), !g.includes(t.code) && (g = [...g, t.code]), N(t)
  },
  GIFT_CODE_RESOLVE_FAILURE: function(e) {
    let {
      code: t
    } = e;
    C = C.filter(e => e !== t), !g.includes(t) && (g = [...g, t])
  },
  GIFT_CODE_REDEEM: function(e) {
    let {
      code: t
    } = e;
    !A.includes(t) && (A = [...A, t])
  },
  GIFT_CODE_REDEEM_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    A = A.filter(e => e !== t);
    let n = I[t];
    null != n && (I[t] = n.merge({
      redeemed: !0,
      uses: n.uses + 1
    }))
  },
  GIFT_CODE_REDEEM_FAILURE: function(e) {
    let {
      code: t,
      error: n
    } = e;
    A = A.filter(e => e !== t);
    let s = I[t];
    if (O[t] = n, null != s) switch (n.code) {
      case p.evJ.UNKNOWN_GIFT_CODE:
        I[t] = s.set("revoked", !0);
        break;
      case p.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
        I[t] = s.set("uses", s.maxUses)
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    delete I[t];
    let n = m[t];
    null != n && (n.stop(), delete m[t]), !g.includes(t) && (g = [...g, t])
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
      subscriptionPlanId: n
    } = e;
    R.add((0, h.Bg)(t, n))
  },
  GIFT_CODES_FETCH_SUCCESS: function(e) {
    let {
      giftCodes: t,
      skuId: n,
      subscriptionPlanId: s
    } = e;
    t.forEach(N);
    let i = (0, h.Bg)(n, s);
    T[i] = Date.now(), R.delete(i)
  },
  GIFT_CODES_FETCH_FAILURE: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: n
    } = e;
    R.delete((0, h.Bg)(t, n))
  },
  MESSAGE_CREATE: D,
  MESSAGE_UPDATE: D,
  LOCAL_MESSAGES_LOADED: L,
  LOAD_MESSAGES_SUCCESS: L,
  LOAD_MESSAGES_AROUND_SUCCESS: L,
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
      code: n
    } = e, s = I[n];
    null != s && (I[n] = s.set("uses", Math.max(s.uses, t)))
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
      return null != t && y(t)
    })
  }
});
t.Z = F