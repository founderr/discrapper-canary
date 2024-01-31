"use strict";
i.r(t), i.d(t, {
  default: function() {
    return T
  }
}), i("222007");
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  a = i.n(s),
  r = i("77078"),
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
  C = i("782340"),
  h = i("465439"),
  T = e => {
    let {
      emojiDescriptors: t,
      emojiSize: i,
      onSelect: s,
      onInspect: T,
      surrogateCodePoint: N,
      getEmojiItemProps: v,
      getEmojiRowProps: A,
      isScrolling: y,
      isUsingKeyboardNavigation: j,
      rowIndex: R,
      allowAnimatedEmoji: O,
      showEmojiFavoriteTooltip: M,
      channelGuildId: x,
      category: P,
      selectedItemClassName: L,
      messageId: D,
      isBurstReaction: b
    } = e, U = d.EmojiPickerStore.getState(), [w, G] = l.useState(U.inspectedExpressionPosition), [k, V] = (0, o.default)(null, 300), F = l.useRef(null);
    l.useEffect(() => d.EmojiPickerStore.useStore.subscribe(e => G(e), e => e.inspectedExpressionPosition), []), l.useEffect(() => {
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
              t.stopPropagation(), !y.current && !j.current && (s(e, {
                isFinalSelection: !0,
                toggleFavorite: !1
              }), f.default.open(e.guildId, S.GuildSettingsSections.EMOJI))
            }, d = () => {
              !y.current && !j.current && T(e)
            };
            return function() {
              var e;
              let {
                onMouseEnter: i,
                onMouseLeave: s
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                ref: f,
                tabIndex: E,
                onFocus: I,
                ...p
              } = null !== (e = v(o, R)) && void 0 !== e ? e : {};
              return (0, l.createElement)("li", {
                ...p,
                key: t
              }, (0, n.jsx)(r.FocusRing, {
                children: (0, n.jsx)("button", {
                  "aria-label": C.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  ref: f,
                  className: a(h.emojiItem, {
                    [h.emojiItemLarge]: H,
                    [h.emojiItemMedium]: K,
                    [h.emojiItemSelected]: u,
                    [null != L ? L : ""]: u,
                    [h.showPulse]: k === t
                  }),
                  onFocus: null != I ? I : d,
                  onMouseOver: d,
                  onMouseEnter: i,
                  onMouseLeave: s,
                  onClick: c,
                  tabIndex: E,
                  children: (0, n.jsx)(m.default, {
                    className: h.icon,
                    foreground: h.icon,
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
              columnIndex: l,
              visibleRowIndex: a
            } = e, r = w.rowIndex === a && w.columnIndex === l;
            return (0, n.jsx)(g.default, {
              rowIndex: R,
              descriptor: e,
              emojiItemKey: t,
              isInspected: r,
              isScrolling: y,
              isUsingKeyboardNavigation: j,
              surrogateCodePoint: N,
              allowAnimatedEmoji: O,
              selectedItemClassName: L,
              onSelect: s,
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
        ...A(R),
        className: a(h.emojiListRow, {
          [h.emojiListRowLargeSize]: H,
          [h.emojiListRowMediumSize]: K
        }),
        ref: F,
        children: e.map(B)
      });
    if (P !== _.EmojiCategoryTypes.TOP_GUILD_EMOJI) return J(t);
    let W = t.filter(e => e.subCategory === _.EmojiSubCategory.TOP_GUILD_EMOJI || e.subCategory === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && !c.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
      z = t.filter(e => e.subCategory === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && c.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === z.length ? J(t) : (0, n.jsxs)("div", {
      className: h.topEmojiSectionContainer,
      children: [(0, n.jsx)("div", {
        className: a(h.topEmojiContainer, {
          [h.noEmojis]: 0 === W.length
        }),
        children: J(W)
      }), (0, n.jsxs)("div", {
        className: h.newlyAddedHighlightContainer,
        children: [(0, n.jsx)("div", {
          className: a(h.newlyAddedHighlight, {
            [h.oneItem]: 1 === z.length,
            [h.alignRight]: W.length > 0
          }),
          children: J(z)
        }), (0, n.jsxs)("div", {
          className: a(h.newlyAddedBadge, {
            [h.newlyAddedBadgeLarge]: H,
            [h.newlyAddedBadgeMedium]: K,
            [h.alignRight]: W.length > 0
          }),
          children: [(0, n.jsx)(I.default, {
            foreground: h.newlyAddedBadgeStar
          }), (0, n.jsx)(r.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: C.default.Messages.NEW
          })]
        })]
      })]
    })
  }