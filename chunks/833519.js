n.d(t, {
    Z: function () {
        return G;
    },
    _: function () {
        return H;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(872810),
    d = n(763520),
    h = n(194082),
    p = n(710845),
    m = n(590293),
    _ = n(863908),
    f = n(871118),
    E = n(517525),
    g = n(352978),
    C = n(590076),
    I = n(507675),
    T = n(199902),
    x = n(314897),
    v = n(592125),
    S = n(131951),
    N = n(451478),
    A = n(685203),
    Z = n(112560),
    M = n(442168),
    b = n(822296),
    R = n(916771),
    L = n(792517),
    P = n(979425),
    j = n(651183),
    O = n(623825),
    y = n(981631),
    D = n(354459),
    U = n(65154),
    k = n(689938),
    w = n(810190);
let B = new p.Z('StreamTile');
function H(e) {
    let { participant: t, selected: n, focused: s, idle: a, width: l, premiumIndicator: o } = e,
        c = (0, r.e7)([T.Z], () => T.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, O.K)(l);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? null : (0, i.jsx)(j.Z, { participant: t }),
            s || null == c || c.state === y.jm8.ENDED || c.state === y.jm8.FAILED
                ? null
                : (0, i.jsx)(E.Z, {
                      size: h.ZP.Sizes.SMALL,
                      className: w.liveIndicator,
                      participant: t,
                      showQuality: !u && !a,
                      isUpsellEnabled: !1,
                      premiumIndicator: o
                  })
        ]
    });
}
function G(e) {
    let { participant: t, selected: n, onVideoResize: a, paused: h, fit: p, inPopout: E, width: j, focused: O } = e,
        H = S.Z.getVideoComponent(),
        G = (0, r.e7)([x.default], () => x.default.getId()),
        V = (0, m.Z)(),
        { stream: F, user: W, streamId: z } = t,
        Y = (0, r.e7)([v.Z], () => v.Z.getChannel(F.channelId)),
        K = (0, r.e7)([T.Z], () => T.Z.getActiveStreamForUser(W.id, F.guildId), [W.id, F.guildId]),
        q = (0, r.e7)([T.Z], () => T.Z.getAllActiveStreams().length > 0),
        X = (0, r.e7)([N.Z], () => N.Z.isFocused()),
        J = (null == K ? void 0 : K.ownerId) === G,
        Q = J && !X && !E,
        $ = null != K ? (0, _.Z)(K, W, W.id === G, Q) : null,
        ee = j < 195;
    if (
        (s.useEffect(() => {
            !q && (null == Y ? void 0 : Y.isGuildStageVoice()) && !J && ((0, u.rn)(F), c.Z.updateStageStreamSize(F.channelId, !1));
        }, []),
        s.useEffect(() => {
            B.info(
                'Stream Tile State - activeStream: '
                    .concat(null != K, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != H, ' | MediaEngine: ')
                    .concat(S.Z.supports(U.AN.VIDEO))
            );
        }, [H, K, n]),
        V)
    )
        return (0, i.jsx)(P.Z, {
            stream: t.stream,
            isSmall: ee,
            selected: n,
            isSelfStream: W.id === G
        });
    if ((null == K ? void 0 : K.state) === y.jm8.ENDED)
        return (0, i.jsx)(b.Z, {
            selected: n,
            stream: K,
            width: j
        });
    if ((null == K ? void 0 : K.state) === y.jm8.FAILED)
        return (0, i.jsx)(R.Z, {
            selected: n,
            stream: K,
            width: j
        });
    else if (t.type === D.fO.HIDDEN_STREAM)
        return (0, i.jsx)(L.Z, {
            selected: n,
            participant: t,
            width: j
        });
    else if (null != K && !n && null != H && S.Z.supports(U.AN.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != Y
                    ? (0, i.jsx)(C.Z, {
                          focused: O,
                          channelId: Y.id,
                          guildId: Y.guild_id,
                          streamerId: W.id,
                          hasScreenMessage: null != $,
                          stream: F
                      })
                    : null,
                (0, i.jsx)(
                    g.Z,
                    {
                        onResize: a,
                        wrapperClassName: w.videoWrapper,
                        className: w.content,
                        streamId: z,
                        videoComponent: H,
                        fit: p,
                        paused: h || Q,
                        videoSpinnerContext: J ? d.m.SELF_STREAM : d.m.REMOTE_STREAM,
                        userId: W.id
                    },
                    z
                ),
                null != $
                    ? (0, i.jsx)(I.Z, {
                          size: (0, Z.L)(j),
                          ...$
                      })
                    : null,
                (0, i.jsx)(M.Z, {
                    stream: F,
                    inPopout: E
                })
            ]
        });
    else
        return (0, i.jsxs)('div', {
            className: l()(w.content, w.streamPreview, { [w.small]: ee }),
            children: [
                (0, i.jsx)(f.Z, {
                    noText: !0,
                    className: l()(w.absoluteFill, { [w.streamPreviewOpacity]: null == K }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(A.a, {
                                  isSmall: ee,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: ee ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: j < 175 ? k.Z.Messages.WATCH : k.Z.Messages.WATCH_STREAM
                                  })
                              }),
                              q
                                  ? (0, i.jsx)(A.a, {
                                        className: w.addCTA,
                                        tooltip: k.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(F, { forceMultiple: !0 });
                                        },
                                        isSmall: ee,
                                        children: (0, i.jsx)(o.EyePlusIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: w.addStreamIcon
                                        })
                                    })
                                  : null
                          ]
                      })
            ]
        });
}
