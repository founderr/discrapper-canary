t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(512722),
  o = t.n(r),
  c = t(722770),
  E = t(442837),
  d = t(481060),
  _ = t(355467),
  T = t(100527),
  S = t(906732),
  u = t(218946),
  I = t(404203),
  N = t(330181),
  A = t(374649),
  C = t(908951),
  O = t(255078),
  m = t(853872),
  h = t(346656),
  g = t(474333),
  R = t(755596),
  M = t(153124),
  x = t(171246),
  p = t(41959),
  D = t(650919),
  L = t(981631),
  P = t(689938),
  Z = t(702606);
let f = e => {
    let {
      label: s,
      value: t,
      showInfoIcon: i,
      infoIconTooltipText: a
    } = e;
    return (0, n.jsxs)("div", {
      className: Z.infoCard,
      children: [(0, n.jsxs)("div", {
        className: Z.infoCardLabelContainer,
        children: [(0, n.jsx)(d.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: Z.infoCardLabel,
          children: s
        }), i && (0, n.jsx)(d.Tooltip, {
          text: a,
          children: e => (0, n.jsx)(d.CircleInformationIcon, {
            size: "xs",
            color: "currentColor",
            ...e,
            className: Z.infoCardIcon
          })
        })]
      }), (0, n.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: Z.infoCardValue,
        children: t
      })]
    })
  },
  j = e => {
    let {
      subscription: s,
      disabled: t
    } = e, {
      analyticsLocations: i
    } = (0, S.ZP)(), [a] = (0, A.ED)({
      subscriptionId: s.id,
      renewal: !0,
      analyticsLocations: i,
      analyticsLocation: T.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    });
    return (0, E.e7)([m.Z], () => m.Z.hasFetchedPaymentSources) ? null == a ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(d.FormTitle, {
        children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
      }), (0, n.jsx)(C.Z, {
        subscription: s,
        currentInvoicePreview: a,
        dropdownClassName: Z.paymentSourceDropdown,
        disabled: t
      })]
    }) : (0, n.jsx)(d.Spinner, {})
  },
  v = e => {
    let {
      isCancelled: s,
      onCancelSubscriptionClick: t,
      isResubscribing: i,
      onResubscribeClick: a
    } = e;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(d.FormTitle, {
        children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, n.jsx)("div", {
        className: Z.__invalid_rowButtons,
        children: s ? (0, n.jsx)(d.Button, {
          onClick: a,
          submitting: i,
          children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
        }) : (0, n.jsx)(R.Z, {
          label: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
          onClick: t
        })
      })]
    })
  };
s.Z = e => {
  let {
    subscription: s
  } = e, {
    listing: a,
    groupListing: r,
    guild: E,
    expanded: T,
    handleToggleExpanded: A,
    subscriptionInfo: C,
    application: m
  } = (0, D.Z)(s), R = (0, M.Dt)(), [U, B] = i.useState(!1), {
    analyticsLocations: b
  } = (0, S.ZP)();
  if (null == r || null == a || null == C) return null;
  let G = () => {
      o()(null != m, "Application cannot be null"), (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("6284")]).then(t.bind(t, 257514));
        return t => (0, n.jsx)(e, {
          application: m,
          listing: a,
          subscription: s,
          guild: E,
          ...t
        })
      })
    },
    F = async () => {
      try {
        B(!0);
        let {
          subscription: e
        } = await _.pl(s, b);
        null != e && (0, d.openModalLazy)(async () => {
          let {
            default: s
          } = await Promise.all([t.e("99387"), t.e("18879")]).then(t.bind(t, 535278));
          return t => (0, n.jsx)(s, {
            listing: a,
            subscription: O.Z.createFromServer(e),
            ...t
          })
        })
      } finally {
        B(!1)
      }
    }, {
      isCancelled: V,
      isDeleted: y,
      isPastDue: Y,
      subscriptionPlanPrice: H,
      subscribedSinceDate: k,
      currentPeriodEndDate: w,
      currentPeriodEndLabel: W
    } = C, K = (0, x.KW)(a.sku_flags), z = (0, x.KK)(a.sku_flags), Q = a.soft_deleted || null == m || (!z || null == E) && !K, X = () => V || y ? (0, n.jsx)(d.TextBadge, {
      text: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED
    }) : Y ? (0, n.jsx)(d.Tooltip, {
      text: P.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      children: e => (0, n.jsx)("div", {
        ...e,
        children: (0, n.jsx)(d.TextBadge, {
          className: Z.paymentDueBadge,
          text: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
          color: c.Z.YELLOW_300
        })
      })
    }) : null, q = null;
  if (z) {
    var J;
    q = (0, n.jsxs)(d.Text, {
      variant: "text-sm/normal",
      className: Z.tierName,
      children: [P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({
        guildName: null !== (J = null == E ? void 0 : E.name) && void 0 !== J ? J : P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE
      }), null != E && (0, n.jsx)(h.Z, {
        guild: E,
        size: h.Z.Sizes.MINI,
        className: Z.guildIcon
      })]
    })
  } else K && (q = (0, n.jsx)(d.Text, {
    variant: "text-sm/normal",
    className: Z.tierName,
    children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
  }));
  return (0, n.jsxs)("div", {
    className: Z.container,
    children: [(0, n.jsx)(I.Z, {
      onClick: A,
      className: Z.headerContainer,
      children: e => {
        let {
          areaRef: s,
          handleStopPropagation: t
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [null != m && (0, n.jsx)(p.Z, {
            size: p.H.SMALL,
            className: Z.applicationIcon,
            application: m,
            asset: null != a.image_asset ? (0, u.m)(a.image_asset) : null
          }), (0, n.jsxs)("div", {
            className: Z.headerTextContainer,
            children: [(0, n.jsx)(d.Text, {
              variant: "text-md/medium",
              className: Z.applicationName,
              children: null != m ? m.name : P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
            }), (0, n.jsxs)("div", {
              className: Z.headerSubtitleContainer,
              children: [q, X()]
            })]
          }), (0, n.jsx)(d.Clickable, {
            onClick: t(A),
            "aria-label": P.Z.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
            "aria-controls": R,
            "aria-expanded": T,
            focusProps: {
              ringTarget: s
            },
            children: (0, n.jsx)(d.ChevronSmallDownIcon, {
              size: "md",
              color: "currentColor",
              className: l()(Z.arrowIcon, {
                [Z.arrowIconExpanded]: T
              })
            })
          })]
        })
      }
    }), T ? (0, n.jsxs)("div", {
      id: R,
      children: [(0, n.jsx)("div", {
        className: Z.divider
      }), y ? (0, n.jsx)(g.Z, {
        messageType: g.Q.WARNING,
        className: Z.deletedHelpMessage,
        children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
      }) : null, (0, n.jsx)(N.Z, {
        groupListingId: r.id,
        subscription: s,
        className: Z.changePlanNotice
      }), (0, n.jsxs)("div", {
        className: Z.subscriptionInfoCards,
        children: [(0, n.jsx)(f, {
          label: W,
          value: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({
            timestamp: w.getTime()
          })
        }), (0, n.jsx)(f, {
          label: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: H
        }), (0, n.jsx)(f, {
          label: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
          value: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({
            timestamp: k.getTime()
          })
        })]
      }), (0, n.jsx)(d.Spacer, {
        size: 16
      }), s.status === L.O0b.ACTIVE && (0, n.jsx)(j, {
        subscription: s,
        disabled: y
      }), !Q && (0, n.jsx)(v, {
        isCancelled: V,
        onCancelSubscriptionClick: G,
        isResubscribing: U,
        onResubscribeClick: F
      })]
    }) : null]
  })
}