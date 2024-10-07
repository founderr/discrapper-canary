n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(512722),
    o = n.n(r),
    c = n(772848),
    d = n(831209),
    u = n(399606),
    _ = n(481060),
    E = n(607070),
    I = n(100527),
    m = n(367907),
    T = n(676742),
    N = n(1585),
    h = n(841762),
    C = n(336197),
    p = n(406432),
    f = n(348238),
    g = n(38267),
    A = n(184301),
    S = n(347475),
    M = n(695346),
    O = n(271383),
    x = n(594174),
    R = n(768581),
    v = n(900849),
    L = n(506071),
    Z = n(495114),
    P = n(170140),
    D = n(981631),
    b = n(959517),
    j = n(689938),
    U = n(519644),
    y = n(527455);
function B(e) {
    var t, n, s;
    let { embedUrl: r, message: B, channel: k } = e,
        G = (0, P.J)(r, B),
        { setPopout: F } = (0, g.Z)(B.id, b.d$),
        w = (0, f.qo)(B, k, F, !0),
        V = M.QK.useSetting(),
        H = (0, L.n)(),
        [Y, W] = a.useState(!1),
        [K, z] = a.useState((null == G ? void 0 : G.coverImage) == null),
        X = (0, u.e7)([E.Z], () => E.Z.useReducedMotion),
        Q = (0, u.e7)(
            [O.ZP, x.default],
            () => {
                var e;
                return O.ZP.isMember(null == G ? void 0 : G.guildId, null === (e = x.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
            },
            [G]
        ),
        J = (0, u.e7)([O.ZP], () => ((null == G ? void 0 : G.authorId) != null ? O.ZP.getMember(G.guildId, G.authorId) : null)),
        q = (0, T.Z)((null == J ? void 0 : J.avatarDecoration) != null ? (null == J ? void 0 : J.avatarDecoration) : null == G ? void 0 : null === (t = G.user) || void 0 === t ? void 0 : t.avatarDecoration),
        [$, ee] = a.useMemo(() => {
            var e;
            return [null !== (e = null == J ? void 0 : J.colorString) && void 0 !== e ? e : 'inherit', null == J ? void 0 : J.colorRoleId];
        }, [J]),
        { reducedMotion: et } = a.useContext(_.AccessibilityPreferencesContext),
        [en, ei] = a.useState(!1),
        ea = a.useCallback(() => {
            W(!0);
        }, [W]),
        es = a.useCallback(() => {
            W(!1);
        }, [W]),
        el = a.useCallback(async () => {
            null != G &&
                ((0, m.yw)(D.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: G.threadId,
                    channel_id: k.id,
                    can_access: G.canAccess,
                    is_member: Q
                }),
                G.canAccess ? (0, C.Z)(D.Z5c.CHANNEL(G.guildId, G.threadId, G.messageId)) : Q ? (0, C.Z)(D.Z5c.CHANNEL(G.guildId, G.parentChannelId)) : await v.Ub(G.guildId, {}, { channelId: G.parentChannelId }));
        }, [G, k, Q]),
        er = a.useCallback(
            () => (
                o()((null == G ? void 0 : G.authorId) != null, 'Author Id cannot be null when loading user profile'),
                (0, A.Z)(G.authorId, G.avatarUrl, {
                    guildId: G.guildId,
                    channelId: k.id
                })
            ),
            [G, k]
        );
    if (null == G) return null;
    let eo = (e, t) => (
            o()(null != G.authorId, 'Author Id cannot be null when rendering user popout'),
            (0, i.jsx)(S.Z, {
                ...e,
                userId: G.authorId,
                guildId: G.guildId,
                channelId: k.id,
                messageId: B.id,
                roleId: ee,
                newAnalyticsLocations: t
            })
        ),
        ec = (0, R.NZ)({
            avatarDecoration: q,
            size: (0, N.y9)(_.AvatarSizes.SIZE_40),
            canAnimate: en
        }),
        ed = null === (n = G.user) || void 0 === n ? void 0 : n.getAvatarURL(G.guildId, 40, en),
        eu = () => {
            if (!et.enabled) ei((e) => !e);
        },
        e_ = G.coverImage,
        eE = null != e_ && (0, p.d$)(e_);
    return (0, i.jsxs)('div', {
        className: U.postPreviewContainer,
        children: [
            (0, i.jsxs)('div', {
                className: U.thumbnailContainer,
                onMouseEnter: ea,
                onMouseLeave: es,
                children: [
                    !K &&
                        (!0 === G.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)('img', {
                                  src: y,
                                  alt: j.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
                                  className: l()(U.thumbnail, { [U.spoiler]: G.shouldSpoiler }),
                                  onContextMenu: w,
                                  onError: () => z(!0)
                              })
                            : (0, i.jsx)(h.Z, {
                                  src: !(H && (V || Y)) && eE ? ''.concat(e_, '?format=png') : e_,
                                  backgroundSrc: ''.concat(e_, '?format=png'),
                                  alt: j.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
                                  aspectRatio: 16 / 9,
                                  className: l()(U.thumbnail, { [U.spoiler]: G.shouldSpoiler }),
                                  imageChildClassName: U.thumbnailImage,
                                  onContextMenu: w,
                                  onError: () => z(!0)
                              })),
                    null != G.coverImageOverlayText &&
                        (0, i.jsx)(_.Clickable, {
                            onClick: el,
                            children: (0, i.jsx)('div', {
                                className: U.thumbnailOverlay,
                                children: (0, i.jsxs)('div', {
                                    className: U.thumbnailOverlayCta,
                                    children: [
                                        (0, i.jsx)(Z.Z, { color: d.Z.WHITE }),
                                        (0, i.jsx)(_.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: G.coverImageOverlayText
                                        })
                                    ]
                                })
                            })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: U.descriptionContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: U.descriptionHeader,
                        children: [
                            (0, i.jsx)(_.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-normal',
                                className: U.descriptionHeaderText,
                                children: G.title
                            }),
                            (0, i.jsx)(_.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: l()(U.descriptionHeaderText, U.descriptionSubtitle),
                                children: G.subtitle
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: U.descriptionFooter,
                        children: [
                            null != ed &&
                                (0, i.jsx)(_.Popout, {
                                    renderPopout: (e) => eo(e, [I.Z.AVATAR]),
                                    position: 'right',
                                    spacing: 12,
                                    preload: null == G.authorId ? void 0 : er,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            onMouseEnter: eu,
                                            onMouseLeave: eu,
                                            children: (0, i.jsx)(_.Avatar, {
                                                ...e,
                                                size: _.AvatarSizes.SIZE_40,
                                                src: ed,
                                                'aria-label': j.Z.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
                                                avatarDecoration: ec
                                            })
                                        })
                                }),
                            (0, i.jsxs)('div', {
                                className: U.descriptionFooterContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: U.descriptionFooterChannelName,
                                        children: [
                                            null != G.channelName &&
                                                (0, i.jsx)(_.ImageSparkleIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: U.mediaChannelIcon
                                                }),
                                            (0, i.jsx)(_.Clickable, {
                                                onClick: el,
                                                className: U.channelName,
                                                children: (0, i.jsx)(_.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null !== (s = G.channelName) && void 0 !== s ? s : G.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != G.authorName &&
                                        (0, i.jsx)(_.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: U.descriptionFooterAuthorContainer,
                                            children: j.Z.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
                                                authorName: G.authorName,
                                                authorNameHook: () =>
                                                    (0, i.jsx)(
                                                        _.Popout,
                                                        {
                                                            renderPopout: (e) => eo(e, [I.Z.USERNAME]),
                                                            position: 'right',
                                                            preload: null == G.authorId ? void 0 : er,
                                                            children: (e) =>
                                                                (0, i.jsx)(_.NameWithRoleAnchor, {
                                                                    ...e,
                                                                    name: G.authorName,
                                                                    color: $,
                                                                    className: U.authorName
                                                                })
                                                        },
                                                        (0, c.Z)()
                                                    )
                                            })
                                        })
                                ]
                            }),
                            G.canAccess
                                ? (0, i.jsx)(_.Button, {
                                      color: _.ButtonColors.BRAND,
                                      onClick: el,
                                      children: (0, i.jsx)(_.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: G.ctaText
                                      })
                                  })
                                : (0, i.jsx)(_.ShinyButton, {
                                      pauseAnimation: X,
                                      onClick: el,
                                      className: l()(U.__invalid_ctaButtonContent, U.subscribeButton),
                                      color: _.Button.Colors.CUSTOM,
                                      children: (0, i.jsx)(_.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: G.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
