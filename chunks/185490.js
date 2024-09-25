var r = n(790215),
    i = Array.prototype.splice;
function a(e) {
    var t = this.__data__,
        n = (0, r.Z)(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0);
}
t.Z = a;
