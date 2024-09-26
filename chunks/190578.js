function t(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function n(e) {
    return r('(?=', e, ')');
}
function r(...e) {
    return e.map((e) => t(e)).join('');
}
function i(e) {
    let t = e[e.length - 1];
    return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function a(...e) {
    return '(' + (i(e).capture ? '' : '?:') + e.map((e) => t(e)).join('|') + ')';
}
let o = (e) => r(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
    s = ['Protocol', 'Type'].map(o),
    l = ['init', 'self'].map(o),
    u = ['Any', 'Self'],
    c = ['actor', 'any', 'associatedtype', 'async', 'await', /as\?/, /as!/, 'as', 'break', 'case', 'catch', 'class', 'continue', 'convenience', 'default', 'defer', 'deinit', 'didSet', 'distributed', 'do', 'dynamic', 'else', 'enum', 'extension', 'fallthrough', /fileprivate\(set\)/, 'fileprivate', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'indirect', 'infix', /init\?/, /init!/, 'inout', /internal\(set\)/, 'internal', 'in', 'is', 'isolated', 'nonisolated', 'lazy', 'let', 'mutating', 'nonmutating', /open\(set\)/, 'open', 'operator', 'optional', 'override', 'postfix', 'precedencegroup', 'prefix', /private\(set\)/, 'private', 'protocol', /public\(set\)/, 'public', 'repeat', 'required', 'rethrows', 'return', 'set', 'some', 'static', 'struct', 'subscript', 'super', 'switch', 'throws', 'throw', /try\?/, /try!/, 'try', 'typealias', /unowned\(safe\)/, /unowned\(unsafe\)/, 'unowned', 'var', 'weak', 'where', 'while', 'willSet'],
    d = ['false', 'nil', 'true'],
    _ = ['assignment', 'associativity', 'higherThan', 'left', 'lowerThan', 'none', 'right'],
    E = ['#colorLiteral', '#column', '#dsohandle', '#else', '#elseif', '#endif', '#error', '#file', '#fileID', '#fileLiteral', '#filePath', '#function', '#if', '#imageLiteral', '#keyPath', '#line', '#selector', '#sourceLocation', '#warn_unqualified_access', '#warning'],
    f = ['abs', 'all', 'any', 'assert', 'assertionFailure', 'debugPrint', 'dump', 'fatalError', 'getVaList', 'isKnownUniquelyReferenced', 'max', 'min', 'numericCast', 'pointwiseMax', 'pointwiseMin', 'precondition', 'preconditionFailure', 'print', 'readLine', 'repeatElement', 'sequence', 'stride', 'swap', 'swift_unboxFromSwiftValueWithType', 'transcode', 'type', 'unsafeBitCast', 'unsafeDowncast', 'withExtendedLifetime', 'withUnsafeMutablePointer', 'withUnsafePointer', 'withVaList', 'withoutActuallyEscaping', 'zip'],
    h = a(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
    p = a(h, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    m = r(h, p, '*'),
    I = a(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
    T = a(I, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    g = r(I, T, '*'),
    S = r(/[A-Z]/, T, '*'),
    A = ['autoclosure', r(/convention\(/, a('swift', 'block', 'c'), /\)/), 'discardableResult', 'dynamicCallable', 'dynamicMemberLookup', 'escaping', 'frozen', 'GKInspectable', 'IBAction', 'IBDesignable', 'IBInspectable', 'IBOutlet', 'IBSegueAction', 'inlinable', 'main', 'nonobjc', 'NSApplicationMain', 'NSCopying', 'NSManaged', r(/objc\(/, g, /\)/), 'objc', 'objcMembers', 'propertyWrapper', 'requires_stored_property_inits', 'resultBuilder', 'testable', 'UIApplicationMain', 'unknown', 'usableFromInline'],
    v = ['iOS', 'iOSApplicationExtension', 'macOS', 'macOSApplicationExtension', 'macCatalyst', 'macCatalystApplicationExtension', 'watchOS', 'watchOSApplicationExtension', 'tvOS', 'tvOSApplicationExtension', 'swift'];
function N(e) {
    let t = {
            match: /\s+/,
            relevance: 0
        },
        i = e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
        h = [e.C_LINE_COMMENT_MODE, i],
        I = {
            match: [/\./, a(...s, ...l)],
            className: { 2: 'keyword' }
        },
        N = {
            match: r(/\./, a(...c)),
            relevance: 0
        },
        O = c.filter((e) => 'string' == typeof e).concat(['_|0']),
        R = {
            variants: [
                {
                    className: 'keyword',
                    match: a(
                        ...c
                            .filter((e) => 'string' != typeof e)
                            .concat(u)
                            .map(o),
                        ...l
                    )
                }
            ]
        },
        C = {
            $pattern: a(/\b\w+/, /#\w+/),
            keyword: O.concat(E),
            literal: d
        },
        y = [I, N, R],
        L = {
            match: r(/\./, a(...f)),
            relevance: 0
        },
        b = [
            L,
            {
                className: 'built_in',
                match: r(/\b/, a(...f), /(?=\()/)
            }
        ],
        D = {
            match: /->/,
            relevance: 0
        },
        M = [
            D,
            {
                className: 'operator',
                relevance: 0,
                variants: [{ match: m }, { match: `\\.(\\.|${p})+` }]
            }
        ],
        P = '([0-9]_*)+',
        U = '([0-9a-fA-F]_*)+',
        w = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${P})(\\.(${P}))?([eE][+-]?(${P}))?\\b` }, { match: `\\b0x(${U})(\\.(${U}))?([pP][+-]?(${P}))?\\b` }, { match: /\b0o([0-7]_*)+\b/ }, { match: /\b0b([01]_*)+\b/ }]
        },
        x = (e = '') => ({
            className: 'subst',
            variants: [{ match: r(/\\/, e, /[0\\tnr"']/) }, { match: r(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) }]
        }),
        G = (e = '') => ({
            className: 'subst',
            match: r(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
        }),
        k = (e = '') => ({
            className: 'subst',
            label: 'interpol',
            begin: r(/\\/, e, /\(/),
            end: /\)/
        }),
        B = (e = '') => ({
            begin: r(e, /"""/),
            end: r(/"""/, e),
            contains: [x(e), G(e), k(e)]
        }),
        F = (e = '') => ({
            begin: r(e, /"/),
            end: r(/"/, e),
            contains: [x(e), k(e)]
        }),
        Z = {
            className: 'string',
            variants: [B(), B('#'), B('##'), B('###'), F(), F('#'), F('##'), F('###')]
        },
        V = { match: r(/`/, g, /`/) },
        H = [
            V,
            {
                className: 'variable',
                match: /\$\d+/
            },
            {
                className: 'variable',
                match: `\\$${T}+`
            }
        ],
        Y = {
            match: /(@|#(un)?)available/,
            className: 'keyword',
            starts: {
                contains: [
                    {
                        begin: /\(/,
                        end: /\)/,
                        keywords: v,
                        contains: [...M, w, Z]
                    }
                ]
            }
        },
        j = {
            className: 'keyword',
            match: r(/@/, a(...A))
        },
        W = [
            Y,
            j,
            {
                className: 'meta',
                match: r(/@/, g)
            }
        ],
        K = {
            match: n(/\b[A-Z]/),
            relevance: 0,
            contains: [
                {
                    className: 'type',
                    match: r(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, T, '+')
                },
                {
                    className: 'type',
                    match: S,
                    relevance: 0
                },
                {
                    match: /[?!]+/,
                    relevance: 0
                },
                {
                    match: /\.\.\./,
                    relevance: 0
                },
                {
                    match: r(/\s+&\s+/, n(S)),
                    relevance: 0
                }
            ]
        },
        z = {
            begin: /</,
            end: />/,
            keywords: C,
            contains: [...h, ...y, ...W, D, K]
        };
    K.contains.push(z);
    let q = {
            begin: /\(/,
            end: /\)/,
            relevance: 0,
            keywords: C,
            contains: [
                'self',
                {
                    match: r(g, /\s*:/),
                    keywords: '_|0',
                    relevance: 0
                },
                ...h,
                ...y,
                ...b,
                ...M,
                w,
                Z,
                ...H,
                ...W,
                K
            ]
        },
        Q = {
            begin: /</,
            end: />/,
            contains: [...h, K]
        },
        X = {
            begin: /\(/,
            end: /\)/,
            keywords: C,
            contains: [
                {
                    begin: a(n(r(g, /\s*:/)), n(r(g, /\s+/, g, /\s*:/))),
                    end: /:/,
                    relevance: 0,
                    contains: [
                        {
                            className: 'keyword',
                            match: /\b_\b/
                        },
                        {
                            className: 'params',
                            match: g
                        }
                    ]
                },
                ...h,
                ...y,
                ...M,
                w,
                Z,
                ...W,
                K,
                q
            ],
            endsParent: !0,
            illegal: /["']/
        },
        $ = {
            match: [/func/, /\s+/, a(V.match, g, m)],
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [Q, X, t],
            illegal: [/\[/, /%/]
        },
        J = {
            match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
            className: { 1: 'keyword' },
            contains: [Q, X, t],
            illegal: /\[|%/
        },
        ee = {
            match: [/operator/, /\s+/, m],
            className: {
                1: 'keyword',
                3: 'title'
            }
        },
        et = {
            begin: [/precedencegroup/, /\s+/, S],
            className: {
                1: 'keyword',
                3: 'title'
            },
            contains: [K],
            keywords: [..._, ...d],
            end: /}/
        };
    for (let e of Z.variants) {
        let t = e.contains.find((e) => 'interpol' === e.label);
        t.keywords = C;
        let n = [...y, ...b, ...M, w, Z, ...H];
        t.contains = [
            ...n,
            {
                begin: /\(/,
                end: /\)/,
                contains: ['self', ...n]
            }
        ];
    }
    return {
        name: 'Swift',
        keywords: C,
        contains: [
            ...h,
            $,
            J,
            {
                beginKeywords: 'struct protocol class extension enum actor',
                end: '\\{',
                excludeEnd: !0,
                keywords: C,
                contains: [
                    e.inherit(e.TITLE_MODE, {
                        className: 'title.class',
                        begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                    }),
                    ...y
                ]
            },
            ee,
            et,
            {
                beginKeywords: 'import',
                end: /$/,
                contains: [...h],
                relevance: 0
            },
            ...y,
            ...b,
            ...M,
            w,
            Z,
            ...H,
            ...W,
            K,
            q
        ]
    };
}
e.exports = N;
