"use strict";
var a = {
  linear: function(e, t, n, a) {
    return (n - t) * e / a + t
  },
  easeInQuad: function(e, t, n, a) {
    return (n - t) * (e /= a) * e + t
  },
  easeOutQuad: function(e, t, n, a) {
    return -(n - t) * (e /= a) * (e - 2) + t
  },
  easeInOutQuad: function(e, t, n, a) {
    var r = n - t;
    return (e /= a / 2) < 1 ? r / 2 * e * e + t : -r / 2 * (--e * (e - 2) - 1) + t
  },
  easeInCubic: function(e, t, n, a) {
    return (n - t) * (e /= a) * e * e + t
  },
  easeOutCubic: function(e, t, n, a) {
    return (n - t) * ((e = e / a - 1) * e * e + 1) + t
  },
  easeInOutCubic: function(e, t, n, a) {
    var r = n - t;
    return (e /= a / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t
  },
  easeInQuart: function(e, t, n, a) {
    return (n - t) * (e /= a) * e * e * e + t
  },
  easeOutQuart: function(e, t, n, a) {
    return -(n - t) * ((e = e / a - 1) * e * e * e - 1) + t
  },
  easeInOutQuart: function(e, t, n, a) {
    var r = n - t;
    return (e /= a / 2) < 1 ? r / 2 * e * e * e * e + t : -r / 2 * ((e -= 2) * e * e * e - 2) + t
  },
  easeInQuint: function(e, t, n, a) {
    return (n - t) * (e /= a) * e * e * e * e + t
  },
  easeOutQuint: function(e, t, n, a) {
    return (n - t) * ((e = e / a - 1) * e * e * e * e + 1) + t
  },
  easeInOutQuint: function(e, t, n, a) {
    var r = n - t;
    return (e /= a / 2) < 1 ? r / 2 * e * e * e * e * e + t : r / 2 * ((e -= 2) * e * e * e * e + 2) + t
  },
  easeInSine: function(e, t, n, a) {
    var r = n - t;
    return -r * Math.cos(e / a * (Math.PI / 2)) + r + t
  },
  easeOutSine: function(e, t, n, a) {
    return (n - t) * Math.sin(e / a * (Math.PI / 2)) + t
  },
  easeInOutSine: function(e, t, n, a) {
    return -(n - t) / 2 * (Math.cos(Math.PI * e / a) - 1) + t
  },
  easeInExpo: function(e, t, n, a) {
    return 0 == e ? t : (n - t) * Math.pow(2, 10 * (e / a - 1)) + t
  },
  easeOutExpo: function(e, t, n, a) {
    var r = n - t;
    return e == a ? t + r : r * (-Math.pow(2, -10 * e / a) + 1) + t
  },
  easeInOutExpo: function(e, t, n, a) {
    var r = n - t;
    return 0 === e ? t : e === a ? t + r : (e /= a / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + t : r / 2 * (-Math.pow(2, -10 * --e) + 2) + t
  },
  easeInCirc: function(e, t, n, a) {
    return -(n - t) * (Math.sqrt(1 - (e /= a) * e) - 1) + t
  },
  easeOutCirc: function(e, t, n, a) {
    return (n - t) * Math.sqrt(1 - (e = e / a - 1) * e) + t
  },
  easeInOutCirc: function(e, t, n, a) {
    var r = n - t;
    return (e /= a / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + t : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
  },
  easeInElastic: function(e, t, n, a) {
    var r, i, l, s = n - t;
    return (l = 1.70158, i = 0, r = s, 0 === e) ? t : 1 == (e /= a) ? t + s : (!i && (i = .3 * a), r < Math.abs(s) ? (r = s, l = i / 4) : l = i / (2 * Math.PI) * Math.asin(s / r), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - l) * (2 * Math.PI) / i)) + t)
  },
  easeOutElastic: function(e, t, n, a) {
    var r, i, l, s = n - t;
    return (l = 1.70158, i = 0, r = s, 0 === e) ? t : 1 == (e /= a) ? t + s : (!i && (i = .3 * a), r < Math.abs(s) ? (r = s, l = i / 4) : l = i / (2 * Math.PI) * Math.asin(s / r), r * Math.pow(2, -10 * e) * Math.sin((e * a - l) * (2 * Math.PI) / i) + s + t)
  },
  easeInOutElastic: function(e, t, n, a) {
    var r, i, l, s = n - t;
    return (l = 1.70158, i = 0, r = s, 0 === e) ? t : 2 == (e /= a / 2) ? t + s : (!i && (i = a * (.3 * 1.5)), r < Math.abs(s) ? (r = s, l = i / 4) : l = i / (2 * Math.PI) * Math.asin(s / r), e < 1) ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - l) * (2 * Math.PI) / i)) + t : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - l) * (2 * Math.PI) / i) * .5 + s + t
  },
  easeInBack: function(e, t, n, a, r) {
    return void 0 === r && (r = 1.70158), (n - t) * (e /= a) * e * ((r + 1) * e - r) + t
  },
  easeOutBack: function(e, t, n, a, r) {
    return void 0 === r && (r = 1.70158), (n - t) * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
  },
  easeInOutBack: function(e, t, n, a, r) {
    var i = n - t;
    return (void 0 === r && (r = 1.70158), (e /= a / 2) < 1) ? i / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : i / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
  },
  easeInBounce: function(e, t, n, r) {
    var i, l = n - t;
    return i = a.easeOutBounce(r - e, 0, l, r), l - i + t
  },
  easeOutBounce: function(e, t, n, a) {
    var r = n - t;
    if ((e /= a) < 1 / 2.75) return r * (7.5625 * e * e) + t;
    if (e < 2 / 2.75) return r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t;
    if (e < 2.5 / 2.75) return r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t;
    else return r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
  },
  easeInOutBounce: function(e, t, n, r) {
    var i, l = n - t;
    return e < r / 2 ? .5 * (i = a.easeInBounce(2 * e, 0, l, r)) + t : .5 * (i = a.easeOutBounce(2 * e - r, 0, l, r)) + .5 * l + t
  }
};
e.exports = a