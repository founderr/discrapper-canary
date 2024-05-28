"use strict";
n.r(t);
var s = n("735250"),
  a = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("442837"),
  o = n("481060"),
  u = n("812206"),
  d = n("479446"),
  c = n("981632"),
  f = n("594174"),
  h = n("509545"),
  E = n("55563"),
  g = n("366695"),
  m = n("819570"),
  _ = n("296848"),
  p = n("981631"),
  T = n("474936"),
  I = n("689938"),
  S = n("354052"),
  A = n("961047"),
  N = n("611273");
t.default = r.default.connectStores([E.default, u.default, h.default, f.default], e => {
  let {
    giftCode: t
  } = e, n = E.default.get(t.skuId), {
    subscriptionPlanId: s
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != s ? (0, _.getOrFetchSubscriptionPlan)(s) : null,
    application: u.default.getApplication(n.applicationId),
    gifter: f.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: i,
    sku: r,
    application: u,
    subscriptionPlan: f
  } = e, h = null == i ? I.default.Messages.GIFT_CODE_AUTH_GIFTED : I.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
    username: i.username
  }), E = r.name;
  return null != f && (E = (f.interval === T.SubscriptionIntervalTypes.MONTH ? I.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : I.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
    skuName: r.name,
    intervalCount: f.intervalCount
  })), (0, s.jsxs)(a.Fragment, {
    children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
      defaultAnimationState: d.AnimationState.LOOP,
      giftStyle: n.giftStyle,
      className: S.seasonalIcon
    }) : (0, s.jsx)(m.Avatar, {
      src: null != i ? i.getAvatarURL(void 0, 100) : null,
      size: o.AvatarSizes.DEPRECATED_SIZE_100,
      className: N.marginBottom20
    }), null != t ? (0, s.jsxs)(a.Fragment, {
      children: [(0, s.jsx)(m.SubTitle, {
        children: I.default.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, s.jsx)(m.Title, {
        children: t
      })]
    }) : (0, s.jsxs)(a.Fragment, {
      children: [(0, s.jsx)(m.SubTitle, {
        children: h
      }), (0, s.jsxs)(m.Title, {
        className: l()(N.marginTop8, A.flexCenter),
        children: [r.productLine !== p.SKUProductLines.COLLECTIBLES && (0, s.jsx)(g.default, {
          size: g.default.Sizes.MEDIUM,
          className: S.applicationIcon,
          game: u,
          skuId: r.id
        }), E]
      })]
    })]
  })
})