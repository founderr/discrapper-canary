"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  o = n("308472"),
  u = n("77078"),
  d = n("272030"),
  c = n("96386"),
  f = n("685665"),
  m = n("917764"),
  p = n("986632"),
  h = n("538282"),
  E = n("522096"),
  g = n("845579"),
  S = n("697218"),
  C = n("800762"),
  T = n("476765"),
  v = n("461380"),
  I = n("93393"),
  _ = n("153769"),
  N = n("671434"),
  A = n("229915"),
  y = n("368121"),
  x = n("719923"),
  O = n("389480"),
  R = n("78581"),
  M = n("262439"),
  L = n("557585"),
  P = n("553372"),
  b = n("122557"),
  j = n("478477"),
  U = n("181021"),
  D = n("299069"),
  k = n("569717"),
  w = n("782340"),
  F = n("851289");
let G = [8, 0, 8, 8];

function B(e) {
  return 0 === e ? 16 : 32
}

function H(e) {
  let {
    categoryInfo: t,
    collapsed: n,
    toggleCollapsed: i,
    index: a
  } = e;
  return (0, l.jsxs)(u.Clickable, {
    className: s(F.sectionHeader, {
      [F.notFirstSectionHeader]: 0 !== a
    }),
    onClick: i,
    children: [function() {
      switch (t.type) {
        case O.SoundboardSoundGridSectionType.FAVORITES:
          return (0, l.jsx)(N.default, {
            className: F.headerIcon
          });
        case O.SoundboardSoundGridSectionType.RECENTLY_HEARD:
          return (0, l.jsx)(I.default, {
            className: F.headerIcon
          });
        case O.SoundboardSoundGridSectionType.FREQUENTLY_USED:
          return (0, l.jsx)(o.AnalyticsIcon, {
            className: F.headerIcon
          });
        case O.SoundboardSoundGridSectionType.GUILD:
          return (0, l.jsx)(m.default, {
            guild: t.guild,
            height: 16,
            width: 16
          });
        case O.SoundboardSoundGridSectionType.DEFAULTS:
          return (0, l.jsx)(_.default, {
            className: F.headerIcon
          });
        case O.SoundboardSoundGridSectionType.SEARCH:
          return (0, l.jsx)(A.default, {
            className: F.headerIcon
          })
      }
    }(), (0, l.jsx)(u.Heading, {
      variant: "eyebrow",
      color: "none",
      className: F.sectionTitle,
      children: function() {
        switch (t.type) {
          case O.SoundboardSoundGridSectionType.FAVORITES:
            return w.default.Messages.FAVORITES;
          case O.SoundboardSoundGridSectionType.RECENTLY_HEARD:
            return w.default.Messages.RECENTLY_HEARD;
          case O.SoundboardSoundGridSectionType.FREQUENTLY_USED:
            return w.default.Messages.FREQUENTLY_USED;
          case O.SoundboardSoundGridSectionType.GUILD:
            return t.guild.name;
          case O.SoundboardSoundGridSectionType.DEFAULTS:
            return w.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
          case O.SoundboardSoundGridSectionType.SEARCH:
            return w.default.Messages.SEARCH_RESULTS_SECTION_LABEL
        }
      }()
    }), (0, l.jsx)(v.default, {
      className: F.headerIcon,
      direction: n ? v.default.Directions.RIGHT : v.default.Directions.DOWN
    })]
  })
}

function V() {
  return (0, l.jsx)(c.default, {
    message: w.default.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
  })
}

function K(e) {
  let {
    descriptors: t,
    soundButtonProps: n,
    rowIndex: a,
    isUsingKeyboardNavigation: s,
    suppressPlaySound: r,
    gridRowProps: o,
    getItemProps: u,
    onSelectItem: d,
    onItemMouseEnter: c,
    buttonOverlay: f
  } = e, m = p.SoundboardPickerStore.useStore(e => e.inspectedExpressionPosition);
  return (0, l.jsx)("ul", {
    ...o,
    className: F.soundRow,
    children: t.map((e, t) => {
      let l = "item-".concat(t),
        o = s && m.rowIndex === a && m.columnIndex === t;
      switch (e.item.type) {
        case O.SoundboardSoundItemType.SOUND:
          return (0, i.createElement)(P.default, {
            ...u(t),
            ...n,
            key: "".concat(l, "-").concat(e.item.sound.soundId),
            sound: e.item.sound,
            suppressPlaySound: r,
            focused: o,
            onMouseEnter: () => c(t),
            onSelectItem: () => d(e),
            enableSecondaryActions: !0,
            buttonOverlay: f
          });
        case O.SoundboardSoundItemType.ADD_SOUND:
          return (0, i.createElement)(b.default, {
            ...u(t),
            key: l,
            guild: e.item.guild,
            focused: o
          })
      }
    })
  })
}

function W(e) {
  let {
    guildId: t,
    channel: a,
    containerWidth: s,
    onClose: o,
    onSelect: c,
    suppressPlaySound: m = !1,
    shouldShowUpsell: v = !0,
    gridNotice: I,
    soundButtonOverlay: _,
    listPadding: N,
    renderHeader: A,
    defaultSoundsOnly: P = !1
  } = e, {
    analyticsLocations: b
  } = (0, f.default)(), [W, Y] = i.useState(null), z = (0, r.useStateFromStores)([S.default], () => S.default.getCurrentUser()), Z = (0, r.useStateFromStores)([C.default], () => {
    var e;
    return C.default.getVoiceState(t, null !== (e = null == z ? void 0 : z.id) && void 0 !== e ? e : "")
  }), J = (null == Z ? void 0 : Z.selfDeaf) || (null == Z ? void 0 : Z.mute) || (null == Z ? void 0 : Z.suppress), q = (0, h.useExpressionPickerStore)(e => e.searchQuery), X = (0, T.useUID)(), {
    categories: Q
  } = (0, L.default)(a, void 0, P), [$, ee] = i.useState([]), et = (0, L.useSearchCategories)(Q, $, q), en = g.SoundboardPickerCollapsedSections.useSetting(), el = i.useMemo(() => new Set(en), [en]), ei = null == a, ea = x.default.canUseCustomCallSounds(z), es = i.useCallback(e => {
    let t = !el.has(e);
    t ? el.add(e) : el.delete(e), g.SoundboardPickerCollapsedSections.updateSetting(Array.from(el))
  }, [el]), er = i.useCallback((e, t) => {
    if (!m && (0, R.canUseSoundboardSound)(z, e, a, !1)) {
      var n;
      (0, R.playSound)(e, null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : "", t)
    } else {
      if ((0, R.canUseSoundboardSound)(z, e, a)) return;
      v && Y(e)
    }
  }, [m, z, a, v]), eo = i.useCallback(e => {
    switch (e.item.type) {
      case O.SoundboardSoundItemType.SOUND:
        return null == c || c(e.item.sound), er(e.item.sound, b);
      case O.SoundboardSoundItemType.ADD_SOUND:
        return (0, k.default)(e.item.guild.id)
    }
  }, [b, er, c]), eu = i.useCallback((e, t, n, i, s) => (0, l.jsx)(K, {
    descriptors: e,
    rowIndex: n.rowIndex,
    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
    gridRowProps: t,
    getItemProps: i,
    onItemMouseEnter: s,
    suppressPlaySound: m,
    onSelectItem: eo,
    soundButtonProps: {
      channel: a,
      interactive: ei ? ea : !J,
      forceSecondaryActions: ei,
      analyticsLocations: b
    },
    buttonOverlay: _
  }, "row-".concat(t["aria-rowindex"])), [eo, a, J, m, b, ei, ea, _]), ed = i.useCallback((e, t) => {
    let n = "".concat(e.key);
    return (0, l.jsx)(H, {
      categoryInfo: e.categoryInfo,
      toggleCollapsed: () => es(n),
      collapsed: el.has(n),
      index: t
    }, "header-".concat(n))
  }, [el, es]), ec = i.useCallback(e => ee((0, M.default)(e, Q, z, a)), [a, z, Q]), ef = i.useCallback(e => {
    (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("136137").then(n.bind(n, "136137"));
      return t => (0, l.jsx)(e, {
        ...t
      })
    })
  }, []), em = i.useCallback(() => (0, l.jsx)(u.Clickable, {
    tabIndex: 0,
    className: F.settingsClickArea,
    onClick: ef,
    "aria-label": w.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
    children: (0, l.jsx)(y.default, {
      className: F.settingsIcon
    })
  }), [ef]), ep = i.useCallback(e => (0, l.jsx)(j.default, {
    soundboardListRef: e,
    categories: Q,
    listPadding: N
  }), [Q, N]), eh = i.useCallback(e => {
    if ((null == e ? void 0 : e.item.type) === O.SoundboardSoundItemType.SOUND) {
      var t;
      return (0, l.jsx)(U.default, {
        closePicker: o,
        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
      })
    }
    return null
  }, [o]);
  return (0, l.jsxs)(l.Fragment, {
    children: [null != W && (0, l.jsx)(D.default, {
      onClose: () => Y(null),
      closePopout: o,
      sound: W,
      channel: a
    }), (0, l.jsx)(E.default, {
      categories: et,
      collapsedCategories: el,
      containerWidth: s,
      store: p.SoundboardPickerStore,
      onSelectItem: eo,
      onSearchExpressions: ec,
      hasSearchResults: $.length > 0,
      defaultSearchPlaceholder: w.default.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
      renderRow: eu,
      renderSectionHeader: ed,
      renderCategoryList: ep,
      renderHeaderAccessories: em,
      rowHeight: 48,
      sectionHeaderHeight: B,
      listPadding: G,
      itemNodeWidth: 150,
      gridNavigatorId: X,
      renderEmptySearchState: V,
      renderInspector: eh,
      gridNotice: I,
      renderHeader: A
    })]
  })
}