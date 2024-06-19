t.d(s, {
  MM: function() {
    return w
  },
  Yn: function() {
    return H
  },
  ZP: function() {
    return W
  },
  eS: function() {
    return F
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(512722),
  o = t.n(r),
  c = t(913527),
  u = t.n(c),
  d = t(442837),
  E = t(692547),
  _ = t(481060),
  p = t(230711),
  I = t(100527),
  m = t(906732),
  N = t(17894),
  C = t(963249),
  h = t(301766),
  P = t(594174),
  T = t(285952),
  A = t(366695),
  R = t(626135),
  S = t(63063),
  M = t(74538),
  f = t(212895),
  g = t(374649),
  L = t(160913),
  x = t(987997),
  O = t(393411),
  D = t(908951),
  y = t(592889),
  U = t(981631),
  Z = t(689938),
  v = t(875328);

function B(e) {
  let s, {
      subscription: t,
      renewalInvoicePreview: a,
      fromStandaloneBillingPage: i = !0,
      className: r
    } = e,
    c = (0, d.e7)([P.default], () => {
      let e = P.default.getCurrentUser();
      return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, M.uV)(t.additionalPlans)) return null;
  let {
    status: u
  } = t, E = (0, M.v6)(t);
  if (E) s = v.guildBoostingSubscriptionRowCanceled;
  else switch (u) {
    case U.O0b.PAST_DUE:
    case U.O0b.ACCOUNT_HOLD:
    case U.O0b.BILLING_RETRY:
      s = v.guildBoostingSubscriptionRowFailedPayment;
      break;
    case U.O0b.PAUSE_PENDING:
    case U.O0b.PAUSED:
      s = v.guildBoostingSubscriptionRowPaused;
      break;
    default:
      s = v.guildBoostingSubscriptionRowActive
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: l()(s, r),
      children: [(0, n.jsx)("div", {
        className: v.guildBoostingSubscriptionRowBackground
      }), (0, n.jsx)("div", {
        className: v.guildBoostingImage
      }), (0, n.jsxs)("div", {
        className: v.guildBoostingSubscriptionRowBody,
        children: [(0, n.jsx)("div", {
          className: l()(v.guildBoostingWordmark, {
            [v.canceled]: E
          })
        }), (0, n.jsx)("div", {
          children: (0, M.bt)({
            subscription: t,
            renewalInvoicePreview: a,
            user: c
          })
        })]
      }), i && (0, n.jsx)(x.Z, {
        color: _.Button.Colors.BRAND,
        onClick: () => p.Z.open(U.oAB.GUILD_BOOSTING),
        children: Z.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
      })]
    }), !i && (0, n.jsx)(_.Text, {
      className: v.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: Z.Z.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
        openAppHook: () => (0, N.Z)("app")
      })
    })]
  })
}

function j() {
  return a.useEffect(() => {
    R.default.track(U.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, n.jsxs)("div", {
    className: v.paymentBanner,
    children: [(0, n.jsx)(_.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      className: v.paymentBannerIcon,
      color: E.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, n.jsx)(_.Text, {
      className: v.paymentBannerText,
      variant: "text-sm/normal",
      children: Z.Z.Messages.MISSING_PAYMENT_METHOD_BANNER
    })]
  })
}

function b() {
  return a.useEffect(() => {
    R.default.track(U.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, n.jsxs)("div", {
    className: v.paymentBanner,
    children: [(0, n.jsx)(_.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      className: v.paymentBannerIcon,
      color: E.Z.unsafe_rawColors.RED_360.css
    }), (0, n.jsx)(_.Text, {
      className: v.paymentBannerText,
      variant: "text-sm/normal",
      children: Z.Z.Messages.INVALID_PAYMENT_METHOD_BANNER
    })]
  })
}

function G(e) {
  let {
    daysPastDue: s,
    subscription: t,
    openInvoiceId: i
  } = e, {
    analyticsLocations: l
  } = (0, m.ZP)(I.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return a.useEffect(() => {
    R.default.track(U.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, n.jsxs)("div", {
    className: v.paymentBanner,
    children: [(0, n.jsx)(_.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      className: v.paymentBannerIcon,
      color: E.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, n.jsx)(_.Text, {
      className: v.paymentBannerText,
      variant: "text-sm/normal",
      children: Z.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
        daysPastDue: s,
        paymentModalRedirect: () => {
          (0, C.Z)({
            initialPlanId: t.planIdFromItems,
            openInvoiceId: i,
            analyticsLocations: l
          })
        }
      })
    })]
  })
}

function k(e) {
  let {
    subscription: s,
    renewalInvoicePreview: t,
    className: a
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(v.billingInformation, a),
    children: [(0, n.jsx)(_.FormTitle, {
      tag: "h3",
      className: v.detailBlockHeader,
      children: Z.Z.Messages.PREMIUM_SETTINGS_BILLING_INFO
    }), (0, n.jsx)("div", {
      children: M.ZP.getBillingInformationString(s, t)
    })]
  })
}

function w(e) {
  let {
    className: s
  } = e;
  return (0, n.jsxs)("div", {
    className: s,
    children: [(0, n.jsx)(_.FormTitle, {
      className: v.sectionTitle,
      tag: "h1",
      children: Z.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
    }), (0, n.jsx)("p", {
      className: v.sectionDescription,
      children: Z.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
    }), (0, n.jsx)(_.Card, {
      className: v.noItemsCard,
      type: _.Card.Types.CUSTOM,
      children: (0, n.jsxs)(T.Z, {
        align: T.Z.Align.CENTER,
        children: [(0, n.jsx)(A.Z, {
          game: null,
          size: A.Z.Sizes.SMALL,
          className: v.noItemsIcon
        }), (0, n.jsx)("span", {
          className: v.cardText,
          children: Z.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
        })]
      })
    })]
  })
}

function Y(e) {
  let {
    subscription: s,
    analyticsLocation: t,
    paymentSource: a,
    busy: i,
    fromStandaloneBillingPage: r,
    showInvalidPaymentMethod: o,
    showNoPaymentMethod: c,
    fetchedCurrentInvoicePreview: u,
    fetchedRenewalInvoicePreview: d
  } = e, {
    analyticsLocations: E
  } = (0, m.ZP)(I.Z.SUBSCRIPTION_DETAILS), p = null != u ? {} : {
    subscriptionId: s.id,
    renewal: !0,
    analyticsLocations: E,
    analyticsLocation: t
  }, [N] = (0, g.ED)(p);
  N = null != u ? u : N;
  let C = null != d ? {} : {
      subscriptionId: s.id,
      renewal: !0,
      applyEntitlements: !0,
      analyticsLocations: E,
      analyticsLocation: t
    },
    [h] = (0, g.ED)(C);
  return (h = null != d ? d : h, null == N || null == h) ? (0, n.jsx)(_.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: v.subscriptionRows,
      children: [(0, n.jsx)(O.Z, {
        subscription: s,
        renewalInvoicePreview: N,
        paymentSource: a,
        busy: i,
        analyticsLocation: t
      }), (0, n.jsx)(B, {
        subscription: s,
        renewalInvoicePreview: N,
        fromStandaloneBillingPage: r,
        className: v.guildSubscriptionRow
      })]
    }), (0, n.jsx)("div", {
      children: (0, n.jsx)(_.HeadingLevel, {
        component: (0, n.jsx)(_.FormTitle, {
          tag: "h5",
          children: Z.Z.Messages.BILLING_STEP_PAYMENT
        }),
        children: (0, n.jsxs)("div", {
          className: v.details,
          children: [(0, n.jsx)(k, {
            subscription: s,
            renewalInvoicePreview: h,
            className: v.detailsBlock
          }), s.isPurchasedExternally || (null == a ? void 0 : a.id) === s.paymentSourceId ? (0, n.jsxs)("div", {
            className: l()(v.detailsBlock, {
              [v.redBorder]: o
            }),
            children: [(0, n.jsx)(_.FormTitle, {
              tag: "h3",
              className: v.detailBlockHeader,
              children: s.isPurchasedExternally && null != s.paymentGateway ? Z.Z.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                paymentGatewayName: U.Vzj[s.paymentGateway]
              }) : Z.Z.Messages.BILLING_PAY_FOR_IT_WITH
            }), (0, n.jsx)(D.Z, {
              subscription: s,
              onPaymentSourceAdded: f.i1,
              highlightAddPaymentMethodButton: c || o,
              analyticsLocation: t,
              currentInvoicePreview: N,
              dropdownClassName: v.paymentDropdown
            })]
          }) : null]
        })
      })
    })]
  })
}
let F = new Set([U.O0b.ACTIVE, U.O0b.PAST_DUE, U.O0b.CANCELED, U.O0b.PAUSE_PENDING, U.O0b.PAUSED]);

function H() {
  return a.useEffect(() => {
    R.default.track(U.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, n.jsxs)("div", {
    className: v.duplicateSubscriptionsBanner,
    children: [(0, n.jsx)(_.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: E.Z.unsafe_rawColors.RED_360.css
    }), (0, n.jsx)(_.Text, {
      className: v.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: Z.Z.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
        helpCenterLink: S.Z.getArticleURL(U.BhN.NITRO)
      })
    })]
  })
}

function W(e) {
  var s;
  let t, {
    subscription: a,
    subscriptions: i,
    paymentSource: l,
    busy: r,
    className: o,
    fromStandaloneBillingPage: c = !0,
    analyticsLocation: E
  } = e;
  null != i && null != i[0] && (a = i[0]);
  let {
    analyticsLocations: p
  } = (0, m.ZP)(I.Z.SUBSCRIPTION_DETAILS), N = null != i ? i.slice(1) : [], [C] = (0, g.ED)({
    subscriptionId: a.id,
    renewal: !0,
    analyticsLocations: p,
    analyticsLocation: E
  }), [T] = (0, g.ED)({
    subscriptionId: a.id,
    renewal: !0,
    applyEntitlements: !0,
    analyticsLocations: p,
    analyticsLocation: E
  }), A = (0, d.e7)([P.default], () => {
    var e;
    return null === (e = P.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium()
  }), R = u()(a.currentPeriodEnd), S = null != a.paymentSourceId, M = null !== (s = null == T ? void 0 : T.total) && void 0 !== s ? s : 0, f = null == l ? void 0 : l.invalid, x = !S && M > 0 && (7 >= R.diff(u()(), "days") || a.status === U.O0b.PAST_DUE) && !A && !a.isPurchasedExternally, O = f && a.status === U.O0b.PAST_DUE && !A && !a.isPurchasedExternally, D = (0, L.U)(), B = !A && D, k = (null == a ? void 0 : a.status) === U.O0b.PAST_DUE ? u()().diff(u()(a.currentPeriodStart), "days") : 0, [w] = (0, g.Ox)({
    subscriptionId: a.id,
    preventFetch: !B
  });
  return null == C || null == T ? (0, n.jsx)(_.Spinner, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, h.Q0)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (t = (0, n.jsx)(y.Z, {
    subscription: a,
    renewalMutations: a.renewalMutations,
    className: v.renewalMutationNotice,
    analyticsLocation: E
  })), (0, n.jsx)("div", {
    className: o,
    children: (0, n.jsxs)(_.HeadingLevel, {
      component: (0, n.jsx)(_.FormTitle, {
        className: v.sectionTitle,
        tag: "h1",
        children: Z.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
      }),
      children: [x ? (0, n.jsx)(j, {}) : null, O ? (0, n.jsx)(b, {}) : null, B && null != w ? (0, n.jsx)(G, {
        daysPastDue: k,
        subscription: a,
        openInvoiceId: w.id
      }) : null, t, (0, n.jsx)("div", {
        children: (0, n.jsx)("p", {
          className: v.sectionDescription,
          children: Z.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
        })
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)("div", {
          className: N.length > 0 ? v.dupSubscriptionRow : v.__invalid_singleSubscription,
          children: (0, n.jsx)(Y, {
            subscription: a,
            analyticsLocation: E,
            paymentSource: l,
            busy: r,
            fromStandaloneBillingPage: c,
            showNoPaymentMethod: x,
            showInvalidPaymentMethod: O,
            fetchedCurrentInvoicePreview: C,
            fetchedRenewalInvoicePreview: T
          })
        }), N.map((e, s) => (0, n.jsxs)("div", {
          className: v.dupSubscriptionRow,
          children: [(0, n.jsx)(_.FormTitle, {
            tag: "h2",
            className: v.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, n.jsx)(Y, {
            subscription: e,
            analyticsLocation: E,
            paymentSource: l,
            busy: r,
            fromStandaloneBillingPage: c,
            showNoPaymentMethod: x,
            showInvalidPaymentMethod: O,
            fetchedCurrentInvoicePreview: null,
            fetchedRenewalInvoicePreview: null
          })]
        }, s))]
      })]
    })
  }))
}