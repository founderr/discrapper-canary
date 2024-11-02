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
    d = t(868819),
    m = t(970184),
    f = t(280501),
    p = t(388032),
    h = t(128422),
    _ = t(601648);
function x(e) {
    let { icon: n, iconSize: t } = e;
    return (0, r.jsx)('div', {
        className: h.iconContainer,
        style: {
            height: t,
            width: t
        },
        children: n
    });
}
function C(e) {
    let { selectActionComponent: n, queryOptions: t, renderIcon: l, renderOptionLabel: i, defaultValues: o } = e,
        { type: C, placeholder: v, maxValues: b, disabled: g } = n,
        [I, S] = a.useState(!1),
        [j, y] = a.useState(!1),
        [E, T] = a.useState(new Map(null == o ? void 0 : o.map((e) => [e.value, e]))),
        [N, Z] = a.useState(new Set(E.keys())),
        [k, L] = a.useState(() => (null != o ? o : []).map((e) => e.value)),
        [O, M] = a.useState(0);
    a.useEffect(() => {
        let e = (null != o ? o : []).map((e) => e.value);
        if (e.every((e) => k.includes(e)) && k.every((n) => e.includes(n))) return;
        L(e);
        let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
        T(n), Z(new Set(n.keys())), M((e) => e + 1);
    }, [o, k]);
    let {
            state: P,
            executeStateUpdate: R,
            visualState: B,
            isDisabled: A,
            error: w
        } = (0, m.Ee)(n, {
            type: C,
            selectedOptions: Array.from(E.values())
        }),
        U = B === f.gH.LOADING;
    a.useEffect(() => {
        if ((null == P ? void 0 : P.type) === u.re.USER_SELECT || (null == P ? void 0 : P.type) === u.re.ROLE_SELECT || (null == P ? void 0 : P.type) === u.re.MENTIONABLE_SELECT || (null == P ? void 0 : P.type) === u.re.CHANNEL_SELECT) {
            let e = new Map(P.selectedOptions.map((e) => [e.value, e]));
            T(e), Z(new Set(e.keys()));
        }
    }, [P]);
    let G = a.useCallback(() => {
        R({
            type: C,
            selectedOptions: Array.from(E.values())
        }) && Z(new Set(E.keys()));
    }, [R, C, E]);
    a.useEffect(() => {
        if (!(I || j || (E.size === N.size && Array.from(E.keys()).every((e) => N.has(e))))) G();
    }, [I, j, N, E, G]);
    let H = 0 === E.size || I,
        D = {
            isDisabled: g || A,
            wrapperClassName: h.select,
            options: (e) =>
                new Promise((n) => {
                    n(t(e));
                }),
            placeholder: H ? (null != v ? v : p.intl.string(p.t.Otr6W1)) : void 0,
            onClose: () => S(!1),
            onOpen: () => S(!0),
            onBlur: () => y(!1),
            maxVisibleItems: 5,
            optionClassName: h.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: t } = n,
                    i = t ? 16 : 24,
                    a = l(e, i);
                return null != a
                    ? (0, r.jsx)(x, {
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
                className: h.container,
                children: [
                    b > 1
                        ? (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: h.badges,
                                  value: Array.from(E.values()),
                                  onChange: (e) => {
                                      !I && y(!0), T(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: s()({
                                      [h.soloInput]: 0 === E.size,
                                      [h.inlineInput]: E.size > 0,
                                      [h.hidden]: !H
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...D
                              },
                              O
                          )
                        : (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: (h.badges, h.singleSelect),
                                  value: [...E.values()][0],
                                  onChange: (e) => T(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...D
                              },
                              O
                          ),
                    U
                        ? (0, r.jsx)('div', {
                              className: h.loading,
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
                      className: _.error
                  })
                : null
        ]
    });
}
((i = l || (l = {}))[(i.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (i[(i.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
