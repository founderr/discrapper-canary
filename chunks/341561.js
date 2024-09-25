var r = n(735250);
n(470079);
var i = n(952265),
    a = n(588468),
    o = n(285651),
    s = n(268350),
    l = n(926491),
    u = n(373228),
    c = n(419922),
    d = n(430824),
    _ = n(483360),
    E = n(877565),
    f = n(590921),
    h = n(665692),
    p = n(981631),
    m = n(689938),
    I = n(438993);
let T = 8,
    g = 4,
    S = 40;
function A(e, t) {
    return (0, r.jsx)(c.ZP, {
        sticker: e,
        isInteracting: t,
        size: 40
    });
}
let v = {
    sentinel: h.Iv,
    stores: [l.Z],
    matches: (e, t, n, r, i) => n.length > 1,
    queryResults(e, t, n, r, i) {
        let a = r.allowStickers ? 0 : S,
            l = p.rnv + a,
            {
                emojis: { unlocked: u }
            } = _.ZP.queryEmojiResults({
                query: n,
                channel: e,
                intention: r.emojiIntention,
                maxCount: l
            });
        if ('-' === n[0]) {
            let e = (e) => {
                var t;
                return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n);
            };
            u = u.filter(e);
        }
        let c = [];
        if (r.allowStickers) {
            (0, s.$p)();
            let t = _.ZP.queryStickers([n], !0, [e, (e, t) => t === o.eb.SENDABLE]),
                r = Math.max(g, T - u.length);
            (c = t.slice(0, r)), '-' === n[0] && (c = t.filter((e) => e.sticker.name === n));
        }
        let d = u.slice(0, l - c.length);
        return {
            results: {
                emojis: d,
                emojisLocked: [],
                stickers: c
            },
            metadata: {
                numEmojiResults: d.length,
                numLockedEmojiResults: 0,
                numStickerResults: c.length
            }
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: o, emojisLocked: s },
                selectedIndex: l,
                query: u,
                onHover: c,
                onClick: _
            } = e,
            f = () => {
                (0, i.ZD)(async () => {
                    let { default: e } = await n.e('9766').then(n.bind(n, 889684));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, E.HI)({
                    query: u,
                    selectedIndex: l,
                    autocompletes: t,
                    onHover: c,
                    onClick: _,
                    titleWithQuery: m.Z.Messages.EMOJI_MATCHING,
                    titleWithoutQuery: m.Z.Messages.EMOJI,
                    Component: a.ZP.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: h.Iv,
                        guild: null != e.guildId ? d.Z.getGuild(e.guildId) : null
                    }),
                    getQuery: (e) => ''.concat(h.Iv).concat(e),
                    key: 'emoji'
                }),
                s.length > 0
                    ? (0, E.HI)({
                          query: u,
                          selectedIndex: l,
                          autocompletes: s,
                          onHover: c,
                          onClick: f,
                          titleWithQuery: 0 === t.length ? m.Z.Messages.EMOJI_MATCHING : null,
                          titleWithoutQuery: 0 === t.length ? m.Z.Messages.EMOJI : null,
                          Component: a.ZP.EmojiUpsell,
                          getProps: (e) => {
                              let { emojis: t } = e;
                              return {
                                  key: 'emoji-upsell',
                                  emojis: t
                              };
                          },
                          getQuery: (e) => ''.concat(h.Iv).concat(e),
                          key: 'emoji-upsell',
                          indexOffset: t.length
                      })
                    : null,
                (t.length > 0 || s.length > 0) && o.length > 0 && (0, r.jsx)(a.ZP.Divider, { className: I.emojiStickersDivider }),
                (0, E.HI)({
                    query: u,
                    selectedIndex: l,
                    autocompletes: o,
                    onHover: c,
                    onClick: _,
                    titleWithQuery: m.Z.Messages.STICKERS_MATCHING,
                    titleWithoutQuery: m.Z.Messages.STICKER,
                    Component: a.ZP.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: A,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id
                        };
                    },
                    getQuery: (e) => e,
                    key: 'stickers',
                    indexOffset: t.length + s.length,
                    headerClassName: t.length > 0 ? I.stickersHeaderWithEmojiResults : void 0
                })
            ]
        });
    },
    onSelect(e) {
        let {
            results: { emojis: t, emojisLocked: n, stickers: r },
            index: i,
            options: a
        } = e;
        if (i < t.length) {
            let e = t[i];
            return (
                a.insertText(N(e), O(e)),
                {
                    type: f.z2.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated
                    }
                }
            );
        }
        if ((i -= t.length) < n.length) return { type: null };
        if ((i -= n.length) < r.length) {
            let e = r[i];
            return (
                a.insertText(''),
                a.sendSticker(e.sticker, u.V0.AUTOCOMPLETE),
                {
                    type: f.z2.STICKER,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                        stickerId: e.sticker.id
                    }
                }
            );
        }
        return { type: null };
    }
};
function N(e) {
    return ''.concat(h.Iv).concat(e.name).concat(h.Iv);
}
function O(e) {
    var t;
    let n = e.animated ? 'a' : '';
    return e.managed || null == e.id
        ? ''.concat(h.Iv).concat(e.name).concat(h.Iv)
        : '<'
              .concat(n, ':')
              .concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ':')
              .concat(e.id, '>');
}
t.Z = v;
