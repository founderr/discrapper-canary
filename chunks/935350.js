function t(e) {
    let t = e.regex,
        n = {
            $pattern: /[\w.\/]+/,
            built_in: ['action', 'bindattr', 'collection', 'component', 'concat', 'debugger', 'each', 'each-in', 'get', 'hash', 'if', 'in', 'input', 'link-to', 'loc', 'log', 'lookup', 'mut', 'outlet', 'partial', 'query-params', 'render', 'template', 'textarea', 'unbound', 'unless', 'view', 'with', 'yield']
        },
        r = {
            $pattern: /[\w.\/]+/,
            literal: ['true', 'false', 'undefined', 'null']
        },
        i = /""|"[^"]+"/,
        a = /''|'[^']+'/,
        o = /\[\]|\[[^\]]+\]/,
        s = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
        l = /(\.|\/)/,
        u = t.either(i, a, o, s),
        c = t.concat(t.optional(/\.|\.\/|\//), u, t.anyNumberOfTimes(t.concat(l, u))),
        d = t.concat('(', o, '|', s, ')(?==)'),
        _ = { begin: c },
        E = e.inherit(_, { keywords: r }),
        f = {
            begin: /\(/,
            end: /\)/
        },
        h = {
            className: 'attr',
            begin: d,
            relevance: 0,
            starts: {
                begin: /=/,
                end: /=/,
                starts: {
                    contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, E, f]
                }
            }
        },
        p = {
            begin: /as\s+\|/,
            keywords: { keyword: 'as' },
            end: /\|/,
            contains: [{ begin: /\w+/ }]
        },
        m = {
            contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, p, h, E, f],
            returnEnd: !0
        },
        I = e.inherit(_, {
            className: 'name',
            keywords: n,
            starts: e.inherit(m, { end: /\)/ })
        });
    f.contains = [I];
    let T = e.inherit(_, {
            keywords: n,
            className: 'name',
            starts: e.inherit(m, { end: /\}\}/ })
        }),
        g = e.inherit(_, {
            keywords: n,
            className: 'name'
        }),
        S = e.inherit(_, {
            className: 'name',
            keywords: n,
            starts: e.inherit(m, { end: /\}\}/ })
        });
    return {
        name: 'Handlebars',
        aliases: ['hbs', 'html.hbs', 'html.handlebars', 'htmlbars'],
        case_insensitive: !0,
        subLanguage: 'xml',
        contains: [
            {
                begin: /\\\{\{/,
                skip: !0
            },
            {
                begin: /\\\\(?=\{\{)/,
                skip: !0
            },
            e.COMMENT(/\{\{!--/, /--\}\}/),
            e.COMMENT(/\{\{!/, /\}\}/),
            {
                className: 'template-tag',
                begin: /\{\{\{\{(?!\/)/,
                end: /\}\}\}\}/,
                contains: [T],
                starts: {
                    end: /\{\{\{\{\//,
                    returnEnd: !0,
                    subLanguage: 'xml'
                }
            },
            {
                className: 'template-tag',
                begin: /\{\{\{\{\//,
                end: /\}\}\}\}/,
                contains: [g]
            },
            {
                className: 'template-tag',
                begin: /\{\{#/,
                end: /\}\}/,
                contains: [T]
            },
            {
                className: 'template-tag',
                begin: /\{\{(?=else\}\})/,
                end: /\}\}/,
                keywords: 'else'
            },
            {
                className: 'template-tag',
                begin: /\{\{(?=else if)/,
                end: /\}\}/,
                keywords: 'else if'
            },
            {
                className: 'template-tag',
                begin: /\{\{\//,
                end: /\}\}/,
                contains: [g]
            },
            {
                className: 'template-variable',
                begin: /\{\{\{/,
                end: /\}\}\}/,
                contains: [S]
            },
            {
                className: 'template-variable',
                begin: /\{\{/,
                end: /\}\}/,
                contains: [S]
            }
        ]
    };
}
e.exports = t;
