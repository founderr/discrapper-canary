"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
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
  N = s("330181"),
  g = s("374649"),
  f = s("908951"),
  m = s("255078"),
  A = s("853872"),
  C = s("346656"),
  O = s("474333"),
  h = s("755596"),
  R = s("153124"),
  p = s("86813"),
  M = s("41542"),
  D = s("171246"),
  x = s("41959"),
  L = s("650919"),
  P = s("981631"),
  b = s("689938"),
  v = s("285136");
let U = e => {
    let {
      label: t,
      value: s,
      showInfoIcon: n,
      infoIconTooltipText: i
    } = e;
    return (0, a.jsxs)("div", {
      className: v.infoCard,
      children: [(0, a.jsxs)("div", {
        className: v.infoCardLabelContainer,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: v.infoCardLabel,
          children: t
        }), n && (0, a.jsx)(c.Tooltip, {
          text: i,
          children: e => (0, a.jsx)(M.default, {
            ...e,
            className: v.infoCardIcon
          })
        })]
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: v.infoCardValue,
        children: s
      })]
    })
  },
  j = e => {
    let {
      subscription: t,
      disabled: s
    } = e, {
      analyticsLocations: n
    } = (0, T.default)(), [i] = (0, g.useSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      renewal: !0,
      analyticsLocations: n,
      analyticsLocation: E.default.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    });
    return (0, u.useStateFromStores)([A.default], () => A.default.hasFetchedPaymentSources) ? null == i ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormTitle, {
        children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
      }), (0, a.jsx)(f.default, {
        subscription: t,
        currentInvoicePreview: i,
        dropdownClassName: v.paymentSourceDropdown,
        disabled: s
      })]
    }) : (0, a.jsx)(c.Spinner, {})
  },
  G = e => {
    let {
      isCancelled: t,
      onCancelSubscriptionClick: s,
      isResubscribing: n,
      onResubscribeClick: i
    } = e;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(c.FormTitle, {
        children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, a.jsx)("div", {
        className: v.__invalid_rowButtons,
        children: t ? (0, a.jsx)(c.Button, {
          onClick: i,
          submitting: n,
          children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
        }) : (0, a.jsx)(h.default, {
          label: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
          onClick: s
        })
      })]
    })
  };
t.default = e => {
  let {
    subscription: t
  } = e, {
    listing: i,
    groupListing: r,
    guild: u,
    expanded: E,
    handleToggleExpanded: g,
    subscriptionInfo: f,
    application: A
  } = (0, L.default)(t), h = (0, R.useUID)(), [M, F] = n.useState(!1), {
    analyticsLocations: B
  } = (0, T.default)();
  if (null == r || null == i || null == f) return null;
  let y = () => {
      o()(null != A, "Application cannot be null"), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("6284")]).then(s.bind(s, "257514"));
        return s => (0, a.jsx)(e, {
          application: A,
          listing: i,
          subscription: t,
          guild: u,
          ...s
        })
      })
    },
    V = async () => {
      try {
        F(!0);
        let {
          subscription: e
        } = await S.resubscribeToSubscription(t, B);
        null != e && (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([s.e("99387"), s.e("18879")]).then(s.bind(s, "535278"));
          return s => (0, a.jsx)(t, {
            listing: i,
            subscription: m.default.createFromServer(e),
            ...s
          })
        })
      } finally {
        F(!1)
      }
    }, {
      isCancelled: H,
      isDeleted: Y,
      isPastDue: k,
      subscriptionPlanPrice: w,
      subscribedSinceDate: W,
      currentPeriodEndDate: K,
      currentPeriodEndLabel: Q
    } = f, z = (0, D.isApplicationUserSubscription)(i.sku_flags), X = (0, D.isApplicationGuildSubscription)(i.sku_flags), q = i.soft_deleted || null == A || (!X || null == u) && !z, Z = () => H || Y ? (0, a.jsx)(c.TextBadge, {
      text: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED
    }) : k ? (0, a.jsx)(c.Tooltip, {
      text: b.default.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(c.TextBadge, {
          className: v.paymentDueBadge,
          text: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
          color: d.default.YELLOW_300
        })
      })
    }) : null, J = null;
  if (X) {
    var $;
    J = (0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      className: v.tierName,
      children: [b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({
        guildName: null !== ($ = null == u ? void 0 : u.name) && void 0 !== $ ? $ : b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE
      }), null != u && (0, a.jsx)(C.default, {
        guild: u,
        size: C.default.Sizes.MINI,
        className: v.guildIcon
      })]
    })
  } else z && (J = (0, a.jsx)(c.Text, {
    variant: "text-sm/normal",
    className: v.tierName,
    children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
  }));
  return (0, a.jsxs)("div", {
    className: v.container,
    children: [(0, a.jsx)(I.default, {
      onClick: g,
      className: v.headerContainer,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: s
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [null != A && (0, a.jsx)(x.default, {
            size: x.ApplicationIconSize.SMALL,
            className: v.applicationIcon,
            application: A,
            asset: null != i.image_asset ? (0, _.transformStoreAssetFromServer)(i.image_asset) : null
          }), (0, a.jsxs)("div", {
            className: v.headerTextContainer,
            children: [(0, a.jsx)(c.Text, {
              variant: "text-md/medium",
              className: v.applicationName,
              children: null != A ? A.name : b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
            }), (0, a.jsxs)("div", {
              className: v.headerSubtitleContainer,
              children: [J, Z()]
            })]
          }), (0, a.jsx)(c.Clickable, {
            onClick: s(g),
            "aria-label": b.default.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
            "aria-controls": h,
            "aria-expanded": E,
            focusProps: {
              ringTarget: t
            },
            children: (0, a.jsx)(p.default, {
              className: l()(v.arrowIcon, {
                [v.arrowIconExpanded]: E
              })
            })
          })]
        })
      }
    }), E ? (0, a.jsxs)("div", {
      id: h,
      children: [(0, a.jsx)("div", {
        className: v.divider
      }), Y ? (0, a.jsx)(O.default, {
        messageType: O.HelpMessageTypes.WARNING,
        className: v.deletedHelpMessage,
        children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
      }) : null, (0, a.jsx)(N.default, {
        groupListingId: r.id,
        subscription: t,
        className: v.changePlanNotice
      }), (0, a.jsxs)("div", {
        className: v.subscriptionInfoCards,
        children: [(0, a.jsx)(U, {
          label: Q,
          value: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({
            timestamp: K.getTime()
          })
        }), (0, a.jsx)(U, {
          label: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: w
        }), (0, a.jsx)(U, {
          label: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
          value: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({
            timestamp: W.getTime()
          })
        })]
      }), (0, a.jsx)(c.Spacer, {
        size: 16
      }), t.status === P.SubscriptionStatusTypes.ACTIVE && (0, a.jsx)(j, {
        subscription: t,
        disabled: Y
      }), !q && (0, a.jsx)(G, {
        isCancelled: H,
        onCancelSubscriptionClick: y,
        isResubscribing: M,
        onResubscribeClick: V
      })]
    }) : null]
  })
}