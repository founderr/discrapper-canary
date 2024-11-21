n.d(t, {
    R: function () {
        return d;
    }
});
var r = n(740847),
    i = n(192379),
    a = n(39521);
let s = Symbol.for('react-aria.i18n.locale');
function o() {
    let e = ('undefined' != typeof window && window[s]) || ('undefined' != typeof navigator && (navigator.language || navigator.userLanguage)) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch (t) {
        e = 'en-US';
    }
    return {
        locale: e,
        direction: (0, r.d)(e) ? 'rtl' : 'ltr'
    };
}
let l = o(),
    u = new Set();
function c() {
    for (let e of ((l = o()), u)) e(l);
}
function d() {
    let e = (0, a.Av)(),
        [t, n] = (0, i.useState)(l);
    return ((0, i.useEffect)(
        () => (
            0 === u.size && window.addEventListener('languagechange', c),
            u.add(n),
            () => {
                u.delete(n), 0 === u.size && window.removeEventListener('languagechange', c);
            }
        ),
        []
    ),
    e)
        ? {
              locale: 'en-US',
              direction: 'ltr'
          }
        : t;
}
