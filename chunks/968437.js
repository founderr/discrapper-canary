n.d(t, {
    WD: function () {
        return E;
    },
    nt: function () {
        return _;
    }
});
var r = n(404759),
    i = n.n(r),
    a = n(913527);
var o = n(124368),
    s = n(689938);
let l = 60,
    u = 1440,
    c = 4320,
    d = 10080;
function _() {
    return [
        {
            label: s.Z.Messages.AUTO_ARCHIVE_DURATION_1_HOUR,
            value: l
        },
        {
            label: s.Z.Messages.AUTO_ARCHIVE_DURATION_24_HOURS,
            value: u
        },
        {
            label: s.Z.Messages.AUTO_ARCHIVE_DURATION_3_DAYS,
            value: c
        },
        {
            label: s.Z.Messages.AUTO_ARCHIVE_DURATION_1_WEEK,
            value: d
        }
    ];
}
i()(() => _().map((e) => e.value));
function E(e, t) {
    var n;
    return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : o.AX;
}
