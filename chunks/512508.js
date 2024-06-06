"use strict";
l.r(t), l.d(t, {
  channelToPendingAddition: function() {
    return V
  },
  default: function() {
    return w
  },
  roleToPendingAddition: function() {
    return B
  }
}), l("47120");
var a, s, n, o, i, r, d = l("735250"),
  u = l("470079"),
  C = l("120356"),
  c = l.n(C),
  m = l("658722"),
  E = l.n(m),
  f = l("442837"),
  _ = l("481060"),
  M = l("461745"),
  h = l("933557"),
  S = l("471445"),
  T = l("518738"),
  x = l("439170"),
  A = l("592125"),
  p = l("430824"),
  g = l("699516"),
  L = l("594174"),
  N = l("153124"),
  H = l("176278"),
  R = l("689938"),
  I = l("93459");
let j = (0, N.uid)(),
  v = (0, N.uid)(),
  D = "text-sm/medium";

function b(e) {
  return 1 === e.type
}

function O(e) {
  return 0 === e.type
}

function B(e) {
  let t = "".concat(e.name.includes(x.EVERYONE_ID) ? "" : "@").concat(e.name);
  return {
    tag: {
      type: M.RichTagTypes.ROLE,
      label: t
    },
    row: {
      id: e.id,
      display: t,
      type: 1,
      record: e
    }
  }
}

function V(e) {
  let t = (0, h.computeChannelName)(e, L.default, g.default);
  return {
    tag: {
      type: M.RichTagTypes.CHANNEL,
      label: t
    },
    row: {
      id: e.id,
      display: t,
      type: 0,
      record: e
    }
  }
}(o = a || (a = {}))[o.CHANNEL = 0] = "CHANNEL", o[o.ROLE = 1] = "ROLE";
let F = u.memo(function(e) {
  var t;
  let {
    row: l,
    guildId: a,
    className: s
  } = e, {
    id: n,
    name: o
  } = l.record, i = (0, T.useRoleIcon)({
    guildId: a,
    roleId: n,
    size: 16
  }), r = (0, f.useStateFromStores)([p.default], () => p.default.getRole(a, n)), u = o.includes(x.EVERYONE_ID) ? "" : "@", C = (0, _.useToken)(_.tokens.unsafe_rawColors.PRIMARY_300).hsl(), m = null !== (t = null == r ? void 0 : r.colorString) && void 0 !== t ? t : C;
  return (0, d.jsxs)("div", {
    className: c()(I.rowLabel, I.roleTagContainer, s),
    children: [(0, d.jsx)(_.RoleDot, {
      className: I.__invalid_roleDot,
      color: m,
      background: !1,
      tooltip: !1
    }), null != i ? (0, d.jsx)(H.default, {
      className: I.roleTagIcon,
      ...i,
      enableTooltip: !1
    }) : u, (0, d.jsx)(_.Text, {
      variant: D,
      className: I.roleTagLabel,
      children: o
    })]
  })
});

function y(e) {
  let {
    channel: t,
    row: l,
    className: a
  } = e, s = null != t.parent_id, n = (0, S.getChannelIconComponent)(t);
  return (0, d.jsxs)("div", {
    className: c()(I.rowLabel, I.channelLabel, {
      [I.hasParent]: s
    }, a),
    children: [null != n && (0, d.jsx)(n, {
      width: 16,
      height: 16,
      className: I.channelIcon
    }), (0, d.jsx)(_.Text, {
      variant: t.isCategory() ? "eyebrow" : D,
      children: l.display
    })]
  })
}

function U(e, t, l) {
  return b(e) ? (0, d.jsx)(F, {
    row: e,
    guildId: t,
    className: l
  }, e.record.id) : O(e) ? (0, d.jsx)(y, {
    row: e,
    channel: e.record,
    className: l
  }, e.record.id) : null
}

function w(e) {
  let {
    guildId: t,
    roleRows: l = [],
    channelRows: a = [],
    selectedChannelIds: s = new Set,
    selectedRoleIds: n = new Set,
    onChange: o,
    placeholder: i,
    helperText: r,
    className: C
  } = e, m = (0, f.useStateFromStores)([p.default], () => p.default.getRoles(t)), h = u.useMemo(() => (function(e, t, l) {
    if (null == e) return {};
    let a = {};
    return e.forEach(e => {
      let t = A.default.getChannel(e);
      null != t && (a[e] = V(t))
    }), t.forEach(e => {
      e in l && (a[e] = B(l[e]))
    }), a
  })(s, n, m), [s, n, m]), S = u.useMemo(() => Object.keys(h), [h]), [T, x] = u.useState(""), [g, L] = u.useState(!1), [N, H] = u.useState(!1), [D, F] = u.useState(!1), y = u.useRef(null), {
    sections: w,
    sectionCounts: k
  } = u.useMemo(() => {
    let e = "" !== T ? a.filter(e => E()(T, e.display.toLocaleLowerCase())) : a,
      t = "" !== T ? l.filter(e => E()(T, e.display.toLocaleLowerCase())) : l,
      s = [],
      n = [];
    return s[0] = e, n[0] = e.length, s[1] = t, n[1] = t.length, {
      sections: s,
      sectionCounts: n
    }
  }, [T, a, l]), P = u.useCallback(e => {
    let t = Object.values(e),
      l = t.filter(e => {
        let {
          row: t
        } = e;
        return O(t)
      }).map(e => e.row.record.id),
      a = t.filter(e => {
        let {
          row: t
        } = e;
        return b(t)
      }).map(e => e.row.record.id);
    o(new Set(l), new Set(a))
  }, [o]), Z = () => {
    L(!1), H(!1)
  };
  u.useEffect(() => {
    let e = setTimeout(() => {
      F(g || N)
    }, 32);
    return () => {
      clearTimeout(e)
    }
  }, [g, N]);
  let Y = (e, t, l) => {
      l.stopPropagation(), l.preventDefault(), 2 === t ? L(e) : (1 === t || L(e), H(e))
    },
    G = u.useCallback(e => {
      let t = {
        ...h
      };
      O(e) ? t[e.id] = V(e.record) : b(e) && (t[e.id] = B(e.record)), P(t), x(""), Z(), setTimeout(() => {
        var e;
        let t = null === (e = y.current) || void 0 === e ? void 0 : e.containerRef.current,
          l = null == t ? void 0 : t.firstChild;
        null != l && l.scrollTo({
          top: l.scrollHeight,
          behavior: "smooth"
        })
      }, 16)
    }, [P, h]),
    J = u.useCallback(e => {
      let {
        section: l,
        row: a
      } = e, s = w[l][a];
      return (0, d.jsx)(_.Clickable, {
        className: c()(I.selectableSearchRow, I.rowHeight),
        onClick: e => {
          e.stopPropagation(), G(s)
        },
        children: (0, d.jsx)("div", {
          className: I.rowContainer,
          children: U(s, t, I.searchRowLabel)
        })
      }, s.id)
    }, [t, G, w]),
    q = u.useMemo(() => S.map(e => {
      var l, a;
      return l = h[e], a = t, {
        ...l.tag,
        label: U(l.row, a, I.noIndent)
      }
    }), [h, S, t]);
  return (0, d.jsxs)("div", {
    className: c()(I.searchContainer, C),
    children: [(0, d.jsxs)("div", {
      className: I.searchBox,
      children: [(0, d.jsx)(M.default, {
        tags: q,
        maxHeight: 98,
        size: M.default.Sizes.MEDIUM,
        query: T,
        ref: y,
        onRemoveTag: e => {
          let t = S[e],
            {
              [t]: l,
              ...a
            } = h;
          P(a), x(""), Z()
        },
        onQueryChange: e => {
          x(e.trim().toLocaleLowerCase())
        },
        placeholder: null != i ? i : R.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_PLACEHOLDER,
        sections: [S.length],
        inputProps: {
          "aria-labelledby": j,
          "aria-controls": v,
          "aria-expanded": D,
          onFocus: e => Y(!0, 2, e),
          onBlur: e => Y(!1, 2, e)
        }
      }), D && (0, d.jsx)("div", {
        className: I.resultsListParent,
        onFocus: e => Y(!0, 1, e),
        onBlur: e => Y(!1, 1, e),
        tabIndex: -1,
        children: (0, d.jsx)(_.ListAuto, {
          className: I.resultsListContainer,
          innerClassName: I.resultsList,
          sections: k,
          renderRow: J,
          rowHeight: 34,
          renderSection: e => {
            let {
              section: t
            } = e;
            return 0 === t ? (0, d.jsx)(_.FormTitle, {
              tag: "h5",
              className: c()(I.sectionTitle, I.sectionHeight),
              children: R.default.Messages.CHANNELS
            }, R.default.Messages.CHANNELS) : 1 === t ? (0, d.jsx)(_.FormTitle, {
              tag: "h5",
              className: c()(I.sectionTitle, I.sectionHeight),
              children: R.default.Messages.ROLES
            }, R.default.Messages.ROLES) : null
          },
          renderFooter: e => {
            let {
              section: t
            } = e;
            if (0 === t) return 0 === k[1] && k[0] > 0 ? null : (0, d.jsx)("div", {
              className: I.sectionFooter,
              children: (0, d.jsx)(_.FormDivider, {})
            });
            return null
          },
          sectionHeight: 24,
          footerHeight: e => {
            if (0 === e) return 0 === k[1] && k[0] > 0 ? 0 : 32;
            return 0
          },
          role: void 0,
          innerRole: "listbox",
          innerId: v,
          innerAriaOrientation: "vertical"
        })
      })]
    }), null != r && (0, d.jsx)(_.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: I.helperText,
      children: r
    })]
  })
}(i = s || (s = {}))[i.CHANNELS = 0] = "CHANNELS", i[i.ROLES = 1] = "ROLES", (r = n || (n = {}))[r.NONE = 0] = "NONE", r[r.LIST = 1] = "LIST", r[r.INPUT = 2] = "INPUT"