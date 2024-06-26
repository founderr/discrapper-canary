"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  s = n(884697),
  c = n(409116),
  l = n(200615),
  d = n(981631),
  u = n(689938),
  p = n(513793);

function f(e) {
  let {
    product: t,
    isPremiumUser: n,
    discount: i,
    className: f,
    nitroUpsell: g = !1
  } = e, _ = (0, s.ql)(t, d.tuJ.DEFAULT);
  if (null == _) return null;
  if (_.amount <= 0) return (0, r.jsx)("div", {
    className: a()(p.priceTagsContainer, f),
    children: (0, r.jsx)(c.F, {
      price: _
    })
  });
  let C = (0, s.ql)(t, d.tuJ.PREMIUM_TIER_2),
    b = !n && !(0, s.x6)(t),
    m = (0, s.x6)(t) && n ? {
      ..._,
      amount: i.original
    } : _;
  return (0, r.jsxs)("div", {
    className: a()(p.priceTagsContainer, f),
    children: [(0, r.jsx)(c.F, {
      price: m,
      discount: n ? s.f_ : i,
      className: a()(p.price, {
        [p.striked]: n,
        [p.dimmed]: n,
        [p.fullPrice]: b
      })
    }), null != C && (0, r.jsx)(c.F, {
      price: C,
      discount: n ? i : s.f_,
      renderPrice: g ? e => (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
          price: e,
          subscribeNowHook: e => (0, r.jsx)(l.F, {
            text: e
          })
        })
      }) : b ? e => u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: a()(p.price, {
        [p.dimmed]: !n,
        [p.fullPrice]: b
      }),
      variant: n ? void 0 : "text-xs/semibold",
      icon: (0, r.jsx)(o.Tooltip, {
        text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, r.jsx)(o.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            ...t,
            className: a()(p.premiumIcon, {
              [p.fullPrice]: b
            })
          })
        }
      })
    })]
  })
}