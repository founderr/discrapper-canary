"use strict";
n.r(t), n("47120");
var a, s = n("735250"),
  l = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("622535"),
  u = n("481060"),
  d = n("239091"),
  c = n("556017"),
  f = n("879484"),
  E = n("26580"),
  _ = n("206887"),
  h = n("134432"),
  C = n("695346"),
  m = n("768581"),
  S = n("900849"),
  I = n("940627"),
  T = n("806519"),
  p = n("981631"),
  g = n("689938"),
  N = n("313618"),
  A = n("129512"),
  R = n("330065"),
  O = n("755386");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class L extends(a = l.PureComponent) {
  getDefaultSplashURL(e, t) {
    if (t) return O;
    switch (e) {
      case p.ThemeTypes.DARK:
        return A;
      case p.ThemeTypes.LIGHT:
        return R
    }
  }
  render() {
    var e;
    let {
      guild: t,
      className: n,
      theme: a,
      onTagClick: l
    } = this.props, {
      loaded: i,
      hasBeenSeen: d,
      isVisible: A,
      submitting: R
    } = this.state, {
      name: O,
      description: v,
      presenceCount: L,
      memberCount: P,
      keywords: M
    } = t, y = null === (e = t.features) || void 0 === e ? void 0 : e.has(p.GuildFeatures.HUB), D = m.default.getGuildDiscoverySplashURL({
      id: t.id,
      splash: t.discoverySplash,
      size: 300 * (0, h.getDevicePixelRatio)()
    }), x = null != D ? D : this.getDefaultSplashURL(a, y), b = m.default.getGuildIconURL({
      id: t.id,
      icon: t.icon,
      size: 40
    });
    f.DiscoveryTagsExperiment.trackExposure({
      location: "de1ef6_1"
    });
    let {
      shouldDisplayTags: U
    } = f.DiscoveryTagsExperiment.getCurrentConfig({
      location: "de1ef6_2"
    }, {
      autoTrackExposure: !1
    }), {
      canSeeInAppReportingButtons: j
    } = c.DiscoveryInAppReportingExperiment.getCurrentConfig({
      location: "de1ef6_3"
    }, {
      autoTrackExposure: !1
    });
    c.DiscoveryInAppReportingExperiment.trackExposure({
      location: "de1ef6_4"
    });
    let G = C.DeveloperMode.getSetting();
    return (0, s.jsx)(o.VisibilitySensor, {
      active: !A,
      onChange: this.setIsVisible,
      threshold: .1,
      children: A ? (0, s.jsx)(o.VisibilitySensor, {
        onChange: this.handleVisibilityChange,
        active: !d,
        threshold: .55,
        children: (0, s.jsxs)("div", {
          className: r()(n, {
            [N.loaded]: i,
            [N.loading]: !i
          }),
          children: [R ? (0, s.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: N.spinner
          }) : null, (0, s.jsxs)(u.Clickable, {
            onClick: this.handleClickView,
            className: r()(N.card, {
              [N.submitting]: R,
              [N.cardWithTags]: U
            }),
            onContextMenu: this.handleContextMenu,
            children: [(0, s.jsxs)("div", {
              className: N.cardHeader,
              children: [(0, s.jsx)("div", {
                className: N.splash,
                children: (0, s.jsx)("img", {
                  src: x,
                  alt: "",
                  className: r()(N.splashImage, {
                    [N.splashImageHeight]: !y
                  }),
                  onLoad: () => this.setState({
                    loaded: !0
                  })
                })
              }), G || j ? (0, s.jsx)("div", {
                className: N.actionButtons,
                children: (0, s.jsx)(_.default, {
                  guild: t
                })
              }) : null, (0, s.jsx)("div", {
                className: N.guildIcon,
                children: (0, s.jsx)(T.default, {
                  mask: T.default.Masks.SQUIRCLE,
                  width: 48,
                  height: 48,
                  children: (0, s.jsx)("div", {
                    className: N.iconMask,
                    children: (0, s.jsx)(T.default, {
                      mask: T.default.Masks.SQUIRCLE,
                      width: 40,
                      height: 40,
                      children: (0, s.jsx)("img", {
                        src: b,
                        alt: "",
                        className: N.avatar
                      })
                    })
                  })
                })
              })]
            }), (0, s.jsxs)("div", {
              className: N.guildInfo,
              children: [(0, s.jsxs)("div", {
                className: N.title,
                children: [(0, s.jsx)(I.default, {
                  className: N.guildBadge,
                  guild: t,
                  tooltipColor: u.Tooltip.Colors.PRIMARY
                }), (0, s.jsx)(u.Heading, {
                  variant: "heading-md/semibold",
                  className: N.guildName,
                  children: O
                })]
              }), (0, s.jsx)(u.Text, {
                className: N.description,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: v
              }), U && null != M && null != l && (0, s.jsx)(E.DiscoveryTags, {
                tags: M,
                onTagClick: e => l(e, t.id),
                guildId: t.id,
                section: S.AnalyticsContexts.POPULAR
              }), (0, s.jsxs)("div", {
                className: N.memberInfo,
                children: [null != L && (0, s.jsxs)("div", {
                  className: N.memberCount,
                  children: [(0, s.jsx)("div", {
                    className: N.dotOnline
                  }), (0, s.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                      membersOnline: L
                    })
                  })]
                }), null != P && (0, s.jsxs)("div", {
                  className: N.memberCount,
                  children: [(0, s.jsx)("div", {
                    className: N.dotOffline
                  }), (0, s.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                      count: P
                    })
                  })]
                })]
              })]
            })]
          })]
        })
      }) : (0, s.jsx)("div", {
        className: r()(N.card, {
          [N.cardWithTags]: U
        })
      })
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      loaded: !1,
      hasBeenSeen: !1,
      isVisible: !1,
      submitting: !1
    }), v(this, "handleClickView", async e => {
      let {
        className: t
      } = e.target;
      if (t.includes("Menu")) return;
      let {
        onView: n,
        guild: a
      } = this.props;
      e.stopPropagation(), this.setState({
        submitting: !0
      });
      try {
        null != n && await n(a.id)
      } finally {
        this.setState({
          submitting: !1
        })
      }
    }), v(this, "handleVisibilityChange", e => {
      let {
        onGuildCardSeen: t,
        guild: n
      } = this.props;
      null != n && !this.state.hasBeenSeen && e && (this.setState({
        hasBeenSeen: e
      }), null != t && t(n.id))
    }), v(this, "handleContextMenu", e => {
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "455839"));
        return t => (0, s.jsx)(e, {
          ...t,
          guild: this.props.guild
        })
      })
    }), v(this, "setIsVisible", e => {
      this.setState({
        isVisible: e
      })
    })
  }
}
v(L, "Placeholder", e => (0, s.jsx)("div", {
  className: r()(e.className, N.cardPlaceholder)
})), t.default = L