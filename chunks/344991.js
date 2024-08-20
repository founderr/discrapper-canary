l.d(n, {
    ZP: function () {
        return v;
    },
    tE: function () {
        return t;
    }
}),
    l(47120);
var t,
    r,
    i = l(735250),
    a = l(470079),
    s = l(120356),
    u = l.n(s),
    o = l(481060),
    c = l(911969),
    d = l(868819),
    m = l(970184),
    f = l(280501),
    E = l(689938),
    p = l(758183),
    C = l(252443);
function N(e) {
    let { icon: n, iconSize: l } = e;
    return (0, i.jsx)('div', {
        className: p.iconContainer,
        style: {
            height: l,
            width: l
        },
        children: n
    });
}
function v(e) {
    let { selectActionComponent: n, queryOptions: l, renderIcon: t, renderOptionLabel: r, defaultValues: s } = e,
        { type: v, placeholder: _, maxValues: T, disabled: h } = n,
        [I, x] = a.useState(!1),
        [O, S] = a.useState(!1),
        [g, Z] = a.useState(new Map(null == s ? void 0 : s.map((e) => [e.value, e]))),
        [A, R] = a.useState(new Set(g.keys())),
        [j, L] = a.useState(() => (null != s ? s : []).map((e) => e.value)),
        [M, P] = a.useState(0);
    a.useEffect(() => {
        let e = (null != s ? s : []).map((e) => e.value);
        if (e.every((e) => j.includes(e)) && j.every((n) => e.includes(n))) return;
        L(e);
        let n = new Map(null == s ? void 0 : s.map((e) => [e.value, e]));
        Z(n), R(new Set(n.keys())), P((e) => e + 1);
    }, [s, j]);
    let {
            state: b,
            executeStateUpdate: y,
            visualState: U,
            isDisabled: k,
            error: D
        } = (0, m.Ee)(n, {
            type: v,
            selectedOptions: Array.from(g.values())
        }),
        B = U === f.gH.LOADING;
    a.useEffect(() => {
        if ((null == b ? void 0 : b.type) === c.re.USER_SELECT || (null == b ? void 0 : b.type) === c.re.ROLE_SELECT || (null == b ? void 0 : b.type) === c.re.MENTIONABLE_SELECT || (null == b ? void 0 : b.type) === c.re.CHANNEL_SELECT) {
            let e = new Map(b.selectedOptions.map((e) => [e.value, e]));
            Z(e), R(new Set(e.keys()));
        }
    }, [b]);
    let G = a.useCallback(() => {
        y({
            type: v,
            selectedOptions: Array.from(g.values())
        }) && R(new Set(g.keys()));
    }, [y, v, g]);
    a.useEffect(() => {
        if (!(I || O || (g.size === A.size && Array.from(g.keys()).every((e) => A.has(e))))) G();
    }, [I, O, A, g, G]);
    let w = 0 === g.size || I,
        Y = {
            isDisabled: h || k,
            wrapperClassName: p.select,
            options: (e) =>
                new Promise((n) => {
                    n(l(e));
                }),
            placeholder: w ? (null != _ ? _ : E.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER) : void 0,
            onClose: () => x(!1),
            onOpen: () => x(!0),
            onBlur: () => S(!1),
            maxVisibleItems: 5,
            optionClassName: p.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: l } = n,
                    r = l ? 16 : 24,
                    a = t(e, r);
                return null != a
                    ? (0, i.jsx)(N, {
                          icon: a,
                          iconSize: r
                      })
                    : null;
            },
            renderOptionLabel: r
        };
    return (0, i.jsxs)(a.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: p.container,
                children: [
                    T > 1
                        ? (0, i.jsx)(
                              o.SearchableSelect,
                              {
                                  className: p.badges,
                                  value: Array.from(g.values()),
                                  onChange: (e) => {
                                      !I && S(!0), Z(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: u()({
                                      [p.soloInput]: 0 === g.size,
                                      [p.inlineInput]: g.size > 0,
                                      [p.hidden]: !w
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...Y
                              },
                              M
                          )
                        : (0, i.jsx)(
                              o.SearchableSelect,
                              {
                                  className: (p.badges, p.singleSelect),
                                  value: [...g.values()][0],
                                  onChange: (e) => Z(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...Y
                              },
                              M
                          ),
                    B
                        ? (0, i.jsx)('div', {
                              className: p.loading,
                              children: (0, i.jsx)(o.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != D
                ? (0, i.jsx)(d.st, {
                      ...(0, d.c4)(D),
                      className: C.error
                  })
                : null
        ]
    });
}
((r = t || (t = {}))[(r.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (r[(r.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
