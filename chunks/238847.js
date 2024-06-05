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
  I = s("404203"),
  f = s("330181"),
  m = s("374649"),
  N = s("908951"),
  g = s("255078"),
  h = s("853872"),
  C = s("346656"),
  O = s("474333"),
  A = s("755596"),
  p = s("682864"),
  R = s("153124"),
  x = s("86813"),
  M = s("41542"),
  D = s("26290"),
  L = s("171246"),
  P = s("41959"),
  v = s("650919"),
  b = s("981631"),
  U = s("689938"),
  j = s("285136");
let F = e => {
    let {
      label: t,
      value: s,
      showInfoIcon: n,
      infoIconTooltipText: l
    } = e;
    return (0, a.jsxs)("div", {
      className: j.infoCard,
      children: [(0, a.jsxs)("div", {
        className: j.infoCardLabelContainer,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: j.infoCardLabel,
          children: t
        }), n && (0, a.jsx)(c.Tooltip, {
          text: l,
          children: e => (0, a.jsx)(M.default, {
            ...e,
            className: j.infoCardIcon
          })
        })]
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: j.infoCardValue,
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
    } = (0, T.default)(), [l] = (0, m.useSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      renewal: !0,
      analyticsLocations: n,
      analyticsLocation: E.default.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    });
    return (0, u.useStateFromStores)([h.default], () => h.default.hasFetchedPaymentSources) ? null == l ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormTitle, {
        children: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
      }), (0, a.jsx)(N.default, {
        subscription: t,
        currentInvoicePreview: l,
        dropdownClassName: j.paymentSourceDropdown,
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
        children: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, a.jsx)("div", {
        className: j.__invalid_rowButtons,
        children: t ? (0, a.jsx)(c.Button, {
          onClick: l,
          submitting: n,
          children: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
        }) : (0, a.jsx)(A.default, {
          label: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
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
    handleToggleExpanded: m,
    subscriptionInfo: N,
    application: h
  } = (0, v.default)(t), A = (0, R.useUID)(), [M, y] = n.useState(!1), {
    analyticsLocations: V
  } = (0, T.default)();
  if (null == r || null == l || null == N) return null;
  let H = () => {
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
    k = async () => {
      try {
        y(!0);
        let {
          subscription: e
        } = await S.resubscribeToSubscription(t, V);
        null != e && (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([s.e("99387"), s.e("18879")]).then(s.bind(s, "535278"));
          return s => (0, a.jsx)(t, {
            listing: l,
            subscription: g.default.createFromServer(e),
            ...s
          })
        })
      } finally {
        y(!1)
      }
    }, {
      isCancelled: w,
      isDeleted: Y,
      isPastDue: W,
      subscriptionPlanPrice: K,
      subscribedSinceDate: z,
      currentPeriodEndDate: Q,
      currentPeriodEndLabel: q
    } = N, X = (0, L.isApplicationUserSubscription)(l.sku_flags), Z = (0, L.isApplicationGuildSubscription)(l.sku_flags), J = l.soft_deleted || null == h || (!Z || null == u) && !X, $ = () => w || Y ? (0, a.jsx)(D.TextBadge, {
      text: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED
    }) : W ? (0, a.jsx)(c.Tooltip, {
      text: U.default.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(D.TextBadge, {
          className: j.paymentDueBadge,
          text: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
          color: d.default.YELLOW_300
        })
      })
    }) : null, ee = null;
  if (Z) {
    var et;
    ee = (0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      className: j.tierName,
      children: [U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({
        guildName: null !== (et = null == u ? void 0 : u.name) && void 0 !== et ? et : U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE
      }), null != u && (0, a.jsx)(C.default, {
        guild: u,
        size: C.default.Sizes.MINI,
        className: j.guildIcon
      })]
    })
  } else X && (ee = (0, a.jsx)(c.Text, {
    variant: "text-sm/normal",
    className: j.tierName,
    children: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
  }));
  return (0, a.jsxs)("div", {
    className: j.container,
    children: [(0, a.jsx)(I.default, {
      onClick: m,
      className: j.headerContainer,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: s
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [null != h && (0, a.jsx)(P.default, {
            size: P.ApplicationIconSize.SMALL,
            className: j.applicationIcon,
            application: h,
            asset: null != l.image_asset ? (0, _.transformStoreAssetFromServer)(l.image_asset) : null
          }), (0, a.jsxs)("div", {
            className: j.headerTextContainer,
            children: [(0, a.jsx)(c.Text, {
              variant: "text-md/medium",
              className: j.applicationName,
              children: null != h ? h.name : U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
            }), (0, a.jsxs)("div", {
              className: j.headerSubtitleContainer,
              children: [ee, $()]
            })]
          }), (0, a.jsx)(c.Clickable, {
            onClick: s(m),
            "aria-label": U.default.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
            "aria-controls": A,
            "aria-expanded": E,
            focusProps: {
              ringTarget: t
            },
            children: (0, a.jsx)(x.default, {
              className: i()(j.arrowIcon, {
                [j.arrowIconExpanded]: E
              })
            })
          })]
        })
      }
    }), E ? (0, a.jsxs)("div", {
      id: A,
      children: [(0, a.jsx)("div", {
        className: j.divider
      }), Y ? (0, a.jsx)(O.default, {
        messageType: O.HelpMessageTypes.WARNING,
        className: j.deletedHelpMessage,
        children: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
      }) : null, (0, a.jsx)(f.default, {
        groupListingId: r.id,
        subscription: t,
        className: j.changePlanNotice
      }), (0, a.jsxs)("div", {
        className: j.subscriptionInfoCards,
        children: [(0, a.jsx)(F, {
          label: q,
          value: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({
            timestamp: Q.getTime()
          })
        }), (0, a.jsx)(F, {
          label: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: K
        }), (0, a.jsx)(F, {
          label: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
          value: U.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({
            timestamp: z.getTime()
          })
        })]
      }), (0, a.jsx)(p.default, {
        size: 16
      }), t.status === b.SubscriptionStatusTypes.ACTIVE && (0, a.jsx)(G, {
        subscription: t,
        disabled: Y
      }), !J && (0, a.jsx)(B, {
        isCancelled: w,
        onCancelSubscriptionClick: H,
        isResubscribing: M,
        onResubscribeClick: k
      })]
    }) : null]
  })
}