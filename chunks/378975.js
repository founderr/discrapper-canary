l.d(n, {
    Z: function () {
        return _;
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
    E = l(689938),
    f = l(252443);
function p(e) {
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
function C(e) {
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
function N(e) {
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
function _(e) {
    let { type: n, options: l, id: i, placeholder: a, maxValues: u, minValues: _, disabled: v } = e,
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
        [j, A] = r.useState(!1),
        [L, R] = r.useState(() => new Set(l.filter((e) => e.default).map((e) => e.value))),
        [M, P] = r.useState(L),
        b = r.useMemo(() => l.some((e) => null != e.emoji), [l]);
    r.useEffect(() => {
        if ((null == h ? void 0 : h.type) === o.re.STRING_SELECT) {
            let e = new Set(h.values);
            R(e), P(e);
        } else {
            let e = new Set(T);
            R(e), P(e);
        }
    }, [i, T, h]);
    let y = r.useCallback(() => {
        if (M !== L)
            I({
                type: o.re.STRING_SELECT,
                values: Array.from(L)
            }) && P(L);
    }, [L, M, P, I]);
    r.useEffect(() => {
        if (!(j || (L.size === M.size && Array.from(M).every((e) => L.has(e))))) y();
    }, [j, L, M, y]);
    let U = s.singleSelect;
    g ? (U = s.multiSelect) : 0 === _ && (U = s.toggleSelect);
    let k = (0, s.useVariableSelect)({
        value: L,
        onChange: (e) => R(e),
        onSelectInteraction: U
    });
    return (0, t.jsxs)(r.Fragment, {
        children: [
            (0, t.jsxs)('div', {
                className: f.container,
                children: [
                    (0, t.jsx)(s.Select, {
                        isDisabled: v || O,
                        className: f.select,
                        options: l.map((e) => ({
                            ...e,
                            disabled: g && !L.has(e.value) && L.size === u
                        })),
                        placeholder: null != a ? a : E.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                        onClose: () => A(!1),
                        onOpen: () => A(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !g,
                        optionClassName: f.selectOption,
                        renderOptionLabel: (e) =>
                            (0, t.jsx)(p, {
                                ...e,
                                isDisabled: g && !L.has(e.value) && L.size === u,
                                isOffset: b
                            }),
                        renderOptionValue: (e) => (g ? (0, t.jsx)(N, { options: e }) : (0, t.jsx)(C, { ...e[0] })),
                        ...k
                    }),
                    Z
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
