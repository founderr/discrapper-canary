"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("512722"),
  o = s.n(r),
  d = s("722770"),
  u = s("442837"),
  c = s("481060"),
  S = s("355467"),
  E = s("100527"),
  T = s("906732"),
  _ = s("218946"),
  f = s("404203"),
  m = s("330181"),
  g = s("374649"),
  I = s("908951"),
  N = s("255078"),
  h = s("853872"),
  C = s("346656"),
  p = s("474333"),
  A = s("755596"),
  O = s("682864"),
  x = s("153124"),
  R = s("86813"),
  M = s("41542"),
  v = s("26290"),
  D = s("171246"),
  L = s("41959"),
  P = s("650919"),
  b = s("981631"),
  j = s("689938"),
  U = s("285136");
let y = e => {
    let {
      label: t,
      value: s,
      showInfoIcon: n,
      infoIconTooltipText: l
    } = e;
    return (0, a.jsxs)("div", {
      className: U.infoCard,
      children: [(0, a.jsxs)("div", {
        className: U.infoCardLabelContainer,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: U.infoCardLabel,
          children: t
        }), n && (0, a.jsx)(c.Tooltip, {
          text: l,
          children: e => (0, a.jsx)(M.default, {
            ...e,
            className: U.infoCardIcon
          })
        })]
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: U.infoCardValue,
        children: s
      })]
    })
  },
  G = e => {
    let {
      subscription: t,
      disabled: s
    } = e, {
      analyticsLocations: n
    } = (0, T.default)(), [l] = (0, g.useSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      renewal: !0,
      analyticsLocations: n,
      analyticsLocation: E.default.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    });
    return (0, u.useStateFromStores)([h.default], () => h.default.hasFetchedPaymentSources) ? null == l ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormTitle, {
        children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
      }), (0, a.jsx)(I.default, {
        subscription: t,
        currentInvoicePreview: l,
        dropdownClassName: U.paymentSourceDropdown,
        disabled: s
      })]
    }) : (0, a.jsx)(c.Spinner, {})
  },
  B = e => {
    let {
      isCancelled: t,
      onCancelSubscriptionClick: s,
      isResubscribing: n,
      onResubscribeClick: l
    } = e;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(c.FormTitle, {
        children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, a.jsx)("div", {
        className: U.__invalid_rowButtons,
        children: t ? (0, a.jsx)(c.Button, {
          onClick: l,
          submitting: n,
          children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
        }) : (0, a.jsx)(A.default, {
          label: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
          onClick: s
        })
      })]
    })
  };
t.default = e => {
  let {
    subscription: t
  } = e, {
    listing: l,
    groupListing: r,
    guild: u,
    expanded: E,
    handleToggleExpanded: g,
    subscriptionInfo: I,
    application: h
  } = (0, P.default)(t), A = (0, x.useUID)(), [M, F] = n.useState(!1), {
    analyticsLocations: k
  } = (0, T.default)();
  if (null == r || null == l || null == I) return null;
  let w = () => {
      o()(null != h, "Application cannot be null"), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("6284")]).then(s.bind(s, "257514"));
        return s => (0, a.jsx)(e, {
          application: h,
          listing: l,
          subscription: t,
          guild: u,
          ...s
        })
      })
    },
    H = async () => {
      try {
        F(!0);
        let {
          subscription: e
        } = await S.resubscribeToSubscription(t, k);
        null != e && (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([s.e("99387"), s.e("18879")]).then(s.bind(s, "535278"));
          return s => (0, a.jsx)(t, {
            listing: l,
            subscription: N.default.createFromServer(e),
            ...s
          })
        })
      } finally {
        F(!1)
      }
    }, {
      isCancelled: V,
      isDeleted: Y,
      isPastDue: W,
      subscriptionPlanPrice: K,
      subscribedSinceDate: z,
      currentPeriodEndDate: Q,
      currentPeriodEndLabel: q
    } = I, Z = (0, D.isApplicationUserSubscription)(l.sku_flags), X = (0, D.isApplicationGuildSubscription)(l.sku_flags), J = l.soft_deleted || null == h || (!X || null == u) && !Z, $ = () => V || Y ? (0, a.jsx)(v.TextBadge, {
      text: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED
    }) : W ? (0, a.jsx)(c.Tooltip, {
      text: j.default.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(v.TextBadge, {
          className: U.paymentDueBadge,
          text: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
          color: d.default.YELLOW_300
        })
      })
    }) : null, ee = null;
  if (X) {
    var et;
    ee = (0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      className: U.tierName,
      children: [j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({
        guildName: null !== (et = null == u ? void 0 : u.name) && void 0 !== et ? et : j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE
      }), null != u && (0, a.jsx)(C.default, {
        guild: u,
        size: C.default.Sizes.MINI,
        className: U.guildIcon
      })]
    })
  } else Z && (ee = (0, a.jsx)(c.Text, {
    variant: "text-sm/normal",
    className: U.tierName,
    children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
  }));
  return (0, a.jsxs)("div", {
    className: U.container,
    children: [(0, a.jsx)(f.default, {
      onClick: g,
      className: U.headerContainer,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: s
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [null != h && (0, a.jsx)(L.default, {
            size: L.ApplicationIconSize.SMALL,
            className: U.applicationIcon,
            application: h,
            asset: null != l.image_asset ? (0, _.transformStoreAssetFromServer)(l.image_asset) : null
          }), (0, a.jsxs)("div", {
            className: U.headerTextContainer,
            children: [(0, a.jsx)(c.Text, {
              variant: "text-md/medium",
              className: U.applicationName,
              children: null != h ? h.name : j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
            }), (0, a.jsxs)("div", {
              className: U.headerSubtitleContainer,
              children: [ee, $()]
            })]
          }), (0, a.jsx)(c.Clickable, {
            onClick: s(g),
            "aria-label": j.default.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
            "aria-controls": A,
            "aria-expanded": E,
            focusProps: {
              ringTarget: t
            },
            children: (0, a.jsx)(R.default, {
              className: i()(U.arrowIcon, {
                [U.arrowIconExpanded]: E
              })
            })
          })]
        })
      }
    }), E ? (0, a.jsxs)("div", {
      id: A,
      children: [(0, a.jsx)("div", {
        className: U.divider
      }), Y ? (0, a.jsx)(p.default, {
        messageType: p.HelpMessageTypes.WARNING,
        className: U.deletedHelpMessage,
        children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
      }) : null, (0, a.jsx)(m.default, {
        groupListingId: r.id,
        subscription: t,
        className: U.changePlanNotice
      }), (0, a.jsxs)("div", {
        className: U.subscriptionInfoCards,
        children: [(0, a.jsx)(y, {
          label: q,
          value: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({
            timestamp: Q.getTime()
          })
        }), (0, a.jsx)(y, {
          label: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: K
        }), (0, a.jsx)(y, {
          label: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
          value: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({
            timestamp: z.getTime()
          })
        })]
      }), (0, a.jsx)(O.default, {
        size: 16
      }), t.status === b.SubscriptionStatusTypes.ACTIVE && (0, a.jsx)(G, {
        subscription: t,
        disabled: Y
      }), !J && (0, a.jsx)(B, {
        isCancelled: V,
        onCancelSubscriptionClick: w,
        isResubscribing: M,
        onResubscribeClick: H
      })]
    }) : null]
  })
}