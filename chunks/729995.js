n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(2052),
    a = n(367907),
    o = n(45966),
    c = n(734893),
    d = n(621923),
    u = n(661824),
    m = n(430824),
    h = n(626135),
    g = n(983135),
    x = n(8426),
    p = n(969632),
    f = n(570961),
    C = n(84658),
    v = n(974513),
    _ = n(677892),
    I = n(981631),
    N = n(388032),
    T = n(14360);
function j(e) {
    let { guildId: t, completed: n } = e,
        { homeSettingsEnabled: l } = (0, d.kZ)(t),
        c = (0, r.e7)([o.Z], () => o.Z.getEnabled(t)),
        { location: m } = (0, s.O)();
    m.object = n ? I.qAy.ONBOARDING_EDIT : I.qAy.ONBOARDING_REVIEW;
    let p = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            c
                ? (await (0, f.$y)(t, !1),
                  h.default.track(I.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                      ...(0, a.hH)(t),
                      action_taken: C.W$[C.W$.TOGGLE_DISABLED],
                      location: m
                  }))
                : (await (0, f.$y)(t, !0),
                  e && (0, x.To)(t, !0),
                  n
                      ? h.default.track(I.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: C.W$[C.W$.TOGGLE_ENABLED],
                            location: m
                        })
                      : h.default.track(I.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                            ...(0, a.hH)(t),
                            step: C.PG[C.PG.REVIEW],
                            back: !1,
                            skip: !1,
                            completed: !0
                        }));
        },
        v = () => {
            h.default.track(I.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                ...(0, a.hH)(t),
                action_taken: C.W$[C.W$.PREVIEW],
                location: m
            }),
                (0, g.di)(t);
        },
        N = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.ku, {
                    guildId: t,
                    onEdit: () => {
                        h.default.track(I.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: C.W$[C.W$.EDIT_DEFAULT_CHANNELS],
                            location: m
                        }),
                            (0, g.$K)(C.PG.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n
                }),
                (0, i.jsx)(u.Z, { className: T.divider }),
                (0, i.jsx)(_.ap, {
                    guildId: t,
                    onEdit: () => {
                        h.default.track(I.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: C.W$[C.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                            location: m
                        }),
                            (0, g.$K)(C.PG.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n
                }),
                l &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.Z, { className: T.divider }),
                            (0, i.jsx)(_.P_, {
                                guildId: t,
                                onEdit: () => {
                                    h.default.track(I.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                                        ...(0, a.hH)(t),
                                        action_taken: C.W$[C.W$.EDIT_HOME_SETTINGS],
                                        location: m
                                    }),
                                        (0, g.$K)(C.PG.HOME_SETTINGS);
                                },
                                disableGoodStatus: n
                            })
                        ]
                    })
            ]
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(b, {
                      guildId: t,
                      handlePreview: v
                  }),
                  (0, i.jsx)(S, {}),
                  (0, i.jsxs)('div', {
                      className: T.content,
                      children: [
                          (0, i.jsx)(E, {
                              guildId: t,
                              handleOnboardingToggle: p
                          }),
                          N
                      ]
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: T.content,
                      children: [
                          (0, i.jsx)(R, {
                              guildId: t,
                              handleOnboardingToggle: p,
                              handlePreview: v
                          }),
                          N
                      ]
                  }),
                  (0, i.jsx)(y, { guildId: t })
              ]
          });
}
function b(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: T.header,
                children: N.intl.string(N.t.mhxUsL)
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: T.subheader,
                children: N.intl.string(N.t.GtWdQE)
            }),
            (0, i.jsxs)('div', {
                className: T.help,
                children: [
                    (0, i.jsx)(l.Anchor, {
                        target: '_blank',
                        href: I.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: N.intl.string(N.t.Ok55Ki)
                        })
                    }),
                    (0, i.jsx)('div', { className: T.helpSeparator }),
                    (0, i.jsx)(l.Anchor, {
                        onClick: n,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: N.intl.string(N.t['6gsjdH'])
                        })
                    }),
                    (0, i.jsx)('div', { className: T.helpSeparator }),
                    (0, i.jsx)(v.Wu, { guildId: t })
                ]
            })
        ]
    });
}
function S() {
    let e = '\u2022 ';
    return (0, i.jsxs)('div', {
        className: T.notice,
        children: [
            (0, i.jsx)('img', {
                className: T.wumpus,
                src: n(33631),
                alt: 'wumpus'
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        className: T.header,
                        children: N.intl.string(N.t.WslWRE)
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, N.intl.string(N.t.z9k21N)]
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, N.intl.string(N.t.t1LelZ)]
                    })
                ]
            })
        ]
    });
}
function E(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        s = (0, _.$$)(t),
        a = (0, r.e7)([o.Z], () => o.Z.getEnabled(t));
    return (0, i.jsxs)('div', {
        className: T.review,
        children: [
            (0, i.jsxs)('div', {
                className: T.reviewHeaderText,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        children: a ? N.intl.string(N.t.MBdTCQ) : N.intl.string(N.t.Wslim5)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: a ? N.intl.string(N.t.LokpLi) : N.intl.string(N.t.nBIyJi)
                    })
                ]
            }),
            (0, i.jsx)(l.Switch, {
                checked: a,
                onChange: () => n(!1),
                disabled: !a && !s
            })
        ]
    });
}
function R(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: s } = e,
        a = (0, _.$$)(t),
        o = (0, r.e7)([p.Z], () => p.Z.getSettings()),
        d = (0, c.uo)(o);
    return (0, i.jsxs)('div', {
        className: T.reviewHeader,
        children: [
            (0, i.jsxs)('div', {
                className: T.reviewHeaderText,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        children: a ? N.intl.string(N.t.FcIcT0) : N.intl.string(N.t.R09tJy)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        children: a ? N.intl.string(N.t.ockHVV) : N.intl.string(N.t['u/ji09'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: T.reviewActions,
                children: [
                    (0, i.jsx)(l.Button, {
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.OUTLINED,
                        onClick: s,
                        children: N.intl.string(N.t['6gsjdH'])
                    }),
                    (0, i.jsx)(l.Button, {
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.BRAND,
                        onClick: () => n(d),
                        disabled: !a,
                        children: N.intl.string(N.t.Yz7hsL)
                    })
                ]
            })
        ]
    });
}
function y(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([m.Z], () => m.Z.getGuild(t));
    return null == n || n.verificationLevel < I.sFg.VERY_HIGH
        ? null
        : (0, i.jsxs)('div', {
              className: T.rolesWarning,
              children: [
                  (0, i.jsx)(l.CircleWarningIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: T.warningIcon
                  }),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: N.intl.string(N.t.HVoKZ2)
                  })
              ]
          });
}
