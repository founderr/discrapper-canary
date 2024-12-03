n.d(t, {
    Z: function () {
        return B;
    },
    _: function () {
        return W;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(872810),
    d = n(763520),
    m = n(194082),
    f = n(324085),
    p = n(710845),
    g = n(590293),
    h = n(863908),
    v = n(871118),
    S = n(517525),
    I = n(352978),
    _ = n(590076),
    x = n(507675),
    E = n(199902),
    Z = n(314897),
    C = n(592125),
    y = n(131951),
    b = n(451478),
    T = n(685203),
    A = n(112560),
    N = n(442168),
    w = n(822296),
    j = n(916771),
    P = n(792517),
    R = n(979425),
    M = n(651183),
    O = n(623825),
    L = n(981631),
    k = n(354459),
    D = n(65154),
    U = n(388032),
    V = n(995544);
let F = new p.Z('StreamTile');
function W(e) {
    let { participant: t, selected: n, focused: a, idle: r, width: o, premiumIndicator: c } = e,
        u = (0, s.e7)([E.Z], () => E.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, O.K)(o),
        [p, g] = l.useState(!1),
        h = (0, s.e7)([C.Z], () => C.Z.getChannel(null == u ? void 0 : u.channelId));
    return (
        (0, f.J)(h, () => {
            let e = setTimeout(() => {
                    g(!0);
                }, 5000),
                t = setTimeout(() => {
                    g(!1);
                }, 15000);
            return () => {
                g(!1), clearTimeout(e), clearTimeout(t);
            };
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                n ? null : (0, i.jsx)(M.Z, { participant: t }),
                a || null == u || u.state === L.jm8.ENDED || u.state === L.jm8.FAILED
                    ? null
                    : (0, i.jsx)(S.Z, {
                          size: m.ZP.Sizes.SMALL,
                          className: V.liveIndicator,
                          participant: t,
                          showQuality: (!d && !r) || p,
                          isUpsellEnabled: !1,
                          premiumIndicator: c
                      })
            ]
        })
    );
}
function B(e) {
    let { participant: t, selected: n, onVideoResize: a, paused: m, fit: f, inPopout: p, width: S, focused: M, wrapperClassName: O } = e,
        W = y.Z.getVideoComponent(),
        B = (0, s.e7)([Z.default], () => Z.default.getId()),
        G = (0, g.Z)(),
        { stream: z, user: H, streamId: Y } = t,
        J = (0, s.e7)([C.Z], () => C.Z.getChannel(z.channelId)),
        q = (0, s.e7)([E.Z], () => E.Z.getActiveStreamForUser(H.id, z.guildId), [H.id, z.guildId]),
        X = (0, s.e7)([E.Z], () => E.Z.getAllActiveStreams().length > 0),
        K = (0, s.e7)([b.Z], () => b.Z.isFocused()),
        Q = (null == q ? void 0 : q.ownerId) === B,
        $ = Q && !K && !p,
        ee = null != q ? (0, h.Z)(q, H, H.id === B, $) : null,
        et = S < 195;
    if (
        (l.useEffect(() => {
            !X && (null == J ? void 0 : J.isGuildStageVoice()) && !Q && ((0, u.rn)(z), c.Z.updateStageStreamSize(z.channelId, !1));
        }, []),
        l.useEffect(() => {
            F.info(
                'Stream Tile State - activeStream: '
                    .concat(null != q, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != W, ' | MediaEngine: ')
                    .concat(y.Z.supports(D.AN.VIDEO))
            );
        }, [W, q, n]),
        G)
    )
        return (0, i.jsx)(R.Z, {
            stream: t.stream,
            isSmall: et,
            selected: n,
            isSelfStream: H.id === B
        });
    if ((null == q ? void 0 : q.state) === L.jm8.ENDED)
        return (0, i.jsx)(w.Z, {
            selected: n,
            stream: q,
            width: S
        });
    if ((null == q ? void 0 : q.state) === L.jm8.FAILED)
        return (0, i.jsx)(j.Z, {
            selected: n,
            stream: q,
            width: S
        });
    else if (t.type === k.fO.HIDDEN_STREAM)
        return (0, i.jsx)(P.Z, {
            selected: n,
            participant: t,
            width: S
        });
    else if (null != q && !n && null != W && y.Z.supports(D.AN.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != J
                    ? (0, i.jsx)(_.Z, {
                          focused: M,
                          channelId: J.id,
                          guildId: J.guild_id,
                          streamerId: H.id,
                          hasScreenMessage: null != ee,
                          stream: z
                      })
                    : null,
                (0, i.jsx)(
                    I.Z,
                    {
                        onResize: a,
                        wrapperClassName: r()(V.videoWrapper, O),
                        className: V.content,
                        streamId: Y,
                        videoComponent: W,
                        fit: f,
                        paused: m || $,
                        videoSpinnerContext: Q ? d.m.SELF_STREAM : d.m.REMOTE_STREAM,
                        userId: H.id
                    },
                    Y
                ),
                null != ee
                    ? (0, i.jsx)(x.Z, {
                          size: (0, A.L)(S),
                          ...ee
                      })
                    : null,
                (0, i.jsx)(N.Z, {
                    stream: z,
                    inPopout: p
                })
            ]
        });
    else
        return (0, i.jsxs)('div', {
            className: r()(V.content, V.streamPreview, { [V.small]: et }),
            children: [
                (0, i.jsx)(v.Z, {
                    noText: !0,
                    className: r()(V.absoluteFill, { [V.streamPreviewOpacity]: null == q }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(T.a, {
                                  isSmall: et,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: et ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: S < 175 ? U.intl.string(U.t['I6JG4+']) : U.intl.string(U.t['7Xq/nZ'])
                                  })
                              }),
                              X
                                  ? (0, i.jsx)(T.a, {
                                        className: V.addCTA,
                                        tooltip: U.intl.string(U.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(z, { forceMultiple: !0 });
                                        },
                                        isSmall: et,
                                        children: (0, i.jsx)(o.EyePlusIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: V.addStreamIcon
                                        })
                                    })
                                  : null
                          ]
                      })
            ]
        });
}
