"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("954955"),
  a = n.n(s),
  o = n("143927"),
  l = n("442837"),
  u = n("477690"),
  d = n("481060"),
  _ = n("2052"),
  c = n("100527"),
  E = n("906732"),
  I = n("806966"),
  T = n("28546"),
  f = n("98528"),
  S = n("98278"),
  h = n("639119"),
  A = n("695346"),
  m = n("594174"),
  N = n("626135"),
  p = n("624138"),
  O = n("191177"),
  C = n("285651"),
  R = n("217590"),
  g = n("453070"),
  L = n("926491"),
  v = n("373228"),
  D = n("462109"),
  M = n("422195"),
  y = n("657795"),
  P = n("489762"),
  U = n("31543"),
  b = n("814042"),
  G = n("15350"),
  w = n("611480"),
  k = n("981631"),
  B = n("802011");
let V = (0, p.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  x = (0, p.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  F = (0, p.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  H = (0, p.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  Y = (0, p.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
  j = (0, p.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  W = (0, p.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  K = (0, p.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  z = j + 2 * K,
  Z = W + 2 * K,
  X = a()(R.trackStickerSearchEmpty, 200),
  Q = a()(R.trackStickerSearchResultsViewed, 200),
  q = r.forwardRef(function(e, t) {
    var s;
    let {
      containerWidth: a,
      channel: u,
      onSelectSticker: p,
      closePopout: j
    } = e, {
      location: W
    } = (0, _.useAnalyticsContext)(), {
      analyticsLocations: K
    } = (0, E.default)(c.default.STICKER_PICKER), q = (null === (s = (0, h.usePremiumTrialOffer)()) || void 0 === s ? void 0 : s.subscription_trial) != null, J = r.useRef(null), $ = r.useRef(null), ee = r.useRef(null), et = (0, O.useStickerPickerUpsellStore)(e => e.showPremiumUpsell), [en, ei] = (0, T.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], o.default), er = r.useRef("");
    r.useImperativeHandle(t, () => ({
      onPickerOpen: ey
    }));
    let es = (0, g.useFilteredStickerPackCategories)(u),
      ea = 0 === es.filter(e => e.type !== v.StickerCategoryTypes.EMPTY_GUILD_UPSELL).length,
      eo = (0, f.useExpressionPickerGridWidth)({
        gridWrapperRef: J,
        containerWidth: a,
        showingEmptyState: ea,
        listPaddingLeft: x,
        listScrollbarWidth: 8
      }),
      el = A.StickerPickerCollapsedSections.useSetting(),
      eu = r.useMemo(() => new Set(el), [el]),
      ed = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()),
      e_ = r.useMemo(() => (0, G.getFilteredStickers)(en, ed, u), [en, ed, u]),
      ec = (0, g.useFavoriteStickers)(),
      eE = (0, g.useLatestFrecentStickers)(),
      eI = (0, l.useStateFromStoresObject)([L.default], () => L.default.getAllGuildStickers()),
      {
        sendable: eT = [],
        sendableWithPremium: ef = []
      } = null != e_ ? e_ : {},
      eS = eT.length + ef.length,
      eh = r.useCallback(e => {
        "" === en ? (0, R.trackStickerSelect)(e) : (0, R.trackStickerSearchSelect)(e, en, eS), p(e.sticker, v.StickerSelectLocation.STICKER_PICKER)
      }, [p, en, eS]),
      eA = null != eo && eo > V,
      {
        rowCount: em,
        rowCountBySection: eN,
        stickersGrid: ep,
        gutterWidth: eO,
        columnCounts: eC
      } = (0, g.useStickersGrid)({
        filteredStickers: e_,
        stickersCategories: es,
        collapsedStickersCategories: eu,
        listWidth: eo,
        listPaddingRight: F,
        stickerNodeMargin: eA ? H : Y,
        stickerNodeWidth: eA ? z : Z
      }),
      eR = r.useCallback((e, t) => {
        let {
          location: r
        } = t;
        switch (e.type) {
          case v.StickerGridItemTypes.CREATE_STICKER:
            N.default.track(k.AnalyticEvents.OPEN_MODAL, {
              type: k.AnalyticsSections.CREATE_STICKER_MODAL,
              location: W
            }), (0, d.openModalLazy)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("93626"), n.e("84482")]).then(n.bind(n, "136735"));
              return n => (0, i.jsx)(t, {
                guildId: e.guild_id,
                ...n
              })
            });
            break;
          case v.StickerGridItemTypes.STICKER:
            null != e.sticker && (0, C.isSendableSticker)(e.sticker, ed, u) && eh(e)
        }
      }, [W, ed, u, eh]),
      {
        getItemProps: eg,
        getRowProps: eL,
        gridContainerProps: ev,
        handleGridContainerKeyDown: eD,
        isUsingKeyboardNavigation: eM
      } = (0, D.useKeyboardNavigation)({
        columnCounts: eC,
        stickersListRef: $,
        stickersGrid: ep,
        onGridItemSelect: eR,
        store: I.StickerPickerStore,
        setInspectedStickerPosition: I.StickerPickerStore.setInspectedExpressionPosition,
        gridNavigatorId: w.GRID_NAVIGATOR_ID
      });
    r.useEffect(() => I.StickerPickerStore.resetStoreState, []);
    let ey = () => {
      let e = u.getGuildId(),
        t = [];
      if (null !== e) {
        var n;
        t = null !== (n = L.default.getStickersByGuildId(e)) && void 0 !== n ? n : []
      }
      let i = 0;
      null != eI && [...eI.values()].forEach(e => {
        i += e.length
      }), (0, R.trackStickerPickerOpen)({
        containerWidth: a,
        favoriteStickers: ec,
        frequentlyUsedStickers: eE,
        guildStickers: t,
        stickersTotal: i
      })
    };
    r.useEffect(() => {
      "" === er.current && "" !== en && (0, R.trackStickerSearchStart)(), er.current = en
    }, [en]), r.useEffect(() => {
      0 === eS ? X(en) : Q(en, eS, ei)
    }, [en, eS, ei]), r.useLayoutEffect(() => {
      var e;
      null === (e = ee.current) || void 0 === e || e.focus()
    }, []);
    let eP = r.useCallback(() => {
      j(), N.default.track(k.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
        location_section: k.AnalyticsSections.STICKER_PICKER_UPSELL
      }), (0, S.navigateToPremiumMarketingPage)()
    }, [j]);
    return (0, i.jsxs)(E.AnalyticsLocationProvider, {
      value: K,
      children: [!(q && ea) && (0, i.jsx)("div", {
        className: B.header,
        children: (0, i.jsx)(U.default, {
          ref: ee,
          onKeyDown: eD,
          stickersListRef: $,
          channel: u
        })
      }), ea ? (0, i.jsx)(y.default, {
        className: B.emptyState,
        onClose: j
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          ref: J,
          className: B.listWrapper,
          id: w.GRID_NAVIGATOR_ID,
          ...ev,
          children: null != eo ? (0, i.jsx)(P.default, {
            ref: $,
            collapsedStickersCategories: eu,
            filteredStickers: e_,
            getStickerItemProps: eg,
            getStickerRowProps: eL,
            gridWidth: eo,
            gutterWidth: eO,
            isUsingKeyboardNavigation: eM,
            onSelectSticker: eh,
            rowCount: em,
            rowCountBySection: eN,
            stickersCategories: es,
            stickersGrid: ep,
            channel: u
          }) : null
        }), (0, i.jsx)(M.default, {
          stickersListRef: $,
          channel: u
        })]
      }), et && (0, i.jsx)(b.StickersPremiumUpsell, {
        onLearnMore: eP
      })]
    })
  });
t.default = r.forwardRef((e, t) => ((0, g.useFetchStickerPacks)(), (0, i.jsx)("div", {
  className: B.wrapper,
  id: w.STICKER_PICKER_TAB_PANEL_ID,
  "aria-labelledby": w.STICKER_PICKER_TAB_ID,
  role: "tabpanel",
  children: e.isLoading ? (0, i.jsx)(d.Spinner, {
    className: B.loadingIndicator
  }) : (0, i.jsx)(q, {
    ...e,
    ref: t
  })
})))