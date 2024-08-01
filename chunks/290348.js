t.d(n, {
  B7: function() {
return $;
  },
  Ek: function() {
return y;
  },
  F2: function() {
return K;
  },
  GM: function() {
return z;
  },
  GP: function() {
return P;
  },
  H9: function() {
return X;
  },
  Lo: function() {
return V;
  },
  PK: function() {
return U;
  },
  R7: function() {
return F;
  },
  TT: function() {
return W;
  },
  UE: function() {
return x;
  },
  XZ: function() {
return k;
  },
  Xo: function() {
return Q;
  },
  _T: function() {
return D;
  },
  d9: function() {
return b;
  },
  mR: function() {
return v;
  },
  p9: function() {
return Z;
  },
  qs: function() {
return G;
  },
  rU: function() {
return Y;
  }
}), t(47120);
var r = t(470079),
  i = t(512722),
  o = t.n(i),
  l = t(392711),
  u = t(772848),
  a = t(866442),
  s = t(442837),
  c = t(80932),
  d = t(749210),
  _ = t(339085),
  E = t(73346),
  f = t(817460),
  I = t(423117),
  T = t(584825),
  S = t(289393),
  A = t(790285),
  N = t(303737),
  g = t(971792),
  p = t(22902),
  O = t(403474),
  C = t(944537),
  M = t(293810),
  R = t(981631),
  m = t(474936);

function L(e, n, t) {
  let i = (0, C.n)(e => e.setListing),
o = r.useCallback(r => {
  i(e, e => {
    var i;
    let o = null !== (i = null == e ? void 0 : e[n]) && void 0 !== i ? i : t;
    return Object.assign({}, e, {
      [n]: 'function' == typeof r ? r(o) : r
    });
  });
}, [
  i,
  e,
  n,
  t
]),
l = (0, C.n)(t => {
  var r;
  return null === (r = t.listings[e]) || void 0 === r ? void 0 : r[n];
});
  return [
void 0 !== l ? l : t,
o
  ];
}

function h(e, n) {
  let t = (0, s.e7)([S.Z], () => S.Z.getSubscriptionListing(e));
  return r.useMemo(() => n(t), [t]);
}

function D(e) {
  let n = h(e, e => {
var n;
return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '';
  });
  return L(e, 'name', n);
}

function v(e) {
  let n = h(e, e => {
var n;
return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
  });
  return L(e, 'priceTier', n);
}

function U(e) {
  let n = h(e, e => {
var n;
return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '';
  });
  return L(e, 'description', n);
}

function b(e, n) {
  let t = h(e, e => {
if ((null == e ? void 0 : e.image_asset) != null)
  return (0, E._W)(e.application_id, e.image_asset, n);
  });
  return L(e, 'image', t);
}

function Z(e, n) {
  let t = (0, g.Z)(n, e);
  return L(e, 'roleIcon', r.useMemo(() => {
var e, n;
return {
  icon: null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : void 0,
  unicodeEmoji: null !== (n = null == t ? void 0 : t.unicodeEmoji) && void 0 !== n ? n : void 0
};
  }, [t]));
}

function G(e, n) {
  let t = (0, g.Z)(n, e),
i = (0, C.n)(n => {
  var t;
  return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor;
}),
o = (0, C.n)(n => {
  var t;
  return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon;
});
  return r.useMemo(() => {
let e = {
  ...null != t ? t : O.k
};
if (void 0 !== o) {
  var n, r;
  e.icon = null !== (n = o.icon) && void 0 !== n ? n : '', e.unicodeEmoji = null !== (r = o.unicodeEmoji) && void 0 !== r ? r : '';
}
return void 0 !== i && (e.color = i, e.colorString = (0, a.Rf)(i)), e;
  }, [
t,
o,
i
  ]);
}

function y(e, n) {
  let t = (0, g.Z)(n, e);
  return L(e, 'roleColor', r.useMemo(() => {
var e;
return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : R.p6O;
  }, [t]));
}

function P(e, n) {
  let t = (0, g.Z)(n, e);
  return L(e, 'channelAccessFormat', r.useMemo(() => null == t ? C.I.SOME_CHANNELS_ACCESS : (0, A.MT)(t) ? C.I.ALL_CHANNELS_ACCESS : C.I.SOME_CHANNELS_ACCESS, [t]));
}
let j = [];

function x(e) {
  let n = h(e, e => null == e ? j : e.role_benefits.benefits.filter(f.rC));
  return L(e, 'channelBenefits', n);
}
let w = [];

function F(e) {
  let n = h(e, e => null == e ? w : e.role_benefits.benefits.filter(f.lL));
  return L(e, 'intangibleBenefits', n);
}
let B = new Set();

function H(e, n) {
  return 0 === e.length ? B : new Set(e.filter(e => e.roles.includes(n)).map(e => {
let {
  id: n
} = e;
return n;
  }));
}

function k(e, n) {
  let t = (0, g.Z)(n, e),
i = (0, s.Wu)([_.Z], () => _.Z.getGuildEmoji(n), [n]);
  return L(e, 'tierEmojiIds', r.useMemo(() => null == t ? B : H(i, t.id), [
i,
t
  ]));
}

function W(e) {
  var n;
  let t = (0, T.oC)(e),
{
  selectedOption: r
} = (0, p.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
  return L(e, 'trialInterval', null != r ? r : null);
}

function K(e) {
  var n;
  let t = (0, T.oC)(e);
  return L(e, 'trialLimit', null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null);
}

function Y(e) {
  return (0, C.n)(n => void 0 !== n.listings[e]);
}

function V(e) {
  return (0, C.n)(n => {
for (let t of e)
  if (void 0 !== n.listings[t])
    return !0;
return !1;
  });
}

function X(e) {
  let n = h(e, e => null == e ? void 0 : e.subscription_plans[0]),
[t] = L(e, 'priceTier', void 0);
  return [r.useMemo(() => {
var e, r, i, o, l;
return {
  price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
  currency: null !== (r = null == n ? void 0 : n.currency) && void 0 !== r ? r : R.pKx.USD,
  interval: null !== (i = null == n ? void 0 : n.interval) && void 0 !== i ? i : m.rV.MONTH,
  interval_count: null !== (o = null == n ? void 0 : n.interval_count) && void 0 !== o ? o : 1,
  id: null !== (l = null == n ? void 0 : n.id) && void 0 !== l ? l : ''
};
  }, [
n,
t
  ])];
}

function z(e) {
  var n;
  n = e, C.n.setState(e => ({
listings: {
  ...e.listings,
  [n]: e.listings.nonexistantEditStateId
}
  }));
}
async function q(e) {
  let {
guildId: n,
editStateId: t
  } = e, r = S.Z.getSubscriptionListing(t);
  o()(null != r, 'listing doesnt exist');
  let i = r.role_id,
u = r.id,
a = C.n.getState().listings[t];
  o()(null != a, 'edit state does not exist');
  let {
roleColor: s,
roleIcon: E,
trialLimit: f,
trialInterval: T,
tierEmojiIds: A
  } = a;
  (void 0 !== s || void 0 !== E) && await d.Z.updateRole(n, i, {
color: s,
icon: null == E ? void 0 : E.icon,
unicodeEmoji: null == E ? void 0 : E.unicodeEmoji
  });
  let N = S.Z.getSubscriptionTrial(u);
  if ((null != f || null != T || null != N && null == T) && await I.I1(n, u, {
  trial: T,
  max_num_active_trial_users: f
}), void 0 !== A) {
let e = H(_.Z.getGuildEmoji(n), i),
  t = (0, l.difference)([...A], [...e]),
  r = (0, l.difference)([...e], [...A]),
  o = t.map(e => _.Z.getCustomEmojiById(e)).map(e => {
    if (null != e)
      return (0, c.dv)({
        guildId: n,
        emojiId: e.id,
        roles: [
          ...e.roles,
          i
        ]
      });
  }),
  u = r.map(e => _.Z.getCustomEmojiById(e)).map(e => {
    if (null == e)
      return;
    let t = e.roles.filter(e => e !== i);
    return t.length > 0 ? (0, c.dv)({
      guildId: n,
      emojiId: e.id,
      roles: t
    }) : (0, c.RE)(n, e.id);
  });
await Promise.all([
  ...o,
  ...u
]);
  }
}
async function J(e) {
  let {
guildId: n,
editStateId: t,
groupListingId: r,
onBeforeDispatchNewListing: i
  } = e, l = C.n.getState().listings[t];
  o()(null != l, 'edit state does not exist');
  let {
name: u,
description: a,
channelBenefits: s,
intangibleBenefits: c,
priceTier: d,
image: _,
channelAccessFormat: E
  } = l;
  o()(null != u, 'no name provided'), o()(null != a, 'no description provided'), o()(null != d, 'no priceTier provided'), o()(null != _, 'no image provided');
  let f = E === C.I.ALL_CHANNELS_ACCESS,
T = r;
  null == T && (T = (await I.uw(n, {})).id), null != s && s.length > 0 && await (0, N.r4)(n, s);
  let S = [
  ...null != s ? s : [],
  ...null != c ? c : []
],
A = (0, N.yL)(t, n);
  return I.dA({
guildId: n,
groupListingId: T,
data: {
  can_access_all_channels: f,
  image: _,
  name: u,
  description: a,
  benefits: S,
  priceTier: d
},
analyticsContext: A,
onBeforeDispatchNewListing: i
  });
}

function Q() {
  let [e, n] = r.useState(!1), [t, i] = r.useState();
  return {
loading: e,
error: t,
handleCreateOrUpdateFromEditState: r.useCallback(async e => {
  let {
    guildId: t,
    editStateId: r,
    groupListingId: u,
    onBeforeDispatchNewListing: a,
    onAfterDispatchNewListing: s
  } = e, c = r, d = S.Z.getSubscriptionListing(c);
  try {
    if (n(!0), i(void 0), null != d)
      o()(null != u, 'groupListingId is null'), await
    function(e) {
      var n;
      let {
        guildId: t,
        editStateId: r,
        groupListingId: i
      } = e, u = S.Z.getSubscriptionListing(r);
      o()(null != u, 'listing doesnt exist');
      let a = C.n.getState().listings[r];
      o()(null != a, 'edit state does not exist');
      let {
        name: s,
        description: c,
        channelBenefits: d,
        intangibleBenefits: _,
        priceTier: E,
        image: T,
        channelAccessFormat: A
      } = a, N = {};
      if (s !== u.name && (N.name = s), c !== u.description && (N.description = c), E !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (N.priceTier = E), null != T && (N.image = T), null != A && (N.can_access_all_channels = A === C.I.ALL_CHANNELS_ACCESS), null != d || null != _) {
        let e = u.role_benefits.benefits.filter(f.rC),
          n = u.role_benefits.benefits.filter(f.lL),
          t = [
            ...null != d ? d : e,
            ...null != _ ? _ : n
          ];
        N.benefits = t;
      }
      return (0, l.isEmpty)(N) ? u : I.O0({
        guildId: t,
        groupListingId: i,
        listingId: r,
        data: N
      });
    }({
      guildId: t,
      editStateId: c,
      groupListingId: u
    });
    else {
      var _, E;
      let e = await J({
        guildId: t,
        editStateId: c,
        groupListingId: u,
        onBeforeDispatchNewListing: a
      });
      c = e.id, _ = r, E = c, C.n.setState(e => ({
        listings: {
          ...e.listings,
          [E]: e.listings[_],
          [_]: void 0
        }
      })), null == s || s(e);
    }
    return await q({
      guildId: t,
      editStateId: c
    }), z(c), !0;
  } catch (e) {
    if (!('getAnyErrorMessage' in e))
      throw e;
    i(e);
  } finally {
    n(!1);
  }
}, [])
  };
}

function $(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
  includeSoftDeleted: !1
},
i = (0, T._k)(e, t),
o = (0, C.n)(e => e.editStateIdsForGroup[n]),
l = (0, C.n)(e => e.setEditStateIdsForGroup),
a = (0, C.n)(e => e.setListing),
s = r.useMemo(() => [
  ...i.map(e => {
    let {
      id: n
    } = e;
    return n;
  }),
  ...null != o ? o : []
], [
  o,
  i
]),
c = r.useCallback(() => {
  let e = (0, u.Z)();
  l(n, n => [
    ...null != n ? n : [],
    e
  ]);
}, [
  n,
  l
]),
d = r.useCallback(e => {
  let t = (0, u.Z)();
  return l(n, e => [
    ...null != e ? e : [],
    t
  ]), e.listings.forEach(n => {
    a(t, () => ({
      name: n.name,
      description: n.description,
      priceTier: n.price_tier,
      image: n.image,
      intangibleBenefits: n.additional_perks,
      channelBenefits: n.channels.map(e => ({
        ref_id: e.id,
        ref_type: M.Qs.CHANNEL,
        description: e.description,
        name: e.name,
        emoji_name: e.emoji_name
      })),
      roleIcon: {
        unicodeEmoji: void 0,
        icon: n.image
      },
      roleColor: n.role_color,
      usedTemplate: e.category
    }));
  }), t;
}, [
  n,
  l,
  a
]);
  return {
editStateIds: s,
addNewEditStateId: c,
addNewEditStateFromTemplate: d,
removeEditStateId: r.useCallback(e => {
  l(n, n => (null != n ? n : []).filter(n => n !== e));
}, [
  n,
  l
])
  };
}