"use strict";
i.r(t), i.d(t, {
  formatPlanInterval: function() {
    return r
  },
  formatPlanIntervalDuration: function() {
    return o
  },
  getBenefitKey: function() {
    return s
  },
  isChannelBenefit: function() {
    return c
  },
  isIntangibleBenefit: function() {
    return d
  }
});
var l = i("293810"),
  a = i("474936"),
  n = i("689938");

function s(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function r(e) {
  let {
    interval: t,
    interval_count: i
  } = e;
  return (function(e) {
    switch (e) {
      case a.SubscriptionIntervalTypes.DAY:
        return n.default.Messages.DAY;
      case a.SubscriptionIntervalTypes.MONTH:
        return n.default.Messages.MONTH;
      case a.SubscriptionIntervalTypes.YEAR:
        return n.default.Messages.YEAR
    }
  })(t).format({
    count: i
  })
}

function o(e) {
  let {
    interval: t,
    interval_count: i
  } = e;
  switch (t) {
    case a.SubscriptionIntervalTypes.DAY:
      if (i > 0 && i % 7 == 0) return n.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: i / 7
      });
      return n.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: i
      });
    case a.SubscriptionIntervalTypes.MONTH:
      return n.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: i
      });
    case a.SubscriptionIntervalTypes.YEAR:
      return n.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: i
      })
  }
}

function c(e) {
  return e.ref_type === l.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function d(e) {
  return e.ref_type === l.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}