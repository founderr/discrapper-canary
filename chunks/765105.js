"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("37983");
n("884691");
var i = n("90915"),
  r = n("73749"),
  l = n("468560"),
  a = n("271081"),
  u = n("298557"),
  o = n("176162"),
  c = n("750947"),
  d = n("49111");
let f = function(e) {
  let {
    match: t
  } = e, {
    applicationId: n,
    section: i
  } = t.params, r = (0, l.default)(c.ApplicationDirectoryProfileSections, i);
  return (0, s.jsx)(u.default, {
    applicationId: n,
    initialSection: r
  })
};

function h() {
  return (0, s.jsxs)(i.Switch, {
    children: [(0, s.jsx)(r.default, {
      path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
      component: o.default
    }), (0, s.jsx)(r.default, {
      path: d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
      render: f
    }), (0, s.jsx)(r.default, {
      path: d.Routes.APPLICATION_DIRECTORY,
      component: a.default
    })]
  })
}