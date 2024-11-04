n.r(r),
    n.d(r, {
        StickerPackViewAllModalFooter: function () {
            return B;
        },
        default: function () {
            return O;
        }
    }),
    n(653041),
    n(47120);
var t = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    s = n(954955),
    a = n.n(s),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    m = n(691251),
    p = n(563132),
    h = n(409813),
    _ = n(185139),
    f = n(624138),
    N = n(790954),
    S = n(453070),
    x = n(926491),
    E = n(378233),
    C = n(515005),
    g = n(282896),
    P = n(929204),
    I = n(981631),
    k = n(388032),
    v = n(174018);
let j = (0, f.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
    b = (0, f.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
    y = (0, f.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
    A = j + 2 * b,
    T = a()(N.pF, 250),
    R = () => {
        T.cancel();
    },
    M = (e) => {
        let { visibleRowIndex: r, columnIndex: n } = e;
        T.cancel(), (0, N.Mf)(n, r, m.u.MOUSE_EVENT);
    },
    W = (e) => {
        let { stickerPack: r, width: n, hasHeaderImage: o, isScrolling: s, onInspect: a } = e,
            c = l.useMemo(() => [(0, E.z)(r)], [r]),
            d = (0, N.Y6)((e) => e.inspectedStickerPosition),
            {
                rowCountBySection: u,
                stickersGrid: m,
                gutterWidth: p
            } = (0, S.el)({
                stickersCategories: c,
                stickerNodeMargin: y,
                stickerNodeWidth: A,
                listWidth: n
            });
        return (0, t.jsxs)('div', {
            className: i()(v.container, { [v.containerWithHeader]: o }),
            children: [
                (0, t.jsx)(
                    g.Z,
                    {
                        className: v.header,
                        stickerPack: r,
                        withDescription: !0
                    },
                    r.id
                ),
                (0, t.jsx)('div', {
                    onFocus: R,
                    onBlur: T,
                    onMouseOver: R,
                    onMouseOut: T,
                    children: (() => {
                        if (0 === u.length) return null;
                        let e = [];
                        for (let r = 0; r < u[0]; r++)
                            e.push(
                                (0, t.jsx)(
                                    C.Z,
                                    {
                                        enlargeOnInteraction: !0,
                                        preferAnimation: !0,
                                        gutterWidth: p,
                                        inspectedStickerPosition: d,
                                        isScrolling: s,
                                        onInspect: a,
                                        rowIndex: r,
                                        stickerDescriptors: m[r],
                                        stickerPadding: b,
                                        stickerSize: j,
                                        isDisplayingIndividualStickers: !0,
                                        checkSendability: !1
                                    },
                                    r
                                )
                            );
                        return e;
                    })()
                })
            ]
        });
    },
    B = (e) => {
        let { onClose: r, stickerPack: n } = e;
        (0, S.fP)();
        let l = (0, c.e7)([x.Z], () => x.Z.isPremiumPack(n.id));
        return (0, t.jsxs)(u.ModalFooter, {
            className: v.footer,
            children: [
                (0, t.jsx)(u.Anchor, {
                    onClick: r,
                    className: v.skuPreviewFooterCloseButton,
                    children: k.intl.string(k.t.cpT0Cg)
                }),
                l &&
                    (0, t.jsxs)(u.ShinyButton, {
                        color: u.Button.Colors.GREEN,
                        type: 'submit',
                        innerClassName: v.premiumButtonInner,
                        onClick: () => {
                            r(), (0, P.Z)({ section: I.jXE.STICKER_PACK_VIEW_ALL });
                        },
                        children: [
                            (0, t.jsx)(u.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: v.premiumButtonNitroWheel
                            }),
                            k.intl.string(k.t['w+kuhY'])
                        ]
                    })
            ]
        });
    },
    D = (e) => {
        let { stickerPack: r, onClose: n } = e,
            l = (0, E.sM)(r, 1024);
        return null == l
            ? null
            : (0, t.jsxs)(u.ModalHeader, {
                  className: v.headerWithImage,
                  children: [
                      (0, t.jsx)('div', {
                          role: 'image',
                          style: { backgroundImage: 'url('.concat(l, ')') },
                          className: v.backgroundImage
                      }),
                      (0, t.jsx)(u.ModalCloseButton, {
                          className: v.closeButton,
                          onClick: n
                      })
                  ]
              });
    };
function O(e) {
    let { onClose: r, stickerPack: n, ...o } = e,
        [i, s] = l.useState(null),
        a = l.useCallback((e) => {
            null !== e && s(e.offsetWidth);
        }, []);
    return (
        l.useLayoutEffect(() => {
            (0, N.pF)();
        }, []),
        (0, t.jsx)(p.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, t.jsx)(u.ModalRoot, {
                ...o,
                'aria-labelledby': 'sticker-pack-sku-preview-modal',
                children: (0, t.jsx)(_.Z, {
                    hideBreadcrumbs: !0,
                    body: (0, t.jsx)('div', {
                        ref: a,
                        children:
                            null != i &&
                            (0, t.jsx)(W, {
                                stickerPack: n,
                                hasHeaderImage: !0,
                                onInspect: M,
                                width: i
                            })
                    }),
                    footer: (0, t.jsx)(B, {
                        onClose: r,
                        stickerPack: n
                    }),
                    header: (0, t.jsx)(D, {
                        onClose: r,
                        stickerPack: n
                    }),
                    onScroll: T,
                    steps: [h.h8.SKU_PREVIEW],
                    currentStep: h.h8.SKU_PREVIEW
                })
            })
        })
    );
}
