r.d(n, {
    b: function () {
        return u;
    }
});
var i = r(961742);
function a(e) {
    let n = e.getPropertyValue('content');
    return `${e.cssText} content: '${n.replace(/'|"/g, '')}';`;
}
function s(e) {
    return (0, i.qo)(e)
        .map((n) => {
            let r = e.getPropertyValue(n),
                i = e.getPropertyPriority(n);
            return `${n}: ${r}${i ? ' !important' : ''};`;
        })
        .join(' ');
}
function o(e, n, r) {
    let i = `.${e}:${n}`,
        o = r.cssText ? a(r) : s(r);
    return document.createTextNode(`${i}{${o}}`);
}
function l(e, n, r) {
    let a = window.getComputedStyle(e, r),
        s = a.getPropertyValue('content');
    if ('' === s || 'none' === s) return;
    let l = (0, i.Vj)();
    try {
        n.className = `${n.className} ${l}`;
    } catch (e) {
        return;
    }
    let u = document.createElement('style');
    u.appendChild(o(l, r, a)), n.appendChild(u);
}
function u(e, n) {
    l(e, n, ':before'), l(e, n, ':after');
}
