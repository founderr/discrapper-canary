s.d(t, {
  s: function() {
return i;
  }
}), s(411104), s(724458), s(47120);
var n = s(369311);

function a(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
class i {
  get(e, t) {
let s = e + '@' + t,
  a = this._parseCache.get(s);
if (null != a)
  return a;
if (null == this.messages[t])
  return this.supportedLocales.includes(t) && this._loadLocale(t), this.fallbackMessage;
if (e in this.messages[t]) {
  let a = this.messages[t][e],
    i = new n.t(a, t);
  return this._parseCache.set(s, i), i;
}
throw Error('Requested message '.concat(e, ' does not have a value in the requested locale nor the default locale'));
  }
  getBinds() {
let e = this.onChange.bind(this);
return this.messageKeys.reduce((t, s) => {
  let n = this.get.bind(this, s);
  return n.onChange = e, t[s] = n, t;
}, {});
  }
  _getMessageContent(e, t) {
if (null == this.messages[t] && this.supportedLocales.includes(t))
  return this._loadLocale(t), e;
if (e in this.messages[t])
  return this.messages[t][e];
throw Error('Requested message '.concat(e, ' does not have a value in the requested locale nor the default locale'));
  }
  async _loadLocale(e) {
if (null == this.localeImportMap[e])
  throw Error('Requested to load locale '.concat(e, ', which should be supported, but no source for translation data was provided.'));
null == this.messages[e] && (this.messages[e] = (await this.localeImportMap[e]()).default, this.emitChange());
  }
  emitChange() {
for (let e of this._subscribers.values())
  e();
  }
  onChange(e) {
return this._subscribers.add(e), () => this._subscribers.delete(e);
  }
  constructor(e, t) {
a(this, 'messageKeys', void 0), a(this, 'messages', void 0), a(this, 'localeImportMap', void 0), a(this, 'supportedLocales', void 0), a(this, '_parseCache', void 0), a(this, '_subscribers', void 0), a(this, 'fallbackMessage', void 0), this.messageKeys = e, this.messages = {}, this.localeImportMap = t, this.supportedLocales = Object.keys(t), this._parseCache = new Map(), this._subscribers = new Set(), this.fallbackMessage = new n.t('THIS MESSAGE FAILED TO LOAD', 'en-US');
  }
}