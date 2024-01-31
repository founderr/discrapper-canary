"use strict";
i.r(t), i.d(t, {
  default: function() {
    return v
  }
}), i("222007");
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  a = i.n(s),
  r = i("446674"),
  o = i("77078"),
  u = i("272030"),
  c = i("206230"),
  d = i("385976"),
  f = i("858619"),
  E = i("867805"),
  m = i("246511"),
  I = i("139321"),
  p = i("140708"),
  g = i("305961"),
  _ = i("773336"),
  S = i("215550"),
  C = i("782340"),
  h = i("465439");
let T = (e, t) => "".concat(e, ":").concat(t),
  N = l.forwardRef(function(e, t) {
    let i, {
        emoji: l,
        isFavorite: s,
        isLargeSize: u,
        isMediumSize: c,
        isInspected: d,
        isDisabled: E,
        showPulse: I,
        columnIndex: p,
        rowIndex: _,
        size: T,
        surrogateCodePoint: N,
        allowAnimatedEmoji: v,
        selectedItemClassName: A,
        ...y
      } = e,
      j = (0, r.useStateFromStores)([g.default], () => l.type === f.EmojiTypes.GUILD ? g.default.getGuild(l.guildId) : void 0, [l]);
    return (0, n.jsx)(o.FocusRing, {
      children: (0, n.jsx)("button", {
        ...y,
        className: a(h.emojiItem, {
          [h.emojiItemLarge]: u,
          [h.emojiItemMedium]: c,
          [h.emojiItemSelected]: d,
          [null != A ? A : ""]: d,
          [h.emojiItemDisabled]: E,
          [h.showPulse]: I
        }),
        "data-type": m.PickerContextMenuDataTypes.EMOJI,
        "data-id": l.id,
        "data-pack-id": l.type === f.EmojiTypes.PACK ? l.packId : void 0,
        "data-name": l.name,
        ref: t,
        children: (0, n.jsx)(S.default, {
          "aria-label": (i = l.allNamesString, ((null == j ? void 0 : j.name) != null && (i = C.default.Messages.EMOJI_FROM_GUILD_LABEL.format({
            names: i,
            guildName: j.name
          })), s) ? C.default.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
            names: i
          }) : i),
          columnIndex: p,
          rowIndex: _,
          emoji: l,
          size: T,
          surrogateCodePoint: N,
          allowAnimatedEmoji: v
        })
      })
    })
  });

function v(e) {
  let {
    descriptor: t,
    emojiItemKey: s,
    isInspected: a,
    rowIndex: f,
    channelGuildId: m,
    onInspect: g,
    onSelect: S,
    isScrolling: h,
    isUsingKeyboardNavigation: v,
    showEmojiFavoriteTooltip: A,
    surrogateCodePoint: y,
    selectedItemClassName: j,
    getEmojiItemProps: R,
    isMediumSize: O,
    isLargeSize: M,
    pulseItemKey: x,
    allowAnimatedEmoji: P,
    setPulseItemKey: L,
    messageId: D,
    isBurstReaction: b,
    rowPosition: U
  } = e, [w, G] = l.useState(""), k = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion), V = (0, r.useStateFromStores)([d.default], () => d.default.getDisambiguatedEmojiContext(m), [m]), F = l.useRef(null), {
    emoji: H,
    size: K,
    isDisabled: B,
    columnIndex: J
  } = t, W = e => {
    if (e.stopPropagation(), h.current || v.current) return;
    let i = e.altKey;
    i && !d.default.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(H) && L(s), (0, I.hideHotspot)(I.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), S(t, {
      isFinalSelection: !e.shiftKey,
      toggleFavorite: i
    })
  }, z = () => {
    !h.current && !v.current && g(t)
  }, Z = e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await i.el("367343").then(i.bind(i, "367343"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    })
  }, Y = function() {
    var e;
    let {
      onMouseEnter: t,
      onMouseLeave: i
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      ref: r,
      tabIndex: o,
      onFocus: u,
      ...c
    } = null !== (e = R(J, f)) && void 0 !== e ? e : {};
    return (0, l.createElement)("li", {
      ...c,
      key: s,
      ref: F
    }, w !== T(J, f) && (0, n.jsx)(N, {
      ref: r,
      emoji: H,
      isFavorite: V.isFavoriteEmojiWithoutFetchingLatest(H),
      isLargeSize: M,
      isMediumSize: O,
      isInspected: a,
      isDisabled: B,
      showPulse: x === s,
      allowAnimatedEmoji: P,
      onFocus: null != u ? u : z,
      onMouseMove: z,
      onMouseEnter: t,
      onMouseLeave: i,
      onClick: e => {
        if (null != F.current && null != U && null != D && !e.shiftKey && null != H.name && b && !k && P) {
          let e = null == H.id ? E.default.convertNameToSurrogate(H.name) : H.name,
            t = F.current.getBoundingClientRect();
          t.x = U.x + (J + 1) * K, G(T(J, f)), (0, p.addReactionPickerAnimation)(D, e, H.id, t)
        }
        W(e)
      },
      onContextMenu: Z,
      tabIndex: o,
      columnIndex: J,
      rowIndex: f,
      size: K,
      surrogateCodePoint: y,
      selectedItemClassName: j
    }))
  };
  return A ? (0, n.jsx)(o.Tooltip, {
    text: C.default.Messages.EMOJI_FAVORITE_TOOLTIP.format({
      key: (0, _.isMac)() ? "Opt" : "Alt"
    }),
    position: "top",
    delay: 200,
    children: e => Y(e)
  }, s) : Y()
}