"use strict";
n.r(t), n.d(t, {
  GuildNoticeBody: function() {
    return z
  },
  LiveVoiceOrStageChannelNotice: function() {
    return et
  },
  VoiceChannelType: function() {
    return a
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("442837"),
  o = n("481060"),
  u = n("471445"),
  d = n("986332"),
  c = n("662842"),
  f = n("703656"),
  E = n("922482"),
  _ = n("565799"),
  h = n("501655"),
  C = n("192079"),
  m = n("427679"),
  S = n("448206"),
  I = n("496675"),
  T = n("938475"),
  p = n("808602"),
  g = n("305878"),
  N = n("263704"),
  A = n("465670"),
  R = n("242315"),
  O = n("393112"),
  v = n("170039"),
  L = n("602623"),
  P = n("626135"),
  M = n("823379"),
  y = n("15274"),
  D = n("924301"),
  x = n("504160"),
  b = n("151864"),
  U = n("835184"),
  j = n("725436"),
  G = n("497656"),
  w = n("79874"),
  k = n("554747"),
  F = n("230900"),
  B = n("854698"),
  H = n("139712"),
  V = n("765305"),
  Y = n("981631"),
  W = n("689938"),
  K = n("391236");
let z = i.memo(function(e) {
  let {
    heading: t,
    location: n,
    locationIcon: a,
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
        children: (0, l.jsx)(A.default, {
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
      children: [a, (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: K.channelName,
        children: n
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
    channel: n
  } = e, a = (0, r.useStateFromStoresArray)([T.default], () => T.default.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), s = (0, u.getChannelIconComponent)(n);
  return (0, l.jsx)(z, {
    onClickCloseIcon: () => (0, x.hideLiveChannelNotice)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: W.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    topic: t.name,
    location: n.name,
    locationIcon: null != s ? (0, l.jsx)(s, {
      width: 16,
      height: 16,
      className: K.stageIcon
    }) : null,
    children: (0, l.jsx)(et, {
      channel: n,
      speakers: a,
      voiceType: 1
    })
  })
}

function Q(e) {
  let {
    guildEvent: t,
    noticeType: n
  } = e, a = (0, B.getNextRecurrenceIdInEvent)(t), s = (0, r.useStateFromStores)([D.default], () => D.default.isInterestedInEventRecurrence(t.id, a), [t.id, a]), i = (0, r.useStateFromStores)([U.default], () => U.default.getUpcomingNoticeSeenTime(t.id), [t.id]);
  return !s && null == i && (0, x.markUpcomingEventNoticeAsSeen)(t.id), (0, l.jsxs)(o.Button, {
    fullWidth: !0,
    className: K.joinButton,
    innerClassName: K.rsvpButton,
    onClick: function() {
      (0, H.default)(t.id, null, t.guild_id, () => setTimeout(() => (0, x.hideUpcomingEventNotice)(t.id), 1e3)), P.default.track(Y.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        guild_id: t.guild_id,
        notice_type: n
      })
    },
    look: s ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
    color: s ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    children: [s ? (0, l.jsx)(N.default, {
      width: 16,
      height: 16,
      className: K.buttonIcon
    }) : (0, l.jsx)(p.default, {
      width: 16,
      height: 16,
      className: K.buttonIcon
    }), W.default.Messages.INDICATE_RSVP]
  })
}

function Z(e) {
  var t;
  let {
    guildEvent: n,
    noticeType: a
  } = e, s = (0, F.getLocationFromEvent)(n), r = null != s ? (0, j.guildEventDetailsParser)(s, !0) : null, d = (0, F.getChannelFromEvent)(n), c = (0, u.getChannelIconComponent)(d), {
    startTime: f,
    endTime: E
  } = (0, w.default)(n.id), {
    startDateTimeString: _,
    upcomingEvent: h,
    diffMinutes: C
  } = (0, B.getEventTimeData)(f.toISOString(), null == E ? void 0 : E.toISOString()), m = h ? C > 0 ? W.default.Messages.STARTING_IN_MINUTES.format({
    minutes: C
  }) : W.default.Messages.STARTING_SOON : W.default.Messages.STARTING_ON_DATE.format({
    date: _
  });
  return i.useEffect(() => {
    P.default.track(Y.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: a,
      guild_id: n.guild_id
    })
  }, [n, a]), (0, l.jsxs)("div", {
    className: K.channelNotice,
    children: [(0, l.jsxs)("div", {
      className: K.textBlock,
      children: [(0, l.jsx)(o.Clickable, {
        onClick: () => (0, y.openGuildEventDetails)({
          eventId: n.id
        }),
        className: K.eventNameClickable,
        children: (0, l.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: K.eventName,
          children: n.name
        })
      }), (0, l.jsx)(o.Clickable, {
        onClick: () => {
          P.default.track(Y.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
            notice_type: a,
            guild_id: n.guild_id
          }), (0, x.hideUpcomingEventNotice)(n.id)
        },
        className: K.closeIcon,
        "aria-label": W.default.Messages.CLOSE,
        children: (0, l.jsx)(A.default, {
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
      }) : (0, l.jsx)(O.default, {
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
      guildEvent: n,
      noticeType: a
    })]
  })
}

function X(e) {
  let {
    guildEvent: t
  } = e, n = (0, F.getLocationFromEvent)(t);
  return null == n ? null : (0, l.jsx)(z, {
    onClickCloseIcon: () => (0, x.hideLiveChannelNotice)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: W.default.Messages.HAPPENING_NOW,
    topic: t.name,
    location: (0, j.guildEventDetailsParser)(n, !0),
    locationIcon: (0, l.jsx)(O.default, {
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
  } = e, n = i.useCallback(() => {
    (0, y.openGuildEventDetails)({
      eventId: t.id
    })
  }, [t]);
  return (0, l.jsx)(o.Button, {
    fullWidth: !0,
    className: K.joinButton,
    onClick: n,
    color: o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    children: W.default.Messages.SEE_DETAIL
  })
}

function $(e) {
  let {
    channel: t,
    label: n
  } = e;
  return (0, l.jsx)(o.Button, {
    fullWidth: !0,
    className: K.joinButton,
    onClick: () => {
      null != t && null != t.getGuildId() && ((0, E.connectAndOpen)(t), (0, f.transitionToGuild)(t.getGuildId(), t.id))
    },
    color: o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    children: n
  })
}

function ee(e) {
  let {
    stageInstance: t,
    channel: n
  } = e, a = (0, r.useStateFromStoresArray)([_.default], () => [...new Set(_.default.getMutableParticipants(n.id, h.StageChannelParticipantNamedIndex.SPEAKER).map(e => e.user))], [n.id]), s = (0, r.useStateFromStores)([_.default], () => _.default.getParticipantCount(n.id, h.StageChannelParticipantNamedIndex.AUDIENCE), [n.id]), i = W.default.Messages.LISTENING_COUNT.format({
    count: "".concat(s)
  });
  return (0, l.jsx)(z, {
    onClickCloseIcon: () => (0, x.hideLiveChannelNotice)({
      stageId: null == t ? void 0 : t.id
    }),
    heading: W.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    location: n.name,
    details: i,
    detailsIcon: (0, l.jsx)(R.default, {
      width: 14,
      height: 14,
      className: K.stageIcon
    }),
    locationIcon: (0, l.jsx)(v.default, {
      width: 16,
      height: 16,
      className: K.stageIcon
    }),
    topic: t.topic,
    children: (0, l.jsx)(et, {
      channel: n,
      speakers: a,
      voiceType: 2
    })
  })
}

function et(e) {
  let {
    channel: t,
    speakers: n,
    voiceType: a
  } = e, s = t.getGuildId(), u = i.useMemo(() => n.slice(0, 3), [n]), d = (0, r.useStateFromStores)([I.default], () => I.default.can(Y.Permissions.CONNECT, t)), c = (0, S.default)(t.id), f = W.default.Messages.JOIN;
  switch (a) {
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
      (0, M.assertNever)(a)
  }
  return null == s ? null : (0, l.jsxs)(l.Fragment, {
    children: [u.length > 0 ? (0, l.jsxs)("div", {
      className: K.textBlock,
      children: [(0, l.jsx)(L.default, {
        guildId: s,
        users: u,
        showUserPopout: !0,
        size: L.Sizes.SIZE_16
      }), (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: K.userNames,
        children: (0, C.summarizeUsernamesParticipating)(s, u, null == t ? void 0 : t.id, n.length)
      })]
    }) : null, d && null == c && (0, l.jsx)($, {
      channel: t,
      label: f
    })]
  })
}(s = a || (a = {}))[s.VOICE = 1] = "VOICE", s[s.STAGE = 2] = "STAGE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM", t.default = i.memo(function(e) {
  let {
    guild: t
  } = e, {
    showRedesignedLiveChannelNotice: n
  } = (0, d.useChannelNoticeRedesignExperiment)(!0), a = (0, G.useActiveEventOrStageInstanceChannel)(t.id), s = (0, k.useGuildActiveEvent)(t.id), i = (0, k.useGuildUpcomingEventsNotice)(t.id), o = (0, r.useStateFromStores)([m.default], () => m.default.getStageInstanceByChannel(null == a ? void 0 : a.id), [a]), {
    isStageNoticeHidden: u,
    isEventNoticeHidden: f
  } = (0, r.useStateFromStoresObject)([b.default], () => ({
    isStageNoticeHidden: b.default.isLiveChannelNoticeHidden({
      stageId: null == o ? void 0 : o.id
    }),
    isEventNoticeHidden: b.default.isLiveChannelNoticeHidden({
      eventId: null == s ? void 0 : s.id
    })
  }), [o, s]), E = null, _ = null != o && null != a && !u;
  if (n) return (0, l.jsx)(c.default, {
    guild: t
  });
  null == s || f ? _ && (E = (0, l.jsx)(ee, {
    stageInstance: o,
    channel: a
  })) : s.entity_type === V.GuildScheduledEventEntityTypes.STAGE_INSTANCE && _ ? E = (0, l.jsx)(ee, {
    stageInstance: o,
    channel: a
  }) : s.entity_type === V.GuildScheduledEventEntityTypes.EXTERNAL ? E = (0, l.jsx)(X, {
    guildEvent: s
  }) : s.entity_type === V.GuildScheduledEventEntityTypes.VOICE && null != a && (E = (0, l.jsx)(q, {
    guildEvent: s,
    channel: a
  }));
  let h = t.hasFeature(Y.GuildFeatures.COMMUNITY) || t.hasFeature(Y.GuildFeatures.HUB);
  if (null == E && null != i && !h) {
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