t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(512722),
  l = t.n(o),
  c = t(722770),
  d = t(442837),
  _ = t(481060),
  E = t(355467),
  u = t(100527),
  T = t(906732),
  S = t(218946),
  I = t(404203),
  N = t(330181),
  C = t(374649),
  A = t(908951),
  m = t(255078),
  O = t(853872),
  g = t(346656),
  h = t(474333),
  R = t(755596),
  p = t(153124),
  x = t(171246),
  M = t(41959),
  D = t(650919),
  f = t(981631),
  L = t(689938),
  P = t(702606);
let Z = e => {
    let {
      label: s,
      value: t,
      showInfoIcon: a,
      infoIconTooltipText: i
    } = e;
    return (0, n.jsxs)("div", {
      className: P.infoCard,
      children: [(0, n.jsxs)("div", {
        className: P.infoCardLabelContainer,
        children: [(0, n.jsx)(_.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: P.infoCardLabel,
          children: s
        }), a && (0, n.jsx)(_.Tooltip, {
          text: i,
          children: e => (0, n.jsx)(_.CircleInformationIcon, {
            size: "xs",
            color: "currentColor",
            ...e,
            className: P.infoCardIcon
          })
        })]
      }), (0, n.jsx)(_.Heading, {
        variant: "heading-xl/semibold",
        className: P.infoCardValue,
        children: t
      })]
    })
  },
  v = e => {
    let {
      subscription: s,
      disabled: t
    } = e, {
      analyticsLocations: a
    } = (0, T.ZP)(), [i] = (0, C.ED)({
      subscriptionId: s.id,
      renewal: !0,
      analyticsLocations: a,
      analyticsLocation: u.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    });
    return (0, d.e7)([O.Z], () => O.Z.hasFetchedPaymentSources) ? null == i ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(_.FormTitle, {
        children: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
      }), (0, n.jsx)(A.Z, {
        subscription: s,
        currentInvoicePreview: i,
        dropdownClassName: P.paymentSourceDropdown,
        disabled: t
      })]
    }) : (0, n.jsx)(_.Spinner, {})
  },
  b = e => {
    let {
      isCancelled: s,
      onCancelSubscriptionClick: t,
      isResubscribing: a,
      onResubscribeClick: i
    } = e;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(_.FormTitle, {
        children: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, n.jsx)("div", {
        className: P.__invalid_rowButtons,
        children: s ? (0, n.jsx)(_.Button, {
          onClick: i,
          submitting: a,
          children: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
        }) : (0, n.jsx)(R.Z, {
          label: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
          onClick: t
        })
      })]
    })
  };
s.Z = e => {
  let {
    subscription: s
  } = e, {
    listing: i,
    groupListing: o,
    guild: d,
    expanded: u,
    handleToggleExpanded: C,
    subscriptionInfo: A,
    application: O
  } = (0, D.Z)(s), R = (0, p.Dt)(), [j, U] = a.useState(!1), {
    analyticsLocations: B
  } = (0, T.ZP)();
  if (null == o || null == i || null == A) return null;
  let G = () => {
      l()(null != O, "Application cannot be null"), (0, _.openModalLazy)(async () => {
        let {
          default: e
        } = await t.e("6284").then(t.bind(t, 257514));
        return t => (0, n.jsx)(e, {
          application: O,
          listing: i,
          subscription: s,
          guild: d,
          ...t
        })
      })
    },
    F = async () => {
      try {
        U(!0);
        let {
          subscription: e
        } = await E.pl(s, B);
        null != e && (0, _.openModalLazy)(async () => {
          let {
            default: s
          } = await t.e("18879").then(t.bind(t, 535278));
          return t => (0, n.jsx)(s, {
            listing: i,
            subscription: m.Z.createFromServer(e),
            ...t
          })
        })
      } finally {
        U(!1)
      }
    }, {
      isCancelled: V,
      isDeleted: y,
      isPastDue: Y,
      subscriptionPlanPrice: H,
      subscribedSinceDate: k,
      currentPeriodEndDate: w,
      currentPeriodEndLabel: W
    } = A, K = (0, x.KW)(i.sku_flags), z = (0, x.KK)(i.sku_flags), Q = i.soft_deleted || null == O || (!z || null == d) && !K, X = () => V || y ? (0, n.jsx)(_.TextBadge, {
      text: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED
    }) : Y ? (0, n.jsx)(_.Tooltip, {
      text: L.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      children: e => (0, n.jsx)("div", {
        ...e,
        children: (0, n.jsx)(_.TextBadge, {
          className: P.paymentDueBadge,
          text: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
          color: c.Z.YELLOW_300
        })
      })
    }) : null, q = null;
  if (z) {
    var J;
    q = (0, n.jsxs)(_.Text, {
      variant: "text-sm/normal",
      className: P.tierName,
      children: [L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({
        guildName: null !== (J = null == d ? void 0 : d.name) && void 0 !== J ? J : L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE
      }), null != d && (0, n.jsx)(g.Z, {
        guild: d,
        size: g.Z.Sizes.MINI,
        className: P.guildIcon
      })]
    })
  } else K && (q = (0, n.jsx)(_.Text, {
    variant: "text-sm/normal",
    className: P.tierName,
    children: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
  }));
  return (0, n.jsxs)("div", {
    className: P.container,
    children: [(0, n.jsx)(I.Z, {
      onClick: C,
      className: P.headerContainer,
      children: e => {
        let {
          areaRef: s,
          handleStopPropagation: t
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [null != O && (0, n.jsx)(M.Z, {
            size: M.H.SMALL,
            className: P.applicationIcon,
            application: O,
            asset: null != i.image_asset ? (0, S.m)(i.image_asset) : null
          }), (0, n.jsxs)("div", {
            className: P.headerTextContainer,
            children: [(0, n.jsx)(_.Text, {
              variant: "text-md/medium",
              className: P.applicationName,
              children: null != O ? O.name : L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
            }), (0, n.jsxs)("div", {
              className: P.headerSubtitleContainer,
              children: [q, X()]
            })]
          }), (0, n.jsx)(_.Clickable, {
            onClick: t(C),
            "aria-label": L.Z.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
            "aria-controls": R,
            "aria-expanded": u,
            focusProps: {
              ringTarget: s
            },
            children: (0, n.jsx)(_.ChevronSmallDownIcon, {
              size: "md",
              color: "currentColor",
              className: r()(P.arrowIcon, {
                [P.arrowIconExpanded]: u
              })
            })
          })]
        })
      }
    }), u ? (0, n.jsxs)("div", {
      id: R,
      children: [(0, n.jsx)("div", {
        className: P.divider
      }), y ? (0, n.jsx)(h.Z, {
        messageType: h.Q.WARNING,
        className: P.deletedHelpMessage,
        children: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
      }) : null, (0, n.jsx)(N.Z, {
        groupListingId: o.id,
        subscription: s,
        className: P.changePlanNotice
      }), (0, n.jsxs)("div", {
        className: P.subscriptionInfoCards,
        children: [(0, n.jsx)(Z, {
          label: W,
          value: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({
            timestamp: w.getTime()
          })
        }), (0, n.jsx)(Z, {
          label: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: H
        }), (0, n.jsx)(Z, {
          label: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
          value: L.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({
            timestamp: k.getTime()
          })
        })]
      }), (0, n.jsx)(_.Spacer, {
        size: 16
      }), s.status === f.O0b.ACTIVE && (0, n.jsx)(v, {
        subscription: s,
        disabled: y
      }), !Q && (0, n.jsx)(b, {
        isCancelled: V,
        onCancelSubscriptionClick: G,
        isResubscribing: j,
        onResubscribeClick: F
      })]
    }) : null]
  })
}