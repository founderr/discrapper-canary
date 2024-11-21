n.d(t, {
    J: function () {
        return function e(t, n) {
            var i, a;
            return (
                '#comment' !== t.nodeName &&
                (function (e) {
                    let t = (0, r.k)(e);
                    if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                    let { display: n, visibility: i } = e.style,
                        a = 'none' !== n && 'hidden' !== i && 'collapse' !== i;
                    if (a) {
                        let { getComputedStyle: t } = e.ownerDocument.defaultView,
                            { display: n, visibility: r } = t(e);
                        a = 'none' !== n && 'hidden' !== r && 'collapse' !== r;
                    }
                    return a;
                })(t) &&
                ((i = t), (a = n), !i.hasAttribute('hidden') && !i.hasAttribute('data-react-aria-prevent-focus') && ('DETAILS' !== i.nodeName || !a || 'SUMMARY' === a.nodeName || i.hasAttribute('open'))) &&
                (!t.parentElement || e(t.parentElement, t))
            );
        };
    }
});
var r = n(591734);
