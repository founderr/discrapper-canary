function r(e, n, r) {
    (this.locales = e), (this.formats = n), (this.pluralFn = r);
}
function i(e) {
    this.id = e;
}
function a(e, n, r, i, a) {
    (this.id = e), (this.useOrdinal = n), (this.offset = r), (this.options = i), (this.pluralFn = a);
}
function s(e, n, r, i) {
    (this.id = e), (this.offset = n), (this.numberFormat = r), (this.string = i);
}
function o(e, n) {
    (this.id = e), (this.options = n);
}
(n.default = r),
    (r.prototype.compile = function (e) {
        return (this.pluralStack = []), (this.currentPlural = null), (this.pluralNumberFormat = null), this.compileMessage(e);
    }),
    (r.prototype.compileMessage = function (e) {
        if (!(e && 'messageFormatPattern' === e.type)) throw Error('Message AST is not of type: "messageFormatPattern"');
        var n,
            r,
            i,
            a = e.elements,
            s = [];
        for (n = 0, r = a.length; n < r; n += 1)
            switch ((i = a[n]).type) {
                case 'messageTextElement':
                    s.push(this.compileMessageText(i));
                    break;
                case 'argumentElement':
                    s.push(this.compileArgument(i));
                    break;
                default:
                    throw Error('Message element does not have a valid type');
            }
        return s;
    }),
    (r.prototype.compileMessageText = function (e) {
        return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (!this.pluralNumberFormat && (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new s(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, '#');
    }),
    (r.prototype.compileArgument = function (e) {
        var n = e.format;
        if (!n) return new i(e.id);
        var r,
            s = this.formats,
            l = this.locales,
            u = this.pluralFn;
        switch (n.type) {
            case 'numberFormat':
                return (
                    (r = s.number[n.style]),
                    {
                        id: e.id,
                        format: new Intl.NumberFormat(l, r).format
                    }
                );
            case 'dateFormat':
                return (
                    (r = s.date[n.style]),
                    {
                        id: e.id,
                        format: new Intl.DateTimeFormat(l, r).format
                    }
                );
            case 'timeFormat':
                return (
                    (r = s.time[n.style]),
                    {
                        id: e.id,
                        format: new Intl.DateTimeFormat(l, r).format
                    }
                );
            case 'pluralFormat':
                return (r = this.compileOptions(e)), new a(e.id, n.ordinal, n.offset, r, u);
            case 'selectFormat':
                return (r = this.compileOptions(e)), new o(e.id, r);
            default:
                throw Error('Message element does not have a valid format type');
        }
    }),
    (r.prototype.compileOptions = function (e) {
        var n,
            r,
            i,
            a = e.format,
            s = a.options,
            o = {};
        for (this.pluralStack.push(this.currentPlural), this.currentPlural = 'pluralFormat' === a.type ? e : null, n = 0, r = s.length; n < r; n += 1) o[(i = s[n]).selector] = this.compileMessage(i.value);
        return (this.currentPlural = this.pluralStack.pop()), o;
    }),
    (i.prototype.format = function (e) {
        return e ? ('string' == typeof e ? e : String(e)) : '';
    }),
    (a.prototype.getOption = function (e) {
        var n = this.options;
        return n['=' + e] || n[this.pluralFn(e - this.offset, this.useOrdinal)] || n.other;
    }),
    (s.prototype.format = function (e) {
        var n = this.numberFormat.format(e - this.offset);
        return this.string.replace(/(^|[^\\])#/g, '$1' + n).replace(/\\#/g, '#');
    }),
    (o.prototype.getOption = function (e) {
        var n = this.options;
        return n[e] || n.other;
    });
