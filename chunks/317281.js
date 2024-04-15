"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("735250");
n("470079");
var s = n("613828"),
  l = n("765717"),
  a = n("543842"),
  r = n("74438"),
  o = n("753450"),
  u = n("675869"),
  c = n("272242"),
  d = n("981631");
let f = function(e) {
  let {
    match: t
  } = e, {
    applicationId: n,
    section: s
  } = t.params, l = (0, a.default)(c.ApplicationDirectoryProfileSections, s);
  return (0, i.jsx)(o.default, {
    applicationId: n,
    initialSection: l
  })
};

function p() {
  return (0, i.jsxs)(s.Switch, {
    children: [(0, i.jsx)(l.default, {
      path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
      component: u.default
    }), (0, i.jsx)(l.default, {
      path: d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
      render: f
    }), (0, i.jsx)(l.default, {
      path: d.Routes.APPLICATION_DIRECTORY,
      component: r.default
    })]
  })
}