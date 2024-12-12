let a, n, _, o, E, i;
r.d(t, {
    G: function () {
        return rK;
    },
    T: function () {
        return rF;
    }
});
var c,
    s,
    l,
    I,
    u,
    R,
    A,
    T,
    N = r(505676),
    d = r(507690),
    f = r(572299),
    O = r(263449),
    L = r(946471),
    p = r(233517),
    h = r(822578),
    D = r(696486),
    S = r(988097),
    C = r(820754),
    P = r(899517),
    g = r(202811),
    U = r(370336),
    M = r(467510),
    G = r(101284),
    m = r(622916),
    y = r(394798),
    b = r(886115),
    v = r(617726),
    w = r(928541),
    B = r(14588),
    W = r(26506),
    Y = r(650093),
    H = r(501684),
    x = r(157079),
    K = r(469359),
    k = r(393523);
let V = P.n,
    F = 'sentryReplaySession',
    X = 'Unable to send Replay';
function j(e, t) {
    return null != e ? e : t();
}
function $(e) {
    let t;
    let r = e[0],
        a = 1;
    for (; a < e.length; ) {
        let n = e[a],
            _ = e[a + 1];
        if (((a += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == r)) return;
        'access' === n || 'optionalAccess' === n ? ((t = r), (r = _(r))) : ('call' === n || 'optionalCall' === n) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
((c = A || (A = {}))[(c.Document = 0)] = 'Document'), (c[(c.DocumentType = 1)] = 'DocumentType'), (c[(c.Element = 2)] = 'Element'), (c[(c.Text = 3)] = 'Text'), (c[(c.CDATA = 4)] = 'CDATA'), (c[(c.Comment = 5)] = 'Comment');
function q(e) {
    let t = $([e, 'optionalAccess', (e) => e.host]);
    return $([t, 'optionalAccess', (e) => e.shadowRoot]) === e;
}
function J(e) {
    return '[object ShadowRoot]' === Object.prototype.toString.call(e);
}
function z(e) {
    try {
        var t;
        let r = e.rules || e.cssRules;
        return r ? ((t = Array.from(r, Q).join('')).includes(' background-clip: text;') && !t.includes(' -webkit-background-clip: text;') && (t = t.replace(' background-clip: text;', ' -webkit-background-clip: text; background-clip: text;')), t) : null;
    } catch (e) {
        return null;
    }
}
function Q(e) {
    let t;
    if (
        (function (e) {
            return 'styleSheet' in e;
        })(e)
    )
        try {
            t =
                z(e.styleSheet) ||
                (function (e) {
                    let { cssText: t } = e;
                    if (t.split('"').length < 3) return t;
                    let r = ['@import', `url(${JSON.stringify(e.href)})`];
                    return '' === e.layerName ? r.push('layer') : e.layerName && r.push(`layer(${e.layerName})`), e.supportsText && r.push(`supports(${e.supportsText})`), e.media.length && r.push(e.media.mediaText), r.join(' ') + ';';
                })(e);
        } catch (e) {}
    else if (
        (function (e) {
            return 'selectorText' in e;
        })(e) &&
        e.selectorText.includes(':')
    )
        return (function (e) {
            return e.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, '$1\\$2');
        })(e.cssText);
    return t || e.cssText;
}
class Z {
    constructor() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    getId(e) {
        return e ? j($([this, 'access', (e) => e.getMeta, 'call', (t) => t(e), 'optionalAccess', (e) => e.id]), () => -1) : -1;
    }
    getNode(e) {
        return this.idNodeMap.get(e) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(e) {
        return this.nodeMetaMap.get(e) || null;
    }
    removeNodeFromMap(e) {
        let t = this.getId(e);
        this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((e) => this.removeNodeFromMap(e));
    }
    has(e) {
        return this.idNodeMap.has(e);
    }
    hasNode(e) {
        return this.nodeMetaMap.has(e);
    }
    add(e, t) {
        let r = t.id;
        this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t);
    }
    replace(e, t) {
        let r = this.getNode(e);
        if (r) {
            let e = this.nodeMetaMap.get(r);
            e && this.nodeMetaMap.set(t, e);
        }
        this.idNodeMap.set(e, t);
    }
    reset() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
}
function ee({ maskInputOptions: e, tagName: t, type: r }) {
    return 'OPTION' === t && (t = 'SELECT'), !!(e[t.toLowerCase()] || (r && e[r]) || 'password' === r || ('INPUT' === t && !r && e.text));
}
function et({ isMasked: e, element: t, value: r, maskInputFn: a }) {
    let n = r || '';
    return e ? (a && (n = a(n, t)), '*'.repeat(n.length)) : n;
}
function er(e) {
    return e.toLowerCase();
}
function ea(e) {
    return e.toUpperCase();
}
let en = '__rrweb_original__';
function e_(e) {
    let t = e.type;
    return e.hasAttribute('data-rr-is-password') ? 'password' : t ? er(t) : null;
}
function eo(e, t, r) {
    return 'INPUT' === t && ('radio' === r || 'checkbox' === r) ? e.getAttribute('value') || '' : e.value;
}
function eE(e, t) {
    let r;
    try {
        r = new URL(
            e,
            j(t, () => window.location.href)
        );
    } catch (e) {
        return null;
    }
    return j($([r.pathname.match(/\.([0-9a-z]+)(?:$)/i), 'optionalAccess', (e) => e[1]]), () => null);
}
let ei = {};
function ec(e) {
    let t = ei[e];
    if (t) return t;
    let r = window.document,
        a = window[e];
    if (r && 'function' == typeof r.createElement)
        try {
            let t = r.createElement('iframe');
            (t.hidden = !0), r.head.appendChild(t);
            let n = t.contentWindow;
            n && n[e] && (a = n[e]), r.head.removeChild(t);
        } catch (e) {}
    return (ei[e] = a.bind(window));
}
function es(...e) {
    return ec('setTimeout')(...e);
}
function el(...e) {
    return ec('clearTimeout')(...e);
}
let eI = 1,
    eu = RegExp('[^a-z0-9-_:]');
function eR() {
    return eI++;
}
let eA = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    eT = /^(?:[a-z+]+:)?\/\//i,
    eN = /^www\..*/i,
    ed = /^(data:)([^,]*),(.*)/i;
function ef(e, t) {
    return (e || '').replace(eA, (e, r, a, n, _, o) => {
        let E = a || _ || o,
            i = r || n || '';
        if (!E) return e;
        if (eT.test(E) || eN.test(E) || ed.test(E)) return `url(${i}${E}${i})`;
        if ('/' === E[0]) {
            var c;
            let e;
            return `url(${i}${((e = ''), (e = (e = (c = t).indexOf('//') > -1 ? c.split('/').slice(0, 3).join('/') : c.split('/')[0]).split('?')[0]) + E)}${i})`;
        }
        let s = t.split('/'),
            l = E.split('/');
        for (let e of (s.pop(), l)) {
            if ('.' !== e) '..' === e ? s.pop() : s.push(e);
        }
        return `url(${i}${s.join('/')}${i})`;
    });
}
let eO = /^[^ \t\n\r\u000c]+/,
    eL = /^[, \t\n\r\u000c]+/;
function ep(e, t) {
    if (!t || '' === t.trim()) return t;
    let r = e.createElement('a');
    return (r.href = t), r.href;
}
function eh() {
    let e = document.createElement('a');
    return (e.href = ''), e.href;
}
function eD(e, t, r, a, n, _) {
    if (!a) return a;
    if ('src' === r || ('href' === r && !('use' === t && '#' === a[0]))) return ep(e, a);
    if ('xlink:href' === r && '#' !== a[0]) return ep(e, a);
    if ('background' === r && ('table' === t || 'td' === t || 'th' === t)) return ep(e, a);
    else if ('srcset' === r)
        return (function (e, t) {
            if ('' === t.trim()) return t;
            let r = 0;
            function a(e) {
                let a;
                let n = e.exec(t.substring(r));
                return n ? ((a = n[0]), (r += a.length), a) : '';
            }
            let n = [];
            for (; a(eL), !(r >= t.length); ) {
                let _ = a(eO);
                if (',' === _.slice(-1)) (_ = ep(e, _.substring(0, _.length - 1))), n.push(_);
                else {
                    let a = '';
                    _ = ep(e, _);
                    let o = !1;
                    for (;;) {
                        let e = t.charAt(r);
                        if ('' === e) {
                            n.push((_ + a).trim());
                            break;
                        }
                        if (o) ')' === e && (o = !1);
                        else {
                            if (',' === e) {
                                (r += 1), n.push((_ + a).trim());
                                break;
                            }
                            '(' === e && (o = !0);
                        }
                        (a += e), (r += 1);
                    }
                }
            }
            return n.join(', ');
        })(e, a);
    else if ('style' === r) return ef(a, eh());
    else if ('object' === t && 'data' === r) return ep(e, a);
    return 'function' == typeof _ ? _(r, a, n) : a;
}
function eS(e, t, r) {
    return ('video' === e || 'audio' === e) && 'autoplay' === t;
}
function eC(e, t, r = 1 / 0, a = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || a > r ? -1 : t(e) ? a : eC(e.parentNode, t, r, a + 1);
}
function eP(e, t) {
    return (r) => {
        if (null === r) return !1;
        try {
            if (e) {
                if ('string' == typeof e) {
                    if (r.matches(`.${e}`)) return !0;
                } else if (
                    (function (e, t) {
                        for (let r = e.classList.length; r--; ) {
                            let a = e.classList[r];
                            if (t.test(a)) return !0;
                        }
                        return !1;
                    })(r, e)
                )
                    return !0;
            }
            if (t && r.matches(t)) return !0;
            return !1;
        } catch (e) {
            return !1;
        }
    };
}
function eg(e, t, r, a, n, _) {
    try {
        let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (null === o) return !1;
        if ('INPUT' === o.tagName) {
            let e = o.getAttribute('autocomplete');
            if (['current-password', 'new-password', 'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-csc'].includes(e)) return !0;
        }
        let E = -1,
            i = -1;
        if (_) {
            if ((i = eC(o, eP(a, n))) < 0) return !0;
            E = eC(o, eP(t, r), i >= 0 ? i : 1 / 0);
        } else {
            if ((E = eC(o, eP(t, r))) < 0) return !1;
            i = eC(o, eP(a, n), E >= 0 ? E : 1 / 0);
        }
        return E >= 0 ? !(i >= 0) || E <= i : !(i >= 0) && !!_;
    } catch (e) {}
    return !!_;
}
function eU(e) {
    return null == e ? '' : e.toLowerCase();
}
function eM(e, t) {
    let r;
    let { doc: _, mirror: o, blockClass: E, blockSelector: i, unblockSelector: c, maskAllText: s, maskTextClass: l, unmaskTextClass: I, maskTextSelector: u, unmaskTextSelector: R, skipChild: T = !1, inlineStylesheet: N = !0, maskInputOptions: d = {}, maskAttributeFn: f, maskTextFn: O, maskInputFn: L, slimDOMOptions: p, dataURLOptions: h = {}, inlineImages: D = !1, recordCanvas: S = !1, onSerialize: C, onIframeLoad: P, iframeLoadTimeout: g = 5000, onStylesheetLoad: U, stylesheetLoadTimeout: M = 5000, keepIframeSrcFn: G = () => !1, newlyAddedElement: m = !1 } = t,
        { preserveWhiteSpace: y = !0 } = t,
        b = (function (e, t) {
            let { doc: r, mirror: _, blockClass: o, blockSelector: E, unblockSelector: i, maskAllText: c, maskAttributeFn: s, maskTextClass: l, unmaskTextClass: I, maskTextSelector: u, unmaskTextSelector: R, inlineStylesheet: T, maskInputOptions: N = {}, maskTextFn: d, maskInputFn: f, dataURLOptions: O = {}, inlineImages: L, recordCanvas: p, keepIframeSrcFn: h, newlyAddedElement: D = !1 } = t,
                S = (function (e, t) {
                    if (!t.hasNode(e)) return;
                    let r = t.getId(e);
                    return 1 === r ? void 0 : r;
                })(r, _);
            switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    if ('CSS1Compat' !== e.compatMode)
                        return {
                            type: A.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        };
                    return {
                        type: A.Document,
                        childNodes: []
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: A.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: S
                    };
                case e.ELEMENT_NODE:
                    return (function (e, t) {
                        var r;
                        let _;
                        let { doc: o, blockClass: E, blockSelector: i, unblockSelector: c, inlineStylesheet: s, maskInputOptions: l = {}, maskAttributeFn: I, maskInputFn: u, dataURLOptions: R = {}, inlineImages: T, recordCanvas: N, keepIframeSrcFn: d, newlyAddedElement: f = !1, rootId: O, maskAllText: L, maskTextClass: p, unmaskTextClass: h, maskTextSelector: D, unmaskTextSelector: S } = t,
                            C = (function (e, t, r, a) {
                                try {
                                    if (a && e.matches(a)) return !1;
                                    if ('string' == typeof t) {
                                        if (e.classList.contains(t)) return !0;
                                    } else
                                        for (let r = e.classList.length; r--; ) {
                                            let a = e.classList[r];
                                            if (t.test(a)) return !0;
                                        }
                                    if (r) return e.matches(r);
                                } catch (e) {}
                                return !1;
                            })(e, E, i, c),
                            P = (function (e) {
                                if (e instanceof HTMLFormElement) return 'form';
                                let t = er(e.tagName);
                                return eu.test(t) ? 'div' : t;
                            })(e),
                            g = {},
                            U = e.attributes.length;
                        for (let t = 0; t < U; t++) {
                            let r = e.attributes[t];
                            r.name && !eS(P, r.name, r.value) && (g[r.name] = eD(o, P, er(r.name), r.value, e, I));
                        }
                        if ('link' === P && s) {
                            let t = Array.from(o.styleSheets).find((t) => t.href === e.href),
                                r = null;
                            t && (r = z(t)), r && (delete g.rel, delete g.href, (g._cssText = ef(r, t.href)));
                        }
                        if ('style' === P && e.sheet && !(e.innerText || e.textContent || '').trim().length) {
                            let t = z(e.sheet);
                            t && (g._cssText = ef(t, eh()));
                        }
                        if ('input' === P || 'textarea' === P || 'select' === P || 'option' === P) {
                            let t = e_(e),
                                r = eo(e, ea(P), t),
                                a = e.checked;
                            if ('submit' !== t && 'button' !== t && r) {
                                let a = eg(
                                    e,
                                    p,
                                    D,
                                    h,
                                    S,
                                    ee({
                                        type: t,
                                        tagName: ea(P),
                                        maskInputOptions: l
                                    })
                                );
                                g.value = et({
                                    isMasked: a,
                                    element: e,
                                    value: r,
                                    maskInputFn: u
                                });
                            }
                            a && (g.checked = a);
                        }
                        if (('option' === P && (e.selected && !l.select ? (g.selected = !0) : delete g.selected), 'canvas' === P && N)) {
                            if ('2d' === e.__context)
                                !(function (e) {
                                    let t = e.getContext('2d');
                                    if (!t) return !0;
                                    for (let r = 0; r < e.width; r += 50)
                                        for (let a = 0; a < e.height; a += 50) {
                                            let n = t.getImageData;
                                            if (new Uint32Array((en in n ? n[en] : n).call(t, r, a, Math.min(50, e.width - r), Math.min(50, e.height - a)).data.buffer).some((e) => 0 !== e)) return !1;
                                        }
                                    return !0;
                                })(e) && (g.rr_dataURL = e.toDataURL(R.type, R.quality));
                            else if (!('__context' in e)) {
                                let t = e.toDataURL(R.type, R.quality),
                                    r = document.createElement('canvas');
                                (r.width = e.width), (r.height = e.height), t !== r.toDataURL(R.type, R.quality) && (g.rr_dataURL = t);
                            }
                        }
                        if ('img' === P && T) {
                            !a && (n = (a = o.createElement('canvas')).getContext('2d'));
                            let t = e.crossOrigin;
                            e.crossOrigin = 'anonymous';
                            let r = () => {
                                e.removeEventListener('load', r);
                                try {
                                    (a.width = e.naturalWidth), (a.height = e.naturalHeight), n.drawImage(e, 0, 0), (g.rr_dataURL = a.toDataURL(R.type, R.quality));
                                } catch (t) {
                                    console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`);
                                }
                                t ? (g.crossOrigin = t) : e.removeAttribute('crossorigin');
                            };
                            e.complete && 0 !== e.naturalWidth ? r() : e.addEventListener('load', r);
                        }
                        if ((('audio' === P || 'video' === P) && ((g.rr_mediaState = e.paused ? 'paused' : 'played'), (g.rr_mediaCurrentTime = e.currentTime)), !f && (e.scrollLeft && (g.rr_scrollLeft = e.scrollLeft), e.scrollTop && (g.rr_scrollTop = e.scrollTop)), C)) {
                            let { width: t, height: r } = e.getBoundingClientRect();
                            g = {
                                class: g.class,
                                rr_width: `${t}px`,
                                rr_height: `${r}px`
                            };
                        }
                        'iframe' === P && !d(g.src) && (!C && !e.contentDocument && (g.rr_src = g.src), delete g.src);
                        try {
                            customElements.get(P) && (_ = !0);
                        } catch (e) {}
                        return {
                            type: A.Element,
                            tagName: P,
                            attributes: g,
                            childNodes: [],
                            isSVG: !!('svg' === (r = e).tagName || r.ownerSVGElement) || void 0,
                            needBlock: C,
                            rootId: O,
                            isCustom: _
                        };
                    })(e, {
                        doc: r,
                        blockClass: o,
                        blockSelector: E,
                        unblockSelector: i,
                        inlineStylesheet: T,
                        maskAttributeFn: s,
                        maskInputOptions: N,
                        maskInputFn: f,
                        dataURLOptions: O,
                        inlineImages: L,
                        recordCanvas: p,
                        keepIframeSrcFn: h,
                        newlyAddedElement: D,
                        rootId: S,
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: I,
                        maskTextSelector: u,
                        unmaskTextSelector: R
                    });
                case e.TEXT_NODE:
                    return (function (e, t) {
                        let { maskAllText: r, maskTextClass: a, unmaskTextClass: n, maskTextSelector: _, unmaskTextSelector: o, maskTextFn: E, maskInputOptions: i, maskInputFn: c, rootId: s } = t,
                            l = e.parentNode && e.parentNode.tagName,
                            I = e.textContent,
                            u = 'STYLE' === l || void 0,
                            R = 'SCRIPT' === l || void 0,
                            T = 'TEXTAREA' === l || void 0;
                        if (u && I) {
                            try {
                                e.nextSibling || e.previousSibling || ($([e, 'access', (e) => e.parentNode, 'access', (e) => e.sheet, 'optionalAccess', (e) => e.cssRules]) && (I = z(e.parentNode.sheet)));
                            } catch (t) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e);
                            }
                            I = ef(I, eh());
                        }
                        R && (I = 'SCRIPT_PLACEHOLDER');
                        let N = eg(e, a, _, n, o, r);
                        return (
                            !u && !R && !T && I && N && (I = E ? E(I, e.parentElement) : I.replace(/[\S]/g, '*')),
                            T && I && (i.textarea || N) && (I = c ? c(I, e.parentNode) : I.replace(/[\S]/g, '*')),
                            'OPTION' === l &&
                                I &&
                                (I = et({
                                    isMasked: eg(
                                        e,
                                        a,
                                        _,
                                        n,
                                        o,
                                        ee({
                                            type: null,
                                            tagName: l,
                                            maskInputOptions: i
                                        })
                                    ),
                                    element: e,
                                    value: I,
                                    maskInputFn: c
                                })),
                            {
                                type: A.Text,
                                textContent: I || '',
                                isStyle: u,
                                rootId: s
                            }
                        );
                    })(e, {
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: I,
                        maskTextSelector: u,
                        unmaskTextSelector: R,
                        maskTextFn: d,
                        maskInputOptions: N,
                        maskInputFn: f,
                        rootId: S
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: A.CDATA,
                        textContent: '',
                        rootId: S
                    };
                case e.COMMENT_NODE:
                    return {
                        type: A.Comment,
                        textContent: e.textContent || '',
                        rootId: S
                    };
                default:
                    return !1;
            }
        })(e, {
            doc: _,
            mirror: o,
            blockClass: E,
            blockSelector: i,
            maskAllText: s,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: I,
            maskTextSelector: u,
            unmaskTextSelector: R,
            inlineStylesheet: N,
            maskInputOptions: d,
            maskAttributeFn: f,
            maskTextFn: O,
            maskInputFn: L,
            dataURLOptions: h,
            inlineImages: D,
            recordCanvas: S,
            keepIframeSrcFn: G,
            newlyAddedElement: m
        });
    if (!b) return console.warn(e, 'not serialized'), null;
    r = o.hasNode(e)
        ? o.getId(e)
        : !(function (e, t) {
                if (t.comment && e.type === A.Comment) return !0;
                if (e.type === A.Element) {
                    if (t.script && ('script' === e.tagName || ('link' === e.tagName && ('preload' === e.attributes.rel || 'modulepreload' === e.attributes.rel) && 'script' === e.attributes.as) || ('link' === e.tagName && 'prefetch' === e.attributes.rel && 'string' == typeof e.attributes.href && 'js' === eE(e.attributes.href)))) return !0;
                    if (t.headFavicon && (('link' === e.tagName && 'shortcut icon' === e.attributes.rel) || ('meta' === e.tagName && (eU(e.attributes.name).match(/^msapplication-tile(image|color)$/) || 'application-name' === eU(e.attributes.name) || 'icon' === eU(e.attributes.rel) || 'apple-touch-icon' === eU(e.attributes.rel) || 'shortcut icon' === eU(e.attributes.rel))))) return !0;
                    else if ('meta' === e.tagName) {
                        if (t.headMetaDescKeywords && eU(e.attributes.name).match(/^description|keywords$/)) return !0;
                        if (t.headMetaSocial && (eU(e.attributes.property).match(/^(og|twitter|fb):/) || eU(e.attributes.name).match(/^(og|twitter):/) || 'pinterest' === eU(e.attributes.name))) return !0;
                        else if (t.headMetaRobots && ('robots' === eU(e.attributes.name) || 'googlebot' === eU(e.attributes.name) || 'bingbot' === eU(e.attributes.name))) return !0;
                        else if (t.headMetaHttpEquiv && void 0 !== e.attributes['http-equiv']) return !0;
                        else if (t.headMetaAuthorship && ('author' === eU(e.attributes.name) || 'generator' === eU(e.attributes.name) || 'framework' === eU(e.attributes.name) || 'publisher' === eU(e.attributes.name) || 'progid' === eU(e.attributes.name) || eU(e.attributes.property).match(/^article:/) || eU(e.attributes.property).match(/^product:/))) return !0;
                        else if (t.headMetaVerification && ('google-site-verification' === eU(e.attributes.name) || 'yandex-verification' === eU(e.attributes.name) || 'csrf-token' === eU(e.attributes.name) || 'p:domain_verify' === eU(e.attributes.name) || 'verify-v1' === eU(e.attributes.name) || 'verification' === eU(e.attributes.name) || 'shopify-checkout-api-token' === eU(e.attributes.name))) return !0;
                    }
                }
                return !1;
            })(b, p) &&
            (y || b.type !== A.Text || b.isStyle || b.textContent.replace(/^\s+|\s+$/gm, '').length)
          ? eR()
          : -2;
    let v = Object.assign(b, { id: r });
    if ((o.add(e, v), -2 === r)) return null;
    C && C(e);
    let w = !T;
    if (v.type === A.Element) {
        (w = w && !v.needBlock), delete v.needBlock;
        let t = e.shadowRoot;
        t && J(t) && (v.isShadowHost = !0);
    }
    if ((v.type === A.Document || v.type === A.Element) && w) {
        var B;
        p.headWhitespace && v.type === A.Element && 'head' === v.tagName && (y = !1);
        let t = {
            doc: _,
            mirror: o,
            blockClass: E,
            blockSelector: i,
            maskAllText: s,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: I,
            maskTextSelector: u,
            unmaskTextSelector: R,
            skipChild: T,
            inlineStylesheet: N,
            maskInputOptions: d,
            maskAttributeFn: f,
            maskTextFn: O,
            maskInputFn: L,
            slimDOMOptions: p,
            dataURLOptions: h,
            inlineImages: D,
            recordCanvas: S,
            preserveWhiteSpace: y,
            onSerialize: C,
            onIframeLoad: P,
            iframeLoadTimeout: g,
            onStylesheetLoad: U,
            stylesheetLoadTimeout: M,
            keepIframeSrcFn: G
        };
        for (let r of Array.from(e.childNodes)) {
            let e = eM(r, t);
            e && v.childNodes.push(e);
        }
        if ((B = e).nodeType === B.ELEMENT_NODE && e.shadowRoot)
            for (let r of Array.from(e.shadowRoot.childNodes)) {
                let a = eM(r, t);
                a && (J(e.shadowRoot) && (a.isShadow = !0), v.childNodes.push(a));
            }
    }
    return (
        e.parentNode && q(e.parentNode) && J(e.parentNode) && (v.isShadow = !0),
        v.type === A.Element &&
            'iframe' === v.tagName &&
            !(function (e, t, r) {
                let a;
                let n = e.contentWindow;
                if (!n) return;
                let _ = !1;
                try {
                    a = n.document.readyState;
                } catch (e) {
                    return;
                }
                if ('complete' !== a) {
                    let a = es(() => {
                        !_ && (t(), (_ = !0));
                    }, r);
                    e.addEventListener('load', () => {
                        el(a), (_ = !0), t();
                    });
                    return;
                }
                let o = 'about:blank';
                if (n.location.href !== o || e.src === o || '' === e.src) return es(t, 0), e.addEventListener('load', t);
                e.addEventListener('load', t);
            })(
                e,
                () => {
                    let t = e.contentDocument;
                    if (t && P) {
                        let r = eM(t, {
                            doc: t,
                            mirror: o,
                            blockClass: E,
                            blockSelector: i,
                            unblockSelector: c,
                            maskAllText: s,
                            maskTextClass: l,
                            unmaskTextClass: I,
                            maskTextSelector: u,
                            unmaskTextSelector: R,
                            skipChild: !1,
                            inlineStylesheet: N,
                            maskInputOptions: d,
                            maskAttributeFn: f,
                            maskTextFn: O,
                            maskInputFn: L,
                            slimDOMOptions: p,
                            dataURLOptions: h,
                            inlineImages: D,
                            recordCanvas: S,
                            preserveWhiteSpace: y,
                            onSerialize: C,
                            onIframeLoad: P,
                            iframeLoadTimeout: g,
                            onStylesheetLoad: U,
                            stylesheetLoadTimeout: M,
                            keepIframeSrcFn: G
                        });
                        r && P(e, r);
                    }
                },
                g
            ),
        v.type === A.Element &&
            'link' === v.tagName &&
            'string' == typeof v.attributes.rel &&
            ('stylesheet' === v.attributes.rel || ('preload' === v.attributes.rel && 'string' == typeof v.attributes.href && 'css' === eE(v.attributes.href))) &&
            !(function (e, t, r) {
                let a,
                    n = !1;
                try {
                    a = e.sheet;
                } catch (e) {
                    return;
                }
                if (a) return;
                let _ = es(() => {
                    !n && (t(), (n = !0));
                }, r);
                e.addEventListener('load', () => {
                    el(_), (n = !0), t();
                });
            })(
                e,
                () => {
                    if (U) {
                        let t = eM(e, {
                            doc: _,
                            mirror: o,
                            blockClass: E,
                            blockSelector: i,
                            unblockSelector: c,
                            maskAllText: s,
                            maskTextClass: l,
                            unmaskTextClass: I,
                            maskTextSelector: u,
                            unmaskTextSelector: R,
                            skipChild: !1,
                            inlineStylesheet: N,
                            maskInputOptions: d,
                            maskAttributeFn: f,
                            maskTextFn: O,
                            maskInputFn: L,
                            slimDOMOptions: p,
                            dataURLOptions: h,
                            inlineImages: D,
                            recordCanvas: S,
                            preserveWhiteSpace: y,
                            onSerialize: C,
                            onIframeLoad: P,
                            iframeLoadTimeout: g,
                            onStylesheetLoad: U,
                            stylesheetLoadTimeout: M,
                            keepIframeSrcFn: G
                        });
                        t && U(e, t);
                    }
                },
                M
            ),
        v
    );
}
function eG(e) {
    let t;
    let r = e[0],
        a = 1;
    for (; a < e.length; ) {
        let n = e[a],
            _ = e[a + 1];
        if (((a += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == r)) return;
        'access' === n || 'optionalAccess' === n ? ((t = r), (r = _(r))) : ('call' === n || 'optionalCall' === n) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
function em(e, t, r = document) {
    let a = {
        capture: !0,
        passive: !0
    };
    return r.addEventListener(e, t, a), () => r.removeEventListener(e, t, a);
}
let ey = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
    eb = {
        map: {},
        getId: () => (console.error(ey), -1),
        getNode: () => (console.error(ey), null),
        removeNodeFromMap() {
            console.error(ey);
        },
        has: () => (console.error(ey), !1),
        reset() {
            console.error(ey);
        }
    };
function ev(e, t, r = {}) {
    let a = null,
        n = 0;
    return function (..._) {
        let o = Date.now();
        !n && !1 === r.leading && (n = o);
        let E = t - (o - n),
            i = this;
        E <= 0 || E > t
            ? (a &&
                  ((function (...e) {
                      eQ('clearTimeout')(...e);
                  })(a),
                  (a = null)),
              (n = o),
              e.apply(i, _))
            : !a &&
              !1 !== r.trailing &&
              (a = eZ(() => {
                  (n = !1 === r.leading ? 0 : Date.now()), (a = null), e.apply(i, _);
              }, E));
    };
}
'undefined' != typeof window && window.Proxy && window.Reflect && (eb = new Proxy(eb, { get: (e, t, r) => ('map' === t && console.error(ey), Reflect.get(e, t, r)) }));
function ew(e, t, r) {
    try {
        if (!(t in e)) return () => {};
        let a = e[t],
            n = r(a);
        return (
            'function' == typeof n &&
                ((n.prototype = n.prototype || {}),
                Object.defineProperties(n, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: a
                    }
                })),
            (e[t] = n),
            () => {
                e[t] = a;
            }
        );
    } catch (e) {
        return () => {};
    }
}
let eB = Date.now;
function eW(e) {
    let t = e.document;
    return {
        left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : eG([t, 'optionalAccess', (e) => e.documentElement, 'access', (e) => e.scrollLeft]) || eG([t, 'optionalAccess', (e) => e.body, 'optionalAccess', (e) => e.parentElement, 'optionalAccess', (e) => e.scrollLeft]) || eG([t, 'optionalAccess', (e) => e.body, 'optionalAccess', (e) => e.scrollLeft]) || 0,
        top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : eG([t, 'optionalAccess', (e) => e.documentElement, 'access', (e) => e.scrollTop]) || eG([t, 'optionalAccess', (e) => e.body, 'optionalAccess', (e) => e.parentElement, 'optionalAccess', (e) => e.scrollTop]) || eG([t, 'optionalAccess', (e) => e.body, 'optionalAccess', (e) => e.scrollTop]) || 0
    };
}
function eY() {
    return window.innerHeight || (document.documentElement && document.documentElement.clientHeight) || (document.body && document.body.clientHeight);
}
function eH() {
    return window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || (document.body && document.body.clientWidth);
}
function ex(e) {
    return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
}
function eK(e, t, r, a, n) {
    if (!e) return !1;
    let _ = ex(e);
    if (!_) return !1;
    let o = eP(t, r);
    if (!n) {
        let e = a && _.matches(a);
        return o(_) && !e;
    }
    let E = eC(_, o),
        i = -1;
    return !(E < 0) && (a && (i = eC(_, eP(null, a))), (!!(E > -1) && !!(i < 0)) || E < i);
}
!/[1-9][0-9]{12}/.test(Date.now().toString()) && (eB = () => new Date().getTime());
function ek(e, t) {
    return -2 === t.getId(e);
}
function eV(e) {
    return !!e.changedTouches;
}
function eF(e, t) {
    return !!('IFRAME' === e.nodeName && t.getMeta(e));
}
function eX(e, t) {
    return !!('LINK' === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && 'stylesheet' === e.getAttribute('rel') && t.getMeta(e));
}
function ej(e) {
    return !!eG([e, 'optionalAccess', (e) => e.shadowRoot]);
}
class e$ {
    constructor() {
        (this.id = 1), (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map());
    }
    getId(e) {
        return (0, N.h)(this.styleIDMap.get(e), () => -1);
    }
    has(e) {
        return this.styleIDMap.has(e);
    }
    add(e, t) {
        let r;
        return this.has(e) ? this.getId(e) : ((r = void 0 === t ? this.id++ : t), this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r);
    }
    getStyle(e) {
        return this.idStyleMap.get(e) || null;
    }
    reset() {
        (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map()), (this.id = 1);
    }
    generateId() {
        return this.id++;
    }
}
function eq(e) {
    let t = null;
    return eG([e, 'access', (e) => e.getRootNode, 'optionalCall', (e) => e(), 'optionalAccess', (e) => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t;
}
function eJ(e) {
    let t = e.ownerDocument;
    return (
        !!t &&
        (t.contains(e) ||
            (function (e) {
                let t = e.ownerDocument;
                if (!t) return !1;
                let r = (function (e) {
                    let t,
                        r = e;
                    for (; (t = eq(r)); ) r = t;
                    return r;
                })(e);
                return t.contains(r);
            })(e))
    );
}
let ez = {};
function eQ(e) {
    let t = ez[e];
    if (t) return t;
    let r = window.document,
        a = window[e];
    if (r && 'function' == typeof r.createElement)
        try {
            let t = r.createElement('iframe');
            (t.hidden = !0), r.head.appendChild(t);
            let n = t.contentWindow;
            n && n[e] && (a = n[e]), r.head.removeChild(t);
        } catch (e) {}
    return (ez[e] = a.bind(window));
}
function eZ(...e) {
    return eQ('setTimeout')(...e);
}
var e0 = (((s = e0 || {})[(s.DomContentLoaded = 0)] = 'DomContentLoaded'), (s[(s.Load = 1)] = 'Load'), (s[(s.FullSnapshot = 2)] = 'FullSnapshot'), (s[(s.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'), (s[(s.Meta = 4)] = 'Meta'), (s[(s.Custom = 5)] = 'Custom'), (s[(s.Plugin = 6)] = 'Plugin'), s);
var e1 = (((l = e1 || {})[(l.Mutation = 0)] = 'Mutation'), (l[(l.MouseMove = 1)] = 'MouseMove'), (l[(l.MouseInteraction = 2)] = 'MouseInteraction'), (l[(l.Scroll = 3)] = 'Scroll'), (l[(l.ViewportResize = 4)] = 'ViewportResize'), (l[(l.Input = 5)] = 'Input'), (l[(l.TouchMove = 6)] = 'TouchMove'), (l[(l.MediaInteraction = 7)] = 'MediaInteraction'), (l[(l.StyleSheetRule = 8)] = 'StyleSheetRule'), (l[(l.CanvasMutation = 9)] = 'CanvasMutation'), (l[(l.Font = 10)] = 'Font'), (l[(l.Log = 11)] = 'Log'), (l[(l.Drag = 12)] = 'Drag'), (l[(l.StyleDeclaration = 13)] = 'StyleDeclaration'), (l[(l.Selection = 14)] = 'Selection'), (l[(l.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet'), (l[(l.CustomElement = 16)] = 'CustomElement'), l);
var e2 = (((I = e2 || {})[(I.MouseUp = 0)] = 'MouseUp'), (I[(I.MouseDown = 1)] = 'MouseDown'), (I[(I.Click = 2)] = 'Click'), (I[(I.ContextMenu = 3)] = 'ContextMenu'), (I[(I.DblClick = 4)] = 'DblClick'), (I[(I.Focus = 5)] = 'Focus'), (I[(I.Blur = 6)] = 'Blur'), (I[(I.TouchStart = 7)] = 'TouchStart'), (I[(I.TouchMove_Departed = 8)] = 'TouchMove_Departed'), (I[(I.TouchEnd = 9)] = 'TouchEnd'), (I[(I.TouchCancel = 10)] = 'TouchCancel'), I);
var e3 = (((u = e3 || {})[(u.Mouse = 0)] = 'Mouse'), (u[(u.Pen = 1)] = 'Pen'), (u[(u.Touch = 2)] = 'Touch'), u);
function e6(e) {
    return '__ln' in e;
}
class e4 {
    constructor() {
        (this.length = 0), (this.head = null), (this.tail = null);
    }
    get(e) {
        if (e >= this.length) throw Error('Position outside of list range');
        let t = this.head;
        for (let r = 0; r < e; r++)
            t =
                (function (e) {
                    let t;
                    let r = e[0],
                        a = 1;
                    for (; a < e.length; ) {
                        let n = e[a],
                            _ = e[a + 1];
                        if (((a += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == r)) return;
                        'access' === n || 'optionalAccess' === n ? ((t = r), (r = _(r))) : ('call' === n || 'optionalCall' === n) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
                    }
                    return r;
                })([t, 'optionalAccess', (e) => e.next]) || null;
        return t;
    }
    addNode(e) {
        let t = {
            value: e,
            previous: null,
            next: null
        };
        if (((e.__ln = t), e.previousSibling && '__ln' in e.previousSibling)) {
            let r = e.previousSibling.__ln.next;
            (t.next = r), (t.previous = e.previousSibling.__ln), (e.previousSibling.__ln.next = t), r && (r.previous = t);
        } else if (e.nextSibling && '__ln' in e.nextSibling && e.nextSibling.__ln.previous) {
            let r = e.nextSibling.__ln.previous;
            (t.previous = r), (t.next = e.nextSibling.__ln), (e.nextSibling.__ln.previous = t), r && (r.next = t);
        } else this.head && (this.head.previous = t), (t.next = this.head), (this.head = t);
        null === t.next && (this.tail = t), this.length++;
    }
    removeNode(e) {
        let t = e.__ln;
        if (!!this.head) t.previous ? ((t.previous.next = t.next), t.next ? (t.next.previous = t.previous) : (this.tail = t.previous)) : ((this.head = t.next), this.head ? (this.head.previous = null) : (this.tail = null)), e.__ln && delete e.__ln, this.length--;
    }
}
let e5 = (e, t) => `${e}@${t}`;
class e8 {
    constructor() {
        (this.frozen = !1),
            (this.locked = !1),
            (this.texts = []),
            (this.attributes = []),
            (this.attributeMap = new WeakMap()),
            (this.removes = []),
            (this.mapRemoves = []),
            (this.movedMap = {}),
            (this.addedSet = new Set()),
            (this.movedSet = new Set()),
            (this.droppedSet = new Set()),
            (this.processMutations = (e) => {
                e.forEach(this.processMutation), this.emit();
            }),
            (this.emit = () => {
                if (this.frozen || this.locked) return;
                let e = [],
                    t = new Set(),
                    r = new e4(),
                    a = (e) => {
                        let t = e,
                            r = -2;
                        for (; -2 === r; ) r = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return r;
                    },
                    n = (n) => {
                        if (!n.parentNode || !eJ(n)) return;
                        let _ = q(n.parentNode) ? this.mirror.getId(eq(n)) : this.mirror.getId(n.parentNode),
                            o = a(n);
                        if (-1 === _ || -1 === o) return r.addNode(n);
                        let E = eM(n, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: (e) => {
                                eF(e, this.mirror) && this.iframeManager.addIframe(e), eX(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), ej(n) && this.shadowDomManager.addShadowRoot(n.shadowRoot, this.doc);
                            },
                            onIframeLoad: (e, t) => {
                                this.iframeManager.attachIframe(e, t), e.contentWindow && this.canvasManager.addWindow(e.contentWindow), this.shadowDomManager.observeAttachShadow(e);
                            },
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t);
                            }
                        });
                        E &&
                            (e.push({
                                parentId: _,
                                nextId: o,
                                node: E
                            }),
                            t.add(E.id));
                    };
                for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let e of this.movedSet) {
                    if (!e9(this.removes, e, this.mirror) || !!this.movedSet.has(e.parentNode)) n(e);
                }
                for (let e of this.addedSet) te(this.droppedSet, e) || e9(this.removes, e, this.mirror) ? (te(this.movedSet, e) ? n(e) : this.droppedSet.add(e)) : n(e);
                let _ = null;
                for (; r.length; ) {
                    let e = null;
                    if (_) {
                        let t = this.mirror.getId(_.value.parentNode),
                            r = a(_.value);
                        -1 !== t && -1 !== r && (e = _);
                    }
                    if (!e) {
                        let t = r.tail;
                        for (; t; ) {
                            let r = t;
                            if (((t = t.previous), r)) {
                                let t = this.mirror.getId(r.value.parentNode);
                                if (-1 === a(r.value)) continue;
                                if (-1 !== t) {
                                    e = r;
                                    break;
                                } else {
                                    let t = r.value;
                                    if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let a = t.parentNode.host;
                                        if (-1 !== this.mirror.getId(a)) {
                                            e = r;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!e) {
                        for (; r.head; ) r.removeNode(r.head.value);
                        break;
                    }
                    (_ = e.previous), r.removeNode(e.value), n(e.value);
                }
                let o = {
                    texts: this.texts
                        .map((e) => ({
                            id: this.mirror.getId(e.node),
                            value: e.value
                        }))
                        .filter((e) => !t.has(e.id))
                        .filter((e) => this.mirror.has(e.id)),
                    attributes: this.attributes
                        .map((e) => {
                            let { attributes: t } = e;
                            if ('string' == typeof t.style) {
                                let r = JSON.stringify(e.styleDiff),
                                    a = JSON.stringify(e._unchangedStyles);
                                r.length < t.style.length && (r + a).split('var(').length === t.style.split('var(').length && (t.style = e.styleDiff);
                            }
                            return {
                                id: this.mirror.getId(e.node),
                                attributes: t
                            };
                        })
                        .filter((e) => !t.has(e.id))
                        .filter((e) => this.mirror.has(e.id)),
                    removes: this.removes,
                    adds: e
                };
                if (!!o.texts.length || !!o.attributes.length || !!o.removes.length || !!o.adds.length) (this.texts = []), (this.attributes = []), (this.attributeMap = new WeakMap()), (this.removes = []), (this.addedSet = new Set()), (this.movedSet = new Set()), (this.droppedSet = new Set()), (this.movedMap = {}), this.mutationCb(o);
            }),
            (this.processMutation = (e) => {
                if (!ek(e.target, this.mirror))
                    switch (e.type) {
                        case 'characterData': {
                            let t = e.target.textContent;
                            !eK(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                                t !== e.oldValue &&
                                this.texts.push({
                                    value: eg(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? (this.maskTextFn ? this.maskTextFn(t, ex(e.target)) : t.replace(/[\S]/g, '*')) : t,
                                    node: e.target
                                });
                            break;
                        }
                        case 'attributes': {
                            let t = e.target,
                                r = e.attributeName,
                                a = e.target.getAttribute(r);
                            if ('value' === r) {
                                let r = e_(t),
                                    n = t.tagName;
                                a = eo(t, n, r);
                                let _ = ee({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: n,
                                    type: r
                                });
                                a = et({
                                    isMasked: eg(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, _),
                                    element: t,
                                    value: a,
                                    maskInputFn: this.maskInputFn
                                });
                            }
                            if (eK(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || a === e.oldValue) return;
                            let n = this.attributeMap.get(e.target);
                            if ('IFRAME' === t.tagName && 'src' === r && !this.keepIframeSrcFn(a)) {
                                if (t.contentDocument) return;
                                r = 'rr_src';
                            }
                            if (
                                (!n &&
                                    ((n = {
                                        node: e.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {}
                                    }),
                                    this.attributes.push(n),
                                    this.attributeMap.set(e.target, n)),
                                'type' === r && 'INPUT' === t.tagName && 'password' === (e.oldValue || '').toLowerCase() && t.setAttribute('data-rr-is-password', 'true'),
                                !eS(t.tagName, r) && ((n.attributes[r] = eD(this.doc, er(t.tagName), er(r), a, t, this.maskAttributeFn)), 'style' === r))
                            ) {
                                if (!this.unattachedDoc)
                                    try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument();
                                    } catch (e) {
                                        this.unattachedDoc = this.doc;
                                    }
                                let r = this.unattachedDoc.createElement('span');
                                for (let a of (e.oldValue && r.setAttribute('style', e.oldValue), Array.from(t.style))) {
                                    let e = t.style.getPropertyValue(a),
                                        _ = t.style.getPropertyPriority(a);
                                    e !== r.style.getPropertyValue(a) || _ !== r.style.getPropertyPriority(a) ? ('' === _ ? (n.styleDiff[a] = e) : (n.styleDiff[a] = [e, _])) : (n._unchangedStyles[a] = [e, _]);
                                }
                                for (let e of Array.from(r.style)) '' === t.style.getPropertyValue(e) && (n.styleDiff[e] = !1);
                            }
                            break;
                        }
                        case 'childList':
                            if (eK(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                            e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                                e.removedNodes.forEach((t) => {
                                    var r;
                                    let a = this.mirror.getId(t),
                                        n = q(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                    if (!(eK(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || ek(t, this.mirror)) && ((r = t), -1 !== this.mirror.getId(r)))
                                        this.addedSet.has(t)
                                            ? (e7(this.addedSet, t), this.droppedSet.add(t))
                                            : (this.addedSet.has(e.target) && -1 === a) ||
                                              (function e(t, r) {
                                                  if (q(t)) return !1;
                                                  let a = r.getId(t);
                                                  return !r.has(a) || ((!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, r)));
                                              })(e.target, this.mirror) ||
                                              (this.movedSet.has(t) && this.movedMap[e5(a, n)]
                                                  ? e7(this.movedSet, t)
                                                  : this.removes.push({
                                                        parentId: n,
                                                        id: a,
                                                        isShadow: !!(q(e.target) && J(e.target)) || void 0
                                                    })),
                                            this.mapRemoves.push(t);
                                });
                    }
            }),
            (this.genAdds = (e, t) => {
                if (!this.processedNodeManager.inOtherBuffer(e, this)) {
                    if (!(this.addedSet.has(e) || this.movedSet.has(e))) {
                        if (this.mirror.hasNode(e)) {
                            if (ek(e, this.mirror)) return;
                            this.movedSet.add(e);
                            let r = null;
                            t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)), r && -1 !== r && (this.movedMap[e5(this.mirror.getId(e), r)] = !0);
                        } else this.addedSet.add(e), this.droppedSet.delete(e);
                        !eK(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                            (e.childNodes.forEach((e) => this.genAdds(e)),
                            ej(e) &&
                                e.shadowRoot.childNodes.forEach((t) => {
                                    this.processedNodeManager.add(t, this), this.genAdds(t, e);
                                }));
                    }
                }
            });
    }
    init(e) {
        ['mutationCb', 'blockClass', 'blockSelector', 'unblockSelector', 'maskAllText', 'maskTextClass', 'unmaskTextClass', 'maskTextSelector', 'unmaskTextSelector', 'inlineStylesheet', 'maskInputOptions', 'maskAttributeFn', 'maskTextFn', 'maskInputFn', 'keepIframeSrcFn', 'recordCanvas', 'inlineImages', 'slimDOMOptions', 'dataURLOptions', 'doc', 'mirror', 'iframeManager', 'stylesheetManager', 'shadowDomManager', 'canvasManager', 'processedNodeManager'].forEach((t) => {
            this[t] = e[t];
        });
    }
    freeze() {
        (this.frozen = !0), this.canvasManager.freeze();
    }
    unfreeze() {
        (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
    }
    isFrozen() {
        return this.frozen;
    }
    lock() {
        (this.locked = !0), this.canvasManager.lock();
    }
    unlock() {
        (this.locked = !1), this.canvasManager.unlock(), this.emit();
    }
    reset() {
        this.shadowDomManager.reset(), this.canvasManager.reset();
    }
}
function e7(e, t) {
    e.delete(t), t.childNodes.forEach((t) => e7(e, t));
}
function e9(e, t, r) {
    return (
        0 !== e.length &&
        (function e(t, r, a) {
            let { parentNode: n } = r;
            if (!n) return !1;
            let _ = a.getId(n);
            return !!t.some((e) => e.id === _) || e(t, n, a);
        })(e, t, r)
    );
}
function te(e, t) {
    return (
        0 !== e.size &&
        (function e(t, r) {
            let { parentNode: a } = r;
            return !!a && (!!t.has(a) || e(t, a));
        })(e, t)
    );
}
let tt = (e) =>
    _
        ? (...t) => {
              try {
                  return e(...t);
              } catch (e) {
                  if (_ && !0 === _(e)) return () => {};
                  throw e;
              }
          }
        : e;
function tr(e) {
    let t;
    let r = e[0],
        a = 1;
    for (; a < e.length; ) {
        let n = e[a],
            _ = e[a + 1];
        if (((a += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == r)) return;
        'access' === n || 'optionalAccess' === n ? ((t = r), (r = _(r))) : ('call' === n || 'optionalCall' === n) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
let ta = [];
function tn(e) {
    try {
        if ('composedPath' in e) {
            let t = e.composedPath();
            if (t.length) return t[0];
        } else if ('path' in e && e.path.length) return e.path[0];
    } catch (e) {}
    return e && e.target;
}
function t_(e, t) {
    let r = new e8();
    ta.push(r), r.init(e);
    let a = window.MutationObserver || window.__rrMutationObserver,
        n = tr([window, 'optionalAccess', (e) => e.Zone, 'optionalAccess', (e) => e.__symbol__, 'optionalCall', (e) => e('MutationObserver')]);
    n && window[n] && (a = window[n]);
    let _ = new a(
        tt((t) => {
            if (!e.onMutation || !1 !== e.onMutation(t)) r.processMutations.bind(r)(t);
        })
    );
    return (
        _.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }),
        _
    );
}
function to({ scrollCb: e, doc: t, mirror: r, blockClass: a, blockSelector: n, unblockSelector: _, sampling: o }) {
    return em(
        'scroll',
        tt(
            ev(
                tt((o) => {
                    let E = tn(o);
                    if (!E || eK(E, a, n, _, !0)) return;
                    let i = r.getId(E);
                    if (E === t && t.defaultView) {
                        let r = eW(t.defaultView);
                        e({
                            id: i,
                            x: r.left,
                            y: r.top
                        });
                    } else
                        e({
                            id: i,
                            x: E.scrollLeft,
                            y: E.scrollTop
                        });
                }),
                o.scroll || 100
            )
        ),
        t
    );
}
let tE = ['INPUT', 'TEXTAREA', 'SELECT'],
    ti = new WeakMap();
function tc(e) {
    return (function (e, t) {
        if ((tu('CSSGroupingRule') && e.parentRule instanceof CSSGroupingRule) || (tu('CSSMediaRule') && e.parentRule instanceof CSSMediaRule) || (tu('CSSSupportsRule') && e.parentRule instanceof CSSSupportsRule) || (tu('CSSConditionRule') && e.parentRule instanceof CSSConditionRule)) {
            let r = Array.from(e.parentRule.cssRules).indexOf(e);
            t.unshift(r);
        } else if (e.parentStyleSheet) {
            let r = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
            t.unshift(r);
        }
        return t;
    })(e, []);
}
function ts(e, t, r) {
    let a, n;
    return e
        ? (e.ownerNode ? (a = t.getId(e.ownerNode)) : (n = r.getId(e)),
          {
              styleId: n,
              id: a
          })
        : {};
}
function tl({ mirror: e, stylesheetManager: t }, r) {
    let a = null;
    a = '#document' === r.nodeName ? e.getId(r) : e.getId(r.host);
    let n = '#document' === r.nodeName ? tr([r, 'access', (e) => e.defaultView, 'optionalAccess', (e) => e.Document]) : tr([r, 'access', (e) => e.ownerDocument, 'optionalAccess', (e) => e.defaultView, 'optionalAccess', (e) => e.ShadowRoot]),
        _ = tr([n, 'optionalAccess', (e) => e.prototype]) ? Object.getOwnPropertyDescriptor(tr([n, 'optionalAccess', (e) => e.prototype]), 'adoptedStyleSheets') : void 0;
    return null !== a && -1 !== a && n && _
        ? (Object.defineProperty(r, 'adoptedStyleSheets', {
              configurable: _.configurable,
              enumerable: _.enumerable,
              get() {
                  return tr([_, 'access', (e) => e.get, 'optionalAccess', (e) => e.call, 'call', (e) => e(this)]);
              },
              set(e) {
                  let r = tr([_, 'access', (e) => e.set, 'optionalAccess', (e) => e.call, 'call', (t) => t(this, e)]);
                  if (null !== a && -1 !== a)
                      try {
                          t.adoptStyleSheets(e, a);
                      } catch (e) {}
                  return r;
              }
          }),
          tt(() => {
              Object.defineProperty(r, 'adoptedStyleSheets', {
                  configurable: _.configurable,
                  enumerable: _.enumerable,
                  get: _.get,
                  set: _.set
              });
          }))
        : () => {};
}
function tI(e, t = {}) {
    let r;
    let a = e.doc.defaultView;
    if (!a) return () => {};
    e.recordDOM && (r = t_(e, e.doc));
    let n = (function ({ mousemoveCb: e, sampling: t, doc: r, mirror: a }) {
            let n;
            if (!1 === t.mousemove) return () => {};
            let _ = 'number' == typeof t.mousemove ? t.mousemove : 50,
                o = 'number' == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                E = [],
                i = ev(
                    tt((t) => {
                        let r = Date.now() - n;
                        e(
                            E.map((e) => ((e.timeOffset -= r), e)),
                            t
                        ),
                            (E = []),
                            (n = null);
                    }),
                    o
                ),
                c = tt(
                    ev(
                        tt((e) => {
                            let t = tn(e),
                                { clientX: r, clientY: _ } = eV(e) ? e.changedTouches[0] : e;
                            !n && (n = eB()),
                                E.push({
                                    x: r,
                                    y: _,
                                    id: a.getId(t),
                                    timeOffset: eB() - n
                                }),
                                i('undefined' != typeof DragEvent && e instanceof DragEvent ? e1.Drag : e instanceof MouseEvent ? e1.MouseMove : e1.TouchMove);
                        }),
                        _,
                        { trailing: !1 }
                    )
                ),
                s = [em('mousemove', c, r), em('touchmove', c, r), em('drag', c, r)];
            return tt(() => {
                s.forEach((e) => e());
            });
        })(e),
        _ = (function ({ mouseInteractionCb: e, doc: t, mirror: r, blockClass: a, blockSelector: n, unblockSelector: _, sampling: o }) {
            if (!1 === o.mouseInteraction) return () => {};
            let E = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                i = [],
                c = null,
                s = (t) => (o) => {
                    let E = tn(o);
                    if (eK(E, a, n, _, !0)) return;
                    let i = null,
                        s = t;
                    if ('pointerType' in o) {
                        switch (o.pointerType) {
                            case 'mouse':
                                i = e3.Mouse;
                                break;
                            case 'touch':
                                i = e3.Touch;
                                break;
                            case 'pen':
                                i = e3.Pen;
                        }
                        i === e3.Touch ? (e2[t] === e2.MouseDown ? (s = 'TouchStart') : e2[t] === e2.MouseUp && (s = 'TouchEnd')) : e3.Pen;
                    } else eV(o) && (i = e3.Touch);
                    null !== i ? ((c = i), ((s.startsWith('Touch') && i === e3.Touch) || (s.startsWith('Mouse') && i === e3.Mouse)) && (i = null)) : e2[t] === e2.Click && ((i = c), (c = null));
                    let l = eV(o) ? o.changedTouches[0] : o;
                    if (!l) return;
                    let I = r.getId(E),
                        { clientX: u, clientY: R } = l;
                    tt(e)({
                        type: e2[s],
                        id: I,
                        x: u,
                        y: R,
                        ...(null !== i && { pointerType: i })
                    });
                };
            return (
                Object.keys(e2)
                    .filter((e) => Number.isNaN(Number(e)) && !e.endsWith('_Departed') && !1 !== E[e])
                    .forEach((e) => {
                        let r = er(e),
                            a = s(e);
                        if (window.PointerEvent)
                            switch (e2[e]) {
                                case e2.MouseDown:
                                case e2.MouseUp:
                                    r = r.replace('mouse', 'pointer');
                                    break;
                                case e2.TouchStart:
                                case e2.TouchEnd:
                                    return;
                            }
                        i.push(em(r, a, t));
                    }),
                tt(() => {
                    i.forEach((e) => e());
                })
            );
        })(e),
        o = to(e),
        E = (function ({ viewportResizeCb: e }, { win: t }) {
            let r = -1,
                a = -1;
            return em(
                'resize',
                tt(
                    ev(
                        tt(() => {
                            let t = eY(),
                                n = eH();
                            (r !== t || a !== n) &&
                                (e({
                                    width: Number(n),
                                    height: Number(t)
                                }),
                                (r = t),
                                (a = n));
                        }),
                        200
                    )
                ),
                t
            );
        })(e, { win: a }),
        i = (function ({ inputCb: e, doc: t, mirror: r, blockClass: a, blockSelector: n, unblockSelector: _, ignoreClass: o, ignoreSelector: E, maskInputOptions: i, maskInputFn: c, sampling: s, userTriggeredOnInput: l, maskTextClass: I, unmaskTextClass: u, maskTextSelector: R, unmaskTextSelector: A }) {
            function T(e) {
                let r = tn(e),
                    s = e.isTrusted,
                    T = r && ea(r.tagName);
                if (('OPTION' === T && (r = r.parentElement), !r || !T || 0 > tE.indexOf(T) || eK(r, a, n, _, !0))) return;
                let d = r;
                if (d.classList.contains(o) || (E && d.matches(E))) return;
                let f = e_(r),
                    O = eo(d, T, f),
                    L = !1,
                    p = ee({
                        maskInputOptions: i,
                        tagName: T,
                        type: f
                    }),
                    h = eg(r, I, R, u, A, p);
                ('radio' === f || 'checkbox' === f) && (L = r.checked),
                    (O = et({
                        isMasked: h,
                        element: r,
                        value: O,
                        maskInputFn: c
                    })),
                    N(
                        r,
                        l
                            ? {
                                  text: O,
                                  isChecked: L,
                                  userTriggered: s
                              }
                            : {
                                  text: O,
                                  isChecked: L
                              }
                    );
                let D = r.name;
                'radio' === f &&
                    D &&
                    L &&
                    t.querySelectorAll(`input[type="radio"][name="${D}"]`).forEach((e) => {
                        if (e !== r) {
                            let t = et({
                                isMasked: h,
                                element: e,
                                value: eo(e, T, f),
                                maskInputFn: c
                            });
                            N(
                                e,
                                l
                                    ? {
                                          text: t,
                                          isChecked: !L,
                                          userTriggered: !1
                                      }
                                    : {
                                          text: t,
                                          isChecked: !L
                                      }
                            );
                        }
                    });
            }
            function N(t, a) {
                let n = ti.get(t);
                if (!n || n.text !== a.text || n.isChecked !== a.isChecked) {
                    ti.set(t, a);
                    let n = r.getId(t);
                    tt(e)({
                        ...a,
                        id: n
                    });
                }
            }
            let d = ('last' === s.input ? ['change'] : ['input', 'change']).map((e) => em(e, tt(T), t)),
                f = t.defaultView;
            if (!f)
                return () => {
                    d.forEach((e) => e());
                };
            let O = f.Object.getOwnPropertyDescriptor(f.HTMLInputElement.prototype, 'value'),
                L = [
                    [f.HTMLInputElement.prototype, 'value'],
                    [f.HTMLInputElement.prototype, 'checked'],
                    [f.HTMLSelectElement.prototype, 'value'],
                    [f.HTMLTextAreaElement.prototype, 'value'],
                    [f.HTMLSelectElement.prototype, 'selectedIndex'],
                    [f.HTMLOptionElement.prototype, 'selected']
                ];
            return (
                O &&
                    O.set &&
                    d.push(
                        ...L.map((e) =>
                            (function e(t, r, a, n, _ = window) {
                                let o = _.Object.getOwnPropertyDescriptor(t, r);
                                return (
                                    _.Object.defineProperty(
                                        t,
                                        r,
                                        n
                                            ? a
                                            : {
                                                  set(e) {
                                                      eZ(() => {
                                                          a.set.call(this, e);
                                                      }, 0),
                                                          o && o.set && o.set.call(this, e);
                                                  }
                                              }
                                    ),
                                    () => e(t, r, o || {}, !0)
                                );
                            })(
                                e[0],
                                e[1],
                                {
                                    set() {
                                        tt(T)({
                                            target: this,
                                            isTrusted: !1
                                        });
                                    }
                                },
                                !1,
                                f
                            )
                        )
                    ),
                tt(() => {
                    d.forEach((e) => e());
                })
            );
        })(e),
        c = (function ({ mediaInteractionCb: e, blockClass: t, blockSelector: r, unblockSelector: a, mirror: n, sampling: _, doc: o }) {
            let E = tt((o) =>
                    ev(
                        tt((_) => {
                            let E = tn(_);
                            if (!E || eK(E, t, r, a, !0)) return;
                            let { currentTime: i, volume: c, muted: s, playbackRate: l } = E;
                            e({
                                type: o,
                                id: n.getId(E),
                                currentTime: i,
                                volume: c,
                                muted: s,
                                playbackRate: l
                            });
                        }),
                        _.media || 500
                    )
                ),
                i = [em('play', E(0), o), em('pause', E(1), o), em('seeked', E(2), o), em('volumechange', E(3), o), em('ratechange', E(4), o)];
            return tt(() => {
                i.forEach((e) => e());
            });
        })(e),
        s = () => {},
        l = () => {},
        I = () => {},
        u = () => {};
    e.recordDOM &&
        ((s = (function ({ styleSheetRuleCb: e, mirror: t, stylesheetManager: r }, { win: a }) {
            let n, _;
            if (!a.CSSStyleSheet || !a.CSSStyleSheet.prototype) return () => {};
            let o = a.CSSStyleSheet.prototype.insertRule;
            a.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: tt((a, n, _) => {
                    let [o, E] = _,
                        { id: i, styleId: c } = ts(n, t, r.styleMirror);
                    return (
                        ((i && -1 !== i) || (c && -1 !== c)) &&
                            e({
                                id: i,
                                styleId: c,
                                adds: [
                                    {
                                        rule: o,
                                        index: E
                                    }
                                ]
                            }),
                        a.apply(n, _)
                    );
                })
            });
            let E = a.CSSStyleSheet.prototype.deleteRule;
            (a.CSSStyleSheet.prototype.deleteRule = new Proxy(E, {
                apply: tt((a, n, _) => {
                    let [o] = _,
                        { id: E, styleId: i } = ts(n, t, r.styleMirror);
                    return (
                        ((E && -1 !== E) || (i && -1 !== i)) &&
                            e({
                                id: E,
                                styleId: i,
                                removes: [{ index: o }]
                            }),
                        a.apply(n, _)
                    );
                })
            })),
                a.CSSStyleSheet.prototype.replace &&
                    ((n = a.CSSStyleSheet.prototype.replace),
                    (a.CSSStyleSheet.prototype.replace = new Proxy(n, {
                        apply: tt((a, n, _) => {
                            let [o] = _,
                                { id: E, styleId: i } = ts(n, t, r.styleMirror);
                            return (
                                ((E && -1 !== E) || (i && -1 !== i)) &&
                                    e({
                                        id: E,
                                        styleId: i,
                                        replace: o
                                    }),
                                a.apply(n, _)
                            );
                        })
                    }))),
                a.CSSStyleSheet.prototype.replaceSync &&
                    ((_ = a.CSSStyleSheet.prototype.replaceSync),
                    (a.CSSStyleSheet.prototype.replaceSync = new Proxy(_, {
                        apply: tt((a, n, _) => {
                            let [o] = _,
                                { id: E, styleId: i } = ts(n, t, r.styleMirror);
                            return (
                                ((E && -1 !== E) || (i && -1 !== i)) &&
                                    e({
                                        id: E,
                                        styleId: i,
                                        replaceSync: o
                                    }),
                                a.apply(n, _)
                            );
                        })
                    })));
            let i = {};
            tR('CSSGroupingRule') ? (i.CSSGroupingRule = a.CSSGroupingRule) : (tR('CSSMediaRule') && (i.CSSMediaRule = a.CSSMediaRule), tR('CSSConditionRule') && (i.CSSConditionRule = a.CSSConditionRule), tR('CSSSupportsRule') && (i.CSSSupportsRule = a.CSSSupportsRule));
            let c = {};
            return (
                Object.entries(i).forEach(([a, n]) => {
                    (c[a] = {
                        insertRule: n.prototype.insertRule,
                        deleteRule: n.prototype.deleteRule
                    }),
                        (n.prototype.insertRule = new Proxy(c[a].insertRule, {
                            apply: tt((a, n, _) => {
                                let [o, E] = _,
                                    { id: i, styleId: c } = ts(n.parentStyleSheet, t, r.styleMirror);
                                return (
                                    ((i && -1 !== i) || (c && -1 !== c)) &&
                                        e({
                                            id: i,
                                            styleId: c,
                                            adds: [
                                                {
                                                    rule: o,
                                                    index: [...tc(n), E || 0]
                                                }
                                            ]
                                        }),
                                    a.apply(n, _)
                                );
                            })
                        })),
                        (n.prototype.deleteRule = new Proxy(c[a].deleteRule, {
                            apply: tt((a, n, _) => {
                                let [o] = _,
                                    { id: E, styleId: i } = ts(n.parentStyleSheet, t, r.styleMirror);
                                return (
                                    ((E && -1 !== E) || (i && -1 !== i)) &&
                                        e({
                                            id: E,
                                            styleId: i,
                                            removes: [
                                                {
                                                    index: [...tc(n), o]
                                                }
                                            ]
                                        }),
                                    a.apply(n, _)
                                );
                            })
                        }));
                }),
                tt(() => {
                    (a.CSSStyleSheet.prototype.insertRule = o),
                        (a.CSSStyleSheet.prototype.deleteRule = E),
                        n && (a.CSSStyleSheet.prototype.replace = n),
                        _ && (a.CSSStyleSheet.prototype.replaceSync = _),
                        Object.entries(i).forEach(([e, t]) => {
                            (t.prototype.insertRule = c[e].insertRule), (t.prototype.deleteRule = c[e].deleteRule);
                        });
                })
            );
        })(e, { win: a })),
        (l = tl(e, e.doc)),
        (I = (function ({ styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: r, stylesheetManager: a }, { win: n }) {
            let _ = n.CSSStyleDeclaration.prototype.setProperty;
            n.CSSStyleDeclaration.prototype.setProperty = new Proxy(_, {
                apply: tt((n, o, E) => {
                    let [i, c, s] = E;
                    if (r.has(i)) return _.apply(o, [i, c, s]);
                    let { id: l, styleId: I } = ts(tr([o, 'access', (e) => e.parentRule, 'optionalAccess', (e) => e.parentStyleSheet]), t, a.styleMirror);
                    return (
                        ((l && -1 !== l) || (I && -1 !== I)) &&
                            e({
                                id: l,
                                styleId: I,
                                set: {
                                    property: i,
                                    value: c,
                                    priority: s
                                },
                                index: tc(o.parentRule)
                            }),
                        n.apply(o, E)
                    );
                })
            });
            let o = n.CSSStyleDeclaration.prototype.removeProperty;
            return (
                (n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: tt((n, _, E) => {
                        let [i] = E;
                        if (r.has(i)) return o.apply(_, [i]);
                        let { id: c, styleId: s } = ts(tr([_, 'access', (e) => e.parentRule, 'optionalAccess', (e) => e.parentStyleSheet]), t, a.styleMirror);
                        return (
                            ((c && -1 !== c) || (s && -1 !== s)) &&
                                e({
                                    id: c,
                                    styleId: s,
                                    remove: { property: i },
                                    index: tc(_.parentRule)
                                }),
                            n.apply(_, E)
                        );
                    })
                })),
                tt(() => {
                    (n.CSSStyleDeclaration.prototype.setProperty = _), (n.CSSStyleDeclaration.prototype.removeProperty = o);
                })
            );
        })(e, { win: a })),
        e.collectFonts &&
            (u = (function ({ fontCb: e, doc: t }) {
                let r = t.defaultView;
                if (!r) return () => {};
                let a = [],
                    n = new WeakMap(),
                    _ = r.FontFace;
                r.FontFace = function (e, t, r) {
                    let a = new _(e, t, r);
                    return (
                        n.set(a, {
                            family: e,
                            buffer: 'string' != typeof t,
                            descriptors: r,
                            fontSource: 'string' == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                        }),
                        a
                    );
                };
                let o = ew(t.fonts, 'add', function (t) {
                    return function (r) {
                        return (
                            eZ(
                                tt(() => {
                                    let t = n.get(r);
                                    t && (e(t), n.delete(r));
                                }),
                                0
                            ),
                            t.apply(this, [r])
                        );
                    };
                });
                return (
                    a.push(() => {
                        r.FontFace = _;
                    }),
                    a.push(o),
                    tt(() => {
                        a.forEach((e) => e());
                    })
                );
            })(e)));
    let R = (function (e) {
            let { doc: t, mirror: r, blockClass: a, blockSelector: n, unblockSelector: _, selectionCb: o } = e,
                E = !0,
                i = tt(() => {
                    let e = t.getSelection();
                    if (!e || (E && tr([e, 'optionalAccess', (e) => e.isCollapsed]))) return;
                    E = e.isCollapsed || !1;
                    let i = [],
                        c = e.rangeCount || 0;
                    for (let t = 0; t < c; t++) {
                        let { startContainer: o, startOffset: E, endContainer: c, endOffset: s } = e.getRangeAt(t);
                        !(eK(o, a, n, _, !0) || eK(c, a, n, _, !0)) &&
                            i.push({
                                start: r.getId(o),
                                startOffset: E,
                                end: r.getId(c),
                                endOffset: s
                            });
                    }
                    o({ ranges: i });
                });
            return i(), em('selectionchange', i);
        })(e),
        A = (function ({ doc: e, customElementCb: t }) {
            let r = e.defaultView;
            return r && r.customElements
                ? ew(r.customElements, 'define', function (e) {
                      return function (r, a, n) {
                          try {
                              t({ define: { name: r } });
                          } catch (e) {}
                          return e.apply(this, [r, a, n]);
                      };
                  })
                : () => {};
        })(e),
        T = [];
    for (let t of e.plugins) T.push(t.observer(t.callback, a, t.options));
    return tt(() => {
        ta.forEach((e) => e.reset()), tr([r, 'optionalAccess', (e) => e.disconnect, 'call', (e) => e()]), n(), _(), o(), E(), i(), c(), s(), l(), I(), u(), R(), A(), T.forEach((e) => e());
    });
}
function tu(e) {
    return void 0 !== window[e];
}
function tR(e) {
    return !!(void 0 !== window[e] && window[e].prototype && 'insertRule' in window[e].prototype && 'deleteRule' in window[e].prototype);
}
class tA {
    constructor(e) {
        (this.generateIdFn = e), (this.iframeIdToRemoteIdMap = new WeakMap()), (this.iframeRemoteIdToIdMap = new WeakMap());
    }
    getId(e, t, r, a) {
        let n = r || this.getIdToRemoteIdMap(e),
            _ = a || this.getRemoteIdToIdMap(e),
            o = n.get(t);
        return !o && ((o = this.generateIdFn()), n.set(t, o), _.set(o, t)), o;
    }
    getIds(e, t) {
        let r = this.getIdToRemoteIdMap(e),
            a = this.getRemoteIdToIdMap(e);
        return t.map((t) => this.getId(e, t, r, a));
    }
    getRemoteId(e, t, r) {
        let a = r || this.getRemoteIdToIdMap(e);
        if ('number' != typeof t) return t;
        let n = a.get(t);
        return n ? n : -1;
    }
    getRemoteIds(e, t) {
        let r = this.getRemoteIdToIdMap(e);
        return t.map((t) => this.getRemoteId(e, t, r));
    }
    reset(e) {
        if (!e) {
            (this.iframeIdToRemoteIdMap = new WeakMap()), (this.iframeRemoteIdToIdMap = new WeakMap());
            return;
        }
        this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
    }
    getIdToRemoteIdMap(e) {
        let t = this.iframeIdToRemoteIdMap.get(e);
        return !t && ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t;
    }
    getRemoteIdToIdMap(e) {
        let t = this.iframeRemoteIdToIdMap.get(e);
        return !t && ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t;
    }
}
function tT(e) {
    let t;
    let r = e[0],
        a = 1;
    for (; a < e.length; ) {
        let n = e[a],
            _ = e[a + 1];
        if (((a += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == r)) return;
        'access' === n || 'optionalAccess' === n ? ((t = r), (r = _(r))) : ('call' === n || 'optionalCall' === n) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
class tN {
    constructor() {
        (this.crossOriginIframeMirror = new tA(eR)), (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class td {
    constructor(e) {
        (this.iframes = new WeakMap()), (this.crossOriginIframeMap = new WeakMap()), (this.crossOriginIframeMirror = new tA(eR)), (this.crossOriginIframeRootIdMap = new WeakMap()), (this.mutationCb = e.mutationCb), (this.wrappedEmit = e.wrappedEmit), (this.stylesheetManager = e.stylesheetManager), (this.recordCrossOriginIframes = e.recordCrossOriginIframes), (this.crossOriginIframeStyleMirror = new tA(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror))), (this.mirror = e.mirror), this.recordCrossOriginIframes && window.addEventListener('message', this.handleMessage.bind(this));
    }
    addIframe(e) {
        this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
    }
    addLoadListener(e) {
        this.loadListener = e;
    }
    attachIframe(e, t) {
        this.mutationCb({
            adds: [
                {
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t
                }
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }),
            tT([this, 'access', (e) => e.loadListener, 'optionalCall', (t) => t(e)]),
            e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument));
    }
    handleMessage(e) {
        if ('rrweb' !== e.data.type || e.origin !== e.data.origin || !e.source) return;
        let t = this.crossOriginIframeMap.get(e.source);
        if (!t) return;
        let r = this.transformCrossOriginEvent(t, e.data.event);
        r && this.wrappedEmit(r, e.data.isCheckout);
    }
    transformCrossOriginEvent(e, t) {
        switch (t.type) {
            case e0.FullSnapshot: {
                this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
                let r = t.data.node.id;
                return (
                    this.crossOriginIframeRootIdMap.set(e, r),
                    this.patchRootIdOnNode(t.data.node, r),
                    {
                        timestamp: t.timestamp,
                        type: e0.IncrementalSnapshot,
                        data: {
                            source: e1.Mutation,
                            adds: [
                                {
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }
                            ],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0
                        }
                    }
                );
            }
            case e0.Meta:
            case e0.Load:
            case e0.DomContentLoaded:
                break;
            case e0.Plugin:
                return t;
            case e0.Custom:
                return this.replaceIds(t.data.payload, e, ['id', 'parentId', 'previousId', 'nextId']), t;
            case e0.IncrementalSnapshot:
                switch (t.data.source) {
                    case e1.Mutation:
                        return (
                            t.data.adds.forEach((t) => {
                                this.replaceIds(t, e, ['parentId', 'nextId', 'previousId']), this.replaceIdOnNode(t.node, e);
                                let r = this.crossOriginIframeRootIdMap.get(e);
                                r && this.patchRootIdOnNode(t.node, r);
                            }),
                            t.data.removes.forEach((t) => {
                                this.replaceIds(t, e, ['parentId', 'id']);
                            }),
                            t.data.attributes.forEach((t) => {
                                this.replaceIds(t, e, ['id']);
                            }),
                            t.data.texts.forEach((t) => {
                                this.replaceIds(t, e, ['id']);
                            }),
                            t
                        );
                    case e1.Drag:
                    case e1.TouchMove:
                    case e1.MouseMove:
                        return (
                            t.data.positions.forEach((t) => {
                                this.replaceIds(t, e, ['id']);
                            }),
                            t
                        );
                    case e1.ViewportResize:
                        return !1;
                    case e1.MediaInteraction:
                    case e1.MouseInteraction:
                    case e1.Scroll:
                    case e1.CanvasMutation:
                    case e1.Input:
                        return this.replaceIds(t.data, e, ['id']), t;
                    case e1.StyleSheetRule:
                    case e1.StyleDeclaration:
                        return this.replaceIds(t.data, e, ['id']), this.replaceStyleIds(t.data, e, ['styleId']), t;
                    case e1.Font:
                        return t;
                    case e1.Selection:
                        return (
                            t.data.ranges.forEach((t) => {
                                this.replaceIds(t, e, ['start', 'end']);
                            }),
                            t
                        );
                    case e1.AdoptedStyleSheet:
                        return (
                            this.replaceIds(t.data, e, ['id']),
                            this.replaceStyleIds(t.data, e, ['styleIds']),
                            tT([
                                t,
                                'access',
                                (e) => e.data,
                                'access',
                                (e) => e.styles,
                                'optionalAccess',
                                (e) => e.forEach,
                                'call',
                                (t) =>
                                    t((t) => {
                                        this.replaceStyleIds(t, e, ['styleId']);
                                    })
                            ]),
                            t
                        );
                }
        }
        return !1;
    }
    replace(e, t, r, a) {
        for (let n of a) (Array.isArray(t[n]) || 'number' == typeof t[n]) && (Array.isArray(t[n]) ? (t[n] = e.getIds(r, t[n])) : (t[n] = e.getId(r, t[n])));
        return t;
    }
    replaceIds(e, t, r) {
        return this.replace(this.crossOriginIframeMirror, e, t, r);
    }
    replaceStyleIds(e, t, r) {
        return this.replace(this.crossOriginIframeStyleMirror, e, t, r);
    }
    replaceIdOnNode(e, t) {
        this.replaceIds(e, t, ['id', 'rootId']),
            'childNodes' in e &&
                e.childNodes.forEach((e) => {
                    this.replaceIdOnNode(e, t);
                });
    }
    patchRootIdOnNode(e, t) {
        e.type !== A.Document && !e.rootId && (e.rootId = t),
            'childNodes' in e &&
                e.childNodes.forEach((e) => {
                    this.patchRootIdOnNode(e, t);
                });
    }
}
class tf {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class tO {
    constructor(e) {
        (this.shadowDoms = new WeakSet()), (this.restoreHandlers = []), (this.mutationCb = e.mutationCb), (this.scrollCb = e.scrollCb), (this.bypassOptions = e.bypassOptions), (this.mirror = e.mirror), this.init();
    }
    init() {
        this.reset(), this.patchAttachShadow(Element, document);
    }
    addShadowRoot(e, t) {
        if (!J(e) || this.shadowDoms.has(e)) return;
        this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
        let r = t_(
            {
                ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
            },
            e
        );
        this.restoreHandlers.push(() => r.disconnect()),
            this.restoreHandlers.push(
                to({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror
                })
            ),
            eZ(() => {
                e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)),
                    this.restoreHandlers.push(
                        tl(
                            {
                                mirror: this.mirror,
                                stylesheetManager: this.bypassOptions.stylesheetManager
                            },
                            e
                        )
                    );
            }, 0);
    }
    observeAttachShadow(e) {
        e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument);
    }
    patchAttachShadow(e, t) {
        let r = this;
        this.restoreHandlers.push(
            ew(e.prototype, 'attachShadow', function (e) {
                return function (a) {
                    let n = e.call(this, a);
                    return this.shadowRoot && eJ(this) && r.addShadowRoot(this.shadowRoot, t), n;
                };
            })
        );
    }
    reset() {
        this.restoreHandlers.forEach((e) => {
            try {
                e();
            } catch (e) {}
        }),
            (this.restoreHandlers = []),
            (this.shadowDoms = new WeakSet()),
            this.bypassOptions.canvasManager.resetShadowRoots();
    }
}
class tL {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}
class tp {
    constructor(e) {
        (this.trackedLinkElements = new WeakSet()), (this.styleMirror = new e$()), (this.mutationCb = e.mutationCb), (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
    }
    attachLinkElement(e, t) {
        '_cssText' in t.attributes &&
            this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [
                    {
                        id: t.id,
                        attributes: t.attributes
                    }
                ]
            }),
            this.trackLinkElement(e);
    }
    trackLinkElement(e) {
        !this.trackedLinkElements.has(e) && (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
    }
    adoptStyleSheets(e, t) {
        if (0 === e.length) return;
        let r = {
                id: t,
                styleIds: []
            },
            a = [];
        for (let t of e) {
            let e;
            this.styleMirror.has(t)
                ? (e = this.styleMirror.getId(t))
                : ((e = this.styleMirror.add(t)),
                  a.push({
                      styleId: e,
                      rules: Array.from(t.rules || CSSRule, (e, t) => ({
                          rule: Q(e),
                          index: t
                      }))
                  })),
                r.styleIds.push(e);
        }
        a.length > 0 && (r.styles = a), this.adoptedStyleSheetCb(r);
    }
    reset() {
        this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
    }
    trackStylesheetInLinkElement(e) {}
}
class th {
    constructor() {
        (this.nodeMap = new WeakMap()), (this.loop = !0), this.periodicallyClear();
    }
    periodicallyClear() {
        !(function (...e) {
            eQ('requestAnimationFrame')(...e);
        })(() => {
            this.clear(), this.loop && this.periodicallyClear();
        });
    }
    inOtherBuffer(e, t) {
        let r = this.nodeMap.get(e);
        return r && Array.from(r).some((e) => e !== t);
    }
    add(e, t) {
        this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
    }
    clear() {
        this.nodeMap = new WeakMap();
    }
    destroy() {
        this.loop = !1;
    }
}
try {
    if (2 !== Array.from([1], (e) => 2 * e)[0]) {
        let e = document.createElement('iframe');
        document.body.appendChild(e), (Array.from = (0, d.x)([e, 'access', (e) => e.contentWindow, 'optionalAccess', (e) => e.Array, 'access', (e) => e.from]) || Array.from), document.body.removeChild(e);
    }
} catch (e) {
    console.debug('Unable to override Array.from', e);
}
let tD = new Z();
function tS(e = {}) {
    let t;
    let { emit: r, checkoutEveryNms: a, checkoutEveryNth: n, blockClass: i = 'rr-block', blockSelector: c = null, unblockSelector: s = null, ignoreClass: l = 'rr-ignore', ignoreSelector: I = null, maskAllText: u = !1, maskTextClass: R = 'rr-mask', unmaskTextClass: A = null, maskTextSelector: T = null, unmaskTextSelector: N = null, inlineStylesheet: f = !0, maskAllInputs: O, maskInputOptions: L, slimDOMOptions: p, maskAttributeFn: h, maskInputFn: D, maskTextFn: S, maxCanvasSize: C = null, packFn: P, sampling: g = {}, dataURLOptions: U = {}, mousemoveWait: M, recordDOM: G = !0, recordCanvas: m = !1, recordCrossOriginIframes: y = !1, recordAfter: b = 'DOMContentLoaded' === e.recordAfter ? e.recordAfter : 'load', userTriggeredOnInput: v = !1, collectFonts: w = !1, inlineImages: B = !1, plugins: W, keepIframeSrcFn: Y = () => !1, ignoreCSSAttributes: H = new Set([]), errorHandler: x, onMutation: K, getCanvasManager: k } = e;
    _ = x;
    let V = !y || window.parent === window,
        F = !1;
    if (!V)
        try {
            window.parent.document && (F = !1);
        } catch (e) {
            F = !0;
        }
    if (V && !r) throw Error('emit function is required');
    void 0 !== M && void 0 === g.mousemove && (g.mousemove = M), tD.reset();
    let X =
            !0 === O
                ? {
                      color: !0,
                      date: !0,
                      'datetime-local': !0,
                      email: !0,
                      month: !0,
                      number: !0,
                      range: !0,
                      search: !0,
                      tel: !0,
                      text: !0,
                      time: !0,
                      url: !0,
                      week: !0,
                      textarea: !0,
                      select: !0,
                      radio: !0,
                      checkbox: !0
                  }
                : void 0 !== L
                  ? L
                  : {},
        j =
            !0 === p || 'all' === p
                ? {
                      script: !0,
                      comment: !0,
                      headFavicon: !0,
                      headWhitespace: !0,
                      headMetaSocial: !0,
                      headMetaRobots: !0,
                      headMetaHttpEquiv: !0,
                      headMetaVerification: !0,
                      headMetaAuthorship: 'all' === p,
                      headMetaDescKeywords: 'all' === p
                  }
                : p || {};
    !(function (e = window) {
        'NodeList' in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
            'DOMTokenList' in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
            !Node.prototype.contains &&
                (Node.prototype.contains = (...e) => {
                    let t = e[0];
                    if (!(0 in e)) throw TypeError('1 argument is required');
                    do if (this === t) return !0;
                    while ((t = t && t.parentNode));
                    return !1;
                });
    })();
    let $ = 0,
        q = (e) => {
            for (let t of W || []) t.eventProcessor && (e = t.eventProcessor(e));
            return P && !F && (e = P(e)), e;
        };
    o = (e, _) => {
        if (((e.timestamp = eB()), (0, d.x)([ta, 'access', (e) => e[0], 'optionalAccess', (e) => e.isFrozen, 'call', (e) => e()]) && e.type !== e0.FullSnapshot && !(e.type === e0.IncrementalSnapshot && e.data.source === e1.Mutation) && ta.forEach((e) => e.unfreeze()), V)) (0, d.x)([r, 'optionalCall', (t) => t(q(e), _)]);
        else if (F) {
            let t = {
                type: 'rrweb',
                event: q(e),
                origin: window.location.origin,
                isCheckout: _
            };
            window.parent.postMessage(t, '*');
        }
        if (e.type === e0.FullSnapshot) (t = e), ($ = 0);
        else if (e.type === e0.IncrementalSnapshot) {
            if (e.data.source === e1.Mutation && e.data.isAttachIframe) return;
            $++;
            let r = n && $ >= n,
                _ = a && t && e.timestamp - t.timestamp > a;
            (r || _) && e_(!0);
        }
    };
    let J = (e) => {
            o({
                type: e0.IncrementalSnapshot,
                data: {
                    source: e1.Mutation,
                    ...e
                }
            });
        },
        z = (e) =>
            o({
                type: e0.IncrementalSnapshot,
                data: {
                    source: e1.Scroll,
                    ...e
                }
            }),
        Q = (e) =>
            o({
                type: e0.IncrementalSnapshot,
                data: {
                    source: e1.CanvasMutation,
                    ...e
                }
            }),
        ee = new tp({
            mutationCb: J,
            adoptedStyleSheetCb: (e) =>
                o({
                    type: e0.IncrementalSnapshot,
                    data: {
                        source: e1.AdoptedStyleSheet,
                        ...e
                    }
                })
        }),
        et =
            'boolean' == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__
                ? new tN()
                : new td({
                      mirror: tD,
                      mutationCb: J,
                      stylesheetManager: ee,
                      recordCrossOriginIframes: y,
                      wrappedEmit: o
                  });
    for (let e of W || [])
        e.getMirror &&
            e.getMirror({
                nodeMirror: tD,
                crossOriginIframeMirror: et.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: et.crossOriginIframeStyleMirror
            });
    let er = new th(),
        ea = (function (e, t) {
            try {
                return e ? e(t) : new tL();
            } catch (e) {
                return console.warn('Unable to initialize CanvasManager'), new tL();
            }
        })(k, {
            mirror: tD,
            win: window,
            mutationCb: (e) =>
                o({
                    type: e0.IncrementalSnapshot,
                    data: {
                        source: e1.CanvasMutation,
                        ...e
                    }
                }),
            recordCanvas: m,
            blockClass: i,
            blockSelector: c,
            unblockSelector: s,
            maxCanvasSize: C,
            sampling: g.canvas,
            dataURLOptions: U,
            errorHandler: x
        }),
        en =
            'boolean' == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new tf()
                : new tO({
                      mutationCb: J,
                      scrollCb: z,
                      bypassOptions: {
                          onMutation: K,
                          blockClass: i,
                          blockSelector: c,
                          unblockSelector: s,
                          maskAllText: u,
                          maskTextClass: R,
                          unmaskTextClass: A,
                          maskTextSelector: T,
                          unmaskTextSelector: N,
                          inlineStylesheet: f,
                          maskInputOptions: X,
                          dataURLOptions: U,
                          maskAttributeFn: h,
                          maskTextFn: S,
                          maskInputFn: D,
                          recordCanvas: m,
                          inlineImages: B,
                          sampling: g,
                          slimDOMOptions: j,
                          iframeManager: et,
                          stylesheetManager: ee,
                          canvasManager: ea,
                          keepIframeSrcFn: Y,
                          processedNodeManager: er
                      },
                      mirror: tD
                  }),
        e_ = (e = !1) => {
            if (!G) return;
            o(
                {
                    type: e0.Meta,
                    data: {
                        href: window.location.href,
                        width: eH(),
                        height: eY()
                    }
                },
                e
            ),
                ee.reset(),
                en.init(),
                ta.forEach((e) => e.lock());
            let t = (function (e, t) {
                let { mirror: r = new Z(), blockClass: a = 'rr-block', blockSelector: n = null, unblockSelector: _ = null, maskAllText: o = !1, maskTextClass: E = 'rr-mask', unmaskTextClass: i = null, maskTextSelector: c = null, unmaskTextSelector: s = null, inlineStylesheet: l = !0, inlineImages: I = !1, recordCanvas: u = !1, maskAllInputs: R = !1, maskAttributeFn: A, maskTextFn: T, maskInputFn: N, slimDOM: d = !1, dataURLOptions: f, preserveWhiteSpace: O, onSerialize: L, onIframeLoad: p, iframeLoadTimeout: h, onStylesheetLoad: D, stylesheetLoadTimeout: S, keepIframeSrcFn: C = () => !1 } = t || {};
                return eM(e, {
                    doc: e,
                    mirror: r,
                    blockClass: a,
                    blockSelector: n,
                    unblockSelector: _,
                    maskAllText: o,
                    maskTextClass: E,
                    unmaskTextClass: i,
                    maskTextSelector: c,
                    unmaskTextSelector: s,
                    skipChild: !1,
                    inlineStylesheet: l,
                    maskInputOptions:
                        !0 === R
                            ? {
                                  color: !0,
                                  date: !0,
                                  'datetime-local': !0,
                                  email: !0,
                                  month: !0,
                                  number: !0,
                                  range: !0,
                                  search: !0,
                                  tel: !0,
                                  text: !0,
                                  time: !0,
                                  url: !0,
                                  week: !0,
                                  textarea: !0,
                                  select: !0
                              }
                            : !1 === R
                              ? {}
                              : R,
                    maskAttributeFn: A,
                    maskTextFn: T,
                    maskInputFn: N,
                    slimDOMOptions:
                        !0 === d || 'all' === d
                            ? {
                                  script: !0,
                                  comment: !0,
                                  headFavicon: !0,
                                  headWhitespace: !0,
                                  headMetaDescKeywords: 'all' === d,
                                  headMetaSocial: !0,
                                  headMetaRobots: !0,
                                  headMetaHttpEquiv: !0,
                                  headMetaAuthorship: !0,
                                  headMetaVerification: !0
                              }
                            : !1 === d
                              ? {}
                              : d,
                    dataURLOptions: f,
                    inlineImages: I,
                    recordCanvas: u,
                    preserveWhiteSpace: O,
                    onSerialize: L,
                    onIframeLoad: p,
                    iframeLoadTimeout: h,
                    onStylesheetLoad: D,
                    stylesheetLoadTimeout: S,
                    keepIframeSrcFn: C,
                    newlyAddedElement: !1
                });
            })(document, {
                mirror: tD,
                blockClass: i,
                blockSelector: c,
                unblockSelector: s,
                maskAllText: u,
                maskTextClass: R,
                unmaskTextClass: A,
                maskTextSelector: T,
                unmaskTextSelector: N,
                inlineStylesheet: f,
                maskAllInputs: X,
                maskAttributeFn: h,
                maskInputFn: D,
                maskTextFn: S,
                slimDOM: j,
                dataURLOptions: U,
                recordCanvas: m,
                inlineImages: B,
                onSerialize: (e) => {
                    eF(e, tD) && et.addIframe(e), eX(e, tD) && ee.trackLinkElement(e), ej(e) && en.addShadowRoot(e.shadowRoot, document);
                },
                onIframeLoad: (e, t) => {
                    et.attachIframe(e, t), e.contentWindow && ea.addWindow(e.contentWindow), en.observeAttachShadow(e);
                },
                onStylesheetLoad: (e, t) => {
                    ee.attachLinkElement(e, t);
                },
                keepIframeSrcFn: Y
            });
            if (!t) return console.warn('Failed to snapshot the document');
            o({
                type: e0.FullSnapshot,
                data: {
                    node: t,
                    initialOffset: eW(window)
                }
            }),
                ta.forEach((e) => e.unlock()),
                document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ee.adoptStyleSheets(document.adoptedStyleSheets, tD.getId(document));
        };
    E = e_;
    try {
        let e = [],
            t = (e) =>
                tt(tI)(
                    {
                        onMutation: K,
                        mutationCb: J,
                        mousemoveCb: (e, t) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: t,
                                    positions: e
                                }
                            }),
                        mouseInteractionCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.MouseInteraction,
                                    ...e
                                }
                            }),
                        scrollCb: z,
                        viewportResizeCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.ViewportResize,
                                    ...e
                                }
                            }),
                        inputCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.Input,
                                    ...e
                                }
                            }),
                        mediaInteractionCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.MediaInteraction,
                                    ...e
                                }
                            }),
                        styleSheetRuleCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.StyleSheetRule,
                                    ...e
                                }
                            }),
                        styleDeclarationCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.StyleDeclaration,
                                    ...e
                                }
                            }),
                        canvasMutationCb: Q,
                        fontCb: (e) =>
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.Font,
                                    ...e
                                }
                            }),
                        selectionCb: (e) => {
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.Selection,
                                    ...e
                                }
                            });
                        },
                        customElementCb: (e) => {
                            o({
                                type: e0.IncrementalSnapshot,
                                data: {
                                    source: e1.CustomElement,
                                    ...e
                                }
                            });
                        },
                        blockClass: i,
                        ignoreClass: l,
                        ignoreSelector: I,
                        maskAllText: u,
                        maskTextClass: R,
                        unmaskTextClass: A,
                        maskTextSelector: T,
                        unmaskTextSelector: N,
                        maskInputOptions: X,
                        inlineStylesheet: f,
                        sampling: g,
                        recordDOM: G,
                        recordCanvas: m,
                        inlineImages: B,
                        userTriggeredOnInput: v,
                        collectFonts: w,
                        doc: e,
                        maskAttributeFn: h,
                        maskInputFn: D,
                        maskTextFn: S,
                        keepIframeSrcFn: Y,
                        blockSelector: c,
                        unblockSelector: s,
                        slimDOMOptions: j,
                        dataURLOptions: U,
                        mirror: tD,
                        iframeManager: et,
                        stylesheetManager: ee,
                        shadowDomManager: en,
                        processedNodeManager: er,
                        canvasManager: ea,
                        ignoreCSSAttributes: H,
                        plugins:
                            (0, d.x)([
                                W,
                                'optionalAccess',
                                (e) => e.filter,
                                'call',
                                (e) => e((e) => e.observer),
                                'optionalAccess',
                                (e) => e.map,
                                'call',
                                (e) =>
                                    e((e) => ({
                                        observer: e.observer,
                                        options: e.options,
                                        callback: (t) =>
                                            o({
                                                type: e0.Plugin,
                                                data: {
                                                    plugin: e.name,
                                                    payload: t
                                                }
                                            })
                                    }))
                            ]) || []
                    },
                    {}
                );
        et.addLoadListener((r) => {
            try {
                e.push(t(r.contentDocument));
            } catch (e) {
                console.warn(e);
            }
        });
        let r = () => {
            e_(), e.push(t(document));
        };
        return (
            'interactive' === document.readyState || 'complete' === document.readyState
                ? r()
                : (e.push(
                      em('DOMContentLoaded', () => {
                          o({
                              type: e0.DomContentLoaded,
                              data: {}
                          }),
                              'DOMContentLoaded' === b && r();
                      })
                  ),
                  e.push(
                      em(
                          'load',
                          () => {
                              o({
                                  type: e0.Load,
                                  data: {}
                              }),
                                  'load' === b && r();
                          },
                          window
                      )
                  )),
            () => {
                e.forEach((e) => e()), er.destroy(), (E = void 0), (_ = void 0);
            }
        );
    } catch (e) {
        console.warn(e);
    }
}
(tS.mirror = tD),
    (tS.takeFullSnapshot = function (e) {
        if (!E) throw Error('please take full snapshot after start recording');
        E(e);
    });
function tC(e) {
    return e > 9999999999 ? e : 1000 * e;
}
function tP(e) {
    return e > 9999999999 ? e / 1000 : e;
}
function tg(e, t) {
    if ('sentry.transaction' !== t.category)
        ['ui.click', 'ui.input'].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
            e.addUpdate(
                () => (
                    e.throttledAddEvent({
                        type: e0.Custom,
                        timestamp: 1000 * (t.timestamp || 0),
                        data: {
                            tag: 'breadcrumb',
                            payload: (0, g.Fv)(t, 10, 1000)
                        }
                    }),
                    'console' === t.category
                )
            );
}
function tU(e) {
    return e.closest('button,a') || e;
}
function tM(e) {
    let t = tG(e);
    return t && t instanceof Element ? tU(t) : t;
}
function tG(e) {
    return (function (e) {
        return 'object' == typeof e && !!e && 'target' in e;
    })(e)
        ? e.target
        : e;
}
class tm {
    constructor(e, t, r = tg) {
        (this._lastMutation = 0), (this._lastScroll = 0), (this._clicks = []), (this._timeout = t.timeout / 1000), (this._threshold = t.threshold / 1000), (this._scollTimeout = t.scrollTimeout / 1000), (this._replay = e), (this._ignoreSelector = t.ignoreSelector), (this._addBreadcrumbEvent = r);
    }
    addListeners() {
        var e;
        let t =
            ((e = () => {
                this._lastMutation = tb();
            }),
            !i &&
                ((i = []),
                (function () {
                    (0, U.hl)(V, 'open', function (e) {
                        return function (...t) {
                            if (i)
                                try {
                                    i.forEach((e) => e());
                                } catch (e) {}
                            return e.apply(V, t);
                        };
                    });
                })()),
            i.push(e),
            () => {
                let t = i ? i.indexOf(e) : -1;
                t > -1 && i.splice(t, 1);
            });
        this._teardown = () => {
            t(), (this._clicks = []), (this._lastMutation = 0), (this._lastScroll = 0);
        };
    }
    removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
    }
    handleClick(e, t) {
        if (
            (function (e, t) {
                return !!(!ty.includes(e.tagName) || ('INPUT' === e.tagName && !['submit', 'button'].includes(e.getAttribute('type') || '')) || ('A' === e.tagName && (e.hasAttribute('download') || (e.hasAttribute('target') && '_self' !== e.getAttribute('target')))) || (t && e.matches(t))) || !1;
            })(t, this._ignoreSelector) ||
            !(function (e) {
                return !!(e.data && 'number' == typeof e.data.nodeId && e.timestamp);
            })(e)
        )
            return;
        let r = {
            timestamp: tP(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t
        };
        if (!this._clicks.some((e) => e.node === r.node && 1 > Math.abs(e.timestamp - r.timestamp))) this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks();
    }
    registerMutation(e = Date.now()) {
        this._lastMutation = tP(e);
    }
    registerScroll(e = Date.now()) {
        this._lastScroll = tP(e);
    }
    registerClick(e) {
        let t = tU(e);
        this._handleMultiClick(t);
    }
    _handleMultiClick(e) {
        this._getClicks(e).forEach((e) => {
            e.clickCount++;
        });
    }
    _getClicks(e) {
        return this._clicks.filter((t) => t.node === e);
    }
    _checkClicks() {
        let e = [],
            t = tb();
        for (let r of (this._clicks.forEach((r) => {
            !r.mutationAfter && this._lastMutation && (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0), !r.scrollAfter && this._lastScroll && (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0), r.timestamp + this._timeout <= t && e.push(r);
        }),
        e)) {
            let e = this._clicks.indexOf(r);
            e > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(e, 1));
        }
        this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(e) {
        let t = this._replay,
            r = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
            a = e.mutationAfter && e.mutationAfter <= this._threshold,
            { clickCount: n, clickBreadcrumb: _ } = e;
        if (!r && !a) {
            let r = 1000 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                a = r < 1000 * this._timeout ? 'mutation' : 'timeout',
                o = {
                    type: 'default',
                    message: _.message,
                    timestamp: _.timestamp,
                    category: 'ui.slowClickDetected',
                    data: {
                        ..._.data,
                        url: V.location.href,
                        route: t.getCurrentRoute(),
                        timeAfterClickMs: r,
                        endReason: a,
                        clickCount: n || 1
                    }
                };
            this._addBreadcrumbEvent(t, o);
            return;
        }
        if (n > 1) {
            let e = {
                type: 'default',
                message: _.message,
                timestamp: _.timestamp,
                category: 'ui.multiClick',
                data: {
                    ..._.data,
                    url: V.location.href,
                    route: t.getCurrentRoute(),
                    clickCount: n,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(t, e);
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout), (this._checkClickTimeout = (0, Y.iK)(() => this._checkClicks(), 1000));
    }
}
let ty = ['A', 'BUTTON', 'INPUT'];
function tb() {
    return Date.now() / 1000;
}
function tv(e) {
    return {
        timestamp: Date.now() / 1000,
        type: 'default',
        ...e
    };
}
((R = T || (T = {}))[(R.Document = 0)] = 'Document'), (R[(R.DocumentType = 1)] = 'DocumentType'), (R[(R.Element = 2)] = 'Element'), (R[(R.Text = 3)] = 'Text'), (R[(R.CDATA = 4)] = 'CDATA'), (R[(R.Comment = 5)] = 'Comment');
let tw = new Set(['id', 'class', 'aria-label', 'role', 'name', 'alt', 'title', 'data-test-id', 'data-testid', 'disabled', 'aria-disabled', 'data-sentry-component']),
    tB = (e) => (t) => {
        if (!e.isEnabled()) return;
        let r = (function (e) {
            let { target: t, message: r } = (function (e) {
                let t;
                let r = 'click' === e.name,
                    a = null;
                try {
                    (a = r ? tM(e.event) : tG(e.event)), (t = (0, M.Rt)(a, { maxStringLength: 200 }) || '<unknown>');
                } catch (e) {
                    t = '<unknown>';
                }
                return {
                    target: a,
                    message: t
                };
            })(e);
            return tv({
                category: `ui.${e.name}`,
                ...tW(t, r)
            });
        })(t);
        if (!r) return;
        let a = 'click' === t.name,
            n = a ? t.event : void 0;
        a &&
            e.clickDetector &&
            n &&
            n.target &&
            !n.altKey &&
            !n.metaKey &&
            !n.ctrlKey &&
            !n.shiftKey &&
            !(function (e, t, r) {
                e.handleClick(t, r);
            })(e.clickDetector, r, tM(t.event)),
            tg(e, r);
    };
function tW(e, t) {
    let r = tS.mirror.getId(e),
        a = r && tS.mirror.getNode(r),
        n = a && tS.mirror.getMeta(a),
        _ =
            n &&
            (function (e) {
                return e.type === T.Element;
            })(n)
                ? n
                : null;
    return {
        message: t,
        data: _
            ? {
                  nodeId: r,
                  node: {
                      id: r,
                      tagName: _.tagName,
                      textContent: Array.from(_.childNodes)
                          .map((e) => e.type === T.Text && e.textContent)
                          .filter(Boolean)
                          .map((e) => e.trim())
                          .join(''),
                      attributes: (function (e) {
                          let t = {};
                          for (let r in (!e['data-sentry-component'] && e['data-sentry-element'] && (e['data-sentry-component'] = e['data-sentry-element']), e))
                              if (tw.has(r)) {
                                  let a = r;
                                  ('data-testid' === r || 'data-test-id' === r) && (a = 'testId'), (t[a] = e[r]);
                              }
                          return t;
                      })(_.attributes)
                  }
              }
            : {}
    };
}
let tY = {
    resource: function (e) {
        let { entryType: t, initiatorType: r, name: a, responseEnd: n, startTime: _, decodedBodySize: o, encodedBodySize: E, responseStatus: i, transferSize: c } = e;
        return ['fetch', 'xmlhttprequest'].includes(r)
            ? null
            : {
                  type: `${t}.${r}`,
                  start: tK(_),
                  end: tK(n),
                  name: a,
                  data: {
                      size: c,
                      statusCode: i,
                      decodedBodySize: o,
                      encodedBodySize: E
                  }
              };
    },
    paint: function (e) {
        let { duration: t, entryType: r, name: a, startTime: n } = e,
            _ = tK(n);
        return {
            type: r,
            name: a,
            start: _,
            end: _ + t,
            data: void 0
        };
    },
    navigation: function (e) {
        let { entryType: t, name: r, decodedBodySize: a, duration: n, domComplete: _, encodedBodySize: o, domContentLoadedEventStart: E, domContentLoadedEventEnd: i, domInteractive: c, loadEventStart: s, loadEventEnd: l, redirectCount: I, startTime: u, transferSize: R, type: A } = e;
        return 0 === n
            ? null
            : {
                  type: `${t}.${A}`,
                  start: tK(u),
                  end: tK(_),
                  name: r,
                  data: {
                      size: R,
                      decodedBodySize: a,
                      encodedBodySize: o,
                      duration: n,
                      domInteractive: c,
                      domContentLoadedEventStart: E,
                      domContentLoadedEventEnd: i,
                      loadEventStart: s,
                      loadEventEnd: l,
                      domComplete: _,
                      redirectCount: I
                  }
              };
    }
};
function tH(e, t) {
    return ({ metric: r }) => void t.replayPerformanceEntries.push(e(r));
}
function tx(e) {
    let t = tY[e.entryType];
    return t ? t(e) : null;
}
function tK(e) {
    return ((G.Z1 || V.performance.timeOrigin) + e) / 1000;
}
function tk(e) {
    let t = e.entries[e.entries.length - 1];
    return tj(e, 'largest-contentful-paint', t && t.element ? [t.element] : void 0);
}
function tV(e) {
    let t = e.entries[e.entries.length - 1],
        r = [];
    if (t && t.sources) for (let e of t.sources) e.node && r.push(e.node);
    return tj(e, 'cumulative-layout-shift', r);
}
function tF(e) {
    let t = e.entries[e.entries.length - 1];
    return tj(e, 'first-input-delay', t && t.target ? [t.target] : void 0);
}
function tX(e) {
    let t = e.entries[e.entries.length - 1];
    return tj(e, 'interaction-to-next-paint', t && t.target ? [t.target] : void 0);
}
function tj(e, t, r) {
    let a = e.value,
        n = e.rating,
        _ = tK(a);
    return {
        type: 'web-vital',
        name: t,
        start: _,
        end: _,
        data: {
            value: a,
            size: a,
            rating: n,
            nodeIds: r ? r.map((e) => tS.mirror.getId(e)) : void 0
        }
    };
}
let t$ = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function tq(e, t) {
    if (!!t$) m.kg.info(e), t && tz(e);
}
function tJ(e, t) {
    if (!!t$)
        m.kg.info(e),
            t &&
                (0, Y.iK)(() => {
                    tz(e);
                }, 0);
}
function tz(e) {
    (0, f.n)(
        {
            category: 'console',
            data: { logger: 'replay' },
            level: 'info',
            message: e
        },
        { level: 'info' }
    );
}
class tQ extends Error {
    constructor() {
        super('Event buffer exceeded maximum size of 20000000.');
    }
}
class tZ {
    constructor() {
        (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    get hasEvents() {
        return this.events.length > 0;
    }
    get type() {
        return 'sync';
    }
    destroy() {
        this.events = [];
    }
    async addEvent(e) {
        let t = JSON.stringify(e).length;
        if (((this._totalSize += t), this._totalSize > 20000000)) throw new tQ();
        this.events.push(e);
    }
    finish() {
        return new Promise((e) => {
            let t = this.events;
            this.clear(), e(JSON.stringify(t));
        });
    }
    clear() {
        (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    getEarliestTimestamp() {
        let e = this.events.map((e) => e.timestamp).sort()[0];
        return e ? tC(e) : null;
    }
}
class t0 {
    constructor(e) {
        (this._worker = e), (this._id = 0);
    }
    ensureReady() {
        return this._ensureReadyPromise
            ? this._ensureReadyPromise
            : ((this._ensureReadyPromise = new Promise((e, t) => {
                  this._worker.addEventListener(
                      'message',
                      ({ data: r }) => {
                          r.success ? e() : t();
                      },
                      { once: !0 }
                  ),
                      this._worker.addEventListener(
                          'error',
                          (e) => {
                              t(e);
                          },
                          { once: !0 }
                      );
              })),
              this._ensureReadyPromise);
    }
    destroy() {
        tq('[Replay] Destroying compression worker'), this._worker.terminate();
    }
    postMessage(e, t) {
        let r = this._getAndIncrementId();
        return new Promise((a, n) => {
            let _ = ({ data: t }) => {
                if (t.method === e && t.id === r) {
                    if ((this._worker.removeEventListener('message', _), !t.success)) {
                        t$ && m.kg.error('[Replay]', t.response), n(Error('Error in compression worker'));
                        return;
                    }
                    a(t.response);
                }
            };
            this._worker.addEventListener('message', _),
                this._worker.postMessage({
                    id: r,
                    method: e,
                    arg: t
                });
        });
    }
    _getAndIncrementId() {
        return this._id++;
    }
}
class t1 {
    constructor(e) {
        (this._worker = new t0(e)), (this._earliestTimestamp = null), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    get hasEvents() {
        return !!this._earliestTimestamp;
    }
    get type() {
        return 'worker';
    }
    ensureReady() {
        return this._worker.ensureReady();
    }
    destroy() {
        this._worker.destroy();
    }
    addEvent(e) {
        let t = tC(e.timestamp);
        (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
        let r = JSON.stringify(e);
        return ((this._totalSize += r.length), this._totalSize > 20000000) ? Promise.reject(new tQ()) : this._sendEventToWorker(r);
    }
    finish() {
        return this._finishRequest();
    }
    clear() {
        (this._earliestTimestamp = null),
            (this._totalSize = 0),
            (this.hasCheckout = !1),
            this._worker.postMessage('clear').then(null, (e) => {
                t$ && m.kg.warn('[Replay] Sending "clear" message to worker failed', e);
            });
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp;
    }
    _sendEventToWorker(e) {
        return this._worker.postMessage('addEvent', e);
    }
    async _finishRequest() {
        let e = await this._worker.postMessage('finish');
        return (this._earliestTimestamp = null), (this._totalSize = 0), e;
    }
}
class t2 {
    constructor(e) {
        (this._fallback = new tZ()), (this._compression = new t1(e)), (this._used = this._fallback), (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
    }
    get type() {
        return this._used.type;
    }
    get hasEvents() {
        return this._used.hasEvents;
    }
    get hasCheckout() {
        return this._used.hasCheckout;
    }
    set hasCheckout(e) {
        this._used.hasCheckout = e;
    }
    destroy() {
        this._fallback.destroy(), this._compression.destroy();
    }
    clear() {
        return this._used.clear();
    }
    getEarliestTimestamp() {
        return this._used.getEarliestTimestamp();
    }
    addEvent(e) {
        return this._used.addEvent(e);
    }
    async finish() {
        return await this.ensureWorkerIsLoaded(), this._used.finish();
    }
    ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise;
    }
    async _ensureWorkerIsLoaded() {
        try {
            await this._compression.ensureReady();
        } catch (e) {
            tq('[Replay] Failed to load the compression worker, falling back to simple buffer');
            return;
        }
        await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
        let { events: e, hasCheckout: t } = this._fallback,
            r = [];
        for (let t of e) r.push(this._compression.addEvent(t));
        (this._compression.hasCheckout = t), (this._used = this._compression);
        try {
            await Promise.all(r);
        } catch (e) {
            t$ && m.kg.warn('[Replay] Failed to add events when switching buffers.', e);
        }
    }
}
function t3() {
    try {
        return 'sessionStorage' in V && !!V.sessionStorage;
    } catch (e) {
        return !1;
    }
}
function t6(e) {
    return void 0 !== e && Math.random() < e;
}
function t4(e) {
    let t = Date.now(),
        r = e.id || (0, y.DM)(),
        a = e.started || t,
        n = e.lastActivity || t,
        _ = e.segmentId || 0,
        o = e.sampled;
    return {
        id: r,
        started: a,
        lastActivity: n,
        segmentId: _,
        sampled: o,
        previousSessionId: e.previousSessionId
    };
}
function t5(e) {
    if (!!t3())
        try {
            V.sessionStorage.setItem(F, JSON.stringify(e));
        } catch (e) {}
}
function t8({ sessionSampleRate: e, allowBuffering: t, stickySession: r = !1 }, { previousSessionId: a } = {}) {
    var n, _;
    let o = t4({
        sampled: ((n = e), (_ = t), t6(n) ? 'session' : !!_ && 'buffer'),
        previousSessionId: a
    });
    return r && t5(o), o;
}
function t7(e, t, r = +new Date()) {
    return null === e || void 0 === t || !!(t < 0) || (0 !== t && e + t <= r);
}
function t9(e, { maxReplayDuration: t, sessionIdleExpire: r, targetTime: a = Date.now() }) {
    return t7(e.started, t, a) || t7(e.lastActivity, r, a);
}
function re(e, { sessionIdleExpire: t, maxReplayDuration: r }) {
    return (
        (!!t9(e, {
            sessionIdleExpire: t,
            maxReplayDuration: r
        }) &&
            ('buffer' !== e.sampled || 0 !== e.segmentId)) ||
        !1
    );
}
function rt({ traceInternals: e, sessionIdleExpire: t, maxReplayDuration: r, previousSessionId: a }, n) {
    let _ =
        n.stickySession &&
        (function (e) {
            if (!t3()) return null;
            try {
                let t = V.sessionStorage.getItem(F);
                if (!t) return null;
                let r = JSON.parse(t);
                return tJ('[Replay] Loading existing session', e), t4(r);
            } catch (e) {
                return null;
            }
        })(e);
    return _
        ? re(_, {
              sessionIdleExpire: t,
              maxReplayDuration: r
          })
            ? (tJ('[Replay] Session in sessionStorage is expired, creating new one...'), t8(n, { previousSessionId: _.id }))
            : _
        : (tJ('[Replay] Creating new session', e), t8(n, { previousSessionId: a }));
}
function rr(e, t, r) {
    return !!rn(e, t) && (ra(e, t, r), !0);
}
async function ra(e, t, r) {
    if (!e.eventBuffer) return null;
    try {
        r && 'buffer' === e.recordingMode && e.eventBuffer.clear(), r && (e.eventBuffer.hasCheckout = !0);
        let a = e.getOptions(),
            n = (function (e, t) {
                try {
                    if ('function' == typeof t && e.type === e0.Custom) return t(e);
                } catch (e) {
                    return t$ && m.kg.error('[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...', e), null;
                }
                return e;
            })(t, a.beforeAddRecordingEvent);
        if (!n) return;
        return await e.eventBuffer.addEvent(n);
    } catch (a) {
        let t = a && a instanceof tQ ? 'addEventSizeExceeded' : 'addEvent';
        e.handleException(a), await e.stop({ reason: t });
        let r = (0, O.s3)();
        r && r.recordDroppedEvent('internal_sdk_error', 'replay');
    }
}
function rn(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
    let r = tC(t.timestamp);
    return !(r + e.timeouts.sessionIdlePause < Date.now()) && (!(r > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (tJ(`[Replay] Skipping event with timestamp ${r} because it is after maxReplayDuration`, e.getOptions()._experiments.traceInternals), !1));
}
function r_(e) {
    return !e.type;
}
function ro(e) {
    return 'transaction' === e.type;
}
function rE(e) {
    return 'feedback' === e.type;
}
function ri(e) {
    return !!e.category;
}
function rc(e, t) {
    return t.map(({ type: t, start: r, end: a, name: n, data: _ }) => {
        let o = e.throttledAddEvent({
            type: e0.Custom,
            timestamp: r,
            data: {
                tag: 'performanceSpan',
                payload: {
                    op: t,
                    description: n,
                    startTimestamp: r,
                    endTimestamp: a,
                    data: _
                }
            }
        });
        return 'string' == typeof o ? Promise.resolve(null) : o;
    });
}
function rs(e, t) {
    var r, a;
    if (!e.isEnabled() || null === t) return;
    if (((r = e), (a = t.name), !((!t$ || !r.getOptions()._experiments.traceInternals) && (0, L.W)(a, (0, O.s3)())))) e.addUpdate(() => (rc(e, [t]), !0));
}
function rl(e) {
    if (!e) return;
    let t = new TextEncoder();
    try {
        if ('string' == typeof e) return t.encode(e).length;
        if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            let r = rf(e);
            return t.encode(r).length;
        }
        if (e instanceof Blob) return e.size;
        if (e instanceof ArrayBuffer) return e.byteLength;
    } catch (e) {}
}
function rI(e) {
    if (!e) return;
    let t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t;
}
function ru(e) {
    try {
        if ('string' == typeof e) return [e];
        if (e instanceof URLSearchParams) return [e.toString()];
        if (e instanceof FormData) return [rf(e)];
        if (!e) return [void 0];
    } catch (t) {
        return t$ && m.kg.warn('[Replay] Failed to serialize body', e), [void 0, 'BODY_PARSE_ERROR'];
    }
    return t$ && m.kg.info('[Replay] Skipping network body because of body type', e), [void 0, 'UNPARSEABLE_BODY_TYPE'];
}
function rR(e, t) {
    if (!e)
        return {
            headers: {},
            size: void 0,
            _meta: { warnings: [t] }
        };
    let r = { ...e._meta },
        a = r.warnings || [];
    return (r.warnings = [...a, t]), (e._meta = r), e;
}
function rA(e, t) {
    if (!t) return null;
    let { startTimestamp: r, endTimestamp: a, url: n, method: _, statusCode: o, request: E, response: i } = t;
    return {
        type: e,
        start: r / 1000,
        end: a / 1000,
        name: n,
        data: (0, U.Jr)({
            method: _,
            statusCode: o,
            request: E,
            response: i
        })
    };
}
function rT(e) {
    return {
        headers: {},
        size: e,
        _meta: { warnings: ['URL_SKIPPED'] }
    };
}
function rN(e, t, r) {
    if (!t && 0 === Object.keys(e).length) return;
    if (!t) return { headers: e };
    if (!r)
        return {
            headers: e,
            size: t
        };
    let a = {
            headers: e,
            size: t
        },
        { body: n, warnings: _ } = (function (e) {
            if (!e || 'string' != typeof e) return { body: e };
            let t = e.length > 150000,
                r = (function (e) {
                    let t = e[0],
                        r = e[e.length - 1];
                    return ('[' === t && ']' === r) || ('{' === t && '}' === r);
                })(e);
            if (t) {
                let t = e.slice(0, 150000);
                return r
                    ? {
                          body: t,
                          warnings: ['MAYBE_JSON_TRUNCATED']
                      }
                    : {
                          body: `${t}…`,
                          warnings: ['TEXT_TRUNCATED']
                      };
            }
            if (r)
                try {
                    return { body: JSON.parse(e) };
                } catch (e) {}
            return { body: e };
        })(r);
    return (a.body = n), _ && _.length > 0 && (a._meta = { warnings: _ }), a;
}
function rd(e, t) {
    return Object.entries(e).reduce((r, [a, n]) => {
        let _ = a.toLowerCase();
        return t.includes(_) && e[a] && (r[_] = n), r;
    }, {});
}
function rf(e) {
    return new URLSearchParams(e).toString();
}
function rO(e, t) {
    let r = (function (e, t = V.document.baseURI) {
        if (e.startsWith('http://') || e.startsWith('https://') || e.startsWith(V.location.origin)) return e;
        let r = new URL(e, t);
        if (r.origin !== new URL(t).origin) return e;
        let a = r.href;
        return !e.endsWith('/') && a.endsWith('/') ? a.slice(0, -1) : a;
    })(e);
    return (0, b.U0)(r, t);
}
async function rL(e, t, r) {
    try {
        let a = await rp(e, t, r),
            n = rA('resource.fetch', a);
        rs(r.replay, n);
    } catch (e) {
        t$ && m.kg.error('[Replay] Failed to capture fetch breadcrumb', e);
    }
}
async function rp(e, t, r) {
    let a = Date.now(),
        { startTimestamp: n = a, endTimestamp: _ = a } = t,
        { url: o, method: E, status_code: i = 0, request_body_size: c, response_body_size: s } = e.data,
        l = rO(o, r.networkDetailAllowUrls) && !rO(o, r.networkDetailDenyUrls),
        I = l
            ? (function ({ networkCaptureBodies: e, networkRequestHeaders: t }, r, a) {
                  let n = r
                      ? (function (e, t) {
                            return 1 === e.length && 'string' != typeof e[0] ? rP(e[0], t) : 2 === e.length ? rP(e[1], t) : {};
                        })(r, t)
                      : {};
                  if (!e) return rN(n, a, void 0);
                  let [_, o] = ru(rS(r)),
                      E = rN(n, a, _);
                  return o ? rR(E, o) : E;
              })(r, t.input, c)
            : rT(c);
    return {
        startTimestamp: n,
        endTimestamp: _,
        url: o,
        method: E,
        statusCode: i,
        request: I,
        response: await rh(l, r, t.response, s)
    };
}
async function rh(e, { networkCaptureBodies: t, networkResponseHeaders: r }, a, n) {
    if (!e && void 0 !== n) return rT(n);
    let _ = a ? rC(a.headers, r) : {};
    if (!a || (!t && void 0 !== n)) return rN(_, n, void 0);
    let [o, E] = await rD(a),
        i = (function (e, { networkCaptureBodies: t, responseBodySize: r, captureDetails: a, headers: n }) {
            try {
                let _ = e && e.length && void 0 === r ? rl(e) : r;
                if (!a) return rT(_);
                if (t) return rN(n, _, e);
                return rN(n, _, void 0);
            } catch (e) {
                return t$ && m.kg.warn('[Replay] Failed to serialize response body', e), rN(n, r, void 0);
            }
        })(o, {
            networkCaptureBodies: t,
            responseBodySize: n,
            captureDetails: e,
            headers: _
        });
    return E ? rR(i, E) : i;
}
async function rD(e) {
    let t = (function (e) {
        try {
            return e.clone();
        } catch (e) {
            t$ && m.kg.warn('[Replay] Failed to clone response body', e);
        }
    })(e);
    if (!t) return [void 0, 'BODY_PARSE_ERROR'];
    try {
        return [
            await (function (e) {
                return new Promise((t, r) => {
                    let a = (0, Y.iK)(() => r(Error('Timeout while trying to read response body')), 500);
                    rg(e)
                        .then(
                            (e) => t(e),
                            (e) => r(e)
                        )
                        .finally(() => clearTimeout(a));
                });
            })(t)
        ];
    } catch (e) {
        return t$ && m.kg.warn('[Replay] Failed to get text body from response', e), [void 0, 'BODY_PARSE_ERROR'];
    }
}
function rS(e = []) {
    if (2 === e.length && 'object' == typeof e[1]) return e[1].body;
}
function rC(e, t) {
    let r = {};
    return (
        t.forEach((t) => {
            e.get(t) && (r[t] = e.get(t));
        }),
        r
    );
}
function rP(e, t) {
    if (!e) return {};
    let r = e.headers;
    return r ? (r instanceof Headers ? rC(r, t) : Array.isArray(r) ? {} : rd(r, t)) : {};
}
async function rg(e) {
    return await e.text();
}
async function rU(e, t, r) {
    try {
        let a = (function (e, t, r) {
                let a = Date.now(),
                    { startTimestamp: n = a, endTimestamp: _ = a, input: o, xhr: E } = t,
                    { url: i, method: c, status_code: s = 0, request_body_size: l, response_body_size: I } = e.data;
                if (!i) return null;
                if (!E || !rO(i, r.networkDetailAllowUrls) || rO(i, r.networkDetailDenyUrls)) {
                    let e = rT(l);
                    return {
                        startTimestamp: n,
                        endTimestamp: _,
                        url: i,
                        method: c,
                        statusCode: s,
                        request: e,
                        response: rT(I)
                    };
                }
                let u = E[x.xU],
                    R = u ? rd(u.request_headers, r.networkRequestHeaders) : {},
                    A = rd(
                        (function (e) {
                            let t = e.getAllResponseHeaders();
                            return t
                                ? t.split('\r\n').reduce((e, t) => {
                                      let [r, a] = t.split(': ');
                                      return a && (e[r.toLowerCase()] = a), e;
                                  }, {})
                                : {};
                        })(E),
                        r.networkResponseHeaders
                    ),
                    [T, N] = r.networkCaptureBodies ? ru(o) : [void 0],
                    [d, f] = r.networkCaptureBodies
                        ? (function (e) {
                              let t = [];
                              try {
                                  return [e.responseText];
                              } catch (e) {
                                  t.push(e);
                              }
                              try {
                                  return (function (e, t) {
                                      try {
                                          if ('string' == typeof e) return [e];
                                          if (e instanceof Document) return [e.body.outerHTML];
                                          if ('json' === t && e && 'object' == typeof e) return [JSON.stringify(e)];
                                          if (!e) return [void 0];
                                      } catch (t) {
                                          return t$ && m.kg.warn('[Replay] Failed to serialize body', e), [void 0, 'BODY_PARSE_ERROR'];
                                      }
                                      return t$ && m.kg.info('[Replay] Skipping network body because of body type', e), [void 0, 'UNPARSEABLE_BODY_TYPE'];
                                  })(e.response, e.responseType);
                              } catch (e) {
                                  t.push(e);
                              }
                              return t$ && m.kg.warn('[Replay] Failed to get xhr response body', ...t), [void 0];
                          })(E)
                        : [void 0],
                    O = rN(R, l, T),
                    L = rN(A, I, d);
                return {
                    startTimestamp: n,
                    endTimestamp: _,
                    url: i,
                    method: c,
                    statusCode: s,
                    request: N ? rR(O, N) : O,
                    response: f ? rR(L, f) : L
                };
            })(e, t, r),
            n = rA('resource.xhr', a);
        rs(r.replay, n);
    } catch (e) {
        t$ && m.kg.error('[Replay] Failed to capture xhr breadcrumb', e);
    }
}
async function rM(e) {
    try {
        return Promise.all(
            rc(e, [
                (function (e) {
                    let { jsHeapSizeLimit: t, totalJSHeapSize: r, usedJSHeapSize: a } = e,
                        n = Date.now() / 1000;
                    return {
                        type: 'memory',
                        name: 'memory',
                        start: n,
                        end: n,
                        data: {
                            memory: {
                                jsHeapSizeLimit: t,
                                totalJSHeapSize: r,
                                usedJSHeapSize: a
                            }
                        }
                    };
                })(V.performance.memory)
            ])
        );
    } catch (e) {
        return [];
    }
}
async function rG({ client: e, scope: t, replayId: r, event: a }) {
    let n = {
        event_id: r,
        integrations: 'object' != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
    };
    e.emit('preprocessEvent', a, n);
    let _ = await (0, h.R)(e.getOptions(), a, n, t, e, (0, O.aF)());
    if (!_) return null;
    _.platform = _.platform || 'javascript';
    let o = e.getSdkMetadata(),
        { name: E, version: i } = (o && o.sdk) || {};
    return (
        (_.sdk = {
            ..._.sdk,
            name: E || 'sentry.javascript.unknown',
            version: i || '0.0.0'
        }),
        _
    );
}
async function rm({ recordingData: e, replayId: t, segmentId: r, eventContext: a, timestamp: n, session: _ }) {
    var o, E, i, c;
    let s;
    let l = (function ({ recordingData: e, headers: t }) {
            let r;
            let a = `${JSON.stringify(t)}
`;
            if ('string' == typeof e) r = `${a}${e}`;
            else {
                let t = new TextEncoder().encode(a);
                (r = new Uint8Array(t.length + e.length)).set(t), r.set(e, t.length);
            }
            return r;
        })({
            recordingData: e,
            headers: { segment_id: r }
        }),
        { urls: I, errorIds: u, traceIds: R, initialTimestamp: A } = a,
        T = (0, O.s3)(),
        N = (0, O.nZ)(),
        d = T && T.getTransport(),
        f = T && T.getDsn();
    if (!T || !d || !f || !_.sampled) return (0, w.WD)({});
    let L = {
            type: 'replay_event',
            replay_start_timestamp: A / 1000,
            timestamp: n / 1000,
            error_ids: u,
            trace_ids: R,
            urls: I,
            replay_id: t,
            segment_id: r,
            replay_type: _.sampled
        },
        p = await rG({
            scope: N,
            client: T,
            replayId: t,
            event: L
        });
    if (!p) return T.recordDroppedEvent('event_processor', 'replay', L), tq('An event processor returned `null`, will not send event.'), (0, w.WD)({});
    delete p.sdkProcessingMetadata;
    let h =
        ((o = p),
        (E = l),
        (i = f),
        (c = T.getOptions().tunnel),
        (0, v.Jd)((0, v.Cd)(o, (0, v.HY)(o), c, i), [
            [{ type: 'replay_event' }, o],
            [
                {
                    type: 'replay_recording',
                    length: 'string' == typeof E ? new TextEncoder().encode(E).length : E.length
                },
                E
            ]
        ]));
    try {
        s = await d.send(h);
    } catch (t) {
        let e = Error(X);
        try {
            e.cause = t;
        } catch (e) {}
        throw e;
    }
    if ('number' == typeof s.statusCode && (s.statusCode < 200 || s.statusCode >= 300)) throw new ry(s.statusCode);
    let D = (0, B.WG)({}, s);
    if ((0, B.Q)(D, 'replay')) throw new rb(D);
    return s;
}
class ry extends Error {
    constructor(e) {
        super(`Transport returned status code ${e}`);
    }
}
class rb extends Error {
    constructor(e) {
        super('Rate limit hit'), (this.rateLimits = e);
    }
}
async function rv(
    e,
    t = {
        count: 0,
        interval: 5000
    }
) {
    let { recordingData: r, options: a } = e;
    if (!!r.length)
        try {
            return await rm(e), !0;
        } catch (r) {
            if (r instanceof ry || r instanceof rb) throw r;
            if (((0, p.v)('Replays', { _retryCount: t.count }), t$ && a._experiments && a._experiments.captureExceptions && (0, p.Tb)(r), t.count >= 3)) {
                let e = Error(`${X} - max retries exceeded`);
                try {
                    e.cause = r;
                } catch (e) {}
                throw e;
            }
            return (
                (t.interval *= ++t.count),
                new Promise((r, a) => {
                    (0, Y.iK)(async () => {
                        try {
                            await rv(e, t), r(!0);
                        } catch (e) {
                            a(e);
                        }
                    }, t.interval);
                })
            );
        }
}
let rw = '__THROTTLED';
class rB {
    constructor({ options: e, recordingOptions: t }) {
        rB.prototype.__init.call(this),
            rB.prototype.__init2.call(this),
            rB.prototype.__init3.call(this),
            rB.prototype.__init4.call(this),
            rB.prototype.__init5.call(this),
            rB.prototype.__init6.call(this),
            (this.eventBuffer = null),
            (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            (this.recordingMode = 'session'),
            (this.timeouts = {
                sessionIdlePause: 300000,
                sessionIdleExpire: 900000
            }),
            (this._lastActivity = Date.now()),
            (this._isEnabled = !1),
            (this._isPaused = !1),
            (this._requiresManualStart = !1),
            (this._hasInitializedCoreListeners = !1),
            (this._context = {
                errorIds: new Set(),
                traceIds: new Set(),
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: ''
            }),
            (this._recordingOptions = t),
            (this._options = e),
            (this._debouncedFlush = (function (e, t, r) {
                let a, n, _;
                let o = r && r.maxWait ? Math.max(r.maxWait, t) : 0;
                function E() {
                    return i(), (a = e());
                }
                function i() {
                    void 0 !== n && clearTimeout(n), void 0 !== _ && clearTimeout(_), (n = _ = void 0);
                }
                function c() {
                    return n && clearTimeout(n), (n = (0, Y.iK)(E, t)), o && void 0 === _ && (_ = (0, Y.iK)(E, o)), a;
                }
                return (
                    (c.cancel = i),
                    (c.flush = function () {
                        return void 0 !== n || void 0 !== _ ? E() : a;
                    }),
                    c
                );
            })(() => this._flush(), this._options.flushMinDelay, { maxWait: this._options.flushMaxDelay })),
            (this._throttledAddEvent = (function (e, t, r) {
                let a = new Map(),
                    n = (e) => {
                        let t = e - 5;
                        a.forEach((e, r) => {
                            r < t && a.delete(r);
                        });
                    },
                    _ = () => [...a.values()].reduce((e, t) => e + t, 0),
                    o = !1;
                return (...t) => {
                    let r = Math.floor(Date.now() / 1000);
                    if ((n(r), _() >= 300)) {
                        let e = o;
                        return (o = !0), e ? '__SKIPPED' : rw;
                    }
                    o = !1;
                    let E = a.get(r) || 0;
                    return a.set(r, E + 1), e(...t);
                };
            })(
                (e, t) => {
                    var r, a, n;
                    return (r = this), (a = e), (n = t), rn(r, a) ? ra(r, a, n) : Promise.resolve(null);
                },
                300,
                5
            ));
        let { slowClickTimeout: r, slowClickIgnoreSelectors: a } = this.getOptions(),
            n = r
                ? {
                      threshold: Math.min(3000, r),
                      timeout: r,
                      scrollTimeout: 300,
                      ignoreSelector: a ? a.join(',') : ''
                  }
                : void 0;
        n && (this.clickDetector = new tm(this, n));
    }
    getContext() {
        return this._context;
    }
    isEnabled() {
        return this._isEnabled;
    }
    isPaused() {
        return this._isPaused;
    }
    isRecordingCanvas() {
        return !!this._canvas;
    }
    getOptions() {
        return this._options;
    }
    handleException(e) {
        t$ && m.kg.error('[Replay]', e), t$ && this._options._experiments && this._options._experiments.captureExceptions && (0, p.Tb)(e);
    }
    initializeSampling(e) {
        let { errorSampleRate: t, sessionSampleRate: r } = this._options,
            a = t <= 0 && r <= 0;
        if (((this._requiresManualStart = a), a)) return;
        if ((this._initializeSessionForSampling(e), !this.session)) {
            this.handleException(Error('Unable to initialize and create session'));
            return;
        }
        if (!1 !== this.session.sampled) (this.recordingMode = 'buffer' === this.session.sampled && 0 === this.session.segmentId ? 'buffer' : 'session'), tJ(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), this._initializeRecording();
    }
    start() {
        if (this._isEnabled && 'session' === this.recordingMode) {
            t$ && m.kg.info('[Replay] Recording is already in progress');
            return;
        }
        if (this._isEnabled && 'buffer' === this.recordingMode) {
            t$ && m.kg.info('[Replay] Buffering is in progress, call `flush()` to save the replay');
            return;
        }
        tJ('[Replay] Starting replay in session mode', this._options._experiments.traceInternals), this._updateUserActivity();
        let e = rt(
            {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                traceInternals: this._options._experiments.traceInternals
            },
            {
                stickySession: this._options.stickySession,
                sessionSampleRate: 1,
                allowBuffering: !1
            }
        );
        (this.session = e), this._initializeRecording();
    }
    startBuffering() {
        if (this._isEnabled) {
            t$ && m.kg.info('[Replay] Buffering is in progress, call `flush()` to save the replay');
            return;
        }
        tJ('[Replay] Starting replay in buffer mode', this._options._experiments.traceInternals);
        let e = rt(
            {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
                traceInternals: this._options._experiments.traceInternals
            },
            {
                stickySession: this._options.stickySession,
                sessionSampleRate: 0,
                allowBuffering: !0
            }
        );
        (this.session = e), (this.recordingMode = 'buffer'), this._initializeRecording();
    }
    startRecording() {
        try {
            var e;
            let t,
                r = this._canvas;
            this._stopRecording = tS({
                ...this._recordingOptions,
                ...('buffer' === this.recordingMode && { checkoutEveryNms: 60000 }),
                emit:
                    ((e = this),
                    (t = !1),
                    (r, a) => {
                        if (!e.checkAndHandleExpiredSession()) {
                            t$ && m.kg.warn('[Replay] Received replay event after session expired.');
                            return;
                        }
                        let n = a || !t;
                        (t = !0),
                            e.clickDetector &&
                                !(function (e, t) {
                                    try {
                                        if (
                                            !(function (e) {
                                                return 3 === e.type;
                                            })(t)
                                        )
                                            return;
                                        let { source: r } = t.data;
                                        if (
                                            (r === e1.Mutation && e.registerMutation(t.timestamp),
                                            r === e1.Scroll && e.registerScroll(t.timestamp),
                                            (function (e) {
                                                return e.data.source === e1.MouseInteraction;
                                            })(t))
                                        ) {
                                            let { type: r, id: a } = t.data,
                                                n = tS.mirror.getNode(a);
                                            n instanceof HTMLElement && r === e2.Click && e.registerClick(n);
                                        }
                                    } catch (e) {}
                                })(e.clickDetector, r),
                            e.addUpdate(() => {
                                if (('buffer' === e.recordingMode && n && e.setInitialState(), !rr(e, r, n))) return !0;
                                if (!n) return !1;
                                if (
                                    ((function (e, t) {
                                        if (!!t && !!e.session && 0 === e.session.segmentId)
                                            rr(
                                                e,
                                                (function (e) {
                                                    let t = e.getOptions();
                                                    return {
                                                        type: e0.Custom,
                                                        timestamp: Date.now(),
                                                        data: {
                                                            tag: 'options',
                                                            payload: {
                                                                shouldRecordCanvas: e.isRecordingCanvas(),
                                                                sessionSampleRate: t.sessionSampleRate,
                                                                errorSampleRate: t.errorSampleRate,
                                                                useCompressionOption: t.useCompression,
                                                                blockAllMedia: t.blockAllMedia,
                                                                maskAllText: t.maskAllText,
                                                                maskAllInputs: t.maskAllInputs,
                                                                useCompression: !!e.eventBuffer && 'worker' === e.eventBuffer.type,
                                                                networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                                networkCaptureBodies: t.networkCaptureBodies,
                                                                networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                                networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                                            }
                                                        }
                                                    };
                                                })(e),
                                                !1
                                            );
                                    })(e, n),
                                    e.session && e.session.previousSessionId)
                                )
                                    return !0;
                                if ('buffer' === e.recordingMode && e.session && e.eventBuffer) {
                                    let t = e.eventBuffer.getEarliestTimestamp();
                                    t && (tq(`[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`, e.getOptions()._experiments.traceInternals), (e.session.started = t), e.getOptions().stickySession && t5(e.session));
                                }
                                return 'session' === e.recordingMode && e.flush(), !0;
                            });
                    }),
                onMutation: this._onMutationHandler,
                ...(r
                    ? {
                          recordCanvas: r.recordCanvas,
                          getCanvasManager: r.getCanvasManager,
                          sampling: r.sampling,
                          dataURLOptions: r.dataURLOptions
                      }
                    : {})
            });
        } catch (e) {
            this.handleException(e);
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(), (this._stopRecording = void 0)), !0;
        } catch (e) {
            return this.handleException(e), !1;
        }
    }
    async stop({ forceFlush: e = !1, reason: t } = {}) {
        if (!!this._isEnabled) {
            this._isEnabled = !1;
            try {
                var r;
                tq(`[Replay] Stopping Replay${t ? ` triggered by ${t}` : ''}`, this._options._experiments.traceInternals),
                    this._removeListeners(),
                    this.stopRecording(),
                    this._debouncedFlush.cancel(),
                    e && (await this._flush({ force: !0 })),
                    this.eventBuffer && this.eventBuffer.destroy(),
                    (this.eventBuffer = null),
                    (r = this),
                    (function () {
                        if (!!t3())
                            try {
                                V.sessionStorage.removeItem(F);
                            } catch (e) {}
                    })(),
                    (r.session = void 0);
            } catch (e) {
                this.handleException(e);
            }
        }
    }
    pause() {
        if (!this._isPaused) (this._isPaused = !0), this.stopRecording(), tq('[Replay] Pausing replay', this._options._experiments.traceInternals);
    }
    resume() {
        if (!!this._isPaused && !!this._checkSession()) (this._isPaused = !1), this.startRecording(), tq('[Replay] Resuming replay', this._options._experiments.traceInternals);
    }
    async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
        if ('session' === this.recordingMode) return this.flushImmediate();
        let t = Date.now();
        tq('[Replay] Converting buffer to session', this._options._experiments.traceInternals), await this.flushImmediate();
        let r = this.stopRecording();
        if (!!e && !!r && 'session' !== this.recordingMode) (this.recordingMode = 'session'), this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording();
    }
    addUpdate(e) {
        let t = e();
        if ('buffer' !== this.recordingMode && !0 !== t) this._debouncedFlush();
    }
    triggerUserActivity() {
        if ((this._updateUserActivity(), !this._stopRecording)) {
            if (!this._checkSession()) return;
            this.resume();
            return;
        }
        this.checkAndHandleExpiredSession(), this._updateSessionActivity();
    }
    updateUserActivity() {
        this._updateUserActivity(), this._updateSessionActivity();
    }
    conditionalFlush() {
        return 'buffer' === this.recordingMode ? Promise.resolve() : this.flushImmediate();
    }
    flush() {
        return this._debouncedFlush();
    }
    flushImmediate() {
        return this._debouncedFlush(), this._debouncedFlush.flush();
    }
    cancelFlush() {
        this._debouncedFlush.cancel();
    }
    getSessionId() {
        return this.session && this.session.id;
    }
    checkAndHandleExpiredSession() {
        if (this._lastActivity && t7(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && 'session' === this.session.sampled) {
            this.pause();
            return;
        }
        return !!this._checkSession() || !1;
    }
    setInitialState() {
        let e = `${V.location.pathname}${V.location.hash}${V.location.search}`,
            t = `${V.location.origin}${e}`;
        (this.performanceEntries = []), (this.replayPerformanceEntries = []), this._clearContext(), (this._context.initialUrl = t), (this._context.initialTimestamp = Date.now()), this._context.urls.push(t);
    }
    throttledAddEvent(e, t) {
        let r = this._throttledAddEvent(e, t);
        if (r === rw) {
            let e = tv({ category: 'replay.throttled' });
            this.addUpdate(
                () =>
                    !rr(this, {
                        type: 5,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: 'breadcrumb',
                            payload: e,
                            metric: !0
                        }
                    })
            );
        }
        return r;
    }
    getCurrentRoute() {
        let e = this.lastActiveSpan || (0, D.HN)(),
            t = e && (0, D.Gx)(e),
            r = ((t && (0, D.XU)(t).data) || {})[S.Zj];
        if (!!t && !!r && !!['route', 'custom'].includes(r)) return (0, D.XU)(t).description;
    }
    _initializeRecording() {
        this.setInitialState(),
            this._updateSessionActivity(),
            (this.eventBuffer = (function ({ useCompression: e, workerUrl: t }) {
                if (e && window.Worker) {
                    let e = (function (e) {
                        try {
                            let t =
                                e ||
                                (function () {
                                    return 'undefined' != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__
                                        ? ''
                                        : (function () {
                                              let e = new Blob([
                                                  'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});'
                                              ]);
                                              return URL.createObjectURL(e);
                                          })();
                                })();
                            if (!t) return;
                            tq(`[Replay] Using compression worker${e ? ` from ${e}` : ''}`);
                            let r = new Worker(t);
                            return new t2(r);
                        } catch (e) {
                            tq('[Replay] Failed to create compression worker');
                        }
                    })(t);
                    if (e) return e;
                }
                return tq('[Replay] Using simple buffer'), new tZ();
            })({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl
            })),
            this._removeListeners(),
            this._addListeners(),
            (this._isEnabled = !0),
            (this._isPaused = !1),
            this.startRecording();
    }
    _initializeSessionForSampling(e) {
        let t = this._options.errorSampleRate > 0,
            r = rt(
                {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: e
                },
                {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                }
            );
        this.session = r;
    }
    _checkSession() {
        if (!this.session) return !1;
        let e = this.session;
        return (
            !re(e, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration
            }) || (this._refreshSession(e), !1)
        );
    }
    async _refreshSession(e) {
        if (!!this._isEnabled) await this.stop({ reason: 'refresh session' }), this.initializeSampling(e.id);
    }
    _addListeners() {
        try {
            V.document.addEventListener('visibilitychange', this._handleVisibilityChange),
                V.addEventListener('blur', this._handleWindowBlur),
                V.addEventListener('focus', this._handleWindowFocus),
                V.addEventListener('keydown', this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                !this._hasInitializedCoreListeners &&
                    (!(function (e) {
                        var t, r, a, n;
                        let _ = (0, O.s3)();
                        (0, K.O)(tB(e)),
                            (0, k.a)(
                                ((t = e),
                                (e) => {
                                    if (!t.isEnabled()) return;
                                    let r = (function (e) {
                                        let { from: t, to: r } = e,
                                            a = Date.now() / 1000;
                                        return {
                                            type: 'navigation.push',
                                            start: a,
                                            end: a,
                                            name: r,
                                            data: { previous: t }
                                        };
                                    })(e);
                                    if (null !== r) t.getContext().urls.push(r.name), t.triggerUserActivity(), t.addUpdate(() => (rc(t, [r]), !1));
                                })
                            ),
                            !(function (e) {
                                let t = (0, O.s3)();
                                if (!!t)
                                    t.on('beforeAddBreadcrumb', (t) =>
                                        (function (e, t) {
                                            if (!e.isEnabled() || !ri(t)) return;
                                            let r = (function (e) {
                                                return !ri(e) || ['fetch', 'xhr', 'sentry.event', 'sentry.transaction'].includes(e.category) || e.category.startsWith('ui.')
                                                    ? null
                                                    : 'console' === e.category
                                                      ? (function (e) {
                                                            let t = e.data && e.data.arguments;
                                                            if (!Array.isArray(t) || 0 === t.length) return tv(e);
                                                            let r = !1,
                                                                a = t.map((e) => {
                                                                    if (!e) return e;
                                                                    if ('string' == typeof e) return e.length > 5000 ? ((r = !0), `${e.slice(0, 5000)}…`) : e;
                                                                    if ('object' == typeof e)
                                                                        try {
                                                                            let t = (0, g.Fv)(e, 7);
                                                                            if (JSON.stringify(t).length > 5000) return (r = !0), `${JSON.stringify(t, null, 2).slice(0, 5000)}…`;
                                                                            return t;
                                                                        } catch (e) {}
                                                                    return e;
                                                                });
                                                            return tv({
                                                                ...e,
                                                                data: {
                                                                    ...e.data,
                                                                    arguments: a,
                                                                    ...(r ? { _meta: { warnings: ['CONSOLE_ARG_TRUNCATED'] } } : {})
                                                                }
                                                            });
                                                        })(e)
                                                      : tv(e);
                                            })(t);
                                            r && tg(e, r);
                                        })(e, t)
                                    );
                            })(e),
                            !(function (e) {
                                let t = (0, O.s3)();
                                try {
                                    let { networkDetailAllowUrls: r, networkDetailDenyUrls: a, networkCaptureBodies: n, networkRequestHeaders: _, networkResponseHeaders: o } = e.getOptions(),
                                        E = {
                                            replay: e,
                                            networkDetailAllowUrls: r,
                                            networkDetailDenyUrls: a,
                                            networkCaptureBodies: n,
                                            networkRequestHeaders: _,
                                            networkResponseHeaders: o
                                        };
                                    t &&
                                        t.on('beforeAddBreadcrumb', (e, t) =>
                                            (function (e, t, r) {
                                                if (!!t.data)
                                                    try {
                                                        (function (e) {
                                                            return 'xhr' === e.category;
                                                        })(t) &&
                                                            (function (e) {
                                                                return e && e.xhr;
                                                            })(r) &&
                                                            (!(function (e, t) {
                                                                let { xhr: r, input: a } = t;
                                                                if (!r) return;
                                                                let n = rl(a),
                                                                    _ = r.getResponseHeader('content-length')
                                                                        ? rI(r.getResponseHeader('content-length'))
                                                                        : (function (e, t) {
                                                                              try {
                                                                                  let r = 'json' === t && e && 'object' == typeof e ? JSON.stringify(e) : e;
                                                                                  return rl(r);
                                                                              } catch (e) {
                                                                                  return;
                                                                              }
                                                                          })(r.response, r.responseType);
                                                                void 0 !== n && (e.data.request_body_size = n), void 0 !== _ && (e.data.response_body_size = _);
                                                            })(t, r),
                                                            rU(t, r, e)),
                                                            (function (e) {
                                                                return 'fetch' === e.category;
                                                            })(t) &&
                                                                (function (e) {
                                                                    return e && e.response;
                                                                })(r) &&
                                                                (!(function (e, t) {
                                                                    let { input: r, response: a } = t,
                                                                        n = rl(r ? rS(r) : void 0),
                                                                        _ = a ? rI(a.headers.get('content-length')) : void 0;
                                                                    void 0 !== n && (e.data.request_body_size = n), void 0 !== _ && (e.data.response_body_size = _);
                                                                })(t, r),
                                                                rL(t, r, e));
                                                    } catch (e) {
                                                        t$ && m.kg.warn('Error when enriching network breadcrumb');
                                                    }
                                            })(E, e, t)
                                        );
                                } catch (e) {}
                            })(e);
                        let o =
                            ((r = e),
                            Object.assign(
                                (e, t) => {
                                    var a, n, _, o, E, i;
                                    if (!r.isEnabled()) return e;
                                    if ('replay_event' === e.type) return delete e.breadcrumbs, e;
                                    if ((e.type && !ro(e) && !rE(e)) || !r.checkAndHandleExpiredSession()) return e;
                                    if (rE(e)) {
                                        return (
                                            r.flush(),
                                            (e.contexts.feedback.replay_id = r.getSessionId()),
                                            (a = r),
                                            (n = e),
                                            a.triggerUserActivity(),
                                            a.addUpdate(
                                                () =>
                                                    !n.timestamp ||
                                                    (a.throttledAddEvent({
                                                        type: e0.Custom,
                                                        timestamp: 1000 * n.timestamp,
                                                        data: {
                                                            tag: 'breadcrumb',
                                                            payload: {
                                                                timestamp: n.timestamp,
                                                                type: 'default',
                                                                category: 'sentry.feedback',
                                                                data: { feedbackId: n.event_id }
                                                            }
                                                        }
                                                    }),
                                                    !1)
                                            ),
                                            e
                                        );
                                    }
                                    if (((_ = e), (o = t), !_.type && _.exception && _.exception.values && _.exception.values.length && o.originalException && o.originalException.__rrweb__ && !r.getOptions()._experiments.captureExceptions)) return t$ && m.kg.log('[Replay] Ignoring error from rrweb internals', e), null;
                                    return (
                                        (E = r),
                                        (i = e),
                                        (('buffer' === E.recordingMode && i.message !== X && i.exception && !i.type && t6(E.getOptions().errorSampleRate)) || 'session' === r.recordingMode) &&
                                            (e.tags = {
                                                ...e.tags,
                                                replayId: r.getSessionId()
                                            }),
                                        e
                                    );
                                },
                                { id: 'Replay' }
                            ));
                        if (((0, p.Qy)(o), _)) {
                            _.on(
                                'beforeSendEvent',
                                ((a = e),
                                (e) => {
                                    if (!!a.isEnabled() && !e.type)
                                        (function (e, t) {
                                            let r = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
                                            if ('string' == typeof r)
                                                (r.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || r.match(/(does not match server-rendered HTML|Hydration failed because)/i)) &&
                                                    tg(
                                                        e,
                                                        tv({
                                                            category: 'replay.hydrate-error',
                                                            data: { url: (0, M.l4)() }
                                                        })
                                                    );
                                        })(a, e);
                                })
                            ),
                                _.on(
                                    'afterSendEvent',
                                    ((n = e),
                                    (e, t) => {
                                        if (!n.isEnabled() || (e.type && !ro(e))) return;
                                        let r = t && t.statusCode;
                                        if (!!r && !(r < 200) && !(r >= 300)) {
                                            if (ro(e)) {
                                                (function (e, t) {
                                                    let r = e.getContext();
                                                    t.contexts && t.contexts.trace && t.contexts.trace.trace_id && r.traceIds.size < 100 && r.traceIds.add(t.contexts.trace.trace_id);
                                                })(n, e);
                                                return;
                                            }
                                            (function (e, t) {
                                                let r = e.getContext();
                                                if ((t.event_id && r.errorIds.size < 100 && r.errorIds.add(t.event_id), 'buffer' !== e.recordingMode || !t.tags || !t.tags.replayId)) return;
                                                let { beforeErrorSampling: a } = e.getOptions();
                                                if ('function' != typeof a || !!a(t))
                                                    (0, Y.iK)(() => {
                                                        e.sendBufferedReplayOrFlush();
                                                    });
                                            })(n, e);
                                        }
                                    })
                                ),
                                _.on('createDsc', (t) => {
                                    let r = e.getSessionId();
                                    r && e.isEnabled() && 'session' === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = r);
                                }),
                                _.on('spanStart', (t) => {
                                    e.lastActiveSpan = t;
                                }),
                                _.on('spanEnd', (t) => {
                                    e.lastActiveSpan = t;
                                }),
                                _.on('beforeSendFeedback', (t, r) => {
                                    let a = e.getSessionId();
                                    r && r.includeReplay && e.isEnabled() && a && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = a);
                                });
                        }
                    })(this),
                    (this._hasInitializedCoreListeners = !0));
        } catch (e) {
            this.handleException(e);
        }
        this._performanceCleanupCallback = (function (e) {
            function t(t) {
                !e.performanceEntries.includes(t) && e.performanceEntries.push(t);
            }
            function r({ entries: e }) {
                e.forEach(t);
            }
            let a = [];
            return (
                ['navigation', 'paint', 'resource'].forEach((e) => {
                    a.push((0, H._j)(e, r));
                }),
                a.push((0, H.$A)(tH(tk, e)), (0, H.PR)(tH(tV, e)), (0, H.to)(tH(tF, e)), (0, H.YF)(tH(tX, e))),
                () => {
                    a.forEach((e) => e());
                }
            );
        })(this);
    }
    _removeListeners() {
        try {
            V.document.removeEventListener('visibilitychange', this._handleVisibilityChange), V.removeEventListener('blur', this._handleWindowBlur), V.removeEventListener('focus', this._handleWindowFocus), V.removeEventListener('keydown', this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback();
        } catch (e) {
            this.handleException(e);
        }
    }
    __init() {
        this._handleVisibilityChange = () => {
            'visible' === V.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
        };
    }
    __init2() {
        this._handleWindowBlur = () => {
            let e = tv({ category: 'ui.blur' });
            this._doChangeToBackgroundTasks(e);
        };
    }
    __init3() {
        this._handleWindowFocus = () => {
            let e = tv({ category: 'ui.focus' });
            this._doChangeToForegroundTasks(e);
        };
    }
    __init4() {
        this._handleKeyboardEvent = (e) => {
            !(function (e, t) {
                if (!e.isEnabled()) return;
                e.updateUserActivity();
                let r = (function (e) {
                    let { metaKey: t, shiftKey: r, ctrlKey: a, altKey: n, key: _, target: o } = e;
                    if (
                        !o ||
                        (function (e) {
                            return 'INPUT' === e.tagName || 'TEXTAREA' === e.tagName || e.isContentEditable;
                        })(o) ||
                        !_
                    )
                        return null;
                    let E = t || a || n,
                        i = 1 === _.length;
                    if (!E && i) return null;
                    let c = (0, M.Rt)(o, { maxStringLength: 200 }) || '<unknown>',
                        s = tW(o, c);
                    return tv({
                        category: 'ui.keyDown',
                        message: c,
                        data: {
                            ...s.data,
                            metaKey: t,
                            shiftKey: r,
                            ctrlKey: a,
                            altKey: n,
                            key: _
                        }
                    });
                })(t);
                if (!!r) tg(e, r);
            })(this, e);
        };
    }
    _doChangeToBackgroundTasks(e) {
        if (
            !(
                !this.session ||
                t9(this.session, {
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                })
            )
        )
            e && this._createCustomBreadcrumb(e), this.conditionalFlush();
    }
    _doChangeToForegroundTasks(e) {
        if (!!this.session) {
            if (!this.checkAndHandleExpiredSession()) {
                tq('[Replay] Document has become active, but session has expired');
                return;
            }
            e && this._createCustomBreadcrumb(e);
        }
    }
    _updateUserActivity(e = Date.now()) {
        this._lastActivity = e;
    }
    _updateSessionActivity(e = Date.now()) {
        this.session && ((this.session.lastActivity = e), this._maybeSaveSession());
    }
    _createCustomBreadcrumb(e) {
        this.addUpdate(() => {
            this.throttledAddEvent({
                type: e0.Custom,
                timestamp: e.timestamp || 0,
                data: {
                    tag: 'breadcrumb',
                    payload: e
                }
            });
        });
    }
    _addPerformanceEntries() {
        let e = this.performanceEntries.map(tx).filter(Boolean).concat(this.replayPerformanceEntries);
        return (this.performanceEntries = []), (this.replayPerformanceEntries = []), Promise.all(rc(this, e));
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), (this._context.urls = []);
    }
    _updateInitialTimestampFromEventBuffer() {
        let { session: e, eventBuffer: t } = this;
        if (!e || !t || this._requiresManualStart || e.segmentId) return;
        let r = t.getEarliestTimestamp();
        r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r);
    }
    _popEventContext() {
        let e = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
        };
        return this._clearContext(), e;
    }
    async _runFlush() {
        let e = this.getSessionId();
        if (!this.session || !this.eventBuffer || !e) {
            t$ && m.kg.error('[Replay] No session or eventBuffer found to flush.');
            return;
        }
        if ((await this._addPerformanceEntries(), !this.eventBuffer || !this.eventBuffer.hasEvents)) return;
        if ((await rM(this), !!this.eventBuffer && e === this.getSessionId()))
            try {
                this._updateInitialTimestampFromEventBuffer();
                let t = Date.now();
                if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 30000) throw Error('Session is too long, not sending replay');
                let r = this._popEventContext(),
                    a = this.session.segmentId++;
                this._maybeSaveSession();
                let n = await this.eventBuffer.finish();
                await rv({
                    replayId: e,
                    recordingData: n,
                    segmentId: a,
                    eventContext: r,
                    session: this.session,
                    options: this.getOptions(),
                    timestamp: t
                });
            } catch (t) {
                this.handleException(t), this.stop({ reason: 'sendReplay' });
                let e = (0, O.s3)();
                e && e.recordDroppedEvent('send_error', 'replay');
            }
    }
    __init5() {
        this._flush = async ({ force: e = !1 } = {}) => {
            if (!this._isEnabled && !e) return;
            if (!this.checkAndHandleExpiredSession()) {
                t$ && m.kg.error('[Replay] Attempting to finish replay event after session expired.');
                return;
            }
            if (!this.session) return;
            let t = this.session.started,
                r = Date.now() - t;
            this._debouncedFlush.cancel();
            let a = r < this._options.minReplayDuration,
                n = r > this._options.maxReplayDuration + 5000;
            if (a || n) {
                tq(`[Replay] Session duration (${Math.floor(r / 1000)}s) is too ${a ? 'short' : 'long'}, not sending replay.`, this._options._experiments.traceInternals), a && this._debouncedFlush();
                return;
            }
            let _ = this.eventBuffer;
            if ((_ && 0 === this.session.segmentId && !_.hasCheckout && tq('[Replay] Flushing initial segment without checkout.', this._options._experiments.traceInternals), !this._flushLock)) {
                (this._flushLock = this._runFlush()), await this._flushLock, (this._flushLock = void 0);
                return;
            }
            try {
                await this._flushLock;
            } catch (e) {
                t$ && m.kg.error(e);
            } finally {
                this._debouncedFlush();
            }
        };
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && t5(this.session);
    }
    __init6() {
        this._onMutationHandler = (e) => {
            let t = e.length,
                r = this._options.mutationLimit,
                a = this._options.mutationBreadcrumbLimit,
                n = r && t > r;
            if (t > a || n) {
                let e = tv({
                    category: 'replay.mutations',
                    data: {
                        count: t,
                        limit: n
                    }
                });
                this._createCustomBreadcrumb(e);
            }
            return (
                !n ||
                (this.stop({
                    reason: 'mutationLimit',
                    forceFlush: 'session' === this.recordingMode
                }),
                !1)
            );
        };
    }
}
function rW(e, t) {
    return [...e, ...t].join(',');
}
let rY = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    rH = ['content-length', 'content-type', 'accept'],
    rx = !1,
    rK = (e) => new rk(e);
class rk {
    static __initStatic() {
        this.id = 'Replay';
    }
    constructor({ flushMinDelay: e = 5000, flushMaxDelay: t = 5500, minReplayDuration: r = 4999, maxReplayDuration: a = 3600000, stickySession: n = !0, useCompression: _ = !0, workerUrl: o, _experiments: E = {}, maskAllText: i = !0, maskAllInputs: c = !0, blockAllMedia: s = !0, mutationBreadcrumbLimit: l = 750, mutationLimit: I = 10000, slowClickTimeout: u = 7000, slowClickIgnoreSelectors: R = [], networkDetailAllowUrls: A = [], networkDetailDenyUrls: T = [], networkCaptureBodies: N = !0, networkRequestHeaders: d = [], networkResponseHeaders: f = [], mask: O = [], maskAttributes: L = ['title', 'placeholder'], unmask: p = [], block: h = [], unblock: D = [], ignore: S = [], maskFn: C, beforeAddRecordingEvent: P, beforeErrorSampling: g } = {}) {
        this.name = rk.id;
        let U = (function ({ mask: e, unmask: t, block: r, unblock: a, ignore: n }) {
            let _ = rW(e, ['.sentry-mask', '[data-sentry-mask]']);
            return {
                maskTextSelector: _,
                unmaskTextSelector: rW(t, []),
                blockSelector: rW(r, ['.sentry-block', '[data-sentry-block]', 'base[href="/"]']),
                unblockSelector: rW(a, []),
                ignoreSelector: rW(n, ['.sentry-ignore', '[data-sentry-ignore]', 'input[type="file"]'])
            };
        })({
            mask: O,
            unmask: p,
            block: h,
            unblock: D,
            ignore: S
        });
        if (
            ((this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: i,
                maskInputOptions: { password: !0 },
                maskTextFn: C,
                maskInputFn: C,
                maskAttributeFn: (e, t, r) =>
                    (function ({ el: e, key: t, maskAttributes: r, maskAllText: a, privacyOptions: n, value: _ }) {
                        return !a || (n.unmaskTextSelector && e.matches(n.unmaskTextSelector)) ? _ : r.includes(t) || ('value' === t && 'INPUT' === e.tagName && ['submit', 'button'].includes(e.getAttribute('type') || '')) ? _.replace(/[\S]/g, '*') : _;
                    })({
                        maskAttributes: L,
                        maskAllText: i,
                        privacyOptions: U,
                        key: e,
                        value: t,
                        el: r
                    }),
                ...U,
                slimDOMOptions: 'all',
                inlineStylesheet: !0,
                inlineImages: !1,
                collectFonts: !0,
                errorHandler: (e) => {
                    try {
                        e.__rrweb__ = !0;
                    } catch (e) {}
                }
            }),
            (this._initialOptions = {
                flushMinDelay: e,
                flushMaxDelay: t,
                minReplayDuration: Math.min(r, 15000),
                maxReplayDuration: Math.min(a, 3600000),
                stickySession: n,
                useCompression: _,
                workerUrl: o,
                blockAllMedia: s,
                maskAllInputs: c,
                maskAllText: i,
                mutationBreadcrumbLimit: l,
                mutationLimit: I,
                slowClickTimeout: u,
                slowClickIgnoreSelectors: R,
                networkDetailAllowUrls: A,
                networkDetailDenyUrls: T,
                networkCaptureBodies: N,
                networkRequestHeaders: rV(d),
                networkResponseHeaders: rV(f),
                beforeAddRecordingEvent: P,
                beforeErrorSampling: g,
                _experiments: E
            }),
            this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${rY}` : rY),
            this._isInitialized && (0, W.j)())
        )
            throw Error('Multiple Sentry Session Replay instances are not supported');
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return rx;
    }
    set _isInitialized(e) {
        rx = e;
    }
    afterAllSetup(e) {
        if (!!(0, W.j)() && !this._replay) this._setup(e), this._initialize(e);
    }
    start() {
        if (!!this._replay) this._replay.start();
    }
    startBuffering() {
        if (!!this._replay) this._replay.startBuffering();
    }
    stop() {
        return this._replay ? this._replay.stop({ forceFlush: 'session' === this._replay.recordingMode }) : Promise.resolve();
    }
    flush(e) {
        return this._replay ? (this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve())) : Promise.resolve();
    }
    getReplayId() {
        if (!!this._replay && !!this._replay.isEnabled()) return this._replay.getSessionId();
    }
    _initialize(e) {
        if (!!this._replay) this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling();
    }
    _setup(e) {
        let t = (function (e, t) {
            let r = t.getOptions(),
                a = {
                    sessionSampleRate: 0,
                    errorSampleRate: 0,
                    ...(0, U.Jr)(e)
                },
                n = (0, C.o)(r.replaysSessionSampleRate),
                _ = (0, C.o)(r.replaysOnErrorSampleRate);
            return (
                null == n &&
                    null == _ &&
                    (0, m.Cf)(() => {
                        console.warn('Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.');
                    }),
                null != n && (a.sessionSampleRate = n),
                null != _ && (a.errorSampleRate = _),
                a
            );
        })(this._initialOptions, e);
        this._replay = new rB({
            options: t,
            recordingOptions: this._recordingOptions
        });
    }
    _maybeLoadFromReplayCanvasIntegration(e) {
        try {
            let t = e.getIntegrationByName('ReplayCanvas');
            if (!t) return;
            this._replay._canvas = t.getOptions();
        } catch (e) {}
    }
}
rk.__initStatic();
function rV(e) {
    return [...rH, ...e.map((e) => e.toLowerCase())];
}
function rF() {
    let e = (0, O.s3)();
    return e && e.getIntegrationByName('Replay');
}
