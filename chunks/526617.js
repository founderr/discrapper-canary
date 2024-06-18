"use strict";
n.d(t, {
  Z: function() {
    return V
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(239091),
  _ = n(788911),
  c = n(906732),
  d = n(880949),
  E = n(806966),
  I = n(28546),
  T = n(468954),
  h = n(695346),
  S = n(594174),
  f = n(979651),
  N = n(153124),
  A = n(259580),
  m = n(74538),
  O = n(697426),
  R = n(242291),
  p = n(421673),
  g = n(663215),
  C = n(409673),
  v = n(347072),
  L = n(835648),
  D = n(650743),
  M = n(394740),
  P = n(343747),
  y = n(981631),
  U = n(689938),
  b = n(819245);
let G = [8, 0, 8, 8];

function w(e) {
  return 0 === e ? 16 : 32
}

function k(e) {
  let {
    categoryInfo: t,
    collapsed: n,
    toggleCollapsed: r,
    index: s
  } = e;
  return (0, i.jsx)("div", {
    className: b.sectionContainer,
    children: (0, i.jsx)(l.Clickable, {
      className: o()(b.sectionHeader, {
        [b.notFirstSectionHeader]: 0 !== s
      }),
      onClick: r,
      "aria-expanded": !n,
      children: (0, i.jsxs)("div", {
        className: b.sectionHeaderContent,
        children: [function() {
          switch (t.type) {
            case O.bg.FAVORITES:
              return (0, i.jsx)(l.StarIcon, {
                size: "xs",
                color: "currentColor",
                className: b.headerIcon
              });
            case O.bg.RECENTLY_HEARD:
              return (0, i.jsx)(l.ClockIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: b.headerIcon
              });
            case O.bg.FREQUENTLY_USED:
              return (0, i.jsx)(l.AnalyticsIcon, {
                className: b.headerIcon
              });
            case O.bg.GUILD:
              return (0, i.jsx)(d.Z, {
                guild: t.guild,
                height: 16,
                width: 16
              });
            case O.bg.DEFAULTS:
              return (0, i.jsx)(l.ClydeIcon, {
                size: "custom",
                width: 28,
                height: 28,
                color: "currentColor",
                className: b.headerIcon
              });
            case O.bg.SEARCH:
              return (0, i.jsx)(l.MagnifyingGlassIcon, {
                size: "md",
                color: "currentColor",
                className: b.headerIcon
              })
          }
        }(), (0, i.jsx)(l.Heading, {
          variant: "eyebrow",
          color: "none",
          className: b.sectionTitle,
          children: function() {
            switch (t.type) {
              case O.bg.FAVORITES:
                return U.Z.Messages.FAVORITES;
              case O.bg.RECENTLY_HEARD:
                return U.Z.Messages.RECENTLY_HEARD;
              case O.bg.FREQUENTLY_USED:
                return U.Z.Messages.FREQUENTLY_USED;
              case O.bg.GUILD:
                return t.guild.name;
              case O.bg.DEFAULTS:
                return U.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
              case O.bg.SEARCH:
                return U.Z.Messages.SEARCH_RESULTS_SECTION_LABEL
            }
          }()
        }), (0, i.jsx)(A.Z, {
          className: b.headerIcon,
          direction: n ? A.Z.Directions.RIGHT : A.Z.Directions.DOWN
        })]
      })
    })
  })
}

function B() {
  return (0, i.jsx)(_.Z, {
    message: U.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
  })
}

function x(e) {
  let {
    descriptors: t,
    soundButtonProps: n,
    rowIndex: s,
    isUsingKeyboardNavigation: o,
    suppressPlaySound: a,
    gridRowProps: l,
    getItemProps: u,
    onSelectItem: _,
    onItemMouseEnter: c,
    buttonOverlay: d
  } = e, I = E.Wq.useStore(e => e.inspectedExpressionPosition);
  return (0, i.jsx)("ul", {
    ...l,
    className: b.soundRow,
    children: t.map((e, t) => {
      let i = "item-".concat(t),
        l = o && I.rowIndex === s && I.columnIndex === t;
      switch (e.item.type) {
        case O.vB.SOUND:
          return (0, r.createElement)(C.ZP, {
            ...u(t),
            ...n,
            key: "".concat(i, "-").concat(e.item.sound.soundId),
            sound: e.item.sound,
            suppressPlaySound: a,
            focused: l,
            onMouseEnter: () => c(t),
            onSelectItem: () => _(e),
            enableSecondaryActions: !0,
            buttonOverlay: d
          });
        case O.vB.ADD_SOUND:
          return (0, r.createElement)(v.Z, {
            ...u(t),
            key: i,
            guild: e.item.guild,
            focused: l
          })
      }
    })
  })
}

function V(e) {
  let {
    guildId: t,
    channel: s,
    containerWidth: o,
    onClose: _,
    onSelect: d,
    suppressPlaySound: A = !1,
    shouldShowUpsell: C = !0,
    gridNotice: v,
    soundButtonOverlay: V,
    listPadding: Z,
    renderHeader: H,
    defaultSoundsOnly: F = !1
  } = e, {
    analyticsLocations: Y
  } = (0, c.ZP)(), [j, W] = r.useState(null), K = (0, a.e7)([S.default], () => S.default.getCurrentUser()), z = (0, a.e7)([f.Z], () => {
    var e;
    return f.Z.getVoiceState(t, null !== (e = null == K ? void 0 : K.id) && void 0 !== e ? e : y.lds)
  }), q = (null == z ? void 0 : z.selfDeaf) || (null == z ? void 0 : z.mute) || (null == z ? void 0 : z.suppress), X = (0, I.Iu)(e => e.searchQuery), Q = (0, N.Dt)(), {
    categories: J
  } = (0, g.ZP)(s, void 0, F), [$, ee] = r.useState([]), et = (0, g.FS)(J, $, X), en = h.T4.useSetting(), ei = r.useMemo(() => new Set(en), [en]), er = null == s, es = m.ZP.canUseCustomCallSounds(K), eo = r.useCallback(e => {
    ei.has(e) ? ei.delete(e) : ei.add(e), h.T4.updateSetting(Array.from(ei))
  }, [ei]), ea = r.useCallback((e, t) => {
    if (!A && (0, R.Nq)(K, e, s, !1)) {
      var n;
      (0, R.GN)(e, null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : y.lds, t)
    } else {
      if ((0, R.Nq)(K, e, s)) return;
      C && W(e)
    }
  }, [A, K, s, C]), el = r.useCallback(e => {
    switch (e.item.type) {
      case O.vB.SOUND:
        return null == d || d(e.item.sound), ea(e.item.sound, Y);
      case O.vB.ADD_SOUND:
        return (0, P.Z)(e.item.guild.id)
    }
  }, [Y, ea, d]), eu = r.useCallback((e, t, n, r, o) => (0, i.jsx)(x, {
    descriptors: e,
    rowIndex: n.rowIndex,
    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
    gridRowProps: t,
    getItemProps: r,
    onItemMouseEnter: o,
    suppressPlaySound: A,
    onSelectItem: el,
    soundButtonProps: {
      channel: s,
      interactive: er ? es : !q,
      forceSecondaryActions: er,
      analyticsLocations: Y
    },
    buttonOverlay: V
  }, "row-".concat(t["aria-rowindex"])), [el, s, q, A, Y, er, es, V]), e_ = r.useCallback((e, t) => {
    let n = "".concat(e.key);
    return (0, i.jsx)(k, {
      categoryInfo: e.categoryInfo,
      toggleCollapsed: () => eo(n),
      collapsed: ei.has(n),
      index: t
    }, "header-".concat(n))
  }, [ei, eo]), ec = r.useCallback(e => ee((0, p.Z)(e, J, K, s)), [s, K, J]), ed = r.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, i.jsx)(e, {
        ...t
      })
    })
  }, []), eE = r.useCallback(() => (0, i.jsx)(l.Clickable, {
    tabIndex: 0,
    className: b.settingsClickArea,
    onClick: ed,
    "aria-label": U.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
    children: (0, i.jsx)(l.VoiceNormalIcon, {
      size: "md",
      color: "currentColor",
      className: b.settingsIcon
    })
  }), [ed]), eI = r.useCallback(e => (0, i.jsx)(L.Z, {
    soundboardListRef: e,
    categories: J,
    listPadding: Z
  }), [J, Z]), eT = r.useCallback(e => {
    if ((null == e ? void 0 : e.item.type) === O.vB.SOUND) {
      var t;
      return (0, i.jsx)(D.Z, {
        closePicker: _,
        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
      })
    }
    return null
  }, [_]);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != j && (0, i.jsx)(M.Z, {
      onClose: () => W(null),
      closePopout: _,
      sound: j,
      channel: s
    }), (0, i.jsx)(T.Z, {
      categories: et,
      collapsedCategories: ei,
      containerWidth: o,
      store: E.Wq,
      onSelectItem: el,
      onSearchExpressions: ec,
      hasSearchResults: $.length > 0,
      defaultSearchPlaceholder: U.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
      renderRow: eu,
      renderSectionHeader: e_,
      renderCategoryList: eI,
      renderHeaderAccessories: eE,
      rowHeight: 48,
      sectionHeaderHeight: w,
      listPadding: G,
      itemNodeWidth: 150,
      gridNavigatorId: Q,
      renderEmptySearchState: B,
      renderInspector: eT,
      gridNotice: v,
      renderHeader: H
    })]
  })
}