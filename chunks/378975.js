l.d(n, {
    Z: function () {
        return C;
    }
}),
    l(47120);
var t = l(200651),
    i = l(192379),
    r = l(120356),
    a = l.n(r),
    s = l(481060),
    o = l(596454),
    u = l(911969),
    c = l(739754),
    d = l(970184),
    m = l(280501),
    p = l(388032),
    f = l(503738);
function x(e) {
    let { emoji: n, label: l, description: i, isDisabled: r, isOffset: s } = e,
        u = a()(f.labelContainer, {
            [f.disabled]: r,
            [f.offset]: null == n && s
        });
    return (0, t.jsxs)('div', {
        className: f.option,
        children: [
            null != n
                ? (0, t.jsx)(o.Z, {
                      className: f.emoji,
                      emojiId: n.id,
                      emojiName: n.name,
                      animated: n.animated
                  })
                : null,
            (0, t.jsxs)('div', {
                className: u,
                children: [
                    (0, t.jsx)('strong', {
                        className: f.label,
                        children: l
                    }),
                    null != i
                        ? (0, t.jsx)('span', {
                              className: f.description,
                              children: i
                          })
                        : null
                ]
            })
        ]
    });
}
function v(e) {
    let { emoji: n, label: l } = e;
    return (0, t.jsx)('div', {
        className: f.option,
        children: (0, t.jsxs)('div', {
            className: a()(f.value, f.singleValue),
            children: [
                null != n
                    ? (0, t.jsx)(o.Z, {
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
function h(e) {
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
                                ? (0, t.jsx)(o.Z, {
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
function C(e) {
    let { type: n, options: l, id: r, placeholder: a, maxValues: o, minValues: C, disabled: g } = e,
        j = i.useMemo(() => l.filter((e) => e.default).map((e) => e.value), [l]),
        {
            state: S,
            executeStateUpdate: I,
            visualState: N,
            isDisabled: E,
            error: b
        } = (0, d.Ee)(e, {
            type: n,
            values: j
        }),
        Z = o > 1,
        T = N === m.gH.LOADING,
        [_, y] = i.useState(!1),
        [k, R] = i.useState(() => new Set(l.filter((e) => e.default).map((e) => e.value))),
        [L, P] = i.useState(k),
        O = i.useMemo(() => l.some((e) => null != e.emoji), [l]);
    i.useEffect(() => {
        if ((null == S ? void 0 : S.type) === u.re.STRING_SELECT) {
            let e = new Set(S.values);
            R(e), P(e);
        } else {
            let e = new Set(j);
            R(e), P(e);
        }
    }, [r, j, S]);
    let A = i.useCallback(() => {
        if (L !== k)
            I({
                type: u.re.STRING_SELECT,
                values: Array.from(k)
            }) && P(k);
    }, [k, L, P, I]);
    i.useEffect(() => {
        if (!(_ || (k.size === L.size && Array.from(L).every((e) => k.has(e))))) A();
    }, [_, k, L, A]);
    let M = s.singleSelect;
    Z ? (M = s.multiSelect) : 0 === C && (M = s.toggleSelect);
    let U = (0, s.useVariableSelect)({
        value: k,
        onChange: (e) => R(e),
        onSelectInteraction: M
    });
    return (0, t.jsxs)(i.Fragment, {
        children: [
            (0, t.jsxs)('div', {
                className: f.container,
                children: [
                    (0, t.jsx)(s.Select, {
                        isDisabled: g || E,
                        className: f.select,
                        options: l.map((e) => ({
                            ...e,
                            disabled: Z && !k.has(e.value) && k.size === o
                        })),
                        placeholder: null != a ? a : p.intl.string(p.t.Otr6W1),
                        onClose: () => y(!1),
                        onOpen: () => y(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !Z,
                        optionClassName: f.selectOption,
                        renderOptionLabel: (e) =>
                            (0, t.jsx)(x, {
                                ...e,
                                isDisabled: Z && !k.has(e.value) && k.size === o,
                                isOffset: O
                            }),
                        renderOptionValue: (e) => (Z ? (0, t.jsx)(h, { options: e }) : (0, t.jsx)(v, { ...e[0] })),
                        ...U
                    }),
                    T
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
            null != b
                ? (0, t.jsx)(c.st, {
                      ...(0, c.c4)(b),
                      className: f.error
                  })
                : null
        ]
    });
}
