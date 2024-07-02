var i = n(392711), a = n.n(i), s = n(723454), l = n(428595), r = n(454585);
let o = a().omit(l.Z.RULES, [
        'codeBlock',
        'heading'
    ]), c = {
        ...s.Z,
        parse: function (e, t, n) {
            var i;
            let a = s.Z.parse(e, t, n), l = Math.min(6, (null !== (i = n.initialHeaderLevel) && void 0 !== i ? i : 3) + a.level);
            return {
                ...a,
                level: l
            };
        }
    }, d = r.Z.combineAndInjectMentionRule(o, [
        r.Z.createReactRules(r.Z.defaultReactRuleOptions),
        { header: c }
    ]), u = r.Z.reactParserFor(d);
t.Z = u;
