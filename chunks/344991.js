t.d(n, {
    ZP: function () {
        return I;
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
    _ = t(280501),
    f = t(689938),
    p = t(128422),
    C = t(601648);
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
function I(e) {
    let { selectActionComponent: n, queryOptions: t, renderIcon: l, renderOptionLabel: i, defaultValues: o } = e,
        { type: I, placeholder: E, maxValues: x, disabled: v } = n,
        [T, N] = r.useState(!1),
        [b, g] = r.useState(!1),
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
            state: P,
            executeStateUpdate: A,
            visualState: k,
            isDisabled: U,
            error: B
        } = (0, m.Ee)(n, {
            type: I,
            selectedOptions: Array.from(S.values())
        }),
        w = k === _.gH.LOADING;
    r.useEffect(() => {
        if ((null == P ? void 0 : P.type) === u.re.USER_SELECT || (null == P ? void 0 : P.type) === u.re.ROLE_SELECT || (null == P ? void 0 : P.type) === u.re.MENTIONABLE_SELECT || (null == P ? void 0 : P.type) === u.re.CHANNEL_SELECT) {
            let e = new Map(P.selectedOptions.map((e) => [e.value, e]));
            O(e), M(new Set(e.keys()));
        }
    }, [P]);
    let G = r.useCallback(() => {
        A({
            type: I,
            selectedOptions: Array.from(S.values())
        }) && M(new Set(S.keys()));
    }, [A, I, S]);
    r.useEffect(() => {
        if (!(T || b || (S.size === j.size && Array.from(S.keys()).every((e) => j.has(e))))) G();
    }, [T, b, j, S, G]);
    let D = 0 === S.size || T,
        V = {
            isDisabled: v || U,
            wrapperClassName: p.select,
            options: (e) =>
                new Promise((n) => {
                    n(t(e));
                }),
            placeholder: D ? (null != E ? E : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER) : void 0,
            onClose: () => N(!1),
            onOpen: () => N(!0),
            onBlur: () => g(!1),
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
                    x > 1
                        ? (0, a.jsx)(
                              c.SearchableSelect,
                              {
                                  className: p.badges,
                                  value: Array.from(S.values()),
                                  onChange: (e) => {
                                      !T && g(!0), O(new Map(e.map((e) => [e.value, e])));
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
                        : (0, a.jsx)(
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
                    w
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
