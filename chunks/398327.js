n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(241601),
    d = n(601993);
let f = 'SpellcheckStore',
    _ = !0,
    p = new Set();
function h() {
    l.K.set(f, {
        enabled: _,
        learnedWords: p
    });
}
class m extends (r = o.ZP.Store) {
    initialize() {
        let e = l.K.get(f);
        null != e && ((_ = e.enabled), (p = new Set(e.learnedWords)), (0, d.gL)(_), (0, d.fG)(p)), (0, c.Ql)(d._2);
    }
    isEnabled() {
        return _;
    }
    hasLearnedWord(e) {
        return p.has(e.toLocaleLowerCase());
    }
}
(s = 'SpellcheckStore'),
    (a = 'displayName') in (i = m)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new m(u.Z, {
        SPELLCHECK_TOGGLE() {
            (_ = !_), (0, d.gL)(_), h();
        },
        SPELLCHECK_LEARN_WORD(e) {
            let { word: t } = e;
            p.add(t.toLocaleLowerCase()), (0, d.fG)(p), h();
        },
        SPELLCHECK_UNLEARN_WORD(e) {
            let { word: t } = e;
            p.delete(t.toLocaleLowerCase()), (0, d.fG)(p), h();
        }
    }));
