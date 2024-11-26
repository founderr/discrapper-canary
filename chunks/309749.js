var a = r(147018),
    n = r(926515);
a(
    {
        target: 'URL',
        proto: !0,
        enumerable: !0
    },
    {
        toJSON: function () {
            return n(URL.prototype.toString, this);
        }
    }
);
