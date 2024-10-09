t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var l = t(735250),
    i = t(470079),
    a = t(120356),
    r = t.n(a),
    o = t(481060),
    s = t(596454),
    c = t(911969),
    u = t(868819),
    d = t(970184),
    m = t(280501),
    f = t(689938),
    _ = t(601648);
function p(e) {
    let { emoji: n, label: t, description: i, isDisabled: a, isOffset: o } = e,
        c = r()(_.labelContainer, {
            [_.disabled]: a,
            [_.offset]: null == n && o
        });
    return (0, l.jsxs)('div', {
        className: _.option,
        children: [
            null != n
                ? (0, l.jsx)(s.Z, {
                      className: _.emoji,
                      emojiId: n.id,
                      emojiName: n.name,
                      animated: n.animated
                  })
                : null,
            (0, l.jsxs)('div', {
                className: c,
                children: [
                    (0, l.jsx)('strong', {
                        className: _.label,
                        children: t
                    }),
                    null != i
                        ? (0, l.jsx)('span', {
                              className: _.description,
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
        className: _.option,
        children: (0, l.jsxs)('div', {
            className: r()(_.value, _.singleValue),
            children: [
                null != n
                    ? (0, l.jsx)(s.Z, {
                          className: _.emoji,
                          src: n.src,
                          emojiId: n.id,
                          emojiName: n.name,
                          animated: n.animated
                      })
                    : null,
                (0, l.jsx)('span', {
                    className: _.singleValueLabel,
                    children: t
                })
            ]
        })
    });
}
function h(e) {
    let { options: n } = e;
    return (0, l.jsx)('div', {
        className: _.option,
        children: (0, l.jsx)('div', {
            className: _.value,
            children: n.map((e, n) =>
                (0, l.jsxs)(
                    'div',
                    {
                        className: _.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, l.jsx)(s.Z, {
                                      className: _.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, l.jsx)(
                                'span',
                                {
                                    className: _.tag,
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
    let { type: n, options: t, id: a, placeholder: r, maxValues: s, minValues: I, disabled: x } = e,
        E = i.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        {
            state: v,
            executeStateUpdate: T,
            visualState: N,
            isDisabled: b,
            error: g
        } = (0, d.Ee)(e, {
            type: n,
            values: E
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
            let e = new Set(E);
            y(e), L(e);
        }
    }, [a, E, v]);
    let k = i.useCallback(() => {
        if (R !== Z)
            T({
                type: c.re.STRING_SELECT,
                values: Array.from(Z)
            }) && L(Z);
    }, [Z, R, L, T]);
    i.useEffect(() => {
        if (!(j || (Z.size === R.size && Array.from(R).every((e) => Z.has(e))))) k();
    }, [j, Z, R, k]);
    let A = o.singleSelect;
    S ? (A = o.multiSelect) : 0 === I && (A = o.toggleSelect);
    let U = (0, o.useVariableSelect)({
        value: Z,
        onChange: (e) => y(e),
        onSelectInteraction: A
    });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: _.container,
                children: [
                    (0, l.jsx)(o.Select, {
                        isDisabled: x || b,
                        className: _.select,
                        options: t.map((e) => ({
                            ...e,
                            disabled: S && !Z.has(e.value) && Z.size === s
                        })),
                        placeholder: null != r ? r : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                        onClose: () => M(!1),
                        onOpen: () => M(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !S,
                        optionClassName: _.selectOption,
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
                              className: _.__invalid_loading,
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
                      className: _.error
                  })
                : null
        ]
    });
}
