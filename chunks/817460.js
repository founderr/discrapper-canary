"use strict";
s.r(t), s.d(t, {
  formatPlanInterval: function() {
    return l
  },
  formatPlanIntervalDuration: function() {
    return _
  },
  getBenefitKey: function() {
    return E
  },
  isChannelBenefit: function() {
    return r
  },
  isIntangibleBenefit: function() {
    return u
  }
});
var a = s("293810"),
  n = s("474936"),
  i = s("689938");

function E(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function l(e) {
  let {
    interval: t,
    interval_count: s
  } = e;
  return (function(e) {
    switch (e) {
      case n.SubscriptionIntervalTypes.DAY:
        return i.default.Messages.DAY;
      case n.SubscriptionIntervalTypes.MONTH:
        return i.default.Messages.MONTH;
      case n.SubscriptionIntervalTypes.YEAR:
        return i.default.Messages.YEAR
    }
  })(t).format({
    count: s
  })
}

function _(e) {
  let {
    interval: t,
    interval_count: s
  } = e;
  switch (t) {
    case n.SubscriptionIntervalTypes.DAY:
      if (s > 0 && s % 7 == 0) return i.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: s / 7
      });
      return i.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: s
      });
    case n.SubscriptionIntervalTypes.MONTH:
      return i.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: s
      });
    case n.SubscriptionIntervalTypes.YEAR:
      return i.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: s
      })
  }
}

function r(e) {
  return e.ref_type === a.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function u(e) {
  return e.ref_type === a.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}