t.d(n, {
    OB: function () {
        return P;
    },
    mz: function () {
        return V;
    }
}),
    t(47120),
    t(789020),
    t(411104);
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
    I = t(247206),
    x = t(25610),
    g = t(947849),
    p = t(982330),
    C = t(124347),
    f = t(976853),
    j = t(587906),
    v = t(592125),
    y = t(626135),
    E = t(630388),
    M = t(956664),
    T = t(169525),
    N = t(499376),
    w = t(217702),
    O = t(981631),
    A = t(388032),
    L = t(157029),
    _ = t(740909);
function P(e, n) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, N.aw)(e, n),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type
    };
}
let V = (e) => {
    let n,
        t,
        o,
        a,
        { mimeType: u, downloadURL: d, onRemoveItem: c, onViewItem: I, showDownload: x, showImageAppPicker: g, isVisualMediaType: C, channelId: f } = e;
    x &&
        (n = (0, i.jsx)(r.Tooltip, {
            text: A.intl.string(A.t['1WjMbG']),
            children: (e) =>
                (0, i.jsx)(h.Z, {
                    ...e,
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    className: _.hoverButton,
                    iconClassName: L.downloadHoverButtonIcon,
                    focusProps: { offset: 2 },
                    href: d,
                    mimeType: u
                })
        })),
        null != c &&
            (t = (0, i.jsx)(r.Tooltip, {
                text: A.intl.string(A.t['/XT3io']),
                children: (e) =>
                    (0, i.jsx)(r.Clickable, {
                        ...e,
                        className: s()(_.hoverButton, L.removeMosaicItemHoverButton),
                        focusProps: { offset: 2 },
                        onClick: c,
                        'aria-label': A.intl.string(A.t['0+xZHx']),
                        children: (0, i.jsx)(r.TrashIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    })
            }));
    let [v, y] = l.useState(!1),
        E = l.useCallback(() => y((e) => !e), []);
    g &&
        (o = (0, i.jsx)(m.Z, {
            toggleShowMenu: E,
            showMenu: v,
            channelId: f,
            className: s()(_.hoverButton, { [_.selected]: v }),
            imageUrl: d,
            mimeType: u
        }));
    let { mediaViewerAffordanceEnabled: M } = (0, p.dP)('MosaicItemHoverButtons');
    return (M &&
        null != I &&
        (a = (0, i.jsx)(j.Z, {
            className: _.hoverButton,
            onClick: I
        })),
    null == t && null == n && null == o && null == a)
        ? null
        : (0, i.jsxs)('div', {
              className: s()(_.hoverButtonGroup, {
                  [_.nonMediaMosaicItem]: !C,
                  [_.forceShowHover]: v
              }),
              children: [a, o, n, t]
          });
};
function S(e) {
    var n;
    let { message: t, item: o, autoPlayGif: m, canRemoveItem: c, onRemoveItem: h, onViewItem: I, onClick: x, onContextMenu: p, onPlay: j, renderImageComponent: T, renderVideoComponent: N, renderAudioComponent: _, renderPlaintextFilePreview: P, renderGenericFileComponent: S, renderVisualPlaceholderComponent: b, className: F, imgContainerClassName: k, imgClassName: D, focusable: H, hiddenSpoilers: B, mediaLayoutType: R, maxWidth: G, maxHeight: W, hasFooter: Z, useFullWidth: U, isVisualMediaType: z, onVideoControlsShow: X, onVideoControlsHide: q, isSearchResult: J } = e,
        { width: Y, height: Q, spoiler: K, type: $, contentType: ee } = o,
        [en, et] = l.useState(!1),
        [ei, el] = l.useState(!1),
        eo = t.getChannelId(),
        es = v.Z.getChannel(eo),
        ea = (0, f.Z)(eo),
        er = d.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        eu = l.useMemo(() => (null != ee && -1 !== ee.indexOf('/') ? ee.split('/') : ['unknown', 'unknown']), [ee]),
        ed = o.originalItem,
        em = 'IMAGE' === $ && !C.uo.test(o.downloadUrl) && !(C.YG.test(o.downloadUrl) && (0, E.yE)(null !== (n = ed.flags) && void 0 !== n ? n : 0, O.J0y.IS_ANIMATED)),
        ec = !1;
    if (z) {
        (null == Y || null == Q) && (ec = !0);
        let e = (0, M.Dc)({
            width: null != Y ? Y : 0,
            height: null != Q ? Q : 0,
            maxWidth: w.mT,
            maxHeight: w.Jj
        });
        !U && (e * (null != Y ? Y : 0) < w.OF || e * (null != Q ? Q : 0) < w.OF) && (ec = !0);
    }
    let eh = l.useCallback(() => {
            h(o);
        }, [o, h]),
        eI = l.useCallback(
            (e) => {
                if (em && !ec && !0 !== J) {
                    if (e && !ei) {
                        if ((el(!0), er)) {
                            var n;
                            (0, u.a)({
                                channelId: null !== (n = null == es ? void 0 : es.id) && void 0 !== n ? n : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        y.default.track(O.rMx.IMAGE_HOVERED, {
                            guild_id: null == es ? void 0 : es.guild_id,
                            channel_id: null == es ? void 0 : es.id,
                            image_recommendations_shown: er
                        });
                    } else !e && ei && el(!1);
                }
            },
            [ei, es, er, em, ec, J]
        ),
        ex = l.useCallback(() => {
            if (R === w.hV.MOSAIC) {
                let e = (!ea && ['VIDEO', 'CLIP', 'AUDIO'].includes($)) || 'OTHER' === $;
                return ec
                    ? null
                    : !en &&
                          (0, i.jsx)(V, {
                              mimeType: eu,
                              downloadURL: o.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: em && er && !0 !== J,
                              onRemoveItem: c ? eh : void 0,
                              onViewItem: I,
                              isVisualMediaType: z,
                              channelId: eo
                          });
            }
            return (
                c &&
                (0, i.jsx)(r.Clickable, {
                    className: K ? L.spoilerRemoveMosaicItemButton : L.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => h(o),
                    'aria-label': A.intl.string(A.t['0+xZHx']),
                    children: (0, i.jsx)(r.XSmallIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [R, c, K, $, z, en, o, eu, eh, h, I, er, ea, eo, em, ec, J]);
    switch ($) {
        case 'IMAGE':
            return (0, i.jsx)(g.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(T, {
                        item: o,
                        message: t,
                        width: Y,
                        height: Q,
                        autoPlay: m && !B,
                        onClick: x,
                        onContextMenu: p,
                        shouldHideMediaOptions: ea,
                        renderAccessory: e,
                        renderAdjacentContent: ex,
                        containerClassName: F,
                        className: k,
                        imageClassName: D,
                        shouldLink: H,
                        hiddenSpoilers: B,
                        responsive: !0,
                        mediaLayoutType: R,
                        maxWidth: G,
                        maxHeight: W,
                        useFullWidth: U,
                        onMouseEnter: () => eI(!0),
                        onMouseLeave: () => eI(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, i.jsx)(N, {
                item: o,
                message: t,
                width: Y,
                height: Q,
                onClick: x,
                onContextMenu: p,
                renderAdjacentContent: ex,
                naturalWidth: Y,
                naturalHeight: Q,
                className: s()(F, { [L.hasFooter]: Z }),
                playable: H,
                responsive: !0,
                mediaLayoutType: R,
                maxWidth: G,
                maxHeight: W,
                useFullWidth: U,
                mimeType: eu,
                onControlsShow: X,
                onControlsHide: q,
                downloadable: !ea,
                mediaPlayerClassName: Z ? L.hasFooter : void 0
            });
        case 'VISUAL_PLACEHOLDER':
            if (null == b) return null;
            return (0, i.jsx)(b, {
                item: o,
                message: t,
                className: k,
                imageClassName: D,
                maxWidth: G,
                maxHeight: W,
                mediaLayoutType: R,
                useFullWidth: U
            });
        case 'AUDIO':
            return (0, i.jsx)(_, {
                item: o,
                message: t,
                className: F,
                playable: H,
                mimeType: eu,
                renderAdjacentContent: ex,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: j
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(P, {
                item: o,
                message: t,
                className: F,
                onClick: x,
                onContextMenu: p,
                renderAdjacentContent: ex
            });
        case 'OTHER':
            return (0, i.jsx)(S, {
                item: o,
                message: t,
                className: F,
                onClick: x,
                onContextMenu: p,
                renderAdjacentContent: ex
            });
        case 'INVALID':
            return null;
    }
}
n.ZP = function (e) {
    var n;
    let { className: t, item: o, message: a, getObscureReason: r, useFullWidth: u, mediaLayoutType: d, isSingleMosaicItem: m, footer: h, ...g } = e,
        { width: p, height: C, type: f } = o,
        j = r(o, (0, x.V)(a.channel_id, a.author.id)),
        [v, y] = l.useState(null != j),
        E = d === w.hV.MOSAIC,
        O = !E && ((null != p && p < 200) || (null != C && C < 50));
    let A = 'IMAGE' === (n = f) || 'VIDEO' === n,
        _ = (0, N.R_)(f),
        P = m && null != j && (0, I.bR)(p, C),
        [V, b] = l.useState(!1),
        F = () => {
            b(!0);
        },
        k = () => {
            b(!1);
        },
        D = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(S, {
                ...g,
                item: o,
                message: a,
                getObscureReason: r,
                hiddenSpoilers: e,
                className: s()(t, L.mosaicItemContent, {
                    [L.obscured]: v && !O,
                    [L.hiddenSpoiler]: v && j === T.wk.SPOILER,
                    [L.hiddenExplicit]: v && null != j && [T.wk.EXPLICIT_CONTENT, T.wk.POTENTIAL_EXPLICIT_CONTENT].includes(j),
                    [L.hiddenMosaicItem]: v && e,
                    [L.inline]: v && O
                }),
                focusable: !e,
                mediaLayoutType: d,
                hasFooter: null != h,
                useFullWidth: !!P || u,
                isVisualMediaType: _,
                onVideoControlsShow: F,
                onVideoControlsHide: k
            });
        };
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(L.mosaicItem, {
                [L.mosaicItemNoJustify]: A,
                [L.mosaicItemFullWidth]: u,
                [L.mosaicItemMediaMosaic]: E,
                [L.hideOverflow]: E && _,
                [L.mosaicItemWithFooter]: null != h
            }),
            children: [
                null != j
                    ? (0, i.jsx)(c.Z, {
                          type: c.Z.Types.ATTACHMENT,
                          inline: O,
                          reason: j,
                          isSingleMosaicItem: m,
                          obscured: v,
                          containerStyles: (function (e, n, t) {
                              if (!n) return;
                              let i = e.width;
                              if (void 0 !== e.width && void 0 !== e.height) {
                                  let { width: n } = (0, M.Tj)({
                                      width: e.width,
                                      height: e.height,
                                      maxWidth: 400,
                                      maxHeight: 300
                                  });
                                  i = n;
                              }
                              return {
                                  ...(t !== w.hV.MOSAIC && { maxWidth: null != i ? i : '400px' }),
                                  width: '100%',
                                  height: '100%',
                                  justifySelf: 'auto'
                              };
                          })(o, A, d),
                          obscurityControlClassName: s()({ [L.obscureVideoSpacing]: 'VIDEO' === f && m && !v && V }),
                          onToggleObscurity: () => y((e) => !e),
                          children: (e) => D(e)
                      })
                    : D(),
                h
            ]
        })
    });
};
