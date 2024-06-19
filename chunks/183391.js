var n = s(735250);
s(470079);
var a = s(643872),
  t = s(481060),
  i = s(689938),
  o = s(997844);
let r = [a.p.OFFICIAL, a.p.TWITTER, a.p.YOUTUBE];
l.Z = e => {
  let {
    websites: l
  } = e;
  return null == l || 0 === l.length ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(t.Text, {
      variant: "text-xs/semibold",
      children: i.Z.Messages.GAME_PROFILE_LINKS
    }), (0, n.jsx)("div", {
      className: o.row,
      children: l.filter(e => {
        let {
          category: l
        } = e;
        return r.includes(l)
      }).sort((e, l) => e.category - l.category).map(e => {
        let {
          category: l,
          url: s
        } = e, i = null;
        switch (l) {
          case a.p.OFFICIAL:
            i = (0, n.jsx)(t.GlobeEarthIcon, {});
            break;
          case a.p.TWITTER:
            i = (0, n.jsx)(t.XNeutralIcon, {});
            break;
          case a.p.YOUTUBE:
            i = (0, n.jsx)(t.YouTubeIcon, {})
        }
        return null != i ? (0, n.jsx)(t.Anchor, {
          href: s,
          target: "_blank",
          children: i
        }, s) : null
      })
    })]
  })
}