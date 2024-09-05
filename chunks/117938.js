t.d(s, {
    C: function () {
        return o;
    },
    L: function () {
        return r;
    }
});
var n = t(873546),
    a = t(464179),
    i = t(981631);
let r = (e) => ([i.HeQ.CARD, i.HeQ.VENMO].includes(e.type) && 'US' === e.country ? (n.tq ? a.ZP.Layouts.SETTINGS_US_MOBILE : a.ZP.Layouts.SETTINGS_US) : e.type === i.HeQ.CARD && 'US' !== e.country ? (n.tq ? a.ZP.Layouts.SETTINGS_INTL_MOBILE : a.ZP.Layouts.SETTINGS_INTL) : n.tq ? a.ZP.Layouts.SETTINGS_INTL_NO_NAME_MOBILE : a.ZP.Layouts.SETTINGS_INTL_NO_NAME),
    o = n.tq ? a.ZP.Layouts.SETTINGS_US_MOBILE : a.ZP.Layouts.SETTINGS_US;
