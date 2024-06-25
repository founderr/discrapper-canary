n(653041), n(47120);
var s, i = n(735250),
  l = n(470079),
  a = n(920906),
  r = n(788322),
  o = n(461455);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends(s = l.PureComponent) {
  renderPlaceholders() {
    let {
      loadingPlaceholderCount: e
    } = this.props, t = [];
    for (let n = 0; n < e; n++) t.push((0, i.jsx)(r.Y, {}, n));
    return t
  }
  render() {
    let {
      guilds: e,
      loading: t
    } = this.props;
    return (0, i.jsx)(a.Spring, {
      from: {
        opacity: t ? 0 : 1
      },
      to: {
        opacity: 1
      },
      delay: 100,
      children: n => (0, i.jsx)(a.animated.div, {
        className: o.guildList,
        style: n,
        children: t || null == e ? this.renderPlaceholders() : e.map(this.renderGuild)
      })
    })
  }
  constructor(...e) {
    super(...e), c(this, "handleViewGuild", async e => {
      let {
        guilds: t,
        analyticsContext: n,
        onViewGuild: s
      } = this.props, i = t.findIndex(t => t.id === e);
      await s(e, i, n)
    }), c(this, "renderGuild", (e, t) => {
      let {
        theme: n,
        onTagClick: s
      } = this.props;
      return (0, i.jsx)(r.Z, {
        guild: e,
        theme: n,
        onView: this.handleViewGuild,
        onTagClick: s
      }, t)
    })
  }
}
c(u, "defaultProps", {
  loadingPlaceholderCount: 12
}), t.Z = u