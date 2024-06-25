n.d(t, {
  MM: function() {
    return G
  },
  Yn: function() {
    return H
  },
  ZP: function() {
    return W
  },
  eS: function() {
    return Y
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  r = n(512722),
  l = n.n(r),
  c = n(913527),
  d = n.n(c),
  u = n(442837),
  _ = n(692547),
  p = n(481060),
  m = n(230711),
  f = n(100527),
  E = n(906732),
  I = n(17894),
  C = n(963249),
  h = n(301766),
  N = n(594174),
  P = n(285952),
  g = n(366695),
  T = n(626135),
  S = n(63063),
  R = n(74538),
  A = n(212895),
  b = n(374649),
  x = n(160913),
  M = n(987997),
  L = n(393411),
  y = n(908951),
  B = n(592889),
  D = n(981631),
  O = n(689938),
  v = n(875328);

function U(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: a,
      fromStandaloneBillingPage: i = !0,
      className: r
    } = e,
    c = (0, u.e7)([N.default], () => {
      let e = N.default.getCurrentUser();
      return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, R.uV)(n.additionalPlans)) return null;
  let {
    status: d
  } = n, _ = (0, R.v6)(n);
  if (_) t = v.guildBoostingSubscriptionRowCanceled;
  else switch (d) {
    case D.O0b.PAST_DUE:
    case D.O0b.ACCOUNT_HOLD:
    case D.O0b.BILLING_RETRY:
      t = v.guildBoostingSubscriptionRowFailedPayment;
      break;
    case D.O0b.PAUSE_PENDING:
    case D.O0b.PAUSED:
      t = v.guildBoostingSubscriptionRowPaused;
      break;
    default:
      t = v.guildBoostingSubscriptionRowActive
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: o()(t, r),
      children: [(0, s.jsx)("div", {
        className: v.guildBoostingSubscriptionRowBackground
      }), (0, s.jsx)("div", {
        className: v.guildBoostingImage
      }), (0, s.jsxs)("div", {
        className: v.guildBoostingSubscriptionRowBody,
        children: [(0, s.jsx)("div", {
          className: o()(v.guildBoostingWordmark, {
            [v.canceled]: _
          })
        }), (0, s.jsx)("div", {
          children: (0, R.bt)({
            subscription: n,
            renewalInvoicePreview: a,
            user: c
          })
        })]
      }), i && (0, s.jsx)(M.Z, {
        color: p.Button.Colors.BRAND,
        onClick: () => m.Z.open(D.oAB.GUILD_BOOSTING),
        children: O.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
      })]
    }), !i && (0, s.jsx)(p.Text, {
      className: v.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: O.Z.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
        openAppHook: () => (0, I.Z)("app")
      })
    })]
  })
}

function Z() {
  return a.useEffect(() => {
    T.default.track(D.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, s.jsxs)("div", {
    className: v.paymentBanner,
    children: [(0, s.jsx)(p.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      className: v.paymentBannerIcon,
      color: _.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, s.jsx)(p.Text, {
      className: v.paymentBannerText,
      variant: "text-sm/normal",
      children: O.Z.Messages.MISSING_PAYMENT_METHOD_BANNER
    })]
  })
}

function j() {
  return a.useEffect(() => {
    T.default.track(D.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, s.jsxs)("div", {
    className: v.paymentBanner,
    children: [(0, s.jsx)(p.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      className: v.paymentBannerIcon,
      color: _.Z.unsafe_rawColors.RED_360.css
    }), (0, s.jsx)(p.Text, {
      className: v.paymentBannerText,
      variant: "text-sm/normal",
      children: O.Z.Messages.INVALID_PAYMENT_METHOD_BANNER
    })]
  })
}

function w(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: i
  } = e, {
    analyticsLocations: o
  } = (0, E.ZP)(f.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return a.useEffect(() => {
    T.default.track(D.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, s.jsxs)("div", {
    className: v.paymentBanner,
    children: [(0, s.jsx)(p.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      className: v.paymentBannerIcon,
      color: _.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, s.jsx)(p.Text, {
      className: v.paymentBannerText,
      variant: "text-sm/normal",
      children: O.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, C.Z)({
            initialPlanId: n.planIdFromItems,
            openInvoiceId: i,
            analyticsLocations: o
          })
        }
      })
    })]
  })
}

function k(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    className: a
  } = e;
  return (0, s.jsxs)("div", {
    className: o()(v.billingInformation, a),
    children: [(0, s.jsx)(p.FormTitle, {
      tag: "h3",
      className: v.detailBlockHeader,
      children: O.Z.Messages.PREMIUM_SETTINGS_BILLING_INFO
    }), (0, s.jsx)("div", {
      children: R.ZP.getBillingInformationString(t, n)
    })]
  })
}

function G(e) {
  let {
    className: t
  } = e;
  return (0, s.jsxs)("div", {
    className: t,
    children: [(0, s.jsx)(p.FormTitle, {
      className: v.sectionTitle,
      tag: "h1",
      children: O.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
    }), (0, s.jsx)("p", {
      className: v.sectionDescription,
      children: O.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
    }), (0, s.jsx)(p.Card, {
      className: v.noItemsCard,
      type: p.Card.Types.CUSTOM,
      children: (0, s.jsxs)(P.Z, {
        align: P.Z.Align.CENTER,
        children: [(0, s.jsx)(g.Z, {
          game: null,
          size: g.Z.Sizes.SMALL,
          className: v.noItemsIcon
        }), (0, s.jsx)("span", {
          className: v.cardText,
          children: O.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
        })]
      })
    })]
  })
}

function F(e) {
  let {
    subscription: t,
    analyticsLocation: n,
    paymentSource: a,
    busy: i,
    fromStandaloneBillingPage: r,
    showInvalidPaymentMethod: l,
    showNoPaymentMethod: c,
    fetchedCurrentInvoicePreview: d,
    fetchedRenewalInvoicePreview: u
  } = e, {
    analyticsLocations: _
  } = (0, E.ZP)(f.Z.SUBSCRIPTION_DETAILS), m = null != d ? {} : {
    subscriptionId: t.id,
    renewal: !0,
    analyticsLocations: _,
    analyticsLocation: n
  }, [I] = (0, b.ED)(m);
  I = null != d ? d : I;
  let C = null != u ? {} : {
      subscriptionId: t.id,
      renewal: !0,
      applyEntitlements: !0,
      analyticsLocations: _,
      analyticsLocation: n
    },
    [h] = (0, b.ED)(C);
  return (h = null != u ? u : h, null == I || null == h) ? (0, s.jsx)(p.Spinner, {}) : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: v.subscriptionRows,
      children: [(0, s.jsx)(L.Z, {
        subscription: t,
        renewalInvoicePreview: I,
        paymentSource: a,
        busy: i,
        analyticsLocation: n
      }), (0, s.jsx)(U, {
        subscription: t,
        renewalInvoicePreview: I,
        fromStandaloneBillingPage: r,
        className: v.guildSubscriptionRow
      })]
    }), (0, s.jsx)("div", {
      children: (0, s.jsx)(p.HeadingLevel, {
        component: (0, s.jsx)(p.FormTitle, {
          tag: "h5",
          children: O.Z.Messages.BILLING_STEP_PAYMENT
        }),
        children: (0, s.jsxs)("div", {
          className: v.details,
          children: [(0, s.jsx)(k, {
            subscription: t,
            renewalInvoicePreview: h,
            className: v.detailsBlock
          }), t.isPurchasedExternally || (null == a ? void 0 : a.id) === t.paymentSourceId ? (0, s.jsxs)("div", {
            className: o()(v.detailsBlock, {
              [v.redBorder]: l
            }),
            children: [(0, s.jsx)(p.FormTitle, {
              tag: "h3",
              className: v.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? O.Z.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                paymentGatewayName: D.Vzj[t.paymentGateway]
              }) : O.Z.Messages.BILLING_PAY_FOR_IT_WITH
            }), (0, s.jsx)(y.Z, {
              subscription: t,
              onPaymentSourceAdded: A.i1,
              highlightAddPaymentMethodButton: c || l,
              analyticsLocation: n,
              currentInvoicePreview: I,
              dropdownClassName: v.paymentDropdown
            })]
          }) : null]
        })
      })
    })]
  })
}
let Y = new Set([D.O0b.ACTIVE, D.O0b.PAST_DUE, D.O0b.CANCELED, D.O0b.PAUSE_PENDING, D.O0b.PAUSED]);

function H() {
  return a.useEffect(() => {
    T.default.track(D.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, s.jsxs)("div", {
    className: v.duplicateSubscriptionsBanner,
    children: [(0, s.jsx)(p.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: _.Z.unsafe_rawColors.RED_360.css
    }), (0, s.jsx)(p.Text, {
      className: v.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: O.Z.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
        helpCenterLink: S.Z.getArticleURL(D.BhN.NITRO)
      })
    })]
  })
}

function W(e) {
  var t;
  let n, {
    subscription: a,
    subscriptions: i,
    paymentSource: o,
    busy: r,
    className: l,
    fromStandaloneBillingPage: c = !0,
    analyticsLocation: _
  } = e;
  null != i && null != i[0] && (a = i[0]);
  let {
    analyticsLocations: m
  } = (0, E.ZP)(f.Z.SUBSCRIPTION_DETAILS), I = null != i ? i.slice(1) : [], [C] = (0, b.ED)({
    subscriptionId: a.id,
    renewal: !0,
    analyticsLocations: m,
    analyticsLocation: _
  }), [P] = (0, b.ED)({
    subscriptionId: a.id,
    renewal: !0,
    applyEntitlements: !0,
    analyticsLocations: m,
    analyticsLocation: _
  }), g = (0, u.e7)([N.default], () => {
    var e;
    return null === (e = N.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium()
  }), T = d()(a.currentPeriodEnd), S = null != a.paymentSourceId, R = null !== (t = null == P ? void 0 : P.total) && void 0 !== t ? t : 0, A = null == o ? void 0 : o.invalid, M = !S && R > 0 && (7 >= T.diff(d()(), "days") || a.status === D.O0b.PAST_DUE) && !g && !a.isPurchasedExternally, L = A && a.status === D.O0b.PAST_DUE && !g && !a.isPurchasedExternally, y = (0, x.U)(), U = !g && y, k = (null == a ? void 0 : a.status) === D.O0b.PAST_DUE ? d()().diff(d()(a.currentPeriodStart), "days") : 0, [G] = (0, b.Ox)({
    subscriptionId: a.id,
    preventFetch: !U
  });
  return null == C || null == P ? (0, s.jsx)(p.Spinner, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, h.Q0)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (n = (0, s.jsx)(B.Z, {
    subscription: a,
    renewalMutations: a.renewalMutations,
    className: v.renewalMutationNotice,
    analyticsLocation: _
  })), (0, s.jsx)("div", {
    className: l,
    children: (0, s.jsxs)(p.HeadingLevel, {
      component: (0, s.jsx)(p.FormTitle, {
        className: v.sectionTitle,
        tag: "h1",
        children: O.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
      }),
      children: [M ? (0, s.jsx)(Z, {}) : null, L ? (0, s.jsx)(j, {}) : null, U && null != G ? (0, s.jsx)(w, {
        daysPastDue: k,
        subscription: a,
        openInvoiceId: G.id
      }) : null, n, (0, s.jsx)("div", {
        children: (0, s.jsx)("p", {
          className: v.sectionDescription,
          children: O.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
        })
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)("div", {
          className: I.length > 0 ? v.dupSubscriptionRow : v.__invalid_singleSubscription,
          children: (0, s.jsx)(F, {
            subscription: a,
            analyticsLocation: _,
            paymentSource: o,
            busy: r,
            fromStandaloneBillingPage: c,
            showNoPaymentMethod: M,
            showInvalidPaymentMethod: L,
            fetchedCurrentInvoicePreview: C,
            fetchedRenewalInvoicePreview: P
          })
        }), I.map((e, t) => (0, s.jsxs)("div", {
          className: v.dupSubscriptionRow,
          children: [(0, s.jsx)(p.FormTitle, {
            tag: "h2",
            className: v.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, s.jsx)(F, {
            subscription: e,
            analyticsLocation: _,
            paymentSource: o,
            busy: r,
            fromStandaloneBillingPage: c,
            showNoPaymentMethod: M,
            showInvalidPaymentMethod: L,
            fetchedCurrentInvoicePreview: null,
            fetchedRenewalInvoicePreview: null
          })]
        }, t))]
      })]
    })
  }))
}