"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var i = n("689988"),
  a = n("537325"),
  l = n("894887"),
  s = n("760797"),
  r = n("49111");
class o extends i.default {
  async handleChannelCreate(e) {
    let {
      channel: t
    } = e;
    (0, l.isEligibleForMidjourneyRedirect)(t) && (await (0, l.hasRedirectedToGuild)(s.MIDJOURNEY_GUILD_ID), (0, a.default)(r.Routes.CHANNEL(null, t.id)))
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_CREATE: this.handleChannelCreate
    }
  }
}
var u = new o