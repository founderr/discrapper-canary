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
t.default = r.memo(function(e) {
  let t, {
      positionTargetRef: n,
      channel: s,
      closeOnModalOuterClick: O = !1,
      parentModalKey: C
    } = e,
    R = c.AppLauncherRecommendationsExperiment.useExperiment({
      location: "App Launcher Popup"
    }, {
      autoTrackExposure: !0
    }),
    g = r.useRef(null),
    L = r.useRef(null),
    {
      renderWindow: v,
      windowDispatch: D
    } = r.useContext(_.default),
    M = null != C,
    y = (0, l.useIsModalAtTop)(null != C ? C : ""),
    P = () => {
      f.dismissAppLauncherPopup()
    },
    U = r.useCallback(e => {
      var t;
      if (!M && (0, l.hasAnyModalOpen)() || M && !(y && O)) return;
      let {
        target: n
      } = e;
      if ((0, o.isElement)(n) && null != n.closest("." + m.APP_LAUNCHER_ELEMENT_CLASSNAME)) return;
      for (;
        (0, o.isElement)(n);) {
        if (n === L.current) return;
        n = n.parentNode
      }
      P();
      let i = null === (t = (0, T.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
      (null == i || "BODY" === i.tagName) && I.ComponentDispatch.dispatchToLastSubscribed(N.ComponentActions.TEXTAREA_FOCUS)
    }, [O, y, M]),
    b = r.useCallback(() => {
      P()
    }, []);
  r.useLayoutEffect(() => (v.addEventListener("mousedown", U), v.addEventListener("contextmenu", U), D.subscribe(N.ComponentActions.POPOUT_CLOSE, b), () => {
    v.removeEventListener("mousedown", U), v.removeEventListener("contextmenu", U), D.unsubscribe(N.ComponentActions.POPOUT_CLOSE, b)
  }), [b, U, v, D]), (0, u.useFocusLock)(g), r.useEffect(() => {
    (!M && (0, l.hasAnyModalOpen)() || M && !y) && P()
  }, [y, M]);
  let {
    history: G,
    setHistory: w,
    currentView: k,
    pushHistory: B,
    goBack: x
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
  switch (null == k ? void 0 : k.type) {
    case S.HistoryItemType.HOME:
      t = (0, i.jsx)(A.default, {
        channel: s,
        enableRecommendations: R.enabled,
        enableRecents: R.recentsDropdownEnabled
      });
      break;
    case S.HistoryItemType.APPLICATION:
      t = (0, i.jsx)(h.default, {
        channel: s,
        application: k.application,
        sectionName: k.sectionName
      });
      break;
    default:
      t = null
  }
  return (0, i.jsx)(d.default, {
    section: N.AnalyticsSections.EXPRESSION_PICKER,
    children: (0, i.jsx)(E.AppReferencePositionLayer, {
      className: p.positionLayer,
      targetRef: n,
      position: "top",
      align: "right",
      spacing: 8,
      autoInvert: !0,
      children: e => {
        let {
          isPositioned: n
        } = e;
        return (0, i.jsx)("section", {
          className: a()(p.positionContainer),
          ref: g,
          role: "dialog",
          "aria-label": "Application Launcher",
          children: n ? (0, i.jsxs)("div", {
            className: p.drawerSizingWrapper,
            ref: L,
            children: [(0, i.jsx)("div", {
              className: p.resizeHandle
            }), (0, i.jsx)("div", {
              className: p.contentWrapper,
              children: (0, i.jsx)(S.AppLauncherHistoryContext.Provider, {
                value: {
                  history: G,
                  setHistory: w,
                  currentView: k,
                  pushHistory: B,
                  goBack: x
                },
                children: t
              })
            })]
          }) : null
        })
      }
    })
  })
})