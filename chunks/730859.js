"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  a = n.n(l),
  s = n("917351"),
  o = n.n(s),
  u = n("77078"),
  c = n("272030"),
  d = n("427302"),
  f = n("158998"),
  E = n("393724");

function _(e) {
  let {
    className: t,
    maxUsers: l,
    users: s,
    guildId: _,
    onFocus: S
  } = e, [h, p] = r.useState(!1);

  function I() {
    return (0, i.jsx)(u.Dialog, {
      className: E.popoutWrapper,
      children: (0, i.jsx)(u.Scroller, {
        className: E.scroller,
        children: s.map(e => (0, i.jsx)(d.default, {
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
            onClose: () => p(!1)
          })
        }, e.id))
      })
    })
  }
  return s.length <= 0 ? null : (0, i.jsx)("div", {
    className: a(t, E.avatars),
    children: function() {
      let e = o(s).take(l).map(e => {
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
        t = s.length - l;
      return t > 0 && (e[e.length - 1] = (0, i.jsx)(u.Popout, {
        renderPopout: I,
        shouldShow: h,
        position: "bottom",
        onRequestClose: () => p(!1),
        children: () => (0, i.jsxs)(u.Button, {
          className: a(E.avatar, E.overflow),
          onFocus: S,
          onClick: () => p(!0),
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          children: ["+", t + 1]
        })
      }, "overflow")), e
    }()
  })
}