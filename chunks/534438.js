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
  p = n("258078"),
  S = n("587974"),
  C = n("782340"),
  h = n("482133");
let m = e => {
    var t;
    let {
      speaker: n,
      guildId: l,
      isEmbed: s
    } = e, r = new d.default(n.user);
    return (0, i.jsxs)("div", {
      className: h.speaker,
      children: [(0, i.jsx)(a.Avatar, {
        src: r.getAvatarURL(l, s ? 16 : 24),
        size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
        "aria-label": "".concat(n.nick, "-avatar"),
        className: s ? null : h.avatar
      }), (0, i.jsx)(p.default, {
        size: s ? p.default.Sizes.SIZE_12 : p.default.Sizes.SIZE_14,
        color: p.default.Colors.HEADER_SECONDARY,
        className: h.username,
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
        className: h.alignStart,
        children: C.default.Messages.STAGE_INVITE_GUILD_HEADER
      }), (0, i.jsxs)("div", {
        className: h.guild,
        children: [(0, i.jsx)(S.default, {
          mask: S.default.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, i.jsx)(o.default, {
            guild: l,
            size: o.default.Sizes.MEDIUM,
            active: !0
          })
        }), (0, i.jsxs)("div", {
          className: h.guildInfo,
          children: [(0, i.jsx)(a.Heading, {
            variant: "heading-sm/semibold",
            children: s
          }), (0, i.jsxs)("div", {
            className: h.speaker,
            children: [(0, i.jsx)("div", {
              className: h.dot
            }), null != n && n > 0 ? (0, i.jsx)(a.Text, {
              variant: "text-sm/normal",
              children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                membersOnline: n
              })
            }) : null]
          })]
        })]
      }), null != r && "" !== r && (0, i.jsx)(a.Text, {
        color: "header-secondary",
        className: h.alignStart,
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
  } = e, T = l.useMemo(() => null == s ? null : s instanceof u.default ? s : new u.default(s), [s]);
  if (null == n || null == T) return null;
  let {
    topic: O,
    speaker_count: v,
    participant_count: b
  } = n, A = null !== (t = n.members) && void 0 !== t ? t : [], D = I ? A.slice(0, 3) : A, R = v - D.length;
  return I && (R += A.length - D.length), (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: h.flex,
      children: [(0, i.jsxs)("div", {
        className: h.flex,
        children: [(0, i.jsx)(f.default, {
          height: 24,
          width: 24,
          className: h.live
        }), (0, i.jsx)(a.Heading, {
          variant: "eyebrow",
          className: r(h.label, h.live),
          children: C.default.Messages.STAGE_CHANNEL_LIVE_NOW
        })]
      }), (0, i.jsxs)("div", {
        className: h.background,
        children: [(0, i.jsx)(c.default, {
          height: 16,
          width: 16,
          className: h.listeners
        }), (0, i.jsx)(a.Heading, {
          className: r(h.label, h.listeners),
          variant: "heading-sm/semibold",
          children: b
        })]
      })]
    }), I && (0, i.jsxs)("div", {
      className: r(h.guild, {
        [h.embed]: I
      }),
      children: [(0, i.jsx)(S.default, {
        mask: S.default.Masks.SQUIRCLE,
        width: 20,
        height: 20,
        children: (0, i.jsx)(o.default, {
          guild: T,
          size: o.default.Sizes.MINI,
          active: !0
        })
      }), (0, i.jsx)(a.Text, {
        color: "header-secondary",
        className: h.label,
        variant: "text-sm/normal",
        children: T.name
      })]
    }), (0, i.jsx)(_.default, {
      size: d || I ? _.default.Sizes.SIZE_16 : _.default.Sizes.SIZE_20,
      className: r(h.header, {
        [h.embed]: I
      }),
      children: O
    }), (0, i.jsxs)("div", {
      className: r(h.members, {
        [h.embed]: I
      }),
      children: [D.length > 0 && (0, i.jsxs)("div", {
        className: h.speakers,
        children: [D.map(e => (0, i.jsx)(m, {
          speaker: e,
          guildId: T.id,
          isEmbed: I
        }, e.user.id)), R > 0 ? (0, i.jsxs)("div", {
          className: h.speaker,
          children: [(0, i.jsx)("div", {
            className: r(h.icon, {
              [h.embed]: I
            }),
            children: (0, i.jsx)(E.default, {
              height: I ? 12 : 14,
              className: h.listeners
            })
          }), (0, i.jsxs)(p.default, {
            size: I ? p.default.Sizes.SIZE_12 : p.default.Sizes.SIZE_14,
            color: p.default.Colors.HEADER_SECONDARY,
            children: ["+", C.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
              count: R
            })]
          })]
        }) : null]
      }), I && (0, i.jsx)(a.Button, {
        color: a.Button.Colors.GREEN,
        onClick: g,
        className: h.joinButton,
        children: C.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
      })]
    })]
  })
}