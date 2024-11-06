var i = n(200651);
n(192379);
var r = n(442837),
    l = n(654030),
    a = n(906732),
    o = n(973616),
    s = n(789407),
    c = n(314897),
    u = n(158776),
    d = n(981631),
    m = n(616922),
    h = n(401203);
t.Z = (e) => {
    var t;
    let { channel: n, message: f, hideParty: p } = e,
        { analyticsLocations: g } = (0, a.ZP)(),
        _ = (0, r.e7)([c.default], () => c.default.getId()),
        C = (0, r.e7)(
            [u.Z],
            () => {
                if (null == f.application) return u.Z.findActivity(f.author.id, (e) => e.type === d.IIU.LISTENING);
                {
                    var e;
                    let t = f.author.id;
                    return (null === (e = f.activity) || void 0 === e ? void 0 : e.type) === d.mFx.JOIN_REQUEST && (t = t === _ && n.isPrivate() ? n.getRecipientId() : _), u.Z.getApplicationActivity(t, f.application.id);
                }
            },
            [f, n, _]
        );
    return (0, i.jsx)(l.Z, {
        className: h.container,
        activity: C,
        activityActionType: null != f.activity ? f.activity.type : null,
        partyId: null != f.activity ? f.activity.party_id : null,
        userId: f.author.id,
        application: null != (t = f).application ? o.Z.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, m.Ps)(t.activity.party_id) ? s.r9 : void 0,
        message: f,
        channelId: n.id,
        guildId: n.getGuildId(),
        hideParty: p,
        isSender: f.author.id === _,
        analyticsLocations: g
    });
};
