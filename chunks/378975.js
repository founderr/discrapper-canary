t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    a = t(120356),
    r = t.n(a),
    o = t(481060),
    s = t(596454),
    c = t(911969),
    u = t(868819),
    d = t(970184),
    m = t(280501),
    _ = t(689938),
    f = t(601648);
function p(e) {
    let { emoji: n, label: t, description: i, isDisabled: a, isOffset: o } = e,
        c = r()(f.labelContainer, {
            [f.disabled]: a,
            [f.offset]: null == n && o
        });
    return (0, l.jsxs)('div', {
        className: f.option,
        children: [
            null != n
                ? (0, l.jsx)(s.Z, {
                      className: f.emoji,
                      emojiId: n.id,
                      emojiName: n.name,
                      animated: n.animated
                  })
                : null,
            (0, l.jsxs)('div', {
                className: c,
                children: [
                    (0, l.jsx)('strong', {
                        className: f.label,
                        children: t
                    }),
                    null != i
                        ? (0, l.jsx)('span', {
                              className: f.description,
                              children: i
                          })
                        : null
                ]
            })
        ]
    });
}
function C(e) {
    let { emoji: n, label: t } = e;
    return (0, l.jsx)('div', {
        className: f.option,
        children: (0, l.jsxs)('div', {
            className: r()(f.value, f.singleValue),
            children: [
                null != n
                    ? (0, l.jsx)(s.Z, {
                          className: f.emoji,
                          src: n.src,
                          emojiId: n.id,
                          emojiName: n.name,
                          animated: n.animated
                      })
                    : null,
                (0, l.jsx)('span', {
                    className: f.singleValueLabel,
                    children: t
                })
            ]
        })
    });
}
function h(e) {
    let { options: n } = e;
    return (0, l.jsx)('div', {
        className: f.option,
        children: (0, l.jsx)('div', {
            className: f.value,
            children: n.map((e, n) =>
                (0, l.jsxs)(
                    'div',
                    {
                        className: f.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, l.jsx)(s.Z, {
                                      className: f.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, l.jsx)(
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
function I(e) {
    let { type: n, options: t, id: a, placeholder: r, maxValues: s, minValues: I, disabled: E } = e,
        x = i.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        {
            state: v,
            executeStateUpdate: T,
            visualState: N,
            isDisabled: b,
            error: g
        } = (0, d.Ee)(e, {
            type: n,
            values: x
        }),
        S = s > 1,
        O = N === m.gH.LOADING,
        [j, M] = i.useState(!1),
        [Z, y] = i.useState(() => new Set(t.filter((e) => e.default).map((e) => e.value))),
        [R, L] = i.useState(Z),
        P = i.useMemo(() => t.some((e) => null != e.emoji), [t]);
    i.useEffect(() => {
        if ((null == v ? void 0 : v.type) === c.re.STRING_SELECT) {
            let e = new Set(v.values);
            y(e), L(e);
        } else {
            let e = new Set(x);
            y(e), L(e);
        }
    }, [a, x, v]);
    let A = i.useCallback(() => {
        if (R !== Z)
            T({
                type: c.re.STRING_SELECT,
                values: Array.from(Z)
            }) && L(Z);
    }, [Z, R, L, T]);
    i.useEffect(() => {
        if (!(j || (Z.size === R.size && Array.from(R).every((e) => Z.has(e))))) A();
    }, [j, Z, R, A]);
    let k = o.singleSelect;
    S ? (k = o.multiSelect) : 0 === I && (k = o.toggleSelect);
    let U = (0, o.useVariableSelect)({
        value: Z,
        onChange: (e) => y(e),
        onSelectInteraction: k
    });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: f.container,
                children: [
                    (0, l.jsx)(o.Select, {
                        isDisabled: E || b,
                        className: f.select,
                        options: t.map((e) => ({
                            ...e,
                            disabled: S && !Z.has(e.value) && Z.size === s
                        })),
                        placeholder: null != r ? r : _.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                        onClose: () => M(!1),
                        onOpen: () => M(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !S,
                        optionClassName: f.selectOption,
                        renderOptionLabel: (e) =>
                            (0, l.jsx)(p, {
                                ...e,
                                isDisabled: S && !Z.has(e.value) && Z.size === s,
                                isOffset: P
                            }),
                        renderOptionValue: (e) => (S ? (0, l.jsx)(h, { options: e }) : (0, l.jsx)(C, { ...e[0] })),
                        ...U
                    }),
                    O
                        ? (0, l.jsx)('div', {
                              className: f.__invalid_loading,
                              children: (0, l.jsx)(o.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != g
                ? (0, l.jsx)(u.st, {
                      ...(0, u.c4)(g),
                      className: f.error
                  })
                : null
        ]
    });
}
