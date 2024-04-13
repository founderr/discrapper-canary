"use strict";
a.r(t), a.d(t, {
  default: function() {
    return Y
  }
}), a("47120");
var n, s, l = a("735250"),
  i = a("470079"),
  r = a("803997"),
  o = a.n(r),
  u = a("442837"),
  d = a("692547"),
  c = a("481060"),
  f = a("232567"),
  E = a("100527"),
  h = a("471445"),
  _ = a("15274"),
  C = a("924301"),
  m = a("504160"),
  S = a("151864"),
  I = a("725436"),
  p = a("497656"),
  T = a("554747"),
  g = a("230900"),
  A = a("854698"),
  N = a("703656"),
  v = a("922482"),
  R = a("565799"),
  O = a("501655"),
  L = a("427679"),
  M = a("448206"),
  P = a("484459"),
  x = a("103575"),
  y = a("496675"),
  D = a("594174"),
  b = a("465670"),
  U = a("242315"),
  j = a("662868"),
  G = a("393112"),
  w = a("170039"),
  k = a("898140"),
  F = a("981631"),
  H = a("765305"),
  B = a("689938"),
  V = a("615273");
(s = n || (n = {}))[s.STAGE = 0] = "STAGE", s[s.EVENT_EXTERNAL = 1] = "EVENT_EXTERNAL", s[s.EVENT_VOICE = 2] = "EVENT_VOICE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM";

function Y(e) {
  let {
    guild: t,
    isStudyRoomNotice: a = !1
  } = e, n = (0, p.useActiveEventOrStageInstanceChannel)(t.id), s = (0, T.useGuildActiveEvent)(t.id), r = (0, u.useStateFromStores)([L.default], () => L.default.getStageInstanceByChannel(null == n ? void 0 : n.id), [n]), {
    isStageNoticeHidden: Y,
    isEventNoticeHidden: W
  } = (0, u.useStateFromStoresObject)([S.default], () => ({
    isStageNoticeHidden: S.default.isLiveChannelNoticeHidden({
      stageId: null == r ? void 0 : r.id
    }),
    isEventNoticeHidden: S.default.isLiveChannelNoticeHidden({
      eventId: null == s ? void 0 : s.id
    })
  }), [r, s]), K = null == n ? void 0 : n.id, z = (0, u.useStateFromStoresArray)([R.default], () => [...new Set(R.default.getMutableParticipants(K, O.StageChannelParticipantNamedIndex.SPEAKER).map(e => e.user))], [K]), q = (0, u.useStateFromStores)([R.default], () => null != K ? R.default.getParticipantCount(K, O.StageChannelParticipantNamedIndex.AUDIENCE) : 0, [K]), Q = (0, u.useStateFromStores)([y.default], () => y.default.can(F.Permissions.CONNECT, n)), Z = (0, M.default)(null == n ? void 0 : n.id), X = null == s ? void 0 : s.creator_id, J = (0, u.useStateFromStores)([D.default], () => D.default.getUser(X), [X]);
  i.useEffect(() => {
    null != X && (0, f.getUser)(X)
  }, [X]);
  let {
    noticeType: $,
    title: ee,
    location: et,
    locationIcon: ea,
    canListenIn: en,
    buttonText: es,
    users: el,
    overflowUsers: ei,
    onClose: er
  } = i.useMemo(() => (function(e) {
    let {
      guildEvent: t,
      stageInstance: a,
      activeChannel: n,
      canConnect: s,
      myRole: i,
      eventCreator: r,
      speakers: o,
      listenerCount: u,
      isEventNoticeHidden: d,
      isStageNoticeHidden: f,
      isStudyRoomNotice: E
    } = e, _ = null != a && null != n && !f, S = null != t ? (0, A.getNextRecurrenceIdInEvent)(t) : null;
    if (E && null != n) {
      let e = (0, h.getChannelIconComponent)(n);
      return {
        noticeType: 3,
        title: "\uD83D\uDCDA☕ ".concat(n.name),
        location: B.default.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
        locationIcon: null != e ? (0, l.jsx)(e, {
          width: 16,
          height: 16,
          className: V.locationIcon
        }) : null,
        canListenIn: s,
        buttonText: B.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
        users: [],
        overflowUsers: null
      }
    }
    if (null == t || d) {
      if (_) {
        let e = B.default.Messages.STAGE_CHANNEL_JOIN_BUTTON;
        return (null == i ? void 0 : i.speaker) ? e = B.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != i && (e = B.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
          noticeType: 0,
          title: a.topic,
          location: n.name,
          locationIcon: (0, l.jsx)(w.default, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }),
          canListenIn: s,
          buttonText: e,
          onClose: () => (0, m.hideLiveChannelNotice)({
            stageId: null == a ? void 0 : a.id
          }),
          users: o.length > 5 ? o.slice(0, 5) : o,
          overflowUsers: u < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(U.default, {
              width: 12,
              height: 12,
              className: V.pillIcon
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: V.pillLabel,
              children: u
            })]
          })
        }
      }
    } else {
      if (t.entity_type === H.GuildScheduledEventEntityTypes.STAGE_INSTANCE && _) {
        let e = B.default.Messages.STAGE_CHANNEL_JOIN_BUTTON;
        return (null == i ? void 0 : i.speaker) ? e = B.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != i && (e = B.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
          noticeType: 0,
          title: a.topic,
          location: n.name,
          locationIcon: (0, l.jsx)(w.default, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }),
          canListenIn: s,
          buttonText: e,
          onClose: () => (0, m.hideLiveChannelNotice)({
            stageId: null == a ? void 0 : a.id
          }),
          users: o.length > 5 ? o.slice(0, 5) : o,
          overflowUsers: u < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(U.default, {
              width: 12,
              height: 12,
              className: V.pillIcon
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: V.pillLabel,
              children: u
            })]
          })
        }
      }
      if (t.entity_type === H.GuildScheduledEventEntityTypes.EXTERNAL) {
        let e = (0, g.getLocationFromEvent)(t);
        if (null == e) return {
          noticeType: null
        };
        let a = C.default.getUserCount(t.id, S);
        return {
          noticeType: 1,
          title: t.name,
          location: (0, I.guildEventDetailsParser)(e, !0),
          locationIcon: (0, l.jsx)(G.default, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }),
          canListenIn: !1,
          buttonText: B.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
          onClose: () => (0, m.hideLiveChannelNotice)({
            eventId: null == t ? void 0 : t.id
          }),
          users: null == r ? [] : [r],
          overflowUsers: a < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(k.default, {
              width: 12,
              height: 12,
              className: V.pillIcon
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: V.pillLabel,
              children: a
            })]
          })
        }
      } else if (t.entity_type === H.GuildScheduledEventEntityTypes.VOICE && null != n) {
        let e = (0, h.getChannelIconComponent)(n),
          a = C.default.getUserCount(t.id, S);
        return {
          noticeType: 2,
          title: t.name,
          location: n.name,
          locationIcon: null != e ? (0, l.jsx)(e, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }) : null,
          canListenIn: s,
          buttonText: B.default.Messages.GUILD_EVENT_JOIN,
          onClose: () => (0, m.hideLiveChannelNotice)({
            eventId: null == t ? void 0 : t.id
          }),
          users: null == r ? [] : [r],
          overflowUsers: a < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(k.default, {
              width: 12,
              height: 12,
              className: V.pillIcon
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: V.pillLabel,
              children: a
            })]
          })
        }
      }
    }
    return {
      noticeType: null
    }
  })({
    guildEvent: s,
    stageInstance: r,
    activeChannel: n,
    canConnect: Q,
    myRole: Z,
    eventCreator: J,
    speakers: z,
    listenerCount: q,
    isEventNoticeHidden: W,
    isStageNoticeHidden: Y,
    isStudyRoomNotice: a
  }), [s, r, n, Q, Z, J, z, q, W, Y, a]);
  return null == $ ? null : (0, l.jsxs)("div", {
    className: V.container,
    children: [null != er ? (0, l.jsx)(c.Clickable, {
      onClick: er,
      className: V.close,
      "aria-label": B.default.Messages.DISMISS,
      children: (0, l.jsx)(b.default, {
        className: V.closeIcon
      })
    }) : null, (0, l.jsxs)("div", {
      className: V.header,
      children: [(0, l.jsx)(j.default, {
        color: d.default.unsafe_rawColors.GREEN_230.css,
        width: 16,
        height: 16
      }), (0, l.jsx)(c.Text, {
        variant: "text-xs/semibold",
        color: "text-positive",
        children: B.default.Messages.LIVE
      })]
    }), (el.length > 0 || null != ei) && (0, l.jsxs)("div", {
      className: V.participants,
      children: [el.map(e => (0, l.jsx)(c.Popout, {
        preload: () => (0, P.maybeFetchUserProfileForPopout)(e, {
          guildId: t.id
        }),
        renderPopout: t => (0, l.jsx)(x.default, {
          ...t,
          location: "LiveChannelNotice",
          userId: e.id,
          newAnalyticsLocations: [E.default.AVATAR]
        }),
        position: "right",
        children: a => (0, l.jsx)(c.Avatar, {
          ...a,
          src: e.getAvatarURL(t.id, 24),
          "aria-label": e.username,
          size: c.AvatarSizes.SIZE_24,
          className: V.avatar
        })
      }, e.id)), ei]
    }), (0, l.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: o()(V.title, V.live),
      children: ee
    }), (0, l.jsxs)("div", {
      className: V.locationContainer,
      children: [ea, (0, l.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: V.location,
        children: et
      })]
    }), en || 1 === $ ? (0, l.jsx)(c.Button, {
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.GREEN,
      onClick: () => {
        if (en) null != n && null != n.getGuildId() && ((0, v.connectAndOpen)(n), (0, N.transitionToGuild)(n.getGuildId(), n.id));
        else {
          if (null == s) return;
          (0, _.openGuildEventDetails)({
            eventId: s.id
          })
        }
      },
      className: V.button,
      fullWidth: !0,
      children: es
    }) : null]
  })
}