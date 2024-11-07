n.d(t, {
    s: function () {
        return h;
    }
});
var r = n(161578),
    i = n(961742),
    a = n(295415),
    s = n(27273);
async function o(e) {
    let t = e.toDataURL();
    return 'data:,' === t ? e.cloneNode(!1) : (0, i.Bi)(t);
}
async function l(e, t) {
    if (e.currentSrc) {
        let t = document.createElement('canvas'),
            n = t.getContext('2d');
        (t.width = e.clientWidth), (t.height = e.clientHeight), null == n || n.drawImage(e, 0, 0, t.width, t.height);
        let r = t.toDataURL();
        return (0, i.Bi)(r);
    }
    let n = e.poster,
        r = (0, a.b)(n),
        o = await (0, s.sx)(n, r, t);
    return (0, i.Bi)(o);
}
async function u(e) {
    var t;
    try {
        if (null === (t = null == e ? void 0 : e.contentDocument) || void 0 === t ? void 0 : t.body) return await h(e.contentDocument.body, {}, !0);
    } catch (e) {}
    return e.cloneNode(!1);
}
async function c(e, t) {
    return (0, i.oY)(e, HTMLCanvasElement) ? o(e) : (0, i.oY)(e, HTMLVideoElement) ? l(e, t) : (0, i.oY)(e, HTMLIFrameElement) ? u(e) : e.cloneNode(!1);
}
let d = (e) => null != e.tagName && 'SLOT' === e.tagName.toUpperCase();
async function f(e, t, n) {
    var r, a;
    let s = [];
    return (d(e) && e.assignedNodes ? (s = (0, i.qo)(e.assignedNodes())) : (0, i.oY)(e, HTMLIFrameElement) && (null === (r = e.contentDocument) || void 0 === r ? void 0 : r.body) ? (s = (0, i.qo)(e.contentDocument.body.childNodes)) : (s = (0, i.qo)((null !== (a = e.shadowRoot) && void 0 !== a ? a : e).childNodes)), 0 === s.length || (0, i.oY)(e, HTMLVideoElement))
        ? t
        : (await s.reduce(
              (e, r) =>
                  e
                      .then(() => h(r, n))
                      .then((e) => {
                          e && t.appendChild(e);
                      }),
              Promise.resolve()
          ),
          t);
}
async function _(e, t) {
    let n = e.querySelectorAll ? e.querySelectorAll('use') : [];
    if (0 === n.length) return e;
    let r = {};
    for (let i = 0; i < n.length; i++) {
        let a = n[i].getAttribute('xlink:href');
        if (a) {
            let n = e.querySelector(a),
                i = document.querySelector(a);
            !n && i && !r[a] && (r[a] = await h(i, t, !0));
        }
    }
    let i = Object.values(r);
    if (i.length) {
        let t = 'http://www.w3.org/1999/xhtml',
            n = document.createElementNS(t, 'svg');
        n.setAttribute('xmlns', t), (n.style.position = 'absolute'), (n.style.width = '0'), (n.style.height = '0'), (n.style.overflow = 'hidden'), (n.style.display = 'none');
        let r = document.createElementNS(t, 'defs');
        n.appendChild(r);
        for (let e = 0; e < i.length; e++) r.appendChild(i[e]);
        e.appendChild(n);
    }
    return e;
}
async function h(e, t, n) {
    return n || !t.filter || t.filter(e)
        ? Promise.resolve(e)
              .then((e) => c(e, t))
              .then((n) => f(e, n, t))
              .then((t) =>
                  (function (e, t) {
                      if ((0, i.oY)(t, Element)) {
                          var n, a;
                          !(function (e, t) {
                              let n = t.style;
                              if (!n) return;
                              let r = window.getComputedStyle(e);
                              r.cssText
                                  ? ((n.cssText = r.cssText), (n.transformOrigin = r.transformOrigin))
                                  : (0, i.qo)(r).forEach((a) => {
                                        let s = r.getPropertyValue(a);
                                        if ('font-size' === a && s.endsWith('px')) {
                                            let e = Math.floor(parseFloat(s.substring(0, s.length - 2))) - 0.1;
                                            s = `${e}px`;
                                        }
                                        (0, i.oY)(e, HTMLIFrameElement) && 'display' === a && 'inline' === s && (s = 'block'), 'd' === a && t.getAttribute('d') && (s = `path(${t.getAttribute('d')})`), n.setProperty(a, s, r.getPropertyPriority(a));
                                    });
                          })(e, t),
                              (0, r.b)(e, t),
                              (n = e),
                              (a = t),
                              (0, i.oY)(n, HTMLTextAreaElement) && (a.innerHTML = n.value),
                              (0, i.oY)(n, HTMLInputElement) && a.setAttribute('value', n.value),
                              !(function (e, t) {
                                  if ((0, i.oY)(e, HTMLSelectElement)) {
                                      let n = Array.from(t.children).find((t) => e.value === t.getAttribute('value'));
                                      n && n.setAttribute('selected', '');
                                  }
                              })(e, t);
                      }
                      return t;
                  })(e, t)
              )
              .then((e) => _(e, t))
        : null;
}
