"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("392711"),
  o = l.n(n),
  i = l("442837"),
  r = l("481060"),
  d = l("48210"),
  u = l("605436"),
  C = l("430824"),
  c = l("496675"),
  m = l("689938"),
  E = l("700344");
t.default = e => {
  let {
    guild: t,
    transitionState: l,
    onClose: n
  } = e, [f, _] = s.useState(7), [M, h] = s.useState(null), [S, T] = s.useState([]), x = s.useCallback(async () => {
    h(null), h(await d.default.updateEstimate(t.id, f, S))
  }, [f, t.id, S]);
  s.useEffect(() => {
    x()
  }, [x]);
  let A = (0, i.useStateFromStoresArray)([c.default, C.default], () => {
    let e = c.default.getHighestRole(t);
    return o()(C.default.getRoles(t.id)).sortBy(e => e.position).filter(e => !(0, u.isEveryoneRoleId)(t.id, e.id)).filter(l => c.default.isRoleHigher(t, e, l)).value().map(e => {
      let {
        id: t,
        name: l
      } = e;
      return {
        label: l,
        value: t
      }
    })
  }, [t]);
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: l,
    children: [(0, a.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, a.jsxs)(r.Heading, {
        variant: "heading-lg/semibold",
        children: [m.default.Messages.PRUNE_MEMBERS, "—", null != t ? t.toString() : ""]
      })
    }), (0, a.jsxs)("div", {
      className: E.content,
      children: [(0, a.jsx)(r.FormItem, {
        title: m.default.Messages.FORM_LABEL_LAST_SEEN,
        children: (0, a.jsx)(r.RadioGroup, {
          value: f,
          options: [{
            name: m.default.Messages.LAST_SEEN.format({
              days: 7
            }),
            value: 7
          }, {
            name: m.default.Messages.LAST_SEEN.format({
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
          className: E.spacing
        })
      }), (0, a.jsx)(r.FormItem, {
        title: m.default.Messages.PRUNE_WITH_ROLES,
        children: (0, a.jsx)(r.SearchableSelect, {
          multi: !0,
          value: S,
          onChange: e => T(e),
          options: A
        })
      }), (0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: E.spacing,
        children: S.length > 0 ? m.default.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
          members: M,
          days: f
        }) : m.default.Messages.FORM_HELP_LAST_SEEN_1.format({
          members: M,
          days: f
        })
      })]
    }), (0, a.jsxs)(r.ModalFooter, {
      children: [(0, a.jsx)(r.Button, {
        onClick: () => {
          d.default.prune(t.id, f, S), n()
        },
        children: m.default.Messages.PRUNE
      }), (0, a.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        onClick: n,
        children: m.default.Messages.CANCEL
      })]
    })]
  })
}