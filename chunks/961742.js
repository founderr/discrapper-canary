function r(e, t) {
    if (e.match(/^[a-z]+:\/\//i)) return e;
    if (e.match(/^\/\//)) return window.location.protocol + e;
    if (e.match(/^[a-z]+:/i)) return e;
    let n = document.implementation.createHTMLDocument(),
        r = n.createElement('base'),
        i = n.createElement('a');
    return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), (i.href = e), i.href;
}
n.d(t, {
    Ad: function () {
        return o;
    },
    Bi: function () {
        return d;
    },
    Kk: function () {
        return r;
    },
    Nv: function () {
        return u;
    },
    P9: function () {
        return _;
    },
    Vj: function () {
        return i;
    },
    _c: function () {
        return c;
    },
    mX: function () {
        return l;
    },
    oY: function () {
        return p;
    },
    qo: function () {
        return a;
    }
});
let i = (() => {
    let e = 0,
        t = () => `0000${((1679616 * Math.random()) << 0).toString(36)}`.slice(-4);
    return () => ((e += 1), `u${t()}${e}`);
})();
function a(e) {
    let t = [];
    for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
    return t;
}
function s(e, t) {
    let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
    return n ? parseFloat(n.replace('px', '')) : 0;
}
function o(e, t = {}) {
    let n =
        t.width ||
        (function (e) {
            let t = s(e, 'border-left-width'),
                n = s(e, 'border-right-width');
            return e.clientWidth + t + n;
        })(e);
    return {
        width: n,
        height:
            t.height ||
            (function (e) {
                let t = s(e, 'border-top-width'),
                    n = s(e, 'border-bottom-width');
                return e.clientHeight + t + n;
            })(e)
    };
}
function l() {
    let e, t;
    try {
        t = process;
    } catch (e) {}
    let n = t && t.env ? t.env.devicePixelRatio : null;
    return n && Number.isNaN((e = parseInt(n, 10))) && (e = 1), e || window.devicePixelRatio || 1;
}
function u(e) {
    (e.width > 16384 || e.height > 16384) && (e.width > 16384 && e.height > 16384 ? (e.width > e.height ? ((e.height *= 16384 / e.width), (e.width = 16384)) : ((e.width *= 16384 / e.height), (e.height = 16384))) : e.width > 16384 ? ((e.height *= 16384 / e.width), (e.width = 16384)) : ((e.width *= 16384 / e.height), (e.height = 16384)));
}
function c(e, t = {}) {
    return e.toBlob
        ? new Promise((n) => {
              e.toBlob(n, t.type ? t.type : 'image/png', t.quality ? t.quality : 1);
          })
        : new Promise((n) => {
              let r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(',')[1]),
                  i = r.length,
                  a = new Uint8Array(i);
              for (let e = 0; e < i; e += 1) a[e] = r.charCodeAt(e);
              n(new Blob([a], { type: t.type ? t.type : 'image/png' }));
          });
}
function d(e) {
    return new Promise((t, n) => {
        let r = new Image();
        (r.decode = () => t(r)), (r.onload = () => t(r)), (r.onerror = n), (r.crossOrigin = 'anonymous'), (r.decoding = 'async'), (r.src = e);
    });
}
async function f(e) {
    return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(e))
        .then(encodeURIComponent)
        .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function _(e, t, n) {
    let r = 'http://www.w3.org/2000/svg',
        i = document.createElementNS(r, 'svg'),
        a = document.createElementNS(r, 'foreignObject');
    return i.setAttribute('width', `${t}`), i.setAttribute('height', `${n}`), i.setAttribute('viewBox', `0 0 ${t} ${n}`), a.setAttribute('width', '100%'), a.setAttribute('height', '100%'), a.setAttribute('x', '0'), a.setAttribute('y', '0'), a.setAttribute('externalResourcesRequired', 'true'), i.appendChild(a), a.appendChild(e), f(i);
}
let p = (e, t) => {
    if (e instanceof t) return !0;
    let n = Object.getPrototypeOf(e);
    return null !== n && (n.constructor.name === t.name || p(n, t));
};
