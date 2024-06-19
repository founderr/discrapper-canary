var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  l = n(442837),
  o = n(481060),
  u = n(812206),
  c = n(388905),
  d = n(479446),
  h = n(981632),
  E = n(594174),
  _ = n(509545),
  m = n(55563),
  g = n(366695),
  f = n(296848),
  p = n(981631),
  I = n(474936),
  N = n(689938),
  A = n(293377),
  T = n(83922),
  R = n(331651);
t.Z = l.ZP.connectStores([m.Z, u.Z, _.Z, E.default], e => {
  let {
    giftCode: t
  } = e, n = m.Z.get(t.skuId), {
    subscriptionPlanId: s
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != s ? (0, f.oE)(s) : null,
    application: u.Z.getApplication(n.applicationId),
    gifter: E.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: i,
    sku: l,
    application: u,
    subscriptionPlan: E
  } = e, _ = null == i ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
    username: i.username
  }), m = l.name;
  return null != E && (m = (E.interval === I.rV.MONTH ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
    skuName: l.name,
    intervalCount: E.intervalCount
  })), (0, s.jsxs)(r.Fragment, {
    children: [null != n.giftStyle ? (0, s.jsx)(h.Z, {
      defaultAnimationState: d.S.LOOP,
      giftStyle: n.giftStyle,
      className: A.seasonalIcon
    }) : (0, s.jsx)(c.qE, {
      src: null != i ? i.getAvatarURL(void 0, 100) : null,
      size: o.AvatarSizes.DEPRECATED_SIZE_100,
      className: R.marginBottom20
    }), null != t ? (0, s.jsxs)(r.Fragment, {
      children: [(0, s.jsx)(c.DK, {
        children: N.Z.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, s.jsx)(c.Dx, {
        children: t
      })]
    }) : (0, s.jsxs)(r.Fragment, {
      children: [(0, s.jsx)(c.DK, {
        children: _
      }), (0, s.jsxs)(c.Dx, {
        className: a()(R.marginTop8, T.flexCenter),
        children: [l.productLine !== p.POd.COLLECTIBLES && (0, s.jsx)(g.Z, {
          size: g.Z.Sizes.MEDIUM,
          className: A.applicationIcon,
          game: u,
          skuId: l.id
        }), m]
      })]
    })]
  })
})