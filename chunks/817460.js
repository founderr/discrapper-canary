S.d(e, {
  JE: function() {
    return l
  },
  ab: function() {
    return i
  },
  iG: function() {
    return I
  },
  lL: function() {
    return s
  },
  rC: function() {
    return r
  }
});
var _ = S(293810),
  t = S(474936),
  n = S(689938);

function i(E) {
  return "roles" in E ? "emoji-".concat(E.id) : "".concat(E.ref_type, "-").concat(E.emoji_id, "-").concat(E.name, "-").concat(E.ref_id)
}

function l(E) {
  let {
    interval: e,
    interval_count: S
  } = E;
  return (function(E) {
    switch (E) {
      case t.rV.DAY:
        return n.Z.Messages.DAY;
      case t.rV.MONTH:
        return n.Z.Messages.MONTH;
      case t.rV.YEAR:
        return n.Z.Messages.YEAR
    }
  })(e).format({
    count: S
  })
}

function I(E) {
  let {
    interval: e,
    interval_count: S
  } = E;
  switch (e) {
    case t.rV.DAY:
      if (S > 0 && S % 7 == 0) return n.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: S / 7
      });
      return n.Z.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: S
      });
    case t.rV.MONTH:
      return n.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: S
      });
    case t.rV.YEAR:
      return n.Z.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: S
      })
  }
}

function r(E) {
  return E.ref_type === _.Qs.CHANNEL
}

function s(E) {
  return E.ref_type === _.Qs.INTANGIBLE
}