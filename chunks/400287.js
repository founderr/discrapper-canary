n.d(t, {
    Z: function () {
        return T;
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
    u = n(921801),
    m = n(626135),
    h = n(695346),
    g = n(726985),
    p = n(981631),
    x = n(388032),
    S = n(232186);
function T() {
    let e = (0, c.pR)(),
        t = (0, c.Ju)(),
        n = h.fq.useSetting(),
        s = h.R$.useSetting(),
        T = h.cC.useSetting(),
        C = h.vF.useSetting(),
        _ = h.H1.useSetting(),
        E = h.ev.useSetting(),
        f = h.x4.useSetting(),
        I = h.RS.useSetting(),
        N = h.NA.useSetting(),
        A = h.nc.useSetting(),
        { analyticsLocations: b } = (0, o.ZP)(a.Z.TEXT_AND_IMAGES);
    return (0, i.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: x.intl.string(x.t['/VQax8']),
        children: [
            (0, i.jsxs)(u.F, {
                setting: g.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: S.marginBottom8,
                        children: x.intl.string(x.t.U68Dgo)
                    }),
                    (0, i.jsx)(u.F, {
                        setting: g.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(S.marginTop8, S.marginBottom20),
                            value: I,
                            onChange: h.RS.updateSetting,
                            children: x.intl.string(x.t.U47N1t)
                        })
                    }),
                    (0, i.jsx)(u.F, {
                        setting: g.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(S.marginTop8, S.marginBottom20),
                            value: f,
                            note: x.intl.formatToPlainString(x.t.qjjvqK, { maxSize: 10 }),
                            onChange: h.x4.updateSetting,
                            children: x.intl.string(x.t.VP11Nj)
                        })
                    }),
                    (0, i.jsx)(u.F, {
                        setting: g.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(S.marginTop8, S.marginBottom40),
                            value: _,
                            note: x.intl.string(x.t.T0rbtL),
                            onChange: h.H1.updateSetting,
                            children: x.intl.string(x.t['w8j+yc'])
                        })
                    })
                ]
            }),
            (0, i.jsxs)(u.F, {
                setting: g.s6.CHAT_EMBEDS,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: S.marginBottom8,
                        children: x.intl.string(x.t.PWZOn5)
                    }),
                    (0, i.jsx)(u.F, {
                        setting: g.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(S.marginTop8, S.marginBottom40),
                            value: N,
                            onChange: h.NA.updateSetting,
                            children: x.intl.string(x.t.xX0ZTE)
                        })
                    })
                ]
            }),
            (0, i.jsxs)(u.F, {
                setting: g.s6.CHAT_EMOJI,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: S.marginBottom8,
                        children: x.intl.string(x.t.sMOuub)
                    }),
                    (0, i.jsx)(u.F, {
                        setting: g.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: r()(S.marginTop8, S.marginBottom20),
                            value: A,
                            onChange: h.nc.updateSetting,
                            children: x.intl.string(x.t.Iv24sr)
                        })
                    }),
                    (0, i.jsx)(u.F, {
                        setting: g.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            className: S.marginBottom40,
                            value: E,
                            note: d.Z.parse(x.intl.string(x.t['20dvub'])),
                            onChange: h.ev.updateSetting,
                            children: x.intl.string(x.t['79qal5'])
                        })
                    })
                ]
            }),
            (0, i.jsx)(u.F, {
                setting: g.s6.CHAT_STICKERS,
                children: (0, i.jsxs)(l.FormSection, {
                    className: S.marginBottom8,
                    children: [
                        (0, i.jsx)(l.FormTitle, {
                            className: S.marginBottom8,
                            children: x.intl.string(x.t['6NtAuL'])
                        }),
                        t
                            ? null
                            : (0, i.jsx)(u.F, {
                                  setting: g.s6.CHAT_STICKERS_SUGGESTIONS,
                                  children: (0, i.jsx)(l.FormSwitch, {
                                      className: r()(S.marginTop8, S.marginBottom20),
                                      value: e,
                                      note: x.intl.string(x.t.r3uQUV),
                                      onChange: (t) => {
                                          m.default.track(p.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                              enabled: !e,
                                              location: { section: p.jXE.SETTINGS_TEXT_AND_IMAGES },
                                              location_stack: b
                                          }),
                                              (0, c.AW)(!e);
                                      },
                                      children: x.intl.string(x.t['479+PT'])
                                  })
                              }),
                        (0, i.jsx)(u.F, {
                            setting: g.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: S.marginBottom40,
                                value: n,
                                note: x.intl.string(x.t['/eVrj4']),
                                onChange: (e) => {
                                    m.default.track(p.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: p.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: b
                                    }),
                                        h.fq.updateSetting(e);
                                },
                                children: x.intl.string(x.t['29xPVV'])
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(u.F, {
                setting: g.s6.CHAT_TEXT_BOX,
                children: (0, i.jsxs)(l.FormSection, {
                    className: S.marginBottom8,
                    children: [
                        (0, i.jsx)(l.FormTitle, {
                            className: S.marginBottom8,
                            children: x.intl.string(x.t.afR0pK)
                        }),
                        (0, i.jsx)(u.F, {
                            setting: g.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: r()(S.marginTop8, S.marginBottom40),
                                value: s,
                                onChange: (e) => {
                                    m.default.track(p.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: p.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }),
                                        h.R$.updateSetting(e);
                                },
                                children: x.intl.string(x.t.AqGrEB)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(u.F, {
                setting: g.s6.CHAT_THREADS,
                children: (0, i.jsxs)(l.FormSection, {
                    className: S.marginBottom40,
                    children: [
                        (0, i.jsx)(l.FormTitle, {
                            className: S.marginBottom8,
                            children: x.intl.string(x.t.B2panJ)
                        }),
                        (0, i.jsx)(u.F, {
                            setting: g.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, i.jsx)(l.FormSwitch, {
                                className: S.marginTop8,
                                value: C,
                                onChange: h.vF.updateSetting,
                                children: x.intl.string(x.t.AInv5u)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(u.F, {
                setting: g.s6.CHAT_SPOILERS,
                children: (0, i.jsxs)(l.FormItem, {
                    title: x.intl.string(x.t.QgwmV1),
                    children: [
                        (0, i.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: S.marginBottom8,
                            children: x.intl.string(x.t.TYnRkZ)
                        }),
                        (0, i.jsx)(l.RadioGroup, {
                            options: [
                                {
                                    name: x.intl.string(x.t['KFH/mZ']),
                                    value: p.A2N.ON_CLICK
                                },
                                {
                                    name: x.intl.string(x.t.K5VTBA),
                                    value: p.A2N.IF_MODERATOR
                                },
                                {
                                    name: x.intl.string(x.t.Pe1RbG),
                                    value: p.A2N.ALWAYS
                                }
                            ],
                            onChange: (e) => h.cC.updateSetting(e.value),
                            value: T
                        })
                    ]
                })
            })
        ]
    });
}
