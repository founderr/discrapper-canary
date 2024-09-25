n.d(t, {
    T: function () {
        return v;
    }
});
var r = n(313694);
function i(e, t, n) {
    a(e, t), t.set(e, n);
}
function a(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function o(e, t, n) {
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
    var n = c(e, t, 'get');
    return l(e, n);
}
function l(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function u(e, t, n) {
    var r = c(e, t, 'set');
    return d(e, r, n), n;
}
function c(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function d(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
        if (!t.writable) throw TypeError('attempted to set read only private field');
        t.value = n;
    }
}
var _ = new WeakMap(),
    E = new WeakMap(),
    f = new WeakMap(),
    h = new WeakMap(),
    p = new WeakMap(),
    m = new WeakMap(),
    I = new WeakMap(),
    T = new WeakMap(),
    g = new WeakMap(),
    S = new WeakMap(),
    A = new WeakMap();
class v {
    constructor(e, t, n) {
        if (
            (i(this, _, {
                writable: !0,
                value: void 0
            }),
            i(this, E, {
                writable: !0,
                value: void 0
            }),
            i(this, f, {
                writable: !0,
                value: void 0
            }),
            i(this, h, {
                writable: !0,
                value: void 0
            }),
            i(this, p, {
                writable: !0,
                value: void 0
            }),
            i(this, m, {
                writable: !0,
                value: (e, t, n) => {
                    var r, i;
                    if (!n.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)));
                    let a = n.backend(e, t, n.options),
                        o = n.id,
                        l = !n.id && a && a.constructor;
                    if ((l && (o = a.constructor.name), o)) l && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
                    else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(n), '\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx'));
                    if (s(this, f)[o]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(n), ' (conflicts with: ').concat(JSON.stringify(s(this, f)[o]), ')'));
                    return {
                        id: o,
                        instance: a,
                        preview: null !== (r = n.preview) && void 0 !== r && r,
                        transition: n.transition,
                        skipDispatchOnTransition: null !== (i = n.skipDispatchOnTransition) && void 0 !== i && i
                    };
                }
            }),
            o(this, 'setup', () => {
                if ('undefined' != typeof window) {
                    if (v.isSetUp) throw Error('Cannot have two MultiBackends at the same time.');
                    (v.isSetUp = !0), s(this, I).call(this, window), s(this, f)[s(this, _)].instance.setup();
                }
            }),
            o(this, 'teardown', () => {
                if ('undefined' != typeof window) (v.isSetUp = !1), s(this, T).call(this, window), s(this, f)[s(this, _)].instance.teardown();
            }),
            o(this, 'connectDragSource', (e, t, n) => s(this, A).call(this, 'connectDragSource', e, t, n)),
            o(this, 'connectDragPreview', (e, t, n) => s(this, A).call(this, 'connectDragPreview', e, t, n)),
            o(this, 'connectDropTarget', (e, t, n) => s(this, A).call(this, 'connectDropTarget', e, t, n)),
            o(this, 'profile', () => s(this, f)[s(this, _)].instance.profile()),
            o(this, 'previewEnabled', () => s(this, f)[s(this, _)].preview),
            o(this, 'previewsList', () => s(this, E)),
            o(this, 'backendsList', () => s(this, h)),
            i(this, I, {
                writable: !0,
                value: (e) => {
                    s(this, h).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, s(this, g));
                    });
                }
            }),
            i(this, T, {
                writable: !0,
                value: (e) => {
                    s(this, h).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, s(this, g));
                    });
                }
            }),
            i(this, g, {
                writable: !0,
                value: (e) => {
                    let t = s(this, _);
                    if ((s(this, h).some((t) => !!(t.id !== s(this, _) && t.transition && t.transition.check(e)) && (u(this, _, t.id), !0)), s(this, _) !== t)) {
                        var n;
                        s(this, f)[t].instance.teardown(),
                            Object.keys(s(this, p)).forEach((e) => {
                                let t = s(this, p)[e];
                                t.unsubscribe(), (t.unsubscribe = s(this, S).call(this, t.func, ...t.args));
                            }),
                            s(this, E).backendChanged(this);
                        let r = s(this, f)[s(this, _)];
                        if ((r.instance.setup(), r.skipDispatchOnTransition)) return;
                        let i = new e.constructor(e.type, e);
                        null === (n = e.target) || void 0 === n || n.dispatchEvent(i);
                    }
                }
            }),
            i(this, S, {
                writable: !0,
                value: (e, t, n, r) => s(this, f)[s(this, _)].instance[e](t, n, r)
            }),
            i(this, A, {
                writable: !0,
                value: (e, t, n, r) => {
                    let i = ''.concat(e, '_').concat(t),
                        a = s(this, S).call(this, e, t, n, r);
                    return (
                        (s(this, p)[i] = {
                            func: e,
                            args: [t, n, r],
                            unsubscribe: a
                        }),
                        () => {
                            s(this, p)[i].unsubscribe(), delete s(this, p)[i];
                        }
                    );
                }
            }),
            !n || !n.backends || n.backends.length < 1)
        )
            throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
        u(this, E, new r.J()),
            u(this, f, {}),
            u(this, h, []),
            n.backends.forEach((n) => {
                let r = s(this, m).call(this, e, t, n);
                (s(this, f)[r.id] = r), s(this, h).push(r);
            }),
            u(this, _, s(this, h)[0].id),
            u(this, p, {});
    }
}
o(v, 'isSetUp', !1);
