n.d(t, {
  y: function() {
    return p
  }
});
var s = n(735250),
  i = n(470079),
  l = n(120356),
  r = n.n(l),
  a = n(481060),
  o = n(601964),
  c = n(598077),
  d = n(346656),
  u = n(727218),
  _ = n(154921),
  E = n(806519),
  S = n(689938),
  f = n(709101);
let h = e => {
    var t;
    let {
      speaker: n,
      guildId: i,
      isEmbed: l
    } = e, r = new c.Z(n.user);
    return (0, s.jsxs)("div", {
      className: f.speaker,
      children: [(0, s.jsx)(a.Avatar, {
        src: r.getAvatarURL(i, l ? 16 : 24),
        size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
        "aria-label": "".concat(n.nick, "-avatar"),
        className: l ? null : f.avatar
      }), (0, s.jsx)(_.Z, {
        size: l ? _.Z.Sizes.SIZE_12 : _.Z.Sizes.SIZE_14,
        color: _.Z.Colors.HEADER_SECONDARY,
        className: f.username,
        children: null !== (t = n.nick) && void 0 !== t ? t : r.username
      })]
    })
  },
  p = e => {
    let {
      guild: t,
      onlineCount: n
    } = e;
    if (null == t) return null;
    let i = new o.ZP(t),
      {
        name: l,
        description: r
      } = i;
    return (0, s.jsxs)("div", {
      children: [(0, s.jsx)(u.Z, {
        muted: !0,
        uppercase: !0,
        className: f.alignStart,
        children: S.Z.Messages.STAGE_INVITE_GUILD_HEADER
      }), (0, s.jsxs)("div", {
        className: f.guild,
        children: [(0, s.jsx)(E.ZP, {
          mask: E.ZP.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, s.jsx)(d.Z, {
            guild: i,
            size: d.Z.Sizes.MEDIUM,
            active: !0
          })
        }), (0, s.jsxs)("div", {
          className: f.guildInfo,
          children: [(0, s.jsx)(a.Heading, {
            variant: "heading-sm/semibold",
            children: l
          }), (0, s.jsxs)("div", {
            className: f.speaker,
            children: [(0, s.jsx)("div", {
              className: f.dot
            }), null != n && n > 0 ? (0, s.jsx)(a.Text, {
              variant: "text-sm/normal",
              children: S.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                membersOnline: n
              })
            }) : null]
          })]
        })]
      }), null != r && "" !== r && (0, s.jsx)(a.Text, {
        color: "header-secondary",
        className: f.alignStart,
        variant: "text-sm/normal",
        children: r
      })]
    })
  };
t.Z = e => {
  var t;
  let {
    stageInstance: n,
    guild: l,
    isCard: c = !1,
    isEmbed: p = !1,
    onClick: m
  } = e, I = i.useMemo(() => null == l ? null : l instanceof o.ZP ? l : new o.ZP(l), [l]);
  if (null == n || null == I) return null;
  let {
    topic: C,
    speaker_count: A,
    participant_count: g
  } = n, R = null !== (t = n.members) && void 0 !== t ? t : [], T = p ? R.slice(0, 3) : R, O = A - T.length;
  return p && (O += R.length - T.length), (0, s.jsxs)("div", {
    children: [(0, s.jsxs)("div", {
      className: f.flex,
      children: [(0, s.jsxs)("div", {
        className: f.flex,
        children: [(0, s.jsx)(a.StageIcon, {
          size: "custom",
          color: "currentColor",
          height: 24,
          width: 24,
          className: f.live
        }), (0, s.jsx)(a.Heading, {
          variant: "eyebrow",
          className: r()(f.__invalid_label, f.live),
          children: S.Z.Messages.STAGE_CHANNEL_LIVE_NOW
        })]
      }), (0, s.jsxs)("div", {
        className: f.background,
        children: [(0, s.jsx)(a.HeadphonesIcon, {
          size: "custom",
          color: "currentColor",
          height: 16,
          width: 16,
          className: f.listeners
        }), (0, s.jsx)(a.Heading, {
          className: r()(f.__invalid_label, f.listeners),
          variant: "heading-sm/semibold",
          children: g
        })]
      })]
    }), p && (0, s.jsxs)("div", {
      className: r()(f.guild, {
        [f.embed]: p
      }),
      children: [(0, s.jsx)(E.ZP, {
        mask: E.ZP.Masks.SQUIRCLE,
        width: 20,
        height: 20,
        children: (0, s.jsx)(d.Z, {
          guild: I,
          size: d.Z.Sizes.MINI,
          active: !0
        })
      }), (0, s.jsx)(a.Text, {
        color: "header-secondary",
        className: f.__invalid_label,
        variant: "text-sm/normal",
        children: I.name
      })]
    }), (0, s.jsx)(u.Z, {
      size: c || p ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_20,
      className: r()(f.header, {
        [f.embed]: p
      }),
      children: C
    }), (0, s.jsxs)("div", {
      className: r()(f.members, {
        [f.embed]: p
      }),
      children: [T.length > 0 && (0, s.jsxs)("div", {
        className: f.speakers,
        children: [T.map(e => (0, s.jsx)(h, {
          speaker: e,
          guildId: I.id,
          isEmbed: p
        }, e.user.id)), O > 0 ? (0, s.jsxs)("div", {
          className: f.speaker,
          children: [(0, s.jsx)("div", {
            className: r()(f.icon, {
              [f.embed]: p
            }),
            children: (0, s.jsx)(a.MicrophoneIcon, {
              size: "custom",
              color: "currentColor",
              height: p ? 12 : 14,
              className: f.listeners
            })
          }), (0, s.jsxs)(_.Z, {
            size: p ? _.Z.Sizes.SIZE_12 : _.Z.Sizes.SIZE_14,
            color: _.Z.Colors.HEADER_SECONDARY,
            children: ["+", S.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
              count: O
            })]
          })]
        }) : null]
      }), p && (0, s.jsx)(a.Button, {
        color: a.Button.Colors.GREEN,
        onClick: m,
        className: f.joinButton,
        children: S.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
      })]
    })]
  })
}