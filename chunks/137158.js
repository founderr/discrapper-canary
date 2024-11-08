t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(47120);
var r = t(200651),
    a = t(192379),
    i = t(120356),
    o = t.n(i),
    s = t(392711),
    l = t(999153),
    c = t(584922),
    d = t(692547),
    u = t(481060),
    m = t(388032),
    f = t(55529);
function h(e) {
    let { title: n, children: t, onEdit: a, onRemove: i, canRemove: s, actionsLocation: l } = e;
    return (0, r.jsxs)('div', {
        className: f.backgroundContainer,
        children: [
            (0, r.jsxs)('div', {
                className: f.containerPadding,
                children: [
                    (0, r.jsx)(u.FormTitle, {
                        tag: 'h3',
                        className: f.containerTitle,
                        children: n
                    }),
                    t
                ]
            }),
            'footer' === l &&
                (0, r.jsxs)(u.FormSection, {
                    className: f.containerFooter,
                    children: [
                        (0, r.jsx)(u.Tooltip, {
                            text: m.intl.string(m.t.B3Jj1N),
                            shouldShow: !s,
                            children: (e) =>
                                (0, r.jsx)(u.Button, {
                                    ...e,
                                    className: o()(f.removeButton, f.button),
                                    size: u.Button.Sizes.SMALL,
                                    look: u.Button.Looks.BLANK,
                                    onClick: i,
                                    disabled: !s,
                                    children: m.intl.string(m.t.N86XcH)
                                })
                        }),
                        (0, r.jsx)(u.Button, {
                            className: f.button,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            onClick: a,
                            children: m.intl.string(m.t.bt75u7)
                        })
                    ]
                })
        ]
    });
}
let x = 'FORM_FIELD';
function p(e) {
    let { index: n, field: t, isDropHovered: i, onDrop: m } = e,
        p = (0, s.debounce)(async (e, n, t) => {
            await m(e, n, t);
        }),
        g = a.useRef(null),
        [, C] = (0, l.c)({
            type: x,
            item: {
                index: n,
                field: t
            },
            end: (e, n) => {
                null != e && !n.didDrop() && p(e.field, null, !0);
            }
        }),
        [, b] = (0, c.L)({
            accept: x,
            hover: (e, t) => {
                var r;
                let { index: a } = e,
                    i = null === (r = g.current) || void 0 === r ? void 0 : r.getBoundingClientRect(),
                    o = t.getClientOffset();
                if (null == i || null == o) return;
                let s = (i.bottom - i.top) / 2,
                    l = o.y - i.top;
                (!(a < n) || !(l < s)) && (!(a > n) || !(l < s)) && a !== n && p(e.field, n, !1);
            },
            drop: (e) => {
                p(e.field, n, !0);
            }
        });
    return (
        a.useLayoutEffect(
            () => (
                C(b(g)),
                () => {
                    b(null), C(null);
                }
            ),
            [C, b]
        ),
        (0, r.jsxs)('div', {
            ref: g,
            'data-dnd-name': 'field-'.concat(n),
            className: o()(f.dragContainer, { [f.dropHovered]: i }),
            children: [
                (0, r.jsx)('div', {
                    className: f.dragIconContainer,
                    children: (0, r.jsx)(u.DragIcon, {
                        size: 'xs',
                        className: f.dragIcon,
                        color: d.Z.unsafe_rawColors.PRIMARY_400.css
                    })
                }),
                (0, r.jsx)(h, { ...e })
            ]
        })
    );
}
function g(e) {
    return (0, r.jsxs)('div', {
        className: f.formFieldContainer,
        children: [
            (0, r.jsx)('div', {
                className: f.spacingContainer,
                children: e.isDragEnabled ? (0, r.jsx)(p, { ...e }) : (0, r.jsx)(h, { ...e })
            }),
            'side' === e.actionsLocation &&
                (0, r.jsxs)('div', {
                    className: f.actionButtonsContainer,
                    children: [
                        (0, r.jsx)(u.Clickable, {
                            className: f.actionButton,
                            onClick: e.onEdit,
                            'aria-label': m.intl.string(m.t.bt75u7),
                            children: (0, r.jsx)(u.PencilIcon, { size: 'xs' })
                        }),
                        e.canRemove &&
                            (0, r.jsx)(u.Clickable, {
                                className: f.actionButton,
                                onClick: e.onRemove,
                                'aria-label': m.intl.string(m.t.N86XcH),
                                children: (0, r.jsx)(u.TrashIcon, { size: 'xs' })
                            })
                    ]
                })
        ]
    });
}
