var s = n(392711),
  i = n.n(s),
  l = n(723454),
  a = n(428595),
  r = n(454585);
let o = i().omit(a.Z.RULES, ["codeBlock", "heading"]),
  c = {
    ...l.Z,
    parse: function(e, t, n) {
      var s;
      let i = l.Z.parse(e, t, n),
        a = Math.min(6, (null !== (s = n.initialHeaderLevel) && void 0 !== s ? s : 3) + i.level);
      return {
        ...i,
        level: a
      }
    }
  },
  u = r.Z.combineAndInjectMentionRule(o, [r.Z.createReactRules(r.Z.defaultReactRuleOptions), {
    header: c
  }]),
  d = r.Z.reactParserFor(u);
t.Z = d