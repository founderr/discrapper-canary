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
  _ = n("704215"),
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
  k = n("253696"),
  B = n("199257"),
  V = n("636411"),
  x = n("380331"),
  F = n("170762"),
  H = n("22363"),
  Y = n("784222"),
  j = n("141507"),
  W = n("669040"),
  K = n("901963"),
  z = n("212263"),
  Z = n("149203"),
  Q = n("981631"),
  X = n("921944"),
  q = n("185923"),
  J = n("773390");
let $ = (0, G.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  ee = (0, G.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  et = e => e.stopPropagation(),
  en = (e, t) => {
    O.EmojiPickerStore.setInspectedExpressionPosition(e, t, R.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
  },
  ei = e => {
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
        case Y.EmojiGridItemTypes.CREATE_EMOJI:
          s(void 0, !0), v.default.open(e.guildId, Q.GuildSettingsSections.EMOJI);
          return;
        case Y.EmojiGridItemTypes.EMOJI: {
          if (null != e.emoji && i.altKey) {
            c.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, I.unfavoriteEmoji)(e.emoji) : ((0, w.trackEmojiFavorited)({
              emoji: e.emoji,
              location: {
                ...t,
                object: Q.AnalyticsObjects.EMOJI
              }
            }), (0, I.favoriteEmoji)(e.emoji));
            return
          }
          let r = {
            page: null != l ? Q.AnalyticsPages.GUILD_CHANNEL : Q.AnalyticsPages.DM_CHANNEL,
            section: Q.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: Q.AnalyticsObjects.EMOJI
          };
          _ && (r = {
            page: null != l ? Q.AnalyticsPages.GUILD_CHANNEL : Q.AnalyticsPages.DM_CHANNEL,
            section: Q.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: Q.AnalyticsObjects.EMOJI
          }), (0, w.trackEmojiSelect)({
            emoji: e.emoji,
            location: r,
            pickerIntention: n,
            category: e.category,
            subCategory: e.subCategory,
            newlyAddedHighlight: e.subCategory === Z.EmojiSubCategory.NEWLY_ADDED_EMOJI && N.default.isNewerThanLastSeen(l, e.emoji.id)
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
      gridNavigatorId: Z.GRID_NAVIGATOR_ID,
      itemGrid: a,
      itemList: o,
      onGridNavigatorItemSelect: E,
      onGridNavigatorPositionChange: en
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
  er = (e, t) => {
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
  es = (e, t, n, i) => {
    r.useLayoutEffect(() => {
      if (i) {
        var e;
        null === (e = n.current) || void 0 === e || e.focus()
      }
    }, [e, t, n, i])
  },
  ea = l()(w.trackEmojiSearchEmpty, 200),
  eo = l()(w.trackEmojiSearchResultsViewed, 200),
  el = {
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
      emojiSize: R = Z.EmojiSize.MEDIUM,
      hasTabWrapper: v = !1,
      includeCreateEmojiButton: G,
      onSelectEmoji: en,
      containerWidth: eu,
      onNavigateAway: ed,
      persistSearch: e_,
      className: ec,
      headerClassName: eE,
      analyticsOverride: eI = el,
      searchProps: eT = {},
      wrapper: ef,
      shouldHidePickerActions: eS = !1,
      messageId: eh,
      renderHeader: eA,
      listHeaderClassName: em
    } = e,
    {
      onFocus: eN,
      onKeyDown: ep,
      autoFocus: eO = !0,
      accessory: eC
    } = eT,
    eR = (0, d.useStateFromStores)([y.default], () => null != c ? y.default.getDefaultChannel(c) : null, [c]),
    [eg, eL] = r.useState(null),
    ev = r.useRef(""),
    eD = (0, C.useExpressionPickerStore)(e => e.searchQuery),
    eM = r.useRef(null),
    ey = r.useRef(null),
    eP = r.useRef(null);
  null == u && null != eR && (u = eR);
  let eU = null !== (s = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : c) && void 0 !== s ? s : null,
    [eb, eG] = r.useState(!1),
    ew = P.default.getCurrentUser(),
    ek = (0, b.isPremium)(ew);
  r.useImperativeHandle(t, () => ({
    onPickerOpen: e3
  }));
  let {
    location: eB
  } = (0, f.useAnalyticsContext)(), {
    page: eV,
    section: ex,
    object: eF,
    openPopoutType: eH
  } = eI, eY = r.useMemo(() => ({
    ...eB,
    section: null != ex ? ex : Q.AnalyticsSections.EMOJI_PICKER_POPOUT
  }), [eB, ex]), {
    analyticsLocations: ej
  } = (0, h.default)(S.default.EMOJI_PICKER), {
    diversitySurrogate: eW
  } = (0, d.useStateFromStoresObject)([m.default], () => ({
    diversitySurrogate: m.default.diversitySurrogate
  })), eK = (0, w.useEmojiSearchResults)(eD, u, l), ez = null == eK ? 0 : eK.locked.length + eK.unlocked.length, eZ = M.EmojiPickerCollapsedSections.useSetting(), eQ = r.useMemo(() => new Set(eZ), [eZ]), eX = r.useCallback(e => {
    M.EmojiPickerCollapsedSections.updateSetting(Array.from(e))
  }, []), eq = (0, g.useExpressionPickerGridWidth)({
    gridWrapperRef: eM,
    containerWidth: eu,
    listPaddingLeft: ee,
    listScrollbarWidth: 8
  }), {
    rowCountBySection: eJ,
    sectionDescriptors: e$,
    emojiGrid: e0,
    columnCounts: e1
  } = (0, Y.useEmojiGrid)({
    gridWidth: eq,
    channel: u,
    includeCreateEmojiButton: G,
    pickerIntention: l,
    emojiSearchResults: eK,
    collapsedSections: eQ,
    emojiPaddingHorizontal: $,
    emojiSpriteSize: R
  }), {
    newlyAddedEmojis: e2
  } = (0, B.default)(eU, l);
  (0, k.useTrackOnEmojiPickerOpenedForReactions)({
    intention: l,
    isBurstReaction: eb,
    analyticsObject: eF
  });
  let e3 = r.useCallback(() => {
      let e = e2.length > 0 ? e2[0].id : null;
      (0, p.updateNewlyAddedLastSeen)(eU, e), (0, k.default)({
        intention: l,
        isBurstReaction: eb,
        analyticsObject: eF
      })
    }, [e2, eU, l, eb, eF]),
    e4 = (0, Y.useEmojiSelectHandler)({
      pickerIntention: l,
      selectedChannel: u,
      closePopout: I,
      onSelectEmoji: en,
      setUpsellConfigs: eL,
      emojiSelectAnalytics: e => {
        "" !== eD ? (0, w.trackEmojiSearchSelect)({
          emoji: e.emoji,
          location: {
            ...eY,
            object: Q.AnalyticsObjects.EMOJI
          },
          searchQuery: eD,
          intention: l
        }) : (0, w.trackEmojiSelect)({
          emoji: e.emoji,
          location: {
            ...eY,
            object: null != eF ? eF : Q.AnalyticsObjects.EMOJI,
            ...null != eV && {
              page: eV
            }
          },
          pickerIntention: l,
          category: e.category,
          subCategory: e.subCategory,
          position: e.columnIndex + 1,
          newlyAddedHighlight: e.subCategory === Z.EmojiSubCategory.NEWLY_ADDED_EMOJI && N.default.isNewerThanLastSeen(eU, e.emoji.id),
          isBurstReaction: eb
        })
      },
      trackEmojiFavorited: e => {
        (0, w.trackEmojiFavorited)({
          emoji: e.emoji,
          location: {
            ...eY,
            object: Q.AnalyticsObjects.EMOJI
          }
        })
      }
    }),
    e6 = r.useCallback(() => {
      I(), null == ed || ed()
    }, [I, ed]),
    {
      getItemProps: e7,
      getRowProps: e5,
      gridContainerProps: e8,
      handleGridContainerKeyDown: e9,
      isUsingKeyboardNavigation: te
    } = ei({
      pickerIntention: l,
      analyticsLocation: eY,
      columnCounts: e1,
      onSelectEmoji: en,
      emojiGrid: e0,
      emojiList: ey,
      channelGuildId: eU,
      isBurstReaction: eb
    });
  er(eu, ey), es(eu, eW, eP, eO), r.useEffect(() => {
    !e_ && (0, C.setSearchQuery)("")
  }, [e_]), r.useEffect(() => (U.default.track(Q.AnalyticEvents.OPEN_POPOUT, {
    type: null != eH ? eH : "Emoji Picker",
    guild_id: eU
  }), O.EmojiPickerStore.resetStoreState), [eH, eU]), r.useEffect(() => () => (0, D.hideHotspot)(D.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), r.useLayoutEffect(() => {
    var e;
    let {
      columnIndex: t,
      rowIndex: n
    } = O.EmojiPickerStore.getState().inspectedExpressionPosition;
    (null === (e = e0[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && O.EmojiPickerStore.setInspectedExpressionPosition(0, 0)
  }, [e0]), r.useEffect(() => {
    if ("" === ev.current && "" !== eD && (0, w.trackEmojiSearchStart)(eY, l), 0 === ez && "" !== eD) ea(eY, eD);
    else if ("" !== eD && ev.current !== eD) {
      var e;
      eo(ez, null !== (e = null == eK ? void 0 : eK.locked.length) && void 0 !== e ? e : 0, eY, eD, l)
    }
    ev.current = eD
  }, [eD, eY, ez, eK, l]);
  let tt = null != ef ? ef : v ? "div" : E.Dialog,
    tn = null != eq;
  (null == eg ? void 0 : eg.type) === Y.EmojiUpsellType.PREMIUM ? o = (0, i.jsx)(z.default, {
    onLearnMore: e6,
    emojiDescriptor: eg.emojiDescriptor,
    pickerIntention: l,
    analyticsLocation: eY,
    onClose: () => eL(null),
    channel: u
  }) : (null == eg ? void 0 : eg.type) === Y.EmojiUpsellType.ROLE_SUBSCRIPTION ? o = (0, i.jsx)(L.default, {
    onClose: () => eL(null),
    guildId: eg.guildId,
    emojiId: eg.emojiId
  }) : eb && !ek && (o = (0, i.jsx)(V.default, {
    onDismiss: () => eG(!1)
  }));
  let ti = (0, i.jsx)(H.default, {
      pickerIntention: l,
      emojiListRef: ey,
      onKeyDown: e => {
        null == e9 || e9(e), null == ep || ep(e)
      },
      searchBarRef: eP,
      onFocus: eN,
      autoFocus: eO,
      accessory: eC,
      headerClassName: eE,
      hasTabWrapper: v,
      diversitySurrogate: eW,
      isBurstReaction: eb,
      onBurstReactionToggle: () => eG(!eb),
      renderHeader: eA
    }),
    tr = [];
  l === q.EmojiIntention.REACTION && tr.push(_.DismissibleContent.SUPER_REACTIONS_NITRO_MARKETING), !m.default.hasFavoriteEmojis(eU) && tr.push(_.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
  let ts = (0, i.jsx)(T.default, {
    ...eY,
    children: (0, i.jsxs)(tt, {
      id: Z.EMOJI_PICKER_TAB_PANEL_ID,
      "aria-labelledby": v ? Z.EMOJI_PICKER_TAB_ID : void 0,
      role: v ? "tabpanel" : void 0,
      className: a()(J.wrapper, {
        [J.emojiPickerHasTabWrapper]: v,
        [J.isBurstReactionPicker]: eb && ek
      }),
      children: [v ? null : ti, (0, i.jsxs)("div", {
        className: a()(J.emojiPicker, ec),
        onScroll: et,
        children: [v ? ti : null, (0, i.jsxs)("div", {
          className: J.bodyWrapper,
          ref: eM,
          children: [(0, i.jsx)(K.default, {
            channel: u,
            closePopout: I
          }), (0, i.jsx)(A.default, {
            contentTypes: tr,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === _.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, i.jsx)(F.default, {
                markAsDismissed: () => n(X.ContentDismissActionType.UNKNOWN)
              })
            }
          }), eS ? null : (0, i.jsx)("div", {
            className: J.emojiPickerListWrapper,
            id: Z.GRID_NAVIGATOR_ID,
            ...e8,
            children: tn ? (0, i.jsx)(W.default, {
              collapsedSections: eQ,
              diversitySurrogate: eW,
              emojiGrid: e0,
              emojiListRef: ey,
              emojiSize: R,
              getEmojiItemProps: e7,
              getEmojiRowProps: e5,
              gridWidth: eq,
              isUsingKeyboardNavigation: te,
              onEmojiSelect: (e, t) => {
                e4(e, {
                  ...t,
                  isBurst: eb
                })
              },
              rowCount: e0.length,
              rowCountBySection: eJ,
              sectionDescriptors: e$,
              setCollapsedSections: eX,
              channelGuildId: eU,
              messageId: eh,
              isBurstReaction: eb,
              listHeaderClassName: em
            }) : null
          })]
        }), (0, i.jsx)(j.EmojiPickerInspector, {
          emojiGrid: e0,
          className: J.inspector,
          guildId: eU,
          pickerIntention: l,
          channel: u
        }), o]
      }), eS ? null : (0, i.jsx)(x.default, {
        className: J.categoryList,
        emojiListRef: ey,
        sectionDescriptors: e$,
        intention: l,
        channel: u
      })]
    })
  });
  return (0, i.jsx)(h.AnalyticsLocationProvider, {
    value: ej,
    children: ts
  })
}))