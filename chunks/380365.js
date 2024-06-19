var s = a(735250),
  n = a(470079),
  i = a(442837),
  o = a(481060),
  t = a(271383),
  r = a(430824),
  d = a(594174),
  c = a(5192),
  u = a(645896),
  _ = a(979264),
  m = a(308083),
  v = a(689938),
  A = a(457017);
l.Z = n.memo(function(e) {
  var l, a, n, N, x, g;
  let {
    guildId: C,
    isTagAdopted: h,
    onChangeUseTag: S
  } = e, T = (0, u.Cc)(C), L = (0, i.e7)([r.Z], () => r.Z.getGuild(C)), E = null !== (N = null == T ? void 0 : null === (l = T.badge) || void 0 === l ? void 0 : l.imageHash) && void 0 !== N ? N : null == L ? void 0 : null === (a = L.clan) || void 0 === a ? void 0 : a.badge, j = null !== (x = null == T ? void 0 : T.tag) && void 0 !== x ? x : null == L ? void 0 : null === (n = L.clan) || void 0 === n ? void 0 : n.tag, M = (0, i.e7)([d.default], () => d.default.getCurrentUser()), D = (0, i.e7)([t.ZP], () => null != M ? t.ZP.getMember(C, M.id) : null);
  return null == L || null == M || null == D || null == E ? null : (0, s.jsxs)("div", {
    className: A.previewSection,
    children: [(0, s.jsxs)("div", {
      className: A.chatPreview,
      children: [(0, s.jsx)(o.Avatar, {
        src: M.getAvatarURL(C, 40),
        size: o.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }), (0, s.jsxs)("div", {
        className: A.previewText,
        children: [(0, s.jsxs)("div", {
          className: A.userName,
          children: [(0, s.jsx)(o.NameWithRole, {
            className: A.userName,
            name: c.ZP.getName(C, null, M),
            color: null !== (g = D.colorString) && void 0 !== g ? g : void 0
          }), h && (0, s.jsx)(_.aG, {
            guildId: C,
            clanBadge: E,
            clanTag: j,
            badgeSize: m.NC.SIZE_12,
            textVariant: "text-xs/semibold"
          })]
        }), (0, s.jsx)("div", {
          className: A.fakeMessage,
          style: {
            width: "80%"
          }
        }), (0, s.jsx)("div", {
          className: A.fakeMessage,
          style: {
            width: "50%"
          }
        })]
      })]
    }), (0, s.jsx)("div", {
      className: A.divider
    }), (0, s.jsxs)("div", {
      className: A.settingSection,
      children: [(0, s.jsxs)("div", {
        children: [(0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: v.Z.Messages.CLAN_SUCCESS_USE_TAG_TEXT
        }), (0, s.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: v.Z.Messages.CLAN_SUCCESS_USE_TAG_HELP
        })]
      }), (0, s.jsx)(o.Switch, {
        onChange: S,
        checked: h
      })]
    })]
  })
})