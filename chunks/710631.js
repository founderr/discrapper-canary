n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(653041),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(493683),
    l = n(447543),
    u = n(904245),
    c = n(159300),
    d = n(592125),
    f = n(984933),
    _ = n(430824),
    p = n(496675),
    h = n(699516),
    m = n(771845),
    g = n(594174),
    E = n(981631),
    v = n(388032);
function I(e, t) {
    o.Z.ensurePrivateChannel(e).then((e) => {
        null != d.Z.getChannel(e) && u.Z.sendInvite(e, t, 'context_menu', null);
    });
}
function T(e) {
    let { user: t, guildId: n, onAction: o } = e,
        u = (0, a.e7)([g.default], () => g.default.getCurrentUser(), []),
        d = (0, a.Wu)(
            [m.ZP, _.Z, p.Z],
            () => {
                let e = m.ZP.getFlattenedGuildIds(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let r = _.Z.getGuild(e);
                        null != r && (0, c.b)(p.Z, r) && r.id !== n && t.push(r);
                    }),
                    t
                );
            },
            [n]
        ),
        [T, b] = i.useState({});
    return (null == u ? void 0 : u.id) === t.id || t.bot || 0 === d.length || h.Z.isBlockedOrIgnored(t.id)
        ? null
        : (0, r.jsx)(s.MenuItem, {
              id: 'invite-to-server',
              label: v.intl.string(v.t.Sd8Ix8),
              children: d.map((e) =>
                  T[e.id]
                      ? (0, r.jsx)(
                            s.MenuItem,
                            {
                                id: e.id,
                                disabled: !0,
                                label: v.intl.string(v.t.PuLLzM)
                            },
                            e.id
                        )
                      : (0, r.jsx)(
                            s.MenuItem,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    null == o || o(),
                                        !(function (e, t) {
                                            let n = f.ZP.getDefaultChannel(e.id, !0, E.Plq.CREATE_INSTANT_INVITE);
                                            if (null != n) {
                                                if (
                                                    (b({
                                                        ...T,
                                                        [e.id]: !0
                                                    }),
                                                    !p.Z.can(E.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)
                                                ) {
                                                    I(t, e.vanityURLCode);
                                                    return;
                                                }
                                                l.Z.createInvite(
                                                    n.id,
                                                    {
                                                        max_uses: 1,
                                                        unique: !0
                                                    },
                                                    'User Invite Context Menu'
                                                ).then((e) => I(t, e.code));
                                            }
                                        })(e, t.id);
                                }
                            },
                            e.id
                        )
              )
          });
}
