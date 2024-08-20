t.d(n, {
    Z: function () {
        return v;
    }
}),
    t(47120);
var l = t(735250),
    i = t(470079),
    r = t(120356),
    a = t.n(r),
    o = t(481060),
    s = t(596454),
    c = t(911969),
    u = t(868819),
    d = t(970184),
    m = t(280501),
    f = t(689938),
    _ = t(252443);
function p(e) {
    let { emoji: n, label: t, description: i, isDisabled: r, isOffset: o } = e,
        c = a()(_.labelContainer, {
            [_.disabled]: r,
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
function h(e) {
    let { emoji: n, label: t } = e;
    return (0, l.jsx)('div', {
        className: _.option,
        children: (0, l.jsxs)('div', {
            className: a()(_.value, _.singleValue),
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
function C(e) {
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
function v(e) {
    let { type: n, options: t, id: r, placeholder: a, maxValues: s, minValues: v, disabled: x } = e,
        E = i.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        {
            state: I,
            executeStateUpdate: T,
            visualState: g,
            isDisabled: N,
            error: b
        } = (0, d.Ee)(e, {
            type: n,
            values: E
        }),
        S = s > 1,
        O = g === m.gH.LOADING,
        [j, Z] = i.useState(!1),
        [L, M] = i.useState(() => new Set(t.filter((e) => e.default).map((e) => e.value))),
        [y, A] = i.useState(L),
        R = i.useMemo(() => t.some((e) => null != e.emoji), [t]);
    i.useEffect(() => {
        if ((null == I ? void 0 : I.type) === c.re.STRING_SELECT) {
            let e = new Set(I.values);
            M(e), A(e);
        } else {
            let e = new Set(E);
            M(e), A(e);
        }
    }, [r, E, I]);
    let P = i.useCallback(() => {
        if (y !== L)
            T({
                type: c.re.STRING_SELECT,
                values: Array.from(L)
            }) && A(L);
    }, [L, y, A, T]);
    i.useEffect(() => {
        if (!(j || (L.size === y.size && Array.from(y).every((e) => L.has(e))))) P();
    }, [j, L, y, P]);
    let U = o.singleSelect;
    S ? (U = o.multiSelect) : 0 === v && (U = o.toggleSelect);
    let k = (0, o.useVariableSelect)({
        value: L,
        onChange: (e) => M(e),
        onSelectInteraction: U
    });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: _.container,
                children: [
                    (0, l.jsx)(o.Select, {
                        isDisabled: x || N,
                        className: _.select,
                        options: t.map((e) => ({
                            ...e,
                            disabled: S && !L.has(e.value) && L.size === s
                        })),
                        placeholder: null != a ? a : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                        onClose: () => Z(!1),
                        onOpen: () => Z(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !S,
                        optionClassName: _.selectOption,
                        renderOptionLabel: (e) =>
                            (0, l.jsx)(p, {
                                ...e,
                                isDisabled: S && !L.has(e.value) && L.size === s,
                                isOffset: R
                            }),
                        renderOptionValue: (e) => (S ? (0, l.jsx)(C, { options: e }) : (0, l.jsx)(h, { ...e[0] })),
                        ...k
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
            null != b
                ? (0, l.jsx)(u.st, {
                      ...(0, u.c4)(b),
                      className: _.error
                  })
                : null
        ]
    });
}
