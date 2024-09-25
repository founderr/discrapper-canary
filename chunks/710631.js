n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(442837),
    l = n(481060),
    u = n(493683),
    c = n(447543),
    d = n(904245),
    _ = n(159300),
    E = n(592125),
    f = n(984933),
    h = n(430824),
    p = n(496675),
    m = n(699516),
    I = n(771845),
    T = n(594174),
    g = n(981631),
    S = n(689938);
let A = 'max_uses',
    v = 'User Invite Context Menu',
    N = 'context_menu';
function O(e, t) {
    u.Z.ensurePrivateChannel(e).then((e) => {
        null != E.Z.getChannel(e) && d.Z.sendInvite(e, t, N, null);
    });
}
function R(e) {
    let { user: t, guildId: n, onAction: r } = e,
        i = (0, s.e7)([T.default], () => T.default.getCurrentUser(), []),
        u = (0, s.Wu)(
            [I.ZP, h.Z, p.Z],
            () => {
                let e = I.ZP.getFlattenedGuildIds(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let r = h.Z.getGuild(e);
                        null != r && (0, _.b)(p.Z, r) && r.id !== n && t.push(r);
                    }),
                    t
                );
            },
            [n]
        ),
        [d, E] = o.useState({});
    function N(e, t) {
        let n = f.ZP.getDefaultChannel(e.id, !0, g.Plq.CREATE_INSTANT_INVITE);
        if (null != n) {
            if (
                (E({
                    ...d,
                    [e.id]: !0
                }),
                !p.Z.can(g.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)
            ) {
                O(t, e.vanityURLCode);
                return;
            }
            c.Z.createInvite(
                n.id,
                {
                    [A]: 1,
                    unique: !0
                },
                v
            ).then((e) => O(t, e.code));
        }
    }
    return (null == i ? void 0 : i.id) === t.id || t.bot || 0 === u.length || m.Z.isBlocked(t.id)
        ? null
        : (0, a.jsx)(l.MenuItem, {
              id: 'invite-to-server',
              label: S.Z.Messages.INVITE_TO_SERVER,
              children: u.map((e) =>
                  d[e.id]
                      ? (0, a.jsx)(
                            l.MenuItem,
                            {
                                id: e.id,
                                disabled: !0,
                                label: S.Z.Messages.INVITE_SENT
                            },
                            e.id
                        )
                      : (0, a.jsx)(
                            l.MenuItem,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    null == r || r(), N(e, t.id);
                                }
                            },
                            e.id
                        )
              )
          });
}
