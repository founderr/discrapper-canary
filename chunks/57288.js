r.d(n, {
    d: function () {
        return m;
    }
});
var i = r(259630),
    a = r(52948),
    s = r(548097),
    o = r(33251),
    l = r(222987),
    u = r(735896),
    c = r(275282),
    d = r(753778),
    f = r(280999),
    _ = r(667358);
function h(e) {
    return 'string' == typeof (e ? e[Object.keys(e)[0]] : void 0);
}
function p(e) {
    e.onWarn && e.defaultRichTextElements && h(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution');
}
function m(e, n) {
    var r = (0, a.ax)(n),
        h = (0, i.pi)((0, i.pi)({}, a.Z0), e),
        m = h.locale,
        g = h.defaultLocale,
        E = h.onError;
    return (
        m ? (!Intl.NumberFormat.supportedLocalesOf(m).length && E ? E(new s.gb('Missing locale data for locale: "'.concat(m, '" in Intl.NumberFormat. Using default locale: "').concat(g, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(m).length && E && E(new s.gb('Missing locale data for locale: "'.concat(m, '" in Intl.DateTimeFormat. Using default locale: "').concat(g, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')))) : (E && E(new s.OV('"locale" was not configured, using "'.concat(g, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), (h.locale = h.defaultLocale || 'en')),
        p(h),
        (0, i.pi)((0, i.pi)({}, h), {
            formatters: r,
            formatNumber: o.uf.bind(null, h, r.getNumberFormat),
            formatNumberToParts: o.T.bind(null, h, r.getNumberFormat),
            formatRelativeTime: l.S.bind(null, h, r.getRelativeTimeFormat),
            formatDate: u.p6.bind(null, h, r.getDateTimeFormat),
            formatDateToParts: u.OI.bind(null, h, r.getDateTimeFormat),
            formatTime: u.mr.bind(null, h, r.getDateTimeFormat),
            formatDateTimeRange: u.Hk.bind(null, h, r.getDateTimeFormat),
            formatTimeToParts: u.uE.bind(null, h, r.getDateTimeFormat),
            formatPlural: c.R.bind(null, h, r.getPluralRules),
            formatMessage: d.w.bind(null, h, r),
            $t: d.w.bind(null, h, r),
            formatList: f.I.bind(null, h, r.getListFormat),
            formatListToParts: f.T.bind(null, h, r.getListFormat),
            formatDisplayName: _.I.bind(null, h, r.getDisplayNames)
        })
    );
}
