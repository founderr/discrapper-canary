"use strict";
r.r(t), r.d(t, {
  default: function() {
    return k
  }
}), r("47120"), r("411104");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("399606"),
  c = r("544891"),
  s = r("481060"),
  d = r("355467"),
  u = r("78839"),
  h = r("246992"),
  p = r("981631"),
  g = r("277513"),
  m = r("104837");
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
    [p.SubscriptionStatusTypes.UNPAID]: "Unpaid",
    [p.SubscriptionStatusTypes.ACTIVE]: "Active",
    [p.SubscriptionStatusTypes.PAST_DUE]: "Past Due",
    [p.SubscriptionStatusTypes.CANCELED]: "Canceled",
    [p.SubscriptionStatusTypes.ENDED]: "Ended",
    [p.SubscriptionStatusTypes.ACCOUNT_HOLD]: "Account Hold",
    [p.SubscriptionStatusTypes.BILLING_RETRY]: "Billing Retry",
    [p.SubscriptionStatusTypes.PAUSED]: "Paused",
    [p.SubscriptionStatusTypes.PAUSE_PENDING]: "Pause Pending"
  },
  b = [{
    label: "Unpaid",
    value: p.SubscriptionStatusTypes.UNPAID
  }, {
    label: "Active",
    value: p.SubscriptionStatusTypes.ACTIVE
  }, {
    label: "Past Due",
    value: p.SubscriptionStatusTypes.PAST_DUE
  }, {
    label: "Canceled",
    value: p.SubscriptionStatusTypes.CANCELED
  }, {
    label: "Ended",
    value: p.SubscriptionStatusTypes.ENDED
  }, {
    label: "Account Hold",
    value: p.SubscriptionStatusTypes.ACCOUNT_HOLD
  }, {
    label: "Billing Retry",
    value: p.SubscriptionStatusTypes.BILLING_RETRY
  }, {
    label: "Paused",
    value: p.SubscriptionStatusTypes.PAUSED
  }, {
    label: "Pause Pending",
    value: p.SubscriptionStatusTypes.PAUSE_PENDING
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
  let [e, t] = i.useState("511651880837840896"), r = (0, o.useStateFromStores)([u.default], () => u.default.getPremiumSubscription()), n = async () => {
    await c.HTTP.post({
      url: "/debug/subscription",
      body: {
        plan_id: e
      }
    }), await (0, d.fetchSubscriptions)()
  }, p = async () => {
    await c.HTTP.del("/debug/subscription"), await (0, d.fetchSubscriptions)()
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: l()(g.panel),
    children: (0, a.jsxs)("div", {
      className: m.panelInner,
      children: [(0, a.jsx)(s.Text, {
        style: {
          marginBottom: "16px"
        },
        variant: "text-lg/bold",
        children: "Manage Subscription"
      }), (0, a.jsxs)("section", {
        className: m.buttons,
        children: [null == r && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            children: " Subscription Type"
          }), (0, a.jsx)(s.Select, {
            serialize: e => e,
            isSelected: t => t === e,
            options: f,
            select: t,
            popoutLayerContext: h.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: n,
            children: "Create Subscription"
          })]
        }), (0, a.jsx)(s.Button, {
          size: s.Button.Sizes.SMALL,
          onClick: p,
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
    await c.HTTP.patch({
      url: "/debug/subscription",
      body: {
        subscription_status: e
      }
    })
  }, n = t.planIdFromItems in {
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
      className: l()(m.card, n ? m.gradientWrapperTier0 : m.gradientWrapperTier2),
      children: [(0, a.jsxs)(s.Text, {
        variant: "text-md/normal",
        children: [" Subscription Type: ", (() => {
          let e = t.planIdFromItems;
          if (null == e) throw Error("No plan id");
          if (e in x) return x[e];
          throw Error("Unknown plan id")
        })(), " "]
      }), (0, a.jsxs)(s.Text, {
        variant: "text-md/normal",
        children: [" Subscription ID ", t.id, " "]
      }), (0, a.jsxs)(s.Text, {
        style: {
          marginBottom: "15px"
        },
        variant: "text-md/normal",
        children: ["Subscription Status: ", r()]
      }), (0, a.jsx)(s.Select, {
        serialize: e => r(e),
        isSelected: e => e === t.status,
        options: b,
        select: i,
        popoutLayerContext: h.devToolsLayerContext
      })]
    })]
  })
}