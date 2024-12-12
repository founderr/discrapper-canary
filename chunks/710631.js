r.d(n, {
    Z: function () {
        return C;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(442837),
    u = r(481060),
    c = r(493683),
    d = r(447543),
    f = r(904245),
    _ = r(159300),
    h = r(592125),
    p = r(984933),
    m = r(430824),
    g = r(496675),
    E = r(699516),
    v = r(771845),
    I = r(594174),
    T = r(981631),
    b = r(388032);
let y = 'max_uses',
    S = 'User Invite Context Menu',
    A = 'context_menu';
function N(e, n) {
    c.Z.ensurePrivateChannel(e).then((e) => {
        null != h.Z.getChannel(e) && f.Z.sendInvite(e, n, A, null);
    });
}
function C(e) {
    let { user: n, guildId: r, onAction: i } = e,
        a = (0, l.e7)([I.default], () => I.default.getCurrentUser(), []),
        c = (0, l.Wu)(
            [v.ZP, m.Z, g.Z],
            () => {
                let e = v.ZP.getFlattenedGuildIds(),
                    n = [];
                return (
                    e.forEach((e) => {
                        let i = m.Z.getGuild(e);
                        null != i && (0, _.b)(g.Z, i) && i.id !== r && n.push(i);
                    }),
                    n
                );
            },
            [r]
        ),
        [f, h] = o.useState({});
    function A(e, n) {
        let r = p.ZP.getDefaultChannel(e.id, !0, T.Plq.CREATE_INSTANT_INVITE);
        if (null != r) {
            if (
                (h({
                    ...f,
                    [e.id]: !0
                }),
                !g.Z.can(T.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)
            ) {
                N(n, e.vanityURLCode);
                return;
            }
            d.Z.createInvite(
                r.id,
                {
                    [y]: 1,
                    unique: !0
                },
                S
            ).then((e) => N(n, e.code));
        }
    }
    return (null == a ? void 0 : a.id) === n.id || n.bot || 0 === c.length || E.Z.isBlockedOrIgnored(n.id)
        ? null
        : (0, s.jsx)(u.MenuItem, {
              id: 'invite-to-server',
              label: b.intl.string(b.t.Sd8Ix8),
              children: c.map((e) =>
                  f[e.id]
                      ? (0, s.jsx)(
                            u.MenuItem,
                            {
                                id: e.id,
                                disabled: !0,
                                label: b.intl.string(b.t.PuLLzM)
                            },
                            e.id
                        )
                      : (0, s.jsx)(
                            u.MenuItem,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    null == i || i(), A(e, n.id);
                                }
                            },
                            e.id
                        )
              )
          });
}
