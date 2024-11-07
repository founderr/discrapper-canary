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
    i,
    r = l(200651),
    a = l(192379),
    s = l(120356),
    o = l.n(s),
    u = l(481060),
    c = l(911969),
    d = l(739754),
    m = l(970184),
    p = l(280501),
    f = l(388032),
    x = l(851796),
    v = l(503738);
function h(e) {
    let { icon: n, iconSize: l } = e;
    return (0, r.jsx)('div', {
        className: x.iconContainer,
        style: {
            height: l,
            width: l
        },
        children: n
    });
}
function C(e) {
    let { selectActionComponent: n, queryOptions: l, renderIcon: t, renderOptionLabel: i, defaultValues: s } = e,
        { type: C, placeholder: g, maxValues: j, disabled: S } = n,
        [I, N] = a.useState(!1),
        [E, b] = a.useState(!1),
        [Z, T] = a.useState(new Map(null == s ? void 0 : s.map((e) => [e.value, e]))),
        [_, y] = a.useState(new Set(Z.keys())),
        [k, R] = a.useState(() => (null != s ? s : []).map((e) => e.value)),
        [L, P] = a.useState(0);
    a.useEffect(() => {
        let e = (null != s ? s : []).map((e) => e.value);
        if (e.every((e) => k.includes(e)) && k.every((n) => e.includes(n))) return;
        R(e);
        let n = new Map(null == s ? void 0 : s.map((e) => [e.value, e]));
        T(n), y(new Set(n.keys())), P((e) => e + 1);
    }, [s, k]);
    let {
            state: O,
            executeStateUpdate: A,
            visualState: M,
            isDisabled: U,
            error: w
        } = (0, m.Ee)(n, {
            type: C,
            selectedOptions: Array.from(Z.values())
        }),
        D = M === p.gH.LOADING;
    a.useEffect(() => {
        if ((null == O ? void 0 : O.type) === c.re.USER_SELECT || (null == O ? void 0 : O.type) === c.re.ROLE_SELECT || (null == O ? void 0 : O.type) === c.re.MENTIONABLE_SELECT || (null == O ? void 0 : O.type) === c.re.CHANNEL_SELECT) {
            let e = new Map(O.selectedOptions.map((e) => [e.value, e]));
            T(e), y(new Set(e.keys()));
        }
    }, [O]);
    let B = a.useCallback(() => {
        A({
            type: C,
            selectedOptions: Array.from(Z.values())
        }) && y(new Set(Z.keys()));
    }, [A, C, Z]);
    a.useEffect(() => {
        if (!(I || E || (Z.size === _.size && Array.from(Z.keys()).every((e) => _.has(e))))) B();
    }, [I, E, _, Z, B]);
    let G = 0 === Z.size || I,
        H = {
            isDisabled: S || U,
            wrapperClassName: x.select,
            options: (e) =>
                new Promise((n) => {
                    n(l(e));
                }),
            placeholder: G ? (null != g ? g : f.intl.string(f.t.Otr6W1)) : void 0,
            onClose: () => N(!1),
            onOpen: () => N(!0),
            onBlur: () => b(!1),
            maxVisibleItems: 5,
            optionClassName: x.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: l } = n,
                    i = l ? 16 : 24,
                    a = t(e, i);
                return null != a
                    ? (0, r.jsx)(h, {
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
                    j > 1
                        ? (0, r.jsx)(
                              u.SearchableSelect,
                              {
                                  className: x.badges,
                                  value: Array.from(Z.values()),
                                  onChange: (e) => {
                                      !I && b(!0), T(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: o()({
                                      [x.soloInput]: 0 === Z.size,
                                      [x.inlineInput]: Z.size > 0,
                                      [x.hidden]: !G
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...H
                              },
                              L
                          )
                        : (0, r.jsx)(
                              u.SearchableSelect,
                              {
                                  className: (x.badges, x.singleSelect),
                                  value: [...Z.values()][0],
                                  onChange: (e) => T(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...H
                              },
                              L
                          ),
                    D
                        ? (0, r.jsx)('div', {
                              className: x.loading,
                              children: (0, r.jsx)(u.Dots, {
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
                      className: v.error
                  })
                : null
        ]
    });
}
((i = t || (t = {}))[(i.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (i[(i.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
