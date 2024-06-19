n.d(t, {
  Co: function() {
    return Q
  },
  bZ: function() {
    return i
  },
  gt: function() {
    return H
  }
}), n(47120);
var i, s, l = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(471445),
  E = n(986332),
  h = n(662842),
  _ = n(703656),
  I = n(922482),
  m = n(565799),
  g = n(501655),
  p = n(192079),
  T = n(427679),
  N = n(448206),
  S = n(496675),
  C = n(938475),
  A = n(602623),
  f = n(626135),
  Z = n(823379),
  v = n(15274),
  L = n(924301),
  O = n(504160),
  R = n(151864),
  x = n(835184),
  M = n(725436),
  P = n(497656),
  D = n(79874),
  b = n(554747),
  y = n(230900),
  j = n(854698),
  U = n(139712),
  G = n(765305),
  w = n(981631),
  k = n(689938),
  B = n(267455);
let H = a.memo(function(e) {
  let {
    heading: t,
    location: n,
    locationIcon: i,
    details: s,
    detailsIcon: a,
    topic: r,
    onClickCloseIcon: c,
    onClickTopicText: d,
    children: E
  } = e, h = (0, l.jsx)(u.Text, {
    color: "header-primary",
    variant: "text-md/semibold",
    className: B.eventName,
    children: r
  });
  return (0, l.jsxs)("div", {
    className: B.channelNotice,
    children: [(0, l.jsxs)("div", {
      className: o()(B.textBlock, B.singleLine),
      children: [(0, l.jsx)("div", {
        className: B.liveIndicator
      }), (0, l.jsx)(u.Text, {
        color: "text-positive",
        variant: "text-xs/bold",
        className: B.liveNowText,
        children: t
      }), null != c && (0, l.jsx)(u.Clickable, {
        onClick: c,
        className: B.closeIcon,
        "aria-label": k.Z.Messages.CLOSE,
        children: (0, l.jsx)(u.CloseSmallIcon, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), null == d ? h : (0, l.jsx)(u.Button, {
      size: u.Button.Sizes.MIN,
      look: u.Button.Looks.LINK,
      color: u.Button.Colors.PRIMARY,
      onClick: d,
      children: h
    }), (0, l.jsxs)("div", {
      className: o()(B.textBlock, B.singleLine),
      children: [i, (0, l.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: B.channelName,
        children: n
      }), null != s && null != a && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.Text, {
          className: B.dotDivider,
          color: "header-secondary",
          variant: "text-xs/normal",
          children: "•"
        }), a, (0, l.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: s
        })]
      })]
    }), E]
  })
});

function V(e) {
  let {
    guildEvent: t,
    channel: n
  } = e, i = (0, c.Wu)([C.ZP], () => C.ZP.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), s = (0, d.KS)(n);
  return (0, l.jsx)(H, {
    onClickCloseIcon: () => (0, O.ji)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: k.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
    topic: t.name,
    location: n.name,
    locationIcon: null != s ? (0, l.jsx)(s, {
      size: "xs",
      color: "currentColor",
      className: B.stageIcon
    }) : null,
    children: (0, l.jsx)(Q, {
      channel: n,
      speakers: i,
      voiceType: 1
    })
  })
}

function F(e) {
  let {
    guildEvent: t,
    noticeType: n
  } = e, i = (0, j.DK)(t), s = (0, c.e7)([L.ZP], () => L.ZP.isInterestedInEventRecurrence(t.id, i), [t.id, i]), a = (0, c.e7)([x.Z], () => x.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
  return !s && null == a && (0, O._6)(t.id), (0, l.jsxs)(u.Button, {
    fullWidth: !0,
    className: B.joinButton,
    innerClassName: B.rsvpButton,
    onClick: function() {
      (0, U.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, O.L_)(t.id), 1e3)), f.default.track(w.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
        guild_id: t.guild_id,
        notice_type: n
      })
    },
    look: s ? u.Button.Looks.OUTLINED : u.Button.Looks.FILLED,
    color: s ? u.Button.Colors.TRANSPARENT : u.Button.Colors.GREEN,
    size: u.Button.Sizes.SMALL,
    children: [s ? (0, l.jsx)(u.CheckmarkLargeIcon, {
      size: "custom",
      color: "currentColor",
      width: 16,
      height: 16,
      className: B.buttonIcon
    }) : (0, l.jsx)(u.BellIcon, {
      size: "custom",
      color: "currentColor",
      width: 16,
      height: 16,
      className: B.buttonIcon
    }), k.Z.Messages.INDICATE_RSVP]
  })
}

function Y(e) {
  var t;
  let {
    guildEvent: n,
    noticeType: i
  } = e, s = (0, y.cS)(n), r = null != s ? (0, M.m)(s, !0) : null, c = (0, y.nE)(n), E = (0, d.KS)(c), {
    startTime: h,
    endTime: _
  } = (0, D.ZP)(n), {
    startDateTimeString: I,
    upcomingEvent: m,
    diffMinutes: g
  } = (0, j.ub)(h.toISOString(), null == _ ? void 0 : _.toISOString()), p = m ? g > 0 ? k.Z.Messages.STARTING_IN_MINUTES.format({
    minutes: g
  }) : k.Z.Messages.STARTING_SOON : k.Z.Messages.STARTING_ON_DATE.format({
    date: I
  });
  return a.useEffect(() => {
    f.default.track(w.rMx.CHANNEL_NOTICE_VIEWED, {
      notice_type: i,
      guild_id: n.guild_id
    })
  }, [n, i]), (0, l.jsxs)("div", {
    className: B.channelNotice,
    children: [(0, l.jsxs)("div", {
      className: B.textBlock,
      children: [(0, l.jsx)(u.Clickable, {
        onClick: () => (0, v.bO)({
          eventId: n.id
        }),
        className: B.eventNameClickable,
        children: (0, l.jsx)(u.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: B.eventName,
          children: n.name
        })
      }), (0, l.jsx)(u.Clickable, {
        onClick: () => {
          f.default.track(w.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: i,
            guild_id: n.guild_id
          }), (0, O.L_)(n.id)
        },
        className: B.closeIcon,
        "aria-label": k.Z.Messages.CLOSE,
        children: (0, l.jsx)(u.CloseSmallIcon, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, l.jsxs)("div", {
      className: o()(B.textBlock, B.singleLine),
      children: [(0, l.jsx)(u.CalendarIcon, {
        size: "custom",
        color: "currentColor",
        className: B.stageIcon,
        width: 16,
        height: 16
      }), (0, l.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: B.startTime,
        children: p
      })]
    }), (0, l.jsxs)("div", {
      className: o()(B.textBlock, B.singleLine),
      children: [null != E ? (0, l.jsx)(E, {
        size: "xs",
        color: "currentColor",
        className: B.stageIcon
      }) : (0, l.jsx)(u.LocationIcon, {
        size: "custom",
        color: "currentColor",
        width: 16,
        height: 16,
        className: B.stageIcon
      }), (0, l.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: B.channelName,
        children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : r
      })]
    }), (0, l.jsx)(F, {
      guildEvent: n,
      noticeType: i
    })]
  })
}

function z(e) {
  let {
    guildEvent: t
  } = e, n = (0, y.cS)(t);
  return null == n ? null : (0, l.jsx)(H, {
    onClickCloseIcon: () => (0, O.ji)({
      eventId: null == t ? void 0 : t.id
    }),
    heading: k.Z.Messages.HAPPENING_NOW,
    topic: t.name,
    location: (0, M.m)(n, !0),
    locationIcon: (0, l.jsx)(u.LocationIcon, {
      size: "custom",
      color: "currentColor",
      width: 16,
      height: 16,
      className: B.stageIcon
    }),
    children: (0, l.jsx)(W, {
      guildEvent: t
    })
  })
}

function W(e) {
  let {
    guildEvent: t
  } = e, n = a.useCallback(() => {
    (0, v.bO)({
      eventId: t.id
    })
  }, [t]);
  return (0, l.jsx)(u.Button, {
    fullWidth: !0,
    className: B.joinButton,
    onClick: n,
    color: u.Button.Colors.GREEN,
    size: u.Button.Sizes.SMALL,
    children: k.Z.Messages.SEE_DETAIL
  })
}

function K(e) {
  let {
    channel: t,
    label: n
  } = e;
  return (0, l.jsx)(u.Button, {
    fullWidth: !0,
    className: B.joinButton,
    onClick: () => {
      null != t && null != t.getGuildId() && ((0, I.Cq)(t), (0, _.XU)(t.getGuildId(), t.id))
    },
    color: u.Button.Colors.GREEN,
    size: u.Button.Sizes.SMALL,
    children: n
  })
}

function q(e) {
  let {
    stageInstance: t,
    channel: n
  } = e, i = (0, c.Wu)([m.Z], () => [...new Set(m.Z.getMutableParticipants(n.id, g.pV.SPEAKER).map(e => e.user))], [n.id]), s = (0, c.e7)([m.Z], () => m.Z.getParticipantCount(n.id, g.pV.AUDIENCE), [n.id]), a = k.Z.Messages.LISTENING_COUNT.format({
    count: "".concat(s)
  });
  return (0, l.jsx)(H, {
    onClickCloseIcon: () => (0, O.ji)({
      stageId: null == t ? void 0 : t.id
    }),
    heading: k.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
    location: n.name,
    details: a,
    detailsIcon: (0, l.jsx)(u.HeadphonesIcon, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14,
      className: B.stageIcon
    }),
    locationIcon: (0, l.jsx)(u.StageIcon, {
      size: "custom",
      color: "currentColor",
      width: 16,
      height: 16,
      className: B.stageIcon
    }),
    topic: t.topic,
    children: (0, l.jsx)(Q, {
      channel: n,
      speakers: i,
      voiceType: 2
    })
  })
}

function Q(e) {
  let {
    channel: t,
    speakers: n,
    voiceType: i
  } = e, s = t.getGuildId(), r = a.useMemo(() => n.slice(0, 3), [n]), d = (0, c.e7)([S.Z], () => S.Z.can(w.Plq.CONNECT, t)), E = (0, N.Z)(t.id), h = k.Z.Messages.JOIN;
  switch (i) {
    case 1:
      h = k.Z.Messages.JOIN;
      break;
    case 2:
      h = k.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON, (null == E ? void 0 : E.speaker) ? h = k.Z.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != E && (h = k.Z.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON);
      break;
    case 3:
      h = k.Z.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA;
      break;
    default:
      (0, Z.vE)(i)
  }
  return null == s ? null : (0, l.jsxs)(l.Fragment, {
    children: [r.length > 0 ? (0, l.jsxs)("div", {
      className: o()(B.textBlock, B.singleLine),
      children: [(0, l.jsx)(A.Z, {
        guildId: s,
        users: r,
        showUserPopout: !0,
        size: A.u.SIZE_16
      }), (0, l.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: B.userNames,
        children: (0, p.ER)(s, r, null == t ? void 0 : t.id, n.length)
      })]
    }) : null, d && null == E && (0, l.jsx)(K, {
      channel: t,
      label: h
    })]
  })
}(s = i || (i = {}))[s.VOICE = 1] = "VOICE", s[s.STAGE = 2] = "STAGE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM", t.ZP = a.memo(function(e) {
  let {
    guild: t
  } = e, {
    showRedesignedLiveChannelNotice: n
  } = (0, E.o)(!0), i = (0, P.y)(t.id), s = (0, b.k5)(t.id), a = (0, b.Vm)(t.id), r = (0, c.e7)([T.Z], () => T.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]), {
    isStageNoticeHidden: o,
    isEventNoticeHidden: u
  } = (0, c.cj)([R.Z], () => ({
    isStageNoticeHidden: R.Z.isLiveChannelNoticeHidden({
      stageId: null == r ? void 0 : r.id
    }),
    isEventNoticeHidden: R.Z.isLiveChannelNoticeHidden({
      eventId: null == s ? void 0 : s.id
    })
  }), [r, s]), d = null, _ = null != r && null != i && !o;
  if (n) return (0, l.jsx)(h.Z, {
    guild: t
  });
  null == s || u ? _ && (d = (0, l.jsx)(q, {
    stageInstance: r,
    channel: i
  })) : s.entity_type === G.WX.STAGE_INSTANCE && _ ? d = (0, l.jsx)(q, {
    stageInstance: r,
    channel: i
  }) : s.entity_type === G.WX.EXTERNAL ? d = (0, l.jsx)(z, {
    guildEvent: s
  }) : s.entity_type === G.WX.VOICE && null != i && (d = (0, l.jsx)(V, {
    guildEvent: s,
    channel: i
  }));
  let I = t.hasFeature(w.oNc.COMMUNITY) || t.hasFeature(w.oNc.HUB);
  if (null == d && null != a && !I) {
    let {
      upcomingEvent: e,
      noticeType: t
    } = a;
    d = (0, l.jsx)(Y, {
      guildEvent: e,
      noticeType: t
    })
  }
  return d
})