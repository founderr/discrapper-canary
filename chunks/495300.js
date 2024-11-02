n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(605236),
    u = n(621923),
    m = n(768762),
    h = n(999382),
    g = n(743475),
    x = n(983135),
    p = n(570961),
    f = n(208665),
    C = n(359191),
    I = n(84658),
    _ = n(142961),
    N = n(729311),
    v = n(850864),
    T = n(729995),
    j = n(966301),
    E = n(707076),
    S = n(213956),
    b = n(388032),
    R = n(930261);
function Z() {
    let e = (0, a.e7)([h.Z], () => h.Z.getGuildId());
    return null == e ? null : (0, i.jsx)(A, { guildId: e });
}
function A(e) {
    let t,
        { guildId: n } = e,
        l = (0, a.e7)([C.Z], () => C.Z.getCurrentPage()),
        h = (0, a.e7)([C.Z], () => {
            let e = (0, I.lg)(l);
            return null != e && !C.Z.isEducationUpsellDismissed(e);
        }),
        f = (0, _.Z)(n),
        Z = !f && h,
        { homeSettingsEnabled: A } = (0, u.kZ)(n);
    switch (
        (r.useEffect(() => {
            (0, d.EW)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case I.PG.LANDING:
            t = f
                ? (0, i.jsx)(T.Z, {
                      completed: !0,
                      guildId: n
                  })
                : (0, i.jsx)(E.Z, {});
            break;
        case I.PG.SAFETY_CHECK:
            t = (0, i.jsx)(S.Z, { hideChangelog: !0 });
            break;
        case I.PG.DEFAULT_CHANNELS:
            t = (0, i.jsx)(N.Z, { saveOnClose: !f });
            break;
        case I.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, i.jsx)(j.ZP, { saveOnClose: !f });
            break;
        case I.PG.HOME_SETTINGS:
            t = (0, i.jsx)(v.Z, { saveOnClose: !f });
            break;
        case I.PG.REVIEW:
            t = (0, i.jsx)(T.Z, {
                completed: f,
                guildId: n
            });
    }
    return (0, i.jsxs)('div', {
        className: s()(R.onboardingContainer, { [R.upsellOnTop]: Z }),
        children: [
            !f &&
                l !== I.PG.LANDING &&
                (0, i.jsx)(L, {
                    setOnboardingStep: x.$K,
                    page: l,
                    homeSettingsEnabled: A
                }),
            f &&
                l !== I.PG.LANDING &&
                (0, i.jsx)('div', {
                    children: (0, i.jsxs)(c.Button, {
                        innerClassName: R.backButton,
                        look: c.Button.Looks.BLANK,
                        size: c.Button.Sizes.MIN,
                        onClick: () => {
                            (0, p.NB)(), (0, g.BG)(), (0, x.$K)(I.PG.LANDING);
                        },
                        children: [
                            (0, i.jsx)(m.Z, {
                                className: R.arrow,
                                direction: m.Z.Directions.LEFT
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: b.intl.string(b.t['13/7kZ'])
                            })
                        ]
                    })
                }),
            (0, i.jsx)('div', { children: t })
        ]
    });
}
function L(e) {
    let { page: t, setOnboardingStep: n, homeSettingsEnabled: r } = e,
        l = (0, a.e7)([C.Z], () => C.Z.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        d = (0, a.e7)([f.Z], () => f.Z.advancedMode);
    return (0, i.jsxs)('div', {
        className: R.progressContainer,
        children: [
            (0, i.jsxs)(c.Clickable, {
                className: s()(R.progressBarContainer, R.clickableProgressBar),
                onClick: o(I.PG.SAFETY_CHECK),
                children: [
                    (0, i.jsx)('div', { className: s()(R.progressBar, { [R.progressBarCurrent]: t === I.PG.SAFETY_CHECK }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === I.PG.SAFETY_CHECK ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: b.intl.format(b.t.Me5MmZ, { stepNumber: 1 })
                    })
                ]
            }),
            (0, i.jsxs)(c.Clickable, {
                className: s()(R.progressBarContainer, R.clickableProgressBar),
                onClick: o(I.PG.DEFAULT_CHANNELS),
                children: [
                    (0, i.jsx)('div', { className: s()(R.progressBar, { [R.progressBarCurrent]: t === I.PG.DEFAULT_CHANNELS }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === I.PG.DEFAULT_CHANNELS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: d ? b.intl.formatToPlainString(b.t['8mGhOz'], { stepNumber: 2 }) : b.intl.formatToPlainString(b.t.vxpuTU, { stepNumber: 2 })
                    })
                ]
            }),
            (0, i.jsxs)(c.Clickable, {
                className: s()(R.progressBarContainer, R.clickableProgressBar),
                onClick: o(I.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, i.jsx)('div', { className: s()(R.progressBar, { [R.progressBarCurrent]: t === I.PG.CUSTOMIZATION_QUESTIONS }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === I.PG.CUSTOMIZATION_QUESTIONS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: d ? b.intl.formatToPlainString(b.t.vb6J5u, { stepNumber: 3 }) : b.intl.formatToPlainString(b.t.ZpdQqK, { stepNumber: 3 })
                    })
                ]
            }),
            r &&
                (0, i.jsxs)(c.Clickable, {
                    className: s()(R.progressBarContainer, R.clickableProgressBar),
                    onClick: o(I.PG.HOME_SETTINGS),
                    children: [
                        (0, i.jsx)('div', { className: s()(R.progressBar, { [R.progressBarCurrent]: t === I.PG.HOME_SETTINGS }) }),
                        (0, i.jsx)(c.Text, {
                            color: t === I.PG.HOME_SETTINGS ? 'text-brand' : 'text-muted',
                            variant: 'text-xs/medium',
                            children: b.intl.format(b.t.KVOukp, { stepNumber: 4 })
                        })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: R.progressBarContainer,
                children: [
                    (0, i.jsx)('div', { className: s()(R.progressBar, { [R.progressBarCurrent]: t === I.PG.REVIEW }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === I.PG.REVIEW ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: b.intl.format(b.t.oVzkiI, { stepNumber: 3 + (r ? 1 : 0) + 1 })
                    })
                ]
            })
        ]
    });
}
