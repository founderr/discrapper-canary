n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(454585),
    d = n(921801),
    u = n(626135),
    m = n(695346),
    h = n(726985),
    g = n(981631),
    p = n(388032),
    x = n(971436);
function S() {
    let e = m.up.useSetting(),
        t = m.fq.useSetting(),
        n = m.R$.useSetting(),
        s = m.cC.useSetting(),
        S = m.vF.useSetting(),
        T = m.H1.useSetting(),
        C = m.ev.useSetting(),
        _ = m.x4.useSetting(),
        E = m.RS.useSetting(),
        f = m.NA.useSetting(),
        I = m.nc.useSetting(),
        { analyticsLocations: N } = (0, o.ZP)(a.Z.TEXT_AND_IMAGES);
    return (0, i.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: p.intl.string(p.t['/VQax8']),
        children: [
            (0, i.jsxs)(d.F, {
                setting: h.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: x.marginBottom8,
                        children: p.intl.string(p.t.U68Dgo)
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(x.marginTop8, x.marginBottom20),
                            value: E,
                            onChange: m.RS.updateSetting,
                            children: p.intl.string(p.t.U47N1t)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(x.marginTop8, x.marginBottom20),
                            value: _,
                            note: p.intl.formatToPlainString(p.t.qjjvqK, { maxSize: 10 }),
                            onChange: m.x4.updateSetting,
                            children: p.intl.string(p.t.VP11Nj)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(x.marginTop8, x.marginBottom40),
                            value: T,
                            note: p.intl.string(p.t.T0rbtL),
                            onChange: m.H1.updateSetting,
                            children: p.intl.string(p.t['w8j+yc'])
                        })
                    })
                ]
            }),
            (0, i.jsxs)(d.F, {
                setting: h.s6.CHAT_EMBEDS,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: x.marginBottom8,
                        children: p.intl.string(p.t.PWZOn5)
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(x.marginTop8, x.marginBottom40),
                            value: f,
                            onChange: m.NA.updateSetting,
                            children: p.intl.string(p.t.xX0ZTE)
                        })
                    })
                ]
            }),
            (0, i.jsxs)(d.F, {
                setting: h.s6.CHAT_EMOJI,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: x.marginBottom8,
                        children: p.intl.string(p.t.sMOuub)
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(x.marginTop8, x.marginBottom20),
                            value: I,
                            onChange: m.nc.updateSetting,
                            children: p.intl.string(p.t.Iv24sr)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: x.marginBottom40,
                            value: C,
                            note: c.Z.parse(p.intl.string(p.t['20dvub'])),
                            onChange: m.ev.updateSetting,
                            children: p.intl.string(p.t['79qal5'])
                        })
                    })
                ]
            }),
            (0, i.jsx)(d.F, {
                setting: h.s6.CHAT_STICKERS,
                children: (0, i.jsxs)(l.FormSection, {
                    className: x.marginBottom8,
                    children: [
                        (0, i.jsx)(l.FormTitle, {
                            className: x.marginBottom8,
                            children: p.intl.string(p.t['6NtAuL'])
                        }),
                        (0, i.jsx)(d.F, {
                            setting: h.s6.CHAT_STICKERS_SUGGESTIONS,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: r()(x.marginTop8, x.marginBottom20),
                                value: e,
                                note: p.intl.string(p.t.r3uQUV),
                                onChange: (t) => {
                                    u.default.track(g.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                        enabled: !e,
                                        location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: N
                                    }),
                                        m.up.updateSetting(!e);
                                },
                                children: p.intl.string(p.t['479+PT'])
                            })
                        }),
                        (0, i.jsx)(d.F, {
                            setting: h.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: x.marginBottom40,
                                value: t,
                                note: p.intl.string(p.t['/eVrj4']),
                                onChange: (e) => {
                                    u.default.track(g.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: N
                                    }),
                                        m.fq.updateSetting(e);
                                },
                                children: p.intl.string(p.t['29xPVV'])
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(d.F, {
                setting: h.s6.CHAT_TEXT_BOX,
                children: (0, i.jsxs)(l.FormSection, {
                    className: x.marginBottom8,
                    children: [
                        (0, i.jsx)(l.FormTitle, {
                            className: x.marginBottom8,
                            children: p.intl.string(p.t.afR0pK)
                        }),
                        (0, i.jsx)(d.F, {
                            setting: h.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: r()(x.marginTop8, x.marginBottom40),
                                value: n,
                                onChange: (e) => {
                                    u.default.track(g.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }),
                                        m.R$.updateSetting(e);
                                },
                                children: p.intl.string(p.t.AqGrEB)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(d.F, {
                setting: h.s6.CHAT_THREADS,
                children: (0, i.jsxs)(l.FormSection, {
                    className: x.marginBottom40,
                    children: [
                        (0, i.jsx)(l.FormTitle, {
                            className: x.marginBottom8,
                            children: p.intl.string(p.t.B2panJ)
                        }),
                        (0, i.jsx)(d.F, {
                            setting: h.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: x.marginTop8,
                                value: S,
                                onChange: m.vF.updateSetting,
                                children: p.intl.string(p.t.AInv5u)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(d.F, {
                setting: h.s6.CHAT_SPOILERS,
                children: (0, i.jsxs)(l.FormItem, {
                    title: p.intl.string(p.t.QgwmV1),
                    children: [
                        (0, i.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: x.marginBottom8,
                            children: p.intl.string(p.t.TYnRkZ)
                        }),
                        (0, i.jsx)(l.RadioGroup, {
                            options: [
                                {
                                    name: p.intl.string(p.t['KFH/mZ']),
                                    value: g.A2N.ON_CLICK
                                },
                                {
                                    name: p.intl.string(p.t.K5VTBA),
                                    value: g.A2N.IF_MODERATOR
                                },
                                {
                                    name: p.intl.string(p.t.Pe1RbG),
                                    value: g.A2N.ALWAYS
                                }
                            ],
                            onChange: (e) => m.cC.updateSetting(e.value),
                            value: s
                        })
                    ]
                })
            })
        ]
    });
}
