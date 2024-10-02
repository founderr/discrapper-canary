n.d(t, {
    O: function () {
        return w;
    }
});
var r = n(47120);
var i = n(789020);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(892814),
    c = n(481060),
    d = n(399654),
    _ = n(162609),
    E = n(370298),
    f = n(95398),
    h = n(167080),
    p = n(163268),
    m = n(25610),
    I = n(947849),
    T = n(124347),
    g = n(976853),
    S = n(592125),
    A = n(626135),
    v = n(630388),
    N = n(956664),
    O = n(169525),
    R = n(499376),
    C = n(217702),
    y = n(981631),
    L = n(689938),
    b = n(526675),
    D = n(275703);
let M = 200,
    P = 50;
function U(e) {
    return 'IMAGE' === e || 'VIDEO' === e;
}
function w(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, R.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type
    };
}
let x = (e) => {
    let t,
        n,
        r,
        { mimeType: i, downloadURL: s, onRemoveItem: u, showDownload: d, showImageAppPicker: _, isVisualMediaType: f, channelId: p } = e;
    d &&
        (t = (0, a.jsx)(c.Tooltip, {
            text: L.Z.Messages.DOWNLOAD,
            children: (e) =>
                (0, a.jsx)(h.Z, {
                    ...e,
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    className: D.hoverButton,
                    iconClassName: b.downloadHoverButtonIcon,
                    focusProps: { offset: 2 },
                    href: s,
                    mimeType: i
                })
        })),
        null != u &&
            (n = (0, a.jsx)(c.Tooltip, {
                text: L.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
                children: (e) =>
                    (0, a.jsx)(c.Clickable, {
                        ...e,
                        className: l()(D.hoverButton, b.removeMosaicItemHoverButton),
                        focusProps: { offset: 2 },
                        onClick: u,
                        'aria-label': L.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                        children: (0, a.jsx)(c.TrashIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    })
            }));
    let [m, I] = o.useState(!1),
        T = o.useCallback(() => I((e) => !e), []);
    return (_ &&
        (r = (0, a.jsx)(E.Z, {
            toggleShowMenu: T,
            showMenu: m,
            channelId: p,
            className: l()(D.hoverButton, { [D.selected]: m }),
            imageUrl: s,
            mimeType: i
        })),
    null == n && null == t && null == r)
        ? null
        : (0, a.jsxs)('div', {
              className: l()(D.hoverButtonGroup, {
                  [D.nonMediaMosaicItem]: !f,
                  [D.forceShowHover]: m
              }),
              children: [r, t, n]
          });
};
function G(e) {
    var t;
    let { message: n, item: r, autoPlayGif: i, canRemoveItem: s, onRemoveItem: E, onClick: f, onContextMenu: h, onPlay: p, renderImageComponent: m, renderVideoComponent: O, renderAudioComponent: R, renderPlaintextFilePreview: D, renderGenericFileComponent: M, className: P, imgContainerClassName: U, imgClassName: w, focusable: G, hiddenSpoilers: k, mediaLayoutType: B, maxWidth: F, maxHeight: Z, hasFooter: V, useFullWidth: H, isVisualMediaType: Y, onVideoControlsShow: j, onVideoControlsHide: W, isSearchResult: K } = e,
        { width: z, height: q, spoiler: Q, type: X, contentType: $ } = r,
        [J, ee] = o.useState(!1),
        [et, en] = o.useState(!1),
        er = n.getChannelId(),
        ei = S.Z.getChannel(er),
        ea = (0, g.Z)(er),
        eo = _.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        es = o.useMemo(() => (null != $ && -1 !== $.indexOf('/') ? $.split('/') : ['unknown', 'unknown']), [$]),
        el = r.originalItem,
        eu = 'IMAGE' === X && !T.uo.test(r.downloadUrl) && !(T.YG.test(r.downloadUrl) && (0, v.yE)(null !== (t = el.flags) && void 0 !== t ? t : 0, y.J0y.IS_ANIMATED)),
        ec = !1;
    if (Y) {
        (null == z || null == q) && (ec = !0);
        let e = (0, N.Dc)({
            width: null != z ? z : 0,
            height: null != q ? q : 0,
            maxWidth: C.mT,
            maxHeight: C.Jj
        });
        !H && (e * (null != z ? z : 0) < C.OF || e * (null != q ? q : 0) < C.OF) && (ec = !0);
    }
    let ed = o.useCallback(() => {
            E(r);
        }, [r, E]),
        e_ = o.useCallback(
            (e) => {
                if (eu && !ec && !0 !== K) {
                    if (e && !et) {
                        if ((en(!0), eo)) {
                            var t;
                            (0, d.a)({
                                channelId: null !== (t = null == ei ? void 0 : ei.id) && void 0 !== t ? t : '',
                                location: u.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        A.default.track(y.rMx.IMAGE_HOVERED, {
                            guild_id: null == ei ? void 0 : ei.guild_id,
                            channel_id: null == ei ? void 0 : ei.id,
                            image_recommendations_shown: eo
                        });
                    } else !e && et && en(!1);
                }
            },
            [et, ei, eo, eu, ec, K]
        ),
        eE = o.useCallback(() => {
            if (B === C.hV.MOSAIC) {
                let e = (!ea && ['VIDEO', 'CLIP', 'AUDIO'].includes(X)) || 'OTHER' === X;
                return ec
                    ? null
                    : !J &&
                          (0, a.jsx)(x, {
                              mimeType: es,
                              downloadURL: r.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: eu && eo && !0 !== K,
                              onRemoveItem: s ? ed : void 0,
                              isVisualMediaType: Y,
                              channelId: er
                          });
            }
            return (
                s &&
                (0, a.jsx)(c.Clickable, {
                    className: Q ? b.spoilerRemoveMosaicItemButton : b.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => E(r),
                    'aria-label': L.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                    children: (0, a.jsx)(c.XSmallIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [B, s, Q, X, Y, J, r, es, ed, E, eo, ea, er, eu, ec, K]);
    switch (X) {
        case 'IMAGE':
            return (0, a.jsx)(I.h.Consumer, {
                children: (e) =>
                    (0, a.jsx)(m, {
                        item: r,
                        message: n,
                        width: z,
                        height: q,
                        autoPlay: i && !k,
                        onClick: f,
                        onContextMenu: h,
                        shouldHideMediaOptions: ea,
                        renderAccessory: e,
                        renderAdjacentContent: eE,
                        containerClassName: P,
                        className: U,
                        imageClassName: w,
                        shouldLink: G,
                        hiddenSpoilers: k,
                        responsive: !0,
                        mediaLayoutType: B,
                        maxWidth: F,
                        maxHeight: Z,
                        useFullWidth: H,
                        onMouseEnter: () => e_(!0),
                        onMouseLeave: () => e_(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, a.jsx)(O, {
                item: r,
                message: n,
                width: z,
                height: q,
                onClick: f,
                onContextMenu: h,
                renderAdjacentContent: eE,
                naturalWidth: z,
                naturalHeight: q,
                className: l()(P, { [b.hasFooter]: V }),
                playable: G,
                responsive: !0,
                mediaLayoutType: B,
                maxWidth: F,
                maxHeight: Z,
                useFullWidth: H,
                mimeType: es,
                onControlsShow: j,
                onControlsHide: W,
                downloadable: !ea,
                mediaPlayerClassName: V ? b.hasFooter : void 0
            });
        case 'AUDIO':
            return (0, a.jsx)(R, {
                item: r,
                message: n,
                className: P,
                playable: G,
                mimeType: es,
                renderAdjacentContent: eE,
                onVolumeShow: () => ee(!0),
                onVolumeHide: () => ee(!1),
                onPlay: p
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, a.jsx)(D, {
                item: r,
                message: n,
                className: P,
                onClick: f,
                onContextMenu: h,
                renderAdjacentContent: eE
            });
        case 'OTHER':
            return (0, a.jsx)(M, {
                item: r,
                message: n,
                className: P,
                onClick: f,
                onContextMenu: h,
                renderAdjacentContent: eE
            });
        case 'INVALID':
            return null;
    }
}
function k(e, t, n) {
    if (!t) return;
    let r = e.width;
    if (void 0 !== e.width && void 0 !== e.height) {
        let { width: t } = (0, N.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
        });
        r = t;
    }
    return {
        ...(n !== C.hV.MOSAIC && { maxWidth: null != r ? r : '400px' }),
        width: '100%',
        height: '100%',
        justifySelf: 'auto'
    };
}
function B(e) {
    let { className: t, item: n, message: r, getObscureReason: i, useFullWidth: s, mediaLayoutType: u, isSingleMosaicItem: c, footer: d, ..._ } = e,
        { width: E, height: h, type: I } = n,
        T = i(n, (0, m.V)(r.channel_id, r.author.id)),
        [g, S] = o.useState(null != T),
        A = u === C.hV.MOSAIC,
        v = !A && ((null != E && E < M) || (null != h && h < P)),
        N = U(I),
        y = (0, R.R_)(I),
        L = c && null != T && (0, p.bR)(E, h),
        [D, w] = o.useState(!1),
        x = () => {
            w(!0);
        },
        B = () => {
            w(!1);
        },
        F = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, a.jsx)(G, {
                ..._,
                item: n,
                message: r,
                getObscureReason: i,
                hiddenSpoilers: e,
                className: l()(t, b.mosaicItemContent, {
                    [b.obscured]: g && !v,
                    [b.hiddenSpoiler]: g && T === O.wk.SPOILER,
                    [b.hiddenExplicit]: g && null != T && [O.wk.EXPLICIT_CONTENT, O.wk.POTENTIAL_EXPLICIT_CONTENT].includes(T),
                    [b.hiddenMosaicItem]: g && e,
                    [b.inline]: g && v
                }),
                focusable: !e,
                mediaLayoutType: u,
                hasFooter: null != d,
                useFullWidth: !!L || s,
                isVisualMediaType: y,
                onVideoControlsShow: x,
                onVideoControlsHide: B
            });
        };
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: l()(b.mosaicItem, {
                [b.mosaicItemNoJustify]: N,
                [b.mosaicItemFullWidth]: s,
                [b.mosaicItemMediaMosaic]: A,
                [b.hideOverflow]: A && y,
                [b.mosaicItemWithFooter]: null != d
            }),
            children: [
                null != T
                    ? (0, a.jsx)(f.Z, {
                          type: f.Z.Types.ATTACHMENT,
                          inline: v,
                          reason: T,
                          isSingleMosaicItem: c,
                          obscured: g,
                          containerStyles: k(n, N, u),
                          obscurityControlClassName: l()({ [b.obscureVideoSpacing]: 'VIDEO' === I && c && !g && D }),
                          onToggleObscurity: () => S((e) => !e),
                          children: (e) => F(e)
                      })
                    : F(),
                d
            ]
        })
    });
}
t.Z = B;
