var n =
        (this && this.__createBinding) ||
        (Object.create
            ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var i = Object.getOwnPropertyDescriptor(e, r);
                  (!i || ('get' in i ? !e.__esModule : i.writable || i.configurable)) &&
                      (i = {
                          enumerable: !0,
                          get: function () {
                              return e[r];
                          }
                      }),
                      Object.defineProperty(t, n, i);
              }
            : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
              }),
    i =
        (this && this.__exportStar) ||
        function (t, e) {
            for (var r in t) 'default' !== r && !Object.prototype.hasOwnProperty.call(e, r) && n(e, t, r);
        };
Object.defineProperty(e, '__esModule', { value: !0 }), (e.MessageLoader = e.waitForAllDefaultIntlMessagesLoaded = e.loadAllMessagesInLocale = e.createLoader = e.DEFAULT_LOCALE = e.IntlManager = void 0), i(r(574403), e);
var o = r(882082);
Object.defineProperty(e, 'IntlManager', {
    enumerable: !0,
    get: function () {
        return o.IntlManager;
    }
}),
    Object.defineProperty(e, 'DEFAULT_LOCALE', {
        enumerable: !0,
        get: function () {
            return o.DEFAULT_LOCALE;
        }
    });
var a = r(484901);
Object.defineProperty(e, 'createLoader', {
    enumerable: !0,
    get: function () {
        return a.createLoader;
    }
}),
    Object.defineProperty(e, 'loadAllMessagesInLocale', {
        enumerable: !0,
        get: function () {
            return a.loadAllMessagesInLocale;
        }
    }),
    Object.defineProperty(e, 'waitForAllDefaultIntlMessagesLoaded', {
        enumerable: !0,
        get: function () {
            return a.waitForAllDefaultIntlMessagesLoaded;
        }
    }),
    Object.defineProperty(e, 'MessageLoader', {
        enumerable: !0,
        get: function () {
            return a.MessageLoader;
        }
    });
