t.d(n, {
  JE: function() {
    return o
  },
  ab: function() {
    return u
  },
  iG: function() {
    return s
  },
  lL: function() {
    return c
  },
  rC: function() {
    return a
  }
});
var i = t(293810),
  l = t(474936),
  r = t(689938);

function u(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function o(e) {
  let {
    interval: n,
    interval_count: t
  } = e;
  return (function(e) {
    switch (e) {
      case l.rV.DAY:
        return r.Z.Messages.DAY;
      case l.rV.MONTH:
        return r.Z.Messages.MONTH;
      case l.rV.YEAR:
        return r.Z.Messages.YEAR
    }
  })(n).format({
    count: t
  })
}

function s(e) {
  let {
    interval: n,
    interval_count: t
  } = e;
  switch (n) {
    case l.rV.DAY:
      if (t > 0 && t % 7 == 0) return r.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: t / 7
      });
      return r.Z.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: t
      });
    case l.rV.MONTH:
      return r.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: t
      });
    case l.rV.YEAR:
      return r.Z.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: t
      })
  }
}

function a(e) {
  return e.ref_type === i.Qs.CHANNEL
}

function c(e) {
  return e.ref_type === i.Qs.INTANGIBLE
}