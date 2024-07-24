s.d(t, {
  P: function() {
return r;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(189002);
class r extends i.NV {
  format(e, t) {
return 'string' == typeof e ? this.formatToParts(e) : (0, n.jsx)(this.IntlMessage, {
  message: e,
  values: t
});
  }
  constructor(...e) {
var t, s, n;
super(...e), t = this, s = 'IntlMessage', n = e => {
  let {
    message: t,
    values: s
  } = e, n = a.useSyncExternalStore(this.onLocaleChange, () => this.currentLocale);
  return (a.useSyncExternalStore(t.onChange, () => t(n)), 'string' == typeof t) ? t : a.createElement(a.Fragment, void 0, this.formatToParts(t, s));
}, s in t ? Object.defineProperty(t, s, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[s] = n;
  }
}