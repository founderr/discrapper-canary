    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return S
      }
    }), t("47120");
    var d = t("735250"),
      c = t("470079"),
      n = t("525654"),
      i = t.n(n),
      f = t("470716"),
      o = t("442837"),
      r = t("946188"),
      l = t("481060"),
      s = t("596454"),
      b = t("451478"),
      u = t("586576"),
      p = t("176354"),
      h = t("63063"),
      m = t("358085"),
      _ = t("792125"),
      E = t("998502"),
      I = t("151851"),
      g = t("981631"),
      O = t("689938");
    let T = o.default.connectStores([b.default], () => ({
      focused: b.default.isFocused()
    }))(I.default);
    class S extends c.PureComponent {
      getPlatform() {
        var e;
        let a = null === (e = i().os) || void 0 === e ? void 0 : e.family;
        return null != a && /^win/i.test(a) ? m.PlatformTypes.WINDOWS : null != a && /darwin|os x/i.test(a) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
      }
      componentDidMount() {
        ! function() {
          let e = window.require("electron").remote.getCurrentWindow();
          E.default.minimize = () => e.minimize(), E.default.maximize = () => {
            e.isMaximized() ? e.unmaximize() : e.maximize()
          }, E.default.close = () => e.close()
        }()
      }
      render() {
        let e = (0, d.jsx)("div", {
            children: (0, d.jsxs)("p", {
              children: [O.default.Messages.VERY_OUT_OF_DATE_DESCRIPTION, " ", (0, d.jsx)(s.default, {
                src: p.default.getURL(r.default.convert.fromCodePoint("1f44c")),
                emojiName: ":ok_hand:",
                animated: !1
              })]
            })
          }),
          a = (0, d.jsx)(l.Button, {
            size: l.ButtonSizes.LARGE,
            onClick: this.handleDownload,
            children: O.default.Messages.DOWNLOAD
          });
        return (0, d.jsxs)(c.Fragment, {
          children: [(0, d.jsx)(f.Helmet, {
            children: (0, d.jsx)("html", {
              className: (0, _.getThemeClass)(g.ThemeTypes.DARK)
            })
          }), (0, d.jsx)(T, {
            type: this.getPlatform()
          }), (0, d.jsx)(u.default, {
            title: O.default.Messages.UNSUPPORTED_BROWSER_TITLE,
            note: e,
            action: a
          })]
        })
      }
      constructor(...e) {
        var a, t, d;
        super(...e), a = this, t = "handleDownload", d = () => {
          window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? h.default.getArticleURL(g.HelpdeskArticles.CORRUPT_INSTALLATION) : g.MarketingURLs.DOWNLOAD)
        }, t in a ? Object.defineProperty(a, t, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[t] = d
      }
    }