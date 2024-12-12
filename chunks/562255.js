function n(e, n, r, i) {
    return e.addEventListener || (n = 'on' + n), (e.addEventListener || e.attachEvent).call(e, n, r, i), r;
}
function r(e, n, r, i) {
    return e.removeEventListener || (n = 'on' + n), (e.removeEventListener || e.detachEvent).call(e, n, r, i), r;
}
(e.exports = n), (e.exports.on = n), (e.exports.off = r);
