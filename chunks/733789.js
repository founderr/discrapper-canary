"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("120356"),
  l = s.n(r),
  i = s("481060"),
  u = s("100527"),
  o = s("484459"),
  d = s("103575"),
  c = s("366966"),
  I = s("409216"),
  T = s("51144"),
  E = s("981631"),
  f = s("689938"),
  _ = s("516784");

function S(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let A = {
  [E.StoreRecommendationTypes.NOW_PLAYING]: {
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
  [E.StoreRecommendationTypes.RECENTLY_PLAYED]: {
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
  [E.StoreRecommendationTypes.EVER_PLAYED]: {
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
class R extends a.PureComponent {
  renderDescription(e, t) {
    let s = A[e];
    return 1 === t.length ? s.single(t[0].user, e => this.renderActivityDiscordTag(e)) : 2 === t.length ? s.double(t[0].user, t[1].user, e => this.renderActivityDiscordTag(e)) : s.other(t.length)
  }
  renderActivityDiscordTag(e) {
    return (0, n.jsx)(i.Popout, {
      preload: () => (0, o.maybeFetchUserProfileForPopout)(e),
      renderPopout: t => (0, n.jsx)(d.default, {
        ...t,
        location: "ApplicationRecommendationActivity",
        userId: e.id,
        newAnalyticsLocations: [u.default.USERNAME]
      }),
      position: "right",
      children: t => (0, n.jsx)("span", {
        className: _.username,
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
      userInfo: a
    } = e;
    return 0 === a.length ? null : (0, n.jsxs)("div", {
      className: l()(_.recommendationActivity, t),
      children: [(0, n.jsx)(I.default, {
        className: _.players,
        users: a.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        renderUser: this.renderPlayer,
        max: 4,
        renderMoreUsers: this.renderPlayerOverflow
      }), (0, n.jsx)("div", {
        className: _.description,
        children: this.renderDescription(s, a)
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "renderUserTooltip", (e, t, s) => (0, n.jsxs)("div", {
      className: _.tooltip,
      children: [(0, n.jsx)("div", {
        children: T.default.getUserTag(e)
      }), (0, n.jsx)(c.default, {
        className: _.tooltipTimestamp,
        start: t,
        end: s,
        location: c.default.Locations.ACTIVITY_FEED
      })]
    })), S(this, "renderPlayer", (e, t, s, a) => {
      if (null == e) return null;
      let r = this.props.reason.userInfo.find(t => t.user === e);
      return null == r ? null : (0, n.jsx)(i.Popout, {
        preload: () => (0, o.maybeFetchUserProfileForPopout)(e),
        renderPopout: t => (0, n.jsx)(d.default, {
          ...t,
          location: "ApplicationRecommendationActivity",
          userId: e.id,
          newAnalyticsLocations: [u.default.AVATAR]
        }),
        position: "right",
        children: t => (0, n.jsx)(i.Tooltip, {
          text: this.renderUserTooltip(e, r.startTime, r.endTime),
          "aria-label": (0, T.getUserTag)(e, {
            decoration: "never"
          }),
          children: s => (0, n.jsx)(i.Avatar, {
            className: l()(_.playerAvatar, {
              [_.avatarMasked]: !a
            }),
            src: e.getAvatarURL(void 0, 32),
            "aria-label": e.username,
            size: i.AvatarSizes.SIZE_32,
            ...s,
            ...t
          })
        })
      }, e.id)
    }), S(this, "renderPlayerOverflow", (e, t, s) => (0, n.jsx)("div", {
      className: _.playerOverflow,
      children: e
    }, s))
  }
}
t.default = R