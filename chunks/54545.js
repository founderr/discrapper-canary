"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("888400"),
  s = n("718517"),
  o = n("333805"),
  a = n("782340");
class l extends o.default {
  _getMessageFromRateLimit(e) {
    let t = e.body.retry_after,
      n = (0, r.diffAsUnits)(0, t * s.default.Millis.SECOND);
    return (0, r.unitsAsStrings)(n, {
      days: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
      hours: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
      minutes: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
    })
  }
  constructor(e, t) {
    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
  }
}
var u = l