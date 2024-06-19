n(47120);
var i, s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(622535),
  c = n(481060),
  u = n(239091),
  d = n(556017),
  E = n(879484),
  h = n(26580),
  _ = n(206887),
  I = n(134432),
  m = n(695346),
  g = n(768581),
  p = n(900849),
  T = n(940627),
  N = n(806519),
  S = n(981631),
  C = n(689938),
  A = n(785196),
  f = n(129512),
  Z = n(330065),
  v = n(755386);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class O extends(i = l.PureComponent) {
  getDefaultSplashURL(e, t) {
    if (t) return v;
    switch (e) {
      case S.BRd.DARK:
        return f;
      case S.BRd.LIGHT:
        return Z
    }
  }
  render() {
    var e;
    let {
      guild: t,
      className: n,
      theme: i,
      onTagClick: l
    } = this.props, {
      loaded: a,
      hasBeenSeen: u,
      isVisible: f,
      submitting: Z
    } = this.state, {
      name: v,
      description: L,
      presenceCount: O,
      memberCount: R,
      keywords: x
    } = t, M = null === (e = t.features) || void 0 === e ? void 0 : e.has(S.oNc.HUB), P = g.ZP.getGuildDiscoverySplashURL({
      id: t.id,
      splash: t.discoverySplash,
      size: 300 * (0, I.x_)()
    }), D = null != P ? P : this.getDefaultSplashURL(i, M), b = g.ZP.getGuildIconURL({
      id: t.id,
      icon: t.icon,
      size: 40
    });
    E.w.trackExposure({
      location: "de1ef6_1"
    });
    let {
      shouldDisplayTags: y
    } = E.w.getCurrentConfig({
      location: "de1ef6_2"
    }, {
      autoTrackExposure: !1
    }), {
      canSeeInAppReportingButtons: j
    } = d.N.getCurrentConfig({
      location: "de1ef6_3"
    }, {
      autoTrackExposure: !1
    });
    d.N.trackExposure({
      location: "de1ef6_4"
    });
    let U = m.Sb.getSetting();
    return (0, s.jsx)(o.$, {
      active: !f,
      onChange: this.setIsVisible,
      threshold: .1,
      children: f ? (0, s.jsx)(o.$, {
        onChange: this.handleVisibilityChange,
        active: !u,
        threshold: .55,
        children: (0, s.jsxs)("div", {
          className: r()(n, {
            [A.loaded]: a,
            [A.loading]: !a
          }),
          children: [Z ? (0, s.jsx)(c.Spinner, {
            type: c.Spinner.Type.PULSING_ELLIPSIS,
            className: A.spinner
          }) : null, (0, s.jsxs)(c.Clickable, {
            onClick: this.handleClickView,
            className: r()(A.card, {
              [A.submitting]: Z,
              [A.cardWithTags]: y
            }),
            onContextMenu: this.handleContextMenu,
            children: [(0, s.jsxs)("div", {
              className: A.cardHeader,
              children: [(0, s.jsx)("div", {
                className: A.splash,
                children: (0, s.jsx)("img", {
                  src: D,
                  alt: "",
                  className: r()(A.splashImage, {
                    [A.splashImageHeight]: !M
                  }),
                  onLoad: () => this.setState({
                    loaded: !0
                  })
                })
              }), U || j ? (0, s.jsx)("div", {
                className: A.actionButtons,
                children: (0, s.jsx)(_.Z, {
                  guild: t
                })
              }) : null, (0, s.jsx)("div", {
                className: A.guildIcon,
                children: (0, s.jsx)(N.ZP, {
                  mask: N.ZP.Masks.SQUIRCLE,
                  width: 48,
                  height: 48,
                  children: (0, s.jsx)("div", {
                    className: A.iconMask,
                    children: (0, s.jsx)(N.ZP, {
                      mask: N.ZP.Masks.SQUIRCLE,
                      width: 40,
                      height: 40,
                      children: (0, s.jsx)("img", {
                        src: b,
                        alt: "",
                        className: A.avatar
                      })
                    })
                  })
                })
              })]
            }), (0, s.jsxs)("div", {
              className: A.guildInfo,
              children: [(0, s.jsxs)("div", {
                className: A.title,
                children: [(0, s.jsx)(T.Z, {
                  className: A.guildBadge,
                  guild: t,
                  tooltipColor: c.Tooltip.Colors.PRIMARY
                }), (0, s.jsx)(c.Heading, {
                  variant: "heading-md/semibold",
                  className: A.guildName,
                  children: v
                })]
              }), (0, s.jsx)(c.Text, {
                className: A.description,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: L
              }), y && null != x && null != l && (0, s.jsx)(h.F, {
                tags: x,
                onTagClick: e => l(e, t.id),
                guildId: t.id,
                section: p.P1.POPULAR
              }), (0, s.jsxs)("div", {
                className: A.memberInfo,
                children: [null != O && (0, s.jsxs)("div", {
                  className: A.memberCount,
                  children: [(0, s.jsx)("div", {
                    className: A.dotOnline
                  }), (0, s.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: C.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                      membersOnline: O
                    })
                  })]
                }), null != R && (0, s.jsxs)("div", {
                  className: A.memberCount,
                  children: [(0, s.jsx)("div", {
                    className: A.dotOffline
                  }), (0, s.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: C.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                      count: R
                    })
                  })]
                })]
              })]
            })]
          })]
        })
      }) : (0, s.jsx)("div", {
        className: r()(A.card, {
          [A.cardWithTags]: y
        })
      })
    })
  }
  constructor(...e) {
    super(...e), L(this, "state", {
      loaded: !1,
      hasBeenSeen: !1,
      isVisible: !1,
      submitting: !1
    }), L(this, "handleClickView", async e => {
      let {
        className: t
      } = e.target;
      if (t.includes("Menu")) return;
      let {
        onView: n,
        guild: i
      } = this.props;
      e.stopPropagation(), this.setState({
        submitting: !0
      });
      try {
        null != n && await n(i.id)
      } finally {
        this.setState({
          submitting: !1
        })
      }
    }), L(this, "handleVisibilityChange", e => {
      let {
        onGuildCardSeen: t,
        guild: n
      } = this.props;
      null != n && !this.state.hasBeenSeen && e && (this.setState({
        hasBeenSeen: e
      }), null != t && t(n.id))
    }), L(this, "handleContextMenu", e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 455839));
        return t => (0, s.jsx)(e, {
          ...t,
          guild: this.props.guild
        })
      })
    }), L(this, "setIsVisible", e => {
      this.setState({
        isVisible: e
      })
    })
  }
}
L(O, "Placeholder", e => (0, s.jsx)("div", {
  className: r()(e.className, A.cardPlaceholder)
})), t.Z = O