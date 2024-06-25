n(47120);
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(904245),
  r = n(944486),
  o = n(82950),
  c = n(981631),
  u = n(921944),
  d = n(689938),
  E = n(589148);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class _ extends i.PureComponent {
  render() {
    let e = "".concat(d.Z.Messages.INVITE_NOTICE_MESSAGE, "\n").concat(d.Z.Messages.INVITE_NOTICE_MESSAGE_PART_2);
    return (0, s.jsx)(o.Z, {
      guild: this.props.guild,
      onDismissed: this.handleClose,
      onClick: this.handleInvite,
      message: e,
      cta: d.Z.Messages.INVITE_PEOPLE,
      trackingSource: c.PsQ.INVITE_NOTICE,
      type: c.vID.INVITE,
      image: E,
      imageMarginX: 46
    })
  }
  constructor(...e) {
    super(...e), h(this, "handleInvite", () => {
      let {
        guild: e
      } = this.props;
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("7654")]).then(n.bind(n, 560114));
        return n => (0, s.jsx)(t, {
          ...n,
          guild: e,
          source: c.t4x.INVITE_NOTICE
        })
      })
    }), h(this, "handleClose", () => {
      let e = r.Z.getChannelId();
      this.props.markAsDismissed(u.L.UNKNOWN), null != e && a.Z.sendBotMessage(e, d.Z.Messages.HOW_TO_INVITE_OTHERS.format({
        invitePeople: d.Z.Messages.INVITE_PEOPLE
      }))
    })
  }
}
t.Z = _