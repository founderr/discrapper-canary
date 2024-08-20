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
    f = l(689938),
    E = l(252443);
function p(e) {
    let { emoji: n, label: l, description: r, isDisabled: i, isOffset: s } = e,
        o = a()(E.labelContainer, {
            [E.disabled]: i,
            [E.offset]: null == n && s
        });
    return (0, t.jsxs)('div', {
        className: E.option,
        children: [
            null != n
                ? (0, t.jsx)(u.Z, {
                      className: E.emoji,
                      emojiId: n.id,
                      emojiName: n.name,
                      animated: n.animated
                  })
                : null,
            (0, t.jsxs)('div', {
                className: o,
                children: [
                    (0, t.jsx)('strong', {
                        className: E.label,
                        children: l
                    }),
                    null != r
                        ? (0, t.jsx)('span', {
                              className: E.description,
                              children: r
                          })
                        : null
                ]
            })
        ]
    });
}
function C(e) {
    let { emoji: n, label: l } = e;
    return (0, t.jsx)('div', {
        className: E.option,
        children: (0, t.jsxs)('div', {
            className: a()(E.value, E.singleValue),
            children: [
                null != n
                    ? (0, t.jsx)(u.Z, {
                          className: E.emoji,
                          src: n.src,
                          emojiId: n.id,
                          emojiName: n.name,
                          animated: n.animated
                      })
                    : null,
                (0, t.jsx)('span', {
                    className: E.singleValueLabel,
                    children: l
                })
            ]
        })
    });
}
function N(e) {
    let { options: n } = e;
    return (0, t.jsx)('div', {
        className: E.option,
        children: (0, t.jsx)('div', {
            className: E.value,
            children: n.map((e, n) =>
                (0, t.jsxs)(
                    'div',
                    {
                        className: E.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, t.jsx)(u.Z, {
                                      className: E.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, t.jsx)(
                                'span',
                                {
                                    className: E.tag,
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
        T = r.useMemo(() => l.filter((e) => e.default).map((e) => e.value), [l]),
        {
            state: h,
            executeStateUpdate: I,
            visualState: x,
            isDisabled: O,
            error: S
        } = (0, d.Ee)(e, {
            type: n,
            values: T
        }),
        g = u > 1,
        Z = x === m.gH.LOADING,
        [A, R] = r.useState(!1),
        [j, L] = r.useState(() => new Set(l.filter((e) => e.default).map((e) => e.value))),
        [M, P] = r.useState(j),
        b = r.useMemo(() => l.some((e) => null != e.emoji), [l]);
    r.useEffect(() => {
        if ((null == h ? void 0 : h.type) === o.re.STRING_SELECT) {
            let e = new Set(h.values);
            L(e), P(e);
        } else {
            let e = new Set(T);
            L(e), P(e);
        }
    }, [i, T, h]);
    let y = r.useCallback(() => {
        if (M !== j)
            I({
                type: o.re.STRING_SELECT,
                values: Array.from(j)
            }) && P(j);
    }, [j, M, P, I]);
    r.useEffect(() => {
        if (!(A || (j.size === M.size && Array.from(M).every((e) => j.has(e))))) y();
    }, [A, j, M, y]);
    let U = s.singleSelect;
    g ? (U = s.multiSelect) : 0 === v && (U = s.toggleSelect);
    let k = (0, s.useVariableSelect)({
        value: j,
        onChange: (e) => L(e),
        onSelectInteraction: U
    });
    return (0, t.jsxs)(r.Fragment, {
        children: [
            (0, t.jsxs)('div', {
                className: E.container,
                children: [
                    (0, t.jsx)(s.Select, {
                        isDisabled: _ || O,
                        className: E.select,
                        options: l.map((e) => ({
                            ...e,
                            disabled: g && !j.has(e.value) && j.size === u
                        })),
                        placeholder: null != a ? a : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                        onClose: () => R(!1),
                        onOpen: () => R(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !g,
                        optionClassName: E.selectOption,
                        renderOptionLabel: (e) =>
                            (0, t.jsx)(p, {
                                ...e,
                                isDisabled: g && !j.has(e.value) && j.size === u,
                                isOffset: b
                            }),
                        renderOptionValue: (e) => (g ? (0, t.jsx)(N, { options: e }) : (0, t.jsx)(C, { ...e[0] })),
                        ...k
                    }),
                    Z
                        ? (0, t.jsx)('div', {
                              className: E.__invalid_loading,
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
                      className: E.error
                  })
                : null
        ]
    });
}
