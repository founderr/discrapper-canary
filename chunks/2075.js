"use strict";
n("70102");
var r = n("610679"),
  a = n("459703"),
  o = n("499603"),
  i = n("636578");

function u(e, t, n) {
  var r = "string" == typeof e ? u.__parse(e) : e;
  if (!(r && "messageFormatPattern" === r.type)) throw TypeError("A message must be provided as a String or AST.");
  n = this._mergeFormats(u.formats, n), a.defineProperty(this, "_locale", {
    value: this._resolveLocale(t)
  });
  var o = this._findPluralRuleFunction(this._locale),
    i = this._compilePattern(r, t, n, o),
    s = this;
  this.format = function(e) {
    return s._format(i, e)
  }
}
t.default = u, a.defineProperty(u, "formats", {
  enumerable: !0,
  value: {
    number: {
      currency: {
        style: "currency"
      },
      percent: {
        style: "percent"
      }
    },
    date: {
      short: {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
      },
      medium: {
        month: "short",
        day: "numeric",
        year: "numeric"
      },
      long: {
        month: "long",
        day: "numeric",
        year: "numeric"
      },
      full: {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    },
    time: {
      short: {
        hour: "numeric",
        minute: "numeric"
      },
      medium: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      }
    }
  }
}), a.defineProperty(u, "__localeData__", {
  value: a.objCreate(null)
}), a.defineProperty(u, "__addLocaleData", {
  value: function(e) {
    if (!(e && e.locale)) throw Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
    u.__localeData__[e.locale.toLowerCase()] = e
  }
}), a.defineProperty(u, "__parse", {
  value: i.default.parse
}), a.defineProperty(u, "defaultLocale", {
  enumerable: !0,
  writable: !0,
  value: void 0
}), u.prototype.resolvedOptions = function() {
  return {
    locale: this._locale
  }
}, u.prototype._compilePattern = function(e, t, n, r) {
  return new o.default(t, n, r).compile(e)
}, u.prototype._findPluralRuleFunction = function(e) {
  for (var t = u.__localeData__, n = t[e.toLowerCase()]; n;) {
    if (n.pluralRuleFunction) return n.pluralRuleFunction;
    n = n.parentLocale && t[n.parentLocale.toLowerCase()]
  }
  throw Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + e)
}, u.prototype._format = function(e, t) {
  var n, a, o, i, u, s = "";
  for (n = 0, a = e.length; n < a; n += 1) {
    if ("string" == typeof(o = e[n])) {
      s += o;
      continue
    }
    if (i = o.id, !(t && r.hop.call(t, i))) throw Error("A value must be provided for: " + i);
    u = t[i], o.options ? s += this._format(o.getOption(u), t) : s += o.format(u)
  }
  return s
}, u.prototype._mergeFormats = function(e, t) {
  var n, o, i = {};
  for (n in e) r.hop.call(e, n) && (i[n] = o = a.objCreate(e[n]), t && r.hop.call(t, n) && r.extend(o, t[n]));
  return i
}, u.prototype._resolveLocale = function(e) {
  "string" == typeof e && (e = [e]), e = (e || []).concat(u.defaultLocale);
  var t, n, r, a, o = u.__localeData__;
  for (t = 0, n = e.length; t < n; t += 1)
    for (r = e[t].toLowerCase().split("-"); r.length;) {
      if (a = o[r.join("-")]) return a.locale;
      r.pop()
    }
  var i = e.pop();
  throw Error("No locale data has been added to IntlMessageFormat for: " + e.join(", ") + ", or the default locale: " + i)
}