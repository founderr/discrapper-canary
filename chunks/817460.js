"use strict";
i.r(s), i.d(s, {
  formatPlanInterval: function() {
    return S
  },
  formatPlanIntervalDuration: function() {
    return o
  },
  getBenefitKey: function() {
    return r
  },
  isChannelBenefit: function() {
    return _
  },
  isIntangibleBenefit: function() {
    return l
  }
});
var n = i("293810"),
  t = i("474936"),
  E = i("689938");

function r(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function S(e) {
  let {
    interval: s,
    interval_count: i
  } = e;
  return (function(e) {
    switch (e) {
      case t.SubscriptionIntervalTypes.DAY:
        return E.default.Messages.DAY;
      case t.SubscriptionIntervalTypes.MONTH:
        return E.default.Messages.MONTH;
      case t.SubscriptionIntervalTypes.YEAR:
        return E.default.Messages.YEAR
    }
  })(s).format({
    count: i
  })
}

function o(e) {
  let {
    interval: s,
    interval_count: i
  } = e;
  switch (s) {
    case t.SubscriptionIntervalTypes.DAY:
      if (i > 0 && i % 7 == 0) return E.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: i / 7
      });
      return E.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: i
      });
    case t.SubscriptionIntervalTypes.MONTH:
      return E.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: i
      });
    case t.SubscriptionIntervalTypes.YEAR:
      return E.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: i
      })
  }
}

function _(e) {
  return e.ref_type === n.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function l(e) {
  return e.ref_type === n.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}