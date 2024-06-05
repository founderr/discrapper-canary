"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("722770"),
  o = s("442837"),
  d = s("481060"),
  u = s("355467"),
  c = s("37234"),
  S = s("254854"),
  E = s("230711"),
  T = s("100527"),
  _ = s("906732"),
  I = s("377171"),
  f = s("674180"),
  m = s("374649"),
  N = s("908951"),
  g = s("703656"),
  h = s("853872"),
  C = s("346656"),
  O = s("755596"),
  A = s("682864"),
  p = s("153124"),
  R = s("86813"),
  x = s("41542"),
  M = s("26290"),
  D = s("245950"),
  L = s("404203"),
  P = s("330181"),
  v = s("954821"),
  b = s("980864"),
  U = s("981631"),
  j = s("176505"),
  F = s("526761"),
  G = s("689938"),
  B = s("113103");
let y = e => {
    let {
      label: t,
      value: s,
      showInfoIcon: n,
      infoIconTooltipText: l
    } = e;
    return (0, a.jsxs)("div", {
      className: B.infoCard,
      children: [(0, a.jsxs)("div", {
        className: B.infoCardLabelContainer,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: B.infoCardLabel,
          children: t
        }), n && (0, a.jsx)(d.Tooltip, {
          clickableOnMobile: !0,
          text: l,
          children: e => (0, a.jsx)(x.default, {
            ...e,
            className: B.infoCardIcon
          })
        })]
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: B.infoCardValue,
        children: s
      })]
    })
  },
  V = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: s
    } = (0, _.default)(), [n] = (0, m.useSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      renewal: !0,
      analyticsLocations: s,
      analyticsLocation: T.default.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), l = (0, o.useStateFromStores)([h.default], () => h.default.hasFetchedPaymentSources);
    return null != n && l ? (0, a.jsx)(N.default, {
      subscription: t,
      currentInvoicePreview: n,
      dropdownClassName: B.paymentSourceDropdown
    }) : (0, a.jsx)(d.Spinner, {})
  },
  H = e => {
    let {
      isTrial: t,
      isCancelled: s,
      isResubscribing: n,
      shouldHideRoleSubscriptionEntryPoints: l,
      onCancelSubscriptionClick: i,
      onResubscribeClick: r,
      onChangePlanClick: o
    } = e;
    return s && (t || l) ? null : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(d.FormTitle, {
        children: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, a.jsx)("div", {
        className: B.__invalid_rowButtons,
        children: s ? (0, a.jsx)(d.Button, {
          onClick: r,
          submitting: n,
          children: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART_SUBSCRIPTION
        }) : (0, a.jsxs)(a.Fragment, {
          children: [!t && !l && (0, a.jsx)(O.default, {
            label: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CHANGE_TIER,
            onClick: o
          }), (0, a.jsx)(O.default, {
            label: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
            onClick: i
          })]
        })
      })]
    })
  };
t.default = e => {
  let {
    subscription: t
  } = e, {
    listing: s,
    groupListing: l,
    guild: o,
    expanded: T,
    handleToggleExpanded: m,
    subscriptionInfo: N
  } = (0, D.default)(t), [h, O] = n.useState(!1), x = (0, p.useUID)(), {
    analyticsLocations: k
  } = (0, _.default)(), {
    shouldHideGuildPurchaseEntryPoints: w
  } = (0, f.useShouldHideGuildPurchaseEntryPoints)(null == o ? void 0 : o.id), Y = (null == t ? void 0 : t.paymentGateway) === U.PaymentGateways.APPLE_PARTNER;
  if (null == l || null == s || null == N) return null;
  let W = () => {
      null != o && ((0, g.transitionTo)(U.Routes.CHANNEL(o.id, j.StaticChannelRoute.ROLE_SUBSCRIPTIONS)), (0, c.popLayer)(), S.default.show(U.NoticeTypes.BACK_TO_PREVIOUS_SCREEN, void 0, G.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_BACK_TO_SUBSCRIPTION_USER_SETTING_CTA, () => E.default.open(U.UserSettingsSections.SUBSCRIPTIONS, F.ROLE_SUBSCRIPTION_SUBSECTION)))
    },
    K = () => {
      null != o && (0, v.openModal)({
        guildId: o.id,
        groupListing: l,
        listing: s,
        subscription: t
      })
    },
    z = async () => {
      try {
        O(!0), await u.resubscribeToSubscription(t, k), (0, b.openModal)()
      } finally {
        O(!1)
      }
    }, {
      isCancelled: Q,
      isPastDue: q,
      subscriptionPrice: X,
      memberSince: Z,
      nextRenewalDate: J,
      nextRenewalLabel: $,
      isTrial: ee
    } = N, et = s.soft_deleted || null == o || Y, es = () => {
      if (Q) return (0, a.jsx)(M.TextBadge, {
        text: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_CANCELLED
      });
      if (ee) return (0, a.jsx)(M.TextBadge, {
        text: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
        color: r.default.BRAND_500
      });
      if (q) return (0, a.jsx)(d.Tooltip, {
        text: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
        children: e => (0, a.jsx)("div", {
          ...e,
          children: (0, a.jsx)(M.TextBadge, {
            className: B.paymentDueBadge,
            text: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAST_DUE,
            color: r.default.YELLOW_300
          })
        })
      });
      else return null
    }, ea = () => Y ? (0, a.jsx)(d.Tooltip, {
      text: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM_TOOLTIP,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(M.TextBadge, {
          text: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM,
          color: I.default.INTERACTIVE_MUTED
        })
      })
    }) : null;
  return (0, a.jsxs)("div", {
    className: B.container,
    children: [(0, a.jsx)(L.default, {
      onClick: m,
      className: B.headerContainer,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: n
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [null != o && (0, a.jsx)(C.default, {
            guild: o,
            active: !0,
            size: C.default.Sizes.MEDIUM
          }), (0, a.jsxs)("div", {
            className: B.headerTextContainer,
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/medium",
              className: B.guildName,
              children: null != o ? o.name : G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SERVER_NAME_UNAVAILABLE
            }), (0, a.jsxs)("div", {
              className: B.headerSubtitleContainer,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-sm/normal",
                className: B.tierName,
                children: s.name
              }), es(), ea()]
            })]
          }), (0, a.jsx)(d.Clickable, {
            onClick: n(m),
            "aria-label": G.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            "aria-controls": x,
            "aria-expanded": T,
            focusProps: {
              ringTarget: t
            },
            children: (0, a.jsx)(R.default, {
              className: i()(B.arrowIcon, {
                [B.arrowIconExpanded]: T
              })
            })
          })]
        })
      }
    }), T ? (0, a.jsxs)("div", {
      id: x,
      children: [(0, a.jsx)("div", {
        className: B.divider
      }), (0, a.jsx)(P.default, {
        groupListingId: l.id,
        subscription: t,
        className: B.changePlanNotice
      }), (0, a.jsxs)("div", {
        className: B.subscriptionInfoCards,
        children: [(0, a.jsx)(y, {
          label: $,
          value: J
        }), (0, a.jsx)(y, {
          label: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: X,
          showInfoIcon: ee,
          infoIconTooltipText: ee ? G.default.Messages.GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO : void 0
        }), (0, a.jsx)(y, {
          label: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBER_SINCE,
          value: Z
        })]
      }), (0, a.jsx)(A.default, {
        size: 16
      }), !Q && !Y && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.FormTitle, {
          children: G.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
        }), (0, a.jsx)(V, {
          subscription: t
        })]
      }), !et && (0, a.jsx)(H, {
        isTrial: ee,
        isCancelled: Q,
        isResubscribing: h,
        shouldHideRoleSubscriptionEntryPoints: w,
        onCancelSubscriptionClick: K,
        onChangePlanClick: W,
        onResubscribeClick: z
      })]
    }) : null]
  })
}