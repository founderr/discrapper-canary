t(47120);
var i = t(735250),
  l = t(470079),
  a = t(367907),
  r = t(541099),
  s = t(695676),
  o = t(173790),
  c = t(361917),
  u = t(684256),
  d = t(981631),
  m = t(987421);
n.Z = l.memo(l.forwardRef(function(e, n) {
  let t, {
      channel: p,
      entrypoint: h
    } = e,
    [N, _] = l.useState("");
  l.useEffect(() => {
    (0, a.yw)(d.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
      source: h,
      location: "app_launcher"
    })
  }, [h]);
  let {
    history: E,
    setHistory: C,
    currentView: A,
    pushHistory: f,
    goBack: x
  } = function() {
    let [e, n] = l.useState([{
      type: s.gc.HOME
    }]), t = e[e.length - 1];
    return {
      history: e,
      setHistory: n,
      currentView: t,
      pushHistory: t => {
        n([...e, t])
      },
      goBack: () => {
        if (0 === e.length) return;
        let t = [...e];
        t.pop(), n(t)
      }
    }
  }();
  switch (l.useEffect(() => {
      let e = Date.now();
      return () => {
        (0, a.yw)(d.rMx.APP_LAUNCHER_CLOSED, {
          reason: r.Z.closeReason(),
          time_spent: Date.now() - e,
          source: h
        })
      }
    }, [h]), null == A ? void 0 : A.type) {
    case s.gc.HOME:
      t = (0, i.jsx)(c.Z, {
        channel: p,
        entrypoint: h,
        searchQuery: N,
        setSearchQuery: _
      });
      break;
    case s.gc.LIST:
      t = (0, i.jsx)(u.Z, {
        channel: p,
        entrypoint: h,
        title: A.title,
        look: A.look,
        items: A.items,
        sectionName: A.sectionName
      });
      break;
    case s.gc.APPLICATION:
      t = (0, i.jsx)(o.Z, {
        channel: p,
        application: A.application,
        sectionName: A.sectionName
      });
      break;
    default:
      t = null
  }
  return (0, i.jsx)("div", {
    className: m.drawerSizingWrapper,
    ref: n,
    children: (0, i.jsx)("div", {
      className: m.contentWrapper,
      children: (0, i.jsx)(s.uX.Provider, {
        value: {
          history: E,
          setHistory: C,
          currentView: A,
          pushHistory: f,
          goBack: x
        },
        children: t
      })
    })
  })
}))