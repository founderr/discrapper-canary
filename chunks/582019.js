"use strict";
n.r(t), n.d(t, {
  BlockedUser: function() {
    return I
  },
  BlockedUsersNotice: function() {
    return h
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("692547"),
  i = n("481060"),
  r = n("239091"),
  d = n("83097"),
  o = n("357727"),
  u = n("154921"),
  c = n("421600"),
  _ = n("51144"),
  E = n("88751"),
  T = n("930180"),
  f = n("689938"),
  S = n("313723");
let h = e => {
    let {
      channelId: t
    } = e, n = (0, T.useStageBlockedUsersCount)(t);
    return 0 === n ? null : (0, s.jsxs)("div", {
      className: S.blockedNotice,
      children: [(0, s.jsx)(d.default, {
        className: S.__invalid_blockedIcon,
        color: l.default.unsafe_rawColors.RED_400.css
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: f.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
          number: n
        })
      }), (0, s.jsx)(i.Clickable, {
        className: S.blockedButton,
        onClick: e => {
          (0, r.openContextMenu)(e, e => (0, s.jsx)(g, {
            ...e,
            channelId: t
          }), {
            position: "left",
            align: "bottom"
          })
        },
        children: f.default.Messages.VIEW_ALL
      })]
    })
  },
  I = e => {
    let {
      user: t,
      showStatus: n,
      speaker: l,
      channelId: r
    } = e, d = (0, a.useStateFromStores)([E.default], () => E.default.isModerator(t.id, r)), T = null;
    return n && (T = l ? f.default.Messages.STAGE_SPEAKER : d ? f.default.Messages.STAGE_MODERATOR_TOOLTIP : f.default.Messages.STAGE_AUDIENCE), (0, s.jsxs)("div", {
      className: S.user,
      children: [(0, s.jsx)(c.default, {
        src: t.getAvatarURL(null, 32),
        size: i.AvatarSizes.SIZE_32,
        muted: !1,
        deafen: !1,
        speaking: !1,
        ringing: !1,
        renderIcon: l ? () => (0, s.jsx)(o.default, {
          className: S.icon
        }) : null
      }, t.id), (0, s.jsxs)("div", {
        className: S.userInfo,
        children: [(0, s.jsxs)("div", {
          className: S.username,
          children: [(0, s.jsx)(u.default, {
            size: n ? u.default.Sizes.SIZE_16 : u.default.Sizes.SIZE_14,
            children: _.default.getName(t)
          }), (0, s.jsx)(u.default, {
            size: n ? u.default.Sizes.SIZE_16 : u.default.Sizes.SIZE_14,
            color: u.default.Colors.HEADER_SECONDARY,
            children: "#".concat(t.discriminator)
          })]
        }), (0, s.jsxs)("div", {
          className: S.username,
          children: [(0, s.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "text-danger",
            children: f.default.Messages.BLOCKED
          }), (0, s.jsxs)(i.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: [" ", "| ", T]
          })]
        })]
      })]
    })
  },
  g = e => {
    let {
      channelId: t
    } = e, n = (0, T.useStageBlockedUsers)(t);
    return (0, s.jsx)(i.Scroller, {
      className: S.container,
      children: n.map(e => {
        let {
          user: n
        } = e;
        return (0, s.jsx)(I, {
          user: n,
          channelId: t
        }, n.id)
      })
    })
  }