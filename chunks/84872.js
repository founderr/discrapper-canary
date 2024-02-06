"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("37983");
n("884691");
var i = n("551042"),
  r = n("866353"),
  o = n("467094"),
  s = n("364685"),
  a = n("161585"),
  u = n("41170"),
  d = n("305961"),
  c = n("501536"),
  f = n("25292"),
  p = n("200294"),
  m = n("851745"),
  h = n("406291"),
  E = n("49111"),
  S = n("782340"),
  g = n("106226");

function C(e, t) {
  return (0, l.jsx)(u.default, {
    sticker: e,
    isInteracting: t,
    size: 40
  })
}
let T = {
  sentinel: h.EMOJI_SENTINEL,
  stores: [s.default],
  matches: (e, t, n, l, i) => n.length > 1,
  queryResults(e, t, n, l, i) {
    let s = l.allowStickers ? 0 : 40,
      a = E.MAX_AUTOCOMPLETE_RESULTS + s,
      {
        emojis: {
          unlocked: u
        }
      } = f.default.queryEmojiResults({
        query: n,
        channel: e,
        intention: l.emojiIntention,
        maxCount: a
      });
    "-" === n[0] && (u = u.filter(e => {
      var t;
      return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
    }));
    let d = [];
    if (l.allowStickers) {
      (0, o.fetchStickerPacks)();
      let t = f.default.queryStickers([n], !0, [e, (e, t) => t === r.StickerSendability.SENDABLE]),
        l = Math.max(4, 8 - u.length);
      d = t.slice(0, l), "-" === n[0] && (d = t.filter(e => e.sticker.name === n))
    }
    let c = u.slice(0, a - d.length);
    return {
      results: {
        emojis: c,
        emojisLocked: [],
        stickers: d
      },
      metadata: {
        numEmojiResults: c.length,
        numStickerResults: d.length
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t,
        stickers: r,
        emojisLocked: o
      },
      selectedIndex: s,
      query: a,
      onHover: u,
      onClick: f
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, p.renderAutocompleteGroup)({
        query: a,
        selectedIndex: s,
        autocompletes: t,
        onHover: u,
        onClick: f,
        titleWithQuery: S.default.Messages.EMOJI_MATCHING,
        titleWithoutQuery: S.default.Messages.EMOJI,
        Component: c.default.Emoji,
        getProps: e => ({
          emoji: e,
          key: e.id || e.uniqueName || e.name,
          sentinel: h.EMOJI_SENTINEL,
          guild: null != e.guildId ? d.default.getGuild(e.guildId) : null
        }),
        getQuery: e => "".concat(h.EMOJI_SENTINEL).concat(e),
        key: "emoji"
      }), o.length > 0 ? (0, p.renderAutocompleteGroup)({
        query: a,
        selectedIndex: s,
        autocompletes: o,
        onHover: u,
        onClick: () => {
          (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("499237").then(n.bind(n, "499237"));
            return t => (0, l.jsx)(e, {
              ...t
            })
          })
        },
        titleWithQuery: 0 === t.length ? S.default.Messages.EMOJI_MATCHING : null,
        titleWithoutQuery: 0 === t.length ? S.default.Messages.EMOJI : null,
        Component: c.default.EmojiUpsell,
        getProps: e => {
          let {
            emojis: t
          } = e;
          return {
            key: "emoji-upsell",
            emojis: t
          }
        },
        getQuery: e => "".concat(h.EMOJI_SENTINEL).concat(e),
        key: "emoji-upsell",
        indexOffset: t.length
      }) : null, (t.length > 0 || o.length > 0) && r.length > 0 && (0, l.jsx)(c.default.Divider, {
        className: g.emojiStickersDivider
      }), (0, p.renderAutocompleteGroup)({
        query: a,
        selectedIndex: s,
        autocompletes: r,
        onHover: u,
        onClick: f,
        titleWithQuery: S.default.Messages.STICKERS_MATCHING,
        titleWithoutQuery: S.default.Messages.STICKER,
        Component: c.default.Sticker,
        getProps: e => {
          let {
            comparator: t,
            sticker: n
          } = e;
          return {
            renderSticker: C,
            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
            sticker: n,
            key: n.id
          }
        },
        getQuery: e => e,
        key: "stickers",
        indexOffset: t.length + o.length,
        headerClassName: t.length > 0 ? g.stickersHeaderWithEmojiResults : void 0
      })]
    })
  },
  onSelect(e) {
    let {
      results: {
        emojis: t,
        emojisLocked: n,
        stickers: l
      },
      index: i,
      options: r
    } = e;
    if (i < t.length) {
      let e = t[i];
      return r.insertText(function(e) {
        return "".concat(h.EMOJI_SENTINEL).concat(e.name).concat(h.EMOJI_SENTINEL)
      }(e), function(e) {
        var t;
        let n = e.animated ? "a" : "";
        return e.managed || null == e.id ? "".concat(h.EMOJI_SENTINEL).concat(e.name).concat(h.EMOJI_SENTINEL) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
      }(e)), {
        type: m.AutocompleteSelectionTypes.EMOJI,
        metadata: {
          emojiId: e.id,
          numEmojiResults: t.length,
          numStickerResults: l.length,
          expressionName: e.name,
          isCustom: null != e.id,
          isAnimated: e.animated
        }
      }
    }
    if ((i -= t.length) < n.length) return {
      type: null
    };
    if ((i -= n.length) < l.length) {
      let e = l[i];
      return r.insertText(""), r.sendSticker(e.sticker, a.StickerSelectLocation.AUTOCOMPLETE), {
        type: m.AutocompleteSelectionTypes.STICKER,
        metadata: {
          numEmojiResults: t.length,
          numStickerResults: l.length,
          stickerId: e.sticker.id
        }
      }
    }
    return {
      type: null
    }
  }
};
var v = T