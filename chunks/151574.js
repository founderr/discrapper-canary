"use strict";
n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(91192),
  _ = n(924826),
  c = n(536895),
  d = n(468194),
  E = n(477690),
  I = n(481060),
  T = n(100527),
  h = n(906732),
  S = n(570220),
  f = n(28546),
  N = n(285651),
  A = n(926491),
  m = n(373228),
  O = n(378233),
  R = n(419922),
  p = n(490095),
  g = n(652136),
  C = n(695346),
  v = n(806519),
  L = n(626135),
  D = n(280930),
  M = n(606301),
  P = n(981631),
  y = n(689938),
  U = n(586197);
let b = (0, d.Mg)(E.Z.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
  G = (0, d.Mg)(E.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
  w = 2 * G + (0, d.Mg)(E.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * b,
  k = () => Promise.resolve();

function B(e) {
  let {
    isFocused: t,
    isHidden: n,
    sendability: i,
    listIndex: r,
    sticker: o,
    onMouseOver: a,
    onSelectSticker: _
  } = e, {
    tabIndex: c,
    ...d
  } = (0, u.JA)("".concat(r));
  return (0, s.jsxs)(I.Clickable, {
    ...d,
    tabIndex: n ? -1 : c,
    className: l()(U.suggestedExpression, {
      [U.suggestedExpressionFocused]: t
    }),
    focusProps: {
      enabled: !1
    },
    onClick: () => _(o, i),
    onMouseOver: a,
    children: [(0, s.jsx)(v.ZP, {
      mask: v.ZP.Masks.STICKER_ROUNDED_RECT,
      width: G + 4,
      height: G + 4,
      className: U.mask,
      children: (0, s.jsx)("div", {
        className: U.maskBackground
      })
    }), (0, s.jsx)(R.ZP, {
      maskAsset: !0,
      size: G,
      sticker: o,
      className: U.__invalid_sticker
    }), i !== N.eb.SENDABLE && (0, s.jsx)(p.Z, {
      size: 14
    })]
  })
}(r = i || (i = {}))[r.STICKER = 0] = "STICKER";
t.Z = o.memo(function(e) {
  var t;
  let {
    editorRef: n,
    channel: i,
    isEditorFocused: r,
    onSelectSticker: a,
    stickerIconVisible: d = !1,
    submitButtonVisible: E = !1
  } = e, R = o.useContext(S.ZP), [p, v] = o.useState(null), [b, G] = o.useState(!1), [x, V] = o.useState(null), Z = (0, f.Iu)(e => null != e.activeView), H = o.useRef(null), [F, Y] = o.useState(""), [j, W] = o.useState(""), [K, z] = o.useState(!1), [q, X] = o.useState(!1), Q = (0, D.Z)(F, b, i), {
    analyticsLocations: J
  } = (0, h.ZP)(T.Z.EXPRESSION_SUGGESTIONS), {
    handleTextChange: $,
    debouncedSetTextInputValue: ee
  } = (0, D.m)({
    setTextInputValue: Y,
    setHasDismissed: G,
    setHasSelection: X,
    setFocusedSuggestionType: v
  });
  o.useEffect(() => {
    let e = e => {
        z(e)
      },
      t = e => {
        let t = "" !== e && null != e;
        if (X(t), t) {
          var i;
          v(null), null === (i = n.current) || void 0 === i || i.focus()
        }
      };
    return R.addListener("text-changed", $), R.addListener("autocomplete-visibility-change", e), R.addListener("selection-changed", t), () => {
      R.removeListener("text-changed", $), R.removeListener("autocomplete-visibility-change", e), R.removeListener("selection-changed", t)
    }
  }, [$, n, R]), o.useLayoutEffect(() => {
    null == p && V(null)
  }, [p]);
  let [et, en] = o.useState(!1);
  o.useLayoutEffect(() => {
    requestAnimationFrame(() => {
      let e = H.current;
      en(r || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
    })
  }, [r]);
  let ei = Q.length > 0,
    er = et && !Z && !K && !b && !q && ei,
    {
      stickersNavigator: es
    } = function(e) {
      let {
        editorRef: t,
        hasStickerResults: n,
        shouldRenderSuggestions: i,
        focusedSuggestionType: r,
        setFocusedStickerListItem: s,
        setFocusedSuggestionType: a,
        setHasDismissed: l,
        setTextInputValue: u
      } = e, d = o.useCallback((e, t) => {
        s(t)
      }, [s]), E = (0, _.ZP)({
        id: "expression-suggestions-stickers",
        isEnabled: !0,
        scrollToStart: k,
        scrollToEnd: k,
        orientation: c.hy.HORIZONTAL,
        setFocus: d,
        useVirtualFocus: !0
      });
      return o.useEffect(() => {
        let e = e => {
          var s, o;
          if (i && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
            switch (e.key) {
              case "ArrowUp":
                e.preventDefault(), null == r && n && (E.focusFirstVisibleItem(), a(0));
                break;
              case "ArrowDown":
                a(null), null === (s = t.current) || void 0 === s || s.focus();
                break;
              case "Escape":
                a(null), l(!0), u(""), null === (o = t.current) || void 0 === o || o.focus()
            }
            0 === r && E.containerProps.onKeyDown(e)
          }
        };
        return window.addEventListener("keydown", e, {
          capture: !0
        }), () => window.removeEventListener("keydown", e, {
          capture: !0
        })
      }, [E, i, r, a, n, t, l, s, u]), {
        stickersNavigator: E
      }
    }({
      editorRef: n,
      hasStickerResults: ei,
      shouldRenderSuggestions: er,
      focusedSuggestionType: p,
      setFocusedSuggestionType: v,
      setHasDismissed: G,
      setFocusedStickerListItem: V,
      setTextInputValue: Y
    }),
    eo = (e, t) => {
      if (er) {
        if (L.default.track(P.rMx.AUTO_SUGGEST_EXPRESSION_SELECTED, {
            sticker_id: e.id,
            suggestion_trigger: j
          }), t === N.eb.SENDABLE) G(!0), a(e, m.V0.EXPRESSION_SUGGESTIONS), ee.cancel(), Y("");
        else if ((0, O.jl)(e)) {
          let t = A.Z.getStickerPack(e.pack_id);
          null != t && (0, g.Z)({
            stickerPack: t,
            analyticsLocations: J
          })
        }
        R.emit("sticker-suggestions-hidden")
      }
    },
    ea = o.useRef([]),
    el = o.useRef(!1);
  o.useEffect(() => {
    er && (ea.current = Q), er !== el.current && (R.emit(er ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), er && ((0, M.Tk)(F), W(F))), el.current = er
  }, [R, er, Q, F]);
  let eu = !er,
    e_ = er ? Q : ea.current;
  return (0, s.jsx)(h.Gt, {
    value: J,
    children: (0, s.jsxs)(I.Clickable, {
      tabIndex: eu ? -1 : 0,
      "aria-hidden": eu,
      className: l()(U.container, {
        [U.hidden]: eu,
        [U.submitButtonOffset]: E,
        [U.stickerIconOffset]: d
      }),
      innerRef: H,
      style: {
        minWidth: w
      },
      onClick: () => {
        var e;
        return null === (e = n.current) || void 0 === e ? void 0 : e.focus()
      },
      children: [(0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(u.bG, {
          navigator: es,
          children: (0, s.jsx)(u.SJ, {
            children: e => {
              let {
                ref: t,
                tabIndex: n,
                ...i
              } = e;
              return (0, s.jsx)("div", {
                className: U.stickerResults,
                ref: e => {
                  t.current = e
                },
                onMouseLeave: () => {
                  null == p && V(null)
                },
                tabIndex: eu ? -1 : n,
                ...i,
                children: e_.map((e, t) => {
                  let {
                    sticker: n,
                    sendability: i
                  } = e;
                  return (0, s.jsx)(B, {
                    isFocused: x === "".concat(t),
                    isHidden: eu,
                    sendability: i,
                    listIndex: t,
                    onMouseOver: () => {
                      es.setFocus("".concat(t)), V("".concat(t))
                    },
                    onSelectSticker: eo,
                    sticker: n
                  }, n.id)
                })
              })
            }
          })
        }), (0, s.jsxs)("div", {
          className: U.bottomInformationTextContainer,
          children: [(0, s.jsx)("div", {
            className: U.textDivider
          }), (0, s.jsxs)("div", {
            className: U.bottomInformationLayout,
            children: [(0, s.jsx)(I.Text, {
              className: U.descriptionText,
              style: {
                maxWidth: w
              },
              variant: "text-sm/normal",
              children: null != x ? y.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                stickerName: null === (t = Q[+x]) || void 0 === t ? void 0 : t.sticker.name
              }) : y.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                upHook: (e, t) => (0, s.jsx)(I.KeyCombo, {
                  shortcut: "up",
                  className: U.keybind
                }, t)
              })
            }), (0, s.jsx)(I.Clickable, {
              onClick: () => {
                L.default.track(P.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                  enabled: !1,
                  location: {
                    section: P.jXE.EXPRESSION_PICKER
                  }
                }), C.up.updateSetting(!1)
              },
              children: (0, s.jsx)(I.Tooltip, {
                text: y.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                children: e => (0, s.jsx)(I.CloseSmallIcon, {
                  size: "md",
                  color: "currentColor",
                  ...e,
                  className: U.closeIcon
                })
              })
            })]
          })]
        })]
      }), (0, s.jsx)("div", {
        className: U.containerBackground
      })]
    })
  })
})