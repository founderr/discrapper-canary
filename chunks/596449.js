n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(692547),
    a = n(481060),
    l = n(576749),
    r = n(688641),
    o = n(689938);
function c(e) {
    let { className: t, guildId: c } = e,
        u = (0, l.Z)();
    return (0, i.jsx)(r.Z, {
        className: t,
        icon: (0, i.jsx)(a.CalendarIcon, {
            size: 'custom',
            color: 'currentColor',
            height: 20,
            width: 20
        }),
        color: s.Z.unsafe_rawColors.BRAND_500.css,
        title: o.Z.Messages.SCHEDULE_EVENT,
        description: o.Z.Messages.SCHEDULE_EVENT_DESCRIPTION,
        onClick: function () {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('22347'), n.e('58023'), n.e('66389')]).then(n.bind(n, 779250));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        guildId: c
                    });
            }, u);
        }
    });
}
