"use strict";
n.d(t, {
  v: function() {
    return i
  }
}), n(47120), n(653041);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(954955),
  _ = n.n(u),
  c = n(611144),
  d = n(442837),
  E = n(704215),
  I = n(477690),
  T = n(481060),
  h = n(80932),
  f = n(410575),
  S = n(2052),
  N = n(100527),
  A = n(906732),
  m = n(243778),
  O = n(339085),
  p = n(438332),
  R = n(664437),
  g = n(806966),
  C = n(28546),
  v = n(691251),
  L = n(98528),
  D = n(770812),
  M = n(434404),
  P = n(536442),
  y = n(695346),
  U = n(984933),
  b = n(594174),
  G = n(626135),
  w = n(111361),
  x = n(624138),
  B = n(543241),
  k = n(253696),
  V = n(199257),
  Z = n(636411),
  H = n(380331),
  F = n(170762),
  Y = n(22363),
  j = n(784222),
  W = n(141507),
  K = n(669040),
  z = n(901963),
  q = n(212263),
  X = n(149203),
  Q = n(981631),
  J = n(921944),
  $ = n(185923),
  ee = n(919854),
  et = n(538100);
let en = (0, x.Mg)(I.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  ei = (0, x.Mg)(I.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  er = e => e.stopPropagation();
(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.TABS_EXPRESSION_PICKER = 1] = "TABS_EXPRESSION_PICKER", r[r.NO_TABS_EXPRESSION_PICKER = 2] = "NO_TABS_EXPRESSION_PICKER";
let es = (e, t) => {
    g.kJ.setInspectedExpressionPosition(e, t, v.u.GRID_NAVIGATOR_EVENT)
  },
  eo = e => {
    let {
      analyticsLocation: t,
      pickerIntention: n,
      columnCounts: i,
      onSelectEmoji: r,
      emojiGrid: s,
      emojiList: a,
      channelGuildId: l,
      isBurstReaction: u
    } = e, _ = (0, d.e7)([O.Z], () => O.Z.getDisambiguatedEmojiContext(l), [l]), E = o.useCallback((e, i) => {
      switch (e.type) {
        case j.ld.CREATE_EMOJI:
          r(void 0, !0), M.Z.open(e.guildId, Q.pNK.EMOJI);
          return;
        case j.ld.EMOJI: {
          if (null != e.emoji && i.altKey) {
            _.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, h.Xe)(e.emoji) : ((0, B.J1)({
              emoji: e.emoji,
              location: {
                ...t,
                object: Q.qAy.EMOJI
              }
            }), (0, h.$K)(e.emoji));
            return
          }
          let s = {
            page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
            section: Q.jXE.EMOJI_PICKER_POPOUT,
            object: Q.qAy.EMOJI
          };
          u && (s = {
            page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
            section: Q.jXE.EMOJI_PICKER_POPOUT,
            object: Q.qAy.EMOJI
          }), (0, B.fe)({
            emoji: e.emoji,
            location: s,
            pickerIntention: n,
            category: e.category,
            subCategory: e.subCategory,
            newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && p.Z.isNewerThanLastSeen(l, e.emoji.id)
          }), r(e.emoji, !i.shiftKey, u)
        }
      }
    }, [r, l, n, _, t, u]), {
      gridDispatch: I,
      getItemProps: T,
      getRowProps: f,
      gridContainerProps: S,
      handleGridContainerKeyDown: N,
      isUsingKeyboardNavigation: A
    } = (0, L.VO)({
      columnCounts: i,
      gridNavigatorId: X.Vr,
      itemGrid: s,
      itemList: a,
      onGridNavigatorItemSelect: E,
      onGridNavigatorPositionChange: es
    });
    return o.useEffect(() => g.kJ.useStore.subscribe(e => {
      if (null == e) return;
      let {
        columnIndex: t,
        rowIndex: n,
        source: i
      } = e;
      i !== v.u.GRID_NAVIGATOR_EVENT && I({
        type: c.s.SET_FOCUSED_POSITION,
        x: t,
        y: n
      })
    }, e => e.inspectedExpressionPosition), [I]), {
      getItemProps: T,
      getRowProps: f,
      gridContainerProps: S,
      handleGridContainerKeyDown: N,
      isUsingKeyboardNavigation: A
    }
  },
  ea = (e, t) => {
    let [n, i] = o.useState(null);
    o.useEffect(() => {
      if (null != n) {
        var e;
        null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), i(null)
      }
    }, [t, n]), o.useEffect(() => {
      i(g.kJ.getState().activeCategoryIndex)
    }, [e])
  },
  el = (e, t, n, i) => {
    o.useLayoutEffect(() => {
      if (i) {
        var e;
        null === (e = n.current) || void 0 === e || e.focus()
      }
    }, [e, t, n, i])
  },
  eu = _()(B.to, 200),
  e_ = _()(B.jA, 200),
  ec = {
    section: void 0,
    openPopoutType: void 0
  };
t.Z = o.memo(o.forwardRef(function(e, t) {
  var n, i;
  let r, {
      pickerIntention: a,
      channel: u,
      guildId: _,
      closePopout: c,
      emojiSize: I = X.Su.MEDIUM,
      hasTabWrapper: h = !1,
      containerContext: v = 0,
      includeCreateEmojiButton: M,
      onSelectEmoji: x,
      containerWidth: es,
      onNavigateAway: ed,
      persistSearch: eE,
      className: eI,
      headerClassName: eT,
      analyticsOverride: eh = ec,
      searchProps: ef = {},
      wrapper: eS,
      shouldHidePickerActions: eN = !1,
      messageId: eA,
      renderHeader: em,
      listHeaderClassName: eO
    } = e,
    {
      onFocus: ep,
      onKeyDown: eR,
      autoFocus: eg = !0,
      accessory: eC
    } = ef,
    ev = (0, d.e7)([U.ZP], () => null != _ ? U.ZP.getDefaultChannel(_) : null, [_]),
    [eL, eD] = o.useState(null),
    eM = o.useRef(""),
    eP = (0, C.Iu)(e => e.searchQuery),
    ey = o.useRef(null),
    eU = o.useRef(null),
    eb = o.useRef(null);
  null == u && null != ev && (u = ev);
  let eG = null !== (i = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : _) && void 0 !== i ? i : null,
    [ew, ex] = o.useState(!1),
    eB = b.default.getCurrentUser(),
    ek = (0, w.I5)(eB);
  o.useImperativeHandle(t, () => ({
    onPickerOpen: e7
  }));
  let {
    location: eV
  } = (0, S.O)(), {
    page: eZ,
    section: eH,
    object: eF,
    openPopoutType: eY
  } = eh, ej = o.useMemo(() => ({
    ...eV,
    section: null != eH ? eH : Q.jXE.EMOJI_PICKER_POPOUT
  }), [eV, eH]), {
    analyticsLocations: eW
  } = (0, A.ZP)(N.Z.EMOJI_PICKER), {
    diversitySurrogate: eK
  } = (0, d.cj)([O.Z], () => ({
    diversitySurrogate: O.Z.diversitySurrogate
  })), ez = (0, B.DV)(eP, u, a), eq = null == ez ? 0 : ez.locked.length + ez.unlocked.length, eX = y.d4.useSetting(), eQ = o.useMemo(() => new Set(eX), [eX]), eJ = o.useCallback(e => {
    y.d4.updateSetting(Array.from(e))
  }, []), e$ = (0, L.ep)({
    gridWrapperRef: ey,
    containerWidth: es,
    listPaddingLeft: ei,
    listScrollbarWidth: 8
  }), {
    rowCountBySection: e0,
    sectionDescriptors: e1,
    emojiGrid: e2,
    columnCounts: e3
  } = (0, j.YH)({
    gridWidth: e$,
    channel: u,
    includeCreateEmojiButton: M,
    pickerIntention: a,
    emojiSearchResults: ez,
    collapsedSections: eQ,
    emojiPaddingHorizontal: en,
    emojiSpriteSize: I
  }), {
    newlyAddedEmojis: e4
  } = (0, V.Z)(eG, a);
  (0, k.b)({
    intention: a,
    isBurstReaction: ew,
    analyticsObject: eF
  });
  let e7 = o.useCallback(() => {
      let e = e4.length > 0 ? e4[0].id : null;
      (0, R.pr)(eG, e), (0, k.Z)({
        intention: a,
        isBurstReaction: ew,
        analyticsObject: eF
      })
    }, [e4, eG, a, ew, eF]),
    e5 = (0, j.rf)({
      pickerIntention: a,
      selectedChannel: u,
      closePopout: c,
      onSelectEmoji: x,
      setUpsellConfigs: eD,
      emojiSelectAnalytics: e => {
        "" !== eP ? (0, B.y$)({
          emoji: e.emoji,
          location: {
            ...ej,
            object: Q.qAy.EMOJI
          },
          searchQuery: eP,
          intention: a
        }) : (0, B.fe)({
          emoji: e.emoji,
          location: {
            ...ej,
            object: null != eF ? eF : Q.qAy.EMOJI,
            ...null != eZ && {
              page: eZ
            }
          },
          pickerIntention: a,
          category: e.category,
          subCategory: e.subCategory,
          position: e.columnIndex + 1,
          newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && p.Z.isNewerThanLastSeen(eG, e.emoji.id),
          isBurstReaction: ew
        })
      },
      trackEmojiFavorited: e => {
        (0, B.J1)({
          emoji: e.emoji,
          location: {
            ...ej,
            object: Q.qAy.EMOJI
          }
        })
      }
    }),
    e6 = o.useCallback(() => {
      c(), null == ed || ed()
    }, [c, ed]),
    {
      getItemProps: e8,
      getRowProps: e9,
      gridContainerProps: te,
      handleGridContainerKeyDown: tt,
      isUsingKeyboardNavigation: tn
    } = eo({
      pickerIntention: a,
      analyticsLocation: ej,
      columnCounts: e3,
      onSelectEmoji: x,
      emojiGrid: e2,
      emojiList: eU,
      channelGuildId: eG,
      isBurstReaction: ew
    });
  ea(es, eU), el(es, eK, eb, eg), o.useEffect(() => {
    !eE && (0, C.ql)("")
  }, [eE]), o.useEffect(() => (G.default.track(Q.rMx.OPEN_POPOUT, {
    type: null != eY ? eY : "Emoji Picker",
    guild_id: eG
  }), g.kJ.resetStoreState), [eY, eG]), o.useEffect(() => () => (0, P.Kw)(P.v6.FAVORITE_EMOJI_TOOLTIP), []), o.useLayoutEffect(() => {
    var e;
    let {
      columnIndex: t,
      rowIndex: n
    } = g.kJ.getState().inspectedExpressionPosition;
    (null === (e = e2[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && g.kJ.setInspectedExpressionPosition(0, 0)
  }, [e2]), o.useEffect(() => {
    if ("" === eM.current && "" !== eP && (0, B.PC)(ej, a), 0 === eq && "" !== eP) eu(ej, eP);
    else if ("" !== eP && eM.current !== eP) {
      var e;
      e_(eq, null !== (e = null == ez ? void 0 : ez.locked.length) && void 0 !== e ? e : 0, ej, eP, a)
    }
    eM.current = eP
  }, [eP, ej, eq, ez, a]);
  let ti = null != eS ? eS : h ? "div" : T.Dialog,
    tr = null != e$;
  if ((null == eL ? void 0 : eL.type) === j.Bg.PREMIUM) {
    let e = et.noParentContainer;
    2 === v ? e = et.hasParentContainer : 1 === v && (e = et.hasTabParentContainer), r = (0, s.jsx)(q.Z, {
      onLearnMore: e6,
      emojiDescriptor: eL.emojiDescriptor,
      pickerIntention: a,
      analyticsLocation: ej,
      onClose: () => eD(null),
      channel: u,
      containerContextClassName: e
    })
  } else(null == eL ? void 0 : eL.type) === j.Bg.ROLE_SUBSCRIPTION ? r = (0, s.jsx)(D.Z, {
    onClose: () => eD(null),
    guildId: eL.guildId,
    emojiId: eL.emojiId
  }) : ew && !ek && (r = (0, s.jsx)(Z.Z, {
    onDismiss: () => ex(!1)
  }));
  let ts = (0, s.jsx)(Y.Z, {
      pickerIntention: a,
      emojiListRef: eU,
      onKeyDown: e => {
        null == tt || tt(e), null == eR || eR(e)
      },
      searchBarRef: eb,
      onFocus: ep,
      autoFocus: eg,
      accessory: eC,
      headerClassName: eT,
      hasTabWrapper: h,
      diversitySurrogate: eK,
      isBurstReaction: ew,
      onBurstReactionToggle: () => ex(!ew),
      renderHeader: em
    }),
    to = [];
  a === $.Hz.REACTION && to.push(E.z.SUPER_REACTIONS_NITRO_MARKETING), !O.Z.hasFavoriteEmojis(eG) && to.push(E.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
  let ta = (0, s.jsx)(f.Z, {
    ...ej,
    children: (0, s.jsxs)(ti, {
      id: X.cZ,
      "aria-labelledby": h ? X.td : void 0,
      role: h ? "tabpanel" : void 0,
      className: l()(ee.wrapper, {
        [ee.emojiPickerHasTabWrapper]: h,
        [ee.isBurstReactionPicker]: ew && ek
      }),
      children: [h ? null : ts, (0, s.jsxs)("div", {
        className: l()(ee.emojiPicker, eI),
        onScroll: er,
        children: [h ? ts : null, (0, s.jsxs)("div", {
          className: ee.bodyWrapper,
          ref: ey,
          children: [(0, s.jsx)(z.Z, {
            channel: u,
            closePopout: c
          }), (0, s.jsx)(m.Z, {
            contentTypes: to,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === E.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, s.jsx)(F.Z, {
                markAsDismissed: () => n(J.L.UNKNOWN)
              })
            }
          }), eN ? null : (0, s.jsx)("div", {
            className: ee.emojiPickerListWrapper,
            id: X.Vr,
            ...te,
            children: tr ? (0, s.jsx)(K.Z, {
              collapsedSections: eQ,
              diversitySurrogate: eK,
              emojiGrid: e2,
              emojiListRef: eU,
              emojiSize: I,
              getEmojiItemProps: e8,
              getEmojiRowProps: e9,
              gridWidth: e$,
              isUsingKeyboardNavigation: tn,
              onEmojiSelect: (e, t) => {
                e5(e, {
                  ...t,
                  isBurst: ew
                })
              },
              setUpsellConfigs: eD,
              rowCount: e2.length,
              rowCountBySection: e0,
              sectionDescriptors: e1,
              setCollapsedSections: eJ,
              channelGuildId: eG,
              messageId: eA,
              isBurstReaction: ew,
              listHeaderClassName: eO
            }) : null
          })]
        }), (0, s.jsx)(W.k, {
          emojiGrid: e2,
          className: ee.inspector,
          guildId: eG,
          pickerIntention: a,
          channel: u
        }), r]
      }), eN ? null : (0, s.jsx)(H.Z, {
        className: ee.categoryList,
        emojiListRef: eU,
        sectionDescriptors: e1,
        intention: a,
        channel: u
      })]
    })
  });
  return (0, s.jsx)(A.Gt, {
    value: eW,
    children: ta
  })
}))