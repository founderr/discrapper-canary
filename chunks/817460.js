"use strict";
s.r(t), s.d(t, {
  formatPlanInterval: function() {
    return T
  },
  formatPlanIntervalDuration: function() {
    return u
  },
  getBenefitKey: function() {
    return n
  },
  isChannelBenefit: function() {
    return i
  },
  isIntangibleBenefit: function() {
    return A
  }
});
var E = s("293810"),
  _ = s("474936"),
  a = s("689938");

function n(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function T(e) {
  let {
    interval: t,
    interval_count: s
  } = e;
  return (function(e) {
    switch (e) {
      case _.SubscriptionIntervalTypes.DAY:
        return a.default.Messages.DAY;
      case _.SubscriptionIntervalTypes.MONTH:
        return a.default.Messages.MONTH;
      case _.SubscriptionIntervalTypes.YEAR:
        return a.default.Messages.YEAR
    }
  })(t).format({
    count: s
  })
}

function u(e) {
  let {
    interval: t,
    interval_count: s
  } = e;
  switch (t) {
    case _.SubscriptionIntervalTypes.DAY:
      if (s > 0 && s % 7 == 0) return a.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: s / 7
      });
      return a.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: s
      });
    case _.SubscriptionIntervalTypes.MONTH:
      return a.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: s
      });
    case _.SubscriptionIntervalTypes.YEAR:
      return a.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: s
      })
  }
}

function i(e) {
  return e.ref_type === E.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function A(e) {
  return e.ref_type === E.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}