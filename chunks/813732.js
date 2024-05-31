"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("179360"),
  S = s("496929"),
  E = s("821849"),
  T = s("230711"),
  _ = s("497321"),
  f = s("167354"),
  m = s("15640"),
  g = s("406174"),
  I = s("810762"),
  N = s("681833"),
  h = s("856888"),
  C = s("921801"),
  A = s("246946"),
  p = s("663389"),
  O = s("351402"),
  R = s("853872"),
  x = s("78839"),
  M = s("580130"),
  v = s("285952"),
  L = s("366695"),
  D = s("626135"),
  P = s("74538"),
  b = s("639056"),
  j = s("52164"),
  U = s("91430"),
  y = s("474936"),
  G = s("981631"),
  F = s("526761"),
  B = s("726985"),
  k = s("689938"),
  w = s("431008");

function H() {
  return (0, a.jsx)(o.Card, {
    className: w.noItemsCard,
    type: o.Card.Types.CUSTOM,
    children: (0, a.jsxs)(v.default, {
      align: v.default.Align.CENTER,
      children: [(0, a.jsx)(L.default, {
        game: null,
        size: L.default.Sizes.SMALL,
        className: w.noItemsIcon
      }), (0, a.jsx)("span", {
        className: w.cardText,
        children: k.default.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
      })]
    })
  })
}

function Y() {
  let e = (0, r.useStateFromStores)([M.default], () => M.default.getForApplication(y.PREMIUM_SUBSCRIPTION_APPLICATION));
  return n.useEffect(() => {
    (0, S.fetchUserEntitlementsForApplication)(y.PREMIUM_SUBSCRIPTION_APPLICATION)
  }, []), (0, a.jsxs)("section", {
    className: w.sectionAccountCredit,
    children: [(0, a.jsx)(o.FormTitle, {
      className: w.accountCreditTitle,
      tag: o.FormTitleTags.H1,
      children: k.default.Messages.BILLING_SUBSCRIPTION_CREDIT
    }), (0, a.jsx)("p", {
      className: w.accountCreditDescription,
      children: k.default.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
    }), null != e && P.default.hasAccountCredit(e) ? (0, a.jsx)(b.default, {
      className: w.accountCredit,
      entitlements: e
    }) : (0, a.jsx)(H, {})]
  })
}
t.default = function() {
  let e = (0, r.useStateFromStores)([x.default], () => x.default.getPremiumTypeSubscription()),
    t = (0, f.default)({
      subscriptionFilter: e => U.VIEWABLE_SUBSCRIPTION_STATUSES.has(e.status)
    }),
    s = t.length > 1,
    l = (0, r.useStateFromStores)([R.default], () => null != e && null != e.paymentSourceId ? R.default.getPaymentSource(e.paymentSourceId) : null, [e]),
    S = (0, r.useStateFromStores)([x.default], () => x.default.hasFetchedSubscriptions()),
    M = (0, r.useStateFromStores)([O.default], () => O.default.isBusy),
    v = (0, m.useSubscriptionPlansLoaded)(),
    L = (0, r.useStateFromStores)([p.default], () => p.default.getSubsection());
  return (n.useEffect(() => (d.default.wait(() => {
    (0, E.fetchPremiumSubscriptionPlans)(), u.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), u.fetchPaymentSources()
  }), function() {
    T.default.clearSubsection()
  }), []), A.default.enabled) ? (0, a.jsx)(_.default, {}) : S && v ? L === F.ROLE_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(I.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : L === F.APPLICATION_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(h.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : (0, a.jsx)("div", {
    className: w.container,
    children: (0, a.jsxs)("div", {
      className: w.content,
      children: [s ? (0, a.jsx)(U.DuplicateSubscriptionsBanner, {}) : null, null != e ? (0, a.jsx)(U.default, {
        className: w.subscriptionDetails,
        subscription: e,
        paymentSource: l,
        busy: M,
        subscriptions: t
      }) : (0, a.jsx)(U.SubscriptionDetailsEmpty, {
        className: w.subscriptionDetails
      }), (0, a.jsx)(g.default, {
        onClickManageSubscription: () => T.default.setSection(G.UserSettingsSections.SUBSCRIPTIONS, F.ROLE_SUBSCRIPTION_SUBSECTION)
      }), (0, a.jsx)(N.default, {
        onClickManageSubscription: () => {
          T.default.setSection(G.UserSettingsSections.SUBSCRIPTIONS, F.APPLICATION_SUBSCRIPTION_SUBSECTION), D.default.track(G.AnalyticEvents.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
        }
      }), (0, a.jsx)(C.Subsetting, {
        setting: B.WebSetting.SUBSCRIPTIONS_CREDITS,
        children: (0, a.jsx)(Y, {})
      }), null != e ? (0, a.jsx)(j.default, {
        subscription: e,
        withOverheadSeparator: !1
      }) : null]
    })
  }) : (0, a.jsx)("div", {
    className: i()(w.container, w.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}