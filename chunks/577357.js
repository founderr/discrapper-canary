"use strict";
E.r(t), E.d(t, {
  getBenefitKey: function() {
    return T
  },
  formatPlanInterval: function() {
    return n
  },
  formatPlanIntervalDuration: function() {
    return A
  },
  isChannelBenefit: function() {
    return u
  },
  isIntangibleBenefit: function() {
    return I
  }
});
var _ = E("677795"),
  s = E("646718"),
  a = E("782340");

function T(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function n(e) {
  let {
    interval: t,
    interval_count: E
  } = e;
  return (function(e) {
    switch (e) {
      case s.SubscriptionIntervalTypes.DAY:
        return a.default.Messages.DAY;
      case s.SubscriptionIntervalTypes.MONTH:
        return a.default.Messages.MONTH;
      case s.SubscriptionIntervalTypes.YEAR:
        return a.default.Messages.YEAR
    }
  })(t).format({
    count: E
  })
}

function A(e) {
  let {
    interval: t,
    interval_count: E
  } = e;
  switch (t) {
    case s.SubscriptionIntervalTypes.DAY:
      if (E > 0 && E % 7 == 0) return a.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: E / 7
      });
      return a.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: E
      });
    case s.SubscriptionIntervalTypes.MONTH:
      return a.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: E
      });
    case s.SubscriptionIntervalTypes.YEAR:
      return a.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: E
      })
  }
}

function u(e) {
  return e.ref_type === _.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function I(e) {
  return e.ref_type === _.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}