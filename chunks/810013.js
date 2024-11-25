n.d(t, {
    Z: function () {
        return f;
    }
});
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    s = n(314897),
    a = n(938475),
    o = n(499596),
    c = n(537135),
    d = n(388032),
    u = n(456963);
function f(e) {
    let { channel: t } = e,
        n = (0, i.e7)([s.default], () => s.default.getId()),
        f = (0, i.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(t), [t]);
    return (0, l.jsx)(r.FormItem, {
        title: d.intl.string(d.t.KPuWsr),
        className: u.modalContent,
        titleClassName: u.formItemTitle,
        children: (0, l.jsx)(c.Z, {
            children: (0, l.jsx)(o.Z, {
                channel: t,
                users: f
                    .filter((e) => {
                        let { user: t } = e;
                        return t.id !== n;
                    })
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            })
        })
    });
}
