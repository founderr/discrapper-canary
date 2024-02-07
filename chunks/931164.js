"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("917351"),
  l = n.n(s),
  a = n("270926"),
  i = n("888198"),
  r = n("367376");
let o = l.omit(i.default.RULES, ["codeBlock", "heading"]),
  u = {
    ...a.default,
    parse: function(e, t, n) {
      var s;
      let l = a.default.parse(e, t, n),
        i = null !== (s = n.initialHeaderLevel) && void 0 !== s ? s : 3,
        r = Math.min(6, i + l.level);
      return {
        ...l,
        level: r
      }
    }
  },
  d = r.default.combineAndInjectMentionRule(o, [r.default.createReactRules(r.default.defaultReactRuleOptions), {
    header: u
  }]),
  c = r.default.reactParserFor(d);
var E = c