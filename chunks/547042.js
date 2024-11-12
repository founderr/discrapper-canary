n.d(t, {
    V: function () {
        return N;
    },
    _: function () {
        return r;
    }
});
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(442837),
    o = n(481060),
    c = n(40851),
    d = n(566620),
    u = n(403404),
    h = n(100527),
    m = n(906732),
    p = n(70097),
    g = n(592125),
    f = n(626135),
    _ = n(981631),
    E = n(921944),
    I = n(388032),
    C = n(118441);
((i = r || (r = {})).BOOSTING = 'BOOSTING'), (i.NITRO = 'NITRO'), (i.BASH_OUT = 'BASH_OUT'), (i.GAME_NIGHT = 'GAME_NIGHT');
let v = 'https://cdn.discordapp.com/attachments/860252504826445825/1029516100356018217/Activities_NUX_GL_1.mp4',
    S = 'https://cdn.discordapp.com/attachments/887469171804356628/916446867586416660/activities-video-poster-512.png',
    N = (e) => {
        let { channelId: t, markAsDismissed: n, tutorialType: i } = e,
            {
                analyticsLocation: r,
                analyticsType: N,
                ctaText: T,
                dismissText: x,
                description: b,
                learnMore: A,
                title: Z,
                videoPosterUrl: y,
                videoUrl: L,
                ctaOnClick: R
            } = (function (e) {
                switch (e) {
                    case 'BOOSTING':
                        return {
                            analyticsLocation: h.Z.ACTIVITY_COACH_MARK_BOOSTING,
                            analyticsType: 'embedded_activity_discovery_tutorial',
                            description: I.intl.string(I.t.eDjBOT),
                            learnMore: !0,
                            title: I.intl.string(I.t.wbiFFB),
                            videoPosterUrl: S,
                            videoUrl: v,
                            ctaText: I.intl.string(I.t['5SaQDw']),
                            dismissText: I.intl.string(I.t.WAI6xs)
                        };
                    case 'NITRO':
                        return {
                            analyticsLocation: h.Z.ACTIVITY_COACH_MARK_NITRO,
                            analyticsType: 'embedded_activity_nitro_discovery_tutorial',
                            description: I.intl.string(I.t.qJn0bW),
                            learnMore: !0,
                            title: I.intl.string(I.t.g8itmp),
                            videoPosterUrl: S,
                            videoUrl: v,
                            ctaText: I.intl.string(I.t['5SaQDw']),
                            dismissText: I.intl.string(I.t.WAI6xs)
                        };
                    case 'BASH_OUT':
                        return {
                            analyticsLocation: h.Z.ACTIVITY_COACH_MARK_BASH_OUT,
                            analyticsType: 'embedded_activity_bash_out_tutorial',
                            description: I.intl.string(I.t.n9Tkzc),
                            learnMore: !1,
                            title: I.intl.string(I.t.HET4fn),
                            videoPosterUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1037963592227635230/bash_out.jpg',
                            videoUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1037967755955146762/bash_out.mp4',
                            ctaText: I.intl.string(I.t.RscU7O),
                            dismissText: I.intl.string(I.t.WAI6xs)
                        };
                    case 'GAME_NIGHT':
                        return {
                            analyticsLocation: h.Z.ACTIVITIES_COACH_MARK_GAME_NIGHT,
                            analyticsType: 'embedded_activity_game_night_tutorial',
                            description: I.intl.string(I.t['1s1xdH']),
                            learnMore: !1,
                            title: I.intl.string(I.t['+4M1ZW']),
                            videoPosterUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg',
                            videoUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4',
                            ctaText: I.intl.string(I.t.y0nXOj),
                            dismissText: I.intl.string(I.t.TulDPj)
                        };
                    default:
                        return {
                            analyticsLocation: h.Z.ACTIVITY_COACH_MARK_NITRO,
                            analyticsType: '',
                            description: '',
                            learnMore: !1,
                            title: '',
                            videoPosterUrl: '',
                            videoUrl: '',
                            ctaText: '',
                            dismissText: ''
                        };
                }
            })(i),
            { analyticsLocations: j } = (0, m.ZP)(r);
        a.useEffect(() => {
            f.default.track(_.rMx.TOOLTIP_VIEWED, { type: N });
        }, [N]);
        let O = (0, c.bp)() === _.IlC.POPOUT,
            P = (0, s.e7)([g.Z], () => g.Z.getChannel(t), [t]);
        return (0, l.jsx)(m.Gt, {
            value: j,
            children: (0, l.jsx)('div', {
                className: C.wrapper,
                children: (0, l.jsx)('div', {
                    className: C.container,
                    children: (0, l.jsxs)('div', {
                        className: C.content,
                        children: [
                            (0, l.jsx)(p.Z, {
                                className: C.video,
                                src: L,
                                poster: y,
                                width: 224,
                                height: 126,
                                loop: !0,
                                muted: !0,
                                autoPlay: !0
                            }),
                            (0, l.jsx)('div', {
                                className: C.header,
                                children: (0, l.jsx)(o.Heading, {
                                    className: C.__invalid_headerText,
                                    variant: 'text-sm/bold',
                                    color: 'always-white',
                                    children: Z
                                })
                            }),
                            (0, l.jsxs)(o.Text, {
                                className: C.subheaderText,
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: [
                                    b,
                                    A
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  ' ',
                                                  (0, l.jsx)(o.Anchor, {
                                                      className: C.learnMoreLink,
                                                      href: 'https://support.discord.com/hc/articles/4422142836759',
                                                      children: I.intl.string(I.t.hvVgAQ)
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: C.ctaActionWrapper,
                                children: [
                                    (0, l.jsx)(o.Button, {
                                        color: o.Button.Colors.BRAND,
                                        onClick: () => {
                                            n(E.L.UNKNOWN);
                                        },
                                        children: x
                                    }),
                                    (0, l.jsx)(o.Button, {
                                        color: o.Button.Colors.BRAND_INVERTED,
                                        onClick:
                                            null != R
                                                ? R
                                                : () => {
                                                      if ((n(E.L.UNKNOWN), null != P))
                                                          (0, u.Z)({
                                                              channel: P.isGuildVoice() ? P : void 0,
                                                              guildId: P.guild_id,
                                                              locationObject: {
                                                                  page: _.ZY5.GUILD_CHANNEL,
                                                                  section: _.jXE.GUILD_CHANNEL_LIST,
                                                                  object: _.qAy.ACTIVITIES_COACH_MARK,
                                                                  objectType: _.Qqv.ACTIVITY
                                                              },
                                                              openInPopout: O,
                                                              analyticsLocations: j,
                                                              opensAppLauncherModal: !0
                                                          }),
                                                              (0, d.w1)({ guildId: P.guild_id });
                                                  },
                                        children: T
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        });
    };
