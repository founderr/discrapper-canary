var i = r(147018),
    a = r(339718),
    s = r(49693),
    o = r(959318),
    l = r(345374);
i(
    {
        target: 'Array',
        proto: !0
    },
    {
        at: function (e) {
            var n = a(this),
                r = s(n),
                i = o(e),
                l = i >= 0 ? i : r + i;
            return l < 0 || l >= r ? void 0 : n[l];
        }
    }
),
    l('at');
