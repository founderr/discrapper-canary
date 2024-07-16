s.d(t, {
  Z: function() {
return g;
  }
});
var n = s(735250);
s(470079);
var r = s(120356),
  a = s.n(r),
  o = s(481060),
  i = s(884697),
  l = s(409116),
  c = s(200615),
  d = s(981631),
  u = s(689938),
  p = s(487208);

function g(e) {
  let {
product: t,
isPremiumUser: s,
discount: r,
className: g,
nitroUpsell: f = !1
  } = e, C = (0, i.ql)(t, d.tuJ.DEFAULT);
  if (null == C)
return null;
  if (C.amount <= 0)
return (0, n.jsx)('div', {
  className: a()(p.priceTagsContainer, g),
  children: (0, n.jsx)(l.F, {
    price: C
  })
});
  let m = (0, i.ql)(t, d.tuJ.PREMIUM_TIER_2),
_ = !s && !(0, i.x6)(t),
h = (0, i.x6)(t) && s ? {
  ...C,
  amount: r.original
} : C;
  return (0, n.jsxs)('div', {
className: a()(p.priceTagsContainer, g),
children: [
  (0, n.jsx)(l.F, {
    price: h,
    discount: s ? i.f_ : r,
    className: a()(p.price, {
      [p.striked]: s,
      [p.dimmed]: s,
      [p.fullPrice]: _
    })
  }),
  null != m && (0, n.jsx)(l.F, {
    price: m,
    discount: s ? r : i.f_,
    renderPrice: f ? e => (0, n.jsx)(o.Text, {
      variant: 'text-xs/medium',
      children: u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
        price: e,
        subscribeNowHook: e => (0, n.jsx)(c.F, {
          text: e
        })
      })
    }) : _ ? e => u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
      price: e
    }) : void 0,
    className: a()(p.price, {
      [p.dimmed]: !s,
      [p.fullPrice]: _
    }),
    variant: s ? void 0 : 'text-xs/semibold',
    icon: (0, n.jsx)(o.Tooltip, {
      text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
      'aria-label': u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
      children: e => {
        let {
          ...t
        } = e;
        return (0, n.jsx)(o.NitroWheelIcon, {
          size: 'md',
          color: 'currentColor',
          ...t,
          className: a()(p.premiumIcon, {
            [p.fullPrice]: _
          })
        });
      }
    })
  })
]
  });
}