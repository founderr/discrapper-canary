"use strict";
n.r(t), n.d(t, {
  GuildNoticeBody: function() {
    return Q
  },
  LiveVoiceOrStageChannelNotice: function() {
    return ea
  },
  VoiceChannelType: function() {
    return a
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("471445"),
  f = n("986332"),
  E = n("662842"),
  h = n("703656"),
  C = n("922482"),
  _ = n("565799"),
  m = n("501655"),
  S = n("192079"),
  p = n("427679"),
  I = n("448206"),
  g = n("496675"),
  T = n("938475"),
  A = n("808602"),
  N = n("305878"),
  v = n("263704"),
  R = n("465670"),
  O = n("242315"),
  L = n("393112"),
  P = n("170039"),
  y = n("602623"),
  M = n("626135"),
  D = n("823379"),
  x = n("15274"),
  b = n("924301"),
  U = n("504160"),
  j = n("151864"),
  G = n("835184"),
  w = n("725436"),
  k = n("497656"),
  B = n("79874"),
  F = n("554747"),
  H = n("230900"),
  V = n("854698"),
  Y = n("139712"),
  W = n("765305"),
  K = n("981631"),
  z = n("689938"),
  q = n("107677");
let Q = i.memo(function(e) {
  let {
    heading: t,
    location: n,
    locationIcon: a,
    details: s,
    detailsIcon: i,
    topic: r,
    onClickCloseIcon: u,
    onClickTopicText: c,
    children: f
  } = e, E = (0, l.jsx)(d.Text, {
    color: "header-primary",
    variant: "text-md/semibold",
    className: q.eventName,
    children: r
  });
  return (0, l.jsxs)("div", {
    className: q.channelNotice,
    children: [(0, l.jsxs)("div", {
      className: o()(q.textBlock, q.singleLine),
      children: [(0, l.jsx)("div", {
        className: q.liveIndicator
      }), (0, l.jsx)(d.Text, {
        color: "text-positive",
        variant: "text-xs/bold",
        className: q.liveNowText,
        children: t
      }), null != u && (0, l.jsx)(d.Clickable, {
        onClick: u,
        className: q.closeIcon,
        "aria-label": z.default.Messages.CLOSE,
        children: (0, l.jsx)(R.default, {
          height: 16,
          width: 16
        })
      })]
    }), null == c ? E : (0, l.jsx)(d.Button, {
      size: d.Button.Sizes.MIN,
      look: d.Button.Looks.LINK,
      color: d.Button.Colors.PRIMARY,
      onClick: c,
      children: E
    }), (0, l.jsxs)("div", {
      className: o()(q.textBlock, q.singleLine),
      children: [a, (0, l.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: q.channelName,
        children: n
      }), null != s && null != i && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.Text, {
          className: q.dotDivider,
          color: "header-secondary",
          variant: "text-xs/normal",
          children: "•"
        }), i, (0, l.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: s
        })]
      })]
    }), f]
  })
});

function Z(e) {
  let {
    guildEvent: t,
    channel: n
  } = e, a = (0, u.useStateFromStoresArray)([T.default], () => T.default.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), s = (0, c.getChannelIconComponent)(n);
  return (0, l.jsx)(Q, {
    onClickCloseIcon: () => (0, U.hideLiveChannelNotice)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: z.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    topic: t.name,
    location: n.name,
    locationIcon: null != s ? (0, l.jsx)(s, {
      width: 16,
      height: 16,
      className: q.stageIcon
    }) : null,
    children: (0, l.jsx)(ea, {
      channel: n,
      speakers: a,
      voiceType: 1
    })
  })
}

function X(e) {
  let {
    guildEvent: t,
    noticeType: n
  } = e, a = (0, V.getNextRecurrenceIdInEvent)(t), s = (0, u.useStateFromStores)([b.default], () => b.default.isInterestedInEventRecurrence(t.id, a), [t.id, a]), i = (0, u.useStateFromStores)([G.default], () => G.default.getUpcomingNoticeSeenTime(t.id), [t.id]);
  return !s && null == i && (0, U.markUpcomingEventNoticeAsSeen)(t.id), (0, l.jsxs)(d.Button, {
    fullWidth: !0,
    className: q.joinButton,
    innerClassName: q.rsvpButton,
    onClick: function() {
      (0, Y.default)(t.id, null, t.guild_id, () => setTimeout(() => (0, U.hideUpcomingEventNotice)(t.id), 1e3)), M.default.track(K.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        guild_id: t.guild_id,
        notice_type: n
      })
    },
    look: s ? d.Button.Looks.OUTLINED : d.Button.Looks.FILLED,
    color: s ? d.Button.Colors.TRANSPARENT : d.Button.Colors.GREEN,
    size: d.Button.Sizes.SMALL,
    children: [s ? (0, l.jsx)(v.default, {
      width: 16,
      height: 16,
      className: q.buttonIcon
    }) : (0, l.jsx)(A.default, {
      width: 16,
      height: 16,
      className: q.buttonIcon
    }), z.default.Messages.INDICATE_RSVP]
  })
}

function J(e) {
  var t;
  let {
    guildEvent: n,
    noticeType: a
  } = e, s = (0, H.getLocationFromEvent)(n), r = null != s ? (0, w.guildEventDetailsParser)(s, !0) : null, u = (0, H.getChannelFromEvent)(n), f = (0, c.getChannelIconComponent)(u), {
    startTime: E,
    endTime: h
  } = (0, B.default)(n), {
    startDateTimeString: C,
    upcomingEvent: _,
    diffMinutes: m
  } = (0, V.getEventTimeData)(E.toISOString(), null == h ? void 0 : h.toISOString()), S = _ ? m > 0 ? z.default.Messages.STARTING_IN_MINUTES.format({
    minutes: m
  }) : z.default.Messages.STARTING_SOON : z.default.Messages.STARTING_ON_DATE.format({
    date: C
  });
  return i.useEffect(() => {
    M.default.track(K.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: a,
      guild_id: n.guild_id
    })
  }, [n, a]), (0, l.jsxs)("div", {
    className: q.channelNotice,
    children: [(0, l.jsxs)("div", {
      className: q.textBlock,
      children: [(0, l.jsx)(d.Clickable, {
        onClick: () => (0, x.openGuildEventDetails)({
          eventId: n.id
        }),
        className: q.eventNameClickable,
        children: (0, l.jsx)(d.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: q.eventName,
          children: n.name
        })
      }), (0, l.jsx)(d.Clickable, {
        onClick: () => {
          M.default.track(K.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
            notice_type: a,
            guild_id: n.guild_id
          }), (0, U.hideUpcomingEventNotice)(n.id)
        },
        className: q.closeIcon,
        "aria-label": z.default.Messages.CLOSE,
        children: (0, l.jsx)(R.default, {
          height: 16,
          width: 16
        })
      })]
    }), (0, l.jsxs)("div", {
      className: o()(q.textBlock, q.singleLine),
      children: [(0, l.jsx)(N.default, {
        className: q.stageIcon,
        width: 16,
        height: 16
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: q.startTime,
        children: S
      })]
    }), (0, l.jsxs)("div", {
      className: o()(q.textBlock, q.singleLine),
      children: [null != f ? (0, l.jsx)(f, {
        width: 16,
        height: 16,
        className: q.stageIcon
      }) : (0, l.jsx)(L.default, {
        width: 16,
        height: 16,
        className: q.stageIcon
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: q.channelName,
        children: null !== (t = null == u ? void 0 : u.name) && void 0 !== t ? t : r
      })]
    }), (0, l.jsx)(X, {
      guildEvent: n,
      noticeType: a
    })]
  })
}

function $(e) {
  let {
    guildEvent: t
  } = e, n = (0, H.getLocationFromEvent)(t);
  return null == n ? null : (0, l.jsx)(Q, {
    onClickCloseIcon: () => (0, U.hideLiveChannelNotice)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: z.default.Messages.HAPPENING_NOW,
    topic: t.name,
    location: (0, w.guildEventDetailsParser)(n, !0),
    locationIcon: (0, l.jsx)(L.default, {
      width: 16,
      height: 16,
      className: q.stageIcon
    }),
    children: (0, l.jsx)(ee, {
      guildEvent: t
    })
  })
}

function ee(e) {
  let {
    guildEvent: t
  } = e, n = i.useCallback(() => {
    (0, x.openGuildEventDetails)({
      eventId: t.id
    })
  }, [t]);
  return (0, l.jsx)(d.Button, {
    fullWidth: !0,
    className: q.joinButton,
    onClick: n,
    color: d.Button.Colors.GREEN,
    size: d.Button.Sizes.SMALL,
    children: z.default.Messages.SEE_DETAIL
  })
}

function et(e) {
  let {
    channel: t,
    label: n
  } = e;
  return (0, l.jsx)(d.Button, {
    fullWidth: !0,
    className: q.joinButton,
    onClick: () => {
      null != t && null != t.getGuildId() && ((0, C.connectAndOpen)(t), (0, h.transitionToGuild)(t.getGuildId(), t.id))
    },
    color: d.Button.Colors.GREEN,
    size: d.Button.Sizes.SMALL,
    children: n
  })
}

function en(e) {
  let {
    stageInstance: t,
    channel: n
  } = e, a = (0, u.useStateFromStoresArray)([_.default], () => [...new Set(_.default.getMutableParticipants(n.id, m.StageChannelParticipantNamedIndex.SPEAKER).map(e => e.user))], [n.id]), s = (0, u.useStateFromStores)([_.default], () => _.default.getParticipantCount(n.id, m.StageChannelParticipantNamedIndex.AUDIENCE), [n.id]), i = z.default.Messages.LISTENING_COUNT.format({
    count: "".concat(s)
  });
  return (0, l.jsx)(Q, {
    onClickCloseIcon: () => (0, U.hideLiveChannelNotice)({
      stageId: null == t ? void 0 : t.id
    }),
    heading: z.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    location: n.name,
    details: i,
    detailsIcon: (0, l.jsx)(O.default, {
      width: 14,
      height: 14,
      className: q.stageIcon
    }),
    locationIcon: (0, l.jsx)(P.default, {
      width: 16,
      height: 16,
      className: q.stageIcon
    }),
    topic: t.topic,
    children: (0, l.jsx)(ea, {
      channel: n,
      speakers: a,
      voiceType: 2
    })
  })
}

function ea(e) {
  let {
    channel: t,
    speakers: n,
    voiceType: a
  } = e, s = t.getGuildId(), r = i.useMemo(() => n.slice(0, 3), [n]), c = (0, u.useStateFromStores)([g.default], () => g.default.can(K.Permissions.CONNECT, t)), f = (0, I.default)(t.id), E = z.default.Messages.JOIN;
  switch (a) {
    case 1:
      E = z.default.Messages.JOIN;
      break;
    case 2:
      E = z.default.Messages.STAGE_CHANNEL_JOIN_BUTTON, (null == f ? void 0 : f.speaker) ? E = z.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != f && (E = z.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON);
      break;
    case 3:
      E = z.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA;
      break;
    default:
      (0, D.assertNever)(a)
  }
  return null == s ? null : (0, l.jsxs)(l.Fragment, {
    children: [r.length > 0 ? (0, l.jsxs)("div", {
      className: o()(q.textBlock, q.singleLine),
      children: [(0, l.jsx)(y.default, {
        guildId: s,
        users: r,
        showUserPopout: !0,
        size: y.Sizes.SIZE_16
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: q.userNames,
        children: (0, S.summarizeUsernamesParticipating)(s, r, null == t ? void 0 : t.id, n.length)
      })]
    }) : null, c && null == f && (0, l.jsx)(et, {
      channel: t,
      label: E
    })]
  })
}(s = a || (a = {}))[s.VOICE = 1] = "VOICE", s[s.STAGE = 2] = "STAGE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM", t.default = i.memo(function(e) {
  let {
    guild: t
  } = e, {
    showRedesignedLiveChannelNotice: n
  } = (0, f.useChannelNoticeRedesignExperiment)(!0), a = (0, k.useActiveEventOrStageInstanceChannel)(t.id), s = (0, F.useGuildActiveEvent)(t.id), i = (0, F.useGuildUpcomingEventsNotice)(t.id), r = (0, u.useStateFromStores)([p.default], () => p.default.getStageInstanceByChannel(null == a ? void 0 : a.id), [a]), {
    isStageNoticeHidden: o,
    isEventNoticeHidden: d
  } = (0, u.useStateFromStoresObject)([j.default], () => ({
    isStageNoticeHidden: j.default.isLiveChannelNoticeHidden({
      stageId: null == r ? void 0 : r.id
    }),
    isEventNoticeHidden: j.default.isLiveChannelNoticeHidden({
      eventId: null == s ? void 0 : s.id
    })
  }), [r, s]), c = null, h = null != r && null != a && !o;
  if (n) return (0, l.jsx)(E.default, {
    guild: t
  });
  null == s || d ? h && (c = (0, l.jsx)(en, {
    stageInstance: r,
    channel: a
  })) : s.entity_type === W.GuildScheduledEventEntityTypes.STAGE_INSTANCE && h ? c = (0, l.jsx)(en, {
    stageInstance: r,
    channel: a
  }) : s.entity_type === W.GuildScheduledEventEntityTypes.EXTERNAL ? c = (0, l.jsx)($, {
    guildEvent: s
  }) : s.entity_type === W.GuildScheduledEventEntityTypes.VOICE && null != a && (c = (0, l.jsx)(Z, {
    guildEvent: s,
    channel: a
  }));
  let C = t.hasFeature(K.GuildFeatures.COMMUNITY) || t.hasFeature(K.GuildFeatures.HUB);
  if (null == c && null != i && !C) {
    let {
      upcomingEvent: e,
      noticeType: t
    } = i;
    c = (0, l.jsx)(J, {
      guildEvent: e,
      noticeType: t
    })
  }
  return c
})