t.d(n, {
  B7: function() {
return $;
  },
  Ek: function() {
return y;
  },
  F2: function() {
return V;
  },
  GM: function() {
return q;
  },
  GP: function() {
return x;
  },
  H9: function() {
return z;
  },
  Lo: function() {
return K;
  },
  PK: function() {
return D;
  },
  R7: function() {
return F;
  },
  TT: function() {
return W;
  },
  UE: function() {
return w;
  },
  XZ: function() {
return H;
  },
  Xo: function() {
return Q;
  },
  _T: function() {
return O;
  },
  d9: function() {
return U;
  },
  mR: function() {
return b;
  },
  p9: function() {
return Z;
  },
  qs: function() {
return P;
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
  f = t(73346),
  E = t(817460),
  I = t(423117),
  g = t(584825),
  p = t(289393),
  S = t(790285),
  C = t(303737),
  T = t(971792),
  m = t(22902),
  A = t(403474),
  N = t(944537),
  h = t(293810),
  L = t(981631),
  R = t(474936);

function v(e, n, t) {
  let i = (0, N.n)(e => e.setListing),
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
l = (0, N.n)(t => {
  var r;
  return null === (r = t.listings[e]) || void 0 === r ? void 0 : r[n];
});
  return [
void 0 !== l ? l : t,
o
  ];
}

function M(e, n) {
  let t = (0, s.e7)([p.Z], () => p.Z.getSubscriptionListing(e));
  return r.useMemo(() => n(t), [t]);
}

function O(e) {
  let n = M(e, e => {
var n;
return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '';
  });
  return v(e, 'name', n);
}

function b(e) {
  let n = M(e, e => {
var n;
return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
  });
  return v(e, 'priceTier', n);
}

function D(e) {
  let n = M(e, e => {
var n;
return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '';
  });
  return v(e, 'description', n);
}

function U(e, n) {
  let t = M(e, e => {
if ((null == e ? void 0 : e.image_asset) != null)
  return (0, f._W)(e.application_id, e.image_asset, n);
  });
  return v(e, 'image', t);
}

function Z(e, n) {
  let t = (0, T.Z)(n, e);
  return v(e, 'roleIcon', r.useMemo(() => {
var e, n;
return {
  icon: null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : void 0,
  unicodeEmoji: null !== (n = null == t ? void 0 : t.unicodeEmoji) && void 0 !== n ? n : void 0
};
  }, [t]));
}

function P(e, n) {
  let t = (0, T.Z)(n, e),
i = (0, N.n)(n => {
  var t;
  return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor;
}),
o = (0, N.n)(n => {
  var t;
  return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon;
});
  return r.useMemo(() => {
let e = {
  ...null != t ? t : A.k
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
  let t = (0, T.Z)(n, e);
  return v(e, 'roleColor', r.useMemo(() => {
var e;
return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : L.p6O;
  }, [t]));
}

function x(e, n) {
  let t = (0, T.Z)(n, e);
  return v(e, 'channelAccessFormat', r.useMemo(() => null == t ? N.I.SOME_CHANNELS_ACCESS : (0, S.MT)(t) ? N.I.ALL_CHANNELS_ACCESS : N.I.SOME_CHANNELS_ACCESS, [t]));
}
let G = [];

function w(e) {
  let n = M(e, e => null == e ? G : e.role_benefits.benefits.filter(E.rC));
  return v(e, 'channelBenefits', n);
}
let j = [];

function F(e) {
  let n = M(e, e => null == e ? j : e.role_benefits.benefits.filter(E.lL));
  return v(e, 'intangibleBenefits', n);
}
let B = new Set();

function k(e, n) {
  return 0 === e.length ? B : new Set(e.filter(e => e.roles.includes(n)).map(e => {
let {
  id: n
} = e;
return n;
  }));
}

function H(e, n) {
  let t = (0, T.Z)(n, e),
i = (0, s.Wu)([_.Z], () => _.Z.getGuildEmoji(n), [n]);
  return v(e, 'tierEmojiIds', r.useMemo(() => null == t ? B : k(i, t.id), [
i,
t
  ]));
}

function W(e) {
  var n;
  let t = (0, g.oC)(e),
{
  selectedOption: r
} = (0, m.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
  return v(e, 'trialInterval', null != r ? r : null);
}

function V(e) {
  var n;
  let t = (0, g.oC)(e);
  return v(e, 'trialLimit', null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null);
}

function Y(e) {
  return (0, N.n)(n => void 0 !== n.listings[e]);
}

function K(e) {
  return (0, N.n)(n => {
for (let t of e)
  if (void 0 !== n.listings[t])
    return !0;
return !1;
  });
}

function z(e) {
  let n = M(e, e => null == e ? void 0 : e.subscription_plans[0]),
[t] = v(e, 'priceTier', void 0);
  return [r.useMemo(() => {
var e, r, i, o, l;
return {
  price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
  currency: null !== (r = null == n ? void 0 : n.currency) && void 0 !== r ? r : L.pKx.USD,
  interval: null !== (i = null == n ? void 0 : n.interval) && void 0 !== i ? i : R.rV.MONTH,
  interval_count: null !== (o = null == n ? void 0 : n.interval_count) && void 0 !== o ? o : 1,
  id: null !== (l = null == n ? void 0 : n.id) && void 0 !== l ? l : ''
};
  }, [
n,
t
  ])];
}

function q(e) {
  var n;
  n = e, N.n.setState(e => ({
listings: {
  ...e.listings,
  [n]: e.listings.nonexistantEditStateId
}
  }));
}
async function J(e) {
  let {
guildId: n,
editStateId: t
  } = e, r = p.Z.getSubscriptionListing(t);
  o()(null != r, 'listing doesnt exist');
  let i = r.role_id,
u = r.id,
a = N.n.getState().listings[t];
  o()(null != a, 'edit state does not exist');
  let {
roleColor: s,
roleIcon: f,
trialLimit: E,
trialInterval: g,
tierEmojiIds: S
  } = a;
  (void 0 !== s || void 0 !== f) && await d.Z.updateRole(n, i, {
color: s,
icon: null == f ? void 0 : f.icon,
unicodeEmoji: null == f ? void 0 : f.unicodeEmoji
  });
  let C = p.Z.getSubscriptionTrial(u);
  if ((null != E || null != g || null != C && null == g) && await I.I1(n, u, {
  trial: g,
  max_num_active_trial_users: E
}), void 0 !== S) {
let e = k(_.Z.getGuildEmoji(n), i),
  t = (0, l.difference)([...S], [...e]),
  r = (0, l.difference)([...e], [...S]),
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
async function X(e) {
  let {
guildId: n,
editStateId: t,
groupListingId: r,
onBeforeDispatchNewListing: i
  } = e, l = N.n.getState().listings[t];
  o()(null != l, 'edit state does not exist');
  let {
name: u,
description: a,
channelBenefits: s,
intangibleBenefits: c,
priceTier: d,
image: _,
channelAccessFormat: f
  } = l;
  o()(null != u, 'no name provided'), o()(null != a, 'no description provided'), o()(null != d, 'no priceTier provided'), o()(null != _, 'no image provided');
  let E = f === N.I.ALL_CHANNELS_ACCESS,
g = r;
  null == g && (g = (await I.uw(n, {})).id), null != s && s.length > 0 && await (0, C.r4)(n, s);
  let p = [
  ...null != s ? s : [],
  ...null != c ? c : []
],
S = (0, C.yL)(t, n);
  return I.dA({
guildId: n,
groupListingId: g,
data: {
  can_access_all_channels: E,
  image: _,
  name: u,
  description: a,
  benefits: p,
  priceTier: d
},
analyticsContext: S,
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
  } = e, c = r, d = p.Z.getSubscriptionListing(c);
  try {
    if (n(!0), i(void 0), null != d)
      o()(null != u, 'groupListingId is null'), await
    function(e) {
      var n;
      let {
        guildId: t,
        editStateId: r,
        groupListingId: i
      } = e, u = p.Z.getSubscriptionListing(r);
      o()(null != u, 'listing doesnt exist');
      let a = N.n.getState().listings[r];
      o()(null != a, 'edit state does not exist');
      let {
        name: s,
        description: c,
        channelBenefits: d,
        intangibleBenefits: _,
        priceTier: f,
        image: g,
        channelAccessFormat: S
      } = a, C = {};
      if (s !== u.name && (C.name = s), c !== u.description && (C.description = c), f !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (C.priceTier = f), null != g && (C.image = g), null != S && (C.can_access_all_channels = S === N.I.ALL_CHANNELS_ACCESS), null != d || null != _) {
        let e = u.role_benefits.benefits.filter(E.rC),
          n = u.role_benefits.benefits.filter(E.lL),
          t = [
            ...null != d ? d : e,
            ...null != _ ? _ : n
          ];
        C.benefits = t;
      }
      return (0, l.isEmpty)(C) ? u : I.O0({
        guildId: t,
        groupListingId: i,
        listingId: r,
        data: C
      });
    }({
      guildId: t,
      editStateId: c,
      groupListingId: u
    });
    else {
      var _, f;
      let e = await X({
        guildId: t,
        editStateId: c,
        groupListingId: u,
        onBeforeDispatchNewListing: a
      });
      c = e.id, _ = r, f = c, N.n.setState(e => ({
        listings: {
          ...e.listings,
          [f]: e.listings[_],
          [_]: void 0
        }
      })), null == s || s(e);
    }
    return await J({
      guildId: t,
      editStateId: c
    }), q(c), !0;
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
i = (0, g._k)(e, t),
o = (0, N.n)(e => e.editStateIdsForGroup[n]),
l = (0, N.n)(e => e.setEditStateIdsForGroup),
a = (0, N.n)(e => e.setListing),
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
        ref_type: h.Qs.CHANNEL,
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