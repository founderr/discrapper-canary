"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
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
  N = s("15640"),
  g = s("406174"),
  f = s("810762"),
  m = s("681833"),
  A = s("856888"),
  C = s("921801"),
  O = s("246946"),
  h = s("663389"),
  R = s("351402"),
  p = s("853872"),
  M = s("78839"),
  D = s("580130"),
  x = s("285952"),
  L = s("366695"),
  P = s("626135"),
  b = s("74538"),
  v = s("639056"),
  U = s("52164"),
  j = s("91430"),
  G = s("474936"),
  F = s("981631"),
  B = s("526761"),
  y = s("726985"),
  V = s("689938"),
  Y = s("431008");

function H() {
  return (0, a.jsx)(o.Card, {
    className: Y.noItemsCard,
    type: o.Card.Types.CUSTOM,
    children: (0, a.jsxs)(x.default, {
      align: x.default.Align.CENTER,
      children: [(0, a.jsx)(L.default, {
        game: null,
        size: L.default.Sizes.SMALL,
        className: Y.noItemsIcon
      }), (0, a.jsx)("span", {
        className: Y.cardText,
        children: V.default.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
      })]
    })
  })
}

function k() {
  let e = (0, r.useStateFromStores)([D.default], () => D.default.getForApplication(G.PREMIUM_SUBSCRIPTION_APPLICATION));
  return n.useEffect(() => {
    (0, S.fetchUserEntitlementsForApplication)(G.PREMIUM_SUBSCRIPTION_APPLICATION)
  }, []), (0, a.jsxs)("section", {
    className: Y.sectionAccountCredit,
    children: [(0, a.jsx)(o.FormTitle, {
      className: Y.accountCreditTitle,
      tag: o.FormTitleTags.H1,
      children: V.default.Messages.BILLING_SUBSCRIPTION_CREDIT
    }), (0, a.jsx)("p", {
      className: Y.accountCreditDescription,
      children: V.default.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
    }), null != e && b.default.hasAccountCredit(e) ? (0, a.jsx)(v.default, {
      className: Y.accountCredit,
      entitlements: e
    }) : (0, a.jsx)(H, {})]
  })
}
t.default = function() {
  let e = (0, r.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    t = (0, I.default)({
      subscriptionFilter: e => j.VIEWABLE_SUBSCRIPTION_STATUSES.has(e.status)
    }),
    s = t.length > 1,
    i = (0, r.useStateFromStores)([p.default], () => null != e && null != e.paymentSourceId ? p.default.getPaymentSource(e.paymentSourceId) : null, [e]),
    S = (0, r.useStateFromStores)([M.default], () => M.default.hasFetchedSubscriptions()),
    D = (0, r.useStateFromStores)([R.default], () => R.default.isBusy),
    x = (0, N.useSubscriptionPlansLoaded)(),
    L = (0, r.useStateFromStores)([h.default], () => h.default.getSubsection());
  return (n.useEffect(() => (d.default.wait(() => {
    (0, E.fetchPremiumSubscriptionPlans)(), u.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), u.fetchPaymentSources()
  }), function() {
    T.default.clearSubsection()
  }), []), O.default.enabled) ? (0, a.jsx)(_.default, {}) : S && x ? L === B.ROLE_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(f.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : L === B.APPLICATION_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(A.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : (0, a.jsx)("div", {
    className: Y.container,
    children: (0, a.jsxs)("div", {
      className: Y.content,
      children: [s ? (0, a.jsx)(j.DuplicateSubscriptionsBanner, {}) : null, null != e ? (0, a.jsx)(j.default, {
        className: Y.subscriptionDetails,
        subscription: e,
        paymentSource: i,
        busy: D,
        subscriptions: t
      }) : (0, a.jsx)(j.SubscriptionDetailsEmpty, {
        className: Y.subscriptionDetails
      }), (0, a.jsx)(g.default, {
        onClickManageSubscription: () => T.default.setSection(F.UserSettingsSections.SUBSCRIPTIONS, B.ROLE_SUBSCRIPTION_SUBSECTION)
      }), (0, a.jsx)(m.default, {
        onClickManageSubscription: () => {
          T.default.setSection(F.UserSettingsSections.SUBSCRIPTIONS, B.APPLICATION_SUBSCRIPTION_SUBSECTION), P.default.track(F.AnalyticEvents.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
        }
      }), (0, a.jsx)(C.Subsetting, {
        setting: y.WebSetting.SUBSCRIPTIONS_CREDITS,
        children: (0, a.jsx)(k, {})
      }), null != e ? (0, a.jsx)(U.default, {
        subscription: e,
        withOverheadSeparator: !1
      }) : null]
    })
  }) : (0, a.jsx)("div", {
    className: l()(Y.container, Y.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}