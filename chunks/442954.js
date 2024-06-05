"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("481060"),
  c = r("246992"),
  s = r("277513"),
  d = r("104837");

function u() {
  let e = {
      BOGOAnnouncementModal: async () => {
        let {
          default: e
        } = await Promise.all([r.e("99387"), r.e("34049")]).then(r.bind(r, "868508"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t
        })
      },
      PremiumSubscriptionAprilMarketingDecoModal: async () => {
        let {
          default: e
        } = await Promise.all([r.e("99387"), r.e("8016"), r.e("18327")]).then(r.bind(r, "731433"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }
    },
    t = Object.keys(e).map(e => ({
      label: e,
      value: e
    })),
    [n, u] = i.useState(t[0].value);
  return (0, a.jsx)(o.ScrollerThin, {
    className: l()(s.panel),
    children: (0, a.jsx)("div", {
      className: d.panelInner,
      children: (0, a.jsxs)("section", {
        className: d.section,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: "Open a Modal"
        }), (0, a.jsxs)("div", {
          className: d.inputRow,
          children: [(0, a.jsx)(o.Select, {
            className: d.input,
            options: t,
            isSelected: e => n === e,
            placeholder: "Trial ID",
            serialize: e => String(e),
            select: e => u(e),
            popoutLayerContext: c.devToolsLayerContext
          }), (0, a.jsx)(o.Button, {
            onClick: () => {
              (0, o.openModalLazy)(e[n])
            },
            children: "Open"
          })]
        })]
      })
    })
  })
}