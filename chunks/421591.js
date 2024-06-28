"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(367907),
  o = n(541099),
  a = n(695676),
  l = n(173790),
  u = n(361917),
  _ = n(684256),
  c = n(981631),
  d = n(987421);
t.Z = r.memo(r.forwardRef(function(e, t) {
  let n, {
      channel: E,
      entrypoint: I
    } = e,
    [T, h] = r.useState(""),
    f = function(e) {
      let [t, n] = r.useState(null), i = r.useRef(0);
      return r.useEffect(() => {
        null == t || t.scrollTo(0, 0)
      }, [t, e]), r.useEffect(() => {
        if (null != t) return t.scrollTo(0, i.current), t.addEventListener("scroll", e), () => {
          t.removeEventListener("scroll", e, !1)
        };

        function e() {
          if (null != t) i.current = t.scrollTop
        }
      }, [t]), n
    }(T);
  r.useEffect(() => {
    (0, s.yw)(c.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
      source: I,
      location: "app_launcher"
    })
  }, [I]);
  let {
    history: S,
    setHistory: A,
    currentView: N,
    pushHistory: m,
    goBack: O
  } = function() {
    let [e, t] = r.useState([{
      type: a.gc.HOME
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
  switch (r.useEffect(() => {
      let e = Date.now();
      return () => {
        (0, s.yw)(c.rMx.APP_LAUNCHER_CLOSED, {
          reason: o.Z.closeReason(),
          time_spent: Date.now() - e,
          source: I
        })
      }
    }, [I]), null == N ? void 0 : N.type) {
    case a.gc.HOME:
      n = (0, i.jsx)(u.Z, {
        setScroller: f,
        channel: E,
        entrypoint: I,
        searchQuery: T,
        setSearchQuery: h
      });
      break;
    case a.gc.LIST:
      n = (0, i.jsx)(_.Z, {
        channel: E,
        entrypoint: I,
        title: N.title,
        look: N.look,
        items: N.items,
        sectionName: N.sectionName
      });
      break;
    case a.gc.APPLICATION:
      n = (0, i.jsx)(l.Z, {
        channel: E,
        application: N.application,
        sectionName: N.sectionName
      });
      break;
    default:
      n = null
  }
  return (0, i.jsx)("div", {
    className: d.drawerSizingWrapper,
    ref: t,
    children: (0, i.jsx)("div", {
      className: d.contentWrapper,
      children: (0, i.jsx)(a.uX.Provider, {
        value: {
          history: S,
          setHistory: A,
          currentView: N,
          pushHistory: m,
          goBack: O
        },
        children: n
      })
    })
  })
}))