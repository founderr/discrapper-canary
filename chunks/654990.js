n.d(t, {
    nG: function () {
        return l;
    },
    tv: function () {
        return o;
    }
});
var r = n(143538),
    i = n(780100),
    a = n(192379);
let s = (0, a.createContext)({
    isNative: !0,
    open: function (e, t) {
        !(function (e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute('data-href')) {
                let n = document.createElement('a');
                (n.href = e.getAttribute('data-href')), e.hasAttribute('data-target') && (n.target = e.getAttribute('data-target')), e.hasAttribute('data-rel') && (n.rel = e.getAttribute('data-rel')), e.hasAttribute('data-download') && (n.download = e.getAttribute('data-download')), e.hasAttribute('data-ping') && (n.ping = e.getAttribute('data-ping')), e.hasAttribute('data-referrer-policy') && (n.referrerPolicy = e.getAttribute('data-referrer-policy')), e.appendChild(n), t(n), e.removeChild(n);
            }
        })(e, (e) => l(e, t));
    },
    useHref: (e) => e
});
function o() {
    return (0, a.useContext)(s);
}
function l(e, t, n = !0) {
    var a, s;
    let { metaKey: o, ctrlKey: u, altKey: c, shiftKey: d } = t;
    (0, i.vU)() && (null === (s = window.event) || void 0 === s ? void 0 : null === (a = s.type) || void 0 === a ? void 0 : a.startsWith('key')) && '_blank' === e.target && ((0, i.V5)() ? (o = !0) : (u = !0));
    let f =
        (0, i.Pf)() && (0, i.V5)() && !(0, i.zc)()
            ? new KeyboardEvent('keydown', {
                  keyIdentifier: 'Enter',
                  metaKey: o,
                  ctrlKey: u,
                  altKey: c,
                  shiftKey: d
              })
            : new MouseEvent('click', {
                  metaKey: o,
                  ctrlKey: u,
                  altKey: c,
                  shiftKey: d,
                  bubbles: !0,
                  cancelable: !0
              });
    (l.isOpening = n), (0, r.A)(e), e.dispatchEvent(f), (l.isOpening = !1);
}
l.isOpening = !1;
