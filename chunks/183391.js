"use strict";
t.r(l);
var a = t("735250");
t("470079");
var s = t("643872"),
  n = t("940621"),
  i = t("781511"),
  r = t("255418"),
  o = t("481060"),
  c = t("689938"),
  d = t("884430");
let u = [s.IGDBWebsiteCategory.OFFICIAL, s.IGDBWebsiteCategory.TWITTER, s.IGDBWebsiteCategory.YOUTUBE];
l.default = e => {
  let {
    websites: l
  } = e;
  return null == l || 0 === l.length ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/semibold",
      children: c.default.Messages.GAME_PROFILE_LINKS
    }), (0, a.jsx)("div", {
      className: d.row,
      children: l.filter(e => {
        let {
          category: l
        } = e;
        return u.includes(l)
      }).sort((e, l) => e.category - l.category).map(e => {
        let {
          category: l,
          url: t
        } = e, c = null;
        switch (l) {
          case s.IGDBWebsiteCategory.OFFICIAL:
            c = (0, a.jsx)(i.GlobeEarthIcon, {});
            break;
          case s.IGDBWebsiteCategory.TWITTER:
            c = (0, a.jsx)(r.XNeutralIcon, {});
            break;
          case s.IGDBWebsiteCategory.YOUTUBE:
            c = (0, a.jsx)(n.YouTubeIcon, {})
        }
        return null != c ? (0, a.jsx)(o.Anchor, {
          href: t,
          target: "_blank",
          children: c
        }, t) : null
      })
    })]
  })
}