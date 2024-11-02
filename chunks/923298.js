i.d(n, {
    Z: function () {
        return m;
    }
});
var e = i(200651);
i(192379);
var r = i(399606),
    l = i(481060),
    a = i(668781),
    u = i(594174),
    d = i(626135),
    o = i(981631),
    s = i(388032);
function m(t) {
    let { header: n, children: i, sku_id: m, sku_name: c, guild_id: f, cancelLabel: _, confirmLabel: h, transitionState: g, onClose: k, ...T } = t,
        p = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    return (0, e.jsx)(l.ConfirmModal, {
        header: null != n ? n : s.intl.string(s.t['+78Pfn']),
        cancelText: null != _ ? _ : s.intl.string(s.t['ETE/oK']),
        confirmText: null != h ? h : s.intl.string(s.t['+78Pfn']),
        onConfirm: () => {
            d.default.track(o.rMx.TNS_SKU_REPORT_SUBMITTED, {
                sku_id: m,
                guild_id: f,
                user_id: null == p ? void 0 : p.id
            }),
                a.Z.show({
                    title: s.intl.string(s.t.sUvCKS),
                    body: s.intl.format(s.t['7KJnk5'], { skuName: c })
                });
        },
        transitionState: g,
        onClose: k,
        ...T,
        children: i
    });
}
