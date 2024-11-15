t.d(n, {
    ZP: function () {
        return _;
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
    h = t(128422),
    x = t(601648);
function v(e) {
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
function _(e) {
    let { selectActionComponent: n, queryOptions: t, renderIcon: l, renderOptionLabel: i, defaultValues: o } = e,
        { type: _, placeholder: C, maxValues: g, disabled: I } = n,
        [b, j] = a.useState(!1),
        [S, N] = a.useState(!1),
        [E, T] = a.useState(new Map(null == o ? void 0 : o.map((e) => [e.value, e]))),
        [y, Z] = a.useState(new Set(E.keys())),
        [k, L] = a.useState(() => (null != o ? o : []).map((e) => e.value)),
        [R, O] = a.useState(0);
    a.useEffect(() => {
        let e = (null != o ? o : []).map((e) => e.value);
        if (e.every((e) => k.includes(e)) && k.every((n) => e.includes(n))) return;
        L(e);
        let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
        T(n), Z(new Set(n.keys())), O((e) => e + 1);
    }, [o, k]);
    let {
            state: P,
            executeStateUpdate: M,
            visualState: A,
            isDisabled: B,
            error: w
        } = (0, m.Ee)(n, {
            type: _,
            selectedOptions: Array.from(E.values())
        }),
        U = A === f.gH.LOADING;
    a.useEffect(() => {
        if ((null == P ? void 0 : P.type) === u.re.USER_SELECT || (null == P ? void 0 : P.type) === u.re.ROLE_SELECT || (null == P ? void 0 : P.type) === u.re.MENTIONABLE_SELECT || (null == P ? void 0 : P.type) === u.re.CHANNEL_SELECT) {
            let e = new Map(P.selectedOptions.map((e) => [e.value, e]));
            T(e), Z(new Set(e.keys()));
        }
    }, [P]);
    let G = a.useCallback(() => {
        M({
            type: _,
            selectedOptions: Array.from(E.values())
        }) && Z(new Set(E.keys()));
    }, [M, _, E]);
    a.useEffect(() => {
        if (!(b || S || (E.size === y.size && Array.from(E.keys()).every((e) => y.has(e))))) G();
    }, [b, S, y, E, G]);
    let D = 0 === E.size || b,
        F = {
            isDisabled: I || B,
            wrapperClassName: h.select,
            options: (e) =>
                new Promise((n) => {
                    n(t(e));
                }),
            placeholder: D ? (null != C ? C : p.intl.string(p.t.Otr6W1)) : void 0,
            onClose: () => j(!1),
            onOpen: () => j(!0),
            onBlur: () => N(!1),
            maxVisibleItems: 5,
            optionClassName: h.__invalid_selectOption,
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
                className: h.container,
                children: [
                    g > 1
                        ? (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: h.badges,
                                  value: Array.from(E.values()),
                                  onChange: (e) => {
                                      !b && N(!0), T(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: s()({
                                      [h.soloInput]: 0 === E.size,
                                      [h.inlineInput]: E.size > 0,
                                      [h.hidden]: !D
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...F
                              },
                              R
                          )
                        : (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: (h.badges, h.singleSelect),
                                  value: [...E.values()][0],
                                  onChange: (e) => T(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...F
                              },
                              R
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
                      className: x.error
                  })
                : null
        ]
    });
}
((i = l || (l = {}))[(i.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (i[(i.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
