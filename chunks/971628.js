n.d(t, {
    G: function () {
        return b;
    },
    Z: function () {
        return L;
    }
}),
    n(47120),
    n(724458);
var s = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    i = n(91192),
    o = n(481060),
    c = n(385499),
    d = n(600164),
    u = n(313201),
    m = n(565138),
    h = n(631969),
    x = n(605436),
    E = n(537383),
    S = n(71080),
    R = n(689938),
    T = n(194419);
let M = (0, u.hQ)(),
    g = (0, u.hQ)();
function b(e) {
    return ''.concat(e.rowType, ':').concat(e.id);
}
function f(e) {
    return (0, s.jsx)(
        o.FormTitle,
        {
            tag: 'h5',
            className: r()(T.sectionTitle, T.rowHeight),
            children: e
        },
        e
    );
}
function A(e) {
    let { id: t, children: n, rowLabel: l, checked: a, onSelect: c, disabled: u, showCheckbox: m, selected: h, onMouseEnter: x, 'aria-posinset': E, 'aria-setsize': S } = e,
        R = (0, i.JA)(t);
    return (0, s.jsx)(o.Clickable, {
        ...R,
        id: t,
        className: r()(T.addMemberRow, { [T.selectedRow]: h }),
        onClick: (e) => {
            !u && (e.preventDefault(), c());
        },
        onMouseEnter: x,
        role: 'option',
        'aria-disabled': u,
        'aria-selected': a,
        'aria-setsize': S,
        'aria-posinset': E,
        children: (0, s.jsxs)(d.Z, {
            justify: d.Z.Justify.BETWEEN,
            align: d.Z.Align.CENTER,
            children: [
                m
                    ? (0, s.jsx)(o.Checkbox, {
                          displayOnly: !0,
                          size: 18,
                          value: a,
                          type: o.Checkbox.Types.INVERTED,
                          disabled: u,
                          children: (0, s.jsx)('div', {
                              className: T.checkboxLabel,
                              children: n
                          })
                      })
                    : n,
                null != l
                    ? (0, s.jsx)(o.Text, {
                          color: 'text-muted',
                          variant: 'text-xs/normal',
                          children: l
                      })
                    : null
            ]
        })
    });
}
function L(e) {
    let { listClassName: t, pendingAdditions: n, query: a, onQueryChange: i, onClickRow: u, onRemovePendingAddition: L, roles: y = [], members: j = [], users: p = [], guilds: N = [], placeholderText: v, disabledText: C, hintText: w, searchTitleText: Z, renderEmptyText: _, focusSearchAfterReady: I, isReady: k, maxCount: B, hideRowLabel: O = !1 } = e,
        D = l.useRef(null),
        P = l.useRef(null),
        z = [y.length, j.length, p.length, N.length],
        [H, U] = l.useState(!1),
        [$, F] = l.useState(0),
        [V, G] = l.useState(-1);
    l.useEffect(() => {
        var e;
        null === (e = D.current) || void 0 === e || e.focus();
    }, []);
    let Q = l.useCallback(function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if ((F(e), G(t), n)) {
                var s;
                null === (s = P.current) ||
                    void 0 === s ||
                    s.scrollToIndex({
                        section: null != e ? e : 0,
                        row: null != t ? t : 0,
                        padding: 8
                    });
            }
        }, []),
        q = l.useCallback(
            (e, t) => {
                if (null == t) return;
                i('');
                let n = (e === S.m$.ROLES ? y : [])[t];
                n.rowType !== S.aC.EMPTY_STATE && u(n);
            },
            [y, u, i]
        ),
        Y = l.useCallback(
            (e) => {
                var t;
                if (null != e && e.rowType !== S.aC.EMPTY_STATE) u(e), i(''), null === (t = D.current) || void 0 === t || t.focus();
            },
            [u, i]
        ),
        W = l.useMemo(() => Object.keys(n), [n]),
        J = l.useMemo(() => j.some((e) => !e.disabled) || y.some((e) => !e.disabled) || p.some((e) => !e.disabled) || N.some((e) => !e.disabled), [j, y, p, N]) || '' === a.trim();
    function K() {
        var e;
        U(!(null === (e = P.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && J);
    }
    return (
        l.useEffect(() => {
            K();
        }),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: r()(T.searchBox, { [T.scrollSeparator]: H }),
                    children: [
                        null != Z &&
                            (0, s.jsx)(o.FormTitle, {
                                tag: o.FormTitleTags.H5,
                                children: Z
                            }),
                        (0, s.jsx)(E.Z, {
                            ref: D,
                            query: a,
                            onQueryChange: i,
                            selectedSection: $,
                            selectedRow: V,
                            onSelectionChange: Q,
                            onSelect: q,
                            tags: W.map((e) => n[e].display),
                            sections: z,
                            onRemoveTag: function (e) {
                                L(W[e]);
                            },
                            placeholder: v,
                            focusAfterReady: I,
                            isReady: k,
                            'aria-labelledby': M,
                            'aria-controls': g
                        }),
                        null != w
                            ? (0, s.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  children: w
                              })
                            : null
                    ]
                }),
                J
                    ? (0, s.jsx)(o.List, {
                          ref: P,
                          className: r()(T.roleMemberList, t),
                          sections: z,
                          renderRow: (e) => {
                              let t,
                                  l,
                                  { section: a, row: i } = e,
                                  d = null,
                                  u = !1,
                                  h = !1,
                                  E = !1,
                                  R = null != B && Object.keys(n).length >= B;
                              switch (a) {
                                  case S.m$.ROLES:
                                      (u = (l = b((d = y[i]))) in n || d.disabled),
                                          (h = d.disabled || R),
                                          (E = $ === S.m$.ROLES && V === i),
                                          (t = (0, s.jsxs)('div', {
                                              className: T.rowBody,
                                              children: [
                                                  (0, s.jsx)('div', {
                                                      className: r()(T.rowHeight, T.alignCenter),
                                                      children: (0, s.jsx)(o.ShieldUserIcon, {
                                                          size: 'custom',
                                                          color: d.colorString,
                                                          height: 20
                                                      })
                                                  }),
                                                  (0, s.jsxs)('div', {
                                                      className: T.rowLabel,
                                                      children: [
                                                          (0, s.jsx)(o.Text, {
                                                              variant: 'text-sm/medium',
                                                              className: T.__invalid_rowTitle,
                                                              color: d.rowType === S.aC.EMPTY_STATE ? 'text-muted' : 'text-normal',
                                                              children: d.name
                                                          }),
                                                          d.disabled && null != C
                                                              ? (0, s.jsx)(o.Text, {
                                                                    color: 'header-secondary',
                                                                    variant: 'text-xs/normal',
                                                                    children: C
                                                                })
                                                              : null
                                                      ]
                                                  })
                                              ]
                                          }));
                                      break;
                                  case S.m$.MEMBERS:
                                      (u = (l = b((d = j[i]))) in n || d.disabled),
                                          (h = d.disabled || R),
                                          (E = $ === S.m$.MEMBERS && V === i),
                                          (t = (0, s.jsxs)('div', {
                                              className: T.rowBody,
                                              children: [
                                                  (0, s.jsx)(o.Avatar, {
                                                      src: d.avatarURL,
                                                      size: o.AvatarSizes.SIZE_24,
                                                      'aria-label': ''
                                                  }),
                                                  (0, s.jsx)(o.Text, {
                                                      className: T.rowLabel,
                                                      variant: 'text-sm/normal',
                                                      children: d.name
                                                  }),
                                                  null != d.nickname
                                                      ? (0, s.jsx)(o.Text, {
                                                            color: 'text-muted',
                                                            className: T.rowLabelSubText,
                                                            variant: 'text-sm/normal',
                                                            'aria-hidden': !0,
                                                            children: d.username
                                                        })
                                                      : null,
                                                  d.bot && (0, s.jsx)(c.Z, { verified: d.verifiedBot })
                                              ]
                                          }));
                                      break;
                                  case S.m$.USERS:
                                      (u = (l = b((d = p[i]))) in n || d.disabled),
                                          (h = d.disabled || R),
                                          (E = $ === S.m$.USERS && V === i),
                                          (t = (0, s.jsxs)('div', {
                                              className: T.rowBody,
                                              children: [
                                                  (0, s.jsx)(o.Avatar, {
                                                      src: d.avatarURL,
                                                      size: o.AvatarSizes.SIZE_24,
                                                      'aria-label': ''
                                                  }),
                                                  (0, s.jsxs)('div', {
                                                      className: T.rowLabel,
                                                      children: [
                                                          (0, s.jsx)(o.Text, {
                                                              variant: 'text-sm/normal',
                                                              children: d.name
                                                          }),
                                                          d.disabled && null != C
                                                              ? (0, s.jsx)(o.Text, {
                                                                    color: 'header-secondary',
                                                                    variant: 'text-xs/normal',
                                                                    children: C
                                                                })
                                                              : null
                                                      ]
                                                  })
                                              ]
                                          }));
                                      break;
                                  case S.m$.GUILDS:
                                      (u = (l = b((d = N[i]))) in n || d.disabled),
                                          (h = d.disabled || R),
                                          (E = $ === S.m$.GUILDS && V === i),
                                          (t = (0, s.jsxs)('div', {
                                              className: T.rowBody,
                                              children: [
                                                  (0, s.jsx)(m.Z, {
                                                      guild: d.guild,
                                                      active: !0,
                                                      size: m.Z.Sizes.SMALLER
                                                  }),
                                                  (0, s.jsx)('div', {
                                                      className: T.rowLabel,
                                                      children: (0, s.jsx)(o.Text, {
                                                          variant: 'text-sm/medium',
                                                          color: 'text-normal',
                                                          children: d.name
                                                      })
                                                  })
                                              ]
                                          }));
                              }
                              return null == d
                                  ? null
                                  : (0, s.jsx)(
                                        A,
                                        {
                                            id: 'user-row-'.concat(i),
                                            rowLabel: O ? null : x.zB(d.rowType),
                                            checked: u,
                                            disabled: h,
                                            onSelect: () => Y(d),
                                            showCheckbox: d.rowType !== S.aC.EMPTY_STATE,
                                            onMouseEnter: () => Q(a, i, !1),
                                            selected: E,
                                            'aria-posinset': i + 1,
                                            'aria-setsize': z.reduce((e, t) => e + t, 0),
                                            children: t
                                        },
                                        l
                                    );
                          },
                          rowHeight: 40,
                          renderSection: (e) => {
                              let { section: t } = e;
                              switch (t) {
                                  case S.m$.ROLES:
                                      return f(R.Z.Messages.ROLES);
                                  case S.m$.MEMBERS:
                                      return f(R.Z.Messages.MEMBERS);
                                  case S.m$.USERS:
                                      return f(R.Z.Messages.USERS);
                                  case S.m$.GUILDS:
                                      return f(R.Z.Messages.SERVERS);
                              }
                          },
                          sectionHeight: 32,
                          onScroll: K,
                          role: void 0,
                          innerRole: 'listbox',
                          innerId: g,
                          innerAriaMultiselectable: !0,
                          innerAriaOrientation: 'vertical'
                      })
                    : (0, s.jsxs)(d.Z, {
                          className: t,
                          align: d.Z.Align.CENTER,
                          justify: d.Z.Justify.CENTER,
                          direction: d.Z.Direction.VERTICAL,
                          children: [
                              (0, s.jsx)(h.Z, { className: T.noResultIcon }),
                              (0, s.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  children: _(a)
                              })
                          ]
                      })
            ]
        })
    );
}
