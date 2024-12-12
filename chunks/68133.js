r.d(n, {
    s: function () {
        return v;
    }
});
var i = r(161578),
    a = r(961742),
    s = r(295415),
    o = r(27273);
async function l(e) {
    let n = e.toDataURL();
    return 'data:,' === n ? e.cloneNode(!1) : (0, a.Bi)(n);
}
async function u(e, n) {
    if (e.currentSrc) {
        let n = document.createElement('canvas'),
            r = n.getContext('2d');
        (n.width = e.clientWidth), (n.height = e.clientHeight), null == r || r.drawImage(e, 0, 0, n.width, n.height);
        let i = n.toDataURL();
        return (0, a.Bi)(i);
    }
    let r = e.poster,
        i = (0, s.b)(r),
        l = await (0, o.sx)(r, i, n);
    return (0, a.Bi)(l);
}
async function c(e) {
    var n;
    try {
        if (null === (n = null == e ? void 0 : e.contentDocument) || void 0 === n ? void 0 : n.body) return await v(e.contentDocument.body, {}, !0);
    } catch (e) {}
    return e.cloneNode(!1);
}
async function d(e, n) {
    return (0, a.oY)(e, HTMLCanvasElement) ? l(e) : (0, a.oY)(e, HTMLVideoElement) ? u(e, n) : (0, a.oY)(e, HTMLIFrameElement) ? c(e) : e.cloneNode(!1);
}
let f = (e) => null != e.tagName && 'SLOT' === e.tagName.toUpperCase();
async function _(e, n, r) {
    var i, s;
    let o = [];
    return (f(e) && e.assignedNodes ? (o = (0, a.qo)(e.assignedNodes())) : (0, a.oY)(e, HTMLIFrameElement) && (null === (i = e.contentDocument) || void 0 === i ? void 0 : i.body) ? (o = (0, a.qo)(e.contentDocument.body.childNodes)) : (o = (0, a.qo)((null !== (s = e.shadowRoot) && void 0 !== s ? s : e).childNodes)), 0 === o.length || (0, a.oY)(e, HTMLVideoElement))
        ? n
        : (await o.reduce(
              (e, i) =>
                  e
                      .then(() => v(i, r))
                      .then((e) => {
                          e && n.appendChild(e);
                      }),
              Promise.resolve()
          ),
          n);
}
function h(e, n) {
    let r = n.style;
    if (!r) return;
    let i = window.getComputedStyle(e);
    i.cssText
        ? ((r.cssText = i.cssText), (r.transformOrigin = i.transformOrigin))
        : (0, a.qo)(i).forEach((s) => {
              let o = i.getPropertyValue(s);
              if ('font-size' === s && o.endsWith('px')) {
                  let e = Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1;
                  o = `${e}px`;
              }
              (0, a.oY)(e, HTMLIFrameElement) && 'display' === s && 'inline' === o && (o = 'block'), 'd' === s && n.getAttribute('d') && (o = `path(${n.getAttribute('d')})`), r.setProperty(s, o, i.getPropertyPriority(s));
          });
}
function p(e, n) {
    (0, a.oY)(e, HTMLTextAreaElement) && (n.innerHTML = e.value), (0, a.oY)(e, HTMLInputElement) && n.setAttribute('value', e.value);
}
function m(e, n) {
    if ((0, a.oY)(e, HTMLSelectElement)) {
        let r = Array.from(n.children).find((n) => e.value === n.getAttribute('value'));
        r && r.setAttribute('selected', '');
    }
}
function g(e, n) {
    return (0, a.oY)(n, Element) && (h(e, n), (0, i.b)(e, n), p(e, n), m(e, n)), n;
}
async function E(e, n) {
    let r = e.querySelectorAll ? e.querySelectorAll('use') : [];
    if (0 === r.length) return e;
    let i = {};
    for (let a = 0; a < r.length; a++) {
        let s = r[a].getAttribute('xlink:href');
        if (s) {
            let r = e.querySelector(s),
                a = document.querySelector(s);
            !r && a && !i[s] && (i[s] = await v(a, n, !0));
        }
    }
    let a = Object.values(i);
    if (a.length) {
        let n = 'http://www.w3.org/1999/xhtml',
            r = document.createElementNS(n, 'svg');
        r.setAttribute('xmlns', n), (r.style.position = 'absolute'), (r.style.width = '0'), (r.style.height = '0'), (r.style.overflow = 'hidden'), (r.style.display = 'none');
        let i = document.createElementNS(n, 'defs');
        r.appendChild(i);
        for (let e = 0; e < a.length; e++) i.appendChild(a[e]);
        e.appendChild(r);
    }
    return e;
}
async function v(e, n, r) {
    return r || !n.filter || n.filter(e)
        ? Promise.resolve(e)
              .then((e) => d(e, n))
              .then((r) => _(e, r, n))
              .then((n) => g(e, n))
              .then((e) => E(e, n))
        : null;
}
