let a;
r.d(t, {
    m: function () {
        return b;
    }
});
var n,
    _,
    o,
    E = r(507690),
    i = r(151122);
((n = o || (o = {}))[(n.Document = 0)] = 'Document'), (n[(n.DocumentType = 1)] = 'DocumentType'), (n[(n.Element = 2)] = 'Element'), (n[(n.Text = 3)] = 'Text'), (n[(n.CDATA = 4)] = 'CDATA'), (n[(n.Comment = 5)] = 'Comment');
function c(e, t, r = 1 / 0, a = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || a > r ? -1 : t(e) ? a : c(e.parentNode, t, r, a + 1);
}
function s(e, t) {
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
let l = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
    I = {
        map: {},
        getId: () => (console.error(l), -1),
        getNode: () => (console.error(l), null),
        removeNodeFromMap() {
            console.error(l);
        },
        has: () => (console.error(l), !1),
        reset() {
            console.error(l);
        }
    };
function u(e, t, r, a, n = window) {
    let _ = n.Object.getOwnPropertyDescriptor(e, t);
    return (
        n.Object.defineProperty(
            e,
            t,
            a
                ? r
                : {
                      set(e) {
                          f(() => {
                              r.set.call(this, e);
                          }, 0),
                              _ && _.set && _.set.call(this, e);
                      }
                  }
        ),
        () => u(e, t, _ || {}, !0)
    );
}
function R(e, t, r) {
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
'undefined' != typeof window && window.Proxy && window.Reflect && (I = new Proxy(I, { get: (e, t, r) => ('map' === t && console.error(l), Reflect.get(e, t, r)) })), /[1-9][0-9]{12}/.test(Date.now().toString());
function A(e, t, r, a, n) {
    var _;
    if (!e) return !1;
    let o = (_ = e) ? (_.nodeType === _.ELEMENT_NODE ? _ : _.parentElement) : null;
    if (!o) return !1;
    let E = s(t, r);
    if (!n) {
        let e = a && o.matches(a);
        return E(o) && !e;
    }
    let i = c(o, E),
        l = -1;
    return !(i < 0) && (a && (l = c(o, s(null, a))), (!!(i > -1) && !!(l < 0)) || i < l);
}
let T = {};
function N(e) {
    let t = T[e];
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
    return (T[e] = a.bind(window));
}
function d(...e) {
    return N('requestAnimationFrame')(...e);
}
function f(...e) {
    return N('setTimeout')(...e);
}
var O = (((_ = O || {})[(_['2D'] = 0)] = '2D'), (_[(_.WebGL = 1)] = 'WebGL'), (_[(_.WebGL2 = 2)] = 'WebGL2'), _);
let L = (e) =>
    a
        ? (...t) => {
              try {
                  return e(...t);
              } catch (e) {
                  if (a && !0 === a(e)) return () => {};
                  throw e;
              }
          }
        : e;
for (var p = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', h = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256), D = 0; D < p.length; D++) h[p.charCodeAt(D)] = D;
var S = function (e) {
    var t,
        r = new Uint8Array(e),
        a = r.length,
        n = '';
    for (t = 0; t < a; t += 3) n += p[r[t] >> 2] + p[((3 & r[t]) << 4) | (r[t + 1] >> 4)] + p[((15 & r[t + 1]) << 2) | (r[t + 2] >> 6)] + p[63 & r[t + 2]];
    return a % 3 == 2 ? (n = n.substring(0, n.length - 1) + '=') : a % 3 == 1 && (n = n.substring(0, n.length - 2) + '=='), n;
};
let C = new Map(),
    P = (e, t, r) => {
        var a, n;
        let _;
        if (!e || !(U(e, t) || 'object' == typeof e)) return;
        let o = e.constructor.name;
        let E = ((a = r), (n = o), !(_ = C.get(a)) && ((_ = new Map()), C.set(a, _)), !_.has(n) && _.set(n, []), _.get(n)),
            i = E.indexOf(e);
        return -1 === i && ((i = E.length), E.push(e)), i;
    },
    g = (e, t, r) =>
        e.map((e) =>
            (function e(t, r, a) {
                if (t instanceof Array) return t.map((t) => e(t, r, a));
                if (null === t);
                else if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray)
                    return {
                        rr_type: t.constructor.name,
                        args: [Object.values(t)]
                    };
                else if (t instanceof ArrayBuffer) {
                    let e = t.constructor.name;
                    return {
                        rr_type: e,
                        base64: S(t)
                    };
                } else if (t instanceof DataView)
                    return {
                        rr_type: t.constructor.name,
                        args: [e(t.buffer, r, a), t.byteOffset, t.byteLength]
                    };
                else if (t instanceof HTMLImageElement) {
                    let e = t.constructor.name,
                        { src: r } = t;
                    return {
                        rr_type: e,
                        src: r
                    };
                } else if (t instanceof HTMLCanvasElement)
                    return {
                        rr_type: 'HTMLImageElement',
                        src: t.toDataURL()
                    };
                else if (t instanceof ImageData)
                    return {
                        rr_type: t.constructor.name,
                        args: [e(t.data, r, a), t.width, t.height]
                    };
                else if (U(t, r) || 'object' == typeof t) {
                    let e = t.constructor.name;
                    return {
                        rr_type: e,
                        index: P(t, r, a)
                    };
                }
                return t;
            })(e, t, r)
        ),
    U = (e, t) => !!['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject', 'WebGLVertexArrayObjectOES'].filter((e) => 'function' == typeof t[e]).find((r) => e instanceof t[r]);
function M(e, t, r, a, n) {
    let _ = [];
    try {
        let o = R(e.HTMLCanvasElement.prototype, 'getContext', function (e) {
            return function (_, ...o) {
                if (!A(this, t, r, a, !0)) {
                    var E;
                    let e = ((E = _), 'experimental-webgl' === E ? 'webgl' : E);
                    if ((!('__context' in this) && (this.__context = e), n && ['webgl', 'webgl2'].includes(e))) {
                        if (o[0] && 'object' == typeof o[0]) {
                            let e = o[0];
                            !e.preserveDrawingBuffer && (e.preserveDrawingBuffer = !0);
                        } else o.splice(0, 1, { preserveDrawingBuffer: !0 });
                    }
                }
                return e.apply(this, [_, ...o]);
            };
        });
        _.push(o);
    } catch (e) {
        console.error('failed to patch HTMLCanvasElement.prototype.getContext');
    }
    return () => {
        _.forEach((e) => e());
    };
}
function G(e, t, r, a, n, _, o, E) {
    let i = [];
    for (let o of Object.getOwnPropertyNames(e)) {
        if (!['isContextLost', 'canvas', 'drawingBufferWidth', 'drawingBufferHeight'].includes(o))
            try {
                if ('function' != typeof e[o]) continue;
                let c = R(e, o, function (e) {
                    return function (...i) {
                        let c = e.apply(this, i);
                        if ((P(c, E, this), 'tagName' in this.canvas && !A(this.canvas, a, n, _, !0))) {
                            let e = g(i, E, this),
                                a = {
                                    type: t,
                                    property: o,
                                    args: e
                                };
                            r(this.canvas, a);
                        }
                        return c;
                    };
                });
                i.push(c);
            } catch (n) {
                let a = u(e, o, {
                    set(e) {
                        r(this.canvas, {
                            type: t,
                            property: o,
                            args: [e],
                            setter: !0
                        });
                    }
                });
                i.push(a);
            }
    }
    return i;
}
class m {
    reset() {
        this.pendingCanvasMutations.clear(),
            this.restoreHandlers.forEach((e) => {
                try {
                    e();
                } catch (e) {}
            }),
            (this.restoreHandlers = []),
            (this.windowsSet = new WeakSet()),
            (this.windows = []),
            (this.shadowDoms = new Set()),
            (0, E.x)([this, 'access', (e) => e.worker, 'optionalAccess', (e) => e.terminate, 'call', (e) => e()]),
            (this.worker = null),
            (this.snapshotInProgressMap = new Map()),
            ((this.options.recordCanvas && 'number' == typeof this.options.sampling) || this.options.enableManualSnapshot) && (this.worker = this.initFPSWorker());
    }
    freeze() {
        this.frozen = !0;
    }
    unfreeze() {
        this.frozen = !1;
    }
    lock() {
        this.locked = !0;
    }
    unlock() {
        this.locked = !1;
    }
    constructor(e) {
        (this.pendingCanvasMutations = new Map()),
            (this.rafStamps = {
                latestId: 0,
                invokeId: null
            }),
            (this.shadowDoms = new Set()),
            (this.windowsSet = new WeakSet()),
            (this.windows = []),
            (this.restoreHandlers = []),
            (this.frozen = !1),
            (this.locked = !1),
            (this.snapshotInProgressMap = new Map()),
            (this.worker = null),
            (this.processMutation = (e, t) => {
                ((this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), !this.pendingCanvasMutations.has(e) && this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t);
            });
        let { sampling: t = 'all', win: r, blockClass: n, blockSelector: _, unblockSelector: o, maxCanvasSize: E, recordCanvas: i, dataURLOptions: c, errorHandler: s } = e;
        if (((this.mutationCb = e.mutationCb), (this.mirror = e.mirror), (this.options = e), s)) a = s;
        if ((((i && 'number' == typeof t) || e.enableManualSnapshot) && (this.worker = this.initFPSWorker()), this.addWindow(r), e.enableManualSnapshot)) return;
        L(() => {
            i && 'all' === t && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), i && 'number' == typeof t && this.initCanvasFPSObserver(t, n, _, o, E, { dataURLOptions: c });
        })();
    }
    addWindow(e) {
        let { sampling: t = 'all', blockClass: r, blockSelector: a, unblockSelector: n, recordCanvas: _, enableManualSnapshot: o } = this.options;
        if (!this.windowsSet.has(e)) {
            if (o) {
                this.windowsSet.add(e), this.windows.push(new WeakRef(e));
                return;
            }
            L(() => {
                if ((_ && 'all' === t && this.initCanvasMutationObserver(e, r, a, n), _ && 'number' == typeof t)) {
                    let t = M(e, r, a, n, !0);
                    this.restoreHandlers.push(() => {
                        t();
                    });
                }
            })(),
                this.windowsSet.add(e),
                this.windows.push(new WeakRef(e));
        }
    }
    addShadowRoot(e) {
        this.shadowDoms.add(new WeakRef(e));
    }
    resetShadowRoots() {
        this.shadowDoms = new Set();
    }
    initFPSWorker() {
        let e = new Worker(
            (function () {
                let e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']);
                return URL.createObjectURL(e);
            })()
        );
        return (
            (e.onmessage = (e) => {
                let t = e.data,
                    { id: r } = t;
                if ((this.snapshotInProgressMap.set(r, !1), !('base64' in t))) return;
                let { base64: a, type: n, width: _, height: o } = t;
                this.mutationCb({
                    id: r,
                    type: O['2D'],
                    commands: [
                        {
                            property: 'clearRect',
                            args: [0, 0, _, o]
                        },
                        {
                            property: 'drawImage',
                            args: [
                                {
                                    rr_type: 'ImageBitmap',
                                    args: [
                                        {
                                            rr_type: 'Blob',
                                            data: [
                                                {
                                                    rr_type: 'ArrayBuffer',
                                                    base64: a
                                                }
                                            ],
                                            type: n
                                        }
                                    ]
                                },
                                0,
                                0,
                                _,
                                o
                            ]
                        }
                    ]
                });
            }),
            e
        );
    }
    initCanvasFPSObserver(e, t, r, a, n, _) {
        let o = this.takeSnapshot(!1, e, t, r, a, n, _.dataURLOptions);
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(o);
        });
    }
    initCanvasMutationObserver(e, t, r, a) {
        let n = M(e, t, r, a, !1),
            _ = (function (e, t, r, a, n) {
                let _ = [];
                for (let o of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype))
                    try {
                        if ('function' != typeof t.CanvasRenderingContext2D.prototype[o]) continue;
                        let E = R(t.CanvasRenderingContext2D.prototype, o, function (_) {
                            return function (...E) {
                                return (
                                    !A(this.canvas, r, a, n, !0) &&
                                        f(() => {
                                            let r = g(E, t, this);
                                            e(this.canvas, {
                                                type: O['2D'],
                                                property: o,
                                                args: r
                                            });
                                        }, 0),
                                    _.apply(this, E)
                                );
                            };
                        });
                        _.push(E);
                    } catch (a) {
                        let r = u(t.CanvasRenderingContext2D.prototype, o, {
                            set(t) {
                                e(this.canvas, {
                                    type: O['2D'],
                                    property: o,
                                    args: [t],
                                    setter: !0
                                });
                            }
                        });
                        _.push(r);
                    }
                return () => {
                    _.forEach((e) => e());
                };
            })(this.processMutation.bind(this), e, t, r, a),
            o = (function (e, t, r, a, n, _) {
                let o = [];
                return (
                    o.push(...G(t.WebGLRenderingContext.prototype, O.WebGL, e, r, a, n, _, t)),
                    void 0 !== t.WebGL2RenderingContext && o.push(...G(t.WebGL2RenderingContext.prototype, O.WebGL2, e, r, a, n, _, t)),
                    () => {
                        o.forEach((e) => e());
                    }
                );
            })(this.processMutation.bind(this), e, t, r, a, this.mirror);
        this.restoreHandlers.push(() => {
            n(), _(), o();
        });
    }
    snapshot(e) {
        let { options: t } = this,
            r = this.takeSnapshot(!0, 'all' === t.sampling ? 2 : t.sampling || 2, t.blockClass, t.blockSelector, t.unblockSelector, t.maxCanvasSize, t.dataURLOptions, e);
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(r);
        });
    }
    takeSnapshot(e, t, r, a, n, _, o, i) {
        let c;
        let s = 1000 / t,
            l = 0,
            I = (e) => {
                if (e) return [e];
                let t = [],
                    _ = (e) => {
                        e.querySelectorAll('canvas').forEach((e) => {
                            !A(e, r, a, n, !0) && t.push(e);
                        });
                    };
                for (let e of this.windows) {
                    let t = e.deref();
                    t && _(t.document);
                }
                for (let e of this.shadowDoms) {
                    let t = e.deref();
                    t && _(t);
                }
                return t;
            },
            u = (t) => {
                if (!!this.windows.length) {
                    if (l && t - l < s) {
                        c = d(u);
                        return;
                    }
                    (l = t),
                        I(i).forEach((t) => {
                            if (!this.mirror.hasNode(t)) return;
                            let r = this.mirror.getId(t);
                            if (!this.snapshotInProgressMap.get(r)) {
                                if (t.width && t.height) {
                                    if ((this.snapshotInProgressMap.set(r, !0), !e && ['webgl', 'webgl2'].includes(t.__context))) {
                                        let e = t.getContext(t.__context);
                                        !1 === (0, E.x)([e, 'optionalAccess', (e) => e.getContextAttributes, 'call', (e) => e(), 'optionalAccess', (e) => e.preserveDrawingBuffer]) && e.clear(e.COLOR_BUFFER_BIT);
                                    }
                                    createImageBitmap(t)
                                        .then((e) => {
                                            (0, E.x)([
                                                this,
                                                'access',
                                                (e) => e.worker,
                                                'optionalAccess',
                                                (e) => e.postMessage,
                                                'call',
                                                (a) =>
                                                    a(
                                                        {
                                                            id: r,
                                                            bitmap: e,
                                                            width: t.width,
                                                            height: t.height,
                                                            dataURLOptions: o,
                                                            maxCanvasSize: _
                                                        },
                                                        [e]
                                                    )
                                            ]);
                                        })
                                        .catch((e) => {
                                            L(() => {
                                                throw e;
                                            })();
                                        });
                                }
                            }
                        }),
                        (c = d(u));
                }
            };
        return (c = d(u));
    }
    startPendingCanvasMutationFlusher() {
        d(() => this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
        let e = (t) => {
            (this.rafStamps.latestId = t), d(e);
        };
        d(e);
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((e, t) => {
            let r = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, r);
        }),
            d(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(e, t) {
        if (this.frozen || this.locked) return;
        let r = this.pendingCanvasMutations.get(e);
        if (!r || -1 === t) return;
        let a = r.map((e) => {
                let { type: t, ...r } = e;
                return r;
            }),
            { type: n } = r[0];
        this.mutationCb({
            id: t,
            type: n,
            commands: a
        }),
            this.pendingCanvasMutations.delete(e);
    }
}
let y = {
        low: {
            sampling: { canvas: 1 },
            dataURLOptions: {
                type: 'image/webp',
                quality: 0.25
            }
        },
        medium: {
            sampling: { canvas: 2 },
            dataURLOptions: {
                type: 'image/webp',
                quality: 0.4
            }
        },
        high: {
            sampling: { canvas: 4 },
            dataURLOptions: {
                type: 'image/webp',
                quality: 0.5
            }
        }
    },
    b = (0, i._I)((e = {}) => {
        let t;
        let [r, a] = e.maxCanvasSize || [],
            n = {
                quality: e.quality || 'medium',
                enableManualSnapshot: e.enableManualSnapshot,
                maxCanvasSize: [r ? Math.min(r, 1280) : 1280, a ? Math.min(a, 1280) : 1280]
            },
            _ = new Promise((e) => (t = e));
        return {
            name: 'ReplayCanvas',
            getOptions() {
                let { quality: e, enableManualSnapshot: r, maxCanvasSize: a } = n;
                return {
                    enableManualSnapshot: r,
                    recordCanvas: !0,
                    getCanvasManager: (e) => {
                        let n = new m({
                            ...e,
                            enableManualSnapshot: r,
                            maxCanvasSize: a,
                            errorHandler: (e) => {
                                try {
                                    'object' == typeof e && (e.__rrweb__ = !0);
                                } catch (e) {}
                            }
                        });
                        return t(n), n;
                    },
                    ...(y[e || 'medium'] || y.medium)
                };
            },
            async snapshot(e) {
                (await _).snapshot(e);
            }
        };
    });
