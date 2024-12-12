var i,
    a = r(47120);
var s = r(442837),
    o = r(433517),
    l = r(570140),
    u = r(241601),
    c = r(601993);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = 'SpellcheckStore',
    _ = !0,
    h = new Set();
function p() {
    o.K.set(f, {
        enabled: _,
        learnedWords: h
    });
}
class m extends (i = s.ZP.Store) {
    initialize() {
        let e = o.K.get(f);
        null != e && ((_ = e.enabled), (h = new Set(e.learnedWords)), (0, c.gL)(_), (0, c.fG)(h)), (0, u.Ql)(c._2);
    }
    isEnabled() {
        return _;
    }
    hasLearnedWord(e) {
        return h.has(e.toLocaleLowerCase());
    }
}
d(m, 'displayName', 'SpellcheckStore'),
    (n.Z = new m(l.Z, {
        SPELLCHECK_TOGGLE() {
            (_ = !_), (0, c.gL)(_), p();
        },
        SPELLCHECK_LEARN_WORD(e) {
            let { word: n } = e;
            h.add(n.toLocaleLowerCase()), (0, c.fG)(h), p();
        },
        SPELLCHECK_UNLEARN_WORD(e) {
            let { word: n } = e;
            h.delete(n.toLocaleLowerCase()), (0, c.fG)(h), p();
        }
    }));
