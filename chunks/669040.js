"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(920906),
  _ = n(873546),
  c = n(442837),
  d = n(946188),
  E = n(477690),
  I = n(481060),
  T = n(788911),
  h = n(2052),
  S = n(607070),
  f = n(906732),
  N = n(806966),
  A = n(28546),
  m = n(691251),
  O = n(98528),
  R = n(551058),
  p = n(536442),
  g = n(75145),
  C = n(197115),
  v = n(695346),
  L = n(594174),
  D = n(695464),
  M = n(626135),
  P = n(111361),
  y = n(624138),
  U = n(543241),
  b = n(883661),
  G = n(880949),
  w = n(784222),
  B = n(172800),
  k = n(149203),
  x = n(981631),
  V = n(957825),
  Z = n(474936),
  H = n(689938),
  F = n(935879);
let Y = (0, y.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  j = (0, y.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  W = (0, y.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  K = (0, y.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  z = (0, y.Mg)(E.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  q = (0, y.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  X = (0, y.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  Q = e => e + 2 * X,
  J = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: s,
      emojiSize: a,
      onEmojiSelect: u,
      searchQuery: _,
      sectionDescriptors: E,
      setCollapsedSections: I,
      getEmojiItemProps: T,
      getEmojiRowProps: S,
      isScrolling: f,
      isUsingKeyboardNavigation: A,
      allowAnimatedEmoji: O,
      channelGuildId: C,
      messageId: v,
      isBurstReaction: L,
      listHeaderClassName: D,
      activeSectionIndex: P,
      upsellGlowOpacity: y
    } = e, Z = (0, h.O)(), H = r.useRef(x.xAR), X = r.useMemo(() => "" !== n ? d.Z.convert.toCodePoint(n) : "", [n]), Q = r.useCallback(e => {
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
      r ? i.delete(e) : i.add(e), null != n && M.default.track(x.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: Z.location,
        tab: V.X1.EMOJI,
        collapsed: !r,
        guild_id: n.id
      }), I(i)
    }, [Z, t, I]), ee = r.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, i = e.type === w.ld.EMOJI ? e.emoji.allNamesString : e.name;
      H.current !== x.xAR && window.cancelAnimationFrame(H.current), H.current = window.requestAnimationFrame(() => {
        N.kJ.setInspectedExpressionPosition(t, n, m.u.MOUSE_EVENT), N.kJ.setSearchPlaceholder(i), H.current = x.xAR
      })
    }, []), et = (0, c.e7)([p.qc], () => p.qc.hasHotspot(p.v6.FAVORITE_EMOJI_TOOLTIP), []), en = r.useMemo(() => l().memoize((e, t) => {
      let n = s[e],
        r = E[t.sectionIndex];
      return (0, i.jsx)(B.Z, {
        emojiDescriptors: n,
        emojiSize: a,
        surrogateCodePoint: X,
        onInspect: ee,
        onSelect: u,
        getEmojiItemProps: T,
        getEmojiRowProps: S,
        isScrolling: f,
        isUsingKeyboardNavigation: A,
        rowIndex: e,
        allowAnimatedEmoji: O,
        showEmojiFavoriteTooltip: et,
        channelGuildId: C,
        category: r.sectionId,
        selectedItemClassName: F.__invalid_selectedItem,
        messageId: v,
        isBurstReaction: L,
        inNitroLockedSection: r.isNitroLocked
      }, e)
    }), [s, E, a, X, ee, u, T, S, f, A, O, et, C, v, L]);
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
          type: a,
          sectionId: l
        } = n;
        if (a === k.En.SEARCH_RESULTS) return;
        let u = a === k.En.GUILD ? null != r ? (0, i.jsx)(G.Z, {
            guild: r,
            height: 16,
            width: 16
          }) : null : null != s ? (0, i.jsx)(b.Z, {
            categoryId: s,
            height: 16,
            width: 16,
            size: "custom"
          }) : null,
          _ = null == r ? void 0 : r.toString();
        null != s && (_ = (0, U.Y1)(s, null == r ? void 0 : r.toString()));
        let c = P === e,
          d = n.isNitroLocked,
          I = d && !c,
          T = d && c;
        return (0, i.jsx)(R.Z, {
          className: o()(F.header, D, {
            [F.inactiveNitroHeader]: I,
            [F.activeNitroHeader]: T
          }),
          icon: u,
          isCollapsed: t.has(l),
          onClick: () => $(l, r),
          children: _
        }, l)
      }), [E, t, $, D, P]),
      er = r.useCallback((e, n) => {
        let r = E[e],
          s = J(e),
          a = Q(e);
        return (0, i.jsx)("div", {
          className: o()(F.categorySection, {
            [F.categorySectionLast]: e === E.length - 1,
            [F.categorySectionCollapsed]: t.has(r.sectionId),
            [F.categorySectionNitroLocked]: r.isNitroLocked,
            [F.categorySectionNitroDivider]: s || a
          }),
          children: n
        }, e)
      }, [t, E, J, Q]),
      es = r.useCallback(e => J(e) ? (0, i.jsx)(g.Z, {
        glowOpacity: y
      }) : Q(e) ? (0, i.jsx)("div", {
        className: F.nitroBottomDivider
      }) : null, [y, J, Q]),
      eo = r.useCallback(e => J(e) ? 41 : Q(e) ? 33 : 0, [J, Q]),
      ea = r.useCallback(e => {
        var n;
        return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || J(e) || Q(e) ? 0 : q
      }, [t, E, J, Q]),
      el = r.useMemo(() => ["" !== _ ? K : Y, j, W, 0], [_]);
    return {
      listPadding: el,
      renderRow: en,
      renderSection: er,
      renderSectionHeader: ei,
      renderSectionFooter: es,
      sectionMarginBottom: ea,
      sectionHeaderHeight: r.useCallback(e => E[e].type === k.En.SEARCH_RESULTS ? 0 : z, [E]),
      sectionFooterHeight: eo
    }
  },
  $ = r.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: n,
      emojiListRef: s,
      emojiSize: o,
      onEmojiSelect: a,
      sectionDescriptors: l,
      rowCountBySection: d,
      collapsedSections: E,
      setCollapsedSections: m,
      getEmojiItemProps: R,
      getEmojiRowProps: p,
      rowCount: g,
      isUsingKeyboardNavigation: y,
      channelGuildId: U,
      messageId: b,
      isBurstReaction: G,
      listHeaderClassName: w
    } = e, B = r.useRef(!1), k = N.kJ.useStore(e => e.activeCategoryIndex), V = (0, A.Iu)(e => e.searchQuery), Y = v.Yk.useSetting(), j = (0, c.e7)([L.default], () => L.default.getCurrentUser()), W = (0, P.I5)(j), {
      location: K
    } = (0, h.O)(), {
      analyticsLocations: z
    } = (0, f.ZP)(), [q, X] = r.useState(0), [$, ee] = r.useState(!1), [et, en] = r.useState(0), ei = (0, c.e7)([S.Z], () => S.Z.useReducedMotion), er = (0, u.useSpring)({
      transform: $ ? "translateY(0%)" : "translateY(120%)",
      opacity: $ ? 1 : 0,
      config: {
        tension: 120,
        friction: 14
      },
      immediate: ei
    }), {
      listPadding: es,
      renderRow: eo,
      renderSection: ea,
      renderSectionHeader: el,
      renderSectionFooter: eu,
      sectionMarginBottom: e_,
      sectionHeaderHeight: ec,
      sectionFooterHeight: ed
    } = J({
      collapsedSections: E,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: o,
      onEmojiSelect: a,
      searchQuery: V,
      sectionDescriptors: l,
      setCollapsedSections: m,
      getEmojiItemProps: R,
      getEmojiRowProps: p,
      isScrolling: B,
      isUsingKeyboardNavigation: y,
      allowAnimatedEmoji: Y,
      channelGuildId: U,
      messageId: b,
      isBurstReaction: G,
      listHeaderClassName: w,
      activeSectionIndex: q,
      upsellGlowOpacity: et
    }), eE = (0, O.Uf)({
      listRef: s,
      searchQuery: V,
      setShowUpsell: ee,
      setUpsellGlowOpacity: en,
      emojiSectionDescriptors: l
    }), eI = (0, O.Qs)({
      activeCategoryIndex: k,
      isScrolling: B,
      listRef: s,
      onActiveCategoryIndexChange: e => {
        X(e), "" === V && N.kJ.setActiveCategoryIndex(e)
      },
      scrollOffset: 0,
      searchQuery: V,
      disableForSearch: !1
    });
    (0, O.Xs)({
      searchQuery: V,
      activeCategoryIndex: k,
      listRef: s
    });
    let eT = r.useCallback(e => {
        eE(e), eI(e)
      }, [eE, eI]),
      eh = l.length > 0;
    return r.useEffect(() => {
      $ && M.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
        type: Z.cd.EMOJI_PICKER_FLOATING_UPSELL,
        location: K,
        location_stack: z
      })
    }, [K, z, $]), r.useEffect(() => {
      "" !== V && (en(0), ee(!1))
    }, [V]), (0, i.jsxs)("div", {
      className: F.listWrapper,
      children: [eh ? (0, i.jsx)(D.Z, {
        role: "none presentation",
        className: F.list,
        listPadding: es,
        onScroll: eT,
        renderRow: eo,
        renderSection: ea,
        renderSectionHeader: el,
        renderSectionFooter: eu,
        rowCount: g,
        rowCountBySection: d,
        rowHeight: Q(o),
        sectionHeaderHeight: ec,
        sectionMarginBottom: e_,
        sectionFooterHeight: ed,
        stickyHeaders: !0,
        ref: s
      }) : (0, i.jsx)(T.Z, {
        message: H.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
        className: F.noSearchResultsContainer
      }), W || _.tq ? null : (0, i.jsxs)(u.animated.div, {
        style: {
          ...er,
          opacity: er.opacity
        },
        className: F.upsellContainer,
        children: [(0, i.jsx)(I.LockIcon, {
          size: "xs",
          color: "currentColor",
          className: F.upsellLock
        }), (0, i.jsx)(I.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          className: F.upsellText,
          children: H.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE
        }), (0, i.jsx)(C.Z, {
          className: F.upsellButton,
          size: I.ButtonSizes.TINY,
          shinyButtonClassName: F.upsellButton,
          subscriptionTier: Z.Si.TIER_2,
          buttonText: H.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
          premiumModalAnalyticsLocation: {
            section: x.jXE.EMOJI_PICKER_FLOATING_UPSELL
          },
          tabIndex: $ ? 0 : -1
        })]
      })]
    })
  });
t.Z = $