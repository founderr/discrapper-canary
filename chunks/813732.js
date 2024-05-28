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
  I = s("406174"),
  g = s("810762"),
  N = s("681833"),
  h = s("856888"),
  C = s("921801"),
  O = s("246946"),
  A = s("663389"),
  p = s("351402"),
  R = s("853872"),
  x = s("78839"),
  M = s("580130"),
  L = s("285952"),
  D = s("366695"),
  P = s("626135"),
  v = s("74538"),
  b = s("639056"),
  j = s("52164"),
  U = s("91430"),
  G = s("474936"),
  F = s("981631"),
  B = s("526761"),
  y = s("726985"),
  k = s("689938"),
  V = s("431008");

function H() {
  return (0, a.jsx)(o.Card, {
    className: V.noItemsCard,
    type: o.Card.Types.CUSTOM,
    children: (0, a.jsxs)(L.default, {
      align: L.default.Align.CENTER,
      children: [(0, a.jsx)(D.default, {
        game: null,
        size: D.default.Sizes.SMALL,
        className: V.noItemsIcon
      }), (0, a.jsx)("span", {
        className: V.cardText,
        children: k.default.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
      })]
    })
  })
}

function w() {
  let e = (0, r.useStateFromStores)([M.default], () => M.default.getForApplication(G.PREMIUM_SUBSCRIPTION_APPLICATION));
  return n.useEffect(() => {
    (0, S.fetchUserEntitlementsForApplication)(G.PREMIUM_SUBSCRIPTION_APPLICATION)
  }, []), (0, a.jsxs)("section", {
    className: V.sectionAccountCredit,
    children: [(0, a.jsx)(o.FormTitle, {
      className: V.accountCreditTitle,
      tag: o.FormTitleTags.H1,
      children: k.default.Messages.BILLING_SUBSCRIPTION_CREDIT
    }), (0, a.jsx)("p", {
      className: V.accountCreditDescription,
      children: k.default.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
    }), null != e && v.default.hasAccountCredit(e) ? (0, a.jsx)(b.default, {
      className: V.accountCredit,
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
    M = (0, r.useStateFromStores)([p.default], () => p.default.isBusy),
    L = (0, m.useSubscriptionPlansLoaded)(),
    D = (0, r.useStateFromStores)([A.default], () => A.default.getSubsection());
  return (n.useEffect(() => (d.default.wait(() => {
    (0, E.fetchPremiumSubscriptionPlans)(), u.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), u.fetchPaymentSources()
  }), function() {
    T.default.clearSubsection()
  }), []), O.default.enabled) ? (0, a.jsx)(_.default, {}) : S && L ? D === B.ROLE_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(g.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : D === B.APPLICATION_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(h.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : (0, a.jsx)("div", {
    className: V.container,
    children: (0, a.jsxs)("div", {
      className: V.content,
      children: [s ? (0, a.jsx)(U.DuplicateSubscriptionsBanner, {}) : null, null != e ? (0, a.jsx)(U.default, {
        className: V.subscriptionDetails,
        subscription: e,
        paymentSource: l,
        busy: M,
        subscriptions: t
      }) : (0, a.jsx)(U.SubscriptionDetailsEmpty, {
        className: V.subscriptionDetails
      }), (0, a.jsx)(I.default, {
        onClickManageSubscription: () => T.default.setSection(F.UserSettingsSections.SUBSCRIPTIONS, B.ROLE_SUBSCRIPTION_SUBSECTION)
      }), (0, a.jsx)(N.default, {
        onClickManageSubscription: () => {
          T.default.setSection(F.UserSettingsSections.SUBSCRIPTIONS, B.APPLICATION_SUBSCRIPTION_SUBSECTION), P.default.track(F.AnalyticEvents.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
        }
      }), (0, a.jsx)(C.Subsetting, {
        setting: y.WebSetting.SUBSCRIPTIONS_CREDITS,
        children: (0, a.jsx)(w, {})
      }), null != e ? (0, a.jsx)(j.default, {
        subscription: e,
        withOverheadSeparator: !1
      }) : null]
    })
  }) : (0, a.jsx)("div", {
    className: i()(V.container, V.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}