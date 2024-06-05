"use strict";
s.r(t), s.d(t, {
  useGetPlanComparisonTableRows: function() {
    return m
  }
}), s("653041");
var a, r, i = s("735250");
s("470079");
var n = s("481060"),
  l = s("706454"),
  o = s("263704"),
  u = s("465670"),
  d = s("74538"),
  c = s("937615"),
  _ = s("734741"),
  E = s("474936"),
  T = s("981631"),
  I = s("689938"),
  R = s("243794");
let f = e => {
    let {
      text: t,
      badge: s,
      variant: a
    } = e;
    return (0, i.jsxs)(n.Text, {
      color: "text-normal",
      variant: null != a ? a : "text-sm/normal",
      children: [t, " ", s]
    })
  },
  S = e => {
    let {
      text: t,
      variant: s
    } = e;
    return (0, i.jsx)(n.Text, {
      color: "header-primary",
      variant: null != s ? s : "text-md/semibold",
      children: t
    })
  },
  A = e => {
    let {
      includes: t
    } = e;
    return t ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.default, {
        className: R.checkmarkIcon,
        "aria-hidden": !0
      }), (0, i.jsx)(n.HiddenVisually, {
        children: I.default.Messages.INCLUDED
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(u.default, {
        className: R.closeIcon,
        "aria-hidden": !0
      }), (0, i.jsx)(n.HiddenVisually, {
        children: I.default.Messages.NOT_INCLUDED
      })]
    })
  };
(r = a || (a = {}))[r.PRICE = 0] = "PRICE", r[r.EMOJI = 1] = "EMOJI", r[r.STICKER = 2] = "STICKER", r[r.CUSTOM_APP_ICONS = 3] = "CUSTOM_APP_ICONS", r[r.SUPER_REACTIONS = 4] = "SUPER_REACTIONS", r[r.UPLOAD = 5] = "UPLOAD", r[r.STREAMING = 6] = "STREAMING", r[r.BOOSTS = 7] = "BOOSTS", r[r.PROFILE_THEMES = 8] = "PROFILE_THEMES", r[r.SERVER_PROFILE = 9] = "SERVER_PROFILE", r[r.SHOP_DISCOUNTS = 10] = "SHOP_DISCOUNTS", r[r.CLIENT_THEME = 11] = "CLIENT_THEME", r[r.BADGE = 12] = "BADGE", r[r.VIDEO_BACKGROUND = 13] = "VIDEO_BACKGROUND", r[r.CUSTOM_SOUNDS_ANYWHERE = 14] = "CUSTOM_SOUNDS_ANYWHERE", r[r.CUSTOM_ENTRY_SOUNDS = 15] = "CUSTOM_ENTRY_SOUNDS", r[r.SERVER_LIMIT = 16] = "SERVER_LIMIT", r[r.MESSAGE_LENGTH = 17] = "MESSAGE_LENGTH", r[r.CUSTOMIZATION_CATEGORY = 18] = "CUSTOMIZATION_CATEGORY", r[r.FEATURE_UPGRADES_CATEGORY = 19] = "FEATURE_UPGRADES_CATEGORY", r[r.PERSONALIZATION_CATEGORY = 20] = "PERSONALIZATION_CATEGORY", r[r.AVATAR_AND_BANNER = 21] = "AVATAR_AND_BANNER", r[r.REFERRAL_PROGRAM = 22] = "REFERRAL_PROGRAM";
let m = (e, t, s, a) => {
  let r = {
      0: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PRICE
        }),
        column1: (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(S, {
            text: d.default.formatPriceString(e, E.SubscriptionIntervalTypes.MONTH)
          })
        }),
        column2: (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(S, {
            text: s ? a : d.default.formatPriceString(t, E.SubscriptionIntervalTypes.MONTH)
          })
        }),
        withBottomBorder: !0
      },
      1: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_EMOJI
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      2: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STICKER_V2
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      3: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      4: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SUPER_REACTIONS
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      5: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_UPLOAD
        }),
        column1: (0, i.jsx)(S, {
          text: (0, d.getMaxFileSizeForPremiumType)(E.PremiumTypes.TIER_0)
        }),
        column2: (0, i.jsx)(S, {
          text: (0, d.getMaxFileSizeForPremiumType)(E.PremiumTypes.TIER_2)
        })
      },
      6: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STREAMING
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(S, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_STREAMING_DETAILS
        })
      },
      7: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BOOSTS.format({
            numBoosts: E.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
            percentageOff: (0, c.formatPercent)(l.default.locale, E.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          })
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      8: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PROFILE_THEMES
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      9: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_PROFILE
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      10: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS_GENERIC
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      11: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_CLIENT_THEME
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      12: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BADGE
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      13: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_VIDEO_BACKGROUND
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      14: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_SOUNDS_ANYWHERE
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        }),
        withBottomBorder: !0
      },
      15: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_ENTRY_SOUNDS_V2
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      21: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.AVATAR_PROFILE_BANNER_MARKETING
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      16: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_LIMIT
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      17: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_MESSAGE_LENGTH.format({
            maxChars: T.MAX_MESSAGE_LENGTH_PREMIUM
          })
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        }),
        withBottomBorder: !0
      },
      18: {
        label: (0, i.jsx)(n.Heading, {
          className: R.__invalid_textColor,
          variant: "display-sm",
          children: "Make Discord Yours"
        }),
        column1: null,
        column2: null,
        withBottomBorder: !1
      },
      19: {
        label: (0, i.jsx)(n.Heading, {
          className: R.__invalid_textColor,
          variant: "display-sm",
          children: "Enjoy an Upgraded Discord"
        }),
        column1: null,
        column2: null,
        withBottomBorder: !1
      },
      20: {
        label: (0, i.jsx)(n.Heading, {
          className: R.__invalid_textColor,
          variant: "display-sm",
          children: "Show Up the Way You Want"
        }),
        column1: null,
        column2: null,
        withBottomBorder: !1
      },
      22: {
        label: (0, i.jsx)(f, {
          text: I.default.Messages.REFERRAL_PROGRAM_PLAN_COMPARISON_ROW
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        }),
        withBottomBorder: !1
      }
    },
    o = [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15], r[16], r[17]];
  return (0, _.shouldShowReferralProgramPlanComparisonRow)() && o.push(r[22]), o
}