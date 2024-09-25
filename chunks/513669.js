t.d(A, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    s = t(120356),
    r = t.n(s),
    o = t(481060),
    l = t(813197),
    i = t(689938),
    d = t(403756);
let c = 'custom-image',
    u = a.forwardRef(function (e, A) {
        let { selectedImageName: t, onChange: a, disabled: s = !1, name: l, alt: i, data: c } = e,
            u = l === t,
            C = (0, o.useRadioItem)({
                isSelected: u,
                label: i
            }),
            g = s
                ? void 0
                : () => {
                      a(c, l);
                  };
        return (0, n.jsx)(o.Clickable, {
            ref: A,
            className: r()(d.radioOption, {
                [d.selected]: u,
                [d.disabled]: s
            }),
            onClick: g,
            'aria-disabled': s,
            ...C,
            children: (0, n.jsx)('img', {
                src: c,
                alt: i,
                className: d.radioOptionImage
            })
        });
    });
function C(e) {
    let { presetImages: A, image: t, imageName: s, savedImageName: C, onChange: g, uploadButtonLabel: T = i.Z.Messages.UPLOAD_IMAGE, radioGroupAriaLabel: I = i.Z.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL, disabled: U = !1 } = e,
        p = s === c,
        [h, m] = a.useState(p ? t : null),
        [f, v] = a.useState(null),
        q = a.useRef(null),
        E = a.useRef(null);
    a.useEffect(() => {
        C !== c && (m(null), v(null));
    }, [C]);
    let O = null != f ? i.Z.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({ filename: f }) : i.Z.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
        N = (0, o.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: U
        }),
        D = () => {
            var e;
            return null === (e = q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        },
        R = () => {
            s === c && g(A[0].data, A[0].name), m(null), v(null);
        };
    return (
        a.useEffect(() => {
            if (p && null != f) {
                var e, A;
                null === (A = E.current) || void 0 === A || null === (e = A.ref) || void 0 === e || e.focus();
            }
        }, [p, f]),
        (0, n.jsxs)('div', {
            className: d.imageSelectionContainer,
            children: [
                (0, n.jsx)(o.FocusRing, {
                    within: !0,
                    children: (0, n.jsxs)('div', {
                        className: r()(d.uploadButton, {
                            [d.disabled]: U,
                            [d.hidden]: null != h
                        }),
                        'aria-disabled': U,
                        children: [
                            (0, n.jsx)(o.ImagePlusIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                'aria-hidden': !0,
                                children: T
                            }),
                            (0, n.jsx)(l.ZP, {
                                ref: q,
                                tabIndex: 0,
                                onChange: (e, A) => {
                                    null != A && (v(A.name), m(e), g(e, c));
                                },
                                'aria-label': T
                            })
                        ]
                    })
                }),
                null != h &&
                    (0, n.jsxs)('div', {
                        className: d.customImageActionContainer,
                        children: [
                            (0, n.jsx)(o.Tooltip, {
                                text: i.Z.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(o.Clickable, {
                                        ...e,
                                        className: d.customImageAction,
                                        onClick: D,
                                        'aria-label': i.Z.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({ filename: f }),
                                        children: (0, n.jsx)(o.PencilIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: d.editIcon
                                        })
                                    })
                            }),
                            (0, n.jsx)(o.Tooltip, {
                                text: i.Z.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
                                hideOnClick: !0,
                                children: (e) =>
                                    (0, n.jsx)(o.Clickable, {
                                        ...e,
                                        className: d.customImageAction,
                                        onClick: R,
                                        'aria-label': i.Z.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_CUSTOM_IMAGE_ARIA_LABEL.format({ filename: f }),
                                        children: (0, n.jsx)(o.TrashIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: d.deleteIcon
                                        })
                                    })
                            })
                        ]
                    }),
                (0, n.jsxs)('div', {
                    'aria-label': I,
                    ...N,
                    className: d.radioGroup,
                    children: [
                        null != h &&
                            (0, n.jsx)(u, {
                                ref: E,
                                selectedImageName: s,
                                onChange: g,
                                disabled: U,
                                name: c,
                                alt: O,
                                data: h
                            }),
                        A.map((e) =>
                            (0, n.jsx)(
                                u,
                                {
                                    selectedImageName: s,
                                    onChange: g,
                                    disabled: U,
                                    ...e
                                },
                                e.name
                            )
                        )
                    ]
                })
            ]
        })
    );
}
