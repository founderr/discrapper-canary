var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(570140),
  E = t(355467),
  d = t(179360),
  _ = t(496929),
  T = t(821849),
  S = t(230711),
  u = t(497321),
  I = t(167354),
  N = t(15640),
  A = t(406174),
  C = t(810762),
  O = t(681833),
  m = t(856888),
  h = t(921801),
  g = t(246946),
  R = t(663389),
  M = t(351402),
  x = t(853872),
  p = t(78839),
  D = t(580130),
  L = t(285952),
  P = t(366695),
  Z = t(626135),
  f = t(74538),
  v = t(639056),
  j = t(52164),
  U = t(91430),
  B = t(474936),
  b = t(981631),
  G = t(526761),
  F = t(726985),
  V = t(689938),
  y = t(631835);

function Y() {
  return (0, n.jsx)(o.Card, {
    className: y.noItemsCard,
    type: o.Card.Types.CUSTOM,
    children: (0, n.jsxs)(L.Z, {
      align: L.Z.Align.CENTER,
      children: [(0, n.jsx)(P.Z, {
        game: null,
        size: P.Z.Sizes.SMALL,
        className: y.noItemsIcon
      }), (0, n.jsx)("span", {
        className: y.cardText,
        children: V.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
      })]
    })
  })
}

function H() {
  let e = (0, r.e7)([D.Z], () => D.Z.getForApplication(B.RQ));
  return i.useEffect(() => {
    (0, _.yD)(B.RQ)
  }, []), (0, n.jsxs)("section", {
    className: y.sectionAccountCredit,
    children: [(0, n.jsx)(o.FormTitle, {
      className: y.accountCreditTitle,
      tag: o.FormTitleTags.H1,
      children: V.Z.Messages.BILLING_SUBSCRIPTION_CREDIT
    }), (0, n.jsx)("p", {
      className: y.accountCreditDescription,
      children: V.Z.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
    }), null != e && f.ZP.hasAccountCredit(e) ? (0, n.jsx)(v.Z, {
      className: y.accountCredit,
      entitlements: e
    }) : (0, n.jsx)(Y, {})]
  })
}
s.Z = function() {
  let e = (0, r.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
    s = (0, I.Z)({
      subscriptionFilter: e => U.eS.has(e.status)
    }),
    t = s.length > 1,
    a = (0, r.e7)([x.Z], () => null != e && null != e.paymentSourceId ? x.Z.getPaymentSource(e.paymentSourceId) : null, [e]),
    _ = (0, r.e7)([p.ZP], () => p.ZP.hasFetchedSubscriptions()),
    D = (0, r.e7)([M.Z], () => M.Z.isBusy),
    L = (0, N.V)(),
    P = (0, r.e7)([R.Z], () => R.Z.getSubsection());
  return (i.useEffect(() => (c.Z.wait(() => {
    (0, T.Y2)(), E.jg(), (0, d.X8)(), E.tZ()
  }), function() {
    S.Z.clearSubsection()
  }), []), g.Z.enabled) ? (0, n.jsx)(u.Z, {}) : _ && L ? P === G.cP ? (0, n.jsx)(C.Z, {
    onGoBack: () => S.Z.clearSubsection()
  }) : P === G.XZ ? (0, n.jsx)(m.Z, {
    onGoBack: () => S.Z.clearSubsection()
  }) : (0, n.jsx)("div", {
    className: y.container,
    children: (0, n.jsxs)("div", {
      className: y.content,
      children: [t ? (0, n.jsx)(U.Yn, {}) : null, null != e ? (0, n.jsx)(U.ZP, {
        className: y.subscriptionDetails,
        subscription: e,
        paymentSource: a,
        busy: D,
        subscriptions: s
      }) : (0, n.jsx)(U.MM, {
        className: y.subscriptionDetails
      }), (0, n.jsx)(A.Z, {
        onClickManageSubscription: () => S.Z.setSection(b.oAB.SUBSCRIPTIONS, G.cP)
      }), (0, n.jsx)(O.Z, {
        onClickManageSubscription: () => {
          S.Z.setSection(b.oAB.SUBSCRIPTIONS, G.XZ), Z.default.track(b.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
        }
      }), (0, n.jsx)(h.F, {
        setting: F.s6.SUBSCRIPTIONS_CREDITS,
        children: (0, n.jsx)(H, {})
      }), null != e ? (0, n.jsx)(j.Z, {
        subscription: e,
        withOverheadSeparator: !1
      }) : null]
    })
  }) : (0, n.jsx)("div", {
    className: l()(y.container, y.loading),
    children: (0, n.jsx)(o.Spinner, {})
  })
}