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
    p = t(601648);
function x(e) {
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
function h(e) {
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
        b = i.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        {
            state: g,
            executeStateUpdate: I,
            visualState: j,
            isDisabled: S,
            error: N
        } = (0, d.Ee)(e, {
            type: n,
            values: b
        }),
        T = s > 1,
        E = j === m.gH.LOADING,
        [y, Z] = i.useState(!1),
        [k, L] = i.useState(() => new Set(t.filter((e) => e.default).map((e) => e.value))),
        [R, O] = i.useState(k),
        M = i.useMemo(() => t.some((e) => null != e.emoji), [t]);
    i.useEffect(() => {
        if ((null == g ? void 0 : g.type) === c.re.STRING_SELECT) {
            let e = new Set(g.values);
            L(e), O(e);
        } else {
            let e = new Set(b);
            L(e), O(e);
        }
    }, [r, b, g]);
    let P = i.useCallback(() => {
        if (R !== k)
            I({
                type: c.re.STRING_SELECT,
                values: Array.from(k)
            }) && O(k);
    }, [k, R, O, I]);
    i.useEffect(() => {
        if (!(y || (k.size === R.size && Array.from(R).every((e) => k.has(e))))) P();
    }, [y, k, R, P]);
    let B = o.singleSelect;
    T ? (B = o.multiSelect) : 0 === _ && (B = o.toggleSelect);
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
                        isDisabled: C || S,
                        className: p.select,
                        options: t.map((e) => ({
                            ...e,
                            disabled: T && !k.has(e.value) && k.size === s
                        })),
                        placeholder: null != a ? a : f.intl.string(f.t.Otr6W1),
                        onClose: () => Z(!1),
                        onOpen: () => Z(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !T,
                        optionClassName: p.selectOption,
                        renderOptionLabel: (e) =>
                            (0, l.jsx)(x, {
                                ...e,
                                isDisabled: T && !k.has(e.value) && k.size === s,
                                isOffset: M
                            }),
                        renderOptionValue: (e) => (T ? (0, l.jsx)(v, { options: e }) : (0, l.jsx)(h, { ...e[0] })),
                        ...A
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
            null != N
                ? (0, l.jsx)(u.st, {
                      ...(0, u.c4)(N),
                      className: p.error
                  })
                : null
        ]
    });
}
