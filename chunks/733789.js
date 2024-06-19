t(47120);
var n = t(735250),
  r = t(470079),
  i = t(120356),
  a = t.n(i),
  l = t(481060),
  o = t(100527),
  c = t(484459),
  u = t(103575),
  I = t(366966),
  T = t(409216),
  d = t(51144),
  _ = t(981631),
  E = t(689938),
  S = t(659342);

function O(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let A = {
  [_.AzA.NOW_PLAYING]: {
    single: (e, s) => E.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_SINGLE.format({
      user1: e.username,
      user1Hook: () => s(e)
    }),
    double: (e, s, t) => E.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_DOUBLE.format({
      user1: e.username,
      user1Hook: () => t(e),
      user2: s.username,
      user2Hook: () => t(s)
    }),
    other: e => E.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_OTHER.format({
      count: e
    })
  },
  [_.AzA.RECENTLY_PLAYED]: {
    single: (e, s) => E.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_SINGLE.format({
      user1: e.username,
      user1Hook: () => s(e)
    }),
    double: (e, s, t) => E.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_DOUBLE.format({
      user1: e.username,
      user1Hook: () => t(e),
      user2: s.username,
      user2Hook: () => t(s)
    }),
    other: e => E.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_OTHER.format({
      count: e
    })
  },
  [_.AzA.EVER_PLAYED]: {
    single: (e, s) => E.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_SINGLE.format({
      user1: e.username,
      user1Hook: () => s(e)
    }),
    double: (e, s, t) => E.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_DOUBLE.format({
      user1: e.username,
      user1Hook: () => t(e),
      user2: s.username,
      user2Hook: () => t(s)
    }),
    other: e => E.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_OTHER.format({
      count: e
    })
  }
};
class N extends r.PureComponent {
  renderDescription(e, s) {
    let t = A[e];
    return 1 === s.length ? t.single(s[0].user, e => this.renderActivityDiscordTag(e)) : 2 === s.length ? t.double(s[0].user, s[1].user, e => this.renderActivityDiscordTag(e)) : t.other(s.length)
  }
  renderActivityDiscordTag(e) {
    return (0, n.jsx)(l.Popout, {
      preload: () => (0, c.W)(e),
      renderPopout: s => (0, n.jsx)(u.Z, {
        ...s,
        location: "ApplicationRecommendationActivity",
        userId: e.id,
        newAnalyticsLocations: [o.Z.USERNAME]
      }),
      position: "right",
      children: s => (0, n.jsx)("span", {
        className: S.username,
        ...s,
        children: e.username
      })
    }, e.id)
  }
  render() {
    let {
      reason: e,
      className: s
    } = this.props, {
      type: t,
      userInfo: r
    } = e;
    return 0 === r.length ? null : (0, n.jsxs)("div", {
      className: a()(S.recommendationActivity, s),
      children: [(0, n.jsx)(T.Z, {
        className: S.players,
        users: r.map(e => {
          let {
            user: s
          } = e;
          return s
        }),
        renderUser: this.renderPlayer,
        max: 4,
        renderMoreUsers: this.renderPlayerOverflow
      }), (0, n.jsx)("div", {
        className: S.description,
        children: this.renderDescription(t, r)
      })]
    })
  }
  constructor(...e) {
    super(...e), O(this, "renderUserTooltip", (e, s, t) => (0, n.jsxs)("div", {
      className: S.tooltip,
      children: [(0, n.jsx)("div", {
        children: d.ZP.getUserTag(e)
      }), (0, n.jsx)(I.ZP, {
        className: S.tooltipTimestamp,
        start: s,
        end: t,
        location: I.ZP.Locations.ACTIVITY_FEED
      })]
    })), O(this, "renderPlayer", (e, s, t, r) => {
      if (null == e) return null;
      let i = this.props.reason.userInfo.find(s => s.user === e);
      return null == i ? null : (0, n.jsx)(l.Popout, {
        preload: () => (0, c.W)(e),
        renderPopout: s => (0, n.jsx)(u.Z, {
          ...s,
          location: "ApplicationRecommendationActivity",
          userId: e.id,
          newAnalyticsLocations: [o.Z.AVATAR]
        }),
        position: "right",
        children: s => (0, n.jsx)(l.Tooltip, {
          text: this.renderUserTooltip(e, i.startTime, i.endTime),
          "aria-label": (0, d.W5)(e, {
            decoration: "never"
          }),
          children: t => (0, n.jsx)(l.Avatar, {
            className: a()(S.playerAvatar, {
              [S.avatarMasked]: !r
            }),
            src: e.getAvatarURL(void 0, 32),
            "aria-label": e.username,
            size: l.AvatarSizes.SIZE_32,
            ...t,
            ...s
          })
        })
      }, e.id)
    }), O(this, "renderPlayerOverflow", (e, s, t) => (0, n.jsx)("div", {
      className: S.playerOverflow,
      children: e
    }, t))
  }
}
s.Z = N