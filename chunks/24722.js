s.r(t), s.d(t, {
  AddRoleMembersModalContent: function() {
    return B
  },
  default: function() {
    return S
  }
}), s(47120);
var o = s(735250),
  a = s(470079),
  l = s(866442),
  r = s(442837),
  n = s(481060),
  i = s(461745),
  d = s(185413),
  c = s(971628),
  u = s(285952),
  m = s(892880),
  M = s(51144),
  R = s(480608),
  E = s(434404),
  C = s(946724),
  h = s(130341),
  x = s(981631),
  b = s(71080),
  g = s(377668),
  L = s(689938),
  k = s(486839);

function B(e) {
  var t;
  let {
    onClose: s,
    roleId: B,
    guildId: S,
    onBack: v,
    isCreateRoleFlow: A,
    focusSearchAfterReady: j,
    isReady: _
  } = e, f = (0, r.e7)([C.Z], () => C.Z.getRole(B), [B]), [p, T] = a.useState(""), [I, N] = a.useState({}), [Z, y] = a.useState(!1);
  a.useEffect(() => {
    m.Z.requestMembers(S, p.trim().toLowerCase(), h._4)
  }, [S, p]);
  let D = a.useCallback(e => !e.roles.includes(B), [B]),
    O = (0, h.lJ)(S, D),
    w = a.useMemo(() => O.filter(e => (0, h.eg)(p, e)), [p, O]);
  w = w.filter(e => e.id !== g.fL);
  let z = a.useCallback(async () => {
      let e = Object.values(I).map(e => e.row.id);
      y(!0);
      try {
        await E.Z.bulkAddMemberRoles(S, B, e), (0, R.H)(S, B, !1), s()
      } catch (e) {
        y(!1)
      }
    }, [S, B, I, s]),
    U = a.useCallback(e => {
      N(t => {
        let s = {
            ...t
          },
          o = (0, c.G)(e);
        return o in s ? (delete s[o], s) : (s[o] = {
          display: {
            type: i.Fj.MEMBER,
            label: e.name,
            avatar: e.avatarURL
          },
          row: e
        }, s)
      })
    }, []),
    P = a.useCallback(e => {
      N(t => {
        let {
          [e]: s, ...o
        } = t;
        return o
      })
    }, []),
    H = a.useMemo(() => w.map(e => {
      var t;
      let s = M.ZP.getUserTag(e.user);
      return {
        rowType: b.aC.MEMBER,
        name: null !== (t = e.name) && void 0 !== t ? t : s,
        nickname: e.name,
        username: s,
        id: e.id,
        avatarURL: e.avatarURL,
        bot: e.bot,
        verifiedBot: e.verifiedBot,
        disabled: !1,
        key: e.id
      }
    }), [w]);
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsxs)(n.ModalHeader, {
      className: k.header,
      separator: !1,
      direction: u.Z.Direction.VERTICAL,
      children: [(0, o.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        children: L.Z.Messages.ROLE_ADD_MEMBERS_TITLE
      }), A ? (0, o.jsx)(n.Text, {
        className: k.subtitle,
        color: "text-normal",
        variant: "text-md/normal",
        children: L.Z.Messages.ROLE_CREATE_ADD_MEMBERS_SUBTITLE
      }) : (0, o.jsxs)("div", {
        className: k.roleContainer,
        children: [(0, o.jsx)(n.ShieldUserIcon, {
          size: "xs",
          color: null !== (t = null == f ? void 0 : f.colorString) && void 0 !== t ? t : (0, l.Rf)(x.p6O)
        }), (0, o.jsx)(n.Text, {
          className: k.roleName,
          color: "text-normal",
          variant: "text-md/normal",
          children: null == f ? void 0 : f.name
        })]
      })]
    }), (0, o.jsx)(d.MemberRoleSelector, {
      listClassName: k.list,
      pendingAdditions: I,
      query: p,
      onQueryChange: T,
      onClickRow: U,
      onRemovePendingAddition: P,
      roles: [],
      members: H,
      placeholderText: L.Z.Messages.ROLE_ADD_MEMBERS_SEARCH,
      renderEmptyText: e => L.Z.Messages.ROLE_EDIT_MEMBERS_NO_RESULTS.format({
        query: e
      }),
      focusSearchAfterReady: j,
      isReady: _
    }), (0, o.jsxs)(n.ModalFooter, {
      className: k.footer,
      children: [(0, o.jsxs)("div", {
        className: k.buttonsRight,
        children: [A && 0 === Object.keys(I).length ? (0, o.jsx)(n.Button, {
          onClick: s,
          color: n.Button.Colors.PRIMARY,
          children: L.Z.Messages.ROLE_CREATION_SKIP
        }) : (0, o.jsx)(n.Button, {
          onClick: z,
          submitting: Z,
          children: L.Z.Messages.ADD
        }), !A && (0, o.jsx)(n.Button, {
          look: n.Button.Looks.LINK,
          color: n.Button.Colors.PRIMARY,
          size: n.Button.Sizes.SMALL,
          onClick: s,
          children: L.Z.Messages.CANCEL
        })]
      }), null != v && (0, o.jsx)(n.Button, {
        color: n.Button.Colors.PRIMARY,
        look: n.Button.Looks.LINK,
        size: n.Button.Sizes.TINY,
        onClick: v,
        className: k.backButton,
        children: L.Z.Messages.BACK
      })]
    })]
  })
}

function S(e) {
  let {
    transitionState: t,
    onClose: s,
    roleId: a,
    guildId: l
  } = e;
  return (0, o.jsx)(n.ModalRoot, {
    transitionState: t,
    size: n.ModalSize.SMALL,
    children: (0, o.jsx)(B, {
      onClose: s,
      roleId: a,
      guildId: l
    })
  })
}