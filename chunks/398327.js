var r,
    i = n(47120);
var a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(601993);
function u(e, t, n) {
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
let c = 'SpellcheckStore',
    d = !0,
    _ = new Set();
function E() {
    o.K.set(c, {
        enabled: d,
        learnedWords: _
    });
}
class f extends (r = a.ZP.Store) {
    initialize() {
        let e = o.K.get(c);
        null != e && ((d = e.enabled), (_ = new Set(e.learnedWords)), (0, l.gL)(d), (0, l.fG)(_));
    }
    isEnabled() {
        return d;
    }
    hasLearnedWord(e) {
        return _.has(e.toLocaleLowerCase());
    }
}
u(f, 'displayName', 'SpellcheckStore'),
    (t.Z = new f(s.Z, {
        SPELLCHECK_TOGGLE() {
            (d = !d), (0, l.gL)(d), E();
        },
        SPELLCHECK_LEARN_WORD(e) {
            let { word: t } = e;
            _.add(t.toLocaleLowerCase()), (0, l.fG)(_), E();
        },
        SPELLCHECK_UNLEARN_WORD(e) {
            let { word: t } = e;
            _.delete(t.toLocaleLowerCase()), (0, l.fG)(_), E();
        },
        I18N_LOAD_SUCCESS(e) {
            let { locale: t } = e;
            (0, l._2)(t);
        }
    }));
