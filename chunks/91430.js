"use strict";
s.r(t), s.d(t, {
  DuplicateSubscriptionsBanner: function() {
    return K
  },
  SubscriptionDetailsEmpty: function() {
    return Y
  },
  VIEWABLE_SUBSCRIPTION_STATUSES: function() {
    return W
  },
  default: function() {
    return V
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  r = s.n(i),
  l = s("512722"),
  u = s.n(l),
  o = s("913527"),
  d = s.n(o),
  c = s("442837"),
  p = s("692547"),
  f = s("481060"),
  E = s("230711"),
  m = s("100527"),
  _ = s("906732"),
  S = s("17894"),
  I = s("963249"),
  N = s("301766"),
  P = s("594174"),
  C = s("285952"),
  T = s("366695"),
  h = s("759231"),
  A = s("626135"),
  R = s("63063"),
  M = s("74538"),
  y = s("212895"),
  g = s("374649"),
  L = s("160913"),
  x = s("987997"),
  D = s("393411"),
  b = s("908951"),
  U = s("592889"),
  v = s("981631"),
  O = s("689938"),
  B = s("822293");

function j(e) {
  let t, {
      subscription: s,
      renewalInvoicePreview: n,
      fromStandaloneBillingPage: i = !0,
      className: l
    } = e,
    o = (0, c.useStateFromStores)([P.default], () => {
      let e = P.default.getCurrentUser();
      return u()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, M.getNumPremiumGuildSubscriptions)(s.additionalPlans)) return null;
  let {
    status: d
  } = s, p = (0, M.isPremiumGuildSubscriptionCanceled)(s);
  if (p) t = B.guildBoostingSubscriptionRowCanceled;
  else switch (d) {
    case v.SubscriptionStatusTypes.PAST_DUE:
    case v.SubscriptionStatusTypes.ACCOUNT_HOLD:
    case v.SubscriptionStatusTypes.BILLING_RETRY:
      t = B.guildBoostingSubscriptionRowFailedPayment;
      break;
    case v.SubscriptionStatusTypes.PAUSE_PENDING:
    case v.SubscriptionStatusTypes.PAUSED:
      t = B.guildBoostingSubscriptionRowPaused;
      break;
    default:
      t = B.guildBoostingSubscriptionRowActive
  }
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: r()(t, l),
      children: [(0, a.jsx)("div", {
        className: B.guildBoostingSubscriptionRowBackground
      }), (0, a.jsx)("div", {
        className: B.guildBoostingImage
      }), (0, a.jsxs)("div", {
        className: B.guildBoostingSubscriptionRowBody,
        children: [(0, a.jsx)("div", {
          className: r()(B.guildBoostingWordmark, {
            [B.canceled]: p
          })
        }), (0, a.jsx)("div", {
          children: (0, M.getPremiumGuildHeaderDescription)({
            subscription: s,
            renewalInvoicePreview: n,
            user: o
          })
        })]
      }), i && (0, a.jsx)(x.default, {
        color: f.Button.Colors.BRAND,
        onClick: () => E.default.open(v.UserSettingsSections.GUILD_BOOSTING),
        children: O.default.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
      })]
    }), !i && (0, a.jsx)(f.Text, {
      className: B.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: O.default.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
        openAppHook: () => (0, S.default)("app")
      })
    })]
  })
}

function G() {
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.paymentBanner,
    children: [(0, a.jsx)(h.default, {
      className: B.paymentBannerIcon,
      color: p.default.unsafe_rawColors.YELLOW_260.css
    }), (0, a.jsx)(f.Text, {
      className: B.paymentBannerText,
      variant: "text-sm/normal",
      children: O.default.Messages.MISSING_PAYMENT_METHOD_BANNER
    })]
  })
}

function k() {
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.paymentBanner,
    children: [(0, a.jsx)(h.default, {
      className: B.paymentBannerIcon,
      color: p.default.unsafe_rawColors.RED_360.css
    }), (0, a.jsx)(f.Text, {
      className: B.paymentBannerText,
      variant: "text-sm/normal",
      children: O.default.Messages.INVALID_PAYMENT_METHOD_BANNER
    })]
  })
}

function F(e) {
  let {
    daysPastDue: t,
    subscription: s,
    openInvoiceId: i
  } = e, {
    analyticsLocations: r
  } = (0, _.default)(m.default.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.paymentBanner,
    children: [(0, a.jsx)(h.default, {
      className: B.paymentBannerIcon,
      color: p.default.unsafe_rawColors.YELLOW_260.css
    }), (0, a.jsx)(f.Text, {
      className: B.paymentBannerText,
      variant: "text-sm/normal",
      children: O.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, I.default)({
            initialPlanId: s.planIdFromItems,
            openInvoiceId: i,
            analyticsLocations: r
          })
        }
      })
    })]
  })
}

function w(e) {
  let {
    subscription: t,
    renewalInvoicePreview: s,
    className: n
  } = e;
  return (0, a.jsxs)("div", {
    className: r()(B.billingInformation, n),
    children: [(0, a.jsx)(f.FormTitle, {
      tag: "h3",
      className: B.detailBlockHeader,
      children: O.default.Messages.PREMIUM_SETTINGS_BILLING_INFO
    }), (0, a.jsx)("div", {
      children: M.default.getBillingInformationString(t, s)
    })]
  })
}

function Y(e) {
  let {
    className: t
  } = e;
  return (0, a.jsxs)("div", {
    className: t,
    children: [(0, a.jsx)(f.FormTitle, {
      className: B.sectionTitle,
      tag: "h1",
      children: O.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
    }), (0, a.jsx)("p", {
      className: B.sectionDescription,
      children: O.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
    }), (0, a.jsx)(f.Card, {
      className: B.noItemsCard,
      type: f.Card.Types.CUSTOM,
      children: (0, a.jsxs)(C.default, {
        align: C.default.Align.CENTER,
        children: [(0, a.jsx)(T.default, {
          game: null,
          size: T.default.Sizes.SMALL,
          className: B.noItemsIcon
        }), (0, a.jsx)("span", {
          className: B.cardText,
          children: O.default.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
        })]
      })
    })]
  })
}

function H(e) {
  let {
    subscription: t,
    analyticsLocation: s,
    paymentSource: n,
    busy: i,
    fromStandaloneBillingPage: l,
    showInvalidPaymentMethod: u,
    showNoPaymentMethod: o,
    fetchedCurrentInvoicePreview: d,
    fetchedRenewalInvoicePreview: c
  } = e, {
    analyticsLocations: p
  } = (0, _.default)(m.default.SUBSCRIPTION_DETAILS), E = null != d ? {} : {
    subscriptionId: t.id,
    renewal: !0,
    analyticsLocations: p,
    analyticsLocation: s
  }, [S] = (0, g.useSubscriptionInvoicePreview)(E);
  S = null != d ? d : S;
  let I = null != c ? {} : {
      subscriptionId: t.id,
      renewal: !0,
      applyEntitlements: !0,
      analyticsLocations: p,
      analyticsLocation: s
    },
    [N] = (0, g.useSubscriptionInvoicePreview)(I);
  return (N = null != c ? c : N, null == S || null == N) ? (0, a.jsx)(f.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: B.subscriptionRows,
      children: [(0, a.jsx)(D.default, {
        subscription: t,
        renewalInvoicePreview: S,
        paymentSource: n,
        busy: i,
        analyticsLocation: s
      }), (0, a.jsx)(j, {
        subscription: t,
        renewalInvoicePreview: S,
        fromStandaloneBillingPage: l,
        className: B.guildSubscriptionRow
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(f.HeadingLevel, {
        component: (0, a.jsx)(f.FormTitle, {
          tag: "h5",
          children: O.default.Messages.BILLING_STEP_PAYMENT
        }),
        children: (0, a.jsxs)("div", {
          className: B.details,
          children: [(0, a.jsx)(w, {
            subscription: t,
            renewalInvoicePreview: N,
            className: B.detailsBlock
          }), t.isPurchasedExternally || (null == n ? void 0 : n.id) === t.paymentSourceId ? (0, a.jsxs)("div", {
            className: r()(B.detailsBlock, {
              [B.redBorder]: u
            }),
            children: [(0, a.jsx)(f.FormTitle, {
              tag: "h3",
              className: B.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? O.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                paymentGatewayName: v.PaymentGatewayToFriendlyName[t.paymentGateway]
              }) : O.default.Messages.BILLING_PAY_FOR_IT_WITH
            }), (0, a.jsx)(b.default, {
              subscription: t,
              onPaymentSourceAdded: y.fetchSubscriptionPlansOnNewPaymentSource,
              highlightAddPaymentMethodButton: o || u,
              analyticsLocation: s,
              currentInvoicePreview: S,
              dropdownClassName: B.paymentDropdown
            })]
          }) : null]
        })
      })
    })]
  })
}
let W = new Set([v.SubscriptionStatusTypes.ACTIVE, v.SubscriptionStatusTypes.PAST_DUE, v.SubscriptionStatusTypes.CANCELED, v.SubscriptionStatusTypes.PAUSE_PENDING, v.SubscriptionStatusTypes.PAUSED]);

function K() {
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.duplicateSubscriptionsBanner,
    children: [(0, a.jsx)(h.default, {
      color: p.default.unsafe_rawColors.RED_360.css
    }), (0, a.jsx)(f.Text, {
      className: B.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: O.default.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
        helpCenterLink: R.default.getArticleURL(v.HelpdeskArticles.NITRO)
      })
    })]
  })
}

function V(e) {
  var t;
  let s, {
    subscription: n,
    subscriptions: i,
    paymentSource: r,
    busy: l,
    className: u,
    fromStandaloneBillingPage: o = !0,
    analyticsLocation: p
  } = e;
  null != i && null != i[0] && (n = i[0]);
  let {
    analyticsLocations: E
  } = (0, _.default)(m.default.SUBSCRIPTION_DETAILS), S = null != i ? i.slice(1) : [], [I] = (0, g.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    renewal: !0,
    analyticsLocations: E,
    analyticsLocation: p
  }), [C] = (0, g.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    renewal: !0,
    applyEntitlements: !0,
    analyticsLocations: E,
    analyticsLocation: p
  }), T = (0, c.useStateFromStores)([P.default], () => {
    var e;
    return null === (e = P.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium()
  }), h = d()(n.currentPeriodEnd), A = null != n.paymentSourceId, R = null !== (t = null == C ? void 0 : C.total) && void 0 !== t ? t : 0, M = null == r ? void 0 : r.invalid, y = !A && R > 0 && (7 >= h.diff(d()(), "days") || n.status === v.SubscriptionStatusTypes.PAST_DUE) && !T && !n.isPurchasedExternally, x = M && n.status === v.SubscriptionStatusTypes.PAST_DUE && !T && !n.isPurchasedExternally, D = (0, L.useIsPrepaidPaymentPastDue)(), b = !T && D, j = (null == n ? void 0 : n.status) === v.SubscriptionStatusTypes.PAST_DUE ? d()().diff(d()(n.currentPeriodStart), "days") : 0, [w] = (0, g.useGetSubscriptionInvoice)({
    subscriptionId: n.id,
    preventFetch: !b
  });
  return null == I || null == C ? (0, a.jsx)(f.Spinner, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, N.isNoneSubscription)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (s = (0, a.jsx)(U.default, {
    subscription: n,
    renewalMutations: n.renewalMutations,
    className: B.renewalMutationNotice,
    analyticsLocation: p
  })), (0, a.jsx)("div", {
    className: u,
    children: (0, a.jsxs)(f.HeadingLevel, {
      component: (0, a.jsx)(f.FormTitle, {
        className: B.sectionTitle,
        tag: "h1",
        children: O.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
      }),
      children: [y ? (0, a.jsx)(G, {}) : null, x ? (0, a.jsx)(k, {}) : null, b && null != w ? (0, a.jsx)(F, {
        daysPastDue: j,
        subscription: n,
        openInvoiceId: w.id
      }) : null, s, (0, a.jsx)("div", {
        children: (0, a.jsx)("p", {
          className: B.sectionDescription,
          children: O.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
        })
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          className: S.length > 0 ? B.dupSubscriptionRow : B.__invalid_singleSubscription,
          children: (0, a.jsx)(H, {
            subscription: n,
            analyticsLocation: p,
            paymentSource: r,
            busy: l,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: y,
            showInvalidPaymentMethod: x,
            fetchedCurrentInvoicePreview: I,
            fetchedRenewalInvoicePreview: C
          })
        }), S.map((e, t) => (0, a.jsxs)("div", {
          className: B.dupSubscriptionRow,
          children: [(0, a.jsx)(f.FormTitle, {
            tag: "h2",
            className: B.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, a.jsx)(H, {
            subscription: e,
            analyticsLocation: p,
            paymentSource: r,
            busy: l,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: y,
            showInvalidPaymentMethod: x,
            fetchedCurrentInvoicePreview: null,
            fetchedRenewalInvoicePreview: null
          })]
        }, t))]
      })]
    })
  }))
}