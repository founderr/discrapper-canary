"use strict";
i.r(t), i.d(t, {
  StageInviteFooter: function() {
    return I
  },
  default: function() {
    return g
  }
});
var n = i("37983"),
  s = i("884691"),
  l = i("414456"),
  r = i.n(l),
  a = i("77078"),
  u = i("813006"),
  d = i("766274"),
  o = i("476263"),
  c = i("272339"),
  E = i("849467"),
  f = i("228427"),
  _ = i("713573"),
  S = i("258078"),
  m = i("587974"),
  h = i("782340"),
  C = i("482133");
let p = e => {
    var t;
    let {
      speaker: i,
      guildId: s,
      isEmbed: l
    } = e, r = new d.default(i.user);
    return (0, n.jsxs)("div", {
      className: C.speaker,
      children: [(0, n.jsx)(a.Avatar, {
        src: r.getAvatarURL(s, l ? 16 : 24),
        size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
        "aria-label": "".concat(i.nick, "-avatar"),
        className: l ? null : C.avatar
      }), (0, n.jsx)(S.default, {
        size: l ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
        color: S.default.Colors.HEADER_SECONDARY,
        className: C.username,
        children: null !== (t = i.nick) && void 0 !== t ? t : r.username
      })]
    })
  },
  I = e => {
    let {
      guild: t,
      onlineCount: i
    } = e;
    if (null == t) return null;
    let s = new u.default(t),
      {
        name: l,
        description: r
      } = s;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(_.default, {
        muted: !0,
        uppercase: !0,
        className: C.alignStart,
        children: h.default.Messages.STAGE_INVITE_GUILD_HEADER
      }), (0, n.jsxs)("div", {
        className: C.guild,
        children: [(0, n.jsx)(m.default, {
          mask: m.default.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, n.jsx)(o.default, {
            guild: s,
            size: o.default.Sizes.MEDIUM,
            active: !0
          })
        }), (0, n.jsxs)("div", {
          className: C.guildInfo,
          children: [(0, n.jsx)(a.Heading, {
            variant: "heading-sm/semibold",
            children: l
          }), (0, n.jsxs)("div", {
            className: C.speaker,
            children: [(0, n.jsx)("div", {
              className: C.dot
            }), null != i && i > 0 ? (0, n.jsx)(a.Text, {
              variant: "text-sm/normal",
              children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                membersOnline: i
              })
            }) : null]
          })]
        })]
      }), null != r && "" !== r && (0, n.jsx)(a.Text, {
        color: "header-secondary",
        className: C.alignStart,
        variant: "text-sm/normal",
        children: r
      })]
    })
  };
var g = e => {
  var t;
  let {
    stageInstance: i,
    guild: l,
    isCard: d = !1,
    isEmbed: I = !1,
    onClick: g
  } = e, R = s.useMemo(() => null == l ? null : l instanceof u.default ? l : new u.default(l), [l]);
  if (null == i || null == R) return null;
  let {
    topic: A,
    speaker_count: T,
    participant_count: O
  } = i, v = null !== (t = i.members) && void 0 !== t ? t : [], N = I ? v.slice(0, 3) : v, D = T - N.length;
  return I && (D += v.length - N.length), (0, n.jsxs)("div", {
    children: [(0, n.jsxs)("div", {
      className: C.flex,
      children: [(0, n.jsxs)("div", {
        className: C.flex,
        children: [(0, n.jsx)(f.default, {
          height: 24,
          width: 24,
          className: C.live
        }), (0, n.jsx)(a.Heading, {
          variant: "eyebrow",
          className: r(C.label, C.live),
          children: h.default.Messages.STAGE_CHANNEL_LIVE_NOW
        })]
      }), (0, n.jsxs)("div", {
        className: C.background,
        children: [(0, n.jsx)(c.default, {
          height: 16,
          width: 16,
          className: C.listeners
        }), (0, n.jsx)(a.Heading, {
          className: r(C.label, C.listeners),
          variant: "heading-sm/semibold",
          children: O
        })]
      })]
    }), I && (0, n.jsxs)("div", {
      className: r(C.guild, {
        [C.embed]: I
      }),
      children: [(0, n.jsx)(m.default, {
        mask: m.default.Masks.SQUIRCLE,
        width: 20,
        height: 20,
        children: (0, n.jsx)(o.default, {
          guild: R,
          size: o.default.Sizes.MINI,
          active: !0
        })
      }), (0, n.jsx)(a.Text, {
        color: "header-secondary",
        className: C.label,
        variant: "text-sm/normal",
        children: R.name
      })]
    }), (0, n.jsx)(_.default, {
      size: d || I ? _.default.Sizes.SIZE_16 : _.default.Sizes.SIZE_20,
      className: r(C.header, {
        [C.embed]: I
      }),
      children: A
    }), (0, n.jsxs)("div", {
      className: r(C.members, {
        [C.embed]: I
      }),
      children: [N.length > 0 && (0, n.jsxs)("div", {
        className: C.speakers,
        children: [N.map(e => (0, n.jsx)(p, {
          speaker: e,
          guildId: R.id,
          isEmbed: I
        }, e.user.id)), D > 0 ? (0, n.jsxs)("div", {
          className: C.speaker,
          children: [(0, n.jsx)("div", {
            className: r(C.icon, {
              [C.embed]: I
            }),
            children: (0, n.jsx)(E.default, {
              height: I ? 12 : 14,
              className: C.listeners
            })
          }), (0, n.jsxs)(S.default, {
            size: I ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
            color: S.default.Colors.HEADER_SECONDARY,
            children: ["+", h.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
              count: D
            })]
          })]
        }) : null]
      }), I && (0, n.jsx)(a.Button, {
        color: a.Button.Colors.GREEN,
        onClick: g,
        className: C.joinButton,
        children: h.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
      })]
    })]
  })
}