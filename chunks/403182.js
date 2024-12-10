n.d(t, {
    Ng: function () {
        return v;
    },
    OC: function () {
        return S;
    },
    dg: function () {
        return I;
    },
    dp: function () {
        return h;
    },
    f3: function () {
        return g;
    },
    nA: function () {
        return T;
    },
    qF: function () {
        return p;
    },
    uV: function () {
        return E;
    },
    vY: function () {
        return b;
    }
}),
    n(47120);
var r = n(112456),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(948350),
    l = n(430824),
    u = n(594174),
    c = n(380684),
    d = n(74538),
    f = n(981631),
    _ = n(474936);
function p(e, t) {
    return e instanceof File ? e : h(e.data, e.filename, t);
}
function h(e, t, r) {
    let i = n(230318);
    if (null == t && ((t = 'unknown'), 'type' in e)) {
        let n = i.extension(e.type);
        n && (t += '.'.concat(n));
    }
    return null == r && ('type' in e && (r = e.type), (r = null != r ? r : i.lookup(t))), new File([e], t, { type: r });
}
let m = [
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
function g(e) {
    return E(e.name, e.type);
}
function E(e, t) {
    var n;
    e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : '';
    let r = s().find(m, (n) => (null != n.reType && null != t ? n.reType.test(t) : null != n.reName && '' !== e && n.reName.test(e)));
    return null != r ? r.klass : 'unknown';
}
function v(e) {
    return i().filesize(e);
}
function I(e) {
    let t = u.default.getCurrentUser();
    o.Z.trackExposure({ location: 'de18ec_2' });
    let n = d.ZP.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = l.Z.getGuild(e),
        i = null != r ? _.HO[r.premiumTier].limits.fileSize : f.mBz;
    return (0, c.XS)() && null != r && r.premiumTier < 2 && n < i ? n : Math.max(i, n);
}
function T(e, t) {
    let n = I(t);
    return Array.from(e).some((e) => e.size > n);
}
function b(e) {
    return (
        (function (e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t;
        })(e) > S()
    );
}
function S() {
    let e = u.default.getCurrentUser();
    return null != e && e.isStaff() ? 524288000 : 524288000;
}
