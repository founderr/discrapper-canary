n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(392711),
  l = n.n(o),
  u = n(481060),
  c = n(239091),
  d = n(321148),
  _ = n(51144),
  E = n(277242);

function f(e) {
  let {
className: t,
avatarClassName: a,
maxUsers: o,
users: f,
guildId: h,
onFocus: p,
size: m = u.AvatarSizes.SIZE_24,
hideOverflowCount: I = !1,
disableUsernameTooltip: T = !1
  } = e, [g, S] = i.useState(!1);

  function A() {
return (0, r.jsx)(u.Dialog, {
  className: E.popoutWrapper,
  children: (0, r.jsx)(u.Scroller, {
    className: E.scroller,
    children: f.map(e => (0, r.jsx)(d.Z, {
      guildId: h,
      user: e,
      nick: _.ZP.getName(e),
      onContextMenu: t => (0, c.jW)(t, async () => {
        let {
          default: t
        } = await Promise.all([
          n.e('79695'),
          n.e('69220'),
          n.e('3295')
        ]).then(n.bind(n, 881351));
        return n => (0, r.jsx)(t, {
          ...n,
          user: e
        });
      }, {
        onClose: () => S(!1)
      })
    }, e.id))
  })
});
  }
  return f.length <= 0 ? null : (0, r.jsx)('div', {
className: s()(t, E.avatars),
children: function() {
  let e = l()(f).take(o).map(e => {
      let t = _.ZP.getName(e);
      return T ? (0, r.jsx)('div', {
        className: s()(E.avatar, a),
        children: (0, r.jsx)(u.Avatar, {
          src: e.getAvatarURL(h, 24),
          'aria-label': t,
          size: m
        })
      }) : (0, r.jsx)(u.TooltipContainer, {
        text: t,
        className: s()(E.avatar, a),
        children: (0, r.jsx)(u.Avatar, {
          src: e.getAvatarURL(h, 24),
          'aria-label': t,
          size: m
        })
      }, e.id);
    }).value(),
    t = f.length - o;
  return t > 0 && !I && (e[e.length - 1] = (0, r.jsx)(u.Popout, {
    renderPopout: A,
    shouldShow: g,
    position: 'bottom',
    onRequestClose: () => S(!1),
    children: () => (0, r.jsxs)(u.Button, {
      className: s()(E.avatar, E.overflow),
      onFocus: p,
      onClick: () => S(!0),
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      children: [
        '+',
        t + 1
      ]
    })
  }, 'overflow')), e;
}()
  });
}