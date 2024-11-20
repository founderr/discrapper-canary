let t = '[A-Za-z$_][0-9A-Za-z$_]*',
    n = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends'],
    r = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    i = ['Object', 'Function', 'Boolean', 'Symbol', 'Math', 'Date', 'Number', 'BigInt', 'String', 'RegExp', 'Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Int32Array', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array', 'Set', 'Map', 'WeakSet', 'WeakMap', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'Proxy', 'Intl', 'WebAssembly'],
    a = ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'],
    s = ['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'],
    o = ['arguments', 'this', 'super', 'console', 'window', 'document', 'localStorage', 'module', 'global'],
    l = [].concat(s, i, a);
e.exports = function (e) {
    let u = (function (e) {
            var u;
            let c = e.regex,
                d = (e, { after: t }) => {
                    let n = '</' + e[0].slice(1);
                    return -1 !== e.input.indexOf(n, t);
                },
                f = '<>',
                _ = '</>',
                p = /<[A-Za-z0-9\\._:-]+/,
                h = /\/[A-Za-z0-9\\._:-]+>|\/>/,
                m = (e, t) => {
                    let n;
                    let r = e[0].length + e.index,
                        i = e.input[r];
                    if ('<' === i || ',' === i) {
                        t.ignoreMatch();
                        return;
                    }
                    '>' === i && !d(e, { after: r }) && t.ignoreMatch();
                    let a = e.input.substring(r);
                    if ((n = a.match(/^\s*=/)) || ((n = a.match(/^\s+extends\s+/)) && 0 === n.index)) {
                        t.ignoreMatch();
                        return;
                    }
                },
                g = {
                    $pattern: t,
                    keyword: n,
                    literal: r,
                    built_in: l,
                    'variable.language': o
                },
                E = '[0-9](_?[0-9])*',
                v = `\\.(${E})`,
                I = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
                b = {
                    className: 'number',
                    variants: [{ begin: `(\\b(${I})((${v})|\\.)?|(${v}))[eE][+-]?(${E})\\b` }, { begin: `\\b(${I})\\b((${v})\\b|\\.)?|(${v})\\b` }, { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' }, { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' }, { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' }, { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' }, { begin: '\\b0[0-7]+n?\\b' }],
                    relevance: 0
                },
                T = {
                    className: 'subst',
                    begin: '\\$\\{',
                    end: '\\}',
                    keywords: g,
                    contains: []
                },
                S = {
                    begin: 'html`',
                    end: '',
                    starts: {
                        end: '`',
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, T],
                        subLanguage: 'xml'
                    }
                },
                y = {
                    begin: 'css`',
                    end: '',
                    starts: {
                        end: '`',
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, T],
                        subLanguage: 'css'
                    }
                },
                A = {
                    className: 'string',
                    begin: '`',
                    end: '`',
                    contains: [e.BACKSLASH_ESCAPE, T]
                },
                N = {
                    className: 'comment',
                    variants: [
                        e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
                            relevance: 0,
                            contains: [
                                {
                                    begin: '(?=@[A-Za-z]+)',
                                    relevance: 0,
                                    contains: [
                                        {
                                            className: 'doctag',
                                            begin: '@[A-Za-z]+'
                                        },
                                        {
                                            className: 'type',
                                            begin: '\\{',
                                            end: '\\}',
                                            excludeEnd: !0,
                                            excludeBegin: !0,
                                            relevance: 0
                                        },
                                        {
                                            className: 'variable',
                                            begin: t + '(?=\\s*(-)|$)',
                                            endsParent: !0,
                                            relevance: 0
                                        },
                                        {
                                            begin: /(?=[^\n])\s/,
                                            relevance: 0
                                        }
                                    ]
                                }
                            ]
                        }),
                        e.C_BLOCK_COMMENT_MODE,
                        e.C_LINE_COMMENT_MODE
                    ]
                },
                C = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, S, y, A, { match: /\$\d+/ }, b];
            T.contains = C.concat({
                begin: /\{/,
                end: /\}/,
                keywords: g,
                contains: ['self'].concat(C)
            });
            let R = [].concat(N, T.contains),
                O = R.concat([
                    {
                        begin: /\(/,
                        end: /\)/,
                        keywords: g,
                        contains: ['self'].concat(R)
                    }
                ]),
                D = {
                    className: 'params',
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: g,
                    contains: O
                },
                L = {
                    variants: [
                        {
                            match: [/class/, /\s+/, t, /\s+/, /extends/, /\s+/, c.concat(t, '(', c.concat(/\./, t), ')*')],
                            scope: {
                                1: 'keyword',
                                3: 'title.class',
                                5: 'keyword',
                                7: 'title.class.inherited'
                            }
                        },
                        {
                            match: [/class/, /\s+/, t],
                            scope: {
                                1: 'keyword',
                                3: 'title.class'
                            }
                        }
                    ]
                },
                x = {
                    relevance: 0,
                    match: c.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                    className: 'title.class',
                    keywords: {
                        _: [...i, ...a]
                    }
                };
            let w = {
                    match: c.concat(/\b/, ((u = [...s, 'super', 'import']), c.concat('(?!', u.join('|'), ')')), t, c.lookahead(/\(/)),
                    className: 'title.function',
                    relevance: 0
                },
                M = {
                    begin: c.concat(/\./, c.lookahead(c.concat(t, /(?![0-9A-Za-z$_(])/))),
                    end: t,
                    excludeBegin: !0,
                    keywords: 'prototype',
                    className: 'property',
                    relevance: 0
                },
                P = '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + e.UNDERSCORE_IDENT_RE + ')\\s*=>',
                k = {
                    match: [/const|var|let/, /\s+/, t, /\s*/, /=\s*/, /(async\s*)?/, c.lookahead(P)],
                    keywords: 'async',
                    className: {
                        1: 'keyword',
                        3: 'title.function'
                    },
                    contains: [D]
                };
            return {
                name: 'Javascript',
                aliases: ['js', 'jsx', 'mjs', 'cjs'],
                keywords: g,
                exports: {
                    PARAMS_CONTAINS: O,
                    CLASS_REFERENCE: x
                },
                illegal: /#(?![$_A-z])/,
                contains: [
                    e.SHEBANG({
                        label: 'shebang',
                        binary: 'node',
                        relevance: 5
                    }),
                    {
                        label: 'use_strict',
                        className: 'meta',
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    },
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    S,
                    y,
                    A,
                    N,
                    { match: /\$\d+/ },
                    b,
                    x,
                    {
                        className: 'attr',
                        begin: t + c.lookahead(':'),
                        relevance: 0
                    },
                    k,
                    {
                        begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                        keywords: 'return throw case',
                        relevance: 0,
                        contains: [
                            N,
                            e.REGEXP_MODE,
                            {
                                className: 'function',
                                begin: P,
                                returnBegin: !0,
                                end: '\\s*=>',
                                contains: [
                                    {
                                        className: 'params',
                                        variants: [
                                            {
                                                begin: e.UNDERSCORE_IDENT_RE,
                                                relevance: 0
                                            },
                                            {
                                                className: null,
                                                begin: /\(\s*\)/,
                                                skip: !0
                                            },
                                            {
                                                begin: /\(/,
                                                end: /\)/,
                                                excludeBegin: !0,
                                                excludeEnd: !0,
                                                keywords: g,
                                                contains: O
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                begin: /,/,
                                relevance: 0
                            },
                            {
                                match: /\s+/,
                                relevance: 0
                            },
                            {
                                variants: [
                                    {
                                        begin: f,
                                        end: _
                                    },
                                    { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ },
                                    {
                                        begin: p,
                                        'on:begin': m,
                                        end: h
                                    }
                                ],
                                subLanguage: 'xml',
                                contains: [
                                    {
                                        begin: p,
                                        end: h,
                                        skip: !0,
                                        contains: ['self']
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        variants: [
                            {
                                match: [/function/, /\s+/, t, /(?=\s*\()/]
                            },
                            {
                                match: [/function/, /\s*(?=\()/]
                            }
                        ],
                        className: {
                            1: 'keyword',
                            3: 'title.function'
                        },
                        label: 'func.def',
                        contains: [D],
                        illegal: /%/
                    },
                    { beginKeywords: 'while if switch catch for' },
                    {
                        begin: '\\b(?!function)' + e.UNDERSCORE_IDENT_RE + '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
                        returnBegin: !0,
                        label: 'func.def',
                        contains: [
                            D,
                            e.inherit(e.TITLE_MODE, {
                                begin: t,
                                className: 'title.function'
                            })
                        ]
                    },
                    {
                        match: /\.\.\./,
                        relevance: 0
                    },
                    M,
                    {
                        match: '\\$' + t,
                        relevance: 0
                    },
                    {
                        match: [/\bconstructor(?=\s*\()/],
                        className: { 1: 'title.function' },
                        contains: [D]
                    },
                    w,
                    {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: 'variable.constant'
                    },
                    L,
                    {
                        match: [/get|set/, /\s+/, t, /(?=\()/],
                        className: {
                            1: 'keyword',
                            3: 'title.function'
                        },
                        contains: [{ begin: /\(\)/ }, D]
                    },
                    { match: /\$[(.]/ }
                ]
            };
        })(e),
        c = ['any', 'void', 'number', 'boolean', 'string', 'object', 'never', 'symbol', 'bigint', 'unknown'],
        d = {
            beginKeywords: 'namespace',
            end: /\{/,
            excludeEnd: !0,
            contains: [u.exports.CLASS_REFERENCE]
        },
        f = {
            beginKeywords: 'interface',
            end: /\{/,
            excludeEnd: !0,
            keywords: {
                keyword: 'interface extends',
                built_in: c
            },
            contains: [u.exports.CLASS_REFERENCE]
        },
        _ = {
            $pattern: t,
            keyword: n.concat(['type', 'namespace', 'interface', 'public', 'private', 'protected', 'implements', 'declare', 'abstract', 'readonly', 'enum', 'override']),
            literal: r,
            built_in: l.concat(c),
            'variable.language': o
        },
        p = {
            className: 'meta',
            begin: '@' + t
        },
        h = (e, t, n) => {
            let r = e.contains.findIndex((e) => e.label === t);
            if (-1 === r) throw Error('can not find mode to replace');
            e.contains.splice(r, 1, n);
        };
    return (
        Object.assign(u.keywords, _),
        u.exports.PARAMS_CONTAINS.push(p),
        (u.contains = u.contains.concat([p, d, f])),
        h(u, 'shebang', e.SHEBANG()),
        h(u, 'use_strict', {
            className: 'meta',
            relevance: 10
        }),
        (u.contains.find((e) => 'func.def' === e.label).relevance = 0),
        Object.assign(u, {
            name: 'TypeScript',
            aliases: ['ts', 'tsx']
        }),
        u
    );
};
