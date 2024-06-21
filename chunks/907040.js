"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(954955),
  l = n.n(a),
  u = n(611144),
  _ = n(442837),
  c = n(704215),
  d = n(477690),
  E = n(481060),
  I = n(80932),
  T = n(410575),
  h = n(2052),
  S = n(100527),
  f = n(906732),
  N = n(243778),
  A = n(339085),
  m = n(438332),
  O = n(664437),
  R = n(806966),
  p = n(28546),
  g = n(691251),
  C = n(98528),
  v = n(770812),
  L = n(434404),
  D = n(536442),
  M = n(695346),
  P = n(984933),
  y = n(594174),
  U = n(626135),
  b = n(111361),
  G = n(624138),
  w = n(543241),
  B = n(253696),
  k = n(199257),
  x = n(636411),
  V = n(380331),
  Z = n(170762),
  H = n(22363),
  F = n(784222),
  Y = n(141507),
  j = n(669040),
  W = n(901963),
  K = n(212263),
  z = n(149203),
  q = n(981631),
  X = n(921944),
  Q = n(185923),
  J = n(919854);
let $ = (0, G.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  ee = (0, G.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  et = e => e.stopPropagation(),
  en = (e, t) => {
    R.kJ.setInspectedExpressionPosition(e, t, g.u.GRID_NAVIGATOR_EVENT)
  },
  ei = e => {
    let {
      analyticsLocation: t,
      pickerIntention: n,
      columnCounts: i,
      onSelectEmoji: s,
      emojiGrid: o,
      emojiList: a,
      channelGuildId: l,
      isBurstReaction: c
    } = e, d = (0, _.e7)([A.Z], () => A.Z.getDisambiguatedEmojiContext(l), [l]), E = r.useCallback((e, i) => {
      switch (e.type) {
        case F.ld.CREATE_EMOJI:
          s(void 0, !0), L.Z.open(e.guildId, q.pNK.EMOJI);
          return;
        case F.ld.EMOJI: {
          if (null != e.emoji && i.altKey) {
            d.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, I.Xe)(e.emoji) : ((0, w.J1)({
              emoji: e.emoji,
              location: {
                ...t,
                object: q.qAy.EMOJI
              }
            }), (0, I.$K)(e.emoji));
            return
          }
          let r = {
            page: null != l ? q.ZY5.GUILD_CHANNEL : q.ZY5.DM_CHANNEL,
            section: q.jXE.EMOJI_PICKER_POPOUT,
            object: q.qAy.EMOJI
          };
          c && (r = {
            page: null != l ? q.ZY5.GUILD_CHANNEL : q.ZY5.DM_CHANNEL,
            section: q.jXE.EMOJI_PICKER_POPOUT,
            object: q.qAy.EMOJI
          }), (0, w.fe)({
            emoji: e.emoji,
            location: r,
            pickerIntention: n,
            category: e.category,
            subCategory: e.subCategory,
            newlyAddedHighlight: e.subCategory === z.t0.NEWLY_ADDED_EMOJI && m.Z.isNewerThanLastSeen(l, e.emoji.id)
          }), s(e.emoji, !i.shiftKey, c)
        }
      }
    }, [s, l, n, d, t, c]), {
      gridDispatch: T,
      getItemProps: h,
      getRowProps: S,
      gridContainerProps: f,
      handleGridContainerKeyDown: N,
      isUsingKeyboardNavigation: O
    } = (0, C.VO)({
      columnCounts: i,
      gridNavigatorId: z.Vr,
      itemGrid: o,
      itemList: a,
      onGridNavigatorItemSelect: E,
      onGridNavigatorPositionChange: en
    });
    return r.useEffect(() => R.kJ.useStore.subscribe(e => {
      if (null == e) return;
      let {
        columnIndex: t,
        rowIndex: n,
        source: i
      } = e;
      i !== g.u.GRID_NAVIGATOR_EVENT && T({
        type: u.s.SET_FOCUSED_POSITION,
        x: t,
        y: n
      })
    }, e => e.inspectedExpressionPosition), [T]), {
      getItemProps: h,
      getRowProps: S,
      gridContainerProps: f,
      handleGridContainerKeyDown: N,
      isUsingKeyboardNavigation: O
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
      i(R.kJ.getState().activeCategoryIndex)
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
  eo = l()(w.to, 200),
  ea = l()(w.jA, 200),
  el = {
    section: void 0,
    openPopoutType: void 0
  };
t.Z = r.memo(r.forwardRef(function(e, t) {
  var n, s;
  let a, {
      pickerIntention: l,
      channel: u,
      guildId: d,
      closePopout: I,
      emojiSize: g = z.Su.MEDIUM,
      hasTabWrapper: L = !1,
      includeCreateEmojiButton: G,
      onSelectEmoji: en,
      containerWidth: eu,
      onNavigateAway: e_,
      persistSearch: ec,
      className: ed,
      headerClassName: eE,
      analyticsOverride: eI = el,
      searchProps: eT = {},
      wrapper: eh,
      shouldHidePickerActions: eS = !1,
      messageId: ef,
      renderHeader: eN,
      listHeaderClassName: eA
    } = e,
    {
      onFocus: em,
      onKeyDown: eO,
      autoFocus: eR = !0,
      accessory: ep
    } = eT,
    eg = (0, _.e7)([P.ZP], () => null != d ? P.ZP.getDefaultChannel(d) : null, [d]),
    [eC, ev] = r.useState(null),
    eL = r.useRef(""),
    eD = (0, p.Iu)(e => e.searchQuery),
    eM = r.useRef(null),
    eP = r.useRef(null),
    ey = r.useRef(null);
  null == u && null != eg && (u = eg);
  let eU = null !== (s = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : d) && void 0 !== s ? s : null,
    [eb, eG] = r.useState(!1),
    ew = y.default.getCurrentUser(),
    eB = (0, b.I5)(ew);
  r.useImperativeHandle(t, () => ({
    onPickerOpen: e3
  }));
  let {
    location: ek
  } = (0, h.O)(), {
    page: ex,
    section: eV,
    object: eZ,
    openPopoutType: eH
  } = eI, eF = r.useMemo(() => ({
    ...ek,
    section: null != eV ? eV : q.jXE.EMOJI_PICKER_POPOUT
  }), [ek, eV]), {
    analyticsLocations: eY
  } = (0, f.ZP)(S.Z.EMOJI_PICKER), {
    diversitySurrogate: ej
  } = (0, _.cj)([A.Z], () => ({
    diversitySurrogate: A.Z.diversitySurrogate
  })), eW = (0, w.DV)(eD, u, l), eK = null == eW ? 0 : eW.locked.length + eW.unlocked.length, ez = M.d4.useSetting(), eq = r.useMemo(() => new Set(ez), [ez]), eX = r.useCallback(e => {
    M.d4.updateSetting(Array.from(e))
  }, []), eQ = (0, C.ep)({
    gridWrapperRef: eM,
    containerWidth: eu,
    listPaddingLeft: ee,
    listScrollbarWidth: 8
  }), {
    rowCountBySection: eJ,
    sectionDescriptors: e$,
    emojiGrid: e0,
    columnCounts: e1
  } = (0, F.YH)({
    gridWidth: eQ,
    channel: u,
    includeCreateEmojiButton: G,
    pickerIntention: l,
    emojiSearchResults: eW,
    collapsedSections: eq,
    emojiPaddingHorizontal: $,
    emojiSpriteSize: g
  }), {
    newlyAddedEmojis: e2
  } = (0, k.Z)(eU, l);
  (0, B.b)({
    intention: l,
    isBurstReaction: eb,
    analyticsObject: eZ
  });
  let e3 = r.useCallback(() => {
      let e = e2.length > 0 ? e2[0].id : null;
      (0, O.pr)(eU, e), (0, B.Z)({
        intention: l,
        isBurstReaction: eb,
        analyticsObject: eZ
      })
    }, [e2, eU, l, eb, eZ]),
    e4 = (0, F.rf)({
      pickerIntention: l,
      selectedChannel: u,
      closePopout: I,
      onSelectEmoji: en,
      setUpsellConfigs: ev,
      emojiSelectAnalytics: e => {
        "" !== eD ? (0, w.y$)({
          emoji: e.emoji,
          location: {
            ...eF,
            object: q.qAy.EMOJI
          },
          searchQuery: eD,
          intention: l
        }) : (0, w.fe)({
          emoji: e.emoji,
          location: {
            ...eF,
            object: null != eZ ? eZ : q.qAy.EMOJI,
            ...null != ex && {
              page: ex
            }
          },
          pickerIntention: l,
          category: e.category,
          subCategory: e.subCategory,
          position: e.columnIndex + 1,
          newlyAddedHighlight: e.subCategory === z.t0.NEWLY_ADDED_EMOJI && m.Z.isNewerThanLastSeen(eU, e.emoji.id),
          isBurstReaction: eb
        })
      },
      trackEmojiFavorited: e => {
        (0, w.J1)({
          emoji: e.emoji,
          location: {
            ...eF,
            object: q.qAy.EMOJI
          }
        })
      }
    }),
    e7 = r.useCallback(() => {
      I(), null == e_ || e_()
    }, [I, e_]),
    {
      getItemProps: e5,
      getRowProps: e6,
      gridContainerProps: e8,
      handleGridContainerKeyDown: e9,
      isUsingKeyboardNavigation: te
    } = ei({
      pickerIntention: l,
      analyticsLocation: eF,
      columnCounts: e1,
      onSelectEmoji: en,
      emojiGrid: e0,
      emojiList: eP,
      channelGuildId: eU,
      isBurstReaction: eb
    });
  er(eu, eP), es(eu, ej, ey, eR), r.useEffect(() => {
    !ec && (0, p.ql)("")
  }, [ec]), r.useEffect(() => (U.default.track(q.rMx.OPEN_POPOUT, {
    type: null != eH ? eH : "Emoji Picker",
    guild_id: eU
  }), R.kJ.resetStoreState), [eH, eU]), r.useEffect(() => () => (0, D.Kw)(D.v6.FAVORITE_EMOJI_TOOLTIP), []), r.useLayoutEffect(() => {
    var e;
    let {
      columnIndex: t,
      rowIndex: n
    } = R.kJ.getState().inspectedExpressionPosition;
    (null === (e = e0[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && R.kJ.setInspectedExpressionPosition(0, 0)
  }, [e0]), r.useEffect(() => {
    if ("" === eL.current && "" !== eD && (0, w.PC)(eF, l), 0 === eK && "" !== eD) eo(eF, eD);
    else if ("" !== eD && eL.current !== eD) {
      var e;
      ea(eK, null !== (e = null == eW ? void 0 : eW.locked.length) && void 0 !== e ? e : 0, eF, eD, l)
    }
    eL.current = eD
  }, [eD, eF, eK, eW, l]);
  let tt = null != eh ? eh : L ? "div" : E.Dialog,
    tn = null != eQ;
  (null == eC ? void 0 : eC.type) === F.Bg.PREMIUM ? a = (0, i.jsx)(K.Z, {
    onLearnMore: e7,
    emojiDescriptor: eC.emojiDescriptor,
    pickerIntention: l,
    analyticsLocation: eF,
    onClose: () => ev(null),
    channel: u
  }) : (null == eC ? void 0 : eC.type) === F.Bg.ROLE_SUBSCRIPTION ? a = (0, i.jsx)(v.Z, {
    onClose: () => ev(null),
    guildId: eC.guildId,
    emojiId: eC.emojiId
  }) : eb && !eB && (a = (0, i.jsx)(x.Z, {
    onDismiss: () => eG(!1)
  }));
  let ti = (0, i.jsx)(H.Z, {
      pickerIntention: l,
      emojiListRef: eP,
      onKeyDown: e => {
        null == e9 || e9(e), null == eO || eO(e)
      },
      searchBarRef: ey,
      onFocus: em,
      autoFocus: eR,
      accessory: ep,
      headerClassName: eE,
      hasTabWrapper: L,
      diversitySurrogate: ej,
      isBurstReaction: eb,
      onBurstReactionToggle: () => eG(!eb),
      renderHeader: eN
    }),
    tr = [];
  l === Q.Hz.REACTION && tr.push(c.z.SUPER_REACTIONS_NITRO_MARKETING), !A.Z.hasFavoriteEmojis(eU) && tr.push(c.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
  let ts = (0, i.jsx)(T.Z, {
    ...eF,
    children: (0, i.jsxs)(tt, {
      id: z.cZ,
      "aria-labelledby": L ? z.td : void 0,
      role: L ? "tabpanel" : void 0,
      className: o()(J.wrapper, {
        [J.emojiPickerHasTabWrapper]: L,
        [J.isBurstReactionPicker]: eb && eB
      }),
      children: [L ? null : ti, (0, i.jsxs)("div", {
        className: o()(J.emojiPicker, ed),
        onScroll: et,
        children: [L ? ti : null, (0, i.jsxs)("div", {
          className: J.bodyWrapper,
          ref: eM,
          children: [(0, i.jsx)(W.Z, {
            channel: u,
            closePopout: I
          }), (0, i.jsx)(N.Z, {
            contentTypes: tr,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === c.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, i.jsx)(Z.Z, {
                markAsDismissed: () => n(X.L.UNKNOWN)
              })
            }
          }), eS ? null : (0, i.jsx)("div", {
            className: J.emojiPickerListWrapper,
            id: z.Vr,
            ...e8,
            children: tn ? (0, i.jsx)(j.Z, {
              collapsedSections: eq,
              diversitySurrogate: ej,
              emojiGrid: e0,
              emojiListRef: eP,
              emojiSize: g,
              getEmojiItemProps: e5,
              getEmojiRowProps: e6,
              gridWidth: eQ,
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
              messageId: ef,
              isBurstReaction: eb,
              listHeaderClassName: eA
            }) : null
          })]
        }), (0, i.jsx)(Y.k, {
          emojiGrid: e0,
          className: J.inspector,
          guildId: eU,
          pickerIntention: l,
          channel: u
        }), a]
      }), eS ? null : (0, i.jsx)(V.Z, {
        className: J.categoryList,
        emojiListRef: eP,
        sectionDescriptors: e$,
        intention: l,
        channel: u
      })]
    })
  });
  return (0, i.jsx)(f.Gt, {
    value: eY,
    children: ts
  })
}))