t.d(n, {
    Z: function () {
        return v;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    s = t(392711),
    o = t(999153),
    c = t(584922),
    d = t(692547),
    u = t(481060),
    m = t(388032),
    x = t(55529);
function f(e) {
    let { title: n, children: t, onEdit: l, onRemove: a, canRemove: s, actionsLocation: o } = e;
    return (0, i.jsxs)('div', {
        className: x.backgroundContainer,
        children: [
            (0, i.jsxs)('div', {
                className: x.containerPadding,
                children: [
                    (0, i.jsx)(u.FormTitle, {
                        tag: 'h3',
                        className: x.containerTitle,
                        children: n
                    }),
                    t
                ]
            }),
            'footer' === o &&
                (0, i.jsxs)(u.FormSection, {
                    className: x.containerFooter,
                    children: [
                        (0, i.jsx)(u.Tooltip, {
                            text: m.intl.string(m.t.B3Jj1N),
                            shouldShow: !s,
                            children: (e) =>
                                (0, i.jsx)(u.Button, {
                                    ...e,
                                    className: r()(x.removeButton, x.button),
                                    size: u.Button.Sizes.SMALL,
                                    look: u.Button.Looks.BLANK,
                                    onClick: a,
                                    disabled: !s,
                                    children: m.intl.string(m.t.N86XcH)
                                })
                        }),
                        (0, i.jsx)(u.Button, {
                            className: x.button,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            onClick: l,
                            children: m.intl.string(m.t.bt75u7)
                        })
                    ]
                })
        ]
    });
}
let h = 'FORM_FIELD';
function g(e) {
    let { index: n, field: t, isDropHovered: a, onDrop: m } = e,
        g = (0, s.debounce)(async (e, n, t) => {
            await m(e, n, t);
        }),
        v = l.useRef(null),
        [, j] = (0, o.c)({
            type: h,
            item: {
                index: n,
                field: t
            },
            end: (e, n) => {
                null != e && !n.didDrop() && g(e.field, null, !0);
            }
        }),
        [, C] = (0, c.L)({
            accept: h,
            hover: (e, t) => {
                var i;
                let { index: l } = e,
                    a = null === (i = v.current) || void 0 === i ? void 0 : i.getBoundingClientRect(),
                    r = t.getClientOffset();
                if (null == a || null == r) return;
                let s = (a.bottom - a.top) / 2,
                    o = r.y - a.top;
                (!(l < n) || !(o < s)) && (!(l > n) || !(o < s)) && l !== n && g(e.field, n, !1);
            },
            drop: (e) => {
                g(e.field, n, !0);
            }
        });
    return (
        l.useLayoutEffect(
            () => (
                j(C(v)),
                () => {
                    C(null), j(null);
                }
            ),
            [j, C]
        ),
        (0, i.jsxs)('div', {
            ref: v,
            'data-dnd-name': 'field-'.concat(n),
            className: r()(x.dragContainer, { [x.dropHovered]: a }),
            children: [
                (0, i.jsx)('div', {
                    className: x.dragIconContainer,
                    children: (0, i.jsx)(u.DragIcon, {
                        size: 'xs',
                        className: x.dragIcon,
                        color: d.Z.unsafe_rawColors.PRIMARY_400.css
                    })
                }),
                (0, i.jsx)(f, { ...e })
            ]
        })
    );
}
function v(e) {
    return (0, i.jsxs)('div', {
        className: x.formFieldContainer,
        children: [
            (0, i.jsx)('div', {
                className: x.spacingContainer,
                children: e.isDragEnabled ? (0, i.jsx)(g, { ...e }) : (0, i.jsx)(f, { ...e })
            }),
            'side' === e.actionsLocation &&
                (0, i.jsxs)('div', {
                    className: x.actionButtonsContainer,
                    children: [
                        (0, i.jsx)(u.Clickable, {
                            className: x.actionButton,
                            onClick: e.onEdit,
                            'aria-label': m.intl.string(m.t.bt75u7),
                            children: (0, i.jsx)(u.PencilIcon, { size: 'xs' })
                        }),
                        e.canRemove &&
                            (0, i.jsx)(u.Clickable, {
                                className: x.actionButton,
                                onClick: e.onRemove,
                                'aria-label': m.intl.string(m.t.N86XcH),
                                children: (0, i.jsx)(u.TrashIcon, { size: 'xs' })
                            })
                    ]
                })
        ]
    });
}
