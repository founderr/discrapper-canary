n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(608787),
    s = n(442837),
    o = n(906467),
    l = n(358085),
    u = n(31336),
    c = n(19759);
let d = (0, a.Un)({
    createPromise: () => Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('50506'), n.e('23755'), n.e('23217'), n.e('79189'), n.e('80451'), n.e('84605'), n.e('38597'), n.e('29549'), n.e('33053'), n.e('12013'), n.e('6380'), n.e('8016'), n.e('52249'), n.e('99783'), n.e('31605'), n.e('76540'), n.e('15669'), n.e('26182'), n.e('18543'), n.e('17938'), n.e('95900'), n.e('51269'), n.e('65840'), n.e('32776'), n.e('72181'), n.e('13351'), n.e('13513'), n.e('41309'), n.e('90508'), n.e('22646'), n.e('95393'), n.e('25183'), n.e('87624'), n.e('56602'), n.e('30419'), n.e('25788'), n.e('48923'), n.e('18824'), n.e('46097'), n.e('8739'), n.e('18101'), n.e('8821'), n.e('58059'), n.e('70348'), n.e('76447'), n.e('18895'), n.e('42587'), n.e('3994'), n.e('30243'), n.e('99393'), n.e('37229'), n.e('99008'), n.e('25621'), n.e('60254'), n.e('28044'), n.e('85030'), n.e('64679'), n.e('93936'), n.e('30634'), n.e('73634')]).then(n.bind(n, 678717)),
    webpackId: 678717
});
function f(e) {
    let { mobile: t } = e,
        n = (0, s.e7)([o.Z], () => o.Z.isDeveloper),
        a = (0, s.e7)([c.Z], () => c.Z.displayTools),
        f = i.useCallback((e) => {
            ((0, l.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && 'KeyO' === e.code && (0, u.SO)();
        }, []);
    return (i.useLayoutEffect(
        () => (
            window.addEventListener('keydown', f),
            () => {
                window.removeEventListener('keydown', f);
            }
        ),
        [f]
    ),
    t ? n : a)
        ? (0, r.jsx)(d, { mobile: t })
        : null;
}
