"use strict";
n.r(t);
var s = n("392711"),
  a = n.n(s),
  l = n("723454"),
  i = n("428595"),
  r = n("454585");
let o = a().omit(i.default.RULES, ["codeBlock", "heading"]),
  u = {
    ...l.default,
    parse: function(e, t, n) {
      var s;
      let a = l.default.parse(e, t, n),
        i = Math.min(6, (null !== (s = n.initialHeaderLevel) && void 0 !== s ? s : 3) + a.level);
      return {
        ...a,
        level: i
      }
    }
  },
  d = r.default.combineAndInjectMentionRule(o, [r.default.createReactRules(r.default.defaultReactRuleOptions), {
    header: u
  }]),
  c = r.default.reactParserFor(d);
t.default = c