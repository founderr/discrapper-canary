t.d(n, {
    CR: function () {
        return E;
    },
    UU: function () {
        return m;
    },
    jE: function () {
        return d;
    }
}),
    t(627494),
    t(757143);
var a = t(884439),
    l = t(55000),
    i = t(693824),
    r = t(690725),
    s = t(561308),
    o = t(737583),
    u = t(169040),
    c = t(689938);
let d = (e) => {
        let { timestamp: n } = e;
        return [
            {
                iconPath: u.mb,
                text: n
            }
        ];
    },
    m = (e) => {
        var n;
        let t = null === (n = (0, s.PJ)(e, a.N.AGGREGATE_COUNT)) || void 0 === n ? void 0 : n.count;
        return null == t
            ? []
            : [
                  {
                      iconPath: u.eF,
                      text: c.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({ count: t })
                  }
              ];
    },
    _ = (e) => {
        let { avatarSrc: n, mediaImageSrc: t } = e;
        return {
            AvatarImage: n,
            ...(null != t && { MediaImage: t })
        };
    },
    E = async (e) => {
        let { user: n, channel: t, mediaImageSrc: a, artist: s, description: c, colors: d, badges: m } = e,
            E = _({
                avatarSrc: n.getAvatarURL(t.guild_id, 128),
                mediaImageSrc: a
            }),
            T = s.replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll(' ', '-');
        return await (0, r.f)({
            assetsToLoad: E,
            drawImage: (e) => {
                (function (e, n) {
                    let t = n.map((e, n) => ({
                        color: e,
                        stop: n
                    }));
                    e.setSize(
                        {
                            w: u.nx,
                            h: u.bg
                        },
                        4
                    ),
                        e.drawRoundedGradientRect(
                            t,
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
                                l.Cv,
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
                    (function (e, n) {
                        e.setColor('white'),
                            e.setFont({
                                size: 16,
                                family: u.I8,
                                weight: u.Ue,
                                truncate: i.GX.Wrap
                            }),
                            e.drawText(
                                n,
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
                        badges: m,
                        startPosition: u.Iq,
                        maxWidth: u.kC
                    });
            },
            exportConfigs: {
                format: i.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(T, '.png').toLowerCase(),
                fileType: 'png',
                channelId: t.id
            }
        });
    };
