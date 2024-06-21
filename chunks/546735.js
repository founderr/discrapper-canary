n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(470079),
  s = n(246364),
  l = n(308083);

function a(e) {
  let {
    progress: t,
    updateCurrentStep: n
  } = e, {
    currentStep: a,
    gameApplicationIds: r,
    playstyle: o,
    interests: c,
    description: u,
    tag: d,
    verificationForm: E
  } = t, h = i.useMemo(() => null != E && E.formFields.some(e => !(0, s.J)(e)), [E]), _ = i.useMemo(() => Array.from(c).filter(e => !l.WZ.has(e) && !l.gh.has(e)), [c]), I = i.useCallback(() => {
    n(a + 1)
  }, [a, n]), m = i.useCallback(() => {
    n(a - 1)
  }, [a, n]), g = i.useCallback(e => n(e), [n]), p = i.useMemo(() => {
    switch (a) {
      case l.Wy.GAMES:
        return 0 === r.size;
      case l.Wy.PLAYSTYLE:
        return o === l.zv.NONE;
      case l.Wy.INTERESTS:
        return _.length < 3;
      case l.Wy.DESCRIPTION:
        return 0 === u.length;
      case l.Wy.CUSTOMIZE_TAG_BADGE:
        return d.length < 2;
      case l.Wy.MEMBER_APPLICATION:
        return !h;
      default:
        return !1
    }
  }, [a, u.length, r.size, h, _.length, o, d.length]), N = 0 === a;
  return i.useMemo(() => ({
    onStepClick: g,
    onNextClick: I,
    onBackClick: m,
    isNextDisabled: p,
    isBackDisabled: N
  }), [N, p, m, I, g])
}