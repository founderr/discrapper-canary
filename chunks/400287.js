t.d(s, {
    Z: function () {
        return N;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(100527),
    l = t(906732),
    c = t(454585),
    d = t(921801),
    _ = t(626135),
    u = t(695346),
    E = t(726985),
    T = t(981631),
    S = t(689938),
    I = t(113207);
function N() {
    let e = u.up.useSetting(),
        s = u.fq.useSetting(),
        t = u.R$.useSetting(),
        a = u.cC.useSetting(),
        N = u.vF.useSetting(),
        A = u.H1.useSetting(),
        C = u.ev.useSetting(),
        m = u.x4.useSetting(),
        g = u.RS.useSetting(),
        h = u.NA.useSetting(),
        O = u.nc.useSetting(),
        { analyticsLocations: p } = (0, l.ZP)(o.Z.TEXT_AND_IMAGES);
    return (0, n.jsxs)(r.FormSection, {
        tag: r.FormTitleTags.H1,
        title: S.Z.Messages.CHAT,
        children: [
            (0, n.jsxs)(d.F, {
                setting: E.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        className: I.marginBottom8,
                        children: S.Z.Messages.INLINE_MEDIA_LABEL
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(I.marginTop8, I.marginBottom20),
                            value: g,
                            onChange: u.RS.updateSetting,
                            children: S.Z.Messages.INLINE_EMBED_MEDIA
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(I.marginTop8, I.marginBottom20),
                            value: m,
                            note: S.Z.Messages.INLINE_ATTACHMENT_MEDIA_HELP.format({ maxSize: 10 }),
                            onChange: u.x4.updateSetting,
                            children: S.Z.Messages.INLINE_ATTACHMENT_MEDIA
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(I.marginTop8, I.marginBottom40),
                            value: A,
                            note: S.Z.Messages.IMAGE_DESCRIPTION_HELP,
                            onChange: u.H1.updateSetting,
                            children: S.Z.Messages.USER_SETTINGS_WITH_IMAGE_DESCRIPTIONS
                        })
                    })
                ]
            }),
            (0, n.jsxs)(d.F, {
                setting: E.s6.CHAT_EMBEDS,
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        className: I.marginBottom8,
                        children: S.Z.Messages.RENDER_EMBEDS_LABEL
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(I.marginTop8, I.marginBottom40),
                            value: h,
                            onChange: u.NA.updateSetting,
                            children: S.Z.Messages.RENDER_EMBEDS
                        })
                    })
                ]
            }),
            (0, n.jsxs)(d.F, {
                setting: E.s6.CHAT_EMOJI,
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        className: I.marginBottom8,
                        children: S.Z.Messages.EMOJI
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(I.marginTop8, I.marginBottom20),
                            value: O,
                            onChange: u.nc.updateSetting,
                            children: S.Z.Messages.RENDER_REACTIONS
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: I.marginBottom40,
                            value: C,
                            note: c.Z.parse(S.Z.Messages.CONVERT_EMOTICONS_HELP),
                            onChange: u.ev.updateSetting,
                            children: S.Z.Messages.CONVERT_EMOTICONS
                        })
                    })
                ]
            }),
            (0, n.jsx)(d.F, {
                setting: E.s6.CHAT_STICKERS,
                children: (0, n.jsxs)(r.FormSection, {
                    className: I.marginBottom8,
                    children: [
                        (0, n.jsx)(r.FormTitle, {
                            className: I.marginBottom8,
                            children: S.Z.Messages.STICKERS_AUTO_PLAY_HEADING
                        }),
                        (0, n.jsx)(d.F, {
                            setting: E.s6.CHAT_STICKERS_SUGGESTIONS,
                            children: (0, n.jsx)(r.FormSwitch, {
                                className: i()(I.marginTop8, I.marginBottom20),
                                value: e,
                                note: S.Z.Messages.AUTO_SUGGEST_STICKERS_DESCRIPTION,
                                onChange: (s) => {
                                    _.default.track(T.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                        enabled: !e,
                                        location: { section: T.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: p
                                    }),
                                        u.up.updateSetting(!e);
                                },
                                children: S.Z.Messages.AUTO_SUGGEST_STICKERS
                            })
                        }),
                        (0, n.jsx)(d.F, {
                            setting: E.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, n.jsx)(r.FormSwitch, {
                                className: I.marginBottom40,
                                value: s,
                                note: S.Z.Messages.INCLUDE_STICKER_RESULTS_IN_AUTOCOMPLETE,
                                onChange: (e) => {
                                    _.default.track(T.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: T.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: p
                                    }),
                                        u.fq.updateSetting(e);
                                },
                                children: S.Z.Messages.STICKERS_IN_AUTOCOMPLETE
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.F, {
                setting: E.s6.CHAT_TEXT_BOX,
                children: (0, n.jsxs)(r.FormSection, {
                    className: I.marginBottom8,
                    children: [
                        (0, n.jsx)(r.FormTitle, {
                            className: I.marginBottom8,
                            children: S.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX
                        }),
                        (0, n.jsx)(d.F, {
                            setting: E.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, n.jsx)(r.FormSwitch, {
                                className: i()(I.marginTop8, I.marginBottom40),
                                value: t,
                                onChange: (e) => {
                                    _.default.track(T.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: T.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }),
                                        u.R$.updateSetting(e);
                                },
                                children: S.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.F, {
                setting: E.s6.CHAT_THREADS,
                children: (0, n.jsxs)(r.FormSection, {
                    className: I.marginBottom40,
                    children: [
                        (0, n.jsx)(r.FormTitle, {
                            className: I.marginBottom8,
                            children: S.Z.Messages.THREADS
                        }),
                        (0, n.jsx)(d.F, {
                            setting: E.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, n.jsx)(r.FormSwitch, {
                                className: I.marginTop8,
                                value: N,
                                onChange: u.vF.updateSetting,
                                children: S.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.F, {
                setting: E.s6.CHAT_SPOILERS,
                children: (0, n.jsxs)(r.FormItem, {
                    title: S.Z.Messages.SHOW_SPOILER_CONTENT,
                    children: [
                        (0, n.jsx)(r.FormText, {
                            type: r.FormText.Types.DESCRIPTION,
                            className: I.marginBottom8,
                            children: S.Z.Messages.SHOW_SPOILER_CONTENT_HELP
                        }),
                        (0, n.jsx)(r.RadioGroup, {
                            options: [
                                {
                                    name: S.Z.Messages.SHOW_SPOILER_ON_CLICK,
                                    value: T.A2N.ON_CLICK
                                },
                                {
                                    name: S.Z.Messages.SHOW_SPOILER_ON_SERVERS_I_MOD,
                                    value: T.A2N.IF_MODERATOR
                                },
                                {
                                    name: S.Z.Messages.SHOW_SPOILER_ALWAYS,
                                    value: T.A2N.ALWAYS
                                }
                            ],
                            onChange: (e) => u.cC.updateSetting(e.value),
                            value: a
                        })
                    ]
                })
            })
        ]
    });
}
