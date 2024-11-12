n.d(t, {
    JD: function () {
        return _;
    },
    Wd: function () {
        return d;
    },
    mF: function () {
        return c;
    }
}),
    n(200651);
var r = n(192379),
    i = n(372817),
    a = n(5967),
    s = n(420212);
let o = 'data-jump-section',
    l = 'global',
    u = r.createContext(l);
function c() {
    let e = r.useContext(u);
    return r.useMemo(() => ({ [o]: e }), [e]);
}
function d(e) {
    let t = c();
    return e.children(t);
}
async function f(e) {
    var t, n, r, u;
    if (e.key !== s.LT) return;
    let c = (0, a.uB)(e);
    if (null == c) return;
    let d = null,
        f = null,
        _ = e.target;
    for (; null != _; ) {
        if (_.hasAttribute(o)) {
            (d = _.getAttribute(o)), (f = _);
            break;
        }
        _ = _.parentElement;
    }
    let p = (0, i.E)({
        getFocusableElements: () => Array.from(c.querySelectorAll('['.concat(o, '="').concat(null != d ? d : l, '"]'))),
        getActiveElement: () => c.activeElement
    });
    if ((null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == f) {
        null === (n = p.getFirstFocusableElement()) || void 0 === n || n.focus();
        return;
    }
    e.getModifierState('Shift')
        ? null ===
              (r = await p.getPreviousFocusableElement({
                  wrap: !0,
                  from: f
              })) ||
          void 0 === r ||
          r.focus()
        : null ===
              (u = await p.getNextFocusableElement({
                  wrap: !0,
                  from: f
              })) ||
          void 0 === u ||
          u.focus();
}
function _(e) {
    r.useEffect(() => {
        if (e)
            return (
                window.addEventListener('keydown', f),
                () => {
                    window.removeEventListener('keydown', f);
                }
            );
    }, [e]);
}
