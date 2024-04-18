"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("82950"),
  r = a("623624"),
  o = a("650774"),
  u = a("981631"),
  d = a("921944"),
  c = a("689938"),
  f = a("241626");
class E extends s.PureComponent {
  render() {
    let {
      guild: e,
      memberCount: t,
      markAsDismissed: a
    } = this.props;
    return (0, n.jsx)(i.default, {
      guild: e,
      onDismissed: () => a(d.ContentDismissActionType.UNKNOWN),
      onClick: this.handleButtonClick,
      message: null == t || t < 30 ? c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_SMALL_GUILD : c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE,
      cta: c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_BUTTON,
      trackingSource: u.ChannelNoticeCtaSources.GUILD_SUBSCRIPTION_NOTICE,
      type: u.ChannelNoticeTypes.GUILD_BOOSTING,
      image: f,
      imageMarginX: 26
    })
  }
  constructor(...e) {
    var t, a, n;
    super(...e), t = this, a = "handleButtonClick", n = () => {
      let {
        guild: e
      } = this.props;
      (0, r.openGuildBoostingMarketingModal)({
        guildId: e.id,
        location: {
          section: u.AnalyticsSections.CHANNEL_NOTICE,
          object: u.AnalyticsObjects.SERVER_STATUS_CTA
        }
      })
    }, a in t ? Object.defineProperty(t, a, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = n
  }
}
t.default = l.default.connectStores([o.default], e => {
  let {
    guild: t
  } = e;
  return {
    memberCount: o.default.getMemberCount(t.id)
  }
})(E)