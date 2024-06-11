"use strict";
a.r(t), a.d(t, {
  default: function() {
    return j
  }
}), a("47120");
var s = a("735250"),
  l = a("470079"),
  n = a("442837"),
  i = a("481060"),
  r = a("430824"),
  d = a("259580"),
  o = a("598952"),
  c = a("392739"),
  u = a("916001"),
  m = a("981631"),
  x = a("689938"),
  f = a("576142");
let h = "expanded-area";

function g(e) {
  let {
    attachments: t,
    role: a,
    roleLocked: n
  } = e, [r, m] = l.useState(!1);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(i.Clickable, {
      className: f.viewContents,
      onClick: () => {
        m(e => !e)
      },
      "aria-expanded": r,
      "aria-controls": h,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: r ? x.default.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS : x.default.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS
      }), (0, s.jsx)(d.default, {
        className: f.caretIcon,
        direction: r ? d.default.Directions.UP : d.default.Directions.DOWN
      })]
    }), (0, s.jsx)(i.Spacer, {
      size: 12
    }), r && (0, s.jsxs)("ul", {
      className: f.contentsContainer,
      id: h,
      children: [(0, s.jsx)(c.default, {
        label: x.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
        children: (0, s.jsx)("ul", {
          className: f.attachmentGrid,
          children: t.map(e => (0, s.jsx)(o.default, {
            attachment: e
          }, e.id))
        })
      }), null != a && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: f.separator
        }), (0, s.jsx)(c.default, {
          label: x.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
          children: (0, s.jsx)(u.default, {
            role: a,
            textVariant: "text-md/medium",
            locked: n
          })
        })]
      })]
    })]
  })
}

function j(e) {
  var t;
  let {
    listing: a
  } = e, l = null !== (t = a.attachments) && void 0 !== t ? t : [], i = (0, n.useStateFromStores)([r.default], () => {
    var e;
    return r.default.getRole(a.guild_id, null !== (e = a.role_id) && void 0 !== e ? e : m.EMPTY_STRING_SNOWFLAKE_ID)
  }), d = !a.has_entitlement;
  return 0 === l.length && null == i ? null : 0 === l.length && null != i ? (0, s.jsx)(u.default, {
    role: i,
    textVariant: "text-md/medium",
    locked: d
  }) : (0, s.jsx)(g, {
    attachments: l,
    role: i,
    roleLocked: d
  })
}