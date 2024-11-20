n.d(t, {
    C4: function () {
        return v;
    }
}),
    n(653041),
    n(627494),
    n(757143),
    n(512722);
var l = n(913527),
    a = n.n(l),
    i = n(705512);
n(812206);
var r = n(55000);
n(220082);
var o = n(693824),
    s = n(690725);
n(706454), n(594174);
var c = n(70956);
n(5192);
var u = n(709054),
    d = n(561308);
n(206295);
var m = n(737583),
    h = n(169040),
    x = n(388032);
let p = (e, t) => ({
        AvatarImage1: e[0],
        ...(null != e[1] && { AvatarImage2: e[1] }),
        ...(null != e[2] && { AvatarImage3: e[2] }),
        ...(null != t && { ApplicationImage: t })
    }),
    C = (e, t) => {
        let n = [
                {
                    iconPath: h.NM,
                    text: t
                }
            ],
            l = u.default.extractTimestamp(e.extra.application_id);
        if (
            (7 >= a()().diff(a()(l), 'days') &&
                n.push({
                    iconPath: h.As,
                    text: x.intl.string(x.t.vYuyWV)
                }),
            (0, d.Ol)(e) &&
                n.push({
                    iconPath: h.fO,
                    text: x.intl.string(x.t.keY6mZ)
                }),
            (0, d.q_)(e))
        ) {
            let t = (0, d.vU)(e);
            n.push({
                iconPath: h.t1,
                text: x.intl.formatToPlainString(x.t['Klie/P'], { days: t })
            });
        }
        (0, d.ig)(e) === i.o.GLOBAL &&
            n.push({
                iconPath: h.Op,
                text: x.intl.string(x.t.kAlUs7)
            });
        let r = (0, d.dw)(e);
        if (
            (null != r &&
                n.push({
                    iconPath: h.Z,
                    text: (0, d.GE)(r)
                }),
            (0, d.V5)(e))
        ) {
            let { text: t } = (0, d.zo)(e);
            null != t &&
                n.push({
                    iconPath: h.Md,
                    text: t
                });
        }
        if ((0, d.Jd)(e)) {
            let t = (0, d.yA)(e);
            if (null != t) {
                let e = x.intl.formatToPlainString(x.t.C0Axoa, { hours: Math.round(t / c.Z.Seconds.HOUR) });
                return [
                    {
                        iconPath: h.eF,
                        text: ''.concat(x.intl.string(x.t['/50eHh']), ' \u2014 ').concat(e)
                    }
                ];
            }
        }
        return n;
    },
    g = (e, t) => {
        let { timestamp: n, colors: l, description: a, entry: i, numAvatars: s } = t,
            c = l.map((e, t) => ({
                color: e,
                stop: t
            }));
        e.setSize(
            {
                w: h.nx,
                h: h.bg
            },
            4
        ),
            e.drawRoundedGradientRect(
                c,
                {
                    x: 0,
                    y: h.bg
                },
                {
                    x: h.nx,
                    y: 0
                },
                {
                    x: 0,
                    y: 0,
                    h: h.bg,
                    w: h.nx
                },
                8
            ),
            e.setColor('white'),
            e.drawRoundedImage(
                'ApplicationImage',
                {
                    x: h.sB,
                    y: h.sB
                },
                {
                    w: h.Pu,
                    h: h.Pu
                },
                8
            ) === o.vP.Failure &&
                e.drawPath(
                    r.Cv,
                    {
                        x: h.sB,
                        y: h.sB
                    },
                    !0,
                    2 + 2 / 3
                );
        (0, m.l)({
            canvas: e,
            avatarSrcs: ['AvatarImage1', 'AvatarImage2', 'AvatarImage3'].slice(0, s),
            position: {
                x: h.Iq,
                y: h.sB
            },
            avatarImageSize: h.$S
        }),
            e.setColor('white'),
            e.setFont({
                size: 16,
                family: h.I8,
                weight: h.Ue,
                truncate: o.GX.Wrap
            }),
            e.drawText(
                a,
                {
                    x: h.Iq,
                    y: 64,
                    h: 32,
                    w: h.kC
                },
                !0
            );
        let u = C(i, n);
        (0, m.J)({
            canvas: e,
            badges: u,
            startPosition: h.Iq,
            maxWidth: h.kC
        });
    },
    v = async (e) => {
        let { applicationImageSrc: t, entry: n, avatarSrcs: l, description: a, timestamp: i, colors: r, channelId: c } = e,
            u = n.extra.activity_name,
            d = p(l, t);
        return await (0, s.f)({
            assetsToLoad: d,
            drawImage: (e) =>
                g(e, {
                    timestamp: i,
                    colors: r,
                    description: a,
                    entry: n,
                    numAvatars: l.length
                }),
            exportConfigs: {
                format: o.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(u, '.png').toLowerCase(),
                fileType: 'png',
                channelId: c
            }
        });
    };
