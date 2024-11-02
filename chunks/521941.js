t.d(n, {
    Z: function () {
        return r;
    }
}),
    t(653041);
var l = t(192379),
    a = t(399606),
    i = t(45966);
function r(e) {
    let n = (0, a.Wu)([i.Z], () => i.Z.getEnabledOnboardingPrompts(e));
    return l.useMemo(() => {
        let e = 0,
            t = [],
            l = [],
            a = [],
            i = [];
        for (var r = 0; r < n.length; r++) {
            let o = n[r];
            o.isNew ? t.push(o) : o.hasNewAnswers ? (l.push(o), (e += o.options.filter((e) => e.isUnseen).length)) : o.inOnboarding ? i.push(o) : a.push(o);
        }
        return {
            onboardingPromptsRaw: n,
            newOnboardingPrompts: t,
            onboardingPromptsWithNewAnswers: l,
            newAnswersCount: e,
            onboardingPrompts: a.concat(i)
        };
    }, [n]);
}
