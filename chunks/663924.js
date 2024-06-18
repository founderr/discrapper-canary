"use strict";
var i = n(735250),
  r = n(470079),
  s = n(374470),
  o = n(952265),
  a = n(481060),
  l = n(40851),
  u = n(153850),
  _ = n(585483),
  c = n(5967),
  d = n(499254),
  E = n(827498),
  I = n(421591),
  T = n(314734),
  h = n(981631),
  S = n(175323);

function f(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = !1,
    parentModalKey: u
  } = e, S = r.useRef(null), {
    renderWindow: f,
    windowDispatch: N
  } = r.useContext(l.ZP), A = null != u, m = (0, o.Jw)(null != u ? u : ""), O = r.useCallback(e => {
    var t;
    if (!A && (0, o.$s)() || A && !(m && n)) return;
    let {
      target: i
    } = e;
    if ((0, s.k)(i) && null != i.closest("." + T.Jh)) return;
    for (;
      (0, s.k)(i);) {
      if (i === S.current) return;
      i = i.parentNode
    }
    d.y();
    let r = null === (t = (0, c.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
    (null == r || "BODY" === r.tagName) && _.S.dispatchToLastSubscribed(h.CkL.TEXTAREA_FOCUS)
  }, [n, m, A]);
  return r.useLayoutEffect(() => (f.addEventListener("mousedown", O), f.addEventListener("contextmenu", O), N.subscribe(h.CkL.POPOUT_CLOSE, d.y), () => {
    f.removeEventListener("mousedown", O), f.removeEventListener("contextmenu", O), N.unsubscribe(h.CkL.POPOUT_CLOSE, d.y)
  }), [O, f, N]), (0, a.useFocusLock)(S), r.useEffect(() => {
    (!A && (0, o.$s)() || A && !m) && d.y()
  }, [m, A]), (0, i.jsx)(I.Z, {
    drawerRef: S,
    channel: t,
    entrypoint: E._.TEXT
  })
}
t.Z = r.memo(function(e) {
  let {
    positionTargetRef: t,
    ...n
  } = e;
  return (0, i.jsx)(u.W5, {
    className: S.positionLayer,
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
        className: S.positionContainer,
        role: "dialog",
        "aria-label": "Application Launcher",
        children: t && (0, i.jsx)(f, {
          ...n
        })
      })
    }
  })
})