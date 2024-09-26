n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(596454),
    c = n(911969),
    d = n(868819),
    _ = n(970184),
    E = n(280501),
    f = n(689938),
    h = n(601648);
function p(e) {
    let { emoji: t, label: n, description: r, isDisabled: a, isOffset: o } = e,
        l = s()(h.labelContainer, {
            [h.disabled]: a,
            [h.offset]: null == t && o
        });
    return (0, i.jsxs)('div', {
        className: h.option,
        children: [
            null != t
                ? (0, i.jsx)(u.Z, {
                      className: h.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: t.animated
                  })
                : null,
            (0, i.jsxs)('div', {
                className: l,
                children: [
                    (0, i.jsx)('strong', {
                        className: h.label,
                        children: n
                    }),
                    null != r
                        ? (0, i.jsx)('span', {
                              className: h.description,
                              children: r
                          })
                        : null
                ]
            })
        ]
    });
}
function m(e) {
    let { emoji: t, label: n } = e;
    return (0, i.jsx)('div', {
        className: h.option,
        children: (0, i.jsxs)('div', {
            className: s()(h.value, h.singleValue),
            children: [
                null != t
                    ? (0, i.jsx)(u.Z, {
                          className: h.emoji,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated
                      })
                    : null,
                (0, i.jsx)('span', {
                    className: h.singleValueLabel,
                    children: n
                })
            ]
        })
    });
}
function I(e) {
    let { options: t } = e;
    return (0, i.jsx)('div', {
        className: h.option,
        children: (0, i.jsx)('div', {
            className: h.value,
            children: t.map((e, t) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: h.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, i.jsx)(u.Z, {
                                      className: h.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, i.jsx)(
                                'span',
                                {
                                    className: h.tag,
                                    children: e.label
                                },
                                e.value
                            )
                        ]
                    },
                    t
                )
            )
        })
    });
}
function T(e) {
    let { type: t, options: n, id: r, placeholder: o, maxValues: s, minValues: u, disabled: T } = e,
        g = a.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        {
            state: S,
            executeStateUpdate: A,
            visualState: v,
            isDisabled: N,
            error: O
        } = (0, _.Ee)(e, {
            type: t,
            values: g
        }),
        R = s > 1,
        C = v === E.gH.LOADING,
        [y, L] = a.useState(!1),
        [b, D] = a.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [M, P] = a.useState(b),
        U = a.useMemo(() => n.some((e) => null != e.emoji), [n]);
    a.useEffect(() => {
        if ((null == S ? void 0 : S.type) === c.re.STRING_SELECT) {
            let e = new Set(S.values);
            D(e), P(e);
        } else {
            let e = new Set(g);
            D(e), P(e);
        }
    }, [r, g, S]);
    let w = a.useCallback(() => {
        if (M !== b)
            A({
                type: c.re.STRING_SELECT,
                values: Array.from(b)
            }) && P(b);
    }, [b, M, P, A]);
    a.useEffect(() => {
        if (!(y || (b.size === M.size && Array.from(M).every((e) => b.has(e))))) w();
    }, [y, b, M, w]);
    let x = l.singleSelect;
    R ? (x = l.multiSelect) : 0 === u && (x = l.toggleSelect);
    let G = (0, l.useVariableSelect)({
        value: b,
        onChange: (e) => D(e),
        onSelectInteraction: x
    });
    return (0, i.jsxs)(a.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: h.container,
                children: [
                    (0, i.jsx)(l.Select, {
                        isDisabled: T || N,
                        className: h.select,
                        options: n.map((e) => ({
                            ...e,
                            disabled: R && !b.has(e.value) && b.size === s
                        })),
                        placeholder: null != o ? o : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                        onClose: () => L(!1),
                        onOpen: () => L(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !R,
                        optionClassName: h.selectOption,
                        renderOptionLabel: (e) =>
                            (0, i.jsx)(p, {
                                ...e,
                                isDisabled: R && !b.has(e.value) && b.size === s,
                                isOffset: U
                            }),
                        renderOptionValue: (e) => (R ? (0, i.jsx)(I, { options: e }) : (0, i.jsx)(m, { ...e[0] })),
                        ...G
                    }),
                    C
                        ? (0, i.jsx)('div', {
                              className: h.__invalid_loading,
                              children: (0, i.jsx)(l.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != O
                ? (0, i.jsx)(d.st, {
                      ...(0, d.c4)(O),
                      className: h.error
                  })
                : null
        ]
    });
}
