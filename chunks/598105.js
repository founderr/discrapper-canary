r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(411104);
var a = r(998502);
function s(e, n, r) {
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
let o = 256;
function l(e, n) {
    return a.ZP.ensureModule('discord_spellcheck').then(() => {
        let { cld: r } = a.ZP.requireModule('discord_spellcheck');
        return new Promise((i, a) => {
            r.detect(
                e,
                {
                    httpHint: n,
                    encodingHint: 'UTF8'
                },
                (e, n) => {
                    null != e ? a(Error(e.message)) : !n.reliable || n.languages[0].percent < 90 || n.languages[0].score < 500 ? a(Error('Not enough reliable text.')) : i(n.languages[0].code);
                }
            );
        });
    });
}
class u {
    get language() {
        return this._language;
    }
    set language(e) {
        this._language !== e && ((this._language = e), this._onChange(e));
    }
    set languageHint(e) {
        this._languageHint = e;
    }
    process(e) {
        !this._processing &&
            ((this._processing = !0),
            requestIdleCallback((n) => {
                if (n.timeRemaining() <= this._minimumTimeRemaining) {
                    this._processEnd();
                    return;
                }
                e.length > o && (e = e.slice(0, o)),
                    l(e, this._languageHint).then(
                        (e) => {
                            (this.language = e), this._processEnd(n.didTimeout);
                        },
                        () => {
                            this._processEnd(n.didTimeout);
                        }
                    );
            }));
    }
    _processEnd() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this._processing = !1), e && this._minimumTimeRemaining++;
    }
    constructor(e, n) {
        s(this, '_language', void 0), s(this, '_onChange', void 0), s(this, '_languageHint', void 0), s(this, '_shouldProcess', !1), s(this, '_processing', !1), s(this, '_minimumTimeRemaining', 5), (this._language = e), (this._languageHint = e), (this._onChange = n), n(e);
    }
}
