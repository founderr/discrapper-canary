var r = n(735250);
n(470079);
var i = n(792766),
    a = n(955415);
let o = (e) => {
    let { stageInstance: t, guild: n, isMember: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: l } = e,
        u = o ? s : l;
    return (0, r.jsx)(a.Z, {
        children: (0, r.jsx)(i.Z, {
            isEmbed: !0,
            stageInstance: t,
            guild: n,
            onClick: u
        })
    });
};
t.Z = o;
