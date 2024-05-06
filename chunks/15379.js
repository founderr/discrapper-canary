"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("411104");
var i = n("592125"),
  r = n("19780"),
  a = n("981631"),
  s = n("176505");

function o(e, t) {
  switch (e) {
    case a.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM:
      var n, o;
      let l = t.channelId;
      switch (l) {
        case s.StaticChannelRoute.CHANNEL_BROWSER:
        case s.StaticChannelRoute.GUILD_HOME:
        case s.StaticChannelRoute.GUILD_SHOP:
        case s.StaticChannelRoute.MEMBER_APPLICATIONS:
        case s.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        case s.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        case s.StaticChannelRoute.MEMBER_SAFETY:
        case s.StaticChannelRoute.GUILD_ONBOARDING:
          return
      }
      let u = null !== (o = null === (n = i.default.getChannel(l)) || void 0 === n ? void 0 : n.type) && void 0 !== o ? o : a.ChannelTypes.UNKNOWN;
      return {
        channelId: l, channelType: u, rtcState: r.default.getState(), timestamp: new Date
      };
    case a.AnalyticEvents.GUILD_VIEWED_CLICKSTREAM:
      return {
        guildId: t.guildId, rtcState: r.default.getState(), timestamp: new Date
      };
    default:
      throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
  }
}