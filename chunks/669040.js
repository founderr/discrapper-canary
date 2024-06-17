"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("392711"),
  l = n.n(o),
  u = n("920906"),
  d = n("873546"),
  _ = n("442837"),
  c = n("946188"),
  E = n("477690"),
  I = n("481060"),
  T = n("788911"),
  f = n("2052"),
  S = n("607070"),
  h = n("906732"),
  A = n("806966"),
  m = n("28546"),
  N = n("691251"),
  p = n("98528"),
  O = n("551058"),
  C = n("536442"),
  R = n("75145"),
  g = n("197115"),
  L = n("695346"),
  v = n("594174"),
  D = n("695464"),
  M = n("242411"),
  y = n("626135"),
  P = n("111361"),
  U = n("624138"),
  b = n("543241"),
  G = n("883661"),
  w = n("880949"),
  k = n("784222"),
  B = n("172800"),
  V = n("149203"),
  x = n("981631"),
  F = n("957825"),
  H = n("474936"),
  Y = n("689938"),
  j = n("995292");
let W = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  K = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  z = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  Z = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  Q = (0, U.cssValueToNumber)(E.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  X = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  q = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  J = e => e + 2 * q,
  $ = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: s,
      emojiSize: o,
      onEmojiSelect: u,
      searchQuery: d,
      sectionDescriptors: E,
      setCollapsedSections: I,
      getEmojiItemProps: T,
      getEmojiRowProps: S,
      isScrolling: h,
      isUsingKeyboardNavigation: m,
      allowAnimatedEmoji: p,
      channelGuildId: g,
      messageId: L,
      isBurstReaction: v,
      listHeaderClassName: D,
      activeSectionIndex: M,
      upsellGlowOpacity: P
    } = e, U = (0, f.useAnalyticsContext)(), H = r.useRef(x.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), Y = r.useMemo(() => "" !== n ? c.default.convert.toCodePoint(n) : "", [n]), q = r.useCallback(e => {
      let t = E[e],
        n = E[e + 1];
      return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
    }, [E]), J = r.useCallback(e => {
      if (e >= E.length - 1) return !1;
      let t = E[e],
        n = E[e + 1];
      return !t.isNitroLocked && n.isNitroLocked
    }, [E]), $ = r.useCallback(function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        i = new Set(t),
        r = t.has(e);
      r ? i.delete(e) : i.add(e), null != n && y.default.track(x.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: U.location,
        tab: F.ExpressionPickerViewType.EMOJI,
        collapsed: !r,
        guild_id: n.id
      }), I(i)
    }, [U, t, I]), ee = r.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, i = e.type === k.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
      H.current !== x.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(H.current), H.current = window.requestAnimationFrame(() => {
        A.EmojiPickerStore.setInspectedExpressionPosition(t, n, N.InspectedExpressionChangeSource.MOUSE_EVENT), A.EmojiPickerStore.setSearchPlaceholder(i), H.current = x.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
      })
    }, []), et = (0, _.useStateFromStores)([C.HotspotStore], () => C.HotspotStore.hasHotspot(C.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), en = r.useMemo(() => l().memoize((e, t) => {
      let n = s[e],
        r = E[t.sectionIndex];
      return (0, i.jsx)(B.default, {
        emojiDescriptors: n,
        emojiSize: o,
        surrogateCodePoint: Y,
        onInspect: ee,
        onSelect: u,
        getEmojiItemProps: T,
        getEmojiRowProps: S,
        isScrolling: h,
        isUsingKeyboardNavigation: m,
        rowIndex: e,
        allowAnimatedEmoji: p,
        showEmojiFavoriteTooltip: et,
        channelGuildId: g,
        category: r.sectionId,
        selectedItemClassName: j.__invalid_selectedItem,
        messageId: L,
        isBurstReaction: v,
        inNitroLockedSection: r.isNitroLocked
      }, e)
    }), [s, E, o, Y, ee, u, T, S, h, m, p, et, g, L, v]);
    r.useEffect(() => () => {
      var e, t;
      return null === (t = en.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
    }, [en]);
    let ei = r.useMemo(() => l().memoize(e => {
        let n = E[e];
        if (null == n) return;
        let {
          guild: r,
          categoryId: s,
          type: o,
          sectionId: l
        } = n;
        if (o === V.EmojiCategoryTypes.SEARCH_RESULTS) return;
        let u = o === V.EmojiCategoryTypes.GUILD ? null != r ? (0, i.jsx)(w.default, {
            guild: r,
            height: 16,
            width: 16
          }) : null : null != s ? (0, i.jsx)(G.default, {
            categoryId: s,
            height: 16,
            width: 16
          }) : null,
          d = null == r ? void 0 : r.toString();
        null != s && (d = (0, b.getStringForEmojiCategory)(s, null == r ? void 0 : r.toString()));
        let _ = M === e,
          c = n.isNitroLocked,
          I = c && !_,
          T = c && _;
        return (0, i.jsx)(O.default, {
          className: a()(j.header, D, {
            [j.inactiveNitroHeader]: I,
            [j.activeNitroHeader]: T
          }),
          icon: u,
          isCollapsed: t.has(l),
          onClick: () => $(l, r),
          children: d
        }, l)
      }), [E, t, $, D, M]),
      er = r.useCallback((e, n) => {
        let r = E[e],
          s = J(e),
          o = q(e);
        return (0, i.jsx)("div", {
          className: a()(j.categorySection, {
            [j.categorySectionLast]: e === E.length - 1,
            [j.categorySectionCollapsed]: t.has(r.sectionId),
            [j.categorySectionNitroLocked]: r.isNitroLocked,
            [j.categorySectionNitroDivider]: s || o
          }),
          children: n
        }, e)
      }, [t, E, J, q]),
      es = r.useCallback(e => J(e) ? (0, i.jsx)(R.default, {
        glowOpacity: P
      }) : q(e) ? (0, i.jsx)("div", {
        className: j.nitroBottomDivider
      }) : null, [P, J, q]),
      ea = r.useCallback(e => J(e) ? 41 : q(e) ? 33 : 0, [J, q]),
      eo = r.useCallback(e => {
        var n;
        return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || J(e) || q(e) ? 0 : X
      }, [t, E, J, q]),
      el = r.useMemo(() => ["" !== d ? Z : W, K, z, 0], [d]);
    return {
      listPadding: el,
      renderRow: en,
      renderSection: er,
      renderSectionHeader: ei,
      renderSectionFooter: es,
      sectionMarginBottom: eo,
      sectionHeaderHeight: r.useCallback(e => E[e].type === V.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : Q, [E]),
      sectionFooterHeight: ea
    }
  },
  ee = r.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: n,
      emojiListRef: s,
      emojiSize: a,
      onEmojiSelect: o,
      sectionDescriptors: l,
      rowCountBySection: c,
      collapsedSections: E,
      setCollapsedSections: N,
      getEmojiItemProps: O,
      getEmojiRowProps: C,
      rowCount: R,
      isUsingKeyboardNavigation: U,
      channelGuildId: b,
      messageId: G,
      isBurstReaction: w,
      listHeaderClassName: k
    } = e, B = r.useRef(!1), V = A.EmojiPickerStore.useStore(e => e.activeCategoryIndex), F = (0, m.useExpressionPickerStore)(e => e.searchQuery), W = L.AnimateEmoji.useSetting(), K = (0, _.useStateFromStores)([v.default], () => v.default.getCurrentUser()), z = (0, P.isPremium)(K), {
      location: Z
    } = (0, f.useAnalyticsContext)(), {
      analyticsLocations: Q
    } = (0, h.default)(), [X, q] = r.useState(0), [ee, et] = r.useState(!1), [en, ei] = r.useState(0), er = (0, _.useStateFromStores)([S.default], () => S.default.useReducedMotion), es = (0, u.useSpring)({
      transform: ee ? "translateY(0%)" : "translateY(120%)",
      opacity: ee ? 1 : 0,
      config: {
        tension: 120,
        friction: 14
      },
      immediate: er
    }), {
      listPadding: ea,
      renderRow: eo,
      renderSection: el,
      renderSectionHeader: eu,
      renderSectionFooter: ed,
      sectionMarginBottom: e_,
      sectionHeaderHeight: ec,
      sectionFooterHeight: eE
    } = $({
      collapsedSections: E,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: a,
      onEmojiSelect: o,
      searchQuery: F,
      sectionDescriptors: l,
      setCollapsedSections: N,
      getEmojiItemProps: O,
      getEmojiRowProps: C,
      isScrolling: B,
      isUsingKeyboardNavigation: U,
      allowAnimatedEmoji: W,
      channelGuildId: b,
      messageId: G,
      isBurstReaction: w,
      listHeaderClassName: k,
      activeSectionIndex: X,
      upsellGlowOpacity: en
    }), eI = (0, p.useShowUpsellForScrollPosition)({
      listRef: s,
      searchQuery: F,
      setShowUpsell: et,
      setUpsellGlowOpacity: ei,
      emojiSectionDescriptors: l
    }), eT = (0, p.useSynchronizedActiveCategoryIndexForScrollPosition)({
      activeCategoryIndex: V,
      isScrolling: B,
      listRef: s,
      onActiveCategoryIndexChange: e => {
        q(e), "" === F && A.EmojiPickerStore.setActiveCategoryIndex(e)
      },
      scrollOffset: 0,
      searchQuery: F,
      disableForSearch: !1
    });
    (0, p.useSynchronizedScrollPositionForActiveCategoryIndex)({
      searchQuery: F,
      activeCategoryIndex: V,
      listRef: s
    });
    let ef = r.useCallback(e => {
        eI(e), eT(e)
      }, [eI, eT]),
      eS = l.length > 0;
    return r.useEffect(() => {
      ee && y.default.track(x.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: H.PremiumUpsellTypes.EMOJI_PICKER_FLOATING_UPSELL,
        location: Z,
        location_stack: Q
      })
    }, [Z, Q, ee]), r.useEffect(() => {
      "" !== F && (ei(0), et(!1))
    }, [F]), (0, i.jsxs)("div", {
      className: j.listWrapper,
      children: [eS ? (0, i.jsx)(D.default, {
        role: "none presentation",
        className: j.list,
        listPadding: ea,
        onScroll: ef,
        renderRow: eo,
        renderSection: el,
        renderSectionHeader: eu,
        renderSectionFooter: ed,
        rowCount: R,
        rowCountBySection: c,
        rowHeight: J(a),
        sectionHeaderHeight: ec,
        sectionMarginBottom: e_,
        sectionFooterHeight: eE,
        stickyHeaders: !0,
        ref: s
      }) : (0, i.jsx)(T.default, {
        message: Y.default.Messages.NO_EMOJI_SEARCH_RESULTS,
        className: j.noSearchResultsContainer
      }), z || d.isMobile ? null : (0, i.jsxs)(u.animated.div, {
        style: {
          ...es,
          opacity: es.opacity
        },
        className: j.upsellContainer,
        children: [(0, i.jsx)(M.default, {
          width: 16,
          height: 16,
          className: j.upsellLock
        }), (0, i.jsx)(I.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          className: j.upsellText,
          children: Y.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE
        }), (0, i.jsx)(g.default, {
          className: j.upsellButton,
          size: I.ButtonSizes.TINY,
          shinyButtonClassName: j.upsellButton,
          subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2,
          buttonText: Y.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
          premiumModalAnalyticsLocation: {
            section: x.AnalyticsSections.EMOJI_PICKER_FLOATING_UPSELL
          },
          tabIndex: ee ? 0 : -1
        })]
      })]
    })
  });
t.default = ee