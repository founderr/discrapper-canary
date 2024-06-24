t.d(n, {
  BM: function() {
    return I
  },
  Ey: function() {
    return _
  },
  xv: function() {
    return E
  }
}), t(47120);
var i = t(735250);
t(470079);
var l = t(481060),
  s = t(765400),
  r = t(937615),
  a = t(817460),
  o = t(290348),
  u = t(367719),
  c = t(689938),
  d = t(364375);
let _ = e => {
  let {
    listingName: n
  } = e;
  return (0, i.jsx)(l.Heading, {
    variant: "text-md/normal",
    color: "interactive-active",
    className: d.tierName,
    children: n
  })
};

function I(e) {
  let {
    image: n
  } = e;
  return null == n ? null : (0, i.jsx)("img", {
    src: n,
    alt: "",
    className: d.tierImage
  })
}
let E = e => {
  let {
    listingId: n,
    isListingPublished: t
  } = e, E = (0, u.Z)(), [C] = o._T(n), [m] = o.d9(n, E), [S] = o.H9(n);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_, {
      listingName: C
    }), (0, i.jsx)(I, {
      image: m
    }), !t && (0, i.jsx)("div", {
      className: d.draftBadgeContainer,
      children: (0, i.jsx)(s.v, {})
    }), (0, i.jsx)(l.Text, {
      variant: "heading-xl/semibold",
      className: d.tierPrice,
      tag: "div",
      children: (0, r.T4)(S.price, S.currency)
    }), (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "interactive-normal",
      className: d.tierPeriod,
      children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
        period: (0, a.JE)({
          interval: S.interval,
          interval_count: S.interval_count
        })
      })
    })]
  })
}