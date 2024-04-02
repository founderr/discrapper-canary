var n = r("444675");
(t = e.exports = r("446974")).log = function() {
  return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
}, t.formatArgs = function(e) {
  var r = this.useColors;
  if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), r) {
    var n = "color: " + this.color;
    e.splice(1, 0, n, "color: inherit");
    var o = 0,
      a = 0;
    e[0].replace(/%[a-zA-Z%]/g, function(e) {
      "%%" !== e && (o++, "%c" === e && (a = o))
    }), e.splice(a, 0, n)
  }
}, t.save = function(e) {
  try {
    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
  } catch (e) {}
}, t.load = o, t.useColors = function() {
  return "undefined" != typeof window && !!window.process && "renderer" === window.process.type || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
}, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
  try {
    return window.localStorage
  } catch (e) {}
}(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];
t.formatters.j = function(e) {
  try {
    return JSON.stringify(e)
  } catch (e) {
    return "[UnexpectedJSONParseError]: " + e.message
  }
};

function o() {
  var e;
  try {
    e = t.storage.debug
  } catch (e) {}
  return !e && void 0 !== n && "env" in n && (e = n.env.DEBUG), e
}
t.enable(o())