var r = n(67867),
    i = n(96403),
    a = Date,
    o = i(a.prototype.getTime);
r(
    {
        target: 'Date',
        stat: !0
    },
    {
        now: function () {
            return o(new a());
        }
    }
);
