"use strict";
n.r(t), n.d(t, {
  AnimationState: function() {
    return l
  },
  getGiftAnimationData: function() {
    return m
  },
  sendGiftMessage: function() {
    return p
  }
}), n("70102");
var l, i, a = n("627445"),
  s = n.n(a),
  r = n("450911"),
  o = n("819689"),
  u = n("884351"),
  d = n("42203"),
  c = n("659632"),
  f = n("646718");
(i = l || (l = {})).ACTION = "action", i.LOOP = "loop", i.IDLE = "idle";
let m = (e, t) => {
    let l;
    switch (e) {
      case f.PremiumGiftStyles.SNOWGLOBE:
        l = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
          let {
            default: t
          } = e;
          return t
        });
        break;
      case f.PremiumGiftStyles.BOX:
        l = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
          let {
            default: t
          } = e;
          return t
        });
        break;
      case f.PremiumGiftStyles.CUP:
        l = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
          let {
            default: t
          } = e;
          return t
        });
        break;
      case f.PremiumGiftStyles.STANDARD_BOX:
        switch (t) {
          case "idle":
            l = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          case "loop":
            l = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          default:
            l = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            })
        }
        break;
      case f.PremiumGiftStyles.CAKE:
        switch (t) {
          case "idle":
            l = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          case "loop":
            l = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          default:
            l = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            })
        }
        break;
      case f.PremiumGiftStyles.CHEST:
        switch (t) {
          case "idle":
            l = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          case "loop":
            l = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          default:
            l = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            })
        }
        break;
      case f.PremiumGiftStyles.COFFEE:
        switch (t) {
          case "idle":
            l = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          case "loop":
            l = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          default:
            l = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            })
        }
        break;
      case f.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
        switch (t) {
          case "idle":
            l = () => n.el("158302").then(n.t.bind(n, "158302", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          case "loop":
            l = () => n.el("610146").then(n.t.bind(n, "610146", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          default:
            l = () => n.el("294569").then(n.t.bind(n, "294569", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            })
        }
        break;
      case f.PremiumGiftStyles.SEASONAL_CAKE:
        switch (t) {
          case "idle":
            l = () => n.el("124416").then(n.t.bind(n, "124416", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          case "loop":
            l = () => n.el("335900").then(n.t.bind(n, "335900", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          default:
            l = () => n.el("566748").then(n.t.bind(n, "566748", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            })
        }
        break;
      case f.PremiumGiftStyles.SEASONAL_CHEST:
        switch (t) {
          case "idle":
            l = () => n.el("708949").then(n.t.bind(n, "708949", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          case "loop":
            l = () => n.el("355472").then(n.t.bind(n, "355472", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          default:
            l = () => n.el("262001").then(n.t.bind(n, "262001", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            })
        }
        break;
      case f.PremiumGiftStyles.SEASONAL_COFFEE:
        switch (t) {
          case "idle":
            l = () => n.el("836477").then(n.t.bind(n, "836477", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          case "loop":
            l = () => n.el("737995").then(n.t.bind(n, "737995", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            });
            break;
          default:
            l = () => n.el("433750").then(n.t.bind(n, "433750", 19)).then(e => {
              let {
                default: t
              } = e;
              return t
            })
        }
        break;
      default:
        l = () => Promise.resolve("Error: Invalid giftStyle")
    }
    return l
  },
  p = async (e, t) => {
    if (null == t) throw Error("giftCode must be defined");
    if (null == e) throw Error("Recipient must be defined");
    let n = await r.default.openPrivateChannel(e.id).then(e => {
        let t = d.default.getChannel(e);
        if (s(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
        return t
      }),
      l = (0, c.getGiftCodeURL)(t);
    return o.default.sendMessage(n.id, u.default.parse(n, l), void 0, {
      isGiftLinkSentOnBehalfOfUser: !0
    })
  }