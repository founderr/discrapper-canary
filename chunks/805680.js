"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(873546),
  _ = n(374470),
  c = n(442837),
  d = n(952265),
  E = n(481060),
  I = n(153867),
  T = n(410575),
  h = n(347469),
  f = n(40851),
  S = n(367907),
  A = n(907040),
  N = n(455708),
  m = n(315744),
  O = n(603074),
  p = n(453070),
  R = n(926491),
  g = n(457040),
  C = n(740492),
  v = n(153850),
  L = n(585483),
  D = n(5967),
  M = n(28546),
  P = n(957825),
  y = n(981631),
  U = n(149203),
  b = n(185923),
  G = n(611480),
  w = n(689938),
  x = n(401867);
let B = P.Om + U.Su.MEDIUM,
  k = r.memo(function(e) {
    let {
      isActive: t,
      className: n,
      viewType: r,
      autoFocus: s = !1,
      "aria-controls": a,
      ...l
    } = e;
    return (0, i.jsx)(E.Button, {
      role: "tab",
      autoFocus: s,
      "aria-controls": t ? a : void 0,
      ...l,
      onClick: () => {
        S.ZP.trackWithMetadata(y.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: r,
          badged: !1
        }), (0, M.hr)(r)
      },
      "aria-current": t ? "page" : void 0,
      className: o()(n, x.navButton, x.navItem, {
        [x.navButtonActive]: t
      }),
      look: E.Button.Looks.BLANK,
      size: E.Button.Sizes.NONE
    })
  }),
  V = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: i
    } = e, s = (0, c.e7)([C.ZP], () => C.ZP.expressionPickerWidth), [o, a] = r.useState(window.innerWidth), [u, _] = r.useState(null != s ? s : P._j.MIN), d = r.useMemo(() => {
      switch (u) {
        case P._j.MIN:
          return P.Om;
        case P._j.MAX:
          return null;
        default:
          return u
      }
    }, [u]), E = r.useCallback(e => {
      let t = e >= o ? P._j.MAX : e <= P.Om ? P._j.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), I.ZP.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), _(t)
    }, [n, o]), T = (0, h.Z)({
      initialElementDimension: d,
      maxDimension: o,
      minDimension: P.Om,
      resizableDomNodeRef: n,
      onElementResize: E,
      orientation: i
    });
    return r.useEffect(() => {
      let e = l().debounce(() => {
        null != t.current && a(t.current.offsetWidth)
      }, 500);
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, [t]), r.useLayoutEffect(() => {
      null != t.current && a(t.current.offsetWidth)
    }, [t]), {
      drawerWidth: d,
      handleDrawerResizeHandleMouseDown: r.useCallback(e => {
        e.stopPropagation(), null != t.current && a(t.current.offsetWidth), T(e)
      }, [t, T])
    }
  };
t.Z = r.memo(function(e) {
  var t, n, s;
  let {
    positionTargetRef: a,
    hideGifFavorites: l,
    includeCreateEmojiButton: I,
    onSelectGIF: C,
    onSelectEmoji: Z,
    onSelectSticker: H,
    onSelectSound: F,
    channel: Y,
    type: j,
    position: W,
    align: K,
    positionLayerClassName: z,
    closeOnModalOuterClick: q = !1,
    parentModalKey: X
  } = e, Q = r.useRef(null), J = r.useRef(!1), $ = r.useRef(), ee = r.useRef(null), {
    drawerWidth: et,
    handleDrawerResizeHandleMouseDown: en
  } = V({
    positionContainerRef: Q,
    drawerRef: ee,
    orientation: "left" === K ? h.y.HORIZONTAL_RIGHT : h.y.HORIZONTAL_LEFT
  }), ei = (0, M.Iu)(e => e.activeView), er = (0, p.fQ)(Y), {
    renderWindow: es,
    windowDispatch: eo
  } = r.useContext(f.ZP), ea = (0, c.e7)([R.Z], () => !R.Z.hasLoadedStickerPacks), el = (0, m.P)("expression_picker"), eu = null != X, e_ = (0, d.Jw)(null != X ? X : ""), ec = r.useCallback(e => {
    var t;
    if (!eu && (0, d.$s)() || eu && !(e_ && q)) return;
    let {
      target: n
    } = e;
    if ((0, _.k)(n) && null != n.closest("." + P.CT)) return;
    for (;
      (0, _.k)(n);) {
      if (n === ee.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, M._Q)();
    let i = null === (t = (0, D.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
    (null == i || "BODY" === i.tagName) && L.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS)
  }, [q, e_, eu]), ed = r.useCallback(() => {
    (0, M._Q)()
  }, []);
  r.useLayoutEffect(() => {
    let e = () => {
      ei === P.X1.GIF && (0, M._Q)()
    };
    return es.addEventListener("mousedown", ec), es.addEventListener("contextmenu", ec), eo.subscribe(y.CkL.POPOUT_CLOSE, ed), L.S.subscribe(y.CkL.CLOSE_GIF_PICKER, e), () => {
      es.removeEventListener("mousedown", ec), es.removeEventListener("contextmenu", ec), eo.unsubscribe(y.CkL.POPOUT_CLOSE, ed), L.S.unsubscribe(y.CkL.CLOSE_GIF_PICKER, e)
    }
  }, [ei, ed, ec, es, eo]), (0, E.useFocusLock)(Q), r.useEffect(() => {
    (0, M.ql)("")
  }, []), r.useEffect(() => {
    (!eu && (0, d.$s)() || eu && !e_) && (0, M._Q)()
  }, [e_, eu]), r.useEffect(() => {
    if (null != ee.current && !J.current) {
      var e, t, n, i;
      ei === P.X1.EMOJI ? (null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == $ || null === (t = $.current) || void 0 === t || t.onPickerOpen(), J.current = !0) : ei === P.X1.STICKER ? (null == $ ? void 0 : null === (n = $.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !ea && (null == $ || null === (i = $.current) || void 0 === i || i.onPickerOpen(), J.current = !0) : (S.ZP.trackWithMetadata(y.rMx.EXPRESSION_PICKER_OPENED, {
        width: ee.current.offsetWidth,
        tab: ei,
        badged: !1
      }), J.current = !0)
    }
  });
  let eE = (null === (t = j.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.tq && null != C,
    eI = (null === (n = j.stickers) || void 0 === n ? void 0 : n.allowSending) && null != H,
    eT = !(null === (s = j.expressionPicker) || void 0 === s ? void 0 : s.onlyEmojis) && (eE || eI),
    eh = "left" === K ? "right" : "left",
    ef = null != z ? z : "left" === K ? x.positionLayerDefaultAlignLeft : x.positionLayerDefaultAlignRight;
  return (0, i.jsx)(T.Z, {
    section: y.jXE.EXPRESSION_PICKER,
    children: (0, i.jsx)(v.W5, {
      className: o()(x.positionLayer, ef),
      targetRef: a,
      position: W,
      align: K,
      spacing: 8,
      autoInvert: !0,
      children: e => {
        let {
          isPositioned: t
        } = e;
        return (0, i.jsx)("section", {
          className: o()(x.positionContainer, {
            [x.positionContainerOnlyEmoji]: !eT
          }),
          ref: Q,
          role: "dialog",
          "aria-label": w.Z.Messages.EXPRESSION_PICKER,
          children: t ? (0, i.jsxs)("div", {
            className: x.drawerSizingWrapper,
            style: {
              width: null == et ? void 0 : et,
              [K]: 0
            },
            ref: ee,
            children: [(0, i.jsx)("div", {
              className: x.resizeHandle,
              onMouseDown: en,
              style: {
                [eh]: -2
              }
            }), (0, i.jsxs)("div", {
              className: x.contentWrapper,
              children: [eT ? (0, i.jsx)("nav", {
                className: x.nav,
                children: (0, i.jsxs)("div", {
                  className: x.navList,
                  role: "tablist",
                  "aria-label": w.Z.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                  children: [eE ? (0, i.jsx)(k, {
                    id: U._3,
                    "aria-controls": U.vO,
                    "aria-selected": ei === P.X1.GIF,
                    isActive: ei === P.X1.GIF,
                    viewType: P.X1.GIF,
                    children: w.Z.Messages.EXPRESSION_PICKER_GIF
                  }) : null, eI ? (0, i.jsx)(k, {
                    id: G.ED,
                    "aria-controls": G.nZ,
                    "aria-selected": ei === P.X1.STICKER,
                    isActive: ei === P.X1.STICKER,
                    autoFocus: !er,
                    viewType: P.X1.STICKER,
                    children: (0, i.jsx)("div", {
                      className: x.stickersNavItem,
                      children: w.Z.Messages.EXPRESSION_PICKER_STICKER
                    })
                  }) : null, (0, i.jsx)(k, {
                    id: U.td,
                    "aria-controls": U.cZ,
                    "aria-selected": ei === P.X1.EMOJI,
                    isActive: ei === P.X1.EMOJI,
                    viewType: P.X1.EMOJI,
                    children: w.Z.Messages.EXPRESSION_PICKER_EMOJI
                  }), el && null != F && (0, i.jsx)(k, {
                    id: U.Hr,
                    "aria-controls": U.gV,
                    "aria-selected": ei === P.X1.SOUNDBOARD,
                    isActive: ei === P.X1.SOUNDBOARD,
                    viewType: P.X1.SOUNDBOARD,
                    children: "Sounds"
                  })]
                })
              }) : null, ei === P.X1.STICKER && eI ? (0, i.jsx)(g.Z, {
                isLoading: ea,
                channel: Y,
                containerWidth: et,
                onSelectSticker: H,
                closePopout: ed,
                ref: e => {
                  $.current = e
                }
              }) : null, ei === P.X1.GIF && eE ? (0, i.jsx)(N.Z, {
                onSelectGIF: C,
                hideFavorites: l,
                persistSearch: !0
              }) : null, ei === P.X1.EMOJI ? (0, i.jsx)(A.Z, {
                hasTabWrapper: !0,
                persistSearch: !0,
                channel: Y,
                containerWidth: et,
                includeCreateEmojiButton: I,
                emojiSize: null != et && et < B ? U.Su.MEDIUM : U.Su.LARGE,
                pickerIntention: b.Hz.CHAT,
                closePopout: ed,
                onSelectEmoji: Z,
                ref: e => {
                  $.current = e
                }
              }) : null, ei === P.X1.SOUNDBOARD ? (0, i.jsx)("div", {
                className: x.soundboardContainer,
                children: (0, i.jsx)(O.Z, {
                  guildId: Y.guild_id,
                  channel: Y,
                  containerWidth: et,
                  onClose: ed,
                  onSelect: F,
                  analyticsSource: "expression-picker",
                  autoWidth: !0
                })
              }) : null]
            })]
          }) : null
        })
      }
    })
  })
})