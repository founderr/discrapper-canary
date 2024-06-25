t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(722770),
  o = t(442837),
  c = t(481060),
  E = t(355467),
  d = t(37234),
  _ = t(254854),
  T = t(230711),
  S = t(100527),
  u = t(906732),
  I = t(377171),
  N = t(674180),
  A = t(374649),
  C = t(908951),
  O = t(703656),
  m = t(853872),
  h = t(346656),
  g = t(755596),
  R = t(153124),
  M = t(245950),
  x = t(404203),
  D = t(330181),
  p = t(954821),
  L = t(980864),
  P = t(981631),
  Z = t(176505),
  f = t(526761),
  v = t(689938),
  j = t(550839);
let U = e => {
    let {
      label: s,
      value: t,
      showInfoIcon: i,
      infoIconTooltipText: a
    } = e;
    return (0, n.jsxs)("div", {
      className: j.infoCard,
      children: [(0, n.jsxs)("div", {
        className: j.infoCardLabelContainer,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: j.infoCardLabel,
          children: s
        }), i && (0, n.jsx)(c.Tooltip, {
          clickableOnMobile: !0,
          text: a,
          children: e => (0, n.jsx)(c.CircleInformationIcon, {
            size: "xs",
            color: "currentColor",
            ...e,
            className: j.infoCardIcon
          })
        })]
      }), (0, n.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: j.infoCardValue,
        children: t
      })]
    })
  },
  B = e => {
    let {
      subscription: s
    } = e, {
      analyticsLocations: t
    } = (0, u.ZP)(), [i] = (0, A.ED)({
      subscriptionId: s.id,
      renewal: !0,
      analyticsLocations: t,
      analyticsLocation: S.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), a = (0, o.e7)([m.Z], () => m.Z.hasFetchedPaymentSources);
    return null != i && a ? (0, n.jsx)(C.Z, {
      subscription: s,
      currentInvoicePreview: i,
      dropdownClassName: j.paymentSourceDropdown
    }) : (0, n.jsx)(c.Spinner, {})
  },
  b = e => {
    let {
      isTrial: s,
      isCancelled: t,
      isResubscribing: i,
      shouldHideRoleSubscriptionEntryPoints: a,
      onCancelSubscriptionClick: l,
      onResubscribeClick: r,
      onChangePlanClick: o
    } = e;
    return t && (s || a) ? null : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(c.FormTitle, {
        children: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, n.jsx)("div", {
        className: j.__invalid_rowButtons,
        children: t ? (0, n.jsx)(c.Button, {
          onClick: r,
          submitting: i,
          children: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART_SUBSCRIPTION
        }) : (0, n.jsxs)(n.Fragment, {
          children: [!s && !a && (0, n.jsx)(g.Z, {
            label: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CHANGE_TIER,
            onClick: o
          }), (0, n.jsx)(g.Z, {
            label: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
            onClick: l
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
    groupListing: a,
    guild: o,
    expanded: S,
    handleToggleExpanded: A,
    subscriptionInfo: C
  } = (0, M.Z)(s), [m, g] = i.useState(!1), G = (0, R.Dt)(), {
    analyticsLocations: F
  } = (0, u.ZP)(), {
    shouldHideGuildPurchaseEntryPoints: V
  } = (0, N.uP)(null == o ? void 0 : o.id), y = (null == s ? void 0 : s.paymentGateway) === P.gg$.APPLE_PARTNER;
  if (null == a || null == t || null == C) return null;
  let Y = () => {
      null != o && ((0, O.uL)(P.Z5c.CHANNEL(o.id, Z.oC.ROLE_SUBSCRIPTIONS)), (0, d.xf)(), _.Z.show(P.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_BACK_TO_SUBSCRIPTION_USER_SETTING_CTA, () => T.Z.open(P.oAB.SUBSCRIPTIONS, f.cP)))
    },
    H = () => {
      null != o && (0, p.h)({
        guildId: o.id,
        groupListing: a,
        listing: t,
        subscription: s
      })
    },
    k = async () => {
      try {
        g(!0), await E.pl(s, F), (0, L.h)()
      } finally {
        g(!1)
      }
    }, {
      isCancelled: w,
      isPastDue: W,
      subscriptionPrice: K,
      memberSince: z,
      nextRenewalDate: Q,
      nextRenewalLabel: X,
      isTrial: q
    } = C, J = t.soft_deleted || null == o || y, $ = () => {
      if (w) return (0, n.jsx)(c.TextBadge, {
        text: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_CANCELLED
      });
      if (q) return (0, n.jsx)(c.TextBadge, {
        text: v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
        color: r.Z.BRAND_500
      });
      if (W) return (0, n.jsx)(c.Tooltip, {
        text: v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
        children: e => (0, n.jsx)("div", {
          ...e,
          children: (0, n.jsx)(c.TextBadge, {
            className: j.paymentDueBadge,
            text: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAST_DUE,
            color: r.Z.YELLOW_300
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
    className: j.container,
    children: [(0, n.jsx)(x.Z, {
      onClick: A,
      className: j.headerContainer,
      children: e => {
        let {
          areaRef: s,
          handleStopPropagation: i
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [null != o && (0, n.jsx)(h.Z, {
            guild: o,
            active: !0,
            size: h.Z.Sizes.MEDIUM
          }), (0, n.jsxs)("div", {
            className: j.headerTextContainer,
            children: [(0, n.jsx)(c.Text, {
              variant: "text-md/medium",
              className: j.guildName,
              children: null != o ? o.name : v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SERVER_NAME_UNAVAILABLE
            }), (0, n.jsxs)("div", {
              className: j.headerSubtitleContainer,
              children: [(0, n.jsx)(c.Text, {
                variant: "text-sm/normal",
                className: j.tierName,
                children: t.name
              }), $(), ee()]
            })]
          }), (0, n.jsx)(c.Clickable, {
            onClick: i(A),
            "aria-label": v.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            "aria-controls": G,
            "aria-expanded": S,
            focusProps: {
              ringTarget: s
            },
            children: (0, n.jsx)(c.ChevronSmallDownIcon, {
              size: "md",
              color: "currentColor",
              className: l()(j.arrowIcon, {
                [j.arrowIconExpanded]: S
              })
            })
          })]
        })
      }
    }), S ? (0, n.jsxs)("div", {
      id: G,
      children: [(0, n.jsx)("div", {
        className: j.divider
      }), (0, n.jsx)(D.Z, {
        groupListingId: a.id,
        subscription: s,
        className: j.changePlanNotice
      }), (0, n.jsxs)("div", {
        className: j.subscriptionInfoCards,
        children: [(0, n.jsx)(U, {
          label: X,
          value: Q
        }), (0, n.jsx)(U, {
          label: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: K,
          showInfoIcon: q,
          infoIconTooltipText: q ? v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO : void 0
        }), (0, n.jsx)(U, {
          label: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBER_SINCE,
          value: z
        })]
      }), (0, n.jsx)(c.Spacer, {
        size: 16
      }), !w && !y && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.FormTitle, {
          children: v.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
        }), (0, n.jsx)(B, {
          subscription: s
        })]
      }), !J && (0, n.jsx)(b, {
        isTrial: q,
        isCancelled: w,
        isResubscribing: m,
        shouldHideRoleSubscriptionEntryPoints: V,
        onCancelSubscriptionClick: H,
        onChangePlanClick: Y,
        onResubscribeClick: k
      })]
    }) : null]
  })
}