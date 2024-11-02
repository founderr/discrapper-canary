e.d(t, {
    P: function () {
        return g;
    },
    l: function () {
        return M;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var r = e(392711),
    l = e.n(r),
    u = e(442837),
    a = e(481060),
    d = e(984933),
    o = e(853856),
    s = e(117984),
    c = e(593214),
    f = e(362658),
    Z = e(981631),
    h = e(388032);
function _(n, t) {
    return n.type === Z.d4z.GROUP_DM ? (t ? h.intl.string(h.t['0BWmSE']) : h.intl.string(h.t.uuVTOD)) : n.type === Z.d4z.DM ? (t ? h.intl.string(h.t['2wfKGh']) : h.intl.string(h.t.wPbAsb)) : t ? h.intl.string(h.t.Bou7lZ) : h.intl.string(h.t['4wcdEx']);
}
function M(n) {
    let t = (0, u.e7)([d.ZP], () => d.ZP.getChannels(Z.I_8))[Z.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: e } = (0, f.z)('58e21a_1'),
        { notifyFavoriteAdded: r } = (0, c.up)();
    if (!(0, c.li)(n)) return null;
    let [[o], h] = l().partition(t, (n) => 'null' === n.channel.id);
    function M(t) {
        r(), (0, s.kj)(n.id, t);
    }
    return 0 === h.length
        ? (0, i.jsx)(a.MenuItem, {
              id: 'favorite-channel',
              label: _(n, !1),
              action: () => M(null)
          })
        : (0, i.jsxs)(a.MenuItem, {
              id: 'favorite-channel',
              label: _(n, !1),
              action: () => M(null),
              children: [
                  e &&
                      (0, i.jsx)(a.MenuGroup, {
                          children: (0, i.jsx)(
                              a.MenuItem,
                              {
                                  id: 'favorite-'.concat(o.channel.id),
                                  label: o.channel.name,
                                  action: () => M('null' === o.channel.id ? null : o.channel.id)
                              },
                              o.channel.id
                          )
                      }),
                  (0, i.jsx)(a.MenuGroup, {
                      children: h.map((n) =>
                          (0, i.jsx)(
                              a.MenuItem,
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
function g(n) {
    let t = (0, u.e7)([o.Z], () => o.Z.isFavorite(n.id));
    return __OVERLAY__ || !t
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'favorite-channel',
              label: _(n, !0),
              color: 'danger',
              action: () =>
                  n.type === Z.d4z.GUILD_CATEGORY
                      ? (0, a.openModalLazy)(async () => {
                            let { default: t } = await e.e('37720').then(e.bind(e, 357632));
                            return (e) =>
                                (0, i.jsx)(t, {
                                    ...e,
                                    onConfirm: () => {
                                        e.onClose(), (0, s.oC)(n.id);
                                    },
                                    channel: n
                                });
                        })
                      : (0, s.oC)(n.id)
          });
}
