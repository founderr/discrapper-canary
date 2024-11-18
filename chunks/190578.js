function t(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function n(e) {
    return r('(?=', e, ')');
}
function r(...e) {
    return e.map((e) => t(e)).join('');
}
function i(...e) {
    return (
        '(' +
        ((function (e) {
            let t = e[e.length - 1];
            return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
        })(e).capture
            ? ''
            : '?:') +
        e.map((e) => t(e)).join('|') +
        ')'
    );
}
let a = (e) => r(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
    s = ['Protocol', 'Type'].map(a),
    o = ['init', 'self'].map(a),
    l = ['Any', 'Self'],
    u = ['actor', 'any', 'associatedtype', 'async', 'await', /as\?/, /as!/, 'as', 'break', 'case', 'catch', 'class', 'continue', 'convenience', 'default', 'defer', 'deinit', 'didSet', 'distributed', 'do', 'dynamic', 'else', 'enum', 'extension', 'fallthrough', /fileprivate\(set\)/, 'fileprivate', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'indirect', 'infix', /init\?/, /init!/, 'inout', /internal\(set\)/, 'internal', 'in', 'is', 'isolated', 'nonisolated', 'lazy', 'let', 'mutating', 'nonmutating', /open\(set\)/, 'open', 'operator', 'optional', 'override', 'postfix', 'precedencegroup', 'prefix', /private\(set\)/, 'private', 'protocol', /public\(set\)/, 'public', 'repeat', 'required', 'rethrows', 'return', 'set', 'some', 'static', 'struct', 'subscript', 'super', 'switch', 'throws', 'throw', /try\?/, /try!/, 'try', 'typealias', /unowned\(safe\)/, /unowned\(unsafe\)/, 'unowned', 'var', 'weak', 'where', 'while', 'willSet'],
    c = ['false', 'nil', 'true'],
    d = ['assignment', 'associativity', 'higherThan', 'left', 'lowerThan', 'none', 'right'],
    f = ['#colorLiteral', '#column', '#dsohandle', '#else', '#elseif', '#endif', '#error', '#file', '#fileID', '#fileLiteral', '#filePath', '#function', '#if', '#imageLiteral', '#keyPath', '#line', '#selector', '#sourceLocation', '#warn_unqualified_access', '#warning'],
    _ = ['abs', 'all', 'any', 'assert', 'assertionFailure', 'debugPrint', 'dump', 'fatalError', 'getVaList', 'isKnownUniquelyReferenced', 'max', 'min', 'numericCast', 'pointwiseMax', 'pointwiseMin', 'precondition', 'preconditionFailure', 'print', 'readLine', 'repeatElement', 'sequence', 'stride', 'swap', 'swift_unboxFromSwiftValueWithType', 'transcode', 'type', 'unsafeBitCast', 'unsafeDowncast', 'withExtendedLifetime', 'withUnsafeMutablePointer', 'withUnsafePointer', 'withVaList', 'withoutActuallyEscaping', 'zip'],
    p = i(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
    h = i(p, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    m = r(p, h, '*'),
    g = i(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
    E = i(g, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    v = r(g, E, '*'),
    b = r(/[A-Z]/, E, '*'),
    I = ['autoclosure', r(/convention\(/, i('swift', 'block', 'c'), /\)/), 'discardableResult', 'dynamicCallable', 'dynamicMemberLookup', 'escaping', 'frozen', 'GKInspectable', 'IBAction', 'IBDesignable', 'IBInspectable', 'IBOutlet', 'IBSegueAction', 'inlinable', 'main', 'nonobjc', 'NSApplicationMain', 'NSCopying', 'NSManaged', r(/objc\(/, v, /\)/), 'objc', 'objcMembers', 'propertyWrapper', 'requires_stored_property_inits', 'resultBuilder', 'testable', 'UIApplicationMain', 'unknown', 'usableFromInline'],
    S = ['iOS', 'iOSApplicationExtension', 'macOS', 'macOSApplicationExtension', 'macCatalyst', 'macCatalystApplicationExtension', 'watchOS', 'watchOSApplicationExtension', 'tvOS', 'tvOSApplicationExtension', 'swift'];
e.exports = function (e) {
    let t = {
            match: /\s+/,
            relevance: 0
        },
        p = e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
        g = [e.C_LINE_COMMENT_MODE, p],
        T = {
            match: [/\./, i(...s, ...o)],
            className: { 2: 'keyword' }
        },
        y = {
            match: r(/\./, i(...u)),
            relevance: 0
        },
        A = u.filter((e) => 'string' == typeof e).concat(['_|0']),
        N = {
            variants: [
                {
                    className: 'keyword',
                    match: i(
                        ...u
                            .filter((e) => 'string' != typeof e)
                            .concat(l)
                            .map(a),
                        ...o
                    )
                }
            ]
        },
        C = {
            $pattern: i(/\b\w+/, /#\w+/),
            keyword: A.concat(f),
            literal: c
        },
        R = [T, y, N],
        O = {
            match: r(/\./, i(..._)),
            relevance: 0
        },
        D = [
            O,
            {
                className: 'built_in',
                match: r(/\b/, i(..._), /(?=\()/)
            }
        ],
        L = {
            match: /->/,
            relevance: 0
        },
        x = [
            L,
            {
                className: 'operator',
                relevance: 0,
                variants: [{ match: m }, { match: `\\.(\\.|${h})+` }]
            }
        ],
        w = '([0-9]_*)+',
        M = '([0-9a-fA-F]_*)+',
        P = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${w})(\\.(${w}))?([eE][+-]?(${w}))?\\b` }, { match: `\\b0x(${M})(\\.(${M}))?([pP][+-]?(${w}))?\\b` }, { match: /\b0o([0-7]_*)+\b/ }, { match: /\b0b([01]_*)+\b/ }]
        },
        k = (e = '') => ({
            className: 'subst',
            variants: [{ match: r(/\\/, e, /[0\\tnr"']/) }, { match: r(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) }]
        }),
        U = (e = '') => ({
            className: 'subst',
            match: r(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
        }),
        G = (e = '') => ({
            className: 'subst',
            label: 'interpol',
            begin: r(/\\/, e, /\(/),
            end: /\)/
        }),
        B = (e = '') => ({
            begin: r(e, /"""/),
            end: r(/"""/, e),
            contains: [k(e), U(e), G(e)]
        }),
        Z = (e = '') => ({
            begin: r(e, /"/),
            end: r(/"/, e),
            contains: [k(e), G(e)]
        }),
        F = {
            className: 'string',
            variants: [B(), B('#'), B('##'), B('###'), Z(), Z('#'), Z('##'), Z('###')]
        },
        V = { match: r(/`/, v, /`/) },
        j = [
            V,
            {
                className: 'variable',
                match: /\$\d+/
            },
            {
                className: 'variable',
                match: `\\$${E}+`
            }
        ],
        H = {
            match: /(@|#(un)?)available/,
            className: 'keyword',
            starts: {
                contains: [
                    {
                        begin: /\(/,
                        end: /\)/,
                        keywords: S,
                        contains: [...x, P, F]
                    }
                ]
            }
        },
        Y = {
            className: 'keyword',
            match: r(/@/, i(...I))
        },
        W = [
            H,
            Y,
            {
                className: 'meta',
                match: r(/@/, v)
            }
        ],
        K = {
            match: n(/\b[A-Z]/),
            relevance: 0,
            contains: [
                {
                    className: 'type',
                    match: r(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, E, '+')
                },
                {
                    className: 'type',
                    match: b,
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
                    match: r(/\s+&\s+/, n(b)),
                    relevance: 0
                }
            ]
        },
        z = {
            begin: /</,
            end: />/,
            keywords: C,
            contains: [...g, ...R, ...W, L, K]
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
                    match: r(v, /\s*:/),
                    keywords: '_|0',
                    relevance: 0
                },
                ...g,
                ...R,
                ...D,
                ...x,
                P,
                F,
                ...j,
                ...W,
                K
            ]
        },
        Q = {
            begin: /</,
            end: />/,
            contains: [...g, K]
        },
        X = {
            begin: /\(/,
            end: /\)/,
            keywords: C,
            contains: [
                {
                    begin: i(n(r(v, /\s*:/)), n(r(v, /\s+/, v, /\s*:/))),
                    end: /:/,
                    relevance: 0,
                    contains: [
                        {
                            className: 'keyword',
                            match: /\b_\b/
                        },
                        {
                            className: 'params',
                            match: v
                        }
                    ]
                },
                ...g,
                ...R,
                ...x,
                P,
                F,
                ...W,
                K,
                q
            ],
            endsParent: !0,
            illegal: /["']/
        },
        J = {
            match: [/func/, /\s+/, i(V.match, v, m)],
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [Q, X, t],
            illegal: [/\[/, /%/]
        },
        $ = {
            begin: [/precedencegroup/, /\s+/, b],
            className: {
                1: 'keyword',
                3: 'title'
            },
            contains: [K],
            keywords: [...d, ...c],
            end: /}/
        };
    for (let e of F.variants) {
        let t = e.contains.find((e) => 'interpol' === e.label);
        t.keywords = C;
        let n = [...R, ...D, ...x, P, F, ...j];
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
            ...g,
            J,
            {
                match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
                className: { 1: 'keyword' },
                contains: [Q, X, t],
                illegal: /\[|%/
            },
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
                    ...R
                ]
            },
            {
                match: [/operator/, /\s+/, m],
                className: {
                    1: 'keyword',
                    3: 'title'
                }
            },
            $,
            {
                beginKeywords: 'import',
                end: /$/,
                contains: [...g],
                relevance: 0
            },
            ...R,
            ...D,
            ...x,
            P,
            F,
            ...j,
            ...W,
            K,
            q
        ]
    };
};
