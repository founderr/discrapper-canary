var i = r(451530),
    a = (function () {
        var e = /[^.]+$/.exec((i.Z && i.Z.keys && i.Z.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
    })();
function s(e) {
    return !!a && a in e;
}
n.Z = s;
