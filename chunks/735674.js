n.d(t, {
    z: function () {
        return o;
    }
});
let r = new Set(['id']),
    i = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
    a = new Set(['href', 'hrefLang', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
    s = /^(data-.*)$/;
function o(e, t = {}) {
    let { labelable: n, isLink: o, propNames: l } = t,
        u = {};
    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || (n && i.has(t)) || (o && a.has(t)) || (null == l ? void 0 : l.has(t)) || s.test(t)) && (u[t] = e[t]);
    return u;
}
