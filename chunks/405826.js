n.d(t, {
    N: function () {
        return N;
    }
});
var r = n(757143);
var i = n(47120);
var a = n(623279),
    o = n(392711),
    s = n.n(o),
    l = n(374470),
    u = n(579806),
    c = n(710845),
    d = n(706454),
    _ = n(823379),
    E = n(598105),
    f = n(643413);
function h(e, t, n) {
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
let p = 250,
    m = new c.Z('Spellchecker'),
    I = null === u.Z || void 0 === u.Z ? void 0 : u.Z.spellCheck;
function T(e) {
    var t;
    e = null !== (t = f.Z[e]) && void 0 !== t ? t : e;
    let n = (0, a.parse)(e.replace(/[_-]/g, '-'));
    if (null == n || null == n.langtag.language || null == n.langtag.region) {
        m.error(''.concat(e, ' is not a valid locale.'));
        return;
    }
    let { language: r, region: i } = n.langtag;
    return ''.concat(r.language.toLowerCase(), '-').concat(i.toUpperCase());
}
class g {
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e;
    }
    setLearnedWords(e) {
        I.setLearnedWords(e);
    }
    setLocale(e) {
        var t;
        null === (t = I.setLocale(e)) ||
            void 0 === t ||
            t.then((t) => {
                m.info('Switching to '.concat(e), t ? '(available)' : '(unavailable)');
            });
    }
    setAppLocale(e) {
        this.regionPreference = e.split('-')[1];
    }
    detectLanguage(e) {
        if (!!this.enabled) this.languageDetector.process(e);
    }
    getAvailableLanguages(e) {
        let t = {};
        return (
            e.forEach((e) => {
                var n;
                let [r] = e.split('-');
                t[r] = null !== (n = t[r]) && void 0 !== n ? n : e;
            }),
            t
        );
    }
    isMisspelled(e, t) {
        return '' !== this.misspelledWord && e === this.misspelledWord;
    }
    getCorrectionsForMisspelling(e, t) {
        return this.isMisspelled(e, t) ? this.corrections : [];
    }
    replaceMisspelling(e) {
        I.replaceMisspelling(e);
    }
    constructor(e) {
        h(this, 'languageDetector', void 0), h(this, 'regionPreference', void 0), h(this, '_enabled', !0), h(this, 'misspelledWord', ''), h(this, 'corrections', []);
        let [t, n] = d.default.locale.split('-');
        this.regionPreference = n;
        let r = this.getAvailableLanguages(e);
        (this.languageDetector = new E.Z(t, (n) => {
            let i = ''.concat(n, '-').concat(this.regionPreference);
            if (-1 !== e.indexOf(i)) this.setLocale(i);
            else {
                var a;
                let e = null !== (a = r[n]) && void 0 !== a ? a : f.Z[t];
                null != e && this.setLocale(e);
            }
        })),
            I.on('spellcheck-result', (e, t) => {
                (this.misspelledWord = null != e ? e : ''), (this.corrections = null != t ? t : []);
            });
    }
}
let S = s().debounce((e, t) => {
    let n = v(t);
    null != n && e.detectLanguage(n);
}, p);
function A(e) {
    null != document.body && document.body.addEventListener('beforeinput', (t) => S(e, t.target), !0);
}
function v(e) {
    return null == e ? null : (0, l.k)(e, HTMLInputElement) || (0, l.k)(e, HTMLTextAreaElement) ? e.value : (0, l.k)(e) && e.hasAttribute('contenteditable') ? e.textContent : void 0;
}
async function N() {
    var e;
    let t = new g((null !== (e = await I.getAvailableDictionaries()) && void 0 !== e ? e : []).map(T).filter(_.lm));
    return A(t), t;
}
