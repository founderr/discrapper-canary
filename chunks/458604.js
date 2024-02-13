"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
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
  C = n("429569"),
  T = n("215550"),
  v = n("782340"),
  I = n("465439");
let _ = (e, t) => "".concat(e, ":").concat(t),
  y = i.forwardRef(function(e, t) {
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
        size: _,
        surrogateCodePoint: y,
        allowAnimatedEmoji: A,
        selectedItemClassName: N,
        inNitroLockedSection: x,
        ...O
      } = e,
      R = (0, r.useStateFromStores)([g.default], () => i.type === f.EmojiTypes.GUILD ? g.default.getGuild(i.guildId) : void 0, [i]),
      {
        enabled: M
      } = C.default.useExperiment({
        location: "Emoji Picker List"
      }, {
        autoTrackExposure: p
      }),
      L = p && M && !x;
    return (0, l.jsx)(o.FocusRing, {
      children: (0, l.jsx)("button", {
        ...O,
        className: s(I.emojiItem, {
          [I.emojiItemLarge]: u,
          [I.emojiItemMedium]: d,
          [I.emojiItemSelected]: c,
          [null != N ? N : ""]: c,
          [I.emojiItemDisabled]: p && !M,
          [I.showPulse]: h
        }),
        "data-type": m.PickerContextMenuDataTypes.EMOJI,
        "data-id": i.id,
        "data-name": i.name,
        ref: t,
        children: (0, l.jsx)(T.default, {
          "aria-label": (n = i.allNamesString, ((null == R ? void 0 : R.name) != null && (n = v.default.Messages.EMOJI_FROM_GUILD_LABEL.format({
            names: n,
            guildName: R.name
          })), a) ? v.default.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
            names: n
          }) : n),
          columnIndex: E,
          rowIndex: S,
          emoji: i,
          size: _,
          surrogateCodePoint: y,
          allowAnimatedEmoji: A,
          isLocked: L
        })
      })
    })
  });

function A(e) {
  let {
    descriptor: t,
    emojiItemKey: a,
    isInspected: s,
    rowIndex: f,
    channelGuildId: m,
    onInspect: g,
    onSelect: C,
    isScrolling: T,
    isUsingKeyboardNavigation: I,
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
    rowPosition: D,
    inNitroLockedSection: k
  } = e, [w, F] = i.useState(""), G = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), B = (0, r.useStateFromStores)([c.default], () => c.default.getDisambiguatedEmojiContext(m), [m]), H = i.useRef(null), {
    emoji: V,
    size: K,
    isDisabled: W,
    columnIndex: Y
  } = t, z = e => {
    if (e.stopPropagation(), T.current || I.current) return;
    let n = e.altKey;
    n && !c.default.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(V) && b(a), (0, h.hideHotspot)(h.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), C(t, {
      isFinalSelection: !e.shiftKey,
      toggleFavorite: n
    })
  }, J = () => {
    !T.current && !I.current && g(t)
  }, q = e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("367343").then(n.bind(n, "367343"));
      return t => (0, l.jsx)(e, {
        ...t
      })
    })
  }, Z = function() {
    var e;
    let {
      onMouseEnter: t,
      onMouseLeave: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      ref: r,
      tabIndex: o,
      onFocus: u,
      ...d
    } = null !== (e = O(Y, f)) && void 0 !== e ? e : {};
    return (0, i.createElement)("li", {
      ...d,
      key: a,
      ref: H
    }, w !== _(Y, f) && (0, l.jsx)(y, {
      ref: r,
      emoji: V,
      isFavorite: B.isFavoriteEmojiWithoutFetchingLatest(V),
      isLargeSize: M,
      isMediumSize: R,
      isInspected: s,
      isDisabled: W,
      showPulse: L === a,
      allowAnimatedEmoji: P,
      onFocus: null != u ? u : J,
      onMouseMove: J,
      onMouseEnter: t,
      onMouseLeave: n,
      onClick: e => {
        if (null != H.current && null != D && null != j && !e.shiftKey && null != V.name && U && !G && P) {
          let e = null == V.id ? p.default.convertNameToSurrogate(V.name) : V.name,
            t = H.current.getBoundingClientRect();
          t.x = D.x + (Y + 1) * K, F(_(Y, f)), (0, E.addReactionPickerAnimation)(j, e, V.id, t)
        }
        z(e)
      },
      onContextMenu: q,
      tabIndex: o,
      columnIndex: Y,
      rowIndex: f,
      size: K,
      surrogateCodePoint: N,
      selectedItemClassName: x,
      inNitroLockedSection: k
    }))
  };
  return A ? (0, l.jsx)(o.Tooltip, {
    text: v.default.Messages.EMOJI_FAVORITE_TOOLTIP.format({
      key: (0, S.isMac)() ? "Opt" : "Alt"
    }),
    position: "top",
    delay: 200,
    children: e => Z(e)
  }, a) : Z()
}