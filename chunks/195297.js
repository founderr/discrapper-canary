n.r(i),
    n.d(i, {
        default: function () {
            return h;
        }
    }),
    n(47120);
var o = n(735250),
    t = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    s = n(100527),
    c = n(906732),
    d = n(313201),
    u = n(455708),
    _ = n(81245),
    g = n(53691),
    E = n(626135),
    f = n(488499),
    T = n(58384),
    I = n(981631),
    N = n(689938),
    p = n(321393);
function h(e) {
    let { transitionState: i, onClose: r, onComplete: h, uploadType: R, showUpsellHeader: m, analyticsPage: x } = e,
        [C, B] = t.useState(!1),
        b = (0, l.useModalContext)(),
        A = (0, d.Dt)(),
        { analyticsLocations: M } = (0, c.ZP)(s.Z.GIF_PICKER);
    async function P(e) {
        let { gifSrc: i } = e;
        if (null == i || C) return;
        B(!0);
        let t = (0, T.Q)(i),
            a = await fetch(t),
            s = await a.blob();
        r(),
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('48017'), n.e('40629')]).then(n.bind(n, 850085));
                    return (i) =>
                        (0, o.jsx)(e, {
                            imgURI: t,
                            file: new File([s], 'tenor.gif', { type: 'image/gif' }),
                            onCrop: h,
                            uploadType: R,
                            showUpsellHeader: m,
                            ...i
                        });
                },
                { contextKey: b }
            );
    }
    t.useEffect(() => {
        E.default.track(I.rMx.OPEN_MODAL, {
            type: I.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: x }
        });
    }, [x]);
    let L = (0, _.M)('GIFPickerCroppingModal');
    return (0, o.jsx)(c.Gt, {
        value: M,
        children: (0, o.jsxs)(l.ModalRoot, {
            'aria-labelledby': A,
            transitionState: i,
            size: l.ModalSize.SMALL,
            children: [
                m &&
                    !L &&
                    (0, o.jsx)(f.Z, {
                        type: R,
                        analyticsPage: x,
                        analyticsSection: I.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, o.jsxs)(l.ModalHeader, {
                    className: p.modalHeader,
                    separator: !1,
                    children: [
                        (0, o.jsx)(l.FormTitle, {
                            className: p.titleCase,
                            tag: l.FormTitleTags.H1,
                            children: N.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                        }),
                        (0, o.jsx)(l.ModalCloseButton, {
                            onClick: r,
                            className: p.modalCloseButton
                        })
                    ]
                }),
                (0, o.jsxs)('div', {
                    children: [
                        (0, o.jsx)(u.Z, {
                            contentClassName: a()({ [p.gifPickerContent]: m && L }),
                            className: a()(p.gifPicker, { [p.loadingOverlay]: C }),
                            onSelectGIF: P,
                            hideFavorites: !0
                        }),
                        C && (0, o.jsx)(l.Spinner, { className: p.spinner })
                    ]
                }),
                m &&
                    L &&
                    (0, o.jsx)(g.p, {
                        showUpsell: !0,
                        upsellText: 'Wear GIFs with Nitro',
                        ctaText: N.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                        ctaAnalyticsObject: { section: I.jXE.EMOJI_PICKER_FLOATING_UPSELL },
                        className: p.nitroUpsell
                    })
            ]
        })
    });
}
