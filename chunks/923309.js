function n(e) {
    let n = {
            variants: [e.COMMENT('--', '$'), e.COMMENT(/\{-/, /-\}/, { contains: ['self'] })]
        },
        r = {
            className: 'meta',
            begin: /\{-#/,
            end: /#-\}/
        },
        i = {
            className: 'meta',
            begin: '^#',
            end: '$'
        },
        a = {
            className: 'type',
            begin: "\\b[A-Z][\\w']*",
            relevance: 0
        },
        s = {
            begin: '\\(',
            end: '\\)',
            illegal: '"',
            contains: [
                r,
                i,
                {
                    className: 'type',
                    begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
                },
                e.inherit(e.TITLE_MODE, { begin: "[_a-z][\\w']*" }),
                n
            ]
        },
        o = {
            begin: /\{/,
            end: /\}/,
            contains: s.contains
        },
        l = '([0-9]_*)+',
        u = '([0-9a-fA-F]_*)+',
        c = '([01]_*)+',
        d = '([0-7]_*)+',
        f = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${l})(\\.(${l}))?([eE][+-]?(${l}))?\\b` }, { match: `\\b0[xX]_*(${u})(\\.(${u}))?([pP][+-]?(${l}))?\\b` }, { match: `\\b0[oO](${d})\\b` }, { match: `\\b0[bB](${c})\\b` }]
        };
    return {
        name: 'Haskell',
        aliases: ['hs'],
        keywords: 'let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec',
        contains: [
            {
                beginKeywords: 'module',
                end: 'where',
                keywords: 'module where',
                contains: [s, n],
                illegal: '\\W\\.|;'
            },
            {
                begin: '\\bimport\\b',
                end: '$',
                keywords: 'import qualified as hiding',
                contains: [s, n],
                illegal: '\\W\\.|;'
            },
            {
                className: 'class',
                begin: '^(\\s*)?(class|instance)\\b',
                end: 'where',
                keywords: 'class family instance where',
                contains: [a, s, n]
            },
            {
                className: 'class',
                begin: '\\b(data|(new)?type)\\b',
                end: '$',
                keywords: 'data family type newtype deriving',
                contains: [r, a, s, o, n]
            },
            {
                beginKeywords: 'default',
                end: '$',
                contains: [a, s, n]
            },
            {
                beginKeywords: 'infix infixl infixr',
                end: '$',
                contains: [e.C_NUMBER_MODE, n]
            },
            {
                begin: '\\bforeign\\b',
                end: '$',
                keywords: 'foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe',
                contains: [a, e.QUOTE_STRING_MODE, n]
            },
            {
                className: 'meta',
                begin: '#!\\/usr\\/bin\\/env runhaskell',
                end: '$'
            },
            r,
            i,
            e.QUOTE_STRING_MODE,
            f,
            a,
            e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
            n,
            { begin: '->|<-' }
        ]
    };
}
e.exports = n;
