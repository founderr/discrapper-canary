var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(399606),
  l = n(481060),
  o = n(78839),
  c = n(63063),
  d = n(276800),
  _ = n(248042),
  u = n(409100),
  E = n(725727),
  T = n(474936),
  I = n(981631),
  R = n(689938),
  C = n(482101);
t.Z = function(e) {
  let {
isFullScreen: t,
buttonClassName: a
  } = e, {
promotion: g
  } = (0, E.mq)(), p = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
  if (!(0, _.Vi)())
return null;
  let A = new Date(g.endDate);
  return (0, s.jsxs)('div', {
className: r()(C.banner, {
  [C.bannerFullScreen]: t
}),
children: [
  (0, s.jsx)('div', {
    className: C.bannerLeftImageContainer,
    children: (0, s.jsx)('img', {
      alt: '',
      src: t ? n(277698) : n(144823),
      className: C.image
    })
  }),
  (0, s.jsxs)('div', {
    className: C.bannerContent,
    children: [
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(l.Heading, {
            variant: 'display-sm',
            color: 'header-primary',
            children: null == p ? R.Z.Messages.BOGO_MARKETING_PAGE_BANNER_HEADER_2024 : R.Z.Messages.BOGO_MARKETING_PAGE_BANNER_NON_NITRO_HEADER_2024
          }),
          (0, s.jsx)(l.Text, {
            className: C.countdown,
            variant: 'text-sm/bold',
            children: (0, s.jsx)(d.Z, {
              endDate: A
            })
          }),
          (0, s.jsx)(l.Text, {
            variant: 'text-sm/medium',
            color: 'header-primary',
            children: R.Z.Messages.BOGO_MARKETING_PAGE_BANNER_SUBHEADER_2024.format({
              helpCenterLink: c.Z.getArticleURL(I.BhN.SUMMER_BOGO_2024)
            })
          })
        ]
      }),
      (0, s.jsx)(u.Z, {
        buttonText: R.Z.Messages.BOGO_CLAIM_OFFER,
        buttonTextClassName: C.subscribeButtonText,
        subscriptionTier: T.Si.TIER_2,
        showIcon: !1,
        className: null != a ? a : C.subscribeButton,
        forceInverted: !0
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: C.bannerRightImageContainer,
    children: (0, s.jsx)('img', {
      alt: '',
      src: t ? n(10501) : n(485978),
      className: C.image
    })
  })
]
  });
};