"use strict";
n.d(t, {
  V: function() {
    return P
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(423802),
  l = n(372817),
  u = n(924826),
  _ = n(91192),
  c = n(260866),
  d = n(693789),
  E = n(1561),
  I = n(84735),
  T = n(15127),
  h = n(766646),
  S = n(742746),
  f = n(235874),
  N = n(922770),
  A = n(993365),
  m = n(481060),
  O = n(393238),
  R = n(434650),
  p = n(98650),
  g = n(863840),
  C = n(748585),
  v = n(689938),
  L = n(935);
let D = {
  keys: ["label"]
};

function M(e) {
  return e.label
}
let P = r.forwardRef(function(e, t) {
  let {
    options: n,
    value: s,
    onChange: l,
    clearable: c = !1,
    multi: d = !1,
    closeOnSelect: h = !0,
    onOpen: S,
    onClose: N,
    placeholder: A = v.Z.Messages.SELECT,
    wrapperClassName: p,
    className: P,
    isDisabled: U = !1,
    maxVisibleItems: w = 7,
    look: k = C.q.FILLED,
    autoFocus: V = !1,
    popoutPosition: Z = "bottom",
    filter: H = !0,
    debounceTime: F,
    renderOptionLabel: Y = M,
    onSearchChange: j,
    renderOptionPrefix: W = () => null,
    renderOptionSuffix: K = () => null,
    "aria-describedby": z,
    "aria-invalid": q,
    "aria-labelledby": X,
    "aria-required": Q,
    inputClassNames: J,
    centerCaret: $ = !1,
    onBlur: ee,
    matchSorterOptions: et,
    clearQueryOnSelect: en = !1,
    hidePills: ei,
    renderCustomPill: er,
    customPillContainerClassName: es,
    ...eo
  } = e, {
    ref: ea,
    width: el
  } = (0, O.Z)(), {
    titleId: eu,
    errorId: e_,
    error: ec
  } = (0, T.Gc)(), {
    ref: ed,
    width: eE
  } = (0, O.Z)(), eI = r.useRef(null), [eT, eh] = r.useState(null), [eS, ef] = r.useState(!1), [eN, eA] = r.useState(null), [em, eO] = r.useState(!1), eR = r.useRef(null), ep = r.useRef(null), {
    options: eg,
    loading: eC,
    onQueryChange: ev
  } = function(e) {
    let {
      active: t,
      loadableOptions: n,
      debounceTime: i
    } = e, s = "function" == typeof n, [o, a] = r.useState({
      options: s ? [] : n,
      query: "",
      debouncedQuery: "",
      loading: !1
    }), {
      options: l,
      loading: u,
      query: _,
      debouncedQuery: c
    } = o, d = r.useCallback(e => a(t => ({
      ...t,
      loading: s,
      query: e,
      debouncedQuery: e
    })), [s]);
    return r.useEffect(() => {
      t && d("")
    }, [t, d]), r.useEffect(() => {
      let e;
      return s ? (a(e => ({
        ...e,
        loading: !0,
        debouncedQuery: null
      })), e = setTimeout(() => {
        d(_)
      }, null != i ? i : 500)) : d(_), () => {
        clearTimeout(e)
      }
    }, [s, _, i, d]), r.useEffect(() => {
      let e = !1;
      return t && null !== c && ("function" == typeof n ? n(c) : Promise.resolve(n)).then(t => {
        !e && a(e => ({
          ...e,
          options: t,
          loading: !1
        }))
      }), () => {
        e = !0
      }
    }, [t, n, c]), {
      options: l,
      loading: u,
      onQueryChange: r.useCallback(e => {
        a(t => ({
          ...t,
          query: e
        }))
      }, [])
    }
  }({
    active: eS,
    loadableOptions: n,
    debounceTime: F
  }), eL = r.useMemo(() => {
    var e, t;
    return e = eg, null == (t = s) ? [] : (Array.isArray(t) ? t : [t]).map(t => "object" == typeof t && (null == t || "value" in t) ? t : e.find(e => e.value === t)).filter(Boolean)
  }, [eg, s]), eD = r.useMemo(() => eL.map(e => e.value), [eL]), eM = eL[eL.length - 1], eP = (0, g.Z)(eM), ey = r.useId(), eU = r.useId(), eb = r.useId(), eG = r.useCallback(e => {
    eS !== e && !U && (ef(e), e ? null == S || S() : null == N || N())
  }, [U, N, S, eS]), ew = r.useCallback(e => {
    eS && !e && eG(!1)
  }, [eG, eS]), ek = (0, R.O)(ew);
  r.useImperativeHandle(t, () => ({
    close() {
      eG(!1)
    }
  }));
  let eB = r.useCallback((e, t) => {
      let n = document.querySelector(e),
        i = eR.current;
      eh(t), null != i && null != n && i.scrollIntoViewNode({
        node: n
      })
    }, []),
    ex = r.useCallback(() => new Promise(e => {
      let t = eR.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    eV = r.useCallback(() => new Promise(e => {
      let t = eR.current;
      if (null == t) return e();
      t.scrollToBottom({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    eZ = (0, u.ZP)({
      id: eU,
      defaultFocused: null != eM ? String(eM.value) : void 0,
      scrollToStart: ex,
      scrollToEnd: eV,
      isEnabled: eS,
      wrap: !0,
      useVirtualFocus: !0,
      setFocus: eB,
      disableClickOnSpace: !0
    }),
    eH = (0, g.Z)(eZ),
    eF = (0, g.Z)(eg);
  r.useEffect(() => {
    let e = eF.current,
      t = eP.current;
    eS && null != t && !eC && requestAnimationFrame(() => {
      let n = eR.current,
        i = e.indexOf(t);
      null == n || n.scrollToIndex({
        section: 0,
        row: i
      })
    })
  }, [eS, eC]), r.useEffect(() => {
    let e = eH.current;
    if (eS && !eC) {
      var t;
      let n = eI.current;
      if (null != n) {
        n.focus();
        let {
          value: e
        } = n;
        n.value = " ", n.value = e
      }
      eh(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null)
    } else {
      let t = eP.current,
        n = null != t ? String(t.value) : null;
      e.setFocus(n), eh(null)
    }
  }, [eS, eC]), r.useLayoutEffect(() => {
    !eS && (d ? eA("") : null != eM && eA(eM.label))
  }, [d, eM, eS]), r.useLayoutEffect(() => {
    d && eA("")
  }, [d, eL.length]);
  let eY = r.useCallback(function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (null == e) {
      l(d ? [] : void 0);
      return
    }
    let i = "function" == typeof n,
      r = i ? eg.find(t => t.value === e) : e;
    if (d) {
      let n = null != s ? s : [];
      if (n.some(t => (i ? t.value : t) === e) ? l(n.filter(t => (i ? t.value : t) !== e)) : l([...n, r]), t) {
        var o;
        null === (o = eI.current) || void 0 === o || o.focus()
      }
    } else l(r);
    eh(null), (!d || h) && eG(!1), eO(!1), en && eA("")
  }, [n, eg, d, h, en, l, s, eG]);
  r.useLayoutEffect(() => {
    if (V) {
      var e;
      null === (e = eI.current) || void 0 === e || e.focus()
    }
  }, [V]);
  let ej = r.useCallback(() => {
      eA(""), eY(null), eG(!0)
    }, [eY, eG]),
    eW = r.useCallback(e => {
      switch (e.key) {
        case "Escape":
          eS && (e.stopPropagation(), eG(!1));
          break;
        case "ArrowDown":
        case "ArrowUp":
          eG(!0)
      }
    }, [eG, eS]),
    eK = eg;
  em && null != eN && !1 !== H && (eK = "function" == typeof H ? H(eg, eN) : (0, a.Lu)(eg, eN, null != et ? et : D)), r.useEffect(() => {
    let e = eR.current;
    null == e || e.scrollToTop()
  }, [eN]), r.useEffect(() => {
    !eC && em && null !== eN && requestAnimationFrame(() => eZ.focusFirstVisibleItem())
  }, [eC, em, eN]);
  let ez = d ? x : B,
    eq = r.useRef(null),
    {
      focusPreviousItem: eX,
      focusNextItem: eQ
    } = b(eq, eI, eL);
  return (0, i.jsxs)(_.bG, {
    navigator: eZ,
    children: [(0, i.jsx)(f.y, {
      spacing: 0,
      animation: f.y.Animation.NONE,
      shouldShow: eS,
      onRequestClose: () => eG(!1),
      layerContext: eo.popoutLayerContext,
      renderPopout: e => {
        let {
          closePopout: t,
          position: n,
          updatePosition: r
        } = e;
        return (0, i.jsx)(y, {
          loading: eC,
          multi: !!d,
          listRef: eR,
          listId: ey,
          maxVisibleItems: w,
          width: eE,
          selectedValues: eD,
          closePopout: t,
          onSelect: eY,
          closeOnSelect: h,
          options: eK,
          activeDescendant: eT,
          renderOptionLabel: Y,
          updatePosition: r,
          popoutPosition: n,
          renderOptionPrefix: W,
          renderOptionSuffix: K
        })
      },
      position: Z,
      children: (e, t) => {
        let {
          "aria-expanded": n,
          "aria-controls": r
        } = e, {
          isShown: s,
          position: a
        } = t, l = s ? m.ChevronSmallUpIcon : m.ChevronSmallDownIcon, {
          ref: u,
          onKeyDown: _
        } = eZ.containerProps;
        return (0, i.jsxs)("div", {
          ref: ep,
          className: o()(p, L.wrapper),
          style: {
            "--icons-width": "".concat(el, "px")
          },
          onBlur: e => {
            var t, n, i;
            if (!((null === (t = ep.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (i = eR.current) || void 0 === i ? void 0 : null === (n = i.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget)))) !d && null != eM && eA(eM.label), eO(!1), eG(!1), null == ee || ee(e)
          },
          children: [(0, i.jsx)(I.t, {
            ringTarget: ed,
            focusTarget: eI,
            offset: 4,
            children: (0, i.jsx)("div", {
              onClick: U ? void 0 : e => {
                e.stopPropagation(), e.preventDefault(), eA(""), eG(!0)
              },
              onMouseDown: e => {
                e.preventDefault()
              },
              ref: e => {
                ed.current = e, ek.current = e
              },
              className: o()(L.select, L.searchable, P, {
                [L.open]: s,
                [L.lookFilled]: k === C.q.FILLED,
                [L.disabled]: U,
                [L.multi]: d,
                [L.selectPositionTop]: "top" === a
              }),
              children: (0, i.jsx)("div", {
                className: o()(L.value, {
                  [L.multi]: d
                }),
                children: (0, i.jsx)(ez, {
                  query: eN,
                  selectedOptions: eL,
                  loading: eC,
                  renderOptionPrefix: W,
                  renderOptionSuffix: K,
                  isDisabled: U,
                  isEditing: em,
                  inputRef: eI,
                  "aria-describedby": null != z ? z : e_,
                  "aria-required": Q,
                  "aria-invalid": null != q ? q : null != ec,
                  "aria-labelledby": null != X ? X : eu,
                  "aria-expanded": n,
                  setInputRef: e => {
                    u.current = e, eI.current = e
                  },
                  onFocus: () => {
                    var e, t;
                    null === (e = eI.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == eN ? void 0 : eN.length) && void 0 !== t ? t : 0)
                  },
                  onChange: e => {
                    ev(e), null == j || j(e), eA(e), eG(!0), eO(!0)
                  },
                  onKeyDown: e => {
                    var t;
                    null === (t = eo.onKeyDown) || void 0 === t || t.call(eo, e), _(e), eW(e)
                  },
                  activeDescendant: eT,
                  placeholder: A,
                  inputId: eb,
                  listboxId: ey,
                  navigatorId: eU,
                  selectValue: function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    eY(e, t)
                  },
                  inputClassNames: J,
                  hidePills: ei
                })
              })
            })
          }), (0, i.jsxs)("div", {
            className: o()(L.icons, {
              [L.multi]: d,
              [L.iconsContainer]: !$
            }),
            ref: ea,
            children: [c && (null != eN && "" !== eN || eL.length > 0) ? (0, i.jsx)(E.P, {
              "aria-label": v.Z.Messages.CLEAR,
              "aria-controls": eb,
              onClick: ej,
              children: (0, i.jsx)(m.CloseSmallIcon, {
                size: "xs",
                color: "currentColor",
                className: L.clear
              })
            }) : null, (0, i.jsx)(E.P, {
              className: o()({
                [L.iconsCenter]: $
              }),
              "aria-label": eS ? v.Z.Messages.CLOSE : v.Z.Messages.OPEN,
              "aria-controls": eb,
              onClick: () => {
                eG(!eS)
              },
              children: (0, i.jsx)(l, {
                className: L.dropdownIcon
              })
            })]
          })]
        })
      }
    }), eL.length > 0 && null != er && (0, i.jsx)("div", {
      children: (0, i.jsx)(G, {
        listRef: eq,
        selectedOptions: eL,
        selectValue: function(e) {
          let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          eY(e, t)
        },
        focusNextItem: eQ,
        focusPreviousItem: eX,
        renderCustomPill: er,
        customPillContainerClassName: es
      })
    })]
  })
});

function y(e) {
  let {
    onSelect: t,
    closePopout: n,
    selectedValues: s,
    options: a,
    width: l,
    maxVisibleItems: u,
    activeDescendant: c,
    listRef: d,
    listId: E,
    renderOptionLabel: I,
    updatePosition: T,
    loading: h = !1,
    multi: f,
    popoutPosition: m,
    closeOnSelect: O,
    renderOptionPrefix: R = () => null,
    renderOptionSuffix: g = () => null
  } = e, C = r.useRef(null), D = r.useCallback(e => {
    t(e), O && n()
  }, [O, n, t]);
  return ((0, p.Z)(T), h) ? (0, i.jsx)("div", {
    "aria-busy": !0,
    className: o()(L.popout, L.loading, {
      [L.popoutPositionTop]: "top" === m
    }),
    style: {
      width: l
    },
    children: (0, i.jsx)(N.$, {
      itemClassName: L.loadingSpinner,
      type: N.R.PULSING_ELLIPSIS
    })
  }) : 0 === a.length ? (0, i.jsx)("div", {
    className: o()(L.popout, L.noResults, {
      [L.popoutPositionTop]: "top" === m
    }),
    style: {
      width: l
    },
    children: (0, i.jsx)(A.x, {
      color: "text-muted",
      variant: "text-md/normal",
      children: v.Z.Messages.NO_RESULTS_FOUND
    })
  }) : (0, i.jsx)(_.SJ, {
    children: e => {
      let {
        ref: t,
        onKeyDown: n,
        ...r
      } = e;
      return (0, i.jsx)(S._2, {
        className: o()(L.popout, L.searchableSelect, {
          [L.noScrollbar]: a.length <= u,
          [L.popoutPositionTop]: "top" === m
        }),
        style: {
          width: l,
          maxHeight: 44 * u
        },
        ref: e => {
          var n;
          d.current = e;
          let i = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
          C.current = i, t.current = i
        },
        ...r,
        role: void 0,
        innerRole: "listbox",
        innerAriaMultiselectable: f,
        innerId: E,
        rowHeight: 44,
        sections: [a.length],
        sectionHeight: 0,
        renderRow: e => {
          var t;
          let {
            row: n
          } = e, r = a[n], o = I(r);
          return (0, i.jsx)(w, {
            multi: f,
            "aria-posinset": n,
            "aria-setsize": a.length,
            isSelected: s.includes(r.value),
            isFocused: c === String(r.value),
            value: r.value,
            label: o,
            onSelect: D,
            prefix: R(r, {
              inPill: !1,
              inDropdown: !0
            }),
            suffix: g(r, {
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

function U(e, t) {
  if (null == e || null == t) return !1;
  let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
  return (e.compareDocumentPosition(t) & n) === n
}

function b(e, t, n) {
  let i = r.useMemo(() => (0, l.E)({
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
    o = r.useCallback(async function() {
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
    a = r.useCallback(async function() {
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
    focusPreviousItem: o,
    focusNextItem: a,
    focusLastItem: r.useCallback(async () => {
      let e = await i.getLastFocusableElement();
      return null == e ? void 0 : e.focus()
    }, [i])
  }
}

function G(e) {
  let {
    selectedOptions: t,
    selectValue: n,
    listRef: s,
    focusPreviousItem: o,
    focusNextItem: a,
    renderOptionSuffix: l,
    renderOptionPrefix: u,
    renderCustomPill: _,
    customPillContainerClassName: c
  } = e, d = null != _, E = r.useCallback(e => {
    if (null != s.current) switch (e.key) {
      case "ArrowRight":
        return e.stopPropagation(), e.preventDefault(), a();
      case "ArrowLeft":
        return e.stopPropagation(), e.preventDefault(), o()
    }
  }, [s, o, a]), [I, T] = r.useState(null);
  return (0, i.jsx)("ul", {
    className: d ? c : L.optionPillContainer,
    ref: s,
    onKeyDown: E,
    onFocus: e => {
      let t = e.target;
      null != s.current && U(s.current, t) && T(t.getAttribute("data-option-pill-value"))
    },
    onBlur: e => {
      let t = e.relatedTarget;
      !U(s.current, t) && T(null)
    },
    children: t.map((e, t) => {
      var r;
      return (0, i.jsx)("li", {
        className: d ? void 0 : L.optionPillItem,
        children: (0, i.jsx)(Z, {
          isCustomPill: d,
          option: e,
          focused: null == I ? 0 === t : I === String(e.value),
          onClick: () => n(e.value),
          renderOptionPrefix: u,
          renderOptionSuffix: l,
          onKeyDown: async t => {
            "Backspace" === t.key ? (await o(!0), n(e.value, !1)) : "Delete" === t.key && (await a(!0), n(e.value, !1))
          },
          children: d ? _(e) : (0, i.jsx)("div", {
            className: L.content,
            children: e.label
          })
        })
      }, null !== (r = e.key) && void 0 !== r ? r : "".concat(e.label, "-").concat(e.value))
    })
  })
}

function w(e) {
  let {
    value: t,
    label: n,
    prefix: r,
    suffix: s,
    onSelect: a,
    isSelected: l,
    isFocused: u,
    multi: c,
    ...d
  } = e, I = (0, _.JA)(String(t));
  return (0, i.jsxs)(E.P, {
    tag: "li",
    style: {
      height: 44
    },
    focusProps: {
      enabled: !1
    },
    className: o()(L.option, {
      [L.focused]: u,
      [L.multi]: c
    }),
    onClick: () => a(t),
    ...I,
    ...d,
    "aria-selected": l,
    id: I["data-list-item-id"],
    role: "option",
    children: [(0, i.jsxs)("div", {
      className: L.content,
      children: [n, "\xa0"]
    }), null != r && (0, i.jsx)("div", {
      className: L.prefix,
      children: r
    }), " ", null != s && (0, i.jsx)("div", {
      className: L.suffix,
      children: s
    }), " ", (0, i.jsx)(k, {
      isSelected: l,
      multi: c
    })]
  })
}

function k(e) {
  let {
    isSelected: t,
    multi: n
  } = e;
  return n ? (0, i.jsx)("div", {
    className: o()(L.multiSelectCheckbox, {
      [L.checked]: t,
      [L.unchecked]: !t
    }),
    children: t && (0, i.jsx)(m.CheckmarkLargeIcon, {
      size: "md",
      color: "currentColor",
      colorClass: L.multiSelectCheck
    })
  }) : t ? (0, i.jsx)(m.CircleCheckIcon, {
    size: "custom",
    color: "currentColor",
    "aria-hidden": !0,
    secondaryColor: "white",
    className: L.selectedIcon,
    width: 20,
    height: 20
  }) : null
}

function B(e) {
  let {
    selectedOptions: t,
    renderOptionPrefix: n,
    renderOptionSuffix: r,
    ...s
  } = e, o = t[0], a = null == n ? void 0 : n(null != o ? o : null, {
    inPill: !1,
    inDropdown: !1
  }), l = null == r ? void 0 : r(null != o ? o : null, {
    inPill: !1,
    inDropdown: !1
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [null != a ? (0, i.jsx)("div", {
      "aria-hidden": !0,
      children: a
    }) : null, (0, i.jsx)(V, {
      selectedOptions: t,
      ...s
    }), null != l ? (0, i.jsx)("div", {
      "aria-hidden": !0,
      children: l
    }) : null]
  })
}

function x(e) {
  let {
    query: t,
    placeholder: n,
    selectedOptions: s,
    selectValue: a,
    onKeyDown: l,
    isEditing: u,
    isDisabled: _,
    inputRef: c,
    renderOptionPrefix: d,
    renderOptionSuffix: E,
    inputClassNames: I,
    hidePills: T,
    ...h
  } = e, S = Math.max(n.length, (null != t ? t : "").length), f = r.useRef(null), {
    focusPreviousItem: N,
    focusNextItem: A,
    focusLastItem: m
  } = b(f, c, s);
  return (0, i.jsxs)(i.Fragment, {
    children: [s.length > 0 && !T && (0, i.jsx)(G, {
      listRef: f,
      selectedOptions: s,
      renderOptionPrefix: d,
      renderOptionSuffix: E,
      selectValue: a,
      focusNextItem: A,
      focusPreviousItem: N
    }), (0, i.jsx)(V, {
      style: {
        minWidth: "".concat(S, "ch")
      },
      className: o()(L.multi, I),
      query: t,
      placeholder: n,
      selectValue: a,
      selectedOptions: s,
      isEditing: u,
      isDisabled: _,
      inputRef: c,
      onKeyDown: e => {
        ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && s.length > 0 ? m() : l(e)
      },
      ...h
    })]
  })
}

function V(e) {
  let {
    query: t,
    inputId: n,
    "aria-describedby": r,
    "aria-invalid": s,
    "aria-required": a,
    "aria-labelledby": l,
    "aria-expanded": u,
    isDisabled: _,
    listboxId: d,
    activeDescendant: E,
    navigatorId: I,
    onChange: T,
    onFocus: h,
    setInputRef: S,
    isEditing: f,
    onKeyDown: N,
    placeholder: A,
    loading: m,
    style: O,
    className: R
  } = e;
  return (0, i.jsx)("input", {
    role: "combobox",
    id: n,
    "aria-haspopup": "listbox",
    "aria-invalid": s,
    "aria-labelledby": l,
    "aria-autocomplete": "list",
    "aria-expanded": u,
    "aria-describedby": r,
    "aria-disabled": _,
    "aria-controls": d,
    "aria-required": a,
    "aria-busy": m,
    style: null != O ? O : {},
    "aria-activedescendant": null != E ? (0, c.jb)(I, E) : "",
    disabled: _,
    value: null != t ? t : "",
    onChange: e => {
      T(e.target.value)
    },
    onFocus: h,
    className: o()(L.searchInput, R, {
      [L.editing]: f,
      [L.disabled]: _
    }),
    onKeyDown: N,
    placeholder: "" !== (null != t ? t : "").trim() ? void 0 : A,
    ref: S
  })
}

function Z(e) {
  let {
    option: t,
    focused: n,
    onClick: r,
    onKeyDown: s,
    renderOptionPrefix: o,
    renderOptionSuffix: a,
    children: l,
    isCustomPill: u
  } = e, _ = !u && (null == o ? void 0 : o(t, {
    inPill: !0,
    inDropdown: !1
  })), c = !u && (null == a ? void 0 : a(t, {
    inPill: !0,
    inDropdown: !1
  }));
  return (0, i.jsx)(I.t, {
    offset: 3,
    children: (0, i.jsxs)(d.zx, {
      look: d.zx.Looks.BLANK,
      tabIndex: n ? 0 : -1,
      "data-option-pill-value": t.value,
      className: L.optionPillBtn,
      innerClassName: u ? null : L.optionPill,
      onClick: () => null == r ? void 0 : r(t.value),
      onKeyDown: s,
      children: [l, null != _ && (0, i.jsx)("div", {
        className: L.prefix,
        children: _
      }), " ", null != c && (0, i.jsx)("div", {
        className: L.suffix,
        children: c
      }), (0, i.jsx)(h.n, {
        children: v.Z.Messages.REMOVE
      }), !u && (0, i.jsx)(m.CloseSmallIcon, {
        size: "custom",
        color: "currentColor",
        className: L.deleteOptionIcon,
        width: 14,
        height: 14
      })]
    })
  })
}