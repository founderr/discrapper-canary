t.d(n, {
    P: function () {
        return N;
    },
    l: function () {
        return f;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var a = t(392711),
    s = t.n(a),
    u = t(442837),
    r = t(481060),
    l = t(984933),
    d = t(853856),
    o = t(117984),
    c = t(593214),
    M = t(362658),
    _ = t(981631),
    E = t(689938);
function Z(e, n) {
    return e.type === _.d4z.GROUP_DM ? (n ? E.Z.Messages.UNFAVORITE_GDM : E.Z.Messages.FAVORITE_GDM) : e.type === _.d4z.DM ? (n ? E.Z.Messages.UNFAVORITE_DM : E.Z.Messages.FAVORITE_DM) : n ? E.Z.Messages.UNFAVORITE_CHANNEL : E.Z.Messages.FAVORITE_CHANNEL;
}
function f(e) {
    let n = (0, u.e7)([l.ZP], () => l.ZP.getChannels(_.I_8))[_.d4z.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, M.z)('58e21a_1'),
        { notifyFavoriteAdded: a } = (0, c.up)();
    if (!(0, c.li)(e)) return null;
    let [[d], E] = s().partition(n, (e) => 'null' === e.channel.id);
    function f(n) {
        a(), (0, o.kj)(e.id, n);
    }
    return 0 === E.length
        ? (0, i.jsx)(r.MenuItem, {
              id: 'favorite-channel',
              label: Z(e, !1),
              action: () => f(null)
          })
        : (0, i.jsxs)(r.MenuItem, {
              id: 'favorite-channel',
              label: Z(e, !1),
              action: () => f(null),
              children: [
                  t &&
                      (0, i.jsx)(r.MenuGroup, {
                          children: (0, i.jsx)(
                              r.MenuItem,
                              {
                                  id: 'favorite-'.concat(d.channel.id),
                                  label: d.channel.name,
                                  action: () => f('null' === d.channel.id ? null : d.channel.id)
                              },
                              d.channel.id
                          )
                      }),
                  (0, i.jsx)(r.MenuGroup, {
                      children: E.map((e) =>
                          (0, i.jsx)(
                              r.MenuItem,
                              {
                                  id: 'favorite-'.concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => f(e.channel.id)
                              },
                              e.channel.id
                          )
                      )
                  })
              ]
          });
}
function N(e) {
    let n = (0, u.e7)([d.Z], () => d.Z.isFavorite(e.id));
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'favorite-channel',
              label: Z(e, !0),
              color: 'danger',
              action: () =>
                  e.type === _.d4z.GUILD_CATEGORY
                      ? (0, r.openModalLazy)(async () => {
                            let { default: n } = await t.e('37720').then(t.bind(t, 357632));
                            return (t) =>
                                (0, i.jsx)(n, {
                                    ...t,
                                    onConfirm: () => {
                                        t.onClose(), (0, o.oC)(e.id);
                                    },
                                    channel: e
                                });
                        })
                      : (0, o.oC)(e.id)
          });
}
