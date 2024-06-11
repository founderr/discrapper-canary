"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("664751"),
  l = s("442837"),
  r = s("481060"),
  o = s("355467"),
  d = s("821849"),
  u = s("72924"),
  c = s("100527"),
  S = s("906732"),
  E = s("883904"),
  T = s("678558"),
  _ = s("730647"),
  I = s("584825"),
  N = s("305342"),
  g = s("333867"),
  f = s("963249"),
  m = s("87484"),
  A = s("197115"),
  C = s("911367"),
  O = s("430824"),
  h = s("78839"),
  R = s("981631"),
  p = s("474936"),
  M = s("913754");

function D(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, s = (0, I.useGroupListingsForGuild)(null == t ? void 0 : t.id)[0];
  return (0, a.jsx)(a.Fragment, {
    children: null != t && null != s ? (0, a.jsx)("div", {
      className: M.formItem,
      children: s.subscription_listings_ids.map(e => (0, a.jsx)(N.default, {
        guildId: t.id,
        groupListingId: e,
        listingId: e
      }, e))
    }) : null
  })
}
t.default = function() {
  let [e, t] = n.useState(p.PremiumSubscriptionSKUs.TIER_2), [s, I] = n.useState(null), [N] = (0, l.useStateFromStoresArray)([O.default], () => [O.default.getGuilds()]), [x] = (0, l.useStateFromStoresArray)([h.default], () => [h.default.getPremiumSubscription()]);
  (0, C.useFetchProfileEffects)();
  let L = Object.values(N).map(e => ({
      value: e,
      label: e.name
    })),
    [P, b] = n.useState(L.length > 0 ? L[0].value : null),
    [v, U] = n.useState(""),
    [j, G] = n.useState({
      plan_id: p.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
      gift: "true"
    }),
    F = "true" !== j.gift && null != x,
    [B, y] = n.useState(L.length > 0 ? L[0].value : null),
    {
      analyticsLocations: V
    } = (0, S.default)(c.default.PAYMENT_FLOW_TEST_PAGE),
    [H, Y] = n.useState(""),
    [k, w] = n.useState(R.EMPTY_STRING_SNOWFLAKE_ID),
    [W, K] = n.useState(""),
    [Q, z] = n.useState(R.EMPTY_STRING_SNOWFLAKE_ID),
    [X, q] = n.useState(R.EMPTY_STRING_SNOWFLAKE_ID);
  return (0, a.jsx)(S.AnalyticsLocationProvider, {
    value: V,
    children: (0, a.jsxs)(r.FormSection, {
      title: "Payment Flow Modals",
      tag: r.FormTitleTags.H1,
      children: [(0, a.jsx)(r.FormTitle, {
        children: "Gift"
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: e,
          options: [{
            value: p.PremiumSubscriptionSKUs.TIER_2,
            label: "Nitro"
          }, {
            value: p.PremiumSubscriptionSKUs.TIER_1,
            label: "Nitro Classic"
          }, {
            value: p.PremiumSubscriptionSKUs.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => t(e)
        }), (0, a.jsx)(A.default, {
          subscriptionTier: e,
          isGift: !0,
          premiumModalAnalyticsLocation: {}
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Premium Select Plan"
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: s,
          options: [{
            value: p.PremiumSubscriptionSKUs.TIER_2,
            label: "Nitro"
          }, {
            value: p.PremiumSubscriptionSKUs.TIER_1,
            label: "Nitro Classic"
          }, {
            value: p.PremiumSubscriptionSKUs.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => I(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, f.default)({
            subscriptionTier: s,
            analyticsLocations: V
          }),
          children: "Select Plan"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Boost"
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: P,
          options: L,
          onChange: e => b(e)
        }), null != P ? (0, a.jsx)(T.default, {
          guild: P,
          analyticsLocation: {}
        }) : (0, a.jsx)("div", {
          children: "No Guild to boost"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsxs)(r.FormTitle, {
        children: [(0, a.jsx)("div", {
          children: "Standalone: Trial Promotion Redemption"
        }), (0, a.jsx)(r.Anchor, {
          href: "https://i.dis.gd/createPromo",
          children: "How to create promotion"
        })]
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Promotion Code",
          value: v,
          onChange: e => U(e)
        }), (0, a.jsx)(r.Tooltip, {
          text: "Need Promotion Code",
          shouldShow: v.length < 1,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(r.Button, {
              disabled: v.length < 1,
              onMouseEnter: t,
              onMouseLeave: s,
              onClick: () => {
                window.open(R.Routes.BILLING_PROMOTION_REDEMPTION(v))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Standalone: Gift/Subscription Purchase"
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: j.plan_id,
          options: [{
            value: p.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
            label: "Nitro"
          }, {
            value: p.SubscriptionPlans.PREMIUM_MONTH_TIER_1,
            label: "Nitro Classic"
          }, {
            value: p.SubscriptionPlans.PREMIUM_MONTH_TIER_0,
            label: "Nitro Basic"
          }],
          onChange: e => G(t => ({
            ...t,
            plan_id: e
          }))
        }), (0, a.jsx)(r.SingleSelect, {
          value: j.gift,
          options: [{
            value: "true",
            label: "Gift"
          }, {
            value: "false",
            label: "Not Gift"
          }],
          onChange: e => G(t => ({
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
                window.open(R.Routes.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify({
                  ...j
                }))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Creator Revenue"
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.Text, {
          className: M.guildServerDescription,
          variant: "text-sm/normal",
          children: "Premium Server Subscription For"
        }), (0, a.jsx)(r.SingleSelect, {
          value: B,
          options: L,
          onChange: e => y(e)
        })]
      }), (0, a.jsx)(_.GroupListingsFetchContextProvider, {
        guildId: null == B ? void 0 : B.id,
        children: (0, a.jsx)(D, {
          selectedGuildForGuildSub: B
        })
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Activities & Application Payment Modals"
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: H,
          onChange: Y
        }), (0, a.jsx)(r.TextInput, {
          placeholder: "Sku Id",
          value: k,
          onChange: e => w(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, u.openIAPPurchaseModal)({
            applicationId: H,
            skuId: k,
            openPremiumPaymentModal: () => !0,
            analyticsLocations: [],
            analyticsLocationObject: {
              page: R.AnalyticsPages.IN_APP
            },
            context: R.AppContext.APP
          }),
          children: "Open App Subs Modal for Activity"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Standard Payment Modal Test"
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: W,
          onChange: K
        }), (0, a.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: Q,
          onChange: e => z(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, m.default)({
            applicationId: W,
            skuId: Q,
            analyticsLocations: V
          }),
          children: "Open Standard Payment Modal for SKU"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Collectibles Payment Modal Test"
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: X,
          onChange: e => q(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, g.default)({
            skuId: X,
            analyticsLocations: V
          }),
          children: "Open Collectibles Payment Modal for SKU"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Helpers"
      }), (0, a.jsxs)(r.FormItem, {
        className: M.formItem,
        children: [(0, a.jsx)(r.Button, {
          onClick: () => (0, d.resetSubscriptionPlanData)(),
          children: "Reset SubscriptionPlanStore"
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, o.resetSubscriptionStore)(),
          children: "Reset SubscriptionStore"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: M.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Dismissible Content Framework"
      }), (0, a.jsx)(r.FormItem, {
        className: M.formItem,
        children: (0, a.jsx)(r.Button, {
          onClick: () => (0, E.resetDismissibleContentFrameworkStore)(),
          children: "Reset DismissibleContentFrameworkStore"
        })
      })]
    })
  })
}