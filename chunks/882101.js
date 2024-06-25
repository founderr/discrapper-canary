n.d(t, {
  BM: function() {
    return _
  },
  Ey: function() {
    return E
  },
  xv: function() {
    return I
  }
}), n(47120);
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(765400),
  a = n(937615),
  r = n(817460),
  o = n(290348),
  c = n(367719),
  u = n(689938),
  d = n(364375);
let E = e => {
  let {
    listingName: t
  } = e;
  return (0, s.jsx)(i.Heading, {
    variant: "text-md/normal",
    color: "interactive-active",
    className: d.tierName,
    children: t
  })
};

function _(e) {
  let {
    image: t
  } = e;
  return null == t ? null : (0, s.jsx)("img", {
    src: t,
    alt: "",
    className: d.tierImage
  })
}
let I = e => {
  let {
    listingId: t,
    isListingPublished: n
  } = e, I = (0, c.Z)(), [T] = o._T(t), [m] = o.d9(t, I), [N] = o.H9(t);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(E, {
      listingName: T
    }), (0, s.jsx)(_, {
      image: m
    }), !n && (0, s.jsx)("div", {
      className: d.draftBadgeContainer,
      children: (0, s.jsx)(l.v, {})
    }), (0, s.jsx)(i.Text, {
      variant: "heading-xl/semibold",
      className: d.tierPrice,
      tag: "div",
      children: (0, a.T4)(N.price, N.currency)
    }), (0, s.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "interactive-normal",
      className: d.tierPeriod,
      children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
        period: (0, r.JE)({
          interval: N.interval,
          interval_count: N.interval_count
        })
      })
    })]
  })
}