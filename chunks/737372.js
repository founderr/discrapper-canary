var i = {
        ECB: r(706584),
        CBC: r(100653),
        CFB: r(836997),
        CFB8: r(210856),
        CFB1: r(880767),
        OFB: r(689941),
        CTR: r(869133),
        GCM: r(869133)
    },
    a = r(313739);
for (var s in a) a[s].module = i[a[s].mode];
e.exports = a;
