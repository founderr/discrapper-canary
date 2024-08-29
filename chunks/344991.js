l.d(n, {
    ZP: function () {
        return C;
    },
    tE: function () {
        return t;
    }
}),
    l(47120);
var t,
    r,
    a = l(735250),
    i = l(470079),
    s = l(120356),
    u = l.n(s),
    o = l(481060),
    c = l(911969),
    d = l(868819),
    m = l(970184),
    E = l(280501),
    p = l(689938),
    N = l(758183),
    f = l(252443);
function _(e) {
    let { icon: n, iconSize: l } = e;
    return (0, a.jsx)('div', {
        className: N.iconContainer,
        style: {
            height: l,
            width: l
        },
        children: n
    });
}
function C(e) {
    let { selectActionComponent: n, queryOptions: l, renderIcon: t, renderOptionLabel: r, defaultValues: s } = e,
        { type: C, placeholder: T, maxValues: v, disabled: h } = n,
        [x, I] = i.useState(!1),
        [S, O] = i.useState(!1),
        [g, j] = i.useState(new Map(null == s ? void 0 : s.map((e) => [e.value, e]))),
        [Z, R] = i.useState(new Set(g.keys())),
        [M, b] = i.useState(() => (null != s ? s : []).map((e) => e.value)),
        [L, A] = i.useState(0);
    i.useEffect(() => {
        let e = (null != s ? s : []).map((e) => e.value);
        if (e.every((e) => M.includes(e)) && M.every((n) => e.includes(n))) return;
        b(e);
        let n = new Map(null == s ? void 0 : s.map((e) => [e.value, e]));
        j(n), R(new Set(n.keys())), A((e) => e + 1);
    }, [s, M]);
    let {
            state: P,
            executeStateUpdate: y,
            visualState: U,
            isDisabled: k,
            error: D
        } = (0, m.Ee)(n, {
            type: C,
            selectedOptions: Array.from(g.values())
        }),
        G = U === E.gH.LOADING;
    i.useEffect(() => {
        if ((null == P ? void 0 : P.type) === c.re.USER_SELECT || (null == P ? void 0 : P.type) === c.re.ROLE_SELECT || (null == P ? void 0 : P.type) === c.re.MENTIONABLE_SELECT || (null == P ? void 0 : P.type) === c.re.CHANNEL_SELECT) {
            let e = new Map(P.selectedOptions.map((e) => [e.value, e]));
            j(e), R(new Set(e.keys()));
        }
    }, [P]);
    let Y = i.useCallback(() => {
        y({
            type: C,
            selectedOptions: Array.from(g.values())
        }) && R(new Set(g.keys()));
    }, [y, C, g]);
    i.useEffect(() => {
        if (!(x || S || (g.size === Z.size && Array.from(g.keys()).every((e) => Z.has(e))))) Y();
    }, [x, S, Z, g, Y]);
    let B = 0 === g.size || x,
        w = {
            isDisabled: h || k,
            wrapperClassName: N.select,
            options: (e) =>
                new Promise((n) => {
                    n(l(e));
                }),
            placeholder: B ? (null != T ? T : p.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER) : void 0,
            onClose: () => I(!1),
            onOpen: () => I(!0),
            onBlur: () => O(!1),
            maxVisibleItems: 5,
            optionClassName: N.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: l } = n,
                    r = l ? 16 : 24,
                    i = t(e, r);
                return null != i
                    ? (0, a.jsx)(_, {
                          icon: i,
                          iconSize: r
                      })
                    : null;
            },
            renderOptionLabel: r
        };
    return (0, a.jsxs)(i.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: N.container,
                children: [
                    v > 1
                        ? (0, a.jsx)(
                              o.SearchableSelect,
                              {
                                  className: N.badges,
                                  value: Array.from(g.values()),
                                  onChange: (e) => {
                                      !x && O(!0), j(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: u()({
                                      [N.soloInput]: 0 === g.size,
                                      [N.inlineInput]: g.size > 0,
                                      [N.hidden]: !B
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...w
                              },
                              L
                          )
                        : (0, a.jsx)(
                              o.SearchableSelect,
                              {
                                  className: (N.badges, N.singleSelect),
                                  value: [...g.values()][0],
                                  onChange: (e) => j(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...w
                              },
                              L
                          ),
                    G
                        ? (0, a.jsx)('div', {
                              className: N.loading,
                              children: (0, a.jsx)(o.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != D
                ? (0, a.jsx)(d.st, {
                      ...(0, d.c4)(D),
                      className: f.error
                  })
                : null
        ]
    });
}
((r = t || (t = {}))[(r.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (r[(r.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
