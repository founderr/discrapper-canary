n.d(t, {
    T: function () {
        return I;
    }
});
var r = n(313694);
function i(e, t, n) {
    (function (e, t) {
        if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
    })(e, t),
        t.set(e, n);
}
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e, t) {
    var n = l(e, t, 'get');
    return (function (e, t) {
        return t.get ? t.get.call(e) : t.value;
    })(e, n);
}
function o(e, t, n) {
    var r = l(e, t, 'set');
    return (
        (function (e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
                if (!t.writable) throw TypeError('attempted to set read only private field');
                t.value = n;
            }
        })(e, r, n),
        n
    );
}
function l(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
var u = new WeakMap(),
    c = new WeakMap(),
    d = new WeakMap(),
    f = new WeakMap(),
    _ = new WeakMap(),
    p = new WeakMap(),
    h = new WeakMap(),
    m = new WeakMap(),
    g = new WeakMap(),
    E = new WeakMap(),
    v = new WeakMap();
class I {
    constructor(e, t, n) {
        if (
            (i(this, u, {
                writable: !0,
                value: void 0
            }),
            i(this, c, {
                writable: !0,
                value: void 0
            }),
            i(this, d, {
                writable: !0,
                value: void 0
            }),
            i(this, f, {
                writable: !0,
                value: void 0
            }),
            i(this, _, {
                writable: !0,
                value: void 0
            }),
            i(this, p, {
                writable: !0,
                value: (e, t, n) => {
                    var r, i;
                    if (!n.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)));
                    let a = n.backend(e, t, n.options),
                        o = n.id,
                        l = !n.id && a && a.constructor;
                    if ((l && (o = a.constructor.name), o)) l && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
                    else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(n), '\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx'));
                    if (s(this, d)[o]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(n), ' (conflicts with: ').concat(JSON.stringify(s(this, d)[o]), ')'));
                    return {
                        id: o,
                        instance: a,
                        preview: null !== (r = n.preview) && void 0 !== r && r,
                        transition: n.transition,
                        skipDispatchOnTransition: null !== (i = n.skipDispatchOnTransition) && void 0 !== i && i
                    };
                }
            }),
            a(this, 'setup', () => {
                if ('undefined' != typeof window) {
                    if (I.isSetUp) throw Error('Cannot have two MultiBackends at the same time.');
                    (I.isSetUp = !0), s(this, h).call(this, window), s(this, d)[s(this, u)].instance.setup();
                }
            }),
            a(this, 'teardown', () => {
                if ('undefined' != typeof window) (I.isSetUp = !1), s(this, m).call(this, window), s(this, d)[s(this, u)].instance.teardown();
            }),
            a(this, 'connectDragSource', (e, t, n) => s(this, v).call(this, 'connectDragSource', e, t, n)),
            a(this, 'connectDragPreview', (e, t, n) => s(this, v).call(this, 'connectDragPreview', e, t, n)),
            a(this, 'connectDropTarget', (e, t, n) => s(this, v).call(this, 'connectDropTarget', e, t, n)),
            a(this, 'profile', () => s(this, d)[s(this, u)].instance.profile()),
            a(this, 'previewEnabled', () => s(this, d)[s(this, u)].preview),
            a(this, 'previewsList', () => s(this, c)),
            a(this, 'backendsList', () => s(this, f)),
            i(this, h, {
                writable: !0,
                value: (e) => {
                    s(this, f).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, s(this, g));
                    });
                }
            }),
            i(this, m, {
                writable: !0,
                value: (e) => {
                    s(this, f).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, s(this, g));
                    });
                }
            }),
            i(this, g, {
                writable: !0,
                value: (e) => {
                    let t = s(this, u);
                    if ((s(this, f).some((t) => !!(t.id !== s(this, u) && t.transition && t.transition.check(e)) && (o(this, u, t.id), !0)), s(this, u) !== t)) {
                        var n;
                        s(this, d)[t].instance.teardown(),
                            Object.keys(s(this, _)).forEach((e) => {
                                let t = s(this, _)[e];
                                t.unsubscribe(), (t.unsubscribe = s(this, E).call(this, t.func, ...t.args));
                            }),
                            s(this, c).backendChanged(this);
                        let r = s(this, d)[s(this, u)];
                        if ((r.instance.setup(), r.skipDispatchOnTransition)) return;
                        let i = new e.constructor(e.type, e);
                        null === (n = e.target) || void 0 === n || n.dispatchEvent(i);
                    }
                }
            }),
            i(this, E, {
                writable: !0,
                value: (e, t, n, r) => s(this, d)[s(this, u)].instance[e](t, n, r)
            }),
            i(this, v, {
                writable: !0,
                value: (e, t, n, r) => {
                    let i = ''.concat(e, '_').concat(t),
                        a = s(this, E).call(this, e, t, n, r);
                    return (
                        (s(this, _)[i] = {
                            func: e,
                            args: [t, n, r],
                            unsubscribe: a
                        }),
                        () => {
                            s(this, _)[i].unsubscribe(), delete s(this, _)[i];
                        }
                    );
                }
            }),
            !n || !n.backends || n.backends.length < 1)
        )
            throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
        o(this, c, new r.J()),
            o(this, d, {}),
            o(this, f, []),
            n.backends.forEach((n) => {
                let r = s(this, p).call(this, e, t, n);
                (s(this, d)[r.id] = r), s(this, f).push(r);
            }),
            o(this, u, s(this, f)[0].id),
            o(this, _, {});
    }
}
a(I, 'isSetUp', !1);
