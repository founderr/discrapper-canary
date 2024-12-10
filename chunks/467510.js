r.d(t, {
    Rt: function () {
        return _;
    },
    iY: function () {
        return i;
    },
    l4: function () {
        return o;
    },
    qT: function () {
        return E;
    }
});
var a = r(573736);
let n = r(899517).n;
function _(e, t = {}) {
    if (!e) return '<unknown>';
    try {
        let r,
            _ = e,
            o = [],
            E = 0,
            i = 0,
            c = 3,
            s = Array.isArray(t) ? t : t.keyAttrs,
            l = (!Array.isArray(t) && t.maxStringLength) || 80;
        for (
            ;
            _ &&
            E++ < 5 &&
            ((r = (function (e, t) {
                let r = [];
                if (!e || !e.tagName) return '';
                if (n.HTMLElement && e instanceof HTMLElement && e.dataset) {
                    if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                    if (e.dataset.sentryElement) return e.dataset.sentryElement;
                }
                r.push(e.tagName.toLowerCase());
                let _ = t && t.length ? t.filter((t) => e.getAttribute(t)).map((t) => [t, e.getAttribute(t)]) : null;
                if (_ && _.length)
                    _.forEach((e) => {
                        r.push(`[${e[0]}="${e[1]}"]`);
                    });
                else {
                    e.id && r.push(`#${e.id}`);
                    let t = e.className;
                    if (t && (0, a.HD)(t)) for (let e of t.split(/\s+/)) r.push(`.${e}`);
                }
                for (let t of ['aria-label', 'type', 'name', 'title', 'alt']) {
                    let a = e.getAttribute(t);
                    a && r.push(`[${t}="${a}"]`);
                }
                return r.join('');
            })(_, s)),
            'html' !== r && (!(E > 1) || !(i + o.length * c + r.length >= l)));

        ) {
            o.push(r), (i += r.length), (_ = _.parentNode);
        }
        return o.reverse().join(' > ');
    } catch (e) {
        return '<unknown>';
    }
}
function o() {
    try {
        return n.document.location.href;
    } catch (e) {
        return '';
    }
}
function E(e) {
    return n.document && n.document.querySelector ? n.document.querySelector(e) : null;
}
function i(e) {
    if (!n.HTMLElement) return null;
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
