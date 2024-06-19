t(47120);
var n = t(735250),
  s = t(470079),
  a = t(392711),
  o = t.n(a),
  i = t(442837),
  r = t(481060),
  C = t(48210),
  c = t(605436),
  d = t(430824),
  u = t(496675),
  E = t(689938),
  m = t(627249);
l.Z = e => {
  let {
    guild: l,
    transitionState: t,
    onClose: a
  } = e, [_, M] = s.useState(7), [h, x] = s.useState(null), [T, L] = s.useState([]), H = s.useCallback(async () => {
    x(null), x(await C.Z.updateEstimate(l.id, _, T))
  }, [_, l.id, T]);
  s.useEffect(() => {
    H()
  }, [H]);
  let g = (0, i.Wu)([u.Z, d.Z], () => {
    let e = u.Z.getHighestRole(l);
    return o()(d.Z.getRoles(l.id)).sortBy(e => e.position).filter(e => !(0, c.pM)(l.id, e.id)).filter(t => u.Z.isRoleHigher(l, e, t)).value().map(e => {
      let {
        id: l,
        name: t
      } = e;
      return {
        label: t,
        value: l
      }
    })
  }, [l]);
  return (0, n.jsxs)(r.ModalRoot, {
    transitionState: t,
    children: [(0, n.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, n.jsxs)(r.Heading, {
        variant: "heading-lg/semibold",
        children: [E.Z.Messages.PRUNE_MEMBERS, "—", null != l ? l.toString() : ""]
      })
    }), (0, n.jsxs)("div", {
      className: m.content,
      children: [(0, n.jsx)(r.FormItem, {
        title: E.Z.Messages.FORM_LABEL_LAST_SEEN,
        children: (0, n.jsx)(r.RadioGroup, {
          value: _,
          options: [{
            name: E.Z.Messages.LAST_SEEN.format({
              days: 7
            }),
            value: 7
          }, {
            name: E.Z.Messages.LAST_SEEN.format({
              days: 30
            }),
            value: 30
          }],
          onChange: e => {
            let {
              value: l
            } = e;
            M(l)
          },
          className: m.spacing
        })
      }), (0, n.jsx)(r.FormItem, {
        title: E.Z.Messages.PRUNE_WITH_ROLES,
        children: (0, n.jsx)(r.SearchableSelect, {
          multi: !0,
          value: T,
          onChange: e => L(e),
          options: g
        })
      }), (0, n.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: m.spacing,
        children: T.length > 0 ? E.Z.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
          members: h,
          days: _
        }) : E.Z.Messages.FORM_HELP_LAST_SEEN_1.format({
          members: h,
          days: _
        })
      })]
    }), (0, n.jsxs)(r.ModalFooter, {
      children: [(0, n.jsx)(r.Button, {
        onClick: () => {
          C.Z.prune(l.id, _, T), a()
        },
        children: E.Z.Messages.PRUNE
      }), (0, n.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        onClick: a,
        children: E.Z.Messages.CANCEL
      })]
    })]
  })
}