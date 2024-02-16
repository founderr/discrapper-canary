"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("917351"),
  o = n.n(r),
  u = n("394846"),
  d = n("118810"),
  c = n("446674"),
  f = n("551042"),
  m = n("77078"),
  p = n("452804"),
  h = n("901582"),
  E = n("594203"),
  g = n("244201"),
  S = n("716241"),
  C = n("86678"),
  T = n("873622"),
  v = n("277855"),
  I = n("38290"),
  _ = n("191191"),
  N = n("256860"),
  A = n("364685"),
  y = n("889701"),
  x = n("168973"),
  O = n("983782"),
  R = n("659500"),
  M = n("791776"),
  L = n("538282"),
  P = n("13030"),
  b = n("49111"),
  j = n("115279"),
  U = n("958706"),
  D = n("560241"),
  k = n("782340"),
  w = n("213524");
let F = P.MIN_EXPRESSION_PICKER_WIDTH + j.EmojiSize.MEDIUM,
  G = i.memo(function(e) {
    let {
      isActive: t,
      className: n,
      viewType: i,
      autoFocus: a = !1,
      "aria-controls": r,
      ...o
    } = e;
    return (0, l.jsx)(m.Button, {
      role: "tab",
      autoFocus: a,
      "aria-controls": t ? r : void 0,
      ...o,
      onClick: () => {
        S.default.trackWithMetadata(b.AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: i,
          badged: !1
        }), (0, L.setExpressionPickerView)(i)
      },
      "aria-current": t ? "page" : void 0,
      className: s(n, w.navButton, w.navItem, {
        [w.navButtonActive]: t
      }),
      look: m.Button.Looks.BLANK,
      size: m.Button.Sizes.NONE
    })
  }),
  B = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: l
    } = e, a = (0, c.useStateFromStores)([x.default], () => x.default.expressionPickerWidth), [s, r] = i.useState(window.innerWidth), [u, d] = i.useState(null != a ? a : P.ExpressionPickerWidths.MIN), f = i.useMemo(() => {
      switch (u) {
        case P.ExpressionPickerWidths.MIN:
          return P.MIN_EXPRESSION_PICKER_WIDTH;
        case P.ExpressionPickerWidths.MAX:
          return null;
        default:
          return u
      }
    }, [u]), m = i.useCallback(e => {
      let t = e >= s ? P.ExpressionPickerWidths.MAX : e <= P.MIN_EXPRESSION_PICKER_WIDTH ? P.ExpressionPickerWidths.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), p.default.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), d(t)
    }, [n, s]), h = (0, E.default)({
      initialElementDimension: f,
      maxDimension: s,
      minDimension: P.MIN_EXPRESSION_PICKER_WIDTH,
      resizableDomNodeRef: n,
      onElementResize: m,
      orientation: l
    });
    i.useEffect(() => {
      let e = o.debounce(() => {
        null != t.current && r(t.current.offsetWidth)
      }, 500);
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, [t]), i.useLayoutEffect(() => {
      null != t.current && r(t.current.offsetWidth)
    }, [t]);
    let g = i.useCallback(e => {
      e.stopPropagation(), null != t.current && r(t.current.offsetWidth), h(e)
    }, [t, h]);
    return {
      drawerWidth: f,
      handleDrawerResizeHandleMouseDown: g
    }
  };
var H = i.memo(function(e) {
  var t, n, a;
  let {
    positionTargetRef: r,
    hideGifFavorites: o,
    includeCreateEmojiButton: p,
    onSelectGIF: x,
    onSelectEmoji: H,
    onSelectSticker: V,
    onSelectSound: K,
    onCustomUpload: W,
    channel: Y,
    type: z,
    position: Z,
    align: J,
    positionLayerClassName: q,
    closeOnModalOuterClick: X = !1,
    parentModalKey: Q,
    customUploadFilters: $
  } = e, ee = i.useRef(null), et = i.useRef(!1), en = i.useRef(), el = i.useRef(null), ei = "left" === J ? E.ResizeOrientation.HORIZONTAL_RIGHT : E.ResizeOrientation.HORIZONTAL_LEFT, {
    drawerWidth: ea,
    handleDrawerResizeHandleMouseDown: es
  } = B({
    positionContainerRef: ee,
    drawerRef: el,
    orientation: ei
  }), er = (0, L.useExpressionPickerStore)(e => e.activeView), eo = (0, N.useHasSendableSticker)(Y), {
    renderWindow: eu,
    windowDispatch: ed
  } = i.useContext(g.default), ec = (0, c.useStateFromStores)([A.default], () => !A.default.hasLoadedStickerPacks), ef = (0, v.useSoundmojiExperiment)("expression_picker"), em = null != Q, ep = (0, f.useIsModalAtTop)(null != Q ? Q : ""), eh = i.useCallback(e => {
    var t;
    if (!em && (0, f.hasAnyModalOpen)() || em && !(ep && X)) return;
    let {
      target: n
    } = e;
    if ((0, d.isElement)(n) && null != n.closest("." + P.CHAT_INPUT_BUTTON_CLASSNAME)) return;
    for (;
      (0, d.isElement)(n);) {
      if (n === el.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, L.closeExpressionPicker)();
    let l = null === (t = (0, M.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
    (null == l || "BODY" === l.tagName) && R.ComponentDispatch.dispatchToLastSubscribed(b.ComponentActions.TEXTAREA_FOCUS)
  }, [X, ep, em]), eE = i.useCallback(() => {
    (0, L.closeExpressionPicker)()
  }, []);
  i.useLayoutEffect(() => {
    let e = () => {
      er === P.ExpressionPickerViewType.GIF && (0, L.closeExpressionPicker)()
    };
    return eu.addEventListener("mousedown", eh), eu.addEventListener("contextmenu", eh), ed.subscribe(b.ComponentActions.POPOUT_CLOSE, eE), R.ComponentDispatch.subscribe(b.ComponentActions.CLOSE_GIF_PICKER, e), () => {
      eu.removeEventListener("mousedown", eh), eu.removeEventListener("contextmenu", eh), ed.unsubscribe(b.ComponentActions.POPOUT_CLOSE, eE), R.ComponentDispatch.unsubscribe(b.ComponentActions.CLOSE_GIF_PICKER, e)
    }
  }, [er, eE, eh, eu, ed]), (0, m.useFocusLock)(ee), i.useEffect(() => {
    (0, L.setSearchQuery)("")
  }, []), i.useEffect(() => {
    (!em && (0, f.hasAnyModalOpen)() || em && !ep) && (0, L.closeExpressionPicker)()
  }, [ep, em]), i.useEffect(() => {
    if (null != el.current && !et.current) {
      var e, t, n, l;
      er === P.ExpressionPickerViewType.EMOJI ? (null == en ? void 0 : null === (e = en.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == en || null === (t = en.current) || void 0 === t || t.onPickerOpen(), et.current = !0) : er === P.ExpressionPickerViewType.STICKER ? (null == en ? void 0 : null === (n = en.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !ec && (null == en || null === (l = en.current) || void 0 === l || l.onPickerOpen(), et.current = !0) : (S.default.trackWithMetadata(b.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
        width: el.current.offsetWidth,
        tab: er,
        badged: !1
      }), et.current = !0)
    }
  });
  let eg = (null === (t = z.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.isMobile && null != x,
    eS = (null === (n = z.stickers) || void 0 === n ? void 0 : n.allowSending) && null != V,
    eC = !(null === (a = z.expressionPicker) || void 0 === a ? void 0 : a.onlyEmojis) && (eg || eS),
    eT = "left" === J ? "right" : "left",
    ev = null != q ? q : "left" === J ? w.positionLayerDefaultAlignLeft : w.positionLayerDefaultAlignRight;
  return (0, l.jsx)(h.default, {
    section: b.AnalyticsSections.EXPRESSION_PICKER,
    children: (0, l.jsx)(O.AppReferencePositionLayer, {
      className: s(w.positionLayer, ev),
      reference: r,
      position: Z,
      align: J,
      spacing: 8,
      autoInvert: !0,
      children: e => {
        let {
          isPositioned: t
        } = e;
        return (0, l.jsx)("section", {
          className: s(w.positionContainer, {
            [w.positionContainerOnlyEmoji]: !eC
          }),
          ref: ee,
          role: "dialog",
          "aria-label": k.default.Messages.EXPRESSION_PICKER,
          children: t ? (0, l.jsxs)("div", {
            className: w.drawerSizingWrapper,
            style: {
              width: null == ea ? void 0 : ea,
              [J]: 0
            },
            ref: el,
            children: [(0, l.jsx)("div", {
              className: w.resizeHandle,
              onMouseDown: es,
              style: {
                [eT]: -2
              }
            }), (0, l.jsxs)("div", {
              className: w.contentWrapper,
              children: [eC ? (0, l.jsx)("nav", {
                className: w.nav,
                children: (0, l.jsxs)("div", {
                  className: w.navList,
                  role: "tablist",
                  "aria-label": k.default.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                  children: [eg ? (0, l.jsx)(G, {
                    id: j.GIF_PICKER_TAB_ID,
                    "aria-controls": j.GIF_PICKER_TAB_PANEL_ID,
                    "aria-selected": er === P.ExpressionPickerViewType.GIF,
                    isActive: er === P.ExpressionPickerViewType.GIF,
                    viewType: P.ExpressionPickerViewType.GIF,
                    children: k.default.Messages.EXPRESSION_PICKER_GIF
                  }) : null, eS ? (0, l.jsx)(G, {
                    id: D.STICKER_PICKER_TAB_ID,
                    "aria-controls": D.STICKER_PICKER_TAB_PANEL_ID,
                    "aria-selected": er === P.ExpressionPickerViewType.STICKER,
                    isActive: er === P.ExpressionPickerViewType.STICKER,
                    autoFocus: !eo,
                    viewType: P.ExpressionPickerViewType.STICKER,
                    children: (0, l.jsx)("div", {
                      className: w.stickersNavItem,
                      children: k.default.Messages.EXPRESSION_PICKER_STICKER
                    })
                  }) : null, (0, l.jsx)(G, {
                    id: j.EMOJI_PICKER_TAB_ID,
                    "aria-controls": j.EMOJI_PICKER_TAB_PANEL_ID,
                    "aria-selected": er === P.ExpressionPickerViewType.EMOJI,
                    isActive: er === P.ExpressionPickerViewType.EMOJI,
                    viewType: P.ExpressionPickerViewType.EMOJI,
                    children: k.default.Messages.EXPRESSION_PICKER_EMOJI
                  }), ef && null != K && (0, l.jsx)(G, {
                    id: j.SOUNDBOARD_PICKER_TAB_ID,
                    "aria-controls": j.SOUNDBOARD_PICKER_TAB_PANEL_ID,
                    "aria-selected": er === P.ExpressionPickerViewType.SOUNDBOARD,
                    isActive: er === P.ExpressionPickerViewType.SOUNDBOARD,
                    viewType: P.ExpressionPickerViewType.SOUNDBOARD,
                    children: "Sounds"
                  }), null != W && (0, l.jsx)(G, {
                    id: j.CUSTOM_UPLOAD_PICKER_TAB_ID,
                    "aria-controls": j.CUSTOM_UPLOAD_PICKER_TAB_PANEL_ID,
                    "aria-selected": er === P.ExpressionPickerViewType.CUSTOM_UPLOAD,
                    isActive: er === P.ExpressionPickerViewType.CUSTOM_UPLOAD,
                    viewType: P.ExpressionPickerViewType.CUSTOM_UPLOAD,
                    children: k.default.Messages.EXPRESSION_PICKER_UPLOAD
                  })]
                })
              }) : null, er === P.ExpressionPickerViewType.STICKER && eS ? (0, l.jsx)(y.default, {
                isLoading: ec,
                channel: Y,
                containerWidth: ea,
                onSelectSticker: V,
                closePopout: eE,
                ref: e => {
                  en.current = e
                }
              }) : null, er === P.ExpressionPickerViewType.GIF && eg ? (0, l.jsx)(T.default, {
                onSelectGIF: x,
                hideFavorites: o,
                persistSearch: !0
              }) : null, er === P.ExpressionPickerViewType.EMOJI ? (0, l.jsx)(C.default, {
                hasTabWrapper: !0,
                persistSearch: !0,
                channel: Y,
                containerWidth: ea,
                includeCreateEmojiButton: p,
                emojiSize: null != ea && ea < F ? j.EmojiSize.MEDIUM : j.EmojiSize.LARGE,
                pickerIntention: U.EmojiIntention.CHAT,
                closePopout: eE,
                onSelectEmoji: H,
                ref: e => {
                  en.current = e
                }
              }) : null, er === P.ExpressionPickerViewType.SOUNDBOARD ? (0, l.jsx)("div", {
                className: w.soundboardContainer,
                children: (0, l.jsx)(_.default, {
                  guildId: Y.guild_id,
                  channel: Y,
                  containerWidth: ea,
                  onClose: eE,
                  onSelect: K,
                  analyticsSource: "expression-picker",
                  autoWidth: !0
                })
              }) : null, er === P.ExpressionPickerViewType.CUSTOM_UPLOAD && null != W ? (0, l.jsx)(I.default, {
                onCustomUpload: W,
                customUploadFilters: $
              }) : null]
            })]
          }) : null
        })
      }
    })
  })
})