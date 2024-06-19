n.d(t, {
  Z: function() {
    return m
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(512722),
  l = n.n(s),
  a = n(841784),
  r = n(503438),
  o = n(802856),
  c = n(366966),
  u = n(51144),
  d = n(761282),
  E = n(358924),
  h = n(817915),
  _ = n(981631),
  I = n(689938);

function m(e) {
  let {
    party: t,
    onUserContextMenu: s
  } = e, {
    priorityMembers: m,
    guildContext: g
  } = t, p = m[0], T = function(e) {
    let {
      priorityMembers: t,
      partiedMembers: n
    } = e, i = new Set(t.map(e => {
      let {
        user: t
      } = e;
      return t.id
    })), s = n.filter(e => !i.has(e.id)), l = u.ZP.getName(t[0].user), a = null != t[1] ? u.ZP.getName(t[1].user) : null != s[0] ? u.ZP.getName(s[0]) : null;
    switch (n.length) {
      case 1:
        return l;
      case 2:
        return I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN_ONLY.format({
          user1: l,
          user2: a
        });
      default:
        return I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN.format({
          user1: l,
          user2: a,
          extras: n.length - 2
        })
    }
  }(t), {
    subtitle: N,
    icon: S
  } = function(e) {
    var t;
    let {
      priorityMembers: s,
      partiedMembers: u,
      voiceChannels: m,
      currentActivities: g
    } = e, p = s.length, T = u.length - p, N = g[0], S = null == N ? void 0 : N.activity, C = null == N ? void 0 : N.startedPlayingTime, A = {
      name: null !== (t = null == S ? void 0 : S.name) && void 0 !== t ? t : ""
    };
    if ((0, a.Z)(S) && null != S) return {
      subtitle: (0, i.jsx)(c.ZP, {
        start: C,
        location: c.ZP.Locations.ACTIVITY_FEED_NEW,
        messageProps: A
      }),
      icon: null
    };
    if (p + T === 1 && null != N) {
      let {
        game: e
      } = N;
      if (null == S) return {
        subtitle: null,
        icon: null
      };
      let t = d.dc(S);
      if (null != t) return t;
      switch (S.type) {
        case _.IIU.PLAYING:
          if ((0, o.Z)(S)) return {
            subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_XBOX,
            icon: (0, i.jsx)(E.Z.Header.Icon, {
              src: E.Z.Header.Icon.Src.XBOX
            })
          };
          return {
            subtitle: (0, i.jsx)(c.ZP, {
              start: C,
              location: c.ZP.Locations.ACTIVITY_FEED_NEW,
              messageProps: A
            }), icon: null != e ? (0, i.jsx)(E.Z.Header.Icon, {
              src: null != e.getIconURL(h.Z) ? e.getIconURL(h.Z) : n(211827)
            }) : null
          };
        case _.IIU.STREAMING:
          return {
            subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_STREAMING_TWITCH, icon: null != e && null != e.getIconURL(h.Z) ? (0, i.jsx)(E.Z.Header.Icon, {
              src: e.getIconURL(h.Z)
            }) : null
          };
        case _.IIU.LISTENING:
          let s;
          return s = (0, r.Z)(S) ? (0, i.jsx)(E.Z.Header.Icon, {
            src: E.Z.Header.Icon.Src.SPOTIFY
          }) : null != e.getIconURL(h.Z) ? (0, i.jsx)(E.Z.Header.Icon, {
            src: e.getIconURL(h.Z)
          }) : (0, i.jsx)(E.Z.Header.Icon, {
            src: n(211827)
          }), {
            subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_LISTENING.format({
              name: S.name
            }),
            icon: s
          };
        case _.IIU.WATCHING:
          return {
            subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_WATCHING, icon: null != e && null != e.getIconURL(h.Z) ? (0, i.jsx)(E.Z.Header.Icon, {
              src: e.getIconURL(h.Z)
            }) : null
          };
        default:
          return {
            subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL, icon: null
          }
      }
    }
    if (0 === g.length) {
      if (m.length > 0) return {
        subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL,
        icon: null
      };
      let e = g[0];
      if (null != e) {
        let {
          activity: t
        } = e;
        if (null != t) {
          let e = d.dc(t);
          if (null != e) return e
        }
        if (null != t && t.type === _.IIU.LISTENING) return {
          subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_SPOTIFY,
          icon: (0, i.jsx)(E.Z.Header.Icon, {
            src: E.Z.Header.Icon.Src.SPOTIFY
          })
        }
      }
    } else if (1 === g.length) {
      let e = g.find(e => null != e.activity);
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
        subtitle: (0, i.jsx)(c.ZP, {
          start: s,
          location: c.ZP.Locations.ACTIVITY_FEED_NEW,
          messageProps: A
        }),
        icon: null != n && null != n.getIconURL(h.Z) ? (0, i.jsx)(E.Z.Header.Icon, {
          src: n.getIconURL(h.Z)
        }) : null
      }
    }
    return {
      subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_MULTIPLE_GAMES,
      icon: (0, i.jsx)(E.Z.Header.Icon, {
        src: E.Z.Header.Icon.Src.MULTIPLE
      })
    }
  }(t);
  return (0, i.jsx)(E.Z.Header, {
    priorityUser: p,
    guildId: null == g ? void 0 : g.id,
    title: T,
    subtitle: N,
    icon: S,
    onContextMenu: e => s(e, p.user)
  })
}