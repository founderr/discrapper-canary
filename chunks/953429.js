r.d(e, {
  Hk: function() {
return h;
  },
  OI: function() {
return l;
  },
  mr: function() {
return c;
  },
  p6: function() {
return u;
  },
  uE: function() {
return f;
  }
});
var n = r(146150),
  i = r(789903),
  o = r(973682),
  a = [
'formatMatcher',
'timeZone',
'hour12',
'weekday',
'era',
'year',
'month',
'day',
'hour',
'minute',
'second',
'timeZoneName',
'hourCycle',
'dateStyle',
'timeStyle',
'calendar',
'numberingSystem',
'fractionalSecondDigits'
  ];

function s(t, e, r, o) {
  var s = t.locale,
u = t.formats,
c = t.onError,
h = t.timeZone;
  void 0 === o && (o = {});
  var l = o.format,
f = (0, n.pi)((0, n.pi)({}, h && {
  timeZone: h
}), l && (0, i.TB)(u, e, l, c)),
p = (0, i.L6)(o, a, f);
  return 'time' === e && !p.hour && !p.minute && !p.second && !p.timeStyle && !p.dateStyle && (p = (0, n.pi)((0, n.pi)({}, p), {
hour: 'numeric',
minute: 'numeric'
  })), r(s, p);
}

function u(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
r[n - 2] = arguments[n];
  var i = r[0],
a = r[1],
u = 'string' == typeof i ? new Date(i || 0) : i;
  try {
return s(t, 'date', e, void 0 === a ? {} : a).format(u);
  } catch (e) {
t.onError(new o.Qe('Error formatting date.', t.locale, e));
  }
  return String(u);
}

function c(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
r[n - 2] = arguments[n];
  var i = r[0],
a = r[1],
u = 'string' == typeof i ? new Date(i || 0) : i;
  try {
return s(t, 'time', e, void 0 === a ? {} : a).format(u);
  } catch (e) {
t.onError(new o.Qe('Error formatting time.', t.locale, e));
  }
  return String(u);
}

function h(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
r[n - 2] = arguments[n];
  var s = r[0],
u = r[1],
c = r[2],
h = t.timeZone,
l = t.locale,
f = t.onError,
p = (0, i.L6)(void 0 === c ? {} : c, a, h ? {
  timeZone: h
} : {});
  try {
return e(l, p).formatRange(s, u);
  } catch (e) {
f(new o.Qe('Error formatting date time range.', t.locale, e));
  }
  return String(s);
}

function l(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
r[n - 2] = arguments[n];
  var i = r[0],
a = r[1],
u = 'string' == typeof i ? new Date(i || 0) : i;
  try {
return s(t, 'date', e, void 0 === a ? {} : a).formatToParts(u);
  } catch (e) {
t.onError(new o.Qe('Error formatting date.', t.locale, e));
  }
  return [];
}

function f(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
r[n - 2] = arguments[n];
  var i = r[0],
a = r[1],
u = 'string' == typeof i ? new Date(i || 0) : i;
  try {
return s(t, 'time', e, void 0 === a ? {} : a).formatToParts(u);
  } catch (e) {
t.onError(new o.Qe('Error formatting time.', t.locale, e));
  }
  return [];
}