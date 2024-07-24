s.d(t, {
  Ke: function() {
return c;
  },
  NV: function() {
return l;
  },
  ZW: function() {
return o;
  }
}), s(47120), s(653041);
var n = s(915522),
  a = s(589983),
  i = s(648725);

function r(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let o = 'en-US';
class l {
  setLocale(e) {
this.currentLocale = e, this.intl = (0, n.d)({
  defaultLocale: this.defaultLocale,
  locale: e
}), this.emitLocaleChange(e);
  }
  emitLocaleChange(e) {
for (let t of this._localeSubscriptions)
  t(e);
  }
  formatToParts(e, t) {
if ('string' == typeof e)
  return [e];
let s = 'function' == typeof e ? e(this.currentLocale) : e;
if ('string' == typeof s)
  return [s];
let n = null != t ? {
    ...this.defaultRichTextElements,
    ...t
  } : this.defaultRichTextElements,
  i = s.formatToParts(this.intl.formatters, this.intl.formats, n),
  r = [],
  o = !1;
for (let e of i) {
  if (o && (o = e.type === a.du.literal)) {
    r[r.length - 1] += e.value;
    continue;
  }
  o = e.type === a.du.literal, r.push(e.value);
}
return r;
  }
  formatToPlainString(e, t) {
if ('string' == typeof e)
  return e;
let s = e(this.currentLocale);
return 'string' == typeof s ? s : s.formatToPlainString(this.intl.formatters, this.intl.formats, t);
  }
  constructor(e = o, t) {
r(this, 'defaultLocale', void 0), r(this, 'currentLocale', void 0), r(this, 'intl', void 0), r(this, 'defaultRichTextElements', void 0), r(this, '_localeSubscriptions', void 0), r(this, 'onLocaleChange', e => (this._localeSubscriptions.add(e), () => this._localeSubscriptions.delete(e))), this.defaultLocale = e, this.currentLocale = e, this.intl = (0, n.d)({
  defaultLocale: e,
  locale: e
}), this.defaultRichTextElements = t, this._localeSubscriptions = new Set();
  }
}

function c(e, t) {
  return new i.s(e, t);
}