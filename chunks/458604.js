"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("272030"),
  d = n("206230"),
  c = n("385976"),
  f = n("858619"),
  p = n("867805"),
  m = n("246511"),
  h = n("139321"),
  E = n("140708"),
  g = n("305961"),
  S = n("773336"),
  C = n("215550"),
  T = n("782340"),
  v = n("465439");
let I = (e, t) => "".concat(e, ":").concat(t),
  _ = i.forwardRef(function(e, t) {
    let n, {
        emoji: i,
        isFavorite: a,
        isLargeSize: u,
        isMediumSize: d,
        isInspected: c,
        isDisabled: p,
        showPulse: h,
        columnIndex: E,
        rowIndex: S,
        size: I,
        surrogateCodePoint: _,
        allowAnimatedEmoji: y,
        selectedItemClassName: A,
        ...N
      } = e,
      x = (0, r.useStateFromStores)([g.default], () => i.type === f.EmojiTypes.GUILD ? g.default.getGuild(i.guildId) : void 0, [i]);
    return (0, l.jsx)(o.FocusRing, {
      children: (0, l.jsx)("button", {
        ...N,
        className: s(v.emojiItem, {
          [v.emojiItemLarge]: u,
          [v.emojiItemMedium]: d,
          [v.emojiItemSelected]: c,
          [null != A ? A : ""]: c,
          [v.emojiItemDisabled]: p,
          [v.showPulse]: h
        }),
        "data-type": m.PickerContextMenuDataTypes.EMOJI,
        "data-id": i.id,
        "data-name": i.name,
        ref: t,
        children: (0, l.jsx)(C.default, {
          "aria-label": (n = i.allNamesString, ((null == x ? void 0 : x.name) != null && (n = T.default.Messages.EMOJI_FROM_GUILD_LABEL.format({
            names: n,
            guildName: x.name
          })), a) ? T.default.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
            names: n
          }) : n),
          columnIndex: E,
          rowIndex: S,
          emoji: i,
          size: I,
          surrogateCodePoint: _,
          allowAnimatedEmoji: y
        })
      })
    })
  });

function y(e) {
  let {
    descriptor: t,
    emojiItemKey: a,
    isInspected: s,
    rowIndex: f,
    channelGuildId: m,
    onInspect: g,
    onSelect: C,
    isScrolling: v,
    isUsingKeyboardNavigation: y,
    showEmojiFavoriteTooltip: A,
    surrogateCodePoint: N,
    selectedItemClassName: x,
    getEmojiItemProps: O,
    isMediumSize: R,
    isLargeSize: M,
    pulseItemKey: L,
    allowAnimatedEmoji: P,
    setPulseItemKey: b,
    messageId: j,
    isBurstReaction: U,
    rowPosition: D
  } = e, [k, w] = i.useState(""), F = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), G = (0, r.useStateFromStores)([c.default], () => c.default.getDisambiguatedEmojiContext(m), [m]), B = i.useRef(null), {
    emoji: H,
    size: V,
    isDisabled: K,
    columnIndex: W
  } = t, Y = e => {
    if (e.stopPropagation(), v.current || y.current) return;
    let n = e.altKey;
    n && !c.default.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(H) && b(a), (0, h.hideHotspot)(h.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), C(t, {
      isFinalSelection: !e.shiftKey,
      toggleFavorite: n
    })
  }, z = () => {
    !v.current && !y.current && g(t)
  }, J = e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("367343").then(n.bind(n, "367343"));
      return t => (0, l.jsx)(e, {
        ...t
      })
    })
  }, q = function() {
    var e;
    let {
      onMouseEnter: t,
      onMouseLeave: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      ref: r,
      tabIndex: o,
      onFocus: u,
      ...d
    } = null !== (e = O(W, f)) && void 0 !== e ? e : {};
    return (0, i.createElement)("li", {
      ...d,
      key: a,
      ref: B
    }, k !== I(W, f) && (0, l.jsx)(_, {
      ref: r,
      emoji: H,
      isFavorite: G.isFavoriteEmojiWithoutFetchingLatest(H),
      isLargeSize: M,
      isMediumSize: R,
      isInspected: s,
      isDisabled: K,
      showPulse: L === a,
      allowAnimatedEmoji: P,
      onFocus: null != u ? u : z,
      onMouseMove: z,
      onMouseEnter: t,
      onMouseLeave: n,
      onClick: e => {
        if (null != B.current && null != D && null != j && !e.shiftKey && null != H.name && U && !F && P) {
          let e = null == H.id ? p.default.convertNameToSurrogate(H.name) : H.name,
            t = B.current.getBoundingClientRect();
          t.x = D.x + (W + 1) * V, w(I(W, f)), (0, E.addReactionPickerAnimation)(j, e, H.id, t)
        }
        Y(e)
      },
      onContextMenu: J,
      tabIndex: o,
      columnIndex: W,
      rowIndex: f,
      size: V,
      surrogateCodePoint: N,
      selectedItemClassName: x
    }))
  };
  return A ? (0, l.jsx)(o.Tooltip, {
    text: T.default.Messages.EMOJI_FAVORITE_TOOLTIP.format({
      key: (0, S.isMac)() ? "Opt" : "Alt"
    }),
    position: "top",
    delay: 200,
    children: e => q(e)
  }, a) : q()
}