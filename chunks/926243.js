"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("239091"),
  d = n("607070"),
  _ = n("339085"),
  c = n("906411"),
  E = n("633302"),
  I = n("691251"),
  T = n("536442"),
  f = n("912893"),
  S = n("430824"),
  h = n("358085"),
  A = n("288406"),
  m = n("689938"),
  N = n("687901");
let p = (e, t) => "".concat(e, ":").concat(t),
  O = r.forwardRef(function(e, t) {
    let n, {
        emoji: r,
        isFavorite: s,
        isLargeSize: u,
        isMediumSize: d,
        isInspected: _,
        isDisabled: E,
        showPulse: T,
        columnIndex: f,
        rowIndex: h,
        size: p,
        surrogateCodePoint: O,
        allowAnimatedEmoji: C,
        selectedItemClassName: R,
        inNitroLockedSection: g,
        ...L
      } = e,
      v = (0, o.useStateFromStores)([S.default], () => r.type === c.EmojiTypes.GUILD ? S.default.getGuild(r.guildId) : void 0, [r]);
    return (0, i.jsx)(l.FocusRing, {
      children: (0, i.jsx)("button", {
        ...L,
        className: a()(N.emojiItem, {
          [N.emojiItemLarge]: u,
          [N.emojiItemMedium]: d,
          [N.emojiItemSelected]: _,
          [null != R ? R : ""]: _,
          [N.showPulse]: T
        }),
        "data-type": I.PickerContextMenuDataTypes.EMOJI,
        "data-id": r.id,
        "data-name": r.name,
        ref: t,
        children: (0, i.jsx)(A.default, {
          "aria-label": (n = r.allNamesString, ((null == v ? void 0 : v.name) != null && (n = m.default.Messages.EMOJI_FROM_GUILD_LABEL.format({
            names: n,
            guildName: v.name
          })), s) ? m.default.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
            names: n
          }) : n),
          columnIndex: f,
          rowIndex: h,
          emoji: r,
          size: p,
          surrogateCodePoint: O,
          allowAnimatedEmoji: C,
          isLocked: E && !g
        })
      })
    })
  });

function C(e) {
  let {
    descriptor: t,
    emojiItemKey: s,
    isInspected: a,
    rowIndex: c,
    channelGuildId: I,
    onInspect: S,
    onSelect: A,
    isScrolling: N,
    isUsingKeyboardNavigation: C,
    showEmojiFavoriteTooltip: R,
    surrogateCodePoint: g,
    selectedItemClassName: L,
    getEmojiItemProps: v,
    isMediumSize: D,
    isLargeSize: M,
    pulseItemKey: y,
    allowAnimatedEmoji: P,
    setPulseItemKey: U,
    messageId: b,
    isBurstReaction: G,
    rowPosition: w,
    inNitroLockedSection: k
  } = e, [B, V] = r.useState(""), x = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), F = (0, o.useStateFromStores)([_.default], () => _.default.getDisambiguatedEmojiContext(I), [I]), H = r.useRef(null), {
    emoji: Y,
    size: j,
    isDisabled: W,
    columnIndex: K
  } = t, z = e => {
    if (e.stopPropagation(), N.current || C.current) return;
    let n = e.altKey;
    n && !_.default.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(Y) && U(s), (0, T.hideHotspot)(T.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), A(t, {
      isFinalSelection: !e.shiftKey,
      toggleFavorite: n
    })
  }, Z = () => {
    !N.current && !C.current && S(t)
  }, Q = e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("39010").then(n.bind(n, "269254"));
      return t => (0, i.jsx)(e, {
        ...t
      })
    })
  }, X = function() {
    var e;
    let {
      onMouseEnter: t,
      onMouseLeave: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      ref: o,
      tabIndex: l,
      onFocus: u,
      ...d
    } = null !== (e = v(K, c)) && void 0 !== e ? e : {};
    return (0, r.createElement)("li", {
      ...d,
      key: s,
      ref: H
    }, B !== p(K, c) && (0, i.jsx)(O, {
      ref: o,
      emoji: Y,
      isFavorite: F.isFavoriteEmojiWithoutFetchingLatest(Y),
      isLargeSize: M,
      isMediumSize: D,
      isInspected: a,
      isDisabled: W,
      showPulse: y === s,
      allowAnimatedEmoji: P,
      onFocus: null != u ? u : Z,
      onMouseMove: Z,
      onMouseEnter: t,
      onMouseLeave: n,
      onClick: e => {
        if (null != H.current && null != w && null != b && !e.shiftKey && null != Y.name && G && !x && P) {
          let e = null == Y.id ? E.default.convertNameToSurrogate(Y.name) : Y.name,
            t = H.current.getBoundingClientRect();
          t.x = w.x + (K + 1) * j, V(p(K, c)), (0, f.addReactionPickerAnimation)(b, e, Y.id, t)
        }
        z(e)
      },
      onContextMenu: Q,
      tabIndex: l,
      columnIndex: K,
      rowIndex: c,
      size: j,
      surrogateCodePoint: g,
      selectedItemClassName: L,
      inNitroLockedSection: k
    }))
  };
  return R ? (0, i.jsx)(l.Tooltip, {
    text: m.default.Messages.EMOJI_FAVORITE_TOOLTIP.format({
      key: (0, h.isMac)() ? "Opt" : "Alt"
    }),
    position: "top",
    delay: 200,
    children: e => X(e)
  }, s) : X()
}