var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(399606),
  o = n(481060),
  c = n(287734),
  u = n(654904),
  d = n(314897),
  h = n(271383),
  p = n(496675),
  m = n(19780),
  _ = n(594174),
  f = n(626135),
  E = n(906605),
  g = n(574176),
  C = n(833858),
  I = n(223135),
  x = n(625938),
  T = n(981631),
  N = n(689938),
  v = n(684501);
t.Z = e => {
  let {
    hangStatusActivity: t,
    userId: l,
    channel: S,
    previewIsOpen: Z
  } = e, {
    enableHangStatus: A
  } = g.n.useExperiment({
    guildId: S.guild_id,
    location: "HangStatusPopout"
  }), M = (0, r.e7)([d.default], () => d.default.getId()), b = (0, r.e7)([_.default], () => _.default.getUser(l)), R = (0, r.e7)([m.Z], () => m.Z.getChannelId() === S.id), j = (0, r.e7)([p.Z], () => p.Z.can(T.Plq.CONNECT, S)), L = (0, r.e7)([h.ZP], () => null != S.guild_id && null != b ? h.ZP.getMember(S.guild_id, l) : null), P = a.useMemo(() => null != b ? (0, u.SG)(void 0, L, b, {
    size: 40
  }) : void 0, [L, b]);
  return (a.useEffect(() => {
    A && null != t && Z && null != b && M !== l && f.default.track(T.rMx.VIEW_HANG_STATUS, {
      source: "HangStatusPopout",
      guild_id: S.guild_id,
      channel_id: S.id
    })
  }, [A, t, Z, b, M, l, S]), A && null != b) ? M === l ? (0, i.jsx)("div", {
    className: s()(v.popoutWrapper, {
      [v.mounted]: Z
    }),
    children: (0, i.jsx)(x.y, {
      currentStatus: t
    })
  }) : null == t ? null : (0, i.jsx)("div", {
    className: s()(v.popoutWrapper, {
      [v.mounted]: Z
    }),
    children: (0, i.jsxs)("div", {
      className: v.popout,
      children: [(0, i.jsxs)("div", {
        className: v.contentContainer,
        children: [(0, i.jsxs)("div", {
          className: v.statusGroup,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: N.Z.Messages.STATUS_LEAD_IN_JUST
          }), (0, i.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            className: v.statusText,
            children: (0, C.O8)(t)
          })]
        }), (0, i.jsxs)("div", {
          className: v.iconGroup,
          children: [(0, i.jsx)(I.Z, {
            className: v.statusIcon,
            hangStatusActivity: t
          }), (0, i.jsxs)("div", {
            className: v.avatarWrapper,
            children: [(0, i.jsx)(o.Avatar, {
              className: v.avatar,
              size: o.AvatarSizes.SIZE_40,
              src: P,
              "aria-hidden": !0
            }), (0, i.jsx)("div", {
              className: v.outline
            })]
          })]
        })]
      }), !R && j ? (0, i.jsx)(o.Button, {
        className: v.cta,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          !R && j && (c.default.selectVoiceChannel(S.id), f.default.track(T.rMx.HANG_STATUS_CTA_CLICKED, {
            source: "HangStatusPopout",
            guild_id: S.guild_id,
            channel_id: S.id
          }))
        },
        children: N.Z.Messages.CUSTOM_HANG_STATUS_CTA
      }) : null, R ? (0, i.jsx)(o.Button, {
        className: v.cta,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          let e = t.state;
          e === T.tNA.CUSTOM ? (0, o.openModalLazy)(async () => {
            let {
              default: e
            } = await n.e("1631").then(n.bind(n, 333541));
            return n => (0, i.jsx)(e, {
              ...n,
              startingText: t.details,
              startingEmoji: t.emoji
            })
          }) : (0, E.Zx)(e, !0), f.default.track(T.rMx.SWIPE_HANG_STATUS, {
            guild_id: S.guild_id,
            channel_id: S.id,
            media_session_id: m.Z.getMediaSessionId()
          })
        },
        children: N.Z.Messages.CUSTOM_HANGS_STATUS_COPY_CTA
      }) : null]
    })
  }) : null
}