var i = n(392711),
  s = n.n(i),
  a = n(723454),
  r = n(428595),
  l = n(454585);
let o = s().omit(r.Z.RULES, [
'codeBlock',
'heading'
  ]),
  c = {
...a.Z,
parse: function(e, t, n) {
  var i;
  let s = a.Z.parse(e, t, n),
    r = Math.min(6, (null !== (i = n.initialHeaderLevel) && void 0 !== i ? i : 3) + s.level);
  return {
    ...s,
    level: r
  };
}
  },
  u = l.Z.combineAndInjectMentionRule(o, [
l.Z.createReactRules(l.Z.defaultReactRuleOptions),
{
  header: c
}
  ]),
  d = l.Z.reactParserFor(u);
t.Z = d;