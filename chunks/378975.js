t.d(n, {
    Z: function () {
        return _;
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
    p = t(844592);
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
function x(e) {
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
function v(e) {
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
function _(e) {
    let { type: n, options: t, id: r, placeholder: a, maxValues: s, minValues: _, disabled: C } = e,
        g = i.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        {
            state: I,
            executeStateUpdate: b,
            visualState: j,
            isDisabled: S,
            error: T
        } = (0, d.Ee)(e, {
            type: n,
            values: g
        }),
        N = s > 1,
        E = j === m.gH.LOADING,
        [y, Z] = i.useState(!1),
        [k, L] = i.useState(() => new Set(t.filter((e) => e.default).map((e) => e.value))),
        [R, O] = i.useState(k),
        M = i.useMemo(() => t.some((e) => null != e.emoji), [t]);
    i.useEffect(() => {
        if ((null == I ? void 0 : I.type) === c.re.STRING_SELECT) {
            let e = new Set(I.values);
            L(e), O(e);
        } else {
            let e = new Set(g);
            L(e), O(e);
        }
    }, [r, g, I]);
    let P = i.useCallback(() => {
        if (R !== k)
            b({
                type: c.re.STRING_SELECT,
                values: Array.from(k)
            }) && O(k);
    }, [k, R, O, b]);
    i.useEffect(() => {
        if (!(y || (k.size === R.size && Array.from(R).every((e) => k.has(e))))) P();
    }, [y, k, R, P]);
    let A = o.singleSelect;
    N ? (A = o.multiSelect) : 0 === _ && (A = o.toggleSelect);
    let B = (0, o.useVariableSelect)({
        value: k,
        onChange: (e) => L(e),
        onSelectInteraction: A
    });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: p.container,
                children: [
                    (0, l.jsx)(o.Select, {
                        isDisabled: C || S,
                        className: p.select,
                        options: t.map((e) => ({
                            ...e,
                            disabled: N && !k.has(e.value) && k.size === s
                        })),
                        placeholder: null != a ? a : f.intl.string(f.t.Otr6W1),
                        onClose: () => Z(!1),
                        onOpen: () => Z(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !N,
                        optionClassName: p.selectOption,
                        renderOptionLabel: (e) =>
                            (0, l.jsx)(h, {
                                ...e,
                                isDisabled: N && !k.has(e.value) && k.size === s,
                                isOffset: M
                            }),
                        renderOptionValue: (e) => (N ? (0, l.jsx)(v, { options: e }) : (0, l.jsx)(x, { ...e[0] })),
                        ...B
                    }),
                    E
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
            null != T
                ? (0, l.jsx)(u.st, {
                      ...(0, u.c4)(T),
                      className: p.error
                  })
                : null
        ]
    });
}
