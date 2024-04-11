"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  l = s.n(r),
  n = s("481060"),
  o = s("100527"),
  u = s("484459"),
  d = s("103575"),
  c = s("366966"),
  _ = s("409216"),
  E = s("51144"),
  C = s("981631"),
  f = s("689938"),
  T = s("699524");

function I(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let R = {
  [C.StoreRecommendationTypes.NOW_PLAYING]: {
    single: (e, t) => f.default.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_SINGLE.format({
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, s) => f.default.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_DOUBLE.format({
      user1: e.username,
      user1Hook: () => s(e),
      user2: t.username,
      user2Hook: () => s(t)
    }),
    other: e => f.default.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_OTHER.format({
      count: e
    })
  },
  [C.StoreRecommendationTypes.RECENTLY_PLAYED]: {
    single: (e, t) => f.default.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_SINGLE.format({
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, s) => f.default.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_DOUBLE.format({
      user1: e.username,
      user1Hook: () => s(e),
      user2: t.username,
      user2Hook: () => s(t)
    }),
    other: e => f.default.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_OTHER.format({
      count: e
    })
  },
  [C.StoreRecommendationTypes.EVER_PLAYED]: {
    single: (e, t) => f.default.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_SINGLE.format({
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, s) => f.default.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_DOUBLE.format({
      user1: e.username,
      user1Hook: () => s(e),
      user2: t.username,
      user2Hook: () => s(t)
    }),
    other: e => f.default.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_OTHER.format({
      count: e
    })
  }
};
class S extends i.PureComponent {
  renderDescription(e, t) {
    let s = R[e];
    return 1 === t.length ? s.single(t[0].user, e => this.renderActivityDiscordTag(e)) : 2 === t.length ? s.double(t[0].user, t[1].user, e => this.renderActivityDiscordTag(e)) : s.other(t.length)
  }
  renderActivityDiscordTag(e) {
    return (0, a.jsx)(n.Popout, {
      preload: () => (0, u.maybeFetchUserProfileForPopout)(e),
      renderPopout: t => (0, a.jsx)(d.default, {
        ...t,
        location: "ApplicationRecommendationActivity",
        userId: e.id,
        newAnalyticsLocations: [o.default.USERNAME]
      }),
      position: "right",
      children: t => (0, a.jsx)("span", {
        className: T.username,
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
      type: s,
      userInfo: i
    } = e;
    return 0 === i.length ? null : (0, a.jsxs)("div", {
      className: l()(T.recommendationActivity, t),
      children: [(0, a.jsx)(_.default, {
        className: T.players,
        users: i.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        renderUser: this.renderPlayer,
        max: 4,
        renderMoreUsers: this.renderPlayerOverflow
      }), (0, a.jsx)("div", {
        className: T.description,
        children: this.renderDescription(s, i)
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "renderUserTooltip", (e, t, s) => (0, a.jsxs)("div", {
      className: T.tooltip,
      children: [(0, a.jsx)("div", {
        children: E.default.getUserTag(e)
      }), (0, a.jsx)(c.default, {
        className: T.tooltipTimestamp,
        start: t,
        end: s,
        location: c.default.Locations.ACTIVITY_FEED
      })]
    })), I(this, "renderPlayer", (e, t, s, i) => {
      if (null == e) return null;
      let r = this.props.reason.userInfo.find(t => t.user === e);
      return null == r ? null : (0, a.jsx)(n.Popout, {
        preload: () => (0, u.maybeFetchUserProfileForPopout)(e),
        renderPopout: t => (0, a.jsx)(d.default, {
          ...t,
          location: "ApplicationRecommendationActivity",
          userId: e.id,
          newAnalyticsLocations: [o.default.AVATAR]
        }),
        position: "right",
        children: t => (0, a.jsx)(n.Tooltip, {
          text: this.renderUserTooltip(e, r.startTime, r.endTime),
          "aria-label": (0, E.getUserTag)(e, {
            decoration: "never"
          }),
          children: s => (0, a.jsx)(n.Avatar, {
            className: l()(T.playerAvatar, {
              [T.avatarMasked]: !i
            }),
            src: e.getAvatarURL(void 0, 32),
            "aria-label": e.username,
            size: n.AvatarSizes.SIZE_32,
            ...s,
            ...t
          })
        })
      }, e.id)
    }), I(this, "renderPlayerOverflow", (e, t, s) => (0, a.jsx)("div", {
      className: T.playerOverflow,
      children: e
    }, s))
  }
}
t.default = S