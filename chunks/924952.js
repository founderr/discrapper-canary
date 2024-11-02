t.d(e, {
    Z: function () {
        return Z;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(357156),
    a = t(471253),
    o = t(924301),
    d = t(482241),
    c = t(765305),
    s = t(388032);
function Z(n, e, t) {
    let { canManageGuildEvent: Z } = (0, u.XJ)(null != t ? t : e),
        h = (0, l.e7)([o.ZP], () => o.ZP.isActive(n)),
        x = (0, l.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(n), [n]),
        g = Z(x);
    if (null == n || !g || !h || (null == x ? void 0 : x.entity_type) === c.WX.EXTERNAL) return null;
    let f = () => {
        if (null == t ? void 0 : t.isGuildStageVoice()) {
            (0, a.NZ)(t);
            return;
        }
        null != n && d.Z.endEvent(n, e.id), (0, r.closeAllModals)();
    };
    return (0, i.jsx)(r.MenuItem, {
        id: s.intl.string(s.t.qaYzPD),
        label: s.intl.string(s.t.qaYzPD),
        action: function () {
            (0, r.openModal)((n) =>
                (0, i.jsx)(r.ConfirmModal, {
                    ...n,
                    header: s.intl.string(s.t.qaYzPD),
                    confirmText: s.intl.string(s.t.mjB9pa),
                    cancelText: s.intl.string(s.t['ETE/oK']),
                    onConfirm: f,
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: s.intl.string(s.t.bnDQ7O)
                    })
                })
            );
        },
        color: 'danger'
    });
}
