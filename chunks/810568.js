n.d(t, {
    IS: function () {
        return d;
    },
    UE: function () {
        return E;
    },
    as: function () {
        return r;
    },
    fP: function () {
        return c;
    },
    m1: function () {
        return i;
    },
    wz: function () {
        return _;
    }
});
var r,
    i,
    a = n(772848),
    o = n(146282),
    s = n(626135),
    l = n(981631),
    u = n(206583);
!(function (e) {
    (e[(e.FollowGame = 0)] = 'FollowGame'), (e[(e.UnfollowGame = 1)] = 'UnfollowGame'), (e[(e.ClickMessageUser = 2)] = 'ClickMessageUser'), (e[(e.SendMessageUser = 3)] = 'SendMessageUser'), (e[(e.JoinVC = 4)] = 'JoinVC'), (e[(e.WatchStream = 5)] = 'WatchStream'), (e[(e.ClickSimilarGame = 6)] = 'ClickSimilarGame'), (e[(e.WebsiteLink = 7)] = 'WebsiteLink'), (e[(e.XLink = 8)] = 'XLink'), (e[(e.YouTubeLink = 9)] = 'YouTubeLink'), (e[(e.ShowMore = 10)] = 'ShowMore'), (e[(e.ShowLess = 11)] = 'ShowLess'), (e[(e.JoinOfficialServer = 12)] = 'JoinOfficialServer'), (e[(e.ClickImage = 13)] = 'ClickImage');
})(r || (r = {})),
    !(function (e) {
        (e.ActivityCard = 'activity_card'), (e.ActivityCardContextMenu = 'activity_card_context_menu'), (e.UserProfile = 'user_profile'), (e.UserProfileCardContextMenu = 'user_profile_card_context_menu'), (e.SimilarGames = 'similar_games'), (e.DevTools = 'dev_tools'), (e.Embed = 'embed'), (e.RtcPanel = 'rtc_panel');
    })(i || (i = {}));
let c = () => (0, a.Z)(),
    d = (e) => {
        let { viewId: t, source: n, gameName: r, applicationId: i, authorId: a } = e;
        return (
            s.default.track(l.rMx.GAME_PROFILE_OPEN, {
                view_id: t,
                source: n,
                game_name: r,
                application_id: i,
                author_id: a,
                request_id: o.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED)
            }),
            t
        );
    },
    _ = (e) => {
        let { viewId: t, gameName: n, applicationId: r, playedFriendIds: i, playedFriendsData: a, similarGames: c, officialGuildId: d } = e;
        s.default.track(l.rMx.GAME_PROFILE_CLOSE, {
            view_id: t,
            game_name: n,
            application_id: r,
            played_friend_ids: i,
            played_friends_data: a,
            similar_games: c,
            request_id: o.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED),
            official_guild_id: d
        });
    },
    E = (e) => {
        let { gameName: t, applicationId: n, action: r, recipientUserId: i, similarGameId: a, viewId: o, officialGuildId: u } = e;
        s.default.track(l.rMx.GAME_PROFILE_ACTION, {
            game_name: t,
            application_id: n,
            action: r,
            recipient_user_id: i,
            similar_game_id: a,
            view_id: o,
            official_guild_id: u
        });
    };
