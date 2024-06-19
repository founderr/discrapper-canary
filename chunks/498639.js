t(47120);
var n = t(735250),
  i = t(470079),
  a = t(664751),
  l = t(442837),
  r = t(481060),
  o = t(355467),
  c = t(821849),
  E = t(72924),
  d = t(100527),
  _ = t(906732),
  T = t(883904),
  S = t(678558),
  u = t(730647),
  I = t(584825),
  N = t(305342),
  A = t(333867),
  C = t(963249),
  O = t(87484),
  m = t(197115),
  h = t(911367),
  g = t(430824),
  R = t(78839),
  M = t(981631),
  x = t(474936),
  D = t(385745);

function p(e) {
  let {
    selectedGuildForGuildSub: s
  } = e, t = (0, I.GG)(null == s ? void 0 : s.id)[0];
  return (0, n.jsx)(n.Fragment, {
    children: null != s && null != t ? (0, n.jsx)("div", {
      className: D.formItem,
      children: t.subscription_listings_ids.map(e => (0, n.jsx)(N.Z, {
        guildId: s.id,
        groupListingId: e,
        listingId: e
      }, e))
    }) : null
  })
}
s.Z = function() {
  let [e, s] = i.useState(x.Si.TIER_2), [t, I] = i.useState(null), [N] = (0, l.Wu)([g.Z], () => [g.Z.getGuilds()]), [L] = (0, l.Wu)([R.ZP], () => [R.ZP.getPremiumSubscription()]);
  (0, h.t)();
  let P = Object.values(N).map(e => ({
      value: e,
      label: e.name
    })),
    [Z, f] = i.useState(P.length > 0 ? P[0].value : null),
    [v, j] = i.useState(""),
    [U, B] = i.useState({
      plan_id: x.Xh.PREMIUM_MONTH_TIER_2,
      gift: "true"
    }),
    b = "true" !== U.gift && null != L,
    [G, F] = i.useState(P.length > 0 ? P[0].value : null),
    {
      analyticsLocations: V
    } = (0, _.ZP)(d.Z.PAYMENT_FLOW_TEST_PAGE),
    [y, Y] = i.useState(""),
    [H, k] = i.useState(M.lds),
    [w, W] = i.useState(""),
    [K, z] = i.useState(M.lds),
    [Q, X] = i.useState(M.lds);
  return (0, n.jsx)(_.Gt, {
    value: V,
    children: (0, n.jsxs)(r.FormSection, {
      title: "Payment Flow Modals",
      tag: r.FormTitleTags.H1,
      children: [(0, n.jsx)(r.FormTitle, {
        children: "Gift"
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.SingleSelect, {
          value: e,
          options: [{
            value: x.Si.TIER_2,
            label: "Nitro"
          }, {
            value: x.Si.TIER_1,
            label: "Nitro Classic"
          }, {
            value: x.Si.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => s(e)
        }), (0, n.jsx)(m.Z, {
          subscriptionTier: e,
          isGift: !0,
          premiumModalAnalyticsLocation: {}
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsx)(r.FormTitle, {
        children: "Premium Select Plan"
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.SingleSelect, {
          value: t,
          options: [{
            value: x.Si.TIER_2,
            label: "Nitro"
          }, {
            value: x.Si.TIER_1,
            label: "Nitro Classic"
          }, {
            value: x.Si.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => I(e)
        }), (0, n.jsx)(r.Button, {
          onClick: () => (0, C.Z)({
            subscriptionTier: t,
            analyticsLocations: V
          }),
          children: "Select Plan"
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsx)(r.FormTitle, {
        children: "Boost"
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.SingleSelect, {
          value: Z,
          options: P,
          onChange: e => f(e)
        }), null != Z ? (0, n.jsx)(S.Z, {
          guild: Z,
          analyticsLocation: {}
        }) : (0, n.jsx)("div", {
          children: "No Guild to boost"
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsxs)(r.FormTitle, {
        children: [(0, n.jsx)("div", {
          children: "Standalone: Trial Promotion Redemption"
        }), (0, n.jsx)(r.Anchor, {
          href: "https://i.dis.gd/createPromo",
          children: "How to create promotion"
        })]
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.TextInput, {
          placeholder: "Promotion Code",
          value: v,
          onChange: e => j(e)
        }), (0, n.jsx)(r.Tooltip, {
          text: "Need Promotion Code",
          shouldShow: v.length < 1,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: t
            } = e;
            return (0, n.jsx)(r.Button, {
              disabled: v.length < 1,
              onMouseEnter: s,
              onMouseLeave: t,
              onClick: () => {
                window.open(M.Z5c.BILLING_PROMOTION_REDEMPTION(v))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsx)(r.FormTitle, {
        children: "Standalone: Gift/Subscription Purchase"
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.SingleSelect, {
          value: U.plan_id,
          options: [{
            value: x.Xh.PREMIUM_MONTH_TIER_2,
            label: "Nitro"
          }, {
            value: x.Xh.PREMIUM_MONTH_TIER_1,
            label: "Nitro Classic"
          }, {
            value: x.Xh.PREMIUM_MONTH_TIER_0,
            label: "Nitro Basic"
          }],
          onChange: e => B(s => ({
            ...s,
            plan_id: e
          }))
        }), (0, n.jsx)(r.SingleSelect, {
          value: U.gift,
          options: [{
            value: "true",
            label: "Gift"
          }, {
            value: "false",
            label: "Not Gift"
          }],
          onChange: e => B(s => ({
            ...s,
            gift: e
          }))
        }), (0, n.jsx)(r.Tooltip, {
          text: "Already subscribed",
          shouldShow: b,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: t
            } = e;
            return (0, n.jsx)(r.Button, {
              onMouseLeave: t,
              onMouseEnter: s,
              disabled: b,
              onClick: () => {
                window.open(M.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify({
                  ...U
                }))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsx)(r.FormTitle, {
        children: "Creator Revenue"
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.Text, {
          className: D.guildServerDescription,
          variant: "text-sm/normal",
          children: "Premium Server Subscription For"
        }), (0, n.jsx)(r.SingleSelect, {
          value: G,
          options: P,
          onChange: e => F(e)
        })]
      }), (0, n.jsx)(u.l, {
        guildId: null == G ? void 0 : G.id,
        children: (0, n.jsx)(p, {
          selectedGuildForGuildSub: G
        })
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsx)(r.FormTitle, {
        children: "Activities & Application Payment Modals"
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: y,
          onChange: Y
        }), (0, n.jsx)(r.TextInput, {
          placeholder: "Sku Id",
          value: H,
          onChange: e => k(e)
        }), (0, n.jsx)(r.Button, {
          onClick: () => (0, E.S)({
            applicationId: y,
            skuId: H,
            openPremiumPaymentModal: () => !0,
            analyticsLocations: [],
            analyticsLocationObject: {
              page: M.ZY5.IN_APP
            },
            context: M.IlC.APP
          }),
          children: "Open App Subs Modal for Activity"
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsx)(r.FormTitle, {
        children: "Standard Payment Modal Test"
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: w,
          onChange: W
        }), (0, n.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: K,
          onChange: e => z(e)
        }), (0, n.jsx)(r.Button, {
          onClick: () => (0, O.Z)({
            applicationId: w,
            skuId: K,
            analyticsLocations: V
          }),
          children: "Open Standard Payment Modal for SKU"
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsx)(r.FormTitle, {
        children: "Collectibles Payment Modal Test"
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: Q,
          onChange: e => X(e)
        }), (0, n.jsx)(r.Button, {
          onClick: () => (0, A.Z)({
            skuId: Q,
            analyticsLocations: V
          }),
          children: "Open Collectibles Payment Modal for SKU"
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsx)(r.FormTitle, {
        children: "Helpers"
      }), (0, n.jsxs)(r.FormItem, {
        className: D.formItem,
        children: [(0, n.jsx)(r.Button, {
          onClick: () => (0, c.mE)(),
          children: "Reset SubscriptionPlanStore"
        }), (0, n.jsx)(r.Button, {
          onClick: () => (0, o.GM)(),
          children: "Reset SubscriptionStore"
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: D.formDivider
      }), (0, n.jsx)(r.FormTitle, {
        children: "Dismissible Content Framework"
      }), (0, n.jsx)(r.FormItem, {
        className: D.formItem,
        children: (0, n.jsx)(r.Button, {
          onClick: () => (0, T.EG)(),
          children: "Reset DismissibleContentFrameworkStore"
        })
      })]
    })
  })
}