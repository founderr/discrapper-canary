"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("917351"),
  s = n.n(o),
  u = n("77078"),
  c = n("272030"),
  d = n("427302"),
  f = n("158998"),
  E = n("393724");

function _(e) {
  let {
    className: t,
    maxUsers: r,
    users: o,
    guildId: _,
    onFocus: S
  } = e, [p, I] = l.useState(!1);

  function T() {
    return (0, i.jsx)(u.Dialog, {
      className: E.popoutWrapper,
      children: (0, i.jsx)(u.Scroller, {
        className: E.scroller,
        children: o.map(e => (0, i.jsx)(d.default, {
          guildId: _,
          user: e,
          nick: f.default.getName(e),
          onContextMenu: t => (0, c.openContextMenuLazy)(t, async () => {
            let {
              default: t
            } = await n.el("406784").then(n.bind(n, "406784"));
            return n => (0, i.jsx)(t, {
              ...n,
              user: e
            })
          }, {
            onClose: () => I(!1)
          })
        }, e.id))
      })
    })
  }
  return o.length <= 0 ? null : (0, i.jsx)("div", {
    className: a(t, E.avatars),
    children: function() {
      let e = s(o).take(r).map(e => {
          let t = f.default.getName(e);
          return (0, i.jsx)(u.TooltipContainer, {
            text: t,
            className: E.avatar,
            children: (0, i.jsx)(u.Avatar, {
              src: e.getAvatarURL(_, 24),
              "aria-label": t,
              size: u.AvatarSizes.SIZE_24
            })
          }, e.id)
        }).value(),
        t = o.length - r;
      return t > 0 && (e[e.length - 1] = (0, i.jsx)(u.Popout, {
        renderPopout: T,
        shouldShow: p,
        position: "bottom",
        onRequestClose: () => I(!1),
        children: () => (0, i.jsxs)(u.Button, {
          className: a(E.avatar, E.overflow),
          onFocus: S,
          onClick: () => I(!0),
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          children: ["+", t + 1]
        })
      }, "overflow")), e
    }()
  })
}