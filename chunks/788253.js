"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
});
var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  },
  o = s(r("57229")),
  a = s(r("239680")),
  i = s(r("326274"));

function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var l = void 0;
t.default = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = (0, o.default)();
  if (!l && (l = (0, a.default)(s)), t.events) throw Error("Event handlers cannot be overwritten.");
  if ("string" == typeof e && !document.getElementById(e)) throw Error('Element "' + e + '" does not exist.');
  t.events = i.default.proxyEvents(s);
  var c = new Promise(function(r) {
      (void 0 === e ? "undefined" : n(e)) === "object" && e.playVideo instanceof Function ? r(e) : l.then(function(n) {
        var o = new n.Player(e, t);
        return s.on("ready", function() {
          r(o)
        }), null
      })
    }),
    u = i.default.promisifyPlayer(c, r);
  return u.on = s.on, u.off = s.off, u
}, e.exports = t.default