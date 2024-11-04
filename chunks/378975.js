t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(481060),
    s = t(596454),
    c = t(911969),
    u = t(739754),
    d = t(970184),
    m = t(280501),
    f = t(388032),
    p = t(601648);
function h(e) {
    let { emoji: n, label: t, description: i, isDisabled: r, isOffset: o } = e,
        c = a()(p.labelContainer, {
            [p.disabled]: r,
            [p.offset]: null == n && o
        });
    return (0, l.jsxs)('div', {
        className: p.option,
        children: [
            null != n
                ? (0, l.jsx)(s.Z, {
                      className: p.emoji,
                      emojiId: n.id,
                      emojiName: n.name,
                      animated: n.animated
                  })
                : null,
            (0, l.jsxs)('div', {
                className: c,
                children: [
                    (0, l.jsx)('strong', {
                        className: p.label,
                        children: t
                    }),
                    null != i
                        ? (0, l.jsx)('span', {
                              className: p.description,
                              children: i
                          })
                        : null
                ]
            })
        ]
    });
}
function _(e) {
    let { emoji: n, label: t } = e;
    return (0, l.jsx)('div', {
        className: p.option,
        children: (0, l.jsxs)('div', {
            className: a()(p.value, p.singleValue),
            children: [
                null != n
                    ? (0, l.jsx)(s.Z, {
                          className: p.emoji,
                          src: n.src,
                          emojiId: n.id,
                          emojiName: n.name,
                          animated: n.animated
                      })
                    : null,
                (0, l.jsx)('span', {
                    className: p.singleValueLabel,
                    children: t
                })
            ]
        })
    });
}
function x(e) {
    let { options: n } = e;
    return (0, l.jsx)('div', {
        className: p.option,
        children: (0, l.jsx)('div', {
            className: p.value,
            children: n.map((e, n) =>
                (0, l.jsxs)(
                    'div',
                    {
                        className: p.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, l.jsx)(s.Z, {
                                      className: p.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, l.jsx)(
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
    let { type: n, options: t, id: r, placeholder: a, maxValues: s, minValues: C, disabled: v } = e,
        b = i.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        {
            state: g,
            executeStateUpdate: I,
            visualState: S,
            isDisabled: j,
            error: y
        } = (0, d.Ee)(e, {
            type: n,
            values: b
        }),
        E = s > 1,
        T = S === m.gH.LOADING,
        [N, Z] = i.useState(!1),
        [k, L] = i.useState(() => new Set(t.filter((e) => e.default).map((e) => e.value))),
        [O, M] = i.useState(k),
        P = i.useMemo(() => t.some((e) => null != e.emoji), [t]);
    i.useEffect(() => {
        if ((null == g ? void 0 : g.type) === c.re.STRING_SELECT) {
            let e = new Set(g.values);
            L(e), M(e);
        } else {
            let e = new Set(b);
            L(e), M(e);
        }
    }, [r, b, g]);
    let R = i.useCallback(() => {
        if (O !== k)
            I({
                type: c.re.STRING_SELECT,
                values: Array.from(k)
            }) && M(k);
    }, [k, O, M, I]);
    i.useEffect(() => {
        if (!(N || (k.size === O.size && Array.from(O).every((e) => k.has(e))))) R();
    }, [N, k, O, R]);
    let B = o.singleSelect;
    E ? (B = o.multiSelect) : 0 === C && (B = o.toggleSelect);
    let A = (0, o.useVariableSelect)({
        value: k,
        onChange: (e) => L(e),
        onSelectInteraction: B
    });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: p.container,
                children: [
                    (0, l.jsx)(o.Select, {
                        isDisabled: v || j,
                        className: p.select,
                        options: t.map((e) => ({
                            ...e,
                            disabled: E && !k.has(e.value) && k.size === s
                        })),
                        placeholder: null != a ? a : f.intl.string(f.t.Otr6W1),
                        onClose: () => Z(!1),
                        onOpen: () => Z(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !E,
                        optionClassName: p.selectOption,
                        renderOptionLabel: (e) =>
                            (0, l.jsx)(h, {
                                ...e,
                                isDisabled: E && !k.has(e.value) && k.size === s,
                                isOffset: P
                            }),
                        renderOptionValue: (e) => (E ? (0, l.jsx)(x, { options: e }) : (0, l.jsx)(_, { ...e[0] })),
                        ...A
                    }),
                    T
                        ? (0, l.jsx)('div', {
                              className: p.__invalid_loading,
                              children: (0, l.jsx)(o.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != y
                ? (0, l.jsx)(u.st, {
                      ...(0, u.c4)(y),
                      className: p.error
                  })
                : null
        ]
    });
}
