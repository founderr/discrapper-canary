"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
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
  S = n("228168"),
  h = n("153362");

function A(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: A,
    guild: m,
    onOpenProfile: N,
    channelId: p,
    onClose: O
  } = e, {
    moreUserDetailsEnabled: C
  } = (0, o.useSimplifiedProfileExperiment)({
    location: "BiteSizeProfileBody"
  }), R = s.default.getName(null == m ? void 0 : m.id, p, t), g = (0, r.useStateFromStores)([a.default], () => a.default.hidePersonalInformation);
  return (0, i.jsxs)("div", {
    className: h.body,
    children: [(0, i.jsx)(d.default, {
      user: t,
      profileType: S.UserProfileTypes.BITE_SIZE,
      onOpenProfile: () => N({
        autoFocusNote: !1
      }),
      guildId: null == m ? void 0 : m.id,
      usernameIcon: t.hasAvatarForGuild(null == m ? void 0 : m.id) && (0, i.jsx)(c.default, {
        user: t,
        nickname: R
      }),
      pronouns: null == A ? void 0 : A.pronouns,
      tags: (0, i.jsx)(_.UserProfileBadgesTag, {
        displayProfile: A,
        onClose: O
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.default, {
          userId: t.id
        }), C && !g && (0, i.jsx)(u.default, {
          user: t,
          onOpenProfile: () => N({
            autoFocusNote: !0
          })
        })]
      })
    }), t.id !== n.id && (0, i.jsx)(f.default, {
      user: t,
      onOpenProfile: e => N({
        section: e,
        autoFocusNote: !1
      })
    }), C && (0, i.jsx)(I.default, {
      user: t,
      bio: null == A ? void 0 : A.bio,
      hidePersonalInformation: g,
      onClose: O
    }), (0, i.jsx)(E.default, {
      user: t,
      guild: m,
      channelId: p,
      onClose: O
    }), null != m && (0, i.jsx)(T.default, {
      user: t,
      currentUser: n,
      guild: m,
      onOpenProfile: () => N({
        autoFocusNote: !1
      })
    })]
  })
}