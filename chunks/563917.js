var i = n(200651);
n(192379);
var r = n(792766),
    l = n(955415);
t.Z = (e) => {
    let { stageInstance: t, guild: n, isMember: a, onTransitionToInviteChannel: o, onAcceptInstantInvite: s } = e;
    return (0, i.jsx)(l.Z, {
        children: (0, i.jsx)(r.Z, {
            isEmbed: !0,
            stageInstance: t,
            guild: n,
            onClick: a ? o : s
        })
    });
};
