"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var a = n("735250");
n("470079");
var s = n("512722"),
  l = n.n(s),
  i = n("841784"),
  r = n("503438"),
  o = n("802856"),
  u = n("366966"),
  d = n("51144"),
  c = n("761282"),
  f = n("358924"),
  E = n("817915"),
  h = n("981631"),
  _ = n("689938");

function C(e) {
  let {
    party: t,
    onUserContextMenu: s
  } = e, {
    priorityMembers: C,
    guildContext: m
  } = t, S = C[0], p = function(e) {
    let {
      priorityMembers: t,
      partiedMembers: n
    } = e, a = new Set(t.map(e => {
      let {
        user: t
      } = e;
      return t.id
    })), s = n.filter(e => !a.has(e.id)), l = d.default.getName(t[0].user), i = null != t[1] ? d.default.getName(t[1].user) : null != s[0] ? d.default.getName(s[0]) : null;
    switch (n.length) {
      case 1:
        return l;
      case 2:
        return _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN_ONLY.format({
          user1: l,
          user2: i
        });
      default:
        return _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN.format({
          user1: l,
          user2: i,
          extras: n.length - 2
        })
    }
  }(t), {
    subtitle: I,
    icon: g
  } = function(e) {
    var t;
    let {
      priorityMembers: s,
      partiedMembers: d,
      voiceChannels: C,
      currentActivities: m
    } = e, S = s.length, p = d.length - S, I = m[0], g = null == I ? void 0 : I.activity, T = null == I ? void 0 : I.startedPlayingTime, A = {
      name: null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : ""
    };
    if ((0, i.default)(g) && null != g) return {
      subtitle: (0, a.jsx)(u.default, {
        start: T,
        location: u.default.Locations.ACTIVITY_FEED_NEW,
        messageProps: A
      }),
      icon: null
    };
    if (S + p === 1 && null != I) {
      let {
        game: e
      } = I;
      if (null == g) return {
        subtitle: null,
        icon: null
      };
      let t = c.createHeader(g);
      if (null != t) return t;
      switch (g.type) {
        case h.ActivityTypes.PLAYING:
          if ((0, o.default)(g)) return {
            subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_XBOX,
            icon: (0, a.jsx)(f.default.Header.Icon, {
              src: f.default.Header.Icon.Src.XBOX
            })
          };
          return {
            subtitle: (0, a.jsx)(u.default, {
              start: T,
              location: u.default.Locations.ACTIVITY_FEED_NEW,
              messageProps: A
            }), icon: null != e ? (0, a.jsx)(f.default.Header.Icon, {
              src: null != e.getIconURL(E.ICON_SIZE) ? e.getIconURL(E.ICON_SIZE) : n("211827")
            }) : null
          };
        case h.ActivityTypes.STREAMING:
          return {
            subtitle: _.default.Messages.ACTIVITY_FEED_NOW_STREAMING_TWITCH, icon: null != e && null != e.getIconURL(E.ICON_SIZE) ? (0, a.jsx)(f.default.Header.Icon, {
              src: e.getIconURL(E.ICON_SIZE)
            }) : null
          };
        case h.ActivityTypes.LISTENING:
          let s;
          return s = (0, r.default)(g) ? (0, a.jsx)(f.default.Header.Icon, {
            src: f.default.Header.Icon.Src.SPOTIFY
          }) : null != e.getIconURL(E.ICON_SIZE) ? (0, a.jsx)(f.default.Header.Icon, {
            src: e.getIconURL(E.ICON_SIZE)
          }) : (0, a.jsx)(f.default.Header.Icon, {
            src: n("211827")
          }), {
            subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_LISTENING.format({
              name: g.name
            }),
            icon: s
          };
        case h.ActivityTypes.WATCHING:
          return {
            subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_WATCHING, icon: null != e && null != e.getIconURL(E.ICON_SIZE) ? (0, a.jsx)(f.default.Header.Icon, {
              src: e.getIconURL(E.ICON_SIZE)
            }) : null
          };
        default:
          return {
            subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL, icon: null
          }
      }
    }
    if (0 === m.length) {
      if (C.length > 0) return {
        subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL,
        icon: null
      };
      let e = m[0];
      if (null != e) {
        let {
          activity: t
        } = e;
        if (null != t) {
          let e = c.createHeader(t);
          if (null != e) return e
        }
        if (null != t && t.type === h.ActivityTypes.LISTENING) return {
          subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_SPOTIFY,
          icon: (0, a.jsx)(f.default.Header.Icon, {
            src: f.default.Header.Icon.Src.SPOTIFY
          })
        }
      }
    } else if (1 === m.length) {
      let e = m.find(e => null != e.activity);
      if (null == e) return {
        subtitle: null,
        icon: null
      };
      let {
        activity: t,
        game: n,
        startedPlayingTime: s
      } = e;
      return l()(null != t, "Activity was null somehow"), {
        subtitle: (0, a.jsx)(u.default, {
          start: s,
          location: u.default.Locations.ACTIVITY_FEED_NEW,
          messageProps: A
        }),
        icon: null != n && null != n.getIconURL(E.ICON_SIZE) ? (0, a.jsx)(f.default.Header.Icon, {
          src: n.getIconURL(E.ICON_SIZE)
        }) : null
      }
    }
    return {
      subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_MULTIPLE_GAMES,
      icon: (0, a.jsx)(f.default.Header.Icon, {
        src: f.default.Header.Icon.Src.MULTIPLE
      })
    }
  }(t);
  return (0, a.jsx)(f.default.Header, {
    priorityUser: S,
    guildId: null == m ? void 0 : m.id,
    title: p,
    subtitle: I,
    icon: g,
    onContextMenu: e => s(e, S.user)
  })
}