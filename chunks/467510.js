r.d(t, {
    Rt: function () {
        return o;
    },
    iY: function () {
        return E;
    },
    l4: function () {
        return i;
    },
    qT: function () {
        return _;
    }
});
var n = r(573736);
let a = r(899517).n;
function o(e, t = {}) {
    if (!e) return '<unknown>';
    try {
        let r,
            o = e,
            i = [],
            _ = 0,
            E = 0,
            s = 3,
            c = Array.isArray(t) ? t : t.keyAttrs,
            I = (!Array.isArray(t) && t.maxStringLength) || 80;
        for (
            ;
            o &&
            _++ < 5 &&
            ((r = (function (e, t) {
                let r = [];
                if (!e || !e.tagName) return '';
                if (a.HTMLElement && e instanceof HTMLElement && e.dataset) {
                    if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                    if (e.dataset.sentryElement) return e.dataset.sentryElement;
                }
                r.push(e.tagName.toLowerCase());
                let o = t && t.length ? t.filter((t) => e.getAttribute(t)).map((t) => [t, e.getAttribute(t)]) : null;
                if (o && o.length)
                    o.forEach((e) => {
                        r.push(`[${e[0]}="${e[1]}"]`);
                    });
                else {
                    e.id && r.push(`#${e.id}`);
                    let t = e.className;
                    if (t && (0, n.HD)(t)) for (let e of t.split(/\s+/)) r.push(`.${e}`);
                }
                for (let t of ['aria-label', 'type', 'name', 'title', 'alt']) {
                    let n = e.getAttribute(t);
                    n && r.push(`[${t}="${n}"]`);
                }
                return r.join('');
            })(o, c)),
            'html' !== r && (!(_ > 1) || !(E + i.length * s + r.length >= I)));

        ) {
            i.push(r), (E += r.length), (o = o.parentNode);
        }
        return i.reverse().join(' > ');
    } catch (e) {
        return '<unknown>';
    }
}
function i() {
    try {
        return a.document.location.href;
    } catch (e) {
        return '';
    }
}
function _(e) {
    return a.document && a.document.querySelector ? a.document.querySelector(e) : null;
}
function E(e) {
    if (!a.HTMLElement) return null;
    let t = e;
    for (let e = 0; e < 5 && t; e++) {
        if (t instanceof HTMLElement) {
            if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
            if (t.dataset.sentryElement) return t.dataset.sentryElement;
        }
        t = t.parentNode;
    }
    return null;
}
