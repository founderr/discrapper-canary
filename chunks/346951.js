var n = t(735250),
  i = t(470079),
  a = t(481060),
  l = t(707558),
  r = t(577720),
  o = t(689938),
  c = t(561521);
let E = () => [{
  icon: c.perkNewsletter,
  title: o.Z.Messages.HYPESQUAD_PERK_TITLE_NEWSLETTER,
  description: o.Z.Messages.HYPESQUAD_PERK_DESCRIPTION_NEWSLETTER
}, {
  icon: c.perkBadge,
  title: o.Z.Messages.HYPESQUAD_PERK_TITLE_PROFILE_BADGE,
  description: o.Z.Messages.HYPESQUAD_PERK_DESCRIPTION_PROFILE_BADGE
}, {
  icon: c.perkChallenges,
  title: o.Z.Messages.HYPESQUAD_PERK_TITLE_SQUAD_CHALLENGES,
  description: o.Z.Messages.HYPESQUAD_PERK_DESCRIPTION_SQUAD_CHALLENGES
}];
class d extends i.Component {
  render() {
    return (0, n.jsxs)("div", {
      className: c.features,
      children: [(0, n.jsx)(r.Z, {
        className: c.video,
        videoID: "SWzB1mx2o5k"
      }), (0, n.jsx)(a.Heading, {
        className: c.perksHeading,
        variant: "heading-sm/semibold",
        children: o.Z.Messages.HYPESQUAD_PERKS_HEADING
      }), (0, n.jsx)(l.Z, {
        features: E()
      })]
    })
  }
}
s.Z = d