function n(e) {
    let n = "[a-z'][a-zA-Z0-9_']*",
        r = '(' + n + ':' + n + '|' + n + ')',
        i = {
            keyword: 'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor',
            literal: 'false true'
        },
        a = e.COMMENT('%', '$'),
        s = {
            className: 'number',
            begin: '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
            relevance: 0
        },
        o = { begin: 'fun\\s+' + n + '/\\d+' },
        l = {
            begin: r + '\\(',
            end: '\\)',
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    begin: r,
                    relevance: 0
                },
                {
                    begin: '\\(',
                    end: '\\)',
                    endsWithParent: !0,
                    returnEnd: !0,
                    relevance: 0
                }
            ]
        },
        u = {
            begin: /\{/,
            end: /\}/,
            relevance: 0
        },
        c = {
            begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
            relevance: 0
        },
        d = {
            begin: '[A-Z][a-zA-Z0-9_]*',
            relevance: 0
        },
        f = {
            begin: '#' + e.UNDERSCORE_IDENT_RE,
            relevance: 0,
            returnBegin: !0,
            contains: [
                {
                    begin: '#' + e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                },
                {
                    begin: /\{/,
                    end: /\}/,
                    relevance: 0
                }
            ]
        },
        _ = {
            beginKeywords: 'fun receive if try case',
            end: 'end',
            keywords: i
        };
    _.contains = [a, o, e.inherit(e.APOS_STRING_MODE, { className: '' }), _, l, e.QUOTE_STRING_MODE, s, u, c, d, f];
    let h = [a, o, _, l, e.QUOTE_STRING_MODE, s, u, c, d, f];
    (l.contains[1].contains = h), (u.contains = h), (f.contains[1].contains = h);
    let p = ['-module', '-record', '-undef', '-export', '-ifdef', '-ifndef', '-author', '-copyright', '-doc', '-vsn', '-import', '-include', '-include_lib', '-compile', '-define', '-else', '-endif', '-file', '-behaviour', '-behavior', '-spec'],
        m = {
            className: 'params',
            begin: '\\(',
            end: '\\)',
            contains: h
        };
    return {
        name: 'Erlang',
        aliases: ['erl'],
        keywords: i,
        illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
        contains: [
            {
                className: 'function',
                begin: '^' + n + '\\s*\\(',
                end: '->',
                returnBegin: !0,
                illegal: '\\(|#|//|/\\*|\\\\|:|;',
                contains: [m, e.inherit(e.TITLE_MODE, { begin: n })],
                starts: {
                    end: ';|\\.',
                    keywords: i,
                    contains: h
                }
            },
            a,
            {
                begin: '^-',
                end: '\\.',
                relevance: 0,
                excludeEnd: !0,
                returnBegin: !0,
                keywords: {
                    $pattern: '-' + e.IDENT_RE,
                    keyword: p.map((e) => `${e}|1.5`).join(' ')
                },
                contains: [m]
            },
            s,
            e.QUOTE_STRING_MODE,
            f,
            c,
            d,
            u,
            { begin: /\.$/ }
        ]
    };
}
e.exports = n;
