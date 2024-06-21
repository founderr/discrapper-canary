n.d(t, {
  Z: function() {
    return w
  }
}), n(47120);
var i, s, l = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(442837),
  u = n(692547),
  d = n(481060),
  E = n(232567),
  h = n(100527),
  _ = n(471445),
  I = n(15274),
  m = n(924301),
  g = n(504160),
  p = n(151864),
  N = n(725436),
  T = n(497656),
  C = n(554747),
  S = n(230900),
  A = n(854698),
  f = n(703656),
  Z = n(922482),
  v = n(565799),
  L = n(501655),
  O = n(427679),
  R = n(448206),
  x = n(484459),
  M = n(103575),
  P = n(496675),
  D = n(594174),
  b = n(662868),
  y = n(981631),
  j = n(765305),
  U = n(689938),
  G = n(846756);
(s = i || (i = {}))[s.STAGE = 0] = "STAGE", s[s.EVENT_EXTERNAL = 1] = "EVENT_EXTERNAL", s[s.EVENT_VOICE = 2] = "EVENT_VOICE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM";

function w(e) {
  let {
    guild: t,
    isStudyRoomNotice: n = !1
  } = e, i = (0, T.y)(t.id), s = (0, C.k5)(t.id), r = (0, c.e7)([O.Z], () => O.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]), {
    isStageNoticeHidden: w,
    isEventNoticeHidden: k
  } = (0, c.cj)([p.Z], () => ({
    isStageNoticeHidden: p.Z.isLiveChannelNoticeHidden({
      stageId: null == r ? void 0 : r.id
    }),
    isEventNoticeHidden: p.Z.isLiveChannelNoticeHidden({
      eventId: null == s ? void 0 : s.id
    })
  }), [r, s]), B = null == i ? void 0 : i.id, H = (0, c.Wu)([v.Z], () => [...new Set(v.Z.getMutableParticipants(B, L.pV.SPEAKER).map(e => e.user))], [B]), V = (0, c.e7)([v.Z], () => null != B ? v.Z.getParticipantCount(B, L.pV.AUDIENCE) : 0, [B]), F = (0, c.e7)([P.Z], () => P.Z.can(y.Plq.CONNECT, i)), Y = (0, R.Z)(null == i ? void 0 : i.id), z = null == s ? void 0 : s.creator_id, W = (0, c.e7)([D.default], () => D.default.getUser(z), [z]);
  a.useEffect(() => {
    null != z && (0, E.PR)(z)
  }, [z]);
  let {
    noticeType: K,
    title: q,
    location: Q,
    locationIcon: X,
    canListenIn: J,
    buttonText: $,
    users: ee,
    overflowUsers: et,
    onClose: en
  } = a.useMemo(() => (function(e) {
    let {
      guildEvent: t,
      stageInstance: n,
      activeChannel: i,
      canConnect: s,
      myRole: a,
      eventCreator: r,
      speakers: o,
      listenerCount: c,
      isEventNoticeHidden: u,
      isStageNoticeHidden: E,
      isStudyRoomNotice: h
    } = e, I = null != n && null != i && !E, p = null != t ? (0, A.DK)(t) : null;
    if (h && null != i) {
      let e = (0, _.KS)(i);
      return {
        noticeType: 3,
        title: "\uD83D\uDCDA☕ ".concat(i.name),
        location: U.Z.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
        locationIcon: null != e ? (0, l.jsx)(e, {
          size: "xs",
          color: "currentColor",
          className: G.locationIcon
        }) : null,
        canListenIn: s,
        buttonText: U.Z.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
        users: [],
        overflowUsers: null
      }
    }
    if (null == t || u) {
      if (I) {
        let e = U.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON;
        return (null == a ? void 0 : a.speaker) ? e = U.Z.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != a && (e = U.Z.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
          noticeType: 0,
          title: n.topic,
          location: i.name,
          locationIcon: (0, l.jsx)(d.StageIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: G.locationIcon
          }),
          canListenIn: s,
          buttonText: e,
          onClose: () => (0, g.ji)({
            stageId: null == n ? void 0 : n.id
          }),
          users: o.length > 5 ? o.slice(0, 5) : o,
          overflowUsers: c < 1 ? null : (0, l.jsxs)("div", {
            className: G.pill,
            children: [(0, l.jsx)(d.HeadphonesIcon, {
              size: "custom",
              color: "currentColor",
              width: 12,
              height: 12,
              className: G.pillIcon
            }), (0, l.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: G.pillLabel,
              children: c
            })]
          })
        }
      }
    } else {
      if (t.entity_type === j.WX.STAGE_INSTANCE && I) {
        let e = U.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON;
        return (null == a ? void 0 : a.speaker) ? e = U.Z.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != a && (e = U.Z.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
          noticeType: 0,
          title: n.topic,
          location: i.name,
          locationIcon: (0, l.jsx)(d.StageIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: G.locationIcon
          }),
          canListenIn: s,
          buttonText: e,
          onClose: () => (0, g.ji)({
            stageId: null == n ? void 0 : n.id
          }),
          users: o.length > 5 ? o.slice(0, 5) : o,
          overflowUsers: c < 1 ? null : (0, l.jsxs)("div", {
            className: G.pill,
            children: [(0, l.jsx)(d.HeadphonesIcon, {
              size: "custom",
              color: "currentColor",
              width: 12,
              height: 12,
              className: G.pillIcon
            }), (0, l.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: G.pillLabel,
              children: c
            })]
          })
        }
      }
      if (t.entity_type === j.WX.EXTERNAL) {
        let e = (0, S.cS)(t);
        if (null == e) return {
          noticeType: null
        };
        let n = m.ZP.getUserCount(t.id, p);
        return {
          noticeType: 1,
          title: t.name,
          location: (0, N.m)(e, !0),
          locationIcon: (0, l.jsx)(d.LocationIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: G.locationIcon
          }),
          canListenIn: !1,
          buttonText: U.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
          onClose: () => (0, g.ji)({
            eventId: null == t ? void 0 : t.id
          }),
          users: null == r ? [] : [r],
          overflowUsers: n < 1 ? null : (0, l.jsxs)("div", {
            className: G.pill,
            children: [(0, l.jsx)(d.StarIcon, {
              size: "custom",
              color: "currentColor",
              width: 12,
              height: 12,
              className: G.pillIcon
            }), (0, l.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: G.pillLabel,
              children: n
            })]
          })
        }
      } else if (t.entity_type === j.WX.VOICE && null != i) {
        let e = (0, _.KS)(i),
          n = m.ZP.getUserCount(t.id, p);
        return {
          noticeType: 2,
          title: t.name,
          location: i.name,
          locationIcon: null != e ? (0, l.jsx)(e, {
            size: "xs",
            color: "currentColor",
            className: G.locationIcon
          }) : null,
          canListenIn: s,
          buttonText: U.Z.Messages.GUILD_EVENT_JOIN,
          onClose: () => (0, g.ji)({
            eventId: null == t ? void 0 : t.id
          }),
          users: null == r ? [] : [r],
          overflowUsers: n < 1 ? null : (0, l.jsxs)("div", {
            className: G.pill,
            children: [(0, l.jsx)(d.StarIcon, {
              size: "custom",
              color: "currentColor",
              width: 12,
              height: 12,
              className: G.pillIcon
            }), (0, l.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: G.pillLabel,
              children: n
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
    activeChannel: i,
    canConnect: F,
    myRole: Y,
    eventCreator: W,
    speakers: H,
    listenerCount: V,
    isEventNoticeHidden: k,
    isStageNoticeHidden: w,
    isStudyRoomNotice: n
  }), [s, r, i, F, Y, W, H, V, k, w, n]);
  return null == K ? null : (0, l.jsxs)("div", {
    className: G.container,
    children: [null != en ? (0, l.jsx)(d.Clickable, {
      onClick: en,
      className: G.close,
      "aria-label": U.Z.Messages.DISMISS,
      children: (0, l.jsx)(d.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: G.closeIcon
      })
    }) : null, (0, l.jsxs)("div", {
      className: G.header,
      children: [(0, l.jsx)(b.Z, {
        color: u.Z.unsafe_rawColors.GREEN_230.css,
        width: 16,
        height: 16
      }), (0, l.jsx)(d.Text, {
        variant: "text-xs/semibold",
        color: "text-positive",
        children: U.Z.Messages.LIVE
      })]
    }), (ee.length > 0 || null != et) && (0, l.jsxs)("div", {
      className: G.participants,
      children: [ee.map(e => (0, l.jsx)(d.Popout, {
        preload: () => (0, x.W)(e, {
          guildId: t.id
        }),
        renderPopout: n => (0, l.jsx)(M.Z, {
          ...n,
          location: "LiveChannelNotice",
          userId: e.id,
          guildId: t.id,
          newAnalyticsLocations: [h.Z.AVATAR]
        }),
        position: "right",
        children: n => (0, l.jsx)(d.Avatar, {
          ...n,
          src: e.getAvatarURL(t.id, 24),
          "aria-label": e.username,
          size: d.AvatarSizes.SIZE_24,
          className: G.avatar
        })
      }, e.id)), et]
    }), (0, l.jsx)(d.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: o()(G.title, G.live),
      children: q
    }), (0, l.jsxs)("div", {
      className: G.locationContainer,
      children: [X, (0, l.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: G.location,
        children: Q
      })]
    }), J || 1 === K ? (0, l.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      color: d.Button.Colors.GREEN,
      onClick: () => {
        if (J) null != i && null != i.getGuildId() && ((0, Z.Cq)(i), (0, f.XU)(i.getGuildId(), i.id));
        else {
          if (null == s) return;
          (0, I.bO)({
            eventId: s.id
          })
        }
      },
      className: G.button,
      fullWidth: !0,
      children: $
    }) : null]
  })
}