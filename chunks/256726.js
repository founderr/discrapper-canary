n.d(t, {
    CR: function () {
        return x;
    },
    UU: function () {
        return h;
    },
    jE: function () {
        return d;
    }
}),
    n(627494),
    n(757143);
var l = n(884439),
    a = n(55000),
    i = n(693824),
    r = n(690725),
    s = n(561308),
    o = n(737583),
    u = n(169040),
    c = n(689938);
let d = (e) => {
        let { timestamp: t } = e;
        return [
            {
                iconPath: u.mb,
                text: t
            }
        ];
    },
    h = (e) => {
        var t;
        let n = null === (t = (0, s.PJ)(e, l.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
        return null == n
            ? []
            : [
                  {
                      iconPath: u.eF,
                      text: c.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({ count: n })
                  }
              ];
    },
    m = (e) => {
        let { avatarSrc: t, mediaImageSrc: n } = e;
        return {
            AvatarImage: t,
            ...(null != n && { MediaImage: n })
        };
    },
    x = async (e) => {
        let { user: t, channel: n, mediaImageSrc: l, artist: s, description: c, colors: d, badges: h } = e,
            x = m({
                avatarSrc: t.getAvatarURL(n.guild_id, 128),
                mediaImageSrc: l
            }),
            v = s.replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll(' ', '-');
        return await (0, r.f)({
            assetsToLoad: x,
            drawImage: (e) => {
                (function (e, t) {
                    let n = t.map((e, t) => ({
                        color: e,
                        stop: t
                    }));
                    e.setSize(
                        {
                            w: u.nx,
                            h: u.bg
                        },
                        4
                    ),
                        e.drawRoundedGradientRect(
                            n,
                            {
                                x: 0,
                                y: u.bg
                            },
                            {
                                x: u.nx,
                                y: 0
                            },
                            {
                                x: 0,
                                y: 0,
                                h: u.bg,
                                w: u.nx
                            },
                            8
                        );
                })(e, d),
                    (function (e) {
                        e.drawRoundedImage(
                            'MediaImage',
                            {
                                x: u.sB,
                                y: u.sB
                            },
                            {
                                w: u.Pu,
                                h: u.Pu
                            },
                            8,
                            { fillMode: i.JU.Contain }
                        ) === i.vP.Failure &&
                            e.drawPath(
                                a.Cv,
                                {
                                    x: u.sB,
                                    y: u.sB
                                },
                                !0,
                                2 + 2 / 3
                            );
                    })(e),
                    (function (e) {
                        e.drawRoundedImage(
                            'AvatarImage',
                            {
                                x: u.Iq,
                                y: u.sB
                            },
                            {
                                w: u.$S,
                                h: u.$S
                            },
                            50
                        );
                    })(e),
                    (function (e, t) {
                        e.setColor('white'),
                            e.setFont({
                                size: 16,
                                family: u.I8,
                                weight: u.Ue,
                                truncate: i.GX.Wrap
                            }),
                            e.drawText(
                                t,
                                {
                                    x: u.Iq,
                                    y: 64,
                                    h: 32,
                                    w: u.kC
                                },
                                !0
                            );
                    })(e, c),
                    (0, o.J)({
                        canvas: e,
                        badges: h,
                        startPosition: u.Iq,
                        maxWidth: u.kC
                    });
            },
            exportConfigs: {
                format: i.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(v, '.png').toLowerCase(),
                fileType: 'png',
                channelId: n.id
            }
        });
    };
