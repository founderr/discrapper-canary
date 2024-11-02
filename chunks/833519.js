n.d(t, {
    Z: function () {
        return F;
    },
    _: function () {
        return H;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(872810),
    d = n(763520),
    h = n(194082),
    m = n(710845),
    p = n(590293),
    f = n(863908),
    g = n(871118),
    C = n(517525),
    x = n(352978),
    v = n(590076),
    _ = n(507675),
    I = n(199902),
    E = n(314897),
    b = n(592125),
    S = n(131951),
    Z = n(451478),
    T = n(685203),
    N = n(112560),
    j = n(442168),
    A = n(822296),
    y = n(916771),
    P = n(792517),
    M = n(979425),
    R = n(651183),
    L = n(623825),
    k = n(981631),
    O = n(354459),
    w = n(65154),
    D = n(388032),
    U = n(810190);
let B = new m.Z('StreamTile');
function H(e) {
    let { participant: t, selected: n, focused: l, idle: r, width: a, premiumIndicator: o } = e,
        c = (0, s.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, L.K)(a);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? null : (0, i.jsx)(R.Z, { participant: t }),
            l || null == c || c.state === k.jm8.ENDED || c.state === k.jm8.FAILED
                ? null
                : (0, i.jsx)(C.Z, {
                      size: h.ZP.Sizes.SMALL,
                      className: U.liveIndicator,
                      participant: t,
                      showQuality: !u && !r,
                      isUpsellEnabled: !1,
                      premiumIndicator: o
                  })
        ]
    });
}
function F(e) {
    let { participant: t, selected: n, onVideoResize: r, paused: h, fit: m, inPopout: C, width: R, focused: L } = e,
        H = S.Z.getVideoComponent(),
        F = (0, s.e7)([E.default], () => E.default.getId()),
        G = (0, p.Z)(),
        { stream: V, user: z, streamId: W } = t,
        Y = (0, s.e7)([b.Z], () => b.Z.getChannel(V.channelId)),
        K = (0, s.e7)([I.Z], () => I.Z.getActiveStreamForUser(z.id, V.guildId), [z.id, V.guildId]),
        q = (0, s.e7)([I.Z], () => I.Z.getAllActiveStreams().length > 0),
        X = (0, s.e7)([Z.Z], () => Z.Z.isFocused()),
        J = (null == K ? void 0 : K.ownerId) === F,
        Q = J && !X && !C,
        $ = null != K ? (0, f.Z)(K, z, z.id === F, Q) : null,
        ee = R < 195;
    if (
        (l.useEffect(() => {
            !q && (null == Y ? void 0 : Y.isGuildStageVoice()) && !J && ((0, u.rn)(V), c.Z.updateStageStreamSize(V.channelId, !1));
        }, []),
        l.useEffect(() => {
            B.info(
                'Stream Tile State - activeStream: '
                    .concat(null != K, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != H, ' | MediaEngine: ')
                    .concat(S.Z.supports(w.AN.VIDEO))
            );
        }, [H, K, n]),
        G)
    )
        return (0, i.jsx)(M.Z, {
            stream: t.stream,
            isSmall: ee,
            selected: n,
            isSelfStream: z.id === F
        });
    if ((null == K ? void 0 : K.state) === k.jm8.ENDED)
        return (0, i.jsx)(A.Z, {
            selected: n,
            stream: K,
            width: R
        });
    if ((null == K ? void 0 : K.state) === k.jm8.FAILED)
        return (0, i.jsx)(y.Z, {
            selected: n,
            stream: K,
            width: R
        });
    else if (t.type === O.fO.HIDDEN_STREAM)
        return (0, i.jsx)(P.Z, {
            selected: n,
            participant: t,
            width: R
        });
    else if (null != K && !n && null != H && S.Z.supports(w.AN.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != Y
                    ? (0, i.jsx)(v.Z, {
                          focused: L,
                          channelId: Y.id,
                          guildId: Y.guild_id,
                          streamerId: z.id,
                          hasScreenMessage: null != $,
                          stream: V
                      })
                    : null,
                (0, i.jsx)(
                    x.Z,
                    {
                        onResize: r,
                        wrapperClassName: U.videoWrapper,
                        className: U.content,
                        streamId: W,
                        videoComponent: H,
                        fit: m,
                        paused: h || Q,
                        videoSpinnerContext: J ? d.m.SELF_STREAM : d.m.REMOTE_STREAM,
                        userId: z.id
                    },
                    W
                ),
                null != $
                    ? (0, i.jsx)(_.Z, {
                          size: (0, N.L)(R),
                          ...$
                      })
                    : null,
                (0, i.jsx)(j.Z, {
                    stream: V,
                    inPopout: C
                })
            ]
        });
    else
        return (0, i.jsxs)('div', {
            className: a()(U.content, U.streamPreview, { [U.small]: ee }),
            children: [
                (0, i.jsx)(g.Z, {
                    noText: !0,
                    className: a()(U.absoluteFill, { [U.streamPreviewOpacity]: null == K }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(T.a, {
                                  isSmall: ee,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: ee ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: R < 175 ? D.intl.string(D.t['I6JG4+']) : D.intl.string(D.t['7Xq/nZ'])
                                  })
                              }),
                              q
                                  ? (0, i.jsx)(T.a, {
                                        className: U.addCTA,
                                        tooltip: D.intl.string(D.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(V, { forceMultiple: !0 });
                                        },
                                        isSmall: ee,
                                        children: (0, i.jsx)(o.EyePlusIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: U.addStreamIcon
                                        })
                                    })
                                  : null
                          ]
                      })
            ]
        });
}
