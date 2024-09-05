n.r(t),
    n.d(t, {
        sendReactionToActivity: function () {
            return g;
        },
        sendReplyToActivity: function () {
            return S;
        }
    });
var r = n(512722),
    i = n.n(r),
    a = n(493683),
    s = n(726542),
    o = n(122810),
    l = n(503438),
    u = n(693824),
    c = n(690725),
    d = n(90712),
    _ = n(592125),
    E = n(81063),
    f = n(176354),
    h = n(201133),
    p = n(55000),
    I = n(314091),
    m = n(981631),
    T = n(689938);
let g = async (e) => {
        let { reaction: t, altText: n, ...r } = e,
            i = await N(r);
        (0, h.a)({
            file: i,
            altText: n,
            user: r.user,
            reaction: t
        });
    },
    S = async (e) => {
        let { reply: t, altText: n, ...r } = e,
            s = await N(r),
            o = await a.Z.openPrivateChannel(r.user.id, !1, !1),
            l = _.Z.getChannel(o);
        i()(null != l, 'Channel cannot be null'),
            (0, h.B)({
                file: s,
                altText: n,
                channel: l,
                reply: t
            });
    },
    A = (e) => {
        var t;
        let { activity: r, application: i, user: a } = e,
            { theme: s } = (0, I.j3)(a, 'black'),
            o = 'dark' === s,
            l = (0, d.Z)(r),
            { assets: u, application_id: c } = r,
            _ = (0, E.getAssetImage)(c, null == u ? void 0 : u.large_image, 64),
            h = null == i ? void 0 : i.getIconURL(64),
            p = null != l ? (o ? l.icon.darkPNG : l.icon.lightPNG) : r.type === m.IIU.PLAYING ? (o ? n(414575) : n(807612)) : null,
            T =
                r.type === m.IIU.HANG_STATUS && (null === (t = r.emoji) || void 0 === t ? void 0 : t.id) != null
                    ? (0, f.qc)({
                          id: r.emoji.id,
                          name: r.emoji.name,
                          animated: !1
                      })
                    : null;
        return {
            ...(null != p && { Platform: p }),
            ...(null != _ && { AssetImage: _.includes('http') ? _ : n(869469)(_) }),
            ...(null != h && { ApplicationImage: h }),
            ...(null != T && { HangStatus: T })
        };
    },
    N = async (e) => {
        let { user: t, activity: n, application: r, stream: i } = e,
            d = await a.Z.openPrivateChannel(t.id, !1, !1),
            _ = A({
                activity: n,
                application: r,
                user: t
            });
        return await (0, c.f)({
            assetsToLoad: _,
            drawImage: (e) => {
                var r;
                e.setFont({ truncate: u.GX.Truncate }),
                    null != i ? L(e, n, t) : (0, l.Z)(n) ? v(e, n, t) : (0, o.Z)(n) && n.name === s.Z.get(m.ABu.LEAGUE_OF_LEGENDS).name ? y(e, n, t) : n.type === m.IIU.HANG_STATUS ? C(e, n, t) : R(e, n, t),
                    (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('Platform')) &&
                        e.drawImage(
                            'Platform',
                            {
                                x: p.En - p.o3 - p.ez,
                                y: p.o3
                            },
                            {
                                w: p.ez,
                                h: p.ez
                            }
                        );
            },
            exportConfigs: {
                format: u.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(n.name, '.png').toLowerCase(),
                fileType: 'png',
                channelId: d
            }
        });
    },
    O = (e, t) => {
        e.setColor('dark' === t ? 'white' : 'black'),
            e.drawPath(
                p.Cv,
                {
                    x: p.o3,
                    y: p.o3
                },
                !0,
                2 + 2 / 3
            );
    },
    R = (e, t, n) => {
        var r, i, a;
        e.setSize({
            w: p.En,
            h: p.dI
        });
        let { color: s, theme: o } = (0, I.j3)(n, 'black');
        e.setColor(s),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            e.setColor('dark' === o ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: p.o3,
                          y: p.o3
                      },
                      {
                          w: p.vS,
                          h: p.vS
                      },
                      8
                  )
                : (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: p.o3,
                            y: p.o3
                        },
                        {
                            w: p.vS,
                            h: p.vS
                        },
                        8
                    )
                  : O(e, o);
        let l = p.vS + p.o3 + p.sB;
        e.setColor('dark' === o ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.name),
                {
                    x: l,
                    y: p.SG + 1 * p.Nv,
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(p.W3.Platform)) ? p.ee : p.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 400
                }),
                e.drawText(
                    'for '.concat((0, I.b6)(t.timestamps)),
                    {
                        x: l,
                        y: p.SG + 2 * p.Nv
                    },
                    !0
                ));
    },
    v = (e, t, n) => {
        var r, i;
        e.setSize({
            w: p.En,
            h: p.dI
        });
        let { color: a, theme: s } = (0, I.j3)(n, 'black');
        e.setColor(a),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('AssetImage')) &&
                e.drawRoundedImage(
                    'AssetImage',
                    {
                        x: p.o3,
                        y: p.o3
                    },
                    {
                        w: p.vS,
                        h: p.vS
                    },
                    8
                );
        let o = p.vS + p.o3 + p.sB;
        e.setColor('dark' === s ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: o,
                    y: p.SG + 1 * p.Nv,
                    w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has(p.W3.Platform)) ? p.ee : p.sp
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
                    x: o,
                    y: p.SG + 2 * p.Nv
                },
                !0
            );
    },
    C = (e, t, r) => {
        var i, a;
        e.setSize({
            w: p.En,
            h: p.dI
        });
        let { color: s, theme: o } = (0, I.j3)(r, 'black');
        e.setColor(s),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            e.setColor('dark' === o ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('HangStatus'))
                ? e.drawRoundedImage(
                      'HangStatus',
                      {
                          x: p.o3,
                          y: p.o3
                      },
                      {
                          w: p.vS,
                          h: p.vS
                      },
                      8
                  )
                : O(e, o);
        let l = p.vS + p.o3 + p.sB;
        e.setColor('dark' === o ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                T.Z.Messages.STATUS_LEAD_IN_JUST,
                {
                    x: l,
                    y: p.SG + 1 * p.Nv,
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(p.W3.Platform)) ? p.ee : p.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            });
        let u = '';
        (u = (0, n(833858).O8)(t)),
            e.drawText(
                u,
                {
                    x: l,
                    y: p.SG + 2 * p.Nv
                },
                !0
            );
    },
    y = (e, t, n) => {
        var r;
        e.setSize({
            w: p.En,
            h: p.dI
        });
        let { color: i, theme: a } = (0, I.j3)(n, 'black');
        e.setColor(i),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'white' : 'black'),
            e.drawRoundedImage(
                'AssetImage',
                {
                    x: p.o3,
                    y: p.o3
                },
                {
                    w: p.vS,
                    h: p.vS
                },
                8
            ) === u.vP.Failure &&
                e.drawPath(
                    p.Cv,
                    {
                        x: p.o3,
                        y: p.o3
                    },
                    !0,
                    2 + 2 / 3
                );
        let s = p.vS + p.o3 + p.sB;
        e.setColor('dark' === a ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: s,
                    y: p.SG + 1 * p.Nv,
                    w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('Platform')) ? p.ee : p.sp
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
                    y: p.SG + 2 * p.Nv
                },
                !0
            );
    },
    L = (e, t, n) => {
        var r, i, a;
        e.setSize({
            w: p.En,
            h: p.dI
        });
        let { color: s, theme: o } = (0, I.j3)(n, 'black');
        e.setColor(s),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            e.setColor('dark' === o ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: p.dI,
                    w: p.En
                },
                8,
                !0
            ),
            (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: p.o3,
                          y: p.o3
                      },
                      {
                          w: p.vS,
                          h: p.vS
                      },
                      8
                  )
                : (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: p.o3,
                            y: p.o3
                        },
                        {
                            w: p.vS,
                            h: p.vS
                        },
                        8
                    )
                  : O(e, o);
        let l = p.vS + p.o3 + p.sB;
        e.setColor('dark' === o ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                'Streaming '.concat(t.name),
                {
                    x: l,
                    y: p.SG + p.Nv * (null != t.timestamps ? 1 : 1.5),
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(p.W3.Platform)) ? p.ee : p.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 500
                }),
                e.drawText(
                    'for '.concat((0, I.b6)(t.timestamps)),
                    {
                        x: l,
                        y: p.SG + 2 * p.Nv
                    },
                    !0
                ));
    };
