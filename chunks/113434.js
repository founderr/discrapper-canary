n.d(t, {
  B6: function() {
return x;
  },
  Bd: function() {
return ee;
  },
  DU: function() {
return W;
  },
  EH: function() {
return U;
  },
  Fr: function() {
return j;
  },
  GI: function() {
return q;
  },
  I: function() {
return J;
  },
  J2: function() {
return b;
  },
  Jf: function() {
return F;
  },
  KX: function() {
return X;
  },
  OH: function() {
return a;
  },
  Rf: function() {
return B;
  },
  _Q: function() {
return $;
  },
  _s: function() {
return Q;
  },
  bA: function() {
return P;
  },
  e5: function() {
return i;
  },
  iO: function() {
return Z;
  },
  jU: function() {
return Y;
  },
  kJ: function() {
return K;
  },
  pe: function() {
return G;
  },
  t5: function() {
return H;
  },
  tP: function() {
return w;
  },
  uA: function() {
return V;
  },
  z: function() {
return k;
  },
  z6: function() {
return z;
  }
}), n(47120), n(653041);
var r, i, a, s, o, l, u = n(470079),
  c = n(846519),
  d = n(442837),
  _ = n(583434),
  E = n(706454),
  f = n(553795),
  h = n(70956),
  p = n(63063),
  m = n(930153),
  I = n(617136),
  T = n(272008),
  g = n(569984),
  S = n(497505),
  A = n(918701),
  N = n(796111),
  v = n(977156),
  O = n(31055),
  R = n(585500),
  C = n(566078),
  y = n(46140),
  D = n(981631),
  L = n(689938);

function b() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
  fetchPolicy: 'cache-only'
},
[t, n] = u.useState(!1),
r = (0, d.Wu)([g.Z], () => [...g.Z.quests.values()]),
{
  isFetchingCurrentQuests: i,
  lastFetchedCurrentQuests: a
} = (0, d.cj)([g.Z], () => ({
  isFetchingCurrentQuests: g.Z.isFetchingCurrentQuests,
  lastFetchedCurrentQuests: g.Z.lastFetchedCurrentQuests
})),
s = (0, v.cB)({
  location: y.dr.USE_QUESTS
});
  return u.useEffect(() => {
if ('cache-only' !== e.fetchPolicy)
  ('cache-and-network' === e.fetchPolicy || 'cache-or-network' === e.fetchPolicy && 0 === a) && s && !t && !i && (n(!0), (0, T.xw)());
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

function M(e, t, n) {
  return e.localeCompare(t) * (0 === n ? -1 : 1);
}
(s = r || (r = {}))[s.DESC = 0] = 'DESC', s[s.ASC = 1] = 'ASC';

function P(e) {
  let {
quests: t,
isFetchingCurrentQuests: n
  } = b({
fetchPolicy: 'cache-and-network'
  }), r = new Map(t.map(e => [
e.id,
e
  ])), i = function(e) {
let t = u.useMemo(() => e.filter(e => {
    var t;
    return !((null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null);
  }), [e]),
  n = u.useRef([]);
return u.useMemo(() => {
  if (0 === t.length)
    return [];
  if (n.current.length > 0 && n.current.length === t.length)
    return n.current;
  let e = t.sort((e, t) => {
    var n, r, i, a, s, o;
    let l = !(0, A.zi)(e),
      u = !(0, A.zi)(t),
      c = (0, A.Mi)(e, S.jn.QUEST_BAR) || (0, A.Mi)(e, S.jn.QUEST_BAR_V2),
      d = (0, A.Mi)(t, S.jn.QUEST_BAR) || (0, A.Mi)(t, S.jn.QUEST_BAR_V2),
      _ = (0, A.Mi)(e, S.jn.GIFT_INVENTORY_FOR_YOU),
      E = (0, A.Mi)(t, S.jn.GIFT_INVENTORY_FOR_YOU),
      f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
      h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
    return l !== u ? l ? -1 : 1 : c !== d && l && u ? c ? -1 : 1 : _ !== E ? _ ? -1 : 1 : f !== h ? f ? -1 : 1 : l && u ? M(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : M(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
  }).map(e => e.id);
  return n.current = e, e;
}, [t]);
  }(t), a = function(e) {
let t = u.useMemo(() => e.filter(e => {
    var t, n;
    let r = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
      i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
    return r && i;
  }), [e]),
  n = u.useRef([]);
return u.useMemo(() => {
  if (0 === t.length)
    return [];
  if (n.current.length > 0 && n.current.length === t.length)
    return n.current;
  let e = t.sort((e, t) => {
    var n, r;
    let i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
    if (i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null))
      return i ? -1 : 1;
    let a = C.r.build(e.config).rewardsExpireAt;
    return M(a, C.r.build(t.config).rewardsExpireAt, 0);
  }).map(e => e.id);
  return n.current = e, e;
}, [t]);
  }(t), s = [], o = [];
  for (let t of s = 'unclaimed' === e ? i : a) {
let e = r.get(t);
null != e && o.push(e);
  }
  return {
quests: o,
isFetchingCurrentQuests: n
  };
}

function U() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = b({
fetchPolicy: 'cache-only'
  }), [n, r] = u.useState(() => new Map(e.map(e => [
e.id,
(0, A.zi)(e)
  ])));
  return u.useEffect(() => {
if (t)
  return;
let n = [];
for (let t of e)
  if (null == t || (0, A.zi)(t))
    null != t && (0, A.zi)(t) && r(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
  else {
    let e = new c.V7(),
      i = () => {
        let a = Date.parse(t.config.expiresAt) - Date.now();
        e.start(a, () => {
          (0, A.zi)(t) ? r(e => new Map(e).set(t.id, !0)): i();
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

function w(e) {
  let t = U();
  return u.useMemo(() => {
var n;
return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
  }, [
e,
t
  ]);
}

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
  dateStyle: 'short'
},
n = (0, d.e7)([E.default], () => E.default.locale);
  return u.useMemo(() => null == e ? '' : new Date(e).toLocaleDateString(n, t), [
e,
t,
n
  ]);
}

function G(e) {
  return (0, d.e7)([g.Z], () => g.Z.isProgressingOnDesktop(e.id));
}

function k(e) {
  return G(e) || (0, A.Bz)(e);
}
(o = i || (i = {})).UNCLAIMED = 'unclaimed', o.CLAIMED = 'claimed';
let B = e => {
  let t = u.useCallback(() => (0, A.il)(e), [e]),
[n, r] = u.useState(t()),
i = u.useCallback(() => r(t()), [t]),
a = k(e);
  return u.useEffect(() => {
var t, n, r;
if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
  i();
  return;
}
let s = window.setInterval(() => {
  i();
}, 1 * h.Z.Millis.SECOND);
return () => {
  clearInterval(s), i();
};
  }, [
e,
a,
i
  ]), n;
};

function F(e) {
  return u.useMemo(() => (0, A.b7)(e), [e]);
}
let V = e => {
  let {
quest: t,
location: n,
questContent: r
  } = e, i = Q({
quest: t
  });
  return () => {
i ? (0, A.gI)({
  quest: t,
  showInline: (0, N.i)({
    location: n
  })
}, {
  content: r,
  ctaContent: I.jZ.CONNECT_CONSOLE_LINK
}) : (0, A.V$)({
  quest: t
}, {
  content: r,
  ctaContent: I.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
});
  };
};

function H(e, t, n) {
  let {
targetMinutes: r
  } = B(e), i = F(e), a = V({
quest: e,
location: t,
questContent: n
  });
  if ((0, A.zK)(e, y.S7.IN_HOUSE_CONSOLE_QUEST))
return L.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a
});
  if ((0, A.$J)(e))
return L.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a,
  gameTitle: C.r.build(e.config).application.name
});
  if (null != i)
return i.title;
  let s = L.Z.Messages.QUESTS_STREAM_TASK;
  return (0, A.Nj)({
quest: e
  }) && (s = L.Z.Messages.QUESTS_PLAY_TASK), s.format({
minutes: r,
gameTitle: e.config.messages.gameTitle
  });
}

function Z() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = b({
fetchPolicy: 'cache-or-network'
  }), n = U();
  return u.useMemo(() => {
let r = [];
if (t || 0 === e.length)
  return r;
for (let t of e) {
  var i;
  if (!(0, A.vR)(t, S.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (i = n.get(t.id)) && void 0 !== i && i)
    continue;
  if ((null == t ? void 0 : t.userStatus) == null) {
    r.push(t);
    continue;
  }
  let e = null != t.userStatus.claimedAt,
    a = (0, A.zE)(t.userStatus, S.jn.GIFT_INVENTORY_SETTINGS_BADGE);
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

function Y() {
  let e = Z();
  u.useEffect(() => {
for (let t of e)
  (0, T.gl)(t.id, S.jn.GIFT_INVENTORY_SETTINGS_BADGE);
  }, [e]);
}

function j(e) {
  let t = (0, O.z)({
  location: y.dr.MEMBERS_LIST
}),
n = (0, d.e7)([g.Z], () => t ? g.Z.quests : null),
r = u.useMemo(() => (0, A.Jg)(n, e), [
  e,
  n
]);
  return w(r) ? null : r;
}

function W(e) {
  var t;
  let n = (0, A.Xv)(e),
{
  product: r,
  isFetching: i
} = (0, _.T)(C.r.build(e).defaultReward.skuId);
  return {
hasQuestCollectibles: n,
avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
isFetching: i
  };
}

function K(e) {
  return {
handleComplete: () => (0, T.Wf)(e),
handleResetStatusClick: () => (0, T.eT)(e),
handleResetDismissibilityClick: () => (0, T.T0)(e),
handleOverrideDeliveryClick: () => (0, T.EW)(e)
  };
}

function z() {
  let {
fetching: e,
accounts: t
  } = (0, d.cj)([f.Z], () => ({
fetching: f.Z.isFetching(),
accounts: f.Z.getAccounts()
  })), {
xboxAccounts: n,
playstationAccounts: r,
xboxAndPlaystationAccounts: i
  } = u.useMemo(() => {
let e = t.filter(e => !1 === e.revoked),
  n = e.filter(e => e.type === D.ABu.XBOX),
  r = e.filter(e => e.type === D.ABu.PLAYSTATION),
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
let q = e => {
let {
  questId: t,
  preview: n,
  beforeRequest: r,
  afterRequest: i
} = e, [a, s] = u.useState([]), [o, l] = u.useState(!1);
return {
  startConsoleQuest: u.useCallback(async () => {
    if (o)
      return;
    null == r || r(), l(!0);
    let e = null;
    try {
      e = await (0, T.CS)(t, n), s(e.errorHints);
    } finally {
      var a;
      l(!1), null == i || i(null !== (a = null == e ? void 0 : e.errorHints) && void 0 !== a ? a : []);
    }
  }, [
    o,
    r,
    i,
    n,
    t
  ]),
  startingConsoleQuest: o,
  errorHints: a
};
  },
  Q = e => {
let {
  quest: t
} = e, {
  xboxAndPlaystationAccounts: n
} = z(), r = k(t), i = 0 === n.length;
return (0, A.$J)(t) && i && !r;
  },
  X = () => {
let {
  xboxAccounts: e,
  playstationAccounts: t
} = z(), n = e.length > 0, r = t.length > 0, i = p.Z.getArticleURL(D.BhN.QUEST_HOW_TO_PLAYSTATION), a = p.Z.getArticleURL(D.BhN.QUEST_HOW_TO_XBOX), s = L.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
  psHelpdeskArticle: i,
  xboxHelpdeskArticle: a
}), o = L.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({
  helpdeskArticle: r ? i : a
});
return {
  message: n && !r || !n && r ? o : s,
  xboxURL: a,
  playstationURL: i
};
  };

function $(e) {
  var t, n, r;
  let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
o = B(e).percentComplete > 0;
  if (s)
return 4;
  if (a)
return 3;
  if (o)
return 2;
  else if (i)
return 1;
  else
return 0;
}

function J(e) {
  let t = (0, d.e7)([E.default], () => E.default.locale),
{
  percentComplete: n
} = B(e),
r = F(e),
i = null != r ? r.completedRatio : n,
a = 100 * i,
s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, m.T3)(t, i, {
  roundingMode: 'floor'
});
  return {
completedRatio: i,
percentComplete: a,
completedRatioDisplay: s
  };
}

function ee(e) {
  var t, n;
  let r = B(e),
i = (0, A.b7)(e),
a = (0, R.D)({
  quest: e,
  taskDetails: r,
  location: y.dr.QUEST_HOME_DESKTOP,
  questContent: S.jn.QUEST_HOME_DESKTOP,
  useV2Variants: !0
}),
s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
o = x(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
  if (s)
return L.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({
  claimDate: o
});
  if (null != i)
return i.description;
  if (null != a)
return a;
  return null;
}
(l = a || (a = {}))[l.UNACCEPTED = 0] = 'UNACCEPTED', l[l.ACCEPTED = 1] = 'ACCEPTED', l[l.IN_PROGRESS = 2] = 'IN_PROGRESS', l[l.COMPLETED = 3] = 'COMPLETED', l[l.CLAIMED = 4] = 'CLAIMED';