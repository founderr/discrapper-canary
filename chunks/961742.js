function i(e, n) {
    if (e.match(/^[a-z]+:\/\//i)) return e;
    if (e.match(/^\/\//)) return window.location.protocol + e;
    if (e.match(/^[a-z]+:/i)) return e;
    let r = document.implementation.createHTMLDocument(),
        i = r.createElement('base'),
        a = r.createElement('a');
    return r.head.appendChild(i), r.body.appendChild(a), n && (i.href = n), (a.href = e), a.href;
}
r.d(n, {
    Ad: function () {
        return c;
    },
    Bi: function () {
        return p;
    },
    Kk: function () {
        return i;
    },
    Nv: function () {
        return _;
    },
    P9: function () {
        return g;
    },
    Vj: function () {
        return a;
    },
    _c: function () {
        return h;
    },
    mX: function () {
        return d;
    },
    oY: function () {
        return E;
    },
    qo: function () {
        return s;
    }
});
let a = (() => {
    let e = 0,
        n = () => `0000${((1679616 * Math.random()) << 0).toString(36)}`.slice(-4);
    return () => ((e += 1), `u${n()}${e}`);
})();
function s(e) {
    let n = [];
    for (let r = 0, i = e.length; r < i; r++) n.push(e[r]);
    return n;
}
function o(e, n) {
    let r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(n);
    return r ? parseFloat(r.replace('px', '')) : 0;
}
function l(e) {
    let n = o(e, 'border-left-width'),
        r = o(e, 'border-right-width');
    return e.clientWidth + n + r;
}
function u(e) {
    let n = o(e, 'border-top-width'),
        r = o(e, 'border-bottom-width');
    return e.clientHeight + n + r;
}
function c(e, n = {}) {
    let r = n.width || l(e);
    return {
        width: r,
        height: n.height || u(e)
    };
}
function d() {
    let e, n;
    try {
        n = process;
    } catch (e) {}
    let r = n && n.env ? n.env.devicePixelRatio : null;
    return r && Number.isNaN((e = parseInt(r, 10))) && (e = 1), e || window.devicePixelRatio || 1;
}
let f = 16384;
function _(e) {
    (e.width > f || e.height > f) && (e.width > f && e.height > f ? (e.width > e.height ? ((e.height *= f / e.width), (e.width = f)) : ((e.width *= f / e.height), (e.height = f))) : e.width > f ? ((e.height *= f / e.width), (e.width = f)) : ((e.width *= f / e.height), (e.height = f)));
}
function h(e, n = {}) {
    return e.toBlob
        ? new Promise((r) => {
              e.toBlob(r, n.type ? n.type : 'image/png', n.quality ? n.quality : 1);
          })
        : new Promise((r) => {
              let i = window.atob(e.toDataURL(n.type ? n.type : void 0, n.quality ? n.quality : void 0).split(',')[1]),
                  a = i.length,
                  s = new Uint8Array(a);
              for (let e = 0; e < a; e += 1) s[e] = i.charCodeAt(e);
              r(new Blob([s], { type: n.type ? n.type : 'image/png' }));
          });
}
function p(e) {
    return new Promise((n, r) => {
        let i = new Image();
        (i.decode = () => n(i)), (i.onload = () => n(i)), (i.onerror = r), (i.crossOrigin = 'anonymous'), (i.decoding = 'async'), (i.src = e);
    });
}
async function m(e) {
    return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(e))
        .then(encodeURIComponent)
        .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function g(e, n, r) {
    let i = 'http://www.w3.org/2000/svg',
        a = document.createElementNS(i, 'svg'),
        s = document.createElementNS(i, 'foreignObject');
    return a.setAttribute('width', `${n}`), a.setAttribute('height', `${r}`), a.setAttribute('viewBox', `0 0 ${n} ${r}`), s.setAttribute('width', '100%'), s.setAttribute('height', '100%'), s.setAttribute('x', '0'), s.setAttribute('y', '0'), s.setAttribute('externalResourcesRequired', 'true'), a.appendChild(s), s.appendChild(e), m(a);
}
let E = (e, n) => {
    if (e instanceof n) return !0;
    let r = Object.getPrototypeOf(e);
    return null !== r && (r.constructor.name === n.name || E(r, n));
};
