var i = r(595022),
    a = r(483266),
    s = r(334389),
    o = 200;
function l(e, n) {
    var r = this.__data__;
    if (r instanceof i.Z) {
        var l = r.__data__;
        if (!a.Z || l.length < o - 1) return l.push([e, n]), (this.size = ++r.size), this;
        r = this.__data__ = new s.Z(l);
    }
    return r.set(e, n), (this.size = r.size), this;
}
n.Z = l;
