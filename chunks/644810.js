t.d(n, {
    B: function () {
        return u;
    }
}),
    t(653041);
var a = t(55000),
    l = t(693824),
    i = t(690725),
    r = t(737583),
    s = t(169040);
let o = (e, n, t) => ({
        AvatarImage: e,
        ...(null != n && { MediaImage: n }),
        ...(null != t && { ApplicationImage: t })
    }),
    c = (e, n) => {
        let t = [
            {
                iconPath: s.i6,
                text: e
            }
        ];
        return (
            null != n &&
                t.push({
                    iconPath: s.fj,
                    text: n
                }),
            t
        );
    },
    u = async (e) => {
        let { mediaImageSrc: n, entry: t, avatarSrc: u, description: d, timestamp: m, episodeDescription: _, colors: E, channelId: T } = e,
            h = t.extra.media_title,
            x = o(u, n);
        return await (0, i.f)({
            assetsToLoad: x,
            drawImage: (e) => {
                let n = E.map((e, n) => ({
                    color: e,
                    stop: n
                }));
                e.setSize(
                    {
                        w: s.nx,
                        h: s.bg
                    },
                    4
                ),
                    e.drawRoundedGradientRect(
                        n,
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
                let t = e.drawRoundedImage(
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
                    { fillMode: l.JU.Contain }
                );
                t === l.vP.Failure &&
                    (t = e.drawRoundedImage(
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
                    t === l.vP.Failure &&
                        e.drawPath(
                            a.Cv,
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
                        truncate: l.GX.Wrap
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
                let i = c(m, _);
                (0, r.J)({
                    canvas: e,
                    badges: i,
                    startPosition: s.Iq,
                    maxWidth: s.kC
                });
            },
            exportConfigs: {
                format: l.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(h, '.png').toLowerCase(),
                fileType: 'png',
                channelId: T
            }
        });
    };
