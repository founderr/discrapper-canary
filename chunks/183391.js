var s = n(735250);
n(470079);
var t = n(643872),
  a = n(481060),
  i = n(689938),
  r = n(997844);
let o = [t.p.OFFICIAL, t.p.TWITTER, t.p.YOUTUBE];
l.Z = e => {
  let {
    websites: l
  } = e;
  return null == l || 0 === l.length ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(a.Text, {
      variant: "text-xs/semibold",
      children: i.Z.Messages.GAME_PROFILE_LINKS
    }), (0, s.jsx)("div", {
      className: r.row,
      children: l.filter(e => {
        let {
          category: l
        } = e;
        return o.includes(l)
      }).sort((e, l) => e.category - l.category).map(e => {
        let {
          category: l,
          url: n
        } = e, i = null;
        switch (l) {
          case t.p.OFFICIAL:
            i = (0, s.jsx)(a.GlobeEarthIcon, {});
            break;
          case t.p.TWITTER:
            i = (0, s.jsx)(a.XNeutralIcon, {});
            break;
          case t.p.YOUTUBE:
            i = (0, s.jsx)(a.YouTubeIcon, {})
        }
        return null != i ? (0, s.jsx)(a.Anchor, {
          href: n,
          target: "_blank",
          children: i
        }, n) : null
      })
    })]
  })
}