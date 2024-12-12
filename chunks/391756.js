r.d(n, {
    Q: function () {
        return l;
    }
});
var i = r(644387),
    a = r(219845),
    s = r(383466),
    o = function (e) {
        return !(0, s.zd)(e) && !(0, s.jD)(e) && 'inline' === getComputedStyle(e).display;
    },
    l = (function () {
        function e(e, n) {
            (this.target = e),
                (this.observedBox = n || i.z.CONTENT_BOX),
                (this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                });
        }
        return (
            (e.prototype.isActive = function () {
                var e = (0, a.Y9)(this.target, this.observedBox);
                return o(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize || !1;
            }),
            e
        );
    })();
