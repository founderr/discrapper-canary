"use strict";
t.d(s, {
  Z: function() {
    return f
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  l = t(884697),
  o = t(409116),
  c = t(200615),
  u = t(981631),
  d = t(689938),
  C = t(513793);

function f(e) {
  let {
    product: s,
    isPremiumUser: t,
    discount: a,
    className: f,
    nitroUpsell: E = !1
  } = e, p = (0, l.ql)(s, u.tuJ.DEFAULT);
  if (null == p) return null;
  if (p.amount <= 0) return (0, n.jsx)("div", {
    className: r()(C.priceTagsContainer, f),
    children: (0, n.jsx)(o.F, {
      price: p
    })
  });
  let g = (0, l.ql)(s, u.tuJ.PREMIUM_TIER_2),
    m = !t && !(0, l.x6)(s),
    x = (0, l.x6)(s) && t ? {
      ...p,
      amount: a.original
    } : p;
  return (0, n.jsxs)("div", {
    className: r()(C.priceTagsContainer, f),
    children: [(0, n.jsx)(o.F, {
      price: x,
      discount: t ? l.f_ : a,
      className: r()(C.price, {
        [C.striked]: t,
        [C.dimmed]: t,
        [C.fullPrice]: m
      })
    }), null != g && (0, n.jsx)(o.F, {
      price: g,
      discount: t ? a : l.f_,
      renderPrice: E ? e => (0, n.jsx)(i.Text, {
        variant: "text-xs/medium",
        children: d.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
          price: e,
          subscribeNowHook: e => (0, n.jsx)(c.F, {
            text: e
          })
        })
      }) : m ? e => d.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()(C.price, {
        [C.dimmed]: !t,
        [C.fullPrice]: m
      }),
      variant: t ? void 0 : "text-xs/semibold",
      icon: (0, n.jsx)(i.Tooltip, {
        text: d.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": d.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...s
          } = e;
          return (0, n.jsx)(i.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            ...s,
            className: r()(C.premiumIcon, {
              [C.fullPrice]: m
            })
          })
        }
      })
    })]
  })
}