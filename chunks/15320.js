n.d(t, {
    Z: function () {
        return B;
    }
});
var s = n(200651),
    r = n(192379),
    l = n(399606),
    o = n(481060),
    i = n(367907),
    a = n(863249),
    d = n(944163),
    c = n(14263),
    u = n(768762),
    m = n(626135),
    p = n(823379),
    h = n(806223),
    g = n(45966),
    x = n(637853),
    _ = n(968644),
    f = n(104265),
    N = n(588632),
    I = n(290511),
    C = n(981631),
    E = n(689938),
    b = n(275211);
function v(e, t) {
    return (0, s.jsx)(
        'span',
        {
            className: b.helpTextItem,
            children: e
        },
        t
    );
}
function j(e) {
    return null != e && h.Z.getCurrentConfig({ location: 'ba216b_1' }, { autoTrackExposure: !0 }).includeRules;
}
function O(e) {
    let { headerId: t, guild: n, step: r, lastPrompt: i, questionCount: a, currentPrompt: d, selectOption: m, gotoPrevPrompt: p, gotoNextPrompt: h, completeOnboarding: f } = e,
        I = (0, l.Wu)([g.Z], () => g.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        C = 0 === I.length && (null == d ? void 0 : d.required),
        j = null == d ? void 0 : d.options.filter((e) => I.includes(e.id)),
        O = (0, x.L6)(j),
        Z = (0, x.dX)(j),
        B = 0 === I.length,
        { helpText: R, helpTextAdditional: T } = (0, _.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: O,
            selectedChannelIds: Z,
            itemHook: v
        }),
        D = (0, c.Z)(n.id, 1000),
        M = d.options.map((e) => ({
            value: e.id,
            ...e
        })),
        P = d.options.filter((e) => I.includes(e.id)).map((e) => e.id);
    return (0, s.jsx)('div', {
        className: b.prompt,
        children: (0, s.jsxs)('div', {
            className: b.promptContent,
            children: [
                (0, s.jsxs)(o.ScrollerThin, {
                    className: b.scrollerContent,
                    children: [
                        (0, s.jsxs)('div', {
                            className: b.questionHeader,
                            children: [
                                (0, s.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: E.Z.Messages.ONBOARDING_QUESTION_COUNT.format({
                                        currentQuestion: r + 1,
                                        questionCount: a
                                    })
                                }),
                                d.required
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: b.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, s.jsx)(o.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: E.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, s.jsx)(o.Heading, {
                            className: b.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: d.title
                        }),
                        (0, s.jsx)(N.Z, {
                            options: M,
                            value: P,
                            onChange: (e) => {
                                let t = e.find((e) => !I.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) m(d.id, t.id, !0);
                                else {
                                    let e = I.filter((e) => !n.includes(e));
                                    d.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            m(d.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: D
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: b.navButtons,
                    children: [
                        (0, s.jsx)('div', {
                            className: b.leftButtons,
                            children:
                                r > 0 &&
                                (0, s.jsxs)(o.Button, {
                                    className: b.button,
                                    innerClassName: b.buttonInner,
                                    onClick: () => p(I.length),
                                    size: o.Button.Sizes.MEDIUM,
                                    look: o.Button.Looks.OUTLINED,
                                    grow: !1,
                                    color: o.Button.Colors.PRIMARY,
                                    children: [
                                        (0, s.jsx)(u.Z, {
                                            className: b.arrow,
                                            direction: u.Z.Directions.LEFT
                                        }),
                                        E.Z.Messages.BACK
                                    ]
                                })
                        }),
                        (0, s.jsxs)('div', {
                            className: b.rightButtons,
                            children: [
                                (0, s.jsxs)(o.Text, {
                                    className: b.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [R, ' ', T]
                                }),
                                (0, s.jsx)(o.Tooltip, {
                                    text: C ? E.Z.Messages.ONBOARDING_REQUIRED_QUESTION : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, s.jsx)(o.Button, {
                                            className: b.button,
                                            innerClassName: b.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (i ? f() : h(I.length)),
                                            disabled: C,
                                            size: o.Button.Sizes.MEDIUM,
                                            look: o.Button.Looks.FILLED,
                                            grow: !1,
                                            color: B ? o.Button.Colors.PRIMARY : o.Button.Colors.BRAND,
                                            children: i
                                                ? (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                          E.Z.Messages.FINISH,
                                                          (0, s.jsx)('span', {
                                                              className: b.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                          B ? E.Z.Messages.SKIP : E.Z.Messages.NEXT,
                                                          (0, s.jsx)(u.Z, {
                                                              className: b.arrow,
                                                              direction: u.Z.Directions.RIGHT
                                                          })
                                                      ]
                                                  })
                                        });
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function Z(e) {
    let { headerId: t, guild: n, step: r, lastPrompt: i, questionCount: a, currentPrompt: d, selectOption: c, gotoPrevPrompt: m, gotoNextPrompt: p, completeOnboarding: h } = e,
        N = (0, l.Wu)([g.Z], () => g.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        I = 0 === N.length && (null == d ? void 0 : d.required),
        C = null == d ? void 0 : d.options.filter((e) => N.includes(e.id)),
        j = (0, x.L6)(C),
        O = (0, x.dX)(C),
        Z = 0 === N.length,
        { helpText: B, helpTextAdditional: R } = (0, _.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: j,
            selectedChannelIds: O,
            itemHook: v
        });
    return (0, s.jsx)('div', {
        className: b.prompt,
        children: (0, s.jsxs)('div', {
            className: b.promptContent,
            children: [
                (0, s.jsxs)(o.ScrollerThin, {
                    className: b.scrollerContent,
                    children: [
                        (0, s.jsxs)('div', {
                            className: b.questionHeader,
                            children: [
                                (0, s.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: E.Z.Messages.ONBOARDING_QUESTION_COUNT.format({
                                        currentQuestion: r + 1,
                                        questionCount: a
                                    })
                                }),
                                d.required
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: b.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, s.jsx)(o.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: E.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, s.jsx)(o.Heading, {
                            className: b.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: d.title
                        }),
                        (0, s.jsx)('div', {
                            className: b.promptOptions,
                            children: d.options.map((e) =>
                                (0, s.jsx)(
                                    f.Z,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => c(d.id, e.id, null != t && t),
                                        selected: N.includes(e.id)
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: b.navButtons,
                    children: [
                        (0, s.jsx)('div', {
                            className: b.leftButtons,
                            children:
                                r > 0 &&
                                (0, s.jsxs)(o.Button, {
                                    className: b.button,
                                    innerClassName: b.buttonInner,
                                    onClick: () => m(N.length),
                                    size: o.Button.Sizes.MEDIUM,
                                    look: o.Button.Looks.OUTLINED,
                                    grow: !1,
                                    color: o.Button.Colors.PRIMARY,
                                    children: [
                                        (0, s.jsx)(u.Z, {
                                            className: b.arrow,
                                            direction: u.Z.Directions.LEFT
                                        }),
                                        E.Z.Messages.BACK
                                    ]
                                })
                        }),
                        (0, s.jsxs)('div', {
                            className: b.rightButtons,
                            children: [
                                (0, s.jsxs)(o.Text, {
                                    className: b.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [B, ' ', R]
                                }),
                                (0, s.jsx)(o.Tooltip, {
                                    text: I ? E.Z.Messages.ONBOARDING_REQUIRED_QUESTION : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, s.jsx)(o.Button, {
                                            className: b.button,
                                            innerClassName: b.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (i ? h() : p(N.length)),
                                            disabled: I,
                                            size: o.Button.Sizes.MEDIUM,
                                            look: o.Button.Looks.FILLED,
                                            grow: !1,
                                            color: Z ? o.Button.Colors.PRIMARY : o.Button.Colors.BRAND,
                                            children: i
                                                ? (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                          E.Z.Messages.FINISH,
                                                          (0, s.jsx)('span', {
                                                              className: b.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                          Z ? E.Z.Messages.SKIP : E.Z.Messages.NEXT,
                                                          (0, s.jsx)(u.Z, {
                                                              className: b.arrow,
                                                              direction: u.Z.Directions.RIGHT
                                                          })
                                                      ]
                                                  })
                                        });
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function B(e) {
    let { guild: t, prompts: n, step: o, selectOption: c, completeOnboarding: u, setCurrentStep: h, headerId: g, disableTracking: x } = e,
        _ = (0, l.e7)([d.Z], () => d.Z.getRulesPrompt(t.id));
    r.useEffect(() => {
        a.ZP.fetchVerificationForm(t.id);
    }, [t.id]);
    let f = n[o],
        N = o + 1 >= n.length && !j(_),
        E = n[0].required;
    r.useEffect(() => {
        if (!x)
            m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                ...(0, i.hH)(t.id),
                step: 0,
                required: E
            });
    }, [t.id, E, x]);
    let b = (e) => {
            !x &&
                (m.default.track(C.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, i.hH)(t.id),
                    step: o,
                    options_selected: e,
                    skipped: 0 === e,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !1
                }),
                o < n.length - 1 &&
                    m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, i.hH)(t.id),
                        step: o,
                        required: n[o + 1].required
                    })),
                o + 1 < n.length ? h(o + 1) : j(_) && h('rules');
        },
        v = (e) => {
            !x &&
                (m.default.track(C.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, i.hH)(t.id),
                    step: o,
                    skipped: !1,
                    back: !0,
                    options_selected: e,
                    in_onboarding: !0,
                    is_final_step: !1
                }),
                o > 0 &&
                    m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, i.hH)(t.id),
                        step: o - 1,
                        required: n[o - 1].required
                    })),
                h(Math.max(0, o - 1));
        };
    if (null == f) return null;
    switch (f.type) {
        case I.FN.MULTIPLE_CHOICE:
            return (0, s.jsx)(Z, {
                guild: t,
                headerId: g,
                step: o,
                questionCount: n.length,
                currentPrompt: f,
                lastPrompt: N,
                selectOption: c,
                gotoPrevPrompt: v,
                gotoNextPrompt: b,
                completeOnboarding: u
            });
        case I.FN.DROPDOWN:
            return (0, s.jsx)(O, {
                guild: t,
                headerId: g,
                step: o,
                questionCount: n.length,
                currentPrompt: f,
                lastPrompt: N,
                selectOption: c,
                gotoPrevPrompt: v,
                gotoNextPrompt: b,
                completeOnboarding: u
            });
        default:
            (0, p.vE)(f.type);
    }
}
