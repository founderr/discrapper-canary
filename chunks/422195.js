"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(477690),
  l = n(481060),
  u = n(2052),
  _ = n(880949),
  c = n(806966),
  d = n(28546),
  E = n(254494),
  I = n(430824),
  T = n(626135),
  h = n(624138),
  S = n(453070),
  f = n(926491),
  N = n(373228),
  A = n(378233),
  m = n(419922),
  O = n(981631),
  R = n(957825),
  p = n(689938),
  g = n(291769);
let C = (0, h.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
  v = (0, h.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
  L = (0, h.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
  D = (0, h.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
  M = (0, h.Mg)(a.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  P = (0, h.Mg)(a.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  y = [C, C, C, C],
  U = (v + L) * 2 + C,
  b = M + 2 * P,
  G = e => {
    let {
      activeIndex: t,
      stickerPickerCategories: n,
      categoryListRef: s,
      firstStandardStickerCategoryOffsetTop: a,
      setShouldRenderShortcut: c
    } = e, E = (0, u.O)(), h = (0, d.Iu)(e => "" !== e.searchQuery), S = r.useCallback((e, s, a) => {
      var u, c;
      let d;
      let S = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === N.Ih.FAVORITE,
        C = S ? 1 : 0,
        L = (null === (c = n[C]) || void 0 === c ? void 0 : c.type) === N.Ih.RECENT,
        M = n.length > 0,
        P = n.length;
      if (0 === s && S) return (0, i.jsx)("div", {
        role: "listitem",
        "aria-setsize": P,
        "aria-posinset": s,
        children: (0, i.jsx)(l.Clickable, {
          "aria-label": p.Z.Messages.CATEGORY_FAVORITE,
          className: o()(g.stickerCategory, g.stickerCategoryGeneric, {
            [g.stickerCategoryGenericDisabled]: M && !S,
            [g.stickerCategoryGenericSelected]: !h && S && 0 === t
          }),
          onClick: a,
          children: (0, i.jsx)(l.StarIcon, {
            size: "custom",
            color: "currentColor",
            className: g.stickerCategoryGenericIcon,
            height: D,
            width: D
          })
        })
      }, "favorites");
      if (s === C && L) return (0, i.jsx)("div", {
        role: "listitem",
        "aria-setsize": P,
        "aria-posinset": s,
        children: (0, i.jsx)(l.Clickable, {
          "aria-label": p.Z.Messages.STICKER_PICKER_CATEGORIES_RECENT,
          className: o()(g.stickerCategory, g.stickerCategoryGeneric, {
            [g.stickerCategoryGenericDisabled]: M && !L,
            [g.stickerCategoryGenericSelected]: !h && L && t === C
          }),
          onClick: a,
          children: (0, i.jsx)(l.ClockIcon, {
            size: "custom",
            color: "currentColor",
            className: g.stickerCategoryGenericIcon,
            height: D,
            width: D
          })
        })
      }, "recent");
      let y = t === s,
        U = n[s],
        b = n[s + 1],
        G = null != b && U.type === N.Ih.GUILD && b.type !== N.Ih.GUILD,
        w = U.type === N.Ih.PACK,
        B = "",
        x = null;
      if (U.type === N.Ih.GUILD || U.type === N.Ih.EMPTY_GUILD_UPSELL) {
        let e = I.Z.getGuild(U.id);
        null != e && (d = e.id, B = e.name, x = (0, i.jsx)(_.Z, {
          guild: e,
          isSelected: y
        }))
      } else if (w) {
        let e = f.Z.getStickerPack(U.id);
        null != e && (B = e.name, x = (0, i.jsx)(m.ZP, {
          disableAnimation: !y || h,
          size: v,
          sticker: (0, A.Zt)(e)
        }))
      }
      return (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsx)(l.Tooltip, {
          position: "right",
          text: B,
          tooltipContentClassName: g.__invalid_tooltip,
          children: e => (0, i.jsx)("div", {
            role: "listitem",
            "aria-setsize": P,
            "aria-posinset": s,
            children: (0, i.jsx)(l.Clickable, {
              ...e,
              "aria-label": B,
              className: o()(g.stickerCategory, {
                [g.firstPartyCategory]: w,
                [g.firstPartyCategorySelected]: !h && y && w
              }),
              onClick: () => {
                U.type === N.Ih.PACK && T.default.track(O.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                  location: null == E ? void 0 : E.location,
                  tab: R.X1.STICKER,
                  sticker_pack_id: U.id,
                  guild_id: d
                }), a()
              },
              children: x
            })
          })
        }), G ? (0, i.jsx)("hr", {
          className: g.guildCategorySeparator
        }, "separator") : null]
      }, U.id)
    }, [t, E, h, n]), C = r.useCallback((e, t) => t ? U : 0, []), P = r.useCallback((e, t) => {
      let i = n[t],
        r = n[t + 1];
      return v + (null != r && i.type === N.Ih.GUILD && r.type !== N.Ih.GUILD ? b : L)
    }, [n]);
    return {
      getScrollOffsetForIndex: C,
      renderCategoryListItem: S,
      rowHeight: P,
      onScroll: r.useCallback(e => {
        var t;
        let n = null === (t = s.current) || void 0 === t ? void 0 : t.getListDimensions();
        if (null == n) return;
        let i = e + n.height;
        c(i - M < a)
      }, [a])
    }
  };
t.Z = e => {
  let {
    stickersListRef: t,
    channel: n
  } = e, s = r.useRef(null), [a, u] = r.useState(!0), _ = c.ZN.useStore(e => e.activeCategoryIndex), d = (0, S.Sd)(n), {
    firstStandardStickerCategoryIndex: I,
    firstStandardStickerCategoryOffsetTop: T,
    guildCategoryCount: h,
    hasFirstPartyStickerPacks: f
  } = r.useMemo(() => {
    var e, t;
    let n = d.filter(e => e.type === N.Ih.GUILD).length,
      i = (null === (e = d[0]) || void 0 === e ? void 0 : e.type) === N.Ih.RECENT,
      r = n + (i ? 1 : 0) + ((null === (t = d[0]) || void 0 === t ? void 0 : t.type) === N.Ih.FAVORITE ? 1 : 0),
      s = r * (v + L) - L + b;
    return {
      firstStandardStickerCategoryIndex: r + 1,
      firstStandardStickerCategoryOffsetTop: s,
      guildCategoryCount: n,
      hasFirstPartyStickerPacks: null != d.find(e => e.type === N.Ih.PACK)
    }
  }, [d]);
  r.useLayoutEffect(() => {
    u(h >= 7)
  }, [h]);
  let {
    renderCategoryListItem: A,
    rowHeight: m,
    onScroll: O
  } = G({
    activeIndex: _,
    stickerPickerCategories: d,
    categoryListRef: s,
    firstStandardStickerCategoryOffsetTop: T,
    setShouldRenderShortcut: u
  }), R = r.useCallback(e => {
    var t;
    e(I), null === (t = s.current) || void 0 === t || t.scrollTo(T)
  }, [I, T]);
  return (0, i.jsx)(E.Z, {
    className: g.categoryList,
    categoryListRef: s,
    expressionsListRef: t,
    store: c.ZN,
    listPadding: y,
    onScroll: O,
    renderCategoryListItem: A,
    rowCount: d.length,
    categories: d,
    categoryHeight: m,
    children: e => f && a && (0, i.jsx)(l.Clickable, {
      className: o()(g.standardStickerShortcut, {
        [g.invisibleShortcut]: !a
      }),
      onClick: () => R(e),
      children: (0, i.jsx)(l.StickerIcon, {
        size: "md",
        color: "currentColor"
      })
    })
  })
}