"use strict";
r.r(t), r("47120");
var o = r("735250"),
  a = r("470079"),
  n = r("392711"),
  l = r.n(n),
  s = r("442837"),
  i = r("481060"),
  u = r("48210"),
  d = r("412899"),
  c = r("605436"),
  p = r("430824"),
  h = r("496675"),
  v = r("987134"),
  g = r("689938"),
  f = r("700344");
t.default = e => {
  let {
    guild: t,
    transitionState: r,
    onClose: n
  } = e, [m, b] = a.useState(7), [E, x] = a.useState(null), [S, R] = a.useState([]), M = a.useCallback(async () => {
    x(null), x(await u.default.updateEstimate(t.id, m, S))
  }, [m, t.id, S]);
  a.useEffect(() => {
    M()
  }, [M]);
  let _ = (0, s.useStateFromStoresArray)([h.default, p.default], () => {
    let e = h.default.getHighestRole(t);
    return l()(p.default.getRoles(t.id)).sortBy(e => e.position).filter(e => !(0, c.isEveryoneRoleId)(t.id, e.id)).filter(r => h.default.isRoleHigher(t, e, r)).value().map(e => {
      let {
        id: t,
        name: r
      } = e;
      return {
        label: r,
        value: t
      }
    })
  }, [t]);
  return (0, o.jsxs)(i.ModalRoot, {
    transitionState: r,
    children: [(0, o.jsx)(i.ModalHeader, {
      separator: !1,
      children: (0, o.jsxs)(i.Heading, {
        variant: "heading-lg/semibold",
        children: [g.default.Messages.PRUNE_MEMBERS, "—", null != t ? t.toString() : ""]
      })
    }), (0, o.jsxs)("div", {
      className: f.content,
      children: [(0, o.jsx)(i.FormItem, {
        title: g.default.Messages.FORM_LABEL_LAST_SEEN,
        children: (0, o.jsx)(i.RadioGroup, {
          value: m,
          options: [{
            name: g.default.Messages.LAST_SEEN.format({
              days: 7
            }),
            value: 7
          }, {
            name: g.default.Messages.LAST_SEEN.format({
              days: 30
            }),
            value: 30
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            b(t)
          },
          className: f.spacing
        })
      }), (0, o.jsx)(i.FormItem, {
        title: g.default.Messages.PRUNE_WITH_ROLES,
        children: (0, o.jsx)(v.default, {
          isMulti: !0,
          options: _,
          onChange: e => {
            R(e.map(e => e.value))
          },
          value: S,
          multiValueRenderer: e => {
            let {
              value: r
            } = e, a = p.default.getRole(t.id, r);
            if (null == a) return null;
            let n = S.indexOf(r);
            return (0, o.jsx)(d.MemberRole, {
              className: f.role,
              role: a,
              canRemove: !0,
              onRemove: () => {
                R([...S.slice(0, n), ...S.slice(n + 1)])
              },
              onMouseDown: e => {
                e.stopPropagation(), e.preventDefault()
              },
              guildId: t.id
            })
          },
          maxMenuHeight: 200
        })
      }), (0, o.jsx)(i.FormText, {
        type: i.FormText.Types.DESCRIPTION,
        className: f.spacing,
        children: S.length > 0 ? g.default.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
          members: E,
          days: m
        }) : g.default.Messages.FORM_HELP_LAST_SEEN_1.format({
          members: E,
          days: m
        })
      })]
    }), (0, o.jsxs)(i.ModalFooter, {
      children: [(0, o.jsx)(i.Button, {
        onClick: () => {
          u.default.prune(t.id, m, S), n()
        },
        children: g.default.Messages.PRUNE
      }), (0, o.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: n,
        children: g.default.Messages.CANCEL
      })]
    })]
  })
}