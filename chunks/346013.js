n.d(t, {
    Z: function () {
        return B;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    u = n.n(l),
    c = n(772848),
    d = n(831209),
    _ = n(399606),
    E = n(481060),
    f = n(607070),
    h = n(100527),
    p = n(367907),
    m = n(676742),
    I = n(1585),
    T = n(841762),
    g = n(336197),
    S = n(406432),
    A = n(348238),
    v = n(38267),
    N = n(184301),
    O = n(347475),
    R = n(695346),
    C = n(271383),
    y = n(594174),
    L = n(768581),
    b = n(900849),
    D = n(506071),
    M = n(495114),
    P = n(170140),
    U = n(981631),
    w = n(959517),
    x = n(689938),
    G = n(519644),
    k = n(527455);
function B(e) {
    var t, n, r;
    let { embedUrl: o, message: l, channel: B } = e,
        F = (0, P.J)(o, l),
        { setPopout: Z } = (0, v.Z)(l.id, w.d$),
        V = (0, A.qo)(l, B, Z, !0),
        H = R.QK.useSetting(),
        Y = (0, D.n)(),
        [j, W] = a.useState(!1),
        [K, z] = a.useState((null == F ? void 0 : F.coverImage) == null),
        q = (0, _.e7)([f.Z], () => f.Z.useReducedMotion),
        Q = (0, _.e7)(
            [C.ZP, y.default],
            () => {
                var e;
                return C.ZP.isMember(null == F ? void 0 : F.guildId, null === (e = y.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
            },
            [F]
        ),
        X = (0, _.e7)([C.ZP], () => ((null == F ? void 0 : F.authorId) != null ? C.ZP.getMember(F.guildId, F.authorId) : null)),
        $ = (0, m.Z)((null == X ? void 0 : X.avatarDecoration) != null ? (null == X ? void 0 : X.avatarDecoration) : null == F ? void 0 : null === (t = F.user) || void 0 === t ? void 0 : t.avatarDecoration),
        [J, ee] = a.useMemo(() => {
            var e;
            return [null !== (e = null == X ? void 0 : X.colorString) && void 0 !== e ? e : 'inherit', null == X ? void 0 : X.colorRoleId];
        }, [X]),
        { reducedMotion: et } = a.useContext(E.AccessibilityPreferencesContext),
        [en, er] = a.useState(!1),
        ei = a.useCallback(() => {
            W(!0);
        }, [W]),
        ea = a.useCallback(() => {
            W(!1);
        }, [W]),
        eo = a.useCallback(async () => {
            null != F &&
                ((0, p.yw)(U.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: F.threadId,
                    channel_id: B.id,
                    can_access: F.canAccess,
                    is_member: Q
                }),
                F.canAccess ? (0, g.Z)(U.Z5c.CHANNEL(F.guildId, F.threadId, F.messageId)) : Q ? (0, g.Z)(U.Z5c.CHANNEL(F.guildId, F.parentChannelId)) : await b.Ub(F.guildId, {}, { channelId: F.parentChannelId }));
        }, [F, B, Q]),
        es = a.useCallback(
            () => (
                u()((null == F ? void 0 : F.authorId) != null, 'Author Id cannot be null when loading user profile'),
                (0, N.Z)(F.authorId, F.avatarUrl, {
                    guildId: F.guildId,
                    channelId: B.id
                })
            ),
            [F, B]
        );
    if (null == F) return null;
    let el = (e, t) => (
            u()(null != F.authorId, 'Author Id cannot be null when rendering user popout'),
            (0, i.jsx)(O.Z, {
                ...e,
                userId: F.authorId,
                guildId: F.guildId,
                channelId: B.id,
                messageId: l.id,
                roleId: ee,
                newAnalyticsLocations: t
            })
        ),
        eu = (0, L.NZ)({
            avatarDecoration: $,
            size: (0, I.y9)(E.AvatarSizes.SIZE_40),
            canAnimate: en
        }),
        ec = null === (n = F.user) || void 0 === n ? void 0 : n.getAvatarURL(F.guildId, 40, en),
        ed = () => {
            if (!et.enabled) er((e) => !e);
        },
        e_ = () =>
            (0, i.jsx)(
                E.Popout,
                {
                    renderPopout: (e) => el(e, [h.Z.USERNAME]),
                    position: 'right',
                    preload: null == F.authorId ? void 0 : es,
                    children: (e) =>
                        (0, i.jsx)(E.NameWithRoleAnchor, {
                            ...e,
                            name: F.authorName,
                            color: J,
                            className: G.authorName
                        })
                },
                (0, c.Z)()
            ),
        eE = F.coverImage,
        ef = null != eE && (0, S.d$)(eE),
        eh = Y && (H || j);
    return (0, i.jsxs)('div', {
        className: G.postPreviewContainer,
        children: [
            (0, i.jsxs)('div', {
                className: G.thumbnailContainer,
                onMouseEnter: ei,
                onMouseLeave: ea,
                children: [
                    !K &&
                        (!0 === F.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)('img', {
                                  src: k,
                                  alt: x.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
                                  className: s()(G.thumbnail, { [G.spoiler]: F.shouldSpoiler }),
                                  onContextMenu: V,
                                  onError: () => z(!0)
                              })
                            : (0, i.jsx)(T.Z, {
                                  src: !eh && ef ? ''.concat(eE, '?format=png') : eE,
                                  backgroundSrc: ''.concat(eE, '?format=png'),
                                  alt: x.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
                                  aspectRatio: 16 / 9,
                                  className: s()(G.thumbnail, { [G.spoiler]: F.shouldSpoiler }),
                                  imageChildClassName: G.thumbnailImage,
                                  onContextMenu: V,
                                  onError: () => z(!0)
                              })),
                    null != F.coverImageOverlayText &&
                        (0, i.jsx)(E.Clickable, {
                            onClick: eo,
                            children: (0, i.jsx)('div', {
                                className: G.thumbnailOverlay,
                                children: (0, i.jsxs)('div', {
                                    className: G.thumbnailOverlayCta,
                                    children: [
                                        (0, i.jsx)(M.Z, { color: d.Z.WHITE }),
                                        (0, i.jsx)(E.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: F.coverImageOverlayText
                                        })
                                    ]
                                })
                            })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: G.descriptionContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: G.descriptionHeader,
                        children: [
                            (0, i.jsx)(E.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-normal',
                                className: G.descriptionHeaderText,
                                children: F.title
                            }),
                            (0, i.jsx)(E.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: s()(G.descriptionHeaderText, G.descriptionSubtitle),
                                children: F.subtitle
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: G.descriptionFooter,
                        children: [
                            null != ec &&
                                (0, i.jsx)(E.Popout, {
                                    renderPopout: (e) => el(e, [h.Z.AVATAR]),
                                    position: 'right',
                                    spacing: 12,
                                    preload: null == F.authorId ? void 0 : es,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            onMouseEnter: ed,
                                            onMouseLeave: ed,
                                            children: (0, i.jsx)(E.Avatar, {
                                                ...e,
                                                size: E.AvatarSizes.SIZE_40,
                                                src: ec,
                                                'aria-label': x.Z.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
                                                avatarDecoration: eu
                                            })
                                        })
                                }),
                            (0, i.jsxs)('div', {
                                className: G.descriptionFooterContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: G.descriptionFooterChannelName,
                                        children: [
                                            null != F.channelName &&
                                                (0, i.jsx)(E.ImageSparkleIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: G.mediaChannelIcon
                                                }),
                                            (0, i.jsx)(E.Clickable, {
                                                onClick: eo,
                                                className: G.channelName,
                                                children: (0, i.jsx)(E.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null !== (r = F.channelName) && void 0 !== r ? r : F.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != F.authorName &&
                                        (0, i.jsx)(E.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: G.descriptionFooterAuthorContainer,
                                            children: x.Z.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
                                                authorName: F.authorName,
                                                authorNameHook: e_
                                            })
                                        })
                                ]
                            }),
                            F.canAccess
                                ? (0, i.jsx)(E.Button, {
                                      color: E.ButtonColors.BRAND,
                                      onClick: eo,
                                      children: (0, i.jsx)(E.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: F.ctaText
                                      })
                                  })
                                : (0, i.jsx)(E.ShinyButton, {
                                      pauseAnimation: q,
                                      onClick: eo,
                                      className: s()(G.__invalid_ctaButtonContent, G.subscribeButton),
                                      color: E.Button.Colors.CUSTOM,
                                      children: (0, i.jsx)(E.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: F.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
