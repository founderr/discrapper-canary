var r = n(47120);
var i = n(302454),
    a = n.n(i),
    o = n(339085),
    s = n(633302),
    l = n(176354),
    u = n(594199);
let c = {
    s: {
        requiredFirstCharacters: ['~'],
        match: a().inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
    },
    highlight: {
        order: u.ZP.order,
        match: () => null
    },
    emoji: {
        order: u.ZP.order,
        requiredFirstCharacters: [':'],
        match(e) {
            let t = s.ZP.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
            return null != t && '' !== s.ZP.convertNameToSurrogate(t[1]) ? t : null;
        },
        parse(e) {
            let [t, n] = e,
                r = s.ZP.convertNameToSurrogate(n);
            return null == r || '' === r
                ? {
                      type: 'text',
                      content: t
                  }
                : {
                      name: ':'.concat(n, ':'),
                      surrogate: r,
                      src: l.ZP.getURL(r)
                  };
        }
    },
    customEmoji: {
        order: a().defaultRules.codeBlock.order,
        requiredFirstCharacters: ['<'],
        match: (e) => /^<(a)?:(\w+):(\d+)>/.exec(e),
        parse(e, t, n) {
            let [r, i, a, s] = e,
                { guildId: l } = n,
                u = o.ZP.getDisambiguatedEmojiContext(l).getById(s),
                c = null == u || u.require_colons;
            return (
                null != u && (a = u.name),
                {
                    emojiId: s,
                    name: c ? ':'.concat(a, ':') : a,
                    animated: 'a' === i
                }
            );
        }
    },
    text: {
        parse(e) {
            let t = s.ZP.findInlineEmojisFromSurrogates(e[0]),
                n = 0;
            return t.map((e) => {
                if ('text' === e.type) {
                    let t = {
                        index: n,
                        0: e.text
                    };
                    return (
                        (n += e.text.length),
                        {
                            type: 'text',
                            content: e.text,
                            originalMatch: t
                        }
                    );
                }
                {
                    let t = {
                        index: n,
                        0: e.surrogate
                    };
                    return (
                        (n += e.surrogate.length),
                        {
                            type: 'emoji',
                            name: e.emojiName,
                            surrogate: e.surrogate,
                            src: l.ZP.getURL(e.surrogate),
                            originalMatch: t
                        }
                    );
                }
            });
        }
    },
    looseEm: {
        ...a().defaultRules.em,
        match: a().inlineRegex(RegExp('^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)')),
        parse: (e, t, n) => ({
            type: 'em',
            content: t(e[1], n),
            originalMatch: e
        })
    }
};
t.Z = c;
