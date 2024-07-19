n.d(t, {
  B6: function() {
return M;
  },
  DU: function() {
return H;
  },
  EH: function() {
return L;
  },
  Fr: function() {
return V;
  },
  GI: function() {
return j;
  },
  J2: function() {
return C;
  },
  Jf: function() {
return x;
  },
  KX: function() {
return K;
  },
  Rf: function() {
return w;
  },
  _s: function() {
return W;
  },
  bA: function() {
return D;
  },
  e5: function() {
return i;
  },
  iO: function() {
return B;
  },
  jU: function() {
return F;
  },
  kJ: function() {
return Z;
  },
  pe: function() {
return P;
  },
  t5: function() {
return k;
  },
  tP: function() {
return b;
  },
  uA: function() {
return G;
  },
  z: function() {
return U;
  },
  z6: function() {
return Y;
  }
}), n(47120), n(653041);
var r, i, a, s, o = n(470079),
  l = n(846519),
  u = n(442837),
  c = n(583434),
  d = n(706454),
  _ = n(553795),
  E = n(70956),
  f = n(63063),
  h = n(617136),
  p = n(272008),
  m = n(569984),
  I = n(497505),
  T = n(918701),
  g = n(796111),
  S = n(977156),
  A = n(31055),
  N = n(566078),
  v = n(46140),
  O = n(981631),
  R = n(689938);

function C() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
  fetchPolicy: 'cache-only'
},
[t, n] = o.useState(!1),
r = (0, u.Wu)([m.Z], () => [...m.Z.quests.values()]),
{
  isFetchingCurrentQuests: i,
  lastFetchedCurrentQuests: a
} = (0, u.cj)([m.Z], () => ({
  isFetchingCurrentQuests: m.Z.isFetchingCurrentQuests,
  lastFetchedCurrentQuests: m.Z.lastFetchedCurrentQuests
})),
s = (0, S.cB)({
  location: v.dr.USE_QUESTS
});
  return o.useEffect(() => {
if ('cache-only' !== e.fetchPolicy)
  ('cache-and-network' === e.fetchPolicy || 'cache-or-network' === e.fetchPolicy && 0 === a) && s && !t && !i && (n(!0), (0, p.xw)());
  }, [
e.fetchPolicy,
s,
t,
i,
a
  ]), {
quests: r,
isFetchingCurrentQuests: i
  };
}

function y(e, t, n) {
  return e.localeCompare(t) * (0 === n ? -1 : 1);
}
(a = r || (r = {}))[a.DESC = 0] = 'DESC', a[a.ASC = 1] = 'ASC';

function D(e) {
  let {
quests: t,
isFetchingCurrentQuests: n
  } = C({
fetchPolicy: 'cache-and-network'
  }), r = new Map(t.map(e => [
e.id,
e
  ])), i = function(e) {
let t = o.useMemo(() => e.filter(e => {
    var t;
    return !((null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null);
  }), [e]),
  n = o.useRef([]);
return o.useMemo(() => {
  if (0 === t.length)
    return [];
  if (n.current.length > 0)
    return n.current;
  let e = t.sort((e, t) => {
    var n, r, i, a, s, o;
    let l = !(0, T.zi)(e),
      u = !(0, T.zi)(t),
      c = (0, T.Mi)(e, I.jn.QUEST_BAR) || (0, T.Mi)(e, I.jn.QUEST_BAR_V2),
      d = (0, T.Mi)(t, I.jn.QUEST_BAR) || (0, T.Mi)(t, I.jn.QUEST_BAR_V2),
      _ = (0, T.Mi)(e, I.jn.GIFT_INVENTORY_FOR_YOU),
      E = (0, T.Mi)(t, I.jn.GIFT_INVENTORY_FOR_YOU),
      f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
      h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
    return l !== u ? l ? -1 : 1 : c !== d && l && u ? c ? -1 : 1 : _ !== E ? _ ? -1 : 1 : f !== h ? f ? -1 : 1 : l && u ? y(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : y(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
  }).map(e => e.id);
  return n.current = e, e;
}, [t]);
  }(t), a = function(e) {
let t = o.useMemo(() => e.filter(e => {
    var t, n;
    let r = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
      i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
    return r && i;
  }), [e]),
  n = o.useRef([]);
return o.useMemo(() => {
  if (0 === t.length)
    return [];
  if (n.current.length > 0)
    return n.current;
  let e = t.sort((e, t) => {
    var n, r;
    let i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
    if (i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null))
      return i ? -1 : 1;
    let a = N.r.build(e.config).rewardsExpireAt;
    return y(a, N.r.build(t.config).rewardsExpireAt, 0);
  }).map(e => e.id);
  return n.current = e, e;
}, [t]);
  }(t), s = [], l = [];
  for (let t of s = 'unclaimed' === e ? i : a) {
let e = r.get(t);
null != e && l.push(e);
  }
  return {
quests: l,
isFetchingCurrentQuests: n
  };
}

function L() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = C({
fetchPolicy: 'cache-only'
  }), [n, r] = o.useState(() => new Map(e.map(e => [
e.id,
(0, T.zi)(e)
  ])));
  return o.useEffect(() => {
if (t)
  return;
let n = [];
for (let t of e)
  if (null == t || (0, T.zi)(t))
    null != t && (0, T.zi)(t) && r(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
  else {
    let e = new l.V7(),
      i = () => {
        let a = Date.parse(t.config.expiresAt) - Date.now();
        e.start(a, () => {
          (0, T.zi)(t) ? r(e => new Map(e).set(t.id, !0)): i();
        }), n.push(e);
      };
    i();
  }
return () => {
  for (let e of n)
    e.stop();
};
  }, [
e,
t
  ]), n;
}

function b(e) {
  let t = L();
  return o.useMemo(() => {
var n;
return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
  }, [
e,
t
  ]);
}

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
  dateStyle: 'short'
},
n = (0, u.e7)([d.default], () => d.default.locale);
  return o.useMemo(() => null == e ? '' : new Date(e).toLocaleDateString(n, t), [
e,
t,
n
  ]);
}

function P(e) {
  return (0, u.e7)([m.Z], () => m.Z.isProgressingOnDesktop(e.id));
}

function U(e) {
  return P(e) || (0, T.Bz)(e);
}
(s = i || (i = {})).UNCLAIMED = 'unclaimed', s.CLAIMED = 'claimed';
let w = e => {
  let t = o.useCallback(() => (0, T.il)(e), [e]),
[n, r] = o.useState(t()),
i = o.useCallback(() => r(t()), [t]),
a = U(e);
  return o.useEffect(() => {
var t, n, r;
if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
  i();
  return;
}
let s = window.setInterval(() => {
  i();
}, 1 * E.Z.Millis.SECOND);
return () => {
  clearInterval(s), i();
};
  }, [
e,
a,
i
  ]), n;
};

function x(e) {
  return o.useMemo(() => (0, T.b7)(e), [e]);
}
let G = e => {
  let {
quest: t,
location: n,
questContent: r
  } = e, i = W({
quest: t
  });
  return () => {
i ? (0, T.gI)({
  quest: t,
  showInline: (0, g.i)({
    location: n
  })
}, {
  content: r,
  ctaContent: h.jZ.CONNECT_CONSOLE_LINK
}) : (0, T.V$)({
  quest: t
}, {
  content: r,
  ctaContent: h.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
});
  };
};

function k(e, t, n) {
  let {
targetMinutes: r
  } = w(e), i = x(e), a = G({
quest: e,
location: t,
questContent: n
  });
  if ((0, T.zK)(e, v.S7.IN_HOUSE_CONSOLE_QUEST))
return R.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a
});
  if ((0, T.$J)(e))
return R.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a,
  gameTitle: N.r.build(e.config).application.name
});
  if (null != i)
return i.title;
  let s = R.Z.Messages.QUESTS_STREAM_TASK;
  return (0, T.Nj)({
quest: e
  }) && (s = R.Z.Messages.QUESTS_PLAY_TASK), s.format({
minutes: r,
gameTitle: e.config.messages.gameTitle
  });
}

function B() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = C({
fetchPolicy: 'cache-or-network'
  }), n = L();
  return o.useMemo(() => {
let r = [];
if (t || 0 === e.length)
  return r;
for (let t of e) {
  var i;
  if (!(0, T.vR)(t, I.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (i = n.get(t.id)) && void 0 !== i && i)
    continue;
  if ((null == t ? void 0 : t.userStatus) == null) {
    r.push(t);
    continue;
  }
  let e = null != t.userStatus.claimedAt,
    a = (0, T.zE)(t.userStatus, I.jn.GIFT_INVENTORY_SETTINGS_BADGE);
  if (!e && !a) {
    r.push(t);
    continue;
  }
}
return r;
  }, [
e,
n,
t
  ]);
}

function F() {
  let e = B();
  o.useEffect(() => {
for (let t of e)
  (0, p.gl)(t.id, I.jn.GIFT_INVENTORY_SETTINGS_BADGE);
  }, [e]);
}

function V(e) {
  let t = (0, A.z)({
  location: v.dr.MEMBERS_LIST
}),
n = (0, u.e7)([m.Z], () => t ? m.Z.quests : null),
r = o.useMemo(() => (0, T.Jg)(n, e), [
  e,
  n
]);
  return b(r) ? null : r;
}

function H(e) {
  var t;
  let n = (0, T.Xv)(e),
{
  product: r,
  isFetching: i
} = (0, c.T)(N.r.build(e).defaultReward.skuId);
  return {
hasQuestCollectibles: n,
avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
isFetching: i
  };
}

function Z(e) {
  return {
handleComplete: () => (0, p.Wf)(e),
handleResetStatusClick: () => (0, p.eT)(e),
handleResetDismissibilityClick: () => (0, p.T0)(e),
handleOverrideDeliveryClick: () => (0, p.EW)(e)
  };
}

function Y() {
  let {
fetching: e,
accounts: t
  } = (0, u.cj)([_.Z], () => ({
fetching: _.Z.isFetching(),
accounts: _.Z.getAccounts()
  })), {
xboxAccounts: n,
playstationAccounts: r,
xboxAndPlaystationAccounts: i
  } = o.useMemo(() => {
let e = t.filter(e => !1 === e.revoked),
  n = e.filter(e => e.type === O.ABu.XBOX),
  r = e.filter(e => e.type === O.ABu.PLAYSTATION),
  i = n.concat(r);
return {
  xboxAccounts: n,
  playstationAccounts: r,
  xboxAndPlaystationAccounts: i
};
  }, [t]);
  return {
fetching: e,
xboxAccounts: n,
playstationAccounts: r,
xboxAndPlaystationAccounts: i
  };
}
let j = e => {
let {
  questId: t,
  preview: n,
  beforeRequest: r,
  afterRequest: i
} = e, [a, s] = o.useState([]), [l, u] = o.useState(!1);
return {
  startConsoleQuest: o.useCallback(async () => {
    if (!l) {
      null == r || r(), u(!0);
      try {
        let e = await (0, p.CS)(t, n);
        s(e.errorHints);
      } finally {
        u(!1), null == i || i();
      }
    }
  }, [
    l,
    r,
    i,
    n,
    t
  ]),
  startingConsoleQuest: l,
  errorHints: a
};
  },
  W = e => {
let {
  quest: t
} = e, {
  xboxAndPlaystationAccounts: n
} = Y(), r = U(t), i = 0 === n.length;
return (0, T.$J)(t) && i && !r;
  },
  K = () => {
let {
  xboxAccounts: e,
  playstationAccounts: t
} = Y(), n = e.length > 0, r = t.length > 0, i = f.Z.getArticleURL(O.BhN.QUEST_HOW_TO_PLAYSTATION), a = f.Z.getArticleURL(O.BhN.QUEST_HOW_TO_XBOX), s = R.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
  psHelpdeskArticle: i,
  xboxHelpdeskArticle: a
}), o = R.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({
  helpdeskArticle: r ? i : a
});
return {
  message: n && !r || !n && r ? o : s,
  xboxURL: a,
  playstationURL: i
};
  };