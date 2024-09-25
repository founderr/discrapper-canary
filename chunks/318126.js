var r = n(67867),
    i = n(653457),
    a = n(139545);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: !0
    },
    {
        try: function (e) {
            var t = i.f(this),
                n = a(e);
            return (n.error ? t.reject : t.resolve)(n.value), t.promise;
        }
    }
);
