"use strict";
n.r(t), n.d(t, {
  formatPlanInterval: function() {
    return a
  },
  formatPlanIntervalDuration: function() {
    return o
  },
  getBenefitKey: function() {
    return r
  },
  isChannelBenefit: function() {
    return u
  },
  isIntangibleBenefit: function() {
    return c
  }
});
var s = n("293810"),
  i = n("474936"),
  l = n("689938");

function r(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function a(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  return (function(e) {
    switch (e) {
      case i.SubscriptionIntervalTypes.DAY:
        return l.default.Messages.DAY;
      case i.SubscriptionIntervalTypes.MONTH:
        return l.default.Messages.MONTH;
      case i.SubscriptionIntervalTypes.YEAR:
        return l.default.Messages.YEAR
    }
  })(t).format({
    count: n
  })
}

function o(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  switch (t) {
    case i.SubscriptionIntervalTypes.DAY:
      if (n > 0 && n % 7 == 0) return l.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: n / 7
      });
      return l.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: n
      });
    case i.SubscriptionIntervalTypes.MONTH:
      return l.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      });
    case i.SubscriptionIntervalTypes.YEAR:
      return l.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      })
  }
}

function u(e) {
  return e.ref_type === s.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function c(e) {
  return e.ref_type === s.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}