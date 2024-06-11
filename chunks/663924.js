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
  c = n("153850"),
  E = n("585483"),
  I = n("5967"),
  T = n("499254"),
  f = n("695676"),
  S = n("173790"),
  h = n("361917"),
  A = n("314734"),
  m = n("981631"),
  N = n("175323");
t.default = r.memo(function(e) {
  let t, {
      positionTargetRef: n,
      channel: s,
      closeOnModalOuterClick: p = !1,
      parentModalKey: O
    } = e,
    C = r.useRef(null),
    R = r.useRef(null),
    {
      renderWindow: g,
      windowDispatch: L
    } = r.useContext(_.default),
    v = null != O,
    D = (0, l.useIsModalAtTop)(null != O ? O : ""),
    M = () => {
      T.dismissAppLauncherPopup()
    },
    y = r.useCallback(e => {
      var t;
      if (!v && (0, l.hasAnyModalOpen)() || v && !(D && p)) return;
      let {
        target: n
      } = e;
      if ((0, o.isElement)(n) && null != n.closest("." + A.APP_LAUNCHER_ELEMENT_CLASSNAME)) return;
      for (;
        (0, o.isElement)(n);) {
        if (n === R.current) return;
        n = n.parentNode
      }
      M();
      let i = null === (t = (0, I.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
      (null == i || "BODY" === i.tagName) && E.ComponentDispatch.dispatchToLastSubscribed(m.ComponentActions.TEXTAREA_FOCUS)
    }, [p, D, v]),
    P = r.useCallback(() => {
      M()
    }, []);
  r.useLayoutEffect(() => (g.addEventListener("mousedown", y), g.addEventListener("contextmenu", y), L.subscribe(m.ComponentActions.POPOUT_CLOSE, P), () => {
    g.removeEventListener("mousedown", y), g.removeEventListener("contextmenu", y), L.unsubscribe(m.ComponentActions.POPOUT_CLOSE, P)
  }), [P, y, g, L]), (0, u.useFocusLock)(C), r.useEffect(() => {
    (!v && (0, l.hasAnyModalOpen)() || v && !D) && M()
  }, [D, v]);
  let {
    history: U,
    setHistory: b,
    currentView: G,
    pushHistory: w,
    goBack: k
  } = function() {
    let [e, t] = r.useState([{
      type: f.HistoryItemType.HOME
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
  switch (null == G ? void 0 : G.type) {
    case f.HistoryItemType.HOME:
      t = (0, i.jsx)(h.default, {
        channel: s
      });
      break;
    case f.HistoryItemType.APPLICATION:
      t = (0, i.jsx)(S.default, {
        channel: s,
        application: G.application,
        sectionName: G.sectionName
      });
      break;
    default:
      t = null
  }
  return (0, i.jsx)(d.default, {
    section: m.AnalyticsSections.EXPRESSION_PICKER,
    children: (0, i.jsx)(c.AppReferencePositionLayer, {
      className: N.positionLayer,
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
          className: a()(N.positionContainer),
          ref: C,
          role: "dialog",
          "aria-label": "Application Launcher",
          children: n ? (0, i.jsxs)("div", {
            className: N.drawerSizingWrapper,
            ref: R,
            children: [(0, i.jsx)("div", {
              className: N.resizeHandle
            }), (0, i.jsx)("div", {
              className: N.contentWrapper,
              children: (0, i.jsx)(f.AppLauncherHistoryContext.Provider, {
                value: {
                  history: U,
                  setHistory: b,
                  currentView: G,
                  pushHistory: w,
                  goBack: k
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