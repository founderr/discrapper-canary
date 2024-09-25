function t(e) {
    let t = {
            keyword: ['rec', 'with', 'let', 'in', 'inherit', 'assert', 'if', 'else', 'then'],
            literal: ['true', 'false', 'or', 'and', 'null'],
            built_in: ['import', 'abort', 'baseNameOf', 'dirOf', 'isNull', 'builtins', 'map', 'removeAttrs', 'throw', 'toString', 'derivation']
        },
        n = {
            className: 'subst',
            begin: /\$\{/,
            end: /\}/,
            keywords: t
        },
        r = {
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
        i = {
            className: 'string',
            contains: [
                {
                    className: 'char.escape',
                    begin: /''\$/
                },
                n
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
        a = [e.NUMBER_MODE, e.HASH_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, i, r];
    return (
        (n.contains = a),
        {
            name: 'Nix',
            aliases: ['nixos'],
            keywords: t,
            contains: a
        }
    );
}
e.exports = t;
