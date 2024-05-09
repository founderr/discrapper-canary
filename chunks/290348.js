"use strict";
s.r(t), s.d(t, {
  clearEditState: function() {
    return J
  },
  useChannelAccessFormat: function() {
    return H
  },
  useChannelBenefits: function() {
    return F
  },
  useCreateOrUpdateListingFromEditState: function() {
    return Q
  },
  useDescription: function() {
    return p
  },
  useEditStateIds: function() {
    return $
  },
  useHasChanges: function() {
    return Y
  },
  useHasChangesForEditStateIds: function() {
    return Z
  },
  useImage: function() {
    return y
  },
  useIntangibleBenefits: function() {
    return j
  },
  useName: function() {
    return h
  },
  usePriceTier: function() {
    return m
  },
  useRole: function() {
    return P
  },
  useRoleColor: function() {
    return x
  },
  useRoleIcon: function() {
    return v
  },
  useSubscriptionPlan: function() {
    return X
  },
  useTierEmojiIds: function() {
    return w
  },
  useTrialInterval: function() {
    return k
  },
  useTrialLimit: function() {
    return W
  }
}), s("47120");
var a = s("470079"),
  n = s("512722"),
  i = s.n(n),
  E = s("392711"),
  l = s("153832"),
  _ = s("866442"),
  r = s("442837"),
  u = s("80932"),
  o = s("749210"),
  T = s("339085"),
  d = s("73346"),
  A = s("817460"),
  I = s("423117"),
  L = s("584825"),
  c = s("289393"),
  N = s("790285"),
  S = s("303737"),
  g = s("971792"),
  D = s("22902"),
  C = s("403474"),
  f = s("944537"),
  O = s("293810"),
  G = s("981631"),
  M = s("474936");

function U(e, t, s) {
  let n = (0, f.useEditStateStore)(e => e.setListing),
    i = a.useCallback(a => {
      n(e, e => {
        var n;
        let i = null !== (n = null == e ? void 0 : e[t]) && void 0 !== n ? n : s;
        return Object.assign({}, e, {
          [t]: "function" == typeof a ? a(i) : a
        })
      })
    }, [n, e, t, s]),
    E = (0, f.useEditStateStore)(s => {
      var a;
      return null === (a = s.listings[e]) || void 0 === a ? void 0 : a[t]
    });
  return [void 0 !== E ? E : s, i]
}

function R(e, t) {
  let s = (0, r.useStateFromStores)([c.default], () => c.default.getSubscriptionListing(e));
  return a.useMemo(() => t(s), [s])
}

function h(e) {
  let t = R(e, e => {
    var t;
    return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : ""
  });
  return U(e, "name", t)
}

function m(e) {
  let t = R(e, e => {
    var t;
    return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
  });
  return U(e, "priceTier", t)
}

function p(e) {
  let t = R(e, e => {
    var t;
    return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : ""
  });
  return U(e, "description", t)
}

function y(e, t) {
  let s = R(e, e => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, d.getAssetURL)(e.application_id, e.image_asset, t)
  });
  return U(e, "image", s)
}

function v(e, t) {
  let s = (0, g.default)(t, e);
  return U(e, "roleIcon", a.useMemo(() => {
    var e, t;
    return {
      icon: null !== (e = null == s ? void 0 : s.icon) && void 0 !== e ? e : void 0,
      unicodeEmoji: null !== (t = null == s ? void 0 : s.unicodeEmoji) && void 0 !== t ? t : void 0
    }
  }, [s]))
}

function P(e, t) {
  let s = (0, g.default)(t, e),
    n = (0, f.useEditStateStore)(t => {
      var s;
      return null === (s = t.listings[e]) || void 0 === s ? void 0 : s.roleColor
    }),
    i = (0, f.useEditStateStore)(t => {
      var s;
      return null === (s = t.listings[e]) || void 0 === s ? void 0 : s.roleIcon
    });
  return a.useMemo(() => {
    let e = {
      ...null != s ? s : C.DEFAULT_PREVIEW_ROLE
    };
    if (void 0 !== i) {
      var t, a;
      e.icon = null !== (t = i.icon) && void 0 !== t ? t : "", e.unicodeEmoji = null !== (a = i.unicodeEmoji) && void 0 !== a ? a : ""
    }
    return void 0 !== n && (e.color = n, e.colorString = (0, _.int2hex)(n)), e
  }, [s, i, n])
}

function x(e, t) {
  let s = (0, g.default)(t, e);
  return U(e, "roleColor", a.useMemo(() => {
    var e;
    return null !== (e = null == s ? void 0 : s.color) && void 0 !== e ? e : G.DEFAULT_ROLE_COLOR
  }, [s]))
}

function H(e, t) {
  let s = (0, g.default)(t, e);
  return U(e, "channelAccessFormat", a.useMemo(() => null == s ? f.AllChannelAccessOptions.SOME_CHANNELS_ACCESS : (0, N.isAllChannelsRole)(s) ? f.AllChannelAccessOptions.ALL_CHANNELS_ACCESS : f.AllChannelAccessOptions.SOME_CHANNELS_ACCESS, [s]))
}
let B = [];

function F(e) {
  let t = R(e, e => null == e ? B : e.role_benefits.benefits.filter(A.isChannelBenefit));
  return U(e, "channelBenefits", t)
}
let V = [];

function j(e) {
  let t = R(e, e => null == e ? V : e.role_benefits.benefits.filter(A.isIntangibleBenefit));
  return U(e, "intangibleBenefits", t)
}
let b = new Set;

function K(e, t) {
  if (0 === e.length) return b;
  let s = e.filter(e => e.roles.includes(t));
  return new Set(s.map(e => {
    let {
      id: t
    } = e;
    return t
  }))
}

function w(e, t) {
  let s = (0, g.default)(t, e),
    n = (0, r.useStateFromStoresArray)([T.default], () => T.default.getGuildEmoji(t), [t]);
  return U(e, "tierEmojiIds", a.useMemo(() => null == s ? b : K(n, s.id), [n, s]))
}

function k(e) {
  var t;
  let s = (0, L.useSubscriptionTrial)(e),
    {
      selectedOption: a
    } = (0, D.default)(null !== (t = null == s ? void 0 : s.active_trial) && void 0 !== t ? t : null);
  return U(e, "trialInterval", null != a ? a : null)
}

function W(e) {
  var t;
  let s = (0, L.useSubscriptionTrial)(e);
  return U(e, "trialLimit", null !== (t = null == s ? void 0 : s.max_num_active_trial_users) && void 0 !== t ? t : null)
}

function Y(e) {
  return (0, f.useEditStateStore)(t => void 0 !== t.listings[e])
}

function Z(e) {
  return (0, f.useEditStateStore)(t => {
    for (let s of e)
      if (void 0 !== t.listings[s]) return !0;
    return !1
  })
}

function X(e) {
  let t = R(e, e => null == e ? void 0 : e.subscription_plans[0]),
    [s] = U(e, "priceTier", void 0);
  return [a.useMemo(() => {
    var e, a, n, i, E;
    return {
      price: null !== (e = null != s ? s : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
      currency: null !== (a = null == t ? void 0 : t.currency) && void 0 !== a ? a : G.CurrencyCodes.USD,
      interval: null !== (n = null == t ? void 0 : t.interval) && void 0 !== n ? n : M.SubscriptionIntervalTypes.MONTH,
      interval_count: null !== (i = null == t ? void 0 : t.interval_count) && void 0 !== i ? i : 1,
      id: null !== (E = null == t ? void 0 : t.id) && void 0 !== E ? E : ""
    }
  }, [t, s])]
}

function J(e) {
  var t;
  t = e, f.useEditStateStore.setState(e => ({
    listings: {
      ...e.listings,
      [t]: e.listings.nonexistantEditStateId
    }
  }))
}
async function z(e) {
  let {
    guildId: t,
    editStateId: s
  } = e, a = c.default.getSubscriptionListing(s);
  i()(null != a, "listing doesnt exist");
  let n = a.role_id,
    l = a.id,
    _ = f.useEditStateStore.getState().listings[s];
  i()(null != _, "edit state does not exist");
  let {
    roleColor: r,
    roleIcon: d,
    trialLimit: A,
    trialInterval: L,
    tierEmojiIds: N
  } = _;
  (void 0 !== r || void 0 !== d) && await o.default.updateRole(t, n, {
    color: r,
    icon: null == d ? void 0 : d.icon,
    unicodeEmoji: null == d ? void 0 : d.unicodeEmoji
  });
  let S = c.default.getSubscriptionTrial(l);
  if ((null != A || null != L || null != S && null == L) && await I.updateSubscriptionTrial(t, l, {
      trial: L,
      max_num_active_trial_users: A
    }), void 0 !== N) {
    let e = K(T.default.getGuildEmoji(t), n),
      s = (0, E.difference)([...N], [...e]),
      a = (0, E.difference)([...e], [...N]),
      i = s.map(e => T.default.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, u.updateEmoji)({
          guildId: t,
          emojiId: e.id,
          roles: [...e.roles, n]
        })
      }),
      l = a.map(e => T.default.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let s = e.roles.filter(e => e !== n);
        return s.length > 0 ? (0, u.updateEmoji)({
          guildId: t,
          emojiId: e.id,
          roles: s
        }) : (0, u.deleteEmoji)(t, e.id)
      });
    await Promise.all([...i, ...l])
  }
}
async function q(e) {
  let {
    guildId: t,
    editStateId: s,
    groupListingId: a,
    onBeforeDispatchNewListing: n
  } = e, E = f.useEditStateStore.getState().listings[s];
  i()(null != E, "edit state does not exist");
  let {
    name: l,
    description: _,
    channelBenefits: r,
    intangibleBenefits: u,
    priceTier: o,
    image: T,
    channelAccessFormat: d
  } = E;
  i()(null != l, "no name provided"), i()(null != _, "no description provided"), i()(null != o, "no priceTier provided"), i()(null != T, "no image provided");
  let A = d === f.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
    L = a;
  null == L && (L = (await I.createSubscriptionGroupListing(t, {})).id), null != r && r.length > 0 && await (0, S.createChannelsFromTemplateTierBenefits)(t, r);
  let c = [...null != r ? r : [], ...null != u ? u : []],
    N = (0, S.getTemplateTierCreationAnalyticsContext)(s, t);
  return I.createSubscriptionListing({
    guildId: t,
    groupListingId: L,
    data: {
      can_access_all_channels: A,
      image: T,
      name: l,
      description: _,
      benefits: c,
      priceTier: o
    },
    analyticsContext: N,
    onBeforeDispatchNewListing: n
  })
}

function Q() {
  let [e, t] = a.useState(!1), [s, n] = a.useState();
  return {
    loading: e,
    error: s,
    handleCreateOrUpdateFromEditState: a.useCallback(async e => {
      let {
        guildId: s,
        editStateId: a,
        groupListingId: l,
        onBeforeDispatchNewListing: _,
        onAfterDispatchNewListing: r
      } = e, u = a, o = c.default.getSubscriptionListing(u);
      try {
        if (t(!0), n(void 0), null != o) i()(null != l, "groupListingId is null"), await

        function(e) {
          var t;
          let {
            guildId: s,
            editStateId: a,
            groupListingId: n
          } = e, l = c.default.getSubscriptionListing(a);
          i()(null != l, "listing doesnt exist");
          let _ = f.useEditStateStore.getState().listings[a];
          i()(null != _, "edit state does not exist");
          let {
            name: r,
            description: u,
            channelBenefits: o,
            intangibleBenefits: T,
            priceTier: d,
            image: L,
            channelAccessFormat: N
          } = _, S = {};
          if (r !== l.name && (S.name = r), u !== l.description && (S.description = u), d !== (null === (t = l.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (S.priceTier = d), null != L && (S.image = L), null != N && (S.can_access_all_channels = N === f.AllChannelAccessOptions.ALL_CHANNELS_ACCESS), null != o || null != T) {
            let e = l.role_benefits.benefits.filter(A.isChannelBenefit),
              t = l.role_benefits.benefits.filter(A.isIntangibleBenefit),
              s = [...null != o ? o : e, ...null != T ? T : t];
            S.benefits = s
          }
          return (0, E.isEmpty)(S) ? l : I.updateSubscriptionListing({
            guildId: s,
            groupListingId: n,
            listingId: a,
            data: S
          })
        }({
          guildId: s,
          editStateId: u,
          groupListingId: l
        });
        else {
          var T, d;
          let e = await q({
            guildId: s,
            editStateId: u,
            groupListingId: l,
            onBeforeDispatchNewListing: _
          });
          u = e.id, T = a, d = u, f.useEditStateStore.setState(e => ({
            listings: {
              ...e.listings,
              [d]: e.listings[T],
              [T]: void 0
            }
          })), null == r || r(e)
        }
        return await z({
          guildId: s,
          editStateId: u
        }), J(u), !0
      } catch (e) {
        if (!("getAnyErrorMessage" in e)) throw e;
        n(e)
      } finally {
        t(!1)
      }
    }, [])
  }
}

function $(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: !1
    },
    n = (0, L.useSubscriptionListingsForGroup)(e, s),
    i = (0, f.useEditStateStore)(e => e.editStateIdsForGroup[t]),
    E = (0, f.useEditStateStore)(e => e.setEditStateIdsForGroup),
    _ = (0, f.useEditStateStore)(e => e.setListing),
    r = a.useMemo(() => [...n.map(e => {
      let {
        id: t
      } = e;
      return t
    }), ...null != i ? i : []], [i, n]),
    u = a.useCallback(() => {
      let e = (0, l.v4)();
      E(t, t => [...null != t ? t : [], e])
    }, [t, E]),
    o = a.useCallback(e => {
      let s = (0, l.v4)();
      return E(t, e => [...null != e ? e : [], s]), e.listings.forEach(t => {
        _(s, () => ({
          name: t.name,
          description: t.description,
          priceTier: t.price_tier,
          image: t.image,
          intangibleBenefits: t.additional_perks,
          channelBenefits: t.channels.map(e => ({
            ref_id: e.id,
            ref_type: O.GuildRoleSubscriptionBenefitTypes.CHANNEL,
            description: e.description,
            name: e.name,
            emoji_name: e.emoji_name
          })),
          roleIcon: {
            unicodeEmoji: void 0,
            icon: t.image
          },
          roleColor: t.role_color,
          usedTemplate: e.category
        }))
      }), s
    }, [t, E, _]);
  return {
    editStateIds: r,
    addNewEditStateId: u,
    addNewEditStateFromTemplate: o,
    removeEditStateId: a.useCallback(e => {
      E(t, t => (null != t ? t : []).filter(t => t !== e))
    }, [t, E])
  }
}