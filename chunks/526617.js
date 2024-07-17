n.d(t, {
  O: function() {
return j;
  },
  Z: function() {
return q;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(239091),
  c = n(788911),
  d = n(906732),
  _ = n(880949),
  E = n(806966),
  f = n(28546),
  h = n(468954),
  p = n(75145),
  m = n(631771),
  I = n(609218),
  T = n(695346),
  g = n(594174),
  S = n(979651),
  A = n(153124),
  N = n(259580),
  v = n(626135),
  O = n(74538),
  R = n(135869),
  C = n(763296),
  y = n(697426),
  D = n(242291),
  L = n(22382),
  b = n(747071),
  M = n(421673),
  P = n(663215),
  U = n(409673),
  w = n(347072),
  x = n(835648),
  G = n(650743),
  k = n(394740),
  B = n(343747),
  F = n(981631),
  V = n(689938),
  H = n(14338);
let Z = [
8,
0,
8,
0
  ],
  Y = 32 + p.K;

function j(e, t, n) {
  let r = (0, O.I5)(n);
  return null == t && e.type === y.bg.GUILD && !r || e.type === y.bg.GUILD && e.guild.id !== t && !r;
}

function W(e) {
  let {
categoryInfo: t,
collapsed: n,
toggleCollapsed: i,
index: a,
isSectionNitroLocked: o,
showNitroDivider: u
  } = e;
  return (0, r.jsxs)(r.Fragment, {
children: [
  u && (0, r.jsx)(p.Z, {
    colorOpacity: 0.4,
    glowOpacity: 0.4
  }),
  (0, r.jsx)('div', {
    className: s()(H.sectionContainer, {
      [H.sectionContainerNitroLocked]: o
    }),
    children: (0, r.jsx)(l.Clickable, {
      className: s()(H.sectionHeader, {
        [H.notFirstSectionHeader]: 0 !== a
      }),
      onClick: i,
      'aria-expanded': !n,
      children: (0, r.jsxs)('div', {
        className: H.sectionHeaderContent,
        children: [
          function() {
            switch (t.type) {
              case y.bg.FAVORITES:
                return (0, r.jsx)(l.StarIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  className: H.headerIcon
                });
              case y.bg.RECENTLY_HEARD:
                return (0, r.jsx)(l.ClockIcon, {
                  size: 'custom',
                  width: 20,
                  height: 20,
                  color: 'currentColor',
                  className: H.headerIcon
                });
              case y.bg.FREQUENTLY_USED:
                return (0, r.jsx)(l.AnalyticsIcon, {
                  className: H.headerIcon
                });
              case y.bg.GUILD:
                return (0, r.jsx)(_.Z, {
                  guild: t.guild,
                  height: 16,
                  width: 16
                });
              case y.bg.DEFAULTS:
                return (0, r.jsx)(l.ClydeIcon, {
                  size: 'custom',
                  width: 28,
                  height: 28,
                  color: 'currentColor',
                  className: H.headerIcon
                });
              case y.bg.SEARCH:
                return (0, r.jsx)(l.MagnifyingGlassIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: H.headerIcon
                });
            }
          }(),
          (0, r.jsx)(l.Heading, {
            variant: 'eyebrow',
            color: 'none',
            className: H.sectionTitle,
            children: function() {
              switch (t.type) {
                case y.bg.FAVORITES:
                  return V.Z.Messages.FAVORITES;
                case y.bg.RECENTLY_HEARD:
                  return V.Z.Messages.RECENTLY_HEARD;
                case y.bg.FREQUENTLY_USED:
                  return V.Z.Messages.FREQUENTLY_USED;
                case y.bg.GUILD:
                  return t.guild.name;
                case y.bg.DEFAULTS:
                  return V.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                case y.bg.SEARCH:
                  return V.Z.Messages.SEARCH_RESULTS_SECTION_LABEL;
              }
            }()
          }),
          (0, r.jsx)(N.Z, {
            className: H.headerIcon,
            direction: n ? N.Z.Directions.RIGHT : N.Z.Directions.DOWN
          })
        ]
      })
    })
  })
]
  });
}

function K() {
  return (0, r.jsx)(c.Z, {
message: V.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
  });
}

function z(e) {
  let {
descriptors: t,
soundButtonProps: n,
rowIndex: a,
isLastRow: o,
isUsingKeyboardNavigation: l,
suppressPlaySound: u,
gridRowProps: c,
getItemProps: d,
onSelectItem: _,
onItemMouseEnter: f,
buttonOverlay: h,
isNitroLocked: p,
shouldShowUpsell: m
  } = e, I = E.Wq.useStore(e => e.inspectedExpressionPosition);
  return (0, r.jsx)('ul', {
...c,
className: s()(H.soundRow, {
  [H.soundRowNitroLocked]: p,
  [H.lastSoundRow]: o
}),
children: t.map((e, t) => {
  let r = 'item-'.concat(t),
    s = l && I.rowIndex === a && I.columnIndex === t;
  switch (e.item.type) {
    case y.vB.SOUND:
      return (0, i.createElement)(U.ZP, {
        ...d(t),
        ...n,
        key: ''.concat(r, '-').concat(e.item.sound.soundId),
        sound: e.item.sound,
        suppressPlaySound: u,
        focused: s,
        onMouseEnter: () => f(t),
        onSelectItem: () => _(e),
        enableSecondaryActions: !0,
        buttonOverlay: h,
        inNitroLockedSection: p,
        showLockForDisabledSound: m
      });
    case y.vB.ADD_SOUND:
      return (0, i.createElement)(w.Z, {
        ...d(t),
        key: r,
        guild: e.item.guild,
        focused: s
      });
  }
})
  });
}

function q(e) {
  let {
guildId: t,
channel: a,
containerWidth: s,
onClose: c,
onSelect: _,
suppressPlaySound: p = !1,
shouldShowUpsell: N = !0,
gridNotice: U,
soundButtonOverlay: w,
listPadding: q,
renderHeader: Q,
defaultSoundsOnly: X = !1
  } = e, {
currentPreviewRef: $
  } = i.useContext(R.Z), {
analyticsLocations: J
  } = (0, d.ZP)(), [ee, et] = i.useState(null), en = (0, o.e7)([g.default], () => g.default.getCurrentUser()), er = (0, o.e7)([S.Z], () => {
var e;
return S.Z.getVoiceState(t, null !== (e = null == en ? void 0 : en.id) && void 0 !== e ? e : F.lds);
  }), ei = (null == er ? void 0 : er.selfDeaf) || (null == er ? void 0 : er.mute) || (null == er ? void 0 : er.suppress), ea = (0, f.Iu)(e => e.searchQuery), es = (0, A.Dt)(), {
categories: eo
  } = (0, P.ZP)(a, void 0, X), [el, eu] = i.useState([]), ec = (0, P.FS)(eo, el, ea), ed = T.T4.useSetting(), e_ = i.useMemo(() => new Set(ed), [ed]), eE = null == a, ef = O.ZP.canUseCustomCallSounds(en), eh = i.useCallback(e => {
e_.has(e) ? e_.delete(e) : e_.add(e), T.T4.updateSetting(Array.from(e_));
  }, [e_]), ep = i.useCallback((e, t) => {
if (!p && (0, D.Nq)(en, e, a, !1)) {
  var n;
  (0, D.GN)(e, null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : F.lds, t), null != ea && '' !== ea && v.default.track(F.rMx.SEARCH_RESULT_SELECTED, {
    search_type: F.aib.SOUNDBOARD,
    channel_id: null == a ? void 0 : a.id,
    query: ea,
    location_stack: t
  });
} else {
  if ((0, D.Nq)(en, e, a))
    return;
  N && et(e);
}
  }, [
p,
en,
a,
N,
ea
  ]), em = i.useCallback(e => {
switch (e.item.type) {
  case y.vB.SOUND:
    return null == _ || _(e.item.sound), ep(e.item.sound, J);
  case y.vB.ADD_SOUND:
    return (0, B.Z)(e.item.guild.id);
}
  }, [
J,
ep,
_
  ]), eI = i.useCallback((e, n, i, s, o) => {
let l = ec[i.sectionIndex],
  u = N && j(l.categoryInfo, t, en),
  {
    enableInlineUpsell: c
  } = m.Qs.getCurrentConfig({
    location: 'Soundboard Picker'
  }, {
    autoTrackExposure: !1
  }),
  d = i.sectionIndex === ec.length - 1 && i.rowIndex === i.totalRowCount - 1;
return (0, r.jsx)(z, {
  descriptors: e,
  rowIndex: i.rowIndex,
  isLastRow: d,
  isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
  gridRowProps: n,
  getItemProps: s,
  onItemMouseEnter: o,
  suppressPlaySound: p,
  onSelectItem: em,
  soundButtonProps: {
    channel: a,
    interactive: eE ? ef : !ei,
    forceSecondaryActions: eE || c,
    analyticsLocations: J
  },
  buttonOverlay: w,
  isNitroLocked: u && c,
  shouldShowUpsell: N
}, 'row-'.concat(n['aria-rowindex']));
  }, [
em,
a,
ei,
p,
J,
eE,
ef,
w,
t,
ec,
en,
N
  ]), eT = i.useCallback((e, t) => {
if (e <= 0 || !N)
  return !1;
let n = ec[e],
  r = ec[e - 1],
  i = j(n.categoryInfo, t, en),
  a = j(r.categoryInfo, t, en);
return i && !a;
  }, [
ec,
en,
N
  ]), eg = i.useCallback(e => 0 === e ? 16 : eT(e, t) ? Y : 32, [
t,
eT
  ]), eS = i.useCallback((e, n) => {
let i = ''.concat(e.key),
  a = N && j(e.categoryInfo, t, en),
  s = eT(n, t),
  {
    enableInlineUpsell: o
  } = m.Qs.getCurrentConfig({
    location: 'Soundboard Picker'
  }, {
    autoTrackExposure: a || s,
    disable: !a && !s
  });
return (0, r.jsx)(W, {
  categoryInfo: e.categoryInfo,
  toggleCollapsed: () => eh(i),
  collapsed: e_.has(i),
  index: n,
  isSectionNitroLocked: a && o,
  showNitroDivider: s && o
}, 'header-'.concat(i));
  }, [
e_,
eh,
t,
eT,
N,
en
  ]), eA = i.useCallback(e => eu((0, M.ZP)(e, eo, en, a, J)), [
a,
en,
eo,
J
  ]), eN = i.useCallback(e => {
(0, u.jW)(e, async () => {
  let {
    default: e
  } = await n.e('56049').then(n.bind(n, 338991));
  return t => (0, r.jsx)(e, {
    ...t
  });
});
  }, []), ev = i.useCallback(() => (0, r.jsx)(l.Clickable, {
tabIndex: 0,
className: H.settingsClickArea,
onClick: eN,
'aria-label': V.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
children: (0, r.jsx)(l.VoiceNormalIcon, {
  size: 'md',
  color: 'currentColor',
  className: H.settingsIcon
})
  }), [eN]), eO = i.useCallback(e => (0, r.jsx)(x.Z, {
soundboardListRef: e,
categories: eo,
shouldUpsellLockedCategories: N,
listPadding: q,
guildId: t
  }), [
eo,
q,
t,
N
  ]), eR = i.useCallback(e => {
if ((null == e ? void 0 : e.item.type) === y.vB.SOUND) {
  var t;
  return (0, r.jsx)(G.Z, {
    closePicker: c,
    soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
  });
}
return null;
  }, [c]), {
enableRoadblock: eC,
enableRoadblockWithSocialProof: ey
  } = m.Qs.useExperiment({
location: 'Soundboard Picker'
  }, {
autoTrackExposure: !1
  }), eD = i.useCallback(() => {
var e;
let t = C.Z.getSoundById('3'),
  n = new Audio((0, L.Z)('3'));
null != $.current && $.current.pause(), $.current = n, n.currentTime = 0, n.volume = (0, b.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1), n.play();
  }, [$]);
  return (0, r.jsxs)(r.Fragment, {
children: [
  null != ee ? eC ? (0, r.jsx)(I.Z, {
    containerContext: I.p.NONE,
    image: {
      url: 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
      width: 220,
      height: 132
    },
    title: V.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_TITLE,
    description: V.Z.Messages.PREMIUM_UPSELL_DESKTOP_FEATURE_SOUNDBOARD_DESCRIPTION,
    enableSocialProof: ey,
    analyticsLocationSection: F.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
    onClose: () => et(null),
    onDisplay: eD
  }) : (0, r.jsx)(k.Z, {
    onClose: () => et(null),
    closePopout: c,
    sound: ee,
    channel: a
  }) : void 0,
  (0, r.jsx)(h.Z, {
    categories: ec,
    collapsedCategories: e_,
    containerWidth: s,
    store: E.Wq,
    onSelectItem: em,
    onSearchExpressions: eA,
    hasSearchResults: el.length > 0,
    defaultSearchPlaceholder: V.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
    renderRow: eI,
    renderSectionHeader: eS,
    renderCategoryList: eO,
    renderHeaderAccessories: ev,
    rowHeight: 48,
    sectionHeaderHeight: eg,
    listPadding: Z,
    itemNodeWidth: 150,
    gridNavigatorId: es,
    renderEmptySearchState: K,
    renderInspector: eR,
    gridNotice: U,
    renderHeader: Q
  })
]
  });
}