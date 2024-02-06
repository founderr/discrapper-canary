"use strict";
i.r(t), i.d(t, {
  default: function() {
    return ec
  }
}), i("222007"), i("424973");
var n = i("37983"),
  s = i("884691"),
  l = i("414456"),
  r = i.n(l),
  a = i("483366"),
  o = i.n(a),
  u = i("880317"),
  c = i("446674"),
  d = i("151426"),
  f = i("769846"),
  E = i("77078"),
  m = i("150021"),
  I = i("901582"),
  p = i("997289"),
  g = i("812204"),
  _ = i("685665"),
  S = i("384997"),
  h = i("385976"),
  C = i("575226"),
  T = i("305781"),
  N = i("986632"),
  v = i("538282"),
  A = i("246511"),
  y = i("45961"),
  R = i("802894"),
  j = i("592407"),
  O = i("139321"),
  M = i("716849"),
  x = i("552917"),
  L = i("845579"),
  P = i("923959"),
  D = i("697218"),
  b = i("599110"),
  U = i("764364"),
  w = i("159885"),
  G = i("788506"),
  k = i("352046"),
  V = i("260211"),
  F = i("964611"),
  H = i("420489"),
  K = i("920514"),
  B = i("83017"),
  J = i("729873"),
  z = i("640076"),
  W = i("851111"),
  Z = i("282566"),
  Y = i("115279"),
  Q = i("49111"),
  X = i("994428"),
  q = i("958706"),
  $ = i("431364");
let ee = (0, w.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  et = (0, w.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  ei = e => e.stopPropagation(),
  en = (e, t) => {
    N.EmojiPickerStore.setInspectedExpressionPosition(e, t, A.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
  },
  es = e => {
    let {
      analyticsLocation: t,
      pickerIntention: i,
      columnCounts: n,
      onSelectEmoji: l,
      emojiGrid: r,
      emojiList: a,
      channelGuildId: o,
      isBurstReaction: d
    } = e, f = (0, c.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(o), [o]), E = s.useCallback((e, n) => {
      switch (e.type) {
        case B.EmojiGridItemTypes.CREATE_EMOJI:
          l(void 0, !0), j.default.open(e.guildId, Q.GuildSettingsSections.EMOJI);
          return;
        case B.EmojiGridItemTypes.EMOJI: {
          if (null != e.emoji && n.altKey) {
            f.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, m.unfavoriteEmoji)(e.emoji) : ((0, G.trackEmojiFavorited)({
              emoji: e.emoji,
              location: {
                ...t,
                object: Q.AnalyticsObjects.EMOJI
              }
            }), (0, m.favoriteEmoji)(e.emoji));
            return
          }
          let s = {
            page: null != o ? Q.AnalyticsPages.GUILD_CHANNEL : Q.AnalyticsPages.DM_CHANNEL,
            section: Q.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: Q.AnalyticsObjects.EMOJI
          };
          d && (s = {
            page: null != o ? Q.AnalyticsPages.GUILD_CHANNEL : Q.AnalyticsPages.DM_CHANNEL,
            section: Q.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: Q.AnalyticsObjects.EMOJI
          }), (0, G.trackEmojiSelect)({
            emoji: e.emoji,
            location: s,
            pickerIntention: i,
            category: e.category,
            subCategory: e.subCategory,
            newlyAddedHighlight: e.subCategory === Y.EmojiSubCategory.NEWLY_ADDED_EMOJI && C.default.isNewerThanLastSeen(o, e.emoji.id)
          }), l(e.emoji, !n.shiftKey, d)
        }
      }
    }, [l, o, i, f, t, d]), {
      gridDispatch: I,
      getItemProps: p,
      getRowProps: g,
      gridContainerProps: _,
      handleGridContainerKeyDown: S,
      isUsingKeyboardNavigation: T
    } = (0, y.useExpressionPickerGridKeyboardNavigation)({
      columnCounts: n,
      gridNavigatorId: Y.GRID_NAVIGATOR_ID,
      itemGrid: r,
      itemList: a,
      onGridNavigatorItemSelect: E,
      onGridNavigatorPositionChange: en
    });
    return s.useEffect(() => N.EmojiPickerStore.useStore.subscribe(e => {
      if (null == e) return;
      let {
        columnIndex: t,
        rowIndex: i,
        source: n
      } = e;
      n !== A.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && I({
        type: u.GridActionType.SET_FOCUSED_POSITION,
        x: t,
        y: i
      })
    }, e => e.inspectedExpressionPosition), [I]), {
      getItemProps: p,
      getRowProps: g,
      gridContainerProps: _,
      handleGridContainerKeyDown: S,
      isUsingKeyboardNavigation: T
    }
  },
  el = (e, t) => {
    let [i, n] = s.useState(null);
    s.useEffect(() => {
      if (null != i) {
        var e;
        null === (e = t.current) || void 0 === e || e.scrollToSectionTop(i), n(null)
      }
    }, [t, i]), s.useEffect(() => {
      n(N.EmojiPickerStore.getState().activeCategoryIndex)
    }, [e])
  },
  er = (e, t, i, n) => {
    s.useLayoutEffect(() => {
      if (n) {
        var e;
        null === (e = i.current) || void 0 === e || e.focus()
      }
    }, [e, t, i, n])
  },
  ea = o(G.trackEmojiSearchEmpty, 200),
  eo = o(G.trackEmojiSearchResultsViewed, 200),
  eu = {
    section: void 0,
    openPopoutType: void 0
  };
var ec = s.memo(s.forwardRef(function(e, t) {
  var i, l;
  let a, {
      pickerIntention: o,
      channel: u,
      guildId: f,
      closePopout: m,
      emojiSize: A = Y.EmojiSize.MEDIUM,
      hasTabWrapper: j = !1,
      includeCreateEmojiButton: w,
      onSelectEmoji: en,
      containerWidth: ec,
      onNavigateAway: ed,
      persistSearch: ef,
      className: eE,
      headerClassName: em,
      analyticsOverride: eI = eu,
      searchProps: ep = {},
      wrapper: eg,
      shouldHidePickerActions: e_ = !1,
      messageId: eS,
      renderHeader: eh,
      listHeaderClassName: eC
    } = e,
    {
      onFocus: eT,
      onKeyDown: eN,
      autoFocus: ev = !0,
      accessory: eA
    } = ep,
    ey = (0, c.useStateFromStores)([P.default], () => null != f ? P.default.getDefaultChannel(f) : null, [f]),
    [eR, ej] = s.useState(null),
    eO = s.useRef(""),
    eM = (0, v.useExpressionPickerStore)(e => e.searchQuery),
    ex = s.useRef(null),
    eL = s.useRef(null),
    eP = s.useRef(null);
  null == u && null != ey && (u = ey);
  let eD = null !== (l = null !== (i = null == u ? void 0 : u.getGuildId()) && void 0 !== i ? i : f) && void 0 !== l ? l : null,
    [eb, eU] = s.useState(!1),
    ew = D.default.getCurrentUser(),
    eG = (0, U.isPremium)(ew);
  s.useImperativeHandle(t, () => ({
    onPickerOpen: e8
  }));
  let {
    location: ek
  } = (0, p.useAnalyticsContext)(), {
    page: eV,
    section: eF,
    object: eH,
    openPopoutType: eK
  } = eI, eB = s.useMemo(() => ({
    ...ek,
    section: null != eF ? eF : Q.AnalyticsSections.EMOJI_PICKER_POPOUT
  }), [ek, eF]), {
    AnalyticsLocationProvider: eJ
  } = (0, _.default)(g.default.EMOJI_PICKER), {
    diversitySurrogate: ez
  } = (0, c.useStateFromStoresObject)([h.default], () => ({
    diversitySurrogate: h.default.diversitySurrogate
  })), eW = (0, G.useEmojiSearchResults)(eM, u, o), eZ = null == eW ? 0 : eW.locked.length + eW.unlocked.length, eY = L.EmojiPickerCollapsedSections.useSetting(), eQ = s.useMemo(() => new Set(eY), [eY]), eX = s.useCallback(e => {
    L.EmojiPickerCollapsedSections.updateSetting(Array.from(e))
  }, []), eq = (0, y.useExpressionPickerGridWidth)({
    gridWrapperRef: ex,
    containerWidth: ec,
    listPaddingLeft: et,
    listScrollbarWidth: 8
  }), {
    rowCountBySection: e$,
    sectionDescriptors: e0,
    emojiGrid: e1,
    columnCounts: e2
  } = (0, B.useEmojiGrid)({
    gridWidth: eq,
    channel: u,
    includeCreateEmojiButton: w,
    pickerIntention: o,
    emojiSearchResults: eW,
    collapsedSections: eQ,
    emojiPaddingHorizontal: ee,
    emojiSpriteSize: A
  }), {
    newlyAddedEmojis: e4
  } = (0, k.default)(eD, o), {
    trackOnPickerOpen: e3
  } = (0, G.useTrackEmojiPickerOpened)({
    intention: o,
    isBurstReaction: eb,
    analyticsObject: eH
  });
  (0, M.useMaybeFetchPremiumLikelihood)(x.default);
  let e8 = s.useCallback(() => {
      let e = e4.length > 0 ? e4[0].id : null;
      (0, T.updateNewlyAddedLastSeen)(eD, e), e3()
    }, [e3, e4, eD]),
    e9 = (0, B.useEmojiSelectHandler)({
      pickerIntention: o,
      selectedChannel: u,
      closePopout: m,
      onSelectEmoji: en,
      setUpsellConfigs: ej,
      emojiSelectAnalytics: e => {
        "" !== eM ? (0, G.trackEmojiSearchSelect)(e.emoji, {
          ...eB,
          object: Q.AnalyticsObjects.EMOJI
        }, eM, o) : (0, G.trackEmojiSelect)({
          emoji: e.emoji,
          location: {
            ...eB,
            object: null != eH ? eH : Q.AnalyticsObjects.EMOJI,
            ...null != eV && {
              page: eV
            }
          },
          pickerIntention: o,
          category: e.category,
          subCategory: e.subCategory,
          position: e.columnIndex + 1,
          newlyAddedHighlight: e.subCategory === Y.EmojiSubCategory.NEWLY_ADDED_EMOJI && C.default.isNewerThanLastSeen(eD, e.emoji.id),
          isBurstReaction: eb
        })
      },
      trackEmojiFavorited: e => {
        (0, G.trackEmojiFavorited)({
          emoji: e.emoji,
          location: {
            ...eB,
            object: Q.AnalyticsObjects.EMOJI
          }
        })
      }
    }),
    e6 = s.useCallback(() => {
      m(), null == ed || ed()
    }, [m, ed]),
    {
      getItemProps: e7,
      getRowProps: e5,
      gridContainerProps: te,
      handleGridContainerKeyDown: tt,
      isUsingKeyboardNavigation: ti
    } = es({
      pickerIntention: o,
      analyticsLocation: eB,
      columnCounts: e2,
      onSelectEmoji: en,
      emojiGrid: e1,
      emojiList: eL,
      channelGuildId: eD,
      isBurstReaction: eb
    });
  el(ec, eL), er(ec, ez, eP, ev), s.useEffect(() => {
    !ef && (0, v.setSearchQuery)("")
  }, [ef]), s.useEffect(() => (b.default.track(Q.AnalyticEvents.OPEN_POPOUT, {
    type: null != eK ? eK : "Emoji Picker",
    guild_id: eD
  }), N.EmojiPickerStore.resetStoreState), [eK, eD]), s.useEffect(() => () => (0, O.hideHotspot)(O.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), s.useLayoutEffect(() => {
    var e;
    let {
      columnIndex: t,
      rowIndex: i
    } = N.EmojiPickerStore.getState().inspectedExpressionPosition;
    (null === (e = e1[i]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && N.EmojiPickerStore.setInspectedExpressionPosition(0, 0)
  }, [e1]), s.useEffect(() => {
    if ("" === eO.current && "" !== eM && (0, G.trackEmojiSearchStart)(eB, o), 0 === eZ && "" !== eM) ea(eB, eM);
    else if ("" !== eM && eO.current !== eM) {
      var e;
      eo(eZ, null !== (e = null == eW ? void 0 : eW.locked.length) && void 0 !== e ? e : 0, eB, eM, o)
    }
    eO.current = eM
  }, [eM, eB, eZ, eW, o]);
  let tn = null != eg ? eg : j ? "div" : E.Dialog,
    ts = null != eq;
  (null == eR ? void 0 : eR.type) === B.EmojiUpsellType.PREMIUM ? a = (0, n.jsx)(Z.default, {
    onLearnMore: e6,
    emojiDescriptor: eR.emojiDescriptor,
    pickerIntention: o,
    analyticsLocation: eB,
    onClose: () => ej(null),
    channel: u
  }) : (null == eR ? void 0 : eR.type) === B.EmojiUpsellType.ROLE_SUBSCRIPTION ? a = (0, n.jsx)(R.default, {
    onClose: () => ej(null),
    guildId: eR.guildId,
    emojiId: eR.emojiId
  }) : eb && !eG && (a = (0, n.jsx)(V.default, {
    onDismiss: () => eU(!1)
  }));
  let tl = (0, n.jsx)(K.default, {
      pickerIntention: o,
      emojiListRef: eL,
      onKeyDown: e => {
        null == tt || tt(e), null == eN || eN(e)
      },
      searchBarRef: eP,
      onFocus: eT,
      autoFocus: ev,
      accessory: eA,
      headerClassName: em,
      hasTabWrapper: j,
      diversitySurrogate: ez,
      isBurstReaction: eb,
      onBurstReactionToggle: () => eU(!eb),
      renderHeader: eh
    }),
    tr = [];
  o === q.EmojiIntention.REACTION && tr.push(d.DismissibleContent.SUPER_REACTIONS_NITRO_MARKETING), !h.default.hasFavoriteEmojis(eD) && tr.push(d.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
  let ta = (0, n.jsx)(I.default, {
    ...eB,
    children: (0, n.jsxs)(tn, {
      id: Y.EMOJI_PICKER_TAB_PANEL_ID,
      "aria-labelledby": j ? Y.EMOJI_PICKER_TAB_ID : void 0,
      role: j ? "tabpanel" : void 0,
      className: r($.wrapper, {
        [$.emojiPickerHasTabWrapper]: j,
        [$.isBurstReactionPicker]: eb && eG
      }),
      children: [j ? null : tl, (0, n.jsxs)("div", {
        className: r($.emojiPicker, eE),
        onScroll: ei,
        children: [j ? tl : null, (0, n.jsxs)("div", {
          className: $.bodyWrapper,
          ref: ex,
          children: [(0, n.jsx)(W.default, {
            channel: u,
            closePopout: m
          }), (0, n.jsx)(S.default, {
            contentTypes: tr,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: i
              } = e;
              if (t === d.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, n.jsx)(H.default, {
                markAsDismissed: () => i(X.ContentDismissActionType.UNKNOWN)
              })
            }
          }), e_ ? null : (0, n.jsx)("div", {
            className: $.emojiPickerListWrapper,
            id: Y.GRID_NAVIGATOR_ID,
            ...te,
            children: ts ? (0, n.jsx)(z.default, {
              collapsedSections: eQ,
              diversitySurrogate: ez,
              emojiGrid: e1,
              emojiListRef: eL,
              emojiSize: A,
              getEmojiItemProps: e7,
              getEmojiRowProps: e5,
              gridWidth: eq,
              isUsingKeyboardNavigation: ti,
              onEmojiSelect: (e, t) => {
                e9(e, {
                  ...t,
                  isBurst: eb
                })
              },
              rowCount: e1.length,
              rowCountBySection: e$,
              sectionDescriptors: e0,
              setCollapsedSections: eX,
              channelGuildId: eD,
              messageId: eS,
              isBurstReaction: eb,
              listHeaderClassName: eC
            }) : null
          })]
        }), (0, n.jsx)(J.EmojiPickerInspector, {
          emojiGrid: e1,
          className: $.inspector,
          guildId: eD,
          pickerIntention: o,
          channel: u
        }), a]
      }), e_ ? null : (0, n.jsx)(F.default, {
        className: $.categoryList,
        emojiListRef: eL,
        sectionDescriptors: e0,
        intention: o,
        channel: u
      })]
    })
  });
  return (0, n.jsx)(eJ, {
    children: ta
  })
}))