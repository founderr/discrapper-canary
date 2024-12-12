var i = r(790215);
function a(e, n) {
    var r = this.__data__,
        a = (0, i.Z)(r, e);
    return a < 0 ? (++this.size, r.push([e, n])) : (r[a][1] = n), this;
}
n.Z = a;
