i.d(n, {
  Z: function() {
    return d
  }
});
var t = i(735250);
i(470079);
var l = i(481060),
  a = i(463571),
  s = i(744142),
  r = i(981631),
  o = i(689938),
  c = i(853597);

function d(e) {
  let {
    applications: n,
    className: i,
    listingClassName: s,
    title: d,
    showViewAll: p,
    onViewOne: _,
    onViewAll: m
  } = e;
  return (0, t.jsxs)("div", {
    className: i,
    children: [null != d ? (0, t.jsxs)("div", {
      className: c.header,
      children: [(0, t.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: d
      }), p ? (0, t.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.LINK,
        onClick: m,
        children: o.Z.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
      }) : null]
    }) : null, (0, t.jsx)("ul", {
      className: c.list,
      children: n.map(e => (0, t.jsx)(a.Z, {
        href: r.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
        children: (0, t.jsx)(u, {
          className: s,
          application: e,
          onClick: n => {
            let {
              mutualGuilds: i
            } = n;
            return _({
              application: e,
              mutualGuilds: i
            })
          }
        })
      }, e.id))
    })]
  })
}

function u(e) {
  return (0, t.jsx)(s.Z, {
    ...e
  })
}