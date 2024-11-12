e.exports = function (e) {
    let t = "[a-z'][a-zA-Z0-9_']*",
        n = '(' + t + ':' + t + '|' + t + ')',
        r = {
            keyword: 'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor',
            literal: 'false true'
        },
        i = e.COMMENT('%', '$'),
        a = {
            className: 'number',
            begin: '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
            relevance: 0
        },
        s = { begin: 'fun\\s+' + t + '/\\d+' },
        o = {
            begin: n + '\\(',
            end: '\\)',
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    begin: n,
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
        l = {
            begin: /\{/,
            end: /\}/,
            relevance: 0
        },
        u = {
            begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
            relevance: 0
        },
        c = {
            begin: '[A-Z][a-zA-Z0-9_]*',
            relevance: 0
        },
        d = {
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
        f = {
            beginKeywords: 'fun receive if try case',
            end: 'end',
            keywords: r
        };
    f.contains = [i, s, e.inherit(e.APOS_STRING_MODE, { className: '' }), f, o, e.QUOTE_STRING_MODE, a, l, u, c, d];
    let _ = [i, s, f, o, e.QUOTE_STRING_MODE, a, l, u, c, d];
    (o.contains[1].contains = _), (l.contains = _), (d.contains[1].contains = _);
    let p = {
        className: 'params',
        begin: '\\(',
        end: '\\)',
        contains: _
    };
    return {
        name: 'Erlang',
        aliases: ['erl'],
        keywords: r,
        illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
        contains: [
            {
                className: 'function',
                begin: '^' + t + '\\s*\\(',
                end: '->',
                returnBegin: !0,
                illegal: '\\(|#|//|/\\*|\\\\|:|;',
                contains: [p, e.inherit(e.TITLE_MODE, { begin: t })],
                starts: {
                    end: ';|\\.',
                    keywords: r,
                    contains: _
                }
            },
            i,
            {
                begin: '^-',
                end: '\\.',
                relevance: 0,
                excludeEnd: !0,
                returnBegin: !0,
                keywords: {
                    $pattern: '-' + e.IDENT_RE,
                    keyword: ['-module', '-record', '-undef', '-export', '-ifdef', '-ifndef', '-author', '-copyright', '-doc', '-vsn', '-import', '-include', '-include_lib', '-compile', '-define', '-else', '-endif', '-file', '-behaviour', '-behavior', '-spec'].map((e) => `${e}|1.5`).join(' ')
                },
                contains: [p]
            },
            a,
            e.QUOTE_STRING_MODE,
            d,
            u,
            c,
            l,
            { begin: /\.$/ }
        ]
    };
};
