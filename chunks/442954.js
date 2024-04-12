"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
}), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("803997"),
  l = r.n(i),
  o = r("481060"),
  s = r("246992"),
  c = r("779869"),
  d = r("534477");

function u() {
  let e = {
      BOGOAnnouncementModal: async () => {
        let {
          default: e
        } = await Promise.all([r.e("49237"), r.e("99387"), r.e("81539"), r.e("34049")]).then(r.bind(r, "868508"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t
        })
      },
      AprilMarketingFallbackModal: async () => {
        let {
          default: e
        } = await Promise.all([r.e("49237"), r.e("99387"), r.e("81539"), r.e("99174")]).then(r.bind(r, "937733"));
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
    [i, u] = n.useState(t[0].value);
  return (0, a.jsx)(o.ScrollerThin, {
    className: l()(c.panel),
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
            isSelected: e => i === e,
            placeholder: "Trial ID",
            serialize: e => String(e),
            select: e => u(e),
            popoutLayerContext: s.devToolsLayerContext
          }), (0, a.jsx)(o.Button, {
            onClick: () => {
              (0, o.openModalLazy)(e[i])
            },
            children: "Open"
          })]
        })]
      })
    })
  })
}