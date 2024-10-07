n.d(t, {
    V: function () {
        return N;
    },
    _: function () {
        return a;
    }
});
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(442837),
    o = n(481060),
    c = n(40851),
    d = n(566620),
    u = n(403404),
    _ = n(100527),
    E = n(906732),
    h = n(70097),
    m = n(592125),
    I = n(626135),
    p = n(981631),
    g = n(921944),
    T = n(689938),
    f = n(118441);
((i = a || (a = {})).BOOSTING = 'BOOSTING'), (i.NITRO = 'NITRO'), (i.BASH_OUT = 'BASH_OUT'), (i.GAME_NIGHT = 'GAME_NIGHT');
let S = 'https://cdn.discordapp.com/attachments/860252504826445825/1029516100356018217/Activities_NUX_GL_1.mp4',
    C = 'https://cdn.discordapp.com/attachments/887469171804356628/916446867586416660/activities-video-poster-512.png',
    N = (e) => {
        let { channelId: t, markAsDismissed: n, tutorialType: i } = e,
            {
                analyticsLocation: a,
                analyticsType: N,
                ctaText: A,
                dismissText: v,
                description: Z,
                learnMore: L,
                title: R,
                videoPosterUrl: O,
                videoUrl: x,
                ctaOnClick: b
            } = (function (e) {
                switch (e) {
                    case 'BOOSTING':
                        return {
                            analyticsLocation: _.Z.ACTIVITY_COACH_MARK_BOOSTING,
                            analyticsType: 'embedded_activity_discovery_tutorial',
                            description: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_WTP_DESCRIPTION,
                            learnMore: !0,
                            title: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_TITLE,
                            videoPosterUrl: C,
                            videoUrl: S,
                            ctaText: T.Z.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT,
                            dismissText: T.Z.Messages.DISMISS
                        };
                    case 'NITRO':
                        return {
                            analyticsLocation: _.Z.ACTIVITY_COACH_MARK_NITRO,
                            analyticsType: 'embedded_activity_nitro_discovery_tutorial',
                            description: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_DESCRIPTION,
                            learnMore: !0,
                            title: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_TITLE,
                            videoPosterUrl: C,
                            videoUrl: S,
                            ctaText: T.Z.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT,
                            dismissText: T.Z.Messages.DISMISS
                        };
                    case 'BASH_OUT':
                        return {
                            analyticsLocation: _.Z.ACTIVITY_COACH_MARK_BASH_OUT,
                            analyticsType: 'embedded_activity_bash_out_tutorial',
                            description: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_BASH_OUT_DESCRIPTION,
                            learnMore: !1,
                            title: T.Z.Messages.EMBEDDED_ACTIVITIES_AVAILABLE_NOW,
                            videoPosterUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1037963592227635230/bash_out.jpg',
                            videoUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1037967755955146762/bash_out.mp4',
                            ctaText: T.Z.Messages.PLAY,
                            dismissText: T.Z.Messages.DISMISS
                        };
                    case 'GAME_NIGHT':
                        return {
                            analyticsLocation: _.Z.ACTIVITIES_COACH_MARK_GAME_NIGHT,
                            analyticsType: 'embedded_activity_game_night_tutorial',
                            description: T.Z.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_BODY,
                            learnMore: !1,
                            title: T.Z.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_HEADING,
                            videoPosterUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg',
                            videoUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4',
                            ctaText: T.Z.Messages.PLAY_NOW,
                            dismissText: T.Z.Messages.MAYBE_LATER
                        };
                    default:
                        return {
                            analyticsLocation: _.Z.ACTIVITY_COACH_MARK_NITRO,
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
            { analyticsLocations: M } = (0, E.ZP)(a);
        r.useEffect(() => {
            I.default.track(p.rMx.TOOLTIP_VIEWED, { type: N });
        }, [N]);
        let P = (0, c.bp)() === p.IlC.POPOUT,
            D = (0, l.e7)([m.Z], () => m.Z.getChannel(t), [t]);
        return (0, s.jsx)(E.Gt, {
            value: M,
            children: (0, s.jsx)('div', {
                className: f.wrapper,
                children: (0, s.jsx)('div', {
                    className: f.container,
                    children: (0, s.jsxs)('div', {
                        className: f.content,
                        children: [
                            (0, s.jsx)(h.Z, {
                                className: f.video,
                                src: x,
                                poster: O,
                                width: 224,
                                height: 126,
                                loop: !0,
                                muted: !0,
                                autoPlay: !0
                            }),
                            (0, s.jsx)('div', {
                                className: f.header,
                                children: (0, s.jsx)(o.Heading, {
                                    className: f.__invalid_headerText,
                                    variant: 'text-sm/bold',
                                    color: 'always-white',
                                    children: R
                                })
                            }),
                            (0, s.jsxs)(o.Text, {
                                className: f.subheaderText,
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: [
                                    Z,
                                    L
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  ' ',
                                                  (0, s.jsx)(o.Anchor, {
                                                      className: f.learnMoreLink,
                                                      href: 'https://support.discord.com/hc/articles/4422142836759',
                                                      children: T.Z.Messages.LEARN_MORE
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, s.jsxs)('div', {
                                className: f.ctaActionWrapper,
                                children: [
                                    (0, s.jsx)(o.Button, {
                                        color: o.Button.Colors.BRAND,
                                        onClick: () => {
                                            n(g.L.UNKNOWN);
                                        },
                                        children: v
                                    }),
                                    (0, s.jsx)(o.Button, {
                                        color: o.Button.Colors.BRAND_INVERTED,
                                        onClick:
                                            null != b
                                                ? b
                                                : () => {
                                                      if ((n(g.L.UNKNOWN), null != D))
                                                          (0, u.Z)({
                                                              channel: D.isGuildVoice() ? D : void 0,
                                                              guildId: D.guild_id,
                                                              locationObject: {
                                                                  page: p.ZY5.GUILD_CHANNEL,
                                                                  section: p.jXE.GUILD_CHANNEL_LIST,
                                                                  object: p.qAy.ACTIVITIES_COACH_MARK,
                                                                  objectType: p.Qqv.ACTIVITY
                                                              },
                                                              openInPopout: P,
                                                              analyticsLocations: M,
                                                              opensAppLauncherModal: !0
                                                          }),
                                                              (0, d.w1)({ guildId: D.guild_id });
                                                  },
                                        children: A
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        });
    };
