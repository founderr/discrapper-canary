t.d(n, {
  B7: function() {
    return $
  },
  Ek: function() {
    return O
  },
  F2: function() {
    return V
  },
  GM: function() {
    return Q
  },
  GP: function() {
    return j
  },
  H9: function() {
    return z
  },
  Lo: function() {
    return K
  },
  PK: function() {
    return h
  },
  R7: function() {
    return x
  },
  TT: function() {
    return F
  },
  UE: function() {
    return y
  },
  XZ: function() {
    return k
  },
  Xo: function() {
    return J
  },
  _T: function() {
    return T
  },
  d9: function() {
    return B
  },
  mR: function() {
    return U
  },
  p9: function() {
    return G
  },
  qs: function() {
    return H
  },
  rU: function() {
    return W
  }
}), t(47120);
var i = t(470079),
  l = t(512722),
  r = t.n(l),
  u = t(392711),
  o = t(772848),
  s = t(866442),
  a = t(442837),
  c = t(80932),
  _ = t(749210),
  d = t(339085),
  E = t(73346),
  f = t(817460),
  A = t(423117),
  I = t(584825),
  L = t(289393),
  v = t(790285),
  m = t(303737),
  C = t(971792),
  g = t(22902),
  N = t(403474),
  S = t(944537),
  p = t(293810),
  Z = t(981631),
  D = t(474936);

function M(e, n, t) {
  let l = (0, S.n)(e => e.setListing),
    r = i.useCallback(i => {
      l(e, e => {
        var l;
        let r = null !== (l = null == e ? void 0 : e[n]) && void 0 !== l ? l : t;
        return Object.assign({}, e, {
          [n]: "function" == typeof i ? i(r) : i
        })
      })
    }, [l, e, n, t]),
    u = (0, S.n)(t => {
      var i;
      return null === (i = t.listings[e]) || void 0 === i ? void 0 : i[n]
    });
  return [void 0 !== u ? u : t, r]
}

function R(e, n) {
  let t = (0, a.e7)([L.Z], () => L.Z.getSubscriptionListing(e));
  return i.useMemo(() => n(t), [t])
}

function T(e) {
  let n = R(e, e => {
    var n;
    return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : ""
  });
  return M(e, "name", n)
}

function U(e) {
  let n = R(e, e => {
    var n;
    return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price
  });
  return M(e, "priceTier", n)
}

function h(e) {
  let n = R(e, e => {
    var n;
    return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : ""
  });
  return M(e, "description", n)
}

function B(e, n) {
  let t = R(e, e => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, E._W)(e.application_id, e.image_asset, n)
  });
  return M(e, "image", t)
}

function G(e, n) {
  let t = (0, C.Z)(n, e);
  return M(e, "roleIcon", i.useMemo(() => {
    var e, n;
    return {
      icon: null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : void 0,
      unicodeEmoji: null !== (n = null == t ? void 0 : t.unicodeEmoji) && void 0 !== n ? n : void 0
    }
  }, [t]))
}

function H(e, n) {
  let t = (0, C.Z)(n, e),
    l = (0, S.n)(n => {
      var t;
      return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor
    }),
    r = (0, S.n)(n => {
      var t;
      return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon
    });
  return i.useMemo(() => {
    let e = {
      ...null != t ? t : N.k
    };
    if (void 0 !== r) {
      var n, i;
      e.icon = null !== (n = r.icon) && void 0 !== n ? n : "", e.unicodeEmoji = null !== (i = r.unicodeEmoji) && void 0 !== i ? i : ""
    }
    return void 0 !== l && (e.color = l, e.colorString = (0, s.Rf)(l)), e
  }, [t, r, l])
}

function O(e, n) {
  let t = (0, C.Z)(n, e);
  return M(e, "roleColor", i.useMemo(() => {
    var e;
    return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : Z.p6O
  }, [t]))
}

function j(e, n) {
  let t = (0, C.Z)(n, e);
  return M(e, "channelAccessFormat", i.useMemo(() => null == t ? S.I.SOME_CHANNELS_ACCESS : (0, v.MT)(t) ? S.I.ALL_CHANNELS_ACCESS : S.I.SOME_CHANNELS_ACCESS, [t]))
}
let b = [];

function y(e) {
  let n = R(e, e => null == e ? b : e.role_benefits.benefits.filter(f.rC));
  return M(e, "channelBenefits", n)
}
let w = [];

function x(e) {
  let n = R(e, e => null == e ? w : e.role_benefits.benefits.filter(f.lL));
  return M(e, "intangibleBenefits", n)
}
let P = new Set;

function Y(e, n) {
  return 0 === e.length ? P : new Set(e.filter(e => e.roles.includes(n)).map(e => {
    let {
      id: n
    } = e;
    return n
  }))
}

function k(e, n) {
  let t = (0, C.Z)(n, e),
    l = (0, a.Wu)([d.Z], () => d.Z.getGuildEmoji(n), [n]);
  return M(e, "tierEmojiIds", i.useMemo(() => null == t ? P : Y(l, t.id), [l, t]))
}

function F(e) {
  var n;
  let t = (0, I.oC)(e),
    {
      selectedOption: i
    } = (0, g.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
  return M(e, "trialInterval", null != i ? i : null)
}

function V(e) {
  var n;
  let t = (0, I.oC)(e);
  return M(e, "trialLimit", null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null)
}

function W(e) {
  return (0, S.n)(n => void 0 !== n.listings[e])
}

function K(e) {
  return (0, S.n)(n => {
    for (let t of e)
      if (void 0 !== n.listings[t]) return !0;
    return !1
  })
}

function z(e) {
  let n = R(e, e => null == e ? void 0 : e.subscription_plans[0]),
    [t] = M(e, "priceTier", void 0);
  return [i.useMemo(() => {
    var e, i, l, r, u;
    return {
      price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
      currency: null !== (i = null == n ? void 0 : n.currency) && void 0 !== i ? i : Z.pKx.USD,
      interval: null !== (l = null == n ? void 0 : n.interval) && void 0 !== l ? l : D.rV.MONTH,
      interval_count: null !== (r = null == n ? void 0 : n.interval_count) && void 0 !== r ? r : 1,
      id: null !== (u = null == n ? void 0 : n.id) && void 0 !== u ? u : ""
    }
  }, [n, t])]
}

function Q(e) {
  var n;
  n = e, S.n.setState(e => ({
    listings: {
      ...e.listings,
      [n]: e.listings.nonexistantEditStateId
    }
  }))
}
async function X(e) {
  let {
    guildId: n,
    editStateId: t
  } = e, i = L.Z.getSubscriptionListing(t);
  r()(null != i, "listing doesnt exist");
  let l = i.role_id,
    o = i.id,
    s = S.n.getState().listings[t];
  r()(null != s, "edit state does not exist");
  let {
    roleColor: a,
    roleIcon: E,
    trialLimit: f,
    trialInterval: I,
    tierEmojiIds: v
  } = s;
  (void 0 !== a || void 0 !== E) && await _.Z.updateRole(n, l, {
    color: a,
    icon: null == E ? void 0 : E.icon,
    unicodeEmoji: null == E ? void 0 : E.unicodeEmoji
  });
  let m = L.Z.getSubscriptionTrial(o);
  if ((null != f || null != I || null != m && null == I) && await A.I1(n, o, {
      trial: I,
      max_num_active_trial_users: f
    }), void 0 !== v) {
    let e = Y(d.Z.getGuildEmoji(n), l),
      t = (0, u.difference)([...v], [...e]),
      i = (0, u.difference)([...e], [...v]),
      r = t.map(e => d.Z.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, c.dv)({
          guildId: n,
          emojiId: e.id,
          roles: [...e.roles, l]
        })
      }),
      o = i.map(e => d.Z.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let t = e.roles.filter(e => e !== l);
        return t.length > 0 ? (0, c.dv)({
          guildId: n,
          emojiId: e.id,
          roles: t
        }) : (0, c.RE)(n, e.id)
      });
    await Promise.all([...r, ...o])
  }
}
async function q(e) {
  let {
    guildId: n,
    editStateId: t,
    groupListingId: i,
    onBeforeDispatchNewListing: l
  } = e, u = S.n.getState().listings[t];
  r()(null != u, "edit state does not exist");
  let {
    name: o,
    description: s,
    channelBenefits: a,
    intangibleBenefits: c,
    priceTier: _,
    image: d,
    channelAccessFormat: E
  } = u;
  r()(null != o, "no name provided"), r()(null != s, "no description provided"), r()(null != _, "no priceTier provided"), r()(null != d, "no image provided");
  let f = E === S.I.ALL_CHANNELS_ACCESS,
    I = i;
  null == I && (I = (await A.uw(n, {})).id), null != a && a.length > 0 && await (0, m.r4)(n, a);
  let L = [...null != a ? a : [], ...null != c ? c : []],
    v = (0, m.yL)(t, n);
  return A.dA({
    guildId: n,
    groupListingId: I,
    data: {
      can_access_all_channels: f,
      image: d,
      name: o,
      description: s,
      benefits: L,
      priceTier: _
    },
    analyticsContext: v,
    onBeforeDispatchNewListing: l
  })
}

function J() {
  let [e, n] = i.useState(!1), [t, l] = i.useState();
  return {
    loading: e,
    error: t,
    handleCreateOrUpdateFromEditState: i.useCallback(async e => {
      let {
        guildId: t,
        editStateId: i,
        groupListingId: o,
        onBeforeDispatchNewListing: s,
        onAfterDispatchNewListing: a
      } = e, c = i, _ = L.Z.getSubscriptionListing(c);
      try {
        if (n(!0), l(void 0), null != _) r()(null != o, "groupListingId is null"), await

        function(e) {
          var n;
          let {
            guildId: t,
            editStateId: i,
            groupListingId: l
          } = e, o = L.Z.getSubscriptionListing(i);
          r()(null != o, "listing doesnt exist");
          let s = S.n.getState().listings[i];
          r()(null != s, "edit state does not exist");
          let {
            name: a,
            description: c,
            channelBenefits: _,
            intangibleBenefits: d,
            priceTier: E,
            image: I,
            channelAccessFormat: v
          } = s, m = {};
          if (a !== o.name && (m.name = a), c !== o.description && (m.description = c), E !== (null === (n = o.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (m.priceTier = E), null != I && (m.image = I), null != v && (m.can_access_all_channels = v === S.I.ALL_CHANNELS_ACCESS), null != _ || null != d) {
            let e = o.role_benefits.benefits.filter(f.rC),
              n = o.role_benefits.benefits.filter(f.lL),
              t = [...null != _ ? _ : e, ...null != d ? d : n];
            m.benefits = t
          }
          return (0, u.isEmpty)(m) ? o : A.O0({
            guildId: t,
            groupListingId: l,
            listingId: i,
            data: m
          })
        }({
          guildId: t,
          editStateId: c,
          groupListingId: o
        });
        else {
          var d, E;
          let e = await q({
            guildId: t,
            editStateId: c,
            groupListingId: o,
            onBeforeDispatchNewListing: s
          });
          c = e.id, d = i, E = c, S.n.setState(e => ({
            listings: {
              ...e.listings,
              [E]: e.listings[d],
              [d]: void 0
            }
          })), null == a || a(e)
        }
        return await X({
          guildId: t,
          editStateId: c
        }), Q(c), !0
      } catch (e) {
        if (!("getAnyErrorMessage" in e)) throw e;
        l(e)
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
    l = (0, I._k)(e, t),
    r = (0, S.n)(e => e.editStateIdsForGroup[n]),
    u = (0, S.n)(e => e.setEditStateIdsForGroup),
    s = (0, S.n)(e => e.setListing),
    a = i.useMemo(() => [...l.map(e => {
      let {
        id: n
      } = e;
      return n
    }), ...null != r ? r : []], [r, l]),
    c = i.useCallback(() => {
      let e = (0, o.Z)();
      u(n, n => [...null != n ? n : [], e])
    }, [n, u]),
    _ = i.useCallback(e => {
      let t = (0, o.Z)();
      return u(n, e => [...null != e ? e : [], t]), e.listings.forEach(n => {
        s(t, () => ({
          name: n.name,
          description: n.description,
          priceTier: n.price_tier,
          image: n.image,
          intangibleBenefits: n.additional_perks,
          channelBenefits: n.channels.map(e => ({
            ref_id: e.id,
            ref_type: p.Qs.CHANNEL,
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
    }, [n, u, s]);
  return {
    editStateIds: a,
    addNewEditStateId: c,
    addNewEditStateFromTemplate: _,
    removeEditStateId: i.useCallback(e => {
      u(n, n => (null != n ? n : []).filter(n => n !== e))
    }, [n, u])
  }
}