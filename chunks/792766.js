"use strict";
i.r(t), i.d(t, {
  StageInviteFooter: function() {
    return I
  }
});
var s = i("735250"),
  n = i("470079"),
  l = i("803997"),
  a = i.n(l),
  r = i("481060"),
  d = i("601964"),
  o = i("598077"),
  u = i("346656"),
  c = i("242315"),
  E = i("357727"),
  _ = i("170039"),
  f = i("727218"),
  h = i("154921"),
  m = i("806519"),
  p = i("689938"),
  C = i("425621");
let S = e => {
    var t;
    let {
      speaker: i,
      guildId: n,
      isEmbed: l
    } = e, a = new o.default(i.user);
    return (0, s.jsxs)("div", {
      className: C.speaker,
      children: [(0, s.jsx)(r.Avatar, {
        src: a.getAvatarURL(n, l ? 16 : 24),
        size: l ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
        "aria-label": "".concat(i.nick, "-avatar"),
        className: l ? null : C.avatar
      }), (0, s.jsx)(h.default, {
        size: l ? h.default.Sizes.SIZE_12 : h.default.Sizes.SIZE_14,
        color: h.default.Colors.HEADER_SECONDARY,
        className: C.username,
        children: null !== (t = i.nick) && void 0 !== t ? t : a.username
      })]
    })
  },
  I = e => {
    let {
      guild: t,
      onlineCount: i
    } = e;
    if (null == t) return null;
    let n = new d.default(t),
      {
        name: l,
        description: a
      } = n;
    return (0, s.jsxs)("div", {
      children: [(0, s.jsx)(f.default, {
        muted: !0,
        uppercase: !0,
        className: C.alignStart,
        children: p.default.Messages.STAGE_INVITE_GUILD_HEADER
      }), (0, s.jsxs)("div", {
        className: C.guild,
        children: [(0, s.jsx)(m.default, {
          mask: m.default.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, s.jsx)(u.default, {
            guild: n,
            size: u.default.Sizes.MEDIUM,
            active: !0
          })
        }), (0, s.jsxs)("div", {
          className: C.guildInfo,
          children: [(0, s.jsx)(r.Heading, {
            variant: "heading-sm/semibold",
            children: l
          }), (0, s.jsxs)("div", {
            className: C.speaker,
            children: [(0, s.jsx)("div", {
              className: C.dot
            }), null != i && i > 0 ? (0, s.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                membersOnline: i
              })
            }) : null]
          })]
        })]
      }), null != a && "" !== a && (0, s.jsx)(r.Text, {
        color: "header-secondary",
        className: C.alignStart,
        variant: "text-sm/normal",
        children: a
      })]
    })
  };
t.default = e => {
  var t;
  let {
    stageInstance: i,
    guild: l,
    isCard: o = !1,
    isEmbed: I = !1,
    onClick: g
  } = e, T = n.useMemo(() => null == l ? null : l instanceof d.default ? l : new d.default(l), [l]);
  if (null == i || null == T) return null;
  let {
    topic: R,
    speaker_count: v,
    participant_count: A
  } = i, O = null !== (t = i.members) && void 0 !== t ? t : [], N = I ? O.slice(0, 3) : O, L = v - N.length;
  return I && (L += O.length - N.length), (0, s.jsxs)("div", {
    children: [(0, s.jsxs)("div", {
      className: C.flex,
      children: [(0, s.jsxs)("div", {
        className: C.flex,
        children: [(0, s.jsx)(_.default, {
          height: 24,
          width: 24,
          className: C.live
        }), (0, s.jsx)(r.Heading, {
          variant: "eyebrow",
          className: a()(C.__invalid_label, C.live),
          children: p.default.Messages.STAGE_CHANNEL_LIVE_NOW
        })]
      }), (0, s.jsxs)("div", {
        className: C.background,
        children: [(0, s.jsx)(c.default, {
          height: 16,
          width: 16,
          className: C.listeners
        }), (0, s.jsx)(r.Heading, {
          className: a()(C.__invalid_label, C.listeners),
          variant: "heading-sm/semibold",
          children: A
        })]
      })]
    }), I && (0, s.jsxs)("div", {
      className: a()(C.guild, {
        [C.embed]: I
      }),
      children: [(0, s.jsx)(m.default, {
        mask: m.default.Masks.SQUIRCLE,
        width: 20,
        height: 20,
        children: (0, s.jsx)(u.default, {
          guild: T,
          size: u.default.Sizes.MINI,
          active: !0
        })
      }), (0, s.jsx)(r.Text, {
        color: "header-secondary",
        className: C.__invalid_label,
        variant: "text-sm/normal",
        children: T.name
      })]
    }), (0, s.jsx)(f.default, {
      size: o || I ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
      className: a()(C.header, {
        [C.embed]: I
      }),
      children: R
    }), (0, s.jsxs)("div", {
      className: a()(C.members, {
        [C.embed]: I
      }),
      children: [N.length > 0 && (0, s.jsxs)("div", {
        className: C.speakers,
        children: [N.map(e => (0, s.jsx)(S, {
          speaker: e,
          guildId: T.id,
          isEmbed: I
        }, e.user.id)), L > 0 ? (0, s.jsxs)("div", {
          className: C.speaker,
          children: [(0, s.jsx)("div", {
            className: a()(C.icon, {
              [C.embed]: I
            }),
            children: (0, s.jsx)(E.default, {
              height: I ? 12 : 14,
              className: C.listeners
            })
          }), (0, s.jsxs)(h.default, {
            size: I ? h.default.Sizes.SIZE_12 : h.default.Sizes.SIZE_14,
            color: h.default.Colors.HEADER_SECONDARY,
            children: ["+", p.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
              count: L
            })]
          })]
        }) : null]
      }), I && (0, s.jsx)(r.Button, {
        color: r.Button.Colors.GREEN,
        onClick: g,
        className: C.joinButton,
        children: p.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
      })]
    })]
  })
}