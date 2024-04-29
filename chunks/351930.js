"use strict";
t.r(r), t.d(r, {
  default: function() {
    return k
  }
}), t("47120"), t("411104");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("399606"),
  c = t("544891"),
  s = t("481060"),
  d = t("355467"),
  u = t("78839"),
  h = t("246992"),
  m = t("981631"),
  p = t("277513"),
  g = t("104837");
let f = [{
    label: "Nitro Monthly",
    value: "511651880837840896"
  }, {
    label: "Nitro Yearly",
    value: "511651885459963904"
  }, {
    label: "Nitro Classic Monthly",
    value: "511651871736201216"
  }, {
    label: "Nitro Classic Yearly",
    value: "511651876987469824"
  }, {
    label: "Basic Monthly",
    value: "978380692553465866"
  }, {
    label: "Basic Yearly",
    value: "1024422698568122368"
  }],
  b = {
    [m.SubscriptionStatusTypes.UNPAID]: "Unpaid",
    [m.SubscriptionStatusTypes.ACTIVE]: "Active",
    [m.SubscriptionStatusTypes.PAST_DUE]: "Past Due",
    [m.SubscriptionStatusTypes.CANCELED]: "Canceled",
    [m.SubscriptionStatusTypes.ENDED]: "Ended",
    [m.SubscriptionStatusTypes.ACCOUNT_HOLD]: "Account Hold",
    [m.SubscriptionStatusTypes.BILLING_RETRY]: "Billing Retry",
    [m.SubscriptionStatusTypes.PAUSED]: "Paused",
    [m.SubscriptionStatusTypes.PAUSE_PENDING]: "Pause Pending"
  },
  y = [{
    label: "Unpaid",
    value: m.SubscriptionStatusTypes.UNPAID
  }, {
    label: "Active",
    value: m.SubscriptionStatusTypes.ACTIVE
  }, {
    label: "Past Due",
    value: m.SubscriptionStatusTypes.PAST_DUE
  }, {
    label: "Canceled",
    value: m.SubscriptionStatusTypes.CANCELED
  }, {
    label: "Ended",
    value: m.SubscriptionStatusTypes.ENDED
  }, {
    label: "Account Hold",
    value: m.SubscriptionStatusTypes.ACCOUNT_HOLD
  }, {
    label: "Billing Retry",
    value: m.SubscriptionStatusTypes.BILLING_RETRY
  }, {
    label: "Paused",
    value: m.SubscriptionStatusTypes.PAUSED
  }, {
    label: "Pause Pending",
    value: m.SubscriptionStatusTypes.PAUSE_PENDING
  }],
  x = {
    "511651880837840896": "Nitro Monthly",
    "511651885459963904": "Nitro Yearly",
    "511651871736201216": "Nitro Classic Monthly",
    "511651876987469824": "Nitro Classic Yearly",
    "978380692553465866": "Basic Monthly",
    "1024422698568122368": "Basic Yearly"
  };

function k() {
  let [e, r] = i.useState("511651880837840896"), t = (0, o.useStateFromStores)([u.default], () => u.default.getPremiumSubscription()), l = async () => {
    await c.HTTP.post({
      url: "/debug/subscription",
      body: {
        plan_id: e
      }
    }), await (0, d.fetchSubscriptions)()
  }, m = async () => {
    await c.HTTP.del("/debug/subscription"), await (0, d.fetchSubscriptions)()
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: n()(p.panel),
    children: (0, a.jsxs)("div", {
      className: g.panelInner,
      children: [(0, a.jsx)(s.Text, {
        style: {
          marginBottom: "16px"
        },
        variant: "text-lg/bold",
        children: "Manage Subscription"
      }), (0, a.jsxs)("section", {
        className: g.buttons,
        children: [null == t && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            children: " Subscription Type"
          }), (0, a.jsx)(s.Select, {
            serialize: e => e,
            isSelected: r => r === e,
            options: f,
            select: r,
            popoutLayerContext: h.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: l,
            children: "Create Subscription"
          })]
        }), (0, a.jsx)(s.Button, {
          size: s.Button.Sizes.SMALL,
          onClick: m,
          children: "Delete Subscription"
        })]
      }), null != t && (0, a.jsx)(v, {
        subscription: t
      })]
    })
  })
}

function v(e) {
  let {
    subscription: r
  } = e, t = e => {
    if (null == e && (e = r.status), e in b) return b[e];
    throw Error("Unknown status")
  }, i = async e => {
    await c.HTTP.patch({
      url: "/debug/subscription",
      body: {
        subscription_status: e
      }
    })
  }, l = r.planIdFromItems in {
    "978380692553465866": !0,
    "1024422698568122368": !0
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.Text, {
      style: {
        marginTop: "15px"
      },
      variant: "text-md/normal",
      children: "Existing Subscription"
    }), (0, a.jsxs)("div", {
      className: n()(g.card, l ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
      children: [(0, a.jsxs)(s.Text, {
        variant: "text-md/normal",
        children: [" Subscription Type: ", (() => {
          let e = r.planIdFromItems;
          if (null == e) throw Error("No plan id");
          if (e in x) return x[e];
          throw Error("Unknown plan id")
        })(), " "]
      }), (0, a.jsxs)(s.Text, {
        variant: "text-md/normal",
        children: [" Subscription ID ", r.id, " "]
      }), (0, a.jsxs)(s.Text, {
        style: {
          marginBottom: "15px"
        },
        variant: "text-md/normal",
        children: ["Subscription Status: ", t()]
      }), (0, a.jsx)(s.Select, {
        serialize: e => t(e),
        isSelected: e => e === r.status,
        options: y,
        select: i,
        popoutLayerContext: h.devToolsLayerContext
      })]
    })]
  })
}