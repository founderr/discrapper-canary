n.d(t, {
  G: function() {
    return C
  },
  Z: function() {
    return _
  }
}), n(47120), n(724458);
var a = n(735250),
  l = n(470079),
  s = n(120356),
  r = n.n(s),
  i = n(91192),
  o = n(481060),
  d = n(631969),
  c = n(467679),
  u = n(285952),
  m = n(346656),
  h = n(153124),
  S = n(605436),
  T = n(537383),
  x = n(71080),
  g = n(689938),
  v = n(992944);
let f = (0, h.hQ)(),
  E = (0, h.hQ)();

function C(e) {
  return "".concat(e.rowType, ":").concat(e.id)
}

function b(e) {
  return (0, a.jsx)(o.FormTitle, {
    tag: "h5",
    className: r()(v.sectionTitle, v.rowHeight),
    children: e
  }, e)
}

function R(e) {
  let {
    id: t,
    children: n,
    rowLabel: l,
    checked: s,
    onSelect: d,
    disabled: c,
    showCheckbox: m,
    selected: h,
    onMouseEnter: S,
    "aria-posinset": T,
    "aria-setsize": x
  } = e, g = (0, i.JA)(t);
  return (0, a.jsx)(o.Clickable, {
    ...g,
    id: t,
    className: r()(v.addMemberRow, {
      [v.selectedRow]: h
    }),
    onClick: e => {
      !c && (e.preventDefault(), d())
    },
    onMouseEnter: S,
    role: "option",
    "aria-disabled": c,
    "aria-selected": s,
    "aria-setsize": x,
    "aria-posinset": T,
    children: (0, a.jsxs)(u.Z, {
      justify: u.Z.Justify.BETWEEN,
      align: u.Z.Align.CENTER,
      children: [m ? (0, a.jsx)(o.Checkbox, {
        displayOnly: !0,
        size: 18,
        value: s,
        type: o.Checkbox.Types.INVERTED,
        disabled: c,
        children: (0, a.jsx)("div", {
          className: v.checkboxLabel,
          children: n
        })
      }) : n, null != l ? (0, a.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-xs/normal",
        children: l
      }) : null]
    })
  })
}

function _(e) {
  let {
    listClassName: t,
    pendingAdditions: n,
    query: s,
    onQueryChange: i,
    onClickRow: h,
    onRemovePendingAddition: _,
    roles: I = [],
    members: M = [],
    users: A = [],
    guilds: p = [],
    placeholderText: N,
    disabledText: Z,
    hintText: j,
    searchTitleText: U,
    renderEmptyText: D,
    focusSearchAfterReady: L,
    isReady: y,
    maxCount: w,
    hideRowLabel: O = !1
  } = e, G = l.useRef(null), B = l.useRef(null), k = [I.length, M.length, A.length, p.length], [P, F] = l.useState(!1), [z, H] = l.useState(0), [$, K] = l.useState(-1);
  l.useEffect(() => {
    var e;
    null === (e = G.current) || void 0 === e || e.focus()
  }, []);
  let Q = l.useCallback(function(e, t) {
      let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
      if (H(e), K(t), n) {
        var a;
        null === (a = B.current) || void 0 === a || a.scrollToIndex({
          section: null != e ? e : 0,
          row: null != t ? t : 0,
          padding: 8
        })
      }
    }, []),
    W = l.useCallback((e, t) => {
      if (null == t) return;
      i("");
      let n = (e === x.m$.ROLES ? I : [])[t];
      n.rowType !== x.aC.EMPTY_STATE && h(n)
    }, [I, h, i]),
    q = l.useCallback(e => {
      var t;
      if (null != e && e.rowType !== x.aC.EMPTY_STATE) h(e), i(""), null === (t = G.current) || void 0 === t || t.focus()
    }, [h, i]),
    V = l.useMemo(() => Object.keys(n), [n]),
    Y = l.useMemo(() => M.some(e => !e.disabled) || I.some(e => !e.disabled) || A.some(e => !e.disabled) || p.some(e => !e.disabled), [M, I, A, p]) || "" === s.trim();

  function J() {
    var e;
    F(!(null === (e = B.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && Y)
  }
  return l.useEffect(() => {
    J()
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: r()(v.searchBox, {
        [v.scrollSeparator]: P
      }),
      children: [null != U && (0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: U
      }), (0, a.jsx)(T.Z, {
        ref: G,
        query: s,
        onQueryChange: i,
        selectedSection: z,
        selectedRow: $,
        onSelectionChange: Q,
        onSelect: W,
        tags: V.map(e => n[e].display),
        sections: k,
        onRemoveTag: function(e) {
          _(V[e])
        },
        placeholder: N,
        focusAfterReady: L,
        isReady: y,
        "aria-labelledby": f,
        "aria-controls": E
      }), null != j ? (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: j
      }) : null]
    }), Y ? (0, a.jsx)(o.List, {
      ref: B,
      className: r()(v.roleMemberList, t),
      sections: k,
      renderRow: e => {
        let t, l, {
            section: s,
            row: i
          } = e,
          d = null,
          u = !1,
          h = !1,
          T = !1,
          g = null != w && Object.keys(n).length >= w;
        switch (s) {
          case x.m$.ROLES:
            u = (l = C(d = I[i])) in n || d.disabled, h = d.disabled || g, T = z === x.m$.ROLES && $ === i, t = (0, a.jsxs)("div", {
              className: v.rowBody,
              children: [(0, a.jsx)("div", {
                className: r()(v.rowHeight, v.alignCenter),
                children: (0, a.jsx)(o.ShieldUserIcon, {
                  size: "custom",
                  color: d.colorString,
                  height: 20
                })
              }), (0, a.jsxs)("div", {
                className: v.rowLabel,
                children: [(0, a.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  className: v.__invalid_rowTitle,
                  color: d.rowType === x.aC.EMPTY_STATE ? "text-muted" : "text-normal",
                  children: d.name
                }), d.disabled && null != Z ? (0, a.jsx)(o.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: Z
                }) : null]
              })]
            });
            break;
          case x.m$.MEMBERS:
            u = (l = C(d = M[i])) in n || d.disabled, h = d.disabled || g, T = z === x.m$.MEMBERS && $ === i, t = (0, a.jsxs)("div", {
              className: v.rowBody,
              children: [(0, a.jsx)(o.Avatar, {
                src: d.avatarURL,
                size: o.AvatarSizes.SIZE_24,
                "aria-label": ""
              }), (0, a.jsx)(o.Text, {
                className: v.rowLabel,
                variant: "text-sm/normal",
                children: d.name
              }), null != d.nickname ? (0, a.jsx)(o.Text, {
                color: "text-muted",
                className: v.rowLabelSubText,
                variant: "text-sm/normal",
                "aria-hidden": !0,
                children: d.username
              }) : null, d.bot && (0, a.jsx)(c.Z, {
                verified: d.verifiedBot
              })]
            });
            break;
          case x.m$.USERS:
            u = (l = C(d = A[i])) in n || d.disabled, h = d.disabled || g, T = z === x.m$.USERS && $ === i, t = (0, a.jsxs)("div", {
              className: v.rowBody,
              children: [(0, a.jsx)(o.Avatar, {
                src: d.avatarURL,
                size: o.AvatarSizes.SIZE_24,
                "aria-label": ""
              }), (0, a.jsxs)("div", {
                className: v.rowLabel,
                children: [(0, a.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: d.name
                }), d.disabled && null != Z ? (0, a.jsx)(o.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: Z
                }) : null]
              })]
            });
            break;
          case x.m$.GUILDS:
            u = (l = C(d = p[i])) in n || d.disabled, h = d.disabled || g, T = z === x.m$.GUILDS && $ === i, t = (0, a.jsxs)("div", {
              className: v.rowBody,
              children: [(0, a.jsx)(m.Z, {
                guild: d.guild,
                active: !0,
                size: m.Z.Sizes.SMALLER
              }), (0, a.jsx)("div", {
                className: v.rowLabel,
                children: (0, a.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children: d.name
                })
              })]
            })
        }
        return null == d ? null : (0, a.jsx)(R, {
          id: "user-row-".concat(i),
          rowLabel: O ? null : S.zB(d.rowType),
          checked: u,
          disabled: h,
          onSelect: () => q(d),
          showCheckbox: d.rowType !== x.aC.EMPTY_STATE,
          onMouseEnter: () => Q(s, i, !1),
          selected: T,
          "aria-posinset": i + 1,
          "aria-setsize": k.reduce((e, t) => e + t, 0),
          children: t
        }, l)
      },
      rowHeight: 40,
      renderSection: e => {
        let {
          section: t
        } = e;
        switch (t) {
          case x.m$.ROLES:
            return b(g.Z.Messages.ROLES);
          case x.m$.MEMBERS:
            return b(g.Z.Messages.MEMBERS);
          case x.m$.USERS:
            return b(g.Z.Messages.USERS);
          case x.m$.GUILDS:
            return b(g.Z.Messages.SERVERS)
        }
      },
      sectionHeight: 32,
      onScroll: J,
      role: void 0,
      innerRole: "listbox",
      innerId: E,
      innerAriaMultiselectable: !0,
      innerAriaOrientation: "vertical"
    }) : (0, a.jsxs)(u.Z, {
      className: t,
      align: u.Z.Align.CENTER,
      justify: u.Z.Justify.CENTER,
      direction: u.Z.Direction.VERTICAL,
      children: [(0, a.jsx)(d.Z, {
        className: v.noResultIcon
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: D(s)
      })]
    })]
  })
}