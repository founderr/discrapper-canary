t.d(a, {
  Z: function() {
    return g
  }
}), t(47120);
var s = t(735250),
  n = t(470079),
  r = t(442837),
  i = t(481060),
  l = t(430824),
  o = t(259580),
  c = t(598952),
  d = t(392739),
  u = t(916001),
  x = t(981631),
  m = t(689938),
  h = t(815490);
let _ = "expanded-area";

function j(e) {
  let {
    attachments: a,
    role: t,
    roleLocked: r
  } = e, [l, x] = n.useState(!1);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(i.Clickable, {
      className: h.viewContents,
      onClick: () => {
        x(e => !e)
      },
      "aria-expanded": l,
      "aria-controls": _,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: l ? m.Z.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS : m.Z.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS
      }), (0, s.jsx)(o.Z, {
        className: h.caretIcon,
        direction: l ? o.Z.Directions.UP : o.Z.Directions.DOWN
      })]
    }), (0, s.jsx)(i.Spacer, {
      size: 12
    }), l && (0, s.jsxs)("ul", {
      className: h.contentsContainer,
      id: _,
      children: [(0, s.jsx)(d.Z, {
        label: m.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
        children: (0, s.jsx)("ul", {
          className: h.attachmentGrid,
          children: a.map(e => (0, s.jsx)(c.Z, {
            attachment: e
          }, e.id))
        })
      }), null != t && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: h.separator
        }), (0, s.jsx)(d.Z, {
          label: m.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
          children: (0, s.jsx)(u.Z, {
            role: t,
            textVariant: "text-md/medium",
            locked: r
          })
        })]
      })]
    })]
  })
}

function g(e) {
  var a;
  let {
    listing: t
  } = e, n = null !== (a = t.attachments) && void 0 !== a ? a : [], i = (0, r.e7)([l.Z], () => {
    var e;
    return l.Z.getRole(t.guild_id, null !== (e = t.role_id) && void 0 !== e ? e : x.lds)
  }), o = !t.has_entitlement;
  return 0 === n.length && null == i ? null : 0 === n.length && null != i ? (0, s.jsx)(u.Z, {
    role: i,
    textVariant: "text-md/medium",
    locked: o
  }) : (0, s.jsx)(j, {
    attachments: n,
    role: i,
    roleLocked: o
  })
}