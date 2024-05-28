"use strict";
n.r(t), n.d(t, {
  useClanSetupModalNavigation: function() {
    return i
  }
});
var a = n("470079"),
  s = n("246364"),
  l = n("308083");

function i(e) {
  let {
    progress: t,
    updateCurrentStep: n
  } = e, {
    currentStep: i,
    gameApplicationIds: r,
    playstyle: o,
    interests: u,
    description: d,
    tag: c,
    verificationForm: f
  } = t, E = a.useMemo(() => null != f && f.formFields.some(e => !(0, s.isTermsFormField)(e)), [f]), C = a.useMemo(() => Array.from(u).filter(e => !l.ALL_TRAITS_SET.has(e) && !l.LANGUAGES_SET.has(e)), [u]), h = a.useCallback(() => {
    n(i + 1)
  }, [i, n]), _ = a.useCallback(() => {
    n(i - 1)
  }, [i, n]), S = a.useCallback(e => n(e), [n]), m = a.useMemo(() => {
    switch (i) {
      case l.ClanSetupSteps.GAMES:
        return 0 === r.size;
      case l.ClanSetupSteps.PLAYSTYLE:
        return o === l.ClanPlaystyles.NONE;
      case l.ClanSetupSteps.INTERESTS:
        return C.length < 3;
      case l.ClanSetupSteps.DESCRIPTION:
        return 0 === d.length;
      case l.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
        return c.length < 2;
      case l.ClanSetupSteps.MEMBER_APPLICATION:
        return !E;
      default:
        return !1
    }
  }, [i, d.length, r.size, E, C.length, o, c.length]), p = 0 === i;
  return a.useMemo(() => ({
    onStepClick: S,
    onNextClick: h,
    onBackClick: _,
    isNextDisabled: m,
    isBackDisabled: p
  }), [p, m, _, h, S])
}