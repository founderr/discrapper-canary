"use strict";
n.d(t, {
  Z: function() {
    return Z
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
  f = n(594174),
  S = n(979651),
  N = n(153124),
  A = n(259580),
  m = n(626135),
  O = n(74538),
  p = n(697426),
  R = n(242291),
  g = n(421673),
  C = n(663215),
  v = n(409673),
  L = n(347072),
  D = n(835648),
  M = n(650743),
  P = n(394740),
  y = n(343747),
  U = n(981631),
  b = n(689938),
  G = n(938594);
let w = [8, 0, 8, 8];

function x(e) {
  return 0 === e ? 16 : 32
}

function B(e) {
  let {
    categoryInfo: t,
    collapsed: n,
    toggleCollapsed: r,
    index: s
  } = e;
  return (0, i.jsx)("div", {
    className: G.sectionContainer,
    children: (0, i.jsx)(l.Clickable, {
      className: o()(G.sectionHeader, {
        [G.notFirstSectionHeader]: 0 !== s
      }),
      onClick: r,
      "aria-expanded": !n,
      children: (0, i.jsxs)("div", {
        className: G.sectionHeaderContent,
        children: [function() {
          switch (t.type) {
            case p.bg.FAVORITES:
              return (0, i.jsx)(l.StarIcon, {
                size: "xs",
                color: "currentColor",
                className: G.headerIcon
              });
            case p.bg.RECENTLY_HEARD:
              return (0, i.jsx)(l.ClockIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: G.headerIcon
              });
            case p.bg.FREQUENTLY_USED:
              return (0, i.jsx)(l.AnalyticsIcon, {
                className: G.headerIcon
              });
            case p.bg.GUILD:
              return (0, i.jsx)(d.Z, {
                guild: t.guild,
                height: 16,
                width: 16
              });
            case p.bg.DEFAULTS:
              return (0, i.jsx)(l.ClydeIcon, {
                size: "custom",
                width: 28,
                height: 28,
                color: "currentColor",
                className: G.headerIcon
              });
            case p.bg.SEARCH:
              return (0, i.jsx)(l.MagnifyingGlassIcon, {
                size: "md",
                color: "currentColor",
                className: G.headerIcon
              })
          }
        }(), (0, i.jsx)(l.Heading, {
          variant: "eyebrow",
          color: "none",
          className: G.sectionTitle,
          children: function() {
            switch (t.type) {
              case p.bg.FAVORITES:
                return b.Z.Messages.FAVORITES;
              case p.bg.RECENTLY_HEARD:
                return b.Z.Messages.RECENTLY_HEARD;
              case p.bg.FREQUENTLY_USED:
                return b.Z.Messages.FREQUENTLY_USED;
              case p.bg.GUILD:
                return t.guild.name;
              case p.bg.DEFAULTS:
                return b.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
              case p.bg.SEARCH:
                return b.Z.Messages.SEARCH_RESULTS_SECTION_LABEL
            }
          }()
        }), (0, i.jsx)(A.Z, {
          className: G.headerIcon,
          direction: n ? A.Z.Directions.RIGHT : A.Z.Directions.DOWN
        })]
      })
    })
  })
}

function k() {
  return (0, i.jsx)(_.Z, {
    message: b.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
  })
}

function V(e) {
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
    className: G.soundRow,
    children: t.map((e, t) => {
      let i = "item-".concat(t),
        l = o && I.rowIndex === s && I.columnIndex === t;
      switch (e.item.type) {
        case p.vB.SOUND:
          return (0, r.createElement)(v.ZP, {
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
        case p.vB.ADD_SOUND:
          return (0, r.createElement)(L.Z, {
            ...u(t),
            key: i,
            guild: e.item.guild,
            focused: l
          })
      }
    })
  })
}

function Z(e) {
  let {
    guildId: t,
    channel: s,
    containerWidth: o,
    onClose: _,
    onSelect: d,
    suppressPlaySound: A = !1,
    shouldShowUpsell: v = !0,
    gridNotice: L,
    soundButtonOverlay: Z,
    listPadding: H,
    renderHeader: F,
    defaultSoundsOnly: Y = !1
  } = e, {
    analyticsLocations: j
  } = (0, c.ZP)(), [W, K] = r.useState(null), z = (0, a.e7)([f.default], () => f.default.getCurrentUser()), q = (0, a.e7)([S.Z], () => {
    var e;
    return S.Z.getVoiceState(t, null !== (e = null == z ? void 0 : z.id) && void 0 !== e ? e : U.lds)
  }), X = (null == q ? void 0 : q.selfDeaf) || (null == q ? void 0 : q.mute) || (null == q ? void 0 : q.suppress), Q = (0, I.Iu)(e => e.searchQuery), J = (0, N.Dt)(), {
    categories: $
  } = (0, C.ZP)(s, void 0, Y), [ee, et] = r.useState([]), en = (0, C.FS)($, ee, Q), ei = h.T4.useSetting(), er = r.useMemo(() => new Set(ei), [ei]), es = null == s, eo = O.ZP.canUseCustomCallSounds(z), ea = r.useCallback(e => {
    er.has(e) ? er.delete(e) : er.add(e), h.T4.updateSetting(Array.from(er))
  }, [er]), el = r.useCallback((e, t) => {
    if (!A && (0, R.Nq)(z, e, s, !1)) {
      var n;
      (0, R.GN)(e, null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : U.lds, t), null != Q && "" !== Q && m.default.track(U.rMx.SEARCH_RESULT_SELECTED, {
        search_type: U.aib.SOUNDBOARD,
        channel_id: null == s ? void 0 : s.id,
        query: Q,
        location_stack: t
      })
    } else {
      if ((0, R.Nq)(z, e, s)) return;
      v && K(e)
    }
  }, [A, z, s, v, Q]), eu = r.useCallback(e => {
    switch (e.item.type) {
      case p.vB.SOUND:
        return null == d || d(e.item.sound), el(e.item.sound, j);
      case p.vB.ADD_SOUND:
        return (0, y.Z)(e.item.guild.id)
    }
  }, [j, el, d]), e_ = r.useCallback((e, t, n, r, o) => (0, i.jsx)(V, {
    descriptors: e,
    rowIndex: n.rowIndex,
    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
    gridRowProps: t,
    getItemProps: r,
    onItemMouseEnter: o,
    suppressPlaySound: A,
    onSelectItem: eu,
    soundButtonProps: {
      channel: s,
      interactive: es ? eo : !X,
      forceSecondaryActions: es,
      analyticsLocations: j
    },
    buttonOverlay: Z
  }, "row-".concat(t["aria-rowindex"])), [eu, s, X, A, j, es, eo, Z]), ec = r.useCallback((e, t) => {
    let n = "".concat(e.key);
    return (0, i.jsx)(B, {
      categoryInfo: e.categoryInfo,
      toggleCollapsed: () => ea(n),
      collapsed: er.has(n),
      index: t
    }, "header-".concat(n))
  }, [er, ea]), ed = r.useCallback(e => et((0, g.ZP)(e, $, z, s, j)), [s, z, $, j]), eE = r.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, i.jsx)(e, {
        ...t
      })
    })
  }, []), eI = r.useCallback(() => (0, i.jsx)(l.Clickable, {
    tabIndex: 0,
    className: G.settingsClickArea,
    onClick: eE,
    "aria-label": b.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
    children: (0, i.jsx)(l.VoiceNormalIcon, {
      size: "md",
      color: "currentColor",
      className: G.settingsIcon
    })
  }), [eE]), eT = r.useCallback(e => (0, i.jsx)(D.Z, {
    soundboardListRef: e,
    categories: $,
    listPadding: H
  }), [$, H]), eh = r.useCallback(e => {
    if ((null == e ? void 0 : e.item.type) === p.vB.SOUND) {
      var t;
      return (0, i.jsx)(M.Z, {
        closePicker: _,
        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
      })
    }
    return null
  }, [_]);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != W && (0, i.jsx)(P.Z, {
      onClose: () => K(null),
      closePopout: _,
      sound: W,
      channel: s
    }), (0, i.jsx)(T.Z, {
      categories: en,
      collapsedCategories: er,
      containerWidth: o,
      store: E.Wq,
      onSelectItem: eu,
      onSearchExpressions: ed,
      hasSearchResults: ee.length > 0,
      defaultSearchPlaceholder: b.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
      renderRow: e_,
      renderSectionHeader: ec,
      renderCategoryList: eT,
      renderHeaderAccessories: eI,
      rowHeight: 48,
      sectionHeaderHeight: x,
      listPadding: w,
      itemNodeWidth: 150,
      gridNavigatorId: J,
      renderEmptySearchState: k,
      renderInspector: eh,
      gridNotice: L,
      renderHeader: F
    })]
  })
}