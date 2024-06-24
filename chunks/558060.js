"use strict";
s.d(t, {
  Z: function() {
    return f
  }
});
var n = s(735250);
s(470079);
var r = s(120356),
  a = s.n(r),
  i = s(481060),
  l = s(884697),
  o = s(409116),
  c = s(200615),
  u = s(981631),
  d = s(689938),
  C = s(513793);

function f(e) {
  let {
    product: t,
    isPremiumUser: s,
    discount: r,
    className: f,
    nitroUpsell: p = !1
  } = e, E = (0, l.ql)(t, u.tuJ.DEFAULT);
  if (null == E) return null;
  if (E.amount <= 0) return (0, n.jsx)("div", {
    className: a()(C.priceTagsContainer, f),
    children: (0, n.jsx)(o.F, {
      price: E
    })
  });
  let g = (0, l.ql)(t, u.tuJ.PREMIUM_TIER_2),
    m = !s && !(0, l.x6)(t),
    h = (0, l.x6)(t) && s ? {
      ...E,
      amount: r.original
    } : E;
  return (0, n.jsxs)("div", {
    className: a()(C.priceTagsContainer, f),
    children: [(0, n.jsx)(o.F, {
      price: h,
      discount: s ? l.f_ : r,
      className: a()(C.price, {
        [C.striked]: s,
        [C.dimmed]: s,
        [C.fullPrice]: m
      })
    }), null != g && (0, n.jsx)(o.F, {
      price: g,
      discount: s ? r : l.f_,
      renderPrice: p ? e => (0, n.jsx)(i.Text, {
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
      className: a()(C.price, {
        [C.dimmed]: !s,
        [C.fullPrice]: m
      }),
      variant: s ? void 0 : "text-xs/semibold",
      icon: (0, n.jsx)(i.Tooltip, {
        text: d.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": d.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, n.jsx)(i.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            ...t,
            className: a()(C.premiumIcon, {
              [C.fullPrice]: m
            })
          })
        }
      })
    })]
  })
}