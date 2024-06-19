s.r(l), s(47120), s(653041), s(724458);
var a = s(735250),
  n = s(470079),
  i = s(120356),
  o = s.n(i),
  t = s(149765),
  r = s(442837),
  d = s(481060),
  c = s(741361),
  u = s(911969),
  N = s(605436),
  O = s(430824),
  h = s(700785),
  _ = s(993259),
  R = s(689938),
  M = s(715564);

function v(e) {
  return l => null != l && !(0, N.pM)(e, l)
}
let S = (e, l, s) => {
    let a = h.Uu(s, l),
      [i, o] = n.useState(a);
    return {
      shouldEveryonePost: i,
      setShouldEveryonePost: o
    }
  },
  m = e => {
    let {
      rolesRow: l
    } = e;
    return (0, a.jsx)("div", {
      "aria-hidden": !0,
      className: M.roleCircle,
      style: {
        backgroundColor: null == l ? void 0 : l.colorString
      }
    })
  };
l.default = e => {
  let {
    guild: l,
    channel: s,
    permission: i,
    onClose: E,
    transitionState: p,
    currentSelectedRoles: I = []
  } = e, {
    shouldEveryonePost: x,
    setShouldEveryonePost: L
  } = S(l, s, i), A = n.useRef(null), C = function(e) {
    let l = (0, r.e7)([O.Z], () => O.Z.getRoles(e.id));
    return n.useMemo(() => (0, _.KV)(e, l).filter(l => v(e.id)(l.id)), [e, l])
  }(l), g = C.reduce((e, l) => (e.set(l.id, l), e), new Map), j = C.map(e => ({
    key: e.key,
    label: e.name,
    value: e.id
  })), [w, H] = n.useState(I.map(e => e.id).filter(v(l.id))), [f, B] = n.useState(!1), [D, y] = n.useState(!1), b = w.length > 0 || x, Z = function(e, l) {
    let s = (0, r.e7)([O.Z], () => O.Z.getRoles(e.id));
    return n.useCallback((a, n) => {
      let i = (0, _.KV)(e, s),
        o = new Set(n),
        r = {
          ...l.permissionOverwrites
        },
        d = [],
        O = [];
      return i.forEach(l => {
        var s, n, i, c, _, R, M, v, S, m;
        let E = l.id,
          p = o.has(E);
        p ? d.push({
          id: E,
          type: u.BN.ROLE,
          allow: p ? t.IH(null !== (c = null === (s = r[E]) || void 0 === s ? void 0 : s.allow) && void 0 !== c ? c : h.Hn, a) : t.Od(null !== (_ = null === (n = r[E]) || void 0 === n ? void 0 : n.allow) && void 0 !== _ ? _ : h.Hn, a),
          deny: t.Od(null !== (R = null === (i = r[E]) || void 0 === i ? void 0 : i.deny) && void 0 !== R ? R : h.Hn, a)
        }) : (0, N.pM)(e.id, E) ? d.push({
          id: E,
          type: u.BN.ROLE,
          allow: t.Od(null !== (S = null === (M = r[E]) || void 0 === M ? void 0 : M.allow) && void 0 !== S ? S : h.Hn, a),
          deny: t.IH(null !== (m = null === (v = r[E]) || void 0 === v ? void 0 : v.deny) && void 0 !== m ? m : h.Hn, a)
        }) : E in r && O.push(E)
      }, []), (0, c.kU)(l.id, d, O)
    }, [e, s, l])
  }(l, s), k = async () => {
    if (!b) return;
    B(!0), y(!1);
    let e = [...w];
    if (x) {
      let s = l.getEveryoneRoleId();
      e.push(s)
    }
    try {
      await Z(i, e), E()
    } catch (e) {
      y(!0)
    } finally {
      B(!1)
    }
  };
  return f ? (0, a.jsx)(d.Spinner, {}) : (0, a.jsxs)(d.ModalRoot, {
    transitionState: p,
    "aria-label": R.Z.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
    children: [(0, a.jsx)(d.ModalHeader, {
      separator: !1,
      className: M.modalHeader,
      children: (0, a.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: M.header,
        children: R.Z.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_TITLE
      })
    }), (0, a.jsx)(d.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: M.container,
        children: [(0, a.jsx)("div", {
          className: M.row,
          children: (0, a.jsx)("div", {
            ref: A,
            className: M.__invalid_roleSelectorContainer,
            children: (0, a.jsx)(d.FocusRingScope, {
              containerRef: A,
              children: (0, a.jsx)(d.SearchableSelect, {
                closeOnSelect: !1,
                className: M.roleSelector,
                maxVisibleItems: 5,
                placeholder: R.Z.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_ROLE_INPUT_PLACEHOLDER,
                multi: !0,
                value: w,
                options: j,
                onChange: e => {
                  H(e)
                },
                renderOptionPrefix: e => null != e ? (0, a.jsx)(m, {
                  rolesRow: g.get(e.value)
                }) : null
              })
            })
          })
        }), (0, a.jsxs)("div", {
          className: M.row,
          children: [(0, a.jsx)(d.FormSwitch, {
            value: x,
            hideBorder: !0,
            onChange: L,
            className: M.switchGroup,
            children: R.Z.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_LET_EVERYONE_POST
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: R.Z.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_DESCRIPTION.format()
          })]
        }), D ? (0, a.jsx)("div", {
          className: M.row,
          children: (0, a.jsx)(d.Text, {
            className: o()(M.row, M.error),
            variant: "text-sm/normal",
            children: R.Z.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_ERROR
          })
        }) : null]
      })
    }), (0, a.jsxs)(d.ModalFooter, {
      className: M.footer,
      children: [(0, a.jsx)(d.Button, {
        type: "submit",
        color: d.Button.Colors.BRAND,
        size: d.Button.Sizes.SMALL,
        className: M.button,
        onClick: k,
        disabled: !b,
        autoFocus: !0,
        children: R.Z.Messages.SAVE
      }), (0, a.jsx)(d.Button, {
        color: d.Button.Colors.PRIMARY,
        size: d.Button.Sizes.SMALL,
        className: M.button,
        onClick: E,
        children: R.Z.Messages.CANCEL
      })]
    })]
  })
}