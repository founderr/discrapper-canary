"use strict";
l.r(t), l.d(t, {
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
var i = l("293810"),
  a = l("474936"),
  n = l("689938");

function s(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function r(e) {
  let {
    interval: t,
    interval_count: l
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
    count: l
  })
}

function o(e) {
  let {
    interval: t,
    interval_count: l
  } = e;
  switch (t) {
    case a.SubscriptionIntervalTypes.DAY:
      if (l > 0 && l % 7 == 0) return n.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: l / 7
      });
      return n.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: l
      });
    case a.SubscriptionIntervalTypes.MONTH:
      return n.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: l
      });
    case a.SubscriptionIntervalTypes.YEAR:
      return n.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: l
      })
  }
}

function c(e) {
  return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function d(e) {
  return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}