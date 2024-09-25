function t(e) {
    let t = e.regex,
        n = {
            begin: /<\/?[A-Za-z_]/,
            end: '>',
            subLanguage: 'xml',
            relevance: 0
        },
        r = {
            begin: '^[-\\*]{3,}',
            end: '$'
        },
        i = {
            className: 'code',
            variants: [
                { begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*' },
                { begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*' },
                {
                    begin: '```',
                    end: '```+[ ]*$'
                },
                {
                    begin: '~~~',
                    end: '~~~+[ ]*$'
                },
                { begin: '`.+?`' },
                {
                    begin: '(?=^( {4}|\\t))',
                    contains: [
                        {
                            begin: '^( {4}|\\t)',
                            end: '(\\n)$'
                        }
                    ],
                    relevance: 0
                }
            ]
        },
        a = {
            className: 'bullet',
            begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
            end: '\\s+',
            excludeEnd: !0
        },
        o = {
            begin: /^\[[^\n]+\]:/,
            returnBegin: !0,
            contains: [
                {
                    className: 'symbol',
                    begin: /\[/,
                    end: /\]/,
                    excludeBegin: !0,
                    excludeEnd: !0
                },
                {
                    className: 'link',
                    begin: /:\s*/,
                    end: /$/,
                    excludeBegin: !0
                }
            ]
        },
        s = /[A-Za-z][A-Za-z0-9+.-]*/,
        l = {
            variants: [
                {
                    begin: /\[.+?\]\[.*?\]/,
                    relevance: 0
                },
                {
                    begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                    relevance: 2
                },
                {
                    begin: t.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/),
                    relevance: 2
                },
                {
                    begin: /\[.+?\]\([./?&#].*?\)/,
                    relevance: 1
                },
                {
                    begin: /\[.*?\]\(.*?\)/,
                    relevance: 0
                }
            ],
            returnBegin: !0,
            contains: [
                { match: /\[(?=\])/ },
                {
                    className: 'string',
                    relevance: 0,
                    begin: '\\[',
                    end: '\\]',
                    excludeBegin: !0,
                    returnEnd: !0
                },
                {
                    className: 'link',
                    relevance: 0,
                    begin: '\\]\\(',
                    end: '\\)',
                    excludeBegin: !0,
                    excludeEnd: !0
                },
                {
                    className: 'symbol',
                    relevance: 0,
                    begin: '\\]\\[',
                    end: '\\]',
                    excludeBegin: !0,
                    excludeEnd: !0
                }
            ]
        },
        u = {
            className: 'strong',
            contains: [],
            variants: [
                {
                    begin: /_{2}(?!\s)/,
                    end: /_{2}/
                },
                {
                    begin: /\*{2}(?!\s)/,
                    end: /\*{2}/
                }
            ]
        },
        c = {
            className: 'emphasis',
            contains: [],
            variants: [
                {
                    begin: /\*(?![*\s])/,
                    end: /\*/
                },
                {
                    begin: /_(?![_\s])/,
                    end: /_/,
                    relevance: 0
                }
            ]
        },
        d = e.inherit(u, { contains: [] }),
        _ = e.inherit(c, { contains: [] });
    u.contains.push(_), c.contains.push(d);
    let E = [n, l];
    [u, c, d, _].forEach((e) => {
        e.contains = e.contains.concat(E);
    });
    let f = {
        className: 'section',
        variants: [
            {
                begin: '^#{1,6}',
                end: '$',
                contains: (E = E.concat(u, c))
            },
            {
                begin: '(?=^.+?\\n[=-]{2,}$)',
                contains: [
                    { begin: '^[=-]*$' },
                    {
                        begin: '^',
                        end: '\\n',
                        contains: E
                    }
                ]
            }
        ]
    };
    return {
        name: 'Markdown',
        aliases: ['md', 'mkdown', 'mkd'],
        contains: [
            f,
            n,
            a,
            u,
            c,
            {
                className: 'quote',
                begin: '^>\\s+',
                contains: E,
                end: '$'
            },
            i,
            r,
            l,
            o
        ]
    };
}
e.exports = t;
