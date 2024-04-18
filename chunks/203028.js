"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("47120");
var n = a("735250");
a("470079");
var s = a("512722"),
  l = a.n(s),
  i = a("841784"),
  r = a("503438"),
  o = a("802856"),
  u = a("366966"),
  d = a("51144"),
  c = a("761282"),
  f = a("358924"),
  E = a("817915"),
  h = a("981631"),
  _ = a("689938");

function C(e) {
  let {
    party: t,
    onUserContextMenu: s
  } = e, {
    priorityMembers: C,
    guildContext: m
  } = t, S = C[0], I = function(e) {
    let {
      priorityMembers: t,
      partiedMembers: a
    } = e, n = new Set(t.map(e => {
      let {
        user: t
      } = e;
      return t.id
    })), s = a.filter(e => !n.has(e.id)), l = d.default.getName(t[0].user), i = null != t[1] ? d.default.getName(t[1].user) : null != s[0] ? d.default.getName(s[0]) : null;
    switch (a.length) {
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
          extras: a.length - 2
        })
    }
  }(t), {
    subtitle: p,
    icon: T
  } = function(e) {
    var t;
    let {
      priorityMembers: s,
      partiedMembers: d,
      voiceChannels: C,
      currentActivities: m
    } = e, S = s.length, I = d.length - S, p = m[0], T = null == p ? void 0 : p.activity, g = null == p ? void 0 : p.startedPlayingTime, A = {
      name: null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : ""
    };
    if ((0, i.default)(T) && null != T) return {
      subtitle: (0, n.jsx)(u.default, {
        start: g,
        location: u.default.Locations.ACTIVITY_FEED_NEW,
        messageProps: A
      }),
      icon: null
    };
    if (S + I === 1 && null != p) {
      let {
        game: e
      } = p;
      if (null == T) return {
        subtitle: null,
        icon: null
      };
      let t = c.createHeader(T);
      if (null != t) return t;
      switch (T.type) {
        case h.ActivityTypes.PLAYING:
          if ((0, o.default)(T)) return {
            subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_XBOX,
            icon: (0, n.jsx)(f.default.Header.Icon, {
              src: f.default.Header.Icon.Src.XBOX
            })
          };
          return {
            subtitle: (0, n.jsx)(u.default, {
              start: g,
              location: u.default.Locations.ACTIVITY_FEED_NEW,
              messageProps: A
            }), icon: null != e ? (0, n.jsx)(f.default.Header.Icon, {
              src: null != e.getIconURL(E.ICON_SIZE) ? e.getIconURL(E.ICON_SIZE) : a("211827")
            }) : null
          };
        case h.ActivityTypes.STREAMING:
          return {
            subtitle: _.default.Messages.ACTIVITY_FEED_NOW_STREAMING_TWITCH, icon: null != e && null != e.getIconURL(E.ICON_SIZE) ? (0, n.jsx)(f.default.Header.Icon, {
              src: e.getIconURL(E.ICON_SIZE)
            }) : null
          };
        case h.ActivityTypes.LISTENING:
          let s;
          return s = (0, r.default)(T) ? (0, n.jsx)(f.default.Header.Icon, {
            src: f.default.Header.Icon.Src.SPOTIFY
          }) : null != e.getIconURL(E.ICON_SIZE) ? (0, n.jsx)(f.default.Header.Icon, {
            src: e.getIconURL(E.ICON_SIZE)
          }) : (0, n.jsx)(f.default.Header.Icon, {
            src: a("211827")
          }), {
            subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_LISTENING.format({
              name: T.name
            }),
            icon: s
          };
        case h.ActivityTypes.WATCHING:
          return {
            subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_WATCHING, icon: null != e && null != e.getIconURL(E.ICON_SIZE) ? (0, n.jsx)(f.default.Header.Icon, {
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
          icon: (0, n.jsx)(f.default.Header.Icon, {
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
        game: a,
        startedPlayingTime: s
      } = e;
      return l()(null != t, "Activity was null somehow"), {
        subtitle: (0, n.jsx)(u.default, {
          start: s,
          location: u.default.Locations.ACTIVITY_FEED_NEW,
          messageProps: A
        }),
        icon: null != a && null != a.getIconURL(E.ICON_SIZE) ? (0, n.jsx)(f.default.Header.Icon, {
          src: a.getIconURL(E.ICON_SIZE)
        }) : null
      }
    }
    return {
      subtitle: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_MULTIPLE_GAMES,
      icon: (0, n.jsx)(f.default.Header.Icon, {
        src: f.default.Header.Icon.Src.MULTIPLE
      })
    }
  }(t);
  return (0, n.jsx)(f.default.Header, {
    priorityUser: S,
    guildId: null == m ? void 0 : m.id,
    title: I,
    subtitle: p,
    icon: T,
    onContextMenu: e => s(e, S.user)
  })
}