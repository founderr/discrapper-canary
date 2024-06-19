t.d(l, {
  PM: function() {
    return V
  },
  WG: function() {
    return O
  },
  ZP: function() {
    return k
  }
}), t(47120);
var n, s, a, o, i, r, C = t(735250),
  c = t(470079),
  d = t(120356),
  u = t.n(d),
  E = t(658722),
  m = t.n(E),
  _ = t(442837),
  M = t(481060),
  h = t(461745),
  x = t(933557),
  T = t(471445),
  L = t(518738),
  H = t(439170),
  g = t(592125),
  A = t(430824),
  I = t(699516),
  N = t(594174),
  R = t(153124),
  p = t(176278),
  S = t(689938),
  Z = t(303828);
let j = (0, R.hQ)(),
  v = (0, R.hQ)(),
  f = "text-sm/medium";

function D(e) {
  return 1 === e.type
}

function b(e) {
  return 0 === e.type
}

function O(e) {
  let l = "".concat(e.name.includes(H.CR) ? "" : "@").concat(e.name);
  return {
    tag: {
      type: h.Fj.ROLE,
      label: l
    },
    row: {
      id: e.id,
      display: l,
      type: 1,
      record: e
    }
  }
}

function V(e) {
  let l = (0, x.F6)(e, N.default, I.Z);
  return {
    tag: {
      type: h.Fj.CHANNEL,
      label: l
    },
    row: {
      id: e.id,
      display: l,
      type: 0,
      record: e
    }
  }
}(o = n || (n = {}))[o.CHANNEL = 0] = "CHANNEL", o[o.ROLE = 1] = "ROLE";
let B = c.memo(function(e) {
  var l;
  let {
    row: t,
    guildId: n,
    className: s
  } = e, {
    id: a,
    name: o
  } = t.record, i = (0, L.p9)({
    guildId: n,
    roleId: a,
    size: 16
  }), r = (0, _.e7)([A.Z], () => A.Z.getRole(n, a)), c = o.includes(H.CR) ? "" : "@", d = (0, M.useToken)(M.tokens.unsafe_rawColors.PRIMARY_300).hsl(), E = null !== (l = null == r ? void 0 : r.colorString) && void 0 !== l ? l : d;
  return (0, C.jsxs)("div", {
    className: u()(Z.rowLabel, Z.roleTagContainer, s),
    children: [(0, C.jsx)(M.RoleDot, {
      className: Z.__invalid_roleDot,
      color: E,
      background: !1,
      tooltip: !1
    }), null != i ? (0, C.jsx)(p.Z, {
      className: Z.roleTagIcon,
      ...i,
      enableTooltip: !1
    }) : c, (0, C.jsx)(M.Text, {
      variant: f,
      className: Z.roleTagLabel,
      children: o
    })]
  })
});

function U(e) {
  let {
    channel: l,
    row: t,
    className: n
  } = e, s = null != l.parent_id, a = (0, T.KS)(l);
  return (0, C.jsxs)("div", {
    className: u()(Z.rowLabel, Z.channelLabel, {
      [Z.hasParent]: s
    }, n),
    children: [null != a && (0, C.jsx)(a, {
      size: "xs",
      color: "currentColor",
      className: Z.channelIcon
    }), (0, C.jsx)(M.Text, {
      variant: l.isCategory() ? "eyebrow" : f,
      children: t.display
    })]
  })
}

function F(e, l, t) {
  return D(e) ? (0, C.jsx)(B, {
    row: e,
    guildId: l,
    className: t
  }, e.record.id) : b(e) ? (0, C.jsx)(U, {
    row: e,
    channel: e.record,
    className: t
  }, e.record.id) : null
}

function k(e) {
  let {
    guildId: l,
    roleRows: t = [],
    channelRows: n = [],
    selectedChannelIds: s = new Set,
    selectedRoleIds: a = new Set,
    onChange: o,
    placeholder: i,
    helperText: r,
    className: d
  } = e, E = (0, _.e7)([A.Z], () => A.Z.getRoles(l)), x = c.useMemo(() => (function(e, l, t) {
    if (null == e) return {};
    let n = {};
    return e.forEach(e => {
      let l = g.Z.getChannel(e);
      null != l && (n[e] = V(l))
    }), l.forEach(e => {
      e in t && (n[e] = O(t[e]))
    }), n
  })(s, a, E), [s, a, E]), T = c.useMemo(() => Object.keys(x), [x]), [L, H] = c.useState(""), [I, N] = c.useState(!1), [R, p] = c.useState(!1), [f, B] = c.useState(!1), U = c.useRef(null), {
    sections: k,
    sectionCounts: w
  } = c.useMemo(() => {
    let e = "" !== L ? n.filter(e => m()(L, e.display.toLocaleLowerCase())) : n,
      l = "" !== L ? t.filter(e => m()(L, e.display.toLocaleLowerCase())) : t,
      s = [],
      a = [];
    return s[0] = e, a[0] = e.length, s[1] = l, a[1] = l.length, {
      sections: s,
      sectionCounts: a
    }
  }, [L, n, t]), y = c.useCallback(e => {
    let l = Object.values(e),
      t = l.filter(e => {
        let {
          row: l
        } = e;
        return b(l)
      }).map(e => e.row.record.id),
      n = l.filter(e => {
        let {
          row: l
        } = e;
        return D(l)
      }).map(e => e.row.record.id);
    o(new Set(t), new Set(n))
  }, [o]), P = () => {
    N(!1), p(!1)
  };
  c.useEffect(() => {
    let e = setTimeout(() => {
      B(I || R)
    }, 32);
    return () => {
      clearTimeout(e)
    }
  }, [I, R]);
  let Y = (e, l, t) => {
      t.stopPropagation(), t.preventDefault(), 2 === l ? N(e) : (1 === l || N(e), p(e))
    },
    G = c.useCallback(e => {
      let l = {
        ...x
      };
      b(e) ? l[e.id] = V(e.record) : D(e) && (l[e.id] = O(e.record)), y(l), H(""), P(), setTimeout(() => {
        var e;
        let l = null === (e = U.current) || void 0 === e ? void 0 : e.containerRef.current,
          t = null == l ? void 0 : l.firstChild;
        null != t && t.scrollTo({
          top: t.scrollHeight,
          behavior: "smooth"
        })
      }, 16)
    }, [y, x]),
    z = c.useCallback(e => {
      let {
        section: t,
        row: n
      } = e, s = k[t][n];
      return (0, C.jsx)(M.Clickable, {
        className: u()(Z.selectableSearchRow, Z.rowHeight),
        onClick: e => {
          e.stopPropagation(), G(s)
        },
        children: (0, C.jsx)("div", {
          className: Z.rowContainer,
          children: F(s, l, Z.searchRowLabel)
        })
      }, s.id)
    }, [l, G, k]),
    q = c.useMemo(() => T.map(e => {
      var t, n;
      return t = x[e], n = l, {
        ...t.tag,
        label: F(t.row, n, Z.noIndent)
      }
    }), [x, T, l]);
  return (0, C.jsxs)("div", {
    className: u()(Z.searchContainer, d),
    children: [(0, C.jsxs)("div", {
      className: Z.searchBox,
      children: [(0, C.jsx)(h.ZP, {
        tags: q,
        maxHeight: 98,
        size: h.ZP.Sizes.MEDIUM,
        query: L,
        ref: U,
        onRemoveTag: e => {
          let l = T[e],
            {
              [l]: t,
              ...n
            } = x;
          y(n), H(""), P()
        },
        onQueryChange: e => {
          H(e.trim().toLocaleLowerCase())
        },
        placeholder: null != i ? i : S.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_PLACEHOLDER,
        sections: [T.length],
        inputProps: {
          "aria-labelledby": j,
          "aria-controls": v,
          "aria-expanded": f,
          onFocus: e => Y(!0, 2, e),
          onBlur: e => Y(!1, 2, e)
        }
      }), f && (0, C.jsx)("div", {
        className: Z.resultsListParent,
        onFocus: e => Y(!0, 1, e),
        onBlur: e => Y(!1, 1, e),
        tabIndex: -1,
        children: (0, C.jsx)(M.ListAuto, {
          className: Z.resultsListContainer,
          innerClassName: Z.resultsList,
          sections: w,
          renderRow: z,
          rowHeight: 34,
          renderSection: e => {
            let {
              section: l
            } = e;
            return 0 === l ? (0, C.jsx)(M.FormTitle, {
              tag: "h5",
              className: u()(Z.sectionTitle, Z.sectionHeight),
              children: S.Z.Messages.CHANNELS
            }, S.Z.Messages.CHANNELS) : 1 === l ? (0, C.jsx)(M.FormTitle, {
              tag: "h5",
              className: u()(Z.sectionTitle, Z.sectionHeight),
              children: S.Z.Messages.ROLES
            }, S.Z.Messages.ROLES) : null
          },
          renderFooter: e => {
            let {
              section: l
            } = e;
            if (0 === l) return 0 === w[1] && w[0] > 0 ? null : (0, C.jsx)("div", {
              className: Z.sectionFooter,
              children: (0, C.jsx)(M.FormDivider, {})
            });
            return null
          },
          sectionHeight: 24,
          footerHeight: e => {
            if (0 === e) return 0 === w[1] && w[0] > 0 ? 0 : 32;
            return 0
          },
          role: void 0,
          innerRole: "listbox",
          innerId: v,
          innerAriaOrientation: "vertical"
        })
      })]
    }), null != r && (0, C.jsx)(M.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: Z.helperText,
      children: r
    })]
  })
}(i = s || (s = {}))[i.CHANNELS = 0] = "CHANNELS", i[i.ROLES = 1] = "ROLES", (r = a || (a = {}))[r.NONE = 0] = "NONE", r[r.LIST = 1] = "LIST", r[r.INPUT = 2] = "INPUT"