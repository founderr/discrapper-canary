"use strict";
n("854508"), n("424973"), e.exports = function(e, t, r, i, o, s) {
  var a, c, u, l, d = [],
    f = r.type;
  if ("keypress" === f && !(r.code && "Arrow" === r.code.slice(0, 5)) && (this.callbacks["any-character"] || []).forEach(function(e) {
      d.push(e)
    }), !this.callbacks[e]) return d;
  for (u = n("275750"), "keyup" === f && u(e) && (t = [e]), a = 0; a < this.callbacks[e].length; ++a) {
    if (c = this.callbacks[e][a], !!i || !c.seq || this.sequenceLevels[c.seq] === c.level) {
      if (f === c.action && (l = n("164788"), "keypress" === f && !r.metaKey && !r.ctrlKey || l(t, c.modifiers))) {
        var p = !i && c.combo === o,
          h = i && c.seq === i && c.level === s;
        (p || h) && this.callbacks[e].splice(a, 1), d.push(c)
      }
    }
  }
  return d
}