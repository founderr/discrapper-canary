"use strict";
n.r(t), n.d(t, {
  useClanSetupModalNavigation: function() {
    return i
  }
});
var l = n("470079"),
  a = n("246364"),
  s = n("308083");

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
  } = t, h = l.useMemo(() => null != f && f.formFields.some(e => !(0, a.isTermsFormField)(e)), [f]), p = l.useMemo(() => Array.from(u).filter(e => !s.ALL_TRAITS_SET.has(e) && !s.LANGUAGES_SET.has(e)), [u]), m = l.useCallback(() => {
    n(i + 1)
  }, [i, n]), C = l.useCallback(() => {
    n(i - 1)
  }, [i, n]), g = l.useCallback(e => n(e), [n]), E = l.useMemo(() => {
    switch (i) {
      case s.ClanSetupSteps.GAMES:
        return 0 === r.size;
      case s.ClanSetupSteps.PLAYSTYLE:
        return o === s.ClanPlaystyles.NONE;
      case s.ClanSetupSteps.INTERESTS:
        return p.length < 3;
      case s.ClanSetupSteps.DESCRIPTION:
        return 0 === d.length;
      case s.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
        return c.length < 2;
      case s.ClanSetupSteps.MEMBER_APPLICATION:
        return !h;
      default:
        return !1
    }
  }, [i, d.length, r.size, h, p.length, o, c.length]), S = 0 === i;
  return l.useMemo(() => ({
    onStepClick: g,
    onNextClick: m,
    onBackClick: C,
    isNextDisabled: E,
    isBackDisabled: S
  }), [S, E, C, m, g])
}