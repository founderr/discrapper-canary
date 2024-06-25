var n = t(392711),
  a = t.n(n),
  s = t(723454),
  r = t(428595),
  l = t(454585);
let o = a().omit(r.Z.RULES, ["codeBlock", "heading"]),
  i = {
    ...s.Z,
    parse: function(e, A, t) {
      var n;
      let a = s.Z.parse(e, A, t),
        r = Math.min(6, (null !== (n = t.initialHeaderLevel) && void 0 !== n ? n : 3) + a.level);
      return {
        ...a,
        level: r
      }
    }
  },
  d = l.Z.combineAndInjectMentionRule(o, [l.Z.createReactRules(l.Z.defaultReactRuleOptions), {
    header: i
  }]),
  c = l.Z.reactParserFor(d);
A.Z = c