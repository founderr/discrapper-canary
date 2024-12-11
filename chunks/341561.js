var r = n(200651);
n(192379);
var i = n(952265),
    a = n(588468),
    s = n(125900),
    o = n(12327),
    l = n(285651),
    u = n(268350),
    c = n(926491),
    d = n(373228),
    f = n(419922),
    _ = n(430824),
    p = n(483360),
    h = n(877565),
    m = n(590921),
    g = n(665692),
    E = n(981631),
    v = n(388032),
    I = n(929349);
function T(e, t) {
    return (0, r.jsx)(f.ZP, {
        sticker: e,
        isInteracting: t,
        size: 40
    });
}
let b = {
    sentinel: g.Iv,
    stores: [c.Z],
    matches: (e, t, n, r, i) => n.length > 1,
    queryResults(e, t, n, r, i) {
        let a = r.allowSoundmoji && (0, s.dX)({ location: 'queryResults' }),
            o = r.allowStickers || a ? 0 : 40,
            c = E.rnv + o,
            {
                emojis: { unlocked: d }
            } = p.ZP.queryEmojiResults({
                query: n,
                channel: e,
                intention: r.emojiIntention,
                maxCount: c
            });
        '-' === n[0] &&
            (d = d.filter((e) => {
                var t;
                return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n);
            }));
        let f = [];
        if (r.allowStickers) {
            (0, u.$p)();
            let t = p.ZP.queryStickers([n], !0, [e, (e, t) => t === l.eb.SENDABLE]),
                r = Math.max(4, 8 - d.length);
            (f = t.slice(0, r)), '-' === n[0] && (f = t.filter((e) => e.sticker.name === n));
        }
        let _ = [];
        a &&
            ((_ = p.ZP.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, 4)),
            '-' === n[0] && (_ = _.filter((e) => e.sound.name === n)));
        let h = d.slice(0, Math.max(6, c - f.length - _.length));
        return {
            results: {
                emojis: h,
                emojisLocked: [],
                stickers: f,
                soundmoji: _
            },
            metadata: {
                numEmojiResults: h.length,
                numLockedEmojiResults: 0,
                numStickerResults: f.length,
                numSoundmojiResults: _.length
            }
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: s, soundmoji: o, emojisLocked: l },
                selectedIndex: u,
                query: c,
                onHover: d,
                onClick: f
            } = e,
            p = t.length > 0 || l.length > 0,
            m = s.length > 0;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, h.HI)({
                    query: c,
                    selectedIndex: u,
                    autocompletes: t,
                    onHover: d,
                    onClick: f,
                    titleWithQuery: v.t.ksAVYm,
                    titleWithoutQuery: v.intl.string(v.t.sMOuub),
                    Component: a.ZP.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: g.Iv,
                        guild: null != e.guildId ? _.Z.getGuild(e.guildId) : null
                    }),
                    getQuery: (e) => ''.concat(g.Iv).concat(e),
                    key: 'emoji'
                }),
                l.length > 0
                    ? (0, h.HI)({
                          query: c,
                          selectedIndex: u,
                          autocompletes: l,
                          onHover: d,
                          onClick: () => {
                              (0, i.ZD)(async () => {
                                  let { default: e } = await n.e('9766').then(n.bind(n, 889684));
                                  return (t) => (0, r.jsx)(e, { ...t });
                              });
                          },
                          titleWithQuery: 0 === t.length ? v.t.ksAVYm : null,
                          titleWithoutQuery: 0 === t.length ? v.intl.string(v.t.sMOuub) : null,
                          Component: a.ZP.EmojiUpsell,
                          getProps: (e) => {
                              let { emojis: t } = e;
                              return {
                                  key: 'emoji-upsell',
                                  emojis: t
                              };
                          },
                          getQuery: (e) => ''.concat(g.Iv).concat(e),
                          key: 'emoji-upsell',
                          indexOffset: t.length
                      })
                    : null,
                p && m && (0, r.jsx)(a.ZP.Divider, { className: I.divider }),
                (0, h.HI)({
                    query: c,
                    selectedIndex: u,
                    autocompletes: s,
                    onHover: d,
                    onClick: f,
                    titleWithQuery: v.t.uferGB,
                    titleWithoutQuery: v.intl.string(v.t['fT+Yjo']),
                    Component: a.ZP.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: T,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id
                        };
                    },
                    getQuery: (e) => e,
                    key: 'stickers',
                    indexOffset: t.length + l.length,
                    headerClassName: p ? I.secondarySection : void 0
                }),
                (p || m) && o.length > 0 && (0, r.jsx)(a.ZP.Divider, { className: I.divider }),
                (0, h.HI)({
                    query: c,
                    selectedIndex: u,
                    autocompletes: o,
                    onHover: d,
                    onClick: f,
                    titleWithQuery: v.t['0cKBGB'],
                    titleWithoutQuery: v.intl.string(v.t.EHlAMT),
                    Component: a.ZP.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return {
                            sound: t,
                            key: t.soundId
                        };
                    },
                    getQuery: (e) => e,
                    key: 'soundmoji',
                    indexOffset: t.length + l.length + s.length,
                    headerClassName: p || m ? I.secondarySection : void 0
                })
            ]
        });
    },
    onSelect(e) {
        let {
            results: { emojis: t, emojisLocked: n, soundmoji: r, stickers: i },
            index: a,
            options: s
        } = e;
        if (a < t.length) {
            let e = t[a];
            return (
                s.insertText(
                    (function (e) {
                        return ''.concat(g.Iv).concat(e.name).concat(g.Iv);
                    })(e),
                    (function (e) {
                        var t;
                        let n = e.animated ? 'a' : '';
                        return e.managed || null == e.id
                            ? ''.concat(g.Iv).concat(e.name).concat(g.Iv)
                            : '<'
                                  .concat(n, ':')
                                  .concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ':')
                                  .concat(e.id, '>');
                    })(e)
                ),
                {
                    type: m.z2.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: t.length,
                        numStickerResults: i.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated
                    }
                }
            );
        }
        if ((a -= t.length) < n.length) return { type: null };
        if ((a -= n.length) < i.length) {
            let e = i[a];
            return (
                s.insertText(''),
                s.sendSticker(e.sticker, d.V0.AUTOCOMPLETE),
                {
                    type: m.z2.STICKER,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: i.length,
                        stickerId: e.sticker.id
                    }
                }
            );
        }
        if ((a -= i.length) < r.length) {
            let e = r[a];
            return (
                s.insertText((0, o.Z)(e.sound.guildId, e.sound.soundId)),
                {
                    type: m.z2.SOUNDMOJI,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: i.length
                    }
                }
            );
        }
        return { type: null };
    }
};
t.Z = b;
