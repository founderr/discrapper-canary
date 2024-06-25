var r = n(735250),
  s = n(470079),
  i = n(120356),
  a = n.n(i),
  o = n(442837),
  l = n(481060),
  c = n(812206),
  u = n(388905),
  d = n(479446),
  h = n(981632),
  _ = n(594174),
  p = n(509545),
  f = n(55563),
  g = n(366695),
  E = n(296848),
  m = n(981631),
  I = n(474936),
  A = n(689938),
  N = n(293377),
  C = n(83922),
  T = n(331651);
t.Z = o.ZP.connectStores([f.Z, c.Z, p.Z, _.default], e => {
  let {
    giftCode: t
  } = e, n = f.Z.get(t.skuId), {
    subscriptionPlanId: r
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != r ? (0, E.oE)(r) : null,
    application: c.Z.getApplication(n.applicationId),
    gifter: _.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: i,
    sku: o,
    application: c,
    subscriptionPlan: _
  } = e, p = null == i ? A.Z.Messages.GIFT_CODE_AUTH_GIFTED : A.Z.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
    username: i.username
  }), f = o.name;
  return null != _ && (f = (_.interval === I.rV.MONTH ? A.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : A.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
    skuName: o.name,
    intervalCount: _.intervalCount
  })), (0, r.jsxs)(s.Fragment, {
    children: [null != n.giftStyle ? (0, r.jsx)(h.Z, {
      defaultAnimationState: d.S.LOOP,
      giftStyle: n.giftStyle,
      className: N.seasonalIcon
    }) : (0, r.jsx)(u.qE, {
      src: null != i ? i.getAvatarURL(void 0, 100) : null,
      size: l.AvatarSizes.DEPRECATED_SIZE_100,
      className: T.marginBottom20
    }), null != t ? (0, r.jsxs)(s.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: A.Z.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, r.jsx)(u.Dx, {
        children: t
      })]
    }) : (0, r.jsxs)(s.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: p
      }), (0, r.jsxs)(u.Dx, {
        className: a()(T.marginTop8, C.flexCenter),
        children: [o.productLine !== m.POd.COLLECTIBLES && (0, r.jsx)(g.Z, {
          size: g.Z.Sizes.MEDIUM,
          className: N.applicationIcon,
          game: c,
          skuId: o.id
        }), f]
      })]
    })]
  })
})