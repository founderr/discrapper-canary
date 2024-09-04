l.d(n, {
    Z: function () {
        return v;
    }
}),
    l(47120);
var t = l(735250),
    r = l(470079),
    i = l(120356),
    a = l.n(i),
    s = l(481060),
    u = l(596454),
    o = l(911969),
    c = l(868819),
    d = l(970184),
    m = l(280501),
    p = l(689938),
    f = l(252443);
function E(e) {
    let { emoji: n, label: l, description: r, isDisabled: i, isOffset: s } = e,
        o = a()(f.labelContainer, {
            [f.disabled]: i,
            [f.offset]: null == n && s
        });
    return (0, t.jsxs)('div', {
        className: f.option,
        children: [
            null != n
                ? (0, t.jsx)(u.Z, {
                      className: f.emoji,
                      emojiId: n.id,
                      emojiName: n.name,
                      animated: n.animated
                  })
                : null,
            (0, t.jsxs)('div', {
                className: o,
                children: [
                    (0, t.jsx)('strong', {
                        className: f.label,
                        children: l
                    }),
                    null != r
                        ? (0, t.jsx)('span', {
                              className: f.description,
                              children: r
                          })
                        : null
                ]
            })
        ]
    });
}
function N(e) {
    let { emoji: n, label: l } = e;
    return (0, t.jsx)('div', {
        className: f.option,
        children: (0, t.jsxs)('div', {
            className: a()(f.value, f.singleValue),
            children: [
                null != n
                    ? (0, t.jsx)(u.Z, {
                          className: f.emoji,
                          src: n.src,
                          emojiId: n.id,
                          emojiName: n.name,
                          animated: n.animated
                      })
                    : null,
                (0, t.jsx)('span', {
                    className: f.singleValueLabel,
                    children: l
                })
            ]
        })
    });
}
function C(e) {
    let { options: n } = e;
    return (0, t.jsx)('div', {
        className: f.option,
        children: (0, t.jsx)('div', {
            className: f.value,
            children: n.map((e, n) =>
                (0, t.jsxs)(
                    'div',
                    {
                        className: f.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, t.jsx)(u.Z, {
                                      className: f.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, t.jsx)(
                                'span',
                                {
                                    className: f.tag,
                                    children: e.label
                                },
                                e.value
                            )
                        ]
                    },
                    n
                )
            )
        })
    });
}
function v(e) {
    let { type: n, options: l, id: i, placeholder: a, maxValues: u, minValues: v, disabled: _ } = e,
        h = r.useMemo(() => l.filter((e) => e.default).map((e) => e.value), [l]),
        {
            state: x,
            executeStateUpdate: T,
            visualState: I,
            isDisabled: g,
            error: S
        } = (0, d.Ee)(e, {
            type: n,
            values: h
        }),
        O = u > 1,
        j = I === m.gH.LOADING,
        [Z, R] = r.useState(!1),
        [M, b] = r.useState(() => new Set(l.filter((e) => e.default).map((e) => e.value))),
        [A, L] = r.useState(M),
        P = r.useMemo(() => l.some((e) => null != e.emoji), [l]);
    r.useEffect(() => {
        if ((null == x ? void 0 : x.type) === o.re.STRING_SELECT) {
            let e = new Set(x.values);
            b(e), L(e);
        } else {
            let e = new Set(h);
            b(e), L(e);
        }
    }, [i, h, x]);
    let y = r.useCallback(() => {
        if (A !== M)
            T({
                type: o.re.STRING_SELECT,
                values: Array.from(M)
            }) && L(M);
    }, [M, A, L, T]);
    r.useEffect(() => {
        if (!(Z || (M.size === A.size && Array.from(A).every((e) => M.has(e))))) y();
    }, [Z, M, A, y]);
    let k = s.singleSelect;
    O ? (k = s.multiSelect) : 0 === v && (k = s.toggleSelect);
    let U = (0, s.useVariableSelect)({
        value: M,
        onChange: (e) => b(e),
        onSelectInteraction: k
    });
    return (0, t.jsxs)(r.Fragment, {
        children: [
            (0, t.jsxs)('div', {
                className: f.container,
                children: [
                    (0, t.jsx)(s.Select, {
                        isDisabled: _ || g,
                        className: f.select,
                        options: l.map((e) => ({
                            ...e,
                            disabled: O && !M.has(e.value) && M.size === u
                        })),
                        placeholder: null != a ? a : p.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                        onClose: () => R(!1),
                        onOpen: () => R(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !O,
                        optionClassName: f.selectOption,
                        renderOptionLabel: (e) =>
                            (0, t.jsx)(E, {
                                ...e,
                                isDisabled: O && !M.has(e.value) && M.size === u,
                                isOffset: P
                            }),
                        renderOptionValue: (e) => (O ? (0, t.jsx)(C, { options: e }) : (0, t.jsx)(N, { ...e[0] })),
                        ...U
                    }),
                    j
                        ? (0, t.jsx)('div', {
                              className: f.__invalid_loading,
                              children: (0, t.jsx)(s.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != S
                ? (0, t.jsx)(c.st, {
                      ...(0, c.c4)(S),
                      className: f.error
                  })
                : null
        ]
    });
}
