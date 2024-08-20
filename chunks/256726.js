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
    c = t(169040),
    u = t(689938);
let d = (e) => {
        let { timestamp: n } = e;
        return [
            {
                iconPath: c.mb,
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
                      iconPath: c.eF,
                      text: u.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({ count: t })
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
        let { user: n, channel: t, mediaImageSrc: a, artist: s, description: u, colors: d, badges: m } = e,
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
                            w: c.nx,
                            h: c.bg
                        },
                        4
                    ),
                        e.drawRoundedGradientRect(
                            t,
                            {
                                x: 0,
                                y: c.bg
                            },
                            {
                                x: c.nx,
                                y: 0
                            },
                            {
                                x: 0,
                                y: 0,
                                h: c.bg,
                                w: c.nx
                            },
                            8
                        );
                })(e, d),
                    (function (e) {
                        e.drawRoundedImage(
                            'MediaImage',
                            {
                                x: c.sB,
                                y: c.sB
                            },
                            {
                                w: c.Pu,
                                h: c.Pu
                            },
                            8,
                            { fillMode: i.JU.Contain }
                        ) === i.vP.Failure &&
                            e.drawPath(
                                l.Cv,
                                {
                                    x: c.sB,
                                    y: c.sB
                                },
                                !0,
                                2 + 2 / 3
                            );
                    })(e),
                    (function (e) {
                        e.drawRoundedImage(
                            'AvatarImage',
                            {
                                x: c.Iq,
                                y: c.sB
                            },
                            {
                                w: c.$S,
                                h: c.$S
                            },
                            50
                        );
                    })(e),
                    (function (e, n) {
                        e.setColor('white'),
                            e.setFont({
                                size: 16,
                                family: c.I8,
                                weight: c.Ue,
                                truncate: i.GX.Wrap
                            }),
                            e.drawText(
                                n,
                                {
                                    x: c.Iq,
                                    y: 64,
                                    h: 32,
                                    w: c.kC
                                },
                                !0
                            );
                    })(e, u),
                    (0, o.J)({
                        canvas: e,
                        badges: m,
                        startPosition: c.Iq,
                        maxWidth: c.kC
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
