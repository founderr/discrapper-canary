var i = r(47120);
var a = r(302454),
    s = r.n(a),
    o = r(339085),
    l = r(633302),
    u = r(176354),
    c = r(594199);
let d = {
    s: {
        requiredFirstCharacters: ['~'],
        match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
    },
    highlight: {
        order: c.ZP.order,
        match: () => null
    },
    emoji: {
        order: c.ZP.order,
        requiredFirstCharacters: [':'],
        match(e) {
            let n = l.ZP.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
            return null != n && '' !== l.ZP.convertNameToSurrogate(n[1]) ? n : null;
        },
        parse(e) {
            let [n, r] = e,
                i = l.ZP.convertNameToSurrogate(r);
            return null == i || '' === i
                ? {
                      type: 'text',
                      content: n
                  }
                : {
                      name: ':'.concat(r, ':'),
                      surrogate: i,
                      src: u.ZP.getURL(i)
                  };
        }
    },
    customEmoji: {
        order: s().defaultRules.codeBlock.order,
        requiredFirstCharacters: ['<'],
        match: (e) => /^<(a)?:(\w+):(\d+)>/.exec(e),
        parse(e, n, r) {
            let [i, a, s, l] = e,
                { guildId: u } = r,
                c = o.ZP.getDisambiguatedEmojiContext(u).getById(l),
                d = null == c || c.require_colons;
            return (
                null != c && (s = c.name),
                {
                    emojiId: l,
                    name: d ? ':'.concat(s, ':') : s,
                    animated: 'a' === a
                }
            );
        }
    },
    text: {
        parse(e) {
            let n = l.ZP.findInlineEmojisFromSurrogates(e[0]),
                r = 0;
            return n.map((e) => {
                if ('text' === e.type) {
                    let n = {
                        index: r,
                        0: e.text
                    };
                    return (
                        (r += e.text.length),
                        {
                            type: 'text',
                            content: e.text,
                            originalMatch: n
                        }
                    );
                }
                {
                    let n = {
                        index: r,
                        0: e.surrogate
                    };
                    return (
                        (r += e.surrogate.length),
                        {
                            type: 'emoji',
                            name: e.emojiName,
                            surrogate: e.surrogate,
                            src: u.ZP.getURL(e.surrogate),
                            originalMatch: n
                        }
                    );
                }
            });
        }
    },
    looseEm: {
        ...s().defaultRules.em,
        match: s().inlineRegex(RegExp('^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)')),
        parse: (e, n, r) => ({
            type: 'em',
            content: n(e[1], r),
            originalMatch: e
        })
    }
};
n.Z = d;
