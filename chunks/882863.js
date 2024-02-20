"use strict";

function r(e, t) {
  var n = e.length;
  for (e.push(t); 0 < n;) {
    var r = n - 1 >>> 1,
      a = e[r];
    if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
    else break
  }
}

function a(e) {
  return 0 === e.length ? null : e[0]
}

function o(e) {
  if (0 === e.length) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
      var u = 2 * (r + 1) - 1,
        s = e[u],
        l = u + 1,
        c = e[l];
      if (0 > i(s, n)) l < a && 0 > i(c, s) ? (e[r] = c, e[l] = n, r = l) : (e[r] = s, e[u] = n, r = u);
      else if (l < a && 0 > i(c, n)) e[r] = c, e[l] = n, r = l;
      else break
    }
  }
  return t
}

function i(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return 0 !== n ? n : e.id - t.id
}
if (n("424973"), n("860677"), "object" == typeof performance && "function" == typeof performance.now) {
  var u, s = performance;
  t.unstable_now = function() {
    return s.now()
  }
} else {
  var l = Date,
    c = l.now();
  t.unstable_now = function() {
    return l.now() - c
  }
}
var f = [],
  d = [],
  p = 1,
  h = null,
  m = 3,
  _ = !1,
  y = !1,
  g = !1,
  v = "function" == typeof setTimeout ? setTimeout : null,
  b = "function" == typeof clearTimeout ? clearTimeout : null,
  M = "undefined" != typeof setImmediate ? setImmediate : null;

function w(e) {
  for (var t = a(d); null !== t;) {
    if (null === t.callback) o(d);
    else if (t.startTime <= e) o(d), t.sortIndex = t.expirationTime, r(f, t);
    else break;
    t = a(d)
  }
}

function k(e) {
  if (g = !1, w(e), !y) {
    if (null !== a(f)) y = !0, C(L);
    else {
      var t = a(d);
      null !== t && H(k, t.startTime - e)
    }
  }
}

function L(e, n) {
  y = !1, g && (g = !1, b(T), T = -1), _ = !0;
  var r = m;
  try {
    for (w(n), h = a(f); null !== h && (!(h.expirationTime > n) || e && !E());) {
      var i = h.callback;
      if ("function" == typeof i) {
        h.callback = null, m = h.priorityLevel;
        var u = i(h.expirationTime <= n);
        n = t.unstable_now(), "function" == typeof u ? h.callback = u : h === a(f) && o(f), w(n)
      } else o(f);
      h = a(f)
    }
    if (null !== h) var s = !0;
    else {
      var l = a(d);
      null !== l && H(k, l.startTime - n), s = !1
    }
    return s
  } finally {
    h = null, m = r, _ = !1
  }
}
"undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
var D = !1,
  S = null,
  T = -1,
  Y = 5,
  x = -1;

function E() {
  return !(t.unstable_now() - x < Y)
}

function O() {
  if (null !== S) {
    var e = t.unstable_now();
    x = e;
    var n = !0;
    try {
      n = S(!0, e)
    } finally {
      n ? u() : (D = !1, S = null)
    }
  } else D = !1
}
if ("function" == typeof M) u = function() {
  M(O)
};
else if ("undefined" != typeof MessageChannel) {
  var P = new MessageChannel,
    j = P.port2;
  P.port1.onmessage = O, u = function() {
    j.postMessage(null)
  }
} else u = function() {
  v(O, 0)
};

function C(e) {
  S = e, D || (D = !0, u())
}

function H(e, n) {
  T = v(function() {
    e(t.unstable_now())
  }, n)
}
t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
  e.callback = null
}, t.unstable_continueExecution = function() {
  y || _ || (y = !0, C(L))
}, t.unstable_forceFrameRate = function(e) {
  0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < e ? Math.floor(1e3 / e) : 5
}, t.unstable_getCurrentPriorityLevel = function() {
  return m
}, t.unstable_getFirstCallbackNode = function() {
  return a(f)
}, t.unstable_next = function(e) {
  switch (m) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = m
  }
  var n = m;
  m = t;
  try {
    return e()
  } finally {
    m = n
  }
}, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3
  }
  var n = m;
  m = e;
  try {
    return t()
  } finally {
    m = n
  }
}, t.unstable_scheduleCallback = function(e, n, o) {
  var i = t.unstable_now();
  switch (o = "object" == typeof o && null !== o ? "number" == typeof(o = o.delay) && 0 < o ? i + o : i : i, e) {
    case 1:
      var u = -1;
      break;
    case 2:
      u = 250;
      break;
    case 5:
      u = 1073741823;
      break;
    case 4:
      u = 1e4;
      break;
    default:
      u = 5e3
  }
  return u = o + u, e = {
    id: p++,
    callback: n,
    priorityLevel: e,
    startTime: o,
    expirationTime: u,
    sortIndex: -1
  }, o > i ? (e.sortIndex = o, r(d, e), null === a(f) && e === a(d) && (g ? (b(T), T = -1) : g = !0, H(k, o - i))) : (e.sortIndex = u, r(f, e), y || _ || (y = !0, C(L))), e
}, t.unstable_shouldYield = E, t.unstable_wrapCallback = function(e) {
  var t = m;
  return function() {
    var n = m;
    m = t;
    try {
      return e.apply(this, arguments)
    } finally {
      m = n
    }
  }
}