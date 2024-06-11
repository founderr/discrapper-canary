"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
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
  N = s("674180"),
  g = s("374649"),
  f = s("908951"),
  m = s("703656"),
  A = s("853872"),
  C = s("346656"),
  O = s("755596"),
  h = s("153124"),
  R = s("86813"),
  p = s("41542"),
  M = s("245950"),
  D = s("404203"),
  x = s("330181"),
  L = s("954821"),
  P = s("980864"),
  b = s("981631"),
  v = s("176505"),
  U = s("526761"),
  j = s("689938"),
  G = s("113103");
let F = e => {
    let {
      label: t,
      value: s,
      showInfoIcon: n,
      infoIconTooltipText: i
    } = e;
    return (0, a.jsxs)("div", {
      className: G.infoCard,
      children: [(0, a.jsxs)("div", {
        className: G.infoCardLabelContainer,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: G.infoCardLabel,
          children: t
        }), n && (0, a.jsx)(d.Tooltip, {
          clickableOnMobile: !0,
          text: i,
          children: e => (0, a.jsx)(p.default, {
            ...e,
            className: G.infoCardIcon
          })
        })]
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: G.infoCardValue,
        children: s
      })]
    })
  },
  B = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: s
    } = (0, _.default)(), [n] = (0, g.useSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      renewal: !0,
      analyticsLocations: s,
      analyticsLocation: T.default.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), i = (0, o.useStateFromStores)([A.default], () => A.default.hasFetchedPaymentSources);
    return null != n && i ? (0, a.jsx)(f.default, {
      subscription: t,
      currentInvoicePreview: n,
      dropdownClassName: G.paymentSourceDropdown
    }) : (0, a.jsx)(d.Spinner, {})
  },
  y = e => {
    let {
      isTrial: t,
      isCancelled: s,
      isResubscribing: n,
      shouldHideRoleSubscriptionEntryPoints: i,
      onCancelSubscriptionClick: l,
      onResubscribeClick: r,
      onChangePlanClick: o
    } = e;
    return s && (t || i) ? null : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(d.FormTitle, {
        children: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, a.jsx)("div", {
        className: G.__invalid_rowButtons,
        children: s ? (0, a.jsx)(d.Button, {
          onClick: r,
          submitting: n,
          children: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART_SUBSCRIPTION
        }) : (0, a.jsxs)(a.Fragment, {
          children: [!t && !i && (0, a.jsx)(O.default, {
            label: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CHANGE_TIER,
            onClick: o
          }), (0, a.jsx)(O.default, {
            label: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
            onClick: l
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
    groupListing: i,
    guild: o,
    expanded: T,
    handleToggleExpanded: g,
    subscriptionInfo: f
  } = (0, M.default)(t), [A, O] = n.useState(!1), p = (0, h.useUID)(), {
    analyticsLocations: V
  } = (0, _.default)(), {
    shouldHideGuildPurchaseEntryPoints: H
  } = (0, N.useShouldHideGuildPurchaseEntryPoints)(null == o ? void 0 : o.id), Y = (null == t ? void 0 : t.paymentGateway) === b.PaymentGateways.APPLE_PARTNER;
  if (null == i || null == s || null == f) return null;
  let k = () => {
      null != o && ((0, m.transitionTo)(b.Routes.CHANNEL(o.id, v.StaticChannelRoute.ROLE_SUBSCRIPTIONS)), (0, c.popLayer)(), S.default.show(b.NoticeTypes.BACK_TO_PREVIOUS_SCREEN, void 0, j.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_BACK_TO_SUBSCRIPTION_USER_SETTING_CTA, () => E.default.open(b.UserSettingsSections.SUBSCRIPTIONS, U.ROLE_SUBSCRIPTION_SUBSECTION)))
    },
    w = () => {
      null != o && (0, L.openModal)({
        guildId: o.id,
        groupListing: i,
        listing: s,
        subscription: t
      })
    },
    W = async () => {
      try {
        O(!0), await u.resubscribeToSubscription(t, V), (0, P.openModal)()
      } finally {
        O(!1)
      }
    }, {
      isCancelled: K,
      isPastDue: Q,
      subscriptionPrice: z,
      memberSince: X,
      nextRenewalDate: q,
      nextRenewalLabel: Z,
      isTrial: J
    } = f, $ = s.soft_deleted || null == o || Y, ee = () => {
      if (K) return (0, a.jsx)(d.TextBadge, {
        text: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_CANCELLED
      });
      if (J) return (0, a.jsx)(d.TextBadge, {
        text: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
        color: r.default.BRAND_500
      });
      if (Q) return (0, a.jsx)(d.Tooltip, {
        text: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
        children: e => (0, a.jsx)("div", {
          ...e,
          children: (0, a.jsx)(d.TextBadge, {
            className: G.paymentDueBadge,
            text: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAST_DUE,
            color: r.default.YELLOW_300
          })
        })
      });
      else return null
    }, et = () => Y ? (0, a.jsx)(d.Tooltip, {
      text: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM_TOOLTIP,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(d.TextBadge, {
          text: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM,
          color: I.default.INTERACTIVE_MUTED
        })
      })
    }) : null;
  return (0, a.jsxs)("div", {
    className: G.container,
    children: [(0, a.jsx)(D.default, {
      onClick: g,
      className: G.headerContainer,
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
            className: G.headerTextContainer,
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/medium",
              className: G.guildName,
              children: null != o ? o.name : j.default.Messages.GUILD_ROLE_SUBSCRIPTION_SERVER_NAME_UNAVAILABLE
            }), (0, a.jsxs)("div", {
              className: G.headerSubtitleContainer,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-sm/normal",
                className: G.tierName,
                children: s.name
              }), ee(), et()]
            })]
          }), (0, a.jsx)(d.Clickable, {
            onClick: n(g),
            "aria-label": j.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            "aria-controls": p,
            "aria-expanded": T,
            focusProps: {
              ringTarget: t
            },
            children: (0, a.jsx)(R.default, {
              className: l()(G.arrowIcon, {
                [G.arrowIconExpanded]: T
              })
            })
          })]
        })
      }
    }), T ? (0, a.jsxs)("div", {
      id: p,
      children: [(0, a.jsx)("div", {
        className: G.divider
      }), (0, a.jsx)(x.default, {
        groupListingId: i.id,
        subscription: t,
        className: G.changePlanNotice
      }), (0, a.jsxs)("div", {
        className: G.subscriptionInfoCards,
        children: [(0, a.jsx)(F, {
          label: Z,
          value: q
        }), (0, a.jsx)(F, {
          label: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: z,
          showInfoIcon: J,
          infoIconTooltipText: J ? j.default.Messages.GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO : void 0
        }), (0, a.jsx)(F, {
          label: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBER_SINCE,
          value: X
        })]
      }), (0, a.jsx)(d.Spacer, {
        size: 16
      }), !K && !Y && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.FormTitle, {
          children: j.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
        }), (0, a.jsx)(B, {
          subscription: t
        })]
      }), !$ && (0, a.jsx)(y, {
        isTrial: J,
        isCancelled: K,
        isResubscribing: A,
        shouldHideRoleSubscriptionEntryPoints: H,
        onCancelSubscriptionClick: w,
        onChangePlanClick: k,
        onResubscribeClick: W
      })]
    }) : null]
  })
}