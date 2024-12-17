var i = r(477660),
    a = r.n(i),
    s = r(777547);
let o = /\n$/,
    l = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
    u = {
        order: a().defaultRules.heading.order,
        requiredFirstCharacters: ['-'],
        match: (e, n, r) => {
            let { showSubtextMarkdown: a } = s.m.getCurrentConfig({ location: 'MarkupSubtextRule' });
            return a ? (null == r || '' === r || null != r.match(o) ? (0, i.anyScopeRegex)(l)(e, n, r) : null) : null;
        },
        parse: function (e, n, r) {
            return { content: (0, i.parseInline)(n, e[1].trim(), r) };
        }
    };
n.Z = u;
