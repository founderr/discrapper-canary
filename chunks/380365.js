"use strict";
a.r(l);
var t = a("735250"),
  s = a("470079"),
  n = a("442837"),
  o = a("481060"),
  i = a("271383"),
  d = a("430824"),
  r = a("594174"),
  u = a("5192"),
  c = a("645896"),
  m = a("979264"),
  C = a("308083"),
  _ = a("689938"),
  A = a("182976");
l.default = s.memo(function(e) {
  var l, a, s, g, v, S;
  let {
    guildId: x,
    isTagAdopted: N,
    onChangeUseTag: T
  } = e, f = (0, c.useClanInfo)(x), h = (0, n.useStateFromStores)([d.default], () => d.default.getGuild(x)), D = null !== (g = null == f ? void 0 : null === (l = f.badge) || void 0 === l ? void 0 : l.imageHash) && void 0 !== g ? g : null == h ? void 0 : null === (a = h.clan) || void 0 === a ? void 0 : a.badge, E = null !== (v = null == f ? void 0 : f.tag) && void 0 !== v ? v : null == h ? void 0 : null === (s = h.clan) || void 0 === s ? void 0 : s.tag, I = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()), L = (0, n.useStateFromStores)([i.default], () => null != I ? i.default.getMember(x, I.id) : null);
  return null == h || null == I || null == L || null == D ? null : (0, t.jsxs)("div", {
    className: A.previewSection,
    children: [(0, t.jsxs)("div", {
      className: A.chatPreview,
      children: [(0, t.jsx)(o.Avatar, {
        src: I.getAvatarURL(x, 40),
        size: o.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }), (0, t.jsxs)("div", {
        className: A.previewText,
        children: [(0, t.jsxs)("div", {
          className: A.userName,
          children: [(0, t.jsx)(o.NameWithRole, {
            className: A.userName,
            name: u.default.getName(x, null, I),
            color: null !== (S = L.colorString) && void 0 !== S ? S : void 0
          }), N && (0, t.jsx)(m.BaseClanTagChiplet, {
            guildId: x,
            clanBadge: D,
            clanTag: E,
            badgeSize: C.ClanTagBadgeSize.SIZE_12,
            textVariant: "text-xs/normal"
          })]
        }), (0, t.jsx)("div", {
          className: A.fakeMessage,
          style: {
            width: "80%"
          }
        }), (0, t.jsx)("div", {
          className: A.fakeMessage,
          style: {
            width: "50%"
          }
        })]
      })]
    }), (0, t.jsx)("div", {
      className: A.divider
    }), (0, t.jsxs)("div", {
      className: A.settingSection,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: _.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
        }), (0, t.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: _.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
        })]
      }), (0, t.jsx)(o.Switch, {
        onChange: T,
        checked: N
      })]
    })]
  })
})