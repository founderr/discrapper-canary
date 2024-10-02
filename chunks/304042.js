n.d(t, {
    Z: function () {
        return Y;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(287734),
    d = n(872810),
    _ = n(110924),
    E = n(100527),
    f = n(906732),
    h = n(750881),
    p = n(194082),
    m = n(318374),
    I = n(382182),
    T = n(769654),
    g = n(543882),
    S = n(592125),
    A = n(430824),
    v = n(496675),
    N = n(699516),
    O = n(938475),
    R = n(626135),
    C = n(960870),
    y = n(139793),
    L = n(502762),
    b = n(652853),
    D = n(194811),
    M = n(373826),
    P = n(315324),
    U = n(582123),
    w = n(648926),
    x = n(290274),
    G = n(228168),
    k = n(981631),
    B = n(689938),
    F = n(676411),
    Z = n(380934),
    V = n(924482),
    H = n(774797);
function Y(e) {
    let { user: t, currentUser: n, stream: r, className: o, onClose: Y } = e,
        { profileType: j, theme: W } = (0, b.z)(),
        K = {
            [Z.fullSize]: j === G.y0.FULL_SIZE,
            [F.fullSize]: j === G.y0.FULL_SIZE
        },
        z = (0, h.Q9)('user-profile-stream-activity-card-web'),
        { analyticsLocations: q } = (0, f.ZP)(E.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Q = (0, C.Z)({
            display: 'live',
            user: t,
            stream: r,
            analyticsLocations: q
        }),
        X = (0, y.Z)({
            userId: t.id,
            onAction: Q
        }),
        $ = (0, l.e7)([A.Z], () => A.Z.getGuild(null == r ? void 0 : r.guildId)),
        J = (0, l.e7)([S.Z], () => S.Z.getChannel(null == r ? void 0 : r.channelId)),
        ee = (0, l.Wu)([O.ZP], () =>
            null != J
                ? O.ZP.getVoiceStatesForChannel(J).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        [et, en] = (0, I.wq)(J),
        {
            url: er,
            isLoading: ei,
            canSeePreview: ea
        } = (0, l.cj)([v.Z, g.Z], () => {
            let e = null != J && v.Z.canBasicChannel(k.S7T.CONNECT, J);
            return e
                ? {
                      url: g.Z.getPreviewURL(r.guildId, r.channelId, r.ownerId),
                      isLoading: g.Z.getIsPreviewLoading(r.guildId, r.channelId, r.ownerId),
                      canSeePreview: e
                  }
                : {
                      url: null,
                      isLoading: !1,
                      canSeePreview: e
                  };
        }),
        eo = (0, l.e7)([N.Z], () => N.Z.getRelationshipType(t.id));
    a.useEffect(() => {
        var e;
        R.default.track(k.rMx.USER_VOICE_ACTIVITY_VIEWED, {
            activity_user_id: t.id,
            discoverable: null === (e = r.discoverable) || void 0 === e || e,
            surface: 'user-profile-stream-activity-card',
            relationship_type: eo,
            treatment: z && !1 === r.discoverable ? h.h9.HIDE : h.h9.SHOW
        });
    }, [t, eo, z, r]);
    let es = (0, _.Z)(ei ? null : er),
        el = ei || null == er ? es : er;
    if (null == $ || null == J || (z && !1 === r.discoverable)) return null;
    let eu = () => {
            let e = s()(Z.preview, K),
                t = () => {
                    Q({ action: 'PRESS_STREAM_IMAGE' }), c.default.selectVoiceChannel(r.channelId), (0, d.iV)(r), null == Y || Y();
                };
            return null == el && ei
                ? (0, i.jsx)('div', {
                      className: e,
                      children: (0, i.jsx)(u.Spinner, {})
                  })
                : null == el
                  ? (0, i.jsxs)(u.Clickable, {
                        className: s()(e, { [Z.clickable]: et }),
                        onClick: et ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: W === k.BRd.LIGHT ? H : V
                            }),
                            j !== G.y0.FULL_SIZE &&
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    children: ea ? B.Z.Messages.STREAM_NO_PREVIEW : B.Z.Messages.STREAM_NO_PERMISSION_CTA
                                })
                        ]
                    })
                  : (0, i.jsxs)(u.Clickable, {
                        className: s()(e, Z.overlay, { [Z.clickable]: et }),
                        onClick: et ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: el,
                                className: Z.image
                            }),
                            j === G.y0.BITE_SIZE &&
                                (0, i.jsx)(u.ClydeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: Z.clyde
                                })
                        ]
                    });
        },
        ec = () => {
            if (j !== G.y0.FULL_SIZE) return null;
            let e = () => {
                    c.default.selectVoiceChannel(J.id), (0, T.X)($.id), null == Q || Q({ action: 'OPEN_VOICE_CHANNEL' }), null == Y || Y();
                },
                n = () => {
                    (0, T.X)($.id), Q({ action: 'OPEN_VOICE_GUILD' }), null == Y || Y();
                };
            return (0, i.jsxs)('div', {
                className: F.details,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(u.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: F.voiceChannelHeading,
                                children: [
                                    (0, i.jsx)(u.VoiceNormalIcon, {
                                        size: 'xxs',
                                        color: u.tokens.colors.TEXT_NORMAL,
                                        className: F.voiceIcon
                                    }),
                                    (0, i.jsx)(u.Clickable, {
                                        className: s()(F.clickable, F.inline),
                                        onClick: e,
                                        children: J.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(M.Z, {
                                variant: 'text-xs/normal',
                                text: B.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: $.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, i.jsx)(m.Z, {
                        users: ee,
                        guildId: $.id,
                        channelId: J.id,
                        maxUsers: P.W,
                        size: u.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        ed = () =>
            j === G.y0.FULL_SIZE
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('div', { className: F.voiceChannelDivider }),
                          (0, i.jsx)(P.Z, {
                              user: t,
                              guild: $,
                              channel: J,
                              onAction: Q,
                              onClose: Y
                          })
                      ]
                  }),
        e_ = () =>
            t.id === n.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(F.actions, K),
                      children: (0, i.jsx)(w.Z, {
                          stream: r,
                          canWatch: et,
                          unavailableReason: en,
                          onAction: Q,
                          onClose: Y
                      })
                  });
    return (0, i.jsx)(f.Gt, {
        value: q,
        children: (0, i.jsx)(U.Z, {
            user: t,
            onClose: Y,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, i.jsxs)(L.Z.Overlay, {
                    className: s()(F.card, o),
                    ref: X,
                    children: [
                        (0, i.jsx)(D.Z, {
                            text: (0, i.jsxs)(i.Fragment, {
                                children: [B.Z.Messages.USER_ACTIVITY_STREAMING, (0, i.jsx)(p.ZP, { size: p.OH.SMALL })]
                            }),
                            contextMenu: (0, i.jsx)(x.Z, {
                                display: 'live',
                                user: t,
                                onClose: Y,
                                onRequestOpen: n
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: F.body,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: s()(F.content, K),
                                    children: [eu(), ec(), j === G.y0.FULL_SIZE && e_()]
                                }),
                                ed()
                            ]
                        }),
                        j !== G.y0.FULL_SIZE && e_()
                    ]
                });
            }
        })
    });
}
