"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  o = s("392711"),
  r = s.n(o),
  d = s("442837"),
  n = s("481060"),
  u = s("48210"),
  i = s("605436"),
  c = s("430824"),
  E = s("496675"),
  f = s("689938"),
  m = s("700344");
t.default = e => {
  let {
    guild: t,
    transitionState: s,
    onClose: o
  } = e, [p, _] = l.useState(7), [g, h] = l.useState(null), [S, R] = l.useState([]), M = l.useCallback(async () => {
    h(null), h(await u.default.updateEstimate(t.id, p, S))
  }, [p, t.id, S]);
  l.useEffect(() => {
    M()
  }, [M]);
  let L = (0, d.useStateFromStoresArray)([E.default, c.default], () => {
    let e = E.default.getHighestRole(t);
    return r()(c.default.getRoles(t.id)).sortBy(e => e.position).filter(e => !(0, i.isEveryoneRoleId)(t.id, e.id)).filter(s => E.default.isRoleHigher(t, e, s)).value().map(e => {
      let {
        id: t,
        name: s
      } = e;
      return {
        label: s,
        value: t
      }
    })
  }, [t]);
  return (0, a.jsxs)(n.ModalRoot, {
    transitionState: s,
    children: [(0, a.jsx)(n.ModalHeader, {
      separator: !1,
      children: (0, a.jsxs)(n.Heading, {
        variant: "heading-lg/semibold",
        children: [f.default.Messages.PRUNE_MEMBERS, "—", null != t ? t.toString() : ""]
      })
    }), (0, a.jsxs)("div", {
      className: m.content,
      children: [(0, a.jsx)(n.FormItem, {
        title: f.default.Messages.FORM_LABEL_LAST_SEEN,
        children: (0, a.jsx)(n.RadioGroup, {
          value: p,
          options: [{
            name: f.default.Messages.LAST_SEEN.format({
              days: 7
            }),
            value: 7
          }, {
            name: f.default.Messages.LAST_SEEN.format({
              days: 30
            }),
            value: 30
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            _(t)
          },
          className: m.spacing
        })
      }), (0, a.jsx)(n.FormItem, {
        title: f.default.Messages.PRUNE_WITH_ROLES,
        children: (0, a.jsx)(n.SearchableSelect, {
          multi: !0,
          value: S,
          onChange: e => R(e),
          options: L
        })
      }), (0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        className: m.spacing,
        children: S.length > 0 ? f.default.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
          members: g,
          days: p
        }) : f.default.Messages.FORM_HELP_LAST_SEEN_1.format({
          members: g,
          days: p
        })
      })]
    }), (0, a.jsxs)(n.ModalFooter, {
      children: [(0, a.jsx)(n.Button, {
        onClick: () => {
          u.default.prune(t.id, p, S), o()
        },
        children: f.default.Messages.PRUNE
      }), (0, a.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.PRIMARY,
        onClick: o,
        children: f.default.Messages.CANCEL
      })]
    })]
  })
}