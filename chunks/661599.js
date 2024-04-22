"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("230711"),
  i = a("82950"),
  r = a("981631"),
  o = a("689938"),
  u = a("510342");
class d extends s.PureComponent {
  render() {
    return (0, n.jsx)(i.default, {
      guild: this.props.guild,
      onClick: () => l.default.open(r.UserSettingsSections.ACCOUNT),
      message: o.default.Messages.TWO_FA_GUILD_MFA_WARNING_MESSAGE_WITH_SPACING.format(),
      cta: o.default.Messages.TWO_FA_GUILD_MFA_WARNING_RESOLVE_BUTTON,
      trackingSource: r.ChannelNoticeCtaSources.GUILD_MFA_WARNING,
      type: r.ChannelNoticeTypes.MFA_WARNING,
      image: u,
      imageMarginX: 54,
      undismissable: !0
    })
  }
}
t.default = d