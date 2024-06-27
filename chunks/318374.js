"use strict";
n.d(t, {
  Z: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(481060),
  _ = n(239091),
  c = n(321148),
  d = n(51144),
  E = n(706730);

function I(e) {
  let {
    className: t,
    avatarClassName: s,
    maxUsers: a,
    users: I,
    guildId: T,
    onFocus: h,
    size: f = u.AvatarSizes.SIZE_24,
    hideOverflowCount: S = !1,
    disableUsernameTooltip: A = !1
  } = e, [N, m] = r.useState(!1);

  function O() {
    return (0, i.jsx)(u.Dialog, {
      className: E.popoutWrapper,
      children: (0, i.jsx)(u.Scroller, {
        className: E.scroller,
        children: I.map(e => (0, i.jsx)(c.Z, {
          guildId: T,
          user: e,
          nick: d.ZP.getName(e),
          onContextMenu: t => (0, _.jW)(t, async () => {
            let {
              default: t
            } = await Promise.all([n.e("79695"), n.e("17400"), n.e("75578")]).then(n.bind(n, 881351));
            return n => (0, i.jsx)(t, {
              ...n,
              user: e
            })
          }, {
            onClose: () => m(!1)
          })
        }, e.id))
      })
    })
  }
  return I.length <= 0 ? null : (0, i.jsx)("div", {
    className: o()(t, E.avatars),
    children: function() {
      let e = l()(I).take(a).map(e => {
          let t = d.ZP.getName(e);
          return A ? (0, i.jsx)("div", {
            className: o()(E.avatar, s),
            children: (0, i.jsx)(u.Avatar, {
              src: e.getAvatarURL(T, 24),
              "aria-label": t,
              size: f
            })
          }) : (0, i.jsx)(u.TooltipContainer, {
            text: t,
            className: o()(E.avatar, s),
            children: (0, i.jsx)(u.Avatar, {
              src: e.getAvatarURL(T, 24),
              "aria-label": t,
              size: f
            })
          }, e.id)
        }).value(),
        t = I.length - a;
      return t > 0 && !S && (e[e.length - 1] = (0, i.jsx)(u.Popout, {
        renderPopout: O,
        shouldShow: N,
        position: "bottom",
        onRequestClose: () => m(!1),
        children: () => (0, i.jsxs)(u.Button, {
          className: o()(E.avatar, E.overflow),
          onFocus: h,
          onClick: () => m(!0),
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          children: ["+", t + 1]
        })
      }, "overflow")), e
    }()
  })
}