t.d(n, {
    ZP: function () {
        return v;
    },
    tE: function () {
        return l;
    }
}),
    t(47120);
var l,
    i,
    r = t(735250),
    a = t(470079),
    o = t(120356),
    s = t.n(o),
    c = t(481060),
    u = t(911969),
    d = t(868819),
    m = t(970184),
    f = t(280501),
    _ = t(689938),
    p = t(758183),
    h = t(252443);
function C(e) {
    let { icon: n, iconSize: t } = e;
    return (0, r.jsx)('div', {
        className: p.iconContainer,
        style: {
            height: t,
            width: t
        },
        children: n
    });
}
function v(e) {
    let { selectActionComponent: n, queryOptions: t, renderIcon: l, renderOptionLabel: i, defaultValues: o } = e,
        { type: v, placeholder: x, maxValues: E, disabled: I } = n,
        [T, g] = a.useState(!1),
        [N, b] = a.useState(!1),
        [S, O] = a.useState(new Map(null == o ? void 0 : o.map((e) => [e.value, e]))),
        [j, Z] = a.useState(new Set(S.keys())),
        [L, M] = a.useState(() => (null != o ? o : []).map((e) => e.value)),
        [y, A] = a.useState(0);
    a.useEffect(() => {
        let e = (null != o ? o : []).map((e) => e.value);
        if (e.every((e) => L.includes(e)) && L.every((n) => e.includes(n))) return;
        M(e);
        let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
        O(n), Z(new Set(n.keys())), A((e) => e + 1);
    }, [o, L]);
    let {
            state: R,
            executeStateUpdate: P,
            visualState: U,
            isDisabled: k,
            error: B
        } = (0, m.Ee)(n, {
            type: v,
            selectedOptions: Array.from(S.values())
        }),
        w = U === f.gH.LOADING;
    a.useEffect(() => {
        if ((null == R ? void 0 : R.type) === u.re.USER_SELECT || (null == R ? void 0 : R.type) === u.re.ROLE_SELECT || (null == R ? void 0 : R.type) === u.re.MENTIONABLE_SELECT || (null == R ? void 0 : R.type) === u.re.CHANNEL_SELECT) {
            let e = new Map(R.selectedOptions.map((e) => [e.value, e]));
            O(e), Z(new Set(e.keys()));
        }
    }, [R]);
    let G = a.useCallback(() => {
        P({
            type: v,
            selectedOptions: Array.from(S.values())
        }) && Z(new Set(S.keys()));
    }, [P, v, S]);
    a.useEffect(() => {
        if (!(T || N || (S.size === j.size && Array.from(S.keys()).every((e) => j.has(e))))) G();
    }, [T, N, j, S, G]);
    let D = 0 === S.size || T,
        H = {
            isDisabled: I || k,
            wrapperClassName: p.select,
            options: (e) =>
                new Promise((n) => {
                    n(t(e));
                }),
            placeholder: D ? (null != x ? x : _.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER) : void 0,
            onClose: () => g(!1),
            onOpen: () => g(!0),
            onBlur: () => b(!1),
            maxVisibleItems: 5,
            optionClassName: p.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: t } = n,
                    i = t ? 16 : 24,
                    a = l(e, i);
                return null != a
                    ? (0, r.jsx)(C, {
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
                className: p.container,
                children: [
                    E > 1
                        ? (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: p.badges,
                                  value: Array.from(S.values()),
                                  onChange: (e) => {
                                      !T && b(!0), O(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: s()({
                                      [p.soloInput]: 0 === S.size,
                                      [p.inlineInput]: S.size > 0,
                                      [p.hidden]: !D
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...H
                              },
                              y
                          )
                        : (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: (p.badges, p.singleSelect),
                                  value: [...S.values()][0],
                                  onChange: (e) => O(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...H
                              },
                              y
                          ),
                    w
                        ? (0, r.jsx)('div', {
                              className: p.loading,
                              children: (0, r.jsx)(c.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != B
                ? (0, r.jsx)(d.st, {
                      ...(0, d.c4)(B),
                      className: h.error
                  })
                : null
        ]
    });
}
((i = l || (l = {}))[(i.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (i[(i.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
