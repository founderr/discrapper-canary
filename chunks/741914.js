var i = n(392711),
    r = n.n(i),
    l = n(723454),
    a = n(428595),
    o = n(454585);
let s = r().omit(a.Z.RULES, ['codeBlock', 'heading']),
    c = {
        ...l.Z,
        parse: function (e, t, n) {
            var i;
            let r = l.Z.parse(e, t, n),
                a = Math.min(6, (null !== (i = n.initialHeaderLevel) && void 0 !== i ? i : 3) + r.level);
            return {
                ...r,
                level: a
            };
        }
    },
    d = o.Z.combineAndInjectMentionRule(s, [o.Z.createReactRules(o.Z.defaultReactRuleOptions), { header: c }]),
    u = o.Z.reactParserFor(d);
t.Z = u;
