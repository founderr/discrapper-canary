"use strict";
a.r(t), a("47120");
var n, s = a("735250"),
  l = a("470079"),
  i = a("120356"),
  r = a.n(i),
  o = a("622535"),
  u = a("481060"),
  d = a("239091"),
  c = a("556017"),
  f = a("879484"),
  E = a("26580"),
  h = a("206887"),
  _ = a("134432"),
  C = a("695346"),
  m = a("768581"),
  S = a("900849"),
  I = a("940627"),
  p = a("806519"),
  T = a("981631"),
  g = a("689938"),
  A = a("313618"),
  N = a("129512"),
  v = a("330065"),
  R = a("755386");

function O(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class L extends(n = l.PureComponent) {
  getDefaultSplashURL(e, t) {
    if (t) return R;
    switch (e) {
      case T.ThemeTypes.DARK:
        return N;
      case T.ThemeTypes.LIGHT:
        return v
    }
  }
  render() {
    var e;
    let {
      guild: t,
      className: a,
      theme: n,
      onTagClick: l
    } = this.props, {
      loaded: i,
      hasBeenSeen: d,
      isVisible: N,
      submitting: v
    } = this.state, {
      name: R,
      description: O,
      presenceCount: L,
      memberCount: P,
      keywords: M
    } = t, x = null === (e = t.features) || void 0 === e ? void 0 : e.has(T.GuildFeatures.HUB), y = m.default.getGuildDiscoverySplashURL({
      id: t.id,
      splash: t.discoverySplash,
      size: 300 * (0, _.getDevicePixelRatio)()
    }), D = null != y ? y : this.getDefaultSplashURL(n, x), b = m.default.getGuildIconURL({
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
      active: !N,
      onChange: this.setIsVisible,
      threshold: .1,
      children: N ? (0, s.jsx)(o.VisibilitySensor, {
        onChange: this.handleVisibilityChange,
        active: !d,
        threshold: .55,
        children: (0, s.jsxs)("div", {
          className: r()(a, {
            [A.loaded]: i,
            [A.loading]: !i
          }),
          children: [v ? (0, s.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: A.spinner
          }) : null, (0, s.jsxs)(u.Clickable, {
            onClick: this.handleClickView,
            className: r()(A.card, {
              [A.submitting]: v,
              [A.cardWithTags]: U
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
                    [A.splashImageHeight]: !x
                  }),
                  onLoad: () => this.setState({
                    loaded: !0
                  })
                })
              }), G || j ? (0, s.jsx)("div", {
                className: A.actionButtons,
                children: (0, s.jsx)(h.default, {
                  guild: t
                })
              }) : null, (0, s.jsx)("div", {
                className: A.guildIcon,
                children: (0, s.jsx)(p.default, {
                  mask: p.default.Masks.SQUIRCLE,
                  width: 48,
                  height: 48,
                  children: (0, s.jsx)("div", {
                    className: A.iconMask,
                    children: (0, s.jsx)(p.default, {
                      mask: p.default.Masks.SQUIRCLE,
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
                children: [(0, s.jsx)(I.default, {
                  className: A.guildBadge,
                  guild: t,
                  tooltipColor: u.Tooltip.Colors.PRIMARY
                }), (0, s.jsx)(u.Heading, {
                  variant: "heading-md/semibold",
                  className: A.guildName,
                  children: R
                })]
              }), (0, s.jsx)(u.Text, {
                className: A.description,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: O
              }), U && null != M && null != l && (0, s.jsx)(E.DiscoveryTags, {
                tags: M,
                onTagClick: e => l(e, t.id),
                guildId: t.id,
                section: S.AnalyticsContexts.POPULAR
              }), (0, s.jsxs)("div", {
                className: A.memberInfo,
                children: [null != L && (0, s.jsxs)("div", {
                  className: A.memberCount,
                  children: [(0, s.jsx)("div", {
                    className: A.dotOnline
                  }), (0, s.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                      membersOnline: L
                    })
                  })]
                }), null != P && (0, s.jsxs)("div", {
                  className: A.memberCount,
                  children: [(0, s.jsx)("div", {
                    className: A.dotOffline
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
        className: r()(A.card, {
          [A.cardWithTags]: U
        })
      })
    })
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      loaded: !1,
      hasBeenSeen: !1,
      isVisible: !1,
      submitting: !1
    }), O(this, "handleClickView", async e => {
      let {
        className: t
      } = e.target;
      if (t.includes("Menu")) return;
      let {
        onView: a,
        guild: n
      } = this.props;
      e.stopPropagation(), this.setState({
        submitting: !0
      });
      try {
        null != a && await a(n.id)
      } finally {
        this.setState({
          submitting: !1
        })
      }
    }), O(this, "handleVisibilityChange", e => {
      let {
        onGuildCardSeen: t,
        guild: a
      } = this.props;
      null != a && !this.state.hasBeenSeen && e && (this.setState({
        hasBeenSeen: e
      }), null != t && t(a.id))
    }), O(this, "handleContextMenu", e => {
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "455839"));
        return t => (0, s.jsx)(e, {
          ...t,
          guild: this.props.guild
        })
      })
    }), O(this, "setIsVisible", e => {
      this.setState({
        isVisible: e
      })
    })
  }
}
O(L, "Placeholder", e => (0, s.jsx)("div", {
  className: r()(e.className, A.cardPlaceholder)
})), t.default = L