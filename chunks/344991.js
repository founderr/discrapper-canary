n.d(t, {
    ZP: function () {
        return I;
    },
    tE: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(911969),
    d = n(868819),
    _ = n(970184),
    E = n(280501),
    f = n(689938),
    h = n(128422),
    p = n(601648);
function m(e) {
    let { icon: t, iconSize: n } = e;
    return (0, a.jsx)('div', {
        className: h.iconContainer,
        style: {
            height: n,
            width: n
        },
        children: t
    });
}
function I(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: r, renderOptionLabel: i, defaultValues: s } = e,
        { type: I, placeholder: T, maxValues: g, disabled: S } = t,
        [A, v] = o.useState(!1),
        [N, O] = o.useState(!1),
        [R, C] = o.useState(new Map(null == s ? void 0 : s.map((e) => [e.value, e]))),
        [y, L] = o.useState(new Set(R.keys())),
        [b, D] = o.useState(() => (null != s ? s : []).map((e) => e.value)),
        [M, P] = o.useState(0);
    o.useEffect(() => {
        let e = (null != s ? s : []).map((e) => e.value);
        if (e.every((e) => b.includes(e)) && b.every((t) => e.includes(t))) return;
        D(e);
        let t = new Map(null == s ? void 0 : s.map((e) => [e.value, e]));
        C(t), L(new Set(t.keys())), P((e) => e + 1);
    }, [s, b]);
    let {
            state: U,
            executeStateUpdate: w,
            visualState: x,
            isDisabled: G,
            error: k
        } = (0, _.Ee)(t, {
            type: I,
            selectedOptions: Array.from(R.values())
        }),
        B = g > 1,
        F = x === E.gH.LOADING;
    o.useEffect(() => {
        if ((null == U ? void 0 : U.type) === c.re.USER_SELECT || (null == U ? void 0 : U.type) === c.re.ROLE_SELECT || (null == U ? void 0 : U.type) === c.re.MENTIONABLE_SELECT || (null == U ? void 0 : U.type) === c.re.CHANNEL_SELECT) {
            let e = new Map(U.selectedOptions.map((e) => [e.value, e]));
            C(e), L(new Set(e.keys()));
        }
    }, [U]);
    let Z = o.useCallback(() => {
        w({
            type: I,
            selectedOptions: Array.from(R.values())
        }) && L(new Set(R.keys()));
    }, [w, I, R]);
    o.useEffect(() => {
        if (!(A || N || (R.size === y.size && Array.from(R.keys()).every((e) => y.has(e))))) Z();
    }, [A, N, y, R, Z]);
    let V = (e) => {
            !A && O(!0), C(new Map(e.map((e) => [e.value, e])));
        },
        H = (e) => C(null != e ? new Map([[e.value, e]]) : new Map()),
        Y = (e) =>
            new Promise((t) => {
                t(n(e));
            }),
        j = (e, t) => {
            let { inPill: n } = t,
                i = n ? 16 : 24,
                o = r(e, i);
            return null != o
                ? (0, a.jsx)(m, {
                      icon: o,
                      iconSize: i
                  })
                : null;
        },
        W = 0 === R.size || A,
        K = {
            isDisabled: S || G,
            wrapperClassName: h.select,
            options: Y,
            placeholder: W ? (null != T ? T : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER) : void 0,
            onClose: () => v(!1),
            onOpen: () => v(!0),
            onBlur: () => O(!1),
            maxVisibleItems: 5,
            optionClassName: h.__invalid_selectOption,
            renderOptionPrefix: j,
            renderOptionLabel: i
        };
    return (0, a.jsxs)(o.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: h.container,
                children: [
                    B
                        ? (0, a.jsx)(
                              u.SearchableSelect,
                              {
                                  className: h.badges,
                                  value: Array.from(R.values()),
                                  onChange: V,
                                  multi: !0,
                                  inputClassNames: l()({
                                      [h.soloInput]: 0 === R.size,
                                      [h.inlineInput]: R.size > 0,
                                      [h.hidden]: !W
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...K
                              },
                              M
                          )
                        : (0, a.jsx)(
                              u.SearchableSelect,
                              {
                                  className: (h.badges, h.singleSelect),
                                  value: [...R.values()][0],
                                  onChange: H,
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...K
                              },
                              M
                          ),
                    F
                        ? (0, a.jsx)('div', {
                              className: h.loading,
                              children: (0, a.jsx)(u.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != k
                ? (0, a.jsx)(d.st, {
                      ...(0, d.c4)(k),
                      className: p.error
                  })
                : null
        ]
    });
}
!(function (e) {
    (e[(e.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (e[(e.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
})(r || (r = {}));
