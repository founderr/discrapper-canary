r.d(e, {
  w: function() {
return l;
  }
});
var n = r(146150),
  i = r(28866),
  o = r(670458),
  a = r(973682),
  s = r(859159);

function u(t, e) {
  return Object.keys(t).reduce(function(r, i) {
return r[i] = (0, n.pi)({
  timeZone: e
}, t[i]), r;
  }, {});
}

function c(t, e) {
  return Object.keys((0, n.pi)((0, n.pi)({}, t), e)).reduce(function(r, i) {
return r[i] = (0, n.pi)((0, n.pi)({}, t[i] || {}), e[i] || {}), r;
  }, {});
}

function h(t, e) {
  if (!e)
return t;
  var r = o.C.formats;
  return (0, n.pi)((0, n.pi)((0, n.pi)({}, r), t), {
date: c(u(r.date, e), u(t.date || {}, e)),
time: c(u(r.time, e), u(t.time || {}, e))
  });
}
var l = function(t, e, r, o, u) {
  var c = t.locale,
l = t.formats,
f = t.messages,
p = t.defaultLocale,
m = t.defaultFormats,
d = t.fallbackOnEmptyString,
v = t.onError,
g = t.timeZone,
b = t.defaultRichTextElements;
  void 0 === r && (r = {
id: ''
  });
  var E = r.id,
y = r.defaultMessage;
  (0, i.kG)(!!E, '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue');
  var T = String(E),
A = f && Object.prototype.hasOwnProperty.call(f, T) && f[T];
  if (Array.isArray(A) && 1 === A.length && A[0].type === s.wD.literal)
return A[0].value;
  if (!o && A && 'string' == typeof A && !b)
return A.replace(/'\{(.*?)\}'/gi, '{$1}');
  if (o = (0, n.pi)((0, n.pi)({}, b), o || {}), l = h(l, g), m = h(m, g), !A) {
if (!1 === d && '' === A)
  return A;
if ((!y || c && c.toLowerCase() !== p.toLowerCase()) && v(new a.$6(r, c)), y)
  try {
    var _ = e.getMessageFormat(y, p, m, u);
    return _.format(o);
  } catch (t) {
    return v(new a.X9('Error formatting default message for: "'.concat(T, '", rendering default message verbatim'), c, r, t)), 'string' == typeof y ? y : T;
  }
return T;
  }
  try {
var _ = e.getMessageFormat(A, c, l, (0, n.pi)({
  formatters: e
}, u || {}));
return _.format(o);
  } catch (t) {
v(new a.X9('Error formatting message: "'.concat(T, '", using ').concat(y ? 'default message' : 'id', ' as fallback.'), c, r, t));
  }
  if (y)
try {
  var _ = e.getMessageFormat(y, p, m, u);
  return _.format(o);
} catch (t) {
  v(new a.X9('Error formatting the default message for: "'.concat(T, '", rendering message verbatim'), c, r, t));
}
  return 'string' == typeof A ? A : 'string' == typeof y ? y : T;
};