n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(608787),
    o = n(442837),
    s = n(906467),
    l = n(358085),
    u = n(31336),
    c = n(19759);
let d = (0, a.Un)({
    createPromise: () => Promise.all([n.e('96427'), n.e('51514'), n.e('50506'), n.e('81039'), n.e('89350'), n.e('80451'), n.e('84605'), n.e('4084'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('72652'), n.e('32776'), n.e('79915'), n.e('33053'), n.e('8016'), n.e('37581'), n.e('68136'), n.e('76540'), n.e('65840'), n.e('87624'), n.e('22646'), n.e('13351'), n.e('25183'), n.e('18101'), n.e('57674'), n.e('30419'), n.e('48923'), n.e('18824'), n.e('52619'), n.e('8821'), n.e('18815'), n.e('18146'), n.e('37229'), n.e('64838'), n.e('28044'), n.e('20399'), n.e('67564'), n.e('74925'), n.e('64679'), n.e('24582'), n.e('30634'), n.e('57094')]).then(n.bind(n, 678717)),
    webpackId: 678717
});
function _(e) {
    let { mobile: t } = e,
        n = (0, o.e7)([s.Z], () => s.Z.isDeveloper),
        a = (0, o.e7)([c.Z], () => c.Z.displayTools),
        _ = i.useCallback((e) => {
            ((0, l.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && 'KeyO' === e.code && (0, u.SO)();
        }, []);
    return (i.useLayoutEffect(
        () => (
            window.addEventListener('keydown', _),
            () => {
                window.removeEventListener('keydown', _);
            }
        ),
        [_]
    ),
    t ? n : a)
        ? (0, r.jsx)(d, { mobile: t })
        : null;
}
