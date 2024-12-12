r.d(n, {
    T: function () {
        return S;
    }
});
var i = r(313694);
function a(e, n, r) {
    s(e, n), n.set(e, r);
}
function s(e, n) {
    if (n.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function l(e, n) {
    var r = d(e, n, 'get');
    return u(e, r);
}
function u(e, n) {
    return n.get ? n.get.call(e) : n.value;
}
function c(e, n, r) {
    var i = d(e, n, 'set');
    return f(e, i, r), r;
}
function d(e, n, r) {
    if (!n.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
    return n.get(e);
}
function f(e, n, r) {
    if (n.set) n.set.call(e, r);
    else {
        if (!n.writable) throw TypeError('attempted to set read only private field');
        n.value = r;
    }
}
var _ = new WeakMap(),
    h = new WeakMap(),
    p = new WeakMap(),
    m = new WeakMap(),
    g = new WeakMap(),
    E = new WeakMap(),
    v = new WeakMap(),
    I = new WeakMap(),
    T = new WeakMap(),
    b = new WeakMap(),
    y = new WeakMap();
class S {
    constructor(e, n, r) {
        if (
            (a(this, _, {
                writable: !0,
                value: void 0
            }),
            a(this, h, {
                writable: !0,
                value: void 0
            }),
            a(this, p, {
                writable: !0,
                value: void 0
            }),
            a(this, m, {
                writable: !0,
                value: void 0
            }),
            a(this, g, {
                writable: !0,
                value: void 0
            }),
            a(this, E, {
                writable: !0,
                value: (e, n, r) => {
                    var i, a;
                    if (!r.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(r)));
                    let s = r.backend(e, n, r.options),
                        o = r.id,
                        u = !r.id && s && s.constructor;
                    if ((u && (o = s.constructor.name), o)) u && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
                    else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(r), '\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx'));
                    if (l(this, p)[o]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(r), ' (conflicts with: ').concat(JSON.stringify(l(this, p)[o]), ')'));
                    return {
                        id: o,
                        instance: s,
                        preview: null !== (i = r.preview) && void 0 !== i && i,
                        transition: r.transition,
                        skipDispatchOnTransition: null !== (a = r.skipDispatchOnTransition) && void 0 !== a && a
                    };
                }
            }),
            o(this, 'setup', () => {
                if ('undefined' != typeof window) {
                    if (S.isSetUp) throw Error('Cannot have two MultiBackends at the same time.');
                    (S.isSetUp = !0), l(this, v).call(this, window), l(this, p)[l(this, _)].instance.setup();
                }
            }),
            o(this, 'teardown', () => {
                if ('undefined' != typeof window) (S.isSetUp = !1), l(this, I).call(this, window), l(this, p)[l(this, _)].instance.teardown();
            }),
            o(this, 'connectDragSource', (e, n, r) => l(this, y).call(this, 'connectDragSource', e, n, r)),
            o(this, 'connectDragPreview', (e, n, r) => l(this, y).call(this, 'connectDragPreview', e, n, r)),
            o(this, 'connectDropTarget', (e, n, r) => l(this, y).call(this, 'connectDropTarget', e, n, r)),
            o(this, 'profile', () => l(this, p)[l(this, _)].instance.profile()),
            o(this, 'previewEnabled', () => l(this, p)[l(this, _)].preview),
            o(this, 'previewsList', () => l(this, h)),
            o(this, 'backendsList', () => l(this, m)),
            a(this, v, {
                writable: !0,
                value: (e) => {
                    l(this, m).forEach((n) => {
                        n.transition && e.addEventListener(n.transition.event, l(this, T));
                    });
                }
            }),
            a(this, I, {
                writable: !0,
                value: (e) => {
                    l(this, m).forEach((n) => {
                        n.transition && e.removeEventListener(n.transition.event, l(this, T));
                    });
                }
            }),
            a(this, T, {
                writable: !0,
                value: (e) => {
                    let n = l(this, _);
                    if ((l(this, m).some((n) => !!(n.id !== l(this, _) && n.transition && n.transition.check(e)) && (c(this, _, n.id), !0)), l(this, _) !== n)) {
                        var r;
                        l(this, p)[n].instance.teardown(),
                            Object.keys(l(this, g)).forEach((e) => {
                                let n = l(this, g)[e];
                                n.unsubscribe(), (n.unsubscribe = l(this, b).call(this, n.func, ...n.args));
                            }),
                            l(this, h).backendChanged(this);
                        let i = l(this, p)[l(this, _)];
                        if ((i.instance.setup(), i.skipDispatchOnTransition)) return;
                        let a = new e.constructor(e.type, e);
                        null === (r = e.target) || void 0 === r || r.dispatchEvent(a);
                    }
                }
            }),
            a(this, b, {
                writable: !0,
                value: (e, n, r, i) => l(this, p)[l(this, _)].instance[e](n, r, i)
            }),
            a(this, y, {
                writable: !0,
                value: (e, n, r, i) => {
                    let a = ''.concat(e, '_').concat(n),
                        s = l(this, b).call(this, e, n, r, i);
                    return (
                        (l(this, g)[a] = {
                            func: e,
                            args: [n, r, i],
                            unsubscribe: s
                        }),
                        () => {
                            l(this, g)[a].unsubscribe(), delete l(this, g)[a];
                        }
                    );
                }
            }),
            !r || !r.backends || r.backends.length < 1)
        )
            throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
        c(this, h, new i.J()),
            c(this, p, {}),
            c(this, m, []),
            r.backends.forEach((r) => {
                let i = l(this, E).call(this, e, n, r);
                (l(this, p)[i.id] = i), l(this, m).push(i);
            }),
            c(this, _, l(this, m)[0].id),
            c(this, g, {});
    }
}
o(S, 'isSetUp', !1);
