"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(566860),
  o = n(596359),
  a = n(695676),
  l = n(173790),
  u = n(361917),
  _ = n(684256),
  c = n(987421);
t.Z = r.memo(function(e) {
  let t, {
      drawerRef: n,
      channel: d,
      entrypoint: E
    } = e,
    {
      history: I,
      setHistory: T,
      currentView: h,
      pushHistory: f,
      goBack: S
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
    }(),
    [A, N] = r.useState(""),
    m = s.K.useExperiment({
      location: "App Launcher Root"
    }, {
      autoTrackExposure: !0
    }),
    O = o.$.useExperiment({
      location: "App Launcher Root"
    }, {
      autoTrackExposure: !0
    });
  switch (null == h ? void 0 : h.type) {
    case a.gc.HOME:
      t = (0, i.jsx)(u.Z, {
        channel: d,
        entrypoint: E,
        searchQuery: A,
        setSearchQuery: N,
        enableRecommendations: m.recommendationsEnabled,
        enableRecents: m.recentsDropdownEnabled,
        enableGlobalSearch: O.enabled
      });
      break;
    case a.gc.LIST:
      t = (0, i.jsx)(_.Z, {
        channel: d,
        entrypoint: E,
        title: h.title,
        look: h.look,
        items: h.items
      });
      break;
    case a.gc.APPLICATION:
      t = (0, i.jsx)(l.Z, {
        channel: d,
        application: h.application,
        sectionName: h.sectionName
      });
      break;
    default:
      t = null
  }
  return (0, i.jsx)("div", {
    className: c.drawerSizingWrapper,
    ref: n,
    children: (0, i.jsx)("div", {
      className: c.contentWrapper,
      children: (0, i.jsx)(a.uX.Provider, {
        value: {
          history: I,
          setHistory: T,
          currentView: h,
          pushHistory: f,
          goBack: S
        },
        children: t
      })
    })
  })
})