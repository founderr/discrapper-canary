n(653041), n(47120);
var i, s = n(735250),
  a = n(470079),
  r = n(338545),
  l = n(481060),
  o = n(788322),
  c = n(745322);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class u extends(i = a.PureComponent) {
  renderPlaceholders() {
let {
  loadingPlaceholderCount: e
} = this.props, t = [];
for (let n = 0; n < e; n++)
  t.push((0, s.jsx)(o.Y, {}, n));
return t;
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
  shouldAnimate: 'animate-always',
  children: n => (0, s.jsx)(r.animated.div, {
    className: c.guildList,
    style: n,
    children: t || null == e ? this.renderPlaceholders() : e.map(this.renderGuild)
  })
});
  }
  constructor(...e) {
super(...e), d(this, 'handleViewGuild', async e => {
  let {
    guilds: t,
    analyticsContext: n,
    onViewGuild: i
  } = this.props, s = t.findIndex(t => t.id === e);
  await i(e, s, n);
}), d(this, 'renderGuild', (e, t) => {
  let {
    theme: n,
    onTagClick: i
  } = this.props;
  return (0, s.jsx)(o.Z, {
    guild: e,
    theme: n,
    onView: this.handleViewGuild,
    onTagClick: i
  }, t);
});
  }
}
d(u, 'defaultProps', {
  loadingPlaceholderCount: 12
}), t.Z = u;