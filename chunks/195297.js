n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    }),
    n(47120);
var o = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    r = n(481060),
    l = n(100527),
    c = n(906732),
    d = n(313201),
    u = n(455708),
    _ = n(81245),
    f = n(530329),
    g = n(626135),
    p = n(488499),
    E = n(58384),
    N = n(981631),
    h = n(486324),
    A = n(689938),
    R = n(76899);
function x(e) {
    let { transitionState: t, onClose: a, onComplete: x, uploadType: I, showUpsellHeader: m, analyticsPage: L } = e,
        [M, P] = i.useState(!1),
        C = (0, r.useModalContext)(),
        Z = (0, d.Dt)(),
        { analyticsLocations: j } = (0, c.ZP)(l.Z.GIF_PICKER);
    async function B(e) {
        let { gifSrc: t } = e;
        if (null == t || M) return;
        P(!0);
        let i = (0, E.Q)(t),
            s = await fetch(i),
            l = await s.blob();
        a(),
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('48017'), n.e('53243')]).then(n.bind(n, 850085));
                    return (t) =>
                        (0, o.jsx)(e, {
                            imgURI: i,
                            file: new File([l], 'tenor.gif', { type: 'image/gif' }),
                            onCrop: x,
                            uploadType: I,
                            showUpsellHeader: m,
                            ...t
                        });
                },
                { contextKey: C }
            );
    }
    i.useEffect(() => {
        g.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: L }
        });
    }, [L]);
    let S = I === h.pC.AVATAR || I === h.pC.BANNER,
        U = (0, _.Mu)('GIFPickerCroppingModal', !S);
    return (0, o.jsx)(c.Gt, {
        value: j,
        children: (0, o.jsxs)(r.ModalRoot, {
            'aria-labelledby': Z,
            transitionState: t,
            size: r.ModalSize.SMALL,
            children: [
                m &&
                    !U &&
                    (0, o.jsx)(p.Z, {
                        type: I,
                        analyticsPage: L,
                        analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, o.jsxs)(r.ModalHeader, {
                    className: R.modalHeader,
                    separator: !1,
                    children: [
                        (0, o.jsx)(r.FormTitle, {
                            className: R.titleCase,
                            tag: r.FormTitleTags.H1,
                            children: A.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                        }),
                        (0, o.jsx)(r.ModalCloseButton, {
                            onClick: a,
                            className: R.modalCloseButton
                        })
                    ]
                }),
                (0, o.jsxs)('div', {
                    children: [
                        (0, o.jsx)(u.Z, {
                            contentClassName: s()({ [R.gifPickerContent]: m && U }),
                            className: s()(R.gifPicker, { [R.loadingOverlay]: M }),
                            onSelectGIF: B,
                            hideFavorites: !0
                        }),
                        M && (0, o.jsx)(r.Spinner, { className: R.spinner })
                    ]
                }),
                m &&
                    U &&
                    (0, o.jsx)(f.Z, {
                        uploadType: I,
                        showUpsell: !0,
                        className: R.nitroUpsell,
                        onSecondaryClick: a
                    })
            ]
        })
    });
}
