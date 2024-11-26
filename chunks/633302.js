n.d(t, {
    dy: function () {
        return S;
    },
    gw: function () {
        return E;
    }
}),
    n(411104),
    n(47120),
    n(757143),
    n(653041),
    n(724458);
var r = n(392711),
    i = n.n(r),
    a = n(336317),
    s = n(176354),
    o = n(906411);
function l(e, t, n) {
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
let u = null,
    c = {},
    d = {},
    f = {},
    _ = {},
    p = [],
    h = 0,
    m = 0,
    g = {
        '1f3fb': 0,
        '1f3fc': 1,
        '1f3fd': 2,
        '1f3fe': 3,
        '1f3ff': 4
    },
    E = ['\uD83C\uDFFB', '\uD83C\uDFFC', '\uD83C\uDFFD', '\uD83C\uDFFE', '\uD83C\uDFFF'],
    v = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    I = n(523558),
    T = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
    b = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
for (let e = 0; e < E.length; e++) {
    let t = E[e];
    (f['skin-tone-'.concat(e + 1)] = t), (_[t] = 'skin-tone-'.concat(e + 1));
}
class S {
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
        if (this.hasDiversity && null != u) {
            let e = (function (e) {
                let t = a.Z.convert.toCodePoint(e);
                return null != t ? t : '';
            })(u);
            return this.diversityChildren[e];
        }
        return null;
    }
    get url() {
        let e = this.defaultDiversityChild;
        return null != e ? s.ZP.getURL(e.surrogates) : s.ZP.getURL(this.surrogates);
    }
    get name() {
        return this.hasDiversity && null != u ? ''.concat(this.uniqueName, '::').concat(_[u]) : this.uniqueName;
    }
    get optionallyDiverseSequence() {
        let e = this.defaultDiversityChild;
        return null != e ? e.surrogates : this.surrogates;
    }
    forEachDiversity(e) {
        null != this.diversityChildren && i().each(this.diversityChildren, e);
    }
    forEachName(e) {
        i().each(this.names, e);
    }
    setSpriteSheetIndex(e) {
        (this.index = e), (this.useSpriteSheet = !0);
    }
    constructor(e) {
        l(this, 'emojiObject', void 0), l(this, 'type', void 0), l(this, 'uniqueName', void 0), l(this, 'surrogates', void 0), l(this, 'diversityChildren', void 0), l(this, 'originalName', void 0), l(this, 'id', void 0), l(this, 'guildId', void 0), l(this, 'index', void 0), l(this, 'useSpriteSheet', void 0), (this.emojiObject = e), (this.type = o.B.UNICODE), (this.uniqueName = e.names[0]);
        if (((this.surrogates = e.surrogates), (this.diversityChildren = {}), null != e.diversityChildren)) {
            for (let t of e.diversityChildren)
                if (null != t.diversity) {
                    let e = t.diversity.join('-');
                    this.diversityChildren[e] = new S(t);
                }
        }
    }
}
let y = n(5420);
for (let e in y) {
    let t = y[e].map((e) => {
        let t = new S(e),
            n = t.surrogates,
            r = t.uniqueName;
        if ((t.setSpriteSheetIndex(t.hasDiversity ? h++ : m++), (_[n] = r), 0 > n.indexOf('‍'))) {
            let e = n.replace('️', '');
            e !== n && (_[e] = r);
        }
        for (let e of t.names) (d[e] = t), (f[e] = n);
        let i = t.diversityChildren;
        for (let t in i) {
            let n = i[t],
                r = n.surrogates;
            for (let e of n.names) (d[e] = n), (f[e] = r);
            if (!e.hasMultiDiversity) {
                let t = g[n.emojiObject.diversity[0]];
                for (let i of e.names) {
                    let e = ''.concat(i, '::skin-tone-').concat(t + 1);
                    (f[e] = r), (d[e] = n);
                }
            }
            _[r] = n.uniqueName;
        }
        return p.push(t), t;
    });
    c[e] = s.ZP.filterUnsupportedEmojis(t);
}
function A(e) {
    return Object.prototype.hasOwnProperty.call(d, e) ? d[e] : null;
}
function N(e) {
    let t = _[e];
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
let C = String.fromCodePoint(917631),
    R = String.fromCodePoint(127988),
    O = /^[\u{E0061}-\u{E007A}]$/u;
function D(e, t) {
    var n;
    if (!0 !== t && !T.test(e))
        return [
            {
                type: 'text',
                text: e
            }
        ];
    let r = '',
        i = [],
        a = null !== (n = e.match(b)) && void 0 !== n ? n : [];
    for (let e = 0; e < a.length; e++) {
        let t = a[e];
        if (null != r && '' !== r) {
            if (t === C) (t = r + t), (r = '');
            else if (O.test(t)) {
                r += t;
                continue;
            } else i.push(N(r)), (r = '');
        } else if (t === R) {
            r = t;
            continue;
        }
        let n = N(t);
        if (i.length > 0) {
            let e = i[i.length - 1];
            if ('text' === n.type && 'text' === e.type) {
                e.text += n.text;
                continue;
            }
        }
        i.push(n);
    }
    return null != r && '' !== r && i.push(N(r)), i;
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    return Object.prototype.hasOwnProperty.call(f, e) ? f[e] : t;
}
function x(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        r = n;
    return Object.prototype.hasOwnProperty.call(_, e) && (r = _[e]), t ? ':'.concat(r, ':') : r;
}
t.ZP = {
    getDefaultDiversitySurrogate: function () {
        return u;
    },
    setDefaultDiversitySurrogate: function (e) {
        u = null != e && '' !== e ? e : null;
    },
    getCategories: function () {
        return Object.keys(c);
    },
    getByName: A,
    getByCategory: function (e) {
        return c[e];
    },
    translateInlineEmojiToSurrogates: function (e) {
        return e.replace(v, (e, t) => L(t, e));
    },
    maybeTranslateSurrogatesToInlineEmoji: function (e) {
        if (!T.test(e)) return null;
        let t = D(e, !0)
            .map((e) => ('text' === e.type ? e.text : e.emojiName))
            .join('');
        return t === e ? null : t;
    },
    findInlineEmojisFromSurrogates: D,
    translateSurrogatesToInlineEmoji: function (e) {
        return D(e)
            .map((e) => ('text' === e.type ? e.text : e.emojiName))
            .join('');
    },
    convertNameToSurrogate: L,
    convertSurrogateToName: x,
    convertShortcutToName: function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
            r = n;
        return Object.prototype.hasOwnProperty.call(I, e) && (r = I[e]), t ? ':'.concat(r, ':') : r;
    },
    convertSurrogateToBase: function (e) {
        return A(
            x(
                E.reduce((e, t) => e.replace(t, ''), e),
                !1
            )
        );
    },
    forEach: (e) => i().each(p, e),
    all: () => p,
    numDiversitySprites: h,
    numNonDiversitySprites: m,
    EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    EMOJI_NAME_AND_DIVERSITY_RE: v,
    EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
    hasSurrogates: function (e) {
        return i()
            .toArray(e)
            .some((e) => null != _[e]);
    }
};
