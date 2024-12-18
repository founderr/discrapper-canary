n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(278754),
    d = n(454585),
    u = n(125900),
    m = n(921801),
    h = n(626135),
    g = n(695346),
    p = n(726985),
    x = n(981631),
    S = n(388032),
    T = n(232186);
function E() {
    let e = (0, c.pR)(),
        t = (0, c.Ju)(),
        n = g.fq.useSetting(),
        s = g.eR.useSetting(),
        E = (0, u.V2)({ location: 'UserSettingsTextImages' }),
        C = g.R$.useSetting(),
        _ = g.cC.useSetting(),
        f = g.vF.useSetting(),
        I = g.H1.useSetting(),
        N = g.ev.useSetting(),
        A = g.x4.useSetting(),
        b = g.RS.useSetting(),
        v = g.NA.useSetting(),
        j = g.nc.useSetting(),
        { analyticsLocations: O } = (0, o.ZP)(a.Z.TEXT_AND_IMAGES);
    return (0, i.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: S.intl.string(S.t['/VQax8']),
        children: [
            (0, i.jsxs)(m.F, {
                setting: p.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: T.marginBottom8,
                        children: S.intl.string(S.t.U68Dgo)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(T.marginTop8, T.marginBottom20),
                            value: b,
                            onChange: g.RS.updateSetting,
                            children: S.intl.string(S.t.U47N1t)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(T.marginTop8, T.marginBottom20),
                            value: A,
                            note: S.intl.formatToPlainString(S.t.qjjvqK, { maxSize: 10 }),
                            onChange: g.x4.updateSetting,
                            children: S.intl.string(S.t.VP11Nj)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(T.marginTop8, T.marginBottom40),
                            value: I,
                            note: S.intl.string(S.t.T0rbtL),
                            onChange: g.H1.updateSetting,
                            children: S.intl.string(S.t['w8j+yc'])
                        })
                    })
                ]
            }),
            (0, i.jsxs)(m.F, {
                setting: p.s6.CHAT_EMBEDS,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: T.marginBottom8,
                        children: S.intl.string(S.t.PWZOn5)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(T.marginTop8, T.marginBottom40),
                            value: v,
                            onChange: g.NA.updateSetting,
                            children: S.intl.string(S.t.xX0ZTE)
                        })
                    })
                ]
            }),
            (0, i.jsxs)(m.F, {
                setting: p.s6.CHAT_EMOJI,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: T.marginBottom8,
                        children: S.intl.string(S.t.sMOuub)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(T.marginTop8, T.marginBottom20),
                            value: j,
                            onChange: g.nc.updateSetting,
                            children: S.intl.string(S.t.Iv24sr)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: T.marginBottom40,
                            value: N,
                            note: d.Z.parse(S.intl.string(S.t['20dvub'])),
                            onChange: g.ev.updateSetting,
                            children: S.intl.string(S.t['79qal5'])
                        })
                    })
                ]
            }),
            (0, i.jsx)(m.F, {
                setting: p.s6.CHAT_STICKERS,
                children: (0, i.jsxs)(l.FormSection, {
                    className: T.marginBottom8,
                    children: [
                        (0, i.jsx)(l.FormTitle, {
                            className: T.marginBottom8,
                            children: S.intl.string(S.t['6NtAuL'])
                        }),
                        t
                            ? null
                            : (0, i.jsx)(m.F, {
                                  setting: p.s6.CHAT_STICKERS_SUGGESTIONS,
                                  children: (0, i.jsx)(l.FormSwitch, {
                                      className: r()(T.marginTop8, T.marginBottom20),
                                      value: e,
                                      note: S.intl.string(S.t.r3uQUV),
                                      onChange: (t) => {
                                          h.default.track(x.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                              enabled: !e,
                                              location: { section: x.jXE.SETTINGS_TEXT_AND_IMAGES },
                                              location_stack: O
                                          }),
                                              (0, c.AW)(!e);
                                      },
                                      children: S.intl.string(S.t['479+PT'])
                                  })
                              }),
                        (0, i.jsx)(m.F, {
                            setting: p.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: T.marginBottom40,
                                value: n,
                                note: S.intl.string(S.t['/eVrj4']),
                                onChange: (e) => {
                                    h.default.track(x.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: x.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: O
                                    }),
                                        g.fq.updateSetting(e);
                                },
                                children: S.intl.string(S.t['29xPVV'])
                            })
                        })
                    ]
                })
            }),
            E &&
                (0, i.jsx)(m.F, {
                    setting: p.s6.CHAT_SOUNDMOJI,
                    children: (0, i.jsxs)(l.FormSection, {
                        className: T.marginBottom8,
                        children: [
                            (0, i.jsx)(l.FormTitle, {
                                className: T.marginBottom8,
                                children: S.intl.string(S.t.EHlAMT)
                            }),
                            (0, i.jsx)(m.F, {
                                setting: p.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.FormSwitch, {
                                    className: T.marginBottom40,
                                    value: s,
                                    note: S.intl.string(S.t.hrSIhI),
                                    onChange: (e) => {
                                        h.default.track(x.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: x.jXE.SETTINGS_TEXT_AND_IMAGES }
                                        }),
                                            g.eR.updateSetting(e);
                                    },
                                    children: S.intl.string(S.t['CtYr+f'])
                                })
                            })
                        ]
                    })
                }),
            (0, i.jsx)(m.F, {
                setting: p.s6.CHAT_TEXT_BOX,
                children: (0, i.jsxs)(l.FormSection, {
                    className: T.marginBottom8,
                    children: [
                        (0, i.jsx)(l.FormTitle, {
                            className: T.marginBottom8,
                            children: S.intl.string(S.t.afR0pK)
                        }),
                        (0, i.jsx)(m.F, {
                            setting: p.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: r()(T.marginTop8, T.marginBottom40),
                                value: C,
                                onChange: (e) => {
                                    h.default.track(x.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: x.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }),
                                        g.R$.updateSetting(e);
                                },
                                children: S.intl.string(S.t.AqGrEB)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(m.F, {
                setting: p.s6.CHAT_THREADS,
                children: (0, i.jsxs)(l.FormSection, {
                    className: T.marginBottom40,
                    children: [
                        (0, i.jsx)(l.FormTitle, {
                            className: T.marginBottom8,
                            children: S.intl.string(S.t.B2panJ)
                        }),
                        (0, i.jsx)(m.F, {
                            setting: p.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: T.marginTop8,
                                value: f,
                                onChange: g.vF.updateSetting,
                                children: S.intl.string(S.t.AInv5u)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(m.F, {
                setting: p.s6.CHAT_SPOILERS,
                children: (0, i.jsxs)(l.FormItem, {
                    title: S.intl.string(S.t.QgwmV1),
                    children: [
                        (0, i.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: T.marginBottom8,
                            children: S.intl.string(S.t.TYnRkZ)
                        }),
                        (0, i.jsx)(l.RadioGroup, {
                            options: [
                                {
                                    name: S.intl.string(S.t['KFH/mZ']),
                                    value: x.A2N.ON_CLICK
                                },
                                {
                                    name: S.intl.string(S.t.K5VTBA),
                                    value: x.A2N.IF_MODERATOR
                                },
                                {
                                    name: S.intl.string(S.t.Pe1RbG),
                                    value: x.A2N.ALWAYS
                                }
                            ],
                            onChange: (e) => g.cC.updateSetting(e.value),
                            value: _
                        })
                    ]
                })
            })
        ]
    });
}
