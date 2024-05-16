"use strict";
r.r(t), r.d(t, {
  default: function() {
    return k
  }
}), r("47120"), r("411104");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("399606"),
  s = r("544891"),
  c = r("481060"),
  d = r("355467"),
  u = r("78839"),
  h = r("246992"),
  m = r("981631"),
  p = r("277513"),
  g = r("104837");
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
  y = {
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
  b = [{
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
  let [e, t] = i.useState("511651880837840896"), r = (0, o.useStateFromStores)([u.default], () => u.default.getPremiumSubscription()), l = async () => {
    await s.HTTP.post({
      url: "/debug/subscription",
      body: {
        plan_id: e
      }
    }), await (0, d.fetchSubscriptions)()
  }, m = async () => {
    await s.HTTP.del("/debug/subscription"), await (0, d.fetchSubscriptions)()
  };
  return (0, a.jsx)(c.ScrollerThin, {
    className: n()(p.panel),
    children: (0, a.jsxs)("div", {
      className: g.panelInner,
      children: [(0, a.jsx)(c.Text, {
        style: {
          marginBottom: "16px"
        },
        variant: "text-lg/bold",
        children: "Manage Subscription"
      }), (0, a.jsxs)("section", {
        className: g.buttons,
        children: [null == r && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            children: " Subscription Type"
          }), (0, a.jsx)(c.Select, {
            serialize: e => e,
            isSelected: t => t === e,
            options: f,
            select: t,
            popoutLayerContext: h.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: l,
            children: "Create Subscription"
          })]
        }), (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: m,
          children: "Delete Subscription"
        })]
      }), null != r && (0, a.jsx)(v, {
        subscription: r
      })]
    })
  })
}

function v(e) {
  let {
    subscription: t
  } = e, r = e => {
    if (null == e && (e = t.status), e in y) return y[e];
    throw Error("Unknown status")
  }, i = async e => {
    await s.HTTP.patch({
      url: "/debug/subscription",
      body: {
        subscription_status: e
      }
    })
  }, l = t.planIdFromItems in {
    "978380692553465866": !0,
    "1024422698568122368": !0
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.Text, {
      style: {
        marginTop: "15px"
      },
      variant: "text-md/normal",
      children: "Existing Subscription"
    }), (0, a.jsxs)("div", {
      className: n()(g.card, l ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
      children: [(0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: [" Subscription Type: ", (() => {
          let e = t.planIdFromItems;
          if (null == e) throw Error("No plan id");
          if (e in x) return x[e];
          throw Error("Unknown plan id")
        })(), " "]
      }), (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: [" Subscription ID ", t.id, " "]
      }), (0, a.jsxs)(c.Text, {
        style: {
          marginBottom: "15px"
        },
        variant: "text-md/normal",
        children: ["Subscription Status: ", r()]
      }), (0, a.jsx)(c.Select, {
        serialize: e => r(e),
        isSelected: e => e === t.status,
        options: b,
        select: i,
        popoutLayerContext: h.devToolsLayerContext
      })]
    })]
  })
}