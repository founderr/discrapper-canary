var r = n(735250);
n(470079);
var i = n(442837),
    a = n(654030),
    o = n(906732),
    s = n(973616),
    l = n(789407),
    u = n(314897),
    c = n(158776),
    d = n(981631),
    _ = n(616922),
    E = n(401203);
function f(e) {
    return null != e.application ? s.Z.createFromServer(e.application) : null != e.activity && null != e.activity.party_id && (0, _.Ps)(e.activity.party_id) ? l.r9 : void 0;
}
let h = (e) => {
    let { channel: t, message: n, hideParty: s } = e,
        { analyticsLocations: l } = (0, o.ZP)(),
        _ = (0, i.e7)([u.default], () => u.default.getId()),
        h = (0, i.e7)(
            [c.Z],
            () => {
                if (null == n.application) return c.Z.findActivity(n.author.id, (e) => e.type === d.IIU.LISTENING);
                {
                    var e;
                    let r = n.author.id;
                    return (null === (e = n.activity) || void 0 === e ? void 0 : e.type) === d.mFx.JOIN_REQUEST && (r = r === _ && t.isPrivate() ? t.getRecipientId() : _), c.Z.getApplicationActivity(r, n.application.id);
                }
            },
            [n, t, _]
        );
    return (0, r.jsx)(a.Z, {
        className: E.container,
        activity: h,
        activityActionType: null != n.activity ? n.activity.type : null,
        partyId: null != n.activity ? n.activity.party_id : null,
        userId: n.author.id,
        application: f(n),
        message: n,
        channelId: t.id,
        guildId: t.getGuildId(),
        hideParty: s,
        isSender: n.author.id === _,
        analyticsLocations: l
    });
};
t.Z = h;
