"use strict";
n.r(t), n.d(t, {
  useClanSetupModalNavigation: function() {
    return l
  }
});
var a = n("470079"),
  s = n("246364"),
  i = n("308083");

function l(e) {
  let {
    progress: t,
    updateCurrentStep: n
  } = e, {
    currentStep: l,
    gameApplicationIds: r,
    playstyle: o,
    interests: u,
    description: d,
    tag: c,
    verificationForm: f
  } = t, E = a.useMemo(() => null != f && f.formFields.some(e => !(0, s.isTermsFormField)(e)), [f]), h = a.useMemo(() => Array.from(u).filter(e => !i.ALL_TRAITS_SET.has(e) && !i.LANGUAGES_SET.has(e)), [u]), _ = a.useCallback(() => {
    n(l + 1)
  }, [l, n]), C = a.useCallback(() => {
    n(l - 1)
  }, [l, n]), m = a.useCallback(e => n(e), [n]), p = a.useMemo(() => {
    switch (l) {
      case i.ClanSetupSteps.GAMES:
        return 0 === r.size;
      case i.ClanSetupSteps.PLAYSTYLE:
        return o === i.ClanPlaystyles.NONE;
      case i.ClanSetupSteps.INTERESTS:
        return h.length < 3;
      case i.ClanSetupSteps.DESCRIPTION:
        return 0 === d.length;
      case i.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
        return c.length < 2;
      case i.ClanSetupSteps.MEMBER_APPLICATION:
        return !E;
      default:
        return !1
    }
  }, [l, d.length, r.size, E, h.length, o, c.length]), S = 0 === l;
  return a.useMemo(() => ({
    onStepClick: m,
    onNextClick: _,
    onBackClick: C,
    isNextDisabled: p,
    isBackDisabled: S
  }), [S, p, C, _, m])
}