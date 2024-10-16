Object.defineProperty(t, '__esModule', { value: !0 }), (t.IntlManager = t.DEFAULT_LOCALE = void 0);
let r = n(445274),
    i = n(694902),
    a = n(870637);
t.DEFAULT_LOCALE = 'en-US';
t.IntlManager = class e {
    constructor(e = t.DEFAULT_LOCALE) {
        (this.onLocaleChange = (e) => (this._localeSubscriptions.add(e), () => this._localeSubscriptions.delete(e))),
            (this.defaultLocale = e),
            (this.currentLocale = e),
            (this.formatConfig = a.DEFAULT_FORMAT_CONFIG),
            (this.intl = (0, r.createIntl)({
                formats: a.DEFAULT_FORMAT_CONFIG,
                defaultLocale: e,
                locale: e
            })),
            (this._localeSubscriptions = new Set());
    }
    withFormatters(e) {
        for (let [t, n] of Object.entries(e)) this[t] = this.makeFormatFunction(n);
        return this;
    }
    makeFormatFunction({ format: e, builder: t }) {
        let n = e.bind(this);
        return (e, r) => n(e(this.currentLocale), r, t);
    }
    setLocale(e) {
        (this.currentLocale = e),
            (this.intl = (0, r.createIntl)({
                defaultLocale: this.defaultLocale,
                locale: e
            })),
            this.emitLocaleChange(e);
    }
    emitLocaleChange(e) {
        for (let t of this._localeSubscriptions) t(e);
    }
    string(e) {
        let t = e(this.currentLocale);
        if (null == t || 0 === t.ast.length) return '';
        let n = '';
        for (let e of t.ast) {
            if ('string' != typeof e) throw Error('Attempted to call `string` formatting on a non-literal message: ' + JSON.stringify(t));
            n += e;
        }
        return n;
    }
    reserialize(e) {
        let t = e(this.currentLocale);
        return 'string' == typeof t ? t : t.reserialize();
    }
    bindFormatValues(e, t, n) {
        return (0, i.bindFormatValues)(e, t.ast, [this.currentLocale, this.defaultLocale], this.intl.formatters, this.formatConfig, n);
    }
};
