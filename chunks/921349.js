"use strict";
n.r(t), n.d(t, {
  SearchableSelect: function() {
    return U
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("423802"),
  l = n("372817"),
  u = n("924826"),
  d = n("693789"),
  _ = n("1561"),
  c = n("84735"),
  E = n("15127"),
  I = n("766646"),
  T = n("742746"),
  f = n("235874"),
  S = n("922770"),
  h = n("993365"),
  A = n("393238"),
  m = n("434650"),
  N = n("98650"),
  p = n("863840"),
  O = n("86813"),
  C = n("826026"),
  R = n("263704"),
  g = n("441674"),
  L = n("465670"),
  v = n("748585"),
  D = n("689938"),
  M = n("46257");
let y = {
  keys: ["label"]
};

function P(e) {
  return e.label
}
let U = r.forwardRef(function(e, t) {
  let {
    options: n,
    value: s,
    onChange: l,
    clearable: d = !1,
    multi: I = !1,
    closeOnSelect: T = !0,
    onOpen: S,
    onClose: h,
    placeholder: N = D.default.Messages.SELECT,
    wrapperClassName: R,
    className: g,
    isDisabled: U = !1,
    maxVisibleItems: G = 7,
    look: B = v.SelectLooks.FILLED,
    autoFocus: V = !1,
    popoutPosition: H = "bottom",
    filter: Y = !0,
    debounceTime: j,
    renderOptionLabel: W = P,
    onSearchChange: K,
    renderOptionPrefix: z = () => null,
    renderOptionSuffix: Z = () => null,
    "aria-describedby": X,
    "aria-invalid": Q,
    "aria-labelledby": q,
    "aria-required": J,
    inputClassNames: $,
    centerCaret: ee = !1,
    onBlur: et,
    matchSorterOptions: en,
    clearQueryOnSelect: ei = !1,
    hidePills: er,
    renderCustomPill: es,
    customPillContainerClassName: ea,
    ...eo
  } = e, {
    ref: el,
    width: eu
  } = (0, A.default)(), {
    titleId: ed,
    errorId: e_,
    error: ec
  } = (0, E.useFormContext)(), {
    ref: eE,
    width: eI
  } = (0, A.default)(), eT = r.useRef(null), [ef, eS] = r.useState(null), [eh, eA] = r.useState(!1), [em, eN] = r.useState(null), [ep, eO] = r.useState(!1), eC = r.useRef(null), eR = r.useRef(null), {
    options: eg,
    loading: eL,
    onQueryChange: ev
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
      query: d,
      debouncedQuery: _
    } = a, c = r.useCallback(e => o(t => ({
      ...t,
      loading: s,
      query: e,
      debouncedQuery: e
    })), [s]);
    return r.useEffect(() => {
      t && c("")
    }, [t, c]), r.useEffect(() => {
      let e;
      return s ? (o(e => ({
        ...e,
        loading: !0,
        debouncedQuery: null
      })), e = setTimeout(() => {
        c(d)
      }, null != i ? i : 500)) : c(d), () => {
        clearTimeout(e)
      }
    }, [s, d, i, c]), r.useEffect(() => {
      let e = !1;
      return t && null !== _ && ("function" == typeof n ? n(_) : Promise.resolve(n)).then(t => {
        !e && o(e => ({
          ...e,
          options: t,
          loading: !1
        }))
      }), () => {
        e = !0
      }
    }, [t, n, _]), {
      options: l,
      loading: u,
      onQueryChange: r.useCallback(e => {
        o(t => ({
          ...t,
          query: e
        }))
      }, [])
    }
  }({
    active: eh,
    loadableOptions: n,
    debounceTime: j
  }), eD = r.useMemo(() => {
    var e, t;
    return e = eg, null == (t = s) ? [] : (Array.isArray(t) ? t : [t]).map(t => "object" == typeof t && (null == t || "value" in t) ? t : e.find(e => e.value === t)).filter(Boolean)
  }, [eg, s]), eM = r.useMemo(() => eD.map(e => e.value), [eD]), ey = eD[eD.length - 1], eP = (0, p.default)(ey), eU = r.useId(), eb = r.useId(), eG = r.useId(), ew = r.useCallback(e => {
    eh !== e && !U && (eA(e), e ? null == S || S() : null == h || h())
  }, [U, h, S, eh]), ek = r.useCallback(e => {
    eh && !e && ew(!1)
  }, [ew, eh]), eB = (0, m.useIsVisible)(ek);
  r.useImperativeHandle(t, () => ({
    close() {
      ew(!1)
    }
  }));
  let eV = r.useCallback((e, t) => {
      let n = document.querySelector(e),
        i = eC.current;
      eS(t), null != i && null != n && i.scrollIntoViewNode({
        node: n
      })
    }, []),
    ex = r.useCallback(() => new Promise(e => {
      let t = eC.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    eF = r.useCallback(() => new Promise(e => {
      let t = eC.current;
      if (null == t) return e();
      t.scrollToBottom({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    eH = (0, u.default)({
      id: eb,
      defaultFocused: null != ey ? String(ey.value) : void 0,
      scrollToStart: ex,
      scrollToEnd: eF,
      isEnabled: eh,
      wrap: !0,
      useVirtualFocus: !0,
      setFocus: eV,
      disableClickOnSpace: !0
    }),
    eY = (0, p.default)(eH),
    ej = (0, p.default)(eg);
  r.useEffect(() => {
    let e = ej.current,
      t = eP.current;
    eh && null != t && !eL && requestAnimationFrame(() => {
      let n = eC.current,
        i = e.indexOf(t);
      null == n || n.scrollToIndex({
        section: 0,
        row: i
      })
    })
  }, [eh, eL]), r.useEffect(() => {
    let e = eY.current;
    if (eh && !eL) {
      var t;
      let n = eT.current;
      if (null != n) {
        n.focus();
        let {
          value: e
        } = n;
        n.value = " ", n.value = e
      }
      eS(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null)
    } else {
      let t = eP.current,
        n = null != t ? String(t.value) : null;
      e.setFocus(n), eS(null)
    }
  }, [eh, eL]), r.useLayoutEffect(() => {
    !eh && (I ? eN("") : null != ey && eN(ey.label))
  }, [I, ey, eh]), r.useLayoutEffect(() => {
    I && eN("")
  }, [I, eD.length]);
  let eW = r.useCallback(function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (null == e) {
      l(I ? [] : void 0);
      return
    }
    let i = "function" == typeof n,
      r = i ? eg.find(t => t.value === e) : e;
    if (I) {
      let n = null != s ? s : [];
      if (n.some(t => (i ? t.value : t) === e) ? l(n.filter(t => (i ? t.value : t) !== e)) : l([...n, r]), t) {
        var a;
        null === (a = eT.current) || void 0 === a || a.focus()
      }
    } else l(r);
    eS(null), (!I || T) && ew(!1), eO(!1), ei && eN("")
  }, [n, eg, I, T, ei, l, s, ew]);
  r.useLayoutEffect(() => {
    if (V) {
      var e;
      null === (e = eT.current) || void 0 === e || e.focus()
    }
  }, [V]);
  let eK = r.useCallback(() => {
      eN(""), eW(null), ew(!0)
    }, [eW, ew]),
    ez = r.useCallback(e => {
      switch (e.key) {
        case "Escape":
          eh && (e.stopPropagation(), ew(!1));
          break;
        case "ArrowDown":
        case "ArrowUp":
          ew(!0)
      }
    }, [ew, eh]),
    eZ = eg;
  ep && null != em && !1 !== Y && (eZ = "function" == typeof Y ? Y(eg, em) : (0, o.matchSorter)(eg, em, null != en ? en : y)), r.useEffect(() => {
    let e = eC.current;
    null == e || e.scrollToTop()
  }, [em]), r.useEffect(() => {
    !eL && ep && null !== em && requestAnimationFrame(() => eH.focusFirstVisibleItem())
  }, [eL, ep, em]);
  let eX = I ? F : x,
    eQ = r.useRef(null),
    {
      focusPreviousItem: eq,
      focusNextItem: eJ
    } = w(eQ, eT, eD);
  return (0, i.jsxs)(u.ListNavigatorProvider, {
    navigator: eH,
    children: [(0, i.jsx)(f.Popout, {
      spacing: 0,
      animation: f.Popout.Animation.NONE,
      shouldShow: eh,
      onRequestClose: () => ew(!1),
      layerContext: eo.popoutLayerContext,
      renderPopout: e => {
        let {
          closePopout: t,
          position: n,
          updatePosition: r
        } = e;
        return (0, i.jsx)(b, {
          loading: eL,
          multi: !!I,
          listRef: eC,
          listId: eU,
          maxVisibleItems: G,
          width: eI,
          selectedValues: eM,
          closePopout: t,
          onSelect: eW,
          closeOnSelect: T,
          options: eZ,
          activeDescendant: ef,
          renderOptionLabel: W,
          updatePosition: r,
          popoutPosition: n,
          renderOptionPrefix: z,
          renderOptionSuffix: Z
        })
      },
      position: H,
      children: (e, t) => {
        let {
          "aria-expanded": n,
          "aria-controls": r
        } = e, {
          isShown: s,
          position: o
        } = t, l = s ? C.default : O.default, {
          ref: u,
          onKeyDown: E
        } = eH.containerProps;
        return (0, i.jsxs)("div", {
          ref: eR,
          className: a()(R, M.wrapper),
          style: {
            "--icons-width": "".concat(eu, "px")
          },
          onBlur: e => {
            var t, n, i;
            !((null === (t = eR.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (i = eC.current) || void 0 === i ? void 0 : null === (n = i.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget))) && (!I && null != ey && eN(ey.label), eO(!1), ew(!1), null == et || et(e))
          },
          children: [(0, i.jsx)(c.FocusRing, {
            ringTarget: eE,
            focusTarget: eT,
            offset: 4,
            children: (0, i.jsx)("div", {
              onClick: U ? void 0 : e => {
                e.stopPropagation(), e.preventDefault(), eN(""), ew(!0)
              },
              onMouseDown: e => {
                e.preventDefault()
              },
              ref: e => {
                eE.current = e, eB.current = e
              },
              className: a()(M.select, M.searchable, g, {
                [M.open]: s,
                [M.lookFilled]: B === v.SelectLooks.FILLED,
                [M.disabled]: U,
                [M.multi]: I,
                [M.selectPositionTop]: "top" === o
              }),
              children: (0, i.jsx)("div", {
                className: a()(M.value, {
                  [M.multi]: I
                }),
                children: (0, i.jsx)(eX, {
                  query: em,
                  selectedOptions: eD,
                  loading: eL,
                  renderOptionPrefix: z,
                  renderOptionSuffix: Z,
                  isDisabled: U,
                  isEditing: ep,
                  inputRef: eT,
                  "aria-describedby": null != X ? X : e_,
                  "aria-required": J,
                  "aria-invalid": null != Q ? Q : null != ec,
                  "aria-labelledby": null != q ? q : ed,
                  "aria-expanded": n,
                  setInputRef: e => {
                    u.current = e, eT.current = e
                  },
                  onFocus: () => {
                    var e, t;
                    null === (e = eT.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == em ? void 0 : em.length) && void 0 !== t ? t : 0)
                  },
                  onChange: e => {
                    ev(e), null == K || K(e), eN(e), ew(!0), eO(!0)
                  },
                  onKeyDown: e => {
                    var t;
                    null === (t = eo.onKeyDown) || void 0 === t || t.call(eo, e), E(e), ez(e)
                  },
                  activeDescendant: ef,
                  placeholder: N,
                  inputId: eG,
                  listboxId: eU,
                  navigatorId: eb,
                  selectValue: function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    eW(e, t)
                  },
                  inputClassNames: $,
                  hidePills: er
                })
              })
            })
          }), (0, i.jsxs)("div", {
            className: a()(M.icons, {
              [M.multi]: I,
              [M.iconsContainer]: !ee
            }),
            ref: el,
            children: [d && (null != em && "" !== em || eD.length > 0) ? (0, i.jsx)(_.Clickable, {
              "aria-label": D.default.Messages.CLEAR,
              "aria-controls": eG,
              onClick: eK,
              children: (0, i.jsx)(L.default, {
                width: 16,
                height: 16,
                className: M.clear
              })
            }) : null, (0, i.jsx)(_.Clickable, {
              className: a()({
                [M.iconsCenter]: ee
              }),
              "aria-label": eh ? D.default.Messages.CLOSE : D.default.Messages.OPEN,
              "aria-controls": eG,
              onClick: () => {
                ew(!eh)
              },
              children: (0, i.jsx)(l, {
                className: M.dropdownIcon
              })
            })]
          })]
        })
      }
    }), eD.length > 0 && null != es && (0, i.jsx)("div", {
      children: (0, i.jsx)(k, {
        listRef: eQ,
        selectedOptions: eD,
        selectValue: function(e) {
          let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          eW(e, t)
        },
        focusNextItem: eJ,
        focusPreviousItem: eq,
        renderCustomPill: es,
        customPillContainerClassName: ea
      })
    })]
  })
});

function b(e) {
  let {
    onSelect: t,
    closePopout: n,
    selectedValues: s,
    options: o,
    width: l,
    maxVisibleItems: d,
    activeDescendant: _,
    listRef: c,
    listId: E,
    renderOptionLabel: I,
    updatePosition: f,
    loading: A = !1,
    multi: m,
    popoutPosition: p,
    closeOnSelect: O,
    renderOptionPrefix: C = () => null,
    renderOptionSuffix: R = () => null
  } = e, g = r.useRef(null), L = r.useCallback(e => {
    t(e), O && n()
  }, [O, n, t]);
  return ((0, N.default)(f), A) ? (0, i.jsx)("div", {
    "aria-busy": !0,
    className: a()(M.popout, M.loading, {
      [M.popoutPositionTop]: "top" === p
    }),
    style: {
      width: l
    },
    children: (0, i.jsx)(S.Spinner, {
      itemClassName: M.loadingSpinner,
      type: S.SpinnerTypes.PULSING_ELLIPSIS
    })
  }) : 0 === o.length ? (0, i.jsx)("div", {
    className: a()(M.popout, M.noResults, {
      [M.popoutPositionTop]: "top" === p
    }),
    style: {
      width: l
    },
    children: (0, i.jsx)(h.Text, {
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
      return (0, i.jsx)(T.ListAuto, {
        className: a()(M.popout, M.searchableSelect, {
          [M.noScrollbar]: o.length <= d,
          [M.popoutPositionTop]: "top" === p
        }),
        style: {
          width: l,
          maxHeight: 44 * d
        },
        ref: e => {
          var n;
          c.current = e;
          let i = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
          g.current = i, t.current = i
        },
        ...r,
        role: void 0,
        innerRole: "listbox",
        innerAriaMultiselectable: m,
        innerId: E,
        rowHeight: 44,
        sections: [o.length],
        sectionHeight: 0,
        renderRow: e => {
          var t;
          let {
            row: n
          } = e, r = o[n], a = I(r);
          return (0, i.jsx)(B, {
            multi: m,
            "aria-posinset": n,
            "aria-setsize": o.length,
            isSelected: s.includes(r.value),
            isFocused: _ === String(r.value),
            value: r.value,
            label: a,
            onSelect: L,
            prefix: C(r, {
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

function G(e, t) {
  if (null == e || null == t) return !1;
  let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
  return (e.compareDocumentPosition(t) & n) === n
}

function w(e, t, n) {
  let i = r.useMemo(() => (0, l.createFocusManager)({
      getFocusableElements() {
        let t = e.current;
        return null != t ? Array.from(t.querySelectorAll("[data-option-pill-value]")) : []
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
    }, [i, s, t]);
  return {
    focusPreviousItem: a,
    focusNextItem: o,
    focusLastItem: r.useCallback(async () => {
      let e = await i.getLastFocusableElement();
      return null == e ? void 0 : e.focus()
    }, [i])
  }
}

function k(e) {
  let {
    selectedOptions: t,
    selectValue: n,
    listRef: s,
    focusPreviousItem: a,
    focusNextItem: o,
    renderOptionSuffix: l,
    renderOptionPrefix: u,
    renderCustomPill: d,
    customPillContainerClassName: _
  } = e, c = null != d, E = r.useCallback(e => {
    if (null != s.current) switch (e.key) {
      case "ArrowRight":
        return e.stopPropagation(), e.preventDefault(), o();
      case "ArrowLeft":
        return e.stopPropagation(), e.preventDefault(), a()
    }
  }, [s, a, o]), [I, T] = r.useState(null);
  return (0, i.jsx)("ul", {
    className: c ? _ : M.optionPillContainer,
    ref: s,
    onKeyDown: E,
    onFocus: e => {
      let t = e.target;
      null != s.current && G(s.current, t) && T(t.getAttribute("data-option-pill-value"))
    },
    onBlur: e => {
      let t = e.relatedTarget;
      !G(s.current, t) && T(null)
    },
    children: t.map((e, t) => {
      var r;
      return (0, i.jsx)("li", {
        className: c ? void 0 : M.optionPillItem,
        children: (0, i.jsx)(Y, {
          isCustomPill: c,
          option: e,
          focused: null == I ? 0 === t : I === String(e.value),
          onClick: () => n(e.value),
          renderOptionPrefix: u,
          renderOptionSuffix: l,
          onKeyDown: async t => {
            "Backspace" === t.key ? (await a(!0), n(e.value, !1)) : "Delete" === t.key && (await o(!0), n(e.value, !1))
          },
          children: c ? d(e) : (0, i.jsx)("div", {
            className: M.content,
            children: e.label
          })
        })
      }, null !== (r = e.key) && void 0 !== r ? r : "".concat(e.label, "-").concat(e.value))
    })
  })
}

function B(e) {
  let {
    value: t,
    label: n,
    prefix: r,
    suffix: s,
    onSelect: o,
    isSelected: l,
    isFocused: d,
    multi: c,
    ...E
  } = e, I = (0, u.useListItem)(String(t));
  return (0, i.jsxs)(_.Clickable, {
    tag: "li",
    style: {
      height: 44
    },
    focusProps: {
      enabled: !1
    },
    className: a()(M.option, {
      [M.focused]: d,
      [M.multi]: c
    }),
    onClick: () => o(t),
    ...I,
    ...E,
    "aria-selected": l,
    id: I["data-list-item-id"],
    role: "option",
    children: [(0, i.jsxs)("div", {
      className: M.content,
      children: [n, "\xa0"]
    }), null != r && (0, i.jsx)("div", {
      className: M.prefix,
      children: r
    }), " ", null != s && (0, i.jsx)("div", {
      className: M.suffix,
      children: s
    }), " ", (0, i.jsx)(V, {
      isSelected: l,
      multi: c
    })]
  })
}

function V(e) {
  let {
    isSelected: t,
    multi: n
  } = e;
  return n ? (0, i.jsx)("div", {
    className: a()(M.multiSelectCheckbox, {
      [M.checked]: t,
      [M.unchecked]: !t
    }),
    children: t && (0, i.jsx)(R.default, {
      foreground: M.multiSelectCheck
    })
  }) : t ? (0, i.jsx)(g.default, {
    "aria-hidden": !0,
    backgroundColor: "white",
    className: M.selectedIcon,
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
    }) : null, (0, i.jsx)(H, {
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
    onKeyDown: l,
    isEditing: u,
    isDisabled: d,
    inputRef: _,
    renderOptionPrefix: c,
    renderOptionSuffix: E,
    inputClassNames: I,
    hidePills: T,
    ...f
  } = e, S = Math.max(n.length, (null != t ? t : "").length), h = r.useRef(null), {
    focusPreviousItem: A,
    focusNextItem: m,
    focusLastItem: N
  } = w(h, _, s);
  return (0, i.jsxs)(i.Fragment, {
    children: [s.length > 0 && !T && (0, i.jsx)(k, {
      listRef: h,
      selectedOptions: s,
      renderOptionPrefix: c,
      renderOptionSuffix: E,
      selectValue: o,
      focusNextItem: m,
      focusPreviousItem: A
    }), (0, i.jsx)(H, {
      style: {
        minWidth: "".concat(S, "ch")
      },
      className: a()(M.multi, I),
      query: t,
      placeholder: n,
      selectValue: o,
      selectedOptions: s,
      isEditing: u,
      isDisabled: d,
      inputRef: _,
      onKeyDown: e => {
        ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && s.length > 0 ? N() : l(e)
      },
      ...f
    })]
  })
}

function H(e) {
  let {
    query: t,
    inputId: n,
    "aria-describedby": r,
    "aria-invalid": s,
    "aria-required": o,
    "aria-labelledby": l,
    "aria-expanded": d,
    isDisabled: _,
    listboxId: c,
    activeDescendant: E,
    navigatorId: I,
    onChange: T,
    onFocus: f,
    setInputRef: S,
    isEditing: h,
    onKeyDown: A,
    placeholder: m,
    loading: N,
    style: p,
    className: O
  } = e;
  return (0, i.jsx)("input", {
    role: "combobox",
    id: n,
    "aria-haspopup": "listbox",
    "aria-invalid": s,
    "aria-labelledby": l,
    "aria-autocomplete": "list",
    "aria-expanded": d,
    "aria-describedby": r,
    "aria-disabled": _,
    "aria-controls": c,
    "aria-required": o,
    "aria-busy": N,
    style: null != p ? p : {},
    "aria-activedescendant": null != E ? (0, u.createListItemId)(I, E) : "",
    disabled: _,
    value: null != t ? t : "",
    onChange: e => {
      T(e.target.value)
    },
    onFocus: f,
    className: a()(M.searchInput, O, {
      [M.editing]: h,
      [M.disabled]: _
    }),
    onKeyDown: A,
    placeholder: "" !== (null != t ? t : "").trim() ? void 0 : m,
    ref: S
  })
}

function Y(e) {
  let {
    option: t,
    focused: n,
    onClick: r,
    onKeyDown: s,
    renderOptionPrefix: a,
    renderOptionSuffix: o,
    children: l,
    isCustomPill: u
  } = e, _ = !u && (null == a ? void 0 : a(t, {
    inPill: !0,
    inDropdown: !1
  })), E = !u && (null == o ? void 0 : o(t, {
    inPill: !0,
    inDropdown: !1
  }));
  return (0, i.jsx)(c.FocusRing, {
    offset: 3,
    children: (0, i.jsxs)(d.Button, {
      look: d.Button.Looks.BLANK,
      tabIndex: n ? 0 : -1,
      "data-option-pill-value": t.value,
      className: M.optionPillBtn,
      innerClassName: u ? null : M.optionPill,
      onClick: () => null == r ? void 0 : r(t.value),
      onKeyDown: s,
      children: [l, null != _ && (0, i.jsx)("div", {
        className: M.prefix,
        children: _
      }), " ", null != E && (0, i.jsx)("div", {
        className: M.suffix,
        children: E
      }), (0, i.jsx)(I.HiddenVisually, {
        children: D.default.Messages.REMOVE
      }), !u && (0, i.jsx)(L.default, {
        className: M.deleteOptionIcon,
        width: 14,
        height: 14
      })]
    })
  })
}