n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(512722),
    o = n.n(l),
    c = n(772848),
    u = n(831209),
    d = n(399606),
    _ = n(481060),
    E = n(607070),
    I = n(100527),
    m = n(367907),
    T = n(676742),
    h = n(1585),
    N = n(841762),
    f = n(336197),
    C = n(406432),
    p = n(348238),
    g = n(38267),
    A = n(184301),
    S = n(347475),
    x = n(695346),
    R = n(271383),
    O = n(594174),
    M = n(768581),
    v = n(900849),
    L = n(506071),
    Z = n(495114),
    P = n(170140),
    b = n(981631),
    D = n(959517),
    j = n(689938),
    U = n(519644),
    y = n(527455);
function B(e) {
    var t, n, a;
    let { embedUrl: l, message: B, channel: k } = e,
        F = (0, P.J)(l, B),
        { setPopout: G } = (0, g.Z)(B.id, D.d$),
        w = (0, p.qo)(B, k, G, !0),
        V = x.QK.useSetting(),
        H = (0, L.n)(),
        [Y, W] = s.useState(!1),
        [K, z] = s.useState((null == F ? void 0 : F.coverImage) == null),
        Q = (0, d.e7)([E.Z], () => E.Z.useReducedMotion),
        q = (0, d.e7)(
            [R.ZP, O.default],
            () => {
                var e;
                return R.ZP.isMember(null == F ? void 0 : F.guildId, null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
            },
            [F]
        ),
        X = (0, d.e7)([R.ZP], () => ((null == F ? void 0 : F.authorId) != null ? R.ZP.getMember(F.guildId, F.authorId) : null)),
        J = (0, T.Z)((null == X ? void 0 : X.avatarDecoration) != null ? (null == X ? void 0 : X.avatarDecoration) : null == F ? void 0 : null === (t = F.user) || void 0 === t ? void 0 : t.avatarDecoration),
        [$, ee] = s.useMemo(() => {
            var e;
            return [null !== (e = null == X ? void 0 : X.colorString) && void 0 !== e ? e : 'inherit', null == X ? void 0 : X.colorRoleId];
        }, [X]),
        { reducedMotion: et } = s.useContext(_.AccessibilityPreferencesContext),
        [en, ei] = s.useState(!1),
        es = s.useCallback(() => {
            W(!0);
        }, [W]),
        ea = s.useCallback(() => {
            W(!1);
        }, [W]),
        er = s.useCallback(async () => {
            null != F &&
                ((0, m.yw)(b.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: F.threadId,
                    channel_id: k.id,
                    can_access: F.canAccess,
                    is_member: q
                }),
                F.canAccess ? (0, f.Z)(b.Z5c.CHANNEL(F.guildId, F.threadId, F.messageId)) : q ? (0, f.Z)(b.Z5c.CHANNEL(F.guildId, F.parentChannelId)) : await v.Ub(F.guildId, {}, { channelId: F.parentChannelId }));
        }, [F, k, q]),
        el = s.useCallback(
            () => (
                o()((null == F ? void 0 : F.authorId) != null, 'Author Id cannot be null when loading user profile'),
                (0, A.Z)(F.authorId, F.avatarUrl, {
                    guildId: F.guildId,
                    channelId: k.id
                })
            ),
            [F, k]
        );
    if (null == F) return null;
    let eo = (e, t) => (
            o()(null != F.authorId, 'Author Id cannot be null when rendering user popout'),
            (0, i.jsx)(S.Z, {
                ...e,
                userId: F.authorId,
                guildId: F.guildId,
                channelId: k.id,
                messageId: B.id,
                roleId: ee,
                newAnalyticsLocations: t
            })
        ),
        ec = (0, M.NZ)({
            avatarDecoration: J,
            size: (0, h.y9)(_.AvatarSizes.SIZE_40),
            canAnimate: en
        }),
        eu = null === (n = F.user) || void 0 === n ? void 0 : n.getAvatarURL(F.guildId, 40, en),
        ed = () => {
            if (!et.enabled) ei((e) => !e);
        },
        e_ = F.coverImage,
        eE = null != e_ && (0, C.d$)(e_);
    return (0, i.jsxs)('div', {
        className: U.postPreviewContainer,
        children: [
            (0, i.jsxs)('div', {
                className: U.thumbnailContainer,
                onMouseEnter: es,
                onMouseLeave: ea,
                children: [
                    !K &&
                        (!0 === F.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)('img', {
                                  src: y,
                                  alt: j.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
                                  className: r()(U.thumbnail, { [U.spoiler]: F.shouldSpoiler }),
                                  onContextMenu: w,
                                  onError: () => z(!0)
                              })
                            : (0, i.jsx)(N.Z, {
                                  src: !(H && (V || Y)) && eE ? ''.concat(e_, '?format=png') : e_,
                                  backgroundSrc: ''.concat(e_, '?format=png'),
                                  alt: j.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
                                  aspectRatio: 16 / 9,
                                  className: r()(U.thumbnail, { [U.spoiler]: F.shouldSpoiler }),
                                  imageChildClassName: U.thumbnailImage,
                                  onContextMenu: w,
                                  onError: () => z(!0)
                              })),
                    null != F.coverImageOverlayText &&
                        (0, i.jsx)(_.Clickable, {
                            onClick: er,
                            children: (0, i.jsx)('div', {
                                className: U.thumbnailOverlay,
                                children: (0, i.jsxs)('div', {
                                    className: U.thumbnailOverlayCta,
                                    children: [
                                        (0, i.jsx)(Z.Z, { color: u.Z.WHITE }),
                                        (0, i.jsx)(_.Text, {
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
                className: U.descriptionContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: U.descriptionHeader,
                        children: [
                            (0, i.jsx)(_.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-normal',
                                className: U.descriptionHeaderText,
                                children: F.title
                            }),
                            (0, i.jsx)(_.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: r()(U.descriptionHeaderText, U.descriptionSubtitle),
                                children: F.subtitle
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: U.descriptionFooter,
                        children: [
                            null != eu &&
                                (0, i.jsx)(_.Popout, {
                                    renderPopout: (e) => eo(e, [I.Z.AVATAR]),
                                    position: 'right',
                                    spacing: 12,
                                    preload: null == F.authorId ? void 0 : el,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            onMouseEnter: ed,
                                            onMouseLeave: ed,
                                            children: (0, i.jsx)(_.Avatar, {
                                                ...e,
                                                size: _.AvatarSizes.SIZE_40,
                                                src: eu,
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
                                            null != F.channelName &&
                                                (0, i.jsx)(_.ImageSparkleIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: U.mediaChannelIcon
                                                }),
                                            (0, i.jsx)(_.Clickable, {
                                                onClick: er,
                                                className: U.channelName,
                                                children: (0, i.jsx)(_.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null !== (a = F.channelName) && void 0 !== a ? a : F.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != F.authorName &&
                                        (0, i.jsx)(_.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: U.descriptionFooterAuthorContainer,
                                            children: j.Z.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
                                                authorName: F.authorName,
                                                authorNameHook: () =>
                                                    (0, i.jsx)(
                                                        _.Popout,
                                                        {
                                                            renderPopout: (e) => eo(e, [I.Z.USERNAME]),
                                                            position: 'right',
                                                            preload: null == F.authorId ? void 0 : el,
                                                            children: (e) =>
                                                                (0, i.jsx)(_.NameWithRoleAnchor, {
                                                                    ...e,
                                                                    name: F.authorName,
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
                            F.canAccess
                                ? (0, i.jsx)(_.Button, {
                                      color: _.ButtonColors.BRAND,
                                      onClick: er,
                                      children: (0, i.jsx)(_.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: F.ctaText
                                      })
                                  })
                                : (0, i.jsx)(_.ShinyButton, {
                                      pauseAnimation: Q,
                                      onClick: er,
                                      className: r()(U.__invalid_ctaButtonContent, U.subscribeButton),
                                      color: _.Button.Colors.CUSTOM,
                                      children: (0, i.jsx)(_.Text, {
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
