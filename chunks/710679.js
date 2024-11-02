t.d(e, {
    Z: function () {
        return I;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(724912),
    a = t(41776),
    o = t(501655),
    c = t(427679),
    s = t(592125),
    u = t(496675),
    d = t(19780),
    g = t(594174),
    h = t(15274),
    v = t(924301),
    m = t(951539),
    x = t(146768),
    Z = t(592126),
    f = t(236373),
    C = t(230900),
    p = t(854698),
    N = t(405613),
    j = t(460838),
    E = t(462179),
    k = t(981631);
function I(n) {
    var e;
    let { guildEvent: t, guildId: I, truncate: _, onActionTaken: P, className: T, isNew: y } = n,
        { id: b, guild_id: G, channel_id: M, creator_id: L, name: S, description: A, entity_type: R, image: w, recurrence_rule: D } = t,
        H = (0, p.DK)(t),
        U = (0, l.e7)([v.ZP], () => v.ZP.isInterestedInEventRecurrence(b, H), [b, H]),
        z = (0, l.e7)([a.Z], () => a.Z.isLurking(G), [G]),
        B = (0, l.e7)([c.Z], () => c.Z.getStageInstanceByChannel(M), [M]),
        J = (0, l.e7)([s.Z], () => s.Z.getChannel(M), [M]),
        V = (0, l.e7)([g.default], () => g.default.getUser(L), [L]),
        { speakers: X } = (0, x.Z)({
            id: M,
            data: {
                guild: null,
                instance: B,
                speakers: [],
                participantCount: 0
            },
            context: {
                guildId: G,
                instance: B
            }
        }),
        W = (0, l.e7)([d.Z], () => d.Z.getChannelId()),
        O = (0, v.xt)(t),
        q = W === M && null != W && O,
        K = X.filter((n) => n.type === o.Ui.VOICE),
        F = K.length,
        Q = (0, l.e7)([u.Z], () => u.Z.can(k.Plq.CONNECT, J), [J]),
        Y = (0, m.ZP)(t),
        { isMember: $, guild: nn } = (0, Z.Z)(G, b),
        ne = (0, E.Z)({
            guild: nn,
            channel: J,
            guildScheduledEvent: t,
            isActive: O,
            recurrenceId: H,
            onActionTaken: P
        }),
        nt = (0, r.Z)(I),
        ni = z
            ? void 0
            : (n) =>
                  (0, h.bO)({
                      eventId: b,
                      parentGuildId: I,
                      recurrenceId: n
                  });
    return (0, i.jsx)(j.Z, {
        guild: nn,
        channel: J,
        creator: V,
        name: S,
        entityType: R,
        description: null != A ? A : void 0,
        location: null !== (e = (0, C.cS)(t)) && void 0 !== e ? e : void 0,
        imageSource: null != w ? (0, N.Z)(t) : void 0,
        imageLocation: j.Q.THUMBNAIL,
        isActive: O,
        isUserLurking: z,
        isJoined: q,
        isMember: $,
        isHub: nt,
        speakers: K,
        canConnect: Q,
        speakerCount: F,
        rsvped: U,
        canInvite: Y,
        ...ne,
        className: T,
        onClick: ni,
        truncate: _,
        isNew: y,
        guildEvent: t,
        recurrenceRule: (0, f.KV)(D),
        recurrenceId: H
    });
}
