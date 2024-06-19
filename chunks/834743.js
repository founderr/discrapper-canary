n(47120);
var i = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(82950),
  r = n(623624),
  o = n(650774),
  c = n(981631),
  u = n(921944),
  d = n(689938),
  E = n(241626);
class h extends s.PureComponent {
  render() {
    let {
      guild: e,
      memberCount: t,
      markAsDismissed: n
    } = this.props;
    return (0, i.jsx)(a.Z, {
      guild: e,
      onDismissed: () => n(u.L.UNKNOWN),
      onClick: this.handleButtonClick,
      message: null == t || t < 30 ? d.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_SMALL_GUILD : d.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE,
      cta: d.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_BUTTON,
      trackingSource: c.PsQ.GUILD_SUBSCRIPTION_NOTICE,
      type: c.vID.GUILD_BOOSTING,
      image: E,
      imageMarginX: 26
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "handleButtonClick", i = () => {
      let {
        guild: e
      } = this.props;
      (0, r.f)({
        guildId: e.id,
        location: {
          section: c.jXE.CHANNEL_NOTICE,
          object: c.qAy.SERVER_STATUS_CTA
        }
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = l.ZP.connectStores([o.Z], e => {
  let {
    guild: t
  } = e;
  return {
    memberCount: o.Z.getMemberCount(t.id)
  }
})(h)