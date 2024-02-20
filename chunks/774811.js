"use strict";
n.r(t), n.d(t, {
  SearchableSelect: function() {
    return M
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("165994"),
  l = n("71185"),
  u = n("974667"),
  c = n("271841"),
  d = n("227645"),
  p = n("718776"),
  h = n("516826"),
  f = n("741662"),
  E = n("433600"),
  _ = n("442761"),
  m = n("242670"),
  S = n("577776"),
  g = n("731898"),
  T = n("811425"),
  I = n("31695"),
  v = n("561744"),
  C = n("837899"),
  A = n("425190"),
  R = n("36694"),
  N = n("578706"),
  y = n("945330"),
  O = n("178814"),
  D = n("782340"),
  b = n("800836");

function P(e) {
  return e.label
}
let L = r.forwardRef(function(e, t) {
    let {
      options: n,
      value: s,
      onChange: l,
      clearable: c = !1,
      multi: f = !1,
      closeOnSelect: E = !0,
      onOpen: m,
      onClose: S,
      placeholder: I = D.default.Messages.SELECT,
      wrapperClassName: R,
      className: N,
      isDisabled: L = !1,
      maxVisibleItems: M = 7,
      look: w = O.SelectLooks.FILLED,
      autoFocus: k = !1,
      popoutPosition: G = "bottom",
      filter: V = !0,
      debounceTime: B,
      renderOptionLabel: H = P,
      onSearchChange: j,
      renderOptionPrefix: Y = () => null,
      renderOptionSuffix: W = () => null,
      "aria-describedby": K,
      "aria-invalid": z,
      "aria-labelledby": q,
      "aria-required": Q,
      inputClassNames: X,
      centerCaret: Z = !1,
      onBlur: J,
      ...$
    } = e, {
      ref: ee,
      width: et
    } = (0, g.default)(), {
      titleId: en,
      errorId: ei,
      error: er
    } = (0, h.useFormContext)(), {
      ref: es,
      width: ea
    } = (0, g.default)(), eo = r.useRef(null), [el, eu] = r.useState(null), [ec, ed] = r.useState(!1), [ep, eh] = r.useState(null), [ef, eE] = r.useState(!1), e_ = r.useRef(null), em = r.useRef(null), {
      options: eS,
      loading: eg,
      onQueryChange: eT
    } = function(e) {
      let {
        active: t,
        loadableOptions: n,
        debounceTime: i
      } = e, s = "function" == typeof n, [a, o] = r.useState({
        options: s ? [] : n,
        query: "",
        debouncedQuery: "",
        loading: !1
      }), {
        options: l,
        loading: u,
        query: c,
        debouncedQuery: d
      } = a, p = r.useCallback(e => o(t => ({
        ...t,
        loading: s,
        query: e,
        debouncedQuery: e
      })), [s]);
      r.useEffect(() => {
        t && p("")
      }, [t, p]), r.useEffect(() => {
        let e;
        return s ? (o(e => ({
          ...e,
          loading: !0,
          debouncedQuery: null
        })), e = setTimeout(() => {
          p(c)
        }, null != i ? i : 500)) : p(c), () => {
          clearTimeout(e)
        }
      }, [s, c, i, p]), r.useEffect(() => {
        let e = !1;
        return t && null !== d && ("function" == typeof n ? n(d) : Promise.resolve(n)).then(t => {
          !e && o(e => ({
            ...e,
            options: t,
            loading: !1
          }))
        }), () => {
          e = !0
        }
      }, [t, n, d]);
      let h = r.useCallback(e => {
        o(t => ({
          ...t,
          query: e
        }))
      }, []);
      return {
        options: l,
        loading: u,
        onQueryChange: h
      }
    }({
      active: ec,
      loadableOptions: n,
      debounceTime: B
    }), eI = r.useMemo(() => (function(e, t) {
      if (null == t) return [];
      let n = Array.isArray(t) ? t : [t];
      return n.map(t => "object" == typeof t && (null == t || "value" in t) ? t : e.find(e => e.value === t)).filter(Boolean)
    })(eS, s), [eS, s]), ev = r.useMemo(() => eI.map(e => e.value), [eI]), eC = eI[eI.length - 1], eA = (0, v.default)(eC), eR = r.useId(), eN = r.useId(), ey = r.useId(), eO = r.useCallback(e => {
      ec !== e && !L && (ed(e), e ? null == m || m() : null == S || S())
    }, [L, S, m, ec]), eD = r.useCallback(e => {
      ec && !e && eO(!1)
    }, [eO, ec]), eb = (0, T.useIsVisible)(eD);
    r.useImperativeHandle(t, () => ({
      close() {
        eO(!1)
      }
    }));
    let eP = r.useCallback((e, t) => {
        let n = document.querySelector(e),
          i = e_.current;
        eu(t), null != i && null != n && i.scrollIntoViewNode({
          node: n
        })
      }, []),
      eL = r.useCallback(() => new Promise(e => {
        let t = e_.current;
        if (null == t) return e();
        t.scrollToTop({
          callback: () => requestAnimationFrame(() => e())
        })
      }), []),
      eM = r.useCallback(() => new Promise(e => {
        let t = e_.current;
        if (null == t) return e();
        t.scrollToBottom({
          callback: () => requestAnimationFrame(() => e())
        })
      }), []),
      eU = (0, u.default)({
        id: eN,
        defaultFocused: null != eC ? String(eC.value) : void 0,
        scrollToStart: eL,
        scrollToEnd: eM,
        isEnabled: ec,
        wrap: !0,
        useVirtualFocus: !0,
        setFocus: eP,
        disableClickOnSpace: !0
      }),
      ew = (0, v.default)(eU),
      ek = (0, v.default)(eS);
    r.useEffect(() => {
      let e = ek.current,
        t = eA.current;
      ec && null != t && !eg && requestAnimationFrame(() => {
        let n = e_.current,
          i = e.indexOf(t);
        null == n || n.scrollToIndex({
          section: 0,
          row: i
        })
      })
    }, [ec, eg]), r.useEffect(() => {
      let e = ew.current;
      if (ec && !eg) {
        var t;
        let n = eo.current;
        if (null != n) {
          n.focus();
          let {
            value: e
          } = n;
          n.value = " ", n.value = e
        }
        eu(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null)
      } else {
        let t = eA.current,
          n = null != t ? String(t.value) : null;
        e.setFocus(n), eu(null)
      }
    }, [ec, eg]), r.useLayoutEffect(() => {
      !ec && (f ? eh("") : null != eC && eh(eC.label))
    }, [f, eC, ec]), r.useLayoutEffect(() => {
      f && eh("")
    }, [f, eI.length]);
    let eG = r.useCallback(function(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
      if (null == e) {
        l(f ? [] : void 0);
        return
      }
      let i = "function" == typeof n,
        r = i ? eS.find(t => t.value === e) : e;
      if (f) {
        let n = null != s ? s : [],
          o = n.some(t => (i ? t.value : t) === e);
        if (o ? l(n.filter(t => (i ? t.value : t) !== e)) : l([...n, r]), t) {
          var a;
          null === (a = eo.current) || void 0 === a || a.focus()
        }
      } else l(r);
      eu(null), (!f || E) && eO(!1), eE(!1)
    }, [n, eS, f, E, l, s, eO]);
    r.useLayoutEffect(() => {
      if (k) {
        var e;
        null === (e = eo.current) || void 0 === e || e.focus()
      }
    }, [k]);
    let ex = r.useCallback(() => {
        eh(""), eG(null), eO(!0)
      }, [eG, eO]),
      eF = r.useCallback(e => {
        switch (e.key) {
          case "Escape":
            ec && (e.stopPropagation(), eO(!1));
            break;
          case "ArrowDown":
          case "ArrowUp":
            eO(!0)
        }
      }, [eO, ec]),
      eV = eS;
    ef && null != ep && !1 !== V && (eV = "function" == typeof V ? V(eS, ep) : (0, o.matchSorter)(eS, ep, {
      keys: ["label"]
    })), r.useEffect(() => {
      let e = e_.current;
      null == e || e.scrollToTop()
    }, [ep]), r.useEffect(() => {
      !eg && ef && null !== ep && requestAnimationFrame(() => eU.focusFirstVisibleItem())
    }, [eg, ef, ep]);
    let eB = f ? F : x;
    return (0, i.jsx)(u.ListNavigatorProvider, {
      navigator: eU,
      children: (0, i.jsx)(_.Popout, {
        spacing: 0,
        animation: _.Popout.Animation.NONE,
        shouldShow: ec,
        onRequestClose: () => eO(!1),
        layerContext: $.popoutLayerContext,
        renderPopout: e => {
          let {
            closePopout: t,
            position: n,
            updatePosition: r
          } = e;
          return (0, i.jsx)(U, {
            loading: eg,
            multi: f,
            listRef: e_,
            listId: eR,
            maxVisibleItems: M,
            width: ea,
            selectedValues: ev,
            closePopout: t,
            onSelect: eG,
            closeOnSelect: E,
            options: eV,
            activeDescendant: el,
            renderOptionLabel: H,
            updatePosition: r,
            popoutPosition: n,
            renderOptionPrefix: Y,
            renderOptionSuffix: W
          })
        },
        position: G,
        children: (e, t) => {
          let {
            "aria-expanded": n,
            "aria-controls": r
          } = e, {
            isShown: s,
            position: o
          } = t, l = s ? A.default : C.default, {
            ref: u,
            onKeyDown: h
          } = eU.containerProps;
          return (0, i.jsxs)("div", {
            ref: em,
            className: a(R, b.wrapper),
            style: {
              "--icons-width": "".concat(et, "px")
            },
            onBlur: e => {
              var t, n, i;
              !((null === (t = em.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (i = e_.current) || void 0 === i ? void 0 : null === (n = i.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget))) && (!f && null != eC && eh(eC.label), eE(!1), eO(!1), null == J || J(e))
            },
            children: [(0, i.jsx)(p.FocusRing, {
              ringTarget: es,
              focusTarget: eo,
              offset: 4,
              children: (0, i.jsx)("div", {
                onClick: L ? void 0 : e => {
                  e.stopPropagation(), e.preventDefault(), eh(""), eO(!0)
                },
                onMouseDown: e => {
                  e.preventDefault()
                },
                ref: e => {
                  es.current = e, eb.current = e
                },
                className: a(b.select, b.searchable, N, {
                  [b.open]: s,
                  [b.lookFilled]: w === O.SelectLooks.FILLED,
                  [b.disabled]: L,
                  [b.multi]: f,
                  [b.selectPositionTop]: "top" === o
                }),
                children: (0, i.jsx)("div", {
                  className: a(b.value, {
                    [b.multi]: f
                  }),
                  children: (0, i.jsx)(eB, {
                    query: ep,
                    selectedOptions: eI,
                    loading: eg,
                    renderOptionPrefix: Y,
                    renderOptionSuffix: W,
                    isDisabled: L,
                    isEditing: ef,
                    inputRef: eo,
                    "aria-describedby": null != K ? K : ei,
                    "aria-required": Q,
                    "aria-invalid": null != z ? z : null != er,
                    "aria-labelledby": null != q ? q : en,
                    "aria-expanded": n,
                    setInputRef: e => {
                      u.current = e, eo.current = e
                    },
                    onFocus: () => {
                      var e, t;
                      null === (e = eo.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == ep ? void 0 : ep.length) && void 0 !== t ? t : 0)
                    },
                    onChange: e => {
                      eT(e), null == j || j(e), eh(e), eO(!0), eE(!0)
                    },
                    onKeyDown: e => {
                      var t;
                      null === (t = $.onKeyDown) || void 0 === t || t.call($, e), h(e), eF(e)
                    },
                    activeDescendant: el,
                    placeholder: I,
                    inputId: ey,
                    listboxId: eR,
                    navigatorId: eN,
                    selectValue: function(e) {
                      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                      eG(e, t)
                    },
                    inputClassNames: X
                  })
                })
              })
            }), (0, i.jsxs)("div", {
              className: a(b.icons, {
                [b.multi]: f,
                [b.iconsContainer]: !Z
              }),
              ref: ee,
              children: [c && (null != ep && "" !== ep || eI.length > 0) ? (0, i.jsx)(d.Clickable, {
                "aria-label": D.default.Messages.CLEAR,
                "aria-controls": ey,
                onClick: ex,
                children: (0, i.jsx)(y.default, {
                  width: 16,
                  height: 16,
                  className: b.clear
                })
              }) : null, (0, i.jsx)(d.Clickable, {
                className: a({
                  [b.iconsCenter]: Z
                }),
                "aria-label": ec ? D.default.Messages.CLOSE : D.default.Messages.OPEN,
                "aria-controls": ey,
                onClick: () => {
                  eO(!ec)
                },
                children: (0, i.jsx)(l, {
                  className: b.dropdownIcon
                })
              })]
            })]
          })
        }
      })
    })
  }),
  M = L;

function U(e) {
  let {
    onSelect: t,
    closePopout: n,
    selectedValues: s,
    options: o,
    width: l,
    maxVisibleItems: c,
    activeDescendant: d,
    listRef: p,
    listId: h,
    renderOptionLabel: f,
    updatePosition: _,
    loading: g = !1,
    multi: T,
    popoutPosition: v,
    closeOnSelect: C,
    renderOptionPrefix: A = () => null,
    renderOptionSuffix: R = () => null
  } = e, N = r.useRef(null), y = r.useCallback(e => {
    t(e), C && n()
  }, [C, n, t]);
  return ((0, I.default)(_), g) ? (0, i.jsx)("div", {
    "aria-busy": !0,
    className: a(b.popout, b.loading, {
      [b.popoutPositionTop]: "top" === v
    }),
    style: {
      width: l
    },
    children: (0, i.jsx)(m.Spinner, {
      itemClassName: b.loadingSpinner,
      type: m.SpinnerTypes.PULSING_ELLIPSIS
    })
  }) : 0 === o.length ? (0, i.jsx)("div", {
    className: a(b.popout, b.noResults, {
      [b.popoutPositionTop]: "top" === v
    }),
    style: {
      width: l
    },
    children: (0, i.jsx)(S.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: D.default.Messages.NO_RESULTS_FOUND
    })
  }) : (0, i.jsx)(u.ListNavigatorContainer, {
    children: e => {
      let {
        ref: t,
        onKeyDown: n,
        ...r
      } = e;
      return (0, i.jsx)(E.ListAuto, {
        className: a(b.popout, b.searchableSelect, {
          [b.noScrollbar]: o.length <= c,
          [b.popoutPositionTop]: "top" === v
        }),
        style: {
          width: l,
          maxHeight: 44 * c
        },
        ref: e => {
          var n;
          p.current = e;
          let i = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
          N.current = i, t.current = i
        },
        ...r,
        role: void 0,
        innerRole: "listbox",
        innerAriaMultiselectable: T,
        innerId: h,
        rowHeight: 44,
        sections: [o.length],
        sectionHeight: 0,
        renderRow: e => {
          var t;
          let {
            row: n
          } = e, r = o[n], a = f(r);
          return (0, i.jsx)(Option, {
            multi: T,
            "aria-posinset": n,
            "aria-setsize": o.length,
            isSelected: s.includes(r.value),
            isFocused: d === String(r.value),
            value: r.value,
            label: a,
            onSelect: y,
            prefix: A(r, {
              inPill: !1,
              inDropdown: !0
            }),
            suffix: R(r, {
              inPill: !1,
              inDropdown: !0
            })
          }, null !== (t = r.key) && void 0 !== t ? t : n)
        },
        renderSection: () => null
      })
    }
  })
}

function w(e, t) {
  if (null == e || null == t) return !1;
  let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
  return (e.compareDocumentPosition(t) & n) === n
}

function k(e) {
  let {
    selectedOptions: t,
    selectValue: n,
    listRef: s,
    focusPreviousItem: a,
    focusNextItem: o,
    renderOptionSuffix: l,
    renderOptionPrefix: u
  } = e, c = r.useCallback(e => {
    let t = s.current;
    if (null != t) switch (e.key) {
      case "ArrowRight":
        return e.stopPropagation(), e.preventDefault(), o();
      case "ArrowLeft":
        return e.stopPropagation(), e.preventDefault(), a()
    }
  }, [s, a, o]), [d, p] = r.useState(null);
  return (0, i.jsx)("ul", {
    className: b.optionPillContainer,
    ref: s,
    onKeyDown: c,
    onFocus: e => {
      let t = e.target;
      null != s.current && w(s.current, t) && p(t.getAttribute("data-option-pill-value"))
    },
    onBlur: e => {
      let t = e.relatedTarget;
      !w(s.current, t) && p(null)
    },
    children: t.map((e, t) => (0, i.jsx)("li", {
      className: b.optionPillItem,
      children: (0, i.jsx)(B, {
        focused: null == d ? 0 === t : d === String(e.value),
        option: e,
        onClick: () => n(e.value),
        onKeyDown: async t => {
          "Backspace" === t.key ? (await a(!0), n(e.value, !1)) : "Delete" === t.key && (await o(!0), n(e.value, !1))
        },
        renderOptionPrefix: u,
        renderOptionSuffix: l
      })
    }, "".concat(e.label, "-").concat(e.value)))
  })
}

function Option(e) {
  let {
    value: t,
    label: n,
    prefix: r,
    suffix: s,
    onSelect: o,
    isSelected: l,
    isFocused: c,
    multi: p,
    ...h
  } = e, f = (0, u.useListItem)(String(t));
  return (0, i.jsxs)(d.Clickable, {
    tag: "li",
    style: {
      height: 44
    },
    focusProps: {
      enabled: !1
    },
    className: a(b.option, {
      [b.focused]: c,
      [b.multi]: p
    }),
    onClick: () => o(t),
    ...f,
    ...h,
    "aria-selected": l,
    id: f["data-list-item-id"],
    role: "option",
    children: [(0, i.jsxs)("div", {
      className: b.content,
      children: [n, "\xa0"]
    }), null != r && (0, i.jsx)("div", {
      className: b.prefix,
      children: r
    }), " ", null != s && (0, i.jsx)("div", {
      className: b.suffix,
      children: s
    }), " ", (0, i.jsx)(G, {
      isSelected: l,
      multi: p
    })]
  })
}

function G(e) {
  let {
    isSelected: t,
    multi: n
  } = e;
  return n ? (0, i.jsx)("div", {
    className: a(b.multiSelectCheckbox, {
      [b.checked]: t,
      [b.unchecked]: !t
    }),
    children: t && (0, i.jsx)(R.default, {
      foreground: b.multiSelectCheck
    })
  }) : t ? (0, i.jsx)(N.default, {
    "aria-hidden": !0,
    backgroundColor: "white",
    className: b.selectedIcon,
    width: 20,
    height: 20
  }) : null
}

function x(e) {
  let {
    selectedOptions: t,
    renderOptionPrefix: n,
    renderOptionSuffix: r,
    ...s
  } = e, a = t[0], o = null == n ? void 0 : n(null != a ? a : null, {
    inPill: !1,
    inDropdown: !1
  }), l = null == r ? void 0 : r(null != a ? a : null, {
    inPill: !1,
    inDropdown: !1
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [null != o ? (0, i.jsx)("div", {
      "aria-hidden": !0,
      children: o
    }) : null, (0, i.jsx)(V, {
      selectedOptions: t,
      ...s
    }), null != l ? (0, i.jsx)("div", {
      "aria-hidden": !0,
      children: l
    }) : null]
  })
}

function F(e) {
  let {
    query: t,
    placeholder: n,
    selectedOptions: s,
    selectValue: o,
    onKeyDown: u,
    isEditing: c,
    isDisabled: d,
    inputRef: p,
    renderOptionPrefix: h,
    renderOptionSuffix: f,
    inputClassNames: E,
    ..._
  } = e, m = Math.max(n.length, (null != t ? t : "").length), S = r.useRef(null), {
    focusPreviousItem: g,
    focusNextItem: T,
    focusLastItem: I
  } = function(e, t, n) {
    let i = r.useMemo(() => (0, l.createFocusManager)({
        getFocusableElements() {
          let t = e.current;
          if (null != t) {
            let e = t.querySelectorAll("[data-option-pill-value]");
            return Array.from(e)
          }
          return []
        },
        getActiveElement() {
          var t, n;
          return null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.activeElement
        }
      }), [n]),
      s = r.useCallback(t => {
        var n, i;
        return t === (null === (i = e.current) || void 0 === i ? void 0 : null === (n = i.ownerDocument) || void 0 === n ? void 0 : n.activeElement)
      }, [e]),
      a = r.useCallback(async function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = await i.getPreviousFocusableElement({
            wrap: !e
          });
        if (e && ((null == n || s(n)) && (n = await i.getNextFocusableElement()), null == n || s(n))) {
          var r;
          return null === (r = t.current) || void 0 === r ? void 0 : r.focus()
        }
        return null == n ? void 0 : n.focus()
      }, [i, s, t]),
      o = r.useCallback(async function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = await i.getNextFocusableElement({
            wrap: !e
          });
        if (e && ((null == n || s(n)) && (n = await i.getPreviousFocusableElement()), null == n || s(n))) {
          var r;
          return null === (r = t.current) || void 0 === r ? void 0 : r.focus()
        }
        return null == n ? void 0 : n.focus()
      }, [i, s, t]),
      u = r.useCallback(async () => {
        let e = await i.getLastFocusableElement();
        return null == e ? void 0 : e.focus()
      }, [i]);
    return {
      focusPreviousItem: a,
      focusNextItem: o,
      focusLastItem: u
    }
  }(S, p, s);
  return (0, i.jsxs)(i.Fragment, {
    children: [s.length > 0 && (0, i.jsx)(k, {
      listRef: S,
      selectedOptions: s,
      renderOptionPrefix: h,
      renderOptionSuffix: f,
      selectValue: o,
      focusNextItem: T,
      focusPreviousItem: g
    }), (0, i.jsx)(V, {
      style: {
        minWidth: "".concat(m, "ch")
      },
      className: a(b.multi, E),
      query: t,
      placeholder: n,
      selectValue: o,
      selectedOptions: s,
      isEditing: c,
      isDisabled: d,
      inputRef: p,
      onKeyDown: e => {
        ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && s.length > 0 ? I() : u(e)
      },
      ..._
    })]
  })
}

function V(e) {
  let {
    query: t,
    inputId: n,
    "aria-describedby": r,
    "aria-invalid": s,
    "aria-required": o,
    "aria-labelledby": l,
    "aria-expanded": c,
    isDisabled: d,
    listboxId: p,
    activeDescendant: h,
    navigatorId: f,
    onChange: E,
    onFocus: _,
    setInputRef: m,
    isEditing: S,
    onKeyDown: g,
    placeholder: T,
    loading: I,
    style: v,
    className: C
  } = e;
  return (0, i.jsx)("input", {
    role: "combobox",
    id: n,
    "aria-haspopup": "listbox",
    "aria-invalid": s,
    "aria-labelledby": l,
    "aria-autocomplete": "list",
    "aria-expanded": c,
    "aria-describedby": r,
    "aria-disabled": d,
    "aria-controls": p,
    "aria-required": o,
    "aria-busy": I,
    style: null != v ? v : {},
    "aria-activedescendant": null != h ? (0, u.createListItemId)(f, h) : "",
    disabled: d,
    value: null != t ? t : "",
    onChange: e => {
      E(e.target.value)
    },
    onFocus: _,
    className: a(b.searchInput, C, {
      [b.editing]: S,
      [b.disabled]: d
    }),
    onKeyDown: g,
    placeholder: "" !== (null != t ? t : "").trim() ? void 0 : T,
    ref: m
  })
}

function B(e) {
  let {
    option: t,
    focused: n,
    onClick: r,
    onKeyDown: s,
    renderOptionPrefix: a,
    renderOptionSuffix: o
  } = e, l = null == a ? void 0 : a(t, {
    inPill: !0,
    inDropdown: !1
  }), u = null == o ? void 0 : o(t, {
    inPill: !0,
    inDropdown: !1
  });
  return (0, i.jsx)(p.FocusRing, {
    offset: 3,
    children: (0, i.jsxs)(c.Button, {
      tabIndex: n ? 0 : -1,
      "data-option-pill-value": t.value,
      className: b.optionPillBtn,
      innerClassName: b.optionPill,
      onClick: () => null == r ? void 0 : r(t.value),
      onKeyDown: s,
      children: [(0, i.jsx)("div", {
        className: b.content,
        children: t.label
      }), null != l && (0, i.jsx)("div", {
        className: b.prefix,
        children: l
      }), " ", null != u && (0, i.jsx)("div", {
        className: b.suffix,
        children: u
      }), (0, i.jsx)(f.HiddenVisually, {
        children: D.default.Messages.REMOVE
      }), (0, i.jsx)(y.default, {
        className: b.deleteOptionIcon,
        width: 14,
        height: 14
      })]
    })
  })
}