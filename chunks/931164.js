"use strict";
t.r(A), t.d(A, {
  default: function() {
    return c
  }
});
var a = t("917351"),
  n = t.n(a),
  l = t("270926"),
  r = t("888198"),
  s = t("367376");
let o = n.omit(r.default.RULES, ["codeBlock", "heading"]),
  i = {
    ...l.default,
    parse: function(e, A, t) {
      var a;
      let n = l.default.parse(e, A, t),
        r = null !== (a = t.initialHeaderLevel) && void 0 !== a ? a : 3,
        s = Math.min(6, r + n.level);
      return {
        ...n,
        level: s
      }
    }
  },
  d = s.default.combineAndInjectMentionRule(o, [s.default.createReactRules(s.default.defaultReactRuleOptions), {
    header: i
  }]),
  u = s.default.reactParserFor(d);
var c = u