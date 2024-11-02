n.d(t, {
    C4: function () {
        return g;
    }
}),
    n(653041),
    n(627494),
    n(757143),
    n(512722);
var i = n(913527),
    l = n.n(i),
    a = n(705512);
n(812206);
var r = n(55000);
n(220082);
var o = n(693824),
    s = n(690725);
n(706454), n(594174);
var u = n(70956);
n(5192);
var c = n(709054),
    d = n(561308);
n(206295);
var h = n(737583),
    m = n(169040),
    x = n(388032);
let v = (e, t) => ({
        AvatarImage1: e[0],
        ...(null != e[1] && { AvatarImage2: e[1] }),
        ...(null != e[2] && { AvatarImage3: e[2] }),
        ...(null != t && { ApplicationImage: t })
    }),
    f = (e, t) => {
        let n = [
                {
                    iconPath: m.NM,
                    text: t
                }
            ],
            i = c.default.extractTimestamp(e.extra.application_id);
        if (
            (7 >= l()().diff(l()(i), 'days') &&
                n.push({
                    iconPath: m.As,
                    text: x.intl.string(x.t.vYuyWV)
                }),
            (0, d.Ol)(e) &&
                n.push({
                    iconPath: m.fO,
                    text: x.intl.string(x.t.keY6mZ)
                }),
            (0, d.q_)(e))
        ) {
            let t = (0, d.vU)(e);
            n.push({
                iconPath: m.t1,
                text: x.intl.formatToPlainString(x.t['Klie/P'], { days: t })
            });
        }
        (0, d.ig)(e) === a.o.GLOBAL &&
            n.push({
                iconPath: m.Op,
                text: x.intl.string(x.t.kAlUs7)
            });
        let r = (0, d.dw)(e);
        if (
            (null != r &&
                n.push({
                    iconPath: m.Z,
                    text: (0, d.GE)(r)
                }),
            (0, d.V5)(e))
        ) {
            let { text: t } = (0, d.zo)(e);
            null != t &&
                n.push({
                    iconPath: m.Md,
                    text: t
                });
        }
        if ((0, d.Jd)(e)) {
            let t = (0, d.yA)(e);
            if (null != t) {
                let e = x.intl.formatToPlainString(x.t.C0Axoa, { hours: Math.round(t / u.Z.Seconds.HOUR) });
                return [
                    {
                        iconPath: m.eF,
                        text: ''.concat(x.intl.string(x.t['/50eHh']), ' \u2014 ').concat(e)
                    }
                ];
            }
        }
        return n;
    },
    p = (e, t) => {
        let { timestamp: n, colors: i, description: l, entry: a, numAvatars: s } = t,
            u = i.map((e, t) => ({
                color: e,
                stop: t
            }));
        e.setSize(
            {
                w: m.nx,
                h: m.bg
            },
            4
        ),
            e.drawRoundedGradientRect(
                u,
                {
                    x: 0,
                    y: m.bg
                },
                {
                    x: m.nx,
                    y: 0
                },
                {
                    x: 0,
                    y: 0,
                    h: m.bg,
                    w: m.nx
                },
                8
            ),
            e.setColor('white'),
            e.drawRoundedImage(
                'ApplicationImage',
                {
                    x: m.sB,
                    y: m.sB
                },
                {
                    w: m.Pu,
                    h: m.Pu
                },
                8
            ) === o.vP.Failure &&
                e.drawPath(
                    r.Cv,
                    {
                        x: m.sB,
                        y: m.sB
                    },
                    !0,
                    2 + 2 / 3
                );
        (0, h.l)({
            canvas: e,
            avatarSrcs: ['AvatarImage1', 'AvatarImage2', 'AvatarImage3'].slice(0, s),
            position: {
                x: m.Iq,
                y: m.sB
            },
            avatarImageSize: m.$S
        }),
            e.setColor('white'),
            e.setFont({
                size: 16,
                family: m.I8,
                weight: m.Ue,
                truncate: o.GX.Wrap
            }),
            e.drawText(
                l,
                {
                    x: m.Iq,
                    y: 64,
                    h: 32,
                    w: m.kC
                },
                !0
            );
        let c = f(a, n);
        (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC
        });
    },
    g = async (e) => {
        let { applicationImageSrc: t, entry: n, avatarSrcs: i, description: l, timestamp: a, colors: r, channelId: u } = e,
            c = n.extra.activity_name,
            d = v(i, t);
        return await (0, s.f)({
            assetsToLoad: d,
            drawImage: (e) =>
                p(e, {
                    timestamp: a,
                    colors: r,
                    description: l,
                    entry: n,
                    numAvatars: i.length
                }),
            exportConfigs: {
                format: o.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(c, '.png').toLowerCase(),
                fileType: 'png',
                channelId: u
            }
        });
    };
