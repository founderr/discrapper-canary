var r = n(392711),
    i = n.n(r),
    a = n(723454),
    o = n(428595),
    s = n(454585);
let l = i().omit(o.Z.RULES, ['codeBlock', 'heading']),
    u = {
        ...a.Z,
        parse: function (e, t, n) {
            var r;
            let i = a.Z.parse(e, t, n),
                o = Math.min(6, (null !== (r = n.initialHeaderLevel) && void 0 !== r ? r : 3) + i.level);
            return {
                ...i,
                level: o
            };
        }
    },
    c = s.Z.combineAndInjectMentionRule(l, [s.Z.createReactRules(s.Z.defaultReactRuleOptions), { header: u }]),
    d = s.Z.reactParserFor(c);
t.Z = d;
