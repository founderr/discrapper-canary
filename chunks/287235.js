r.d(n, {
    JD: function () {
        return h;
    },
    Wd: function () {
        return f;
    },
    mF: function () {
        return d;
    }
}),
    r(200651);
var i = r(192379),
    a = r(372817),
    s = r(5967),
    o = r(420212);
let l = 'data-jump-section',
    u = 'global',
    c = i.createContext(u);
function d() {
    let e = i.useContext(c);
    return i.useMemo(() => ({ [l]: e }), [e]);
}
function f(e) {
    let n = d();
    return e.children(n);
}
async function _(e) {
    var n, r, i, c;
    if (e.key !== o.LT) return;
    let d = (0, s.uB)(e);
    if (null == d) return;
    let f = null,
        _ = null,
        h = e.target;
    for (; null != h; ) {
        if (h.hasAttribute(l)) {
            (f = h.getAttribute(l)), (_ = h);
            break;
        }
        h = h.parentElement;
    }
    let p = (0, a.E)({
        getFocusableElements: () => Array.from(d.querySelectorAll('['.concat(l, '="').concat(null != f ? f : u, '"]'))),
        getActiveElement: () => d.activeElement
    });
    if ((null === (n = (0, s.uB)(e)) || void 0 === n ? void 0 : n.activeElement) == null || null == _) {
        null === (r = p.getFirstFocusableElement()) || void 0 === r || r.focus();
        return;
    }
    e.getModifierState('Shift')
        ? null ===
              (i = await p.getPreviousFocusableElement({
                  wrap: !0,
                  from: _
              })) ||
          void 0 === i ||
          i.focus()
        : null ===
              (c = await p.getNextFocusableElement({
                  wrap: !0,
                  from: _
              })) ||
          void 0 === c ||
          c.focus();
}
function h(e) {
    i.useEffect(() => {
        if (e)
            return (
                window.addEventListener('keydown', _),
                () => {
                    window.removeEventListener('keydown', _);
                }
            );
    }, [e]);
}
