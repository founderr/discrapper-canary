t.d(n, {
  Z: function() {
    return o
  }
}), t(47120);
var s = t(470079),
  l = t(512722),
  a = t.n(l),
  i = t(157925),
  r = t(765305);

function o(e) {
  let {
    stageInstance: n,
    defaultStep: t,
    error: l,
    onSave: o
  } = e, [c, d] = s.useState(t), [u, E] = s.useState(), [_, T] = s.useState(null);
  return s.useEffect(() => {
    null != l && d(i.lv.STAGE_CHANNEL_SETTINGS)
  }, [l]), {
    modalStep: c,
    setModalStep: d,
    readySlide: _,
    handleSlideReady: function(e) {
      return T(e)
    },
    savedOptions: u,
    handleSettingsSave: function(e) {
      if (E(e), e.privacyLevel === r.j8.PUBLIC && (null == n ? void 0 : n.privacy_level) !== r.j8.PUBLIC) {
        d(i.lv.PUBLIC_STAGE_PREVIEW);
        return
      }
      o(e)
    },
    handleDelayedSave: function() {
      a()(null != u, "Must have some saved options."), o(u)
    }
  }
}