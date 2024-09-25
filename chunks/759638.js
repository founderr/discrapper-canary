var r = n(790215);
function i(e, t) {
    var n = this.__data__,
        i = (0, r.Z)(n, e);
    return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
}
t.Z = i;
