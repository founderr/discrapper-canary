"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("374470"),
  a = n("952265"),
  o = n("481060"),
  l = n("40851"),
  u = n("153850"),
  d = n("585483"),
  _ = n("5967"),
  c = n("499254"),
  E = n("421591"),
  I = n("314734"),
  T = n("981631"),
  f = n("175323");

function S(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = !1,
    parentModalKey: u
  } = e, f = r.useRef(null), {
    renderWindow: S,
    windowDispatch: h
  } = r.useContext(l.default), A = null != u, m = (0, a.useIsModalAtTop)(null != u ? u : ""), N = r.useCallback(e => {
    var t;
    if (!A && (0, a.hasAnyModalOpen)() || A && !(m && n)) return;
    let {
      target: i
    } = e;
    if ((0, s.isElement)(i) && null != i.closest("." + I.APP_LAUNCHER_ELEMENT_CLASSNAME)) return;
    for (;
      (0, s.isElement)(i);) {
      if (i === f.current) return;
      i = i.parentNode
    }
    c.dismissAppLauncher();
    let r = null === (t = (0, _.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
    (null == r || "BODY" === r.tagName) && d.ComponentDispatch.dispatchToLastSubscribed(T.ComponentActions.TEXTAREA_FOCUS)
  }, [n, m, A]);
  return r.useLayoutEffect(() => (S.addEventListener("mousedown", N), S.addEventListener("contextmenu", N), h.subscribe(T.ComponentActions.POPOUT_CLOSE, c.dismissAppLauncher), () => {
    S.removeEventListener("mousedown", N), S.removeEventListener("contextmenu", N), h.unsubscribe(T.ComponentActions.POPOUT_CLOSE, c.dismissAppLauncher)
  }), [N, S, h]), (0, o.useFocusLock)(f), r.useEffect(() => {
    (!A && (0, a.hasAnyModalOpen)() || A && !m) && c.dismissAppLauncher()
  }, [m, A]), (0, i.jsx)(E.default, {
    drawerRef: f,
    channel: t
  })
}
t.default = r.memo(function(e) {
  let {
    positionTargetRef: t,
    ...n
  } = e;
  return (0, i.jsx)(u.AppReferencePositionLayer, {
    className: f.positionLayer,
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
        className: f.positionContainer,
        role: "dialog",
        "aria-label": "Application Launcher",
        children: t && (0, i.jsx)(S, {
          ...n
        })
      })
    }
  })
})