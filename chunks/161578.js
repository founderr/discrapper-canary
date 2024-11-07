n.d(t, {
    b: function () {
        return a;
    }
});
var r = n(961742);
function i(e, t, n) {
    let i = window.getComputedStyle(e, n),
        a = i.getPropertyValue('content');
    if ('' === a || 'none' === a) return;
    let s = (0, r.Vj)();
    try {
        t.className = `${t.className} ${s}`;
    } catch (e) {
        return;
    }
    let o = document.createElement('style');
    o.appendChild(
        (function (e, t, n) {
            var i;
            let a = `.${e}:${t}`;
            let s = n.cssText
                ? (function (e) {
                      let t = e.getPropertyValue('content');
                      return `${e.cssText} content: '${t.replace(/'|"/g, '')}';`;
                  })(n)
                : ((i = n),
                  (0, r.qo)(i)
                      .map((e) => {
                          let t = i.getPropertyValue(e),
                              n = i.getPropertyPriority(e);
                          return `${e}: ${t}${n ? ' !important' : ''};`;
                      })
                      .join(' '));
            return document.createTextNode(`${a}{${s}}`);
        })(s, n, i)
    ),
        t.appendChild(o);
}
function a(e, t) {
    i(e, t, ':before'), i(e, t, ':after');
}
