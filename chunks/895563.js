t.d(e, {
    P: function () {
        return j;
    },
    l: function () {
        return M;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(392711),
    l = t.n(r),
    a = t(442837),
    u = t(481060),
    o = t(984933),
    d = t(853856),
    c = t(117984),
    s = t(593214),
    h = t(362658),
    f = t(981631),
    Z = t(388032);
function p(n, e) {
    return n.type === f.d4z.GROUP_DM ? (e ? Z.intl.string(Z.t['0BWmSE']) : Z.intl.string(Z.t.uuVTOD)) : n.type === f.d4z.DM ? (e ? Z.intl.string(Z.t['2wfKGh']) : Z.intl.string(Z.t.wPbAsb)) : e ? Z.intl.string(Z.t.Bou7lZ) : Z.intl.string(Z.t['4wcdEx']);
}
function M(n) {
    let e = (0, a.e7)([o.ZP], () => o.ZP.getChannels(f.I_8))[f.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, h.z)('58e21a_1'),
        { notifyFavoriteAdded: r } = (0, s.up)();
    if (!(0, s.li)(n)) return null;
    let [[d], Z] = l().partition(e, (n) => 'null' === n.channel.id);
    function M(e) {
        r(), (0, c.kj)(n.id, e);
    }
    return 0 === Z.length
        ? (0, i.jsx)(u.MenuItem, {
              id: 'favorite-channel',
              label: p(n, !1),
              action: () => M(null)
          })
        : (0, i.jsxs)(u.MenuItem, {
              id: 'favorite-channel',
              label: p(n, !1),
              action: () => M(null),
              children: [
                  t &&
                      (0, i.jsx)(u.MenuGroup, {
                          children: (0, i.jsx)(
                              u.MenuItem,
                              {
                                  id: 'favorite-'.concat(d.channel.id),
                                  label: d.channel.name,
                                  action: () => M('null' === d.channel.id ? null : d.channel.id)
                              },
                              d.channel.id
                          )
                      }),
                  (0, i.jsx)(u.MenuGroup, {
                      children: Z.map((n) =>
                          (0, i.jsx)(
                              u.MenuItem,
                              {
                                  id: 'favorite-'.concat(n.channel.id),
                                  label: n.channel.name,
                                  action: () => M(n.channel.id)
                              },
                              n.channel.id
                          )
                      )
                  })
              ]
          });
}
function j(n) {
    let e = (0, a.e7)([d.Z], () => d.Z.isFavorite(n.id));
    return __OVERLAY__ || !e
        ? null
        : (0, i.jsx)(u.MenuItem, {
              id: 'favorite-channel',
              label: p(n, !0),
              color: 'danger',
              action: () =>
                  n.type === f.d4z.GUILD_CATEGORY
                      ? (0, u.openModalLazy)(async () => {
                            let { default: e } = await t.e('37720').then(t.bind(t, 357632));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    onConfirm: () => {
                                        t.onClose(), (0, c.oC)(n.id);
                                    },
                                    channel: n
                                });
                        })
                      : (0, c.oC)(n.id)
          });
}
