r.d(n, {
    Ng: function () {
        return b;
    },
    OC: function () {
        return C;
    },
    dg: function () {
        return y;
    },
    dp: function () {
        return E;
    },
    f3: function () {
        return I;
    },
    nA: function () {
        return S;
    },
    qF: function () {
        return g;
    },
    uV: function () {
        return T;
    },
    vY: function () {
        return N;
    }
});
var i = r(47120);
var a = r(112456),
    s = r.n(a),
    o = r(392711),
    l = r.n(o),
    u = r(430824),
    c = r(594174),
    d = r(380684),
    f = r(74538),
    _ = r(981631),
    h = r(474936);
let p = 524288000,
    m = 524288000;
function g(e, n) {
    return e instanceof File ? e : E(e.data, e.filename, n);
}
function E(e, n, i) {
    let a = r(230318);
    if (null == n && ((n = 'unknown'), 'type' in e)) {
        let r = a.extension(e.type);
        r && (n += '.'.concat(r));
    }
    return null == i && ('type' in e && (i = e.type), (i = null != i ? i : a.lookup(n))), new File([e], n, { type: i });
}
let v = [
    {
        reType: /^image\/vnd.adobe.photoshop/,
        klass: 'photoshop'
    },
    {
        reType: /^image\/svg\+xml/,
        klass: 'webcode'
    },
    {
        reType: /^image\//,
        klass: 'image'
    },
    {
        reType: /^video\//,
        klass: 'video'
    },
    {
        reName: /\.pdf$/,
        klass: 'acrobat'
    },
    {
        reName: /\.ae/,
        klass: 'ae'
    },
    {
        reName: /\.sketch$/,
        klass: 'sketch'
    },
    {
        reName: /\.ai$/,
        klass: 'ai'
    },
    {
        reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/,
        klass: 'archive'
    },
    {
        reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
        klass: 'code'
    },
    {
        reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/,
        klass: 'document'
    },
    {
        reName: /\.(?:xls|xlsx|numbers|csv)$/,
        klass: 'spreadsheet'
    },
    {
        reName: /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/,
        klass: 'webcode'
    },
    {
        reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/,
        klass: 'audio'
    }
];
function I(e) {
    return T(e.name, e.type);
}
function T(e, n) {
    var r;
    e = null !== (r = null == e ? void 0 : e.toLowerCase()) && void 0 !== r ? r : '';
    let i = l().find(v, (r) => (null != r.reType && null != n ? r.reType.test(n) : null != r.reName && '' !== e && r.reName.test(e)));
    return null != i ? i.klass : 'unknown';
}
function b(e) {
    return s().filesize(e);
}
function y(e) {
    let n = c.default.getCurrentUser(),
        r = f.ZP.getUserMaxFileSize(n);
    if (null == e) return r;
    let i = u.Z.getGuild(e),
        a = null != i ? h.HO[i.premiumTier].limits.fileSize : _.mBz;
    return (0, d.XS)() && null != i && i.premiumTier < 2 && r < a ? r : Math.max(a, r);
}
function S(e, n) {
    let r = y(n);
    return Array.from(e).some((e) => e.size > r);
}
function A(e) {
    let n = 0;
    for (let r of e) n += r.size;
    return n;
}
function N(e) {
    return A(e) > C();
}
function C() {
    let e = c.default.getCurrentUser();
    return null != e && e.isStaff() ? m : p;
}
