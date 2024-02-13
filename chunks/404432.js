"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("37983"),
  a = n("884691"),
  r = n("414456"),
  l = n.n(r),
  i = n("446674"),
  o = n("77078"),
  u = n("299285"),
  d = n("210721"),
  c = n("65324"),
  E = n("697218"),
  f = n("10514"),
  h = n("552712"),
  _ = n("953109"),
  g = n("124969"),
  m = n("380186"),
  p = n("49111"),
  T = n("646718"),
  R = n("782340"),
  A = n("451862"),
  S = n("173791"),
  I = n("926622"),
  N = i.default.connectStores([h.default, u.default, f.default, E.default], e => {
    let {
      giftCode: t
    } = e, n = h.default.get(t.skuId), {
      subscriptionPlanId: s
    } = t, a = null != s ? (0, m.getOrFetchSubscriptionPlan)(s) : null;
    return {
      sku: n,
      subscriptionPlan: a,
      application: u.default.getApplication(n.applicationId),
      gifter: E.default.getUser(t.userId)
    }
  })(e => {
    let {
      error: t,
      giftCode: n,
      gifter: r,
      sku: i,
      application: u,
      subscriptionPlan: E
    } = e, f = null == r ? R.default.Messages.GIFT_CODE_AUTH_GIFTED : R.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
      username: r.username
    }), h = i.name;
    return null != E && (h = (E.interval === T.SubscriptionIntervalTypes.MONTH ? R.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : R.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
      skuName: i.name,
      intervalCount: E.intervalCount
    })), (0, s.jsxs)(a.Fragment, {
      children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
        defaultAnimationState: d.AnimationState.LOOP,
        giftStyle: n.giftStyle,
        className: A.seasonalIcon
      }) : (0, s.jsx)(g.Avatar, {
        src: null != r ? r.getAvatarURL(void 0, 100) : null,
        size: o.AvatarSizes.DEPRECATED_SIZE_100,
        className: I.marginBottom20
      }), null != t ? (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(g.SubTitle, {
          children: R.default.Messages.INVITE_MODAL_ERROR_TITLE
        }), (0, s.jsx)(g.Title, {
          children: t
        })]
      }) : (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(g.SubTitle, {
          children: f
        }), (0, s.jsxs)(g.Title, {
          className: l(I.marginTop8, S.flexCenter),
          children: [i.productLine !== p.SKUProductLines.COLLECTIBLES && (0, s.jsx)(_.default, {
            size: _.default.Sizes.MEDIUM,
            className: A.applicationIcon,
            game: u,
            skuId: i.id
          }), h]
        })]
      })]
    })
  })