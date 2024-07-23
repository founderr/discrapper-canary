n(47120);
var i, r, s, l, a = n(392711),
  o = n.n(a),
  u = n(913527),
  d = n.n(u),
  c = n(442837),
  _ = n(846519),
  E = n(570140),
  h = n(533307),
  p = n(590783),
  f = n(669079),
  S = n(981631);
let m = {},
  I = {},
  b = [],
  g = [],
  C = [],
  O = new Set(),
  A = {},
  v = {},
  R = new Set();

function N(e) {
  let t = p.Z.createFromServer(e),
n = t.code;
  if (null != I[n])
I[n] = I[n].merge(t);
  else if (I[n] = t, null != t.expiresAt) {
let e = new _.V7();
m[n] = e,
  function e(t) {
    let n = I[t];
    if (null == n || null == n.expiresAt)
      return;
    let i = n.expiresAt.valueOf() - d()().valueOf();
    if (i <= 0)
      delete I[t], delete m[t], Z.emitChange();
    else {
      let n = m[t];
      if (null == n)
        return;
      n.start(Math.min(2147483647, i), () => e(t));
    }
  }(n);
  }
}

function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !R.has(e.channel_id))
return !1;
  let n = (0, f.Fp)(e) ? (0, f.Q_)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, f.Q_)(e.content);
  return 0 !== n.length && (n.forEach(e => {
!b.includes(e) && !C.includes(e) && (y({
  code: e
}), E.Z.wait(() => h.Z.resolveGiftCode(e, !1, !0).catch(S.VqG)));
  }), !1);
}

function y(e) {
  let {
code: t
  } = e;
  !b.includes(t) && (b = [
...b,
t
  ]);
}

function L(e) {
  let {
message: t
  } = e;
  return T(t, !0);
}

function D(e) {
  let {
channelId: t,
messages: n
  } = e;
  R.add(t), n.forEach(e => T(e, !0));
}

function P(e) {
  let {
firstMessages: t
  } = e;
  if (null == t)
return !1;
  null == t || t.forEach(e => T(e));
}
class F extends(i = c.ZP.Store) {
  get(e) {
let t = I[e];
return null == t || t.isExpired() ? null : t;
  }
  getError(e) {
return null != e ? v[e] : null;
  }
  getForGifterSKUAndPlan(e, t, n) {
return o().values(I).filter(i => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired());
  }
  getIsResolving(e) {
return b.includes(e);
  }
  getIsResolved(e) {
return C.includes(e);
  }
  getIsAccepting(e) {
return g.includes(e);
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
return O.has((0, f.Bg)(e, t));
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
return A[(0, f.Bg)(e, t)];
  }
  getResolvingCodes() {
return b;
  }
  getResolvedCodes() {
return C;
  }
  getAcceptingCodes() {
return g;
  }
}
l = 'GiftCodeStore', (s = 'displayName') in(r = F) ? Object.defineProperty(r, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = l;
let Z = new F(E.Z, {
  CONNECTION_OPEN: function() {
return R.clear(), !1;
  },
  CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
return null != t && R.add(t), !1;
  },
  GIFT_CODE_RESOLVE: y,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
let {
  giftCode: t
} = e;
return b = b.filter(e => e !== t.code), !C.includes(t.code) && (C = [
  ...C,
  t.code
]), N(t);
  },
  GIFT_CODE_RESOLVE_FAILURE: function(e) {
let {
  code: t
} = e;
b = b.filter(e => e !== t), !C.includes(t) && (C = [
  ...C,
  t
]);
  },
  GIFT_CODE_REDEEM: function(e) {
let {
  code: t
} = e;
!g.includes(t) && (g = [
  ...g,
  t
]);
  },
  GIFT_CODE_REDEEM_SUCCESS: function(e) {
let {
  code: t
} = e;
g = g.filter(e => e !== t);
let n = I[t];
null != n && (I[t] = n.merge({
  redeemed: !0,
  uses: n.uses + 1
}));
  },
  GIFT_CODE_REDEEM_FAILURE: function(e) {
let {
  code: t,
  error: n
} = e;
g = g.filter(e => e !== t);
let i = I[t];
if (v[t] = n, null != i)
  switch (n.code) {
    case S.evJ.UNKNOWN_GIFT_CODE:
      I[t] = i.set('revoked', !0);
      break;
    case S.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
      I[t] = i.set('uses', i.maxUses);
  }
  },
  GIFT_CODE_REVOKE_SUCCESS: function(e) {
let {
  code: t
} = e;
delete I[t];
let n = m[t];
null != n && (n.stop(), delete m[t]), !C.includes(t) && (C = [
  ...C,
  t
]);
  },
  GIFT_CODE_CREATE_SUCCESS: function(e) {
let {
  giftCode: t
} = e;
N(t);
  },
  GIFT_CODES_FETCH: function(e) {
let {
  skuId: t,
  subscriptionPlanId: n
} = e;
O.add((0, f.Bg)(t, n));
  },
  GIFT_CODES_FETCH_SUCCESS: function(e) {
let {
  giftCodes: t,
  skuId: n,
  subscriptionPlanId: i
} = e;
t.forEach(N);
let r = (0, f.Bg)(n, i);
A[r] = Date.now(), O.delete(r);
  },
  GIFT_CODES_FETCH_FAILURE: function(e) {
let {
  skuId: t,
  subscriptionPlanId: n
} = e;
O.delete((0, f.Bg)(t, n));
  },
  MESSAGE_CREATE: L,
  MESSAGE_UPDATE: L,
  LOCAL_MESSAGES_LOADED: D,
  LOAD_MESSAGES_SUCCESS: D,
  LOAD_MESSAGES_AROUND_SUCCESS: D,
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
let {
  messages: t
} = e;
t.forEach(e => T(e));
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
let {
  messages: t
} = e;
t.forEach(e => T(e));
  },
  SEARCH_FINISH: function(e) {
e.messages.forEach(e => {
  e.forEach(e => T(e));
});
  },
  GIFT_CODE_UPDATE: function(e) {
let {
  uses: t,
  code: n
} = e, i = I[n];
null != i && (I[n] = i.set('uses', Math.max(i.uses, t)));
  },
  LOAD_THREADS_SUCCESS: P,
  LOAD_ARCHIVED_THREADS_SUCCESS: P,
  LOAD_FORUM_POSTS: function(e) {
let {
  threads: t
} = e;
Object.values(t).map(e => {
  let {
    first_message: t
  } = e;
  return null != t && T(t);
});
  }
});
t.Z = Z;