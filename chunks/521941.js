l.d(n, {
  Z: function() {
    return a
  }
}), l(653041);
var t = l(470079),
  i = l(399606),
  s = l(45966);

function a(e) {
  let n = (0, i.Wu)([s.Z], () => s.Z.getEnabledOnboardingPrompts(e));
  return t.useMemo(() => {
    let e = 0,
      l = [],
      t = [],
      i = [],
      s = [];
    for (var a = 0; a < n.length; a++) {
      let r = n[a];
      r.isNew ? l.push(r) : r.hasNewAnswers ? (t.push(r), e += r.options.filter(e => e.isUnseen).length) : r.inOnboarding ? s.push(r) : i.push(r)
    }
    return {
      onboardingPromptsRaw: n,
      newOnboardingPrompts: l,
      onboardingPromptsWithNewAnswers: t,
      newAnswersCount: e,
      onboardingPrompts: i.concat(s)
    }
  }, [n])
}