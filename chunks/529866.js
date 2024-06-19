let r;
n.d(e, {
  Cf: function() {
    return s
  },
  RU: function() {
    return a
  },
  kg: function() {
    return r
  }
});
var i = n(24716);
let a = ["debug", "info", "warn", "error", "log", "assert", "trace"];

function s(t) {
  if (!("console" in i.n2)) return t();
  let e = i.n2.console,
    n = {};
  a.forEach(t => {
    let r = e[t] && e[t].__sentry_original__;
    t in e && r && (n[t] = e[t], e[t] = r)
  });
  try {
    return t()
  } finally {
    Object.keys(n).forEach(t => {
      e[t] = n[t]
    })
  }
}

function o() {
  let t = !1,
    e = {
      enable: () => {
        t = !0
      },
      disable: () => {
        t = !1
      }
    };
  return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? a.forEach(n => {
    e[n] = (...e) => {
      t && s(() => {
        i.n2.console[n](`Sentry Logger [${n}]:`, ...e)
      })
    }
  }) : a.forEach(t => {
    e[t] = () => void 0
  }), e
}
"undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r = (0, i.YO)("logger", o) : r = o()