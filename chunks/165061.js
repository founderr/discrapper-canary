var r = n(110592);
function i(e, t) {
    var n = (0, r.Z)(this, e),
        i = n.size;
    return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
}
t.Z = i;
