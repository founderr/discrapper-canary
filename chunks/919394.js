t.d(n, {
    SO: function () {
        return N;
    }
}),
    t(653041),
    t(512722);
var a = t(913527),
    l = t.n(a),
    i = t(705512);
t(812206);
var r = t(55000);
t(220082);
var s = t(693824),
    o = t(690725);
t(706454), t(594174);
var u = t(70956),
    c = t(709054),
    d = t(561308);
t(206295);
var _ = t(737583);
t(438226);
var m = t(169040),
    E = t(689938);
let T = (e, n) => ({
        AvatarImage1: e[0],
        ...(null != e[1] && { AvatarImage2: e[1] }),
        ...(null != e[2] && { AvatarImage3: e[2] }),
        ...(null != n && { ApplicationImage: n })
    }),
    h = (e, n) => {
        let t = [
                {
                    iconPath: m.NM,
                    text: n
                }
            ],
            a = c.default.extractTimestamp(e.extra.application_id);
        if (
            (7 >= l()().diff(l()(a), 'days') &&
                t.push({
                    iconPath: m.As,
                    text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
                }),
            (0, d.Ol)(e) &&
                t.push({
                    iconPath: m.fO,
                    text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
                }),
            (0, d.q_)(e))
        ) {
            let n = (0, d.vU)(e);
            t.push({
                iconPath: m.t1,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({ days: n })
            });
        }
        (0, d.ig)(e) === i.o.GLOBAL &&
            t.push({
                iconPath: m.Op,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
            });
        let r = (0, d.dw)(e);
        if (
            (null != r &&
                t.push({
                    iconPath: m.Z,
                    text: (0, d.GE)(r)
                }),
            (0, d.V5)(e))
        ) {
            let { text: n } = (0, d.zo)(e);
            null != n &&
                t.push({
                    iconPath: m.Md,
                    text: n
                });
        }
        if ((0, d.Jd)(e)) {
            let n = (0, d.yA)(e);
            if (null != n) {
                let e = E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({ hours: Math.round(n / u.Z.Seconds.HOUR) });
                return [
                    {
                        iconPath: m.eF,
                        text: ''.concat(E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, ' \u2014 ').concat(e)
                    }
                ];
            }
        }
        return t;
    },
    x = (e, n) => {
        let { timestamp: t, colors: a, description: l, entry: i, numAvatars: o } = n,
            u = a.map((e, n) => ({
                color: e,
                stop: n
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
            ) === s.vP.Failure &&
                e.drawPath(
                    r.Cv,
                    {
                        x: m.sB,
                        y: m.sB
                    },
                    !0,
                    2 + 2 / 3
                );
        (0, _.l)({
            canvas: e,
            avatarSrcs: ['AvatarImage1', 'AvatarImage2', 'AvatarImage3'].slice(0, o),
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
                truncate: s.GX.Wrap
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
        let c = h(i, t);
        (0, _.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC
        });
    },
    N = async (e) => {
        let { applicationImageSrc: n, entry: t, avatarSrcs: a, description: l, timestamp: i, colors: r, channelId: u } = e,
            c = t.extra.game_name,
            d = T(a, n);
        return await (0, o.f)({
            assetsToLoad: d,
            drawImage: (e) =>
                x(e, {
                    timestamp: i,
                    colors: r,
                    description: l,
                    entry: t,
                    numAvatars: a.length
                }),
            exportConfigs: {
                format: s.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(c, '.png').toLowerCase(),
                fileType: 'png',
                channelId: u
            }
        });
    };
