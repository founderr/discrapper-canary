"use strict";
a.r(t);
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  r = a.n(l),
  i = a("920906"),
  o = a("442837"),
  u = a("780384"),
  d = a("481060"),
  c = a("410030"),
  m = a("607070"),
  h = a("961675"),
  f = a("883429"),
  g = a("432771"),
  x = a("406074"),
  C = a("434404"),
  _ = a("430824"),
  p = a("974029"),
  S = a("465670"),
  T = a("41542"),
  E = a("441957"),
  N = a("810090"),
  M = a("63063"),
  A = a("595433"),
  I = a("981631"),
  v = a("689938"),
  j = a("11777"),
  O = a("906739"),
  R = a("965358"),
  b = a("420196"),
  F = a("433075");

function L(e) {
  let {
    handleHide: t
  } = e;
  return (0, s.jsx)(d.Clickable, {
    onClick: t,
    className: j.closeButton,
    "aria-label": v.default.Messages.DISMISS,
    children: (0, s.jsx)(S.default, {
      className: j.closeIcon
    })
  })
}

function P(e) {
  let {
    username: t,
    title: a,
    videoSrc: n,
    messageCount: l,
    reaction: i,
    reactionCount: o,
    classname: u
  } = e;
  return (0, s.jsxs)("div", {
    className: r()(j.videoPreview, u),
    children: [(0, s.jsx)("div", {
      className: j.authorRow,
      children: (0, s.jsxs)("div", {
        className: j.rowGroup,
        children: [(0, s.jsx)(d.Text, {
          tag: "span",
          className: j.author,
          variant: "text-sm/semibold",
          children: t
        }), (0, s.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: j.postCreationTimestamp,
          children: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
        })]
      })
    }), (0, s.jsx)(d.Heading, {
      variant: "heading-md/extrabold",
      className: j.title,
      color: "header-primary",
      "aria-hidden": !0,
      children: a
    }), (0, s.jsx)(d.Spacer, {
      size: 10
    }), (0, s.jsx)(N.default, {
      className: j.video,
      src: n,
      autoPlay: !0,
      loop: !0,
      muted: !0
    }), (0, s.jsx)(d.Spacer, {
      size: 10
    }), (0, s.jsx)("div", {
      className: j.footer,
      children: (0, s.jsxs)("div", {
        className: j.forumPostControls,
        children: [(0, s.jsxs)("div", {
          className: j.messageCountBox,
          children: [(0, s.jsx)("span", {
            className: j.messageCountIcon,
            children: (0, s.jsx)(p.default, {
              width: 16,
              height: 16
            })
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: l
          })]
        }), (0, s.jsxs)("div", {
          className: j.reactionBox,
          children: [(0, s.jsx)("span", {
            role: "img",
            "aria-label": "",
            children: i
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: o
          })]
        })]
      })
    })]
  })
}
t.default = e => {
  var t, a;
  let {
    channel: l
  } = e, p = (0, c.default)(), S = (0, u.isThemeDark)(p), N = (0, o.useStateFromStores)([_.default], () => _.default.getGuild(l.guild_id)), y = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion), D = (0, o.useStateFromStores)([h.default], () => h.default.hasHidden(l.id)), U = (0, x.useSubscriptionListingsForChannel)({
    guildId: l.guild_id,
    channelId: l.id
  }), {
    transitions: w,
    setVisible: k
  } = (0, A.useShowAnimation)(y), H = n.useCallback(() => {
    k(!1), f.default.hideAdminOnboarding(l.id, !0)
  }, [l, k]);
  n.useEffect(() => {
    !(0, g.isOnboardingDismissed)(l.id) && k(!D)
  }, [l, k, D]);
  let B = n.useMemo(() => [v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
    G = n.useMemo(() => [v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
    V = () => {
      C.default.open(l.guild_id, I.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
    },
    z = null !== (t = null == N ? void 0 : N.hasFeature(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t ? v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
    W = null !== (a = (null == N ? void 0 : N.hasFeature(I.GuildFeatures.CREATOR_MONETIZABLE)) || (null == N ? void 0 : N.hasFeature(I.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== a && a,
    K = W ? v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
    Y = W ? v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
  return (0, s.jsx)(s.Fragment, {
    children: w((e, t) => t ? (0, s.jsxs)(i.animated.div, {
      style: e,
      className: j.container,
      children: [(0, s.jsxs)("div", {
        className: r()(j.__invalid_wrapper, j.headerRow),
        children: [(0, s.jsxs)(d.Text, {
          variant: "text-xs/normal",
          className: j.visibilityInfo,
          children: [(0, s.jsx)(T.default, {
            width: 12,
            height: 12,
            className: j.icon
          }), v.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
        }), (0, s.jsx)(L, {
          handleHide: H
        })]
      }), (0, s.jsxs)("div", {
        className: j.contentContainer,
        children: [(0, s.jsxs)("div", {
          className: r()(j.contentRow, W && j.contentRowOne),
          children: [(0, s.jsx)("div", {
            className: r()(j.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: j.contentVideoContainer,
              children: [(0, s.jsx)(P, {
                username: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: j.backgroundVideo
              }), (0, s.jsx)(P, {
                username: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: r()(j.backgroundVideo, j.secondaryVideo)
              }), (0, s.jsx)(P, {
                username: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: j.highlightVideo
              })]
            })
          }), (0, s.jsxs)("article", {
            className: j.contentTextContainer,
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: K
            }), (0, s.jsx)(d.Spacer, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: Y
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), (0, s.jsxs)(d.Clickable, {
              onClick: () => open(M.default.getCreatorSupportArticleURL(I.HelpdeskArticles.MEDIA_CHANNEL)),
              className: j.helpCenterLink,
              children: [(0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                className: j.__invalid_helpCenterLinkText,
                children: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
              }), (0, s.jsx)(E.default, {
                width: 16,
                height: 16,
                className: j.helpCenterLinkIcon
              })]
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), (0, s.jsx)("div", {
              className: j.mediaChannelTagsContainer,
              children: B.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: j.mediaChannelTag,
                children: e
              }, e))
            })]
          })]
        }), W && (0, s.jsxs)("div", {
          className: r()(j.contentRow, j.contentRowTwo),
          children: [(0, s.jsx)("div", {
            className: r()(j.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: j.contentImageContainer,
              children: [(0, s.jsx)("img", {
                src: S ? b : F,
                alt: "",
                className: r()(j.previewEmbedImage, j.secondaryImage)
              }), (0, s.jsx)("img", {
                src: S ? O : R,
                alt: "",
                className: j.previewEmbedImage
              })]
            })
          }), (0, s.jsxs)("article", {
            className: j.contentTextContainer,
            children: [(0, s.jsxs)(d.Text, {
              variant: "text-xxs/bold",
              className: j.serverSubPill,
              children: [v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, s.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, s.jsx)(d.Spacer, {
              size: 10
            }), (0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
            }), (0, s.jsx)(d.Spacer, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: v.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), (0, s.jsx)("div", {
              className: j.mediaChannelTagsContainer,
              children: G.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: j.mediaChannelTag,
                children: e
              }, e))
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), 0 === U.length && (0, s.jsx)(d.ShinyButton, {
              size: d.Button.Sizes.MEDIUM,
              pauseAnimation: y,
              onClick: V,
              className: j.addChannelButton,
              color: d.Button.Colors.CUSTOM,
              children: z
            })]
          })]
        })]
      })]
    }) : null)
  })
}