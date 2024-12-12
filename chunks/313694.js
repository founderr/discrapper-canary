function i(e, n, r) {
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
function a(e, n, r) {
    s(e, n), n.set(e, r);
}
function s(e, n) {
    if (n.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function o(e, n) {
    var r = c(e, n, 'get');
    return l(e, r);
}
function l(e, n) {
    return n.get ? n.get.call(e) : n.value;
}
function u(e, n, r) {
    var i = c(e, n, 'set');
    return d(e, i, r), r;
}
function c(e, n, r) {
    if (!n.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
    return n.get(e);
}
function d(e, n, r) {
    if (n.set) n.set.call(e, r);
    else {
        if (!n.writable) throw TypeError('attempted to set read only private field');
        n.value = r;
    }
}
r.d(n, {
    J: function () {
        return _;
    }
});
var f = new WeakMap();
class _ {
    constructor() {
        a(this, f, {
            writable: !0,
            value: void 0
        }),
            i(this, 'register', (e) => {
                o(this, f).push(e);
            }),
            i(this, 'unregister', (e) => {
                let n;
                for (; -1 !== (n = o(this, f).indexOf(e)); ) o(this, f).splice(n, 1);
            }),
            i(this, 'backendChanged', (e) => {
                for (let n of o(this, f)) n.backendChanged(e);
            }),
            u(this, f, []);
    }
}
