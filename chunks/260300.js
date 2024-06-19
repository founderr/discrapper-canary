var l = n(544891),
  i = n(570140),
  s = n(981631);
t.Z = {
  show(e, t) {
    i.Z.wait(() => i.Z.dispatch({
      type: "TUTORIAL_INDICATOR_SHOW",
      tutorialId: e,
      renderData: t
    }))
  },
  hide(e) {
    i.Z.wait(() => i.Z.dispatch({
      type: "TUTORIAL_INDICATOR_HIDE",
      tutorialId: e
    }))
  },
  dismiss(e) {
    i.Z.wait(() => i.Z.dispatch({
      type: "TUTORIAL_INDICATOR_DISMISS",
      tutorialId: e
    })), l.tn.put({
      url: s.ANM.TUTORIAL_INDICATOR(e),
      oldFormErrors: !0
    })
  },
  suppressAll() {
    i.Z.dispatch({
      type: "TUTORIAL_INDICATOR_SUPPRESS_ALL"
    }), l.tn.post({
      url: s.ANM.TUTORIAL_INDICATORS_SUPPRESS,
      oldFormErrors: !0
    })
  }
}