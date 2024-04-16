"use strict";
a.r(t), a("653041"), a("47120");
var n, s = a("735250"),
  l = a("470079"),
  i = a("718017"),
  r = a("788322"),
  o = a("613776");

function u(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class d extends(n = l.PureComponent) {
  renderPlaceholders() {
    let {
      loadingPlaceholderCount: e
    } = this.props, t = [];
    for (let a = 0; a < e; a++) t.push((0, s.jsx)(r.DiscoverSearchResultPlaceholder, {}, a));
    return t
  }
  render() {
    let {
      guilds: e,
      loading: t
    } = this.props;
    return (0, s.jsx)(i.Spring, {
      from: {
        opacity: t ? 0 : 1
      },
      to: {
        opacity: 1
      },
      delay: 100,
      children: a => (0, s.jsx)(i.animated.div, {
        className: o.guildList,
        style: a,
        children: t || null == e ? this.renderPlaceholders() : e.map(this.renderGuild)
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "handleViewGuild", async e => {
      let {
        guilds: t,
        analyticsContext: a,
        onViewGuild: n
      } = this.props, s = t.findIndex(t => t.id === e);
      await n(e, s, a)
    }), u(this, "renderGuild", (e, t) => {
      let {
        theme: a,
        onTagClick: n
      } = this.props;
      return (0, s.jsx)(r.default, {
        guild: e,
        theme: a,
        onView: this.handleViewGuild,
        onTagClick: n
      }, t)
    })
  }
}
u(d, "defaultProps", {
  loadingPlaceholderCount: 12
}), t.default = d