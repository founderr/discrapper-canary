"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(330726),
  u = n(906411),
  _ = n(438332),
  c = n(806966),
  d = n(434404),
  E = n(675478),
  I = n(819758),
  T = n(392552),
  h = n(784222),
  S = n(926243),
  f = n(149203),
  N = n(981631),
  A = n(689938),
  m = n(688623);
t.Z = e => {
  let {
    emojiDescriptors: t,
    emojiSize: n,
    onSelect: s,
    onInspect: O,
    surrogateCodePoint: R,
    getEmojiItemProps: p,
    getEmojiRowProps: g,
    isScrolling: C,
    isUsingKeyboardNavigation: v,
    rowIndex: L,
    allowAnimatedEmoji: D,
    showEmojiFavoriteTooltip: M,
    channelGuildId: P,
    category: y,
    selectedItemClassName: U,
    messageId: b,
    isBurstReaction: G,
    inNitroLockedSection: w
  } = e, {
    enabled: B
  } = T.Z.useExperiment({
    location: "EmojiPicker"
  }, {
    autoTrackExposure: !1
  }), k = c.kJ.getState(), [x, V] = r.useState(k.inspectedExpressionPosition), [Z, H] = (0, l.Z)(null, 300), F = r.useRef(null);
  r.useEffect(() => c.kJ.useStore.subscribe(e => V(e), e => e.inspectedExpressionPosition), []), r.useEffect(() => {
    E.DZ.loadIfNecessary()
  }, []);
  let Y = n === f.Su.LARGE,
    j = n === f.Su.MEDIUM,
    W = e => {
      let t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
      switch (e.type) {
        case h.ld.CREATE_EMOJI: {
          let {
            visibleRowIndex: n,
            columnIndex: l
          } = e, u = x.rowIndex === n && x.columnIndex === l, _ = t => {
            t.stopPropagation(), !C.current && !v.current && (s(e, {
              isFinalSelection: !0,
              toggleFavorite: !1
            }), d.Z.open(e.guildId, N.pNK.EMOJI, N.jXE.EMOJI_PICKER_POPOUT))
          }, c = () => {
            !C.current && !v.current && O(e)
          };
          return function() {
            var e;
            let {
              onMouseEnter: n,
              onMouseLeave: s
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
              ref: d,
              tabIndex: E,
              onFocus: I,
              ...T
            } = null !== (e = p(l, L)) && void 0 !== e ? e : {};
            return (0, r.createElement)("li", {
              ...T,
              key: t
            }, (0, i.jsx)(a.FocusRing, {
              children: (0, i.jsx)("button", {
                "aria-label": A.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                ref: d,
                className: o()(m.emojiItem, {
                  [m.emojiItemLarge]: Y,
                  [m.emojiItemMedium]: j,
                  [m.emojiItemSelected]: u,
                  [null != U ? U : ""]: u,
                  [m.showPulse]: Z === t
                }),
                onFocus: null != I ? I : c,
                onMouseOver: c,
                onMouseEnter: n,
                onMouseLeave: s,
                onClick: _,
                tabIndex: E,
                children: (0, i.jsx)(a.CirclePlusIcon, {
                  size: "md",
                  color: "currentColor",
                  className: m.icon,
                  colorClass: m.icon
                })
              })
            }))
          }()
        }
        case h.ld.EMOJI: {
          var n;
          let {
            columnIndex: r,
            visibleRowIndex: o
          } = e, a = x.rowIndex === o && x.columnIndex === r;
          return (0, i.jsx)(S.Z, {
            rowIndex: L,
            descriptor: e,
            emojiItemKey: t,
            isInspected: a,
            isScrolling: C,
            isUsingKeyboardNavigation: v,
            surrogateCodePoint: R,
            allowAnimatedEmoji: D,
            selectedItemClassName: U,
            onSelect: s,
            onInspect: O,
            channelGuildId: P,
            getEmojiItemProps: p,
            isMediumSize: j,
            isLargeSize: Y,
            pulseItemKey: Z,
            setPulseItemKey: H,
            showEmojiFavoriteTooltip: M,
            messageId: b,
            isBurstReaction: G,
            rowPosition: null == F ? void 0 : null === (n = F.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
            inNitroLockedSection: w
          }, t)
        }
      }
    },
    K = e => (0, i.jsx)("ul", {
      ...g(L),
      className: o()(m.emojiListRow, {
        [m.emojiListRowLargeSize]: Y,
        [m.emojiListRowMediumSize]: j
      }),
      ref: F,
      children: e.map(W)
    });
  if (y !== f.En.TOP_GUILD_EMOJI) return K(t);
  let z = t.filter(e => !!B && e.type === h.ld.CREATE_EMOJI || e.subCategory === f.t0.TOP_GUILD_EMOJI || e.subCategory === f.t0.NEWLY_ADDED_EMOJI && e.emoji.type === u.B.GUILD && !_.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
    q = t.filter(e => e.subCategory === f.t0.NEWLY_ADDED_EMOJI && e.emoji.type === u.B.GUILD && _.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
  return 0 === q.length ? K(t) : (0, i.jsxs)("div", {
    className: m.topEmojiSectionContainer,
    children: [(0, i.jsx)("div", {
      className: o()(m.topEmojiContainer, {
        [m.noEmojis]: 0 === z.length
      }),
      children: K(z)
    }), (0, i.jsxs)("div", {
      className: m.newlyAddedHighlightContainer,
      children: [(0, i.jsx)("div", {
        className: o()(m.newlyAddedHighlight, {
          [m.oneItem]: 1 === q.length,
          [m.alignRight]: z.length > 0
        }),
        children: K(q)
      }), (0, i.jsxs)("div", {
        className: o()(m.newlyAddedBadge, {
          [m.newlyAddedBadgeLarge]: Y,
          [m.newlyAddedBadgeMedium]: j,
          [m.alignRight]: z.length > 0
        }),
        children: [(0, i.jsx)(I.Z, {
          foreground: m.newlyAddedBadgeStar
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: A.Z.Messages.NEW
        })]
      })]
    })]
  })
}