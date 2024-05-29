"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("664751"),
  i = s("442837"),
  r = s("481060"),
  o = s("355467"),
  d = s("821849"),
  u = s("72924"),
  c = s("100527"),
  S = s("906732"),
  E = s("883904"),
  T = s("678558"),
  _ = s("730647"),
  f = s("584825"),
  m = s("305342"),
  g = s("333867"),
  I = s("963249"),
  N = s("87484"),
  h = s("197115"),
  C = s("911367"),
  A = s("430824"),
  p = s("78839"),
  O = s("981631"),
  R = s("474936"),
  x = s("913754");

function M(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, s = (0, f.useGroupListingsForGuild)(null == t ? void 0 : t.id)[0];
  return (0, a.jsx)(a.Fragment, {
    children: null != t && null != s ? (0, a.jsx)("div", {
      className: x.formItem,
      children: s.subscription_listings_ids.map(e => (0, a.jsx)(m.default, {
        guildId: t.id,
        groupListingId: e,
        listingId: e
      }, e))
    }) : null
  })
}
t.default = function() {
  let [e, t] = n.useState(R.PremiumSubscriptionSKUs.TIER_2), [s, f] = n.useState(null), [m] = (0, i.useStateFromStoresArray)([A.default], () => [A.default.getGuilds()]), [v] = (0, i.useStateFromStoresArray)([p.default], () => [p.default.getPremiumSubscription()]);
  (0, C.useFetchProfileEffects)();
  let L = Object.values(m).map(e => ({
      value: e,
      label: e.name
    })),
    [D, P] = n.useState(L.length > 0 ? L[0].value : null),
    [b, j] = n.useState(""),
    [U, y] = n.useState({
      plan_id: R.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
      gift: "true"
    }),
    F = "true" !== U.gift && null != v,
    [G, B] = n.useState(L.length > 0 ? L[0].value : null),
    {
      analyticsLocations: k
    } = (0, S.default)(c.default.PAYMENT_FLOW_TEST_PAGE),
    [H, w] = n.useState(""),
    [Y, V] = n.useState(O.EMPTY_STRING_SNOWFLAKE_ID),
    [W, K] = n.useState(""),
    [z, Q] = n.useState(O.EMPTY_STRING_SNOWFLAKE_ID),
    [q, Z] = n.useState(O.EMPTY_STRING_SNOWFLAKE_ID);
  return (0, a.jsx)(S.AnalyticsLocationProvider, {
    value: k,
    children: (0, a.jsxs)(r.FormSection, {
      title: "Payment Flow Modals",
      tag: r.FormTitleTags.H1,
      children: [(0, a.jsx)(r.FormTitle, {
        children: "Gift"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: e,
          options: [{
            value: R.PremiumSubscriptionSKUs.TIER_2,
            label: "Nitro"
          }, {
            value: R.PremiumSubscriptionSKUs.TIER_1,
            label: "Nitro Classic"
          }, {
            value: R.PremiumSubscriptionSKUs.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => t(e)
        }), (0, a.jsx)(h.default, {
          subscriptionTier: e,
          isGift: !0,
          premiumModalAnalyticsLocation: {}
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Premium Select Plan"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: s,
          options: [{
            value: R.PremiumSubscriptionSKUs.TIER_2,
            label: "Nitro"
          }, {
            value: R.PremiumSubscriptionSKUs.TIER_1,
            label: "Nitro Classic"
          }, {
            value: R.PremiumSubscriptionSKUs.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => f(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, I.default)({
            subscriptionTier: s,
            analyticsLocations: k
          }),
          children: "Select Plan"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Boost"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: D,
          options: L,
          onChange: e => P(e)
        }), null != D ? (0, a.jsx)(T.default, {
          guild: D,
          analyticsLocation: {}
        }) : (0, a.jsx)("div", {
          children: "No Guild to boost"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsxs)(r.FormTitle, {
        children: [(0, a.jsx)("div", {
          children: "Standalone: Trial Promotion Redemption"
        }), (0, a.jsx)(r.Anchor, {
          href: "https://i.dis.gd/createPromo",
          children: "How to create promotion"
        })]
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Promotion Code",
          value: b,
          onChange: e => j(e)
        }), (0, a.jsx)(r.Tooltip, {
          text: "Need Promotion Code",
          shouldShow: b.length < 1,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(r.Button, {
              disabled: b.length < 1,
              onMouseEnter: t,
              onMouseLeave: s,
              onClick: () => {
                window.open(O.Routes.BILLING_PROMOTION_REDEMPTION(b))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Standalone: Gift/Subscription Purchase"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: U.plan_id,
          options: [{
            value: R.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
            label: "Nitro"
          }, {
            value: R.SubscriptionPlans.PREMIUM_MONTH_TIER_1,
            label: "Nitro Classic"
          }, {
            value: R.SubscriptionPlans.PREMIUM_MONTH_TIER_0,
            label: "Nitro Basic"
          }],
          onChange: e => y(t => ({
            ...t,
            plan_id: e
          }))
        }), (0, a.jsx)(r.SingleSelect, {
          value: U.gift,
          options: [{
            value: "true",
            label: "Gift"
          }, {
            value: "false",
            label: "Not Gift"
          }],
          onChange: e => y(t => ({
            ...t,
            gift: e
          }))
        }), (0, a.jsx)(r.Tooltip, {
          text: "Already subscribed",
          shouldShow: F,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(r.Button, {
              onMouseLeave: s,
              onMouseEnter: t,
              disabled: F,
              onClick: () => {
                window.open(O.Routes.BILLING_PREMIUM_SUBSCRIBE + "?" + l.stringify({
                  ...U
                }))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Creator Revenue"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.Text, {
          className: x.guildServerDescription,
          variant: "text-sm/normal",
          children: "Premium Server Subscription For"
        }), (0, a.jsx)(r.SingleSelect, {
          value: G,
          options: L,
          onChange: e => B(e)
        })]
      }), (0, a.jsx)(_.GroupListingsFetchContextProvider, {
        guildId: null == G ? void 0 : G.id,
        children: (0, a.jsx)(M, {
          selectedGuildForGuildSub: G
        })
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Activities & Application Payment Modals"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: H,
          onChange: w
        }), (0, a.jsx)(r.TextInput, {
          placeholder: "Sku Id",
          value: Y,
          onChange: e => V(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, u.openIAPPurchaseModal)({
            applicationId: H,
            skuId: Y,
            openPremiumPaymentModal: () => !0,
            analyticsLocations: [],
            analyticsLocationObject: {
              page: O.AnalyticsPages.IN_APP
            },
            context: O.AppContext.APP
          }),
          children: "Open App Subs Modal for Activity"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Standard Payment Modal Test"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: W,
          onChange: K
        }), (0, a.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: z,
          onChange: e => Q(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, N.default)({
            applicationId: W,
            skuId: z,
            analyticsLocations: k
          }),
          children: "Open Standard Payment Modal for SKU"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Collectibles Payment Modal Test"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: q,
          onChange: e => Z(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, g.default)({
            skuId: q,
            analyticsLocations: k
          }),
          children: "Open Collectibles Payment Modal for SKU"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Helpers"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.Button, {
          onClick: () => (0, d.resetSubscriptionPlanData)(),
          children: "Reset SubscriptionPlanStore"
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, o.resetSubscriptionStore)(),
          children: "Reset SubscriptionStore"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Dismissible Content Framework"
      }), (0, a.jsx)(r.FormItem, {
        className: x.formItem,
        children: (0, a.jsx)(r.Button, {
          onClick: () => (0, E.resetDismissibleContentFrameworkStore)(),
          children: "Reset DismissibleContentFrameworkStore"
        })
      })]
    })
  })
}