S.d(e, {
  B7: function() {
    return $
  },
  Ek: function() {
    return B
  },
  F2: function() {
    return x
  },
  GM: function() {
    return z
  },
  GP: function() {
    return H
  },
  H9: function() {
    return k
  },
  Lo: function() {
    return X
  },
  PK: function() {
    return m
  },
  R7: function() {
    return w
  },
  TT: function() {
    return j
  },
  UE: function() {
    return Y
  },
  XZ: function() {
    return y
  },
  Xo: function() {
    return J
  },
  _T: function() {
    return p
  },
  d9: function() {
    return v
  },
  mR: function() {
    return G
  },
  p9: function() {
    return Z
  },
  qs: function() {
    return h
  },
  rU: function() {
    return F
  }
}), S(47120);
var _ = S(470079),
  t = S(512722),
  n = S.n(t),
  i = S(392711),
  l = S(772848),
  I = S(866442),
  r = S(442837),
  s = S(80932),
  N = S(749210),
  o = S(339085),
  A = S(73346),
  R = S(817460),
  O = S(423117),
  u = S(584825),
  a = S(289393),
  P = S(790285),
  M = S(303737),
  T = S(971792),
  C = S(22902),
  L = S(403474),
  c = S(944537),
  D = S(293810),
  d = S(981631),
  f = S(474936);

function g(E, e, S) {
  let t = (0, c.n)(E => E.setListing),
    n = _.useCallback(_ => {
      t(E, E => {
        var t;
        let n = null !== (t = null == E ? void 0 : E[e]) && void 0 !== t ? t : S;
        return Object.assign({}, E, {
          [e]: "function" == typeof _ ? _(n) : _
        })
      })
    }, [t, E, e, S]),
    i = (0, c.n)(S => {
      var _;
      return null === (_ = S.listings[E]) || void 0 === _ ? void 0 : _[e]
    });
  return [void 0 !== i ? i : S, n]
}

function U(E, e) {
  let S = (0, r.e7)([a.Z], () => a.Z.getSubscriptionListing(E));
  return _.useMemo(() => e(S), [S])
}

function p(E) {
  let e = U(E, E => {
    var e;
    return null !== (e = null == E ? void 0 : E.name) && void 0 !== e ? e : ""
  });
  return g(E, "name", e)
}

function G(E) {
  let e = U(E, E => {
    var e;
    return null == E ? void 0 : null === (e = E.subscription_plans[0]) || void 0 === e ? void 0 : e.price
  });
  return g(E, "priceTier", e)
}

function m(E) {
  let e = U(E, E => {
    var e;
    return null !== (e = null == E ? void 0 : E.description) && void 0 !== e ? e : ""
  });
  return g(E, "description", e)
}

function v(E, e) {
  let S = U(E, E => {
    if ((null == E ? void 0 : E.image_asset) != null) return (0, A._W)(E.application_id, E.image_asset, e)
  });
  return g(E, "image", S)
}

function Z(E, e) {
  let S = (0, T.Z)(e, E);
  return g(E, "roleIcon", _.useMemo(() => {
    var E, e;
    return {
      icon: null !== (E = null == S ? void 0 : S.icon) && void 0 !== E ? E : void 0,
      unicodeEmoji: null !== (e = null == S ? void 0 : S.unicodeEmoji) && void 0 !== e ? e : void 0
    }
  }, [S]))
}

function h(E, e) {
  let S = (0, T.Z)(e, E),
    t = (0, c.n)(e => {
      var S;
      return null === (S = e.listings[E]) || void 0 === S ? void 0 : S.roleColor
    }),
    n = (0, c.n)(e => {
      var S;
      return null === (S = e.listings[E]) || void 0 === S ? void 0 : S.roleIcon
    });
  return _.useMemo(() => {
    let E = {
      ...null != S ? S : L.k
    };
    if (void 0 !== n) {
      var e, _;
      E.icon = null !== (e = n.icon) && void 0 !== e ? e : "", E.unicodeEmoji = null !== (_ = n.unicodeEmoji) && void 0 !== _ ? _ : ""
    }
    return void 0 !== t && (E.color = t, E.colorString = (0, I.Rf)(t)), E
  }, [S, n, t])
}

function B(E, e) {
  let S = (0, T.Z)(e, E);
  return g(E, "roleColor", _.useMemo(() => {
    var E;
    return null !== (E = null == S ? void 0 : S.color) && void 0 !== E ? E : d.p6O
  }, [S]))
}

function H(E, e) {
  let S = (0, T.Z)(e, E);
  return g(E, "channelAccessFormat", _.useMemo(() => null == S ? c.I.SOME_CHANNELS_ACCESS : (0, P.MT)(S) ? c.I.ALL_CHANNELS_ACCESS : c.I.SOME_CHANNELS_ACCESS, [S]))
}
let V = [];

function Y(E) {
  let e = U(E, E => null == E ? V : E.role_benefits.benefits.filter(R.rC));
  return g(E, "channelBenefits", e)
}
let K = [];

function w(E) {
  let e = U(E, E => null == E ? K : E.role_benefits.benefits.filter(R.lL));
  return g(E, "intangibleBenefits", e)
}
let W = new Set;

function b(E, e) {
  return 0 === E.length ? W : new Set(E.filter(E => E.roles.includes(e)).map(E => {
    let {
      id: e
    } = E;
    return e
  }))
}

function y(E, e) {
  let S = (0, T.Z)(e, E),
    t = (0, r.Wu)([o.Z], () => o.Z.getGuildEmoji(e), [e]);
  return g(E, "tierEmojiIds", _.useMemo(() => null == S ? W : b(t, S.id), [t, S]))
}

function j(E) {
  var e;
  let S = (0, u.oC)(E),
    {
      selectedOption: _
    } = (0, C.Z)(null !== (e = null == S ? void 0 : S.active_trial) && void 0 !== e ? e : null);
  return g(E, "trialInterval", null != _ ? _ : null)
}

function x(E) {
  var e;
  let S = (0, u.oC)(E);
  return g(E, "trialLimit", null !== (e = null == S ? void 0 : S.max_num_active_trial_users) && void 0 !== e ? e : null)
}

function F(E) {
  return (0, c.n)(e => void 0 !== e.listings[E])
}

function X(E) {
  return (0, c.n)(e => {
    for (let S of E)
      if (void 0 !== e.listings[S]) return !0;
    return !1
  })
}

function k(E) {
  let e = U(E, E => null == E ? void 0 : E.subscription_plans[0]),
    [S] = g(E, "priceTier", void 0);
  return [_.useMemo(() => {
    var E, _, t, n, i;
    return {
      price: null !== (E = null != S ? S : null == e ? void 0 : e.price) && void 0 !== E ? E : 0,
      currency: null !== (_ = null == e ? void 0 : e.currency) && void 0 !== _ ? _ : d.pKx.USD,
      interval: null !== (t = null == e ? void 0 : e.interval) && void 0 !== t ? t : f.rV.MONTH,
      interval_count: null !== (n = null == e ? void 0 : e.interval_count) && void 0 !== n ? n : 1,
      id: null !== (i = null == e ? void 0 : e.id) && void 0 !== i ? i : ""
    }
  }, [e, S])]
}

function z(E) {
  var e;
  e = E, c.n.setState(E => ({
    listings: {
      ...E.listings,
      [e]: E.listings.nonexistantEditStateId
    }
  }))
}
async function Q(E) {
  let {
    guildId: e,
    editStateId: S
  } = E, _ = a.Z.getSubscriptionListing(S);
  n()(null != _, "listing doesnt exist");
  let t = _.role_id,
    l = _.id,
    I = c.n.getState().listings[S];
  n()(null != I, "edit state does not exist");
  let {
    roleColor: r,
    roleIcon: A,
    trialLimit: R,
    trialInterval: u,
    tierEmojiIds: P
  } = I;
  (void 0 !== r || void 0 !== A) && await N.Z.updateRole(e, t, {
    color: r,
    icon: null == A ? void 0 : A.icon,
    unicodeEmoji: null == A ? void 0 : A.unicodeEmoji
  });
  let M = a.Z.getSubscriptionTrial(l);
  if ((null != R || null != u || null != M && null == u) && await O.I1(e, l, {
      trial: u,
      max_num_active_trial_users: R
    }), void 0 !== P) {
    let E = b(o.Z.getGuildEmoji(e), t),
      S = (0, i.difference)([...P], [...E]),
      _ = (0, i.difference)([...E], [...P]),
      n = S.map(E => o.Z.getCustomEmojiById(E)).map(E => {
        if (null != E) return (0, s.dv)({
          guildId: e,
          emojiId: E.id,
          roles: [...E.roles, t]
        })
      }),
      l = _.map(E => o.Z.getCustomEmojiById(E)).map(E => {
        if (null == E) return;
        let S = E.roles.filter(E => E !== t);
        return S.length > 0 ? (0, s.dv)({
          guildId: e,
          emojiId: E.id,
          roles: S
        }) : (0, s.RE)(e, E.id)
      });
    await Promise.all([...n, ...l])
  }
}
async function q(E) {
  let {
    guildId: e,
    editStateId: S,
    groupListingId: _,
    onBeforeDispatchNewListing: t
  } = E, i = c.n.getState().listings[S];
  n()(null != i, "edit state does not exist");
  let {
    name: l,
    description: I,
    channelBenefits: r,
    intangibleBenefits: s,
    priceTier: N,
    image: o,
    channelAccessFormat: A
  } = i;
  n()(null != l, "no name provided"), n()(null != I, "no description provided"), n()(null != N, "no priceTier provided"), n()(null != o, "no image provided");
  let R = A === c.I.ALL_CHANNELS_ACCESS,
    u = _;
  null == u && (u = (await O.uw(e, {})).id), null != r && r.length > 0 && await (0, M.r4)(e, r);
  let a = [...null != r ? r : [], ...null != s ? s : []],
    P = (0, M.yL)(S, e);
  return O.dA({
    guildId: e,
    groupListingId: u,
    data: {
      can_access_all_channels: R,
      image: o,
      name: l,
      description: I,
      benefits: a,
      priceTier: N
    },
    analyticsContext: P,
    onBeforeDispatchNewListing: t
  })
}

function J() {
  let [E, e] = _.useState(!1), [S, t] = _.useState();
  return {
    loading: E,
    error: S,
    handleCreateOrUpdateFromEditState: _.useCallback(async E => {
      let {
        guildId: S,
        editStateId: _,
        groupListingId: l,
        onBeforeDispatchNewListing: I,
        onAfterDispatchNewListing: r
      } = E, s = _, N = a.Z.getSubscriptionListing(s);
      try {
        if (e(!0), t(void 0), null != N) n()(null != l, "groupListingId is null"), await

        function(E) {
          var e;
          let {
            guildId: S,
            editStateId: _,
            groupListingId: t
          } = E, l = a.Z.getSubscriptionListing(_);
          n()(null != l, "listing doesnt exist");
          let I = c.n.getState().listings[_];
          n()(null != I, "edit state does not exist");
          let {
            name: r,
            description: s,
            channelBenefits: N,
            intangibleBenefits: o,
            priceTier: A,
            image: u,
            channelAccessFormat: P
          } = I, M = {};
          if (r !== l.name && (M.name = r), s !== l.description && (M.description = s), A !== (null === (e = l.subscription_plans[0]) || void 0 === e ? void 0 : e.price) && (M.priceTier = A), null != u && (M.image = u), null != P && (M.can_access_all_channels = P === c.I.ALL_CHANNELS_ACCESS), null != N || null != o) {
            let E = l.role_benefits.benefits.filter(R.rC),
              e = l.role_benefits.benefits.filter(R.lL),
              S = [...null != N ? N : E, ...null != o ? o : e];
            M.benefits = S
          }
          return (0, i.isEmpty)(M) ? l : O.O0({
            guildId: S,
            groupListingId: t,
            listingId: _,
            data: M
          })
        }({
          guildId: S,
          editStateId: s,
          groupListingId: l
        });
        else {
          var o, A;
          let E = await q({
            guildId: S,
            editStateId: s,
            groupListingId: l,
            onBeforeDispatchNewListing: I
          });
          s = E.id, o = _, A = s, c.n.setState(E => ({
            listings: {
              ...E.listings,
              [A]: E.listings[o],
              [o]: void 0
            }
          })), null == r || r(E)
        }
        return await Q({
          guildId: S,
          editStateId: s
        }), z(s), !0
      } catch (E) {
        if (!("getAnyErrorMessage" in E)) throw E;
        t(E)
      } finally {
        e(!1)
      }
    }, [])
  }
}

function $(E, e) {
  let S = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: !1
    },
    t = (0, u._k)(E, S),
    n = (0, c.n)(E => E.editStateIdsForGroup[e]),
    i = (0, c.n)(E => E.setEditStateIdsForGroup),
    I = (0, c.n)(E => E.setListing),
    r = _.useMemo(() => [...t.map(E => {
      let {
        id: e
      } = E;
      return e
    }), ...null != n ? n : []], [n, t]),
    s = _.useCallback(() => {
      let E = (0, l.Z)();
      i(e, e => [...null != e ? e : [], E])
    }, [e, i]),
    N = _.useCallback(E => {
      let S = (0, l.Z)();
      return i(e, E => [...null != E ? E : [], S]), E.listings.forEach(e => {
        I(S, () => ({
          name: e.name,
          description: e.description,
          priceTier: e.price_tier,
          image: e.image,
          intangibleBenefits: e.additional_perks,
          channelBenefits: e.channels.map(E => ({
            ref_id: E.id,
            ref_type: D.Qs.CHANNEL,
            description: E.description,
            name: E.name,
            emoji_name: E.emoji_name
          })),
          roleIcon: {
            unicodeEmoji: void 0,
            icon: e.image
          },
          roleColor: e.role_color,
          usedTemplate: E.category
        }))
      }), S
    }, [e, i, I]);
  return {
    editStateIds: r,
    addNewEditStateId: s,
    addNewEditStateFromTemplate: N,
    removeEditStateId: _.useCallback(E => {
      i(e, e => (null != e ? e : []).filter(e => e !== E))
    }, [e, i])
  }
}