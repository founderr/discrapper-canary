n.r(r),
    n.d(r, {
        StickerPackViewAllModalFooter: function () {
            return y;
        },
        default: function () {
            return O;
        }
    }),
    n(653041),
    n(47120);
var t = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    a = n(954955),
    c = n.n(a),
    i = n(442837),
    d = n(477690),
    u = n(481060),
    _ = n(691251),
    m = n(598),
    p = n(409813),
    E = n(185139),
    h = n(624138),
    N = n(790954),
    I = n(453070),
    S = n(926491),
    C = n(378233),
    f = n(515005),
    P = n(282896),
    A = n(929204),
    T = n(981631),
    g = n(689938),
    x = n(174018);
let k = (0, h.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
    R = (0, h.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
    M = (0, h.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
    j = k + 2 * R,
    b = c()(N.pF, 250),
    v = () => {
        b.cancel();
    },
    W = (e) => {
        let { visibleRowIndex: r, columnIndex: n } = e;
        b.cancel(), (0, N.Mf)(n, r, _.u.MOUSE_EVENT);
    },
    B = (e) => {
        let { stickerPack: r, width: n, hasHeaderImage: s, isScrolling: a, onInspect: c } = e,
            i = o.useMemo(() => [(0, C.z)(r)], [r]),
            d = (0, N.Y6)((e) => e.inspectedStickerPosition),
            {
                rowCountBySection: u,
                stickersGrid: _,
                gutterWidth: m
            } = (0, I.el)({
                stickersCategories: i,
                stickerNodeMargin: M,
                stickerNodeWidth: j,
                listWidth: n
            });
        return (0, t.jsxs)('div', {
            className: l()(x.container, { [x.containerWithHeader]: s }),
            children: [
                (0, t.jsx)(
                    P.Z,
                    {
                        className: x.header,
                        stickerPack: r,
                        withDescription: !0
                    },
                    r.id
                ),
                (0, t.jsx)('div', {
                    onFocus: v,
                    onBlur: b,
                    onMouseOver: v,
                    onMouseOut: b,
                    children: (() => {
                        if (0 === u.length) return null;
                        let e = [];
                        for (let r = 0; r < u[0]; r++)
                            e.push(
                                (0, t.jsx)(
                                    f.Z,
                                    {
                                        enlargeOnInteraction: !0,
                                        preferAnimation: !0,
                                        gutterWidth: m,
                                        inspectedStickerPosition: d,
                                        isScrolling: a,
                                        onInspect: c,
                                        rowIndex: r,
                                        stickerDescriptors: _[r],
                                        stickerPadding: R,
                                        stickerSize: k,
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
    y = (e) => {
        let { onClose: r, stickerPack: n } = e;
        (0, I.fP)();
        let o = (0, i.e7)([S.Z], () => S.Z.isPremiumPack(n.id));
        return (0, t.jsxs)(u.ModalFooter, {
            className: x.footer,
            children: [
                (0, t.jsx)(u.Anchor, {
                    onClick: r,
                    className: x.skuPreviewFooterCloseButton,
                    children: g.Z.Messages.CLOSE
                }),
                o &&
                    (0, t.jsxs)(u.ShinyButton, {
                        color: u.Button.Colors.GREEN,
                        type: 'submit',
                        innerClassName: x.premiumButtonInner,
                        onClick: () => {
                            r(), (0, A.Z)({ section: T.jXE.STICKER_PACK_VIEW_ALL });
                        },
                        children: [
                            (0, t.jsx)(u.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: x.premiumButtonNitroWheel
                            }),
                            g.Z.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM
                        ]
                    })
            ]
        });
    },
    D = (e) => {
        let { stickerPack: r, onClose: n } = e,
            o = (0, C.sM)(r, 1024);
        return null == o
            ? null
            : (0, t.jsxs)(u.ModalHeader, {
                  className: x.headerWithImage,
                  children: [
                      (0, t.jsx)('div', {
                          role: 'image',
                          style: { backgroundImage: 'url('.concat(o, ')') },
                          className: x.backgroundImage
                      }),
                      (0, t.jsx)(u.ModalCloseButton, {
                          className: x.closeButton,
                          onClick: n
                      })
                  ]
              });
    };
function O(e) {
    let { onClose: r, stickerPack: n, ...s } = e,
        [l, a] = o.useState(null),
        c = o.useCallback((e) => {
            null !== e && a(e.offsetWidth);
        }, []);
    return (
        o.useLayoutEffect(() => {
            (0, N.pF)();
        }, []),
        (0, t.jsx)(m.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, t.jsx)(u.ModalRoot, {
                ...s,
                'aria-labelledby': 'sticker-pack-sku-preview-modal',
                children: (0, t.jsx)(E.Z, {
                    hideBreadcrumbs: !0,
                    body: (0, t.jsx)('div', {
                        ref: c,
                        children:
                            null != l &&
                            (0, t.jsx)(B, {
                                stickerPack: n,
                                hasHeaderImage: !0,
                                onInspect: W,
                                width: l
                            })
                    }),
                    footer: (0, t.jsx)(y, {
                        onClose: r,
                        stickerPack: n
                    }),
                    header: (0, t.jsx)(D, {
                        onClose: r,
                        stickerPack: n
                    }),
                    onScroll: b,
                    steps: [p.h8.SKU_PREVIEW],
                    currentStep: p.h8.SKU_PREVIEW
                })
            })
        })
    );
}
