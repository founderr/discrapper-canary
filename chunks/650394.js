"use strict";
n.r(t), n("653041"), n("47120");
var a, s = n("735250"),
  i = n("470079"),
  l = n("685626"),
  r = n("788322"),
  o = n("59415");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d extends(a = i.PureComponent) {
  renderPlaceholders() {
    let {
      loadingPlaceholderCount: e
    } = this.props, t = [];
    for (let n = 0; n < e; n++) t.push((0, s.jsx)(r.DiscoverSearchResultPlaceholder, {}, n));
    return t
  }
  render() {
    let {
      guilds: e,
      loading: t
    } = this.props;
    return (0, s.jsx)(l.Spring, {
      from: {
        opacity: t ? 0 : 1
      },
      to: {
        opacity: 1
      },
      delay: 100,
      children: n => (0, s.jsx)(l.animated.div, {
        className: o.guildList,
        style: n,
        children: t || null == e ? this.renderPlaceholders() : e.map(this.renderGuild)
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "handleViewGuild", async e => {
      let {
        guilds: t,
        analyticsContext: n,
        onViewGuild: a
      } = this.props, s = t.findIndex(t => t.id === e);
      await a(e, s, n)
    }), u(this, "renderGuild", (e, t) => {
      let {
        theme: n,
        onTagClick: a
      } = this.props;
      return (0, s.jsx)(r.default, {
        guild: e,
        theme: n,
        onView: this.handleViewGuild,
        onTagClick: a
      }, t)
    })
  }
}
u(d, "defaultProps", {
  loadingPlaceholderCount: 12
}), t.default = d