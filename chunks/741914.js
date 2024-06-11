"use strict";
t.r(A);
var a = t("392711"),
  l = t.n(a),
  s = t("723454"),
  r = t("428595"),
  n = t("454585");
let i = l().omit(r.default.RULES, ["codeBlock", "heading"]),
  o = {
    ...s.default,
    parse: function(e, A, t) {
      var a;
      let l = s.default.parse(e, A, t),
        r = Math.min(6, (null !== (a = t.initialHeaderLevel) && void 0 !== a ? a : 3) + l.level);
      return {
        ...l,
        level: r
      }
    }
  },
  d = n.default.combineAndInjectMentionRule(i, [n.default.createReactRules(n.default.defaultReactRuleOptions), {
    header: o
  }]),
  u = n.default.reactParserFor(d);
A.default = u