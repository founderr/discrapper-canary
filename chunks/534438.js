"use strict";
n.r(t), n.d(t, {
  StageInviteFooter: function() {
    return I
  },
  default: function() {
    return g
  }
});
var i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  r = n.n(s),
  a = n("77078"),
  u = n("813006"),
  d = n("766274"),
  o = n("476263"),
  c = n("272339"),
  E = n("849467"),
  f = n("228427"),
  _ = n("713573"),
  S = n("258078"),
  p = n("587974"),
  h = n("782340"),
  m = n("482133");
let C = e => {
    var t;
    let {
      speaker: n,
      guildId: l,
      isEmbed: s
    } = e, r = new d.default(n.user);
    return (0, i.jsxs)("div", {
      className: m.speaker,
      children: [(0, i.jsx)(a.Avatar, {
        src: r.getAvatarURL(l, s ? 16 : 24),
        size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
        "aria-label": "".concat(n.nick, "-avatar"),
        className: s ? null : m.avatar
      }), (0, i.jsx)(S.default, {
        size: s ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
        color: S.default.Colors.HEADER_SECONDARY,
        className: m.username,
        children: null !== (t = n.nick) && void 0 !== t ? t : r.username
      })]
    })
  },
  I = e => {
    let {
      guild: t,
      onlineCount: n
    } = e;
    if (null == t) return null;
    let l = new u.default(t),
      {
        name: s,
        description: r
      } = l;
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(_.default, {
        muted: !0,
        uppercase: !0,
        className: m.alignStart,
        children: h.default.Messages.STAGE_INVITE_GUILD_HEADER
      }), (0, i.jsxs)("div", {
        className: m.guild,
        children: [(0, i.jsx)(p.default, {
          mask: p.default.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, i.jsx)(o.default, {
            guild: l,
            size: o.default.Sizes.MEDIUM,
            active: !0
          })
        }), (0, i.jsxs)("div", {
          className: m.guildInfo,
          children: [(0, i.jsx)(a.Heading, {
            variant: "heading-sm/semibold",
            children: s
          }), (0, i.jsxs)("div", {
            className: m.speaker,
            children: [(0, i.jsx)("div", {
              className: m.dot
            }), null != n && n > 0 ? (0, i.jsx)(a.Text, {
              variant: "text-sm/normal",
              children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                membersOnline: n
              })
            }) : null]
          })]
        })]
      }), null != r && "" !== r && (0, i.jsx)(a.Text, {
        color: "header-secondary",
        className: m.alignStart,
        variant: "text-sm/normal",
        children: r
      })]
    })
  };
var g = e => {
  var t;
  let {
    stageInstance: n,
    guild: s,
    isCard: d = !1,
    isEmbed: I = !1,
    onClick: g
  } = e, R = l.useMemo(() => null == s ? null : s instanceof u.default ? s : new u.default(s), [s]);
  if (null == n || null == R) return null;
  let {
    topic: v,
    speaker_count: T,
    participant_count: A
  } = n, O = null !== (t = n.members) && void 0 !== t ? t : [], N = I ? O.slice(0, 3) : O, D = T - N.length;
  return I && (D += O.length - N.length), (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: m.flex,
      children: [(0, i.jsxs)("div", {
        className: m.flex,
        children: [(0, i.jsx)(f.default, {
          height: 24,
          width: 24,
          className: m.live
        }), (0, i.jsx)(a.Heading, {
          variant: "eyebrow",
          className: r(m.label, m.live),
          children: h.default.Messages.STAGE_CHANNEL_LIVE_NOW
        })]
      }), (0, i.jsxs)("div", {
        className: m.background,
        children: [(0, i.jsx)(c.default, {
          height: 16,
          width: 16,
          className: m.listeners
        }), (0, i.jsx)(a.Heading, {
          className: r(m.label, m.listeners),
          variant: "heading-sm/semibold",
          children: A
        })]
      })]
    }), I && (0, i.jsxs)("div", {
      className: r(m.guild, {
        [m.embed]: I
      }),
      children: [(0, i.jsx)(p.default, {
        mask: p.default.Masks.SQUIRCLE,
        width: 20,
        height: 20,
        children: (0, i.jsx)(o.default, {
          guild: R,
          size: o.default.Sizes.MINI,
          active: !0
        })
      }), (0, i.jsx)(a.Text, {
        color: "header-secondary",
        className: m.label,
        variant: "text-sm/normal",
        children: R.name
      })]
    }), (0, i.jsx)(_.default, {
      size: d || I ? _.default.Sizes.SIZE_16 : _.default.Sizes.SIZE_20,
      className: r(m.header, {
        [m.embed]: I
      }),
      children: v
    }), (0, i.jsxs)("div", {
      className: r(m.members, {
        [m.embed]: I
      }),
      children: [N.length > 0 && (0, i.jsxs)("div", {
        className: m.speakers,
        children: [N.map(e => (0, i.jsx)(C, {
          speaker: e,
          guildId: R.id,
          isEmbed: I
        }, e.user.id)), D > 0 ? (0, i.jsxs)("div", {
          className: m.speaker,
          children: [(0, i.jsx)("div", {
            className: r(m.icon, {
              [m.embed]: I
            }),
            children: (0, i.jsx)(E.default, {
              height: I ? 12 : 14,
              className: m.listeners
            })
          }), (0, i.jsxs)(S.default, {
            size: I ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
            color: S.default.Colors.HEADER_SECONDARY,
            children: ["+", h.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
              count: D
            })]
          })]
        }) : null]
      }), I && (0, i.jsx)(a.Button, {
        color: a.Button.Colors.GREEN,
        onClick: g,
        className: m.joinButton,
        children: h.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
      })]
    })]
  })
}