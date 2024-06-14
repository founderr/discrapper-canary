"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("566860"),
  a = n("695676"),
  o = n("173790"),
  l = n("361917"),
  u = n("579539");
t.default = r.memo(function(e) {
  let t, {
      drawerRef: n,
      channel: d
    } = e,
    {
      history: _,
      setHistory: c,
      currentView: E,
      pushHistory: I,
      goBack: T
    } = function() {
      let [e, t] = r.useState([{
        type: a.HistoryItemType.HOME
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
    f = s.AppLauncherRecommendationsExperiment.useExperiment({
      location: "App Launcher Root"
    }, {
      autoTrackExposure: !0
    });
  switch (null == E ? void 0 : E.type) {
    case a.HistoryItemType.HOME:
      t = (0, i.jsx)(l.default, {
        channel: d,
        enableRecommendations: f.recommendationsEnabled,
        enableRecents: f.recentsDropdownEnabled
      });
      break;
    case a.HistoryItemType.APPLICATION:
      t = (0, i.jsx)(o.default, {
        channel: d,
        application: E.application,
        sectionName: E.sectionName
      });
      break;
    default:
      t = null
  }
  return (0, i.jsx)("div", {
    className: u.drawerSizingWrapper,
    ref: n,
    children: (0, i.jsx)("div", {
      className: u.contentWrapper,
      children: (0, i.jsx)(a.AppLauncherHistoryContext.Provider, {
        value: {
          history: _,
          setHistory: c,
          currentView: E,
          pushHistory: I,
          goBack: T
        },
        children: t
      })
    })
  })
})