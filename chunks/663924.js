"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("374470"),
  l = n("952265"),
  u = n("481060"),
  d = n("410575"),
  _ = n("40851"),
  c = n("566860"),
  E = n("153850"),
  I = n("585483"),
  T = n("5967"),
  f = n("499254"),
  S = n("695676"),
  h = n("173790"),
  A = n("361917"),
  m = n("314734"),
  N = n("981631"),
  p = n("175323");

function O(e) {
  let t, {
      channel: n,
      closeOnModalOuterClick: s = !1,
      parentModalKey: a
    } = e,
    d = c.AppLauncherRecommendationsExperiment.useExperiment({
      location: "App Launcher Popup"
    }, {
      autoTrackExposure: !0
    }),
    E = r.useRef(null),
    {
      renderWindow: O,
      windowDispatch: C
    } = r.useContext(_.default),
    R = null != a,
    g = (0, l.useIsModalAtTop)(null != a ? a : ""),
    L = r.useCallback(e => {
      var t;
      if (!R && (0, l.hasAnyModalOpen)() || R && !(g && s)) return;
      let {
        target: n
      } = e;
      if ((0, o.isElement)(n) && null != n.closest("." + m.APP_LAUNCHER_ELEMENT_CLASSNAME)) return;
      for (;
        (0, o.isElement)(n);) {
        if (n === E.current) return;
        n = n.parentNode
      }
      f.dismissAppLauncherPopup();
      let i = null === (t = (0, T.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
      (null == i || "BODY" === i.tagName) && I.ComponentDispatch.dispatchToLastSubscribed(N.ComponentActions.TEXTAREA_FOCUS)
    }, [s, g, R]);
  r.useLayoutEffect(() => (O.addEventListener("mousedown", L), O.addEventListener("contextmenu", L), C.subscribe(N.ComponentActions.POPOUT_CLOSE, f.dismissAppLauncherPopup), () => {
    O.removeEventListener("mousedown", L), O.removeEventListener("contextmenu", L), C.unsubscribe(N.ComponentActions.POPOUT_CLOSE, f.dismissAppLauncherPopup)
  }), [L, O, C]), (0, u.useFocusLock)(E), r.useEffect(() => {
    (!R && (0, l.hasAnyModalOpen)() || R && !g) && f.dismissAppLauncherPopup()
  }, [g, R]);
  let {
    history: v,
    setHistory: D,
    currentView: M,
    pushHistory: y,
    goBack: P
  } = function() {
    let [e, t] = r.useState([{
      type: S.HistoryItemType.HOME
    }]), n = e[e.length - 1];
    return {
      history: e,
      setHistory: t,
      currentView: n,
      pushHistory: n => {
        t([...e, n])
      },
      goBack: () => {
        if (0 === e.length) return;
        let n = [...e];
        n.pop(), t(n)
      }
    }
  }();
  switch (null == M ? void 0 : M.type) {
    case S.HistoryItemType.HOME:
      t = (0, i.jsx)(A.default, {
        channel: n,
        enableRecommendations: d.enabled,
        enableRecents: d.recentsDropdownEnabled
      });
      break;
    case S.HistoryItemType.APPLICATION:
      t = (0, i.jsx)(h.default, {
        channel: n,
        application: M.application,
        sectionName: M.sectionName
      });
      break;
    default:
      t = null
  }
  return (0, i.jsx)("div", {
    className: p.drawerSizingWrapper,
    ref: E,
    children: (0, i.jsx)("div", {
      className: p.contentWrapper,
      children: (0, i.jsx)(S.AppLauncherHistoryContext.Provider, {
        value: {
          history: v,
          setHistory: D,
          currentView: M,
          pushHistory: y,
          goBack: P
        },
        children: t
      })
    })
  })
}
t.default = r.memo(function(e) {
  let {
    positionTargetRef: t,
    ...n
  } = e;
  return (0, i.jsx)(d.default, {
    section: N.AnalyticsSections.EXPRESSION_PICKER,
    children: (0, i.jsx)(E.AppReferencePositionLayer, {
      className: p.positionLayer,
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
          className: a()(p.positionContainer),
          role: "dialog",
          "aria-label": "Application Launcher",
          children: t && (0, i.jsx)(O, {
            ...n
          })
        })
      }
    })
  })
})