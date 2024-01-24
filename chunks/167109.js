"use strict";
n.r(t), n.d(t, {
  useName: function() {
    return j
  },
  usePriceTier: function() {
    return k
  },
  useDescription: function() {
    return R
  },
  useImage: function() {
    return O
  },
  useRoleIcon: function() {
    return y
  },
  useRole: function() {
    return D
  },
  useRoleColor: function() {
    return b
  },
  useChannelAccessFormat: function() {
    return B
  },
  useChannelBenefits: function() {
    return U
  },
  useIntangibleBenefits: function() {
    return H
  },
  useTierEmojiIds: function() {
    return W
  },
  useTrialInterval: function() {
    return V
  },
  useTrialLimit: function() {
    return Y
  },
  useHasChanges: function() {
    return z
  },
  useHasChangesForEditStateIds: function() {
    return J
  },
  useSubscriptionPlan: function() {
    return Z
  },
  clearEditState: function() {
    return K
  },
  useCreateOrUpdateListingFromEditState: function() {
    return Q
  },
  useEditStateIds: function() {
    return $
  }
}), n("222007");
var l = n("884691"),
  i = n("627445"),
  r = n.n(i),
  s = n("917351"),
  o = n("748820"),
  u = n("509043"),
  a = n("446674"),
  c = n("150021"),
  d = n("851387"),
  f = n("385976"),
  E = n("271560"),
  _ = n("577357"),
  h = n("371358"),
  p = n("837008"),
  m = n("648825"),
  S = n("866595"),
  M = n("432153"),
  v = n("549590"),
  C = n("59767"),
  L = n("679027"),
  T = n("971150"),
  I = n("677795"),
  g = n("49111"),
  A = n("646718");

function N(e, t, n) {
  let i = (0, T.useEditStateStore)(e => e.setListing),
    r = l.useCallback(l => {
      i(e, e => {
        var i;
        let r = null !== (i = null == e ? void 0 : e[t]) && void 0 !== i ? i : n,
          s = "function" == typeof l ? l(r) : l;
        return Object.assign({}, e, {
          [t]: s
        })
      })
    }, [i, e, t, n]),
    s = (0, T.useEditStateStore)(n => {
      var l;
      return null === (l = n.listings[e]) || void 0 === l ? void 0 : l[t]
    }),
    o = void 0 !== s ? s : n;
  return [o, r]
}

function x(e, t) {
  let n = (0, a.useStateFromStores)([m.default], () => m.default.getSubscriptionListing(e));
  return l.useMemo(() => t(n), [n])
}

function j(e) {
  let t = x(e, e => {
    var t;
    return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : ""
  });
  return N(e, "name", t)
}

function k(e) {
  let t = x(e, e => {
    var t;
    return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
  });
  return N(e, "priceTier", t)
}

function R(e) {
  let t = x(e, e => {
    var t;
    return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : ""
  });
  return N(e, "description", t)
}

function O(e, t) {
  let n = x(e, e => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, E.getAssetURL)(e.application_id, e.image_asset, t)
  });
  return N(e, "image", n)
}

function y(e, t) {
  let n = (0, v.default)(t, e),
    i = l.useMemo(() => {
      var e, t;
      return {
        icon: null !== (e = null == n ? void 0 : n.icon) && void 0 !== e ? e : void 0,
        unicodeEmoji: null !== (t = null == n ? void 0 : n.unicodeEmoji) && void 0 !== t ? t : void 0
      }
    }, [n]);
  return N(e, "roleIcon", i)
}

function D(e, t) {
  let n = (0, v.default)(t, e),
    i = (0, T.useEditStateStore)(t => {
      var n;
      return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor
    }),
    r = (0, T.useEditStateStore)(t => {
      var n;
      return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon
    });
  return l.useMemo(() => {
    let e = {
      ...null != n ? n : L.DEFAULT_PREVIEW_ROLE
    };
    if (void 0 !== r) {
      var t, l;
      e.icon = null !== (t = r.icon) && void 0 !== t ? t : "", e.unicodeEmoji = null !== (l = r.unicodeEmoji) && void 0 !== l ? l : ""
    }
    return void 0 !== i && (e.color = i, e.colorString = (0, u.int2hex)(i)), e
  }, [n, r, i])
}

function b(e, t) {
  let n = (0, v.default)(t, e),
    i = l.useMemo(() => {
      var e;
      return null !== (e = null == n ? void 0 : n.color) && void 0 !== e ? e : g.DEFAULT_ROLE_COLOR
    }, [n]);
  return N(e, "roleColor", i)
}

function B(e, t) {
  let n = (0, v.default)(t, e),
    i = l.useMemo(() => null == n ? T.AllChannelAccessOptions.SOME_CHANNELS_ACCESS : (0, S.isAllChannelsRole)(n) ? T.AllChannelAccessOptions.ALL_CHANNELS_ACCESS : T.AllChannelAccessOptions.SOME_CHANNELS_ACCESS, [n]);
  return N(e, "channelAccessFormat", i)
}
let F = [];

function U(e) {
  let t = x(e, e => null == e ? F : e.role_benefits.benefits.filter(_.isChannelBenefit));
  return N(e, "channelBenefits", t)
}
let w = [];

function H(e) {
  let t = x(e, e => null == e ? w : e.role_benefits.benefits.filter(_.isIntangibleBenefit));
  return N(e, "intangibleBenefits", t)
}
let G = new Set;

function P(e, t) {
  if (0 === e.length) return G;
  let n = e.filter(e => e.roles.includes(t));
  return new Set(n.map(e => {
    let {
      id: t
    } = e;
    return t
  }))
}

function W(e, t) {
  let n = (0, v.default)(t, e),
    i = (0, a.useStateFromStoresArray)([f.default], () => f.default.getGuildEmoji(t), [t]),
    r = l.useMemo(() => null == n ? G : P(i, n.id), [i, n]);
  return N(e, "tierEmojiIds", r)
}

function V(e) {
  var t;
  let n = (0, p.useSubscriptionTrial)(e),
    {
      selectedOption: l
    } = (0, C.default)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
  return N(e, "trialInterval", null != l ? l : null)
}

function Y(e) {
  var t;
  let n = (0, p.useSubscriptionTrial)(e);
  return N(e, "trialLimit", null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null)
}

function z(e) {
  return (0, T.useEditStateStore)(t => void 0 !== t.listings[e])
}

function J(e) {
  return (0, T.useEditStateStore)(t => {
    for (let n of e)
      if (void 0 !== t.listings[n]) return !0;
    return !1
  })
}

function Z(e) {
  let t = x(e, e => null == e ? void 0 : e.subscription_plans[0]),
    [n] = N(e, "priceTier", void 0),
    i = l.useMemo(() => {
      var e, l, i, r, s;
      return {
        price: null !== (e = null != n ? n : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
        currency: null !== (l = null == t ? void 0 : t.currency) && void 0 !== l ? l : g.CurrencyCodes.USD,
        interval: null !== (i = null == t ? void 0 : t.interval) && void 0 !== i ? i : A.SubscriptionIntervalTypes.MONTH,
        interval_count: null !== (r = null == t ? void 0 : t.interval_count) && void 0 !== r ? r : 1,
        id: null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : ""
      }
    }, [t, n]);
  return [i]
}

function K(e) {
  var t;
  t = e, T.useEditStateStore.setState(e => ({
    listings: {
      ...e.listings,
      [t]: e.listings.nonexistantEditStateId
    }
  }))
}
async function q(e) {
  let {
    guildId: t,
    editStateId: n
  } = e, l = m.default.getSubscriptionListing(n);
  r(null != l, "listing doesnt exist");
  let i = l.role_id,
    o = l.id,
    u = T.useEditStateStore.getState().listings[n];
  r(null != u, "edit state does not exist");
  let {
    roleColor: a,
    roleIcon: E,
    trialLimit: _,
    trialInterval: p,
    tierEmojiIds: S
  } = u;
  (void 0 !== a || void 0 !== E) && await d.default.updateRole(t, i, {
    color: a,
    icon: null == E ? void 0 : E.icon,
    unicodeEmoji: null == E ? void 0 : E.unicodeEmoji
  });
  let M = m.default.getSubscriptionTrial(o);
  if ((null != _ || null != p || null != M && null == p) && await h.updateSubscriptionTrial(t, o, {
      trial: p,
      max_num_active_trial_users: _
    }), void 0 !== S) {
    let e = f.default.getGuildEmoji(t),
      n = P(e, i),
      l = (0, s.difference)([...S], [...n]),
      r = (0, s.difference)([...n], [...S]),
      o = l.map(e => f.default.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, c.updateEmoji)({
          guildId: t,
          emojiId: e.id,
          roles: [...e.roles, i]
        })
      }),
      u = r.map(e => f.default.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let n = e.roles.filter(e => e !== i);
        return n.length > 0 ? (0, c.updateEmoji)({
          guildId: t,
          emojiId: e.id,
          roles: n
        }) : (0, c.deleteEmoji)(t, e.id)
      });
    await Promise.all([...o, ...u])
  }
}
async function X(e) {
  let {
    guildId: t,
    editStateId: n,
    groupListingId: l,
    onBeforeDispatchNewListing: i
  } = e, s = T.useEditStateStore.getState().listings[n];
  r(null != s, "edit state does not exist");
  let {
    name: o,
    description: u,
    channelBenefits: a,
    intangibleBenefits: c,
    priceTier: d,
    image: f,
    channelAccessFormat: E
  } = s;
  r(null != o, "no name provided"), r(null != u, "no description provided"), r(null != d, "no priceTier provided"), r(null != f, "no image provided");
  let _ = E === T.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
    p = l;
  if (null == p) {
    let e = await h.createSubscriptionGroupListing(t, {});
    p = e.id
  }
  null != a && a.length > 0 && await (0, M.createChannelsFromTemplateTierBenefits)(t, a);
  let m = [...null != a ? a : [], ...null != c ? c : []],
    S = (0, M.getTemplateTierCreationAnalyticsContext)(n, t);
  return h.createSubscriptionListing({
    guildId: t,
    groupListingId: p,
    data: {
      can_access_all_channels: _,
      image: f,
      name: o,
      description: u,
      benefits: m,
      priceTier: d
    },
    analyticsContext: S,
    onBeforeDispatchNewListing: i
  })
}

function Q() {
  let [e, t] = l.useState(!1), [n, i] = l.useState(), o = l.useCallback(async e => {
    let {
      guildId: n,
      editStateId: l,
      groupListingId: o,
      onBeforeDispatchNewListing: u,
      onAfterDispatchNewListing: a
    } = e, c = l, d = m.default.getSubscriptionListing(c);
    try {
      if (t(!0), i(void 0), null != d) r(null != o, "groupListingId is null"), await

      function(e) {
        var t;
        let {
          guildId: n,
          editStateId: l,
          groupListingId: i
        } = e, o = m.default.getSubscriptionListing(l);
        r(null != o, "listing doesnt exist");
        let u = T.useEditStateStore.getState().listings[l];
        r(null != u, "edit state does not exist");
        let {
          name: a,
          description: c,
          channelBenefits: d,
          intangibleBenefits: f,
          priceTier: E,
          image: p,
          channelAccessFormat: S
        } = u, M = {};
        if (a !== o.name && (M.name = a), c !== o.description && (M.description = c), E !== (null === (t = o.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (M.priceTier = E), null != p && (M.image = p), null != S && (M.can_access_all_channels = S === T.AllChannelAccessOptions.ALL_CHANNELS_ACCESS), null != d || null != f) {
          let e = o.role_benefits.benefits.filter(_.isChannelBenefit),
            t = o.role_benefits.benefits.filter(_.isIntangibleBenefit),
            n = [...null != d ? d : e, ...null != f ? f : t];
          M.benefits = n
        }
        return (0, s.isEmpty)(M) ? o : h.updateSubscriptionListing({
          guildId: n,
          groupListingId: i,
          listingId: l,
          data: M
        })
      }({
        guildId: n,
        editStateId: c,
        groupListingId: o
      });
      else {
        var f, E;
        let e = await X({
          guildId: n,
          editStateId: c,
          groupListingId: o,
          onBeforeDispatchNewListing: u
        });
        c = e.id, f = l, E = c, T.useEditStateStore.setState(e => ({
          listings: {
            ...e.listings,
            [E]: e.listings[f],
            [f]: void 0
          }
        })), null == a || a(e)
      }
      return await q({
        guildId: n,
        editStateId: c
      }), K(c), !0
    } catch (e) {
      if (!("getAnyErrorMessage" in e)) throw e;
      i(e)
    } finally {
      t(!1)
    }
  }, []);
  return {
    loading: e,
    error: n,
    handleCreateOrUpdateFromEditState: o
  }
}

function $(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: !1
    },
    i = (0, p.useSubscriptionListingsForGroup)(e, n),
    r = (0, T.useEditStateStore)(e => e.editStateIdsForGroup[t]),
    s = (0, T.useEditStateStore)(e => e.setEditStateIdsForGroup),
    u = (0, T.useEditStateStore)(e => e.setListing),
    a = l.useMemo(() => [...i.map(e => {
      let {
        id: t
      } = e;
      return t
    }), ...null != r ? r : []], [r, i]),
    c = l.useCallback(() => {
      let e = (0, o.v4)();
      s(t, t => [...null != t ? t : [], e])
    }, [t, s]),
    d = l.useCallback(e => {
      let n = (0, o.v4)();
      return s(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
        u(n, () => ({
          name: t.name,
          description: t.description,
          priceTier: t.price_tier,
          image: t.image,
          intangibleBenefits: t.additional_perks,
          channelBenefits: t.channels.map(e => ({
            ref_id: e.id,
            ref_type: I.GuildRoleSubscriptionBenefitTypes.CHANNEL,
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
      }), n
    }, [t, s, u]),
    f = l.useCallback(e => {
      s(t, t => (null != t ? t : []).filter(t => t !== e))
    }, [t, s]);
  return {
    editStateIds: a,
    addNewEditStateId: c,
    addNewEditStateFromTemplate: d,
    removeEditStateId: f
  }
}