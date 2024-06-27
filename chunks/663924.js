var i = n(735250),
  a = n(470079),
  l = n(374470),
  s = n(952265),
  r = n(481060),
  o = n(40851),
  c = n(153850),
  u = n(585483),
  d = n(5967),
  h = n(499254),
  p = n(827498),
  m = n(421591),
  _ = n(314734),
  f = n(981631),
  E = n(368498);

function C() {
  h.y(p.ti.DISMISSED)
}

function g(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = !1,
    parentModalKey: c
  } = e, h = a.useRef(null), {
    renderWindow: E,
    windowDispatch: g
  } = a.useContext(o.ZP), I = null != c, x = (0, s.Jw)(null != c ? c : ""), T = a.useCallback(e => {
    var t;
    if (!I && (0, s.$s)() || I && !(x && n)) return;
    let {
      target: i
    } = e;
    if ((0, l.k)(i) && null != i.closest("." + _.Jh)) return;
    for (;
      (0, l.k)(i);) {
      if (i === h.current) return;
      if (i.classList.contains(_.t4)) {
        e.preventDefault();
        return
      }
      i = i.parentNode
    }
    C();
    let a = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
    (null == a || "BODY" === a.tagName) && u.S.dispatchToLastSubscribed(f.CkL.TEXTAREA_FOCUS)
  }, [n, x, I]);
  return a.useLayoutEffect(() => (E.addEventListener("mousedown", T), E.addEventListener("contextmenu", T), g.subscribe(f.CkL.POPOUT_CLOSE, C), () => {
    E.removeEventListener("mousedown", T), E.removeEventListener("contextmenu", T), g.unsubscribe(f.CkL.POPOUT_CLOSE, C)
  }), [T, E, g]), (0, r.useFocusLock)(h), a.useEffect(() => {
    (!I && (0, s.$s)() || I && !x) && C()
  }, [x, I]), (0, i.jsx)(m.Z, {
    ref: h,
    channel: t,
    entrypoint: p._b.TEXT
  })
}
t.Z = a.memo(function(e) {
  let {
    positionTargetRef: t,
    ...n
  } = e;
  return (0, i.jsx)(c.W5, {
    className: E.positionLayer,
    targetRef: t,
    position: "top",
    align: "right",
    spacing: 8,
    autoInvert: !0,
    children: e => {
      let {
        isPositioned: t
      } = e;
      return (0, i.jsx)("section", {
        className: E.positionContainer,
        role: "dialog",
        "aria-label": "Application Launcher",
        children: t && (0, i.jsx)(g, {
          ...n
        })
      })
    }
  })
})