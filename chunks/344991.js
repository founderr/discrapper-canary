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
    p = l(280501),
    E = l(689938),
    f = l(758183),
    N = l(252443);
function C(e) {
    let { icon: n, iconSize: l } = e;
    return (0, i.jsx)('div', {
        className: f.iconContainer,
        style: {
            height: l,
            width: l
        },
        children: n
    });
}
function v(e) {
    let { selectActionComponent: n, queryOptions: l, renderIcon: t, renderOptionLabel: r, defaultValues: s } = e,
        { type: v, placeholder: _, maxValues: h, disabled: x } = n,
        [T, I] = a.useState(!1),
        [g, S] = a.useState(!1),
        [O, j] = a.useState(new Map(null == s ? void 0 : s.map((e) => [e.value, e]))),
        [Z, R] = a.useState(new Set(O.keys())),
        [M, b] = a.useState(() => (null != s ? s : []).map((e) => e.value)),
        [A, L] = a.useState(0);
    a.useEffect(() => {
        let e = (null != s ? s : []).map((e) => e.value);
        if (e.every((e) => M.includes(e)) && M.every((n) => e.includes(n))) return;
        b(e);
        let n = new Map(null == s ? void 0 : s.map((e) => [e.value, e]));
        j(n), R(new Set(n.keys())), L((e) => e + 1);
    }, [s, M]);
    let {
            state: P,
            executeStateUpdate: y,
            visualState: k,
            isDisabled: U,
            error: D
        } = (0, m.Ee)(n, {
            type: v,
            selectedOptions: Array.from(O.values())
        }),
        G = k === p.gH.LOADING;
    a.useEffect(() => {
        if ((null == P ? void 0 : P.type) === c.re.USER_SELECT || (null == P ? void 0 : P.type) === c.re.ROLE_SELECT || (null == P ? void 0 : P.type) === c.re.MENTIONABLE_SELECT || (null == P ? void 0 : P.type) === c.re.CHANNEL_SELECT) {
            let e = new Map(P.selectedOptions.map((e) => [e.value, e]));
            j(e), R(new Set(e.keys()));
        }
    }, [P]);
    let Y = a.useCallback(() => {
        y({
            type: v,
            selectedOptions: Array.from(O.values())
        }) && R(new Set(O.keys()));
    }, [y, v, O]);
    a.useEffect(() => {
        if (!(T || g || (O.size === Z.size && Array.from(O.keys()).every((e) => Z.has(e))))) Y();
    }, [T, g, Z, O, Y]);
    let w = 0 === O.size || T,
        B = {
            isDisabled: x || U,
            wrapperClassName: f.select,
            options: (e) =>
                new Promise((n) => {
                    n(l(e));
                }),
            placeholder: w ? (null != _ ? _ : E.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER) : void 0,
            onClose: () => I(!1),
            onOpen: () => I(!0),
            onBlur: () => S(!1),
            maxVisibleItems: 5,
            optionClassName: f.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: l } = n,
                    r = l ? 16 : 24,
                    a = t(e, r);
                return null != a
                    ? (0, i.jsx)(C, {
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
                className: f.container,
                children: [
                    h > 1
                        ? (0, i.jsx)(
                              o.SearchableSelect,
                              {
                                  className: f.badges,
                                  value: Array.from(O.values()),
                                  onChange: (e) => {
                                      !T && S(!0), j(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: u()({
                                      [f.soloInput]: 0 === O.size,
                                      [f.inlineInput]: O.size > 0,
                                      [f.hidden]: !w
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...B
                              },
                              A
                          )
                        : (0, i.jsx)(
                              o.SearchableSelect,
                              {
                                  className: (f.badges, f.singleSelect),
                                  value: [...O.values()][0],
                                  onChange: (e) => j(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...B
                              },
                              A
                          ),
                    G
                        ? (0, i.jsx)('div', {
                              className: f.loading,
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
                      className: N.error
                  })
                : null
        ]
    });
}
((r = t || (t = {}))[(r.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (r[(r.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
