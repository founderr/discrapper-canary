"use strict";
var s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  i = n(920906),
  o = n(442837),
  c = n(780384),
  d = n(481060),
  u = n(410030),
  m = n(607070),
  h = n(961675),
  g = n(883429),
  x = n(432771),
  _ = n(406074),
  E = n(434404),
  f = n(430824),
  C = n(810090),
  T = n(63063),
  N = n(595433),
  I = n(981631),
  S = n(689938),
  p = n(11777),
  v = n(906739),
  M = n(965358),
  j = n(420196),
  A = n(433075);

function R(e) {
  let {
    handleHide: t
  } = e;
  return (0, s.jsx)(d.Clickable, {
    onClick: t,
    className: p.closeButton,
    "aria-label": S.Z.Messages.DISMISS,
    children: (0, s.jsx)(d.CloseSmallIcon, {
      size: "md",
      color: "currentColor",
      className: p.closeIcon
    })
  })
}

function O(e) {
  let {
    username: t,
    title: n,
    videoSrc: l,
    messageCount: a,
    reaction: i,
    reactionCount: o,
    classname: c
  } = e;
  return (0, s.jsxs)("div", {
    className: r()(p.videoPreview, c),
    children: [(0, s.jsx)("div", {
      className: p.authorRow,
      children: (0, s.jsxs)("div", {
        className: p.rowGroup,
        children: [(0, s.jsx)(d.Text, {
          tag: "span",
          className: p.author,
          variant: "text-sm/semibold",
          children: t
        }), (0, s.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: p.postCreationTimestamp,
          children: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
        })]
      })
    }), (0, s.jsx)(d.Heading, {
      variant: "heading-md/extrabold",
      className: p.title,
      color: "header-primary",
      "aria-hidden": !0,
      children: n
    }), (0, s.jsx)(d.Spacer, {
      size: 10
    }), (0, s.jsx)(C.Z, {
      className: p.video,
      src: l,
      autoPlay: !0,
      loop: !0,
      muted: !0
    }), (0, s.jsx)(d.Spacer, {
      size: 10
    }), (0, s.jsx)("div", {
      className: p.footer,
      children: (0, s.jsxs)("div", {
        className: p.forumPostControls,
        children: [(0, s.jsxs)("div", {
          className: p.messageCountBox,
          children: [(0, s.jsx)("span", {
            className: p.messageCountIcon,
            children: (0, s.jsx)(d.ChatIcon, {
              size: "xs",
              color: "currentColor"
            })
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: a
          })]
        }), (0, s.jsxs)("div", {
          className: p.reactionBox,
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
t.Z = e => {
  var t, n;
  let {
    channel: a
  } = e, C = (0, u.ZP)(), b = (0, c.wj)(C), Z = (0, o.e7)([f.Z], () => f.Z.getGuild(a.guild_id)), L = (0, o.e7)([m.Z], () => m.Z.useReducedMotion), P = (0, o.e7)([h.Z], () => h.Z.hasHidden(a.id)), D = (0, _.C)({
    guildId: a.guild_id,
    channelId: a.id
  }), {
    transitions: y,
    setVisible: U
  } = (0, N.H)(L), F = l.useCallback(() => {
    U(!1), g.Z.hideAdminOnboarding(a.id, !0)
  }, [a, U]);
  l.useEffect(() => {
    !(0, x.c)(a.id) && U(!P)
  }, [a, U, P]);
  let w = l.useMemo(() => [S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
    H = l.useMemo(() => [S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
    k = () => {
      E.Z.open(a.guild_id, I.pNK.ROLE_SUBSCRIPTIONS)
    },
    B = null !== (t = null == Z ? void 0 : Z.hasFeature(I.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t ? S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
    G = null !== (n = (null == Z ? void 0 : Z.hasFeature(I.oNc.CREATOR_MONETIZABLE)) || (null == Z ? void 0 : Z.hasFeature(I.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== n && n,
    z = G ? S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
    V = G ? S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
  return (0, s.jsx)(s.Fragment, {
    children: y((e, t) => t ? (0, s.jsxs)(i.animated.div, {
      style: e,
      className: p.container,
      children: [(0, s.jsxs)("div", {
        className: r()(p.__invalid_wrapper, p.headerRow),
        children: [(0, s.jsxs)(d.Text, {
          variant: "text-xs/normal",
          className: p.visibilityInfo,
          children: [(0, s.jsx)(d.CircleInformationIcon, {
            size: "xxs",
            color: "currentColor",
            className: p.icon
          }), S.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
        }), (0, s.jsx)(R, {
          handleHide: F
        })]
      }), (0, s.jsxs)("div", {
        className: p.contentContainer,
        children: [(0, s.jsxs)("div", {
          className: r()(p.contentRow, G && p.contentRowOne),
          children: [(0, s.jsx)("div", {
            className: r()(p.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: p.contentVideoContainer,
              children: [(0, s.jsx)(O, {
                username: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: p.backgroundVideo
              }), (0, s.jsx)(O, {
                username: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: r()(p.backgroundVideo, p.secondaryVideo)
              }), (0, s.jsx)(O, {
                username: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: p.highlightVideo
              })]
            })
          }), (0, s.jsxs)("article", {
            className: p.contentTextContainer,
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: z
            }), (0, s.jsx)(d.Spacer, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: V
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), (0, s.jsxs)(d.Clickable, {
              onClick: () => open(T.Z.getCreatorSupportArticleURL(I.BhN.MEDIA_CHANNEL)),
              className: p.helpCenterLink,
              children: [(0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                className: p.__invalid_helpCenterLinkText,
                children: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
              }), (0, s.jsx)(d.WindowLaunchIcon, {
                size: "xs",
                color: "currentColor",
                className: p.helpCenterLinkIcon
              })]
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), (0, s.jsx)("div", {
              className: p.mediaChannelTagsContainer,
              children: w.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: p.mediaChannelTag,
                children: e
              }, e))
            })]
          })]
        }), G && (0, s.jsxs)("div", {
          className: r()(p.contentRow, p.contentRowTwo),
          children: [(0, s.jsx)("div", {
            className: r()(p.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: p.contentImageContainer,
              children: [(0, s.jsx)("img", {
                src: b ? j : A,
                alt: "",
                className: r()(p.previewEmbedImage, p.secondaryImage)
              }), (0, s.jsx)("img", {
                src: b ? v : M,
                alt: "",
                className: p.previewEmbedImage
              })]
            })
          }), (0, s.jsxs)("article", {
            className: p.contentTextContainer,
            children: [(0, s.jsxs)(d.Text, {
              variant: "text-xxs/bold",
              className: p.serverSubPill,
              children: [S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, s.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, s.jsx)(d.Spacer, {
              size: 10
            }), (0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
            }), (0, s.jsx)(d.Spacer, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: S.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), (0, s.jsx)("div", {
              className: p.mediaChannelTagsContainer,
              children: H.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: p.mediaChannelTag,
                children: e
              }, e))
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), 0 === D.length && (0, s.jsx)(d.ShinyButton, {
              size: d.Button.Sizes.MEDIUM,
              pauseAnimation: L,
              onClick: k,
              className: p.addChannelButton,
              color: d.Button.Colors.CUSTOM,
              children: B
            })]
          })]
        })]
      })]
    }) : null)
  })
}