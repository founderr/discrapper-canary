"use strict";
t.r(r), t.d(r, {
  default: function() {
    return b
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("399606"),
  c = t("544891"),
  s = t("481060"),
  d = t("355467"),
  u = t("244526"),
  h = t("853872"),
  m = t("246992"),
  g = t("779869"),
  p = t("534477");
let f = [{
  label: "VISA",
  value: "pm_card_us"
}, {
  label: "Mastercard",
  value: "pm_card_mastercard"
}, {
  label: "Canadian Visa",
  value: "pm_card_ca"
}, {
  label: "Mexican Visa",
  value: "pm_card_mx"
}, {
  label: "German Visa",
  value: "pm_card_de"
}, {
  label: "Brazilian Visa",
  value: "pm_card_br"
}, {
  label: "UK Visa",
  value: "pm_card_gb"
}, {
  label: "Japanese Visa",
  value: "pm_card_jp"
}, {
  label: "Malaysia Visa",
  value: "pm_card_my"
}, {
  label: "Polish Visa",
  value: "pm_card_pl"
}];

function b() {
  let [e, r] = i.useState("pm_card_us"), t = Object.values((0, o.useStateFromStores)([h.default], () => h.default.paymentSources)), l = async () => {
    let r = e;
    "" === r && (r = "pm_card_us"), await c.HTTP.post({
      url: "/debug/payment-source",
      body: {
        token: r
      }
    }), await (0, d.fetchPaymentSources)()
  }, u = async () => {
    await c.HTTP.del("/debug/payment-source"), await (0, d.fetchPaymentSources)()
  };
  return i.useEffect(() => {
    (0, d.fetchPaymentSources)()
  }, []), (0, a.jsx)(s.ScrollerThin, {
    className: n()(g.panel),
    children: (0, a.jsxs)("div", {
      className: p.panelInner,
      children: [(0, a.jsxs)(s.Text, {
        style: {
          marginBottom: "16px"
        },
        variant: "text-lg/bold",
        children: [" ", "Manage Payment Sources", " "]
      }), (0, a.jsxs)("div", {
        className: p.buttons,
        children: [(0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          children: " Card Type "
        }), (0, a.jsx)(s.Select, {
          serialize: e => e,
          isSelected: r => r === e,
          options: f,
          select: r,
          popoutLayerContext: m.devToolsLayerContext
        }), (0, a.jsx)(s.Button, {
          size: s.Button.Sizes.SMALL,
          onClick: l,
          children: "Create Stripe Credit Card"
        }), t.length > 0 && (0, a.jsx)(s.Button, {
          size: s.Button.Sizes.SMALL,
          onClick: u,
          children: "Delete All Payment Sources"
        })]
      }), (0, a.jsx)(s.Text, {
        style: {
          marginTop: "16px",
          marginBottom: "16px"
        },
        variant: "text-md/normal",
        children: "Existing Payment Sources"
      }), t.map(e => (0, a.jsx)(y, {
        paymentSource: e
      }, e.id))]
    })
  })
}

function y(e) {
  let {
    paymentSource: r
  } = e;
  return (0, a.jsxs)("div", {
    className: p.inputRow,
    children: [(0, a.jsx)(u.default, {
      locale: "en-US",
      paymentSource: r,
      showDefaultLabel: !0,
      showPaymentSourceIcon: !0
    }, r.id), (0, a.jsx)("img", {
      alt: r.country,
      style: {
        marginRight: 5,
        height: 25
      },
      src: k(r.country)
    })]
  })
}
let x = ["AN", "MI", "TP"],
  k = e => {
    if (null == e) return "";
    if (x.includes(e)) return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30e.svg";
    let r = e.toUpperCase().split("").map(e => (127397 + e.charCodeAt(0)).toString(16)).join("-");
    return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/".concat(r, ".svg")
  }