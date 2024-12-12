var i = r(911331);
function a(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
function s(e, n) {
    void 0 === n && (n = 'auto');
    var r = 'scrollBehavior' in document.body.style;
    e.forEach(function (e) {
        var i = e.el,
            a = e.top,
            s = e.left;
        i.scroll && r
            ? i.scroll({
                  top: a,
                  left: s,
                  behavior: n
              })
            : ((i.scrollTop = a), (i.scrollLeft = s));
    });
}
function o(e) {
    return !1 === e
        ? {
              block: 'end',
              inline: 'nearest'
          }
        : a(e)
          ? e
          : {
                block: 'start',
                inline: 'nearest'
            };
}
function l(e, n) {
    var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (a(n) && 'function' == typeof n.behavior) return n.behavior(r ? (0, i.Z)(e, n) : []);
    if (!!r) {
        var l = o(n);
        return s((0, i.Z)(e, l), l.behavior);
    }
}
n.Z = l;
