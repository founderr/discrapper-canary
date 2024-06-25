var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(239091),
  r = n(129861),
  o = n(285952),
  c = n(52700);
class u extends i.PureComponent {
  handleContextMenu(e, t) {
    (0, a.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
      return n => (0, s.jsx)(e, {
        ...n,
        user: t
      })
    })
  }
  renderUser(e) {
    return null == e ? null : (0, s.jsxs)(o.Z, {
      className: c.user,
      align: o.Z.Align.CENTER,
      onContextMenu: t => {
        null != e && this.handleContextMenu(t, e)
      },
      children: [(0, s.jsx)(l.Avatar, {
        src: e.getAvatarURL(void 0, 24),
        "aria-label": e.username,
        size: l.AvatarSizes.SIZE_24,
        className: c.avatar
      }), (0, s.jsx)(r.Z, {
        user: e,
        className: c.tag,
        usernameClass: c.username,
        discriminatorClass: c.discriminator
      })]
    }, e.id)
  }
  render() {
    let {
      party: e,
      header: t
    } = this.props, n = e.map(e => this.renderUser(e));
    return (0, s.jsxs)("div", {
      className: c.userList,
      children: [(0, s.jsx)("div", {
        className: c.header,
        children: t
      }), (0, s.jsx)(l.ScrollerThin, {
        className: c.content,
        fade: !0,
        children: n
      })]
    })
  }
}
t.Z = u