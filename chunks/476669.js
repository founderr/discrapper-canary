"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("239091"),
  r = a("129861"),
  o = a("285952"),
  u = a("156480");
class d extends s.PureComponent {
  handleContextMenu(e, t) {
    (0, i.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("79695"), a.e("1502"), a.e("64409")]).then(a.bind(a, "881351"));
      return a => (0, n.jsx)(e, {
        ...a,
        user: t
      })
    })
  }
  renderUser(e) {
    return null == e ? null : (0, n.jsxs)(o.default, {
      className: u.user,
      align: o.default.Align.CENTER,
      onContextMenu: t => {
        null != e && this.handleContextMenu(t, e)
      },
      children: [(0, n.jsx)(l.Avatar, {
        src: e.getAvatarURL(void 0, 24),
        "aria-label": e.username,
        size: l.AvatarSizes.SIZE_24,
        className: u.avatar
      }), (0, n.jsx)(r.default, {
        user: e,
        className: u.tag,
        usernameClass: u.username,
        discriminatorClass: u.discriminator
      })]
    }, e.id)
  }
  render() {
    let {
      party: e,
      header: t
    } = this.props, a = e.map(e => this.renderUser(e));
    return (0, n.jsxs)("div", {
      className: u.userList,
      children: [(0, n.jsx)("div", {
        className: u.header,
        children: t
      }), (0, n.jsx)(l.ScrollerThin, {
        className: u.content,
        fade: !0,
        children: a
      })]
    })
  }
}
t.default = d