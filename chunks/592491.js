function n(e) {
    let n = '~?[a-z$_][0-9a-zA-Z$_]*',
        r = '`?[A-Z$_][0-9a-zA-Z$_]*',
        i = "'?[a-z$_][0-9a-z$_]*",
        a = n + '(' + ('\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*(' + i + '\\s*(,' + i + '\\s*)*)?\\))?') + '){0,2}',
        s =
            '(' +
            (function e(e) {
                return e
                    .map(function (e) {
                        return e
                            .split('')
                            .map(function (e) {
                                return '\\' + e;
                            })
                            .join('');
                    })
                    .join('|');
            })(['||', '++', '**', '+.', '*', '/', '*.', '/.', '...']) +
            '|\\|>|&&|==|===)',
        o = '\\s+' + s + '\\s+',
        l = {
            keyword: 'and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with',
            built_in: 'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ',
            literal: 'true false'
        },
        u = '\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
        c = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: u }, { begin: '\\(-' + u + '\\)' }]
        },
        d = {
            className: 'operator',
            relevance: 0,
            begin: s
        },
        f = [
            {
                className: 'identifier',
                relevance: 0,
                begin: n
            },
            d,
            c
        ],
        _ = [
            e.QUOTE_STRING_MODE,
            d,
            {
                className: 'module',
                begin: '\\b' + r,
                returnBegin: !0,
                relevance: 0,
                end: '.',
                contains: [
                    {
                        className: 'identifier',
                        begin: r,
                        relevance: 0
                    }
                ]
            }
        ],
        h = [
            {
                className: 'module',
                begin: '\\b' + r,
                returnBegin: !0,
                end: '.',
                relevance: 0,
                contains: [
                    {
                        className: 'identifier',
                        begin: r,
                        relevance: 0
                    }
                ]
            }
        ],
        p = {
            begin: n,
            end: '(,|\\n|\\))',
            relevance: 0,
            contains: [
                d,
                {
                    className: 'typing',
                    begin: ':',
                    end: '(,|\\n)',
                    returnBegin: !0,
                    relevance: 0,
                    contains: h
                }
            ]
        },
        m = {
            className: 'function',
            relevance: 0,
            keywords: l,
            variants: [
                {
                    begin: '\\s(\\(\\.?.*?\\)|' + n + ')\\s*=>',
                    end: '\\s*=>',
                    returnBegin: !0,
                    relevance: 0,
                    contains: [
                        {
                            className: 'params',
                            variants: [{ begin: n }, { begin: a }, { begin: /\(\s*\)/ }]
                        }
                    ]
                },
                {
                    begin: '\\s\\(\\.?[^;\\|]*\\)\\s*=>',
                    end: '\\s=>',
                    returnBegin: !0,
                    relevance: 0,
                    contains: [
                        {
                            className: 'params',
                            relevance: 0,
                            variants: [p]
                        }
                    ]
                },
                { begin: '\\(\\.\\s' + n + '\\)\\s*=>' }
            ]
        };
    _.push(m);
    let g = {
            className: 'constructor',
            begin: r + '\\(',
            end: '\\)',
            illegal: '\\n',
            keywords: l,
            contains: [
                e.QUOTE_STRING_MODE,
                d,
                {
                    className: 'params',
                    begin: '\\b' + n
                }
            ]
        },
        E = {
            className: 'pattern-match',
            begin: '\\|',
            returnBegin: !0,
            keywords: l,
            end: '=>',
            relevance: 0,
            contains: [
                g,
                d,
                {
                    relevance: 0,
                    className: 'constructor',
                    begin: r
                }
            ]
        },
        v = {
            className: 'module-access',
            keywords: l,
            returnBegin: !0,
            variants: [
                { begin: '\\b(' + r + '\\.)+' + n },
                {
                    begin: '\\b(' + r + '\\.)+\\(',
                    end: '\\)',
                    returnBegin: !0,
                    contains: [
                        m,
                        {
                            begin: '\\(',
                            end: '\\)',
                            relevance: 0,
                            skip: !0
                        }
                    ].concat(_)
                },
                {
                    begin: '\\b(' + r + '\\.)+\\{',
                    end: /\}/
                }
            ],
            contains: _
        };
    return (
        h.push(v),
        {
            name: 'ReasonML',
            aliases: ['re'],
            keywords: l,
            illegal: '(:-|:=|\\$\\{|\\+=)',
            contains: [
                e.COMMENT('/\\*', '\\*/', { illegal: '^(#,\\/\\/)' }),
                {
                    className: 'character',
                    begin: "'(\\\\[^']+|[^'])'",
                    illegal: '\\n',
                    relevance: 0
                },
                e.QUOTE_STRING_MODE,
                {
                    className: 'literal',
                    begin: '\\(\\)',
                    relevance: 0
                },
                {
                    className: 'literal',
                    begin: '\\[\\|',
                    end: '\\|\\]',
                    relevance: 0,
                    contains: f
                },
                {
                    className: 'literal',
                    begin: '\\[',
                    end: '\\]',
                    relevance: 0,
                    contains: f
                },
                g,
                {
                    className: 'operator',
                    begin: o,
                    illegal: '-->',
                    relevance: 0
                },
                c,
                e.C_LINE_COMMENT_MODE,
                E,
                m,
                {
                    className: 'module-def',
                    begin: '\\bmodule\\s+' + n + '\\s+' + r + '\\s+=\\s+\\{',
                    end: /\}/,
                    returnBegin: !0,
                    keywords: l,
                    relevance: 0,
                    contains: [
                        {
                            className: 'module',
                            relevance: 0,
                            begin: r
                        },
                        {
                            begin: /\{/,
                            end: /\}/,
                            relevance: 0,
                            skip: !0
                        }
                    ].concat(_)
                },
                v
            ]
        }
    );
}
e.exports = n;
