n.d(t, {
    B: function () {
        return c;
    }
}),
    n(653041);
var l = n(55000),
    a = n(693824),
    i = n(690725),
    r = n(737583),
    s = n(169040);
let o = (e, t, n) => ({
        AvatarImage: e,
        ...(null != t && { MediaImage: t }),
        ...(null != n && { ApplicationImage: n })
    }),
    u = (e, t) => {
        let n = [
            {
                iconPath: s.i6,
                text: e
            }
        ];
        return (
            null != t &&
                n.push({
                    iconPath: s.fj,
                    text: t
                }),
            n
        );
    },
    c = async (e) => {
        let { mediaImageSrc: t, entry: n, avatarSrc: c, description: d, timestamp: h, episodeDescription: m, colors: x, channelId: v } = e,
            E = n.extra.media_title,
            _ = o(c, t);
        return await (0, i.f)({
            assetsToLoad: _,
            drawImage: (e) => {
                let t = x.map((e, t) => ({
                    color: e,
                    stop: t
                }));
                e.setSize(
                    {
                        w: s.nx,
                        h: s.bg
                    },
                    4
                ),
                    e.drawRoundedGradientRect(
                        t,
                        {
                            x: 0,
                            y: s.bg
                        },
                        {
                            x: s.nx,
                            y: 0
                        },
                        {
                            x: 0,
                            y: 0,
                            h: s.bg,
                            w: s.nx
                        },
                        8
                    ),
                    e.setColor('white');
                let n = e.drawRoundedImage(
                    'MediaImage',
                    {
                        x: s.sB,
                        y: s.sB
                    },
                    {
                        w: s.Pu,
                        h: s.Pu
                    },
                    8,
                    { fillMode: a.JU.Contain }
                );
                n === a.vP.Failure &&
                    (n = e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: s.sB,
                            y: s.sB
                        },
                        {
                            w: s.Pu,
                            h: s.Pu
                        },
                        8
                    )),
                    n === a.vP.Failure &&
                        e.drawPath(
                            l.Cv,
                            {
                                x: s.sB,
                                y: s.sB
                            },
                            !0,
                            2 + 2 / 3
                        ),
                    e.drawRoundedImage(
                        'AvatarImage',
                        {
                            x: s.Iq,
                            y: s.sB
                        },
                        {
                            w: s.$S,
                            h: s.$S
                        },
                        50
                    ),
                    e.setFont({
                        size: 16,
                        family: s.I8,
                        weight: s.Ue,
                        truncate: a.GX.Wrap
                    }),
                    e.drawText(
                        d,
                        {
                            x: s.Iq,
                            y: 64,
                            h: 32,
                            w: s.kC
                        },
                        !0
                    );
                let i = u(h, m);
                (0, r.J)({
                    canvas: e,
                    badges: i,
                    startPosition: s.Iq,
                    maxWidth: s.kC
                });
            },
            exportConfigs: {
                format: a.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(E, '.png').toLowerCase(),
                fileType: 'png',
                channelId: v
            }
        });
    };
