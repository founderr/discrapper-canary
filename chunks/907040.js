n.d(t, {
  v: function() {
return r;
  }
}), n(47120), n(653041);
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(954955),
  c = n.n(u),
  d = n(611144),
  _ = n(442837),
  E = n(704215),
  f = n(477690),
  h = n(481060),
  p = n(80932),
  m = n(410575),
  I = n(2052),
  T = n(100527),
  g = n(906732),
  S = n(243778),
  A = n(339085),
  N = n(438332),
  v = n(664437),
  O = n(806966),
  R = n(28546),
  C = n(691251),
  y = n(98528),
  D = n(770812),
  L = n(434404),
  b = n(536442),
  M = n(695346),
  P = n(984933),
  U = n(594174),
  w = n(626135),
  x = n(111361),
  G = n(624138),
  k = n(543241),
  B = n(253696),
  F = n(199257),
  V = n(636411),
  H = n(380331),
  Z = n(170762),
  Y = n(22363),
  j = n(784222),
  W = n(141507),
  K = n(669040),
  z = n(901963),
  q = n(212263),
  Q = n(149203),
  X = n(981631),
  $ = n(921944),
  J = n(185923),
  ee = n(23022),
  et = n(900566);
let en = (0, G.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  er = (0, G.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  ei = e => e.stopPropagation();
(i = r || (r = {}))[i.NONE = 0] = 'NONE', i[i.TABS_EXPRESSION_PICKER = 1] = 'TABS_EXPRESSION_PICKER', i[i.NO_TABS_EXPRESSION_PICKER = 2] = 'NO_TABS_EXPRESSION_PICKER';
let ea = (e, t) => {
O.kJ.setInspectedExpressionPosition(e, t, C.u.GRID_NAVIGATOR_EVENT);
  },
  es = e => {
let {
  analyticsLocation: t,
  pickerIntention: n,
  columnCounts: r,
  onSelectEmoji: i,
  emojiGrid: a,
  emojiList: o,
  channelGuildId: l,
  isBurstReaction: u
} = e, c = (0, _.e7)([A.Z], () => A.Z.getDisambiguatedEmojiContext(l), [l]), E = s.useCallback((e, r) => {
  switch (e.type) {
    case j.ld.CREATE_EMOJI:
      i(void 0, !0), L.Z.open(e.guildId, X.pNK.EMOJI);
      return;
    case j.ld.EMOJI: {
      if (null != e.emoji && r.altKey) {
        c.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, p.Xe)(e.emoji) : ((0, k.J1)({
          emoji: e.emoji,
          location: {
            ...t,
            object: X.qAy.EMOJI
          }
        }), (0, p.$K)(e.emoji));
        return;
      }
      let a = {
        page: null != l ? X.ZY5.GUILD_CHANNEL : X.ZY5.DM_CHANNEL,
        section: X.jXE.EMOJI_PICKER_POPOUT,
        object: X.qAy.EMOJI
      };
      u && (a = {
        page: null != l ? X.ZY5.GUILD_CHANNEL : X.ZY5.DM_CHANNEL,
        section: X.jXE.EMOJI_PICKER_POPOUT,
        object: X.qAy.EMOJI
      }), (0, k.fe)({
        emoji: e.emoji,
        location: a,
        pickerIntention: n,
        category: e.category,
        subCategory: e.subCategory,
        newlyAddedHighlight: e.subCategory === Q.t0.NEWLY_ADDED_EMOJI && N.Z.isNewerThanLastSeen(l, e.emoji.id)
      }), i(e.emoji, !r.shiftKey, u);
    }
  }
}, [
  i,
  l,
  n,
  c,
  t,
  u
]), {
  gridDispatch: f,
  getItemProps: h,
  getRowProps: m,
  gridContainerProps: I,
  handleGridContainerKeyDown: T,
  isUsingKeyboardNavigation: g
} = (0, y.VO)({
  columnCounts: r,
  gridNavigatorId: Q.Vr,
  itemGrid: a,
  itemList: o,
  onGridNavigatorItemSelect: E,
  onGridNavigatorPositionChange: ea
});
return s.useEffect(() => O.kJ.useStore.subscribe(e => {
  if (null == e)
    return;
  let {
    columnIndex: t,
    rowIndex: n,
    source: r
  } = e;
  r !== C.u.GRID_NAVIGATOR_EVENT && f({
    type: d.s.SET_FOCUSED_POSITION,
    x: t,
    y: n
  });
}, e => e.inspectedExpressionPosition), [f]), {
  getItemProps: h,
  getRowProps: m,
  gridContainerProps: I,
  handleGridContainerKeyDown: T,
  isUsingKeyboardNavigation: g
};
  },
  eo = (e, t) => {
let [n, r] = s.useState(null);
s.useEffect(() => {
  if (null != n) {
    var e;
    null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), r(null);
  }
}, [
  t,
  n
]), s.useEffect(() => {
  r(O.kJ.getState().activeCategoryIndex);
}, [e]);
  },
  el = (e, t, n, r) => {
s.useLayoutEffect(() => {
  if (r) {
    var e;
    null === (e = n.current) || void 0 === e || e.focus();
  }
}, [
  e,
  t,
  n,
  r
]);
  },
  eu = c()(k.to, 200),
  ec = c()(k.jA, 200),
  ed = {
section: void 0,
openPopoutType: void 0
  };
t.Z = s.memo(s.forwardRef(function(e, t) {
  var n, r;
  let i, {
  pickerIntention: o,
  channel: u,
  guildId: c,
  closePopout: d,
  emojiSize: f = Q.Su.MEDIUM,
  hasTabWrapper: p = !1,
  containerContext: C = 0,
  includeCreateEmojiButton: L,
  onSelectEmoji: G,
  containerWidth: ea,
  onNavigateAway: e_,
  persistSearch: eE,
  className: ef,
  headerClassName: eh,
  analyticsOverride: ep = ed,
  searchProps: em = {},
  wrapper: eI,
  shouldHidePickerActions: eT = !1,
  messageId: eg,
  renderHeader: eS,
  listHeaderClassName: eA
} = e,
{
  onFocus: eN,
  onKeyDown: ev,
  autoFocus: eO = !0,
  accessory: eR
} = em,
eC = (0, _.e7)([P.ZP], () => null != c ? P.ZP.getDefaultChannel(c) : null, [c]),
[ey, eD] = s.useState(null),
eL = s.useRef(''),
eb = (0, R.Iu)(e => e.searchQuery),
eM = s.useRef(null),
eP = s.useRef(null),
eU = s.useRef(null);
  null == u && null != eC && (u = eC);
  let ew = null !== (r = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : c) && void 0 !== r ? r : null,
[ex, eG] = s.useState(!1),
ek = U.default.getCurrentUser(),
eB = (0, x.I5)(ek);
  s.useImperativeHandle(t, () => ({
onPickerOpen: e5
  }));
  let {
location: eF
  } = (0, I.O)(), {
page: eV,
section: eH,
object: eZ,
openPopoutType: eY
  } = ep, ej = s.useMemo(() => ({
...eF,
section: null != eH ? eH : X.jXE.EMOJI_PICKER_POPOUT
  }), [
eF,
eH
  ]), {
analyticsLocations: eW
  } = (0, g.ZP)(T.Z.EMOJI_PICKER), {
diversitySurrogate: eK
  } = (0, _.cj)([A.Z], () => ({
diversitySurrogate: A.Z.diversitySurrogate
  })), ez = (0, k.DV)(eb, u, o), eq = null == ez ? 0 : ez.locked.length + ez.unlocked.length, eQ = M.d4.useSetting(), eX = s.useMemo(() => new Set(eQ), [eQ]), e$ = s.useCallback(e => {
M.d4.updateSetting(Array.from(e));
  }, []), eJ = (0, y.ep)({
gridWrapperRef: eM,
containerWidth: ea,
listPaddingLeft: er,
listScrollbarWidth: 8
  }), {
rowCountBySection: e0,
sectionDescriptors: e1,
emojiGrid: e2,
columnCounts: e3
  } = (0, j.YH)({
gridWidth: eJ,
channel: u,
includeCreateEmojiButton: L,
pickerIntention: o,
emojiSearchResults: ez,
collapsedSections: eX,
emojiPaddingHorizontal: en,
emojiSpriteSize: f
  }), {
newlyAddedEmojis: e4
  } = (0, F.Z)(ew, o);
  (0, B.b)({
intention: o,
isBurstReaction: ex,
analyticsObject: eZ
  });
  let e5 = s.useCallback(() => {
  let e = e4.length > 0 ? e4[0].id : null;
  (0, v.pr)(ew, e), (0, B.Z)({
    intention: o,
    isBurstReaction: ex,
    analyticsObject: eZ
  });
}, [
  e4,
  ew,
  o,
  ex,
  eZ
]),
e6 = (0, j.rf)({
  pickerIntention: o,
  selectedChannel: u,
  closePopout: d,
  onSelectEmoji: G,
  setUpsellConfigs: eD,
  emojiSelectAnalytics: e => {
    '' !== eb ? (0, k.y$)({
      emoji: e.emoji,
      location: {
        ...ej,
        object: X.qAy.EMOJI
      },
      searchQuery: eb,
      intention: o
    }) : (0, k.fe)({
      emoji: e.emoji,
      location: {
        ...ej,
        object: null != eZ ? eZ : X.qAy.EMOJI,
        ...null != eV && {
          page: eV
        }
      },
      pickerIntention: o,
      category: e.category,
      subCategory: e.subCategory,
      position: e.columnIndex + 1,
      newlyAddedHighlight: e.subCategory === Q.t0.NEWLY_ADDED_EMOJI && N.Z.isNewerThanLastSeen(ew, e.emoji.id),
      isBurstReaction: ex
    });
  },
  trackEmojiFavorited: e => {
    (0, k.J1)({
      emoji: e.emoji,
      location: {
        ...ej,
        object: X.qAy.EMOJI
      }
    });
  }
}),
e7 = s.useCallback(() => {
  d(), null == e_ || e_();
}, [
  d,
  e_
]),
{
  getItemProps: e8,
  getRowProps: e9,
  gridContainerProps: te,
  handleGridContainerKeyDown: tt,
  isUsingKeyboardNavigation: tn
} = es({
  pickerIntention: o,
  analyticsLocation: ej,
  columnCounts: e3,
  onSelectEmoji: G,
  emojiGrid: e2,
  emojiList: eP,
  channelGuildId: ew,
  isBurstReaction: ex
});
  eo(ea, eP), el(ea, eK, eU, eO), s.useEffect(() => {
!eE && (0, R.ql)('');
  }, [eE]), s.useEffect(() => (w.default.track(X.rMx.OPEN_POPOUT, {
type: null != eY ? eY : 'Emoji Picker',
guild_id: ew
  }), O.kJ.resetStoreState), [
eY,
ew
  ]), s.useEffect(() => () => (0, b.Kw)(b.v6.FAVORITE_EMOJI_TOOLTIP), []), s.useLayoutEffect(() => {
var e;
let {
  columnIndex: t,
  rowIndex: n
} = O.kJ.getState().inspectedExpressionPosition;
(null === (e = e2[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && O.kJ.setInspectedExpressionPosition(0, 0);
  }, [e2]), s.useEffect(() => {
if ('' === eL.current && '' !== eb && (0, k.PC)(ej, o), 0 === eq && '' !== eb)
  eu(ej, eb);
else if ('' !== eb && eL.current !== eb) {
  var e;
  ec(eq, null !== (e = null == ez ? void 0 : ez.locked.length) && void 0 !== e ? e : 0, ej, eb, o);
}
eL.current = eb;
  }, [
eb,
ej,
eq,
ez,
o
  ]);
  let tr = null != eI ? eI : p ? 'div' : h.Dialog,
ti = null != eJ;
  if ((null == ey ? void 0 : ey.type) === j.Bg.PREMIUM) {
let e = et.noParentContainer;
2 === C ? e = et.hasParentContainer : 1 === C && (e = et.hasTabParentContainer), i = (0, a.jsx)(q.Z, {
  onLearnMore: e7,
  emojiDescriptor: ey.emojiDescriptor,
  pickerIntention: o,
  analyticsLocation: ej,
  onClose: () => eD(null),
  channel: u,
  containerContextClassName: e
});
  } else
(null == ey ? void 0 : ey.type) === j.Bg.ROLE_SUBSCRIPTION ? i = (0, a.jsx)(D.Z, {
  onClose: () => eD(null),
  guildId: ey.guildId,
  emojiId: ey.emojiId
}) : ex && !eB && (i = (0, a.jsx)(V.Z, {
  onDismiss: () => eG(!1)
}));
  let ta = (0, a.jsx)(Y.Z, {
  pickerIntention: o,
  emojiListRef: eP,
  onKeyDown: e => {
    null == tt || tt(e), null == ev || ev(e);
  },
  searchBarRef: eU,
  onFocus: eN,
  autoFocus: eO,
  accessory: eR,
  headerClassName: eh,
  hasTabWrapper: p,
  diversitySurrogate: eK,
  isBurstReaction: ex,
  onBurstReactionToggle: () => eG(!ex),
  renderHeader: eS
}),
ts = [];
  o === J.Hz.REACTION && ts.push(E.z.SUPER_REACTIONS_NITRO_MARKETING), !A.Z.hasFavoriteEmojis(ew) && ts.push(E.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
  let to = (0, a.jsx)(m.Z, {
...ej,
children: (0, a.jsxs)(tr, {
  id: Q.cZ,
  'aria-labelledby': p ? Q.td : void 0,
  role: p ? 'tabpanel' : void 0,
  className: l()(ee.wrapper, {
    [ee.emojiPickerHasTabWrapper]: p,
    [ee.isBurstReactionPicker]: ex && eB
  }),
  children: [
    p ? null : ta,
    (0, a.jsxs)('div', {
      className: l()(ee.emojiPicker, ef),
      onScroll: ei,
      children: [
        p ? ta : null,
        (0, a.jsxs)('div', {
          className: ee.bodyWrapper,
          ref: eM,
          children: [
            (0, a.jsx)(z.Z, {
              channel: u,
              closePopout: d
            }),
            (0, a.jsx)(S.Z, {
              contentTypes: ts,
              children: e => {
                let {
                  visibleContent: t,
                  markAsDismissed: n
                } = e;
                if (t === E.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                  return (0, a.jsx)(Z.Z, {
                    markAsDismissed: () => n($.L.UNKNOWN)
                  });
              }
            }),
            eT ? null : (0, a.jsx)('div', {
              className: ee.emojiPickerListWrapper,
              id: Q.Vr,
              ...te,
              children: ti ? (0, a.jsx)(K.Z, {
                collapsedSections: eX,
                diversitySurrogate: eK,
                emojiGrid: e2,
                emojiListRef: eP,
                emojiSize: f,
                getEmojiItemProps: e8,
                getEmojiRowProps: e9,
                gridWidth: eJ,
                isUsingKeyboardNavigation: tn,
                onEmojiSelect: (e, t) => {
                  e6(e, {
                    ...t,
                    isBurst: ex
                  });
                },
                setUpsellConfigs: eD,
                rowCount: e2.length,
                rowCountBySection: e0,
                sectionDescriptors: e1,
                setCollapsedSections: e$,
                channelGuildId: ew,
                messageId: eg,
                isBurstReaction: ex,
                listHeaderClassName: eA
              }) : null
            })
          ]
        }),
        (0, a.jsx)(W.k, {
          emojiGrid: e2,
          className: ee.inspector,
          guildId: ew,
          pickerIntention: o,
          channel: u
        }),
        i
      ]
    }),
    eT ? null : (0, a.jsx)(H.Z, {
      className: ee.categoryList,
      emojiListRef: eP,
      sectionDescriptors: e1,
      intention: o,
      channel: u
    })
  ]
})
  });
  return (0, a.jsx)(g.Gt, {
value: eW,
children: to
  });
}));