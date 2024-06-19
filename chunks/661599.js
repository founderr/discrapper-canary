var i = n(735250),
  s = n(470079),
  l = n(230711),
  a = n(82950),
  r = n(981631),
  o = n(689938),
  c = n(510342);
class u extends s.PureComponent {
  render() {
    return (0, i.jsx)(a.Z, {
      guild: this.props.guild,
      onClick: () => l.Z.open(r.oAB.ACCOUNT),
      message: o.Z.Messages.TWO_FA_GUILD_MFA_WARNING_MESSAGE_WITH_SPACING.format(),
      cta: o.Z.Messages.TWO_FA_GUILD_MFA_WARNING_RESOLVE_BUTTON,
      trackingSource: r.PsQ.GUILD_MFA_WARNING,
      type: r.vID.MFA_WARNING,
      image: c,
      imageMarginX: 54,
      undismissable: !0
    })
  }
}
t.Z = u