function t(e) {
    let t = e.regex,
        n = /[a-zA-Z]\w*/,
        r = ['as', 'break', 'class', 'construct', 'continue', 'else', 'for', 'foreign', 'if', 'import', 'in', 'is', 'return', 'static', 'var', 'while'],
        i = ['true', 'false', 'null'],
        a = ['this', 'super'],
        o = ['Bool', 'Class', 'Fiber', 'Fn', 'List', 'Map', 'Null', 'Num', 'Object', 'Range', 'Sequence', 'String', 'System'],
        s = ['-', '~', /\*/, '%', /\.\.\./, /\.\./, /\+/, '<<', '>>', '>=', '<=', '<', '>', /\^/, /!=/, /!/, /\bis\b/, '==', '&&', '&', /\|\|/, /\|/, /\?:/, '='],
        l = {
            relevance: 0,
            match: t.concat(/\b(?!(if|while|for|else|super)\b)/, n, /(?=\s*[({])/),
            className: 'title.function'
        },
        u = {
            match: t.concat(t.either(t.concat(/\b(?!(if|while|for|else|super)\b)/, n), t.either(...s)), /(?=\s*\([^)]+\)\s*\{)/),
            className: 'title.function',
            starts: {
                contains: [
                    {
                        begin: /\(/,
                        end: /\)/,
                        contains: [
                            {
                                relevance: 0,
                                scope: 'params',
                                match: n
                            }
                        ]
                    }
                ]
            }
        },
        c = {
            variants: [
                {
                    match: [/class\s+/, n, /\s+is\s+/, n]
                },
                {
                    match: [/class\s+/, n]
                }
            ],
            scope: {
                2: 'title.class',
                4: 'title.class.inherited'
            },
            keywords: r
        },
        d = {
            relevance: 0,
            match: t.either(...s),
            className: 'operator'
        },
        _ = {
            className: 'string',
            begin: /"""/,
            end: /"""/
        },
        E = {
            className: 'property',
            begin: t.concat(/\./, t.lookahead(n)),
            end: n,
            excludeBegin: !0,
            relevance: 0
        },
        f = {
            relevance: 0,
            match: t.concat(/\b_/, n),
            scope: 'variable'
        },
        h = {
            relevance: 0,
            match: /\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,
            scope: 'title.class',
            keywords: { _: o }
        },
        p = e.C_NUMBER_MODE,
        m = {
            match: [n, /\s*/, /=/, /\s*/, /\(/, n, /\)\s*\{/],
            scope: {
                1: 'title.function',
                3: 'operator',
                6: 'params'
            }
        },
        I = e.COMMENT(/\/\*\*/, /\*\//, {
            contains: [
                {
                    match: /@[a-z]+/,
                    scope: 'doctag'
                },
                'self'
            ]
        }),
        T = {
            scope: 'subst',
            begin: /%\(/,
            end: /\)/,
            contains: [p, h, l, f, d]
        },
        g = {
            scope: 'string',
            begin: /"/,
            end: /"/,
            contains: [
                T,
                {
                    scope: 'char.escape',
                    variants: [{ match: /\\\\|\\["0%abefnrtv]/ }, { match: /\\x[0-9A-F]{2}/ }, { match: /\\u[0-9A-F]{4}/ }, { match: /\\U[0-9A-F]{8}/ }]
                }
            ]
        };
    T.contains.push(g);
    let S = [...r, ...a, ...i],
        A = {
            relevance: 0,
            match: t.concat('\\b(?!', S.join('|'), '\\b)', /[a-zA-Z_]\w*(?:[?!]|\b)/),
            className: 'variable'
        },
        v = {
            scope: 'comment',
            variants: [
                {
                    begin: [/#!?/, /[A-Za-z_]+(?=\()/],
                    beginScope: {},
                    keywords: { literal: i },
                    contains: [],
                    end: /\)/
                },
                {
                    begin: [/#!?/, /[A-Za-z_]+/],
                    beginScope: {},
                    end: /$/
                }
            ]
        };
    return {
        name: 'Wren',
        keywords: {
            keyword: r,
            'variable.language': a,
            literal: i
        },
        contains: [v, p, g, _, I, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, h, c, m, u, l, d, f, E, A]
    };
}
e.exports = t;
