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
    c = t(482241),
    d = t(765305),
    s = t(388032);
function Z(n, e, t) {
    let { canManageGuildEvent: Z } = (0, u.XJ)(null != t ? t : e),
        h = (0, l.e7)([o.ZP], () => o.ZP.isActive(n)),
        f = (0, l.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(n), [n]),
        x = Z(f);
    if (null == n || !x || !h || (null == f ? void 0 : f.entity_type) === d.WX.EXTERNAL) return null;
    let g = () => {
        if (null == t ? void 0 : t.isGuildStageVoice()) {
            (0, a.NZ)(t);
            return;
        }
        null != n && c.Z.endEvent(n, e.id), (0, r.closeAllModals)();
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
