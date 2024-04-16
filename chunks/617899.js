"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("904245"),
  r = a("944486"),
  o = a("82950"),
  u = a("981631"),
  d = a("921944"),
  c = a("689938"),
  f = a("589148");

function E(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class h extends s.PureComponent {
  render() {
    let e = "".concat(c.default.Messages.INVITE_NOTICE_MESSAGE, "\n").concat(c.default.Messages.INVITE_NOTICE_MESSAGE_PART_2);
    return (0, n.jsx)(o.default, {
      guild: this.props.guild,
      onDismissed: this.handleClose,
      onClick: this.handleInvite,
      message: e,
      cta: c.default.Messages.INVITE_PEOPLE,
      trackingSource: u.ChannelNoticeCtaSources.INVITE_NOTICE,
      type: u.ChannelNoticeTypes.INVITE,
      image: f,
      imageMarginX: 46
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleInvite", () => {
      let {
        guild: e
      } = this.props;
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("99387"), a.e("7654")]).then(a.bind(a, "560114"));
        return a => (0, n.jsx)(t, {
          ...a,
          guild: e,
          source: u.InstantInviteSources.INVITE_NOTICE
        })
      })
    }), E(this, "handleClose", () => {
      let e = r.default.getChannelId();
      this.props.markAsDismissed(d.ContentDismissActionType.UNKNOWN), null != e && i.default.sendBotMessage(e, c.default.Messages.HOW_TO_INVITE_OTHERS.format({
        invitePeople: c.default.Messages.INVITE_PEOPLE
      }))
    })
  }
}
t.default = h