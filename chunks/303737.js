"use strict";
n.d(t, {
  GN: function() {
    return m
  },
  be: function() {
    return N
  },
  g4: function() {
    return S
  },
  m7: function() {
    return f
  },
  r4: function() {
    return O
  },
  sO: function() {
    return R
  },
  yL: function() {
    return p
  }
}), n(653041), n(47120), n(998459);
var i = n(991637),
  r = n.n(i),
  s = n(399606),
  o = n(570140),
  a = n(333848),
  l = n(592125),
  u = n(923726),
  _ = n(289393),
  c = n(944537),
  d = n(144507),
  E = n(853439),
  I = n(981631),
  T = n(176505);
r().shim();
let h = {};

function f(e) {
  let t = (0, s.e7)([l.Z], () => l.Z.getChannel(e)),
    n = (0, s.e7)([E.Z], () => E.Z.getChannel(e));
  return null != t ? t : n
}

function S(e, t, n) {
  let i = (0, s.e7)([_.Z], () => _.Z.getSubscriptionListingsForGuild(e)),
    r = (0, c.n)(t => t.editStateIdsForGroup[e]),
    o = (0, c.n)(e => e.listings);
  if (void 0 === n || void 0 === t) return null;
  let a = i.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
    l = [];
  void 0 !== r && r.forEach(e => {
    let t = o[e],
      n = null == t ? void 0 : t.priceTier;
    null != n && l.push(n)
  });
  let u = new Set(l.concat(a));
  if (!u.has(n)) return null;
  let d = t.indexOf(n);
  if (-1 === d) return null;
  let E = [];
  for (let e = d + 1; e < t.length && (!u.has(t[e]) && E.push(t[e]), 3 !== E.length); e++);
  return E
}

function A(e) {
  let t = c.n.getState().editStateIdsForGroup[e],
    n = c.n.getState().listings,
    i = new Set;
  null != t && t.forEach(e => {
    var t;
    let r = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
    null == r || r.forEach(e => {
      null != E.Z.getChannel(e.ref_id) && i.add(e.ref_id)
    })
  });
  let r = [];
  for (let t of i) {
    let n = E.Z.getChannel(t);
    if (null != n) {
      let t = n.set("guild_id", e);
      r.push(t)
    }
  }
  return r
}

function N(e) {
  let t = A(e);
  h[e] = t, t.forEach(e => {
    let t = e.set("flags", T.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    o.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    })
  })
}

function m(e) {
  var t;
  (null !== (t = h[e]) && void 0 !== t ? t : A(e)).forEach(e => {
    o.Z.dispatch({
      type: "CHANNEL_DELETE",
      channel: e
    })
  })
}
async function O(e, t) {
  let n = [],
    i = [];
  if (t.forEach(t => {
      let r = E.Z.getChannel(t.ref_id);
      null != r && (n.push(a.Z.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r))
    }), 0 !== n.length)(await Promise.allSettled(n)).forEach((n, r) => {
    let s = i[r].id;
    if ("fulfilled" === n.status) {
      let t = n.value.body,
        i = c.n.getState().editStateIdsForGroup[e],
        r = c.n.getState().listings;
      null != i && i.forEach(e => {
        var n;
        let i = null === (n = r[e]) || void 0 === n ? void 0 : n.channelBenefits;
        null == i || i.forEach(e => {
          e.ref_id === s && (e.ref_id = t.id)
        })
      })
    } else if (null != t) {
      let e = t.findIndex(e => e.ref_id === s); - 1 !== e && (null == t || t.splice(e, 1))
    }
  })
}

function p(e, t) {
  var n, i;
  let r = c.n.getState().listings[e],
    s = null == r ? void 0 : r.usedTemplate;
  if (null == s) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let o = E.Z.getTemplateWithCategory(t, s);
  if (null == o) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let a = o.listings[0];
  if ((null == r ? void 0 : r.name) !== a.name || (null == r ? void 0 : r.description) !== a.description || (null == r ? void 0 : r.priceTier) !== a.price_tier || (null == r ? void 0 : r.image) !== a.image || (null == r ? void 0 : r.roleColor) !== a.role_color || (null == r ? void 0 : null === (n = r.channelBenefits) || void 0 === n ? void 0 : n.length) !== a.channels.length || (null == r ? void 0 : null === (i = r.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== a.additional_perks.length) return {
    templateCategory: o.category,
    hasChangeFromTemplate: !0
  };
  for (let e = 0; e < a.channels.length; e++) {
    let t = r.channelBenefits[e],
      n = a.channels[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: o.category,
      hasChangeFromTemplate: !0
    }
  }
  for (let e = 0; e < a.additional_perks.length; e++) {
    let t = r.intangibleBenefits[e],
      n = a.additional_perks[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: o.category,
      hasChangeFromTemplate: !0
    }
  }
  return {
    templateCategory: o.category,
    hasChangeFromTemplate: !1
  }
}

function R(e) {
  return (0, d.H2)(e) && e.hasFeature(I.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.$F)() && (0, u.hQ)(e.id)
}