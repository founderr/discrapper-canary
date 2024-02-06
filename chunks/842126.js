"use strict";
i.r(t), i.d(t, {
  default: function() {
    return T
  }
}), i("222007");
var n = i("37983"),
  s = i("884691"),
  l = i("414456"),
  r = i.n(l),
  a = i("77078"),
  o = i("612039"),
  u = i("858619"),
  c = i("575226"),
  d = i("986632"),
  f = i("592407"),
  E = i("872173"),
  m = i("351825"),
  I = i("642032"),
  p = i("83017"),
  g = i("458604"),
  _ = i("115279"),
  S = i("49111"),
  h = i("782340"),
  C = i("465439"),
  T = e => {
    let {
      emojiDescriptors: t,
      emojiSize: i,
      onSelect: l,
      onInspect: T,
      surrogateCodePoint: N,
      getEmojiItemProps: v,
      getEmojiRowProps: A,
      isScrolling: y,
      isUsingKeyboardNavigation: R,
      rowIndex: j,
      allowAnimatedEmoji: O,
      showEmojiFavoriteTooltip: M,
      channelGuildId: x,
      category: L,
      selectedItemClassName: P,
      messageId: D,
      isBurstReaction: b
    } = e, U = d.EmojiPickerStore.getState(), [w, G] = s.useState(U.inspectedExpressionPosition), [k, V] = (0, o.default)(null, 300), F = s.useRef(null);
    s.useEffect(() => d.EmojiPickerStore.useStore.subscribe(e => G(e), e => e.inspectedExpressionPosition), []), s.useEffect(() => {
      E.FrecencyUserSettingsActionCreators.loadIfNecessary()
    }, []);
    let H = i === _.EmojiSize.LARGE,
      K = i === _.EmojiSize.MEDIUM,
      B = e => {
        let t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
        switch (e.type) {
          case p.EmojiGridItemTypes.CREATE_EMOJI: {
            let {
              visibleRowIndex: i,
              columnIndex: o
            } = e, u = w.rowIndex === i && w.columnIndex === o, c = t => {
              t.stopPropagation(), !y.current && !R.current && (l(e, {
                isFinalSelection: !0,
                toggleFavorite: !1
              }), f.default.open(e.guildId, S.GuildSettingsSections.EMOJI))
            }, d = () => {
              !y.current && !R.current && T(e)
            };
            return function() {
              var e;
              let {
                onMouseEnter: i,
                onMouseLeave: l
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                ref: f,
                tabIndex: E,
                onFocus: I,
                ...p
              } = null !== (e = v(o, j)) && void 0 !== e ? e : {};
              return (0, s.createElement)("li", {
                ...p,
                key: t
              }, (0, n.jsx)(a.FocusRing, {
                children: (0, n.jsx)("button", {
                  "aria-label": h.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  ref: f,
                  className: r(C.emojiItem, {
                    [C.emojiItemLarge]: H,
                    [C.emojiItemMedium]: K,
                    [C.emojiItemSelected]: u,
                    [null != P ? P : ""]: u,
                    [C.showPulse]: k === t
                  }),
                  onFocus: null != I ? I : d,
                  onMouseOver: d,
                  onMouseEnter: i,
                  onMouseLeave: l,
                  onClick: c,
                  tabIndex: E,
                  children: (0, n.jsx)(m.default, {
                    className: C.icon,
                    foreground: C.icon,
                    width: 24,
                    height: 24
                  })
                })
              }))
            }()
          }
          case p.EmojiGridItemTypes.EMOJI: {
            var i;
            let {
              columnIndex: s,
              visibleRowIndex: r
            } = e, a = w.rowIndex === r && w.columnIndex === s;
            return (0, n.jsx)(g.default, {
              rowIndex: j,
              descriptor: e,
              emojiItemKey: t,
              isInspected: a,
              isScrolling: y,
              isUsingKeyboardNavigation: R,
              surrogateCodePoint: N,
              allowAnimatedEmoji: O,
              selectedItemClassName: P,
              onSelect: l,
              onInspect: T,
              channelGuildId: x,
              getEmojiItemProps: v,
              isMediumSize: K,
              isLargeSize: H,
              pulseItemKey: k,
              setPulseItemKey: V,
              showEmojiFavoriteTooltip: M,
              messageId: D,
              isBurstReaction: b,
              rowPosition: null == F ? void 0 : null === (i = F.current) || void 0 === i ? void 0 : i.getBoundingClientRect()
            }, t)
          }
        }
      },
      J = e => (0, n.jsx)("ul", {
        ...A(j),
        className: r(C.emojiListRow, {
          [C.emojiListRowLargeSize]: H,
          [C.emojiListRowMediumSize]: K
        }),
        ref: F,
        children: e.map(B)
      });
    if (L !== _.EmojiCategoryTypes.TOP_GUILD_EMOJI) return J(t);
    let z = t.filter(e => e.subCategory === _.EmojiSubCategory.TOP_GUILD_EMOJI || e.subCategory === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && !c.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
      W = t.filter(e => e.subCategory === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && c.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === W.length ? J(t) : (0, n.jsxs)("div", {
      className: C.topEmojiSectionContainer,
      children: [(0, n.jsx)("div", {
        className: r(C.topEmojiContainer, {
          [C.noEmojis]: 0 === z.length
        }),
        children: J(z)
      }), (0, n.jsxs)("div", {
        className: C.newlyAddedHighlightContainer,
        children: [(0, n.jsx)("div", {
          className: r(C.newlyAddedHighlight, {
            [C.oneItem]: 1 === W.length,
            [C.alignRight]: z.length > 0
          }),
          children: J(W)
        }), (0, n.jsxs)("div", {
          className: r(C.newlyAddedBadge, {
            [C.newlyAddedBadgeLarge]: H,
            [C.newlyAddedBadgeMedium]: K,
            [C.alignRight]: z.length > 0
          }),
          children: [(0, n.jsx)(I.default, {
            foreground: C.newlyAddedBadgeStar
          }), (0, n.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: h.default.Messages.NEW
          })]
        })]
      })]
    })
  }