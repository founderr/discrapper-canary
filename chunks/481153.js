var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  o = n(442837),
  l = n(481060),
  c = n(812206),
  u = n(388905),
  d = n(479446),
  h = n(981632),
  E = n(594174),
  _ = n(509545),
  g = n(55563),
  f = n(366695),
  p = n(296848),
  m = n(981631),
  N = n(474936),
  I = n(689938),
  A = n(293377),
  R = n(83922),
  T = n(331651);
t.Z = o.ZP.connectStores([g.Z, c.Z, _.Z, E.default], e => {
  let {
    giftCode: t
  } = e, n = g.Z.get(t.skuId), {
    subscriptionPlanId: s
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != s ? (0, p.oE)(s) : null,
    application: c.Z.getApplication(n.applicationId),
    gifter: E.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: i,
    sku: o,
    application: c,
    subscriptionPlan: E
  } = e, _ = null == i ? I.Z.Messages.GIFT_CODE_AUTH_GIFTED : I.Z.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
    username: i.username
  }), g = o.name;
  return null != E && (g = (E.interval === N.rV.MONTH ? I.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : I.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
    skuName: o.name,
    intervalCount: E.intervalCount
  })), (0, s.jsxs)(r.Fragment, {
    children: [null != n.giftStyle ? (0, s.jsx)(h.Z, {
      defaultAnimationState: d.S.LOOP,
      giftStyle: n.giftStyle,
      className: A.seasonalIcon
    }) : (0, s.jsx)(u.qE, {
      src: null != i ? i.getAvatarURL(void 0, 100) : null,
      size: l.AvatarSizes.DEPRECATED_SIZE_100,
      className: T.marginBottom20
    }), null != t ? (0, s.jsxs)(r.Fragment, {
      children: [(0, s.jsx)(u.DK, {
        children: I.Z.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, s.jsx)(u.Dx, {
        children: t
      })]
    }) : (0, s.jsxs)(r.Fragment, {
      children: [(0, s.jsx)(u.DK, {
        children: _
      }), (0, s.jsxs)(u.Dx, {
        className: a()(T.marginTop8, R.flexCenter),
        children: [o.productLine !== m.POd.COLLECTIBLES && (0, s.jsx)(f.Z, {
          size: f.Z.Sizes.MEDIUM,
          className: A.applicationIcon,
          game: c,
          skuId: o.id
        }), g]
      })]
    })]
  })
})