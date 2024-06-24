t.d(n, {
  e: function() {
    return I
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
  c = t(882101),
  d = t(689938),
  _ = t(635816);
let I = e => {
  let {
    listingId: n,
    isListingPublished: t,
    expanded: I,
    onToggleExpanded: E
  } = e, C = (0, u.Z)(), [m] = o._T(n), [S] = o.d9(n, C), [N] = o.H9(n);
  return (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsx)(c.BM, {
      image: S
    }), (0, i.jsxs)("div", {
      className: _.tierTextInfoContainer,
      children: [(0, i.jsx)(c.Ey, {
        listingName: m
      }), (0, i.jsxs)("div", {
        className: _.tierPriceContainer,
        children: [!t && (0, i.jsx)(s.v, {}), (0, i.jsxs)(l.Text, {
          variant: "text-xs/normal",
          className: _.tierPrice,
          children: [(0, r.T4)(N.price, N.currency), " ", d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            period: (0, a.JE)({
              interval: N.interval,
              interval_count: N.interval_count
            })
          })]
        })]
      })]
    }), (0, i.jsx)(l.Clickable, {
      onClick: E,
      children: I ? (0, i.jsx)(l.ChevronSmallUpIcon, {
        size: "md",
        color: "currentColor",
        className: _.toggleButton
      }) : (0, i.jsx)(l.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: _.toggleButton
      })
    })]
  })
}