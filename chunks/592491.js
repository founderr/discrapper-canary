function t(e) {
    let t = '~?[a-z$_][0-9a-zA-Z$_]*',
        n = '`?[A-Z$_][0-9a-zA-Z$_]*',
        r = "'?[a-z$_][0-9a-z$_]*",
        i = t + '(' + ('\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*(' + r + '\\s*(,' + r + '\\s*)*)?\\))?') + '){0,2}',
        a =
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
        o = '\\s+' + a + '\\s+',
        s = {
            keyword: 'and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with',
            built_in: 'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ',
            literal: 'true false'
        },
        l = '\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
        u = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: l }, { begin: '\\(-' + l + '\\)' }]
        },
        c = {
            className: 'operator',
            relevance: 0,
            begin: a
        },
        d = [
            {
                className: 'identifier',
                relevance: 0,
                begin: t
            },
            c,
            u
        ],
        _ = [
            e.QUOTE_STRING_MODE,
            c,
            {
                className: 'module',
                begin: '\\b' + n,
                returnBegin: !0,
                relevance: 0,
                end: '.',
                contains: [
                    {
                        className: 'identifier',
                        begin: n,
                        relevance: 0
                    }
                ]
            }
        ],
        E = [
            {
                className: 'module',
                begin: '\\b' + n,
                returnBegin: !0,
                end: '.',
                relevance: 0,
                contains: [
                    {
                        className: 'identifier',
                        begin: n,
                        relevance: 0
                    }
                ]
            }
        ],
        f = {
            begin: t,
            end: '(,|\\n|\\))',
            relevance: 0,
            contains: [
                c,
                {
                    className: 'typing',
                    begin: ':',
                    end: '(,|\\n)',
                    returnBegin: !0,
                    relevance: 0,
                    contains: E
                }
            ]
        },
        h = {
            className: 'function',
            relevance: 0,
            keywords: s,
            variants: [
                {
                    begin: '\\s(\\(\\.?.*?\\)|' + t + ')\\s*=>',
                    end: '\\s*=>',
                    returnBegin: !0,
                    relevance: 0,
                    contains: [
                        {
                            className: 'params',
                            variants: [{ begin: t }, { begin: i }, { begin: /\(\s*\)/ }]
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
                            variants: [f]
                        }
                    ]
                },
                { begin: '\\(\\.\\s' + t + '\\)\\s*=>' }
            ]
        };
    _.push(h);
    let p = {
            className: 'constructor',
            begin: n + '\\(',
            end: '\\)',
            illegal: '\\n',
            keywords: s,
            contains: [
                e.QUOTE_STRING_MODE,
                c,
                {
                    className: 'params',
                    begin: '\\b' + t
                }
            ]
        },
        m = {
            className: 'pattern-match',
            begin: '\\|',
            returnBegin: !0,
            keywords: s,
            end: '=>',
            relevance: 0,
            contains: [
                p,
                c,
                {
                    relevance: 0,
                    className: 'constructor',
                    begin: n
                }
            ]
        },
        I = {
            className: 'module-access',
            keywords: s,
            returnBegin: !0,
            variants: [
                { begin: '\\b(' + n + '\\.)+' + t },
                {
                    begin: '\\b(' + n + '\\.)+\\(',
                    end: '\\)',
                    returnBegin: !0,
                    contains: [
                        h,
                        {
                            begin: '\\(',
                            end: '\\)',
                            relevance: 0,
                            skip: !0
                        }
                    ].concat(_)
                },
                {
                    begin: '\\b(' + n + '\\.)+\\{',
                    end: /\}/
                }
            ],
            contains: _
        };
    return (
        E.push(I),
        {
            name: 'ReasonML',
            aliases: ['re'],
            keywords: s,
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
                    contains: d
                },
                {
                    className: 'literal',
                    begin: '\\[',
                    end: '\\]',
                    relevance: 0,
                    contains: d
                },
                p,
                {
                    className: 'operator',
                    begin: o,
                    illegal: '-->',
                    relevance: 0
                },
                u,
                e.C_LINE_COMMENT_MODE,
                m,
                h,
                {
                    className: 'module-def',
                    begin: '\\bmodule\\s+' + t + '\\s+' + n + '\\s+=\\s+\\{',
                    end: /\}/,
                    returnBegin: !0,
                    keywords: s,
                    relevance: 0,
                    contains: [
                        {
                            className: 'module',
                            relevance: 0,
                            begin: n
                        },
                        {
                            begin: /\{/,
                            end: /\}/,
                            relevance: 0,
                            skip: !0
                        }
                    ].concat(_)
                },
                I
            ]
        }
    );
}
e.exports = t;
