"use strict";
i.r(s), i.d(s, {
  clearEditState: function() {
    return z
  },
  useChannelAccessFormat: function() {
    return V
  },
  useChannelBenefits: function() {
    return Y
  },
  useCreateOrUpdateListingFromEditState: function() {
    return q
  },
  useDescription: function() {
    return h
  },
  useEditStateIds: function() {
    return $
  },
  useHasChanges: function() {
    return X
  },
  useHasChangesForEditStateIds: function() {
    return k
  },
  useImage: function() {
    return G
  },
  useIntangibleBenefits: function() {
    return y
  },
  useName: function() {
    return p
  },
  usePriceTier: function() {
    return U
  },
  useRole: function() {
    return B
  },
  useRoleColor: function() {
    return H
  },
  useRoleIcon: function() {
    return v
  },
  useSubscriptionPlan: function() {
    return Z
  },
  useTierEmojiIds: function() {
    return j
  },
  useTrialInterval: function() {
    return x
  },
  useTrialLimit: function() {
    return W
  }
}), i("47120");
var n = i("470079"),
  t = i("512722"),
  E = i.n(t),
  r = i("392711"),
  S = i("153832"),
  o = i("866442"),
  _ = i("442837"),
  l = i("80932"),
  a = i("749210"),
  I = i("339085"),
  u = i("73346"),
  N = i("817460"),
  A = i("423117"),
  R = i("584825"),
  O = i("289393"),
  T = i("790285"),
  d = i("303737"),
  P = i("971792"),
  M = i("22902"),
  c = i("403474"),
  C = i("944537"),
  f = i("293810"),
  m = i("981631"),
  L = i("474936");

function D(e, s, i) {
  let t = (0, C.useEditStateStore)(e => e.setListing),
    E = n.useCallback(n => {
      t(e, e => {
        var t;
        let E = null !== (t = null == e ? void 0 : e[s]) && void 0 !== t ? t : i;
        return Object.assign({}, e, {
          [s]: "function" == typeof n ? n(E) : n
        })
      })
    }, [t, e, s, i]),
    r = (0, C.useEditStateStore)(i => {
      var n;
      return null === (n = i.listings[e]) || void 0 === n ? void 0 : n[s]
    });
  return [void 0 !== r ? r : i, E]
}

function g(e, s) {
  let i = (0, _.useStateFromStores)([O.default], () => O.default.getSubscriptionListing(e));
  return n.useMemo(() => s(i), [i])
}

function p(e) {
  let s = g(e, e => {
    var s;
    return null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : ""
  });
  return D(e, "name", s)
}

function U(e) {
  let s = g(e, e => {
    var s;
    return null == e ? void 0 : null === (s = e.subscription_plans[0]) || void 0 === s ? void 0 : s.price
  });
  return D(e, "priceTier", s)
}

function h(e) {
  let s = g(e, e => {
    var s;
    return null !== (s = null == e ? void 0 : e.description) && void 0 !== s ? s : ""
  });
  return D(e, "description", s)
}

function G(e, s) {
  let i = g(e, e => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, u.getAssetURL)(e.application_id, e.image_asset, s)
  });
  return D(e, "image", i)
}

function v(e, s) {
  let i = (0, P.default)(s, e);
  return D(e, "roleIcon", n.useMemo(() => {
    var e, s;
    return {
      icon: null !== (e = null == i ? void 0 : i.icon) && void 0 !== e ? e : void 0,
      unicodeEmoji: null !== (s = null == i ? void 0 : i.unicodeEmoji) && void 0 !== s ? s : void 0
    }
  }, [i]))
}

function B(e, s) {
  let i = (0, P.default)(s, e),
    t = (0, C.useEditStateStore)(s => {
      var i;
      return null === (i = s.listings[e]) || void 0 === i ? void 0 : i.roleColor
    }),
    E = (0, C.useEditStateStore)(s => {
      var i;
      return null === (i = s.listings[e]) || void 0 === i ? void 0 : i.roleIcon
    });
  return n.useMemo(() => {
    let e = {
      ...null != i ? i : c.DEFAULT_PREVIEW_ROLE
    };
    if (void 0 !== E) {
      var s, n;
      e.icon = null !== (s = E.icon) && void 0 !== s ? s : "", e.unicodeEmoji = null !== (n = E.unicodeEmoji) && void 0 !== n ? n : ""
    }
    return void 0 !== t && (e.color = t, e.colorString = (0, o.int2hex)(t)), e
  }, [i, E, t])
}

function H(e, s) {
  let i = (0, P.default)(s, e);
  return D(e, "roleColor", n.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.color) && void 0 !== e ? e : m.DEFAULT_ROLE_COLOR
  }, [i]))
}

function V(e, s) {
  let i = (0, P.default)(s, e);
  return D(e, "channelAccessFormat", n.useMemo(() => null == i ? C.AllChannelAccessOptions.SOME_CHANNELS_ACCESS : (0, T.isAllChannelsRole)(i) ? C.AllChannelAccessOptions.ALL_CHANNELS_ACCESS : C.AllChannelAccessOptions.SOME_CHANNELS_ACCESS, [i]))
}
let b = [];

function Y(e) {
  let s = g(e, e => null == e ? b : e.role_benefits.benefits.filter(N.isChannelBenefit));
  return D(e, "channelBenefits", s)
}
let w = [];

function y(e) {
  let s = g(e, e => null == e ? w : e.role_benefits.benefits.filter(N.isIntangibleBenefit));
  return D(e, "intangibleBenefits", s)
}
let F = new Set;

function K(e, s) {
  if (0 === e.length) return F;
  let i = e.filter(e => e.roles.includes(s));
  return new Set(i.map(e => {
    let {
      id: s
    } = e;
    return s
  }))
}

function j(e, s) {
  let i = (0, P.default)(s, e),
    t = (0, _.useStateFromStoresArray)([I.default], () => I.default.getGuildEmoji(s), [s]);
  return D(e, "tierEmojiIds", n.useMemo(() => null == i ? F : K(t, i.id), [t, i]))
}

function x(e) {
  var s;
  let i = (0, R.useSubscriptionTrial)(e),
    {
      selectedOption: n
    } = (0, M.default)(null !== (s = null == i ? void 0 : i.active_trial) && void 0 !== s ? s : null);
  return D(e, "trialInterval", null != n ? n : null)
}

function W(e) {
  var s;
  let i = (0, R.useSubscriptionTrial)(e);
  return D(e, "trialLimit", null !== (s = null == i ? void 0 : i.max_num_active_trial_users) && void 0 !== s ? s : null)
}

function X(e) {
  return (0, C.useEditStateStore)(s => void 0 !== s.listings[e])
}

function k(e) {
  return (0, C.useEditStateStore)(s => {
    for (let i of e)
      if (void 0 !== s.listings[i]) return !0;
    return !1
  })
}

function Z(e) {
  let s = g(e, e => null == e ? void 0 : e.subscription_plans[0]),
    [i] = D(e, "priceTier", void 0);
  return [n.useMemo(() => {
    var e, n, t, E, r;
    return {
      price: null !== (e = null != i ? i : null == s ? void 0 : s.price) && void 0 !== e ? e : 0,
      currency: null !== (n = null == s ? void 0 : s.currency) && void 0 !== n ? n : m.CurrencyCodes.USD,
      interval: null !== (t = null == s ? void 0 : s.interval) && void 0 !== t ? t : L.SubscriptionIntervalTypes.MONTH,
      interval_count: null !== (E = null == s ? void 0 : s.interval_count) && void 0 !== E ? E : 1,
      id: null !== (r = null == s ? void 0 : s.id) && void 0 !== r ? r : ""
    }
  }, [s, i])]
}

function z(e) {
  var s;
  s = e, C.useEditStateStore.setState(e => ({
    listings: {
      ...e.listings,
      [s]: e.listings.nonexistantEditStateId
    }
  }))
}
async function J(e) {
  let {
    guildId: s,
    editStateId: i
  } = e, n = O.default.getSubscriptionListing(i);
  E()(null != n, "listing doesnt exist");
  let t = n.role_id,
    S = n.id,
    o = C.useEditStateStore.getState().listings[i];
  E()(null != o, "edit state does not exist");
  let {
    roleColor: _,
    roleIcon: u,
    trialLimit: N,
    trialInterval: R,
    tierEmojiIds: T
  } = o;
  (void 0 !== _ || void 0 !== u) && await a.default.updateRole(s, t, {
    color: _,
    icon: null == u ? void 0 : u.icon,
    unicodeEmoji: null == u ? void 0 : u.unicodeEmoji
  });
  let d = O.default.getSubscriptionTrial(S);
  if ((null != N || null != R || null != d && null == R) && await A.updateSubscriptionTrial(s, S, {
      trial: R,
      max_num_active_trial_users: N
    }), void 0 !== T) {
    let e = K(I.default.getGuildEmoji(s), t),
      i = (0, r.difference)([...T], [...e]),
      n = (0, r.difference)([...e], [...T]),
      E = i.map(e => I.default.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, l.updateEmoji)({
          guildId: s,
          emojiId: e.id,
          roles: [...e.roles, t]
        })
      }),
      S = n.map(e => I.default.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let i = e.roles.filter(e => e !== t);
        return i.length > 0 ? (0, l.updateEmoji)({
          guildId: s,
          emojiId: e.id,
          roles: i
        }) : (0, l.deleteEmoji)(s, e.id)
      });
    await Promise.all([...E, ...S])
  }
}
async function Q(e) {
  let {
    guildId: s,
    editStateId: i,
    groupListingId: n,
    onBeforeDispatchNewListing: t
  } = e, r = C.useEditStateStore.getState().listings[i];
  E()(null != r, "edit state does not exist");
  let {
    name: S,
    description: o,
    channelBenefits: _,
    intangibleBenefits: l,
    priceTier: a,
    image: I,
    channelAccessFormat: u
  } = r;
  E()(null != S, "no name provided"), E()(null != o, "no description provided"), E()(null != a, "no priceTier provided"), E()(null != I, "no image provided");
  let N = u === C.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
    R = n;
  null == R && (R = (await A.createSubscriptionGroupListing(s, {})).id), null != _ && _.length > 0 && await (0, d.createChannelsFromTemplateTierBenefits)(s, _);
  let O = [...null != _ ? _ : [], ...null != l ? l : []],
    T = (0, d.getTemplateTierCreationAnalyticsContext)(i, s);
  return A.createSubscriptionListing({
    guildId: s,
    groupListingId: R,
    data: {
      can_access_all_channels: N,
      image: I,
      name: S,
      description: o,
      benefits: O,
      priceTier: a
    },
    analyticsContext: T,
    onBeforeDispatchNewListing: t
  })
}

function q() {
  let [e, s] = n.useState(!1), [i, t] = n.useState();
  return {
    loading: e,
    error: i,
    handleCreateOrUpdateFromEditState: n.useCallback(async e => {
      let {
        guildId: i,
        editStateId: n,
        groupListingId: S,
        onBeforeDispatchNewListing: o,
        onAfterDispatchNewListing: _
      } = e, l = n, a = O.default.getSubscriptionListing(l);
      try {
        if (s(!0), t(void 0), null != a) E()(null != S, "groupListingId is null"), await

        function(e) {
          var s;
          let {
            guildId: i,
            editStateId: n,
            groupListingId: t
          } = e, S = O.default.getSubscriptionListing(n);
          E()(null != S, "listing doesnt exist");
          let o = C.useEditStateStore.getState().listings[n];
          E()(null != o, "edit state does not exist");
          let {
            name: _,
            description: l,
            channelBenefits: a,
            intangibleBenefits: I,
            priceTier: u,
            image: R,
            channelAccessFormat: T
          } = o, d = {};
          if (_ !== S.name && (d.name = _), l !== S.description && (d.description = l), u !== (null === (s = S.subscription_plans[0]) || void 0 === s ? void 0 : s.price) && (d.priceTier = u), null != R && (d.image = R), null != T && (d.can_access_all_channels = T === C.AllChannelAccessOptions.ALL_CHANNELS_ACCESS), null != a || null != I) {
            let e = S.role_benefits.benefits.filter(N.isChannelBenefit),
              s = S.role_benefits.benefits.filter(N.isIntangibleBenefit),
              i = [...null != a ? a : e, ...null != I ? I : s];
            d.benefits = i
          }
          return (0, r.isEmpty)(d) ? S : A.updateSubscriptionListing({
            guildId: i,
            groupListingId: t,
            listingId: n,
            data: d
          })
        }({
          guildId: i,
          editStateId: l,
          groupListingId: S
        });
        else {
          var I, u;
          let e = await Q({
            guildId: i,
            editStateId: l,
            groupListingId: S,
            onBeforeDispatchNewListing: o
          });
          l = e.id, I = n, u = l, C.useEditStateStore.setState(e => ({
            listings: {
              ...e.listings,
              [u]: e.listings[I],
              [I]: void 0
            }
          })), null == _ || _(e)
        }
        return await J({
          guildId: i,
          editStateId: l
        }), z(l), !0
      } catch (e) {
        if (!("getAnyErrorMessage" in e)) throw e;
        t(e)
      } finally {
        s(!1)
      }
    }, [])
  }
}

function $(e, s) {
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: !1
    },
    t = (0, R.useSubscriptionListingsForGroup)(e, i),
    E = (0, C.useEditStateStore)(e => e.editStateIdsForGroup[s]),
    r = (0, C.useEditStateStore)(e => e.setEditStateIdsForGroup),
    o = (0, C.useEditStateStore)(e => e.setListing),
    _ = n.useMemo(() => [...t.map(e => {
      let {
        id: s
      } = e;
      return s
    }), ...null != E ? E : []], [E, t]),
    l = n.useCallback(() => {
      let e = (0, S.v4)();
      r(s, s => [...null != s ? s : [], e])
    }, [s, r]),
    a = n.useCallback(e => {
      let i = (0, S.v4)();
      return r(s, e => [...null != e ? e : [], i]), e.listings.forEach(s => {
        o(i, () => ({
          name: s.name,
          description: s.description,
          priceTier: s.price_tier,
          image: s.image,
          intangibleBenefits: s.additional_perks,
          channelBenefits: s.channels.map(e => ({
            ref_id: e.id,
            ref_type: f.GuildRoleSubscriptionBenefitTypes.CHANNEL,
            description: e.description,
            name: e.name,
            emoji_name: e.emoji_name
          })),
          roleIcon: {
            unicodeEmoji: void 0,
            icon: s.image
          },
          roleColor: s.role_color,
          usedTemplate: e.category
        }))
      }), i
    }, [s, r, o]);
  return {
    editStateIds: _,
    addNewEditStateId: l,
    addNewEditStateFromTemplate: a,
    removeEditStateId: n.useCallback(e => {
      r(s, s => (null != s ? s : []).filter(s => s !== e))
    }, [s, r])
  }
}