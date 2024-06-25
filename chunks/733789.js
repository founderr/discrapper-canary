n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(100527),
  c = n(484459),
  u = n(103575),
  d = n(366966),
  E = n(409216),
  h = n(51144),
  _ = n(981631),
  I = n(689938),
  m = n(659342);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = {
  [_.AzA.NOW_PLAYING]: {
    single: (e, t) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_SINGLE.format({
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, n) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_DOUBLE.format({
      user1: e.username,
      user1Hook: () => n(e),
      user2: t.username,
      user2Hook: () => n(t)
    }),
    other: e => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_OTHER.format({
      count: e
    })
  },
  [_.AzA.RECENTLY_PLAYED]: {
    single: (e, t) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_SINGLE.format({
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, n) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_DOUBLE.format({
      user1: e.username,
      user1Hook: () => n(e),
      user2: t.username,
      user2Hook: () => n(t)
    }),
    other: e => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_OTHER.format({
      count: e
    })
  },
  [_.AzA.EVER_PLAYED]: {
    single: (e, t) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_SINGLE.format({
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, n) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_DOUBLE.format({
      user1: e.username,
      user1Hook: () => n(e),
      user2: t.username,
      user2Hook: () => n(t)
    }),
    other: e => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_OTHER.format({
      count: e
    })
  }
};
class p extends i.PureComponent {
  renderDescription(e, t) {
    let n = g[e];
    return 1 === t.length ? n.single(t[0].user, e => this.renderActivityDiscordTag(e)) : 2 === t.length ? n.double(t[0].user, t[1].user, e => this.renderActivityDiscordTag(e)) : n.other(t.length)
  }
  renderActivityDiscordTag(e) {
    return (0, s.jsx)(r.Popout, {
      preload: () => (0, c.W)(e),
      renderPopout: t => (0, s.jsx)(u.Z, {
        ...t,
        location: "ApplicationRecommendationActivity",
        userId: e.id,
        newAnalyticsLocations: [o.Z.USERNAME]
      }),
      position: "right",
      children: t => (0, s.jsx)("span", {
        className: m.username,
        ...t,
        children: e.username
      })
    }, e.id)
  }
  render() {
    let {
      reason: e,
      className: t
    } = this.props, {
      type: n,
      userInfo: i
    } = e;
    return 0 === i.length ? null : (0, s.jsxs)("div", {
      className: a()(m.recommendationActivity, t),
      children: [(0, s.jsx)(E.Z, {
        className: m.players,
        users: i.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        renderUser: this.renderPlayer,
        max: 4,
        renderMoreUsers: this.renderPlayerOverflow
      }), (0, s.jsx)("div", {
        className: m.description,
        children: this.renderDescription(n, i)
      })]
    })
  }
  constructor(...e) {
    super(...e), T(this, "renderUserTooltip", (e, t, n) => (0, s.jsxs)("div", {
      className: m.tooltip,
      children: [(0, s.jsx)("div", {
        children: h.ZP.getUserTag(e)
      }), (0, s.jsx)(d.ZP, {
        className: m.tooltipTimestamp,
        start: t,
        end: n,
        location: d.ZP.Locations.ACTIVITY_FEED
      })]
    })), T(this, "renderPlayer", (e, t, n, i) => {
      if (null == e) return null;
      let l = this.props.reason.userInfo.find(t => t.user === e);
      return null == l ? null : (0, s.jsx)(r.Popout, {
        preload: () => (0, c.W)(e),
        renderPopout: t => (0, s.jsx)(u.Z, {
          ...t,
          location: "ApplicationRecommendationActivity",
          userId: e.id,
          newAnalyticsLocations: [o.Z.AVATAR]
        }),
        position: "right",
        children: t => (0, s.jsx)(r.Tooltip, {
          text: this.renderUserTooltip(e, l.startTime, l.endTime),
          "aria-label": (0, h.W5)(e, {
            decoration: "never"
          }),
          children: n => (0, s.jsx)(r.Avatar, {
            className: a()(m.playerAvatar, {
              [m.avatarMasked]: !i
            }),
            src: e.getAvatarURL(void 0, 32),
            "aria-label": e.username,
            size: r.AvatarSizes.SIZE_32,
            ...n,
            ...t
          })
        })
      }, e.id)
    }), T(this, "renderPlayerOverflow", (e, t, n) => (0, s.jsx)("div", {
      className: m.playerOverflow,
      children: e
    }, n))
  }
}
t.Z = p