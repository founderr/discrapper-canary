n.d(t, {
    k: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(97613),
    o = n.n(a),
    c = n(999153),
    d = n(584922),
    u = n(442837),
    m = n(780384),
    h = n(481060),
    g = n(410030),
    x = n(541716),
    p = n(752305),
    f = n(893718),
    C = n(44315),
    I = n(592125),
    _ = n(984933),
    v = n(592286),
    N = n(981631),
    T = n(388032),
    b = n(163537);
let j = 'RULE';
function S(e) {
    let { rule: t, rulesChannel: n, index: l, onChange: a, onKeyDown: o, onClear: u, onRuleReorder: m, isDropHovered: g, focused: C, onFocus: I, previewEnabled: _ } = e,
        N = r.useRef(null),
        S = r.useRef(null),
        [{ textValue: E, richValue: R }, y] = r.useState((0, p.eK)(t.value)),
        [, A, Z] = (0, c.c)({
            type: j,
            item: {
                rule: t,
                index: l
            },
            end: (e, t) => {
                null != e && !t.didDrop() && m(e.rule, null, !0);
            }
        }),
        [, L] = (0, d.L)({
            accept: j,
            hover: (e, t) => {
                var n;
                let { index: i } = e,
                    r = null === (n = N.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == r || null == s) return;
                let a = (r.bottom - r.top) / 2,
                    o = s.y - r.top;
                (!(i < l) || !(o < a)) && (!(i > l) || !(o > a)) && m(e.rule, l, !1);
            },
            drop: (e) => {
                m(e.rule, l, !0);
            }
        });
    r.useLayoutEffect(
        () => (
            A(S),
            Z(L(N)),
            () => {
                A(null), L(null);
            }
        ),
        [A, L, Z]
    );
    if (
        (r.useEffect(() => {
            '' !== t.value && '' === E && y((0, p.eK)(t.value));
        }, [t.value, E]),
        null == n)
    )
        return null;
    let D = '' !== t.value ? t.value : t.id;
    return (0, i.jsxs)('div', {
        ref: N,
        className: s()(b.draggableInputContainer, { [b.dragging]: g }),
        'data-dnd-name': D,
        children: [
            (0, i.jsxs)('div', {
                className: b.inputWrapper,
                children: [
                    (0, i.jsx)(h.Clickable, {
                        onMouseDown: () => I(l),
                        children: (0, i.jsx)(f.Z, {
                            innerClassName: b.rulesTextAreaInput,
                            type: x.Ie.RULES_INPUT,
                            textValue: E,
                            richValue: R,
                            channel: n,
                            placeholder: T.intl.string(T.t['BRkD4+']),
                            focused: C,
                            onChange: (e, t, n) => {
                                let i = t;
                                i.length > v.fn && (i = i.slice(0, v.fn)),
                                    t !== i && ((t = i), (n = (0, p.JM)(i))),
                                    a(t),
                                    y({
                                        textValue: t,
                                        richValue: n
                                    });
                            },
                            onKeyDown: o,
                            canMentionChannels: _,
                            canMentionRoles: _,
                            maxCharacterCount: v.fn,
                            characterCountClassName: b.characterCount,
                            onSubmit: () =>
                                Promise.resolve({
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                })
                        })
                    }),
                    (0, i.jsx)(h.Button, {
                        className: b.clearButton,
                        onClick: u,
                        look: h.Button.Looks.BLANK,
                        size: h.Button.Sizes.NONE,
                        children: (0, i.jsx)(h.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.clearIcon
                        })
                    }),
                    (0, i.jsx)(h.Text, {
                        className: b.rulesInputNumber,
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: ''.concat(l + 1, '.')
                    })
                ]
            }),
            (0, i.jsx)('div', {
                ref: S,
                className: b.dragContainer,
                'data-dnd-name': D,
                children: (0, i.jsx)(h.DragIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: b.dragIcon
                })
            })
        ]
    });
}
function E(e) {
    let { shortRule: t, fullRule: n, disabled: r, onClick: l } = e;
    return r
        ? (0, i.jsx)(h.Tooltip, {
              text: T.intl.formatToPlainString(T.t.tU718P, { number: v.X2 }),
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      className: s()(b.exampleRule, { [b.disabled]: r }),
                      children: (0, i.jsx)(h.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: t
                      })
                  })
          })
        : (0, i.jsx)(h.Clickable, {
              className: s()(b.exampleRule, { [b.disabled]: r }),
              onClick: () => l(n),
              children: (0, i.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  color: 'header-secondary',
                  children: t
              })
          });
}
function R(e) {
    let { rules: t, setRules: n, guild: l } = e,
        s = (0, g.ZP)(),
        a = l.rulesChannelId,
        c = l.hasFeature(N.oNc.PREVIEW_ENABLED),
        d = (0, u.e7)([I.Z], () => (null != a ? I.Z.getChannel(a) : null)),
        x = (0, u.e7)([_.ZP], () => _.ZP.getDefaultChannel(l.id)),
        [p, f] = r.useState(null),
        [j, R] = r.useState(0),
        y = (e) => {
            if (t.length !== v.X2) {
                if (null != e && '' === t[t.length - 1].value) {
                    let i = [...t];
                    (i[t.length - 1].value = e), n(i), R(i.length - 1);
                } else
                    n([
                        ...t,
                        {
                            id: o()(),
                            value: null != e ? e : ''
                        }
                    ]),
                        R(t.length);
            }
        },
        A = (e, i) => {
            let r = [...t];
            (r[i].value = e), n(r);
        },
        Z = (e) => {
            let i = [...t.slice(0, e), ...t.slice(e + 1)];
            n(
                0 === i.length
                    ? [
                          {
                              id: o()(),
                              value: ''
                          }
                      ]
                    : i
            );
        },
        L = r.useCallback(
            (e, i, r) => {
                if (null == t) return;
                let l = t.indexOf(e);
                if (null != i && i !== l) {
                    let r = [...t];
                    r.splice(l, 1), r.splice(i, 0, e), n(r);
                }
                r ? null !== p && f(null) : i !== p && f(i);
            },
            [p, t, n]
        ),
        D = t.length === v.X2;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.map((e, t) =>
                (0, i.jsx)(
                    S,
                    {
                        rulesChannel: null != d ? d : x,
                        rule: e,
                        index: t,
                        onChange: (e) => A(e, t),
                        onClear: () => Z(t),
                        onRuleReorder: L,
                        isDropHovered: t === p,
                        focused: t === j,
                        onFocus: R,
                        previewEnabled: null == c || c
                    },
                    e.id
                )
            ),
            !D &&
                (0, i.jsxs)('div', {
                    className: b.addItemContainer,
                    children: [
                        (0, i.jsx)(h.CirclePlusIcon, {
                            size: 'custom',
                            height: 17,
                            width: 17,
                            color: (0, C.Lq)((0, m.wj)(s) ? N.Ilk.BLUE_345 : N.Ilk.BLUE_430)
                        }),
                        (0, i.jsx)(h.Clickable, {
                            className: b.addItemButton,
                            onClick: () => y(),
                            children: (0, i.jsx)(h.Text, {
                                color: 'text-link',
                                variant: 'text-md/normal',
                                children: T.intl.string(T.t.Cq5Jub)
                            })
                        })
                    ]
                }),
            (0, i.jsx)('div', { className: b.divider }),
            (0, i.jsx)(h.FormTitle, { children: T.intl.string(T.t.XHWj8f) }),
            (0, i.jsxs)('div', {
                className: b.termsExampleRulesContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: b.termsExampleRulePairContainer,
                        children: [
                            (0, i.jsx)(E, {
                                shortRule: T.intl.string(T.t.DXq2oa),
                                fullRule: T.intl.string(T.t.XudkSk),
                                disabled: D,
                                onClick: y
                            }),
                            (0, i.jsx)(E, {
                                shortRule: T.intl.string(T.t.nSqTjI),
                                fullRule: T.intl.string(T.t.np91jI),
                                disabled: D,
                                onClick: y
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: b.termsExampleRulePairContainer,
                        children: [
                            (0, i.jsx)(E, {
                                shortRule: T.intl.string(T.t.AtRxsL),
                                fullRule: T.intl.string(T.t.PNIDDA),
                                disabled: D,
                                onClick: y
                            }),
                            (0, i.jsx)(E, {
                                shortRule: T.intl.string(T.t['0K5NJi']),
                                fullRule: T.intl.string(T.t.HolIDw),
                                disabled: D,
                                onClick: y
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
