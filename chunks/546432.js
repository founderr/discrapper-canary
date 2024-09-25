n.d(t, {
    O: function () {
        return P;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(892814),
    u = n(481060),
    c = n(399654),
    d = n(162609),
    _ = n(370298),
    E = n(95398),
    f = n(167080),
    h = n(163268),
    p = n(25610),
    m = n(947849),
    I = n(124347),
    T = n(976853),
    g = n(592125),
    S = n(626135),
    A = n(956664),
    v = n(169525),
    N = n(499376),
    O = n(217702),
    R = n(981631),
    C = n(689938),
    y = n(526675),
    b = n(275703);
let L = 200,
    D = 50;
function M(e) {
    return 'IMAGE' === e || 'VIDEO' === e;
}
function P(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, N.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type
    };
}
let U = (e) => {
    let t,
        n,
        r,
        { mimeType: o, downloadURL: l, onRemoveItem: c, showDownload: d, showImageAppPicker: E, isVisualMediaType: h, channelId: p } = e;
    d &&
        (t = (0, i.jsx)(u.Tooltip, {
            text: C.Z.Messages.DOWNLOAD,
            children: (e) =>
                (0, i.jsx)(f.Z, {
                    ...e,
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    className: b.hoverButton,
                    iconClassName: y.downloadHoverButtonIcon,
                    focusProps: { offset: 2 },
                    href: l,
                    mimeType: o
                })
        })),
        null != c &&
            (n = (0, i.jsx)(u.Tooltip, {
                text: C.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
                children: (e) =>
                    (0, i.jsx)(u.Clickable, {
                        ...e,
                        className: s()(b.hoverButton, y.removeMosaicItemHoverButton),
                        focusProps: { offset: 2 },
                        onClick: c,
                        'aria-label': C.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                        children: (0, i.jsx)(u.TrashIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    })
            }));
    let [m, I] = a.useState(!1),
        T = a.useCallback(() => I((e) => !e), []);
    return (E &&
        (r = (0, i.jsx)(_.Z, {
            toggleShowMenu: T,
            showMenu: m,
            channelId: p,
            className: s()(b.hoverButton, { [b.selected]: m }),
            imageUrl: l,
            mimeType: o
        })),
    null == n && null == t && null == r)
        ? null
        : (0, i.jsxs)('div', {
              className: s()(b.hoverButtonGroup, {
                  [b.nonMediaMosaicItem]: !h,
                  [b.forceShowHover]: m
              }),
              children: [r, t, n]
          });
};
function w(e) {
    let { message: t, item: n, autoPlayGif: r, canRemoveItem: o, onRemoveItem: _, onClick: E, onContextMenu: f, onPlay: h, renderImageComponent: p, renderVideoComponent: v, renderAudioComponent: N, renderPlaintextFilePreview: b, renderGenericFileComponent: L, className: D, imgContainerClassName: M, imgClassName: P, focusable: w, hiddenSpoilers: x, mediaLayoutType: G, maxWidth: k, maxHeight: B, hasFooter: F, useFullWidth: Z, isVisualMediaType: V, onVideoControlsShow: H, onVideoControlsHide: Y, isSearchResult: j } = e,
        { width: W, height: K, spoiler: z, type: q, contentType: Q } = n,
        [X, $] = a.useState(!1),
        [J, ee] = a.useState(!1),
        et = t.getChannelId(),
        en = g.Z.getChannel(et),
        er = (0, T.Z)(et),
        ei = d.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        ea = a.useMemo(() => (null != Q && -1 !== Q.indexOf('/') ? Q.split('/') : ['unknown', 'unknown']), [Q]),
        eo = 'IMAGE' === q && !I.W.test(n.downloadUrl),
        es = !1;
    if (V) {
        (null == W || null == K) && (es = !0);
        let e = (0, A.Dc)({
            width: null != W ? W : 0,
            height: null != K ? K : 0,
            maxWidth: O.mT,
            maxHeight: O.Jj
        });
        !Z && (e * (null != W ? W : 0) < O.OF || e * (null != K ? K : 0) < O.OF) && (es = !0);
    }
    let el = a.useCallback(() => {
            _(n);
        }, [n, _]),
        eu = a.useCallback(
            (e) => {
                if (eo && !es && !0 !== j) {
                    if (e && !J) {
                        if ((ee(!0), ei)) {
                            var t;
                            (0, c.a)({
                                channelId: null !== (t = null == en ? void 0 : en.id) && void 0 !== t ? t : '',
                                location: l.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        S.default.track(R.rMx.IMAGE_HOVERED, {
                            guild_id: null == en ? void 0 : en.guild_id,
                            channel_id: null == en ? void 0 : en.id,
                            image_recommendations_shown: ei
                        });
                    } else !e && J && ee(!1);
                }
            },
            [J, en, ei, eo, es, j]
        ),
        ec = a.useCallback(() => {
            if (G === O.hV.MOSAIC) {
                let e = (!er && ['VIDEO', 'CLIP', 'AUDIO'].includes(q)) || 'OTHER' === q;
                return es
                    ? null
                    : !X &&
                          (0, i.jsx)(U, {
                              mimeType: ea,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: eo && ei && !0 !== j,
                              onRemoveItem: o ? el : void 0,
                              isVisualMediaType: V,
                              channelId: et
                          });
            }
            return (
                o &&
                (0, i.jsx)(u.Clickable, {
                    className: z ? y.spoilerRemoveMosaicItemButton : y.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => _(n),
                    'aria-label': C.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                    children: (0, i.jsx)(u.XSmallIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [G, o, z, q, V, X, n, ea, el, _, ei, er, et, eo, es, j]);
    switch (q) {
        case 'IMAGE':
            return (0, i.jsx)(m.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(p, {
                        item: n,
                        message: t,
                        width: W,
                        height: K,
                        autoPlay: r && !x,
                        onClick: E,
                        onContextMenu: f,
                        shouldHideMediaOptions: er,
                        renderAccessory: e,
                        renderAdjacentContent: ec,
                        containerClassName: D,
                        className: M,
                        imageClassName: P,
                        shouldLink: w,
                        hiddenSpoilers: x,
                        responsive: !0,
                        mediaLayoutType: G,
                        maxWidth: k,
                        maxHeight: B,
                        useFullWidth: Z,
                        onMouseEnter: () => eu(!0),
                        onMouseLeave: () => eu(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, i.jsx)(v, {
                item: n,
                message: t,
                width: W,
                height: K,
                onClick: E,
                onContextMenu: f,
                renderAdjacentContent: ec,
                naturalWidth: W,
                naturalHeight: K,
                className: s()(D, { [y.hasFooter]: F }),
                playable: w,
                responsive: !0,
                mediaLayoutType: G,
                maxWidth: k,
                maxHeight: B,
                useFullWidth: Z,
                mimeType: ea,
                onControlsShow: H,
                onControlsHide: Y,
                downloadable: !er,
                mediaPlayerClassName: F ? y.hasFooter : void 0
            });
        case 'AUDIO':
            return (0, i.jsx)(N, {
                item: n,
                message: t,
                className: D,
                playable: w,
                mimeType: ea,
                renderAdjacentContent: ec,
                onVolumeShow: () => $(!0),
                onVolumeHide: () => $(!1),
                onPlay: h
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(b, {
                item: n,
                message: t,
                className: D,
                onClick: E,
                onContextMenu: f,
                renderAdjacentContent: ec
            });
        case 'OTHER':
            return (0, i.jsx)(L, {
                item: n,
                message: t,
                className: D,
                onClick: E,
                onContextMenu: f,
                renderAdjacentContent: ec
            });
        case 'INVALID':
            return null;
    }
}
function x(e, t, n) {
    if (!t) return;
    let r = e.width;
    if (void 0 !== e.width && void 0 !== e.height) {
        let { width: t } = (0, A.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
        });
        r = t;
    }
    return {
        ...(n !== O.hV.MOSAIC && { maxWidth: null != r ? r : '400px' }),
        width: '100%',
        height: '100%',
        justifySelf: 'auto'
    };
}
function G(e) {
    let { className: t, item: n, message: r, getObscureReason: o, useFullWidth: l, mediaLayoutType: u, isSingleMosaicItem: c, footer: d, ..._ } = e,
        { width: f, height: m, type: I } = n,
        T = o(n, (0, p.V)(r.channel_id, r.author.id)),
        [g, S] = a.useState(null != T),
        A = u === O.hV.MOSAIC,
        R = !A && ((null != f && f < L) || (null != m && m < D)),
        C = M(I),
        b = (0, N.R_)(I),
        P = c && null != T && (0, h.bR)(f, m),
        [U, G] = a.useState(!1),
        k = () => {
            G(!0);
        },
        B = () => {
            G(!1);
        },
        F = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(w, {
                ..._,
                item: n,
                message: r,
                getObscureReason: o,
                hiddenSpoilers: e,
                className: s()(t, y.mosaicItemContent, {
                    [y.obscured]: g && !R,
                    [y.hiddenSpoiler]: g && T === v.wk.SPOILER,
                    [y.hiddenExplicit]: g && null != T && [v.wk.EXPLICIT_CONTENT, v.wk.POTENTIAL_EXPLICIT_CONTENT].includes(T),
                    [y.hiddenMosaicItem]: g && e,
                    [y.inline]: g && R
                }),
                focusable: !e,
                mediaLayoutType: u,
                hasFooter: null != d,
                useFullWidth: !!P || l,
                isVisualMediaType: b,
                onVideoControlsShow: k,
                onVideoControlsHide: B
            });
        };
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(y.mosaicItem, {
                [y.mosaicItemNoJustify]: C,
                [y.mosaicItemFullWidth]: l,
                [y.mosaicItemMediaMosaic]: A,
                [y.hideOverflow]: A && b,
                [y.mosaicItemWithFooter]: null != d
            }),
            children: [
                null != T
                    ? (0, i.jsx)(E.Z, {
                          type: E.Z.Types.ATTACHMENT,
                          inline: R,
                          reason: T,
                          isSingleMosaicItem: c,
                          obscured: g,
                          containerStyles: x(n, C, u),
                          obscurityControlClassName: s()({ [y.obscureVideoSpacing]: 'VIDEO' === I && c && !g && U }),
                          onToggleObscurity: () => S((e) => !e),
                          children: (e) => F(e)
                      })
                    : F(),
                d
            ]
        })
    });
}
t.Z = G;
