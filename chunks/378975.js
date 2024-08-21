t.d(n, {
    Z: function () {
        return E;
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
    _ = t(252443);
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
function E(e) {
    let { type: n, options: t, id: a, placeholder: r, maxValues: s, minValues: E, disabled: I } = e,
        T = i.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        {
            state: x,
            executeStateUpdate: N,
            visualState: v,
            isDisabled: g,
            error: b
        } = (0, d.Ee)(e, {
            type: n,
            values: T
        }),
        O = s > 1,
        S = v === m.gH.LOADING,
        [j, M] = i.useState(!1),
        [Z, L] = i.useState(() => new Set(t.filter((e) => e.default).map((e) => e.value))),
        [y, A] = i.useState(Z),
        R = i.useMemo(() => t.some((e) => null != e.emoji), [t]);
    i.useEffect(() => {
        if ((null == x ? void 0 : x.type) === c.re.STRING_SELECT) {
            let e = new Set(x.values);
            L(e), A(e);
        } else {
            let e = new Set(T);
            L(e), A(e);
        }
    }, [a, T, x]);
    let P = i.useCallback(() => {
        if (y !== Z)
            N({
                type: c.re.STRING_SELECT,
                values: Array.from(Z)
            }) && A(Z);
    }, [Z, y, A, N]);
    i.useEffect(() => {
        if (!(j || (Z.size === y.size && Array.from(y).every((e) => Z.has(e))))) P();
    }, [j, Z, y, P]);
    let k = o.singleSelect;
    O ? (k = o.multiSelect) : 0 === E && (k = o.toggleSelect);
    let U = (0, o.useVariableSelect)({
        value: Z,
        onChange: (e) => L(e),
        onSelectInteraction: k
    });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: _.container,
                children: [
                    (0, l.jsx)(o.Select, {
                        isDisabled: I || g,
                        className: _.select,
                        options: t.map((e) => ({
                            ...e,
                            disabled: O && !Z.has(e.value) && Z.size === s
                        })),
                        placeholder: null != r ? r : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                        onClose: () => M(!1),
                        onOpen: () => M(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !O,
                        optionClassName: _.selectOption,
                        renderOptionLabel: (e) =>
                            (0, l.jsx)(p, {
                                ...e,
                                isDisabled: O && !Z.has(e.value) && Z.size === s,
                                isOffset: R
                            }),
                        renderOptionValue: (e) => (O ? (0, l.jsx)(h, { options: e }) : (0, l.jsx)(C, { ...e[0] })),
                        ...U
                    }),
                    S
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
