n.d(t, {
    Z: function () {
        return f;
    }
});
var l = n(200651);
n(192379);
var s = n(442837),
    i = n(481060),
    r = n(314897),
    a = n(938475),
    o = n(499596),
    c = n(537135),
    d = n(689938),
    u = n(410894);
function f(e) {
    let { channel: t } = e,
        n = (0, s.e7)([r.default], () => r.default.getId()),
        f = (0, s.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(t), [t]);
    return (0, l.jsx)(i.FormItem, {
        title: d.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
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
