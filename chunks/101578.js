var i = n(200651);
n(192379);
var a = n(442837),
    s = n(654030),
    r = n(906732),
    l = n(973616),
    o = n(789407),
    c = n(314897),
    u = n(158776),
    d = n(981631),
    _ = n(616922),
    E = n(401203);
t.Z = (e) => {
    var t;
    let { channel: n, message: I, hideParty: m } = e,
        { analyticsLocations: f } = (0, r.ZP)(),
        h = (0, a.e7)([c.default], () => c.default.getId()),
        T = (0, a.e7)(
            [u.Z],
            () => {
                if (null == I.application) return u.Z.findActivity(I.author.id, (e) => e.type === d.IIU.LISTENING);
                {
                    var e;
                    let t = I.author.id;
                    return (null === (e = I.activity) || void 0 === e ? void 0 : e.type) === d.mFx.JOIN_REQUEST && (t = t === h && n.isPrivate() ? n.getRecipientId() : h), u.Z.getApplicationActivity(t, I.application.id);
                }
            },
            [I, n, h]
        );
    return (0, i.jsx)(s.Z, {
        className: E.container,
        activity: T,
        activityActionType: null != I.activity ? I.activity.type : null,
        partyId: null != I.activity ? I.activity.party_id : null,
        userId: I.author.id,
        application: null != (t = I).application ? l.Z.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, _.Ps)(t.activity.party_id) ? o.r9 : void 0,
        message: I,
        channelId: n.id,
        guildId: n.getGuildId(),
        hideParty: m,
        isSender: I.author.id === h,
        analyticsLocations: f
    });
};
