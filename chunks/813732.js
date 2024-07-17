var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(570140),
  d = t(355467),
  _ = t(179360),
  E = t(496929),
  u = t(821849),
  T = t(230711),
  I = t(497321),
  S = t(167354),
  N = t(15640),
  C = t(925329),
  m = t(406174),
  A = t(810762),
  h = t(681833),
  g = t(856888),
  O = t(921801),
  p = t(246946),
  R = t(663389),
  x = t(351402),
  M = t(853872),
  D = t(78839),
  f = t(580130),
  P = t(285952),
  L = t(626135),
  Z = t(74538),
  b = t(639056),
  v = t(52164),
  j = t(91430),
  B = t(474936),
  U = t(981631),
  G = t(526761),
  F = t(726985),
  y = t(689938),
  V = t(533866);

function Y() {
  return (0, n.jsx)(l.Card, {
className: V.noItemsCard,
type: l.Card.Types.CUSTOM,
children: (0, n.jsxs)(P.Z, {
  align: P.Z.Align.CENTER,
  children: [
    (0, n.jsx)(C.Z, {
      game: null,
      size: C.Z.Sizes.SMALL,
      className: V.noItemsIcon
    }),
    (0, n.jsx)('span', {
      className: V.cardText,
      children: y.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
    })
  ]
})
  });
}

function w() {
  let e = (0, o.e7)([f.Z], () => f.Z.getForApplication(B.RQ));
  return a.useEffect(() => {
(0, E.yD)(B.RQ);
  }, []), (0, n.jsxs)('section', {
className: V.sectionAccountCredit,
children: [
  (0, n.jsx)(l.FormTitle, {
    className: V.accountCreditTitle,
    tag: l.FormTitleTags.H1,
    children: y.Z.Messages.BILLING_SUBSCRIPTION_CREDIT
  }),
  (0, n.jsx)('p', {
    className: V.accountCreditDescription,
    children: y.Z.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
  }),
  null != e && Z.ZP.hasAccountCredit(e) ? (0, n.jsx)(b.Z, {
    className: V.accountCredit,
    entitlements: e
  }) : (0, n.jsx)(Y, {})
]
  });
}
s.Z = function() {
  let e = (0, o.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
s = (0, S.Z)({
  subscriptionFilter: e => j.eS.has(e.status)
}),
t = s.length > 1,
i = (0, o.e7)([M.Z], () => null != e && null != e.paymentSourceId ? M.Z.getPaymentSource(e.paymentSourceId) : null, [e]),
E = (0, o.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
C = (0, o.e7)([x.Z], () => x.Z.isBusy),
f = (0, N.V)(),
P = (0, o.e7)([R.Z], () => R.Z.getSubsection());
  return (a.useEffect(() => (c.Z.wait(() => {
(0, u.Y2)(), d.jg(), (0, _.X8)(), d.tZ();
  }), function() {
T.Z.clearSubsection();
  }), []), p.Z.enabled) ? (0, n.jsx)(I.Z, {}) : E && f ? P === G.cP ? (0, n.jsx)(A.Z, {
onGoBack: () => T.Z.clearSubsection()
  }) : P === G.XZ ? (0, n.jsx)(g.Z, {
onGoBack: () => T.Z.clearSubsection()
  }) : (0, n.jsx)('div', {
className: V.container,
children: (0, n.jsxs)('div', {
  className: V.content,
  children: [
    t ? (0, n.jsx)(j.Yn, {}) : null,
    null != e ? (0, n.jsx)(j.ZP, {
      className: V.subscriptionDetails,
      subscription: e,
      paymentSource: i,
      busy: C,
      subscriptions: s
    }) : (0, n.jsx)(j.MM, {
      className: V.subscriptionDetails
    }),
    (0, n.jsx)(m.Z, {
      onClickManageSubscription: () => T.Z.setSection(U.oAB.SUBSCRIPTIONS, G.cP)
    }),
    (0, n.jsx)(h.Z, {
      onClickManageSubscription: () => {
        T.Z.setSection(U.oAB.SUBSCRIPTIONS, G.XZ), L.default.track(U.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
      }
    }),
    (0, n.jsx)(O.F, {
      setting: F.s6.SUBSCRIPTIONS_CREDITS,
      children: (0, n.jsx)(w, {})
    }),
    null != e ? (0, n.jsx)(v.Z, {
      subscription: e,
      withOverheadSeparator: !1
    }) : null
  ]
})
  }) : (0, n.jsx)('div', {
className: r()(V.container, V.loading),
children: (0, n.jsx)(l.Spinner, {})
  });
};