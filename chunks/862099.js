"use strict";
a.r(t), a.d(t, {
  GuildNoticeBody: function() {
    return z
  },
  LiveVoiceOrStageChannelNotice: function() {
    return et
  },
  VoiceChannelType: function() {
    return n
  }
}), a("47120");
var n, s, l = a("735250"),
  i = a("470079"),
  r = a("442837"),
  o = a("481060"),
  u = a("471445"),
  d = a("986332"),
  c = a("662842"),
  f = a("703656"),
  E = a("922482"),
  h = a("565799"),
  _ = a("501655"),
  C = a("192079"),
  m = a("427679"),
  S = a("448206"),
  p = a("496675"),
  I = a("938475"),
  T = a("808602"),
  g = a("305878"),
  A = a("263704"),
  N = a("465670"),
  v = a("242315"),
  L = a("393112"),
  R = a("170039"),
  O = a("602623"),
  M = a("626135"),
  P = a("823379"),
  y = a("15274"),
  x = a("924301"),
  D = a("504160"),
  b = a("151864"),
  U = a("835184"),
  j = a("725436"),
  G = a("497656"),
  w = a("79874"),
  k = a("554747"),
  B = a("230900"),
  F = a("854698"),
  H = a("139712"),
  V = a("765305"),
  Y = a("981631"),
  W = a("689938"),
  K = a("372730");
let z = i.memo(function(e) {
  let {
    heading: t,
    location: a,
    locationIcon: n,
    details: s,
    detailsIcon: i,
    topic: r,
    onClickCloseIcon: u,
    onClickTopicText: d,
    children: c
  } = e, f = (0, l.jsx)(o.Text, {
    color: "header-primary",
    variant: "text-md/semibold",
    className: K.eventName,
    children: r
  });
  return (0, l.jsxs)("div", {
    className: K.channelNotice,
    children: [(0, l.jsxs)("div", {
      className: K.textBlock,
      children: [(0, l.jsx)("div", {
        className: K.liveIndicator
      }), (0, l.jsx)(o.Text, {
        color: "text-positive",
        variant: "text-xs/bold",
        className: K.liveNowText,
        children: t
      }), null != u && (0, l.jsx)(o.Clickable, {
        onClick: u,
        className: K.closeIcon,
        "aria-label": W.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          height: 16,
          width: 16
        })
      })]
    }), null == d ? f : (0, l.jsx)(o.Button, {
      size: o.Button.Sizes.MIN,
      look: o.Button.Looks.LINK,
      color: o.Button.Colors.PRIMARY,
      onClick: d,
      children: f
    }), (0, l.jsxs)("div", {
      className: K.textBlock,
      children: [n, (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: K.channelName,
        children: a
      }), null != s && null != i && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Text, {
          className: K.dotDivider,
          color: "header-secondary",
          variant: "text-xs/normal",
          children: "•"
        }), i, (0, l.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: s
        })]
      })]
    }), c]
  })
});

function q(e) {
  let {
    guildEvent: t,
    channel: a
  } = e, n = (0, r.useStateFromStoresArray)([I.default], () => I.default.getVoiceStatesForChannel(a).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [a]), s = (0, u.getChannelIconComponent)(a);
  return (0, l.jsx)(z, {
    onClickCloseIcon: () => (0, D.hideLiveChannelNotice)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: W.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    topic: t.name,
    location: a.name,
    locationIcon: null != s ? (0, l.jsx)(s, {
      width: 16,
      height: 16,
      className: K.stageIcon
    }) : null,
    children: (0, l.jsx)(et, {
      channel: a,
      speakers: n,
      voiceType: 1
    })
  })
}

function Q(e) {
  let {
    guildEvent: t,
    noticeType: a
  } = e, n = (0, F.getNextRecurrenceIdInEvent)(t), s = (0, r.useStateFromStores)([x.default], () => x.default.isInterestedInEventRecurrence(t.id, n), [t.id, n]), i = (0, r.useStateFromStores)([U.default], () => U.default.getUpcomingNoticeSeenTime(t.id), [t.id]);
  return !s && null == i && (0, D.markUpcomingEventNoticeAsSeen)(t.id), (0, l.jsxs)(o.Button, {
    fullWidth: !0,
    className: K.joinButton,
    innerClassName: K.rsvpButton,
    onClick: function() {
      (0, H.default)(t.id, null, t.guild_id, () => setTimeout(() => (0, D.hideUpcomingEventNotice)(t.id), 1e3)), M.default.track(Y.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        guild_id: t.guild_id,
        notice_type: a
      })
    },
    look: s ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
    color: s ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    children: [s ? (0, l.jsx)(A.default, {
      width: 16,
      height: 16,
      className: K.buttonIcon
    }) : (0, l.jsx)(T.default, {
      width: 16,
      height: 16,
      className: K.buttonIcon
    }), W.default.Messages.INDICATE_RSVP]
  })
}

function Z(e) {
  var t;
  let {
    guildEvent: a,
    noticeType: n
  } = e, s = (0, B.getLocationFromEvent)(a), r = null != s ? (0, j.guildEventDetailsParser)(s, !0) : null, d = (0, B.getChannelFromEvent)(a), c = (0, u.getChannelIconComponent)(d), {
    startTime: f,
    endTime: E
  } = (0, w.default)(a.id), {
    startDateTimeString: h,
    upcomingEvent: _,
    diffMinutes: C
  } = (0, F.getEventTimeData)(f.toISOString(), null == E ? void 0 : E.toISOString()), m = _ ? C > 0 ? W.default.Messages.STARTING_IN_MINUTES.format({
    minutes: C
  }) : W.default.Messages.STARTING_SOON : W.default.Messages.STARTING_ON_DATE.format({
    date: h
  });
  return i.useEffect(() => {
    M.default.track(Y.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: n,
      guild_id: a.guild_id
    })
  }, [a, n]), (0, l.jsxs)("div", {
    className: K.channelNotice,
    children: [(0, l.jsxs)("div", {
      className: K.textBlock,
      children: [(0, l.jsx)(o.Clickable, {
        onClick: () => (0, y.openGuildEventDetails)({
          eventId: a.id
        }),
        className: K.eventNameClickable,
        children: (0, l.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: K.eventName,
          children: a.name
        })
      }), (0, l.jsx)(o.Clickable, {
        onClick: () => {
          M.default.track(Y.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
            notice_type: n,
            guild_id: a.guild_id
          }), (0, D.hideUpcomingEventNotice)(a.id)
        },
        className: K.closeIcon,
        "aria-label": W.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          height: 16,
          width: 16
        })
      })]
    }), (0, l.jsxs)("div", {
      className: K.textBlock,
      children: [(0, l.jsx)(g.default, {
        className: K.stageIcon,
        width: 16,
        height: 16
      }), (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: K.startTime,
        children: m
      })]
    }), (0, l.jsxs)("div", {
      className: K.textBlock,
      children: [null != c ? (0, l.jsx)(c, {
        width: 16,
        height: 16,
        className: K.stageIcon
      }) : (0, l.jsx)(L.default, {
        width: 16,
        height: 16,
        className: K.stageIcon
      }), (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: K.channelName,
        children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : r
      })]
    }), (0, l.jsx)(Q, {
      guildEvent: a,
      noticeType: n
    })]
  })
}

function X(e) {
  let {
    guildEvent: t
  } = e, a = (0, B.getLocationFromEvent)(t);
  return null == a ? null : (0, l.jsx)(z, {
    onClickCloseIcon: () => (0, D.hideLiveChannelNotice)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: W.default.Messages.HAPPENING_NOW,
    topic: t.name,
    location: (0, j.guildEventDetailsParser)(a, !0),
    locationIcon: (0, l.jsx)(L.default, {
      width: 16,
      height: 16,
      className: K.stageIcon
    }),
    children: (0, l.jsx)(J, {
      guildEvent: t
    })
  })
}

function J(e) {
  let {
    guildEvent: t
  } = e, a = i.useCallback(() => {
    (0, y.openGuildEventDetails)({
      eventId: t.id
    })
  }, [t]);
  return (0, l.jsx)(o.Button, {
    fullWidth: !0,
    className: K.joinButton,
    onClick: a,
    color: o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    children: W.default.Messages.SEE_DETAIL
  })
}

function $(e) {
  let {
    channel: t,
    label: a
  } = e;
  return (0, l.jsx)(o.Button, {
    fullWidth: !0,
    className: K.joinButton,
    onClick: () => {
      null != t && null != t.getGuildId() && ((0, E.connectAndOpen)(t), (0, f.transitionToGuild)(t.getGuildId(), t.id))
    },
    color: o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    children: a
  })
}

function ee(e) {
  let {
    stageInstance: t,
    channel: a
  } = e, n = (0, r.useStateFromStoresArray)([h.default], () => [...new Set(h.default.getMutableParticipants(a.id, _.StageChannelParticipantNamedIndex.SPEAKER).map(e => e.user))], [a.id]), s = (0, r.useStateFromStores)([h.default], () => h.default.getParticipantCount(a.id, _.StageChannelParticipantNamedIndex.AUDIENCE), [a.id]), i = W.default.Messages.LISTENING_COUNT.format({
    count: "".concat(s)
  });
  return (0, l.jsx)(z, {
    onClickCloseIcon: () => (0, D.hideLiveChannelNotice)({
      stageId: null == t ? void 0 : t.id
    }),
    heading: W.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    location: a.name,
    details: i,
    detailsIcon: (0, l.jsx)(v.default, {
      width: 14,
      height: 14,
      className: K.stageIcon
    }),
    locationIcon: (0, l.jsx)(R.default, {
      width: 16,
      height: 16,
      className: K.stageIcon
    }),
    topic: t.topic,
    children: (0, l.jsx)(et, {
      channel: a,
      speakers: n,
      voiceType: 2
    })
  })
}

function et(e) {
  let {
    channel: t,
    speakers: a,
    voiceType: n
  } = e, s = t.getGuildId(), u = i.useMemo(() => a.slice(0, 3), [a]), d = (0, r.useStateFromStores)([p.default], () => p.default.can(Y.Permissions.CONNECT, t)), c = (0, S.default)(t.id), f = W.default.Messages.JOIN;
  switch (n) {
    case 1:
      f = W.default.Messages.JOIN;
      break;
    case 2:
      f = W.default.Messages.STAGE_CHANNEL_JOIN_BUTTON, (null == c ? void 0 : c.speaker) ? f = W.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != c && (f = W.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON);
      break;
    case 3:
      f = W.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA;
      break;
    default:
      (0, P.assertNever)(n)
  }
  return null == s ? null : (0, l.jsxs)(l.Fragment, {
    children: [u.length > 0 ? (0, l.jsxs)("div", {
      className: K.textBlock,
      children: [(0, l.jsx)(O.default, {
        guildId: s,
        users: u,
        showUserPopout: !0,
        size: O.Sizes.SIZE_16
      }), (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: K.userNames,
        children: (0, C.summarizeUsernamesParticipating)(s, u, null == t ? void 0 : t.id, a.length)
      })]
    }) : null, d && null == c && (0, l.jsx)($, {
      channel: t,
      label: f
    })]
  })
}(s = n || (n = {}))[s.VOICE = 1] = "VOICE", s[s.STAGE = 2] = "STAGE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM", t.default = i.memo(function(e) {
  let {
    guild: t
  } = e, {
    showRedesignedLiveChannelNotice: a
  } = (0, d.useChannelNoticeRedesignExperiment)(!0), n = (0, G.useActiveEventOrStageInstanceChannel)(t.id), s = (0, k.useGuildActiveEvent)(t.id), i = (0, k.useGuildUpcomingEventsNotice)(t.id), o = (0, r.useStateFromStores)([m.default], () => m.default.getStageInstanceByChannel(null == n ? void 0 : n.id), [n]), {
    isStageNoticeHidden: u,
    isEventNoticeHidden: f
  } = (0, r.useStateFromStoresObject)([b.default], () => ({
    isStageNoticeHidden: b.default.isLiveChannelNoticeHidden({
      stageId: null == o ? void 0 : o.id
    }),
    isEventNoticeHidden: b.default.isLiveChannelNoticeHidden({
      eventId: null == s ? void 0 : s.id
    })
  }), [o, s]), E = null, h = null != o && null != n && !u;
  if (a) return (0, l.jsx)(c.default, {
    guild: t
  });
  null == s || f ? h && (E = (0, l.jsx)(ee, {
    stageInstance: o,
    channel: n
  })) : s.entity_type === V.GuildScheduledEventEntityTypes.STAGE_INSTANCE && h ? E = (0, l.jsx)(ee, {
    stageInstance: o,
    channel: n
  }) : s.entity_type === V.GuildScheduledEventEntityTypes.EXTERNAL ? E = (0, l.jsx)(X, {
    guildEvent: s
  }) : s.entity_type === V.GuildScheduledEventEntityTypes.VOICE && null != n && (E = (0, l.jsx)(q, {
    guildEvent: s,
    channel: n
  }));
  let _ = t.hasFeature(Y.GuildFeatures.COMMUNITY) || t.hasFeature(Y.GuildFeatures.HUB);
  if (null == E && null != i && !_) {
    let {
      upcomingEvent: e,
      noticeType: t
    } = i;
    E = (0, l.jsx)(Z, {
      guildEvent: e,
      noticeType: t
    })
  }
  return E
})