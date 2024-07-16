n(47120);
var i, s = n(735250),
  a = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(622535),
  c = n(481060),
  d = n(239091),
  u = n(372769),
  _ = n(134432),
  E = n(695346),
  h = n(806519),
  I = n(768581),
  m = n(900849),
  g = n(556017),
  p = n(879484),
  T = n(26580),
  S = n(206887),
  f = n(981631),
  C = n(689938),
  N = n(806315),
  A = n(129512),
  v = n(330065),
  Z = n(755386);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class O extends(i = a.PureComponent) {
  getDefaultSplashURL(e, t) {
if (t)
  return Z;
switch (e) {
  case f.BRd.DARK:
    return A;
  case f.BRd.LIGHT:
    return v;
}
  }
  render() {
var e;
let {
  guild: t,
  className: n,
  theme: i,
  onTagClick: a
} = this.props, {
  loaded: r,
  hasBeenSeen: d,
  isVisible: A,
  submitting: v
} = this.state, {
  name: Z,
  description: L,
  presenceCount: O,
  memberCount: R,
  keywords: x
} = t, b = null === (e = t.features) || void 0 === e ? void 0 : e.has(f.oNc.HUB), P = I.ZP.getGuildDiscoverySplashURL({
  id: t.id,
  splash: t.discoverySplash,
  size: 300 * (0, _.x_)()
}), M = null != P ? P : this.getDefaultSplashURL(i, b), D = I.ZP.getGuildIconURL({
  id: t.id,
  icon: t.icon,
  size: 40
});
p.w.trackExposure({
  location: 'de1ef6_1'
});
let {
  shouldDisplayTags: y
} = p.w.getCurrentConfig({
  location: 'de1ef6_2'
}, {
  autoTrackExposure: !1
}), {
  canSeeInAppReportingButtons: j
} = g.N.getCurrentConfig({
  location: 'de1ef6_3'
}, {
  autoTrackExposure: !1
});
g.N.trackExposure({
  location: 'de1ef6_4'
});
let U = E.Sb.getSetting();
return (0, s.jsx)(o.$, {
  active: !A,
  onChange: this.setIsVisible,
  threshold: 0.1,
  children: A ? (0, s.jsx)(o.$, {
    onChange: this.handleVisibilityChange,
    active: !d,
    threshold: 0.55,
    children: (0, s.jsxs)('div', {
      className: l()(n, {
        [N.loaded]: r,
        [N.loading]: !r
      }),
      children: [
        v ? (0, s.jsx)(c.Spinner, {
          type: c.Spinner.Type.PULSING_ELLIPSIS,
          className: N.spinner
        }) : null,
        (0, s.jsxs)(c.Clickable, {
          onClick: this.handleClickView,
          className: l()(N.card, {
            [N.submitting]: v,
            [N.cardWithTags]: y
          }),
          onContextMenu: this.handleContextMenu,
          children: [
            (0, s.jsxs)('div', {
              className: N.cardHeader,
              children: [
                (0, s.jsx)('div', {
                  className: N.splash,
                  children: (0, s.jsx)('img', {
                    src: M,
                    alt: '',
                    className: l()(N.splashImage, {
                      [N.splashImageHeight]: !b
                    }),
                    onLoad: () => this.setState({
                      loaded: !0
                    })
                  })
                }),
                U || j ? (0, s.jsx)('div', {
                  className: N.actionButtons,
                  children: (0, s.jsx)(S.Z, {
                    guild: t
                  })
                }) : null,
                (0, s.jsx)('div', {
                  className: N.guildIcon,
                  children: (0, s.jsx)(h.ZP, {
                    mask: h.ZP.Masks.SQUIRCLE,
                    width: 48,
                    height: 48,
                    children: (0, s.jsx)('div', {
                      className: N.iconMask,
                      children: (0, s.jsx)(h.ZP, {
                        mask: h.ZP.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, s.jsx)('img', {
                          src: D,
                          alt: '',
                          className: N.avatar
                        })
                      })
                    })
                  })
                })
              ]
            }),
            (0, s.jsxs)('div', {
              className: N.guildInfo,
              children: [
                (0, s.jsxs)('div', {
                  className: N.title,
                  children: [
                    (0, s.jsx)(u.Z, {
                      className: N.guildBadge,
                      guild: t,
                      tooltipColor: c.Tooltip.Colors.PRIMARY
                    }),
                    (0, s.jsx)(c.Heading, {
                      variant: 'heading-md/semibold',
                      className: N.guildName,
                      children: Z
                    })
                  ]
                }),
                (0, s.jsx)(c.Text, {
                  className: N.description,
                  variant: 'text-sm/normal',
                  color: 'header-secondary',
                  children: L
                }),
                y && null != x && null != a && (0, s.jsx)(T.F, {
                  tags: x,
                  onTagClick: e => a(e, t.id),
                  guildId: t.id,
                  section: m.P1.POPULAR
                }),
                (0, s.jsxs)('div', {
                  className: N.memberInfo,
                  children: [
                    null != O && (0, s.jsxs)('div', {
                      className: N.memberCount,
                      children: [
                        (0, s.jsx)('div', {
                          className: N.dotOnline
                        }),
                        (0, s.jsx)(c.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: C.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                            membersOnline: O
                          })
                        })
                      ]
                    }),
                    null != R && (0, s.jsxs)('div', {
                      className: N.memberCount,
                      children: [
                        (0, s.jsx)('div', {
                          className: N.dotOffline
                        }),
                        (0, s.jsx)(c.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: C.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                            count: R
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  }) : (0, s.jsx)('div', {
    className: l()(N.card, {
      [N.cardWithTags]: y
    })
  })
});
  }
  constructor(...e) {
super(...e), L(this, 'state', {
  loaded: !1,
  hasBeenSeen: !1,
  isVisible: !1,
  submitting: !1
}), L(this, 'handleClickView', async e => {
  let {
    className: t
  } = e.target;
  if (t.includes('Menu'))
    return;
  let {
    onView: n,
    guild: i
  } = this.props;
  e.stopPropagation(), this.setState({
    submitting: !0
  });
  try {
    null != n && await n(i.id);
  } finally {
    this.setState({
      submitting: !1
    });
  }
}), L(this, 'handleVisibilityChange', e => {
  let {
    onGuildCardSeen: t,
    guild: n
  } = this.props;
  null != n && !this.state.hasBeenSeen && e && (this.setState({
    hasBeenSeen: e
  }), null != t && t(n.id));
}), L(this, 'handleContextMenu', e => {
  (0, d.jW)(e, async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 455839));
    return t => (0, s.jsx)(e, {
      ...t,
      guild: this.props.guild
    });
  });
}), L(this, 'setIsVisible', e => {
  this.setState({
    isVisible: e
  });
});
  }
}
L(O, 'Placeholder', e => (0, s.jsx)('div', {
  className: l()(e.className, N.cardPlaceholder)
})), t.Z = O;