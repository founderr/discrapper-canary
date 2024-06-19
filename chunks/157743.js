a.r(s), a.d(s, {
  default: function() {
    return d
  }
});
var n = a(735250);
a(470079);
var r = a(481060),
  i = a(918125),
  c = a(488131),
  o = a(124368),
  l = a(689938),
  t = a(956108);

function d(e) {
  let {
    guildId: s,
    onClose: a,
    transitionState: d
  } = e;
  return (0, n.jsx)(r.ModalRoot, {
    className: t.modal,
    transitionState: d,
    "aria-label": l.Z.Messages.THREADS,
    size: r.ModalSize.DYNAMIC,
    children: (0, n.jsxs)("div", {
      className: t.container,
      children: [(0, n.jsxs)("div", {
        className: t.header,
        children: [(0, n.jsx)(r.ThreadIcon, {
          size: "md",
          color: "currentColor",
          className: t.threadIcon
        }), (0, n.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: t.__invalid_title,
          children: l.Z.Messages.ALL_ACTIVE_THREADS
        }), (0, n.jsx)("div", {
          className: t.spacer
        }), (0, n.jsx)(r.Clickable, {
          className: t.closeIcon,
          onClick: a,
          "aria-label": l.Z.Messages.CLOSE,
          children: (0, n.jsx)(r.CloseSmallIcon, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, n.jsx)(i.Z, {
        guildId: s,
        goToThread: (e, s) => {
          a(), (0, c.ok)(e, !s, o.on.GUILD_ACTIVE_THREADS_MODAL)
        }
      })]
    })
  })
}