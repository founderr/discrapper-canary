"use strict";
var e = {
  linear: function(t, n, r, e) {
    return (r - n) * t / e + n
  },
  easeInQuad: function(t, n, r, e) {
    return (r - n) * (t /= e) * t + n
  },
  easeOutQuad: function(t, n, r, e) {
    return -(r - n) * (t /= e) * (t - 2) + n
  },
  easeInOutQuad: function(t, n, r, e) {
    var u = r - n;
    return (t /= e / 2) < 1 ? u / 2 * t * t + n : -u / 2 * (--t * (t - 2) - 1) + n
  },
  easeInCubic: function(t, n, r, e) {
    return (r - n) * (t /= e) * t * t + n
  },
  easeOutCubic: function(t, n, r, e) {
    return (r - n) * ((t = t / e - 1) * t * t + 1) + n
  },
  easeInOutCubic: function(t, n, r, e) {
    var u = r - n;
    return (t /= e / 2) < 1 ? u / 2 * t * t * t + n : u / 2 * ((t -= 2) * t * t + 2) + n
  },
  easeInQuart: function(t, n, r, e) {
    return (r - n) * (t /= e) * t * t * t + n
  },
  easeOutQuart: function(t, n, r, e) {
    return -(r - n) * ((t = t / e - 1) * t * t * t - 1) + n
  },
  easeInOutQuart: function(t, n, r, e) {
    var u = r - n;
    return (t /= e / 2) < 1 ? u / 2 * t * t * t * t + n : -u / 2 * ((t -= 2) * t * t * t - 2) + n
  },
  easeInQuint: function(t, n, r, e) {
    return (r - n) * (t /= e) * t * t * t * t + n
  },
  easeOutQuint: function(t, n, r, e) {
    return (r - n) * ((t = t / e - 1) * t * t * t * t + 1) + n
  },
  easeInOutQuint: function(t, n, r, e) {
    var u = r - n;
    return (t /= e / 2) < 1 ? u / 2 * t * t * t * t * t + n : u / 2 * ((t -= 2) * t * t * t * t + 2) + n
  },
  easeInSine: function(t, n, r, e) {
    var u = r - n;
    return -u * Math.cos(t / e * (Math.PI / 2)) + u + n
  },
  easeOutSine: function(t, n, r, e) {
    return (r - n) * Math.sin(t / e * (Math.PI / 2)) + n
  },
  easeInOutSine: function(t, n, r, e) {
    return -(r - n) / 2 * (Math.cos(Math.PI * t / e) - 1) + n
  },
  easeInExpo: function(t, n, r, e) {
    return 0 == t ? n : (r - n) * Math.pow(2, 10 * (t / e - 1)) + n
  },
  easeOutExpo: function(t, n, r, e) {
    var u = r - n;
    return t == e ? n + u : u * (-Math.pow(2, -10 * t / e) + 1) + n
  },
  easeInOutExpo: function(t, n, r, e) {
    var u = r - n;
    return 0 === t ? n : t === e ? n + u : (t /= e / 2) < 1 ? u / 2 * Math.pow(2, 10 * (t - 1)) + n : u / 2 * (-Math.pow(2, -10 * --t) + 2) + n
  },
  easeInCirc: function(t, n, r, e) {
    return -(r - n) * (Math.sqrt(1 - (t /= e) * t) - 1) + n
  },
  easeOutCirc: function(t, n, r, e) {
    return (r - n) * Math.sqrt(1 - (t = t / e - 1) * t) + n
  },
  easeInOutCirc: function(t, n, r, e) {
    var u = r - n;
    return (t /= e / 2) < 1 ? -u / 2 * (Math.sqrt(1 - t * t) - 1) + n : u / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
  },
  easeInElastic: function(t, n, r, e) {
    var u, a, o, i = r - n;
    return (o = 1.70158, a = 0, u = i, 0 === t) ? n : 1 == (t /= e) ? n + i : (!a && (a = .3 * e), u < Math.abs(i) ? (u = i, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(i / u), -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * e - o) * (2 * Math.PI) / a)) + n)
  },
  easeOutElastic: function(t, n, r, e) {
    var u, a, o, i = r - n;
    return (o = 1.70158, a = 0, u = i, 0 === t) ? n : 1 == (t /= e) ? n + i : (!a && (a = .3 * e), u < Math.abs(i) ? (u = i, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(i / u), u * Math.pow(2, -10 * t) * Math.sin((t * e - o) * (2 * Math.PI) / a) + i + n)
  },
  easeInOutElastic: function(t, n, r, e) {
    var u, a, o, i = r - n;
    return (o = 1.70158, a = 0, u = i, 0 === t) ? n : 2 == (t /= e / 2) ? n + i : (!a && (a = e * (.3 * 1.5)), u < Math.abs(i) ? (u = i, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(i / u), t < 1) ? -.5 * (u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * e - o) * (2 * Math.PI) / a)) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * e - o) * (2 * Math.PI) / a) * .5 + i + n
  },
  easeInBack: function(t, n, r, e, u) {
    return void 0 === u && (u = 1.70158), (r - n) * (t /= e) * t * ((u + 1) * t - u) + n
  },
  easeOutBack: function(t, n, r, e, u) {
    return void 0 === u && (u = 1.70158), (r - n) * ((t = t / e - 1) * t * ((u + 1) * t + u) + 1) + n
  },
  easeInOutBack: function(t, n, r, e, u) {
    var a = r - n;
    return (void 0 === u && (u = 1.70158), (t /= e / 2) < 1) ? a / 2 * (t * t * (((u *= 1.525) + 1) * t - u)) + n : a / 2 * ((t -= 2) * t * (((u *= 1.525) + 1) * t + u) + 2) + n
  },
  easeInBounce: function(t, n, r, u) {
    var a, o = r - n;
    return a = e.easeOutBounce(u - t, 0, o, u), o - a + n
  },
  easeOutBounce: function(t, n, r, e) {
    var u = r - n;
    if ((t /= e) < 1 / 2.75) return u * (7.5625 * t * t) + n;
    if (t < 2 / 2.75) return u * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n;
    if (t < 2.5 / 2.75) return u * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n;
    else return u * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
  },
  easeInOutBounce: function(t, n, r, u) {
    var a, o = r - n;
    return t < u / 2 ? .5 * (a = e.easeInBounce(2 * t, 0, o, u)) + n : .5 * (a = e.easeOutBounce(2 * t - u, 0, o, u)) + .5 * o + n
  }
};
t.exports = e