"use strict";
n.r(t), n.d(t, {
  StageInviteFooter: function() {
    return I
  },
  default: function() {
    return g
  }
});
var l = n("37983"),
  i = n("884691"),
  s = n("414456"),
  r = n.n(s),
  u = n("77078"),
  a = n("813006"),
  d = n("766274"),
  o = n("476263"),
  c = n("272339"),
  E = n("849467"),
  f = n("228427"),
  _ = n("713573"),
  S = n("258078"),
  p = n("587974"),
  h = n("782340"),
  C = n("482133");
let m = e => {
    var t;
    let {
      speaker: n,
      guildId: i,
      isEmbed: s
    } = e, r = new d.default(n.user);
    return (0, l.jsxs)("div", {
      className: C.speaker,
      children: [(0, l.jsx)(u.Avatar, {
        src: r.getAvatarURL(i, s ? 16 : 24),
        size: s ? u.AvatarSizes.SIZE_16 : u.AvatarSizes.SIZE_24,
        "aria-label": "".concat(n.nick, "-avatar"),
        className: s ? null : C.avatar
      }), (0, l.jsx)(S.default, {
        size: s ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
        color: S.default.Colors.HEADER_SECONDARY,
        className: C.username,
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
    let i = new a.default(t),
      {
        name: s,
        description: r
      } = i;
    return (0, l.jsxs)("div", {
      children: [(0, l.jsx)(_.default, {
        muted: !0,
        uppercase: !0,
        className: C.alignStart,
        children: h.default.Messages.STAGE_INVITE_GUILD_HEADER
      }), (0, l.jsxs)("div", {
        className: C.guild,
        children: [(0, l.jsx)(p.default, {
          mask: p.default.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, l.jsx)(o.default, {
            guild: i,
            size: o.default.Sizes.MEDIUM,
            active: !0
          })
        }), (0, l.jsxs)("div", {
          className: C.guildInfo,
          children: [(0, l.jsx)(u.Heading, {
            variant: "heading-sm/semibold",
            children: s
          }), (0, l.jsxs)("div", {
            className: C.speaker,
            children: [(0, l.jsx)("div", {
              className: C.dot
            }), null != n && n > 0 ? (0, l.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                membersOnline: n
              })
            }) : null]
          })]
        })]
      }), null != r && "" !== r && (0, l.jsx)(u.Text, {
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
    stageInstance: n,
    guild: s,
    isCard: d = !1,
    isEmbed: I = !1,
    onClick: g
  } = e, v = i.useMemo(() => null == s ? null : s instanceof a.default ? s : new a.default(s), [s]);
  if (null == n || null == v) return null;
  let {
    topic: T,
    speaker_count: O,
    participant_count: b
  } = n, x = null !== (t = n.members) && void 0 !== t ? t : [], A = I ? x.slice(0, 3) : x, D = O - A.length;
  return I && (D += x.length - A.length), (0, l.jsxs)("div", {
    children: [(0, l.jsxs)("div", {
      className: C.flex,
      children: [(0, l.jsxs)("div", {
        className: C.flex,
        children: [(0, l.jsx)(f.default, {
          height: 24,
          width: 24,
          className: C.live
        }), (0, l.jsx)(u.Heading, {
          variant: "eyebrow",
          className: r(C.label, C.live),
          children: h.default.Messages.STAGE_CHANNEL_LIVE_NOW
        })]
      }), (0, l.jsxs)("div", {
        className: C.background,
        children: [(0, l.jsx)(c.default, {
          height: 16,
          width: 16,
          className: C.listeners
        }), (0, l.jsx)(u.Heading, {
          className: r(C.label, C.listeners),
          variant: "heading-sm/semibold",
          children: b
        })]
      })]
    }), I && (0, l.jsxs)("div", {
      className: r(C.guild, {
        [C.embed]: I
      }),
      children: [(0, l.jsx)(p.default, {
        mask: p.default.Masks.SQUIRCLE,
        width: 20,
        height: 20,
        children: (0, l.jsx)(o.default, {
          guild: v,
          size: o.default.Sizes.MINI,
          active: !0
        })
      }), (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: C.label,
        variant: "text-sm/normal",
        children: v.name
      })]
    }), (0, l.jsx)(_.default, {
      size: d || I ? _.default.Sizes.SIZE_16 : _.default.Sizes.SIZE_20,
      className: r(C.header, {
        [C.embed]: I
      }),
      children: T
    }), (0, l.jsxs)("div", {
      className: r(C.members, {
        [C.embed]: I
      }),
      children: [A.length > 0 && (0, l.jsxs)("div", {
        className: C.speakers,
        children: [A.map(e => (0, l.jsx)(m, {
          speaker: e,
          guildId: v.id,
          isEmbed: I
        }, e.user.id)), D > 0 ? (0, l.jsxs)("div", {
          className: C.speaker,
          children: [(0, l.jsx)("div", {
            className: r(C.icon, {
              [C.embed]: I
            }),
            children: (0, l.jsx)(E.default, {
              height: I ? 12 : 14,
              className: C.listeners
            })
          }), (0, l.jsxs)(S.default, {
            size: I ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
            color: S.default.Colors.HEADER_SECONDARY,
            children: ["+", h.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
              count: D
            })]
          })]
        }) : null]
      }), I && (0, l.jsx)(u.Button, {
        color: u.Button.Colors.GREEN,
        onClick: g,
        className: C.joinButton,
        children: h.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
      })]
    })]
  })
}