"use strict";
t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  l = t(481060),
  i = t(884697),
  o = t(409116),
  c = t(200615),
  u = t(981631),
  d = t(689938),
  C = t(513793);

function E(e) {
  let {
    product: s,
    isPremiumUser: t,
    discount: a,
    className: E,
    nitroUpsell: f = !1
  } = e, m = (0, i.ql)(s, u.tuJ.DEFAULT);
  if (null == m) return null;
  if (m.amount <= 0) return (0, n.jsx)("div", {
    className: r()(C.priceTagsContainer, E),
    children: (0, n.jsx)(o.F, {
      price: m
    })
  });
  let p = (0, i.ql)(s, u.tuJ.PREMIUM_TIER_2),
    g = !t && !(0, i.x6)(s),
    h = (0, i.x6)(s) && t ? {
      ...m,
      amount: a.original
    } : m;
  return (0, n.jsxs)("div", {
    className: r()(C.priceTagsContainer, E),
    children: [(0, n.jsx)(o.F, {
      price: h,
      discount: t ? i.f_ : a,
      className: r()(C.price, {
        [C.striked]: t,
        [C.dimmed]: t,
        [C.fullPrice]: g
      })
    }), null != p && (0, n.jsx)(o.F, {
      price: p,
      discount: t ? a : i.f_,
      renderPrice: f ? e => (0, n.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: d.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
          price: e,
          subscribeNowHook: e => (0, n.jsx)(c.F, {
            text: e
          })
        })
      }) : g ? e => d.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()(C.price, {
        [C.dimmed]: !t,
        [C.fullPrice]: g
      }),
      variant: t ? void 0 : "text-xs/semibold",
      icon: (0, n.jsx)(l.Tooltip, {
        text: d.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": d.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...s
          } = e;
          return (0, n.jsx)(l.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            ...s,
            className: r()(C.premiumIcon, {
              [C.fullPrice]: g
            })
          })
        }
      })
    })]
  })
}