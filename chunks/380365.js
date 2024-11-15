var a = l(200651),
    i = l(192379),
    t = l(442837),
    o = l(481060),
    r = l(271383),
    s = l(430824),
    d = l(594174),
    c = l(5192),
    u = l(645896),
    m = l(979264),
    v = l(308083),
    x = l(388032),
    g = l(832243);
n.Z = i.memo(function (e) {
    var n, l, i, h, f, C;
    let { guildId: N, isTagAdopted: j, onChangeUseTag: S } = e,
        _ = (0, u.Cc)(N),
        p = (0, t.e7)([s.Z], () => s.Z.getGuild(N)),
        k = null !== (h = null == _ ? void 0 : null === (n = _.badge) || void 0 === n ? void 0 : n.imageHash) && void 0 !== h ? h : null == p ? void 0 : null === (l = p.clan) || void 0 === l ? void 0 : l.badge,
        b = null !== (f = null == _ ? void 0 : _.tag) && void 0 !== f ? f : null == p ? void 0 : null === (i = p.clan) || void 0 === i ? void 0 : i.tag,
        T = (0, t.e7)([d.default], () => d.default.getCurrentUser()),
        w = (0, t.e7)([r.ZP], () => (null != T ? r.ZP.getMember(N, T.id) : null));
    return null == p || null == T || null == w || null == k
        ? null
        : (0, a.jsxs)('div', {
              className: g.previewSection,
              children: [
                  (0, a.jsxs)('div', {
                      className: g.chatPreview,
                      children: [
                          (0, a.jsx)(o.Avatar, {
                              src: T.getAvatarURL(N, 40),
                              size: o.AvatarSizes.SIZE_40,
                              'aria-hidden': !0
                          }),
                          (0, a.jsxs)('div', {
                              className: g.previewText,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: g.userName,
                                      children: [
                                          (0, a.jsx)(o.NameWithRole, {
                                              className: g.userName,
                                              name: c.ZP.getName(N, null, T),
                                              color: null !== (C = w.colorString) && void 0 !== C ? C : void 0
                                          }),
                                          j &&
                                              (0, a.jsx)(m.aG, {
                                                  guildId: N,
                                                  clanBadge: k,
                                                  clanTag: b,
                                                  badgeSize: v.NC.SIZE_12,
                                                  textVariant: 'text-xs/semibold'
                                              })
                                      ]
                                  }),
                                  (0, a.jsx)('div', {
                                      className: g.fakeMessage,
                                      style: { width: '80%' }
                                  }),
                                  (0, a.jsx)('div', {
                                      className: g.fakeMessage,
                                      style: { width: '50%' }
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, a.jsx)('div', { className: g.divider }),
                  (0, a.jsxs)('div', {
                      className: g.settingSection,
                      children: [
                          (0, a.jsxs)('div', {
                              children: [
                                  (0, a.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: x.intl.string(x.t.nwNzVV)
                                  }),
                                  (0, a.jsx)(o.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: x.intl.string(x.t.Dpl68P)
                                  })
                              ]
                          }),
                          (0, a.jsx)(o.Switch, {
                              onChange: S,
                              checked: j
                          })
                      ]
                  })
              ]
          });
});
