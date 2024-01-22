"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  r = n.n(l),
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
  A = n("646718"),
  T = n("782340"),
  R = n("451862"),
  I = n("173791"),
  S = n("926622"),
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
      gifter: l,
      sku: i,
      application: u,
      subscriptionPlan: E
    } = e, f = null == l ? T.default.Messages.GIFT_CODE_AUTH_GIFTED : T.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
      username: l.username
    }), h = i.name;
    return null != E && (h = (E.interval === A.SubscriptionIntervalTypes.MONTH ? T.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : T.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
      skuName: i.name,
      intervalCount: E.intervalCount
    })), (0, s.jsxs)(a.Fragment, {
      children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
        defaultAnimationState: d.AnimationState.LOOP,
        giftStyle: n.giftStyle,
        className: R.seasonalIcon
      }) : (0, s.jsx)(g.Avatar, {
        src: null != l ? l.getAvatarURL(void 0, 100) : null,
        size: o.AvatarSizes.DEPRECATED_SIZE_100,
        className: S.marginBottom20
      }), null != t ? (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(g.SubTitle, {
          children: T.default.Messages.INVITE_MODAL_ERROR_TITLE
        }), (0, s.jsx)(g.Title, {
          children: t
        })]
      }) : (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(g.SubTitle, {
          children: f
        }), (0, s.jsxs)(g.Title, {
          className: r(S.marginTop8, I.flexCenter),
          children: [i.productLine !== p.SKUProductLines.COLLECTIBLES && (0, s.jsx)(_.default, {
            size: _.default.Sizes.MEDIUM,
            className: R.applicationIcon,
            game: u,
            skuId: i.id
          }), h]
        })]
      })]
    })
  })