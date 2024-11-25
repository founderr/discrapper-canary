let n, a, _, o, i, E;
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
    u,
    I,
    R,
    N,
    A,
    T = r(505676),
    d = r(507690),
    L = r(572299),
    f = r(263449),
    O = r(946471),
    p = r(233517),
    h = r(822578),
    S = r(696486),
    D = r(988097),
    C = r(820754),
    g = r(899517),
    U = r(202811),
    P = r(370336),
    M = r(467510),
    G = r(101284),
    m = r(622916),
    y = r(394798),
    b = r(886115),
    v = r(617726),
    w = r(928541),
    B = r(14588),
    W = r(26506),
    H = r(650093),
    x = r(501684),
    Y = r(157079),
    K = r(469359),
    V = r(393523);
let k = g.n,
    F = 'sentryReplaySession',
    X = 'Unable to send Replay';
function j(e, t) {
    return null != e ? e : t();
}
function $(e) {
    let t;
    let r = e[0],
        n = 1;
    for (; n < e.length; ) {
        let a = e[n],
            _ = e[n + 1];
        if (((n += 2), ('optionalAccess' === a || 'optionalCall' === a) && null == r)) return;
        'access' === a || 'optionalAccess' === a ? ((t = r), (r = _(r))) : ('call' === a || 'optionalCall' === a) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
((c = N || (N = {}))[(c.Document = 0)] = 'Document'), (c[(c.DocumentType = 1)] = 'DocumentType'), (c[(c.Element = 2)] = 'Element'), (c[(c.Text = 3)] = 'Text'), (c[(c.CDATA = 4)] = 'CDATA'), (c[(c.Comment = 5)] = 'Comment');
function q(e) {
    let t = $([e, 'optionalAccess', (e) => e.host]);
    return $([t, 'optionalAccess', (e) => e.shadowRoot]) === e;
}
function z(e) {
    return '[object ShadowRoot]' === Object.prototype.toString.call(e);
}
function J(e) {
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
                J(e.styleSheet) ||
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
function et({ isMasked: e, element: t, value: r, maskInputFn: n }) {
    let a = r || '';
    return e ? (n && (a = n(a, t)), '*'.repeat(a.length)) : a;
}
function er(e) {
    return e.toLowerCase();
}
function en(e) {
    return e.toUpperCase();
}
let ea = '__rrweb_original__';
function e_(e) {
    let t = e.type;
    return e.hasAttribute('data-rr-is-password') ? 'password' : t ? er(t) : null;
}
function eo(e, t, r) {
    return 'INPUT' === t && ('radio' === r || 'checkbox' === r) ? e.getAttribute('value') || '' : e.value;
}
function ei(e, t) {
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
let eE = {};
function ec(e) {
    let t = eE[e];
    if (t) return t;
    let r = window.document,
        n = window[e];
    if (r && 'function' == typeof r.createElement)
        try {
            let t = r.createElement('iframe');
            (t.hidden = !0), r.head.appendChild(t);
            let a = t.contentWindow;
            a && a[e] && (n = a[e]), r.head.removeChild(t);
        } catch (e) {}
    return (eE[e] = n.bind(window));
}
function es(...e) {
    return ec('setTimeout')(...e);
}
function el(...e) {
    return ec('clearTimeout')(...e);
}
let eu = 1,
    eI = RegExp('[^a-z0-9-_:]');
function eR() {
    return eu++;
}
let eN = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    eA = /^(?:[a-z+]+:)?\/\//i,
    eT = /^www\..*/i,
    ed = /^(data:)([^,]*),(.*)/i;
function eL(e, t) {
    return (e || '').replace(eN, (e, r, n, a, _, o) => {
        let i = n || _ || o,
            E = r || a || '';
        if (!i) return e;
        if (eA.test(i) || eT.test(i) || ed.test(i)) return `url(${E}${i}${E})`;
        if ('/' === i[0]) {
            var c;
            let e;
            return `url(${E}${((e = ''), (e = (e = (c = t).indexOf('//') > -1 ? c.split('/').slice(0, 3).join('/') : c.split('/')[0]).split('?')[0]) + i)}${E})`;
        }
        let s = t.split('/'),
            l = i.split('/');
        for (let e of (s.pop(), l)) {
            if ('.' !== e) '..' === e ? s.pop() : s.push(e);
        }
        return `url(${E}${s.join('/')}${E})`;
    });
}
let ef = /^[^ \t\n\r\u000c]+/,
    eO = /^[, \t\n\r\u000c]+/;
function ep(e, t) {
    if (!t || '' === t.trim()) return t;
    let r = e.createElement('a');
    return (r.href = t), r.href;
}
function eh() {
    let e = document.createElement('a');
    return (e.href = ''), e.href;
}
function eS(e, t, r, n, a, _) {
    if (!n) return n;
    if ('src' === r || ('href' === r && !('use' === t && '#' === n[0]))) return ep(e, n);
    if ('xlink:href' === r && '#' !== n[0]) return ep(e, n);
    if ('background' === r && ('table' === t || 'td' === t || 'th' === t)) return ep(e, n);
    else if ('srcset' === r)
        return (function (e, t) {
            if ('' === t.trim()) return t;
            let r = 0;
            function n(e) {
                let n;
                let a = e.exec(t.substring(r));
                return a ? ((n = a[0]), (r += n.length), n) : '';
            }
            let a = [];
            for (; n(eO), !(r >= t.length); ) {
                let _ = n(ef);
                if (',' === _.slice(-1)) (_ = ep(e, _.substring(0, _.length - 1))), a.push(_);
                else {
                    let n = '';
                    _ = ep(e, _);
                    let o = !1;
                    for (;;) {
                        let e = t.charAt(r);
                        if ('' === e) {
                            a.push((_ + n).trim());
                            break;
                        }
                        if (o) ')' === e && (o = !1);
                        else {
                            if (',' === e) {
                                (r += 1), a.push((_ + n).trim());
                                break;
                            }
                            '(' === e && (o = !0);
                        }
                        (n += e), (r += 1);
                    }
                }
            }
            return a.join(', ');
        })(e, n);
    else if ('style' === r) return eL(n, eh());
    else if ('object' === t && 'data' === r) return ep(e, n);
    return 'function' == typeof _ ? _(r, n, a) : n;
}
function eD(e, t, r) {
    return ('video' === e || 'audio' === e) && 'autoplay' === t;
}
function eC(e, t, r = 1 / 0, n = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : eC(e.parentNode, t, r, n + 1);
}
function eg(e, t) {
    return (r) => {
        if (null === r) return !1;
        try {
            if (e) {
                if ('string' == typeof e) {
                    if (r.matches(`.${e}`)) return !0;
                } else if (
                    (function (e, t) {
                        for (let r = e.classList.length; r--; ) {
                            let n = e.classList[r];
                            if (t.test(n)) return !0;
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
function eU(e, t, r, n, a, _) {
    try {
        let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (null === o) return !1;
        if ('INPUT' === o.tagName) {
            let e = o.getAttribute('autocomplete');
            if (['current-password', 'new-password', 'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-csc'].includes(e)) return !0;
        }
        let i = -1,
            E = -1;
        if (_) {
            if ((E = eC(o, eg(n, a))) < 0) return !0;
            i = eC(o, eg(t, r), E >= 0 ? E : 1 / 0);
        } else {
            if ((i = eC(o, eg(t, r))) < 0) return !1;
            E = eC(o, eg(n, a), i >= 0 ? i : 1 / 0);
        }
        return i >= 0 ? !(E >= 0) || i <= E : !(E >= 0) && !!_;
    } catch (e) {}
    return !!_;
}
function eP(e) {
    return null == e ? '' : e.toLowerCase();
}
function eM(e, t) {
    let r;
    let { doc: _, mirror: o, blockClass: i, blockSelector: E, unblockSelector: c, maskAllText: s, maskTextClass: l, unmaskTextClass: u, maskTextSelector: I, unmaskTextSelector: R, skipChild: A = !1, inlineStylesheet: T = !0, maskInputOptions: d = {}, maskAttributeFn: L, maskTextFn: f, maskInputFn: O, slimDOMOptions: p, dataURLOptions: h = {}, inlineImages: S = !1, recordCanvas: D = !1, onSerialize: C, onIframeLoad: g, iframeLoadTimeout: U = 5000, onStylesheetLoad: P, stylesheetLoadTimeout: M = 5000, keepIframeSrcFn: G = () => !1, newlyAddedElement: m = !1 } = t,
        { preserveWhiteSpace: y = !0 } = t,
        b = (function (e, t) {
            let { doc: r, mirror: _, blockClass: o, blockSelector: i, unblockSelector: E, maskAllText: c, maskAttributeFn: s, maskTextClass: l, unmaskTextClass: u, maskTextSelector: I, unmaskTextSelector: R, inlineStylesheet: A, maskInputOptions: T = {}, maskTextFn: d, maskInputFn: L, dataURLOptions: f = {}, inlineImages: O, recordCanvas: p, keepIframeSrcFn: h, newlyAddedElement: S = !1 } = t,
                D = (function (e, t) {
                    if (!t.hasNode(e)) return;
                    let r = t.getId(e);
                    return 1 === r ? void 0 : r;
                })(r, _);
            switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    if ('CSS1Compat' !== e.compatMode)
                        return {
                            type: N.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        };
                    return {
                        type: N.Document,
                        childNodes: []
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: N.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: D
                    };
                case e.ELEMENT_NODE:
                    return (function (e, t) {
                        var r;
                        let _;
                        let { doc: o, blockClass: i, blockSelector: E, unblockSelector: c, inlineStylesheet: s, maskInputOptions: l = {}, maskAttributeFn: u, maskInputFn: I, dataURLOptions: R = {}, inlineImages: A, recordCanvas: T, keepIframeSrcFn: d, newlyAddedElement: L = !1, rootId: f, maskAllText: O, maskTextClass: p, unmaskTextClass: h, maskTextSelector: S, unmaskTextSelector: D } = t,
                            C = (function (e, t, r, n) {
                                try {
                                    if (n && e.matches(n)) return !1;
                                    if ('string' == typeof t) {
                                        if (e.classList.contains(t)) return !0;
                                    } else
                                        for (let r = e.classList.length; r--; ) {
                                            let n = e.classList[r];
                                            if (t.test(n)) return !0;
                                        }
                                    if (r) return e.matches(r);
                                } catch (e) {}
                                return !1;
                            })(e, i, E, c),
                            g = (function (e) {
                                if (e instanceof HTMLFormElement) return 'form';
                                let t = er(e.tagName);
                                return eI.test(t) ? 'div' : t;
                            })(e),
                            U = {},
                            P = e.attributes.length;
                        for (let t = 0; t < P; t++) {
                            let r = e.attributes[t];
                            r.name && !eD(g, r.name, r.value) && (U[r.name] = eS(o, g, er(r.name), r.value, e, u));
                        }
                        if ('link' === g && s) {
                            let t = Array.from(o.styleSheets).find((t) => t.href === e.href),
                                r = null;
                            t && (r = J(t)), r && (delete U.rel, delete U.href, (U._cssText = eL(r, t.href)));
                        }
                        if ('style' === g && e.sheet && !(e.innerText || e.textContent || '').trim().length) {
                            let t = J(e.sheet);
                            t && (U._cssText = eL(t, eh()));
                        }
                        if ('input' === g || 'textarea' === g || 'select' === g || 'option' === g) {
                            let t = e_(e),
                                r = eo(e, en(g), t),
                                n = e.checked;
                            if ('submit' !== t && 'button' !== t && r) {
                                let n = eU(
                                    e,
                                    p,
                                    S,
                                    h,
                                    D,
                                    ee({
                                        type: t,
                                        tagName: en(g),
                                        maskInputOptions: l
                                    })
                                );
                                U.value = et({
                                    isMasked: n,
                                    element: e,
                                    value: r,
                                    maskInputFn: I
                                });
                            }
                            n && (U.checked = n);
                        }
                        if (('option' === g && (e.selected && !l.select ? (U.selected = !0) : delete U.selected), 'canvas' === g && T)) {
                            if ('2d' === e.__context)
                                !(function (e) {
                                    let t = e.getContext('2d');
                                    if (!t) return !0;
                                    for (let r = 0; r < e.width; r += 50)
                                        for (let n = 0; n < e.height; n += 50) {
                                            let a = t.getImageData;
                                            if (new Uint32Array((ea in a ? a[ea] : a).call(t, r, n, Math.min(50, e.width - r), Math.min(50, e.height - n)).data.buffer).some((e) => 0 !== e)) return !1;
                                        }
                                    return !0;
                                })(e) && (U.rr_dataURL = e.toDataURL(R.type, R.quality));
                            else if (!('__context' in e)) {
                                let t = e.toDataURL(R.type, R.quality),
                                    r = document.createElement('canvas');
                                (r.width = e.width), (r.height = e.height), t !== r.toDataURL(R.type, R.quality) && (U.rr_dataURL = t);
                            }
                        }
                        if ('img' === g && A) {
                            !n && (a = (n = o.createElement('canvas')).getContext('2d'));
                            let t = e.crossOrigin;
                            e.crossOrigin = 'anonymous';
                            let r = () => {
                                e.removeEventListener('load', r);
                                try {
                                    (n.width = e.naturalWidth), (n.height = e.naturalHeight), a.drawImage(e, 0, 0), (U.rr_dataURL = n.toDataURL(R.type, R.quality));
                                } catch (t) {
                                    console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`);
                                }
                                t ? (U.crossOrigin = t) : e.removeAttribute('crossorigin');
                            };
                            e.complete && 0 !== e.naturalWidth ? r() : e.addEventListener('load', r);
                        }
                        if ((('audio' === g || 'video' === g) && ((U.rr_mediaState = e.paused ? 'paused' : 'played'), (U.rr_mediaCurrentTime = e.currentTime)), !L && (e.scrollLeft && (U.rr_scrollLeft = e.scrollLeft), e.scrollTop && (U.rr_scrollTop = e.scrollTop)), C)) {
                            let { width: t, height: r } = e.getBoundingClientRect();
                            U = {
                                class: U.class,
                                rr_width: `${t}px`,
                                rr_height: `${r}px`
                            };
                        }
                        'iframe' === g && !d(U.src) && (!C && !e.contentDocument && (U.rr_src = U.src), delete U.src);
                        try {
                            customElements.get(g) && (_ = !0);
                        } catch (e) {}
                        return {
                            type: N.Element,
                            tagName: g,
                            attributes: U,
                            childNodes: [],
                            isSVG: !!('svg' === (r = e).tagName || r.ownerSVGElement) || void 0,
                            needBlock: C,
                            rootId: f,
                            isCustom: _
                        };
                    })(e, {
                        doc: r,
                        blockClass: o,
                        blockSelector: i,
                        unblockSelector: E,
                        inlineStylesheet: A,
                        maskAttributeFn: s,
                        maskInputOptions: T,
                        maskInputFn: L,
                        dataURLOptions: f,
                        inlineImages: O,
                        recordCanvas: p,
                        keepIframeSrcFn: h,
                        newlyAddedElement: S,
                        rootId: D,
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: u,
                        maskTextSelector: I,
                        unmaskTextSelector: R
                    });
                case e.TEXT_NODE:
                    return (function (e, t) {
                        let { maskAllText: r, maskTextClass: n, unmaskTextClass: a, maskTextSelector: _, unmaskTextSelector: o, maskTextFn: i, maskInputOptions: E, maskInputFn: c, rootId: s } = t,
                            l = e.parentNode && e.parentNode.tagName,
                            u = e.textContent,
                            I = 'STYLE' === l || void 0,
                            R = 'SCRIPT' === l || void 0,
                            A = 'TEXTAREA' === l || void 0;
                        if (I && u) {
                            try {
                                e.nextSibling || e.previousSibling || ($([e, 'access', (e) => e.parentNode, 'access', (e) => e.sheet, 'optionalAccess', (e) => e.cssRules]) && (u = J(e.parentNode.sheet)));
                            } catch (t) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e);
                            }
                            u = eL(u, eh());
                        }
                        R && (u = 'SCRIPT_PLACEHOLDER');
                        let T = eU(e, n, _, a, o, r);
                        return (
                            !I && !R && !A && u && T && (u = i ? i(u, e.parentElement) : u.replace(/[\S]/g, '*')),
                            A && u && (E.textarea || T) && (u = c ? c(u, e.parentNode) : u.replace(/[\S]/g, '*')),
                            'OPTION' === l &&
                                u &&
                                (u = et({
                                    isMasked: eU(
                                        e,
                                        n,
                                        _,
                                        a,
                                        o,
                                        ee({
                                            type: null,
                                            tagName: l,
                                            maskInputOptions: E
                                        })
                                    ),
                                    element: e,
                                    value: u,
                                    maskInputFn: c
                                })),
                            {
                                type: N.Text,
                                textContent: u || '',
                                isStyle: I,
                                rootId: s
                            }
                        );
                    })(e, {
                        maskAllText: c,
                        maskTextClass: l,
                        unmaskTextClass: u,
                        maskTextSelector: I,
                        unmaskTextSelector: R,
                        maskTextFn: d,
                        maskInputOptions: T,
                        maskInputFn: L,
                        rootId: D
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: N.CDATA,
                        textContent: '',
                        rootId: D
                    };
                case e.COMMENT_NODE:
                    return {
                        type: N.Comment,
                        textContent: e.textContent || '',
                        rootId: D
                    };
                default:
                    return !1;
            }
        })(e, {
            doc: _,
            mirror: o,
            blockClass: i,
            blockSelector: E,
            maskAllText: s,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: I,
            unmaskTextSelector: R,
            inlineStylesheet: T,
            maskInputOptions: d,
            maskAttributeFn: L,
            maskTextFn: f,
            maskInputFn: O,
            dataURLOptions: h,
            inlineImages: S,
            recordCanvas: D,
            keepIframeSrcFn: G,
            newlyAddedElement: m
        });
    if (!b) return console.warn(e, 'not serialized'), null;
    r = o.hasNode(e)
        ? o.getId(e)
        : !(function (e, t) {
                if (t.comment && e.type === N.Comment) return !0;
                if (e.type === N.Element) {
                    if (t.script && ('script' === e.tagName || ('link' === e.tagName && ('preload' === e.attributes.rel || 'modulepreload' === e.attributes.rel) && 'script' === e.attributes.as) || ('link' === e.tagName && 'prefetch' === e.attributes.rel && 'string' == typeof e.attributes.href && 'js' === ei(e.attributes.href)))) return !0;
                    if (t.headFavicon && (('link' === e.tagName && 'shortcut icon' === e.attributes.rel) || ('meta' === e.tagName && (eP(e.attributes.name).match(/^msapplication-tile(image|color)$/) || 'application-name' === eP(e.attributes.name) || 'icon' === eP(e.attributes.rel) || 'apple-touch-icon' === eP(e.attributes.rel) || 'shortcut icon' === eP(e.attributes.rel))))) return !0;
                    else if ('meta' === e.tagName) {
                        if (t.headMetaDescKeywords && eP(e.attributes.name).match(/^description|keywords$/)) return !0;
                        if (t.headMetaSocial && (eP(e.attributes.property).match(/^(og|twitter|fb):/) || eP(e.attributes.name).match(/^(og|twitter):/) || 'pinterest' === eP(e.attributes.name))) return !0;
                        else if (t.headMetaRobots && ('robots' === eP(e.attributes.name) || 'googlebot' === eP(e.attributes.name) || 'bingbot' === eP(e.attributes.name))) return !0;
                        else if (t.headMetaHttpEquiv && void 0 !== e.attributes['http-equiv']) return !0;
                        else if (t.headMetaAuthorship && ('author' === eP(e.attributes.name) || 'generator' === eP(e.attributes.name) || 'framework' === eP(e.attributes.name) || 'publisher' === eP(e.attributes.name) || 'progid' === eP(e.attributes.name) || eP(e.attributes.property).match(/^article:/) || eP(e.attributes.property).match(/^product:/))) return !0;
                        else if (t.headMetaVerification && ('google-site-verification' === eP(e.attributes.name) || 'yandex-verification' === eP(e.attributes.name) || 'csrf-token' === eP(e.attributes.name) || 'p:domain_verify' === eP(e.attributes.name) || 'verify-v1' === eP(e.attributes.name) || 'verification' === eP(e.attributes.name) || 'shopify-checkout-api-token' === eP(e.attributes.name))) return !0;
                    }
                }
                return !1;
            })(b, p) &&
            (y || b.type !== N.Text || b.isStyle || b.textContent.replace(/^\s+|\s+$/gm, '').length)
          ? eR()
          : -2;
    let v = Object.assign(b, { id: r });
    if ((o.add(e, v), -2 === r)) return null;
    C && C(e);
    let w = !A;
    if (v.type === N.Element) {
        (w = w && !v.needBlock), delete v.needBlock;
        let t = e.shadowRoot;
        t && z(t) && (v.isShadowHost = !0);
    }
    if ((v.type === N.Document || v.type === N.Element) && w) {
        var B;
        p.headWhitespace && v.type === N.Element && 'head' === v.tagName && (y = !1);
        let t = {
            doc: _,
            mirror: o,
            blockClass: i,
            blockSelector: E,
            maskAllText: s,
            unblockSelector: c,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: I,
            unmaskTextSelector: R,
            skipChild: A,
            inlineStylesheet: T,
            maskInputOptions: d,
            maskAttributeFn: L,
            maskTextFn: f,
            maskInputFn: O,
            slimDOMOptions: p,
            dataURLOptions: h,
            inlineImages: S,
            recordCanvas: D,
            preserveWhiteSpace: y,
            onSerialize: C,
            onIframeLoad: g,
            iframeLoadTimeout: U,
            onStylesheetLoad: P,
            stylesheetLoadTimeout: M,
            keepIframeSrcFn: G
        };
        for (let r of Array.from(e.childNodes)) {
            let e = eM(r, t);
            e && v.childNodes.push(e);
        }
        if ((B = e).nodeType === B.ELEMENT_NODE && e.shadowRoot)
            for (let r of Array.from(e.shadowRoot.childNodes)) {
                let n = eM(r, t);
                n && (z(e.shadowRoot) && (n.isShadow = !0), v.childNodes.push(n));
            }
    }
    return (
        e.parentNode && q(e.parentNode) && z(e.parentNode) && (v.isShadow = !0),
        v.type === N.Element &&
            'iframe' === v.tagName &&
            !(function (e, t, r) {
                let n;
                let a = e.contentWindow;
                if (!a) return;
                let _ = !1;
                try {
                    n = a.document.readyState;
                } catch (e) {
                    return;
                }
                if ('complete' !== n) {
                    let n = es(() => {
                        !_ && (t(), (_ = !0));
                    }, r);
                    e.addEventListener('load', () => {
                        el(n), (_ = !0), t();
                    });
                    return;
                }
                let o = 'about:blank';
                if (a.location.href !== o || e.src === o || '' === e.src) return es(t, 0), e.addEventListener('load', t);
                e.addEventListener('load', t);
            })(
                e,
                () => {
                    let t = e.contentDocument;
                    if (t && g) {
                        let r = eM(t, {
                            doc: t,
                            mirror: o,
                            blockClass: i,
                            blockSelector: E,
                            unblockSelector: c,
                            maskAllText: s,
                            maskTextClass: l,
                            unmaskTextClass: u,
                            maskTextSelector: I,
                            unmaskTextSelector: R,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: d,
                            maskAttributeFn: L,
                            maskTextFn: f,
                            maskInputFn: O,
                            slimDOMOptions: p,
                            dataURLOptions: h,
                            inlineImages: S,
                            recordCanvas: D,
                            preserveWhiteSpace: y,
                            onSerialize: C,
                            onIframeLoad: g,
                            iframeLoadTimeout: U,
                            onStylesheetLoad: P,
                            stylesheetLoadTimeout: M,
                            keepIframeSrcFn: G
                        });
                        r && g(e, r);
                    }
                },
                U
            ),
        v.type === N.Element &&
            'link' === v.tagName &&
            'string' == typeof v.attributes.rel &&
            ('stylesheet' === v.attributes.rel || ('preload' === v.attributes.rel && 'string' == typeof v.attributes.href && 'css' === ei(v.attributes.href))) &&
            !(function (e, t, r) {
                let n,
                    a = !1;
                try {
                    n = e.sheet;
                } catch (e) {
                    return;
                }
                if (n) return;
                let _ = es(() => {
                    !a && (t(), (a = !0));
                }, r);
                e.addEventListener('load', () => {
                    el(_), (a = !0), t();
                });
            })(
                e,
                () => {
                    if (P) {
                        let t = eM(e, {
                            doc: _,
                            mirror: o,
                            blockClass: i,
                            blockSelector: E,
                            unblockSelector: c,
                            maskAllText: s,
                            maskTextClass: l,
                            unmaskTextClass: u,
                            maskTextSelector: I,
                            unmaskTextSelector: R,
                            skipChild: !1,
                            inlineStylesheet: T,
                            maskInputOptions: d,
                            maskAttributeFn: L,
                            maskTextFn: f,
                            maskInputFn: O,
                            slimDOMOptions: p,
                            dataURLOptions: h,
                            inlineImages: S,
                            recordCanvas: D,
                            preserveWhiteSpace: y,
                            onSerialize: C,
                            onIframeLoad: g,
                            iframeLoadTimeout: U,
                            onStylesheetLoad: P,
                            stylesheetLoadTimeout: M,
                            keepIframeSrcFn: G
                        });
                        t && P(e, t);
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
        n = 1;
    for (; n < e.length; ) {
        let a = e[n],
            _ = e[n + 1];
        if (((n += 2), ('optionalAccess' === a || 'optionalCall' === a) && null == r)) return;
        'access' === a || 'optionalAccess' === a ? ((t = r), (r = _(r))) : ('call' === a || 'optionalCall' === a) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
function em(e, t, r = document) {
    let n = {
        capture: !0,
        passive: !0
    };
    return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
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
    let n = null,
        a = 0;
    return function (..._) {
        let o = Date.now();
        !a && !1 === r.leading && (a = o);
        let i = t - (o - a),
            E = this;
        i <= 0 || i > t
            ? (n &&
                  ((function (...e) {
                      eQ('clearTimeout')(...e);
                  })(n),
                  (n = null)),
              (a = o),
              e.apply(E, _))
            : !n &&
              !1 !== r.trailing &&
              (n = eZ(() => {
                  (a = !1 === r.leading ? 0 : Date.now()), (n = null), e.apply(E, _);
              }, i));
    };
}
'undefined' != typeof window && window.Proxy && window.Reflect && (eb = new Proxy(eb, { get: (e, t, r) => ('map' === t && console.error(ey), Reflect.get(e, t, r)) }));
function ew(e, t, r) {
    try {
        if (!(t in e)) return () => {};
        let n = e[t],
            a = r(n);
        return (
            'function' == typeof a &&
                ((a.prototype = a.prototype || {}),
                Object.defineProperties(a, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: n
                    }
                })),
            (e[t] = a),
            () => {
                e[t] = n;
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
function eH() {
    return window.innerHeight || (document.documentElement && document.documentElement.clientHeight) || (document.body && document.body.clientHeight);
}
function ex() {
    return window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || (document.body && document.body.clientWidth);
}
function eY(e) {
    return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
}
function eK(e, t, r, n, a) {
    if (!e) return !1;
    let _ = eY(e);
    if (!_) return !1;
    let o = eg(t, r);
    if (!a) {
        let e = n && _.matches(n);
        return o(_) && !e;
    }
    let i = eC(_, o),
        E = -1;
    return !(i < 0) && (n && (E = eC(_, eg(null, n))), (!!(i > -1) && !!(E < 0)) || i < E);
}
!/[1-9][0-9]{12}/.test(Date.now().toString()) && (eB = () => new Date().getTime());
function eV(e, t) {
    return -2 === t.getId(e);
}
function ek(e) {
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
        return (0, T.h)(this.styleIDMap.get(e), () => -1);
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
function ez(e) {
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
let eJ = {};
function eQ(e) {
    let t = eJ[e];
    if (t) return t;
    let r = window.document,
        n = window[e];
    if (r && 'function' == typeof r.createElement)
        try {
            let t = r.createElement('iframe');
            (t.hidden = !0), r.head.appendChild(t);
            let a = t.contentWindow;
            a && a[e] && (n = a[e]), r.head.removeChild(t);
        } catch (e) {}
    return (eJ[e] = n.bind(window));
}
function eZ(...e) {
    return eQ('setTimeout')(...e);
}
var e0 = (((s = e0 || {})[(s.DomContentLoaded = 0)] = 'DomContentLoaded'), (s[(s.Load = 1)] = 'Load'), (s[(s.FullSnapshot = 2)] = 'FullSnapshot'), (s[(s.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'), (s[(s.Meta = 4)] = 'Meta'), (s[(s.Custom = 5)] = 'Custom'), (s[(s.Plugin = 6)] = 'Plugin'), s);
var e1 = (((l = e1 || {})[(l.Mutation = 0)] = 'Mutation'), (l[(l.MouseMove = 1)] = 'MouseMove'), (l[(l.MouseInteraction = 2)] = 'MouseInteraction'), (l[(l.Scroll = 3)] = 'Scroll'), (l[(l.ViewportResize = 4)] = 'ViewportResize'), (l[(l.Input = 5)] = 'Input'), (l[(l.TouchMove = 6)] = 'TouchMove'), (l[(l.MediaInteraction = 7)] = 'MediaInteraction'), (l[(l.StyleSheetRule = 8)] = 'StyleSheetRule'), (l[(l.CanvasMutation = 9)] = 'CanvasMutation'), (l[(l.Font = 10)] = 'Font'), (l[(l.Log = 11)] = 'Log'), (l[(l.Drag = 12)] = 'Drag'), (l[(l.StyleDeclaration = 13)] = 'StyleDeclaration'), (l[(l.Selection = 14)] = 'Selection'), (l[(l.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet'), (l[(l.CustomElement = 16)] = 'CustomElement'), l);
var e2 = (((u = e2 || {})[(u.MouseUp = 0)] = 'MouseUp'), (u[(u.MouseDown = 1)] = 'MouseDown'), (u[(u.Click = 2)] = 'Click'), (u[(u.ContextMenu = 3)] = 'ContextMenu'), (u[(u.DblClick = 4)] = 'DblClick'), (u[(u.Focus = 5)] = 'Focus'), (u[(u.Blur = 6)] = 'Blur'), (u[(u.TouchStart = 7)] = 'TouchStart'), (u[(u.TouchMove_Departed = 8)] = 'TouchMove_Departed'), (u[(u.TouchEnd = 9)] = 'TouchEnd'), (u[(u.TouchCancel = 10)] = 'TouchCancel'), u);
var e3 = (((I = e3 || {})[(I.Mouse = 0)] = 'Mouse'), (I[(I.Pen = 1)] = 'Pen'), (I[(I.Touch = 2)] = 'Touch'), I);
function e5(e) {
    return '__ln' in e;
}
class e6 {
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
                        n = 1;
                    for (; n < e.length; ) {
                        let a = e[n],
                            _ = e[n + 1];
                        if (((n += 2), ('optionalAccess' === a || 'optionalCall' === a) && null == r)) return;
                        'access' === a || 'optionalAccess' === a ? ((t = r), (r = _(r))) : ('call' === a || 'optionalCall' === a) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
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
let e4 = (e, t) => `${e}@${t}`;
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
                    r = new e6(),
                    n = (e) => {
                        let t = e,
                            r = -2;
                        for (; -2 === r; ) r = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return r;
                    },
                    a = (a) => {
                        if (!a.parentNode || !ez(a)) return;
                        let _ = q(a.parentNode) ? this.mirror.getId(eq(a)) : this.mirror.getId(a.parentNode),
                            o = n(a);
                        if (-1 === _ || -1 === o) return r.addNode(a);
                        let i = eM(a, {
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
                                eF(e, this.mirror) && this.iframeManager.addIframe(e), eX(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), ej(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, this.doc);
                            },
                            onIframeLoad: (e, t) => {
                                this.iframeManager.attachIframe(e, t), e.contentWindow && this.canvasManager.addWindow(e.contentWindow), this.shadowDomManager.observeAttachShadow(e);
                            },
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t);
                            }
                        });
                        i &&
                            (e.push({
                                parentId: _,
                                nextId: o,
                                node: i
                            }),
                            t.add(i.id));
                    };
                for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let e of this.movedSet) {
                    if (!e9(this.removes, e, this.mirror) || !!this.movedSet.has(e.parentNode)) a(e);
                }
                for (let e of this.addedSet) te(this.droppedSet, e) || e9(this.removes, e, this.mirror) ? (te(this.movedSet, e) ? a(e) : this.droppedSet.add(e)) : a(e);
                let _ = null;
                for (; r.length; ) {
                    let e = null;
                    if (_) {
                        let t = this.mirror.getId(_.value.parentNode),
                            r = n(_.value);
                        -1 !== t && -1 !== r && (e = _);
                    }
                    if (!e) {
                        let t = r.tail;
                        for (; t; ) {
                            let r = t;
                            if (((t = t.previous), r)) {
                                let t = this.mirror.getId(r.value.parentNode);
                                if (-1 === n(r.value)) continue;
                                if (-1 !== t) {
                                    e = r;
                                    break;
                                } else {
                                    let t = r.value;
                                    if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let n = t.parentNode.host;
                                        if (-1 !== this.mirror.getId(n)) {
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
                    (_ = e.previous), r.removeNode(e.value), a(e.value);
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
                                    n = JSON.stringify(e._unchangedStyles);
                                r.length < t.style.length && (r + n).split('var(').length === t.style.split('var(').length && (t.style = e.styleDiff);
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
                if (!eV(e.target, this.mirror))
                    switch (e.type) {
                        case 'characterData': {
                            let t = e.target.textContent;
                            !eK(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                                t !== e.oldValue &&
                                this.texts.push({
                                    value: eU(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? (this.maskTextFn ? this.maskTextFn(t, eY(e.target)) : t.replace(/[\S]/g, '*')) : t,
                                    node: e.target
                                });
                            break;
                        }
                        case 'attributes': {
                            let t = e.target,
                                r = e.attributeName,
                                n = e.target.getAttribute(r);
                            if ('value' === r) {
                                let r = e_(t),
                                    a = t.tagName;
                                n = eo(t, a, r);
                                let _ = ee({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: a,
                                    type: r
                                });
                                n = et({
                                    isMasked: eU(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, _),
                                    element: t,
                                    value: n,
                                    maskInputFn: this.maskInputFn
                                });
                            }
                            if (eK(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || n === e.oldValue) return;
                            let a = this.attributeMap.get(e.target);
                            if ('IFRAME' === t.tagName && 'src' === r && !this.keepIframeSrcFn(n)) {
                                if (t.contentDocument) return;
                                r = 'rr_src';
                            }
                            if (
                                (!a &&
                                    ((a = {
                                        node: e.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {}
                                    }),
                                    this.attributes.push(a),
                                    this.attributeMap.set(e.target, a)),
                                'type' === r && 'INPUT' === t.tagName && 'password' === (e.oldValue || '').toLowerCase() && t.setAttribute('data-rr-is-password', 'true'),
                                !eD(t.tagName, r) && ((a.attributes[r] = eS(this.doc, er(t.tagName), er(r), n, t, this.maskAttributeFn)), 'style' === r))
                            ) {
                                if (!this.unattachedDoc)
                                    try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument();
                                    } catch (e) {
                                        this.unattachedDoc = this.doc;
                                    }
                                let r = this.unattachedDoc.createElement('span');
                                for (let n of (e.oldValue && r.setAttribute('style', e.oldValue), Array.from(t.style))) {
                                    let e = t.style.getPropertyValue(n),
                                        _ = t.style.getPropertyPriority(n);
                                    e !== r.style.getPropertyValue(n) || _ !== r.style.getPropertyPriority(n) ? ('' === _ ? (a.styleDiff[n] = e) : (a.styleDiff[n] = [e, _])) : (a._unchangedStyles[n] = [e, _]);
                                }
                                for (let e of Array.from(r.style)) '' === t.style.getPropertyValue(e) && (a.styleDiff[e] = !1);
                            }
                            break;
                        }
                        case 'childList':
                            if (eK(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                            e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                                e.removedNodes.forEach((t) => {
                                    var r;
                                    let n = this.mirror.getId(t),
                                        a = q(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                    if (!(eK(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || eV(t, this.mirror)) && ((r = t), -1 !== this.mirror.getId(r)))
                                        this.addedSet.has(t)
                                            ? (e7(this.addedSet, t), this.droppedSet.add(t))
                                            : (this.addedSet.has(e.target) && -1 === n) ||
                                              (function e(t, r) {
                                                  if (q(t)) return !1;
                                                  let n = r.getId(t);
                                                  return !r.has(n) || ((!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, r)));
                                              })(e.target, this.mirror) ||
                                              (this.movedSet.has(t) && this.movedMap[e4(n, a)]
                                                  ? e7(this.movedSet, t)
                                                  : this.removes.push({
                                                        parentId: a,
                                                        id: n,
                                                        isShadow: !!(q(e.target) && z(e.target)) || void 0
                                                    })),
                                            this.mapRemoves.push(t);
                                });
                    }
            }),
            (this.genAdds = (e, t) => {
                if (!this.processedNodeManager.inOtherBuffer(e, this)) {
                    if (!(this.addedSet.has(e) || this.movedSet.has(e))) {
                        if (this.mirror.hasNode(e)) {
                            if (eV(e, this.mirror)) return;
                            this.movedSet.add(e);
                            let r = null;
                            t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)), r && -1 !== r && (this.movedMap[e4(this.mirror.getId(e), r)] = !0);
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
        (function e(t, r, n) {
            let { parentNode: a } = r;
            if (!a) return !1;
            let _ = n.getId(a);
            return !!t.some((e) => e.id === _) || e(t, a, n);
        })(e, t, r)
    );
}
function te(e, t) {
    return (
        0 !== e.size &&
        (function e(t, r) {
            let { parentNode: n } = r;
            return !!n && (!!t.has(n) || e(t, n));
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
        n = 1;
    for (; n < e.length; ) {
        let a = e[n],
            _ = e[n + 1];
        if (((n += 2), ('optionalAccess' === a || 'optionalCall' === a) && null == r)) return;
        'access' === a || 'optionalAccess' === a ? ((t = r), (r = _(r))) : ('call' === a || 'optionalCall' === a) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
let tn = [];
function ta(e) {
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
    tn.push(r), r.init(e);
    let n = window.MutationObserver || window.__rrMutationObserver,
        a = tr([window, 'optionalAccess', (e) => e.Zone, 'optionalAccess', (e) => e.__symbol__, 'optionalCall', (e) => e('MutationObserver')]);
    a && window[a] && (n = window[a]);
    let _ = new n(
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
function to({ scrollCb: e, doc: t, mirror: r, blockClass: n, blockSelector: a, unblockSelector: _, sampling: o }) {
    return em(
        'scroll',
        tt(
            ev(
                tt((o) => {
                    let i = ta(o);
                    if (!i || eK(i, n, a, _, !0)) return;
                    let E = r.getId(i);
                    if (i === t && t.defaultView) {
                        let r = eW(t.defaultView);
                        e({
                            id: E,
                            x: r.left,
                            y: r.top
                        });
                    } else
                        e({
                            id: E,
                            x: i.scrollLeft,
                            y: i.scrollTop
                        });
                }),
                o.scroll || 100
            )
        ),
        t
    );
}
let ti = ['INPUT', 'TEXTAREA', 'SELECT'],
    tE = new WeakMap();
function tc(e) {
    return (function (e, t) {
        if ((tI('CSSGroupingRule') && e.parentRule instanceof CSSGroupingRule) || (tI('CSSMediaRule') && e.parentRule instanceof CSSMediaRule) || (tI('CSSSupportsRule') && e.parentRule instanceof CSSSupportsRule) || (tI('CSSConditionRule') && e.parentRule instanceof CSSConditionRule)) {
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
    let n, a;
    return e
        ? (e.ownerNode ? (n = t.getId(e.ownerNode)) : (a = r.getId(e)),
          {
              styleId: a,
              id: n
          })
        : {};
}
function tl({ mirror: e, stylesheetManager: t }, r) {
    let n = null;
    n = '#document' === r.nodeName ? e.getId(r) : e.getId(r.host);
    let a = '#document' === r.nodeName ? tr([r, 'access', (e) => e.defaultView, 'optionalAccess', (e) => e.Document]) : tr([r, 'access', (e) => e.ownerDocument, 'optionalAccess', (e) => e.defaultView, 'optionalAccess', (e) => e.ShadowRoot]),
        _ = tr([a, 'optionalAccess', (e) => e.prototype]) ? Object.getOwnPropertyDescriptor(tr([a, 'optionalAccess', (e) => e.prototype]), 'adoptedStyleSheets') : void 0;
    return null !== n && -1 !== n && a && _
        ? (Object.defineProperty(r, 'adoptedStyleSheets', {
              configurable: _.configurable,
              enumerable: _.enumerable,
              get() {
                  return tr([_, 'access', (e) => e.get, 'optionalAccess', (e) => e.call, 'call', (e) => e(this)]);
              },
              set(e) {
                  let r = tr([_, 'access', (e) => e.set, 'optionalAccess', (e) => e.call, 'call', (t) => t(this, e)]);
                  if (null !== n && -1 !== n)
                      try {
                          t.adoptStyleSheets(e, n);
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
function tu(e, t = {}) {
    let r;
    let n = e.doc.defaultView;
    if (!n) return () => {};
    e.recordDOM && (r = t_(e, e.doc));
    let a = (function ({ mousemoveCb: e, sampling: t, doc: r, mirror: n }) {
            let a;
            if (!1 === t.mousemove) return () => {};
            let _ = 'number' == typeof t.mousemove ? t.mousemove : 50,
                o = 'number' == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                i = [],
                E = ev(
                    tt((t) => {
                        let r = Date.now() - a;
                        e(
                            i.map((e) => ((e.timeOffset -= r), e)),
                            t
                        ),
                            (i = []),
                            (a = null);
                    }),
                    o
                ),
                c = tt(
                    ev(
                        tt((e) => {
                            let t = ta(e),
                                { clientX: r, clientY: _ } = ek(e) ? e.changedTouches[0] : e;
                            !a && (a = eB()),
                                i.push({
                                    x: r,
                                    y: _,
                                    id: n.getId(t),
                                    timeOffset: eB() - a
                                }),
                                E('undefined' != typeof DragEvent && e instanceof DragEvent ? e1.Drag : e instanceof MouseEvent ? e1.MouseMove : e1.TouchMove);
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
        _ = (function ({ mouseInteractionCb: e, doc: t, mirror: r, blockClass: n, blockSelector: a, unblockSelector: _, sampling: o }) {
            if (!1 === o.mouseInteraction) return () => {};
            let i = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                E = [],
                c = null,
                s = (t) => (o) => {
                    let i = ta(o);
                    if (eK(i, n, a, _, !0)) return;
                    let E = null,
                        s = t;
                    if ('pointerType' in o) {
                        switch (o.pointerType) {
                            case 'mouse':
                                E = e3.Mouse;
                                break;
                            case 'touch':
                                E = e3.Touch;
                                break;
                            case 'pen':
                                E = e3.Pen;
                        }
                        E === e3.Touch ? (e2[t] === e2.MouseDown ? (s = 'TouchStart') : e2[t] === e2.MouseUp && (s = 'TouchEnd')) : e3.Pen;
                    } else ek(o) && (E = e3.Touch);
                    null !== E ? ((c = E), ((s.startsWith('Touch') && E === e3.Touch) || (s.startsWith('Mouse') && E === e3.Mouse)) && (E = null)) : e2[t] === e2.Click && ((E = c), (c = null));
                    let l = ek(o) ? o.changedTouches[0] : o;
                    if (!l) return;
                    let u = r.getId(i),
                        { clientX: I, clientY: R } = l;
                    tt(e)({
                        type: e2[s],
                        id: u,
                        x: I,
                        y: R,
                        ...(null !== E && { pointerType: E })
                    });
                };
            return (
                Object.keys(e2)
                    .filter((e) => Number.isNaN(Number(e)) && !e.endsWith('_Departed') && !1 !== i[e])
                    .forEach((e) => {
                        let r = er(e),
                            n = s(e);
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
                        E.push(em(r, n, t));
                    }),
                tt(() => {
                    E.forEach((e) => e());
                })
            );
        })(e),
        o = to(e),
        i = (function ({ viewportResizeCb: e }, { win: t }) {
            let r = -1,
                n = -1;
            return em(
                'resize',
                tt(
                    ev(
                        tt(() => {
                            let t = eH(),
                                a = ex();
                            (r !== t || n !== a) &&
                                (e({
                                    width: Number(a),
                                    height: Number(t)
                                }),
                                (r = t),
                                (n = a));
                        }),
                        200
                    )
                ),
                t
            );
        })(e, { win: n }),
        E = (function ({ inputCb: e, doc: t, mirror: r, blockClass: n, blockSelector: a, unblockSelector: _, ignoreClass: o, ignoreSelector: i, maskInputOptions: E, maskInputFn: c, sampling: s, userTriggeredOnInput: l, maskTextClass: u, unmaskTextClass: I, maskTextSelector: R, unmaskTextSelector: N }) {
            function A(e) {
                let r = ta(e),
                    s = e.isTrusted,
                    A = r && en(r.tagName);
                if (('OPTION' === A && (r = r.parentElement), !r || !A || 0 > ti.indexOf(A) || eK(r, n, a, _, !0))) return;
                let d = r;
                if (d.classList.contains(o) || (i && d.matches(i))) return;
                let L = e_(r),
                    f = eo(d, A, L),
                    O = !1,
                    p = ee({
                        maskInputOptions: E,
                        tagName: A,
                        type: L
                    }),
                    h = eU(r, u, R, I, N, p);
                ('radio' === L || 'checkbox' === L) && (O = r.checked),
                    (f = et({
                        isMasked: h,
                        element: r,
                        value: f,
                        maskInputFn: c
                    })),
                    T(
                        r,
                        l
                            ? {
                                  text: f,
                                  isChecked: O,
                                  userTriggered: s
                              }
                            : {
                                  text: f,
                                  isChecked: O
                              }
                    );
                let S = r.name;
                'radio' === L &&
                    S &&
                    O &&
                    t.querySelectorAll(`input[type="radio"][name="${S}"]`).forEach((e) => {
                        if (e !== r) {
                            let t = et({
                                isMasked: h,
                                element: e,
                                value: eo(e, A, L),
                                maskInputFn: c
                            });
                            T(
                                e,
                                l
                                    ? {
                                          text: t,
                                          isChecked: !O,
                                          userTriggered: !1
                                      }
                                    : {
                                          text: t,
                                          isChecked: !O
                                      }
                            );
                        }
                    });
            }
            function T(t, n) {
                let a = tE.get(t);
                if (!a || a.text !== n.text || a.isChecked !== n.isChecked) {
                    tE.set(t, n);
                    let a = r.getId(t);
                    tt(e)({
                        ...n,
                        id: a
                    });
                }
            }
            let d = ('last' === s.input ? ['change'] : ['input', 'change']).map((e) => em(e, tt(A), t)),
                L = t.defaultView;
            if (!L)
                return () => {
                    d.forEach((e) => e());
                };
            let f = L.Object.getOwnPropertyDescriptor(L.HTMLInputElement.prototype, 'value'),
                O = [
                    [L.HTMLInputElement.prototype, 'value'],
                    [L.HTMLInputElement.prototype, 'checked'],
                    [L.HTMLSelectElement.prototype, 'value'],
                    [L.HTMLTextAreaElement.prototype, 'value'],
                    [L.HTMLSelectElement.prototype, 'selectedIndex'],
                    [L.HTMLOptionElement.prototype, 'selected']
                ];
            return (
                f &&
                    f.set &&
                    d.push(
                        ...O.map((e) =>
                            (function e(t, r, n, a, _ = window) {
                                let o = _.Object.getOwnPropertyDescriptor(t, r);
                                return (
                                    _.Object.defineProperty(
                                        t,
                                        r,
                                        a
                                            ? n
                                            : {
                                                  set(e) {
                                                      eZ(() => {
                                                          n.set.call(this, e);
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
                                        tt(A)({
                                            target: this,
                                            isTrusted: !1
                                        });
                                    }
                                },
                                !1,
                                L
                            )
                        )
                    ),
                tt(() => {
                    d.forEach((e) => e());
                })
            );
        })(e),
        c = (function ({ mediaInteractionCb: e, blockClass: t, blockSelector: r, unblockSelector: n, mirror: a, sampling: _, doc: o }) {
            let i = tt((o) =>
                    ev(
                        tt((_) => {
                            let i = ta(_);
                            if (!i || eK(i, t, r, n, !0)) return;
                            let { currentTime: E, volume: c, muted: s, playbackRate: l } = i;
                            e({
                                type: o,
                                id: a.getId(i),
                                currentTime: E,
                                volume: c,
                                muted: s,
                                playbackRate: l
                            });
                        }),
                        _.media || 500
                    )
                ),
                E = [em('play', i(0), o), em('pause', i(1), o), em('seeked', i(2), o), em('volumechange', i(3), o), em('ratechange', i(4), o)];
            return tt(() => {
                E.forEach((e) => e());
            });
        })(e),
        s = () => {},
        l = () => {},
        u = () => {},
        I = () => {};
    e.recordDOM &&
        ((s = (function ({ styleSheetRuleCb: e, mirror: t, stylesheetManager: r }, { win: n }) {
            let a, _;
            if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
            let o = n.CSSStyleSheet.prototype.insertRule;
            n.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: tt((n, a, _) => {
                    let [o, i] = _,
                        { id: E, styleId: c } = ts(a, t, r.styleMirror);
                    return (
                        ((E && -1 !== E) || (c && -1 !== c)) &&
                            e({
                                id: E,
                                styleId: c,
                                adds: [
                                    {
                                        rule: o,
                                        index: i
                                    }
                                ]
                            }),
                        n.apply(a, _)
                    );
                })
            });
            let i = n.CSSStyleSheet.prototype.deleteRule;
            (n.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
                apply: tt((n, a, _) => {
                    let [o] = _,
                        { id: i, styleId: E } = ts(a, t, r.styleMirror);
                    return (
                        ((i && -1 !== i) || (E && -1 !== E)) &&
                            e({
                                id: i,
                                styleId: E,
                                removes: [{ index: o }]
                            }),
                        n.apply(a, _)
                    );
                })
            })),
                n.CSSStyleSheet.prototype.replace &&
                    ((a = n.CSSStyleSheet.prototype.replace),
                    (n.CSSStyleSheet.prototype.replace = new Proxy(a, {
                        apply: tt((n, a, _) => {
                            let [o] = _,
                                { id: i, styleId: E } = ts(a, t, r.styleMirror);
                            return (
                                ((i && -1 !== i) || (E && -1 !== E)) &&
                                    e({
                                        id: i,
                                        styleId: E,
                                        replace: o
                                    }),
                                n.apply(a, _)
                            );
                        })
                    }))),
                n.CSSStyleSheet.prototype.replaceSync &&
                    ((_ = n.CSSStyleSheet.prototype.replaceSync),
                    (n.CSSStyleSheet.prototype.replaceSync = new Proxy(_, {
                        apply: tt((n, a, _) => {
                            let [o] = _,
                                { id: i, styleId: E } = ts(a, t, r.styleMirror);
                            return (
                                ((i && -1 !== i) || (E && -1 !== E)) &&
                                    e({
                                        id: i,
                                        styleId: E,
                                        replaceSync: o
                                    }),
                                n.apply(a, _)
                            );
                        })
                    })));
            let E = {};
            tR('CSSGroupingRule') ? (E.CSSGroupingRule = n.CSSGroupingRule) : (tR('CSSMediaRule') && (E.CSSMediaRule = n.CSSMediaRule), tR('CSSConditionRule') && (E.CSSConditionRule = n.CSSConditionRule), tR('CSSSupportsRule') && (E.CSSSupportsRule = n.CSSSupportsRule));
            let c = {};
            return (
                Object.entries(E).forEach(([n, a]) => {
                    (c[n] = {
                        insertRule: a.prototype.insertRule,
                        deleteRule: a.prototype.deleteRule
                    }),
                        (a.prototype.insertRule = new Proxy(c[n].insertRule, {
                            apply: tt((n, a, _) => {
                                let [o, i] = _,
                                    { id: E, styleId: c } = ts(a.parentStyleSheet, t, r.styleMirror);
                                return (
                                    ((E && -1 !== E) || (c && -1 !== c)) &&
                                        e({
                                            id: E,
                                            styleId: c,
                                            adds: [
                                                {
                                                    rule: o,
                                                    index: [...tc(a), i || 0]
                                                }
                                            ]
                                        }),
                                    n.apply(a, _)
                                );
                            })
                        })),
                        (a.prototype.deleteRule = new Proxy(c[n].deleteRule, {
                            apply: tt((n, a, _) => {
                                let [o] = _,
                                    { id: i, styleId: E } = ts(a.parentStyleSheet, t, r.styleMirror);
                                return (
                                    ((i && -1 !== i) || (E && -1 !== E)) &&
                                        e({
                                            id: i,
                                            styleId: E,
                                            removes: [
                                                {
                                                    index: [...tc(a), o]
                                                }
                                            ]
                                        }),
                                    n.apply(a, _)
                                );
                            })
                        }));
                }),
                tt(() => {
                    (n.CSSStyleSheet.prototype.insertRule = o),
                        (n.CSSStyleSheet.prototype.deleteRule = i),
                        a && (n.CSSStyleSheet.prototype.replace = a),
                        _ && (n.CSSStyleSheet.prototype.replaceSync = _),
                        Object.entries(E).forEach(([e, t]) => {
                            (t.prototype.insertRule = c[e].insertRule), (t.prototype.deleteRule = c[e].deleteRule);
                        });
                })
            );
        })(e, { win: n })),
        (l = tl(e, e.doc)),
        (u = (function ({ styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: r, stylesheetManager: n }, { win: a }) {
            let _ = a.CSSStyleDeclaration.prototype.setProperty;
            a.CSSStyleDeclaration.prototype.setProperty = new Proxy(_, {
                apply: tt((a, o, i) => {
                    let [E, c, s] = i;
                    if (r.has(E)) return _.apply(o, [E, c, s]);
                    let { id: l, styleId: u } = ts(tr([o, 'access', (e) => e.parentRule, 'optionalAccess', (e) => e.parentStyleSheet]), t, n.styleMirror);
                    return (
                        ((l && -1 !== l) || (u && -1 !== u)) &&
                            e({
                                id: l,
                                styleId: u,
                                set: {
                                    property: E,
                                    value: c,
                                    priority: s
                                },
                                index: tc(o.parentRule)
                            }),
                        a.apply(o, i)
                    );
                })
            });
            let o = a.CSSStyleDeclaration.prototype.removeProperty;
            return (
                (a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: tt((a, _, i) => {
                        let [E] = i;
                        if (r.has(E)) return o.apply(_, [E]);
                        let { id: c, styleId: s } = ts(tr([_, 'access', (e) => e.parentRule, 'optionalAccess', (e) => e.parentStyleSheet]), t, n.styleMirror);
                        return (
                            ((c && -1 !== c) || (s && -1 !== s)) &&
                                e({
                                    id: c,
                                    styleId: s,
                                    remove: { property: E },
                                    index: tc(_.parentRule)
                                }),
                            a.apply(_, i)
                        );
                    })
                })),
                tt(() => {
                    (a.CSSStyleDeclaration.prototype.setProperty = _), (a.CSSStyleDeclaration.prototype.removeProperty = o);
                })
            );
        })(e, { win: n })),
        e.collectFonts &&
            (I = (function ({ fontCb: e, doc: t }) {
                let r = t.defaultView;
                if (!r) return () => {};
                let n = [],
                    a = new WeakMap(),
                    _ = r.FontFace;
                r.FontFace = function (e, t, r) {
                    let n = new _(e, t, r);
                    return (
                        a.set(n, {
                            family: e,
                            buffer: 'string' != typeof t,
                            descriptors: r,
                            fontSource: 'string' == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                        }),
                        n
                    );
                };
                let o = ew(t.fonts, 'add', function (t) {
                    return function (r) {
                        return (
                            eZ(
                                tt(() => {
                                    let t = a.get(r);
                                    t && (e(t), a.delete(r));
                                }),
                                0
                            ),
                            t.apply(this, [r])
                        );
                    };
                });
                return (
                    n.push(() => {
                        r.FontFace = _;
                    }),
                    n.push(o),
                    tt(() => {
                        n.forEach((e) => e());
                    })
                );
            })(e)));
    let R = (function (e) {
            let { doc: t, mirror: r, blockClass: n, blockSelector: a, unblockSelector: _, selectionCb: o } = e,
                i = !0,
                E = tt(() => {
                    let e = t.getSelection();
                    if (!e || (i && tr([e, 'optionalAccess', (e) => e.isCollapsed]))) return;
                    i = e.isCollapsed || !1;
                    let E = [],
                        c = e.rangeCount || 0;
                    for (let t = 0; t < c; t++) {
                        let { startContainer: o, startOffset: i, endContainer: c, endOffset: s } = e.getRangeAt(t);
                        !(eK(o, n, a, _, !0) || eK(c, n, a, _, !0)) &&
                            E.push({
                                start: r.getId(o),
                                startOffset: i,
                                end: r.getId(c),
                                endOffset: s
                            });
                    }
                    o({ ranges: E });
                });
            return E(), em('selectionchange', E);
        })(e),
        N = (function ({ doc: e, customElementCb: t }) {
            let r = e.defaultView;
            return r && r.customElements
                ? ew(r.customElements, 'define', function (e) {
                      return function (r, n, a) {
                          try {
                              t({ define: { name: r } });
                          } catch (e) {}
                          return e.apply(this, [r, n, a]);
                      };
                  })
                : () => {};
        })(e),
        A = [];
    for (let t of e.plugins) A.push(t.observer(t.callback, n, t.options));
    return tt(() => {
        tn.forEach((e) => e.reset()), tr([r, 'optionalAccess', (e) => e.disconnect, 'call', (e) => e()]), a(), _(), o(), i(), E(), c(), s(), l(), u(), I(), R(), N(), A.forEach((e) => e());
    });
}
function tI(e) {
    return void 0 !== window[e];
}
function tR(e) {
    return !!(void 0 !== window[e] && window[e].prototype && 'insertRule' in window[e].prototype && 'deleteRule' in window[e].prototype);
}
class tN {
    constructor(e) {
        (this.generateIdFn = e), (this.iframeIdToRemoteIdMap = new WeakMap()), (this.iframeRemoteIdToIdMap = new WeakMap());
    }
    getId(e, t, r, n) {
        let a = r || this.getIdToRemoteIdMap(e),
            _ = n || this.getRemoteIdToIdMap(e),
            o = a.get(t);
        return !o && ((o = this.generateIdFn()), a.set(t, o), _.set(o, t)), o;
    }
    getIds(e, t) {
        let r = this.getIdToRemoteIdMap(e),
            n = this.getRemoteIdToIdMap(e);
        return t.map((t) => this.getId(e, t, r, n));
    }
    getRemoteId(e, t, r) {
        let n = r || this.getRemoteIdToIdMap(e);
        if ('number' != typeof t) return t;
        let a = n.get(t);
        return a ? a : -1;
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
function tA(e) {
    let t;
    let r = e[0],
        n = 1;
    for (; n < e.length; ) {
        let a = e[n],
            _ = e[n + 1];
        if (((n += 2), ('optionalAccess' === a || 'optionalCall' === a) && null == r)) return;
        'access' === a || 'optionalAccess' === a ? ((t = r), (r = _(r))) : ('call' === a || 'optionalCall' === a) && ((r = _((...e) => r.call(t, ...e))), (t = void 0));
    }
    return r;
}
class tT {
    constructor() {
        (this.crossOriginIframeMirror = new tN(eR)), (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class td {
    constructor(e) {
        (this.iframes = new WeakMap()), (this.crossOriginIframeMap = new WeakMap()), (this.crossOriginIframeMirror = new tN(eR)), (this.crossOriginIframeRootIdMap = new WeakMap()), (this.mutationCb = e.mutationCb), (this.wrappedEmit = e.wrappedEmit), (this.stylesheetManager = e.stylesheetManager), (this.recordCrossOriginIframes = e.recordCrossOriginIframes), (this.crossOriginIframeStyleMirror = new tN(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror))), (this.mirror = e.mirror), this.recordCrossOriginIframes && window.addEventListener('message', this.handleMessage.bind(this));
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
            tA([this, 'access', (e) => e.loadListener, 'optionalCall', (t) => t(e)]),
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
                            tA([
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
    replace(e, t, r, n) {
        for (let a of n) (Array.isArray(t[a]) || 'number' == typeof t[a]) && (Array.isArray(t[a]) ? (t[a] = e.getIds(r, t[a])) : (t[a] = e.getId(r, t[a])));
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
        e.type !== N.Document && !e.rootId && (e.rootId = t),
            'childNodes' in e &&
                e.childNodes.forEach((e) => {
                    this.patchRootIdOnNode(e, t);
                });
    }
}
class tL {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class tf {
    constructor(e) {
        (this.shadowDoms = new WeakSet()), (this.restoreHandlers = []), (this.mutationCb = e.mutationCb), (this.scrollCb = e.scrollCb), (this.bypassOptions = e.bypassOptions), (this.mirror = e.mirror), this.init();
    }
    init() {
        this.reset(), this.patchAttachShadow(Element, document);
    }
    addShadowRoot(e, t) {
        if (!z(e) || this.shadowDoms.has(e)) return;
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
                return function (n) {
                    let a = e.call(this, n);
                    return this.shadowRoot && ez(this) && r.addShadowRoot(this.shadowRoot, t), a;
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
class tO {
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
            n = [];
        for (let t of e) {
            let e;
            this.styleMirror.has(t)
                ? (e = this.styleMirror.getId(t))
                : ((e = this.styleMirror.add(t)),
                  n.push({
                      styleId: e,
                      rules: Array.from(t.rules || CSSRule, (e, t) => ({
                          rule: Q(e),
                          index: t
                      }))
                  })),
                r.styleIds.push(e);
        }
        n.length > 0 && (r.styles = n), this.adoptedStyleSheetCb(r);
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
let tS = new Z();
function tD(e = {}) {
    let t;
    let { emit: r, checkoutEveryNms: n, checkoutEveryNth: a, blockClass: E = 'rr-block', blockSelector: c = null, unblockSelector: s = null, ignoreClass: l = 'rr-ignore', ignoreSelector: u = null, maskAllText: I = !1, maskTextClass: R = 'rr-mask', unmaskTextClass: N = null, maskTextSelector: A = null, unmaskTextSelector: T = null, inlineStylesheet: L = !0, maskAllInputs: f, maskInputOptions: O, slimDOMOptions: p, maskAttributeFn: h, maskInputFn: S, maskTextFn: D, maxCanvasSize: C = null, packFn: g, sampling: U = {}, dataURLOptions: P = {}, mousemoveWait: M, recordDOM: G = !0, recordCanvas: m = !1, recordCrossOriginIframes: y = !1, recordAfter: b = 'DOMContentLoaded' === e.recordAfter ? e.recordAfter : 'load', userTriggeredOnInput: v = !1, collectFonts: w = !1, inlineImages: B = !1, plugins: W, keepIframeSrcFn: H = () => !1, ignoreCSSAttributes: x = new Set([]), errorHandler: Y, onMutation: K, getCanvasManager: V } = e;
    _ = Y;
    let k = !y || window.parent === window,
        F = !1;
    if (!k)
        try {
            window.parent.document && (F = !1);
        } catch (e) {
            F = !0;
        }
    if (k && !r) throw Error('emit function is required');
    void 0 !== M && void 0 === U.mousemove && (U.mousemove = M), tS.reset();
    let X =
            !0 === f
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
                : void 0 !== O
                  ? O
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
            return g && !F && (e = g(e)), e;
        };
    o = (e, _) => {
        if (((e.timestamp = eB()), (0, d.x)([tn, 'access', (e) => e[0], 'optionalAccess', (e) => e.isFrozen, 'call', (e) => e()]) && e.type !== e0.FullSnapshot && !(e.type === e0.IncrementalSnapshot && e.data.source === e1.Mutation) && tn.forEach((e) => e.unfreeze()), k)) (0, d.x)([r, 'optionalCall', (t) => t(q(e), _)]);
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
            let r = a && $ >= a,
                _ = n && t && e.timestamp - t.timestamp > n;
            (r || _) && e_(!0);
        }
    };
    let z = (e) => {
            o({
                type: e0.IncrementalSnapshot,
                data: {
                    source: e1.Mutation,
                    ...e
                }
            });
        },
        J = (e) =>
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
            mutationCb: z,
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
                ? new tT()
                : new td({
                      mirror: tS,
                      mutationCb: z,
                      stylesheetManager: ee,
                      recordCrossOriginIframes: y,
                      wrappedEmit: o
                  });
    for (let e of W || [])
        e.getMirror &&
            e.getMirror({
                nodeMirror: tS,
                crossOriginIframeMirror: et.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: et.crossOriginIframeStyleMirror
            });
    let er = new th(),
        en = (function (e, t) {
            try {
                return e ? e(t) : new tO();
            } catch (e) {
                return console.warn('Unable to initialize CanvasManager'), new tO();
            }
        })(V, {
            mirror: tS,
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
            blockClass: E,
            blockSelector: c,
            unblockSelector: s,
            maxCanvasSize: C,
            sampling: U.canvas,
            dataURLOptions: P,
            errorHandler: Y
        }),
        ea =
            'boolean' == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new tL()
                : new tf({
                      mutationCb: z,
                      scrollCb: J,
                      bypassOptions: {
                          onMutation: K,
                          blockClass: E,
                          blockSelector: c,
                          unblockSelector: s,
                          maskAllText: I,
                          maskTextClass: R,
                          unmaskTextClass: N,
                          maskTextSelector: A,
                          unmaskTextSelector: T,
                          inlineStylesheet: L,
                          maskInputOptions: X,
                          dataURLOptions: P,
                          maskAttributeFn: h,
                          maskTextFn: D,
                          maskInputFn: S,
                          recordCanvas: m,
                          inlineImages: B,
                          sampling: U,
                          slimDOMOptions: j,
                          iframeManager: et,
                          stylesheetManager: ee,
                          canvasManager: en,
                          keepIframeSrcFn: H,
                          processedNodeManager: er
                      },
                      mirror: tS
                  }),
        e_ = (e = !1) => {
            if (!G) return;
            o(
                {
                    type: e0.Meta,
                    data: {
                        href: window.location.href,
                        width: ex(),
                        height: eH()
                    }
                },
                e
            ),
                ee.reset(),
                ea.init(),
                tn.forEach((e) => e.lock());
            let t = (function (e, t) {
                let { mirror: r = new Z(), blockClass: n = 'rr-block', blockSelector: a = null, unblockSelector: _ = null, maskAllText: o = !1, maskTextClass: i = 'rr-mask', unmaskTextClass: E = null, maskTextSelector: c = null, unmaskTextSelector: s = null, inlineStylesheet: l = !0, inlineImages: u = !1, recordCanvas: I = !1, maskAllInputs: R = !1, maskAttributeFn: N, maskTextFn: A, maskInputFn: T, slimDOM: d = !1, dataURLOptions: L, preserveWhiteSpace: f, onSerialize: O, onIframeLoad: p, iframeLoadTimeout: h, onStylesheetLoad: S, stylesheetLoadTimeout: D, keepIframeSrcFn: C = () => !1 } = t || {};
                return eM(e, {
                    doc: e,
                    mirror: r,
                    blockClass: n,
                    blockSelector: a,
                    unblockSelector: _,
                    maskAllText: o,
                    maskTextClass: i,
                    unmaskTextClass: E,
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
                    maskAttributeFn: N,
                    maskTextFn: A,
                    maskInputFn: T,
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
                    dataURLOptions: L,
                    inlineImages: u,
                    recordCanvas: I,
                    preserveWhiteSpace: f,
                    onSerialize: O,
                    onIframeLoad: p,
                    iframeLoadTimeout: h,
                    onStylesheetLoad: S,
                    stylesheetLoadTimeout: D,
                    keepIframeSrcFn: C,
                    newlyAddedElement: !1
                });
            })(document, {
                mirror: tS,
                blockClass: E,
                blockSelector: c,
                unblockSelector: s,
                maskAllText: I,
                maskTextClass: R,
                unmaskTextClass: N,
                maskTextSelector: A,
                unmaskTextSelector: T,
                inlineStylesheet: L,
                maskAllInputs: X,
                maskAttributeFn: h,
                maskInputFn: S,
                maskTextFn: D,
                slimDOM: j,
                dataURLOptions: P,
                recordCanvas: m,
                inlineImages: B,
                onSerialize: (e) => {
                    eF(e, tS) && et.addIframe(e), eX(e, tS) && ee.trackLinkElement(e), ej(e) && ea.addShadowRoot(e.shadowRoot, document);
                },
                onIframeLoad: (e, t) => {
                    et.attachIframe(e, t), e.contentWindow && en.addWindow(e.contentWindow), ea.observeAttachShadow(e);
                },
                onStylesheetLoad: (e, t) => {
                    ee.attachLinkElement(e, t);
                },
                keepIframeSrcFn: H
            });
            if (!t) return console.warn('Failed to snapshot the document');
            o({
                type: e0.FullSnapshot,
                data: {
                    node: t,
                    initialOffset: eW(window)
                }
            }),
                tn.forEach((e) => e.unlock()),
                document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ee.adoptStyleSheets(document.adoptedStyleSheets, tS.getId(document));
        };
    i = e_;
    try {
        let e = [],
            t = (e) =>
                tt(tu)(
                    {
                        onMutation: K,
                        mutationCb: z,
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
                        scrollCb: J,
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
                        blockClass: E,
                        ignoreClass: l,
                        ignoreSelector: u,
                        maskAllText: I,
                        maskTextClass: R,
                        unmaskTextClass: N,
                        maskTextSelector: A,
                        unmaskTextSelector: T,
                        maskInputOptions: X,
                        inlineStylesheet: L,
                        sampling: U,
                        recordDOM: G,
                        recordCanvas: m,
                        inlineImages: B,
                        userTriggeredOnInput: v,
                        collectFonts: w,
                        doc: e,
                        maskAttributeFn: h,
                        maskInputFn: S,
                        maskTextFn: D,
                        keepIframeSrcFn: H,
                        blockSelector: c,
                        unblockSelector: s,
                        slimDOMOptions: j,
                        dataURLOptions: P,
                        mirror: tS,
                        iframeManager: et,
                        stylesheetManager: ee,
                        shadowDomManager: ea,
                        processedNodeManager: er,
                        canvasManager: en,
                        ignoreCSSAttributes: x,
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
                e.forEach((e) => e()), er.destroy(), (i = void 0), (_ = void 0);
            }
        );
    } catch (e) {
        console.warn(e);
    }
}
(tD.mirror = tS),
    (tD.takeFullSnapshot = function (e) {
        if (!i) throw Error('please take full snapshot after start recording');
        i(e);
    });
function tC(e) {
    return e > 9999999999 ? e : 1000 * e;
}
function tg(e) {
    return e > 9999999999 ? e / 1000 : e;
}
function tU(e, t) {
    if ('sentry.transaction' !== t.category)
        ['ui.click', 'ui.input'].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
            e.addUpdate(
                () => (
                    e.throttledAddEvent({
                        type: e0.Custom,
                        timestamp: 1000 * (t.timestamp || 0),
                        data: {
                            tag: 'breadcrumb',
                            payload: (0, U.Fv)(t, 10, 1000)
                        }
                    }),
                    'console' === t.category
                )
            );
}
function tP(e) {
    return e.closest('button,a') || e;
}
function tM(e) {
    let t = tG(e);
    return t && t instanceof Element ? tP(t) : t;
}
function tG(e) {
    return (function (e) {
        return 'object' == typeof e && !!e && 'target' in e;
    })(e)
        ? e.target
        : e;
}
class tm {
    constructor(e, t, r = tU) {
        (this._lastMutation = 0), (this._lastScroll = 0), (this._clicks = []), (this._timeout = t.timeout / 1000), (this._threshold = t.threshold / 1000), (this._scollTimeout = t.scrollTimeout / 1000), (this._replay = e), (this._ignoreSelector = t.ignoreSelector), (this._addBreadcrumbEvent = r);
    }
    addListeners() {
        var e;
        let t =
            ((e = () => {
                this._lastMutation = tb();
            }),
            !E &&
                ((E = []),
                (function () {
                    (0, P.hl)(k, 'open', function (e) {
                        return function (...t) {
                            if (E)
                                try {
                                    E.forEach((e) => e());
                                } catch (e) {}
                            return e.apply(k, t);
                        };
                    });
                })()),
            E.push(e),
            () => {
                let t = E ? E.indexOf(e) : -1;
                t > -1 && E.splice(t, 1);
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
            timestamp: tg(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t
        };
        if (!this._clicks.some((e) => e.node === r.node && 1 > Math.abs(e.timestamp - r.timestamp))) this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks();
    }
    registerMutation(e = Date.now()) {
        this._lastMutation = tg(e);
    }
    registerScroll(e = Date.now()) {
        this._lastScroll = tg(e);
    }
    registerClick(e) {
        let t = tP(e);
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
            n = e.mutationAfter && e.mutationAfter <= this._threshold,
            { clickCount: a, clickBreadcrumb: _ } = e;
        if (!r && !n) {
            let r = 1000 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                n = r < 1000 * this._timeout ? 'mutation' : 'timeout',
                o = {
                    type: 'default',
                    message: _.message,
                    timestamp: _.timestamp,
                    category: 'ui.slowClickDetected',
                    data: {
                        ..._.data,
                        url: k.location.href,
                        route: t.getCurrentRoute(),
                        timeAfterClickMs: r,
                        endReason: n,
                        clickCount: a || 1
                    }
                };
            this._addBreadcrumbEvent(t, o);
            return;
        }
        if (a > 1) {
            let e = {
                type: 'default',
                message: _.message,
                timestamp: _.timestamp,
                category: 'ui.multiClick',
                data: {
                    ..._.data,
                    url: k.location.href,
                    route: t.getCurrentRoute(),
                    clickCount: a,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(t, e);
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout), (this._checkClickTimeout = (0, H.iK)(() => this._checkClicks(), 1000));
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
((R = A || (A = {}))[(R.Document = 0)] = 'Document'), (R[(R.DocumentType = 1)] = 'DocumentType'), (R[(R.Element = 2)] = 'Element'), (R[(R.Text = 3)] = 'Text'), (R[(R.CDATA = 4)] = 'CDATA'), (R[(R.Comment = 5)] = 'Comment');
let tw = new Set(['id', 'class', 'aria-label', 'role', 'name', 'alt', 'title', 'data-test-id', 'data-testid', 'disabled', 'aria-disabled', 'data-sentry-component']),
    tB = (e) => (t) => {
        if (!e.isEnabled()) return;
        let r = (function (e) {
            let { target: t, message: r } = (function (e) {
                let t;
                let r = 'click' === e.name,
                    n = null;
                try {
                    (n = r ? tM(e.event) : tG(e.event)), (t = (0, M.Rt)(n, { maxStringLength: 200 }) || '<unknown>');
                } catch (e) {
                    t = '<unknown>';
                }
                return {
                    target: n,
                    message: t
                };
            })(e);
            return tv({
                category: `ui.${e.name}`,
                ...tW(t, r)
            });
        })(t);
        if (!r) return;
        let n = 'click' === t.name,
            a = n ? t.event : void 0;
        n &&
            e.clickDetector &&
            a &&
            a.target &&
            !a.altKey &&
            !a.metaKey &&
            !a.ctrlKey &&
            !a.shiftKey &&
            !(function (e, t, r) {
                e.handleClick(t, r);
            })(e.clickDetector, r, tM(t.event)),
            tU(e, r);
    };
function tW(e, t) {
    let r = tD.mirror.getId(e),
        n = r && tD.mirror.getNode(r),
        a = n && tD.mirror.getMeta(n),
        _ =
            a &&
            (function (e) {
                return e.type === A.Element;
            })(a)
                ? a
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
                          .map((e) => e.type === A.Text && e.textContent)
                          .filter(Boolean)
                          .map((e) => e.trim())
                          .join(''),
                      attributes: (function (e) {
                          let t = {};
                          for (let r in (!e['data-sentry-component'] && e['data-sentry-element'] && (e['data-sentry-component'] = e['data-sentry-element']), e))
                              if (tw.has(r)) {
                                  let n = r;
                                  ('data-testid' === r || 'data-test-id' === r) && (n = 'testId'), (t[n] = e[r]);
                              }
                          return t;
                      })(_.attributes)
                  }
              }
            : {}
    };
}
let tH = {
    resource: function (e) {
        let { entryType: t, initiatorType: r, name: n, responseEnd: a, startTime: _, decodedBodySize: o, encodedBodySize: i, responseStatus: E, transferSize: c } = e;
        return ['fetch', 'xmlhttprequest'].includes(r)
            ? null
            : {
                  type: `${t}.${r}`,
                  start: tK(_),
                  end: tK(a),
                  name: n,
                  data: {
                      size: c,
                      statusCode: E,
                      decodedBodySize: o,
                      encodedBodySize: i
                  }
              };
    },
    paint: function (e) {
        let { duration: t, entryType: r, name: n, startTime: a } = e,
            _ = tK(a);
        return {
            type: r,
            name: n,
            start: _,
            end: _ + t,
            data: void 0
        };
    },
    navigation: function (e) {
        let { entryType: t, name: r, decodedBodySize: n, duration: a, domComplete: _, encodedBodySize: o, domContentLoadedEventStart: i, domContentLoadedEventEnd: E, domInteractive: c, loadEventStart: s, loadEventEnd: l, redirectCount: u, startTime: I, transferSize: R, type: N } = e;
        return 0 === a
            ? null
            : {
                  type: `${t}.${N}`,
                  start: tK(I),
                  end: tK(_),
                  name: r,
                  data: {
                      size: R,
                      decodedBodySize: n,
                      encodedBodySize: o,
                      duration: a,
                      domInteractive: c,
                      domContentLoadedEventStart: i,
                      domContentLoadedEventEnd: E,
                      loadEventStart: s,
                      loadEventEnd: l,
                      domComplete: _,
                      redirectCount: u
                  }
              };
    }
};
function tx(e, t) {
    return ({ metric: r }) => void t.replayPerformanceEntries.push(e(r));
}
function tY(e) {
    let t = tH[e.entryType];
    return t ? t(e) : null;
}
function tK(e) {
    return ((G.Z1 || k.performance.timeOrigin) + e) / 1000;
}
function tV(e) {
    let t = e.entries[e.entries.length - 1];
    return tj(e, 'largest-contentful-paint', t && t.element ? [t.element] : void 0);
}
function tk(e) {
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
    let n = e.value,
        a = e.rating,
        _ = tK(n);
    return {
        type: 'web-vital',
        name: t,
        start: _,
        end: _,
        data: {
            value: n,
            size: n,
            rating: a,
            nodeIds: r ? r.map((e) => tD.mirror.getId(e)) : void 0
        }
    };
}
let t$ = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function tq(e, t) {
    if (!!t$) m.kg.info(e), t && tJ(e);
}
function tz(e, t) {
    if (!!t$)
        m.kg.info(e),
            t &&
                (0, H.iK)(() => {
                    tJ(e);
                }, 0);
}
function tJ(e) {
    (0, L.n)(
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
        return new Promise((n, a) => {
            let _ = ({ data: t }) => {
                if (t.method === e && t.id === r) {
                    if ((this._worker.removeEventListener('message', _), !t.success)) {
                        t$ && m.kg.error('[Replay]', t.response), a(Error('Error in compression worker'));
                        return;
                    }
                    n(t.response);
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
        return 'sessionStorage' in k && !!k.sessionStorage;
    } catch (e) {
        return !1;
    }
}
function t5(e) {
    return void 0 !== e && Math.random() < e;
}
function t6(e) {
    let t = Date.now(),
        r = e.id || (0, y.DM)(),
        n = e.started || t,
        a = e.lastActivity || t,
        _ = e.segmentId || 0,
        o = e.sampled;
    return {
        id: r,
        started: n,
        lastActivity: a,
        segmentId: _,
        sampled: o,
        previousSessionId: e.previousSessionId
    };
}
function t4(e) {
    if (!!t3())
        try {
            k.sessionStorage.setItem(F, JSON.stringify(e));
        } catch (e) {}
}
function t8({ sessionSampleRate: e, allowBuffering: t, stickySession: r = !1 }, { previousSessionId: n } = {}) {
    var a, _;
    let o = t6({
        sampled: ((a = e), (_ = t), t5(a) ? 'session' : !!_ && 'buffer'),
        previousSessionId: n
    });
    return r && t4(o), o;
}
function t7(e, t, r = +new Date()) {
    return null === e || void 0 === t || !!(t < 0) || (0 !== t && e + t <= r);
}
function t9(e, { maxReplayDuration: t, sessionIdleExpire: r, targetTime: n = Date.now() }) {
    return t7(e.started, t, n) || t7(e.lastActivity, r, n);
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
function rt({ traceInternals: e, sessionIdleExpire: t, maxReplayDuration: r, previousSessionId: n }, a) {
    let _ =
        a.stickySession &&
        (function (e) {
            if (!t3()) return null;
            try {
                let t = k.sessionStorage.getItem(F);
                if (!t) return null;
                let r = JSON.parse(t);
                return tz('[Replay] Loading existing session', e), t6(r);
            } catch (e) {
                return null;
            }
        })(e);
    return _
        ? re(_, {
              sessionIdleExpire: t,
              maxReplayDuration: r
          })
            ? (tz('[Replay] Session in sessionStorage is expired, creating new one...'), t8(a, { previousSessionId: _.id }))
            : _
        : (tz('[Replay] Creating new session', e), t8(a, { previousSessionId: n }));
}
function rr(e, t, r) {
    return !!ra(e, t) && (rn(e, t, r), !0);
}
async function rn(e, t, r) {
    if (!e.eventBuffer) return null;
    try {
        r && 'buffer' === e.recordingMode && e.eventBuffer.clear(), r && (e.eventBuffer.hasCheckout = !0);
        let n = e.getOptions(),
            a = (function (e, t) {
                try {
                    if ('function' == typeof t && e.type === e0.Custom) return t(e);
                } catch (e) {
                    return t$ && m.kg.error('[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...', e), null;
                }
                return e;
            })(t, n.beforeAddRecordingEvent);
        if (!a) return;
        return await e.eventBuffer.addEvent(a);
    } catch (n) {
        let t = n && n instanceof tQ ? 'addEventSizeExceeded' : 'addEvent';
        e.handleException(n), await e.stop({ reason: t });
        let r = (0, f.s3)();
        r && r.recordDroppedEvent('internal_sdk_error', 'replay');
    }
}
function ra(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
    let r = tC(t.timestamp);
    return !(r + e.timeouts.sessionIdlePause < Date.now()) && (!(r > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (tz(`[Replay] Skipping event with timestamp ${r} because it is after maxReplayDuration`, e.getOptions()._experiments.traceInternals), !1));
}
function r_(e) {
    return !e.type;
}
function ro(e) {
    return 'transaction' === e.type;
}
function ri(e) {
    return 'feedback' === e.type;
}
function rE(e) {
    return !!e.category;
}
function rc(e, t) {
    return t.map(({ type: t, start: r, end: n, name: a, data: _ }) => {
        let o = e.throttledAddEvent({
            type: e0.Custom,
            timestamp: r,
            data: {
                tag: 'performanceSpan',
                payload: {
                    op: t,
                    description: a,
                    startTimestamp: r,
                    endTimestamp: n,
                    data: _
                }
            }
        });
        return 'string' == typeof o ? Promise.resolve(null) : o;
    });
}
function rs(e, t) {
    var r, n;
    if (!e.isEnabled() || null === t) return;
    if (((r = e), (n = t.name), !((!t$ || !r.getOptions()._experiments.traceInternals) && (0, O.W)(n, (0, f.s3)())))) e.addUpdate(() => (rc(e, [t]), !0));
}
function rl(e) {
    if (!e) return;
    let t = new TextEncoder();
    try {
        if ('string' == typeof e) return t.encode(e).length;
        if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            let r = rL(e);
            return t.encode(r).length;
        }
        if (e instanceof Blob) return e.size;
        if (e instanceof ArrayBuffer) return e.byteLength;
    } catch (e) {}
}
function ru(e) {
    if (!e) return;
    let t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t;
}
function rI(e) {
    try {
        if ('string' == typeof e) return [e];
        if (e instanceof URLSearchParams) return [e.toString()];
        if (e instanceof FormData) return [rL(e)];
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
        n = r.warnings || [];
    return (r.warnings = [...n, t]), (e._meta = r), e;
}
function rN(e, t) {
    if (!t) return null;
    let { startTimestamp: r, endTimestamp: n, url: a, method: _, statusCode: o, request: i, response: E } = t;
    return {
        type: e,
        start: r / 1000,
        end: n / 1000,
        name: a,
        data: (0, P.Jr)({
            method: _,
            statusCode: o,
            request: i,
            response: E
        })
    };
}
function rA(e) {
    return {
        headers: {},
        size: e,
        _meta: { warnings: ['URL_SKIPPED'] }
    };
}
function rT(e, t, r) {
    if (!t && 0 === Object.keys(e).length) return;
    if (!t) return { headers: e };
    if (!r)
        return {
            headers: e,
            size: t
        };
    let n = {
            headers: e,
            size: t
        },
        { body: a, warnings: _ } = (function (e) {
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
    return (n.body = a), _ && _.length > 0 && (n._meta = { warnings: _ }), n;
}
function rd(e, t) {
    return Object.entries(e).reduce((r, [n, a]) => {
        let _ = n.toLowerCase();
        return t.includes(_) && e[n] && (r[_] = a), r;
    }, {});
}
function rL(e) {
    return new URLSearchParams(e).toString();
}
function rf(e, t) {
    let r = (function (e, t = k.document.baseURI) {
        if (e.startsWith('http://') || e.startsWith('https://') || e.startsWith(k.location.origin)) return e;
        let r = new URL(e, t);
        if (r.origin !== new URL(t).origin) return e;
        let n = r.href;
        return !e.endsWith('/') && n.endsWith('/') ? n.slice(0, -1) : n;
    })(e);
    return (0, b.U0)(r, t);
}
async function rO(e, t, r) {
    try {
        let n = await rp(e, t, r),
            a = rN('resource.fetch', n);
        rs(r.replay, a);
    } catch (e) {
        t$ && m.kg.error('[Replay] Failed to capture fetch breadcrumb', e);
    }
}
async function rp(e, t, r) {
    let n = Date.now(),
        { startTimestamp: a = n, endTimestamp: _ = n } = t,
        { url: o, method: i, status_code: E = 0, request_body_size: c, response_body_size: s } = e.data,
        l = rf(o, r.networkDetailAllowUrls) && !rf(o, r.networkDetailDenyUrls),
        u = l
            ? (function ({ networkCaptureBodies: e, networkRequestHeaders: t }, r, n) {
                  let a = r
                      ? (function (e, t) {
                            return 1 === e.length && 'string' != typeof e[0] ? rg(e[0], t) : 2 === e.length ? rg(e[1], t) : {};
                        })(r, t)
                      : {};
                  if (!e) return rT(a, n, void 0);
                  let [_, o] = rI(rD(r)),
                      i = rT(a, n, _);
                  return o ? rR(i, o) : i;
              })(r, t.input, c)
            : rA(c);
    return {
        startTimestamp: a,
        endTimestamp: _,
        url: o,
        method: i,
        statusCode: E,
        request: u,
        response: await rh(l, r, t.response, s)
    };
}
async function rh(e, { networkCaptureBodies: t, networkResponseHeaders: r }, n, a) {
    if (!e && void 0 !== a) return rA(a);
    let _ = n ? rC(n.headers, r) : {};
    if (!n || (!t && void 0 !== a)) return rT(_, a, void 0);
    let [o, i] = await rS(n),
        E = (function (e, { networkCaptureBodies: t, responseBodySize: r, captureDetails: n, headers: a }) {
            try {
                let _ = e && e.length && void 0 === r ? rl(e) : r;
                if (!n) return rA(_);
                if (t) return rT(a, _, e);
                return rT(a, _, void 0);
            } catch (e) {
                return t$ && m.kg.warn('[Replay] Failed to serialize response body', e), rT(a, r, void 0);
            }
        })(o, {
            networkCaptureBodies: t,
            responseBodySize: a,
            captureDetails: e,
            headers: _
        });
    return i ? rR(E, i) : E;
}
async function rS(e) {
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
                    let n = (0, H.iK)(() => r(Error('Timeout while trying to read response body')), 500);
                    rU(e)
                        .then(
                            (e) => t(e),
                            (e) => r(e)
                        )
                        .finally(() => clearTimeout(n));
                });
            })(t)
        ];
    } catch (e) {
        return t$ && m.kg.warn('[Replay] Failed to get text body from response', e), [void 0, 'BODY_PARSE_ERROR'];
    }
}
function rD(e = []) {
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
function rg(e, t) {
    if (!e) return {};
    let r = e.headers;
    return r ? (r instanceof Headers ? rC(r, t) : Array.isArray(r) ? {} : rd(r, t)) : {};
}
async function rU(e) {
    return await e.text();
}
async function rP(e, t, r) {
    try {
        let n = (function (e, t, r) {
                let n = Date.now(),
                    { startTimestamp: a = n, endTimestamp: _ = n, input: o, xhr: i } = t,
                    { url: E, method: c, status_code: s = 0, request_body_size: l, response_body_size: u } = e.data;
                if (!E) return null;
                if (!i || !rf(E, r.networkDetailAllowUrls) || rf(E, r.networkDetailDenyUrls)) {
                    let e = rA(l);
                    return {
                        startTimestamp: a,
                        endTimestamp: _,
                        url: E,
                        method: c,
                        statusCode: s,
                        request: e,
                        response: rA(u)
                    };
                }
                let I = i[Y.xU],
                    R = I ? rd(I.request_headers, r.networkRequestHeaders) : {},
                    N = rd(
                        (function (e) {
                            let t = e.getAllResponseHeaders();
                            return t
                                ? t.split('\r\n').reduce((e, t) => {
                                      let [r, n] = t.split(': ');
                                      return n && (e[r.toLowerCase()] = n), e;
                                  }, {})
                                : {};
                        })(i),
                        r.networkResponseHeaders
                    ),
                    [A, T] = r.networkCaptureBodies ? rI(o) : [void 0],
                    [d, L] = r.networkCaptureBodies
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
                          })(i)
                        : [void 0],
                    f = rT(R, l, A),
                    O = rT(N, u, d);
                return {
                    startTimestamp: a,
                    endTimestamp: _,
                    url: E,
                    method: c,
                    statusCode: s,
                    request: T ? rR(f, T) : f,
                    response: L ? rR(O, L) : O
                };
            })(e, t, r),
            a = rN('resource.xhr', n);
        rs(r.replay, a);
    } catch (e) {
        t$ && m.kg.error('[Replay] Failed to capture xhr breadcrumb', e);
    }
}
async function rM(e) {
    try {
        return Promise.all(
            rc(e, [
                (function (e) {
                    let { jsHeapSizeLimit: t, totalJSHeapSize: r, usedJSHeapSize: n } = e,
                        a = Date.now() / 1000;
                    return {
                        type: 'memory',
                        name: 'memory',
                        start: a,
                        end: a,
                        data: {
                            memory: {
                                jsHeapSizeLimit: t,
                                totalJSHeapSize: r,
                                usedJSHeapSize: n
                            }
                        }
                    };
                })(k.performance.memory)
            ])
        );
    } catch (e) {
        return [];
    }
}
async function rG({ client: e, scope: t, replayId: r, event: n }) {
    let a = {
        event_id: r,
        integrations: 'object' != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
    };
    e.emit('preprocessEvent', n, a);
    let _ = await (0, h.R)(e.getOptions(), n, a, t, e, (0, f.aF)());
    if (!_) return null;
    _.platform = _.platform || 'javascript';
    let o = e.getSdkMetadata(),
        { name: i, version: E } = (o && o.sdk) || {};
    return (
        (_.sdk = {
            ..._.sdk,
            name: i || 'sentry.javascript.unknown',
            version: E || '0.0.0'
        }),
        _
    );
}
async function rm({ recordingData: e, replayId: t, segmentId: r, eventContext: n, timestamp: a, session: _ }) {
    var o, i, E, c;
    let s;
    let l = (function ({ recordingData: e, headers: t }) {
            let r;
            let n = `${JSON.stringify(t)}
`;
            if ('string' == typeof e) r = `${n}${e}`;
            else {
                let t = new TextEncoder().encode(n);
                (r = new Uint8Array(t.length + e.length)).set(t), r.set(e, t.length);
            }
            return r;
        })({
            recordingData: e,
            headers: { segment_id: r }
        }),
        { urls: u, errorIds: I, traceIds: R, initialTimestamp: N } = n,
        A = (0, f.s3)(),
        T = (0, f.nZ)(),
        d = A && A.getTransport(),
        L = A && A.getDsn();
    if (!A || !d || !L || !_.sampled) return (0, w.WD)({});
    let O = {
            type: 'replay_event',
            replay_start_timestamp: N / 1000,
            timestamp: a / 1000,
            error_ids: I,
            trace_ids: R,
            urls: u,
            replay_id: t,
            segment_id: r,
            replay_type: _.sampled
        },
        p = await rG({
            scope: T,
            client: A,
            replayId: t,
            event: O
        });
    if (!p) return A.recordDroppedEvent('event_processor', 'replay', O), tq('An event processor returned `null`, will not send event.'), (0, w.WD)({});
    delete p.sdkProcessingMetadata;
    let h =
        ((o = p),
        (i = l),
        (E = L),
        (c = A.getOptions().tunnel),
        (0, v.Jd)((0, v.Cd)(o, (0, v.HY)(o), c, E), [
            [{ type: 'replay_event' }, o],
            [
                {
                    type: 'replay_recording',
                    length: 'string' == typeof i ? new TextEncoder().encode(i).length : i.length
                },
                i
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
    let S = (0, B.WG)({}, s);
    if ((0, B.Q)(S, 'replay')) throw new rb(S);
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
    let { recordingData: r, options: n } = e;
    if (!!r.length)
        try {
            return await rm(e), !0;
        } catch (r) {
            if (r instanceof ry || r instanceof rb) throw r;
            if (((0, p.v)('Replays', { _retryCount: t.count }), t$ && n._experiments && n._experiments.captureExceptions && (0, p.Tb)(r), t.count >= 3)) {
                let e = Error(`${X} - max retries exceeded`);
                try {
                    e.cause = r;
                } catch (e) {}
                throw e;
            }
            return (
                (t.interval *= ++t.count),
                new Promise((r, n) => {
                    (0, H.iK)(async () => {
                        try {
                            await rv(e, t), r(!0);
                        } catch (e) {
                            n(e);
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
                let n, a, _;
                let o = r && r.maxWait ? Math.max(r.maxWait, t) : 0;
                function i() {
                    return E(), (n = e());
                }
                function E() {
                    void 0 !== a && clearTimeout(a), void 0 !== _ && clearTimeout(_), (a = _ = void 0);
                }
                function c() {
                    return a && clearTimeout(a), (a = (0, H.iK)(i, t)), o && void 0 === _ && (_ = (0, H.iK)(i, o)), n;
                }
                return (
                    (c.cancel = E),
                    (c.flush = function () {
                        return void 0 !== a || void 0 !== _ ? i() : n;
                    }),
                    c
                );
            })(() => this._flush(), this._options.flushMinDelay, { maxWait: this._options.flushMaxDelay })),
            (this._throttledAddEvent = (function (e, t, r) {
                let n = new Map(),
                    a = (e) => {
                        let t = e - 5;
                        n.forEach((e, r) => {
                            r < t && n.delete(r);
                        });
                    },
                    _ = () => [...n.values()].reduce((e, t) => e + t, 0),
                    o = !1;
                return (...t) => {
                    let r = Math.floor(Date.now() / 1000);
                    if ((a(r), _() >= 300)) {
                        let e = o;
                        return (o = !0), e ? '__SKIPPED' : rw;
                    }
                    o = !1;
                    let i = n.get(r) || 0;
                    return n.set(r, i + 1), e(...t);
                };
            })(
                (e, t) => {
                    var r, n, a;
                    return (r = this), (n = e), (a = t), ra(r, n) ? rn(r, n, a) : Promise.resolve(null);
                },
                300,
                5
            ));
        let { slowClickTimeout: r, slowClickIgnoreSelectors: n } = this.getOptions(),
            a = r
                ? {
                      threshold: Math.min(3000, r),
                      timeout: r,
                      scrollTimeout: 300,
                      ignoreSelector: n ? n.join(',') : ''
                  }
                : void 0;
        a && (this.clickDetector = new tm(this, a));
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
            n = t <= 0 && r <= 0;
        if (((this._requiresManualStart = n), n)) return;
        if ((this._initializeSessionForSampling(e), !this.session)) {
            this.handleException(Error('Unable to initialize and create session'));
            return;
        }
        if (!1 !== this.session.sampled) (this.recordingMode = 'buffer' === this.session.sampled && 0 === this.session.segmentId ? 'buffer' : 'session'), tz(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), this._initializeRecording();
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
        tz('[Replay] Starting replay in session mode', this._options._experiments.traceInternals), this._updateUserActivity();
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
        tz('[Replay] Starting replay in buffer mode', this._options._experiments.traceInternals);
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
            this._stopRecording = tD({
                ...this._recordingOptions,
                ...('buffer' === this.recordingMode && { checkoutEveryNms: 60000 }),
                emit:
                    ((e = this),
                    (t = !1),
                    (r, n) => {
                        if (!e.checkAndHandleExpiredSession()) {
                            t$ && m.kg.warn('[Replay] Received replay event after session expired.');
                            return;
                        }
                        let a = n || !t;
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
                                            let { type: r, id: n } = t.data,
                                                a = tD.mirror.getNode(n);
                                            a instanceof HTMLElement && r === e2.Click && e.registerClick(a);
                                        }
                                    } catch (e) {}
                                })(e.clickDetector, r),
                            e.addUpdate(() => {
                                if (('buffer' === e.recordingMode && a && e.setInitialState(), !rr(e, r, a))) return !0;
                                if (!a) return !1;
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
                                    })(e, a),
                                    e.session && e.session.previousSessionId)
                                )
                                    return !0;
                                if ('buffer' === e.recordingMode && e.session && e.eventBuffer) {
                                    let t = e.eventBuffer.getEarliestTimestamp();
                                    t && (tq(`[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`, e.getOptions()._experiments.traceInternals), (e.session.started = t), e.getOptions().stickySession && t4(e.session));
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
                                k.sessionStorage.removeItem(F);
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
        let e = `${k.location.pathname}${k.location.hash}${k.location.search}`,
            t = `${k.location.origin}${e}`;
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
        let e = this.lastActiveSpan || (0, S.HN)(),
            t = e && (0, S.Gx)(e),
            r = ((t && (0, S.XU)(t).data) || {})[D.Zj];
        if (!!t && !!r && !!['route', 'custom'].includes(r)) return (0, S.XU)(t).description;
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
            k.document.addEventListener('visibilitychange', this._handleVisibilityChange),
                k.addEventListener('blur', this._handleWindowBlur),
                k.addEventListener('focus', this._handleWindowFocus),
                k.addEventListener('keydown', this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                !this._hasInitializedCoreListeners &&
                    (!(function (e) {
                        var t, r, n, a;
                        let _ = (0, f.s3)();
                        (0, K.O)(tB(e)),
                            (0, V.a)(
                                ((t = e),
                                (e) => {
                                    if (!t.isEnabled()) return;
                                    let r = (function (e) {
                                        let { from: t, to: r } = e,
                                            n = Date.now() / 1000;
                                        return {
                                            type: 'navigation.push',
                                            start: n,
                                            end: n,
                                            name: r,
                                            data: { previous: t }
                                        };
                                    })(e);
                                    if (null !== r) t.getContext().urls.push(r.name), t.triggerUserActivity(), t.addUpdate(() => (rc(t, [r]), !1));
                                })
                            ),
                            !(function (e) {
                                let t = (0, f.s3)();
                                if (!!t)
                                    t.on('beforeAddBreadcrumb', (t) =>
                                        (function (e, t) {
                                            if (!e.isEnabled() || !rE(t)) return;
                                            let r = (function (e) {
                                                return !rE(e) || ['fetch', 'xhr', 'sentry.event', 'sentry.transaction'].includes(e.category) || e.category.startsWith('ui.')
                                                    ? null
                                                    : 'console' === e.category
                                                      ? (function (e) {
                                                            let t = e.data && e.data.arguments;
                                                            if (!Array.isArray(t) || 0 === t.length) return tv(e);
                                                            let r = !1,
                                                                n = t.map((e) => {
                                                                    if (!e) return e;
                                                                    if ('string' == typeof e) return e.length > 5000 ? ((r = !0), `${e.slice(0, 5000)}…`) : e;
                                                                    if ('object' == typeof e)
                                                                        try {
                                                                            let t = (0, U.Fv)(e, 7);
                                                                            if (JSON.stringify(t).length > 5000) return (r = !0), `${JSON.stringify(t, null, 2).slice(0, 5000)}…`;
                                                                            return t;
                                                                        } catch (e) {}
                                                                    return e;
                                                                });
                                                            return tv({
                                                                ...e,
                                                                data: {
                                                                    ...e.data,
                                                                    arguments: n,
                                                                    ...(r ? { _meta: { warnings: ['CONSOLE_ARG_TRUNCATED'] } } : {})
                                                                }
                                                            });
                                                        })(e)
                                                      : tv(e);
                                            })(t);
                                            r && tU(e, r);
                                        })(e, t)
                                    );
                            })(e),
                            !(function (e) {
                                let t = (0, f.s3)();
                                try {
                                    let { networkDetailAllowUrls: r, networkDetailDenyUrls: n, networkCaptureBodies: a, networkRequestHeaders: _, networkResponseHeaders: o } = e.getOptions(),
                                        i = {
                                            replay: e,
                                            networkDetailAllowUrls: r,
                                            networkDetailDenyUrls: n,
                                            networkCaptureBodies: a,
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
                                                                let { xhr: r, input: n } = t;
                                                                if (!r) return;
                                                                let a = rl(n),
                                                                    _ = r.getResponseHeader('content-length')
                                                                        ? ru(r.getResponseHeader('content-length'))
                                                                        : (function (e, t) {
                                                                              try {
                                                                                  let r = 'json' === t && e && 'object' == typeof e ? JSON.stringify(e) : e;
                                                                                  return rl(r);
                                                                              } catch (e) {
                                                                                  return;
                                                                              }
                                                                          })(r.response, r.responseType);
                                                                void 0 !== a && (e.data.request_body_size = a), void 0 !== _ && (e.data.response_body_size = _);
                                                            })(t, r),
                                                            rP(t, r, e)),
                                                            (function (e) {
                                                                return 'fetch' === e.category;
                                                            })(t) &&
                                                                (function (e) {
                                                                    return e && e.response;
                                                                })(r) &&
                                                                (!(function (e, t) {
                                                                    let { input: r, response: n } = t,
                                                                        a = rl(r ? rD(r) : void 0),
                                                                        _ = n ? ru(n.headers.get('content-length')) : void 0;
                                                                    void 0 !== a && (e.data.request_body_size = a), void 0 !== _ && (e.data.response_body_size = _);
                                                                })(t, r),
                                                                rO(t, r, e));
                                                    } catch (e) {
                                                        t$ && m.kg.warn('Error when enriching network breadcrumb');
                                                    }
                                            })(i, e, t)
                                        );
                                } catch (e) {}
                            })(e);
                        let o =
                            ((r = e),
                            Object.assign(
                                (e, t) => {
                                    var n, a, _, o, i, E;
                                    if (!r.isEnabled()) return e;
                                    if ('replay_event' === e.type) return delete e.breadcrumbs, e;
                                    if ((e.type && !ro(e) && !ri(e)) || !r.checkAndHandleExpiredSession()) return e;
                                    if (ri(e)) {
                                        return (
                                            r.flush(),
                                            (e.contexts.feedback.replay_id = r.getSessionId()),
                                            (n = r),
                                            (a = e),
                                            n.triggerUserActivity(),
                                            n.addUpdate(
                                                () =>
                                                    !a.timestamp ||
                                                    (n.throttledAddEvent({
                                                        type: e0.Custom,
                                                        timestamp: 1000 * a.timestamp,
                                                        data: {
                                                            tag: 'breadcrumb',
                                                            payload: {
                                                                timestamp: a.timestamp,
                                                                type: 'default',
                                                                category: 'sentry.feedback',
                                                                data: { feedbackId: a.event_id }
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
                                        (i = r),
                                        (E = e),
                                        (('buffer' === i.recordingMode && E.message !== X && E.exception && !E.type && t5(i.getOptions().errorSampleRate)) || 'session' === r.recordingMode) &&
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
                                ((n = e),
                                (e) => {
                                    if (!!n.isEnabled() && !e.type)
                                        (function (e, t) {
                                            let r = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
                                            if ('string' == typeof r)
                                                (r.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || r.match(/(does not match server-rendered HTML|Hydration failed because)/i)) &&
                                                    tU(
                                                        e,
                                                        tv({
                                                            category: 'replay.hydrate-error',
                                                            data: { url: (0, M.l4)() }
                                                        })
                                                    );
                                        })(n, e);
                                })
                            ),
                                _.on(
                                    'afterSendEvent',
                                    ((a = e),
                                    (e, t) => {
                                        if (!a.isEnabled() || (e.type && !ro(e))) return;
                                        let r = t && t.statusCode;
                                        if (!!r && !(r < 200) && !(r >= 300)) {
                                            if (ro(e)) {
                                                (function (e, t) {
                                                    let r = e.getContext();
                                                    t.contexts && t.contexts.trace && t.contexts.trace.trace_id && r.traceIds.size < 100 && r.traceIds.add(t.contexts.trace.trace_id);
                                                })(a, e);
                                                return;
                                            }
                                            (function (e, t) {
                                                let r = e.getContext();
                                                if ((t.event_id && r.errorIds.size < 100 && r.errorIds.add(t.event_id), 'buffer' !== e.recordingMode || !t.tags || !t.tags.replayId)) return;
                                                let { beforeErrorSampling: n } = e.getOptions();
                                                if ('function' != typeof n || !!n(t))
                                                    (0, H.iK)(() => {
                                                        e.sendBufferedReplayOrFlush();
                                                    });
                                            })(a, e);
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
                                    let n = e.getSessionId();
                                    r && r.includeReplay && e.isEnabled() && n && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = n);
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
            let n = [];
            return (
                ['navigation', 'paint', 'resource'].forEach((e) => {
                    n.push((0, x._j)(e, r));
                }),
                n.push((0, x.$A)(tx(tV, e)), (0, x.PR)(tx(tk, e)), (0, x.to)(tx(tF, e)), (0, x.YF)(tx(tX, e))),
                () => {
                    n.forEach((e) => e());
                }
            );
        })(this);
    }
    _removeListeners() {
        try {
            k.document.removeEventListener('visibilitychange', this._handleVisibilityChange), k.removeEventListener('blur', this._handleWindowBlur), k.removeEventListener('focus', this._handleWindowFocus), k.removeEventListener('keydown', this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback();
        } catch (e) {
            this.handleException(e);
        }
    }
    __init() {
        this._handleVisibilityChange = () => {
            'visible' === k.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
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
                    let { metaKey: t, shiftKey: r, ctrlKey: n, altKey: a, key: _, target: o } = e;
                    if (
                        !o ||
                        (function (e) {
                            return 'INPUT' === e.tagName || 'TEXTAREA' === e.tagName || e.isContentEditable;
                        })(o) ||
                        !_
                    )
                        return null;
                    let i = t || n || a,
                        E = 1 === _.length;
                    if (!i && E) return null;
                    let c = (0, M.Rt)(o, { maxStringLength: 200 }) || '<unknown>',
                        s = tW(o, c);
                    return tv({
                        category: 'ui.keyDown',
                        message: c,
                        data: {
                            ...s.data,
                            metaKey: t,
                            shiftKey: r,
                            ctrlKey: n,
                            altKey: a,
                            key: _
                        }
                    });
                })(t);
                if (!!r) tU(e, r);
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
        let e = this.performanceEntries.map(tY).filter(Boolean).concat(this.replayPerformanceEntries);
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
                    n = this.session.segmentId++;
                this._maybeSaveSession();
                let a = await this.eventBuffer.finish();
                await rv({
                    replayId: e,
                    recordingData: a,
                    segmentId: n,
                    eventContext: r,
                    session: this.session,
                    options: this.getOptions(),
                    timestamp: t
                });
            } catch (t) {
                this.handleException(t), this.stop({ reason: 'sendReplay' });
                let e = (0, f.s3)();
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
            let n = r < this._options.minReplayDuration,
                a = r > this._options.maxReplayDuration + 5000;
            if (n || a) {
                tq(`[Replay] Session duration (${Math.floor(r / 1000)}s) is too ${n ? 'short' : 'long'}, not sending replay.`, this._options._experiments.traceInternals), n && this._debouncedFlush();
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
        this.session && this._options.stickySession && t4(this.session);
    }
    __init6() {
        this._onMutationHandler = (e) => {
            let t = e.length,
                r = this._options.mutationLimit,
                n = this._options.mutationBreadcrumbLimit,
                a = r && t > r;
            if (t > n || a) {
                let e = tv({
                    category: 'replay.mutations',
                    data: {
                        count: t,
                        limit: a
                    }
                });
                this._createCustomBreadcrumb(e);
            }
            return (
                !a ||
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
let rH = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    rx = ['content-length', 'content-type', 'accept'],
    rY = !1,
    rK = (e) => new rV(e);
class rV {
    static __initStatic() {
        this.id = 'Replay';
    }
    constructor({ flushMinDelay: e = 5000, flushMaxDelay: t = 5500, minReplayDuration: r = 4999, maxReplayDuration: n = 3600000, stickySession: a = !0, useCompression: _ = !0, workerUrl: o, _experiments: i = {}, maskAllText: E = !0, maskAllInputs: c = !0, blockAllMedia: s = !0, mutationBreadcrumbLimit: l = 750, mutationLimit: u = 10000, slowClickTimeout: I = 7000, slowClickIgnoreSelectors: R = [], networkDetailAllowUrls: N = [], networkDetailDenyUrls: A = [], networkCaptureBodies: T = !0, networkRequestHeaders: d = [], networkResponseHeaders: L = [], mask: f = [], maskAttributes: O = ['title', 'placeholder'], unmask: p = [], block: h = [], unblock: S = [], ignore: D = [], maskFn: C, beforeAddRecordingEvent: g, beforeErrorSampling: U } = {}) {
        this.name = rV.id;
        let P = (function ({ mask: e, unmask: t, block: r, unblock: n, ignore: a }) {
            let _ = rW(e, ['.sentry-mask', '[data-sentry-mask]']);
            return {
                maskTextSelector: _,
                unmaskTextSelector: rW(t, []),
                blockSelector: rW(r, ['.sentry-block', '[data-sentry-block]', 'base[href="/"]']),
                unblockSelector: rW(n, []),
                ignoreSelector: rW(a, ['.sentry-ignore', '[data-sentry-ignore]', 'input[type="file"]'])
            };
        })({
            mask: f,
            unmask: p,
            block: h,
            unblock: S,
            ignore: D
        });
        if (
            ((this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: E,
                maskInputOptions: { password: !0 },
                maskTextFn: C,
                maskInputFn: C,
                maskAttributeFn: (e, t, r) =>
                    (function ({ el: e, key: t, maskAttributes: r, maskAllText: n, privacyOptions: a, value: _ }) {
                        return !n || (a.unmaskTextSelector && e.matches(a.unmaskTextSelector)) ? _ : r.includes(t) || ('value' === t && 'INPUT' === e.tagName && ['submit', 'button'].includes(e.getAttribute('type') || '')) ? _.replace(/[\S]/g, '*') : _;
                    })({
                        maskAttributes: O,
                        maskAllText: E,
                        privacyOptions: P,
                        key: e,
                        value: t,
                        el: r
                    }),
                ...P,
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
                maxReplayDuration: Math.min(n, 3600000),
                stickySession: a,
                useCompression: _,
                workerUrl: o,
                blockAllMedia: s,
                maskAllInputs: c,
                maskAllText: E,
                mutationBreadcrumbLimit: l,
                mutationLimit: u,
                slowClickTimeout: I,
                slowClickIgnoreSelectors: R,
                networkDetailAllowUrls: N,
                networkDetailDenyUrls: A,
                networkCaptureBodies: T,
                networkRequestHeaders: rk(d),
                networkResponseHeaders: rk(L),
                beforeAddRecordingEvent: g,
                beforeErrorSampling: U,
                _experiments: i
            }),
            this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${rH}` : rH),
            this._isInitialized && (0, W.j)())
        )
            throw Error('Multiple Sentry Session Replay instances are not supported');
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return rY;
    }
    set _isInitialized(e) {
        rY = e;
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
                n = {
                    sessionSampleRate: 0,
                    errorSampleRate: 0,
                    ...(0, P.Jr)(e)
                },
                a = (0, C.o)(r.replaysSessionSampleRate),
                _ = (0, C.o)(r.replaysOnErrorSampleRate);
            return (
                null == a &&
                    null == _ &&
                    (0, m.Cf)(() => {
                        console.warn('Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.');
                    }),
                null != a && (n.sessionSampleRate = a),
                null != _ && (n.errorSampleRate = _),
                n
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
rV.__initStatic();
function rk(e) {
    return [...rx, ...e.map((e) => e.toLowerCase())];
}
function rF() {
    let e = (0, f.s3)();
    return e && e.getIntegrationByName('Replay');
}
