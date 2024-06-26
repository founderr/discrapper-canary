t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(722770),
  l = t(442837),
  c = t(481060),
  d = t(355467),
  _ = t(37234),
  E = t(254854),
  u = t(230711),
  T = t(100527),
  S = t(906732),
  I = t(377171),
  N = t(674180),
  C = t(374649),
  A = t(908951),
  m = t(703656),
  O = t(853872),
  g = t(346656),
  h = t(755596),
  R = t(153124),
  p = t(245950),
  x = t(404203),
  M = t(330181),
  D = t(954821),
  f = t(980864),
  L = t(981631),
  P = t(176505),
  Z = t(526761),
  v = t(689938),
  b = t(550839);
let j = e => {
    let {
      label: s,
      value: t,
      showInfoIcon: a,
      infoIconTooltipText: i
    } = e;
    return (0, n.jsxs)("div", {
      className: b.infoCard,
      children: [(0, n.jsxs)("div", {
        className: b.infoCardLabelContainer,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: b.infoCardLabel,
          children: s
        }), a && (0, n.jsx)(c.Tooltip, {
          clickableOnMobile: !0,
          text: i,
          children: e => (0, n.jsx)(c.CircleInformationIcon, {
            size: "xs",
            color: "currentColor",
            ...e,
            className: b.infoCardIcon
          })
        })]
      }), (0, n.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: b.infoCardValue,
        children: t
      })]
    })
  },
  U = e => {
    let {
      subscription: s
    } = e, {
      analyticsLocations: t
    } = (0, S.ZP)(), [a] = (0, C.ED)({
      subscriptionId: s.id,
      renewal: !0,
      analyticsLocations: t,
      analyticsLocation: T.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), i = (0, l.e7)([O.Z], () => O.Z.hasFetchedPaymentSources);
    return null != a && i ? (0, n.jsx)(A.Z, {
      subscription: s,
      currentInvoicePreview: a,
      dropdownClassName: b.paymentSourceDropdown
    }) : (0, n.jsx)(c.Spinner, {})
  },
  B = e => {
    let {
      isTrial: s,
      isCancelled: t,
      isResubscribing: a,
      shouldHideRoleSubscriptionEntryPoints: i,
      onCancelSubscriptionClick: r,
      onResubscribeClick: o,
      onChangePlanClick: l
    } = e;
    return t && (s || i) ? null : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(c.FormTitle, {
        children: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, n.jsx)("div", {
        className: b.__invalid_rowButtons,
        children: t ? (0, n.jsx)(c.Button, {
          onClick: o,
          submitting: a,
          children: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART_SUBSCRIPTION
        }) : (0, n.jsxs)(n.Fragment, {
          children: [!s && !i && (0, n.jsx)(h.Z, {
            label: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CHANGE_TIER,
            onClick: l
          }), (0, n.jsx)(h.Z, {
            label: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
            onClick: r
          })]
        })
      })]
    })
  };
s.Z = e => {
  let {
    subscription: s
  } = e, {
    listing: t,
    groupListing: i,
    guild: l,
    expanded: T,
    handleToggleExpanded: C,
    subscriptionInfo: A
  } = (0, p.Z)(s), [O, h] = a.useState(!1), G = (0, R.Dt)(), {
    analyticsLocations: F
  } = (0, S.ZP)(), {
    shouldHideGuildPurchaseEntryPoints: V
  } = (0, N.uP)(null == l ? void 0 : l.id), y = (null == s ? void 0 : s.paymentGateway) === L.gg$.APPLE_PARTNER;
  if (null == i || null == t || null == A) return null;
  let Y = () => {
      null != l && ((0, m.uL)(L.Z5c.CHANNEL(l.id, P.oC.ROLE_SUBSCRIPTIONS)), (0, _.xf)(), E.Z.show(L.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_BACK_TO_SUBSCRIPTION_USER_SETTING_CTA, () => u.Z.open(L.oAB.SUBSCRIPTIONS, Z.cP)))
    },
    H = () => {
      null != l && (0, D.h)({
        guildId: l.id,
        groupListing: i,
        listing: t,
        subscription: s
      })
    },
    k = async () => {
      try {
        h(!0), await d.pl(s, F), (0, f.h)()
      } finally {
        h(!1)
      }
    }, {
      isCancelled: w,
      isPastDue: W,
      subscriptionPrice: K,
      memberSince: z,
      nextRenewalDate: Q,
      nextRenewalLabel: X,
      isTrial: q
    } = A, J = t.soft_deleted || null == l || y, $ = () => {
      if (w) return (0, n.jsx)(c.TextBadge, {
        text: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_CANCELLED
      });
      if (q) return (0, n.jsx)(c.TextBadge, {
        text: v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
        color: o.Z.BRAND_500
      });
      if (W) return (0, n.jsx)(c.Tooltip, {
        text: v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
        children: e => (0, n.jsx)("div", {
          ...e,
          children: (0, n.jsx)(c.TextBadge, {
            className: b.paymentDueBadge,
            text: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAST_DUE,
            color: o.Z.YELLOW_300
          })
        })
      });
      else return null
    }, ee = () => y ? (0, n.jsx)(c.Tooltip, {
      text: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM_TOOLTIP,
      children: e => (0, n.jsx)("div", {
        ...e,
        children: (0, n.jsx)(c.TextBadge, {
          text: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM,
          color: I.Z.INTERACTIVE_MUTED
        })
      })
    }) : null;
  return (0, n.jsxs)("div", {
    className: b.container,
    children: [(0, n.jsx)(x.Z, {
      onClick: C,
      className: b.headerContainer,
      children: e => {
        let {
          areaRef: s,
          handleStopPropagation: a
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [null != l && (0, n.jsx)(g.Z, {
            guild: l,
            active: !0,
            size: g.Z.Sizes.MEDIUM
          }), (0, n.jsxs)("div", {
            className: b.headerTextContainer,
            children: [(0, n.jsx)(c.Text, {
              variant: "text-md/medium",
              className: b.guildName,
              children: null != l ? l.name : v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SERVER_NAME_UNAVAILABLE
            }), (0, n.jsxs)("div", {
              className: b.headerSubtitleContainer,
              children: [(0, n.jsx)(c.Text, {
                variant: "text-sm/normal",
                className: b.tierName,
                children: t.name
              }), $(), ee()]
            })]
          }), (0, n.jsx)(c.Clickable, {
            onClick: a(C),
            "aria-label": v.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            "aria-controls": G,
            "aria-expanded": T,
            focusProps: {
              ringTarget: s
            },
            children: (0, n.jsx)(c.ChevronSmallDownIcon, {
              size: "md",
              color: "currentColor",
              className: r()(b.arrowIcon, {
                [b.arrowIconExpanded]: T
              })
            })
          })]
        })
      }
    }), T ? (0, n.jsxs)("div", {
      id: G,
      children: [(0, n.jsx)("div", {
        className: b.divider
      }), (0, n.jsx)(M.Z, {
        groupListingId: i.id,
        subscription: s,
        className: b.changePlanNotice
      }), (0, n.jsxs)("div", {
        className: b.subscriptionInfoCards,
        children: [(0, n.jsx)(j, {
          label: X,
          value: Q
        }), (0, n.jsx)(j, {
          label: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: K,
          showInfoIcon: q,
          infoIconTooltipText: q ? v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO : void 0
        }), (0, n.jsx)(j, {
          label: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBER_SINCE,
          value: z
        })]
      }), (0, n.jsx)(c.Spacer, {
        size: 16
      }), !w && !y && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.FormTitle, {
          children: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
        }), (0, n.jsx)(U, {
          subscription: s
        })]
      }), !J && (0, n.jsx)(B, {
        isTrial: q,
        isCancelled: w,
        isResubscribing: O,
        shouldHideRoleSubscriptionEntryPoints: V,
        onCancelSubscriptionClick: H,
        onChangePlanClick: Y,
        onResubscribeClick: k
      })]
    }) : null]
  })
}