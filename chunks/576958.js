"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var l = i("735250");
i("470079");
var a = i("481060"),
  n = i("463571"),
  s = i("744142"),
  r = i("981631"),
  o = i("689938"),
  c = i("914120");

function d(e) {
  let {
    applications: t,
    className: i,
    listingClassName: s,
    title: d,
    showViewAll: p,
    onViewOne: _,
    onViewAll: m
  } = e;
  return (0, l.jsxs)("div", {
    className: i,
    children: [null != d ? (0, l.jsxs)("div", {
      className: c.header,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: d
      }), p ? (0, l.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.LINK,
        onClick: m,
        children: o.default.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
      }) : null]
    }) : null, (0, l.jsx)("ul", {
      className: c.list,
      children: t.map(e => (0, l.jsx)(n.default, {
        href: r.Routes.APPLICATION_DIRECTORY_PROFILE(e.id),
        children: (0, l.jsx)(u, {
          className: s,
          application: e,
          onClick: t => {
            let {
              mutualGuilds: i
            } = t;
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
  return (0, l.jsx)(s.default, {
    ...e
  })
}