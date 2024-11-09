n.d(t, {
    Z: function () {
        return W;
    },
    _: function () {
        return F;
    }
});
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
    f = n(710845),
    p = n(590293),
    h = n(863908),
    g = n(871118),
    v = n(517525),
    S = n(352978),
    I = n(590076),
    _ = n(507675),
    x = n(199902),
    E = n(314897),
    Z = n(592125),
    C = n(131951),
    y = n(451478),
    b = n(685203),
    T = n(112560),
    A = n(442168),
    N = n(822296),
    w = n(916771),
    j = n(792517),
    P = n(979425),
    R = n(651183),
    M = n(623825),
    O = n(981631),
    L = n(354459),
    k = n(65154),
    D = n(388032),
    U = n(810190);
let V = new f.Z('StreamTile');
function F(e) {
    let { participant: t, selected: n, focused: l, idle: a, width: r, premiumIndicator: o } = e,
        c = (0, s.e7)([x.Z], () => x.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, M.K)(r);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? null : (0, i.jsx)(R.Z, { participant: t }),
            l || null == c || c.state === O.jm8.ENDED || c.state === O.jm8.FAILED
                ? null
                : (0, i.jsx)(v.Z, {
                      size: m.ZP.Sizes.SMALL,
                      className: U.liveIndicator,
                      participant: t,
                      showQuality: !u && !a,
                      isUpsellEnabled: !1,
                      premiumIndicator: o
                  })
        ]
    });
}
function W(e) {
    let { participant: t, selected: n, onVideoResize: a, paused: m, fit: f, inPopout: v, width: R, focused: M } = e,
        F = C.Z.getVideoComponent(),
        W = (0, s.e7)([E.default], () => E.default.getId()),
        B = (0, p.Z)(),
        { stream: G, user: z, streamId: H } = t,
        Y = (0, s.e7)([Z.Z], () => Z.Z.getChannel(G.channelId)),
        J = (0, s.e7)([x.Z], () => x.Z.getActiveStreamForUser(z.id, G.guildId), [z.id, G.guildId]),
        q = (0, s.e7)([x.Z], () => x.Z.getAllActiveStreams().length > 0),
        X = (0, s.e7)([y.Z], () => y.Z.isFocused()),
        K = (null == J ? void 0 : J.ownerId) === W,
        Q = K && !X && !v,
        $ = null != J ? (0, h.Z)(J, z, z.id === W, Q) : null,
        ee = R < 195;
    if (
        (l.useEffect(() => {
            !q && (null == Y ? void 0 : Y.isGuildStageVoice()) && !K && ((0, u.rn)(G), c.Z.updateStageStreamSize(G.channelId, !1));
        }, []),
        l.useEffect(() => {
            V.info(
                'Stream Tile State - activeStream: '
                    .concat(null != J, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != F, ' | MediaEngine: ')
                    .concat(C.Z.supports(k.AN.VIDEO))
            );
        }, [F, J, n]),
        B)
    )
        return (0, i.jsx)(P.Z, {
            stream: t.stream,
            isSmall: ee,
            selected: n,
            isSelfStream: z.id === W
        });
    if ((null == J ? void 0 : J.state) === O.jm8.ENDED)
        return (0, i.jsx)(N.Z, {
            selected: n,
            stream: J,
            width: R
        });
    if ((null == J ? void 0 : J.state) === O.jm8.FAILED)
        return (0, i.jsx)(w.Z, {
            selected: n,
            stream: J,
            width: R
        });
    else if (t.type === L.fO.HIDDEN_STREAM)
        return (0, i.jsx)(j.Z, {
            selected: n,
            participant: t,
            width: R
        });
    else if (null != J && !n && null != F && C.Z.supports(k.AN.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != Y
                    ? (0, i.jsx)(I.Z, {
                          focused: M,
                          channelId: Y.id,
                          guildId: Y.guild_id,
                          streamerId: z.id,
                          hasScreenMessage: null != $,
                          stream: G
                      })
                    : null,
                (0, i.jsx)(
                    S.Z,
                    {
                        onResize: a,
                        wrapperClassName: U.videoWrapper,
                        className: U.content,
                        streamId: H,
                        videoComponent: F,
                        fit: f,
                        paused: m || Q,
                        videoSpinnerContext: K ? d.m.SELF_STREAM : d.m.REMOTE_STREAM,
                        userId: z.id
                    },
                    H
                ),
                null != $
                    ? (0, i.jsx)(_.Z, {
                          size: (0, T.L)(R),
                          ...$
                      })
                    : null,
                (0, i.jsx)(A.Z, {
                    stream: G,
                    inPopout: v
                })
            ]
        });
    else
        return (0, i.jsxs)('div', {
            className: r()(U.content, U.streamPreview, { [U.small]: ee }),
            children: [
                (0, i.jsx)(g.Z, {
                    noText: !0,
                    className: r()(U.absoluteFill, { [U.streamPreviewOpacity]: null == J }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(b.a, {
                                  isSmall: ee,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: ee ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: R < 175 ? D.intl.string(D.t['I6JG4+']) : D.intl.string(D.t['7Xq/nZ'])
                                  })
                              }),
                              q
                                  ? (0, i.jsx)(b.a, {
                                        className: U.addCTA,
                                        tooltip: D.intl.string(D.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(G, { forceMultiple: !0 });
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
