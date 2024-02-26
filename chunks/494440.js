"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
}), r("222007");
var o = r("37983"),
  a = r("884691"),
  n = r("917351"),
  l = r.n(n),
  s = r("446674"),
  i = r("77078"),
  u = r("351105"),
  d = r("581583"),
  c = r("454273"),
  p = r("957255"),
  h = r("414943"),
  v = r("782340"),
  g = r("418563"),
  f = e => {
    let {
      guild: t,
      transitionState: r,
      onClose: n
    } = e, [f, m] = a.useState(7), [b, E] = a.useState(null), [x, S] = a.useState([]), M = a.useCallback(async () => {
      E(null);
      let e = await u.default.updateEstimate(t.id, f, x);
      E(e)
    }, [f, t.id, x]);
    a.useEffect(() => {
      M()
    }, [M]);
    let R = (0, s.useStateFromStoresArray)([p.default], () => {
      let e = p.default.getHighestRole(t);
      return l(t.roles).sortBy(e => e.position).filter(e => !(0, c.isEveryoneRoleId)(t.id, e.id)).filter(r => p.default.isRoleHigher(t, e, r)).value().map(e => {
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
          children: [v.default.Messages.PRUNE_MEMBERS, "—", null != t ? t.toString() : ""]
        })
      }), (0, o.jsxs)("div", {
        className: g.content,
        children: [(0, o.jsx)(i.FormItem, {
          title: v.default.Messages.FORM_LABEL_LAST_SEEN,
          children: (0, o.jsx)(i.RadioGroup, {
            value: f,
            options: [{
              name: v.default.Messages.LAST_SEEN.format({
                days: 7
              }),
              value: 7
            }, {
              name: v.default.Messages.LAST_SEEN.format({
                days: 30
              }),
              value: 30
            }],
            onChange: e => {
              let {
                value: t
              } = e;
              m(t)
            },
            className: g.spacing
          })
        }), (0, o.jsx)(i.FormItem, {
          title: v.default.Messages.PRUNE_WITH_ROLES,
          children: (0, o.jsx)(h.default, {
            isMulti: !0,
            options: R,
            onChange: e => {
              S(e.map(e => e.value))
            },
            value: x,
            multiValueRenderer: e => {
              let {
                value: r
              } = e, a = t.getRole(r);
              if (null == a) return null;
              let n = x.indexOf(r);
              return (0, o.jsx)(d.MemberRole, {
                className: g.role,
                role: a,
                canRemove: !0,
                onRemove: () => {
                  S([...x.slice(0, n), ...x.slice(n + 1)])
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
          className: g.spacing,
          children: x.length > 0 ? v.default.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
            members: b,
            days: f
          }) : v.default.Messages.FORM_HELP_LAST_SEEN_1.format({
            members: b,
            days: f
          })
        })]
      }), (0, o.jsxs)(i.ModalFooter, {
        children: [(0, o.jsx)(i.Button, {
          onClick: () => {
            u.default.prune(t.id, f, x), n()
          },
          children: v.default.Messages.PRUNE
        }), (0, o.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: n,
          children: v.default.Messages.CANCEL
        })]
      })]
    })
  }