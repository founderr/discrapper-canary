"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(626135),
  o = n(596401),
  a = n(981631),
  l = n(689938);
let u = () => {
  s.default.track(a.rMx.CHANGE_LOG_CTA_CLICKED, {
    cta_type: "profile_bio",
    target: o.D2
  })
};

function _() {
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("span", {
      children: l.Z.Messages.SYSTEM_DM_CHANGELOG_BIO
    }), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("span", {
      children: l.Z.Messages.SYSTEM_DM_CHANGELOG_BIO_WITH_CTA.format({
        blogHook: (e, t) => (0, i.jsx)(r.Anchor, {
          onClick: u,
          target: "_blank",
          rel: "noreferrer noopener",
          href: o.D2,
          children: e
        }, t)
      })
    })]
  })
}