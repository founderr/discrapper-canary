n.d(t, {
    d: function () {
        return _;
    }
});
var r = n(259630),
    i = n(52948),
    a = n(548097),
    s = n(33251),
    o = n(222987),
    l = n(735896),
    u = n(275282),
    c = n(753778),
    d = n(280999),
    f = n(667358);
function _(e, t) {
    var n = (0, i.ax)(t),
        _ = (0, r.pi)((0, r.pi)({}, i.Z0), e),
        p = _.locale,
        h = _.defaultLocale,
        m = _.onError;
    return (
        p ? (!Intl.NumberFormat.supportedLocalesOf(p).length && m ? m(new a.gb('Missing locale data for locale: "'.concat(p, '" in Intl.NumberFormat. Using default locale: "').concat(h, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(p).length && m && m(new a.gb('Missing locale data for locale: "'.concat(p, '" in Intl.DateTimeFormat. Using default locale: "').concat(h, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')))) : (m && m(new a.OV('"locale" was not configured, using "'.concat(h, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), (_.locale = _.defaultLocale || 'en')),
        !(function (e) {
            var t;
            if (e.onWarn && e.defaultRichTextElements && 'string' == typeof ((t = e.messages || {}), t[Object.keys(t)[0]])) e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution');
        })(_),
        (0, r.pi)((0, r.pi)({}, _), {
            formatters: n,
            formatNumber: s.uf.bind(null, _, n.getNumberFormat),
            formatNumberToParts: s.T.bind(null, _, n.getNumberFormat),
            formatRelativeTime: o.S.bind(null, _, n.getRelativeTimeFormat),
            formatDate: l.p6.bind(null, _, n.getDateTimeFormat),
            formatDateToParts: l.OI.bind(null, _, n.getDateTimeFormat),
            formatTime: l.mr.bind(null, _, n.getDateTimeFormat),
            formatDateTimeRange: l.Hk.bind(null, _, n.getDateTimeFormat),
            formatTimeToParts: l.uE.bind(null, _, n.getDateTimeFormat),
            formatPlural: u.R.bind(null, _, n.getPluralRules),
            formatMessage: c.w.bind(null, _, n),
            $t: c.w.bind(null, _, n),
            formatList: d.I.bind(null, _, n.getListFormat),
            formatListToParts: d.T.bind(null, _, n.getListFormat),
            formatDisplayName: f.I.bind(null, _, n.getDisplayNames)
        })
    );
}
