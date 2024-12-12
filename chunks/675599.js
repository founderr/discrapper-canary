function n(e) {
    let n = {
            keyword: ['rec', 'with', 'let', 'in', 'inherit', 'assert', 'if', 'else', 'then'],
            literal: ['true', 'false', 'or', 'and', 'null'],
            built_in: ['import', 'abort', 'baseNameOf', 'dirOf', 'isNull', 'builtins', 'map', 'removeAttrs', 'throw', 'toString', 'derivation']
        },
        r = {
            className: 'subst',
            begin: /\$\{/,
            end: /\}/,
            keywords: n
        },
        i = {
            begin: /[a-zA-Z0-9-_]+(\s*=)/,
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    className: 'attr',
                    begin: /\S+/,
                    relevance: 0.2
                }
            ]
        },
        a = {
            className: 'string',
            contains: [
                {
                    className: 'char.escape',
                    begin: /''\$/
                },
                r
            ],
            variants: [
                {
                    begin: "''",
                    end: "''"
                },
                {
                    begin: '"',
                    end: '"'
                }
            ]
        },
        s = [e.NUMBER_MODE, e.HASH_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, a, i];
    return (
        (r.contains = s),
        {
            name: 'Nix',
            aliases: ['nixos'],
            keywords: n,
            contains: s
        }
    );
}
e.exports = n;
