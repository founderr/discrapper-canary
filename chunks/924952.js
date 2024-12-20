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
    o = t(471253),
    a = t(924301),
    d = t(482241),
    c = t(765305),
    s = t(388032);
function Z(n, e, t) {
    let { canManageGuildEvent: Z } = (0, u.XJ)(null != t ? t : e),
        h = (0, l.e7)([a.ZP], () => a.ZP.isActive(n)),
        f = (0, l.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(n), [n]),
        x = Z(f);
    if (null == n || !x || !h || (null == f ? void 0 : f.entity_type) === c.WX.EXTERNAL) return null;
    let g = () => {
        if (null == t ? void 0 : t.isGuildStageVoice()) {
            (0, o.NZ)(t);
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
                    onConfirm: g,
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
