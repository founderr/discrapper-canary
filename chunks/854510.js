n.r(s), n.d(s, {
  default: function() {
    return d
  }
});
var r = n(735250);
n(470079);
var a = n(481060),
  l = n(153124),
  o = n(930180),
  t = n(582019),
  i = n(689938),
  c = n(750267);

function d(e) {
  let {
    channel: s,
    onAccept: n,
    transitionState: d,
    onClose: u,
    ...x
  } = e, E = (0, l.Dt)(), h = (0, o.z)(s.id);
  return (0, r.jsxs)(a.ModalRoot, {
    transitionState: d,
    "aria-labelledby": E,
    ...x,
    size: a.ModalSize.SMALL,
    children: [(0, r.jsxs)(a.ModalHeader, {
      className: c.header,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: i.Z.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
          number: h.length
        })
      }), (0, r.jsx)(a.Text, {
        color: "header-secondary",
        className: c.description,
        variant: "text-sm/normal",
        children: i.Z.Messages.STAGE_BLOCKED_USERS_BODY.format({
          number: h.length
        })
      })]
    }), (0, r.jsx)(a.ModalContent, {
      className: c.content,
      children: h.map(e => {
        let {
          user: n,
          id: a,
          speaker: l
        } = e;
        return (0, r.jsx)(t.Xd, {
          user: n,
          speaker: l,
          showStatus: !0,
          channelId: s.id
        }, a)
      })
    }), (0, r.jsxs)(a.ModalFooter, {
      className: c.footer,
      children: [(0, r.jsx)(a.Button, {
        onClick: () => {
          n(s), u()
        },
        color: a.Button.Colors.BRAND,
        children: i.Z.Messages.STAGE_BLOCKED_USERS_ACCEPT
      }), (0, r.jsx)(a.Button, {
        onClick: () => {
          u()
        },
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.LINK,
        children: i.Z.Messages.STAGE_BLOCKED_USERS_CANCEL
      })]
    })]
  })
}