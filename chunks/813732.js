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
  I = s("167354"),
  f = s("15640"),
  m = s("406174"),
  N = s("810762"),
  g = s("681833"),
  h = s("856888"),
  C = s("921801"),
  O = s("246946"),
  A = s("663389"),
  p = s("351402"),
  R = s("853872"),
  x = s("78839"),
  M = s("580130"),
  D = s("285952"),
  L = s("366695"),
  P = s("626135"),
  v = s("74538"),
  b = s("639056"),
  U = s("52164"),
  j = s("91430"),
  F = s("474936"),
  G = s("981631"),
  B = s("526761"),
  y = s("726985"),
  V = s("689938"),
  H = s("431008");

function k() {
  return (0, a.jsx)(o.Card, {
    className: H.noItemsCard,
    type: o.Card.Types.CUSTOM,
    children: (0, a.jsxs)(D.default, {
      align: D.default.Align.CENTER,
      children: [(0, a.jsx)(L.default, {
        game: null,
        size: L.default.Sizes.SMALL,
        className: H.noItemsIcon
      }), (0, a.jsx)("span", {
        className: H.cardText,
        children: V.default.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
      })]
    })
  })
}

function w() {
  let e = (0, r.useStateFromStores)([M.default], () => M.default.getForApplication(F.PREMIUM_SUBSCRIPTION_APPLICATION));
  return n.useEffect(() => {
    (0, S.fetchUserEntitlementsForApplication)(F.PREMIUM_SUBSCRIPTION_APPLICATION)
  }, []), (0, a.jsxs)("section", {
    className: H.sectionAccountCredit,
    children: [(0, a.jsx)(o.FormTitle, {
      className: H.accountCreditTitle,
      tag: o.FormTitleTags.H1,
      children: V.default.Messages.BILLING_SUBSCRIPTION_CREDIT
    }), (0, a.jsx)("p", {
      className: H.accountCreditDescription,
      children: V.default.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
    }), null != e && v.default.hasAccountCredit(e) ? (0, a.jsx)(b.default, {
      className: H.accountCredit,
      entitlements: e
    }) : (0, a.jsx)(k, {})]
  })
}
t.default = function() {
  let e = (0, r.useStateFromStores)([x.default], () => x.default.getPremiumTypeSubscription()),
    t = (0, I.default)({
      subscriptionFilter: e => j.VIEWABLE_SUBSCRIPTION_STATUSES.has(e.status)
    }),
    s = t.length > 1,
    l = (0, r.useStateFromStores)([R.default], () => null != e && null != e.paymentSourceId ? R.default.getPaymentSource(e.paymentSourceId) : null, [e]),
    S = (0, r.useStateFromStores)([x.default], () => x.default.hasFetchedSubscriptions()),
    M = (0, r.useStateFromStores)([p.default], () => p.default.isBusy),
    D = (0, f.useSubscriptionPlansLoaded)(),
    L = (0, r.useStateFromStores)([A.default], () => A.default.getSubsection());
  return (n.useEffect(() => (d.default.wait(() => {
    (0, E.fetchPremiumSubscriptionPlans)(), u.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), u.fetchPaymentSources()
  }), function() {
    T.default.clearSubsection()
  }), []), O.default.enabled) ? (0, a.jsx)(_.default, {}) : S && D ? L === B.ROLE_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(N.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : L === B.APPLICATION_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(h.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : (0, a.jsx)("div", {
    className: H.container,
    children: (0, a.jsxs)("div", {
      className: H.content,
      children: [s ? (0, a.jsx)(j.DuplicateSubscriptionsBanner, {}) : null, null != e ? (0, a.jsx)(j.default, {
        className: H.subscriptionDetails,
        subscription: e,
        paymentSource: l,
        busy: M,
        subscriptions: t
      }) : (0, a.jsx)(j.SubscriptionDetailsEmpty, {
        className: H.subscriptionDetails
      }), (0, a.jsx)(m.default, {
        onClickManageSubscription: () => T.default.setSection(G.UserSettingsSections.SUBSCRIPTIONS, B.ROLE_SUBSCRIPTION_SUBSECTION)
      }), (0, a.jsx)(g.default, {
        onClickManageSubscription: () => {
          T.default.setSection(G.UserSettingsSections.SUBSCRIPTIONS, B.APPLICATION_SUBSCRIPTION_SUBSECTION), P.default.track(G.AnalyticEvents.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
        }
      }), (0, a.jsx)(C.Subsetting, {
        setting: y.WebSetting.SUBSCRIPTIONS_CREDITS,
        children: (0, a.jsx)(w, {})
      }), null != e ? (0, a.jsx)(U.default, {
        subscription: e,
        withOverheadSeparator: !1
      }) : null]
    })
  }) : (0, a.jsx)("div", {
    className: i()(H.container, H.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}