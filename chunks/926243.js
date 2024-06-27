"use strict";
n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(239091),
  _ = n(607070),
  c = n(339085),
  d = n(906411),
  E = n(633302),
  I = n(691251),
  T = n(536442),
  h = n(912893),
  f = n(430824),
  S = n(358085),
  A = n(288406),
  N = n(689938),
  m = n(688623);
let O = (e, t) => "".concat(e, ":").concat(t),
  R = r.forwardRef(function(e, t) {
    let n, {
        emoji: r,
        isFavorite: s,
        isLargeSize: u,
        isMediumSize: _,
        isInspected: c,
        isDisabled: E,
        showPulse: T,
        columnIndex: h,
        rowIndex: S,
        size: O,
        surrogateCodePoint: R,
        allowAnimatedEmoji: p,
        selectedItemClassName: g,
        inNitroLockedSection: C,
        ...v
      } = e,
      L = (0, a.e7)([f.Z], () => r.type === d.B.GUILD ? f.Z.getGuild(r.guildId) : void 0, [r]);
    return (0, i.jsx)(l.FocusRing, {
      children: (0, i.jsx)("button", {
        ...v,
        className: o()(m.emojiItem, {
          [m.emojiItemLarge]: u,
          [m.emojiItemMedium]: _,
          [m.emojiItemSelected]: c,
          [null != g ? g : ""]: c,
          [m.showPulse]: T
        }),
        "data-type": I.S.EMOJI,
        "data-id": r.id,
        "data-name": r.name,
        "data-surrogates": "surrogates" in r ? r.surrogates : null,
        "data-animated": r.animated ? "true" : null,
        ref: t,
        children: (0, i.jsx)(A.Z, {
          "aria-label": (n = r.allNamesString, ((null == L ? void 0 : L.name) != null && (n = N.Z.Messages.EMOJI_FROM_GUILD_LABEL.format({
            names: n,
            guildName: L.name
          })), s) ? N.Z.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
            names: n
          }) : n),
          columnIndex: h,
          rowIndex: S,
          emoji: r,
          size: O,
          surrogateCodePoint: R,
          allowAnimatedEmoji: p,
          isLocked: E && !C
        })
      })
    })
  });

function p(e) {
  let {
    descriptor: t,
    emojiItemKey: s,
    isInspected: o,
    rowIndex: d,
    channelGuildId: I,
    onInspect: f,
    onSelect: A,
    isScrolling: m,
    isUsingKeyboardNavigation: p,
    showEmojiFavoriteTooltip: g,
    surrogateCodePoint: C,
    selectedItemClassName: v,
    getEmojiItemProps: L,
    isMediumSize: D,
    isLargeSize: M,
    pulseItemKey: P,
    allowAnimatedEmoji: y,
    setPulseItemKey: U,
    messageId: b,
    isBurstReaction: G,
    rowPosition: w,
    inNitroLockedSection: B
  } = e, [x, k] = r.useState(""), V = (0, a.e7)([_.Z], () => _.Z.useReducedMotion), Z = (0, a.e7)([c.Z], () => c.Z.getDisambiguatedEmojiContext(I), [I]), H = r.useRef(null), {
    emoji: F,
    size: Y,
    isDisabled: j,
    columnIndex: W
  } = t, K = e => {
    if (e.stopPropagation(), m.current || p.current) return;
    let n = e.altKey;
    n && !c.Z.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(F) && U(s), (0, T.Kw)(T.v6.FAVORITE_EMOJI_TOOLTIP), A(t, {
      isFinalSelection: !e.shiftKey,
      toggleFavorite: n
    })
  }, z = () => {
    !m.current && !p.current && f(t)
  }, q = e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("39010").then(n.bind(n, 269254));
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
      ref: a,
      tabIndex: l,
      onFocus: u,
      ..._
    } = null !== (e = L(W, d)) && void 0 !== e ? e : {};
    return (0, r.createElement)("li", {
      ..._,
      key: s,
      ref: H
    }, x !== O(W, d) && (0, i.jsx)(R, {
      ref: a,
      emoji: F,
      isFavorite: Z.isFavoriteEmojiWithoutFetchingLatest(F),
      isLargeSize: M,
      isMediumSize: D,
      isInspected: o,
      isDisabled: j,
      showPulse: P === s,
      allowAnimatedEmoji: y,
      onFocus: null != u ? u : z,
      onMouseMove: z,
      onMouseEnter: t,
      onMouseLeave: n,
      onClick: e => {
        if (null != H.current && null != w && null != b && !e.shiftKey && null != F.name && G && !V && y) {
          let e = null == F.id ? E.ZP.convertNameToSurrogate(F.name) : F.name,
            t = H.current.getBoundingClientRect();
          t.x = w.x + (W + 1) * Y, k(O(W, d)), (0, h.U)(b, e, F.id, t)
        }
        K(e)
      },
      onContextMenu: q,
      tabIndex: l,
      columnIndex: W,
      rowIndex: d,
      size: Y,
      surrogateCodePoint: C,
      selectedItemClassName: v,
      inNitroLockedSection: B
    }))
  };
  return g ? (0, i.jsx)(l.Tooltip, {
    text: N.Z.Messages.EMOJI_FAVORITE_TOOLTIP.format({
      key: (0, S.isMac)() ? "Opt" : "Alt"
    }),
    position: "top",
    delay: 200,
    children: e => X(e)
  }, s) : X()
}