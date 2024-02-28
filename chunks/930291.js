"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  u = n("77078"),
  o = n("987317"),
  d = n("771325"),
  c = n("271938"),
  f = n("26989"),
  h = n("957255"),
  m = n("945956"),
  p = n("697218"),
  E = n("599110"),
  g = n("233965"),
  C = n("699209"),
  S = n("808742"),
  _ = n("342845"),
  I = n("661743"),
  T = n("49111"),
  v = n("782340"),
  x = n("656007"),
  N = e => {
    let {
      hangStatusActivity: t,
      userId: s,
      channel: N,
      previewIsOpen: A
    } = e, {
      enableHangStatus: M
    } = C.HangStatusExperiment.useExperiment({
      guildId: N.guild_id,
      location: "HangStatusPopout"
    }), R = (0, r.default)([c.default], () => c.default.getId()), j = (0, r.default)([p.default], () => p.default.getUser(s)), L = (0, r.default)([m.default], () => m.default.getChannelId() === N.id), O = (0, r.default)([h.default], () => h.default.can(T.Permissions.CONNECT, N)), y = (0, r.default)([f.default], () => null != N.guild_id && null != j ? f.default.getMember(N.guild_id, s) : null), P = a.useMemo(() => null != j ? (0, d.getPreviewAvatar)(void 0, y, j, {
      size: 40
    }) : void 0, [y, j]);
    return (a.useEffect(() => {
      M && null != t && A && null != j && R !== s && E.default.track(T.AnalyticEvents.VIEW_HANG_STATUS, {
        source: "HangStatusPopout",
        guild_id: N.guild_id,
        channel_id: N.id
      })
    }, [M, t, A, j, R, s, N]), M && null != j) ? R === s ? (0, l.jsx)("div", {
      className: i(x.popoutWrapper, {
        [x.mounted]: A
      }),
      children: (0, l.jsx)(I.HangStatusPopout, {
        currentStatus: t
      })
    }) : null == t ? null : (0, l.jsx)("div", {
      className: i(x.popoutWrapper, {
        [x.mounted]: A
      }),
      children: (0, l.jsxs)("div", {
        className: x.popout,
        children: [(0, l.jsxs)("div", {
          className: x.contentContainer,
          children: [(0, l.jsxs)("div", {
            className: x.statusGroup,
            children: [(0, l.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              children: v.default.Messages.STATUS_LEAD_IN_JUST
            }), (0, l.jsx)(u.Text, {
              variant: "text-sm/semibold",
              color: "text-normal",
              className: x.statusText,
              children: (0, S.getHangStatusText)(t)
            })]
          }), (0, l.jsxs)("div", {
            className: x.iconGroup,
            children: [(0, l.jsx)(_.default, {
              className: x.statusIcon,
              hangStatusActivity: t
            }), (0, l.jsxs)("div", {
              className: x.avatarWrapper,
              children: [(0, l.jsx)(u.Avatar, {
                className: x.avatar,
                size: u.AvatarSizes.SIZE_40,
                src: P,
                "aria-hidden": !0
              }), (0, l.jsx)("div", {
                className: x.outline
              })]
            })]
          })]
        }), !L && O ? (0, l.jsx)(u.Button, {
          className: x.cta,
          size: u.Button.Sizes.SMALL,
          onClick: () => {
            !L && O && (o.default.selectVoiceChannel(N.id), E.default.track(T.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
              source: "HangStatusPopout",
              guild_id: N.guild_id,
              channel_id: N.id
            }))
          },
          children: v.default.Messages.CUSTOM_HANG_STATUS_CTA
        }) : null, L ? (0, l.jsx)(u.Button, {
          className: x.cta,
          size: u.Button.Sizes.SMALL,
          onClick: () => {
            let e = t.state;
            e === T.HangStatusTypes.CUSTOM ? (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("579371").then(n.bind(n, "579371"));
              return n => (0, l.jsx)(e, {
                ...n,
                startingText: t.details,
                startingEmoji: t.emoji
              })
            }) : (0, g.updateHangStatus)(e, !0), E.default.track(T.AnalyticEvents.SWIPE_HANG_STATUS, {
              guild_id: N.guild_id,
              channel_id: N.id,
              media_session_id: m.default.getMediaSessionId()
            })
          },
          children: v.default.Messages.CUSTOM_HANGS_STATUS_COPY_CTA
        }) : null]
      })
    }) : null
  }