t.d(n, {
    ZP: function () {
        return E;
    },
    tE: function () {
        return l;
    }
}),
    t(47120);
var l,
    i,
    a = t(735250),
    r = t(470079),
    o = t(120356),
    s = t.n(o),
    c = t(481060),
    u = t(911969),
    d = t(868819),
    m = t(970184),
    f = t(280501),
    _ = t(689938),
    p = t(758183),
    C = t(252443);
function h(e) {
    let { icon: n, iconSize: t } = e;
    return (0, a.jsx)('div', {
        className: p.iconContainer,
        style: {
            height: t,
            width: t
        },
        children: n
    });
}
function E(e) {
    let { selectActionComponent: n, queryOptions: t, renderIcon: l, renderOptionLabel: i, defaultValues: o } = e,
        { type: E, placeholder: I, maxValues: T, disabled: x } = n,
        [N, v] = r.useState(!1),
        [g, b] = r.useState(!1),
        [O, S] = r.useState(new Map(null == o ? void 0 : o.map((e) => [e.value, e]))),
        [j, M] = r.useState(new Set(O.keys())),
        [Z, L] = r.useState(() => (null != o ? o : []).map((e) => e.value)),
        [y, A] = r.useState(0);
    r.useEffect(() => {
        let e = (null != o ? o : []).map((e) => e.value);
        if (e.every((e) => Z.includes(e)) && Z.every((n) => e.includes(n))) return;
        L(e);
        let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
        S(n), M(new Set(n.keys())), A((e) => e + 1);
    }, [o, Z]);
    let {
            state: R,
            executeStateUpdate: P,
            visualState: k,
            isDisabled: U,
            error: B
        } = (0, m.Ee)(n, {
            type: E,
            selectedOptions: Array.from(O.values())
        }),
        G = k === f.gH.LOADING;
    r.useEffect(() => {
        if ((null == R ? void 0 : R.type) === u.re.USER_SELECT || (null == R ? void 0 : R.type) === u.re.ROLE_SELECT || (null == R ? void 0 : R.type) === u.re.MENTIONABLE_SELECT || (null == R ? void 0 : R.type) === u.re.CHANNEL_SELECT) {
            let e = new Map(R.selectedOptions.map((e) => [e.value, e]));
            S(e), M(new Set(e.keys()));
        }
    }, [R]);
    let w = r.useCallback(() => {
        P({
            type: E,
            selectedOptions: Array.from(O.values())
        }) && M(new Set(O.keys()));
    }, [P, E, O]);
    r.useEffect(() => {
        if (!(N || g || (O.size === j.size && Array.from(O.keys()).every((e) => j.has(e))))) w();
    }, [N, g, j, O, w]);
    let D = 0 === O.size || N,
        Y = {
            isDisabled: x || U,
            wrapperClassName: p.select,
            options: (e) =>
                new Promise((n) => {
                    n(t(e));
                }),
            placeholder: D ? (null != I ? I : _.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER) : void 0,
            onClose: () => v(!1),
            onOpen: () => v(!0),
            onBlur: () => b(!1),
            maxVisibleItems: 5,
            optionClassName: p.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: t } = n,
                    i = t ? 16 : 24,
                    r = l(e, i);
                return null != r
                    ? (0, a.jsx)(h, {
                          icon: r,
                          iconSize: i
                      })
                    : null;
            },
            renderOptionLabel: i
        };
    return (0, a.jsxs)(r.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: p.container,
                children: [
                    T > 1
                        ? (0, a.jsx)(
                              c.SearchableSelect,
                              {
                                  className: p.badges,
                                  value: Array.from(O.values()),
                                  onChange: (e) => {
                                      !N && b(!0), S(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: s()({
                                      [p.soloInput]: 0 === O.size,
                                      [p.inlineInput]: O.size > 0,
                                      [p.hidden]: !D
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...Y
                              },
                              y
                          )
                        : (0, a.jsx)(
                              c.SearchableSelect,
                              {
                                  className: (p.badges, p.singleSelect),
                                  value: [...O.values()][0],
                                  onChange: (e) => S(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...Y
                              },
                              y
                          ),
                    G
                        ? (0, a.jsx)('div', {
                              className: p.loading,
                              children: (0, a.jsx)(c.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != B
                ? (0, a.jsx)(d.st, {
                      ...(0, d.c4)(B),
                      className: C.error
                  })
                : null
        ]
    });
}
((i = l || (l = {}))[(i.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (i[(i.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
