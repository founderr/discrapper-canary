"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("246946"),
  s = n("5192"),
  o = n("447452"),
  l = n("681837"),
  u = n("724593"),
  d = n("530"),
  _ = n("894374"),
  c = n("790711"),
  E = n("580512"),
  I = n("67152"),
  T = n("579285"),
  f = n("287612"),
  S = n("153362");

function h(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: h,
    guild: A,
    onOpenProfile: m,
    channelId: N,
    onClose: p
  } = e, {
    moreUserDetailsEnabled: O
  } = (0, o.useSimplifiedProfileExperiment)({
    location: "BiteSizeProfileBody"
  }), C = s.default.getName(null == A ? void 0 : A.id, N, t), R = (0, r.useStateFromStores)([a.default], () => a.default.hidePersonalInformation);
  return (0, i.jsxs)("div", {
    className: S.body,
    children: [(0, i.jsx)(d.default, {
      user: t,
      onOpenProfile: () => m({
        autoFocusNote: !1
      }),
      guildId: null == A ? void 0 : A.id,
      usernameIcon: t.hasAvatarForGuild(null == A ? void 0 : A.id) && (0, i.jsx)(c.default, {
        user: t,
        nickname: C
      }),
      pronouns: null == h ? void 0 : h.pronouns,
      tags: (0, i.jsx)(_.UserProfileBadgesTag, {
        displayProfile: h,
        onClose: p
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.default, {
          userId: t.id
        }), O && !R && (0, i.jsx)(u.default, {
          user: t,
          onOpenProfile: () => m({
            autoFocusNote: !0
          })
        })]
      })
    }), t.id !== n.id && (0, i.jsx)(f.default, {
      user: t,
      onOpenProfile: e => m({
        section: e,
        autoFocusNote: !1
      })
    }), O && (0, i.jsx)(I.default, {
      user: t,
      bio: null == h ? void 0 : h.bio,
      hidePersonalInformation: R,
      onClose: p
    }), (0, i.jsx)(E.default, {
      user: t,
      guild: A,
      channelId: N,
      onClose: p
    }), null != A && (0, i.jsx)(T.default, {
      user: t,
      currentUser: n,
      guild: A,
      onOpenProfile: () => m({
        autoFocusNote: !1
      })
    })]
  })
}