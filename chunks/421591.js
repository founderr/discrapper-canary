"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(566860),
  o = n(695676),
  a = n(173790),
  l = n(361917),
  u = n(684256),
  _ = n(987421);
t.Z = r.memo(function(e) {
  let t, {
      drawerRef: n,
      channel: c,
      entrypoint: d
    } = e,
    {
      history: E,
      setHistory: I,
      currentView: T,
      pushHistory: h,
      goBack: S
    } = function() {
      let [e, t] = r.useState([{
        type: o.gc.HOME
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
    f = s.K.useExperiment({
      location: "App Launcher Root"
    }, {
      autoTrackExposure: !0
    });
  switch (null == T ? void 0 : T.type) {
    case o.gc.HOME:
      t = (0, i.jsx)(l.Z, {
        channel: c,
        entrypoint: d,
        enableRecommendations: f.recommendationsEnabled,
        enableRecents: f.recentsDropdownEnabled
      });
      break;
    case o.gc.LIST:
      t = (0, i.jsx)(u.Z, {
        channel: c,
        entrypoint: d,
        title: T.title,
        look: T.look,
        items: T.items
      });
      break;
    case o.gc.APPLICATION:
      t = (0, i.jsx)(a.Z, {
        channel: c,
        application: T.application,
        sectionName: T.sectionName
      });
      break;
    default:
      t = null
  }
  return (0, i.jsx)("div", {
    className: _.drawerSizingWrapper,
    ref: n,
    children: (0, i.jsx)("div", {
      className: _.contentWrapper,
      children: (0, i.jsx)(o.uX.Provider, {
        value: {
          history: E,
          setHistory: I,
          currentView: T,
          pushHistory: h,
          goBack: S
        },
        children: t
      })
    })
  })
})