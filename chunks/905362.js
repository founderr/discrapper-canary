n.d(t, {
    CK: function () {
        return d;
    },
    SJ: function () {
        return u;
    },
    qF: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(704215),
    a = n(481060),
    o = n(645041),
    s = n(693546),
    l = n(970606);
function u(e) {
    (0, a.openModalLazy)(async () => {
        let { default: t } = await n.e('95883').then(n.bind(n, 83521));
        return (n) => {
            let a = (t) => {
                (0, o.Qd)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, t), n.onClose();
            };
            return (0, r.jsx)(t, {
                ...n,
                onClose: a,
                guildId: e
            });
        };
    });
}
function c(e, t, i, o, s) {
    (0, l.Vr)({
        guildId: e,
        ...i
    }),
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('80026'), n.e('74828')]).then(n.bind(n, 767593));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    clan: t,
                    prioritizedGameIds: o,
                    position: s
                });
        });
}
function d(e, t) {
    (0, a.openModalLazy)(async () => {
        let { default: i } = await Promise.all([n.e('82158'), n.e('54014')]).then(n.bind(n, 717057));
        return (n) => {
            let a = () => {
                null != t && s.Z.ackUserGuildJoinRequest(e, t), n.onClose();
            };
            return (0, r.jsx)(i, {
                ...n,
                onAccept: a,
                guildId: e
            });
        };
    });
}
