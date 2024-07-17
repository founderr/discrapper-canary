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
  I = t(906732),
  S = t(377171),
  N = t(674180),
  C = t(565138),
  m = t(374649),
  A = t(908951),
  h = t(703656),
  g = t(853872),
  O = t(755596),
  p = t(153124),
  R = t(245950),
  x = t(404203),
  M = t(330181),
  D = t(954821),
  f = t(980864),
  P = t(981631),
  L = t(176505),
  Z = t(526761),
  b = t(689938),
  v = t(381512);
let j = e => {
let {
  label: s,
  value: t,
  showInfoIcon: a,
  infoIconTooltipText: i
} = e;
return (0, n.jsxs)('div', {
  className: v.infoCard,
  children: [
    (0, n.jsxs)('div', {
      className: v.infoCardLabelContainer,
      children: [
        (0, n.jsx)(c.Heading, {
          variant: 'heading-deprecated-12/semibold',
          className: v.infoCardLabel,
          children: s
        }),
        a && (0, n.jsx)(c.Tooltip, {
          clickableOnMobile: !0,
          text: i,
          children: e => (0, n.jsx)(c.CircleInformationIcon, {
            size: 'xs',
            color: 'currentColor',
            ...e,
            className: v.infoCardIcon
          })
        })
      ]
    }),
    (0, n.jsx)(c.Heading, {
      variant: 'heading-xl/semibold',
      className: v.infoCardValue,
      children: t
    })
  ]
});
  },
  B = e => {
let {
  subscription: s
} = e, {
  analyticsLocations: t
} = (0, I.ZP)(), [a] = (0, m.ED)({
  subscriptionId: s.id,
  renewal: !0,
  analyticsLocations: t,
  analyticsLocation: T.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
}), i = (0, l.e7)([g.Z], () => g.Z.hasFetchedPaymentSources);
return null != a && i ? (0, n.jsx)(A.Z, {
  subscription: s,
  currentInvoicePreview: a,
  dropdownClassName: v.paymentSourceDropdown
}) : (0, n.jsx)(c.Spinner, {});
  },
  U = e => {
let {
  isTrial: s,
  isCancelled: t,
  isResubscribing: a,
  shouldHideRoleSubscriptionEntryPoints: i,
  onCancelSubscriptionClick: r,
  onResubscribeClick: o,
  onChangePlanClick: l
} = e;
return t && (s || i) ? null : (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(c.FormTitle, {
      children: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
    }),
    (0, n.jsx)('div', {
      className: v.__invalid_rowButtons,
      children: t ? (0, n.jsx)(c.Button, {
        onClick: o,
        submitting: a,
        children: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART_SUBSCRIPTION
      }) : (0, n.jsxs)(n.Fragment, {
        children: [
          !s && !i && (0, n.jsx)(O.Z, {
            label: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CHANGE_TIER,
            onClick: l
          }),
          (0, n.jsx)(O.Z, {
            label: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
            onClick: r
          })
        ]
      })
    })
  ]
});
  };
s.Z = e => {
  let {
subscription: s
  } = e, {
listing: t,
groupListing: i,
guild: l,
expanded: T,
handleToggleExpanded: m,
subscriptionInfo: A
  } = (0, R.Z)(s), [g, O] = a.useState(!1), G = (0, p.Dt)(), {
analyticsLocations: F
  } = (0, I.ZP)(), {
shouldHideGuildPurchaseEntryPoints: y
  } = (0, N.uP)(null == l ? void 0 : l.id), V = (null == s ? void 0 : s.paymentGateway) === P.gg$.APPLE_PARTNER;
  if (null == i || null == t || null == A)
return null;
  let Y = () => {
  null != l && ((0, h.uL)(P.Z5c.CHANNEL(l.id, L.oC.ROLE_SUBSCRIPTIONS)), (0, _.xf)(), E.Z.show(P.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_BACK_TO_SUBSCRIPTION_USER_SETTING_CTA, () => u.Z.open(P.oAB.SUBSCRIPTIONS, Z.cP)));
},
w = () => {
  null != l && (0, D.h)({
    guildId: l.id,
    groupListing: i,
    listing: t,
    subscription: s
  });
},
k = async () => {
  try {
    O(!0), await d.pl(s, F), (0, f.h)();
  } finally {
    O(!1);
  }
}, {
  isCancelled: H,
  isPastDue: W,
  subscriptionPrice: K,
  memberSince: z,
  nextRenewalDate: Q,
  nextRenewalLabel: X,
  isTrial: q
} = A, J = t.soft_deleted || null == l || V, $ = () => {
  if (H)
    return (0, n.jsx)(c.TextBadge, {
      text: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_CANCELLED
    });
  if (q)
    return (0, n.jsx)(c.TextBadge, {
      text: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
      color: o.Z.BRAND_500
    });
  if (W)
    return (0, n.jsx)(c.Tooltip, {
      text: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      children: e => (0, n.jsx)('div', {
        ...e,
        children: (0, n.jsx)(c.TextBadge, {
          className: v.paymentDueBadge,
          text: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAST_DUE,
          color: o.Z.YELLOW_300
        })
      })
    });
  else
    return null;
}, ee = () => V ? (0, n.jsx)(c.Tooltip, {
  text: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM_TOOLTIP,
  children: e => (0, n.jsx)('div', {
    ...e,
    children: (0, n.jsx)(c.TextBadge, {
      text: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM,
      color: S.Z.INTERACTIVE_MUTED
    })
  })
}) : null;
  return (0, n.jsxs)('div', {
className: v.container,
children: [
  (0, n.jsx)(x.Z, {
    onClick: m,
    className: v.headerContainer,
    children: e => {
      let {
        areaRef: s,
        handleStopPropagation: a
      } = e;
      return (0, n.jsxs)(n.Fragment, {
        children: [
          null != l && (0, n.jsx)(C.Z, {
            guild: l,
            active: !0,
            size: C.Z.Sizes.MEDIUM
          }),
          (0, n.jsxs)('div', {
            className: v.headerTextContainer,
            children: [
              (0, n.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: v.guildName,
                children: null != l ? l.name : b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SERVER_NAME_UNAVAILABLE
              }),
              (0, n.jsxs)('div', {
                className: v.headerSubtitleContainer,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    className: v.tierName,
                    children: t.name
                  }),
                  $(),
                  ee()
                ]
              })
            ]
          }),
          (0, n.jsx)(c.Clickable, {
            onClick: a(m),
            'aria-label': b.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            'aria-controls': G,
            'aria-expanded': T,
            focusProps: {
              ringTarget: s
            },
            children: (0, n.jsx)(c.ChevronSmallDownIcon, {
              size: 'md',
              color: 'currentColor',
              className: r()(v.arrowIcon, {
                [v.arrowIconExpanded]: T
              })
            })
          })
        ]
      });
    }
  }),
  T ? (0, n.jsxs)('div', {
    id: G,
    children: [
      (0, n.jsx)('div', {
        className: v.divider
      }),
      (0, n.jsx)(M.Z, {
        groupListingId: i.id,
        subscription: s,
        className: v.changePlanNotice
      }),
      (0, n.jsxs)('div', {
        className: v.subscriptionInfoCards,
        children: [
          (0, n.jsx)(j, {
            label: X,
            value: Q
          }),
          (0, n.jsx)(j, {
            label: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_PRICE,
            value: K,
            showInfoIcon: q,
            infoIconTooltipText: q ? b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO : void 0
          }),
          (0, n.jsx)(j, {
            label: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBER_SINCE,
            value: z
          })
        ]
      }),
      (0, n.jsx)(c.Spacer, {
        size: 16
      }),
      !H && !V && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(c.FormTitle, {
            children: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
          }),
          (0, n.jsx)(B, {
            subscription: s
          })
        ]
      }),
      !J && (0, n.jsx)(U, {
        isTrial: q,
        isCancelled: H,
        isResubscribing: g,
        shouldHideRoleSubscriptionEntryPoints: y,
        onCancelSubscriptionClick: w,
        onChangePlanClick: Y,
        onResubscribeClick: k
      })
    ]
  }) : null
]
  });
};