t.d(n, {
    ZP: function () {
        return C;
    },
    tE: function () {
        return l;
    }
}),
    t(47120);
var l,
    i,
    r = t(200651),
    a = t(192379),
    o = t(120356),
    s = t.n(o),
    c = t(481060),
    u = t(911969),
    d = t(739754),
    m = t(970184),
    f = t(280501),
    p = t(388032),
    x = t(591580),
    h = t(844592);
function v(e) {
    let { icon: n, iconSize: t } = e;
    return (0, r.jsx)('div', {
        className: x.iconContainer,
        style: {
            height: t,
            width: t
        },
        children: n
    });
}
function C(e) {
    let { selectActionComponent: n, queryOptions: t, renderIcon: l, renderOptionLabel: i, defaultValues: o } = e,
        { type: C, placeholder: _, maxValues: g, disabled: I } = n,
        [b, j] = a.useState(!1),
        [S, N] = a.useState(!1),
        [T, E] = a.useState(new Map(null == o ? void 0 : o.map((e) => [e.value, e]))),
        [y, Z] = a.useState(new Set(T.keys())),
        [k, L] = a.useState(() => (null != o ? o : []).map((e) => e.value)),
        [R, O] = a.useState(0);
    a.useEffect(() => {
        let e = (null != o ? o : []).map((e) => e.value);
        if (e.every((e) => k.includes(e)) && k.every((n) => e.includes(n))) return;
        L(e);
        let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
        E(n), Z(new Set(n.keys())), O((e) => e + 1);
    }, [o, k]);
    let {
            state: M,
            executeStateUpdate: P,
            visualState: B,
            isDisabled: A,
            error: w
        } = (0, m.Ee)(n, {
            type: C,
            selectedOptions: Array.from(T.values())
        }),
        U = B === f.gH.LOADING;
    a.useEffect(() => {
        if ((null == M ? void 0 : M.type) === u.re.USER_SELECT || (null == M ? void 0 : M.type) === u.re.ROLE_SELECT || (null == M ? void 0 : M.type) === u.re.MENTIONABLE_SELECT || (null == M ? void 0 : M.type) === u.re.CHANNEL_SELECT) {
            let e = new Map(M.selectedOptions.map((e) => [e.value, e]));
            E(e), Z(new Set(e.keys()));
        }
    }, [M]);
    let G = a.useCallback(() => {
        P({
            type: C,
            selectedOptions: Array.from(T.values())
        }) && Z(new Set(T.keys()));
    }, [P, C, T]);
    a.useEffect(() => {
        if (!(b || S || (T.size === y.size && Array.from(T.keys()).every((e) => y.has(e))))) G();
    }, [b, S, y, T, G]);
    let D = 0 === T.size || b,
        H = {
            isDisabled: I || A,
            wrapperClassName: x.select,
            options: (e) =>
                new Promise((n) => {
                    n(t(e));
                }),
            placeholder: D ? (null != _ ? _ : p.intl.string(p.t.Otr6W1)) : void 0,
            onClose: () => j(!1),
            onOpen: () => j(!0),
            onBlur: () => N(!1),
            maxVisibleItems: 5,
            optionClassName: x.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: t } = n,
                    i = t ? 16 : 24,
                    a = l(e, i);
                return null != a
                    ? (0, r.jsx)(v, {
                          icon: a,
                          iconSize: i
                      })
                    : null;
            },
            renderOptionLabel: i
        };
    return (0, r.jsxs)(a.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: x.container,
                children: [
                    g > 1
                        ? (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: x.badges,
                                  value: Array.from(T.values()),
                                  onChange: (e) => {
                                      !b && N(!0), E(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: s()({
                                      [x.soloInput]: 0 === T.size,
                                      [x.inlineInput]: T.size > 0,
                                      [x.hidden]: !D
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...H
                              },
                              R
                          )
                        : (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: (x.badges, x.singleSelect),
                                  value: [...T.values()][0],
                                  onChange: (e) => E(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...H
                              },
                              R
                          ),
                    U
                        ? (0, r.jsx)('div', {
                              className: x.loading,
                              children: (0, r.jsx)(c.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != w
                ? (0, r.jsx)(d.st, {
                      ...(0, d.c4)(w),
                      className: h.error
                  })
                : null
        ]
    });
}
((i = l || (l = {}))[(i.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (i[(i.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
