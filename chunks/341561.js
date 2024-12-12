var i = r(200651);
r(192379);
var a = r(952265),
    s = r(588468),
    o = r(125900),
    l = r(12327),
    u = r(285651),
    c = r(268350),
    d = r(926491),
    f = r(373228),
    _ = r(419922),
    h = r(430824),
    p = r(483360),
    m = r(877565),
    g = r(590921),
    E = r(665692),
    v = r(981631),
    I = r(388032),
    T = r(929349);
let b = 8,
    y = 4,
    S = 4,
    A = 40,
    N = 6;
function C(e, n) {
    return (0, i.jsx)(_.ZP, {
        sticker: e,
        isInteracting: n,
        size: 40
    });
}
let R = {
    sentinel: E.Iv,
    stores: [d.Z],
    matches: (e, n, r, i, a) => r.length > 1,
    queryResults(e, n, r, i, a) {
        let s = i.allowSoundmoji && (0, o.dX)({ location: 'queryResults' }),
            l = i.allowStickers || s ? 0 : A,
            d = v.rnv + l,
            {
                emojis: { unlocked: f }
            } = p.ZP.queryEmojiResults({
                query: r,
                channel: e,
                intention: i.emojiIntention,
                maxCount: d
            });
        if ('-' === r[0]) {
            let e = (e) => {
                var n;
                return null === (n = e.names) || void 0 === n ? void 0 : n.includes(r);
            };
            f = f.filter(e);
        }
        let _ = [];
        if (i.allowStickers) {
            (0, c.$p)();
            let n = p.ZP.queryStickers([r], !0, [e, (e, n) => n === u.eb.SENDABLE]),
                i = Math.max(y, b - f.length);
            (_ = n.slice(0, i)), '-' === r[0] && (_ = n.filter((e) => e.sticker.name === r));
        }
        let h = [];
        s &&
            ((h = p.ZP.querySoundmoji(r, e)
                .map((e) => ({ sound: e }))
                .slice(0, S)),
            '-' === r[0] && (h = h.filter((e) => e.sound.name === r)));
        let m = f.slice(0, Math.max(N, d - _.length - h.length));
        return {
            results: {
                emojis: m,
                emojisLocked: [],
                stickers: _,
                soundmoji: h
            },
            metadata: {
                numEmojiResults: m.length,
                numLockedEmojiResults: 0,
                numStickerResults: _.length,
                numSoundmojiResults: h.length
            }
        };
    },
    renderResults(e) {
        let {
                results: { emojis: n, stickers: o, soundmoji: l, emojisLocked: u },
                selectedIndex: c,
                query: d,
                onHover: f,
                onClick: _
            } = e,
            p = () => {
                (0, a.ZD)(async () => {
                    let { default: e } = await r.e('9766').then(r.bind(r, 889684));
                    return (n) => (0, i.jsx)(e, { ...n });
                });
            },
            g = n.length > 0 || u.length > 0,
            v = o.length > 0;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, m.HI)({
                    query: d,
                    selectedIndex: c,
                    autocompletes: n,
                    onHover: f,
                    onClick: _,
                    titleWithQuery: I.t.ksAVYm,
                    titleWithoutQuery: I.intl.string(I.t.sMOuub),
                    Component: s.ZP.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: E.Iv,
                        guild: null != e.guildId ? h.Z.getGuild(e.guildId) : null
                    }),
                    getQuery: (e) => ''.concat(E.Iv).concat(e),
                    key: 'emoji'
                }),
                u.length > 0
                    ? (0, m.HI)({
                          query: d,
                          selectedIndex: c,
                          autocompletes: u,
                          onHover: f,
                          onClick: p,
                          titleWithQuery: 0 === n.length ? I.t.ksAVYm : null,
                          titleWithoutQuery: 0 === n.length ? I.intl.string(I.t.sMOuub) : null,
                          Component: s.ZP.EmojiUpsell,
                          getProps: (e) => {
                              let { emojis: n } = e;
                              return {
                                  key: 'emoji-upsell',
                                  emojis: n
                              };
                          },
                          getQuery: (e) => ''.concat(E.Iv).concat(e),
                          key: 'emoji-upsell',
                          indexOffset: n.length
                      })
                    : null,
                g && v && (0, i.jsx)(s.ZP.Divider, { className: T.divider }),
                (0, m.HI)({
                    query: d,
                    selectedIndex: c,
                    autocompletes: o,
                    onHover: f,
                    onClick: _,
                    titleWithQuery: I.t.uferGB,
                    titleWithoutQuery: I.intl.string(I.t['fT+Yjo']),
                    Component: s.ZP.Sticker,
                    getProps: (e) => {
                        let { comparator: n, sticker: r } = e;
                        return {
                            renderSticker: C,
                            queryMatch: n !== r.name.toLocaleLowerCase() ? n : void 0,
                            sticker: r,
                            key: r.id
                        };
                    },
                    getQuery: (e) => e,
                    key: 'stickers',
                    indexOffset: n.length + u.length,
                    headerClassName: g ? T.secondarySection : void 0
                }),
                (g || v) && l.length > 0 && (0, i.jsx)(s.ZP.Divider, { className: T.divider }),
                (0, m.HI)({
                    query: d,
                    selectedIndex: c,
                    autocompletes: l,
                    onHover: f,
                    onClick: _,
                    titleWithQuery: I.t['0cKBGB'],
                    titleWithoutQuery: I.intl.string(I.t.EHlAMT),
                    Component: s.ZP.Soundmoji,
                    getProps: (e) => {
                        let { sound: n } = e;
                        return {
                            sound: n,
                            key: n.soundId
                        };
                    },
                    getQuery: (e) => e,
                    key: 'soundmoji',
                    indexOffset: n.length + u.length + o.length,
                    headerClassName: g || v ? T.secondarySection : void 0
                })
            ]
        });
    },
    onSelect(e) {
        let {
            results: { emojis: n, emojisLocked: r, soundmoji: i, stickers: a },
            index: s,
            options: o
        } = e;
        if (s < n.length) {
            let e = n[s];
            return (
                o.insertText(O(e), D(e)),
                {
                    type: g.z2.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: n.length,
                        numStickerResults: a.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated
                    }
                }
            );
        }
        if ((s -= n.length) < r.length) return { type: null };
        if ((s -= r.length) < a.length) {
            let e = a[s];
            return (
                o.insertText(''),
                o.sendSticker(e.sticker, f.V0.AUTOCOMPLETE),
                {
                    type: g.z2.STICKER,
                    metadata: {
                        numEmojiResults: n.length,
                        numStickerResults: a.length,
                        stickerId: e.sticker.id
                    }
                }
            );
        }
        if ((s -= a.length) < i.length) {
            let e = i[s];
            return (
                o.insertText((0, l.Z)(e.sound.guildId, e.sound.soundId)),
                {
                    type: g.z2.SOUNDMOJI,
                    metadata: {
                        numEmojiResults: n.length,
                        numStickerResults: a.length
                    }
                }
            );
        }
        return { type: null };
    }
};
function O(e) {
    return ''.concat(E.Iv).concat(e.name).concat(E.Iv);
}
function D(e) {
    var n;
    let r = e.animated ? 'a' : '';
    return e.managed || null == e.id
        ? ''.concat(E.Iv).concat(e.name).concat(E.Iv)
        : '<'
              .concat(r, ':')
              .concat(null !== (n = e.originalName) && void 0 !== n ? n : e.name, ':')
              .concat(e.id, '>');
}
n.Z = R;
