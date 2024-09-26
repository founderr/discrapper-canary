n.d(t, {
    dy: function () {
        return b;
    },
    gw: function () {
        return v;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(757143);
var o = n(653041);
var s = n(724458);
var l = n(392711),
    u = n.n(l),
    c = n(946188),
    d = n(176354),
    _ = n(906411);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = null,
    h = {},
    p = {},
    m = {},
    I = {},
    T = [],
    g = 0,
    S = 0,
    A = {
        '1f3fb': 0,
        '1f3fc': 1,
        '1f3fd': 2,
        '1f3fe': 3,
        '1f3ff': 4
    },
    v = ['\uD83C\uDFFB', '\uD83C\uDFFC', '\uD83C\uDFFD', '\uD83C\uDFFE', '\uD83C\uDFFF'],
    N = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    O = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    R = n(523558),
    C = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
    y = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
    L = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
for (let e = 0; e < v.length; e++) {
    let t = v[e];
    (m['skin-tone-'.concat(e + 1)] = t), (I[t] = 'skin-tone-'.concat(e + 1));
}
class b {
    get names() {
        return this.emojiObject.names;
    }
    get allNamesString() {
        return this.names.length > 1 ? ':'.concat(this.names.join(': :'), ':') : ':'.concat(this.uniqueName, ':');
    }
    get unicodeVersion() {
        var e;
        return null !== (e = this.emojiObject.unicodeVersion) && void 0 !== e ? e : 0;
    }
    get hasDiversity() {
        return this.emojiObject.hasDiversity;
    }
    get hasMultiDiversity() {
        return this.emojiObject.hasMultiDiversity;
    }
    get hasDiversityParent() {
        return this.emojiObject.hasDiversityParent;
    }
    get hasMultiDiversityParent() {
        return this.emojiObject.hasMultiDiversityParent;
    }
    get managed() {
        return !0;
    }
    get animated() {
        return !1;
    }
    get defaultDiversityChild() {
        if (this.hasDiversity && null != f) {
            let e = M(f);
            return this.diversityChildren[e];
        }
        return null;
    }
    get url() {
        let e = this.defaultDiversityChild;
        return null != e ? d.ZP.getURL(e.surrogates) : d.ZP.getURL(this.surrogates);
    }
    get name() {
        return this.hasDiversity && null != f ? ''.concat(this.uniqueName, '::').concat(I[f]) : this.uniqueName;
    }
    get optionallyDiverseSequence() {
        let e = this.defaultDiversityChild;
        return null != e ? e.surrogates : this.surrogates;
    }
    forEachDiversity(e) {
        null != this.diversityChildren && u().each(this.diversityChildren, e);
    }
    forEachName(e) {
        u().each(this.names, e);
    }
    setSpriteSheetIndex(e) {
        (this.index = e), (this.useSpriteSheet = !0);
    }
    constructor(e) {
        E(this, 'emojiObject', void 0), E(this, 'type', void 0), E(this, 'uniqueName', void 0), E(this, 'surrogates', void 0), E(this, 'diversityChildren', void 0), E(this, 'originalName', void 0), E(this, 'id', void 0), E(this, 'guildId', void 0), E(this, 'index', void 0), E(this, 'useSpriteSheet', void 0), (this.emojiObject = e), (this.type = _.B.UNICODE), (this.uniqueName = e.names[0]);
        if (((this.surrogates = e.surrogates), (this.diversityChildren = {}), null != e.diversityChildren)) {
            for (let t of e.diversityChildren)
                if (null != t.diversity) {
                    let e = t.diversity.join('-');
                    this.diversityChildren[e] = new b(t);
                }
        }
    }
}
let D = n(5420);
for (let e in D) {
    let t = D[e].map((e) => {
        let t = new b(e),
            n = t.surrogates,
            r = t.uniqueName;
        if ((t.setSpriteSheetIndex(t.hasDiversity ? g++ : S++), (I[n] = r), 0 > n.indexOf('‍'))) {
            let e = n.replace('️', '');
            e !== n && (I[e] = r);
        }
        for (let e of t.names) (p[e] = t), (m[e] = n);
        let i = t.diversityChildren;
        for (let t in i) {
            let n = i[t],
                r = n.surrogates;
            for (let e of n.names) (p[e] = n), (m[e] = r);
            if (!e.hasMultiDiversity) {
                let t = A[n.emojiObject.diversity[0]];
                for (let i of e.names) {
                    let e = ''.concat(i, '::skin-tone-').concat(t + 1);
                    (m[e] = r), (p[e] = n);
                }
            }
            I[r] = n.uniqueName;
        }
        return T.push(t), t;
    });
    h[e] = d.ZP.filterUnsupportedEmojis(t);
}
function M(e) {
    let t = c.Z.convert.toCodePoint(e);
    return null != t ? t : '';
}
function P(e) {
    f = null != e && '' !== e ? e : null;
}
function U() {
    return f;
}
function w() {
    return Object.keys(h);
}
function x(e) {
    return Object.prototype.hasOwnProperty.call(p, e) ? p[e] : null;
}
function G(e) {
    return h[e];
}
function k(e) {
    return e.replace(O, (e, t) => z(t, e));
}
function B(e) {
    let t = I[e];
    return null != t
        ? {
              type: 'emoji',
              surrogate: e,
              emojiName: ':'.concat(t, ':')
          }
        : {
              type: 'text',
              text: e
          };
}
let F = String.fromCodePoint(917631),
    Z = String.fromCodePoint(127988),
    V = /^[\u{E0061}-\u{E007A}]$/u;
function H(e, t) {
    var n;
    if (!0 !== t && !y.test(e))
        return [
            {
                type: 'text',
                text: e
            }
        ];
    let r = '',
        i = [],
        a = null !== (n = e.match(L)) && void 0 !== n ? n : [];
    for (let e = 0; e < a.length; e++) {
        let t = a[e];
        if (null != r && '' !== r) {
            if (t === F) (t = r + t), (r = '');
            else if (V.test(t)) {
                r += t;
                continue;
            } else i.push(B(r)), (r = '');
        } else if (t === Z) {
            r = t;
            continue;
        }
        let n = B(t);
        if (i.length > 0) {
            let e = i[i.length - 1];
            if ('text' === n.type && 'text' === e.type) {
                e.text += n.text;
                continue;
            }
        }
        i.push(n);
    }
    return null != r && '' !== r && i.push(B(r)), i;
}
function Y(e) {
    return H(e)
        .map((e) => ('text' === e.type ? e.text : e.emojiName))
        .join('');
}
function j(e) {
    if (!y.test(e)) return null;
    let t = H(e, !0)
        .map((e) => ('text' === e.type ? e.text : e.emojiName))
        .join('');
    return t === e ? null : t;
}
function W(e) {
    return u()
        .toArray(e)
        .some((e) => null != I[e]);
}
function K(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        r = n;
    return Object.prototype.hasOwnProperty.call(R, e) && (r = R[e]), t ? ':'.concat(r, ':') : r;
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    return Object.prototype.hasOwnProperty.call(m, e) ? m[e] : t;
}
function q(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        r = n;
    return Object.prototype.hasOwnProperty.call(I, e) && (r = I[e]), t ? ':'.concat(r, ':') : r;
}
function Q(e) {
    return x(
        q(
            v.reduce((e, t) => e.replace(t, ''), e),
            !1
        )
    );
}
t.ZP = {
    getDefaultDiversitySurrogate: U,
    setDefaultDiversitySurrogate: P,
    getCategories: w,
    getByName: x,
    getByCategory: G,
    translateInlineEmojiToSurrogates: k,
    maybeTranslateSurrogatesToInlineEmoji: j,
    findInlineEmojisFromSurrogates: H,
    translateSurrogatesToInlineEmoji: Y,
    convertNameToSurrogate: z,
    convertSurrogateToName: q,
    convertShortcutToName: K,
    convertSurrogateToBase: Q,
    forEach: (e) => u().each(T, e),
    all: () => T,
    numDiversitySprites: g,
    numNonDiversitySprites: S,
    EMOJI_NAME_RE: N,
    EMOJI_NAME_AND_DIVERSITY_RE: O,
    EMOJI_SHORTCUT_RE: C,
    hasSurrogates: W
};
