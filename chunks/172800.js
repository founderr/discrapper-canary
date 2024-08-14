n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(780384),
  l = n(481060),
  u = n(330726),
  c = n(410030),
  d = n(255963),
  _ = n(906411),
  E = n(438332),
  f = n(806966),
  h = n(434404),
  p = n(675478),
  m = n(819758),
  I = n(392552),
  T = n(784222),
  g = n(926243),
  S = n(149203),
  A = n(981631),
  N = n(689938),
  v = n(269003);
let O = n(137321),
  R = n(233892);
t.Z = e => {
  let {
emojiDescriptors: t,
emojiSize: n,
onSelect: a,
onInspect: C,
surrogateCodePoint: y,
getEmojiItemProps: D,
getEmojiRowProps: L,
isScrolling: b,
isUsingKeyboardNavigation: M,
rowIndex: P,
allowAnimatedEmoji: U,
showEmojiFavoriteTooltip: w,
channelGuildId: x,
category: G,
selectedItemClassName: k,
messageId: B,
isBurstReaction: F,
inNitroLockedSection: V
  } = e, {
enabled: H
  } = I.Z.useExperiment({
location: 'EmojiPicker'
  }, {
autoTrackExposure: !1
  }), Z = (0, c.ZP)(), Y = f.kJ.getState(), [j, W] = i.useState(Y.inspectedExpressionPosition), [K, z] = (0, u.Z)(null, 300), q = i.useRef(null);
  i.useEffect(() => f.kJ.useStore.subscribe(e => W(e), e => e.inspectedExpressionPosition), []), i.useEffect(() => {
p.DZ.loadIfNecessary();
  }, []);
  let Q = n === S.Su.LARGE,
X = n === S.Su.MEDIUM,
$ = e => {
  let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
    n = function() {
      var n;
      let {
        onMouseEnter: a,
        onMouseLeave: o,
        handleSelect: u,
        icon: c,
        ariaLabel: d
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        visibleRowIndex: _,
        columnIndex: E
      } = e, {
        ref: f,
        tabIndex: h,
        onFocus: p,
        ...m
      } = null !== (n = D(E, P)) && void 0 !== n ? n : {}, I = j.rowIndex === _ && j.columnIndex === E, T = () => {
        !b.current && !M.current && C(e);
      };
      return (0, i.createElement)('li', {
        ...m,
        key: t
      }, (0, r.jsx)(l.FocusRing, {
        children: (0, r.jsx)('button', {
          'aria-label': d,
          ref: f,
          className: s()(v.emojiItem, {
            [v.emojiItemLarge]: Q,
            [v.emojiItemMedium]: X,
            [v.emojiItemSelected]: I,
            [null != k ? k : '']: I,
            [v.showPulse]: K === t
          }),
          onFocus: null != p ? p : T,
          onMouseOver: T,
          onMouseEnter: a,
          onMouseLeave: o,
          onClick: u,
          tabIndex: h,
          children: c
        })
      }));
    };
  switch (e.type) {
    case T.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
      let t, i;
      let s = (0, o.wj)(Z) ? O : R;
      return e.sectionCollapsedToThreeRows ? (i = (0, r.jsx)('img', {
        className: v.icon,
        src: s,
        alt: ''
      }), t = N.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION) : (i = (0, r.jsx)('img', {
        className: v.icon,
        src: s,
        alt: ''
      }), t = N.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION), n({
        handleSelect: t => {
          t.stopPropagation(), !b.current && !M.current && (a(e, {
            isFinalSelection: !0,
            toggleFavorite: !1
          }), (0, d.D)(e.guildId));
        },
        icon: i,
        ariaLabel: t
      });
    }
    case T.ld.CREATE_EMOJI: {
      let t = (0, r.jsx)(l.CirclePlusIcon, {
        size: 'md',
        color: 'currentColor',
        className: v.icon,
        colorClass: v.icon
      });
      return n({
        handleSelect: t => {
          t.stopPropagation(), !b.current && !M.current && (a(e, {
            isFinalSelection: !0,
            toggleFavorite: !1
          }), h.Z.open(e.guildId, A.pNK.EMOJI, A.jXE.EMOJI_PICKER_POPOUT));
        },
        icon: t,
        ariaLabel: N.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE
      });
    }
    case T.ld.EMOJI: {
      var u;
      let {
        columnIndex: n,
        visibleRowIndex: i
      } = e, s = j.rowIndex === i && j.columnIndex === n;
      return (0, r.jsx)(g.Z, {
        rowIndex: P,
        descriptor: e,
        emojiItemKey: t,
        isInspected: s,
        isScrolling: b,
        isUsingKeyboardNavigation: M,
        surrogateCodePoint: y,
        allowAnimatedEmoji: U,
        selectedItemClassName: k,
        onSelect: a,
        onInspect: C,
        channelGuildId: x,
        getEmojiItemProps: D,
        isMediumSize: X,
        isLargeSize: Q,
        pulseItemKey: K,
        setPulseItemKey: z,
        showEmojiFavoriteTooltip: w,
        messageId: B,
        isBurstReaction: F,
        rowPosition: null == q ? void 0 : null === (u = q.current) || void 0 === u ? void 0 : u.getBoundingClientRect(),
        inNitroLockedSection: V
      }, t);
    }
  }
},
J = e => (0, r.jsx)('ul', {
  ...L(P),
  className: s()(v.emojiListRow, {
    [v.emojiListRowLargeSize]: Q,
    [v.emojiListRowMediumSize]: X
  }),
  ref: q,
  children: e.map($)
});
  if (G !== S.En.TOP_GUILD_EMOJI)
return J(t);
  let ee = t.filter(e => !!H && e.type === T.ld.CREATE_EMOJI || e.subCategory === S.t0.TOP_GUILD_EMOJI || e.subCategory === S.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && !E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
et = t.filter(e => e.subCategory === S.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
  return 0 === et.length ? J(t) : (0, r.jsxs)('div', {
className: v.topEmojiSectionContainer,
children: [
  (0, r.jsx)('div', {
    className: s()(v.topEmojiContainer, {
      [v.noEmojis]: 0 === ee.length
    }),
    children: J(ee)
  }),
  (0, r.jsxs)('div', {
    className: v.newlyAddedHighlightContainer,
    children: [
      (0, r.jsx)('div', {
        className: s()(v.newlyAddedHighlight, {
          [v.oneItem]: 1 === et.length,
          [v.alignRight]: ee.length > 0
        }),
        children: J(et)
      }),
      (0, r.jsxs)('div', {
        className: s()(v.newlyAddedBadge, {
          [v.newlyAddedBadgeLarge]: Q,
          [v.newlyAddedBadgeMedium]: X,
          [v.alignRight]: ee.length > 0
        }),
        children: [
          (0, r.jsx)(m.Z, {
            foreground: v.newlyAddedBadgeStar
          }),
          (0, r.jsx)(l.Text, {
            variant: 'text-xs/semibold',
            color: 'always-white',
            children: N.Z.Messages.NEW
          })
        ]
      })
    ]
  })
]
  });
};