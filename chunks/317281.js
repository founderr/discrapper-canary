"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("735250");
n("470079");
var i = n("613828"),
  l = n("765717"),
  a = n("543842"),
  r = n("74438"),
  u = n("753450"),
  o = n("675869"),
  c = n("272242"),
  d = n("981631");
let f = function(e) {
  let {
    match: t
  } = e, {
    applicationId: n,
    section: i
  } = t.params, l = (0, a.default)(c.ApplicationDirectoryProfileSections, i);
  return (0, s.jsx)(u.default, {
    applicationId: n,
    initialSection: l
  })
};

function p() {
  return (0, s.jsxs)(i.Switch, {
    children: [(0, s.jsx)(l.default, {
      path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
      component: o.default
    }), (0, s.jsx)(l.default, {
      path: d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
      render: f
    }), (0, s.jsx)(l.default, {
      path: d.Routes.APPLICATION_DIRECTORY,
      component: r.default
    })]
  })
}