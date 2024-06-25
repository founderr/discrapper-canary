t.d(n, {
  B7: function() {
    return $
  },
  Ek: function() {
    return U
  },
  F2: function() {
    return Y
  },
  GM: function() {
    return J
  },
  GP: function() {
    return G
  },
  H9: function() {
    return z
  },
  Lo: function() {
    return K
  },
  PK: function() {
    return D
  },
  R7: function() {
    return w
  },
  TT: function() {
    return W
  },
  UE: function() {
    return B
  },
  XZ: function() {
    return H
  },
  Xo: function() {
    return X
  },
  _T: function() {
    return O
  },
  d9: function() {
    return b
  },
  mR: function() {
    return Z
  },
  p9: function() {
    return P
  },
  qs: function() {
    return x
  },
  rU: function() {
    return V
  }
}), t(47120);
var i = t(470079),
  r = t(512722),
  l = t.n(r),
  o = t(392711),
  u = t(772848),
  s = t(866442),
  a = t(442837),
  c = t(80932),
  d = t(749210),
  _ = t(339085),
  f = t(73346),
  E = t(817460),
  I = t(423117),
  g = t(584825),
  S = t(289393),
  p = t(790285),
  m = t(303737),
  C = t(971792),
  T = t(22902),
  N = t(403474),
  A = t(944537),
  v = t(293810),
  h = t(981631),
  R = t(474936);

function L(e, n, t) {
  let r = (0, A.n)(e => e.setListing),
    l = i.useCallback(i => {
      r(e, e => {
        var r;
        let l = null !== (r = null == e ? void 0 : e[n]) && void 0 !== r ? r : t;
        return Object.assign({}, e, {
          [n]: "function" == typeof i ? i(l) : i
        })
      })
    }, [r, e, n, t]),
    o = (0, A.n)(t => {
      var i;
      return null === (i = t.listings[e]) || void 0 === i ? void 0 : i[n]
    });
  return [void 0 !== o ? o : t, l]
}

function M(e, n) {
  let t = (0, a.e7)([S.Z], () => S.Z.getSubscriptionListing(e));
  return i.useMemo(() => n(t), [t])
}

function O(e) {
  let n = M(e, e => {
    var n;
    return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : ""
  });
  return L(e, "name", n)
}

function Z(e) {
  let n = M(e, e => {
    var n;
    return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price
  });
  return L(e, "priceTier", n)
}

function D(e) {
  let n = M(e, e => {
    var n;
    return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : ""
  });
  return L(e, "description", n)
}

function b(e, n) {
  let t = M(e, e => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, f._W)(e.application_id, e.image_asset, n)
  });
  return L(e, "image", t)
}

function P(e, n) {
  let t = (0, C.Z)(n, e);
  return L(e, "roleIcon", i.useMemo(() => {
    var e, n;
    return {
      icon: null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : void 0,
      unicodeEmoji: null !== (n = null == t ? void 0 : t.unicodeEmoji) && void 0 !== n ? n : void 0
    }
  }, [t]))
}

function x(e, n) {
  let t = (0, C.Z)(n, e),
    r = (0, A.n)(n => {
      var t;
      return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor
    }),
    l = (0, A.n)(n => {
      var t;
      return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon
    });
  return i.useMemo(() => {
    let e = {
      ...null != t ? t : N.k
    };
    if (void 0 !== l) {
      var n, i;
      e.icon = null !== (n = l.icon) && void 0 !== n ? n : "", e.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : ""
    }
    return void 0 !== r && (e.color = r, e.colorString = (0, s.Rf)(r)), e
  }, [t, l, r])
}

function U(e, n) {
  let t = (0, C.Z)(n, e);
  return L(e, "roleColor", i.useMemo(() => {
    var e;
    return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : h.p6O
  }, [t]))
}

function G(e, n) {
  let t = (0, C.Z)(n, e);
  return L(e, "channelAccessFormat", i.useMemo(() => null == t ? A.I.SOME_CHANNELS_ACCESS : (0, p.MT)(t) ? A.I.ALL_CHANNELS_ACCESS : A.I.SOME_CHANNELS_ACCESS, [t]))
}
let j = [];

function B(e) {
  let n = M(e, e => null == e ? j : e.role_benefits.benefits.filter(E.rC));
  return L(e, "channelBenefits", n)
}
let y = [];

function w(e) {
  let n = M(e, e => null == e ? y : e.role_benefits.benefits.filter(E.lL));
  return L(e, "intangibleBenefits", n)
}
let F = new Set;

function k(e, n) {
  return 0 === e.length ? F : new Set(e.filter(e => e.roles.includes(n)).map(e => {
    let {
      id: n
    } = e;
    return n
  }))
}

function H(e, n) {
  let t = (0, C.Z)(n, e),
    r = (0, a.Wu)([_.Z], () => _.Z.getGuildEmoji(n), [n]);
  return L(e, "tierEmojiIds", i.useMemo(() => null == t ? F : k(r, t.id), [r, t]))
}

function W(e) {
  var n;
  let t = (0, g.oC)(e),
    {
      selectedOption: i
    } = (0, T.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
  return L(e, "trialInterval", null != i ? i : null)
}

function Y(e) {
  var n;
  let t = (0, g.oC)(e);
  return L(e, "trialLimit", null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null)
}

function V(e) {
  return (0, A.n)(n => void 0 !== n.listings[e])
}

function K(e) {
  return (0, A.n)(n => {
    for (let t of e)
      if (void 0 !== n.listings[t]) return !0;
    return !1
  })
}

function z(e) {
  let n = M(e, e => null == e ? void 0 : e.subscription_plans[0]),
    [t] = L(e, "priceTier", void 0);
  return [i.useMemo(() => {
    var e, i, r, l, o;
    return {
      price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
      currency: null !== (i = null == n ? void 0 : n.currency) && void 0 !== i ? i : h.pKx.USD,
      interval: null !== (r = null == n ? void 0 : n.interval) && void 0 !== r ? r : R.rV.MONTH,
      interval_count: null !== (l = null == n ? void 0 : n.interval_count) && void 0 !== l ? l : 1,
      id: null !== (o = null == n ? void 0 : n.id) && void 0 !== o ? o : ""
    }
  }, [n, t])]
}

function J(e) {
  var n;
  n = e, A.n.setState(e => ({
    listings: {
      ...e.listings,
      [n]: e.listings.nonexistantEditStateId
    }
  }))
}
async function q(e) {
  let {
    guildId: n,
    editStateId: t
  } = e, i = S.Z.getSubscriptionListing(t);
  l()(null != i, "listing doesnt exist");
  let r = i.role_id,
    u = i.id,
    s = A.n.getState().listings[t];
  l()(null != s, "edit state does not exist");
  let {
    roleColor: a,
    roleIcon: f,
    trialLimit: E,
    trialInterval: g,
    tierEmojiIds: p
  } = s;
  (void 0 !== a || void 0 !== f) && await d.Z.updateRole(n, r, {
    color: a,
    icon: null == f ? void 0 : f.icon,
    unicodeEmoji: null == f ? void 0 : f.unicodeEmoji
  });
  let m = S.Z.getSubscriptionTrial(u);
  if ((null != E || null != g || null != m && null == g) && await I.I1(n, u, {
      trial: g,
      max_num_active_trial_users: E
    }), void 0 !== p) {
    let e = k(_.Z.getGuildEmoji(n), r),
      t = (0, o.difference)([...p], [...e]),
      i = (0, o.difference)([...e], [...p]),
      l = t.map(e => _.Z.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, c.dv)({
          guildId: n,
          emojiId: e.id,
          roles: [...e.roles, r]
        })
      }),
      u = i.map(e => _.Z.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let t = e.roles.filter(e => e !== r);
        return t.length > 0 ? (0, c.dv)({
          guildId: n,
          emojiId: e.id,
          roles: t
        }) : (0, c.RE)(n, e.id)
      });
    await Promise.all([...l, ...u])
  }
}
async function Q(e) {
  let {
    guildId: n,
    editStateId: t,
    groupListingId: i,
    onBeforeDispatchNewListing: r
  } = e, o = A.n.getState().listings[t];
  l()(null != o, "edit state does not exist");
  let {
    name: u,
    description: s,
    channelBenefits: a,
    intangibleBenefits: c,
    priceTier: d,
    image: _,
    channelAccessFormat: f
  } = o;
  l()(null != u, "no name provided"), l()(null != s, "no description provided"), l()(null != d, "no priceTier provided"), l()(null != _, "no image provided");
  let E = f === A.I.ALL_CHANNELS_ACCESS,
    g = i;
  null == g && (g = (await I.uw(n, {})).id), null != a && a.length > 0 && await (0, m.r4)(n, a);
  let S = [...null != a ? a : [], ...null != c ? c : []],
    p = (0, m.yL)(t, n);
  return I.dA({
    guildId: n,
    groupListingId: g,
    data: {
      can_access_all_channels: E,
      image: _,
      name: u,
      description: s,
      benefits: S,
      priceTier: d
    },
    analyticsContext: p,
    onBeforeDispatchNewListing: r
  })
}

function X() {
  let [e, n] = i.useState(!1), [t, r] = i.useState();
  return {
    loading: e,
    error: t,
    handleCreateOrUpdateFromEditState: i.useCallback(async e => {
      let {
        guildId: t,
        editStateId: i,
        groupListingId: u,
        onBeforeDispatchNewListing: s,
        onAfterDispatchNewListing: a
      } = e, c = i, d = S.Z.getSubscriptionListing(c);
      try {
        if (n(!0), r(void 0), null != d) l()(null != u, "groupListingId is null"), await

        function(e) {
          var n;
          let {
            guildId: t,
            editStateId: i,
            groupListingId: r
          } = e, u = S.Z.getSubscriptionListing(i);
          l()(null != u, "listing doesnt exist");
          let s = A.n.getState().listings[i];
          l()(null != s, "edit state does not exist");
          let {
            name: a,
            description: c,
            channelBenefits: d,
            intangibleBenefits: _,
            priceTier: f,
            image: g,
            channelAccessFormat: p
          } = s, m = {};
          if (a !== u.name && (m.name = a), c !== u.description && (m.description = c), f !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (m.priceTier = f), null != g && (m.image = g), null != p && (m.can_access_all_channels = p === A.I.ALL_CHANNELS_ACCESS), null != d || null != _) {
            let e = u.role_benefits.benefits.filter(E.rC),
              n = u.role_benefits.benefits.filter(E.lL),
              t = [...null != d ? d : e, ...null != _ ? _ : n];
            m.benefits = t
          }
          return (0, o.isEmpty)(m) ? u : I.O0({
            guildId: t,
            groupListingId: r,
            listingId: i,
            data: m
          })
        }({
          guildId: t,
          editStateId: c,
          groupListingId: u
        });
        else {
          var _, f;
          let e = await Q({
            guildId: t,
            editStateId: c,
            groupListingId: u,
            onBeforeDispatchNewListing: s
          });
          c = e.id, _ = i, f = c, A.n.setState(e => ({
            listings: {
              ...e.listings,
              [f]: e.listings[_],
              [_]: void 0
            }
          })), null == a || a(e)
        }
        return await q({
          guildId: t,
          editStateId: c
        }), J(c), !0
      } catch (e) {
        if (!("getAnyErrorMessage" in e)) throw e;
        r(e)
      } finally {
        n(!1)
      }
    }, [])
  }
}

function $(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: !1
    },
    r = (0, g._k)(e, t),
    l = (0, A.n)(e => e.editStateIdsForGroup[n]),
    o = (0, A.n)(e => e.setEditStateIdsForGroup),
    s = (0, A.n)(e => e.setListing),
    a = i.useMemo(() => [...r.map(e => {
      let {
        id: n
      } = e;
      return n
    }), ...null != l ? l : []], [l, r]),
    c = i.useCallback(() => {
      let e = (0, u.Z)();
      o(n, n => [...null != n ? n : [], e])
    }, [n, o]),
    d = i.useCallback(e => {
      let t = (0, u.Z)();
      return o(n, e => [...null != e ? e : [], t]), e.listings.forEach(n => {
        s(t, () => ({
          name: n.name,
          description: n.description,
          priceTier: n.price_tier,
          image: n.image,
          intangibleBenefits: n.additional_perks,
          channelBenefits: n.channels.map(e => ({
            ref_id: e.id,
            ref_type: v.Qs.CHANNEL,
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
        }))
      }), t
    }, [n, o, s]);
  return {
    editStateIds: a,
    addNewEditStateId: c,
    addNewEditStateFromTemplate: d,
    removeEditStateId: i.useCallback(e => {
      o(n, n => (null != n ? n : []).filter(n => n !== e))
    }, [n, o])
  }
}