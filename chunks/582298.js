n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(430824),
  a = n(702346),
  r = n(646504),
  o = n(981631),
  c = n(689938),
  u = n(668883);

function d(e) {
  let t, {
      compact: d,
      isOwner: E,
      channel: _
    } = e,
    I = () => {
      let e = l.Z.getGuild(_.getGuildId());
      null != e && ((0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("7654"), n.e("1187"), n.e("1425")]).then(n.bind(n, 560114));
        return n => (0, s.jsx)(t, {
          ...n,
          guild: e,
          channel: _,
          source: o.t4x.INVITE_SYSTEM_MESSAGE
        })
      }), (0, r.w)())
    },
    T = (e, t) => (0, s.jsx)(i.Anchor, {
      className: u.inviteLink,
      onClick: I,
      children: e
    }, t);
  return t = d ? (0, s.jsx)("div", {
    className: u.inviteContent,
    children: E ? c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER_COMPACT.format({
      inviteHook: T
    }) : c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_COMPACT.format({
      inviteHook: T
    })
  }) : (0, s.jsxs)("div", {
    className: u.content,
    children: [(0, s.jsx)("div", {
      className: u.inviteHeader,
      children: E ? c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER : c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS
    }), (0, s.jsx)("div", {
      className: u.inviteContent,
      children: E ? c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION_OWNER : c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION
    }), (0, s.jsx)(i.Button, {
      onClick: I,
      size: i.Button.Sizes.SMALL,
      className: u.inviteButton,
      children: c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_BUTTON
    })]
  }), (0, s.jsx)(a.Z, {
    className: d ? u.compact : u.inviteContent,
    iconNode: d ? null : (0, s.jsx)("img", {
      alt: "",
      src: n(826926),
      width: 40,
      height: 40
    }),
    iconContainerClassName: u.iconContainer,
    compact: d,
    children: t
  })
}