n.d(t, {
  B6: function() {
return U;
  },
  DU: function() {
return Y;
  },
  EH: function() {
return M;
  },
  Fr: function() {
return Z;
  },
  GI: function() {
return K;
  },
  J2: function() {
return D;
  },
  Jf: function() {
return k;
  },
  KX: function() {
return q;
  },
  OH: function() {
return a;
  },
  Rf: function() {
return G;
  },
  _Q: function() {
return Q;
  },
  _s: function() {
return z;
  },
  bA: function() {
return b;
  },
  e5: function() {
return i;
  },
  iO: function() {
return V;
  },
  jU: function() {
return H;
  },
  kJ: function() {
return j;
  },
  pe: function() {
return w;
  },
  t5: function() {
return F;
  },
  tP: function() {
return P;
  },
  uA: function() {
return B;
  },
  z: function() {
return x;
  },
  z6: function() {
return W;
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
  m = n(617136),
  I = n(272008),
  T = n(569984),
  g = n(497505),
  S = n(918701),
  A = n(796111),
  N = n(977156),
  v = n(31055),
  O = n(566078),
  R = n(46140),
  C = n(981631),
  y = n(689938);

function D() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
  fetchPolicy: 'cache-only'
},
[t, n] = u.useState(!1),
r = (0, d.Wu)([T.Z], () => [...T.Z.quests.values()]),
{
  isFetchingCurrentQuests: i,
  lastFetchedCurrentQuests: a
} = (0, d.cj)([T.Z], () => ({
  isFetchingCurrentQuests: T.Z.isFetchingCurrentQuests,
  lastFetchedCurrentQuests: T.Z.lastFetchedCurrentQuests
})),
s = (0, N.cB)({
  location: R.dr.USE_QUESTS
});
  return u.useEffect(() => {
if ('cache-only' !== e.fetchPolicy)
  ('cache-and-network' === e.fetchPolicy || 'cache-or-network' === e.fetchPolicy && 0 === a) && s && !t && !i && (n(!0), (0, I.xw)());
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

function L(e, t, n) {
  return e.localeCompare(t) * (0 === n ? -1 : 1);
}
(s = r || (r = {}))[s.DESC = 0] = 'DESC', s[s.ASC = 1] = 'ASC';

function b(e) {
  let {
quests: t,
isFetchingCurrentQuests: n
  } = D({
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
    let l = !(0, S.zi)(e),
      u = !(0, S.zi)(t),
      c = (0, S.Mi)(e, g.jn.QUEST_BAR) || (0, S.Mi)(e, g.jn.QUEST_BAR_V2),
      d = (0, S.Mi)(t, g.jn.QUEST_BAR) || (0, S.Mi)(t, g.jn.QUEST_BAR_V2),
      _ = (0, S.Mi)(e, g.jn.GIFT_INVENTORY_FOR_YOU),
      E = (0, S.Mi)(t, g.jn.GIFT_INVENTORY_FOR_YOU),
      f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
      h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
    return l !== u ? l ? -1 : 1 : c !== d && l && u ? c ? -1 : 1 : _ !== E ? _ ? -1 : 1 : f !== h ? f ? -1 : 1 : l && u ? L(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : L(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
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
    let a = O.r.build(e.config).rewardsExpireAt;
    return L(a, O.r.build(t.config).rewardsExpireAt, 0);
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

function M() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = D({
fetchPolicy: 'cache-only'
  }), [n, r] = u.useState(() => new Map(e.map(e => [
e.id,
(0, S.zi)(e)
  ])));
  return u.useEffect(() => {
if (t)
  return;
let n = [];
for (let t of e)
  if (null == t || (0, S.zi)(t))
    null != t && (0, S.zi)(t) && r(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
  else {
    let e = new c.V7(),
      i = () => {
        let a = Date.parse(t.config.expiresAt) - Date.now();
        e.start(a, () => {
          (0, S.zi)(t) ? r(e => new Map(e).set(t.id, !0)): i();
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

function P(e) {
  let t = M();
  return u.useMemo(() => {
var n;
return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
  }, [
e,
t
  ]);
}

function U(e) {
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

function w(e) {
  return (0, d.e7)([T.Z], () => T.Z.isProgressingOnDesktop(e.id));
}

function x(e) {
  return w(e) || (0, S.Bz)(e);
}
(o = i || (i = {})).UNCLAIMED = 'unclaimed', o.CLAIMED = 'claimed';
let G = e => {
  let t = u.useCallback(() => (0, S.il)(e), [e]),
[n, r] = u.useState(t()),
i = u.useCallback(() => r(t()), [t]),
a = x(e);
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

function k(e) {
  return u.useMemo(() => (0, S.b7)(e), [e]);
}
let B = e => {
  let {
quest: t,
location: n,
questContent: r
  } = e, i = z({
quest: t
  });
  return () => {
i ? (0, S.gI)({
  quest: t,
  showInline: (0, A.i)({
    location: n
  })
}, {
  content: r,
  ctaContent: m.jZ.CONNECT_CONSOLE_LINK
}) : (0, S.V$)({
  quest: t
}, {
  content: r,
  ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
});
  };
};

function F(e, t, n) {
  let {
targetMinutes: r
  } = G(e), i = k(e), a = B({
quest: e,
location: t,
questContent: n
  });
  if ((0, S.zK)(e, R.S7.IN_HOUSE_CONSOLE_QUEST))
return y.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a
});
  if ((0, S.$J)(e))
return y.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a,
  gameTitle: O.r.build(e.config).application.name
});
  if (null != i)
return i.title;
  let s = y.Z.Messages.QUESTS_STREAM_TASK;
  return (0, S.Nj)({
quest: e
  }) && (s = y.Z.Messages.QUESTS_PLAY_TASK), s.format({
minutes: r,
gameTitle: e.config.messages.gameTitle
  });
}

function V() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = D({
fetchPolicy: 'cache-or-network'
  }), n = M();
  return u.useMemo(() => {
let r = [];
if (t || 0 === e.length)
  return r;
for (let t of e) {
  var i;
  if (!(0, S.vR)(t, g.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (i = n.get(t.id)) && void 0 !== i && i)
    continue;
  if ((null == t ? void 0 : t.userStatus) == null) {
    r.push(t);
    continue;
  }
  let e = null != t.userStatus.claimedAt,
    a = (0, S.zE)(t.userStatus, g.jn.GIFT_INVENTORY_SETTINGS_BADGE);
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

function H() {
  let e = V();
  u.useEffect(() => {
for (let t of e)
  (0, I.gl)(t.id, g.jn.GIFT_INVENTORY_SETTINGS_BADGE);
  }, [e]);
}

function Z(e) {
  let t = (0, v.z)({
  location: R.dr.MEMBERS_LIST
}),
n = (0, d.e7)([T.Z], () => t ? T.Z.quests : null),
r = u.useMemo(() => (0, S.Jg)(n, e), [
  e,
  n
]);
  return P(r) ? null : r;
}

function Y(e) {
  var t;
  let n = (0, S.Xv)(e),
{
  product: r,
  isFetching: i
} = (0, _.T)(O.r.build(e).defaultReward.skuId);
  return {
hasQuestCollectibles: n,
avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
isFetching: i
  };
}

function j(e) {
  return {
handleComplete: () => (0, I.Wf)(e),
handleResetStatusClick: () => (0, I.eT)(e),
handleResetDismissibilityClick: () => (0, I.T0)(e),
handleOverrideDeliveryClick: () => (0, I.EW)(e)
  };
}

function W() {
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
  n = e.filter(e => e.type === C.ABu.XBOX),
  r = e.filter(e => e.type === C.ABu.PLAYSTATION),
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
let K = e => {
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
      e = await (0, I.CS)(t, n), s(e.errorHints);
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
  z = e => {
let {
  quest: t
} = e, {
  xboxAndPlaystationAccounts: n
} = W(), r = x(t), i = 0 === n.length;
return (0, S.$J)(t) && i && !r;
  },
  q = () => {
let {
  xboxAccounts: e,
  playstationAccounts: t
} = W(), n = e.length > 0, r = t.length > 0, i = p.Z.getArticleURL(C.BhN.QUEST_HOW_TO_PLAYSTATION), a = p.Z.getArticleURL(C.BhN.QUEST_HOW_TO_XBOX), s = y.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
  psHelpdeskArticle: i,
  xboxHelpdeskArticle: a
}), o = y.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({
  helpdeskArticle: r ? i : a
});
return {
  message: n && !r || !n && r ? o : s,
  xboxURL: a,
  playstationURL: i
};
  };

function Q(e) {
  var t, n, r;
  let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
o = G(e).percentComplete > 0;
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
(l = a || (a = {}))[l.UNACCEPTED = 0] = 'UNACCEPTED', l[l.ACCEPTED = 1] = 'ACCEPTED', l[l.IN_PROGRESS = 2] = 'IN_PROGRESS', l[l.COMPLETED = 3] = 'COMPLETED', l[l.CLAIMED = 4] = 'CLAIMED';