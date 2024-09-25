function t(e) {
    return RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}
function n(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function r(e) {
    return i('(?=', e, ')');
}
function i(...e) {
    return e.map((e) => n(e)).join('');
}
function a(e) {
    let t = e[e.length - 1];
    return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function o(...e) {
    return '(' + (a(e).capture ? '' : '?:') + e.map((e) => n(e)).join('|') + ')';
}
function s(e) {
    let n = {
            scope: 'keyword',
            match: /\b(yield|return|let|do|match|use)!/
        },
        a = ['if', 'else', 'endif', 'line', 'nowarn', 'light', 'r', 'i', 'I', 'load', 'time', 'help', 'quit'],
        s = ['bool', 'byte', 'sbyte', 'int8', 'int16', 'int32', 'uint8', 'uint16', 'uint32', 'int', 'uint', 'int64', 'uint64', 'nativeint', 'unativeint', 'decimal', 'float', 'double', 'float32', 'single', 'char', 'string', 'unit', 'bigint', 'option', 'voption', 'list', 'array', 'seq', 'byref', 'exn', 'inref', 'nativeptr', 'obj', 'outref', 'voidptr', 'Result'],
        l = {
            keyword: ['abstract', 'and', 'as', 'assert', 'base', 'begin', 'class', 'default', 'delegate', 'do', 'done', 'downcast', 'downto', 'elif', 'else', 'end', 'exception', 'extern', 'finally', 'fixed', 'for', 'fun', 'function', 'global', 'if', 'in', 'inherit', 'inline', 'interface', 'internal', 'lazy', 'let', 'match', 'member', 'module', 'mutable', 'namespace', 'new', 'of', 'open', 'or', 'override', 'private', 'public', 'rec', 'return', 'static', 'struct', 'then', 'to', 'try', 'type', 'upcast', 'use', 'val', 'void', 'when', 'while', 'with', 'yield'],
            literal: ['true', 'false', 'null', 'Some', 'None', 'Ok', 'Error', 'infinity', 'infinityf', 'nan', 'nanf'],
            built_in: ['not', 'ref', 'raise', 'reraise', 'dict', 'readOnlyDict', 'set', 'get', 'enum', 'sizeof', 'typeof', 'typedefof', 'nameof', 'nullArg', 'invalidArg', 'invalidOp', 'id', 'fst', 'snd', 'ignore', 'lock', 'using', 'box', 'unbox', 'tryUnbox', 'printf', 'printfn', 'sprintf', 'eprintf', 'eprintfn', 'fprintf', 'fprintfn', 'failwith', 'failwithf'],
            'variable.constant': ['__LINE__', '__SOURCE_DIRECTORY__', '__SOURCE_FILE__']
        },
        u = {
            variants: [e.COMMENT(/\(\*(?!\))/, /\*\)/, { contains: ['self'] }), e.C_LINE_COMMENT_MODE]
        },
        c = /[a-zA-Z_](\w|')*/,
        d = {
            scope: 'variable',
            begin: /``/,
            end: /``/
        },
        _ = /\B('|\^)/,
        E = {
            scope: 'symbol',
            variants: [{ match: i(_, /``.*?``/) }, { match: i(_, e.UNDERSCORE_IDENT_RE) }],
            relevance: 0
        },
        f = function ({ includeEqual: e }) {
            let n;
            let a = i('[', ...Array.from((n = e ? '!%&*+-/<=>@^|~?' : '!%&*+-/<>@^|~?')).map(t), ']'),
                s = o(a, /\./),
                l = i(s, r(s)),
                u = o(i(l, s, '*'), i(a, '+'));
            return {
                scope: 'operator',
                match: o(u, /:\?>/, /:\?/, /:>/, /:=/, /::?/, /\$/),
                relevance: 0
            };
        },
        h = f({ includeEqual: !0 }),
        p = f({ includeEqual: !1 }),
        m = function (t, n) {
            return {
                begin: i(t, r(i(/\s*/, o(/\w/, /'/, /\^/, /#/, /``/, /\(/, /{\|/)))),
                beginScope: n,
                end: r(o(/\n/, /=/)),
                relevance: 0,
                keywords: e.inherit(l, { type: s }),
                contains: [u, E, e.inherit(d, { scope: null }), p]
            };
        },
        I = m(/:/, 'operator'),
        T = m(/\bof\b/, 'keyword'),
        g = {
            begin: [/(^|\s+)/, /type/, /\s+/, c],
            beginScope: {
                2: 'keyword',
                4: 'title.class'
            },
            end: r(/\(|=|$/),
            keywords: l,
            contains: [
                u,
                e.inherit(d, { scope: null }),
                E,
                {
                    scope: 'operator',
                    match: /<|>/
                },
                I
            ]
        },
        S = {
            scope: 'computation-expression',
            match: /\b[_a-z]\w*(?=\s*\{)/
        },
        A = {
            begin: [/^\s*/, i(/#/, o(...a)), /\b/],
            beginScope: { 2: 'meta' },
            end: r(/\s|$/)
        },
        v = {
            variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
        },
        N = {
            scope: 'string',
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE]
        },
        O = {
            scope: 'string',
            begin: /@"/,
            end: /"/,
            contains: [{ match: /""/ }, e.BACKSLASH_ESCAPE]
        },
        R = {
            scope: 'string',
            begin: /"""/,
            end: /"""/,
            relevance: 2
        },
        C = {
            scope: 'subst',
            begin: /\{/,
            end: /\}/,
            keywords: l
        },
        y = {
            scope: 'string',
            begin: /\$"/,
            end: /"/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, e.BACKSLASH_ESCAPE, C]
        },
        b = {
            scope: 'string',
            begin: /(\$@|@\$)"/,
            end: /"/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, { match: /""/ }, e.BACKSLASH_ESCAPE, C]
        },
        L = {
            scope: 'string',
            begin: /\$"""/,
            end: /"""/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, C],
            relevance: 2
        },
        D = {
            scope: 'string',
            match: i(/'/, o(/[^\\']/, /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/), /'/)
        };
    return (
        (C.contains = [b, y, O, N, D, n, u, d, I, S, A, v, E, h]),
        {
            name: 'F#',
            aliases: ['fs', 'f#'],
            keywords: l,
            illegal: /\/\*/,
            classNameAliases: { 'computation-expression': 'keyword' },
            contains: [
                n,
                {
                    variants: [L, b, y, R, O, N, D]
                },
                u,
                d,
                g,
                {
                    scope: 'meta',
                    begin: /\[</,
                    end: />\]/,
                    relevance: 2,
                    contains: [d, R, O, N, D, v]
                },
                T,
                I,
                S,
                A,
                v,
                E,
                h
            ]
        }
    );
}
e.exports = s;
