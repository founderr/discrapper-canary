"use strict";
n.r(t), n("47120"), n("653041");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("954955"),
  l = n.n(o),
  u = n("739940"),
  d = n("442837"),
  _ = n("524437"),
  c = n("477690"),
  E = n("481060"),
  I = n("80932"),
  T = n("410575"),
  f = n("2052"),
  S = n("100527"),
  h = n("906732"),
  A = n("243778"),
  m = n("339085"),
  N = n("438332"),
  p = n("664437"),
  O = n("806966"),
  C = n("28546"),
  R = n("691251"),
  g = n("98528"),
  L = n("770812"),
  v = n("434404"),
  D = n("536442"),
  M = n("695346"),
  y = n("984933"),
  P = n("594174"),
  U = n("626135"),
  b = n("111361"),
  G = n("624138"),
  w = n("543241"),
  k = n("199257"),
  B = n("636411"),
  V = n("380331"),
  x = n("170762"),
  F = n("22363"),
  H = n("784222"),
  Y = n("141507"),
  j = n("669040"),
  W = n("901963"),
  K = n("212263"),
  z = n("149203"),
  Z = n("981631"),
  X = n("921944"),
  Q = n("185923"),
  q = n("773390");
let J = (0, G.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  $ = (0, G.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  ee = e => e.stopPropagation(),
  et = (e, t) => {
    O.EmojiPickerStore.setInspectedExpressionPosition(e, t, R.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
  },
  en = e => {
    let {
      analyticsLocation: t,
      pickerIntention: n,
      columnCounts: i,
      onSelectEmoji: s,
      emojiGrid: a,
      emojiList: o,
      channelGuildId: l,
      isBurstReaction: _
    } = e, c = (0, d.useStateFromStores)([m.default], () => m.default.getDisambiguatedEmojiContext(l), [l]), E = r.useCallback((e, i) => {
      switch (e.type) {
        case H.EmojiGridItemTypes.CREATE_EMOJI:
          s(void 0, !0), v.default.open(e.guildId, Z.GuildSettingsSections.EMOJI);
          return;
        case H.EmojiGridItemTypes.EMOJI: {
          if (null != e.emoji && i.altKey) {
            c.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, I.unfavoriteEmoji)(e.emoji) : ((0, w.trackEmojiFavorited)({
              emoji: e.emoji,
              location: {
                ...t,
                object: Z.AnalyticsObjects.EMOJI
              }
            }), (0, I.favoriteEmoji)(e.emoji));
            return
          }
          let r = {
            page: null != l ? Z.AnalyticsPages.GUILD_CHANNEL : Z.AnalyticsPages.DM_CHANNEL,
            section: Z.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: Z.AnalyticsObjects.EMOJI
          };
          _ && (r = {
            page: null != l ? Z.AnalyticsPages.GUILD_CHANNEL : Z.AnalyticsPages.DM_CHANNEL,
            section: Z.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: Z.AnalyticsObjects.EMOJI
          }), (0, w.trackEmojiSelect)({
            emoji: e.emoji,
            location: r,
            pickerIntention: n,
            category: e.category,
            subCategory: e.subCategory,
            newlyAddedHighlight: e.subCategory === z.EmojiSubCategory.NEWLY_ADDED_EMOJI && N.default.isNewerThanLastSeen(l, e.emoji.id)
          }), s(e.emoji, !i.shiftKey, _)
        }
      }
    }, [s, l, n, c, t, _]), {
      gridDispatch: T,
      getItemProps: f,
      getRowProps: S,
      gridContainerProps: h,
      handleGridContainerKeyDown: A,
      isUsingKeyboardNavigation: p
    } = (0, g.useExpressionPickerGridKeyboardNavigation)({
      columnCounts: i,
      gridNavigatorId: z.GRID_NAVIGATOR_ID,
      itemGrid: a,
      itemList: o,
      onGridNavigatorItemSelect: E,
      onGridNavigatorPositionChange: et
    });
    return r.useEffect(() => O.EmojiPickerStore.useStore.subscribe(e => {
      if (null == e) return;
      let {
        columnIndex: t,
        rowIndex: n,
        source: i
      } = e;
      i !== R.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && T({
        type: u.GridActionType.SET_FOCUSED_POSITION,
        x: t,
        y: n
      })
    }, e => e.inspectedExpressionPosition), [T]), {
      getItemProps: f,
      getRowProps: S,
      gridContainerProps: h,
      handleGridContainerKeyDown: A,
      isUsingKeyboardNavigation: p
    }
  },
  ei = (e, t) => {
    let [n, i] = r.useState(null);
    r.useEffect(() => {
      if (null != n) {
        var e;
        null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), i(null)
      }
    }, [t, n]), r.useEffect(() => {
      i(O.EmojiPickerStore.getState().activeCategoryIndex)
    }, [e])
  },
  er = (e, t, n, i) => {
    r.useLayoutEffect(() => {
      if (i) {
        var e;
        null === (e = n.current) || void 0 === e || e.focus()
      }
    }, [e, t, n, i])
  },
  es = l()(w.trackEmojiSearchEmpty, 200),
  ea = l()(w.trackEmojiSearchResultsViewed, 200),
  eo = {
    section: void 0,
    openPopoutType: void 0
  };
t.default = r.memo(r.forwardRef(function(e, t) {
  var n, s;
  let o, {
      pickerIntention: l,
      channel: u,
      guildId: c,
      closePopout: I,
      emojiSize: R = z.EmojiSize.MEDIUM,
      hasTabWrapper: v = !1,
      includeCreateEmojiButton: G,
      onSelectEmoji: et,
      containerWidth: el,
      onNavigateAway: eu,
      persistSearch: ed,
      className: e_,
      headerClassName: ec,
      analyticsOverride: eE = eo,
      searchProps: eI = {},
      wrapper: eT,
      shouldHidePickerActions: ef = !1,
      messageId: eS,
      renderHeader: eh,
      listHeaderClassName: eA
    } = e,
    {
      onFocus: em,
      onKeyDown: eN,
      autoFocus: ep = !0,
      accessory: eO
    } = eI,
    eC = (0, d.useStateFromStores)([y.default], () => null != c ? y.default.getDefaultChannel(c) : null, [c]),
    [eR, eg] = r.useState(null),
    eL = r.useRef(""),
    ev = (0, C.useExpressionPickerStore)(e => e.searchQuery),
    eD = r.useRef(null),
    eM = r.useRef(null),
    ey = r.useRef(null);
  null == u && null != eC && (u = eC);
  let eP = null !== (s = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : c) && void 0 !== s ? s : null,
    [eU, eb] = r.useState(!1),
    eG = P.default.getCurrentUser(),
    ew = (0, b.isPremium)(eG);
  r.useImperativeHandle(t, () => ({
    onPickerOpen: e3
  }));
  let {
    location: ek
  } = (0, f.useAnalyticsContext)(), {
    page: eB,
    section: eV,
    object: ex,
    openPopoutType: eF
  } = eE, eH = r.useMemo(() => ({
    ...ek,
    section: null != eV ? eV : Z.AnalyticsSections.EMOJI_PICKER_POPOUT
  }), [ek, eV]), {
    analyticsLocations: eY
  } = (0, h.default)(S.default.EMOJI_PICKER), {
    diversitySurrogate: ej
  } = (0, d.useStateFromStoresObject)([m.default], () => ({
    diversitySurrogate: m.default.diversitySurrogate
  })), eW = (0, w.useEmojiSearchResults)(ev, u, l), eK = null == eW ? 0 : eW.locked.length + eW.unlocked.length, ez = M.EmojiPickerCollapsedSections.useSetting(), eZ = r.useMemo(() => new Set(ez), [ez]), eX = r.useCallback(e => {
    M.EmojiPickerCollapsedSections.updateSetting(Array.from(e))
  }, []), eQ = (0, g.useExpressionPickerGridWidth)({
    gridWrapperRef: eD,
    containerWidth: el,
    listPaddingLeft: $,
    listScrollbarWidth: 8
  }), {
    rowCountBySection: eq,
    sectionDescriptors: eJ,
    emojiGrid: e$,
    columnCounts: e0
  } = (0, H.useEmojiGrid)({
    gridWidth: eQ,
    channel: u,
    includeCreateEmojiButton: G,
    pickerIntention: l,
    emojiSearchResults: eW,
    collapsedSections: eZ,
    emojiPaddingHorizontal: J,
    emojiSpriteSize: R
  }), {
    newlyAddedEmojis: e1
  } = (0, k.default)(eP, l), {
    trackOnPickerOpen: e2
  } = (0, w.useTrackEmojiPickerOpened)({
    intention: l,
    isBurstReaction: eU,
    analyticsObject: ex
  }), e3 = r.useCallback(() => {
    let e = e1.length > 0 ? e1[0].id : null;
    (0, p.updateNewlyAddedLastSeen)(eP, e), e2()
  }, [e2, e1, eP]), e4 = (0, H.useEmojiSelectHandler)({
    pickerIntention: l,
    selectedChannel: u,
    closePopout: I,
    onSelectEmoji: et,
    setUpsellConfigs: eg,
    emojiSelectAnalytics: e => {
      "" !== ev ? (0, w.trackEmojiSearchSelect)({
        emoji: e.emoji,
        location: {
          ...eH,
          object: Z.AnalyticsObjects.EMOJI
        },
        searchQuery: ev,
        intention: l
      }) : (0, w.trackEmojiSelect)({
        emoji: e.emoji,
        location: {
          ...eH,
          object: null != ex ? ex : Z.AnalyticsObjects.EMOJI,
          ...null != eB && {
            page: eB
          }
        },
        pickerIntention: l,
        category: e.category,
        subCategory: e.subCategory,
        position: e.columnIndex + 1,
        newlyAddedHighlight: e.subCategory === z.EmojiSubCategory.NEWLY_ADDED_EMOJI && N.default.isNewerThanLastSeen(eP, e.emoji.id),
        isBurstReaction: eU
      })
    },
    trackEmojiFavorited: e => {
      (0, w.trackEmojiFavorited)({
        emoji: e.emoji,
        location: {
          ...eH,
          object: Z.AnalyticsObjects.EMOJI
        }
      })
    }
  }), e6 = r.useCallback(() => {
    I(), null == eu || eu()
  }, [I, eu]), {
    getItemProps: e7,
    getRowProps: e5,
    gridContainerProps: e8,
    handleGridContainerKeyDown: e9,
    isUsingKeyboardNavigation: te
  } = en({
    pickerIntention: l,
    analyticsLocation: eH,
    columnCounts: e0,
    onSelectEmoji: et,
    emojiGrid: e$,
    emojiList: eM,
    channelGuildId: eP,
    isBurstReaction: eU
  });
  ei(el, eM), er(el, ej, ey, ep), r.useEffect(() => {
    !ed && (0, C.setSearchQuery)("")
  }, [ed]), r.useEffect(() => (U.default.track(Z.AnalyticEvents.OPEN_POPOUT, {
    type: null != eF ? eF : "Emoji Picker",
    guild_id: eP
  }), O.EmojiPickerStore.resetStoreState), [eF, eP]), r.useEffect(() => () => (0, D.hideHotspot)(D.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), r.useLayoutEffect(() => {
    var e;
    let {
      columnIndex: t,
      rowIndex: n
    } = O.EmojiPickerStore.getState().inspectedExpressionPosition;
    (null === (e = e$[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && O.EmojiPickerStore.setInspectedExpressionPosition(0, 0)
  }, [e$]), r.useEffect(() => {
    if ("" === eL.current && "" !== ev && (0, w.trackEmojiSearchStart)(eH, l), 0 === eK && "" !== ev) es(eH, ev);
    else if ("" !== ev && eL.current !== ev) {
      var e;
      ea(eK, null !== (e = null == eW ? void 0 : eW.locked.length) && void 0 !== e ? e : 0, eH, ev, l)
    }
    eL.current = ev
  }, [ev, eH, eK, eW, l]);
  let tt = null != eT ? eT : v ? "div" : E.Dialog,
    tn = null != eQ;
  (null == eR ? void 0 : eR.type) === H.EmojiUpsellType.PREMIUM ? o = (0, i.jsx)(K.default, {
    onLearnMore: e6,
    emojiDescriptor: eR.emojiDescriptor,
    pickerIntention: l,
    analyticsLocation: eH,
    onClose: () => eg(null),
    channel: u
  }) : (null == eR ? void 0 : eR.type) === H.EmojiUpsellType.ROLE_SUBSCRIPTION ? o = (0, i.jsx)(L.default, {
    onClose: () => eg(null),
    guildId: eR.guildId,
    emojiId: eR.emojiId
  }) : eU && !ew && (o = (0, i.jsx)(B.default, {
    onDismiss: () => eb(!1)
  }));
  let ti = (0, i.jsx)(F.default, {
      pickerIntention: l,
      emojiListRef: eM,
      onKeyDown: e => {
        null == e9 || e9(e), null == eN || eN(e)
      },
      searchBarRef: ey,
      onFocus: em,
      autoFocus: ep,
      accessory: eO,
      headerClassName: ec,
      hasTabWrapper: v,
      diversitySurrogate: ej,
      isBurstReaction: eU,
      onBurstReactionToggle: () => eb(!eU),
      renderHeader: eh
    }),
    tr = [];
  l === Q.EmojiIntention.REACTION && tr.push(_.DismissibleContent.SUPER_REACTIONS_NITRO_MARKETING), !m.default.hasFavoriteEmojis(eP) && tr.push(_.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
  let ts = (0, i.jsx)(T.default, {
    ...eH,
    children: (0, i.jsxs)(tt, {
      id: z.EMOJI_PICKER_TAB_PANEL_ID,
      "aria-labelledby": v ? z.EMOJI_PICKER_TAB_ID : void 0,
      role: v ? "tabpanel" : void 0,
      className: a()(q.wrapper, {
        [q.emojiPickerHasTabWrapper]: v,
        [q.isBurstReactionPicker]: eU && ew
      }),
      children: [v ? null : ti, (0, i.jsxs)("div", {
        className: a()(q.emojiPicker, e_),
        onScroll: ee,
        children: [v ? ti : null, (0, i.jsxs)("div", {
          className: q.bodyWrapper,
          ref: eD,
          children: [(0, i.jsx)(W.default, {
            channel: u,
            closePopout: I
          }), (0, i.jsx)(A.default, {
            contentTypes: tr,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === _.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, i.jsx)(x.default, {
                markAsDismissed: () => n(X.ContentDismissActionType.UNKNOWN)
              })
            }
          }), ef ? null : (0, i.jsx)("div", {
            className: q.emojiPickerListWrapper,
            id: z.GRID_NAVIGATOR_ID,
            ...e8,
            children: tn ? (0, i.jsx)(j.default, {
              collapsedSections: eZ,
              diversitySurrogate: ej,
              emojiGrid: e$,
              emojiListRef: eM,
              emojiSize: R,
              getEmojiItemProps: e7,
              getEmojiRowProps: e5,
              gridWidth: eQ,
              isUsingKeyboardNavigation: te,
              onEmojiSelect: (e, t) => {
                e4(e, {
                  ...t,
                  isBurst: eU
                })
              },
              rowCount: e$.length,
              rowCountBySection: eq,
              sectionDescriptors: eJ,
              setCollapsedSections: eX,
              channelGuildId: eP,
              messageId: eS,
              isBurstReaction: eU,
              listHeaderClassName: eA
            }) : null
          })]
        }), (0, i.jsx)(Y.EmojiPickerInspector, {
          emojiGrid: e$,
          className: q.inspector,
          guildId: eP,
          pickerIntention: l,
          channel: u
        }), o]
      }), ef ? null : (0, i.jsx)(V.default, {
        className: q.categoryList,
        emojiListRef: eM,
        sectionDescriptors: eJ,
        intention: l,
        channel: u
      })]
    })
  });
  return (0, i.jsx)(h.AnalyticsLocationProvider, {
    value: eY,
    children: ts
  })
}))