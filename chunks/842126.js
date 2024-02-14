"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("77078"),
  o = n("612039"),
  u = n("858619"),
  d = n("575226"),
  c = n("986632"),
  f = n("592407"),
  m = n("872173"),
  p = n("351825"),
  h = n("642032"),
  E = n("83017"),
  g = n("458604"),
  S = n("115279"),
  C = n("49111"),
  T = n("782340"),
  v = n("348473"),
  I = e => {
    let {
      emojiDescriptors: t,
      emojiSize: n,
      onSelect: a,
      onInspect: I,
      surrogateCodePoint: _,
      getEmojiItemProps: N,
      getEmojiRowProps: A,
      isScrolling: y,
      isUsingKeyboardNavigation: x,
      rowIndex: O,
      allowAnimatedEmoji: R,
      showEmojiFavoriteTooltip: M,
      channelGuildId: L,
      category: P,
      selectedItemClassName: b,
      messageId: j,
      isBurstReaction: U,
      inNitroLockedSection: D
    } = e, k = c.EmojiPickerStore.getState(), [w, F] = i.useState(k.inspectedExpressionPosition), [G, B] = (0, o.default)(null, 300), H = i.useRef(null);
    i.useEffect(() => c.EmojiPickerStore.useStore.subscribe(e => F(e), e => e.inspectedExpressionPosition), []), i.useEffect(() => {
      m.FrecencyUserSettingsActionCreators.loadIfNecessary()
    }, []);
    let V = n === S.EmojiSize.LARGE,
      K = n === S.EmojiSize.MEDIUM,
      W = e => {
        let t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
        switch (e.type) {
          case E.EmojiGridItemTypes.CREATE_EMOJI: {
            let {
              visibleRowIndex: n,
              columnIndex: o
            } = e, u = w.rowIndex === n && w.columnIndex === o, d = t => {
              t.stopPropagation(), !y.current && !x.current && (a(e, {
                isFinalSelection: !0,
                toggleFavorite: !1
              }), f.default.open(e.guildId, C.GuildSettingsSections.EMOJI))
            }, c = () => {
              !y.current && !x.current && I(e)
            };
            return function() {
              var e;
              let {
                onMouseEnter: n,
                onMouseLeave: a
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                ref: f,
                tabIndex: m,
                onFocus: h,
                ...E
              } = null !== (e = N(o, O)) && void 0 !== e ? e : {};
              return (0, i.createElement)("li", {
                ...E,
                key: t
              }, (0, l.jsx)(r.FocusRing, {
                children: (0, l.jsx)("button", {
                  "aria-label": T.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  ref: f,
                  className: s(v.emojiItem, {
                    [v.emojiItemLarge]: V,
                    [v.emojiItemMedium]: K,
                    [v.emojiItemSelected]: u,
                    [null != b ? b : ""]: u,
                    [v.showPulse]: G === t
                  }),
                  onFocus: null != h ? h : c,
                  onMouseOver: c,
                  onMouseEnter: n,
                  onMouseLeave: a,
                  onClick: d,
                  tabIndex: m,
                  children: (0, l.jsx)(p.default, {
                    className: v.icon,
                    foreground: v.icon,
                    width: 24,
                    height: 24
                  })
                })
              }))
            }()
          }
          case E.EmojiGridItemTypes.EMOJI: {
            var n;
            let {
              columnIndex: i,
              visibleRowIndex: s
            } = e, r = w.rowIndex === s && w.columnIndex === i;
            return (0, l.jsx)(g.default, {
              rowIndex: O,
              descriptor: e,
              emojiItemKey: t,
              isInspected: r,
              isScrolling: y,
              isUsingKeyboardNavigation: x,
              surrogateCodePoint: _,
              allowAnimatedEmoji: R,
              selectedItemClassName: b,
              onSelect: a,
              onInspect: I,
              channelGuildId: L,
              getEmojiItemProps: N,
              isMediumSize: K,
              isLargeSize: V,
              pulseItemKey: G,
              setPulseItemKey: B,
              showEmojiFavoriteTooltip: M,
              messageId: j,
              isBurstReaction: U,
              rowPosition: null == H ? void 0 : null === (n = H.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
              inNitroLockedSection: D
            }, t)
          }
        }
      },
      Y = e => (0, l.jsx)("ul", {
        ...A(O),
        className: s(v.emojiListRow, {
          [v.emojiListRowLargeSize]: V,
          [v.emojiListRowMediumSize]: K
        }),
        ref: H,
        children: e.map(W)
      });
    if (P !== S.EmojiCategoryTypes.TOP_GUILD_EMOJI) return Y(t);
    let z = t.filter(e => e.subCategory === S.EmojiSubCategory.TOP_GUILD_EMOJI || e.subCategory === S.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && !d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
      Z = t.filter(e => e.subCategory === S.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === Z.length ? Y(t) : (0, l.jsxs)("div", {
      className: v.topEmojiSectionContainer,
      children: [(0, l.jsx)("div", {
        className: s(v.topEmojiContainer, {
          [v.noEmojis]: 0 === z.length
        }),
        children: Y(z)
      }), (0, l.jsxs)("div", {
        className: v.newlyAddedHighlightContainer,
        children: [(0, l.jsx)("div", {
          className: s(v.newlyAddedHighlight, {
            [v.oneItem]: 1 === Z.length,
            [v.alignRight]: z.length > 0
          }),
          children: Y(Z)
        }), (0, l.jsxs)("div", {
          className: s(v.newlyAddedBadge, {
            [v.newlyAddedBadgeLarge]: V,
            [v.newlyAddedBadgeMedium]: K,
            [v.alignRight]: z.length > 0
          }),
          children: [(0, l.jsx)(h.default, {
            foreground: v.newlyAddedBadgeStar
          }), (0, l.jsx)(r.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: T.default.Messages.NEW
          })]
        })]
      })]
    })
  }