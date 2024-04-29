"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("493683"),
  i = a("239091"),
  r = a("730749"),
  o = a("430824");

function u(e) {
  return (0, r.default)(class extends s.Component {
    render() {
      return (0, n.jsx)(e, {
        ...this.props,
        onMessageUser: this.handleMessageUser,
        onUserContextMenu: this.handleUserContextMenu,
        onGuildContextMenu: this.handleGuildContextMenu,
        onChannelContextMenu: this.handleChannelContextMenu
      })
    }
    handleMessageUser(e, t) {
      return l.default.openPrivateChannel(t.id)
    }
    handleUserContextMenu(e, t, s) {
      (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("79695"), a.e("1502"), a.e("64409")]).then(a.bind(a, "881351"));
        return a => (0, n.jsx)(e, {
          ...a,
          user: t
        })
      }, {
        onClose: s
      })
    }
    handleGuildContextMenu(e, t) {
      (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("96427"), a.e("33053"), a.e("49146"), a.e("75475"), a.e("85093"), a.e("85552"), a.e("58227"), a.e("43502"), a.e("69760"), a.e("33213")]).then(a.bind(a, "545135"));
        return a => (0, n.jsx)(e, {
          ...a,
          guild: t
        })
      })
    }
    handleChannelContextMenu(e, t) {
      let s = o.default.getGuild(t.getGuildId());
      if (null == s) return null;
      (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await a.e("40283").then(a.bind(a, "428108"));
        return a => (0, n.jsx)(e, {
          ...a,
          channel: t,
          guild: s
        })
      })
    }
  })
}