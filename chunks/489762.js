"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(143927),
  o = n(442837),
  a = n(477690),
  l = n(481060),
  u = n(788911),
  _ = n(2052),
  c = n(100527),
  d = n(906732),
  E = n(880949),
  I = n(806966),
  T = n(28546),
  h = n(691251),
  S = n(98528),
  f = n(551058),
  N = n(695346),
  A = n(430824),
  m = n(594174),
  O = n(695464),
  R = n(626135),
  p = n(624138),
  g = n(191177),
  C = n(285651),
  v = n(926491),
  L = n(373228),
  D = n(378233),
  M = n(419922),
  P = n(1450),
  y = n(491173),
  U = n(515005),
  b = n(652136),
  G = n(981631),
  w = n(957825),
  k = n(689938),
  B = n(449210),
  x = n(239840);
let V = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  Z = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
  H = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
  F = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
  Y = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  j = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
  W = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  K = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
  z = (0, p.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  q = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  X = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  Q = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  J = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  $ = q + 2 * Q + J,
  ee = X + 2 * Q + J,
  et = [H, Y, j, W],
  en = [F, Y, j, W],
  ei = (0, p.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
  er = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
  es = e => {
    let {
      onSuggestionClick: t
    } = e;
    return (0, i.jsx)("div", {
      className: B.searchSuggestions,
      children: er.map(e => (0, i.jsx)(l.Clickable, {
        className: B.searchSuggestion,
        onClick: () => t(e),
        children: (0, i.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: e
        })
      }, e))
    })
  },
  eo = e => {
    let {
      onSelectSticker: t,
      channel: n,
      currentUser: i
    } = e, s = (0, _.O)(), {
      analyticsLocations: o
    } = (0, d.ZP)(), a = (0, T.Iu)(e => e.searchQuery), l = r.useCallback(e => {
      let {
        visibleRowIndex: t,
        columnIndex: n,
        gridSectionIndex: i
      } = e;
      I.ZN.setActiveCategoryIndex(i), I.ZN.setInspectedExpressionPosition(n, t, h.u.MOUSE_EVENT), e.type === L.al.STICKER && I.ZN.setSearchPlaceholder(e.sticker.name)
    }, []);
    return {
      handleStickerInspect: l,
      handleSelect: r.useCallback(e => {
        if (e.type !== L.al.STICKER) return;
        let {
          packId: r,
          sticker: l,
          type: u
        } = e, _ = {
          ...s.location,
          object: "" === a ? G.qAy.STICKER_PICKER_VIEW_ALL : G.qAy.STICKER_SEARCH_VIEW_ALL
        };
        if (null != l && !(0, C.kl)(l, i, n)) {
          let e = v.Z.getStickerPack(r);
          null != e && (R.default.track(G.rMx.STICKER_PACK_VIEW_ALL, {
            sticker_id: l.id,
            sticker_pack_id: r,
            location: _,
            location_stack: o
          }), (0, b.Z)({
            stickerPack: e,
            analyticsLocations: o
          }));
          let t = (0, D.J8)(l),
            s = (0, C.cO)(l, i, n);
          s === C.eb.SENDABLE_WITH_PREMIUM && (0, g.f)(!0), t && C.eb.SENDABLE_WITH_BOOSTED_GUILD;
          return
        }
        u === L.al.STICKER && null != l && t(e)
      }, [s.location, a, i, n, o, t])
    }
  },
  ea = e => {
    let {
      collapsedStickersCategories: t,
      gridWidth: n,
      onSelectSticker: s,
      getStickerItemProps: a,
      getStickerRowProps: u,
      gutterWidth: c,
      inspectedStickerPosition: d,
      isScrolling: I,
      isUsingKeyboardNavigation: T,
      stickersGrid: h,
      stickersCategories: S,
      filteredStickers: O,
      ownedStickerPacks: p,
      channel: g
    } = e, C = (0, _.O)(), y = (0, o.e7)([m.default], () => m.default.getCurrentUser()), {
      handleStickerInspect: b,
      handleSelect: x
    } = eo({
      onSelectSticker: s,
      channel: g,
      currentUser: y
    }), [H, F] = r.useState(!1), Y = r.useCallback(e => {
      N._O.updateSetting(Array.from(e))
    }, []), j = r.useCallback(e => {
      let t = h[e];
      return null != t ? (0, i.jsx)(U.Z, {
        getStickerItemProps: a,
        getStickerRowProps: u,
        gutterWidth: c,
        inspectedStickerPosition: d,
        isScrolling: I,
        isUsingKeyboardNavigation: T,
        onInspect: b,
        onSelect: x,
        rowIndex: e,
        stickerClassName: B.sticker,
        stickerDescriptors: t,
        stickerSize: n > V ? q : X,
        preferAnimation: n <= Z,
        ownedStickerPacks: p,
        isDisplayingIndividualStickers: !0,
        channel: g,
        currentUser: y
      }, e) : null
    }, [h, a, u, c, d, I, T, b, x, n, p, g, y]), W = r.useCallback((e, t) => (0, i.jsx)("div", {
      children: t
    }, e), []), Q = r.useCallback(function(e) {
      let {
        isStickerPack: n = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = new Set(t), r = t.has(e);
      r ? i.delete(e) : i.add(e), R.default.track(G.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: null == C ? void 0 : C.location,
        tab: w.X1.STICKER,
        collapsed: !r,
        sticker_pack_id: n ? e : null
      }), Y(i)
    }, [C, t, Y]), J = r.useCallback(e => {
      let n = S[e];
      if (null != O) {
        let {
          sendable: t,
          sendableWithPremium: n
        } = O;
        if (0 === e && t.length > 0) return null;
        let r = t.length > 0 && n.length > 0;
        return (0, i.jsxs)(i.Fragment, {
          children: [r ? (0, i.jsx)("div", {
            className: B.divider,
            children: (0, i.jsx)(l.FormDivider, {})
          }) : null, (0, i.jsx)(f.Z, {
            className: B.packHeader,
            "aria-label": k.Z.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
            children: k.Z.Messages.STICKERS_YOU_MIGHT_LIKE
          }, "stickers-you-might-like-header")]
        })
      }
      switch (n.type) {
        case L.Ih.FAVORITE:
          return (0, i.jsx)(f.Z, {
            className: B.packHeader,
            "aria-label": k.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
              categoryName: n.name
            }),
            icon: (0, i.jsx)(l.StarIcon, {
              size: "xs",
              color: "currentColor"
            }),
            isCollapsed: t.has(n.id),
            onClick: () => Q(n.id, {
              isStickerPack: !1
            }),
            children: n.name
          }, "header-".concat(n.id));
        case L.Ih.RECENT:
          return (0, i.jsx)(f.Z, {
            className: B.packHeader,
            "aria-label": k.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
              categoryName: n.name
            }),
            icon: (0, i.jsx)(l.ClockIcon, {
              size: "xs",
              color: "currentColor"
            }),
            isCollapsed: t.has(n.id),
            onClick: () => Q(n.id, {
              isStickerPack: !1
            }),
            children: n.name
          }, "header-".concat(n.id));
        case L.Ih.GUILD:
        case L.Ih.EMPTY_GUILD_UPSELL: {
          let e = A.Z.getGuild(n.id);
          if (null == e) return null;
          return (0, i.jsx)(f.Z, {
            className: B.packHeader,
            "aria-label": k.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
              categoryName: e.name
            }),
            icon: (0, i.jsx)(E.Z, {
              guild: e,
              height: 16,
              width: 16
            }),
            isCollapsed: t.has(e.id),
            onClick: () => Q(e.id),
            children: e.name
          }, "h".concat(e.id))
        }
        case L.Ih.PACK: {
          let e = v.Z.getStickerPack(n.id);
          if (null == e) return null;
          return (0, i.jsx)(f.Z, {
            className: B.packHeader,
            "aria-label": k.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
              categoryName: e.name
            }),
            icon: (0, i.jsx)(M.ZP, {
              disableAnimation: !0,
              size: 12,
              sticker: (0, D.Zt)(e)
            }),
            isCollapsed: t.has(e.id),
            onClick: () => Q(e.id),
            children: e.name
          }, "h".concat(e.id))
        }
      }
    }, [t, S, Q, O]), $ = r.useCallback(e => {
      if (null != O) {
        let {
          sendable: t,
          sendableWithPremium: n
        } = O;
        return 0 === e && t.length > 0 ? 0 : z + (t.length > 0 && n.length > 0 ? K : 0)
      }
      return z
    }, [O]), ee = r.useCallback(e => {
      let n = S[e],
        r = t.has(n.id);
      return n.type !== L.Ih.EMPTY_GUILD_UPSELL || null != O || r ? null : (0, i.jsx)(P.Z, {
        className: B.emptyGuildUpsell,
        guildId: n.id,
        channel: g,
        shouldTrackUpsellViewed: !H,
        setTrackedUpsellViewed: F
      }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
    }, [S, t, O, g, H]);
    return {
      renderRow: j,
      renderSection: W,
      renderSectionHeader: J,
      sectionHeaderHeight: $,
      renderSectionFooter: ee,
      sectionFooterHeight: r.useCallback(e => {
        let n = S[e],
          i = t.has(n.id);
        return n.type !== L.Ih.EMPTY_GUILD_UPSELL || i ? 0 : ei
      }, [S, t])
    }
  },
  el = r.forwardRef(function(e, t) {
    let {
      collapsedStickersCategories: n,
      gridWidth: a,
      filteredStickers: l,
      getStickerItemProps: _,
      getStickerRowProps: E,
      gutterWidth: h,
      isUsingKeyboardNavigation: f,
      onSelectSticker: N,
      rowCount: A,
      rowCountBySection: m,
      stickersCategories: R,
      stickersGrid: p,
      channel: g
    } = e, C = r.useRef(!1), L = r.useRef(null), [D, M] = I.ZN.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], s.Z), {
      analyticsLocations: P
    } = (0, d.ZP)(c.Z.STICKER_PICKER), U = (0, T.Iu)(e => e.searchQuery), b = (0, o.e7)([v.Z], () => v.Z.getPremiumPacks()), {
      renderRow: G,
      renderSection: w,
      renderSectionFooter: Z,
      sectionFooterHeight: H,
      renderSectionHeader: F,
      sectionHeaderHeight: Y
    } = ea({
      collapsedStickersCategories: n,
      gridWidth: a,
      stickersCategories: R,
      stickersGrid: p,
      isScrolling: C,
      isUsingKeyboardNavigation: f,
      onSelectSticker: N,
      getStickerItemProps: _,
      getStickerRowProps: E,
      gutterWidth: h,
      inspectedStickerPosition: M,
      filteredStickers: l,
      ownedStickerPacks: r.useMemo(() => new Set(b.map(e => e.id)), [b]),
      channel: g
    }), j = (0, S.Qs)({
      activeCategoryIndex: D,
      isScrolling: C,
      listRef: L,
      onActiveCategoryIndexChange: I.ZN.setActiveCategoryIndex,
      scrollOffset: 20,
      searchQuery: U
    });
    return (0, S.Xs)({
      searchQuery: U,
      activeCategoryIndex: D,
      listRef: L
    }), r.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
      },
      scrollToSectionTop: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
      },
      scrollRowIntoView: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
      },
      getScrollerNode: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
      },
      scrollIntoViewNode: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
      },
      getListDimensions: function() {
        for (var e, t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        return null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== t ? t : {
          height: -1,
          totalHeight: -1
        }
      }
    }), []), (0, i.jsx)(d.Gt, {
      value: P,
      children: (0, i.jsxs)("div", {
        className: B.wrapper,
        children: [null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length ? (0, i.jsx)(u.Z, {
          message: k.Z.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
          className: B.__invalid_noSearchResultsContainer,
          noResultsImageURL: x,
          suggestions: (0, i.jsx)(es, {
            onSuggestionClick: e => (0, T.ql)(e, !0)
          })
        }) : (0, i.jsx)(O.Z, {
          role: "none presentation",
          listPadding: null != l ? en : et,
          onScroll: j,
          renderRow: G,
          renderSection: null == l ? w : void 0,
          renderSectionHeader: F,
          renderSectionFooter: Z,
          rowCount: A,
          rowCountBySection: m,
          rowHeight: a > V ? $ : ee,
          sectionHeaderHeight: Y,
          sectionFooterHeight: H,
          stickyHeaders: !0,
          ref: L
        }), (0, i.jsx)(y.Z, {
          stickersGrid: p
        })]
      })
    })
  });
t.Z = el