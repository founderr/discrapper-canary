t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var l = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    s = t(596454),
    c = t(911969),
    u = t(868819),
    d = t(970184),
    m = t(280501),
    _ = t(689938),
    f = t(252443);
function p(e) {
    let { emoji: n, label: t, description: a, isDisabled: i, isOffset: o } = e,
        c = r()(f.labelContainer, {
            [f.disabled]: i,
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
                    null != a
                        ? (0, l.jsx)('span', {
                              className: f.description,
                              children: a
                          })
                        : null
                ]
            })
        ]
    });
}
function E(e) {
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
function I(e) {
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
function C(e) {
    let { type: n, options: t, id: i, placeholder: r, maxValues: s, minValues: C, disabled: h } = e,
        N = a.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        {
            state: T,
            executeStateUpdate: x,
            visualState: v,
            isDisabled: g,
            error: b
        } = (0, d.Ee)(e, {
            type: n,
            values: N
        }),
        S = s > 1,
        O = v === m.gH.LOADING,
        [j, M] = a.useState(!1),
        [Z, y] = a.useState(() => new Set(t.filter((e) => e.default).map((e) => e.value))),
        [R, L] = a.useState(Z),
        A = a.useMemo(() => t.some((e) => null != e.emoji), [t]);
    a.useEffect(() => {
        if ((null == T ? void 0 : T.type) === c.re.STRING_SELECT) {
            let e = new Set(T.values);
            y(e), L(e);
        } else {
            let e = new Set(N);
            y(e), L(e);
        }
    }, [i, N, T]);
    let P = a.useCallback(() => {
        if (R !== Z)
            x({
                type: c.re.STRING_SELECT,
                values: Array.from(Z)
            }) && L(Z);
    }, [Z, R, L, x]);
    a.useEffect(() => {
        if (!(j || (Z.size === R.size && Array.from(R).every((e) => Z.has(e))))) P();
    }, [j, Z, R, P]);
    let k = o.singleSelect;
    S ? (k = o.multiSelect) : 0 === C && (k = o.toggleSelect);
    let U = (0, o.useVariableSelect)({
        value: Z,
        onChange: (e) => y(e),
        onSelectInteraction: k
    });
    return (0, l.jsxs)(a.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: f.container,
                children: [
                    (0, l.jsx)(o.Select, {
                        isDisabled: h || g,
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
                                isOffset: A
                            }),
                        renderOptionValue: (e) => (S ? (0, l.jsx)(I, { options: e }) : (0, l.jsx)(E, { ...e[0] })),
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
            null != b
                ? (0, l.jsx)(u.st, {
                      ...(0, u.c4)(b),
                      className: f.error
                  })
                : null
        ]
    });
}
