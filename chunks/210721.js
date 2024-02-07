"use strict";
n.r(e), n.d(e, {
  AnimationState: function() {
    return i
  },
  getGiftAnimationData: function() {
    return p
  },
  sendGiftMessage: function() {
    return I
  }
}), n("70102");
var i, l, a = n("627445"),
  r = n.n(a),
  u = n("450911"),
  s = n("819689"),
  o = n("884351"),
  c = n("42203"),
  d = n("659632"),
  f = n("646718");
(l = i || (i = {})).ACTION = "action", l.LOOP = "loop", l.IDLE = "idle";
let p = (t, e) => {
    let i;
    switch (t) {
      case f.PremiumGiftStyles.SNOWGLOBE:
        i = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(t => {
          let {
            default: e
          } = t;
          return e
        });
        break;
      case f.PremiumGiftStyles.BOX:
        i = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(t => {
          let {
            default: e
          } = t;
          return e
        });
        break;
      case f.PremiumGiftStyles.CUP:
        i = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(t => {
          let {
            default: e
          } = t;
          return e
        });
        break;
      case f.PremiumGiftStyles.STANDARD_BOX:
        switch (e) {
          case "idle":
            i = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          case "loop":
            i = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          default:
            i = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            })
        }
        break;
      case f.PremiumGiftStyles.CAKE:
        switch (e) {
          case "idle":
            i = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          case "loop":
            i = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          default:
            i = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            })
        }
        break;
      case f.PremiumGiftStyles.CHEST:
        switch (e) {
          case "idle":
            i = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          case "loop":
            i = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          default:
            i = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            })
        }
        break;
      case f.PremiumGiftStyles.COFFEE:
        switch (e) {
          case "idle":
            i = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          case "loop":
            i = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          default:
            i = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            })
        }
        break;
      case f.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
        switch (e) {
          case "idle":
            i = () => n.el("158302").then(n.t.bind(n, "158302", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          case "loop":
            i = () => n.el("610146").then(n.t.bind(n, "610146", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          default:
            i = () => n.el("294569").then(n.t.bind(n, "294569", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            })
        }
        break;
      case f.PremiumGiftStyles.SEASONAL_CAKE:
        switch (e) {
          case "idle":
            i = () => n.el("124416").then(n.t.bind(n, "124416", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          case "loop":
            i = () => n.el("335900").then(n.t.bind(n, "335900", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          default:
            i = () => n.el("566748").then(n.t.bind(n, "566748", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            })
        }
        break;
      case f.PremiumGiftStyles.SEASONAL_CHEST:
        switch (e) {
          case "idle":
            i = () => n.el("708949").then(n.t.bind(n, "708949", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          case "loop":
            i = () => n.el("355472").then(n.t.bind(n, "355472", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          default:
            i = () => n.el("262001").then(n.t.bind(n, "262001", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            })
        }
        break;
      case f.PremiumGiftStyles.SEASONAL_COFFEE:
        switch (e) {
          case "idle":
            i = () => n.el("836477").then(n.t.bind(n, "836477", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          case "loop":
            i = () => n.el("737995").then(n.t.bind(n, "737995", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            });
            break;
          default:
            i = () => n.el("433750").then(n.t.bind(n, "433750", 19)).then(t => {
              let {
                default: e
              } = t;
              return e
            })
        }
        break;
      default:
        i = () => Promise.resolve("Error: Invalid giftStyle")
    }
    return i
  },
  I = async (t, e) => {
    if (null == e) throw Error("giftCode must be defined");
    if (null == t) throw Error("Recipient must be defined");
    let n = await u.default.openPrivateChannel(t.id).then(t => {
        let e = c.default.getChannel(t);
        if (r(null != e, "PrivateChannel is null"), null == e) throw Error("Channel must be defined");
        return e
      }),
      i = (0, d.getGiftCodeURL)(e);
    return s.default.sendMessage(n.id, o.default.parse(n, i), void 0, {
      isGiftLinkSentOnBehalfOfUser: !0
    })
  }