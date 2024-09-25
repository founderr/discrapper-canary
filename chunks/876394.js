var r = n(67867),
    i = n(96403),
    a = n(952256),
    o = i([].reverse),
    s = [1, 2];
r(
    {
        target: 'Array',
        proto: !0,
        forced: String(s) === String(s.reverse())
    },
    {
        reverse: function () {
            return a(this) && (this.length = this.length), o(this);
        }
    }
);
