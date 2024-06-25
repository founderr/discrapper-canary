n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250),
  i = n(470079),
  l = n(493683),
  a = n(239091),
  r = n(730749),
  o = n(430824);

function c(e) {
  return (0, r.Z)(class extends i.Component {
    render() {
      return (0, s.jsx)(e, {
        ...this.props,
        onMessageUser: this.handleMessageUser,
        onUserContextMenu: this.handleUserContextMenu,
        onGuildContextMenu: this.handleGuildContextMenu,
        onChannelContextMenu: this.handleChannelContextMenu
      })
    }
    handleMessageUser(e, t) {
      return l.Z.openPrivateChannel(t.id)
    }
    handleUserContextMenu(e, t, i) {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
        return n => (0, s.jsx)(e, {
          ...n,
          user: t
        })
      }, {
        onClose: i
      })
    }
    handleGuildContextMenu(e, t) {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("33053"), n.e("19464"), n.e("7654"), n.e("44156"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("33213")]).then(n.bind(n, 545135));
        return n => (0, s.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }
    handleChannelContextMenu(e, t) {
      let i = o.Z.getGuild(t.getGuildId());
      if (null == i) return null;
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await n.e("40283").then(n.bind(n, 428108));
        return n => (0, s.jsx)(e, {
          ...n,
          channel: t,
          guild: i
        })
      })
    }
  })
}