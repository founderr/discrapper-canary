var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(399606),
  o = n(481060),
  c = n(287734),
  u = n(654904),
  d = n(314897),
  h = n(271383),
  m = n(496675),
  E = n(19780),
  p = n(594174),
  g = n(626135),
  f = n(906605),
  C = n(574176),
  _ = n(833858),
  I = n(223135),
  x = n(625938),
  T = n(981631),
  N = n(689938),
  Z = n(684501);
t.Z = e => {
  let {
    hangStatusActivity: t,
    userId: s,
    channel: S,
    previewIsOpen: v
  } = e, {
    enableHangStatus: A
  } = C.n.useExperiment({
    guildId: S.guild_id,
    location: "HangStatusPopout"
  }), M = (0, r.e7)([d.default], () => d.default.getId()), R = (0, r.e7)([p.default], () => p.default.getUser(s)), j = (0, r.e7)([E.Z], () => E.Z.getChannelId() === S.id), L = (0, r.e7)([m.Z], () => m.Z.can(T.Plq.CONNECT, S)), O = (0, r.e7)([h.ZP], () => null != S.guild_id && null != R ? h.ZP.getMember(S.guild_id, s) : null), P = i.useMemo(() => null != R ? (0, u.SG)(void 0, O, R, {
    size: 40
  }) : void 0, [O, R]);
  return (i.useEffect(() => {
    A && null != t && v && null != R && M !== s && g.default.track(T.rMx.VIEW_HANG_STATUS, {
      source: "HangStatusPopout",
      guild_id: S.guild_id,
      channel_id: S.id
    })
  }, [A, t, v, R, M, s, S]), A && null != R) ? M === s ? (0, l.jsx)("div", {
    className: a()(Z.popoutWrapper, {
      [Z.mounted]: v
    }),
    children: (0, l.jsx)(x.y, {
      currentStatus: t
    })
  }) : null == t ? null : (0, l.jsx)("div", {
    className: a()(Z.popoutWrapper, {
      [Z.mounted]: v
    }),
    children: (0, l.jsxs)("div", {
      className: Z.popout,
      children: [(0, l.jsxs)("div", {
        className: Z.contentContainer,
        children: [(0, l.jsxs)("div", {
          className: Z.statusGroup,
          children: [(0, l.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: N.Z.Messages.STATUS_LEAD_IN_JUST
          }), (0, l.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            className: Z.statusText,
            children: (0, _.O8)(t)
          })]
        }), (0, l.jsxs)("div", {
          className: Z.iconGroup,
          children: [(0, l.jsx)(I.Z, {
            className: Z.statusIcon,
            hangStatusActivity: t
          }), (0, l.jsxs)("div", {
            className: Z.avatarWrapper,
            children: [(0, l.jsx)(o.Avatar, {
              className: Z.avatar,
              size: o.AvatarSizes.SIZE_40,
              src: P,
              "aria-hidden": !0
            }), (0, l.jsx)("div", {
              className: Z.outline
            })]
          })]
        })]
      }), !j && L ? (0, l.jsx)(o.Button, {
        className: Z.cta,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          !j && L && (c.default.selectVoiceChannel(S.id), g.default.track(T.rMx.HANG_STATUS_CTA_CLICKED, {
            source: "HangStatusPopout",
            guild_id: S.guild_id,
            channel_id: S.id
          }))
        },
        children: N.Z.Messages.CUSTOM_HANG_STATUS_CTA
      }) : null, j ? (0, l.jsx)(o.Button, {
        className: Z.cta,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          let e = t.state;
          e === T.tNA.CUSTOM ? (0, o.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("1631")]).then(n.bind(n, 333541));
            return n => (0, l.jsx)(e, {
              ...n,
              startingText: t.details,
              startingEmoji: t.emoji
            })
          }) : (0, f.Zx)(e, !0), g.default.track(T.rMx.SWIPE_HANG_STATUS, {
            guild_id: S.guild_id,
            channel_id: S.id,
            media_session_id: E.Z.getMediaSessionId()
          })
        },
        children: N.Z.Messages.CUSTOM_HANGS_STATUS_COPY_CTA
      }) : null]
    })
  }) : null
}