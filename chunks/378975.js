l.d(n, {
    Z: function () {
        return C;
    }
}),
    l(47120);
var t = l(735250),
    r = l(470079),
    a = l(120356),
    i = l.n(a),
    s = l(481060),
    u = l(596454),
    o = l(911969),
    c = l(868819),
    d = l(970184),
    m = l(280501),
    E = l(689938),
    p = l(252443);
function N(e) {
    let { emoji: n, label: l, description: r, isDisabled: a, isOffset: s } = e,
        o = i()(p.labelContainer, {
            [p.disabled]: a,
            [p.offset]: null == n && s
        });
    return (0, t.jsxs)('div', {
        className: p.option,
        children: [
            null != n
                ? (0, t.jsx)(u.Z, {
                      className: p.emoji,
                      emojiId: n.id,
                      emojiName: n.name,
                      animated: n.animated
                  })
                : null,
            (0, t.jsxs)('div', {
                className: o,
                children: [
                    (0, t.jsx)('strong', {
                        className: p.label,
                        children: l
                    }),
                    null != r
                        ? (0, t.jsx)('span', {
                              className: p.description,
                              children: r
                          })
                        : null
                ]
            })
        ]
    });
}
function f(e) {
    let { emoji: n, label: l } = e;
    return (0, t.jsx)('div', {
        className: p.option,
        children: (0, t.jsxs)('div', {
            className: i()(p.value, p.singleValue),
            children: [
                null != n
                    ? (0, t.jsx)(u.Z, {
                          className: p.emoji,
                          src: n.src,
                          emojiId: n.id,
                          emojiName: n.name,
                          animated: n.animated
                      })
                    : null,
                (0, t.jsx)('span', {
                    className: p.singleValueLabel,
                    children: l
                })
            ]
        })
    });
}
function _(e) {
    let { options: n } = e;
    return (0, t.jsx)('div', {
        className: p.option,
        children: (0, t.jsx)('div', {
            className: p.value,
            children: n.map((e, n) =>
                (0, t.jsxs)(
                    'div',
                    {
                        className: p.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, t.jsx)(u.Z, {
                                      className: p.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, t.jsx)(
                                'span',
                                {
                                    className: p.tag,
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
function C(e) {
    let { type: n, options: l, id: a, placeholder: i, maxValues: u, minValues: C, disabled: T } = e,
        v = r.useMemo(() => l.filter((e) => e.default).map((e) => e.value), [l]),
        {
            state: h,
            executeStateUpdate: x,
            visualState: I,
            isDisabled: S,
            error: O
        } = (0, d.Ee)(e, {
            type: n,
            values: v
        }),
        g = u > 1,
        j = I === m.gH.LOADING,
        [Z, R] = r.useState(!1),
        [M, b] = r.useState(() => new Set(l.filter((e) => e.default).map((e) => e.value))),
        [L, A] = r.useState(M),
        P = r.useMemo(() => l.some((e) => null != e.emoji), [l]);
    r.useEffect(() => {
        if ((null == h ? void 0 : h.type) === o.re.STRING_SELECT) {
            let e = new Set(h.values);
            b(e), A(e);
        } else {
            let e = new Set(v);
            b(e), A(e);
        }
    }, [a, v, h]);
    let y = r.useCallback(() => {
        if (L !== M)
            x({
                type: o.re.STRING_SELECT,
                values: Array.from(M)
            }) && A(M);
    }, [M, L, A, x]);
    r.useEffect(() => {
        if (!(Z || (M.size === L.size && Array.from(L).every((e) => M.has(e))))) y();
    }, [Z, M, L, y]);
    let U = s.singleSelect;
    g ? (U = s.multiSelect) : 0 === C && (U = s.toggleSelect);
    let k = (0, s.useVariableSelect)({
        value: M,
        onChange: (e) => b(e),
        onSelectInteraction: U
    });
    return (0, t.jsxs)(r.Fragment, {
        children: [
            (0, t.jsxs)('div', {
                className: p.container,
                children: [
                    (0, t.jsx)(s.Select, {
                        isDisabled: T || S,
                        className: p.select,
                        options: l.map((e) => ({
                            ...e,
                            disabled: g && !M.has(e.value) && M.size === u
                        })),
                        placeholder: null != i ? i : E.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                        onClose: () => R(!1),
                        onOpen: () => R(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !g,
                        optionClassName: p.selectOption,
                        renderOptionLabel: (e) =>
                            (0, t.jsx)(N, {
                                ...e,
                                isDisabled: g && !M.has(e.value) && M.size === u,
                                isOffset: P
                            }),
                        renderOptionValue: (e) => (g ? (0, t.jsx)(_, { options: e }) : (0, t.jsx)(f, { ...e[0] })),
                        ...k
                    }),
                    j
                        ? (0, t.jsx)('div', {
                              className: p.__invalid_loading,
                              children: (0, t.jsx)(s.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != O
                ? (0, t.jsx)(c.st, {
                      ...(0, c.c4)(O),
                      className: p.error
                  })
                : null
        ]
    });
}
