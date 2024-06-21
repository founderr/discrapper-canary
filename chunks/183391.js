var s = n(735250);
n(470079);
var a = n(120356),
  t = n.n(a),
  i = n(643872),
  r = n(481060),
  o = n(689938),
  c = n(997844);
let d = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE];
l.Z = e => {
  let {
    websites: l
  } = e;
  return null == l || 0 === l.length ? null : (0, s.jsxs)("div", {
    className: t()(c.column, c.gapSm),
    children: [(0, s.jsx)(r.Text, {
      variant: "text-xs/semibold",
      children: o.Z.Messages.GAME_PROFILE_LINKS
    }), (0, s.jsx)("div", {
      className: c.row,
      children: l.filter(e => {
        let {
          category: l
        } = e;
        return d.includes(l)
      }).sort((e, l) => e.category - l.category).map(e => {
        let {
          category: l,
          url: n
        } = e, a = null;
        switch (l) {
          case i.p.OFFICIAL:
            a = (0, s.jsx)(r.GlobeEarthIcon, {});
            break;
          case i.p.TWITTER:
            a = (0, s.jsx)(r.XNeutralIcon, {});
            break;
          case i.p.YOUTUBE:
            a = (0, s.jsx)(r.YouTubeIcon, {})
        }
        return null != a ? (0, s.jsx)(r.Anchor, {
          href: n,
          target: "_blank",
          children: a
        }, n) : null
      })
    })]
  })
}