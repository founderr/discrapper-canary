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
    s = n(481060),
    l = n(100527),
    c = n(906732),
    d = n(313201),
    u = n(455708),
    _ = n(81245),
    g = n(53691),
    E = n(626135),
    f = n(488499),
    I = n(58384),
    N = n(981631),
    T = n(689938),
    p = n(321393);
function h(e) {
    let { transitionState: i, onClose: r, onComplete: h, uploadType: R, showUpsellHeader: m, analyticsPage: x } = e,
        [C, b] = t.useState(!1),
        B = (0, s.useModalContext)(),
        A = (0, d.Dt)(),
        { analyticsLocations: M } = (0, c.ZP)(l.Z.GIF_PICKER);
    async function P(e) {
        let { gifSrc: i } = e;
        if (null == i || C) return;
        b(!0);
        let t = (0, I.Q)(i),
            a = await fetch(t),
            l = await a.blob();
        r(),
            (0, s.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('48017'), n.e('40629')]).then(n.bind(n, 850085));
                    return (i) =>
                        (0, o.jsx)(e, {
                            imgURI: t,
                            file: new File([l], 'tenor.gif', { type: 'image/gif' }),
                            onCrop: h,
                            uploadType: R,
                            showUpsellHeader: m,
                            ...i
                        });
                },
                { contextKey: B }
            );
    }
    t.useEffect(() => {
        E.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: x }
        });
    }, [x]);
    let L = (0, _.M)('GIFPickerCroppingModal');
    return (0, o.jsx)(c.Gt, {
        value: M,
        children: (0, o.jsxs)(s.ModalRoot, {
            'aria-labelledby': A,
            transitionState: i,
            size: s.ModalSize.SMALL,
            children: [
                m &&
                    !L &&
                    (0, o.jsx)(f.Z, {
                        type: R,
                        analyticsPage: x,
                        analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, o.jsxs)(s.ModalHeader, {
                    className: p.modalHeader,
                    separator: !1,
                    children: [
                        (0, o.jsx)(s.FormTitle, {
                            className: p.titleCase,
                            tag: s.FormTitleTags.H1,
                            children: T.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                        }),
                        (0, o.jsx)(s.ModalCloseButton, {
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
                        C && (0, o.jsx)(s.Spinner, { className: p.spinner })
                    ]
                }),
                m &&
                    L &&
                    (0, o.jsx)(g.p, {
                        showUpsell: !0,
                        text: 'Wear GIFs with Nitro',
                        button: T.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                        buttonAnalyticsObject: { section: N.jXE.EMOJI_PICKER_FLOATING_UPSELL },
                        className: p.nitroUpsell
                    })
            ]
        })
    });
}
