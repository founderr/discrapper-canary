"use strict";
n.r(t), n.d(t, {
  formatPlanInterval: function() {
    return r
  },
  formatPlanIntervalDuration: function() {
    return o
  },
  getBenefitKey: function() {
    return a
  },
  isChannelBenefit: function() {
    return u
  },
  isIntangibleBenefit: function() {
    return c
  }
});
var i = n("293810"),
  s = n("474936"),
  l = n("689938");

function a(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function r(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  return (function(e) {
    switch (e) {
      case s.SubscriptionIntervalTypes.DAY:
        return l.default.Messages.DAY;
      case s.SubscriptionIntervalTypes.MONTH:
        return l.default.Messages.MONTH;
      case s.SubscriptionIntervalTypes.YEAR:
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
    case s.SubscriptionIntervalTypes.DAY:
      if (n > 0 && n % 7 == 0) return l.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: n / 7
      });
      return l.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: n
      });
    case s.SubscriptionIntervalTypes.MONTH:
      return l.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      });
    case s.SubscriptionIntervalTypes.YEAR:
      return l.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      })
  }
}

function u(e) {
  return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function c(e) {
  return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}