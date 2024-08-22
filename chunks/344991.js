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
    a,
    i = t(735250),
    r = t(470079),
    o = t(120356),
    s = t.n(o),
    c = t(481060),
    u = t(911969),
    d = t(868819),
    m = t(970184),
    _ = t(280501),
    f = t(689938),
    p = t(758183),
    E = t(252443);
function I(e) {
    let { icon: n, iconSize: t } = e;
    return (0, i.jsx)('div', {
        className: p.iconContainer,
        style: {
            height: t,
            width: t
        },
        children: n
    });
}
function C(e) {
    let { selectActionComponent: n, queryOptions: t, renderIcon: l, renderOptionLabel: a, defaultValues: o } = e,
        { type: C, placeholder: h, maxValues: N, disabled: T } = n,
        [x, v] = r.useState(!1),
        [g, b] = r.useState(!1),
        [S, O] = r.useState(new Map(null == o ? void 0 : o.map((e) => [e.value, e]))),
        [j, M] = r.useState(new Set(S.keys())),
        [Z, y] = r.useState(() => (null != o ? o : []).map((e) => e.value)),
        [R, L] = r.useState(0);
    r.useEffect(() => {
        let e = (null != o ? o : []).map((e) => e.value);
        if (e.every((e) => Z.includes(e)) && Z.every((n) => e.includes(n))) return;
        y(e);
        let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
        O(n), M(new Set(n.keys())), L((e) => e + 1);
    }, [o, Z]);
    let {
            state: A,
            executeStateUpdate: P,
            visualState: k,
            isDisabled: U,
            error: B
        } = (0, m.Ee)(n, {
            type: C,
            selectedOptions: Array.from(S.values())
        }),
        G = k === _.gH.LOADING;
    r.useEffect(() => {
        if ((null == A ? void 0 : A.type) === u.re.USER_SELECT || (null == A ? void 0 : A.type) === u.re.ROLE_SELECT || (null == A ? void 0 : A.type) === u.re.MENTIONABLE_SELECT || (null == A ? void 0 : A.type) === u.re.CHANNEL_SELECT) {
            let e = new Map(A.selectedOptions.map((e) => [e.value, e]));
            O(e), M(new Set(e.keys()));
        }
    }, [A]);
    let w = r.useCallback(() => {
        P({
            type: C,
            selectedOptions: Array.from(S.values())
        }) && M(new Set(S.keys()));
    }, [P, C, S]);
    r.useEffect(() => {
        if (!(x || g || (S.size === j.size && Array.from(S.keys()).every((e) => j.has(e))))) w();
    }, [x, g, j, S, w]);
    let D = 0 === S.size || x,
        V = {
            isDisabled: T || U,
            wrapperClassName: p.select,
            options: (e) =>
                new Promise((n) => {
                    n(t(e));
                }),
            placeholder: D ? (null != h ? h : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER) : void 0,
            onClose: () => v(!1),
            onOpen: () => v(!0),
            onBlur: () => b(!1),
            maxVisibleItems: 5,
            optionClassName: p.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: t } = n,
                    a = t ? 16 : 24,
                    r = l(e, a);
                return null != r
                    ? (0, i.jsx)(I, {
                          icon: r,
                          iconSize: a
                      })
                    : null;
            },
            renderOptionLabel: a
        };
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: p.container,
                children: [
                    N > 1
                        ? (0, i.jsx)(
                              c.SearchableSelect,
                              {
                                  className: p.badges,
                                  value: Array.from(S.values()),
                                  onChange: (e) => {
                                      !x && b(!0), O(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: s()({
                                      [p.soloInput]: 0 === S.size,
                                      [p.inlineInput]: S.size > 0,
                                      [p.hidden]: !D
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...V
                              },
                              R
                          )
                        : (0, i.jsx)(
                              c.SearchableSelect,
                              {
                                  className: (p.badges, p.singleSelect),
                                  value: [...S.values()][0],
                                  onChange: (e) => O(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...V
                              },
                              R
                          ),
                    G
                        ? (0, i.jsx)('div', {
                              className: p.loading,
                              children: (0, i.jsx)(c.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != B
                ? (0, i.jsx)(d.st, {
                      ...(0, d.c4)(B),
                      className: E.error
                  })
                : null
        ]
    });
}
((a = l || (l = {}))[(a.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (a[(a.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
