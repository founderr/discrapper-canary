n.r(t),
    n.d(t, {
        sendReactionToActivity: function () {
            return _;
        },
        sendReplyToActivity: function () {
            return I;
        }
    });
var i = n(512722),
    l = n.n(i),
    r = n(493683),
    s = n(726542),
    a = n(122810),
    o = n(503438),
    c = n(693824),
    u = n(690725),
    d = n(90712),
    h = n(592125),
    m = n(81063),
    p = n(176354),
    f = n(201133),
    g = n(55000),
    C = n(314091),
    x = n(981631),
    v = n(388032);
let _ = async (e) => {
        let { reaction: t, altText: n, ...i } = e,
            l = await b(i);
        (0, f.a)({
            file: l,
            altText: n,
            user: i.user,
            reaction: t
        });
    },
    I = async (e) => {
        let { reply: t, altText: n, ...i } = e,
            s = await b(i),
            a = await r.Z.openPrivateChannel(i.user.id, !1, !1),
            o = h.Z.getChannel(a);
        l()(null != o, 'Channel cannot be null'),
            (0, f.B)({
                file: s,
                altText: n,
                channel: o,
                reply: t
            });
    },
    E = (e) => {
        var t;
        let { activity: i, application: l, user: r } = e,
            { theme: s } = (0, C.j3)(r, 'black'),
            a = 'dark' === s,
            o = (0, d.Z)(i),
            { assets: c, application_id: u } = i,
            h = (0, m.getAssetImage)(u, null == c ? void 0 : c.large_image, 64),
            f = null == l ? void 0 : l.getIconURL(64),
            g = null != o ? (a ? o.icon.darkPNG : o.icon.lightPNG) : i.type === x.IIU.PLAYING ? (a ? n(414575) : n(807612)) : null,
            v =
                i.type === x.IIU.HANG_STATUS && (null === (t = i.emoji) || void 0 === t ? void 0 : t.id) != null
                    ? (0, p.qc)({
                          id: i.emoji.id,
                          name: i.emoji.name,
                          animated: !1
                      })
                    : null;
        return {
            ...(null != g && { Platform: g }),
            ...(null != h && { AssetImage: h.includes('http') ? h : n(869469)(h) }),
            ...(null != f && { ApplicationImage: f }),
            ...(null != v && { HangStatus: v })
        };
    },
    b = async (e) => {
        let { user: t, activity: n, application: i, stream: l } = e,
            d = await r.Z.openPrivateChannel(t.id, !1, !1),
            h = E({
                activity: n,
                application: i,
                user: t
            });
        return await (0, u.f)({
            assetsToLoad: h,
            drawImage: (e) => {
                var i;
                e.setFont({ truncate: c.GX.Truncate }),
                    null != l ? A(e, n, t) : (0, o.Z)(n) ? T(e, n, t) : (0, a.Z)(n) && n.name === s.Z.get(x.ABu.LEAGUE_OF_LEGENDS).name ? j(e, n, t) : n.type === x.IIU.HANG_STATUS ? N(e, n, t) : Z(e, n, t),
                    (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('Platform')) &&
                        e.drawImage(
                            'Platform',
                            {
                                x: g.En - g.o3 - g.ez,
                                y: g.o3
                            },
                            {
                                w: g.ez,
                                h: g.ez
                            }
                        );
            },
            exportConfigs: {
                format: c.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(n.name, '.png').toLowerCase(),
                fileType: 'png',
                channelId: d
            }
        });
    },
    S = (e, t) => {
        e.setColor('dark' === t ? 'white' : 'black'),
            e.drawPath(
                g.Cv,
                {
                    x: g.o3,
                    y: g.o3
                },
                !0,
                2 + 2 / 3
            );
    },
    Z = (e, t, n) => {
        var i, l, r;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: s, theme: a } = (0, C.j3)(n, 'black');
        e.setColor(s),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: g.o3,
                          y: g.o3
                      },
                      {
                          w: g.vS,
                          h: g.vS
                      },
                      8
                  )
                : (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: g.o3,
                            y: g.o3
                        },
                        {
                            w: g.vS,
                            h: g.vS
                        },
                        8
                    )
                  : S(e, a);
        let o = g.vS + g.o3 + g.sB;
        e.setColor('dark' === a ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.name),
                {
                    x: o,
                    y: g.SG + 1 * g.Nv,
                    w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 400
                }),
                e.drawText(
                    'for '.concat((0, C.b6)(t.timestamps)),
                    {
                        x: o,
                        y: g.SG + 2 * g.Nv
                    },
                    !0
                ));
    },
    T = (e, t, n) => {
        var i, l;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: r, theme: s } = (0, C.j3)(n, 'black');
        e.setColor(r),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage')) &&
                e.drawRoundedImage(
                    'AssetImage',
                    {
                        x: g.o3,
                        y: g.o3
                    },
                    {
                        w: g.vS,
                        h: g.vS
                    },
                    8
                );
        let a = g.vS + g.o3 + g.sB;
        e.setColor('dark' === s ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: a,
                    y: g.SG + 1 * g.Nv,
                    w: (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            }),
            e.drawText(
                'by '.concat(t.state),
                {
                    x: a,
                    y: g.SG + 2 * g.Nv
                },
                !0
            );
    },
    N = (e, t, i) => {
        var l, r;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: s, theme: a } = (0, C.j3)(i, 'black');
        e.setColor(s),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('HangStatus'))
                ? e.drawRoundedImage(
                      'HangStatus',
                      {
                          x: g.o3,
                          y: g.o3
                      },
                      {
                          w: g.vS,
                          h: g.vS
                      },
                      8
                  )
                : S(e, a);
        let o = g.vS + g.o3 + g.sB;
        e.setColor('dark' === a ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                v.intl.string(v.t['74vS//']),
                {
                    x: o,
                    y: g.SG + 1 * g.Nv,
                    w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            });
        let c = '';
        (c = (0, n(833858).O8)(t)),
            e.drawText(
                c,
                {
                    x: o,
                    y: g.SG + 2 * g.Nv
                },
                !0
            );
    },
    j = (e, t, n) => {
        var i;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: l, theme: r } = (0, C.j3)(n, 'black');
        e.setColor(l),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === r ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === r ? 'white' : 'black'),
            e.drawRoundedImage(
                'AssetImage',
                {
                    x: g.o3,
                    y: g.o3
                },
                {
                    w: g.vS,
                    h: g.vS
                },
                8
            ) === c.vP.Failure &&
                e.drawPath(
                    g.Cv,
                    {
                        x: g.o3,
                        y: g.o3
                    },
                    !0,
                    2 + 2 / 3
                );
        let s = g.vS + g.o3 + g.sB;
        e.setColor('dark' === r ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: s,
                    y: g.SG + 1 * g.Nv,
                    w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('Platform')) ? g.ee : g.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            }),
            e.drawText(
                ''.concat(t.state),
                {
                    x: s,
                    y: g.SG + 2 * g.Nv
                },
                !0
            );
    },
    A = (e, t, n) => {
        var i, l, r;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: s, theme: a } = (0, C.j3)(n, 'black');
        e.setColor(s),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: g.o3,
                          y: g.o3
                      },
                      {
                          w: g.vS,
                          h: g.vS
                      },
                      8
                  )
                : (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: g.o3,
                            y: g.o3
                        },
                        {
                            w: g.vS,
                            h: g.vS
                        },
                        8
                    )
                  : S(e, a);
        let o = g.vS + g.o3 + g.sB;
        e.setColor('dark' === a ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                'Streaming '.concat(t.name),
                {
                    x: o,
                    y: g.SG + g.Nv * (null != t.timestamps ? 1 : 1.5),
                    w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 500
                }),
                e.drawText(
                    'for '.concat((0, C.b6)(t.timestamps)),
                    {
                        x: o,
                        y: g.SG + 2 * g.Nv
                    },
                    !0
                ));
    };
