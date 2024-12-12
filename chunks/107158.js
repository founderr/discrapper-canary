function n(e) {
    let n = 'true false yes no null',
        r = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
        i = {
            className: 'attr',
            variants: [{ begin: '\\w[\\w :\\/.-]*:(?=[ \t]|$)' }, { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' }, { begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)" }]
        },
        a = {
            className: 'template-variable',
            variants: [
                {
                    begin: /\{\{/,
                    end: /\}\}/
                },
                {
                    begin: /%\{/,
                    end: /\}/
                }
            ]
        },
        s = {
            className: 'string',
            relevance: 0,
            variants: [
                {
                    begin: /'/,
                    end: /'/
                },
                {
                    begin: /"/,
                    end: /"/
                },
                { begin: /\S+/ }
            ],
            contains: [e.BACKSLASH_ESCAPE, a]
        },
        o = e.inherit(s, {
            variants: [
                {
                    begin: /'/,
                    end: /'/
                },
                {
                    begin: /"/,
                    end: /"/
                },
                { begin: /[^\s,{}[\]]+/ }
            ]
        }),
        l = {
            className: 'number',
            begin: '\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b'
        },
        u = {
            end: ',',
            endsWithParent: !0,
            excludeEnd: !0,
            keywords: n,
            relevance: 0
        },
        c = {
            begin: /\{/,
            end: /\}/,
            contains: [u],
            illegal: '\\n',
            relevance: 0
        },
        d = {
            begin: '\\[',
            end: '\\]',
            contains: [u],
            illegal: '\\n',
            relevance: 0
        },
        f = [
            i,
            {
                className: 'meta',
                begin: '^---\\s*$',
                relevance: 10
            },
            {
                className: 'string',
                begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*'
            },
            {
                begin: '<%[%=-]?',
                end: '[%-]?%>',
                subLanguage: 'ruby',
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
            },
            {
                className: 'type',
                begin: '!\\w+!' + r
            },
            {
                className: 'type',
                begin: '!<' + r + '>'
            },
            {
                className: 'type',
                begin: '!' + r
            },
            {
                className: 'type',
                begin: '!!' + r
            },
            {
                className: 'meta',
                begin: '&' + e.UNDERSCORE_IDENT_RE + '$'
            },
            {
                className: 'meta',
                begin: '\\*' + e.UNDERSCORE_IDENT_RE + '$'
            },
            {
                className: 'bullet',
                begin: '-(?=[ ]|$)',
                relevance: 0
            },
            e.HASH_COMMENT_MODE,
            {
                beginKeywords: n,
                keywords: { literal: n }
            },
            l,
            {
                className: 'number',
                begin: e.C_NUMBER_RE + '\\b',
                relevance: 0
            },
            c,
            d,
            s
        ],
        _ = [...f];
    return (
        _.pop(),
        _.push(o),
        (u.contains = _),
        {
            name: 'YAML',
            case_insensitive: !0,
            aliases: ['yml'],
            contains: f
        }
    );
}
e.exports = n;
