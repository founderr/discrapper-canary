var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(481060),
  c = s(570140),
  d = s(355467),
  _ = s(179360),
  E = s(496929),
  u = s(821849),
  T = s(230711),
  I = s(497321),
  S = s(167354),
  N = s(15640),
  C = s(600164),
  m = s(925329),
  A = s(406174),
  g = s(810762),
  h = s(681833),
  O = s(856888),
  p = s(921801),
  R = s(246946),
  x = s(663389),
  M = s(351402),
  f = s(853872),
  D = s(78839),
  P = s(580130),
  L = s(626135),
  b = s(74538),
  Z = s(639056),
  v = s(52164),
  j = s(91430),
  B = s(474936),
  U = s(981631),
  G = s(526761),
  F = s(726985),
  y = s(689938),
  V = s(533866);

function Y() {
  return (0, n.jsx)(l.Card, {
className: V.noItemsCard,
type: l.Card.Types.CUSTOM,
children: (0, n.jsxs)(C.Z, {
  align: C.Z.Align.CENTER,
  children: [
    (0, n.jsx)(m.Z, {
      game: null,
      size: m.Z.Sizes.SMALL,
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
  let e = (0, o.e7)([P.Z], () => P.Z.getForApplication(B.RQ));
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
  null != e && b.ZP.hasAccountCredit(e) ? (0, n.jsx)(Z.Z, {
    className: V.accountCredit,
    entitlements: e
  }) : (0, n.jsx)(Y, {})
]
  });
}
t.Z = function() {
  let e = (0, o.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
t = (0, S.Z)({
  subscriptionFilter: e => j.eS.has(e.status)
}),
s = t.length > 1,
i = (0, o.e7)([f.Z], () => null != e && null != e.paymentSourceId ? f.Z.getPaymentSource(e.paymentSourceId) : null, [e]),
E = (0, o.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
C = (0, o.e7)([M.Z], () => M.Z.isBusy),
m = (0, N.V)(),
P = (0, o.e7)([x.Z], () => x.Z.getSubsection());
  return (a.useEffect(() => (c.Z.wait(() => {
(0, u.Y2)(), d.jg(), (0, _.X8)(), d.tZ();
  }), function() {
T.Z.clearSubsection();
  }), []), R.Z.enabled) ? (0, n.jsx)(I.Z, {}) : E && m ? P === G.cP ? (0, n.jsx)(g.Z, {
onGoBack: () => T.Z.clearSubsection()
  }) : P === G.XZ ? (0, n.jsx)(O.Z, {
onGoBack: () => T.Z.clearSubsection()
  }) : (0, n.jsx)('div', {
className: V.container,
children: (0, n.jsxs)('div', {
  className: V.content,
  children: [
    s ? (0, n.jsx)(j.Yn, {}) : null,
    null != e ? (0, n.jsx)(j.ZP, {
      className: V.subscriptionDetails,
      subscription: e,
      paymentSource: i,
      busy: C,
      subscriptions: t
    }) : (0, n.jsx)(j.MM, {
      className: V.subscriptionDetails
    }),
    (0, n.jsx)(A.Z, {
      onClickManageSubscription: () => T.Z.setSection(U.oAB.SUBSCRIPTIONS, G.cP)
    }),
    (0, n.jsx)(h.Z, {
      onClickManageSubscription: () => {
        T.Z.setSection(U.oAB.SUBSCRIPTIONS, G.XZ), L.default.track(U.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
      }
    }),
    (0, n.jsx)(p.F, {
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