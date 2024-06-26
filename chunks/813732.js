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
  S = t(497321),
  I = t(167354),
  N = t(15640),
  C = t(406174),
  A = t(810762),
  m = t(681833),
  O = t(856888),
  g = t(921801),
  h = t(246946),
  R = t(663389),
  p = t(351402),
  x = t(853872),
  M = t(78839),
  D = t(580130),
  f = t(285952),
  L = t(366695),
  P = t(626135),
  Z = t(74538),
  v = t(639056),
  b = t(52164),
  j = t(91430),
  U = t(474936),
  B = t(981631),
  G = t(526761),
  F = t(726985),
  V = t(689938),
  y = t(631835);

function Y() {
  return (0, n.jsx)(l.Card, {
    className: y.noItemsCard,
    type: l.Card.Types.CUSTOM,
    children: (0, n.jsxs)(f.Z, {
      align: f.Z.Align.CENTER,
      children: [(0, n.jsx)(L.Z, {
        game: null,
        size: L.Z.Sizes.SMALL,
        className: y.noItemsIcon
      }), (0, n.jsx)("span", {
        className: y.cardText,
        children: V.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
      })]
    })
  })
}

function H() {
  let e = (0, o.e7)([D.Z], () => D.Z.getForApplication(U.RQ));
  return a.useEffect(() => {
    (0, E.yD)(U.RQ)
  }, []), (0, n.jsxs)("section", {
    className: y.sectionAccountCredit,
    children: [(0, n.jsx)(l.FormTitle, {
      className: y.accountCreditTitle,
      tag: l.FormTitleTags.H1,
      children: V.Z.Messages.BILLING_SUBSCRIPTION_CREDIT
    }), (0, n.jsx)("p", {
      className: y.accountCreditDescription,
      children: V.Z.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
    }), null != e && Z.ZP.hasAccountCredit(e) ? (0, n.jsx)(v.Z, {
      className: y.accountCredit,
      entitlements: e
    }) : (0, n.jsx)(Y, {})]
  })
}
s.Z = function() {
  let e = (0, o.e7)([M.ZP], () => M.ZP.getPremiumTypeSubscription()),
    s = (0, I.Z)({
      subscriptionFilter: e => j.eS.has(e.status)
    }),
    t = s.length > 1,
    i = (0, o.e7)([x.Z], () => null != e && null != e.paymentSourceId ? x.Z.getPaymentSource(e.paymentSourceId) : null, [e]),
    E = (0, o.e7)([M.ZP], () => M.ZP.hasFetchedSubscriptions()),
    D = (0, o.e7)([p.Z], () => p.Z.isBusy),
    f = (0, N.V)(),
    L = (0, o.e7)([R.Z], () => R.Z.getSubsection());
  return (a.useEffect(() => (c.Z.wait(() => {
    (0, u.Y2)(), d.jg(), (0, _.X8)(), d.tZ()
  }), function() {
    T.Z.clearSubsection()
  }), []), h.Z.enabled) ? (0, n.jsx)(S.Z, {}) : E && f ? L === G.cP ? (0, n.jsx)(A.Z, {
    onGoBack: () => T.Z.clearSubsection()
  }) : L === G.XZ ? (0, n.jsx)(O.Z, {
    onGoBack: () => T.Z.clearSubsection()
  }) : (0, n.jsx)("div", {
    className: y.container,
    children: (0, n.jsxs)("div", {
      className: y.content,
      children: [t ? (0, n.jsx)(j.Yn, {}) : null, null != e ? (0, n.jsx)(j.ZP, {
        className: y.subscriptionDetails,
        subscription: e,
        paymentSource: i,
        busy: D,
        subscriptions: s
      }) : (0, n.jsx)(j.MM, {
        className: y.subscriptionDetails
      }), (0, n.jsx)(C.Z, {
        onClickManageSubscription: () => T.Z.setSection(B.oAB.SUBSCRIPTIONS, G.cP)
      }), (0, n.jsx)(m.Z, {
        onClickManageSubscription: () => {
          T.Z.setSection(B.oAB.SUBSCRIPTIONS, G.XZ), P.default.track(B.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
        }
      }), (0, n.jsx)(g.F, {
        setting: F.s6.SUBSCRIPTIONS_CREDITS,
        children: (0, n.jsx)(H, {})
      }), null != e ? (0, n.jsx)(b.Z, {
        subscription: e,
        withOverheadSeparator: !1
      }) : null]
    })
  }) : (0, n.jsx)("div", {
    className: r()(y.container, y.loading),
    children: (0, n.jsx)(l.Spinner, {})
  })
}