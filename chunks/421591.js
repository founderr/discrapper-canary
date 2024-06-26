"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(367907),
  o = n(566860),
  a = n(596359),
  l = n(541099),
  u = n(695676),
  _ = n(173790),
  c = n(361917),
  d = n(684256),
  E = n(981631),
  I = n(987421);
t.Z = r.memo(function(e) {
  let t, {
      drawerRef: n,
      channel: T,
      entrypoint: h
    } = e,
    [f, S] = r.useState("");
  r.useEffect(() => {
    (0, s.yw)(E.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
      source: h,
      location: "app_launcher"
    })
  }, [h]);
  let {
    history: N,
    setHistory: A,
    currentView: m,
    pushHistory: O,
    goBack: p
  } = function() {
    let [e, t] = r.useState([{
      type: u.gc.HOME
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
  r.useEffect(() => {
    let e = Date.now();
    return () => {
      (0, s.yw)(E.rMx.APP_LAUNCHER_CLOSED, {
        reason: l.Z.closeReason(),
        time_spent: Date.now() - e,
        source: h
      })
    }
  }, [h]);
  let R = o.K.useExperiment({
      location: "App Launcher Root"
    }, {
      autoTrackExposure: !0
    }),
    g = a.$.useExperiment({
      location: "App Launcher Root"
    }, {
      autoTrackExposure: !0
    });
  switch (null == m ? void 0 : m.type) {
    case u.gc.HOME:
      t = (0, i.jsx)(c.Z, {
        channel: T,
        entrypoint: h,
        searchQuery: f,
        setSearchQuery: S,
        enableRecommendations: R.recommendationsEnabled,
        enableRecents: R.recentsDropdownEnabled,
        enableGlobalSearch: g.enabled
      });
      break;
    case u.gc.LIST:
      t = (0, i.jsx)(d.Z, {
        channel: T,
        entrypoint: h,
        title: m.title,
        look: m.look,
        items: m.items,
        sectionName: m.sectionName
      });
      break;
    case u.gc.APPLICATION:
      t = (0, i.jsx)(_.Z, {
        channel: T,
        application: m.application,
        sectionName: m.sectionName
      });
      break;
    default:
      t = null
  }
  return (0, i.jsx)("div", {
    className: I.drawerSizingWrapper,
    ref: n,
    children: (0, i.jsx)("div", {
      className: I.contentWrapper,
      children: (0, i.jsx)(u.uX.Provider, {
        value: {
          history: N,
          setHistory: A,
          currentView: m,
          pushHistory: O,
          goBack: p
        },
        children: t
      })
    })
  })
})