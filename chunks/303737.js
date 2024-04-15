"use strict";
n.r(t), n.d(t, {
  announceCreateTemplateChannels: function() {
    return I
  },
  announceDeleteTemplateChannels: function() {
    return T
  },
  createChannelsFromTemplateTierBenefits: function() {
    return m
  },
  getTemplateTierCreationAnalyticsContext: function() {
    return R
  },
  isEligibleForNewBadge: function() {
    return N
  },
  useChannelWithTemplateFallback: function() {
    return h
  },
  useSuggestedUnusedPrices: function() {
    return p
  }
}), n("653041"), n("47120"), n("998459");
var i = n("991637"),
  r = n.n(i),
  l = n("399606"),
  s = n("570140"),
  u = n("333848"),
  o = n("592125"),
  a = n("923726"),
  d = n("289393"),
  c = n("944537"),
  f = n("144507"),
  S = n("853439"),
  E = n("981631"),
  _ = n("176505");
r().shim();
let g = {};

function h(e) {
  let t = (0, l.useStateFromStores)([o.default], () => o.default.getChannel(e)),
    n = (0, l.useStateFromStores)([S.default], () => S.default.getChannel(e));
  return null != t ? t : n
}

function p(e, t, n) {
  let i = (0, l.useStateFromStores)([d.default], () => d.default.getSubscriptionListingsForGuild(e)),
    r = (0, c.useEditStateStore)(t => t.editStateIdsForGroup[e]),
    s = (0, c.useEditStateStore)(e => e.listings);
  if (void 0 === n || void 0 === t) return null;
  let u = i.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
    o = [];
  void 0 !== r && r.forEach(e => {
    let t = s[e],
      n = null == t ? void 0 : t.priceTier;
    null != n && o.push(n)
  });
  let a = new Set(o.concat(u));
  if (!a.has(n)) return null;
  let f = t.indexOf(n);
  if (-1 === f) return null;
  let S = [];
  for (let e = f + 1; e < t.length && (!a.has(t[e]) && S.push(t[e]), 3 !== S.length); e++);
  return S
}

function C(e) {
  let t = c.useEditStateStore.getState().editStateIdsForGroup[e],
    n = c.useEditStateStore.getState().listings,
    i = new Set;
  null != t && t.forEach(e => {
    var t;
    let r = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
    null == r || r.forEach(e => {
      null != S.default.getChannel(e.ref_id) && i.add(e.ref_id)
    })
  });
  let r = [];
  for (let t of i) {
    let n = S.default.getChannel(t);
    if (null != n) {
      let t = n.set("guild_id", e);
      r.push(t)
    }
  }
  return r
}

function I(e) {
  let t = C(e);
  g[e] = t, t.forEach(e => {
    let t = e.set("flags", _.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    s.default.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    })
  })
}

function T(e) {
  var t;
  (null !== (t = g[e]) && void 0 !== t ? t : C(e)).forEach(e => {
    s.default.dispatch({
      type: "CHANNEL_DELETE",
      channel: e
    })
  })
}
async function m(e, t) {
  let n = [],
    i = [];
  if (t.forEach(t => {
      let r = S.default.getChannel(t.ref_id);
      null != r && (n.push(u.default.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r))
    }), 0 !== n.length)(await Promise.allSettled(n)).forEach((n, r) => {
    let l = i[r].id;
    if ("fulfilled" === n.status) {
      let t = n.value.body,
        i = c.useEditStateStore.getState().editStateIdsForGroup[e],
        r = c.useEditStateStore.getState().listings;
      null != i && i.forEach(e => {
        var n;
        let i = null === (n = r[e]) || void 0 === n ? void 0 : n.channelBenefits;
        null == i || i.forEach(e => {
          e.ref_id === l && (e.ref_id = t.id)
        })
      })
    } else if (null != t) {
      let e = t.findIndex(e => e.ref_id === l); - 1 !== e && (null == t || t.splice(e, 1))
    }
  })
}

function R(e, t) {
  var n, i;
  let r = c.useEditStateStore.getState().listings[e],
    l = null == r ? void 0 : r.usedTemplate;
  if (null == l) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let s = S.default.getTemplateWithCategory(t, l);
  if (null == s) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let u = s.listings[0];
  if ((null == r ? void 0 : r.name) !== u.name || (null == r ? void 0 : r.description) !== u.description || (null == r ? void 0 : r.priceTier) !== u.price_tier || (null == r ? void 0 : r.image) !== u.image || (null == r ? void 0 : r.roleColor) !== u.role_color || (null == r ? void 0 : null === (n = r.channelBenefits) || void 0 === n ? void 0 : n.length) !== u.channels.length || (null == r ? void 0 : null === (i = r.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== u.additional_perks.length) return {
    templateCategory: s.category,
    hasChangeFromTemplate: !0
  };
  for (let e = 0; e < u.channels.length; e++) {
    let t = r.channelBenefits[e],
      n = u.channels[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: s.category,
      hasChangeFromTemplate: !0
    }
  }
  for (let e = 0; e < u.additional_perks.length; e++) {
    let t = r.intangibleBenefits[e],
      n = u.additional_perks[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: s.category,
      hasChangeFromTemplate: !0
    }
  }
  return {
    templateCategory: s.category,
    hasChangeFromTemplate: !1
  }
}

function N(e) {
  return (0, f.canManageGuildRoleSubscriptions)(e) && e.hasFeature(E.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, a.isUserEligibleForTierTemplates)() && (0, a.isGuildEligibleForTierTemplates)(e.id)
}