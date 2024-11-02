t.d(n, {
    O: function () {
        return L;
    }
}),
    t(47120),
    t(789020);
var i = t(200651),
    l = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(892814),
    r = t(481060),
    u = t(399654),
    d = t(162609),
    m = t(370298),
    c = t(95398),
    h = t(167080),
    I = t(163268),
    x = t(25610),
    g = t(947849),
    p = t(124347),
    f = t(976853),
    C = t(592125),
    j = t(626135),
    v = t(630388),
    y = t(956664),
    M = t(169525),
    T = t(499376),
    N = t(217702),
    w = t(981631),
    E = t(388032),
    O = t(526675),
    A = t(275703);
function L(e, n) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, T.aw)(e, n),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type
    };
}
let _ = (e) => {
    let n,
        t,
        o,
        { mimeType: a, downloadURL: u, onRemoveItem: d, showDownload: c, showImageAppPicker: I, isVisualMediaType: x, channelId: g } = e;
    c &&
        (n = (0, i.jsx)(r.Tooltip, {
            text: E.intl.string(E.t['1WjMbG']),
            children: (e) =>
                (0, i.jsx)(h.Z, {
                    ...e,
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    className: A.hoverButton,
                    iconClassName: O.downloadHoverButtonIcon,
                    focusProps: { offset: 2 },
                    href: u,
                    mimeType: a
                })
        })),
        null != d &&
            (t = (0, i.jsx)(r.Tooltip, {
                text: E.intl.string(E.t['/XT3io']),
                children: (e) =>
                    (0, i.jsx)(r.Clickable, {
                        ...e,
                        className: s()(A.hoverButton, O.removeMosaicItemHoverButton),
                        focusProps: { offset: 2 },
                        onClick: d,
                        'aria-label': E.intl.string(E.t['0+xZHx']),
                        children: (0, i.jsx)(r.TrashIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    })
            }));
    let [p, f] = l.useState(!1),
        C = l.useCallback(() => f((e) => !e), []);
    return (I &&
        (o = (0, i.jsx)(m.Z, {
            toggleShowMenu: C,
            showMenu: p,
            channelId: g,
            className: s()(A.hoverButton, { [A.selected]: p }),
            imageUrl: u,
            mimeType: a
        })),
    null == t && null == n && null == o)
        ? null
        : (0, i.jsxs)('div', {
              className: s()(A.hoverButtonGroup, {
                  [A.nonMediaMosaicItem]: !x,
                  [A.forceShowHover]: p
              }),
              children: [o, n, t]
          });
};
function S(e) {
    var n;
    let { message: t, item: o, autoPlayGif: m, canRemoveItem: c, onRemoveItem: h, onClick: I, onContextMenu: x, onPlay: M, renderImageComponent: T, renderVideoComponent: A, renderAudioComponent: L, renderPlaintextFilePreview: S, renderGenericFileComponent: b, className: V, imgContainerClassName: F, imgClassName: k, focusable: P, hiddenSpoilers: G, mediaLayoutType: H, maxWidth: D, maxHeight: B, hasFooter: R, useFullWidth: W, isVisualMediaType: Z, onVideoControlsShow: U, onVideoControlsHide: X, isSearchResult: q } = e,
        { width: z, height: J, spoiler: Y, type: $, contentType: K } = o,
        [Q, ee] = l.useState(!1),
        [en, et] = l.useState(!1),
        ei = t.getChannelId(),
        el = C.Z.getChannel(ei),
        eo = (0, f.Z)(ei),
        es = d.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        ea = l.useMemo(() => (null != K && -1 !== K.indexOf('/') ? K.split('/') : ['unknown', 'unknown']), [K]),
        er = o.originalItem,
        eu = 'IMAGE' === $ && !p.uo.test(o.downloadUrl) && !(p.YG.test(o.downloadUrl) && (0, v.yE)(null !== (n = er.flags) && void 0 !== n ? n : 0, w.J0y.IS_ANIMATED)),
        ed = !1;
    if (Z) {
        (null == z || null == J) && (ed = !0);
        let e = (0, y.Dc)({
            width: null != z ? z : 0,
            height: null != J ? J : 0,
            maxWidth: N.mT,
            maxHeight: N.Jj
        });
        !W && (e * (null != z ? z : 0) < N.OF || e * (null != J ? J : 0) < N.OF) && (ed = !0);
    }
    let em = l.useCallback(() => {
            h(o);
        }, [o, h]),
        ec = l.useCallback(
            (e) => {
                if (eu && !ed && !0 !== q) {
                    if (e && !en) {
                        if ((et(!0), es)) {
                            var n;
                            (0, u.a)({
                                channelId: null !== (n = null == el ? void 0 : el.id) && void 0 !== n ? n : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        j.default.track(w.rMx.IMAGE_HOVERED, {
                            guild_id: null == el ? void 0 : el.guild_id,
                            channel_id: null == el ? void 0 : el.id,
                            image_recommendations_shown: es
                        });
                    } else !e && en && et(!1);
                }
            },
            [en, el, es, eu, ed, q]
        ),
        eh = l.useCallback(() => {
            if (H === N.hV.MOSAIC) {
                let e = (!eo && ['VIDEO', 'CLIP', 'AUDIO'].includes($)) || 'OTHER' === $;
                return ed
                    ? null
                    : !Q &&
                          (0, i.jsx)(_, {
                              mimeType: ea,
                              downloadURL: o.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: eu && es && !0 !== q,
                              onRemoveItem: c ? em : void 0,
                              isVisualMediaType: Z,
                              channelId: ei
                          });
            }
            return (
                c &&
                (0, i.jsx)(r.Clickable, {
                    className: Y ? O.spoilerRemoveMosaicItemButton : O.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => h(o),
                    'aria-label': E.intl.string(E.t['0+xZHx']),
                    children: (0, i.jsx)(r.XSmallIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [H, c, Y, $, Z, Q, o, ea, em, h, es, eo, ei, eu, ed, q]);
    switch ($) {
        case 'IMAGE':
            return (0, i.jsx)(g.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(T, {
                        item: o,
                        message: t,
                        width: z,
                        height: J,
                        autoPlay: m && !G,
                        onClick: I,
                        onContextMenu: x,
                        shouldHideMediaOptions: eo,
                        renderAccessory: e,
                        renderAdjacentContent: eh,
                        containerClassName: V,
                        className: F,
                        imageClassName: k,
                        shouldLink: P,
                        hiddenSpoilers: G,
                        responsive: !0,
                        mediaLayoutType: H,
                        maxWidth: D,
                        maxHeight: B,
                        useFullWidth: W,
                        onMouseEnter: () => ec(!0),
                        onMouseLeave: () => ec(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, i.jsx)(A, {
                item: o,
                message: t,
                width: z,
                height: J,
                onClick: I,
                onContextMenu: x,
                renderAdjacentContent: eh,
                naturalWidth: z,
                naturalHeight: J,
                className: s()(V, { [O.hasFooter]: R }),
                playable: P,
                responsive: !0,
                mediaLayoutType: H,
                maxWidth: D,
                maxHeight: B,
                useFullWidth: W,
                mimeType: ea,
                onControlsShow: U,
                onControlsHide: X,
                downloadable: !eo,
                mediaPlayerClassName: R ? O.hasFooter : void 0
            });
        case 'AUDIO':
            return (0, i.jsx)(L, {
                item: o,
                message: t,
                className: V,
                playable: P,
                mimeType: ea,
                renderAdjacentContent: eh,
                onVolumeShow: () => ee(!0),
                onVolumeHide: () => ee(!1),
                onPlay: M
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(S, {
                item: o,
                message: t,
                className: V,
                onClick: I,
                onContextMenu: x,
                renderAdjacentContent: eh
            });
        case 'OTHER':
            return (0, i.jsx)(b, {
                item: o,
                message: t,
                className: V,
                onClick: I,
                onContextMenu: x,
                renderAdjacentContent: eh
            });
        case 'INVALID':
            return null;
    }
}
n.Z = function (e) {
    var n;
    let { className: t, item: o, message: a, getObscureReason: r, useFullWidth: u, mediaLayoutType: d, isSingleMosaicItem: m, footer: h, ...g } = e,
        { width: p, height: f, type: C } = o,
        j = r(o, (0, x.V)(a.channel_id, a.author.id)),
        [v, w] = l.useState(null != j),
        E = d === N.hV.MOSAIC,
        A = !E && ((null != p && p < 200) || (null != f && f < 50));
    let L = 'IMAGE' === (n = C) || 'VIDEO' === n,
        _ = (0, T.R_)(C),
        b = m && null != j && (0, I.bR)(p, f),
        [V, F] = l.useState(!1),
        k = () => {
            F(!0);
        },
        P = () => {
            F(!1);
        },
        G = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(S, {
                ...g,
                item: o,
                message: a,
                getObscureReason: r,
                hiddenSpoilers: e,
                className: s()(t, O.mosaicItemContent, {
                    [O.obscured]: v && !A,
                    [O.hiddenSpoiler]: v && j === M.wk.SPOILER,
                    [O.hiddenExplicit]: v && null != j && [M.wk.EXPLICIT_CONTENT, M.wk.POTENTIAL_EXPLICIT_CONTENT].includes(j),
                    [O.hiddenMosaicItem]: v && e,
                    [O.inline]: v && A
                }),
                focusable: !e,
                mediaLayoutType: d,
                hasFooter: null != h,
                useFullWidth: !!b || u,
                isVisualMediaType: _,
                onVideoControlsShow: k,
                onVideoControlsHide: P
            });
        };
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(O.mosaicItem, {
                [O.mosaicItemNoJustify]: L,
                [O.mosaicItemFullWidth]: u,
                [O.mosaicItemMediaMosaic]: E,
                [O.hideOverflow]: E && _,
                [O.mosaicItemWithFooter]: null != h
            }),
            children: [
                null != j
                    ? (0, i.jsx)(c.Z, {
                          type: c.Z.Types.ATTACHMENT,
                          inline: A,
                          reason: j,
                          isSingleMosaicItem: m,
                          obscured: v,
                          containerStyles: (function (e, n, t) {
                              if (!n) return;
                              let i = e.width;
                              if (void 0 !== e.width && void 0 !== e.height) {
                                  let { width: n } = (0, y.Tj)({
                                      width: e.width,
                                      height: e.height,
                                      maxWidth: 400,
                                      maxHeight: 300
                                  });
                                  i = n;
                              }
                              return {
                                  ...(t !== N.hV.MOSAIC && { maxWidth: null != i ? i : '400px' }),
                                  width: '100%',
                                  height: '100%',
                                  justifySelf: 'auto'
                              };
                          })(o, L, d),
                          obscurityControlClassName: s()({ [O.obscureVideoSpacing]: 'VIDEO' === C && m && !v && V }),
                          onToggleObscurity: () => w((e) => !e),
                          children: (e) => G(e)
                      })
                    : G(),
                h
            ]
        })
    });
};
